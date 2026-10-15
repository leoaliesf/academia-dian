import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MODULES, ACTIVITY_BY_ID, FLASHCARDS, QUESTIONS } from '../data/content'
import { useApp } from '../store/AppContext'
import { SectionView, Callout, NormStatusChip } from '../components/ui'
import MindMap from '../components/MindMap'
import QuizSession from '../components/QuizSession'
import FlashcardDeck from '../components/FlashcardDeck'
import { indicatorLabel } from '../data/indicators'
import ErrorPage from './ErrorPage'

// ============================================================
// Vista de lección: objetivos, explicación, resumen, conceptos
// para memorizar, cuadros, ejemplos, errores frecuentes, normas,
// fuentes, mentefacto, fichas, actividad guiada y cuestionario.
// ============================================================

export default function Leccion() {
  const { lessonId } = useParams()
  const { state, dispatch } = useApp()
  const [showQuiz, setShowQuiz] = useState(false)

  const module = MODULES.find((m) => m.lessons.some((l) => l.id === lessonId))
  const lesson = module?.lessons.find((l) => l.id === lessonId)
  const quizQuestions = useMemo(() => {
    if (!lesson) return []
    // Cuestionario final: preguntas de los indicadores de la lección;
    // si son pocas, se complementan con el resto del módulo.
    const byIndicator = QUESTIONS.filter(
      (q) => q.moduleId === lesson.moduleId && lesson.indicators.includes(q.indicator),
    )
    if (byIndicator.length >= 5) return byIndicator
    const byModule = QUESTIONS.filter((q) => q.moduleId === lesson.moduleId)
    const extra = byModule.filter((q) => !byIndicator.includes(q))
    return [...byIndicator, ...extra].slice(0, 10)
  }, [lesson])

  useEffect(() => {
    if (lessonId) dispatch({ type: 'lesson/start', id: lessonId })
  }, [lessonId, dispatch])

  if (!lesson || !module) return <ErrorPage />

  const done = state.lessonsDone.includes(lesson.id)
  const activity = lesson.activityId ? ACTIVITY_BY_ID[lesson.activityId] : undefined
  const cards = FLASHCARDS.filter(
    (c) => c.moduleId === module.id && lesson.indicators.includes(c.indicator),
  )

  return (
    <div>
      <p>
        <Link to={`/ruta/${module.id}`}>← {module.title}</Link>
      </p>
      <h1>{lesson.title}</h1>

      {showQuiz && quizQuestions.length > 0 ? (
        <QuizSession
          title={`Cuestionario — ${lesson.title}`}
          type="cuestionario"
          questions={quizQuestions}
          timeLimitSeconds={Math.min(900, quizQuestions.length * 60)}
          onFinish={() => {
            dispatch({ type: 'lesson/done', id: lesson.id })
          }}
          onExit={() => {
            setShowQuiz(false)
            window.scrollTo(0, 0)
          }}
        />
      ) : (
        <>
          <div className="card">
            <h2>Objetivos de aprendizaje</h2>
            <ul>
              {lesson.objectives.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
              {lesson.indicators.map((ind) => (
                <span key={ind} className="chip chip-teal">
                  {indicatorLabel(ind)}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h2>Explicación</h2>
            {lesson.sections.map((s, i) => (
              <SectionView key={i} section={s} />
            ))}
          </div>

          {lesson.examples.length > 0 && (
            <div className="card">
              <h2>Ejemplos prácticos</h2>
              {lesson.examples.map((s, i) => (
                <SectionView key={i} section={s} />
              ))}
            </div>
          )}

          {lesson.summary.length > 0 && (
            <div className="card">
              <h2>Resumen de los puntos más importantes</h2>
              <ul>
                {lesson.summary.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          {lesson.memorize.length > 0 && (
            <div className="card">
              <h2>Conceptos que debes memorizar</h2>
              <ul>
                {lesson.memorize.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
              {cards.length > 0 && (
                <div style={{ marginTop: 16 }}>
                  <h3>Fichas de memoria de esta lección</h3>
                  <FlashcardDeck cards={cards} compact />
                </div>
              )}
            </div>
          )}

          {lesson.commonMistakes.length > 0 && (
            <div className="card">
              <h2>Errores frecuentes</h2>
              {lesson.commonMistakes.map((cm, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <Callout type="error" text={cm.mistake} />
                  <p style={{ fontSize: 'var(--fs-sm)' }}>
                    <strong>Lo correcto:</strong> {cm.correction}
                  </p>
                </div>
              ))}
            </div>
          )}

          {lesson.norms.length > 0 && (
            <div className="card">
              <h2>Normas y artículos pertinentes</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Norma</th>
                    <th>Estado de verificación</th>
                  </tr>
                </thead>
                <tbody>
                  {lesson.norms.map((n, i) => (
                    <tr key={i}>
                      <td>
                        <strong>{n.norm}</strong>
                        {n.article ? ` — ${n.article}` : ''}
                        {n.note && (
                          <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)' }}>{n.note}</div>
                        )}
                      </td>
                      <td>
                        <NormStatusChip status={n.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)', marginTop: 8 }}>
                La vigencia se verificó el 2026-10-15 cuando fue posible. Las normas marcadas como
                «pendiente de validar» no pudieron confirmarse en fuentes oficiales.
              </p>
            </div>
          )}

          {lesson.links.length > 0 && (
            <div className="card">
              <h2>Fuentes oficiales</h2>
              <ul>
                {lesson.links.map((l, i) => (
                  <li key={i}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="card">
            <h2>Mentefacto</h2>
            <div className="mindmap-wrap">
              <MindMap root={lesson.mindmap.root} branches={lesson.mindmap.branches} />
            </div>
            <details className="detail" style={{ marginTop: 12 }}>
              <summary>Explicación textual del mapa (accesible)</summary>
              <div className="detail-body">
                <p>{lesson.mindmapText}</p>
              </div>
            </details>
          </div>

          <div className="card">
            <h2>Páginas de origen</h2>
            <ul style={{ fontSize: 'var(--fs-sm)' }}>
              {lesson.source.map((s, i) => (
                <li key={i}>
                  <strong>{s.doc === 'taci' ? 'Fiscalizacion_TACI Curso Completo' : 'MATERIAL TOTAL DIAN - FISCALIZACION'}</strong>{' '}
                  — {s.pages}
                  {s.note && <em style={{ color: 'var(--ink-500)' }}> · {s.note}</em>}
                </li>
              ))}
            </ul>
          </div>

          {activity && (
            <div className="card" style={{ borderLeft: '5px solid var(--teal-500)' }}>
              <h2>Actividad guiada</h2>
              <p>{activity.title}</p>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-700)' }}>{activity.instructions}</p>
              <Link to={`/actividad/${activity.id}`} className="btn btn-teal">
                Realizar actividad
              </Link>
            </div>
          )}

          <div className="card" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                setShowQuiz(true)
                window.scrollTo(0, 0)
              }}
              disabled={quizQuestions.length === 0}
            >
              {done ? 'Repetir cuestionario final' : 'Presentar cuestionario final'}
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => dispatch({ type: 'lesson/done', id: lesson.id })}
            >
              {done ? '✓ Lección completada' : 'Marcar lección como completada'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
