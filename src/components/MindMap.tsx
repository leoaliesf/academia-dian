import type { MindMapBranch } from '../data/types'

// Mentefacto / mapa conceptual radial en SVG.
// No depende de bibliotecas externas: funciona en GitHub Pages.

function wrap(text: string, max: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let cur = ''
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) {
      if (cur) lines.push(cur)
      cur = w
    } else {
      cur = (cur + ' ' + w).trim()
    }
  }
  if (cur) lines.push(cur)
  return lines
}

interface Props {
  root: string
  branches: MindMapBranch[]
}

const W = 900
const H = 560
const CX = W / 2
const CY = H / 2
const ROOT_RX = 110
const ROOT_RY = 52
const BRANCH_R = 185
const LEAF_R = 310

export default function MindMap({ root, branches }: Props) {
  const n = branches.length
  const angleFor = (i: number) => (i / n) * Math.PI * 2 - Math.PI / 2

  const branchPos = branches.map((_, i) => {
    const a = angleFor(i)
    return { x: CX + BRANCH_R * Math.cos(a), y: CY + BRANCH_R * Math.sin(a) }
  })

  const leaves = branches.map((b, i) => {
    const a = angleFor(i)
    return b.children.map((c, j) => {
      const spread = Math.max(b.children.length - 1, 1)
      const t = spread === 0 ? 0 : (j / spread) * 2 - 1
      const aa = a + t * 0.42
      return { text: c, x: CX + LEAF_R * Math.cos(aa), y: CY + LEAF_R * Math.sin(aa), parent: i }
    })
  })

  const rootLines = wrap(root, 22)

  return (
    <svg
      className="mindmap-svg"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Mapa conceptual: ${root}`}
      style={{ width: '100%', height: 'auto', minWidth: 560 }}
    >
      {/* conexiones ramas */}
      {branches.map((_, i) => (
        <line
          key={`lb-${i}`}
          x1={CX}
          y1={CY}
          x2={branchPos[i].x}
          y2={branchPos[i].y}
          stroke="#93a1b8"
          strokeWidth={2}
        />
      ))}
      {/* conexiones hojas */}
      {leaves.flat().map((l, i) => (
        <line
          key={`ll-${i}`}
          x1={branchPos[l.parent].x}
          y1={branchPos[l.parent].y}
          x2={l.x}
          y2={l.y}
          stroke="#c3d2e4"
          strokeWidth={1.5}
        />
      ))}
      {/* nodo raíz */}
      <rect
        x={CX - ROOT_RX}
        y={CY - ROOT_RY}
        width={ROOT_RX * 2}
        height={ROOT_RY * 2}
        rx={14}
        fill="#0b2545"
      />
      {rootLines.map((line, i) => (
        <text
          key={i}
          x={CX}
          y={CY - (rootLines.length - 1) * 9 + i * 18}
          textAnchor="middle"
          fill="#fff"
          fontWeight={700}
          fontSize={15}
        >
          {line}
        </text>
      ))}
      {/* ramas */}
      {branches.map((b, i) => {
        const lines = wrap(b.label, 26)
        return (
          <g key={`b-${i}`}>
            <rect
              x={branchPos[i].x - 95}
              y={branchPos[i].y - 16 - (lines.length - 1) * 8}
              width={190}
              height={32 + (lines.length - 1) * 16}
              rx={10}
              fill="#17a89b"
            />
            {lines.map((line, j) => (
              <text
                key={j}
                x={branchPos[i].x}
                y={branchPos[i].y - (lines.length - 1) * 8 + j * 16 + 2}
                textAnchor="middle"
                fill="#04302c"
                fontWeight={700}
                fontSize={12.5}
              >
                {line}
              </text>
            ))}
          </g>
        )
      })}
      {/* hojas */}
      {leaves.flat().map((l, i) => {
        const lines = wrap(l.text, 24)
        return (
          <g key={`leaf-${i}`}>
            <rect
              x={l.x - 85}
              y={l.y - 9 - (lines.length - 1) * 7}
              width={170}
              height={20 + (lines.length - 1) * 14}
              rx={8}
              fill="#eef4fb"
              stroke="#1d4e89"
              strokeWidth={1}
            />
            {lines.map((line, j) => (
              <text
                key={j}
                x={l.x}
                y={l.y - (lines.length - 1) * 7 + j * 14 + 1}
                textAnchor="middle"
                fill="#13315c"
                fontSize={11.5}
              >
                {line}
              </text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}
