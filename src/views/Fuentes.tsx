import { OFFICIAL_SOURCES, CONVOCATORIA_INFO } from '../data/sources'

// ============================================================
// Fuentes oficiales y datos de la convocatoria.
// ============================================================

export default function Fuentes() {
  return (
    <div>
      <h1>Fuentes oficiales</h1>
      <p>
        Enlaces institucionales verificados el 2026-10-15. Consulta siempre estas fuentes para
        confirmar la normativa vigente.
      </p>

      <div className="card" style={{ marginBottom: 24 }}>
        <h2>Datos de la convocatoria</h2>
        <ul>
          <li>
            <strong>Entidad:</strong> {CONVOCATORIA_INFO.entidad}
          </li>
          <li>
            <strong>Nivel:</strong> {CONVOCATORIA_INFO.nivel}
          </li>
          <li>
            <strong>Denominación:</strong> {CONVOCATORIA_INFO.denominacion}
          </li>
          <li>
            <strong>Empleo:</strong> {CONVOCATORIA_INFO.empleo}
          </li>
          <li>
            <strong>Código de inscripción mostrado en la captura:</strong>{' '}
            {CONVOCATORIA_INFO.codigoInscripcion}
          </li>
        </ul>
      </div>

      {OFFICIAL_SOURCES.map((s) => (
        <div className="card" key={s.url} style={{ marginBottom: 12 }}>
          <h3>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          </h3>
          <p style={{ fontSize: 'var(--fs-sm)' }}>{s.description}</p>
        </div>
      ))}

      <div className="callout callout-aviso">
        <strong className="ct-title">Sobre la verificación de normas</strong>
        Las referencias normativas de las lecciones se revisaron el 2026-10-15 en la medida de lo
        posible. Las normas marcadas como «pendiente de validar» deben consultarse en el
        Normograma DIAN o en SUIN-Juriscol antes de usarse en un contexto oficial. La plataforma
        es una herramienta de estudio y no sustituye las fuentes oficiales de la DIAN ni de la
        CNSC.
      </div>
    </div>
  )
}
