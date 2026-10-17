import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MODULES, QUESTIONS, QUESTION_BY_ID } from '../data/content'
import { INDICATORS, indicatorLabel as il } from '../data/indicators'
import QuizSession from '../components/QuizSession'
import { useApp } from '../store/AppContext'
import { failedQuestionStats } from '../lib/progress'

// ============================================================
// Modo de estudio: practicar sin límite de tiempo, con
// explicaciones inmediatas, favoritos, notas y filtros por
// indicador, módulo o preguntas falladas.
// ============================================================

export default function ModoEstudio() {
  const [params] = useSearchParams()
  const { state } = useApp()
  const [indicator, setIndicator] = useState<string>(params.get('indicador') ?? 'todos')
  const [tema, setTema] = useState<string>(params.get('tema') ?? '')
  const [moduleId, setModuleId] = useState<string>('todos')
  const [difficulty, setDifficulty] = useState<string>('todas')
  const [onlyFailed, setOnlyFailed] = useState(false)
  const [sessionKey, setSessionKey] = useState(0)
  const [running, setRunning] = useState(false)

  const failedIds = useMemo(() => {
    const stats = failedQuestionStats(
      state.exams,
      (qid) => QUESTION_BY_ID[qid]?.correct,
    )
    return Object.keys(stats).filter((qid) => stats[qid].fails > 0)
  }, [state.exams])

  const pool = useMemo(() => {
    return QUESTIONS.filter((q) => {
      if (indicator !== 'todos' && q.indicator !== indicator) return false
      if (tema.trim() && !q.topic.toLowerCase().includes(tema.trim().toLowerCase())) return false
      if (moduleId !== 'todos' && q.moduleId !== moduleId) return false
      if (difficulty !== 'todas' && q.difficulty !== difficulty) return false
      if (onlyFailed && !failedIds.includes(q.id)) return false
      return true
    })
  }, [indicator, tema, moduleId, difficulty, onlyFailed, failedIds])

  if (running && pool.length > 0) {
    return (
      <QuizSession
        key={sessionKey}
        title={`Modo de estudio · ${pool.length} preguntas`}
        type="modo-estudio"
        questions={pool}
        studyMode
        shuffleQuestions
        onExit={() => setRunning(false)}
      />
    )
  }

  return (
    <div>
      <h1>Modo de estudio</h1>
      <p>
        Practica sin límite de tiempo: consulta la explicación justo después de responder cada
        pregunta, guarda favoritas y toma notas. Puedes filtrar por el indicador que necesites
        reforzar.
      </p>

      <div className="card">
        <div className="grid grid-2">
          <label>
            <strong>Indicador</strong>
            <select
              className="search-input"
              value={indicator}
              onChange={(e) => setIndicator(e.target.value)}
              style={{ marginTop: 6 }}
            >
              <option value="todos">Todos los indicadores</option>
              {INDICATORS.map((i) => (
                <option key={i.id} value={i.id}>
                  {il(i.id)}
                </option>
              ))}
            </select>
          </label>
          <label>
            <strong>Módulo</strong>
            <select
              className="search-input"
              value={moduleId}
              onChange={(e) => setModuleId(e.target.value)}
              style={{ marginTop: 6 }}
            >
              <option value="todos">Todos los módulos</option>
              {MODULES.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            <strong>Tema (palabra clave)</strong>
            <input
              type="search"
              className="search-input"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ej.: RUT, facturación, IVA…"
              style={{ marginTop: 6 }}
            />
          </label>
          <label>
            <strong>Dificultad</strong>
            <select
              className="search-input"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              style={{ marginTop: 6 }}
            >
              <option value="todas">Todas</option>
              <option value="basica">Básica</option>
              <option value="intermedia">Intermedia</option>
              <option value="avanzada">Avanzada</option>
            </select>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 26 }}>
            <input
              type="checkbox"
              checked={onlyFailed}
              onChange={(e) => setOnlyFailed(e.target.checked)}
            />
            Solo preguntas falladas anteriormente ({failedIds.length})
          </label>
        </div>

        <p style={{ marginTop: 16 }}>
          <strong>{pool.length} preguntas</strong> en la selección actual.
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
          Comenzar a estudiar
        </button>
        {pool.length === 0 && (
          <p style={{ color: 'var(--ink-500)', fontSize: 'var(--fs-sm)' }}>
            No hay preguntas con esos filtros. Amplía la selección.
          </p>
        )}
      </div>

      {state.favorites.length > 0 && (
        <div className="card">
          <h3>Preguntas favoritas ({state.favorites.length})</h3>
          <p style={{ fontSize: 'var(--fs-sm)' }}>
            Tus preguntas favoritas se muestran en el banco de preguntas con la marca ★. Puedes
            filtrar el banco por favoritas.
          </p>
        </div>
      )}

      {Object.keys(state.notes).length > 0 && (
        <div className="card">
          <h3>Tus notas ({Object.keys(state.notes).length})</h3>
          <p style={{ fontSize: 'var(--fs-sm)' }}>
            Las notas quedan guardadas junto a cada pregunta y aparecen al estudiarla en el banco.
          </p>
        </div>
      )}

      <div className="callout callout-aviso">
        <strong className="ct-title">Recordatorio</strong>
        El progreso se guarda localmente en este navegador y no se sincroniza entre dispositivos.
        Usa «Ajustes y datos» para exportar o importar tu progreso.
      </div>
    </div>
  )
}
