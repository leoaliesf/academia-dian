import { INDICATORS, INDICATOR_BY_ID } from '../data/indicators'
import type { AppState, ExamResult } from './storage'
import { todayKey } from './storage'

// ============================================================
// Cálculo de progreso, rendimiento por indicador/módulo y
// estadísticas para el dashboard y el diagnóstico.
// Los criterios de clasificación son internos de la plataforma
// (no son criterios oficiales de la DIAN ni de la CNSC).
// ============================================================

export const DOMINADO_UMBRAL = 80 // % aciertos => tema dominado provisionalmente
export const REFUERZO_UMBRAL = 60 // % aciertos => tema que requiere refuerzo
export const MIN_RESPUESTAS_INDICADOR = 3 // mínimo de respuestas para evaluar un indicador

export interface IndicatorStat {
  id: string
  total: number
  correct: number
  pct: number | null // null = sin datos suficientes
  estado: 'dominado' | 'en-proceso' | 'refuerzo' | 'insuficiente'
}

export interface ModuleStat {
  moduleId: string
  title: string
  lessonsTotal: number
  lessonsDone: number
  pct: number
  correct: number
  total: number
  scorePct: number | null
}

/** Respuestas agregadas por pregunta (para errores repetidos) */
export interface QuestionPerf {
  questionId: string
  attempts: number
  fails: number
}

export function collectQuestionPerf(exams: ExamResult[]): Record<string, QuestionPerf> {
  const map: Record<string, QuestionPerf> = {}
  for (const ex of exams) {
    for (const qid of ex.questionIds) {
      const chosen = ex.answers[qid]
      if (chosen === undefined || chosen === null) continue
      const perf = (map[qid] ??= { questionId: qid, attempts: 0, fails: 0 })
      perf.attempts += 1
      // "fail" se determina comparando con la opción correcta;
      // la opción correcta la conoce el banco de preguntas, así que
      // aquí solo acumulamos intentos y la corrección se calcula
      // en diagnose con el banco.
    }
  }
  return map
}

export function indicatorStats(
  exams: ExamResult[],
  correctOf: (questionId: string) => number | undefined,
  indicatorOf: (questionId: string) => string | undefined,
): Record<string, IndicatorStat> {
  const stats: Record<string, IndicatorStat> = {}
  for (const ind of INDICATORS) {
    stats[ind.id] = { id: ind.id, total: 0, correct: 0, pct: null, estado: 'insuficiente' }
  }
  for (const ex of exams) {
    for (const qid of ex.questionIds) {
      const indId = indicatorOf(qid)
      const correct = correctOf(qid)
      const chosen = ex.answers[qid]
      if (!indId || chosen === undefined || chosen === null || correct === undefined) continue
      const s = stats[indId]
      s.total += 1
      if (chosen === correct) s.correct += 1
    }
  }
  for (const s of Object.values(stats)) {
    if (s.total >= MIN_RESPUESTAS_INDICADOR) {
      s.pct = Math.round((s.correct / s.total) * 100)
      s.estado =
        s.pct >= DOMINADO_UMBRAL ? 'dominado' : s.pct >= REFUERZO_UMBRAL ? 'en-proceso' : 'refuerzo'
    } else {
      s.estado = 'insuficiente'
    }
  }
  return stats
}

/** Preguntas falladas (ids) y su conteo de fallos, para refuerzo */
export function failedQuestionStats(exams: ExamResult[], correctOf: (qid: string) => number | undefined) {
  const map: Record<string, { fails: number; attempts: number }> = {}
  for (const ex of exams) {
    for (const qid of ex.questionIds) {
      const chosen = ex.answers[qid]
      const correct = correctOf(qid)
      if (chosen === undefined || chosen === null || correct === undefined) continue
      const rec = (map[qid] ??= { fails: 0, attempts: 0 })
      rec.attempts += 1
      if (chosen !== correct) rec.fails += 1
    }
  }
  return map
}

export function studyTimeToday(state: AppState): number {
  return state.studyTime[todayKey()] ?? 0
}

export function studyTimeTotal(state: AppState): number {
  return Object.values(state.studyTime).reduce((a, b) => a + b, 0)
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds} s`
  const m = Math.floor(seconds / 60)
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60)
  const mm = m % 60
  return `${h} h ${mm} min`
}

export function lastExam(state: AppState): ExamResult | undefined {
  return state.exams.length ? state.exams[state.exams.length - 1] : undefined
}

export function avgScore(state: AppState): number | null {
  if (!state.exams.length) return null
  return Math.round(state.exams.reduce((a, e) => a + e.score, 0) / state.exams.length)
}

export function evolution(state: AppState): { title: string; score: number; date: number }[] {
  return state.exams.map((e) => ({ title: e.title, score: e.score, date: e.finishedAt }))
}

export function indicatorIdToLabel(id: string): string {
  const ind = INDICATOR_BY_ID[id]
  if (!ind) return id
  if (ind.nivel !== undefined) return `${ind.name} nivel ${ind.nivel}`
  return ind.name
}
