import { useMemo, useState } from 'react'
import { DOC_QUESTIONS } from '../data/content'
import { indicatorLabel } from '../data/indicators'

// ============================================================
// Colección documental: preguntas extraídas de los materiales de
// práctica aportados (pruebas pasadas y simulacros). Se conservan
// diferenciadas del banco de práctica y NO se presentan como
// preguntas oficiales de la DIAN ni de la CNSC.
// ============================================================

export default function Documental() {
  const [sourceFile, setSourceFile] = useState<string>('todos')

  const sources = useMemo(() => {
    const map = new Map<string, number>()
    for (const q of DOC_QUESTIONS) map.set(q.sourceFile, (map.get(q.sourceFile) ?? 0) + 1)
    return [...map.entries()]
  }, [])

  const filtered = useMemo(
    () => (sourceFile === 'todos' ? DOC_QUESTIONS : DOC_QUESTIONS.filter((q) => q.sourceFile === sourceFile)),
    [sourceFile],
  )

  return (
    <div>
      <h1>Colección documental</h1>
      <p>
        Preguntas extraídas textualmente de los materiales de práctica aportados (pruebas pasadas
        y simulacros), conservadas con su referencia de origen. Sirven para estudiar el estilo de
        evaluación real, pero{' '}
        <strong>no son preguntas oficiales de la DIAN ni de la CNSC</strong> y algunas claves de
        respuesta pueden estar desactualizadas o ser dudosas: se marcan individualmente.
      </p>

      <div className="callout callout-aviso">
        <strong className="ct-title">Cómo usar esta colección</strong>
        Estudia cada pregunta junto con la explicación del material cuando exista. Las marcadas
        como <span className="chip chip-warn">respuesta dudosa</span> o{' '}
        <span className="chip chip-bad">norma posiblemente desactualizada</span> deben
        contrastarse con las fuentes oficiales antes de memorizarlas.
      </div>

      {DOC_QUESTIONS.length === 0 ? (
        <div className="card">
          <p style={{ color: 'var(--ink-500)' }}>
            La colección aún no tiene preguntas cargadas. Se irá poblando con el análisis de los
            materiales.
          </p>
        </div>
      ) : (
        <>
          <div className="card">
            <label>
              <strong style={{ fontSize: 'var(--fs-sm)' }}>Filtrar por documento de origen</strong>
              <select
                className="search-input"
                value={sourceFile}
                onChange={(e) => setSourceFile(e.target.value)}
                style={{ marginTop: 6, maxWidth: 560 }}
              >
                <option value="todos">Todos los documentos ({DOC_QUESTIONS.length} preguntas)</option>
                {sources.map(([file, count]) => (
                  <option key={file} value={file}>
                    {file} ({count})
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filtered.map((q, i) => (
            <details className="card detail" key={q.id} style={{ marginTop: 12 }}>
              <summary style={{ fontSize: 'var(--fs-sm)', fontWeight: 600, color: 'var(--ink-900)' }}>
                {i + 1}. {q.statement.slice(0, 150)}
                {q.statement.length > 150 ? '…' : ''}
              </summary>
              <div className="detail-body">
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                  <span className="chip chip-navy">📄 {q.sourceFile}</span>
                  {q.page && <span className="chip">pág. {q.page}</span>}
                  {q.indicator && <span className="chip chip-teal">{indicatorLabel(q.indicator)}</span>}
                  {q.correct !== undefined && (
                    q.correctVerified ? (
                      <span className="chip chip-ok">respuesta indicada: {String.fromCharCode(65 + q.correct)}</span>
                    ) : (
                      <span className="chip chip-warn">respuesta indicada: {String.fromCharCode(65 + q.correct)} (dudosa)</span>
                    )
                  )}
                  {q.correct === undefined && <span className="chip chip-bad">sin clave de respuesta</span>}
                </div>

                {q.options && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 10px' }}>
                    {q.options.map((opt, j) => (
                      <li
                        key={j}
                        style={{
                          padding: '6px 12px',
                          border: '1px solid var(--line)',
                          borderRadius: 8,
                          marginBottom: 6,
                          fontSize: 'var(--fs-sm)',
                          background: q.correct === j ? 'var(--ok-100)' : '#fff',
                        }}
                      >
                        <strong>{String.fromCharCode(65 + j)}.</strong> {opt}
                        {q.correct === j && q.correctVerified && <span> ✓ (según el material)</span>}
                      </li>
                    ))}
                  </ul>
                )}

                {q.explanation && (
                  <p style={{ fontSize: 'var(--fs-sm)' }}>
                    <strong>Explicación del material:</strong> {q.explanation}
                  </p>
                )}
                {q.note && (
                  <div className="callout callout-aviso" style={{ marginTop: 10 }}>
                    <strong className="ct-title">Observación</strong>
                    {q.note}
                  </div>
                )}
              </div>
            </details>
          ))}
        </>
      )}
    </div>
  )
}
