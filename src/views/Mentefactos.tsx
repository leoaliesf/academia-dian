import { Link } from 'react-router-dom'
import { MODULES } from '../data/content'
import MindMap from '../components/MindMap'

// ============================================================
// Galería de mentefactos y mapas conceptuales de todos los
// módulos, con su explicación textual accesible.
// ============================================================

export default function Mentefactos() {
  const lessonsWithMap = MODULES.flatMap((m) =>
    m.lessons.filter((l) => l.mindmap && l.mindmap.branches.length > 0).map((l) => ({ m, l })),
  )

  return (
    <div>
      <h1>Mentefactos y mapas conceptuales</h1>
      <p>
        Representaciones visuales de los conceptos principales de cada módulo, sus relaciones y
        diferencias. Debajo de cada mapa hay una explicación textual accesible.
      </p>

      {lessonsWithMap.map(({ m, l }) => (
        <div className="card" key={l.id} style={{ marginBottom: 24 }}>
          <h2>
            <Link to={`/leccion/${l.id}`}>{l.title}</Link>
          </h2>
          <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-500)' }}>{m.title}</p>
          <div className="mindmap-wrap">
            <MindMap root={l.mindmap.root} branches={l.mindmap.branches} />
          </div>
          <details className="detail" style={{ marginTop: 12 }}>
            <summary>Explicación textual del mapa</summary>
            <div className="detail-body">
              <p>{l.mindmapText}</p>
            </div>
          </details>
        </div>
      ))}
    </div>
  )
}
