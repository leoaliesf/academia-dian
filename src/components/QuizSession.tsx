import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Question } from '../data/types'
import type { ExamResult } from '../lib/storage'
import { useApp } from '../store/AppContext'

// ============================================================
// Motor genérico de sesiones de preguntas (cuestionarios,
// simulacros, examen final y modo de estudio).
// - Cronómetro opcional con autoentrega al agotarse
// - Navegación entre preguntas y marcado para revisar
// - Confirmación antes de entregar
// - Calificación y explicaciones
// - Opción de retroalimentación inmediata (modo de estudio)
// ============================================================

export interface QuizSessionProps {
  title: string
  type: ExamResult['type']
  questions: Question[]
  timeLimitSeconds?: number
  shuffleOptions?: boolean
  shuffleQuestions?: boolean
  /** Modo estudio: muestra la explicación justo después de responder */
  studyMode?: boolean
  onFinish?: (result: ExamResult) => void
  onExit?: () => void
}

interface RuntimeQ {
  q: Question
  options: string[]
  /** perm[j] = índice original de la opción mostrada en j */
  perm: number[]
  /** índice (mostrado) de la opción correcta */
  correctShown: number
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildRuntime(questions: Question[], shuffleOpts: boolean, shuffleQs: boolean): RuntimeQ[] {
  let list = [...questions]
  if (shuffleQs) list = shuffle(list)
  return list.map((q) => {
    if (!shuffleOpts) {
      return {
        q,
        options: [...q.options],
        perm: q.options.map((_, i) => i),
        correctShown: q.correct,
      }
    }
    const perm = shuffle(q.options.map((_, i) => i))
    const options = perm.map((i) => q.options[i])
    return { q, options, perm, correctShown: perm.indexOf(q.correct) }
  })
}

export default function QuizSession(props: QuizSessionProps) {
  const { dispatch } = useApp()
  const [runtime] = useState<RuntimeQ[]>(() =>
    buildRuntime(props.questions, props.shuffleOptions ?? true, !!props.shuffleQuestions),
  )
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number | null>>({})
  const [marked, setMarked] = useState<string[]>([])
  const [phase, setPhase] = useState<'confirm' | 'running' | 'result'>(
    props.timeLimitSeconds ? 'confirm' : 'running',
  )
  const [remaining, setRemaining] = useState(props.timeLimitSeconds ?? 0)
  const [result, setResult] = useState<ExamResult | null>(null)
  const [confirmingSubmit, setConfirmingSubmit] = useState(false)
  const startedAtRef = useRef(Date.now())

  const rq = runtime[current]

  // Cronómetro
  useEffect(() => {
    if (phase !== 'running' || !props.timeLimitSeconds) return
    const iv = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(iv)
          return 0
        }
        return r - 1
      })
    }, 1000)
    return () => clearInterval(iv)
  }, [phase, props.timeLimitSeconds])

  // Autoentrega al agotar el tiempo
  useEffect(() => {
    if (phase === 'running' && props.timeLimitSeconds && remaining === 0) {
      finish()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining, phase])

  const finish = useCallback(() => {
    const now = Date.now()
    let correct = 0
    let wrong = 0
    let unanswered = 0
    for (const r of runtime) {
      const chosen = answers[r.q.id]
      if (chosen === undefined || chosen === null) {
        unanswered += 1
      } else if (chosen === r.q.correct) {
        correct += 1
      } else {
        wrong += 1
      }
    }
    const total = runtime.length
    const score = total === 0 ? 0 : Math.round((correct / total) * 100)
    // answers ya guarda índices ORIGINALES (ver choose())
    const stored: Record<string, number | null> = {}
    for (const r of runtime) {
      const chosen = answers[r.q.id]
      stored[r.q.id] = chosen === undefined || chosen === null ? null : chosen
    }
    const res: ExamResult = {
      id: `ex-${now}-${Math.random().toString(36).slice(2, 8)}`,
      type: props.type,
      title: props.title,
      startedAt: startedAtRef.current,
      finishedAt: now,
      timeSeconds: Math.round((now - startedAtRef.current) / 1000),
      questionIds: runtime.map((r) => r.q.id),
      answers: stored,
      score,
      correctCount: correct,
      wrongCount: wrong,
      unanswered,
    }
    setResult(res)
    setPhase('result')
    dispatch({ type: 'exam/record', result: res })
    dispatch({ type: 'studyTime/add', seconds: res.timeSeconds })
    props.onFinish?.(res)
  }, [runtime, answers, dispatch, props])

  const answeredCount = useMemo(
    () => runtime.filter((r) => answers[r.q.id] !== undefined && answers[r.q.id] !== null).length,
    [runtime, answers],
  )

  const choose = (shownIndex: number) => {
    if (phase !== 'running') return
    const qid = rq.q.id
    const already = answers[qid] !== undefined && answers[qid] !== null
    if (props.studyMode && already) return
    const original = rq.perm[shownIndex] ?? shownIndex
    setAnswers((a) => ({ ...a, [qid]: original }))
  }

  const toggleMark = () => {
    const qid = rq.q.id
    setMarked((m) => (m.includes(qid) ? m.filter((x) => x !== qid) : [...m, qid]))
  }

  // ---------- Pantalla de confirmación ----------
  if (phase === 'confirm') {
    return (
      <div className="card" style={{ maxWidth: 640, margin: '0 auto' }}>
        <h2>{props.title}</h2>
        <p>
          Este ejercicio tiene <strong>{runtime.length} preguntas</strong> y un tiempo máximo de{' '}
          <strong>{Math.round((props.timeLimitSeconds ?? 0) / 60)} minutos</strong>.
        </p>
        <p>
          Puedes navegar entre preguntas y marcar las que quieras revisar. Al agotarse el tiempo,
          las respuestas se entregarán automáticamente.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => setPhase('running')}>
            Comenzar
          </button>
          {props.onExit && (
            <button className="btn btn-ghost" onClick={props.onExit}>
              Volver
            </button>
          )}
        </div>
      </div>
    )
  }

  // ---------- Pantalla de resultados ----------
  if (phase === 'result' && result) {
    return <ResultView result={result} runtime={runtime} title={props.title} onExit={props.onExit} />
  }

  // ---------- Sesión en curso ----------
  const mm = Math.floor(remaining / 60)
  const ss = String(remaining % 60).padStart(2, '0')
  const timerClass =
    remaining <= 30 ? 'timer timer-danger' : remaining <= 120 ? 'timer timer-warn' : 'timer'

  return (
    <div className="card" style={{ maxWidth: 860, margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: 16,
        }}
      >
        <strong>
          Pregunta {current + 1} de {runtime.length}
        </strong>
        {props.timeLimitSeconds ? (
          <span className={timerClass} role="timer" aria-label="Tiempo restante">
            ⏱ {mm}:{ss}
          </span>
        ) : (
          <span className="chip chip-navy">Sin límite de tiempo</span>
        )}
      </div>

      <div className="progress" style={{ marginBottom: 20 }}>
        <span style={{ width: `${((current + 1) / runtime.length) * 100}%` }} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 8,
          marginBottom: 12,
          flexWrap: 'wrap',
        }}
      >
        <button className="btn btn-sm btn-outline" onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0}>
          ← Anterior
        </button>
        <button className="btn btn-sm btn-outline" onClick={toggleMark} aria-pressed={marked.includes(rq.q.id)}>
          {marked.includes(rq.q.id) ? '★ Revisar (marcada)' : '☆ Marcar para revisar'}
        </button>
        <button className="btn btn-sm btn-outline" onClick={() => setCurrent((c) => Math.min(runtime.length - 1, c + 1))} disabled={current === runtime.length - 1}>
          Siguiente →
        </button>
      </div>

      <h3 style={{ fontSize: 'var(--fs-md)' }}>{rq.q.statement}</h3>
      {rq.q.kind && (
        <div style={{ marginBottom: 8 }}>
          <span className="chip">{rq.q.kind}</span>{' '}
          <span className="chip chip-navy">{rq.q.difficulty}</span>
        </div>
      )}

      <div style={{ display: 'grid', gap: 10, marginBottom: 20 }}>
        {rq.options.map((opt, i) => {
          const chosen = answers[rq.q.id]
          const isChosen = chosen !== undefined && chosen !== null && chosen === rq.perm[i]
          let cls = 'option-btn'
          if (props.studyMode && chosen !== undefined && chosen !== null) {
            if (i === rq.correctShown) cls += ' correct'
            else if (isChosen) cls += ' incorrect'
          } else if (isChosen) {
            cls += ' selected'
          }
          const disabled = props.studyMode && chosen !== undefined && chosen !== null
          return (
            <button key={i} className={cls} onClick={() => choose(i)} disabled={disabled} aria-pressed={isChosen}>
              <span className="opt-letter">{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>

      {props.studyMode &&
        answers[rq.q.id] !== undefined &&
        answers[rq.q.id] !== null && (
          <div className="card" style={{ background: 'var(--teal-50)', borderColor: 'var(--teal-400)' }}>
            <strong>
              {answers[rq.q.id] === rq.q.correct ? '✅ ¡Correcto!' : '❌ Incorrecto'}
            </strong>
            <p style={{ margin: '8px 0 0' }}>{rq.q.justification}</p>
            {answers[rq.q.id] !== rq.q.correct && (
              <p style={{ margin: '8px 0 0', fontSize: 'var(--fs-sm)' }}>
                <em>{rq.q.wrong[answers[rq.q.id] as number] || ''}</em>
              </p>
            )}
          </div>
        )}

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (props.studyMode) {
              finish()
            } else {
              setConfirmingSubmit(true)
            }
          }}
          disabled={!props.studyMode && answeredCount < runtime.length}
        >
          {props.studyMode ? 'Terminar sesión' : 'Entregar respuestas'}
        </button>
        <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-500)' }}>
          Respondidas: {answeredCount} / {runtime.length}
        </span>
      </div>

      {confirmingSubmit && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Confirmar entrega"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(8,26,51,0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            padding: 16,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setConfirmingSubmit(false)
          }}
        >
          <div className="card" style={{ maxWidth: 440, width: '100%' }}>
            <h3>¿Confirmas la entrega?</h3>
            <p style={{ fontSize: 'var(--fs-sm)' }}>
              Has respondido {answeredCount} de {runtime.length} preguntas
              {marked.length > 0 && <> y tienes {marked.length} marcada{marked.length > 1 ? 's' : ''} para revisar</>}
              . Una vez entregues, no podrás cambiar tus respuestas.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={finish}>
                Sí, entregar
              </button>
              <button className="btn btn-ghost" onClick={() => setConfirmingSubmit(false)}>
                Seguir respondiendo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ResultView({
  result,
  runtime,
  title,
  onExit,
}: {
  result: ExamResult
  runtime: RuntimeQ[]
  title: string
  onExit?: () => void
}) {
  const [filter, setFilter] = useState<'todas' | 'falladas'>('todas')
  const shown = runtime.filter((r) => {
    if (filter === 'falladas') {
      const c = result.answers[r.q.id]
      return c === undefined || c === null || c !== r.q.correct
    }
    return true
  })

  return (
    <div style={{ maxWidth: 860, margin: '0 auto' }}>
      <div className="card">
        <h2>Resultado — {title}</h2>
        <div className="grid grid-4" style={{ marginBottom: 16 }}>
          <div className="kpi">
            <div className="kpi-value">{result.score}%</div>
            <div className="kpi-label">Calificación</div>
          </div>
          <div className="kpi">
            <div className="kpi-value" style={{ color: 'var(--ok-700)' }}>
              {result.correctCount}
            </div>
            <div className="kpi-label">Correctas</div>
          </div>
          <div className="kpi">
            <div className="kpi-value" style={{ color: 'var(--bad-700)' }}>
              {result.wrongCount}
            </div>
            <div className="kpi-label">Incorrectas</div>
          </div>
          <div className="kpi">
            <div className="kpi-value" style={{ color: 'var(--ink-500)' }}>
              {result.unanswered}
            </div>
            <div className="kpi-label">Sin responder</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-outline" onClick={() => setFilter(filter === 'todas' ? 'falladas' : 'todas')}>
            {filter === 'todas' ? 'Ver solo errores' : 'Ver todas'}
          </button>
          {onExit && (
            <button className="btn btn-primary" onClick={onExit}>
              Continuar
            </button>
          )}
        </div>
      </div>

      {shown.map((r, i) => {
        const chosen = result.answers[r.q.id]
        const isCorrect = chosen !== undefined && chosen !== null && chosen === r.q.correct
        const chosenShown = chosen === undefined || chosen === null ? -1 : r.perm.indexOf(chosen)
        return (
          <div className="card" key={r.q.id}>
            <h3 style={{ fontSize: 'var(--fs-md)' }}>
              {i + 1}. {r.q.statement}
            </h3>
            <div style={{ display: 'grid', gap: 8, margin: '12px 0' }}>
              {r.options.map((opt, j) => {
                let cls = 'option-btn'
                if (j === r.correctShown) cls += ' correct'
                else if (j === chosenShown) cls += ' incorrect'
                return (
                  <div key={j} className={cls} style={{ cursor: 'default' }}>
                    <span className="opt-letter">{String.fromCharCode(65 + j)}.</span>
                    <span>{opt}</span>
                  </div>
                )
              })}
            </div>
            {chosen === undefined || chosen === null ? (
              <p className="chip chip-warn">Sin responder</p>
            ) : isCorrect ? (
              <p className="chip chip-ok">✅ Respondida correctamente</p>
            ) : (
              <p className="chip chip-bad">❌ Respondida incorrectamente</p>
            )}
            <p style={{ marginTop: 12 }}>
              <strong>Justificación:</strong> {r.q.justification}
            </p>
            {!isCorrect && (
              <p style={{ fontSize: 'var(--fs-sm)' }}>
                <strong>¿Por qué fallaste?</strong> {r.q.wrong[r.perm.indexOf(chosen ?? 0)] || 'Revisa la justificación anterior.'}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
