import { useCallback, useEffect, useState } from 'react'
import type { MindMapBranch } from '../data/types'
import MindMap from './MindMap'

// ============================================================
// Visor de mentefactos: muestra el mapa ajustado al ancho
// disponible y ofrece un botón para verlo ampliado en pantalla
// completa (modal con cierre por botón, tecla Esc o clic fuera).
// ============================================================

interface Props {
  root: string
  branches: MindMapBranch[]
}

export default function MindMapViewer({ root, branches }: Props) {
  const [expanded, setExpanded] = useState(false)

  const close = useCallback(() => setExpanded(false), [])

  // Cerrar con la tecla Escape
  useEffect(() => {
    if (!expanded) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expanded, close])

  return (
    <div>
      <div className="mindmap-wrap">
        <MindMap root={root} branches={branches} />
        <div style={{ marginTop: 10, textAlign: 'right' }}>
          <button className="btn btn-sm btn-outline" onClick={() => setExpanded(true)}>
            🔍 Ver ampliado
          </button>
        </div>
      </div>

      {expanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Mapa conceptual ampliado: ${root}`}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(8,26,51,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 60,
            padding: 16,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div
            className="card"
            style={{
              width: '100%',
              maxWidth: 1100,
              maxHeight: '92vh',
              overflowY: 'auto',
              position: 'relative',
              padding: 'var(--sp-4)',
            }}
          >
            <button
              className="btn btn-sm btn-ghost"
              onClick={close}
              aria-label="Cerrar vista ampliada"
              style={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}
            >
              ✕ Cerrar
            </button>
            <div style={{ overflowX: 'auto' }}>
              <MindMap root={root} branches={branches} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
