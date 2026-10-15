import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ACTIVITY_BY_ID } from '../data/content'
import { useApp } from '../store/AppContext'
import { DataTable, Callout } from '../components/ui'
import ErrorPage from './ErrorPage'

// ============================================================
// Motor de actividades guiadas: relacionar, ordenar, casos,
// inconsistencias, tablas, razonamiento y competencias
// comportamentales, con retroalimentación paso a paso.
// ============================================================

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ActividadRunner() {
  const { activityId } = useParams()
  const { state, dispatch } = useApp()
  const activity = activityId ? ACTIVITY_BY_ID[activityId] : undefined

  const [finished, setFinished] = useState(false)
  const [results, setResults] = useState<{ ok: boolean; detail: string }[]>([])

  // Estados específicos por tipo
  const shuffledB = useMemo(
    () => (activity?.kind === 'relacionar' && activity.pairs ? shuffle(activity.pairs.map((p) => p.b)) : []),
    [activity],
  )
  const [matches, setMatches] = useState<Record<string, string>>({})
  const shuffledOrder = useMemo(
    () => (activity?.kind === 'ordenar' && activity.orderItems ? shuffle(activity.orderItems) : []),
    [activity],
  )
  const [ordered, setOrdered] = useState<string[]>(shuffledOrder)
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, number>>({})
  const [verdicts, setVerdicts] = useState<Record<number, boolean>>({})

  if (!activity) return <ErrorPage />

  const isCaseLike = activity.kind === 'caso' || activity.kind === 'tabla' || activity.kind === 'razonamiento'

  const verify = () => {
    const res: { ok: boolean; detail: string }[] = []
    let allOk = true
    if (activity.kind === 'relacionar' && activity.pairs) {
      for (const p of activity.pairs) {
        const chosen = matches[p.a]
        const ok = chosen === p.b
        if (!ok) allOk = false
        res.push({ ok, detail: `${p.a} → ${chosen ?? 'sin seleccionar'}${ok ? ' ✓' : ` (era: ${p.b})`}` })
      }
    } else if (activity.kind === 'ordenar' && activity.orderItems) {
      const ok = ordered.join('|') === activity.orderItems.join('|')
      if (!ok) allOk = false
      res.push({
        ok,
        detail: ok
          ? 'El orden es correcto.'
          : `El orden correcto es: ${activity.orderItems.join(' → ')}`,
      })
    } else if (activity.kind === 'inconsistencias' && activity.items) {
      for (let i = 0; i < activity.items.length; i++) {
        const it = activity.items[i]
        const verdict = verdicts[i]
        const ok = verdict === it.inconsistent
        if (verdict === undefined) {
          allOk = false
          res.push({ ok: false, detail: `«${it.text}» — sin clasificar.` })
        } else {
          if (!ok) allOk = false
          res.push({ ok, detail: `«${it.text}» — ${it.why}` })
        }
      }
    } else if (activity.kind === 'comportamental' && activity.questions) {
      // questions con options {text, best, why} en forma de ActivityQuestion
      for (let i = 0; i < activity.questions.length; i++) {
        const q = activity.questions[i]
        const chosen = mcqAnswers[i]
        const ok = chosen === q.correct
        if (chosen === undefined) {
          allOk = false
          res.push({ ok: false, detail: `Pregunta ${i + 1}: sin responder.` })
        } else {
          if (!ok) allOk = false
          res.push({ ok, detail: `Pregunta ${i + 1}: ${q.why}` })
        }
      }
    } else if (isCaseLike && activity.questions) {
      for (let i = 0; i < activity.questions.length; i++) {
        const q = activity.questions[i]
        const chosen = mcqAnswers[i]
        const ok = chosen === q.correct
        if (chosen === undefined) {
          allOk = false
          res.push({ ok: false, detail: `Pregunta ${i + 1}: sin responder.` })
        } else {
          if (!ok) allOk = false
          res.push({ ok, detail: `Pregunta ${i + 1}: ${q.why}` })
        }
      }
    }
    setResults(res)
    setFinished(true)
    if (allOk) {
      dispatch({ type: 'activity/done', id: activity.id })
    }
  }

  return (
    <div>
      <p>
        <Link to="/actividades">← Actividades</Link>
      </p>
      <h1>{activity.title}</h1>
      <div className="callout callout-importante">
        <strong className="ct-title">Instrucciones</strong>
        {activity.instructions}
      </div>

      {activity.scenario && (
        <div className="card">
          <h3>Caso / contexto</h3>
          <p>{activity.scenario}</p>
          {activity.table && <DataTable data={activity.table} />}
        </div>
      )}

      {/* ---------- Relacionar ---------- */}
      {activity.kind === 'relacionar' && activity.pairs && (
        <div className="card">
          <h3>Relaciona cada concepto con su definición</h3>
          <div style={{ display: 'grid', gap: 10 }}>
            {activity.pairs.map((p, i) => (
              <div key={i} style={{ display: 'grid', gap: 4 }}>
                <strong style={{ fontSize: 'var(--fs-sm)' }}>{p.a}</strong>
                <select
                  value={matches[p.a] ?? ''}
                  onChange={(e) => setMatches((m) => ({ ...m, [p.a]: e.target.value }))}
                  disabled={finished}
                  aria-label={`Definición de: ${p.a}`}
                >
                  <option value="">— Selecciona —</option>
                  {shuffledB.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------- Ordenar ---------- */}
      {activity.kind === 'ordenar' && (
        <div className="card">
          <h3>Ordena las etapas</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            {ordered.map((item, i) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  border: '1px solid var(--line)',
                  borderRadius: 8,
                  padding: '8px 12px',
                  background: '#fff',
                }}
              >
                <strong style={{ minWidth: 28 }}>{i + 1}.</strong>
                <span style={{ flex: 1, fontSize: 'var(--fs-sm)' }}>{item}</span>
                <button
                  className="btn btn-sm btn-outline"
                  disabled={i === 0 || finished}
                  onClick={() =>
                    setOrdered((o) => {
                      const n = [...o]
                      ;[n[i - 1], n[i]] = [n[i], n[i - 1]]
                      return n
                    })
                  }
                  aria-label={`Subir ${item}`}
                >
                  ▲
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  disabled={i === ordered.length - 1 || finished}
                  onClick={() =>
                    setOrdered((o) => {
                      const n = [...o]
                      ;[n[i + 1], n[i]] = [n[i], n[i + 1]]
                      return n
                    })
                  }
                  aria-label={`Bajar ${item}`}
                >
                  ▼
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------- Inconsistencias ---------- */}
      {activity.kind === 'inconsistencias' && activity.items && (
        <div className="card">
          <h3>Marca cada afirmación como consistente o inconsistente</h3>
          <div style={{ display: 'grid', gap: 10 }}>
            {activity.items.map((it, i) => (
              <div key={i} style={{ border: '1px solid var(--line)', borderRadius: 8, padding: 12 }}>
                <p style={{ margin: '0 0 8px', fontSize: 'var(--fs-sm)' }}>{it.text}</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    className={`btn btn-sm ${verdicts[i] === true ? 'btn-primary' : 'btn-outline'}`}
                    disabled={finished}
                    onClick={() => setVerdicts((v) => ({ ...v, [i]: true }))}
                  >
                    Inconsistente
                  </button>
                  <button
                    className={`btn btn-sm ${verdicts[i] === false ? 'btn-primary' : 'btn-outline'}`}
                    disabled={finished}
                    onClick={() => setVerdicts((v) => ({ ...v, [i]: false }))}
                  >
                    Consistente
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------- Caso / tabla / razonamiento / comportamental ---------- */}
      {(isCaseLike || activity.kind === 'comportamental') && activity.questions && (
        <div className="card">
          <h3>Preguntas</h3>
          <div style={{ display: 'grid', gap: 20 }}>
            {activity.questions.map((q, i) => (
              <div key={i}>
                <p>
                  <strong>
                    {i + 1}. {q.q}
                  </strong>
                </p>
                <div style={{ display: 'grid', gap: 8 }}>
                  {q.options.map((opt, j) => {
                    const chosen = mcqAnswers[i]
                    let cls = 'option-btn'
                    if (finished) {
                      if (j === q.correct) cls += ' correct'
                      else if (chosen === j) cls += ' incorrect'
                    } else if (chosen === j) {
                      cls += ' selected'
                    }
                    return (
                      <button
                        key={j}
                        className={cls}
                        disabled={finished}
                        onClick={() => setMcqAnswers((a) => ({ ...a, [i]: j }))}
                      >
                        <span className="opt-letter">{String.fromCharCode(65 + j)}.</span>
                        <span>{opt}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!finished && (
        <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
          <button className="btn btn-primary" onClick={verify}>
            Verificar actividad
          </button>
        </div>
      )}

      {finished && (
        <div className="card" style={{ marginTop: 20 }}>
          <h3>Retroalimentación</h3>
          <ul>
            {results.map((r, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                {r.ok ? '✅' : '❌'} {r.detail}
              </li>
            ))}
          </ul>
          <Callout
            type={results.every((r) => r.ok) ? 'importante' : 'error'}
            text={
              results.every((r) => r.ok)
                ? '¡Actividad completada correctamente!'
                : 'Repasa la explicación y vuelve a intentar la actividad.'
            }
          />
          <h3>Procedimiento explicado paso a paso</h3>
          <p>{activity.explanation}</p>
          <button
            className="btn btn-outline"
            onClick={() => {
              setFinished(false)
              setResults([])
              setMatches({})
              setMcqAnswers({})
              setVerdicts({})
              setOrdered(shuffle(activity.orderItems ?? []))
            }}
          >
            Reiniciar actividad
          </button>
        </div>
      )}

      {state.activitiesDone.includes(activity.id) && (
        <p className="chip chip-ok" style={{ marginTop: 12 }}>
          ✓ Actividad completada anteriormente
        </p>
      )}
    </div>
  )
}
