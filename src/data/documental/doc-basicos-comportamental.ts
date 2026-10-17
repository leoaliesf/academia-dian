import type { DocQuestion } from '../types'

// ============================================================
// Colección documental — CONOCIMIENTOS BÁSICOS DIAN y pruebas
// comportamentales/integridad (ítems tipo escala Likert).
// El documento de básicos NO trae claves de respuesta en el
// texto extraído; los ítems comportamentales son afirmaciones de
// autopercepción sin clave única.
// NO son preguntas oficiales de la DIAN ni de la CNSC.
// ============================================================

export const DOC_QUESTIONS: DocQuestion[] = [
  {
    id: 'db-01', sourceFile: 'CONOCIMIENTOS-BASICOS-DIAN-2 (1).pdf', page: '1',
    statement: 'Caso: actualización de Tablas de Retención Documental (TRD). Las etapas generales del proyecto y los responsables de elaborar y aprobar las TRD:',
    options: ['Planear, diagnosticar, elaborar, aprobar y publicar; las TRD se elaboran con la metodología del AGN y se aprueban por el comité institucional de gestión y desempeño correspondiente', 'Solo el jefe de archivo las elabora y aprueba', 'No requieren aprobación formal'],
    correct: 0, correctVerified: false,
    note: 'Sin clave en el material; la respuesta indicada se basa en la normativa archivística general (Ley 594 de 2000, Decreto 1080 de 2015). Verificar con el AGN.',
    indicator: 'i02',
  },
  {
    id: 'db-02', sourceFile: 'CONOCIMIENTOS-BASICOS-DIAN-2 (1).pdf', page: '1',
    statement: 'Antes de proceder a la eliminación de documentos, la entidad debe:',
    options: ['Contar con las TRD/TVD actualizadas, el inventario documental y la publicación del proceso en la página web, conforme al procedimiento del AGN', 'Destruir directamente los documentos vencidos', 'Eliminar sin inventario para ahorrar tiempo'],
    correct: 0, correctVerified: false,
    note: 'Sin clave en el material; conforme a Ley 594 de 2000 y Acuerdo 001 de 2024 del AGN (procedimiento de eliminación con publicación).',
    indicator: 'i02',
  },
  {
    id: 'db-03', sourceFile: 'CONOCIMIENTOS-BASICOS-DIAN-2 (1).pdf', page: '2',
    statement: 'Caso: riesgo en el archivo central. La primera medida frente al riesgo detectado es:',
    options: ['Adoptar medidas de prevención y atención de emergencias documentales y actualizar el sistema integrado de conservación (SIC)', 'Trasladar todos los documentos a otra sede sin inventario', 'Esperar el informe del comité'],
    correct: 0, correctVerified: false,
    note: 'Sin clave en el material; respuesta orientada por la gestión documental (medidas preventivas y SIC).',
    indicator: 'i02',
  },
  {
    id: 'db-04', sourceFile: 'CONOCIMIENTOS-BASICOS-DIAN-2 (1).pdf', page: '3',
    statement: 'Caso: articulación del plan de gestión documental con MIPG. Para cumplir MIPG, la entidad debe:',
    options: ['Articular la gestión documental con las políticas de gestión y desempeño institucional de MIPG (planeación, información y comunicación, control interno)', 'Manejar la gestión documental de forma aislada del resto de la gestión', 'Delegar toda la gestión documental en el archivo general de la Nación'],
    correct: 0, correctVerified: false,
    note: 'Sin clave en el material; respuesta orientada por MIPG (Modelo Integrado de Planeación y Gestión).',
    indicator: 'i02',
  },
  {
    id: 'db-05', sourceFile: 'CONOCIMIENTOS-BASICOS-DIAN-2 (1).pdf', page: '4',
    statement: 'Caso: estrategia anual de integridad. Lo más acorde con MIPG es:',
    options: ['Formular la estrategia de integridad articulando el Código de Integridad con la gestión del riesgo de corrupción y la cultura organizacional', 'Publicar el código sin actividades de apropiación', 'Dejar la integridad a cargo exclusivo de control interno'],
    correct: 0, correctVerified: false,
    note: 'Sin clave en el material; respuesta orientada por el Código de Integridad y MIPG.',
    indicator: 'i14',
  },
  {
    id: 'db-06', sourceFile: 'CONOCIMIENTOS-BASICOS-DIAN-2 (1).pdf', page: '5',
    statement: 'Caso: gestión de conflictos de interés. La conducta esperada del servidor es:',
    options: ['Declarar oportunamente los conflictos de interés y apartarse del conocimiento o decisión del asunto, por los canales institucionales', 'Manejar el asunto sin declarar para no entorpecer el trámite', 'Consultar informalmente con compañeros y decidir según su criterio'],
    correct: 0, correctVerified: false,
    note: 'Sin clave en el material; conforme al Código de Integridad (Honestidad) y la Ley 2013 de 2019 sobre declaración de bienes y conflictos de interés.',
    indicator: 'i24',
  },
  {
    id: 'dp-01', sourceFile: 'DIAN-PRUEBAS-COMPORTAMENTALES (1).pdf', page: '1',
    statement: 'Ítem tipo escala (Likert): «Comportamiento ético: Actúo con referencia al código de ética. No necesito supervisión para obrar correctamente».',
    correct: undefined, correctVerified: false,
    note: 'Ítem de autopercepción tipo escala (totalmente en desacuerdo … totalmente de acuerdo). No tiene clave única.',
    indicator: 'i14',
  },
  {
    id: 'dp-02', sourceFile: 'DIAN-PRUEBAS-COMPORTAMENTALES (1).pdf', page: '2',
    statement: 'Ítem tipo escala: «Orientación al logro: Cumple con lo solicitado en los tiempos previstos y con los estándares de calidad requeridos».',
    correct: undefined, correctVerified: false,
    note: 'Ítem tipo escala (Likert), sin clave única.',
    indicator: 'i18',
  },
  {
    id: 'dp-03', sourceFile: 'DIAN-PRUEBAS-COMPORTAMENTALES (1).pdf', page: '2',
    statement: 'Ítem tipo escala: «Escucha y atiende al ciudadano en forma objetiva y cordial para dar respuesta dentro de los términos, orientando sus esfuerzos en la entrega de respuestas y/o soluciones oportunas, actualizadas y de calidad».',
    correct: undefined, correctVerified: false,
    note: 'Ítem tipo escala (Likert), sin clave única.',
    indicator: 'i19',
  },
  {
    id: 'dp-04', sourceFile: 'PRUEBAS-DE-INTEGRIDAD-DIAN-2026 (1).pdf', page: '1',
    statement: 'Ítem tipo escala: «Distintas a las mías. No hay nada que no se pueda solucionar hablando» (apertura a perspectivas distintas y diálogo).',
    correct: undefined, correctVerified: false,
    note: 'Ítem tipo escala (Likert) del inventario de integridad, sin clave única.',
    indicator: 'i26',
  },
  {
    id: 'dp-05', sourceFile: 'PRUEBAS-DE-INTEGRIDAD-DIAN-2026 (1).pdf', page: '1',
    statement: 'Ítem tipo escala sobre manejo del tiempo y cumplimiento: «…días, esa es la clave siempre» (cumplir los tiempos establecidos como regla permanente).',
    correct: undefined, correctVerified: false,
    note: 'Ítem tipo escala (Likert) del inventario de integridad, sin clave única.',
    indicator: 'i23',
  },
  {
    id: 'dp-06', sourceFile: 'DIAN-PRUEBAS-COMPORTAMENTALES (1).pdf', page: '3',
    statement: 'Serie de ítems tipo escala sobre Trabajo en equipo y Comunicación efectiva: afirmaciones de autopercepción sobre colaboración, acuerdos de equipo, escucha activa y claridad en la transmisión de información.',
    correct: undefined, correctVerified: false,
    note: 'Ítems tipo escala (Likert), sin clave única. El documento evalúa autopercepción con cuatro categorías de respuesta, desde "totalmente en desacuerdo" hasta "totalmente de acuerdo".',
    indicator: 'i20',
  },
]
