import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { QUESTIONS } from '../data/content'
import { INDICATORS } from '../data/indicators'
import QuizSession from '../components/QuizSession'
import type { Question } from '../data/types'

// ============================================================
// Examen final integral: evalúa todos los indicadores de la
// convocatoria con preguntas suficientes para cada uno.
// Duración configurable, preguntas y opciones aleatorizadas.
// Se presenta como simulacro propio de preparación: no se
// inventa la distribución oficial ni el puntaje de aprobación.
// ============================================================

function buildExam(): Question[] {
  const picks: Question[] = []
  const chosen = new Set<string>()
  for (const ind of INDICATORS) {
    const qs = QUESTIONS.filter((q) => q.indicator === ind.id)
    const list = [...qs]
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[list[i], list[j]] = [list[j], list[i]]
    }
    for (const q of list.slice(0, 3)) {
      picks.push(q)
      chosen.add(q.id)
    }
  }
  // Complementa con preguntas extra hasta ~90
  const extras = [...QUESTIONS]
  for (let i = extras.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[extras[i], extras[j]] = [extras[j], extras[i]]
  }
  for (const q of extras) {
    if (picks.length >= 90) break
    if (!chosen.has(q.id)) {
      picks.push(q)
      chosen.add(q.id)
    }
  }
  // Baraja el orden final
  for (let i = picks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[picks[i], picks[j]] = [picks[j], picks[i]]
  }
  return picks
}

export default function ExamenFinal() {
  const [minutes, setMinutes] = useState(120)
  const [exam, setExam] = useState<Question[] | null>(null)
  const [key, setKey] = useState(0)
  const [finished, setFinished] = useState(false)

  const coverage = useMemo(() => {
    return INDICATORS.filter((i) => QUESTIONS.some((q) => q.indicator === i.id)).length
  }, [])

  if (exam) {
    return (
      <QuizSession
        key={key}
        title="Examen final integral"
        type="examen"
        questions={exam}
        timeLimitSeconds={minutes * 60}
        shuffleOptions
        onExit={() => {
          setExam(null)
          setFinished(true)
          window.scrollTo(0, 0)
        }}
      />
    )
  }

  return (
    <div>
      <h1>Examen final integral</h1>
      <p>
        Evalúa los 26 indicadores de la convocatoria con preguntas conceptuales, casos prácticos,
        razonamiento analítico y competencias comportamentales. Preguntas y opciones aleatorizadas.
      </p>

      <div className="callout callout-aviso">
        <strong className="ct-title">Aviso importante</strong>
        Este examen es un <strong>simulacro propio de preparación</strong> de la plataforma. No
        reproduce la distribución oficial de preguntas ni el puntaje de aprobación de la
        convocatoria, porque esa información no proviene de una fuente oficial.
      </div>

      {finished ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <h2>¡Examen presentado!</h2>
          <p>
            Revisa ahora tu diagnóstico personalizado: resultados por indicador y módulo, errores
            repetidos y tu plan de estudio automático.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/diagnostico" className="btn btn-primary">
              Ver diagnóstico personalizado
            </Link>
            <button
              className="btn btn-outline"
              onClick={() => {
                setExam(buildExam())
                setKey((k) => k + 1)
                setFinished(false)
                window.scrollTo(0, 0)
              }}
            >
              Presentar otro examen
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="grid grid-3">
            <div className="kpi">
              <div className="kpi-value">~90</div>
              <div className="kpi-label">Preguntas (3+ por indicador)</div>
            </div>
            <div className="kpi">
              <div className="kpi-value">{coverage}/26</div>
              <div className="kpi-label">Indicadores con preguntas</div>
            </div>
            <div className="kpi">
              <div className="kpi-value">2 h</div>
              <div className="kpi-label">Duración sugerida</div>
            </div>
          </div>

          <label style={{ display: 'block', marginTop: 20 }}>
            <strong>Duración del examen</strong>
            <select className="search-input" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} style={{ maxWidth: 260 }}>
              <option value={60}>60 minutos</option>
              <option value={90}>90 minutos</option>
              <option value={120}>120 minutos</option>
              <option value={180}>180 minutos</option>
            </select>
          </label>

          <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                setExam(buildExam())
                setKey((k) => k + 1)
                window.scrollTo(0, 0)
              }}
            >
              Comenzar examen
            </button>
            <Link to="/diagnostico" className="btn btn-outline">
              Ver diagnóstico anterior
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
