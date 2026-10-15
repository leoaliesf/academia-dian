import { Link } from 'react-router-dom'
import { MODULES } from '../data/content'
import { useApp } from '../store/AppContext'
import { ProgressBar } from '../components/ui'
import { computeStats } from '../lib/stats'
import { indicatorLabel } from '../data/indicators'

// ============================================================
// Ruta de aprendizaje: módulos progresivos.
// ============================================================

export default function Ruta() {
  const { state } = useApp()
  const stats = computeStats(state)

  return (
    <div>
      <h1>Ruta de aprendizaje</h1>
      <p>
        Quince módulos progresivos que cubren los 26 indicadores de la convocatoria DIAN — Gestor
        I. Avanza en orden o salta al módulo que necesites reforzar.
      </p>

      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <strong>Progreso general</strong>
          <span>
            {stats.lessonsDone} / {stats.lessonsTotal} lecciones ({stats.lessonsPct}%)
          </span>
        </div>
        <ProgressBar pct={stats.lessonsPct} />
      </div>

      <div style={{ display: 'grid', gap: 16 }}>
        {MODULES.map((m, i) => {
          const ms = stats.moduleStats.find((x) => x.moduleId === m.id)
          const done = ms?.pct === 100 && ms.lessonsTotal > 0
          return (
            <Link
              key={m.id}
              to={`/ruta/${m.id}`}
              className="card"
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                borderLeft: done ? '5px solid var(--teal-500)' : '5px solid var(--navy-100)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 12,
                  flexWrap: 'wrap',
                }}
              >
                <h3 style={{ margin: 0 }}>
                  {i + 1}. {m.title}
                  {done && <span className="chip chip-ok" style={{ marginLeft: 10 }}>✓ Completado</span>}
                </h3>
                <span style={{ color: 'var(--ink-500)', fontSize: 'var(--fs-sm)' }}>
                  {ms?.lessonsDone ?? 0}/{m.lessons.length} lecciones
                </span>
              </div>
              <p style={{ margin: '8px 0 12px', color: 'var(--ink-700)' }}>{m.description}</p>
              <ProgressBar pct={ms?.pct ?? 0} small />
              <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {m.indicators.map((ind) => (
                  <span key={ind} className="chip chip-navy">
                    {indicatorLabel(ind)}
                  </span>
                ))}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
