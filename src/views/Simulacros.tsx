import { useMemo, useState } from 'react'
import { MODULES, QUESTIONS } from '../data/content'
import QuizSession from '../components/QuizSession'

// ============================================================
// Simulacros configurables: temas, cantidad de preguntas,
// dificultad y tiempo, con cronómetro, navegación, marcado
// para revisar y confirmación antes de entregar.
// ============================================================

export default function Simulacros() {
  const [moduleIds, setModuleIds] = useState<string[]>([])
  const [count, setCount] = useState(20)
  const [difficulty, setDifficulty] = useState('todas')
  const [minutes, setMinutes] = useState(30)
  const [sessionKey, setSessionKey] = useState(0)
  const [running, setRunning] = useState(false)

  const pool = useMemo(() => {
    return QUESTIONS.filter((q) => {
      if (moduleIds.length > 0 && !moduleIds.includes(q.moduleId)) return false
      if (difficulty !== 'todas' && q.difficulty !== difficulty) return false
      return true
    })
  }, [moduleIds, difficulty])

  const questions = useMemo(() => {
    const list = [...pool]
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[list[i], list[j]] = [list[j], list[i]]
    }
    return list.slice(0, count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionKey, pool, count])

  if (running && questions.length > 0) {
    return (
      <QuizSession
        key={sessionKey}
        title={`Simulacro · ${questions.length} preguntas`}
        type="simulacro"
        questions={questions}
        timeLimitSeconds={minutes * 60}
        shuffleOptions
        onExit={() => setRunning(false)}
      />
    )
  }

  const toggleModule = (id: string) => {
    setModuleIds((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]))
  }

  return (
    <div>
      <h1>Simulacros</h1>
      <p>
        Configura tu simulacro: elige los temas, la cantidad de preguntas, la dificultad y el
        tiempo disponible. Incluye cronómetro, navegación entre preguntas y marcado para revisar.
      </p>

      <div className="card">
        <h3>1. Temas (módulos)</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            className={`btn btn-sm ${moduleIds.length === 0 ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setModuleIds([])}
          >
            Todos los módulos
          </button>
          {MODULES.map((m) => (
            <button
              key={m.id}
              className={`btn btn-sm ${moduleIds.includes(m.id) ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => toggleModule(m.id)}
              aria-pressed={moduleIds.includes(m.id)}
            >
              {m.title}
            </button>
          ))}
        </div>

        <h3 style={{ marginTop: 20 }}>2. Parámetros</h3>
        <div className="grid grid-3">
          <label>
            <strong style={{ fontSize: 'var(--fs-sm)' }}>Cantidad de preguntas</strong>
            <select className="search-input" value={count} onChange={(e) => setCount(Number(e.target.value))}>
              {[5, 10, 15, 20, 25, 30, 40, 50].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label>
            <strong style={{ fontSize: 'var(--fs-sm)' }}>Dificultad</strong>
            <select className="search-input" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="todas">Mezclada</option>
              <option value="basica">Básica</option>
              <option value="intermedia">Intermedia</option>
              <option value="avanzada">Avanzada</option>
            </select>
          </label>
          <label>
            <strong style={{ fontSize: 'var(--fs-sm)' }}>Tiempo (minutos)</strong>
            <select className="search-input" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}>
              {[10, 15, 20, 30, 45, 60, 90, 120].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p style={{ marginTop: 16 }}>
          El simulacro tendrá <strong>{Math.min(count, pool.length)} preguntas</strong> (hay {pool.length}{' '}
          disponibles con esta selección).
        </p>
        <button
          className="btn btn-primary"
          disabled={pool.length === 0}
          onClick={() => {
            setSessionKey((k) => k + 1)
            setRunning(true)
            window.scrollTo(0, 0)
          }}
        >
          Iniciar simulacro
        </button>
      </div>

      <div className="callout callout-aviso">
        <strong className="ct-title">Nota</strong>
        Los simulacros son ejercicios de preparación propios de la plataforma. No reproducen la
        distribución oficial de preguntas de la convocatoria, que no se ha tomado de una fuente
        oficial.
      </div>
    </div>
  )
}
