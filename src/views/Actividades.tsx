import { Link } from 'react-router-dom'
import { ACTIVITIES, MODULE_BY_ID } from '../data/content'
import { useApp } from '../store/AppContext'
import { indicatorLabel } from '../data/indicators'

const KIND_LABELS: Record<string, string> = {
  relacionar: 'Relacionar conceptos',
  ordenar: 'Ordenar etapas',
  caso: 'Analizar caso hipotético',
  inconsistencias: 'Detectar inconsistencias',
  tabla: 'Interpretar tablas y datos',
  razonamiento: 'Razonamiento analítico',
  comportamental: 'Situación comportamental',
}

// ============================================================
// Lista de actividades de aprendizaje guiadas.
// ============================================================

export default function Actividades() {
  const { state } = useApp()

  return (
    <div>
      <h1>Actividades de aprendizaje guiadas</h1>
      <p>
        Ejercicios interactivos con procedimiento explicado paso a paso y retroalimentación
        después de cada actividad.
      </p>

      <div style={{ display: 'grid', gap: 12 }}>
        {ACTIVITIES.map((a) => {
          const done = state.activitiesDone.includes(a.id)
          const module = MODULE_BY_ID[a.moduleId]
          return (
            <Link
              key={a.id}
              to={`/actividad/${a.id}`}
              className="card"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, color: 'inherit', textDecoration: 'none' }}
            >
              <div>
                <strong style={{ color: 'var(--navy-800)' }}>
                  {done ? '✅' : '✏️'} {a.title}
                </strong>
                <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)', marginTop: 4 }}>
                  {KIND_LABELS[a.kind] ?? a.kind} · {module?.title} · {indicatorLabel(a.indicator)}
                </div>
              </div>
              <span className="btn btn-sm btn-outline">{done ? 'Repetir' : 'Abrir'}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
