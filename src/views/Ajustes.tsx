import { useRef, useState } from 'react'
import { useApp } from '../store/AppContext'
import { exportProgress, importProgress } from '../lib/storage'

// ============================================================
// Ajustes: exportar/importar progreso y borrarlo con
// confirmación.
// ============================================================

export default function Ajustes() {
  const { state, dispatch } = useApp()
  const [confirming, setConfirming] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const onExport = () => {
    const json = exportProgress(state)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `academia-dian-progreso-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const onImportFile = async (file: File) => {
    try {
      const text = await file.text()
      const imported = importProgress(text)
      dispatch({ type: 'state/import', state: imported })
      setMessage('✅ Progreso importado correctamente.')
    } catch (e) {
      setMessage(`❌ No se pudo importar: ${(e as Error).message}`)
    }
  }

  const onClear = () => {
    dispatch({ type: 'state/reset' })
    setConfirming(false)
    setMessage('🗑️ Progreso borrado. Empiezas de cero.')
  }

  return (
    <div>
      <h1>Ajustes y datos</h1>

      <div className="callout callout-importante">
        <strong className="ct-title">Cómo se guardan tus datos</strong>
        Todo tu progreso se guarda <strong>localmente en este navegador</strong> (localStorage). No
        se sincroniza entre dispositivos ni se envía a ningún servidor. Si cambias de navegador o
        de equipo, exporta e importa tu progreso.
      </div>

      <div className="card">
        <h3>Exportar progreso</h3>
        <p style={{ fontSize: 'var(--fs-sm)' }}>
          Descarga un archivo JSON con lecciones completadas, resultados, favoritos, notas y
          fichas. Guárdalo como respaldo.
        </p>
        <button className="btn btn-primary" onClick={onExport}>
          ⬇️ Exportar progreso
        </button>
      </div>

      <div className="card">
        <h3>Importar progreso</h3>
        <p style={{ fontSize: 'var(--fs-sm)' }}>
          Restaura un respaldo exportado anteriormente. Reemplaza el progreso actual de este
          navegador.
        </p>
        <button className="btn btn-outline" onClick={() => fileRef.current?.click()}>
          ⬆️ Importar desde archivo
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          style={{ display: 'none' }}
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) onImportFile(f)
            e.target.value = ''
          }}
        />
      </div>

      <div className="card" style={{ borderColor: 'var(--bad-100)' }}>
        <h3>Borrar todo el progreso</h3>
        <p style={{ fontSize: 'var(--fs-sm)' }}>
          Elimina permanentemente todo el progreso guardado en este navegador. Esta acción no se
          puede deshacer (por eso te pedimos confirmación).
        </p>
        {confirming ? (
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontWeight: 600, color: 'var(--bad-700)' }}>
              ¿Seguro que quieres borrar todo?
            </span>
            <button className="btn btn-danger" onClick={onClear}>
              Sí, borrar todo
            </button>
            <button className="btn btn-ghost" onClick={() => setConfirming(false)}>
              Cancelar
            </button>
          </div>
        ) : (
          <button className="btn btn-danger" onClick={() => setConfirming(true)}>
            Borrar todo el progreso
          </button>
        )}
      </div>

      {message && (
        <div className="callout callout-importante" style={{ marginTop: 16 }}>
          {message}
        </div>
      )}
    </div>
  )
}
