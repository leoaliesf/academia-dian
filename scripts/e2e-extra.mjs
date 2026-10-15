// Pruebas E2E complementarias: examen final, biblioteca,
// diagnóstico con plan de estudio, mentefactos y simulacro.
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { setTimeout as sleep } from 'node:timers/promises'

const PORT = 4174
const BASE = `http://localhost:${PORT}/`
const results = []
const record = (name, ok, detail = '') => {
  results.push({ name, ok })
  console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ' — ' + detail : ''}`)
}

const viteBin = fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url))
const server = spawn(process.execPath, [viteBin, 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: fileURLToPath(new URL('..', import.meta.url)),
  stdio: 'ignore',
})
await sleep(2500)

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
page.on('pageerror', (e) => record('Sin errores JS', false, e.message))

try {
  // Examen final: pantalla de configuración
  await page.goto(BASE + '#/examen-final')
  await page.waitForSelector('h1:has-text("Examen final integral")')
  const hasComenzar = await page.locator('button:has-text("Comenzar examen")').count()
  record('Examen final muestra configuración', hasComenzar === 1)

  // Biblioteca de los PDF
  await page.goto(BASE + '#/biblioteca')
  await page.waitForSelector('h1:has-text("Biblioteca de los PDF")')
  const chapters = await page.locator('details.detail').count()
  record('Biblioteca muestra capítulos de ambos PDF', chapters >= 10, `${chapters} capítulos`)
  await page.locator('details.detail').first().click()
  record('Capítulo de biblioteca se expande', await page.locator('details.detail').first().getAttribute('open') !== null)

  // Mentefactos
  await page.goto(BASE + '#/mentefactos')
  await page.waitForSelector('h1:has-text("Mentefactos")')
  const maps = await page.locator('svg.mindmap-svg').count()
  record('Galería de mentefactos con mapas SVG', maps >= 10, `${maps} mapas`)

  // Simulacro de 5 preguntas completo (entrega real)
  await page.goto(BASE + '#/simulacros')
  await page.waitForSelector('h1:has-text("Simulacros")')
  await page.selectOption('select >> nth=0', '5')
  await page.click('button:has-text("Iniciar simulacro")')
  await page.waitForSelector('button:has-text("Comenzar"), .option-btn')
  if (await page.locator('button:has-text("Comenzar")').count()) await page.click('button:has-text("Comenzar")')
  await page.waitForSelector('.option-btn')
  let guard = 0
  while ((await page.locator('button:has-text("Entregar respuestas")').count()) > 0 && guard < 20) {
    const entregar = page.locator('button:has-text("Entregar respuestas")')
    if (await entregar.isEnabled()) break
    await page.locator('.option-btn').first().click()
    const next = page.locator('button:has-text("Siguiente →")')
    if (await next.isEnabled()) await next.click()
    guard++
  }
  await page.locator('button:has-text("Entregar respuestas")').click()
  await page.waitForSelector('div[role="dialog"]')
  await page.click('button:has-text("Sí, entregar")')
  await page.waitForSelector('h2:has-text("Resultado")', { timeout: 10000 })
  record('Simulacro califica y muestra resultado', true)

  // Diagnóstico: plan de estudio con botones directos
  await page.goto(BASE + '#/diagnostico')
  await page.waitForSelector('h1:has-text("Diagnóstico personalizado")')
  const plan = await page.locator('h2:has-text("Tu plan de estudio personalizado")').count()
  record('Diagnóstico genera plan de estudio', plan === 1)
  const planButtons = await page.locator('a.btn').count()
  record('Plan con botones directos a actividades', planButtons > 0, `${planButtons} enlaces`)
  const rows = await page.locator('table.data-table tbody tr').count()
  record('Tablas del diagnóstico pobladas', rows > 25, `${rows} filas`)

  // Buscador
  await page.goto(BASE + '#/buscar')
  await page.waitForSelector('h1:has-text("Buscar temas")')
  await page.fill('.search-input', 'sanción')
  await page.waitForTimeout(400)
  const hits = await page.locator('li').count()
  record('Buscador encuentra resultados para «sanción»', hits > 0, `${hits} resultados`)
} catch (e) {
  record('Flujo complementario', false, e.message)
} finally {
  await browser.close()
  server.kill()
}

const failed = results.filter((r) => !r.ok)
console.log(`\nRESULTADO: ${results.length - failed.length}/${results.length} pruebas OK`)
if (failed.length) process.exit(1)
