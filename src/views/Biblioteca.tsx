import { useState } from 'react'
import { PDF_DOCUMENTS } from '../data/biblioteca'
import { indicatorLabel } from '../data/indicators'

// ============================================================
// Biblioteca de los PDF: resumen general de cada documento y
// resúmenes por unidad/capítulo con páginas de origen,
// indicadores relacionados y diferencias entre documentos.
// ============================================================

export default function Biblioteca() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div>
      <h1>Biblioteca de los PDF</h1>
      <p>
        Resumen organizado de los dos documentos de estudio. Se indican las páginas de origen
        cuando fue posible identificarlas, los indicadores de la convocatoria relacionados y las
        diferencias entre ambos documentos.
      </p>

      {PDF_DOCUMENTS.map((doc) => (
        <div className="card" key={doc.doc} style={{ marginBottom: 24 }}>
          <h2>{doc.title}</h2>
          <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-500)' }}>
            Archivo: <code>{doc.file}</code>
          </p>
          <p>{doc.description}</p>

          <h3>Resumen general</h3>
          <ul>
            {doc.overview.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>

          {doc.differencesNote && (
            <div className="callout callout-aviso">
              <strong className="ct-title">Diferencias entre documentos</strong>
              {doc.differencesNote}
            </div>
          )}

          <h3>Unidades y capítulos</h3>
          {doc.chapters.map((ch, i) => {
            const isOpen = open === `${doc.doc}-${i}`
            return (
              <details
                key={i}
                className="detail"
                open={isOpen}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) setOpen(`${doc.doc}-${i}`)
                }}
              >
                <summary>
                  {ch.title}
                  {ch.pages && (
                    <span style={{ color: 'var(--ink-500)', fontWeight: 400, fontSize: 'var(--fs-sm)' }}>
                      {' '}
                      · {ch.pages}
                    </span>
                  )}
                </summary>
                <div className="detail-body">
                  <ul>
                    {ch.summary.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ul>
                  {ch.note && <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-500)' }}>{ch.note}</p>}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {ch.indicators.map((ind) => (
                      <span key={ind} className="chip chip-teal">
                        {indicatorLabel(ind)}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            )
          })}
        </div>
      ))}

      <div className="card">
        <h3>Sobre el material de 2022</h3>
        <p style={{ fontSize: 'var(--fs-sm)' }}>
          El curso «Fiscalización en materia Tributaria, Aduanera, Cambiaria e Internacional» es de
          2022 y puede contener referencias normativas que hayan cambiado (por ejemplo, reformas
          tributarias posteriores). Las lecciones de la plataforma marcan el estado de verificación
          de cada norma: <span className="chip chip-ok">vigente al revisar</span>{' '}
          <span className="chip chip-warn">pendiente de validar</span>{' '}
          <span className="chip chip-bad">modificada / derogada</span>. Revisión realizada el
          2026-10-15.
        </p>
      </div>
    </div>
  )
}
