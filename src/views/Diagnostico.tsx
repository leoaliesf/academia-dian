import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MODULES, QUESTION_BY_ID, FLASHCARDS, ACTIVITIES } from '../data/content'
import { INDICATORS, indicatorLabel } from '../data/indicators'
import { useApp } from '../store/AppContext'
import { computeStats } from '../lib/stats'
import { evolution, formatDuration, DOMINADO_UMBRAL, REFUERZO_UMBRAL, MIN_RESPUESTAS_INDICADOR } from '../lib/progress'
import type { ExamResult } from '../lib/storage'
import { DataTable } from '../components/ui'

// ============================================================
// Diagnóstico final personalizado + plan de estudio automático.
// Los criterios de clasificación son internos de la plataforma
// (transparentes, no oficiales): dominado ≥ 80%, refuerzo < 60%,
// con al menos 3 respuestas por indicador.
// ============================================================

export default function Diagnostico() {
  const { state } = useApp()
  const stats = computeStats(state)
  const [examId, setExamId] = useState<string | null>(null)

  const exam: ExamResult | null = useMemo(() => {
    if (examId) return state.exams.find((e) => e.id === examId) ?? null
    if (state.lastExamId) return state.exams.find((e) => e.id === state.lastExamId) ?? null
    const last = state.exams[state.exams.length - 1]
    return last ?? null
  }, [state.exams, state.lastExamId, examId])

  // Resultados por indicador del examen seleccionado
  const examByIndicator = useMemo(() => {
    const map: Record<string, { total: number; correct: number }> = {}
    if (!exam) return map
    for (const qid of exam.questionIds) {
      const q = QUESTION_BY_ID[qid]
      if (!q) continue
      const chosen = exam.answers[qid]
      if (chosen === undefined || chosen === null) continue
      const rec = (map[q.indicator] ??= { total: 0, correct: 0 })
      rec.total += 1
      if (chosen === q.correct) rec.correct += 1
    }
    return map
  }, [exam])

  // Rendimiento por dificultad del examen seleccionado
  const examByDifficulty = useMemo(() => {
    const map: Record<string, { total: number; correct: number }> = {}
    if (!exam) return map
    for (const qid of exam.questionIds) {
      const q = QUESTION_BY_ID[qid]
      if (!q) continue
      const chosen = exam.answers[qid]
      if (chosen === undefined || chosen === null) continue
      const rec = (map[q.difficulty] ??= { total: 0, correct: 0 })
      rec.total += 1
      if (chosen === q.correct) rec.correct += 1
    }
    return map
  }, [exam])

  // Errores repetidos (falladas 2+ veces en todo el historial)
  const repeatedErrors = useMemo(() => {
    return Object.entries(stats.failedStats)
      .filter(([, v]) => v.fails >= 2)
      .sort((a, b) => b[1].fails - a[1].fails)
      .slice(0, 8)
  }, [stats.failedStats])

  // Temas con más fallos acumulados (agrupación por topic de la pregunta)
  const topicErrors = useMemo(() => {
    const map: Record<string, { fails: number; attempts: number; indicator: string }> = {}
    for (const [qid, v] of Object.entries(stats.failedStats)) {
      if (v.fails === 0) continue
      const q = QUESTION_BY_ID[qid]
      if (!q) continue
      const rec = (map[q.topic] ??= { fails: 0, attempts: 0, indicator: q.indicator })
      rec.fails += v.fails
      rec.attempts += v.attempts
    }
    return Object.entries(map)
      .sort((a, b) => b[1].fails - a[1].fails)
      .slice(0, 8)
  }, [stats.failedStats])

  const evol = evolution(state)

  const dominados = INDICATORS.filter((i) => (stats.indicatorStats[i.id].pct ?? 0) >= DOMINADO_UMBRAL && (stats.indicatorStats[i.id].total ?? 0) >= MIN_RESPUESTAS_INDICADOR)
  const refuerzo = INDICATORS.filter((i) => (stats.indicatorStats[i.id].pct ?? 100) < REFUERZO_UMBRAL && (stats.indicatorStats[i.id].total ?? 0) >= MIN_RESPUESTAS_INDICADOR)
  const insuficientes = INDICATORS.filter((i) => (stats.indicatorStats[i.id].total ?? 0) < MIN_RESPUESTAS_INDICADOR)

  // Plan de estudio: para cada indicador en refuerzo (o insuficiente),
  // recomendaciones concretas con enlaces directos
  const planTargets = useMemo(() => {
    const targets = [...refuerzo, ...insuficientes].map((ind) => {
      const lessons = MODULES.flatMap((m) =>
        m.lessons.filter((l) => l.indicators.includes(ind.id)).map((l) => ({ module: m, lesson: l })),
      )
      const cards = FLASHCARDS.filter((c) => c.indicator === ind.id)
      const acts = ACTIVITIES.filter((a) => a.indicator === ind.id)
      return { ind, lessons, cards, acts }
    })
    // Prioriza los peores
    return targets.sort(
      (a, b) =>
        (stats.indicatorStats[a.ind.id].pct ?? 0) - (stats.indicatorStats[b.ind.id].pct ?? 0),
    )
  }, [refuerzo, insuficientes, stats.indicatorStats])

  return (
    <div>
      <h1>Diagnóstico personalizado</h1>

      <div className="card">
        <label>
          <strong>Examen a analizar</strong>
          <select
            className="search-input"
            value={exam?.id ?? ''}
            onChange={(e) => setExamId(e.target.value)}
            style={{ maxWidth: 420 }}
          >
            {state.exams.length === 0 && <option value="">Sin exámenes aún</option>}
            {[...state.exams].reverse().map((e) => (
              <option key={e.id} value={e.id}>
                {e.title} — {new Date(e.finishedAt).toLocaleString('es-CO')} — {e.score}%
              </option>
            ))}
          </select>
        </label>
      </div>

      {!exam ? (
        <div className="card">
          <p>
            Aún no has presentado exámenes.{' '}
            <Link to="/examen-final">Presenta el examen final integral</Link> para generar tu
            diagnóstico completo con plan de estudio.
          </p>
        </div>
      ) : (
        <>
          {/* Nota total */}
          <div className="grid grid-4" style={{ marginTop: 16 }}>
            <div className="kpi">
              <div className="kpi-value">{exam.score}%</div>
              <div className="kpi-label">Nota total</div>
            </div>
            <div className="kpi">
              <div className="kpi-value" style={{ color: 'var(--ok-700)' }}>
                {exam.correctCount}
              </div>
              <div className="kpi-label">Correctas</div>
            </div>
            <div className="kpi">
              <div className="kpi-value" style={{ color: 'var(--bad-700)' }}>
                {exam.wrongCount}
              </div>
              <div className="kpi-label">Incorrectas</div>
            </div>
            <div className="kpi">
              <div className="kpi-value">{exam.unanswered}</div>
              <div className="kpi-label">Sin responder</div>
            </div>
          </div>
          <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-500)' }}>
            Tiempo utilizado: {formatDuration(exam.timeSeconds)} · Presentado:{' '}
            {new Date(exam.finishedAt).toLocaleString('es-CO')}
          </p>

          {/* Resultado por indicador */}
          <div className="card">
            <h3>Resultado por indicador (este examen)</h3>
            <DataTable
              data={{
                headers: ['Indicador', 'Aciertos', 'Total', '%', 'Clasificación (criterios de la plataforma)'],
                rows: INDICATORS.map((ind) => {
                  const r = examByIndicator[ind.id]
                  if (!r) {
                    return [indicatorLabel(ind.id), '—', '—', '—', 'sin preguntas respondidas']
                  }
                  const pct = Math.round((r.correct / r.total) * 100)
                  const cls =
                    pct >= DOMINADO_UMBRAL
                      ? 'Dominado provisionalmente'
                      : pct >= REFUERZO_UMBRAL
                        ? 'En proceso'
                        : 'Requiere refuerzo'
                  return [indicatorLabel(ind.id), String(r.correct), String(r.total), `${pct}%`, cls]
                }),
              }}
            />
          </div>

          {/* Resultado por módulo */}
          <div className="card">
            <h3>Resultado por módulo (todo el historial)</h3>
            <DataTable
              data={{
                headers: ['Módulo', 'Aciertos', 'Respondidas', '%', 'Lecciones completadas'],
                rows: stats.moduleStats.map((m) => [
                  m.title,
                  String(m.correct),
                  String(m.total),
                  m.scorePct === null ? '—' : `${m.scorePct}%`,
                  `${m.lessonsDone}/${m.lessonsTotal}`,
                ]),
              }}
            />
          </div>

          {/* Rendimiento por dificultad */}
          <div className="card">
            <h3>Rendimiento por dificultad (este examen)</h3>
            <DataTable
              data={{
                headers: ['Dificultad', 'Aciertos', 'Total', '%'],
                rows: (['basica', 'intermedia', 'avanzada'] as const).map((d) => {
                  const r = examByDifficulty[d]
                  if (!r) return [d, '—', '—', '—']
                  return [d, String(r.correct), String(r.total), `${Math.round((r.correct / r.total) * 100)}%`]
                }),
              }}
            />
          </div>

          {/* Evolución */}
          <div className="card">
            <h3>Evolución frente a exámenes anteriores</h3>
            {evol.length <= 1 ? (
              <p style={{ color: 'var(--ink-500)' }}>
                Presenta más ejercicios para ver tu evolución comparada.
              </p>
            ) : (
              <ul>
                {evol.map((e, i) => (
                  <li key={i}>
                    {e.title} · {new Date(e.date).toLocaleDateString('es-CO')} —{' '}
                    <strong>{e.score}%</strong>
                    {i > 0 && e.score - evol[i - 1].score !== 0 && (
                      <span style={{ color: e.score >= evol[i - 1].score ? 'var(--ok-700)' : 'var(--bad-700)' }}>
                        {' '}
                        ({e.score >= evol[i - 1].score ? '+' : ''}
                        {e.score - evol[i - 1].score} pts)
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Errores repetidos */}
          <div className="card">
            <h3>Errores que se repiten</h3>
            {repeatedErrors.length === 0 ? (
              <p style={{ color: 'var(--ink-500)' }}>
                Ninguna pregunta ha sido fallada dos o más veces. ¡Sigue así!
              </p>
            ) : (
              <ul>
                {repeatedErrors.map(([qid, v]) => {
                  const q = QUESTION_BY_ID[qid]
                  return (
                    <li key={qid}>
                      Fallada <strong>{v.fails} veces</strong>:{' '}
                      {q ? q.statement.slice(0, 120) + (q.statement.length > 120 ? '…' : '') : qid}{' '}
                      <Link to="/banco" state={{ questionId: qid }}>
                        ver
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {/* Temas con más fallos */}
          <div className="card">
            <h3>Temas donde te equivocas más</h3>
            {topicErrors.length === 0 ? (
              <p style={{ color: 'var(--ink-500)' }}>
                Presenta ejercicios para que la plataforma identifique tus temas débiles.
              </p>
            ) : (
              <ul>
                {topicErrors.map(([topic, v]) => (
                  <li key={topic}>
                    <strong>{topic}</strong> — {v.fails} fallo{v.fails === 1 ? '' : 's'} en{' '}
                    {v.attempts} intento{v.attempts === 1 ? '' : 's'}{' '}
                    <Link to={`/modo-estudio?tema=${encodeURIComponent(topic)}`} className="btn btn-sm btn-teal">
                      Practicar este tema
                    </Link>{' '}
                    <Link to={`/modo-estudio?indicador=${v.indicator}`} className="btn btn-sm btn-outline">
                      Por indicador
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Dominados / refuerzo / insuficientes */}
          <div className="grid grid-3">
            <div className="card">
              <h3>Temas dominados provisionalmente ({dominados.length})</h3>
              {dominados.length === 0 ? (
                <p style={{ color: 'var(--ink-500)', fontSize: 'var(--fs-sm)' }}>Aún ninguno.</p>
              ) : (
                <ul style={{ fontSize: 'var(--fs-sm)' }}>
                  {dominados.map((i) => (
                    <li key={i.id}>
                      {indicatorLabel(i.id)} ({stats.indicatorStats[i.id].pct}%)
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card" style={{ borderColor: 'var(--bad-100)' }}>
              <h3>Temas que requieren refuerzo ({refuerzo.length})</h3>
              {refuerzo.length === 0 ? (
                <p style={{ color: 'var(--ink-500)', fontSize: 'var(--fs-sm)' }}>¡Ninguno! Buen trabajo.</p>
              ) : (
                <ul style={{ fontSize: 'var(--fs-sm)' }}>
                  {refuerzo.map((i) => (
                    <li key={i.id}>
                      {indicatorLabel(i.id)} ({stats.indicatorStats[i.id].pct}%)
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card">
              <h3>Información insuficiente ({insuficientes.length})</h3>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-500)' }}>
                Estos indicadores aún no tienen {MIN_RESPUESTAS_INDICADOR} respuestas para evaluarlos:{' '}
              </p>
              <ul style={{ fontSize: 'var(--fs-sm)' }}>
                {insuficientes.map((i) => (
                  <li key={i.id}>{indicatorLabel(i.id)}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plan de estudio personalizado */}
          <div className="card" style={{ borderLeft: '5px solid var(--teal-500)' }}>
            <h2>Tu plan de estudio personalizado</h2>
            <p>
              Generado automáticamente con base en tu rendimiento. Sigue el orden propuesto y usa
              los botones para abrir directamente cada actividad.
            </p>
            {planTargets.length === 0 ? (
              <p>
                ¡Todos los indicadores evaluados están en buen estado! Presenta el{' '}
                <Link to="/examen-final">examen final integral</Link> para evaluar los indicadores
                que aún no tienen suficientes datos.
              </p>
            ) : (
              <div style={{ display: 'grid', gap: 16 }}>
                {planTargets.map(({ ind, lessons, cards, acts }, idx) => {
                  const st = stats.indicatorStats[ind.id]
                  return (
                    <div key={ind.id} style={{ border: '1px solid var(--line)', borderRadius: 10, padding: 16 }}>
                      <h3 style={{ marginBottom: 4 }}>
                        {idx + 1}. {indicatorLabel(ind.id)}
                      </h3>
                      <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-500)' }}>
                        {st.total >= MIN_RESPUESTAS_INDICADOR
                          ? `Rendimiento actual: ${st.pct}% (${st.correct}/${st.total} aciertos)`
                          : `Solo ${st.total} respuesta(s) registradas: necesitas practicar para poder evaluar este indicador.`}
                      </p>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {lessons.slice(0, 3).map(({ lesson }) => (
                          <Link key={lesson.id} to={`/leccion/${lesson.id}`} className="btn btn-sm btn-primary">
                            📘 {lesson.title}
                          </Link>
                        ))}
                        <Link to={`/modo-estudio?indicador=${ind.id}`} className="btn btn-sm btn-teal">
                          📖 Practicar preguntas
                        </Link>
                        {cards.length > 0 && (
                          <Link to="/fichas" className="btn btn-sm btn-outline">
                            🃏 Fichas ({cards.length})
                          </Link>
                        )}
                        {acts.map((a) => (
                          <Link key={a.id} to={`/actividad/${a.id}`} className="btn btn-sm btn-outline">
                            ✏️ {a.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)' }}>
            Criterios internos de la plataforma (no oficiales): dominado ≥ {DOMINADO_UMBRAL}%,
            en proceso ≥ {REFUERZO_UMBRAL}%, refuerzo &lt; {REFUERZO_UMBRAL}%, con al menos{' '}
            {MIN_RESPUESTAS_INDICADOR} respuestas por indicador.
          </p>
        </>
      )}
    </div>
  )
}
