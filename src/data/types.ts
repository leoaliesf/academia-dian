// ============================================================
// Academia DIAN — Gestor I
// Modelo de datos del contenido académico.
// El contenido vive en archivos de datos separados de la interfaz.
// ============================================================

/** Documentos fuente del material de estudio */
export type DocId = 'taci' | 'material'

/** Dificultad de una pregunta */
export type Difficulty = 'basica' | 'intermedia' | 'avanzada'

/** Categoría del indicador de la convocatoria */
export type IndicatorCategory = 'tecnico' | 'comportamental' | 'valor'

/** Tipo de pregunta */
export type QuestionKind = 'conceptual' | 'caso' | 'interpretacion' | 'aplicacion'

/** Estado de verificación de una norma */
export type NormStatus = 'vigente' | 'verificar' | 'modificada'

export interface Indicator {
  id: string
  name: string
  category: IndicatorCategory
  /** Nivel, cuando la convocatoria lo define (p. ej. "Adaptabilidad nivel 1") */
  nivel?: number
}

export interface NormRef {
  norm: string
  article?: string
  status: NormStatus
  note?: string
}

export interface TableData {
  caption?: string
  headers: string[]
  rows: string[][]
}

export interface Section {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  table?: TableData
  callout?: {
    type: 'importante' | 'memoriza' | 'error' | 'ejemplo' | 'norma' | 'aviso'
    text: string
  }
  norm?: NormRef
}

export interface MindMapBranch {
  label: string
  children: string[]
}

export interface SourcePage {
  doc: DocId
  pages: string
  note?: string
}

export interface Lesson {
  id: string
  moduleId: string
  title: string
  /** Indicadores de la convocatoria que cubre esta lección */
  indicators: string[]
  objectives: string[]
  /** Explicación desde cero, definiciones, cuadros comparativos (secciones libres) */
  sections: Section[]
  /** Resumen de los puntos más importantes */
  summary: string[]
  /** Conceptos que hay que memorizar */
  memorize: string[]
  /** Ejemplos prácticos */
  examples: Section[]
  /** Errores frecuentes */
  commonMistakes: { mistake: string; correction: string }[]
  /** Normas y artículos pertinentes (solo si están verificados o marcados para verificar) */
  norms: NormRef[]
  /** Enlaces a fuentes oficiales */
  links: { label: string; url: string }[]
  /** Mentefacto / mapa conceptual (datos para el diagrama SVG) */
  mindmap: { root: string; branches: MindMapBranch[] }
  /** Explicación textual accesible del mentefacto */
  mindmapText: string
  /** Páginas de origen en los PDF */
  source: SourcePage[]
  /** IDs de actividad y cuestionario asociados (opcional) */
  activityId?: string
  quizId?: string
}

export interface Question {
  id: string
  indicator: string
  moduleId: string
  topic: string
  difficulty: Difficulty
  kind: QuestionKind
  statement: string
  /** Exactamente 4 opciones: A, B, C, D */
  options: string[]
  /** Índice de la respuesta correcta (0-3) */
  correct: number
  /** Justificación de la respuesta correcta */
  justification: string
  /** Por qué cada opción incorrecta es incorrecta (mismo orden que options) */
  wrong: string[]
  /** Fuente documental o normativa, cuando corresponda */
  source?: string
}

export interface Flashcard {
  id: string
  indicator: string
  moduleId: string
  front: string
  back: string
}

export interface ActivityQuestion {
  q: string
  options: string[]
  correct: number
  why: string
}

export interface Activity {
  id: string
  moduleId: string
  indicator: string
  title: string
  kind:
    | 'relacionar'
    | 'ordenar'
    | 'caso'
    | 'inconsistencias'
    | 'tabla'
    | 'razonamiento'
    | 'comportamental'
  instructions: string
  /** Datos específicos según el tipo */
  pairs?: { a: string; b: string }[]
  orderItems?: string[]
  scenario?: string
  items?: { text: string; inconsistent: boolean; why: string }[]
  table?: TableData
  questions?: ActivityQuestion[]
  /** Explicación del procedimiento paso a paso (retroalimentación) */
  explanation: string
}

export interface ModuleDef {
  id: string
  order: number
  title: string
  description: string
  indicators: string[]
  lessons: Lesson[]
  quizId?: string
}

export interface PdfChapterSummary {
  title: string
  pages?: string
  summary: string[]
  indicators: string[]
  note?: string
}

export interface PdfDocumentSummary {
  doc: DocId
  title: string
  file: string
  description: string
  overview: string[]
  chapters: PdfChapterSummary[]
  differencesNote?: string
}
