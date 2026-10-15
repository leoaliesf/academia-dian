import { Link, useParams } from 'react-router-dom'
import { MODULE_BY_ID } from '../data/content'
import { useApp } from '../store/AppContext'
import { ProgressBar } from '../components/ui'
import { indicatorLabel } from '../data/indicators'
import ErrorPage from './ErrorPage'

// ============================================================
// Vista de un módulo: lista de lecciones y acceso a
// actividades, fichas y cuestionario del módulo.
// ============================================================

export default function Modulo() {
  const { moduleId } = useParams()
  const { state } = useApp()
  const module = moduleId ? MODULE_BY_ID[moduleId] : undefined
  if (!module) return <ErrorPage />

  const doneCount = module.lessons.filter((l) => state.lessonsDone.includes(l.id)).length
  const pct = module.lessons.length ? Math.round((doneCount / module.lessons.length) * 100) : 0

  return (
    <div>
      <p>
        <Link to="/ruta">← Ruta de aprendizaje</Link>
      </p>
      <h1>{module.title}</h1>
      <p>{module.description}</p>

      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <strong>Progreso del módulo</strong>
          <span>
            {doneCount}/{module.lessons.length} lecciones ({pct}%)
          </span>
        </div>
        <ProgressBar pct={pct} />
        <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {module.indicators.map((ind) => (
            <span key={ind} className="chip chip-teal">
              {indicatorLabel(ind)}
            </span>
          ))}
        </div>
      </div>

      <h2>Lecciones</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {module.lessons.map((lesson) => {
          const done = state.lessonsDone.includes(lesson.id)
          const started = state.lessonsInProgress.includes(lesson.id)
          return (
            <Link
              key={lesson.id}
              to={`/leccion/${lesson.id}`}
              className="card"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, color: 'inherit', textDecoration: 'none' }}
            >
              <div>
                <strong style={{ color: 'var(--navy-800)' }}>
                  {done ? '✅' : started ? '📖' : '📘'} {lesson.title}
                </strong>
                <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)', marginTop: 4 }}>
                  {lesson.indicators.map((i) => indicatorLabel(i)).join(' · ')}
                </div>
              </div>
              <span className="btn btn-sm btn-outline">Abrir</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
