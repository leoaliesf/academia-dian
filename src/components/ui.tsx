import type { Section, TableData } from '../data/types'

// Componentes de presentación reutilizables

export function ProgressBar({ pct, small }: { pct: number; small?: boolean }) {
  const clamped = Math.max(0, Math.min(100, pct))
  return (
    <div
      className={`progress${small ? ' progress-sm' : ''}`}
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Avance: ${Math.round(clamped)}%`}
    >
      <span style={{ width: `${clamped}%` }} />
    </div>
  )
}

const CALLOUT_TITLES: Record<string, string> = {
  importante: 'Importante',
  memoriza: 'Para memorizar',
  error: 'Error frecuente',
  ejemplo: 'Ejemplo',
  norma: 'Norma',
  aviso: 'Aviso',
}

export function Callout({
  type,
  text,
}: {
  type: 'importante' | 'memoriza' | 'error' | 'ejemplo' | 'norma' | 'aviso'
  text: string
}) {
  return (
    <div className={`callout callout-${type}`}>
      <strong className="ct-title">{CALLOUT_TITLES[type]}</strong>
      {text}
    </div>
  )
}

export function DataTable({ data }: { data: TableData }) {
  return (
    <div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              {data.headers.map((h, i) => (
                <th key={i} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.caption && <div className="table-caption">{data.caption}</div>}
    </div>
  )
}

/** Renderiza una sección de lección (párrafos, viñetas, tabla, callout, norma) */
export function SectionView({ section }: { section: Section }) {
  return (
    <section style={{ marginBottom: 'var(--sp-4)' }}>
      {section.heading && <h3>{section.heading}</h3>}
      {section.paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {section.bullets && (
        <ul>
          {section.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {section.table && <DataTable data={section.table} />}
      {section.callout && <Callout type={section.callout.type} text={section.callout.text} />}
      {section.norm && (
        <Callout
          type="norma"
          text={`${section.norm.norm}${section.norm.article ? ` — ${section.norm.article}` : ''}${
            section.norm.note ? ` (${section.norm.note})` : ''
          }`}
        />
      )}
    </section>
  )
}

export function NormStatusChip({ status }: { status: 'vigente' | 'verificar' | 'modificada' }) {
  if (status === 'vigente') return <span className="chip chip-ok">vigente al revisar</span>
  if (status === 'verificar') return <span className="chip chip-warn">pendiente de validar</span>
  return <span className="chip chip-bad">modificada / derogada</span>
}
