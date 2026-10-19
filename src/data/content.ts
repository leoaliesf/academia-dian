import type { ModuleDef, Question, Flashcard, Activity, DocQuestion } from './types'

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
const documentalFiles = import.meta.glob<{ DOC_QUESTIONS: DocQuestion[] }>('./documental/*.ts', {
  eager: true,
})

export const MODULES: ModuleDef[] = Object.values(moduleFiles)
  .map((m) => m.MODULE)
  .sort((a, b) => a.order - b.order)

/** Hash estable del id de una pregunta (para distribuir posiciones) */
function hashId(id: string): number {
  let h = 0
  for (let i = 0; i < id.length; i++) {
    h = (h * 31 + id.charCodeAt(i)) >>> 0
  }
  return h
}

function rotate<T>(arr: T[], k: number): T[] {
  const n = arr.length
  if (n === 0) return arr
  const kk = ((k % n) + n) % n
  return [...arr.slice(kk), ...arr.slice(0, kk)]
}

/**
 * Distribuye la posición de la respuesta correcta: rota opciones,
 * correct y wrong[] (alineado por índice de opción) con un
 * desplazamiento estable derivado del id. Así la respuesta correcta
 * no queda siempre en la misma posición de autoría, y la barajada
 * aleatoria de cada sesión añade otra capa de variación.
 */
function spreadCorrectPositions(qs: Question[]): Question[] {
  return qs.map((q) => {
    const k = hashId(q.id) % 4
    if (k === 0) return q
    return {
      ...q,
      options: rotate(q.options, k),
      correct: (q.correct - k + 4) % 4,
      wrong: rotate(q.wrong, k),
    }
  })
}

export const QUESTIONS: Question[] = spreadCorrectPositions(
  Object.values(questionFiles)
    .flatMap((m) => m.QUESTIONS)
    .sort((a, b) => a.id.localeCompare(b.id)),
)

export const FLASHCARDS: Flashcard[] = Object.values(flashcardFiles).flatMap((m) => m.CARDS)

export const ACTIVITIES: Activity[] = Object.values(activityFiles).flatMap((m) => m.ACTIVITIES)

/** Colección documental: preguntas extraídas de materiales de práctica.
 *  NO entran al banco de práctica ni a los simulacros. */
export const DOC_QUESTIONS: DocQuestion[] = Object.values(documentalFiles)
  .flatMap((m) => m.DOC_QUESTIONS)
  .sort((a, b) => a.id.localeCompare(b.id))

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
