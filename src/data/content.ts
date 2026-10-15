import type { ModuleDef, Question, Flashcard, Activity } from './types'

// ============================================================
// Cargadores de contenido.
// Cada archivo de datos exporta una constante; los loaders usan
// import.meta.glob para recogerlos todos automáticamente, de modo
// que se puede añadir contenido sin modificar índices manuales.
// ============================================================

const moduleFiles = import.meta.glob<{ MODULE: ModuleDef }>('./modules/*.ts', { eager: true })
const questionFiles = import.meta.glob<{ QUESTIONS: Question[] }>('./bank/*.ts', { eager: true })
const flashcardFiles = import.meta.glob<{ CARDS: Flashcard[] }>('./flashcards/*.ts', { eager: true })
const activityFiles = import.meta.glob<{ ACTIVITIES: Activity[] }>('./activities/*.ts', { eager: true })

export const MODULES: ModuleDef[] = Object.values(moduleFiles)
  .map((m) => m.MODULE)
  .sort((a, b) => a.order - b.order)

export const QUESTIONS: Question[] = Object.values(questionFiles)
  .flatMap((m) => m.QUESTIONS)
  .sort((a, b) => a.id.localeCompare(b.id))

export const FLASHCARDS: Flashcard[] = Object.values(flashcardFiles).flatMap((m) => m.CARDS)

export const ACTIVITIES: Activity[] = Object.values(activityFiles).flatMap((m) => m.ACTIVITIES)

export const MODULE_BY_ID: Record<string, ModuleDef> = Object.fromEntries(
  MODULES.map((m) => [m.id, m]),
)

export const QUESTION_BY_ID: Record<string, Question> = Object.fromEntries(
  QUESTIONS.map((q) => [q.id, q]),
)

export const ACTIVITY_BY_ID: Record<string, Activity> = Object.fromEntries(
  ACTIVITIES.map((a) => [a.id, a]),
)

export function questionsForModule(moduleId: string): Question[] {
  return QUESTIONS.filter((q) => q.moduleId === moduleId)
}

export function questionsForIndicator(indicatorId: string): Question[] {
  return QUESTIONS.filter((q) => q.indicator === indicatorId)
}

export function cardsForModule(moduleId: string): Flashcard[] {
  return FLASHCARDS.filter((c) => c.moduleId === moduleId)
}
