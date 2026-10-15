// Fuentes oficiales. Revisadas: 2026-10-15 (fecha de construcción del sitio).
// Si un enlace deja de funcionar, búscalo desde el portal principal de la entidad.

export interface OfficialSource {
  label: string
  url: string
  description: string
}

export const OFFICIAL_SOURCES: OfficialSource[] = [
  {
    label: 'DIAN — Portal institucional',
    url: 'https://www.dian.gov.co/',
    description: 'Sitio oficial de la Dirección de Impuestos y Aduanas Nacionales: normativa, trámites, consultas y noticias.',
  },
  {
    label: 'Normograma DIAN',
    url: 'https://normograma.dian.gov.co/dian/',
    description: 'Compendio normativo de la DIAN: decretos, resoluciones y conceptos de la entidad.',
  },
  {
    label: 'SUIN – Juriscol (Sistema Único de Información Normativa)',
    url: 'https://www.suin-juriscol.gov.co/',
    description: 'Sistema del Ministerio de Justicia con leyes y decretos colombianos consolidados.',
  },
  {
    label: 'Función Pública',
    url: 'https://www.funcionpublica.gov.co/',
    description: 'Departamento Administrativo de la Función Pública: empleo público, competencias y Código de Integridad.',
  },
  {
    label: 'CNSC — Comisión Nacional del Servicio Civil',
    url: 'https://www.cnsc.gov.co/',
    description: 'Entidad que administra los procesos de selección por mérito, incluida la convocatoria DIAN.',
  },
  {
    label: 'Banco de la República',
    url: 'https://www.banrep.gov.co/',
    description: 'Autoridad monetaria, cambiaria y crediticia de Colombia; reglamentación del régimen cambiario.',
  },
  {
    label: 'UIAF — Unidad de Información y Análisis Financiero',
    url: 'https://www.uiaf.gov.co/',
    description: 'Unidad de inteligencia financiera: prevención del lavado de activos y financiación del terrorismo.',
  },
]

export const CONVOCATORIA_INFO = {
  entidad: 'DIAN — Dirección de Impuestos y Aduanas Nacionales',
  nivel: 'Profesional',
  denominacion: 'Gestor I',
  empleo: '236767',
  codigoInscripcion: '1320744154',
}
