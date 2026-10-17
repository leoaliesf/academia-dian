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
                Pregunta {i + 1} · {q.sourceFile.replace(/\.pdf$/i, '')}
              </summary>
              <div className="detail-body">
                <p style={{ fontSize: 'var(--fs-md)', fontWeight: 600, marginBottom: 12 }}>
                  {q.statement}
                </p>

                {q.options && q.options.length > 0 && (
                  <>
                    <h4 style={{ margin: '12px 0 8px', fontSize: 'var(--fs-sm)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--ink-500)' }}>
                      Opciones del documento
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px' }}>
                      {q.options.map((opt, j) => {
                        const isAnswer = q.correct === j
                        return (
                          <li
                            key={j}
                            style={{
                              padding: '8px 12px',
                              border: isAnswer
                                ? q.correctVerified
                                  ? '1.5px solid var(--ok-700)'
                                  : '1.5px dashed var(--warn-700)'
                                : '1px solid var(--line)',
                              borderRadius: 8,
                              marginBottom: 6,
                              fontSize: 'var(--fs-sm)',
                              background: isAnswer
                                ? q.correctVerified
                                  ? 'var(--ok-100)'
                                  : 'var(--warn-100)'
                                : '#fff',
                            }}
                          >
                            <strong>{String.fromCharCode(65 + j)}.</strong> {opt}
                            {isAnswer && (
                              <span style={{ fontWeight: 700, marginLeft: 6 }}>
                                {q.correctVerified ? '✓ respuesta según el material' : '⚠ respuesta dudosa del material'}
                              </span>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </>
                )}

                {q.correct !== undefined && q.options && q.options[q.correct] && (
                  <div className={`callout ${q.correctVerified ? 'callout-memoriza' : 'callout-aviso'}`}>
                    <strong className="ct-title">
                      {q.correctVerified ? 'Respuesta indicada por el material' : 'Respuesta indicada (sin verificar)'}
                    </strong>
                    <strong>{String.fromCharCode(65 + q.correct)}.</strong>{' '}
                    {q.options[q.correct]}
                  </div>
                )}
                {q.correct === undefined && (
                  <div className="callout callout-aviso">
                    <strong className="ct-title">Sin clave de respuesta</strong>
                    Este documento no incluye la respuesta en el texto disponible; la pregunta se
                    conserva como material de lectura.
                  </div>
                )}

                {q.explanation && (
                  <p style={{ fontSize: 'var(--fs-sm)', marginTop: 10 }}>
                    <strong>Explicación del material:</strong> {q.explanation}
                  </p>
                )}
                {q.note && (
                  <div className="callout callout-aviso" style={{ marginTop: 10 }}>
                    <strong className="ct-title">Observación</strong>
                    {q.note}
                  </div>
                )}

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12, borderTop: '1px solid var(--line)', paddingTop: 10 }}>
                  <span className="chip chip-navy">📄 {q.sourceFile}</span>
                  {q.page && <span className="chip">pág. {q.page}</span>}
                  {q.indicator && <span className="chip chip-teal">{indicatorLabel(q.indicator)}</span>}
                </div>
              </div>
            </details>
          ))}
        </>
      )}
    </div>
  )
}
