import { Link } from 'react-router-dom'
import { useApp } from '../store/AppContext'
import { computeStats } from '../lib/stats'
import { avgScore, formatDuration, studyTimeToday, studyTimeTotal } from '../lib/progress'
import { ProgressBar } from '../components/ui'
import { CONVOCATORIA_INFO } from '../data/sources'
import { indicatorLabel } from '../data/indicators'

// ============================================================
// Dashboard: progreso, resultados recientes, tiempo de estudio,
// fortalezas, debilidades y recomendaciones.
// ============================================================

export default function Dashboard() {
  const { state } = useApp()
  const stats = computeStats(state)
  const avg = avgScore(state)
  const lastExams = [...state.exams].slice(-5).reverse()

  const strengths = Object.values(stats.indicatorStats)
    .filter((s) => s.estado === 'dominado')
    .sort((a, b) => (b.pct ?? 0) - (a.pct ?? 0))
  const weaknesses = Object.values(stats.indicatorStats)
    .filter((s) => s.estado === 'refuerzo')
    .sort((a, b) => (a.pct ?? 0) - (b.pct ?? 0))
  const pending = Object.values(stats.indicatorStats).filter((s) => s.estado === 'insuficiente')

  return (
    <div>
      <h1>Dashboard</h1>
      <p style={{ color: 'var(--ink-500)' }}>
        {CONVOCATORIA_INFO.entidad} · {CONVOCATORIA_INFO.nivel} ·{' '}
        {CONVOCATORIA_INFO.denominacion} · Empleo {CONVOCATORIA_INFO.empleo}
      </p>

      <div className="grid grid-4" style={{ marginBottom: 24 }}>
        <div className="kpi">
          <div className="kpi-value">{stats.lessonsPct}%</div>
          <div className="kpi-label">Lecciones completadas</div>
          <ProgressBar pct={stats.lessonsPct} small />
          <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)', marginTop: 6 }}>
            {stats.lessonsDone} de {stats.lessonsTotal} · {stats.modulesCompleted} módulos completos
          </div>
        </div>
        <div className="kpi">
          <div className="kpi-value">{avg === null ? '—' : `${avg}%`}</div>
          <div className="kpi-label">Promedio de aciertos</div>
          <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)', marginTop: 6 }}>
            {state.exams.length} ejercicios presentados
          </div>
        </div>
        <div className="kpi">
          <div className="kpi-value">{formatDuration(studyTimeTotal(state))}</div>
          <div className="kpi-label">Tiempo total de estudio</div>
          <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)', marginTop: 6 }}>
            Hoy: {formatDuration(studyTimeToday(state))}
          </div>
        </div>
        <div className="kpi">
          <div className="kpi-value">
            {stats.indicatorsEvaluated}/{stats.indicatorsCovered}
          </div>
          <div className="kpi-label">Indicadores con datos</div>
          <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)', marginTop: 6 }}>
            {stats.answeredQuestions} de {stats.totalQuestions} preguntas respondidas
          </div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Resultados recientes</h3>
          {lastExams.length === 0 ? (
            <p style={{ color: 'var(--ink-500)' }}>
              Aún no has presentado ejercicios.{' '}
              <Link to="/simulacros">Empieza con un simulacro</Link> o{' '}
              <Link to="/modo-estudio">practica en modo de estudio</Link>.
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {lastExams.map((e) => (
                <li
                  key={e.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 8,
                    padding: '10px 0',
                    borderBottom: '1px solid var(--line)',
                    fontSize: 'var(--fs-sm)',
                  }}
                >
                  <span>
                    {e.title}
                    <span style={{ color: 'var(--ink-500)' }}> · {new Date(e.finishedAt).toLocaleDateString('es-CO')}</span>
                  </span>
                  <strong style={{ color: e.score >= 80 ? 'var(--ok-700)' : e.score >= 60 ? 'var(--warn-700)' : 'var(--bad-700)' }}>
                    {e.score}%
                  </strong>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card">
          <h3>Recomendaciones para continuar</h3>
          {weaknesses.length > 0 ? (
            <ul>
              {weaknesses.slice(0, 3).map((w) => (
                <li key={w.id}>
                  Refuerza <Link to={`/modo-estudio?indicador=${w.id}`}>{indicatorLabel(w.id)}</Link>{' '}
                  ({w.pct}% de aciertos).
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: 'var(--ink-500)' }}>
              {pending.length > 0
                ? 'Presenta cuestionarios para que la plataforma pueda evaluar tu rendimiento por indicador.'
                : 'No hay indicadores en estado de refuerzo. ¡Sigue así!'}
            </p>
          )}
          {pending.length > 0 && (
            <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-500)' }}>
              {pending.length} indicadores aún no tienen suficientes respuestas para ser evaluados.{' '}
              <Link to="/examen-final">Presenta el examen final integral</Link> para medirlos todos.
            </p>
          )}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
            <Link to="/ruta" className="btn btn-primary">
              Continuar ruta de aprendizaje
            </Link>
            <Link to="/diagnostico" className="btn btn-outline">
              Ver diagnóstico completo
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Fortalezas</h3>
          {strengths.length === 0 ? (
            <p style={{ color: 'var(--ink-500)' }}>
              Todavía no hay indicadores dominados (se considera dominado con 80% o más de aciertos
              y al menos 3 respuestas).
            </p>
          ) : (
            <ul>
              {strengths.slice(0, 4).map((s) => (
                <li key={s.id}>
                  {indicatorLabel(s.id)} — <strong>{s.pct}%</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="card">
          <h3>Debilidades</h3>
          {weaknesses.length === 0 ? (
            <p style={{ color: 'var(--ink-500)' }}>
              No hay indicadores por debajo del 60% de aciertos. ¡Buen trabajo!
            </p>
          ) : (
            <ul>
              {weaknesses.slice(0, 4).map((s) => (
                <li key={s.id}>
                  {indicatorLabel(s.id)} — <strong style={{ color: 'var(--bad-700)' }}>{s.pct}%</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
