// ============================================================
// Pruebas E2E de validación (Playwright + Chromium)
// Ejecutar: node scripts/e2e.mjs
// Requiere: npm run build previo y npx playwright install chromium
// ============================================================
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { setTimeout as sleep } from 'node:timers/promises'

const PORT = 4173
const BASE = `http://localhost:${PORT}/`

const results = []
const record = (name, ok, detail = '') => {
  results.push({ name, ok, detail })
  console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ' — ' + detail : ''}`)
}

// Inicia el servidor de preview (cross-platform: node + vite.js directo)
const viteBin = fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url))
const projectDir = fileURLToPath(new URL('..', import.meta.url))
const server = spawn(process.execPath, [viteBin, 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: projectDir,
  stdio: 'ignore',
})
await sleep(2500)

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
page.on('pageerror', (e) => record('Sin errores JS en página', false, e.message))

try {
  // 1. Dashboard carga
  await page.goto(BASE + '#/')
  await page.waitForSelector('h1:has-text("Dashboard")', { timeout: 8000 })
  record('Dashboard carga', true)

  // 2. Navegación a la ruta de aprendizaje
  await page.click('a[href="#/ruta"]')
  await page.waitForSelector('h1:has-text("Ruta de aprendizaje")')
  const moduleCount = await page.locator('a[href^="#/ruta/"]').count()
  record('Ruta de aprendizaje muestra módulos', moduleCount > 0, `${moduleCount} módulos`)

  // 3. Módulo y lección
  await page.click('a[href="#/ruta/m01"]')
  await page.waitForSelector('h1:has-text("Estructura organizacional")')
  record('Vista de módulo carga', true)
  await page.click('a[href="#/leccion/m01-l01"]')
  await page.waitForSelector('h1:has-text("La DIAN: naturaleza")')
  record('Vista de lección carga', true)
  const svg = await page.locator('.mentefacto').count()
  record('Mentefacto presente en lección', svg > 0)

  // 4. Cuestionario de lección: responder y calificar
  await page.click('button:has-text("Presentar cuestionario final")')
  await page.waitForSelector('button:has-text("Comenzar"), .option-btn')
  if (await page.locator('button:has-text("Comenzar")').count()) {
    await page.click('button:has-text("Comenzar")')
  }
  await page.waitForSelector('.option-btn')
  const optCount = await page.locator('.option-btn').count()
  record('Cuestionario muestra 4 opciones', optCount === 4)
  // Responde todas las preguntas (elige siempre la opción A)
  let guard = 0
  while ((await page.locator('button:has-text("Entregar respuestas")').count()) > 0 && guard < 30) {
    const entregar = page.locator('button:has-text("Entregar respuestas")')
    if (await entregar.isEnabled()) break
    await page.locator('.option-btn').first().click()
    const next = page.locator('button:has-text("Siguiente →")')
    if (await next.isEnabled()) await next.click()
    guard++
  }
  const entregarBtn = page.locator('button:has-text("Entregar respuestas")')
  if (await entregarBtn.isEnabled()) {
    await entregarBtn.click()
    await page.waitForSelector('div[role="dialog"]')
    record('Confirmación antes de entregar aparece', true)
    await page.click('button:has-text("Sí, entregar")')
  } else {
    record('Confirmación antes de entregar aparece', false, 'botón entregar no habilitado')
  }
  await page.waitForSelector('h2:has-text("Resultado")', { timeout: 8000 })
  const scoreText = await page.locator('.kpi-value').first().textContent()
  record('Cuestionario califica con porcentaje', /\d+%/.test(scoreText ?? ''), scoreText ?? '')
  await page.click('button:has-text("Continuar")')

  // 5. Progreso persistido (lección completada)
  await page.waitForSelector('button:has-text("Repetir cuestionario final")')
  record('Lección marcada como completada', true)
  await page.reload()
  await page.waitForSelector('h1:has-text("La DIAN: naturaleza")')
  const doneBtn = await page.locator('button:has-text("Repetir cuestionario final")').count()
  record('Progreso persiste tras recargar', doneBtn === 1)

  // 6. Fichas de memoria
  await page.click('a[href="#/fichas"]')
  await page.waitForSelector('.flashcard')
  record('Fichas cargan', true)
  await page.click('.flashcard-inner')
  record('Ficha se voltea', await page.locator('.flashcard-inner.flipped').count() === 1)
  await page.click('button:has-text("Me resultó fácil")')

  // 7. Modo de estudio: feedback inmediato
  await page.click('a[href="#/modo-estudio"]')
  await page.waitForSelector('h1:has-text("Modo de estudio")')
  await page.click('button:has-text("Comenzar a estudiar")')
  await page.waitForSelector('.option-btn')
  await page.locator('.option-btn').first().click()
  const feedback = await page.locator('text=¡Correcto!').count() + (await page.locator('text=Incorrecto').count())
  record('Modo de estudio muestra explicación inmediata', feedback > 0)

  // 8. Banco: favorito persiste
  await page.click('a[href="#/banco"]')
  await page.waitForSelector('h1:has-text("Banco de preguntas")')
  const favBtns = page.locator('button[aria-label="Marcar como favorita"]')
  await favBtns.first().click()
  await page.reload()
  await page.waitForSelector('h1:has-text("Banco de preguntas")')
  const favNow = await page.locator('button[aria-label="Marcar como favorita"]').first().textContent()
  record('Favorito persiste tras recargar', (favNow ?? '').includes('★'))

  // 9. Simulacro con cronómetro
  await page.click('a[href="#/simulacros"]')
  await page.waitForSelector('h1:has-text("Simulacros")')
  await page.selectOption('select >> nth=0', '5')
  await page.selectOption('select >> nth=2', '10')
  await page.click('button:has-text("Iniciar simulacro")')
  await page.waitForSelector('div[role="dialog"], .card')
  if (await page.locator('button:has-text("Comenzar")').count()) {
    await page.click('button:has-text("Comenzar")')
  }
  await page.waitForSelector('.timer')
  const timerText = await page.locator('.timer').textContent()
  record('Cronómetro funciona', /\d+:\d+/.test(timerText ?? ''), timerText ?? '')

  // 10. Diagnóstico disponible
  await page.click('a[href="#/diagnostico"]')
  await page.waitForSelector('h1:has-text("Diagnóstico personalizado")')
  const hasTable = await page.locator('table.data-table').count()
  record('Diagnóstico muestra tablas de resultados', hasTable > 0)

  // 11. Móvil: sin desbordamiento horizontal
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } })
  await mobile.goto(BASE + '#/')
  await mobile.waitForSelector('h1:has-text("Dashboard")')
  const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2)
  record('Sin desbordamiento horizontal en móvil (dashboard)', !overflow)
  await mobile.click('a[href="#/ruta"]')
  await mobile.waitForSelector('h1:has-text("Ruta de aprendizaje")')
  const overflow2 = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2)
  record('Sin desbordamiento horizontal en móvil (ruta)', !overflow2)
  await mobile.close()

  // 12. Ruta directa (HashRouter) tras recarga
  await page.goto(BASE + '#/banco')
  await page.waitForSelector('h1:has-text("Banco de preguntas")')
  record('Recarga en ruta hash directa funciona', true)

  // 13. Exportar progreso
  await page.click('a[href="#/ajustes"]')
  await page.waitForSelector('h1:has-text("Ajustes y datos")')
  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 8000 }),
    page.click('button:has-text("Exportar progreso")'),
  ])
  record('Exportación de progreso descarga JSON', (download.suggestedFilename() ?? '').endsWith('.json'))

  // 14. Borrar progreso con confirmación
  await page.click('button:has-text("Borrar todo el progreso")')
  await page.waitForSelector('text=¿Seguro que quieres borrar todo?')
  record('Borrado pide confirmación', true)
  await page.click('button:has-text("Cancelar")')
} catch (e) {
  record('Flujo general', false, e.message)
} finally {
  await browser.close()
  server.kill()
}

const failed = results.filter((r) => !r.ok)
console.log('\n==============================')
console.log(`RESULTADO: ${results.length - failed.length}/${results.length} pruebas OK`)
if (failed.length) {
  console.log('Fallidas:')
  failed.forEach((f) => console.log(`  ✗ ${f.name} — ${f.detail}`))
  process.exit(1)
}
