import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode,
} from 'react'
import {
  EMPTY_STATE,
  loadState,
  saveState,
  todayKey,
  type AppState,
  type ExamResult,
} from '../lib/storage'

// ============================================================
// Estado global de la aplicación + persistencia automática.
// ============================================================

export type Action =
  | { type: 'lesson/start'; id: string }
  | { type: 'lesson/done'; id: string }
  | { type: 'activity/done'; id: string }
  | { type: 'exam/record'; result: ExamResult }
  | { type: 'favorite/toggle'; id: string }
  | { type: 'note/set'; id: string; text: string }
  | { type: 'note/remove'; id: string }
  | { type: 'flashcard/review'; id: string; easy: boolean }
  | { type: 'studyTime/add'; seconds: number }
  | { type: 'state/reset' }
  | { type: 'state/import'; state: AppState }

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'lesson/start': {
      if (state.lessonsDone.includes(action.id) || state.lessonsInProgress.includes(action.id)) {
        return state
      }
      return { ...state, lessonsInProgress: [...state.lessonsInProgress, action.id] }
    }
    case 'lesson/done': {
      return {
        ...state,
        lessonsDone: state.lessonsDone.includes(action.id)
          ? state.lessonsDone
          : [...state.lessonsDone, action.id],
        lessonsInProgress: state.lessonsInProgress.filter((x) => x !== action.id),
      }
    }
    case 'activity/done': {
      if (state.activitiesDone.includes(action.id)) return state
      return { ...state, activitiesDone: [...state.activitiesDone, action.id] }
    }
    case 'exam/record': {
      return {
        ...state,
        exams: [...state.exams, action.result],
        lastExamId: action.result.id,
      }
    }
    case 'favorite/toggle': {
      const has = state.favorites.includes(action.id)
      return {
        ...state,
        favorites: has ? state.favorites.filter((x) => x !== action.id) : [...state.favorites, action.id],
      }
    }
    case 'note/set': {
      if (!action.text.trim()) return reducer(state, { type: 'note/remove', id: action.id })
      return { ...state, notes: { ...state.notes, [action.id]: action.text } }
    }
    case 'note/remove': {
      const notes = { ...state.notes }
      delete notes[action.id]
      return { ...state, notes }
    }
    case 'flashcard/review': {
      const current = state.cardBoxes[action.id] ?? 0
      const next = action.easy
        ? Math.min(5, current + 1)
        : Math.max(0, current - 1)
      return {
        ...state,
        cardBoxes: { ...state.cardBoxes, [action.id]: next },
        cardReviews: { ...state.cardReviews, [action.id]: Date.now() },
      }
    }
    case 'studyTime/add': {
      const key = todayKey()
      return {
        ...state,
        studyTime: { ...state.studyTime, [key]: (state.studyTime[key] ?? 0) + action.seconds },
      }
    }
    case 'state/reset':
      return { ...EMPTY_STATE }
    case 'state/import':
      return { ...EMPTY_STATE, ...action.state }
    default:
      return state
  }
}

interface Ctx {
  state: AppState
  dispatch: Dispatch<Action>
}

const AppContext = createContext<Ctx | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState)

  useEffect(() => {
    saveState(state)
  }, [state])

  const value = useMemo(() => ({ state, dispatch }), [state])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): Ctx {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp debe usarse dentro de <AppProvider>')
  return ctx
}
