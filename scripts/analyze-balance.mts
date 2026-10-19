// Análisis de balance del banco: posición de la respuesta correcta
// y longitud relativa de la opción correcta frente a los distractores.
import { createServer } from 'vite'

async function main() {
  const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' })
  const content = await server.ssrLoadModule('/src/data/content.ts')
  await server.close()
  const qs = content.QUESTIONS as Array<{
    id: string
    correct: number
    options: string[]
  }>

  const dist = [0, 0, 0, 0]
  qs.forEach((q) => dist[q.correct]++)
  console.log(
    'Posicion de la correcta (tras rotacion):',
    dist.map((d, i) => String.fromCharCode(65 + i) + ':' + d).join('  '),
  )

  const ratio = qs.map((q) => {
    const c = q.options[q.correct].length
    let w = 0
    for (let i = 0; i < 4; i++) if (i !== q.correct) w += q.options[i].length
    w = w / 3
    return { id: q.id, ratio: +(c / Math.max(w, 1)).toFixed(2), c, w: +w.toFixed(0) }
  })
  const worst = [...ratio].sort((a, b) => b.ratio - a.ratio).slice(0, 25)
  console.log('Mayor desbalance (longitud correcta / promedio incorrectas):')
  worst.forEach((r) => console.log(' ', r.id, 'x' + r.ratio, '(' + r.c, 'vs', r.w + ')'))
  const avg = ratio.reduce((a, b) => a + b.ratio, 0) / ratio.length
  console.log('Ratio promedio:', avg.toFixed(2), '| ratio > 2:', ratio.filter((r) => r.ratio > 2).length)
}

main()
