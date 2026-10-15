// ============================================================
// Persistencia en localStorage.
// La plataforma es estática: todos los datos se guardan en el
// navegador de cada usuario y NO se sincronizan entre
// dispositivos. Se puede exportar/importar el progreso.
// ============================================================

export interface ExamResult {
  id: string
  type: 'cuestionario' | 'simulacro' | 'examen' | 'modo-estudio' | 'actividad'
  title: string
  startedAt: number
  finishedAt: number
  timeSeconds: number
  questionIds: string[]
  /** questionId -> opción elegida (0-3) o null (sin responder) */
  answers: Record<string, number | null>
  score: number // 0 - 100
  correctCount: number
  wrongCount: number
  unanswered: number
}

export interface AppState {
  version: number
  lessonsDone: string[]
  lessonsInProgress: string[]
  activitiesDone: string[]
  exams: ExamResult[]
  failedQuestions: string[]
  favorites: string[]
  notes: Record<string, string>
  /** Flashcards: caja actual (0 = nueva, 5 = dominada) */
  cardBoxes: Record<string, number>
  cardReviews: Record<string, number>
  /** Tiempo de estudio en segundos por día 'YYYY-MM-DD' */
  studyTime: Record<string, number>
  lastExamId?: string
}

export const STORAGE_KEY = 'academia-dian-progress-v1'

export const EMPTY_STATE: AppState = {
  version: 1,
  lessonsDone: [],
  lessonsInProgress: [],
  activitiesDone: [],
  exams: [],
  failedQuestions: [],
  favorites: [],
  notes: {},
  cardBoxes: {},
  cardReviews: {},
  studyTime: {},
}

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...EMPTY_STATE }
    const parsed = JSON.parse(raw) as Partial<AppState>
    if (!parsed || parsed.version !== 1) return { ...EMPTY_STATE }
    return { ...EMPTY_STATE, ...parsed }
  } catch {
    return { ...EMPTY_STATE }
  }
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.error('No se pudo guardar el progreso en localStorage', e)
  }
}

export function exportProgress(state: AppState): string {
  return JSON.stringify(state, null, 2)
}

export function importProgress(json: string): AppState {
  const parsed = JSON.parse(json) as AppState
  if (!parsed || parsed.version !== 1) {
    throw new Error('El archivo no tiene un formato válido de Academia DIAN')
  }
  return { ...EMPTY_STATE, ...parsed }
}

export function todayKey(d: Date = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
