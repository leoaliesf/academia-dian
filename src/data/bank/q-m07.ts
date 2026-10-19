import type { Question } from '../types'

// Banco de preguntas — Módulo 7 (i07 normas y técnicas de auditoría)
export const QUESTIONS: Question[] = [
  {
    id: 'q-m07-001',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'NAGA',
    difficulty: 'basica',
    kind: 'conceptual',
    statement: 'En Colombia, las Normas de Auditoría Generalmente Aceptadas (NAGA) fueron consagradas en:',
    options: [
      'El artículo 23 de la Ley 43 de 1990.',
      'El artículo 7 de la Ley 43 de 1990.',
      'El Decreto 2649 de 1993.',
      'El artículo 13 de la Ley 1314 de 2009.',
    ],
    correct: 1,
    justification:
      'Las NAGA están consagradas en el artículo 7 de la Ley 43 de 1990, que las organiza en normas personales, de ejecución del trabajo y de rendición de informes. El artículo 23 de la misma ley trata otra materia, y citarlo es un error clásico.',
    wrong: [
      'El artículo 23 de la Ley 43 de 1990 no conceptualiza las NAGA; es la trampa más común en exámenes sobre este tema.', '', 'El Decreto 2649 de 1993 regulaba la contabilidad (hoy sustituido en lo contable por el Decreto 2420 de 2015), no las NAGA.', 'La Ley 1314 de 2009 ordena la convergencia a estándares internacionales, pero no consagra las NAGA.'
    ],
    source: 'Ley 43 de 1990, arts. 7 y 8',
  },
  {
    id: 'q-m07-002',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'NAGA',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      '¿Cuáles son los tres grupos de normas de auditoría generalmente aceptadas según la Ley 43 de 1990?',
    options: [
      'Personales, de ejecución del trabajo y de rendición de informes.',
      'Técnicas, administrativas y financieras, según el área de la auditoría.',
      'De planeación, de supervisión y de control, que agrupan las etapas del trabajo.',
      'Internas, externas y mixtas, según el origen del auditor.',
    ],
    correct: 0,
    justification:
      'El artículo 7 de la Ley 43 de 1990 clasifica las NAGA en normas personales, normas de ejecución del trabajo y normas de rendición de informes.',
    wrong: [
      '', 'No es la clasificación legal: mezcla categorías de áreas o materias y no corresponde a los tres grupos del artículo 7 de la Ley 43 de 1990.', 'Planeación y supervisión son normas de ejecución del trabajo, no grupos autónomos de la clasificación legal.', 'La clasificación legal no distingue entre auditoría interna, externa y mixta: esa es una clasificación de la auditoría, no de las NAGA.'
    ],
    source: 'Ley 43 de 1990, art. 7',
  },
  {
    id: 'q-m07-003',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'NAGA',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Un contador emite una opinión sobre estados financieros sin haber obtenido evidencia suficiente que la respalde. ¿Qué grupo de NAGA vulnera?',
    options: [
      'Normas personales.',
      'Normas de ejecución del trabajo.',
      'Normas de rendición de informes.',
      'Ninguno, porque la opinión es un acto discrecional del auditor.',
    ],
    correct: 2,
    justification:
      'Las normas de rendición de informes exigen que el auditor manifieste el alcance del examen y que, si no obtuvo evidencia suficiente, se abstenga de opinar. Emitir una opinión sin soporte vulnera ese grupo (y de paso la norma de ejecución sobre evidencia válida y suficiente).',
    wrong: [
      'Las personales se refieren al entrenamiento, independencia y diligencia del auditor, no al contenido de la opinión.', 'La obtención de evidencia es norma de ejecución; el acto de opinar sin evidencia vulnera principalmente las de rendición de informes.', '', 'La opinión no es discrecional: debe fundamentarse en evidencia suficiente y adecuada.'
    ],
    source: 'Ley 43 de 1990, art. 7',
  },
  {
    id: 'q-m07-004',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'NAI',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'Las Normas de Aseguramiento de la Información (NAI) que rigen en Colombia comprenden, entre otras:',
    options: [
      'NIA, NICC, NITR, ISAE y NISR.',
      'NIIF, NIC y NIIF para PYMES.',
      'ISSAI 100 a 400.',
      'NAGA y normas de contabilidad gubernamental.',
    ],
    correct: 0,
    justification:
      'Las NAI compiladas en el Decreto 2420 de 2015 comprenden las NIA (auditoría), NICC (control de calidad), NITR (revisión), ISAE (otros encargos de aseguramiento) y NISR (servicios relacionados).',
    wrong: [
      '', 'Las NIIF y NIC son normas de información financiera (contabilidad), no de aseguramiento.', 'Las ISSAI son normas de la INTOSAI para las entidades fiscalizadoras superiores, no hacen parte de las NAI privadas.', 'Las NAGA son el antecedente (Ley 43 de 1990), no un componente del compilado de NAI.'
    ],
    source: 'Ley 1314 de 2009; Decreto 2420 de 2015',
  },
  {
    id: 'q-m07-005',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Control fiscal',
    difficulty: 'basica',
    kind: 'conceptual',
    statement: 'El control fiscal en Colombia lo ejercen:',
    options: [
      'La DIAN y la Superintendencia Financiera.',
      'La Contraloría General de la República y las contralorías territoriales.',
      'El Ministerio de Hacienda y la Auditoría General de la Nación exclusivamente.',
      'La Procuraduría General de la Nación.',
    ],
    correct: 1,
    justification:
      'El control fiscal es función pública que ejercen la Contraloría General de la República (nivel nacional) y las contralorías departamentales, distritales y municipales, con fundamento en la Constitución (arts. 267 y ss.).',
    wrong: [
      'La DIAN administra tributos y controla obligaciones tributarias, aduaneras y cambiarias, pero no ejerce control fiscal; la SuperFinanciera vigila el sistema financiero.', '', 'La Auditoría General de la Nación vigila la gestión fiscal de la propia CGR; la opción la presenta como exclusiva, lo que es incorrecto.', 'La Procuraduría ejerce control disciplinario, no control fiscal.'
    ],
    source: 'Constitución Política, arts. 267-274',
  },
  {
    id: 'q-m07-006',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'ISSAI',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement: 'En el marco ISSAI de la INTOSAI, los principios fundamentales de la auditoría se ubican en:',
    options: [
      'ISSAI 1 (Declaración de Lima).',
      'ISSAI 10 a 40.',
      'ISSAI 100 a 400.',
      'ISSAI 1000 a 5600.',
    ],
    correct: 2,
    justification:
      'Las ISSAI 100-400 contienen los principios fundamentales de la auditoría financiera, de desempeño y de cumplimiento. La ISSAI 1 es la Declaración de Lima; las ISSAI 10-40 son prerrequisitos de la entidad fiscalizadora; las 1000-5600 son guías de aplicación.',
    wrong: [
      'La ISSAI 1 es la Declaración de Lima: fundamento general, no los principios de auditoría.', 'Las ISSAI 10-40 cubren prerrequisitos (independencia, ética, transparencia, control de calidad).', '', 'Las ISSAI 1000-5600 son guías prácticas de aplicación, no los principios fundamentales.'
    ],
    source: 'Marco ISSAI / INTOSAI; guías de auditoría de la CGR',
  },
  {
    id: 'q-m07-007',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Tipos de auditoría',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La auditoría que verifica si las operaciones de una entidad se realizaron conforme a las normas legales y reglamentarias aplicables se denomina:',
    options: [
      'Auditoría financiera.',
      'Auditoría de desempeño.',
      'Auditoría de cumplimiento.',
      'Auditoría forense.',
    ],
    correct: 2,
    justification:
      'La auditoría de cumplimiento comprueba la sujeción de las operaciones a las normas legales y reglamentarias; es el tipo de auditoría más cercano al control de obligaciones que realiza la DIAN.',
    wrong: [
      'La financiera evalúa la razonabilidad de la información financiera.', 'La de desempeño evalúa economía, eficiencia y eficacia de la gestión.', '', 'La forense se orienta a detectar fraudes para fines probatorios judiciales, no es la categoría general descrita.'
    ],
    source: 'Marco ISSAI; guías CGR',
  },
  {
    id: 'q-m07-008',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Riesgo de auditoría',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement: 'El riesgo de auditoría se descompone en:',
    options: [
      'Riesgo legal, riesgo reputacional y riesgo operativo.',
      'Riesgo inherente, riesgo de control y riesgo de detección.',
      'Riesgo de mercado, de crédito y de liquidez.',
      'Riesgo alto, medio y bajo.',
    ],
    correct: 1,
    justification:
      'El modelo clásico descompone el riesgo de auditoría en riesgo inherente (naturaleza del saldo u operación), riesgo de control (fallas del control interno) y riesgo de detección (que los procedimientos del auditor no detecten el error).',
    wrong: [
      'Son riesgos empresariales, no del modelo de auditoría.', '', 'Son riesgos financieros, no de auditoría.', 'Los niveles alto/medio/bajo califican los riesgos, pero no son los componentes del modelo.'
    ],
    source: 'NIA 315; Ley 43 de 1990',
  },
  {
    id: 'q-m07-009',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Riesgo de auditoría',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Si en un encargo el riesgo inherente y el riesgo de control son altos, el auditor debe:',
    options: [
      'Aumentar el riesgo de detección para compensar, manteniendo así constante el riesgo global.',
      'Reducir el riesgo de detección, ampliando el alcance y la calidad de las pruebas sustantivas.',
      'Abstenerse de opinar en todos los casos, pues los riesgos altos impiden cualquier conclusión.',
      'Trasladar el riesgo a la administración mediante una carta de salvaguarda firmada por la gerencia.',
    ],
    correct: 1,
    justification:
      'El riesgo de detección es el único componente que el auditor administra directamente: ante riesgos inherente y de control altos, debe reducirlo con más y mejor evidencia (mayor alcance, pruebas sustantivas ampliadas, confirmaciones), para mantener el riesgo global en un nivel aceptablemente bajo.',
    wrong: [
      'Aumentar el riesgo de detección elevaría aún más el riesgo global: la relación entre ambos es inversa.', '', 'La abstención de opinión no es automática: depende de si, pese a los riesgos, se puede obtener evidencia suficiente y adecuada.', 'La carta de salvaguarda de la administración no transfiere el riesgo al auditor ni sustituye la evidencia necesaria.'
    ],
    source: 'NIA 330; marco conceptual de riesgo',
  },
  {
    id: 'q-m07-010',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Evidencia',
    difficulty: 'basica',
    kind: 'conceptual',
    statement: 'La evidencia de auditoría debe ser:',
    options: [
      'Suficiente (cantidad) y adecuada (calidad).',
      'Abundante sin importar su origen.',
      'Solo documental y certificada.',
      'Verbal y espontánea.',
    ],
    correct: 0,
    justification:
      'La evidencia debe ser suficiente (cantidad apropiada) y adecuada (calidad: relevante y fiable), conforme a la NIA 500 y a la NAGA de ejecución del trabajo de la Ley 43 de 1990.',
    wrong: [
      '', 'La abundancia no suple la calidad: evidencia irrelevante o poco fiable no sirve por mucha que sea.', 'La evidencia puede ser documental, física, electrónica o testimonial según el caso; no solo certificada.', 'La evidencia verbal aislada (indagación) es de baja fiabilidad y debe corroborarse.'
    ],
    source: 'NIA 500; Ley 43 de 1990, art. 7',
  },
  {
    id: 'q-m07-011',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Técnicas de auditoría',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Para verificar la existencia y exactitud del saldo de una cuenta bancaria de una empresa auditada, la técnica de mayor fiabilidad es:',
    options: [
      'La indagación al tesorero de la empresa.',
      'La confirmación externa directa con la entidad financiera.',
      'La observación de la conciliación elaborada por la empresa.',
      'El procedimiento analítico comparando con el año anterior.',
    ],
    correct: 1,
    justification:
      'La confirmación externa (respuesta escrita directa de un tercero independiente, como el banco) es evidencia de alta fiabilidad porque proviene de una fuente externa e independiente de la entidad auditada.',
    wrong: [
      'La indagación es evidencia de baja fiabilidad: proviene de la propia entidad y debe corroborarse.', '', 'Observar la conciliación de la empresa solo verifica el trabajo interno, no el saldo con el banco.', 'El análisis comparativo detecta variaciones, pero no confirma la existencia del saldo con el tercero.'
    ],
    source: 'NIA 505; técnicas de evidencia',
  },
  {
    id: 'q-m07-012',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Pruebas',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement: 'La diferencia entre pruebas de control y pruebas sustantivas es que:',
    options: [
      'Las de control evalúan la eficacia operativa de los controles; las sustantivas examinan directamente saldos y transacciones.',
      'Las de control son obligatorias y las sustantivas opcionales, porque la NIA 330 exige probar todos los controles antes de mirar los saldos.',
      'Las de control verifican cifras y las sustantivas verifican procesos, de modo que se aplican en etapas distintas del encargo.',
      'No existe diferencia: son sinónimos técnicos, pues ambas buscan detectar errores en los estados financieros.',
    ],
    correct: 0,
    justification:
      'Las pruebas de control evalúan si los controles internos operan eficazmente; las pruebas sustantivas examinan directamente saldos, transacciones y revelaciones para detectar errores materiales. No son sinónimas ni una es opcional en abstracto: su uso depende de la estrategia de auditoría.',
    wrong: [
      '', 'Ninguna es obligatoria en abstracto: su uso depende de la estrategia y del riesgo evaluado; la NIA 330 no exige probar todos los controles.', 'Está invertido: las pruebas de control verifican controles y procesos, y las sustantivas examinan cifras, saldos y transacciones.', 'Son categorías distintas con objetos diferentes: no son sinónimos técnicos.'
    ],
    source: 'NIA 330',
  },
  {
    id: 'q-m07-013',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Papeles de trabajo',
    difficulty: 'basica',
    kind: 'conceptual',
    statement: 'Los papeles de trabajo de una auditoría sirven principalmente para:',
    options: [
      'Reemplazar los estados financieros de la entidad, pues recogen toda la evidencia.',
      'Documentar la evidencia obtenida y el juicio del auditor: quién, qué, cuándo y por qué.',
      'Ser entregados a los accionistas como informe final del auditor.',
      'Cumplir un requisito formal sin valor probatorio en un proceso.',
    ],
    correct: 1,
    justification:
      'Los papeles de trabajo documentan la evidencia y el juicio profesional (quién ejecutó, qué hizo, cuándo y por qué concluyó), y son el soporte del informe y de la defensa del trabajo realizado.',
    wrong: [
      'No reemplazan la información financiera: la respaldan y documentan; el informe es el dictamen u opinión.', '', 'No se entregan como informe final: el informe es el dictamen u opinión, y los papeles son el soporte interno del trabajo.', 'Tienen valor probatorio: sustentan las conclusiones, la evidencia y la responsabilidad profesional del auditor.'
    ],
    source: 'NIA 230; Ley 43 de 1990',
  },
  {
    id: 'q-m07-014',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Procedimiento administrativo',
    difficulty: 'basica',
    kind: 'conceptual',
    statement: 'El Código de Procedimiento Administrativo y de lo Contencioso Administrativo colombiano es:',
    options: [
      'La Ley 1437 de 2011.',
      'La Ley 1564 de 2012.',
      'La Ley 1755 de 2015.',
      'El Decreto 01 de 1984.',
    ],
    correct: 0,
    justification:
      'La Ley 1437 de 2011 es el CPACA, régimen general del procedimiento administrativo. La Ley 1564 de 2012 es el Código General del Proceso; la Ley 1755 de 2015 regula el derecho de petición; el Decreto 01 de 1984 fue el anterior Código Contencioso Administrativo.',
    wrong: [
      '', 'La Ley 1564 de 2012 es el Código General del Proceso (judicial civil).', 'La Ley 1755 de 2015 regula el derecho de petición, no el procedimiento administrativo general.', 'El Decreto 01 de 1984 fue derogado por la Ley 1437 de 2011.'
    ],
    source: 'Ley 1437 de 2011',
  },
  {
    id: 'q-m07-015',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Recursos',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Contra la liquidación oficial de revisión proferida por la DIAN, el contribuyente debe interponer:',
    options: [
      'Recurso de apelación ante el superior jerárquico, según el CPACA.',
      'Recurso de reconsideración, según el procedimiento especial del Estatuto Tributario.',
      'Recurso de reposición únicamente.',
      'Acción de tutela directamente, sin agotar la vía gubernativa.',
    ],
    correct: 1,
    justification:
      'En materia tributaria rige el procedimiento especial del Estatuto Tributario: contra las liquidaciones oficiales procede el recurso de reconsideración (art. 720 ET). El CPACA es supletorio y la tutela es subsidiaria.',
    wrong: [
      'El procedimiento especial tributario prima sobre el CPACA; la apelación no es el recurso aplicable aquí.', '', 'La reposición no es el medio contra la liquidación de revisión: la vía es la reconsideración.', 'La tutela es subsidiaria: debe agotarse la vía administrativa (reconsideración) antes.'
    ],
    source: 'Estatuto Tributario, arts. 720 y ss.; Ley 1437 de 2011',
  },
  {
    id: 'q-m07-016',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Derecho de petición',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Un ciudadano pide copias de los documentos de un expediente de fiscalización. El término general para resolver esa petición de documentos e información es:',
    options: [
      '15 días hábiles.',
      '10 días hábiles.',
      '30 días hábiles.',
      '5 días hábiles.',
    ],
    correct: 1,
    justification:
      'La Ley 1755 de 2015 fija 10 días hábiles para peticiones de documentos e información, 15 para peticiones generales y 30 para consultas.',
    wrong: [
      '15 días es el término de las peticiones generales.', '', '30 días es el término de las consultas.', '5 días no corresponde a ninguno de los términos generales de la ley.'
    ],
    source: 'Ley 1755 de 2015, art. 14',
  },
  {
    id: 'q-m07-017',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Fiscalización como auditoría',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'La DIAN recibe información exógena que reporta ingresos de un contribuyente por $900 millones, mientras su declaración registra $400 millones. ¿Cuál es la secuencia de técnicas, en términos de auditoría, que sigue la fiscalización?',
    options: [
      'Indagación al contador y archivo del caso si responde verbalmente, porque su explicación acredita el origen de los ingresos.',
      'Procedimiento analítico (comparación exógena vs. declarado), requerimiento de soportes (inspección documental), confirmación con terceros y recálculo de la base gravable.',
      'Confirmación externa primero y, si no responde el tercero, cierre del caso, pues sin esa respuesta no hay evidencia válida.',
      'Observación física de la bodega sin revisar documentos, porque la existencia de inventarios explica los ingresos declarados.',
    ],
    correct: 1,
    justification:
      'La fiscalización sigue la lógica de la auditoría: detecta la inconsistencia con procedimientos analíticos (cruce de información), pide soportes (inspección), confirma con terceros y recalcula la base; con evidencia suficiente profiere el acto de determinación.',
    wrong: [
      'La indagación verbal aislada es evidencia débil y no sustituye el cruce, los soportes ni el recálculo de la base.', '', 'La confirmación es una técnica complementaria; la inconsistencia detectada no se archiva por el silencio del tercero.', 'La observación física sola no verifica ingresos declarados ni bases gravables; debe complementarse con pruebas documentales y analíticas.'
    ],
    source: 'Estatuto Tributario, arts. 684 y ss.; técnicas de auditoría (NIA 500)',
  },
  {
    id: 'q-m07-018',
    indicator: 'i07',
    moduleId: 'm07',
    topic: 'Control fiscal',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'El resultado de la vigilancia de la gestión fiscal de un responsable de recursos públicos, según la Ley 42 de 1993, se materializa principalmente en:',
    options: [
      'La imposición de sanciones tributarias por parte de la DIAN.',
      'El fenecimiento o no fenecimiento de la cuenta.',
      'El fallo disciplinario de la Procuraduría.',
      'La liquidación oficial de aforo.',
    ],
    correct: 1,
    justification:
      'La vigilancia de la gestión fiscal concluye con el fenecimiento (o no) de la cuenta del responsable fiscal, según la Ley 42 de 1993. Los hallazgos pueden dar lugar además a procesos de responsabilidad fiscal (Ley 610 de 2000).',
    wrong: [
      'Las sanciones tributarias las impone la DIAN en su ámbito, no la contraloría.', '', 'El fallo disciplinario corresponde a la Procuraduría o a las oficinas de control disciplinario.', 'La liquidación de aforo es un acto de determinación tributaria de la DIAN.'
    ],
    source: 'Ley 42 de 1993; Ley 610 de 2000',
  },
]
