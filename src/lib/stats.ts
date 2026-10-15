import { MODULES, QUESTION_BY_ID, QUESTIONS } from '../data/content'
import { INDICATORS } from '../data/indicators'
import { indicatorStats, failedQuestionStats, type IndicatorStat, type ModuleStat } from './progress'
import type { AppState } from './storage'

// ============================================================
// Estadísticas agregadas de toda la plataforma, usadas por el
// dashboard y el diagnóstico.
// ============================================================

export interface ComputedStats {
  moduleStats: ModuleStat[]
  indicatorStats: Record<string, IndicatorStat>
  failedStats: Record<string, { fails: number; attempts: number }>
  lessonsTotal: number
  lessonsDone: number
  lessonsPct: number
  modulesCompleted: number
  totalQuestions: number
  answeredQuestions: number
  indicatorsCovered: number
  indicatorsEvaluated: number
  indicatorsDominados: number
  indicatorsRefuerzo: number
  indicatorsInsuficientes: number
}

export function computeStats(state: AppState): ComputedStats {
  const correctOf = (qid: string) => QUESTION_BY_ID[qid]?.correct
  const indicatorOf = (qid: string) => QUESTION_BY_ID[qid]?.indicator

  const indStats = indicatorStats(state.exams, correctOf, indicatorOf)
  const failedStats = failedQuestionStats(state.exams, correctOf)

  const moduleStats: ModuleStat[] = MODULES.map((m) => {
    const lessonsTotal = m.lessons.length
    const lessonsDone = m.lessons.filter((l) => state.lessonsDone.includes(l.id)).length
    let correct = 0
    let total = 0
    for (const ex of state.exams) {
      for (const qid of ex.questionIds) {
        const q = QUESTION_BY_ID[qid]
        const chosen = ex.answers[qid]
        if (!q || q.moduleId !== m.id || chosen === undefined || chosen === null) continue
        total += 1
        if (chosen === q.correct) correct += 1
      }
    }
    return {
      moduleId: m.id,
      title: m.title,
      lessonsTotal,
      lessonsDone,
      pct: lessonsTotal ? Math.round((lessonsDone / lessonsTotal) * 100) : 0,
      correct,
      total,
      scorePct: total >= 3 ? Math.round((correct / total) * 100) : null,
    }
  })

  const lessonsTotal = MODULES.reduce((a, m) => a + m.lessons.length, 0)
  const lessonsDone = state.lessonsDone.length
  const answered = new Set<string>()
  for (const ex of state.exams) {
    for (const qid of ex.questionIds) {
      const c = ex.answers[qid]
      if (c !== undefined && c !== null) answered.add(qid)
    }
  }

  const evaluated = INDICATORS.filter((i) => (indStats[i.id]?.total ?? 0) >= 3)
  const dominados = evaluated.filter((i) => (indStats[i.id].pct ?? 0) >= 80)
  const refuerzo = evaluated.filter((i) => (indStats[i.id].pct ?? 100) < 60)
  const insuficientes = INDICATORS.filter((i) => (indStats[i.id]?.total ?? 0) < 3)

  return {
    moduleStats,
    indicatorStats: indStats,
    failedStats,
    lessonsTotal,
    lessonsDone,
    lessonsPct: lessonsTotal ? Math.round((lessonsDone / lessonsTotal) * 100) : 0,
    modulesCompleted: moduleStats.filter((m) => m.lessonsTotal > 0 && m.pct === 100).length,
    totalQuestions: QUESTIONS.length,
    answeredQuestions: answered.size,
    indicatorsCovered: INDICATORS.filter((i) => QUESTIONS.some((q) => q.indicator === i.id)).length,
    indicatorsEvaluated: evaluated.length,
    indicatorsDominados: dominados.length,
    indicatorsRefuerzo: refuerzo.length,
    indicatorsInsuficientes: insuficientes.length,
  }
}
