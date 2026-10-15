import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 12 (i04 lavado de activos y FT)
// Los PDF de estudio no desarrollan el tema: las preguntas se construyen
// sobre fuentes oficiales verificadas (Código Penal arts. 323 y 345 y sus
// modificaciones, Ley 526 de 1999, Decreto 1068 de 2015, Ley 2195 de 2022,
// documentos de la UIAF, la DIAN, el GAFI y GAFILAT).
// Verificación: 2026-10-15.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m12-001',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'Concepto y etapas del lavado de activos',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Las tres etapas generalmente reconocidas del proceso de lavado de activos, en su orden, son:',
    options: [
      'Colocación, estratificación (u ocultamiento) e integración.',
      'Recaudo, inversión y legalización.',
      'Ocultamiento, financiación y repatriación.',
      'Estratificación, colocación y administración.',
    ],
    correct: 0,
    justification:
      'El proceso de lavado se describe en tres etapas: colocación (ingreso de los recursos de origen ilícito al circuito económico), estratificación u ocultamiento (separación de los recursos de su origen mediante múltiples transacciones) e integración (reingreso de los recursos a la economía formal con apariencia de legalidad).',
    wrong: [
      '',
      'El recaudo y la legalización no son etapas del proceso: la legalización aparente es el resultado final, no una etapa técnica.',
      'La financiación corresponde a la financiación del terrorismo, fenómeno distinto; la repatriación es una técnica posible, no una etapa del proceso.',
      'El orden está invertido: la estratificación no puede preceder a la colocación, porque es la colocación la que introduce los recursos ilícitos en el circuito económico.',
    ],
    source: 'GAFI; UIAF; guías de prevención de LA/FT',
  },
  {
    id: 'q-m12-002',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'Identificación de etapas en un caso',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una empresa exportadora ficticia recibe en su cuenta, en varios abonos en efectivo, dineros provenientes de la venta de estupefacientes. Con esos recursos paga proveedores en el país, y luego sobrevalora exportaciones a una sociedad vinculada en el exterior, que le gira las divisas. Finalmente, con esos giros compra tres inmuebles. La etapa de estratificación corresponde a:',
    options: [
      'Los abonos en efectivo en la cuenta de la empresa.',
      'El pago a proveedores nacionales con los recursos recibidos.',
      'La sobrevaloración de las exportaciones y los giros recibidos desde el exterior, que separan los recursos de su origen rompiendo la trazabilidad.',
      'La compra de los tres inmuebles.',
    ],
    correct: 2,
    justification:
      'La sobrevaloración de las exportaciones y la consiguiente recepción de divisas desde el exterior constituyen el núcleo de la estratificación: los recursos se revisten de una operación de comercio exterior aparentemente legítima y se separan de su origen ilícito mediante operaciones sucesivas que dificultan el rastreo. Los abonos en efectivo son colocación y la compra de inmuebles es integración.',
    wrong: [
      'Los abonos en efectivo son el ingreso del dinero ilícito al sistema financiero: colocación.',
      'El pago a proveedores locales es un uso de los recursos, no la operación de ocultamiento que rompe la trazabilidad.',
      '',
      'La compra de inmuebles con recursos ya revestidos de apariencia legal es la integración, etapa final del proceso.',
    ],
    source: 'Material de formación DIAN (función de control y prevención de operaciones sospechosas de LA/FT); GAFI; UIAF',
  },
  {
    id: 'q-m12-003',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'Artículo 323 del Código Penal',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'El artículo 323 del Código Penal (modificado por la Ley 1762 de 2015) describe la conducta de lavado de activos mediante un listado de verbos rectores. ¿Cuál de los siguientes grupos corresponde a esos verbos?',
    options: [
      'Adquirir, resguardar, invertir, transportar, transformar, almacenar, conservar, custodiar o administrar.',
      'Ocultar, falsificar, sobornar, defraudar o evadir.',
      'Importar, exportar, consignar, girar o endosar.',
      'Planear, ordenar, inducir, coadyuvar o encubrir.',
    ],
    correct: 0,
    justification:
      'Los verbos rectores del artículo 323 son adquirir, resguardar, invertir, transportar, transformar, almacenar, conservar, custodiar o administrar bienes que tengan su origen mediato o inmediato en las actividades delictivas que la norma enumera. La pena es de prisión de diez a treinta años y multa de mil a cincuenta mil salarios mínimos legales mensuales vigentes.',
    wrong: [
      '',
      'Sobornar, defraudar y evadir corresponden a otros tipos penales (cohecho, fraude aduanero, evasión) que son delitos fuente, no verbos rectores del lavado.',
      'Importar, exportar, consignar y girar son operaciones de comercio o actos cambiarios: pueden ser el medio del lavado, pero no agotan los verbos rectores del artículo.',
      'Planear, ordenar, inducir o coadyuvar son formas de participación punible en general, pero no la descripción típica del artículo 323.',
    ],
    source: 'Ley 599 de 2000, art. 323, modificado por la Ley 1762 de 2015',
  },
  {
    id: 'q-m12-004',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'Circunstancia de agravación',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Una persona es condenada por lavado de activos porque adquirió y transportó bienes producto del contrabando, y el juez acredita que realizó operaciones de cambio y de comercio exterior para darles apariencia de legalidad. Respecto de la pena, el juez debe:',
    options: [
      'Imponer la pena mínima, porque el contrabando no es delito fuente del lavado de activos.',
      'Aplicar la agravante prevista en el artículo 323 del Código Penal, aumentando la pena de una tercera parte a la mitad, precisamente por tratarse de operaciones de cambio o de comercio exterior.',
      'Absolver al procesado, porque el lavado exige condena previa por el delito fuente.',
      'Remitir el caso a la DIAN para que imponga la sanción, ya que la conducta ocurrió en comercio exterior.',
    ],
    correct: 1,
    justification:
      'El artículo 323 del Código Penal contempla una circunstancia de agravación punitiva —aumento de una tercera parte a la mitad— cuando la conducta se realiza respecto de bienes provenientes de delitos ejecutados en el exterior, cuando se realizan operaciones de cambio o de comercio exterior o cuando se introduce mercancía al territorio nacional por lugares no habilitados.',
    wrong: [
      'El contrabando figura entre las actividades delictivas relacionadas en el artículo 323: sí puede ser delito fuente del lavado.',
      '',
      'El lavado de activos es un delito autónomo: no requiere condena previa por el delito fuente para su configuración.',
      'La competencia penal es de la Fiscalía y de los jueces; la DIAN ejerce el control administrativo y tiene el deber de trasladar los hechos a la autoridad penal cuando corresponda.',
    ],
    source: 'Ley 599 de 2000, art. 323, modificado por la Ley 1762 de 2015',
  },
  {
    id: 'q-m12-005',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'Delitos fuente y autonomía del lavado',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Sobre la relación entre el lavado de activos y el delito que originó los bienes, es correcto afirmar que:',
    options: [
      'El lavado solo puede investigarse después de que exista sentencia condenatoria en firme por el delito fuente.',
      'El lavado de activos es un delito autónomo: puede configurarse sin condena previa por el delito subyacente, siempre que se acredite el origen ilícito de los bienes mediante las pruebas legalmente admisibles.',
      'Los delitos fuente se limitan al tráfico de estupefacientes y a la financiación del terrorismo.',
      'Basta con que el investigado no logre demostrar el origen lícito de su patrimonio para que se configure el delito.',
    ],
    correct: 1,
    justification:
      'El lavado de activos protege el orden económico y social y es un delito autónomo: la jurisprudencia admite su configuración sin condena previa por el delito fuente, con fundamento en prueba directa o indiciaria sobre el origen ilícito de los bienes. La Sentencia C-191 de 2016 declaró inexequible la expresión abierta sobre «cualquier otro acto para ocultar o encubrir», lo que refuerza la exigencia de acreditar la conducta típica y no la simple falta de justificación del patrimonio.',
    wrong: [
      'Exigir condena previa vaciaría de contenido la autonomía del tipo penal y haría impracticable la persecución del lavado.',
      '',
      'El artículo 323 enumera un amplio listado de actividades delictivas, entre ellas el contrabando, la evasión, el enriquecimiento ilícito, la extorsión, el secuestro, la trata de personas y la minería ilegal.',
      'La inversión de la carga de la prueba no opera en materia penal: la falta de justificación del origen lícito no equivale automáticamente a la configuración del delito, pues debe acreditarse la conducta típica.',
    ],
    source: 'Ley 599 de 2000, art. 323; Sentencia C-191 de 2016 de la Corte Constitucional',
  },
  {
    id: 'q-m12-006',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'Financiación del terrorismo',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La diferencia esencial entre el lavado de activos y la financiación del terrorismo consiste en que:',
    options: [
      'La financiación del terrorismo solo se configura cuando el delito previo es el narcotráfico.',
      'El lavado busca ocultar el origen ilícito de los bienes, mientras la financiación del terrorismo busca que los recursos lleguen a su destino, por lo que puede cometerse con recursos de origen lícito.',
      'Ambos delitos son idénticos y solo se diferencian por la penalidad.',
      'El lavado es un delito de competencia exclusiva de la UIAF.',
    ],
    correct: 1,
    justification:
      'El lavado de activos se orienta a ocultar el origen ilícito de los bienes (dinero sucio hacia apariencia de legalidad); la financiación del terrorismo se orienta a sostener la actividad terrorista o los grupos armados ilegales (recursos hacia el delito). Por eso la FT puede cometerse con recursos de origen lícito y es un delito autónomo desde la Ley 1121 de 2006.',
    wrong: [
      'La financiación del terrorismo no exige un delito fuente determinado: precisamente se configura con recursos que pueden ser lícitos.',
      '',
      'No son el mismo delito con distinta pena: tienen tipo penal, bien jurídico, dirección del flujo y descripción de conducta diferentes.',
      'La UIAF no es una autoridad judicial: analiza información y la traslada; la investigación penal la adelanta la Fiscalía General de la Nación.',
    ],
    source: 'Ley 599 de 2000, arts. 323 y 345; Ley 1121 de 2006, art. 16',
  },
  {
    id: 'q-m12-007',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'Tipo penal de la financiación del terrorismo',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'La conducta de financiación del terrorismo está tipificada en el artículo 345 del Código Penal. Su pena es de:',
    options: [
      'Prisión de cuatro a ocho años y multa de diez a cien salarios mínimos.',
      'Prisión de trece a veintidós años y multa de mil trescientos a quince mil salarios mínimos legales mensuales vigentes.',
      'Prisión de seis a doce años, sin multa.',
      'Arresto y multa, por tratarse de un delito de menor lesividad.',
    ],
    correct: 1,
    justification:
      'El artículo 345 del Código Penal, reformulado por la Ley 1121 de 2006 y modificado por el artículo 16 de la Ley 1453 de 2011, contempla prisión de trece a veintidós años y multa de mil trescientos a quince mil salarios mínimos legales mensuales vigentes.',
    wrong: [
      'Esa escala corresponde a tipos penales de menor entidad y no al delito de financiación del terrorismo.',
      '',
      'No existe una versión sin multa del tipo penal: la norma establece pena privativa de la libertad y multa.',
      'La financiación del terrorismo es uno de los delitos de mayor gravedad en el Código Penal: su juzgamiento está excluido del principio de oportunidad, no sujeto a formas sustitutivas.',
    ],
    source: 'Ley 599 de 2000, art. 345, modificado por la Ley 1453 de 2011, art. 16',
  },
  {
    id: 'q-m12-008',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'La UIAF y sus objetivos',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'Conforme al artículo 3 de la Ley 526 de 1999 (modificado por la Ley 1762 de 2015), entre los objetivos de la UIAF se encuentra:',
    options: [
      'Investigar y acusar a las personas que cometen el delito de lavado de activos.',
      'Prevenir, detectar y analizar las operaciones sospechosas de comercio exterior relacionadas con el contrabando y el fraude aduanero, como delitos autónomos o subyacentes al lavado de activos.',
      'Imponer sanciones administrativas a las entidades que incumplen el deber de reporte.',
      'Administrar el sistema de aduanas y el recaudo de los tributos aduaneros.',
    ],
    correct: 1,
    justification:
      'La Ley 1762 de 2015 actualizó los objetivos de la UIAF y le asignó expresamente, además de la prevención y detección del LA/FT mediante inteligencia financiera, la prevención, detección y análisis de las operaciones sospechosas de comercio exterior relacionadas con contrabando y fraude aduanero. Ese objetivo es la bisagra legal entre la UIAF y la DIAN.',
    wrong: [
      'Investigar y acusar es competencia de la Fiscalía General de la Nación; la UIAF analiza inteligencia financiera y traslada resultados.',
      '',
      'La UIAF no es una autoridad sancionatoria: no impone sanciones administrativas por incumplimiento del deber de reporte.',
      'La administración aduanera corresponde a la DIAN, no a la unidad de inteligencia financiera.',
    ],
    source: 'Ley 526 de 1999, art. 3, modificado por la Ley 1762 de 2015, art. 33',
  },
  {
    id: 'q-m12-009',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'El Reporte de Operaciones Sospechosas',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      '¿Cuál de las siguientes afirmaciones describe correctamente el Reporte de Operaciones Sospechosas (ROS)?',
    options: [
      'Es un reporte periódico, sujeto a un umbral mínimo de cuantía, que se presenta ante la Fiscalía General de la Nación.',
      'Es un reporte inmediato, sin umbrales de cuantía y reservado, que el sujeto obligado presenta a la UIAF cuando la operación se aparta de los parámetros de normalidad y carece de justificación razonable.',
      'Es una denuncia penal que obliga a la UIAF a iniciar la investigación del delito.',
      'Es un informe anual de gestión antilavado que se publica en la página web de la entidad.',
    ],
    correct: 1,
    justification:
      'El ROS es un reporte de inteligencia financiera: inmediato (se presenta cuando se detecta), sin umbrales de cuantía, reservado respecto del reportado, sin exigencia de certeza probatoria y sin generar responsabilidad para quien reporta de buena fe. Se presenta a la UIAF por el canal establecido (SIREL) y no es una denuncia penal.',
    wrong: [
      'La periodicidad, el umbral y el destinatario están equivocados: el ROS es inmediato, no tiene umbral y se presenta a la UIAF, no a la Fiscalía.',
      '',
      'El ROS no es una denuncia penal y no vincula a la UIAF a iniciar una investigación: es un reporte de inteligencia cuya reserva, además, impide revelar su contenido.',
      'El ROS no es un informe de gestión ni se publica: su carácter reservado impide su divulgación.',
    ],
    source: 'Ley 526 de 1999; Decreto 1068 de 2015, art. 2.14.2; documentos de la UIAF',
  },
  {
    id: 'q-m12-010',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'ROS y denuncia penal',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Una entidad pública detecta hechos que configuran, a la vez, una operación sospechosa de lavado de activos y un posible delito. Frente a la alternativa de presentar el ROS o denunciar, la actuación correcta es:',
    options: [
      'Presentar el ROS y entender cumplida la obligación de denunciar, porque el ROS sustituye la denuncia.',
      'Denunciar penalmente y omitir el ROS, para no duplicar actuaciones.',
      'Cumplir ambos deberes: reportar la operación sospechosa a la UIAF, de manera inmediata y reservada, y trasladar los hechos a la Fiscalía General de la Nación cuando tengan características de delito.',
      'Consultar previamente al reportado para que explique la operación y, según su respuesta, decidir qué presentar.',
    ],
    correct: 2,
    justification:
      'El ROS y la denuncia penal son deberes autónomos, con destinatarios, estándares y reglas de reserva distintas: el ROS alimenta la inteligencia financiera de la UIAF y la denuncia activa la investigación penal ante la Fiscalía. Ninguno sustituye al otro y ninguno excluye la actuación administrativa de la entidad.',
    wrong: [
      'El ROS no es una denuncia penal y no releva del deber de denunciar los hechos con características de delito.',
      'La denuncia no excusa el deber de reportar la operación sospechosa a la UIAF: son canales distintos con finalidades distintas.',
      '',
      'Informar al reportado viola la reserva del reporte, compromete cualquier investigación y expone al servidor a responsabilidad disciplinaria.',
    ],
    source: 'Ley 526 de 1999; Ley 906 de 2004 (deber de denunciar); documentos de la UIAF y de la DIAN',
  },
  {
    id: 'q-m12-011',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'Señales de alerta en comercio exterior',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'En una declaración de exportación se declara un valor de venta muy inferior al precio internacional del producto, el país de destino no tiene relación comercial conocida con ese producto, la mercancía se embarca con destino a un tercer país distinto del comprador y el pago se recibe desde una cuenta de otra persona en un cuarto país. La lectura correcta de estos hechos es que:',
    options: [
      'Son inconsistencias sin importancia, porque el régimen aduanero autoriza cualquier ruta de embarque.',
      'Configuran señales de alerta de lavado de activos: subvaloración de exportaciones, triangulación y pagos de terceros, que rompen la trazabilidad de los recursos.',
      'Se trata de una simple operación de comercio exterior que solo puede generar sanción cambiaria.',
      'Constituyen prueba plena del delito de lavado de activos.',
    ],
    correct: 1,
    justification:
      'La subvaloración o subfacturación de exportaciones permite dejar recursos en el exterior; la triangulación con terceros países y los pagos provenientes de cuentas de personas ajenas a la operación dificultan la identificación del origen y del beneficiario real de los fondos. En conjunto son señales de alerta típicas que obligan a profundizar el análisis, a reportar la operación sospechosa a la UIAF y a evaluar el traslado a la autoridad penal.',
    wrong: [
      'Las señales no son irrelevantes: la legislación colombiana reconoce expresamente la manipulación de precios y el uso del comercio exterior como técnicas de lavado, y el artículo 323 agrava la pena en ese escenario.',
      '',
      'Las señales trascienden el ámbito cambiario: comprometen también los regímenes aduanero y tributario y pueden tener relevancia penal.',
      'Las señales de alerta son indicios que fundamentan el análisis y el reporte, no prueba plena: la prueba plena la valoran las autoridades penales competentes.',
    ],
    source: 'Ley 599 de 2000, art. 323; Ley 526 de 1999, art. 3; guías de la UIAF sobre señales de alerta en comercio exterior',
  },
  {
    id: 'q-m12-012',
    indicator: 'i04',
    moduleId: 'm12',
    topic: 'La DIAN frente al sistema ALA/CFT',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Respecto de las obligaciones de prevención de lavado de activos frente a la DIAN, ¿cuál afirmación es correcta?',
    options: [
      'La DIAN está obligada a implementar el SAGRILAFT de la Circular Externa 100-000016 de 2020 de la Superintendencia de Sociedades.',
      'La DIAN, como entidad pública, es fuente de información para la UIAF y está sujeta al deber de reportar operaciones sospechosas en los términos de la Ley 526 de 1999 y del artículo 2.14.2 del Decreto 1068 de 2015, además de su función misional de control y prevención de LA/FT en fiscalización.',
      'La DIAN no tiene ninguna relación con la UIAF, porque sus competencias son exclusivamente tributarias, aduaneras y cambiarias.',
      'La DIAN solo actúa como denunciante ante la Fiscalía y no puede reportar operaciones sospechosas.',
    ],
    correct: 1,
    justification:
      'La DIAN es una entidad pública: el artículo 3 de la Ley 526 de 1999 asigna a la UIAF las operaciones sospechosas de comercio exterior (contrabando y fraude aduanero), la cláusula general del artículo 2.14.2 del Decreto 1068 de 2015 obliga a las entidades de sectores distintos al financiero a reportar a la UIAF cuando esta lo solicite, y el Decreto 4048 de 2008 ya preveía el deber de suministrar a la UIAF la información de los archivos de la DIAN. Además, la propia entidad incluye el control y prevención de operaciones sospechosas de LA/FT entre las funciones de su proceso de fiscalización.',
    wrong: [
      'El SAGRILAFT de la Circular Externa 100-000016 de 2020 aplica a las sociedades vigiladas o controladas por la Superintendencia de Sociedades; la DIAN no lo está y su régimen es el de la Ley 526 de 1999 y el Decreto 1068 de 2015.',
      '',
      'La relación con la UIAF existe y está sustentada en la ley: la propia UIAF tiene asignada la competencia sobre operaciones sospechosas de comercio exterior relacionadas con contrabando y fraude aduanero.',
      'La DIAN tiene un doble papel: controla administrativamente, reporta operaciones sospechosas a la UIAF y traslada a la Fiscalía cuando hay hechos con características de delito.',
    ],
    source: 'Ley 526 de 1999, art. 3; Decreto 1068 de 2015, art. 2.14.2; Decreto 4048 de 2008; Circular Externa 100-000016 de 2020 de la Superintendencia de Sociedades',
  },
]
