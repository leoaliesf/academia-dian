import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MODULES, QUESTIONS, QUESTION_BY_ID } from '../data/content'
import { INDICATORS, indicatorLabel } from '../data/indicators'
import { useApp } from '../store/AppContext'
import { DataTable } from '../components/ui'

// ============================================================
// Banco de preguntas tipo ABCD: explorar, filtrar por
// indicador/módulo/tema/dificultad, favoritas y notas.
// ============================================================

export default function Banco() {
  const location = useLocation()
  const { state, dispatch } = useApp()
  const initialId = (location.state as { questionId?: string } | null)?.questionId

  const [indicator, setIndicator] = useState('todos')
  const [moduleId, setModuleId] = useState('todos')
  const [difficulty, setDifficulty] = useState('todas')
  const [onlyFavs, setOnlyFavs] = useState(false)
  const [onlyFailed, setOnlyFailed] = useState(false)
  const [openId, setOpenId] = useState<string | null>(initialId ?? null)

  const failedIds = useMemo(() => {
    const fails: Record<string, number> = {}
    for (const ex of state.exams) {
      for (const qid of ex.questionIds) {
        const c = ex.answers[qid]
        if (c === undefined || c === null) continue
        const q = QUESTION_BY_ID[qid]
        if (q && c !== q.correct) fails[qid] = (fails[qid] ?? 0) + 1
      }
    }
    return fails
  }, [state.exams])

  const filtered = useMemo(() => {
    return QUESTIONS.filter((q) => {
      if (indicator !== 'todos' && q.indicator !== indicator) return false
      if (moduleId !== 'todos' && q.moduleId !== moduleId) return false
      if (difficulty !== 'todas' && q.difficulty !== difficulty) return false
      if (onlyFavs && !state.favorites.includes(q.id)) return false
      if (onlyFailed && !(q.id in failedIds)) return false
      return true
    })
  }, [indicator, moduleId, difficulty, onlyFavs, onlyFailed, state.favorites, failedIds])

  return (
    <div>
      <h1>Banco de preguntas</h1>
      <p>
        Preguntas originales tipo ABCD organizadas por indicador, módulo, tema y dificultad. Cada
        una incluye justificación de la respuesta correcta y explicación de por qué las demás
        opciones son incorrectas.
      </p>

      <div className="card">
        <div className="grid grid-4">
          <label>
            <strong style={{ fontSize: 'var(--fs-sm)' }}>Indicador</strong>
            <select className="search-input" value={indicator} onChange={(e) => setIndicator(e.target.value)}>
              <option value="todos">Todos</option>
              {INDICATORS.map((i) => (
                <option key={i.id} value={i.id}>
                  {indicatorLabel(i.id)}
                </option>
              ))}
            </select>
          </label>
          <label>
            <strong style={{ fontSize: 'var(--fs-sm)' }}>Módulo</strong>
            <select className="search-input" value={moduleId} onChange={(e) => setModuleId(e.target.value)}>
              <option value="todos">Todos</option>
              {MODULES.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            <strong style={{ fontSize: 'var(--fs-sm)' }}>Dificultad</strong>
            <select className="search-input" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="todas">Todas</option>
              <option value="basica">Básica</option>
              <option value="intermedia">Intermedia</option>
              <option value="avanzada">Avanzada</option>
            </select>
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'end' }}>
            <label style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 'var(--fs-sm)' }}>
              <input type="checkbox" checked={onlyFavs} onChange={(e) => setOnlyFavs(e.target.checked)} />
              ★ Solo favoritas
            </label>
            <label style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 'var(--fs-sm)' }}>
              <input type="checkbox" checked={onlyFailed} onChange={(e) => setOnlyFailed(e.target.checked)} />
              Solo falladas antes
            </label>
          </div>
        </div>
        <p style={{ marginTop: 12, fontSize: 'var(--fs-sm)' }}>
          Mostrando <strong>{filtered.length}</strong> de {QUESTIONS.length} preguntas.
        </p>
      </div>

      {filtered.slice(0, 50).map((q) => {
        const open = openId === q.id
        const isFav = state.favorites.includes(q.id)
        const note = state.notes[q.id]
        const fails = failedIds[q.id] ?? 0
        return (
          <div className="card" key={q.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="chip chip-teal">{indicatorLabel(q.indicator)}</span>
                <span className="chip">{q.difficulty}</span>
                <span className="chip chip-navy">{q.kind}</span>
                {q.source && <span className="chip">Fuente: {q.source}</span>}
                {fails > 0 && <span className="chip chip-bad">fallada ×{fails}</span>}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  className="btn btn-sm btn-ghost"
                  onClick={() => dispatch({ type: 'favorite/toggle', id: q.id })}
                  aria-pressed={isFav}
                  aria-label="Marcar como favorita"
                >
                  {isFav ? '★' : '☆'}
                </button>
                <button className="btn btn-sm btn-outline" onClick={() => setOpenId(open ? null : q.id)}>
                  {open ? 'Ocultar' : 'Ver pregunta'}
                </button>
              </div>
            </div>

            {open ? (
              <div style={{ marginTop: 12 }}>
                <p>
                  <strong>{q.statement}</strong>
                </p>
                <DataTable
                  data={{
                    headers: ['Opción', 'Respuesta'],
                    rows: q.options.map((o, i) => [String.fromCharCode(65 + i), o]),
                  }}
                />
                <details className="detail">
                  <summary>Ver respuesta correcta y justificación</summary>
                  <div className="detail-body">
                    <p>
                      <strong>Respuesta correcta: {String.fromCharCode(65 + q.correct)}.</strong>{' '}
                      {q.options[q.correct]}
                    </p>
                    <p>{q.justification}</p>
                    <h4>¿Por qué las demás opciones son incorrectas?</h4>
                    <ul>
                      {q.options.map((_, i) =>
                        i === q.correct ? null : (
                          <li key={i}>
                            <strong>{String.fromCharCode(65 + i)}.</strong> {q.wrong[i]}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </details>
                <label style={{ display: 'block', marginTop: 12 }}>
                  <strong style={{ fontSize: 'var(--fs-sm)' }}>Tu nota sobre esta pregunta:</strong>
                  <textarea
                    className="search-input"
                    rows={2}
                    value={note ?? ''}
                    onChange={(e) => dispatch({ type: 'note/set', id: q.id, text: e.target.value })}
                    placeholder="Escribe aquí lo que quieras recordar…"
                    style={{ marginTop: 6, resize: 'vertical' }}
                  />
                </label>
              </div>
            ) : (
              <p style={{ margin: '12px 0 0', fontSize: 'var(--fs-sm)' }}>{q.statement}</p>
            )}
          </div>
        )
      })}

      {filtered.length > 50 && (
        <p style={{ color: 'var(--ink-500)', fontSize: 'var(--fs-sm)' }}>
          Se muestran las primeras 50 preguntas. Usa los filtros para acotar la lista.
        </p>
      )}
    </div>
  )
}
