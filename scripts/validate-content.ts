// ============================================================
// Validador de contenido: verifica invariantes de los datos
// académicos (cobertura de indicadores, integridad de preguntas,
// referencias válidas). Ejecutar: npx tsx scripts/validate-content.ts
// (carga el contenido mediante el cargador SSR de Vite para
// resolver import.meta.glob)
// ============================================================
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' })
const content = await server.ssrLoadModule('/src/data/content.ts')
const indicatorsMod = await server.ssrLoadModule('/src/data/indicators.ts')
await server.close()

const { MODULES, QUESTIONS, FLASHCARDS, ACTIVITIES, ACTIVITY_BY_ID, DOC_QUESTIONS } =
  content as typeof import('../src/data/content')
const { INDICATORS, INDICATOR_BY_ID } = indicatorsMod as typeof import('../src/data/indicators')

const errors: string[] = []
const warnings: string[] = []

// ---------- Indicadores ----------
const indicatorIds = new Set(INDICATORS.map((i) => i.id))

// ---------- Preguntas ----------
const questionIds = new Set<string>()
const perIndicatorQuestions: Record<string, number> = {}
for (const q of QUESTIONS) {
  if (questionIds.has(q.id)) errors.push(`Pregunta duplicada: ${q.id}`)
  questionIds.add(q.id)
  if (!indicatorIds.has(q.indicator)) errors.push(`Pregunta ${q.id}: indicador inválido ${q.indicator}`)
  if (!MODULES.some((m) => m.id === q.moduleId)) errors.push(`Pregunta ${q.id}: módulo inválido ${q.moduleId}`)
  if (q.options.length !== 4) errors.push(`Pregunta ${q.id}: debe tener 4 opciones (tiene ${q.options.length})`)
  if (q.correct < 0 || q.correct > 3) errors.push(`Pregunta ${q.id}: correct fuera de rango`)
  if (q.wrong.length !== 4) errors.push(`Pregunta ${q.id}: wrong debe tener 4 explicaciones`)
  if (!q.justification.trim()) errors.push(`Pregunta ${q.id}: sin justificación`)
  if (q.options.some((o) => !o.trim())) errors.push(`Pregunta ${q.id}: opción vacía`)
  if (!['basica', 'intermedia', 'avanzada'].includes(q.difficulty))
    errors.push(`Pregunta ${q.id}: dificultad inválida ${q.difficulty}`)
  perIndicatorQuestions[q.indicator] = (perIndicatorQuestions[q.indicator] ?? 0) + 1
}

for (const ind of INDICATORS) {
  const n = perIndicatorQuestions[ind.id] ?? 0
  if (n === 0) errors.push(`Indicador ${ind.id} (${ind.name}) sin preguntas`)
  else if (n < 3) warnings.push(`Indicador ${ind.id} (${ind.name}) tiene solo ${n} pregunta(s) (< 3)`)
}

// ---------- Módulos y lecciones ----------
const lessonIds = new Set<string>()
for (const m of MODULES) {
  for (const ind of m.indicators) {
    if (!indicatorIds.has(ind)) errors.push(`Módulo ${m.id}: indicador inválido ${ind}`)
  }
  if (m.lessons.length === 0) errors.push(`Módulo ${m.id} sin lecciones`)
  for (const l of m.lessons) {
    if (lessonIds.has(l.id)) errors.push(`Lección duplicada: ${l.id}`)
    lessonIds.add(l.id)
    if (l.moduleId !== m.id) errors.push(`Lección ${l.id}: moduleId no coincide con el módulo`)
    if (l.indicators.length === 0) errors.push(`Lección ${l.id}: sin indicadores`)
    for (const ind of l.indicators) {
      if (!indicatorIds.has(ind)) errors.push(`Lección ${l.id}: indicador inválido ${ind}`)
    }
    if (l.objectives.length === 0) errors.push(`Lección ${l.id}: sin objetivos`)
    if (l.sections.length === 0) errors.push(`Lección ${l.id}: sin secciones de explicación`)
    if (l.summary.length === 0) errors.push(`Lección ${l.id}: sin resumen`)
    if (l.memorize.length === 0) errors.push(`Lección ${l.id}: sin conceptos a memorizar`)
    if (l.commonMistakes.length === 0) errors.push(`Lección ${l.id}: sin errores frecuentes`)
    if (l.source.length === 0) errors.push(`Lección ${l.id}: sin páginas de origen`)
    if (!l.mindmap || l.mindmap.branches.length === 0) errors.push(`Lección ${l.id}: sin mentefacto`)
    if (!l.mindmapText) errors.push(`Lección ${l.id}: sin explicación textual del mentefacto`)
    if (l.activityId && !ACTIVITY_BY_ID[l.activityId])
      errors.push(`Lección ${l.id}: activityId ${l.activityId} no existe`)
  }
}

// ---------- Fichas ----------
const cardIds = new Set<string>()
for (const c of FLASHCARDS) {
  if (cardIds.has(c.id)) errors.push(`Ficha duplicada: ${c.id}`)
  cardIds.add(c.id)
  if (!indicatorIds.has(c.indicator)) errors.push(`Ficha ${c.id}: indicador inválido ${c.indicator}`)
  if (!MODULES.some((m) => m.id === c.moduleId)) errors.push(`Ficha ${c.id}: módulo inválido`)
  if (!c.front.trim() || !c.back.trim()) errors.push(`Ficha ${c.id}: frente o reverso vacío`)
}

// ---------- Actividades ----------
const activityIds = new Set<string>()
for (const a of ACTIVITIES) {
  if (activityIds.has(a.id)) errors.push(`Actividad duplicada: ${a.id}`)
  activityIds.add(a.id)
  if (!indicatorIds.has(a.indicator)) errors.push(`Actividad ${a.id}: indicador inválido`)
  if (!MODULES.some((m) => m.id === a.moduleId)) errors.push(`Actividad ${a.id}: módulo inválido`)
  if (!a.instructions.trim()) errors.push(`Actividad ${a.id}: sin instrucciones`)
  if (!a.explanation.trim()) errors.push(`Actividad ${a.id}: sin explicación paso a paso`)
  if (a.kind === 'relacionar' && (!a.pairs || a.pairs.length < 3))
    errors.push(`Actividad ${a.id} (relacionar): mínimo 3 parejas`)
  if (a.kind === 'ordenar' && (!a.orderItems || a.orderItems.length < 3))
    errors.push(`Actividad ${a.id} (ordenar): mínimo 3 elementos`)
  if (
    ['caso', 'tabla', 'razonamiento', 'comportamental'].includes(a.kind) &&
    (!a.questions || a.questions.length === 0)
  )
    errors.push(`Actividad ${a.id} (${a.kind}): sin preguntas`)
  if (a.kind === 'inconsistencias' && (!a.items || a.items.length < 3))
    errors.push(`Actividad ${a.id} (inconsistencias): mínimo 3 afirmaciones`)
  if (['caso', 'tabla', 'razonamiento'].includes(a.kind) && !a.scenario)
    errors.push(`Actividad ${a.id} (${a.kind}): sin escenario`)
}

// ---------- Colección documental ----------
const docIds = new Set<string>()
for (const d of DOC_QUESTIONS) {
  if (docIds.has(d.id)) errors.push(`Pregunta documental duplicada: ${d.id}`)
  docIds.add(d.id)
  if (!d.sourceFile.trim()) errors.push(`Documental ${d.id}: sin archivo de origen`)
  if (!d.statement.trim()) errors.push(`Documental ${d.id}: sin enunciado`)
  if (d.correct !== undefined && (d.correct < 0 || d.correct > 3))
    errors.push(`Documental ${d.id}: correct fuera de rango`)
  if (d.correct !== undefined && d.options && d.correct >= d.options.length)
    errors.push(`Documental ${d.id}: correct ${d.correct} no coincide con ${d.options.length} opciones`)
  if (d.indicator && !indicatorIds.has(d.indicator))
    errors.push(`Documental ${d.id}: indicador inválido ${d.indicator}`)
  if (d.correctVerified && d.correct === undefined)
    errors.push(`Documental ${d.id}: correctVerified=true sin respuesta`)
}

// ---------- Resumen ----------
const totalQuestions = QUESTIONS.length
const totalLessons = MODULES.reduce((a, m) => a + m.lessons.length, 0)
const totalCards = FLASHCARDS.length
const totalActivities = ACTIVITIES.length

console.log('==============================')
console.log('VALIDACIÓN DE CONTENIDO')
console.log('==============================')
console.log(`Módulos:        ${MODULES.length}`)
console.log(`Lecciones:      ${totalLessons}`)
console.log(`Preguntas:      ${totalQuestions}`)
console.log(`Fichas:         ${totalCards}`)
console.log(`Actividades:    ${totalActivities}`)
console.log(`Documental:     ${DOC_QUESTIONS.length} preguntas extraídas`)
console.log(`Indicadores con preguntas: ${Object.keys(perIndicatorQuestions).length}/${INDICATORS.length}`)
console.log('------------------------------')
if (warnings.length) {
  console.log('ADVERTENCIAS:')
  warnings.forEach((w) => console.log(`  ⚠ ${w}`))
}
if (errors.length) {
  console.log(`ERRORES (${errors.length}):`)
  errors.slice(0, 60).forEach((e) => console.log(`  ✗ ${e}`))
  if (errors.length > 60) console.log(`  … y ${errors.length - 60} más`)
  process.exit(1)
} else {
  console.log('✓ Sin errores de integridad de contenido')
}

// Cobertura por indicador
console.log('------------------------------')
console.log('PREGUNTAS POR INDICADOR:')
for (const ind of INDICATORS) {
  const label = INDICATOR_BY_ID[ind.id] ? `${ind.name}${ind.nivel ? ` nivel ${ind.nivel}` : ''}` : ind.id
  console.log(`  ${ind.id} ${label}: ${perIndicatorQuestions[ind.id] ?? 0}`)
}
