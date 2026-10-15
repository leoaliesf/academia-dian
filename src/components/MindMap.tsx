import type { MindMapBranch } from '../data/types'

// ============================================================
// Mentefacto / mapa conceptual en HTML + CSS.
// A diferencia de un SVG con coordenadas fijas, el texto fluye
// naturalmente: el mapa crece según su contenido, nada se corta
// y en pantallas angostas las ramas se apilan solas. Accesible
// por defecto (elementos de texto reales, no gráficos).
// ============================================================

interface Props {
  root: string
  branches: MindMapBranch[]
}

export default function MindMap({ root, branches }: Props) {
  return (
    <div className="mentefacto" role="img" aria-label={`Mapa conceptual: ${root}`}>
      <div className="mf-root">{root}</div>
      <div className="mf-connector-v" aria-hidden="true" />
      <div className="mf-branches">
        {branches.map((b) => (
          <div className="mf-branch" key={b.label}>
            <div className="mf-branch-title">{b.label}</div>
            <div className="mf-connector-v mf-connector-sm" aria-hidden="true" />
            <ul className="mf-leaves">
              {b.children.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
