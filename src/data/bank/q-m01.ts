import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 1 (i01 estructura, i06 misionalidad)
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m01-001',
    indicator: 'i06',
    moduleId: 'm01',
    topic: 'Objeto de la DIAN',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Según el Decreto 1071 de 1999, el objeto de la DIAN consiste en coadyuvar a garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional mediante…',
    options: [
      '…el recaudo exclusivo de los impuestos nacionales y territoriales.',
      '…la administración y control del debido cumplimiento de las obligaciones tributarias, aduaneras y cambiarias, y la facilitación de las operaciones de comercio exterior.',
      '…la administración del presupuesto general de la Nación.',
      '…la vigilancia del sistema financiero y del mercado de valores.',
    ],
    correct: 1,
    justification:
      'El Decreto 1071 de 1999 define el objeto de la DIAN con dos dimensiones: administrar y controlar el cumplimiento de las obligaciones tributarias, aduaneras y cambiarias, y facilitar el comercio exterior en condiciones de equidad, transparencia y legalidad.',
    wrong: [
      'La DIAN no administra tributos territoriales (impuestos departamentales y municipales), y su objeto no se limita al recaudo.', '', 'La administración del presupuesto nacional corresponde al Ministerio de Hacienda y a la Dirección General del Presupuesto Público Nacional, no a la DIAN.', 'La vigilancia del sistema financiero corresponde a la Superintendencia Financiera de Colombia.'
    ],
    source: 'Decreto 1071 de 1999 (citado en MATERIAL TOTAL, pág. 408)',
  },
  {
    id: 'q-m01-002',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Naturaleza jurídica',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La DIAN es una Unidad Administrativa Especial del orden nacional. ¿Cuál de las siguientes características corresponde a esa naturaleza?',
    options: [
      'Carece de personería jurídica y depende orgánicamente de la CNSC.',
      'Es un órgano del sector descentralizado por servicios, sin patrimonio propio.',
      'Tiene personería jurídica, autonomía administrativa y presupuestal y patrimonio propio, y está adscrita al Ministerio de Hacienda y Crédito Público.',
      'Es una superintendencia con funciones de inspección, vigilancia y control sobre los contribuyentes.',
    ],
    correct: 2,
    justification:
      'Como UAE, la DIAN tiene personería jurídica, autonomía administrativa y presupuestal y patrimonio propio; está adscrita al Ministerio de Hacienda y Crédito Público y su carácter es eminentemente técnico y especializado.',
    wrong: [
      'La DIAN sí tiene personería jurídica y no depende de la CNSC, que solo administra los procesos de selección.', 'Aunque es del sector descentralizado (por adscripción), sí tiene patrimonio propio; esta opción lo niega.', '', 'La DIAN no es una superintendencia; las funciones de inspección y vigilancia sobre sectores específicos corresponden a las superintendencias.'
    ],
    source: 'Decreto 2117 de 1992; Decreto 1071 de 1999; portal DIAN',
  },
  {
    id: 'q-m01-003',
    indicator: 'i06',
    moduleId: 'm01',
    topic: 'Ámbitos de competencia',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Además de los ámbitos tributario, aduanero y cambiario, la DIAN administra los derechos de explotación y gastos de administración sobre…',
    options: [
      '…los servicios públicos domiciliarios.',
      '…los juegos de suerte y azar explotados por entidades públicas del orden nacional.',
      '…las regalías minero-energéticas.',
      '…las concesiones de infraestructura vial.',
    ],
    correct: 1,
    justification:
      'La DIAN administra los derechos de explotación y gastos de administración sobre los juegos de suerte y azar explotados por entidades públicas del orden nacional (Ley 1393 de 2010, en línea con el objeto del Decreto 1071 de 1999).',
    wrong: [
      'Los servicios públicos domiciliarios son regulados por la CRA y la CREG y vigilados por la Superintendencia de Servicios Públicos.', '', 'Las regalías son administradas por la Agencia Nacional de Minería, el Ministerio de Minas y el Sistema General de Regalías.', 'Las concesiones viales corresponden a la ANI (Agencia Nacional de Infraestructura).'
    ],
    source: 'Ley 1393 de 2010; portal DIAN',
  },
  {
    id: 'q-m01-004',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Evolución normativa',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      '¿Cuál es la secuencia normativa correcta sobre la creación y organización de la DIAN?',
    options: [
      'Decreto 1742 de 2020 la crea; Decreto 2117 de 1992 la organiza; Decreto 4048 de 2008 la reestructura.',
      'Decreto 2117 de 1992 la crea al fusionar la DIN y la DAN; Decreto 1071 de 1999 la organiza; Decreto 4048 de 2008 la reestructura; Decreto 1742 de 2020 define su estructura vigente.',
      'Ley 1607 de 2012 la crea; Decreto 1742 de 2020 la organiza.',
      'Decreto 4048 de 2008 la crea al separar impuestos de aduanas; Decreto 1742 de 2020 la suprime.',
    ],
    correct: 1,
    justification:
      'El Decreto 2117 de 1992 creó la UAE DIAN por fusión de la Dirección de Impuestos Nacionales y la Dirección de Aduanas Nacionales; el Decreto 1071 de 1999 la organizó; el 4048 de 2008 la reestructuró y el 1742 de 2020 estableció la estructura vigente.',
    wrong: [
      'Invierte el orden: el 1742 de 2020 no creó la DIAN.', '', 'La Ley 1607 de 2012 es una reforma tributaria, no una norma de creación de la DIAN.', 'El Decreto 4048 de 2008 no creó ni suprimió la DIAN: la reestructuró.'
    ],
    source: 'Decretos 2117/1992, 1071/1999, 4048/2008 y 1742/2020',
  },
  {
    id: 'q-m01-005',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Dirección de Gestión de Fiscalización',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'A la Dirección de Gestión de Fiscalización de la DIAN le corresponde, entre otras funciones:',
    options: [
      'Administrar las devoluciones de impuestos y gestionar el recaudo voluntario, funciones que corresponden a la Dirección de Gestión de Ingresos dentro del nivel central.',
      'Dirigir, administrar, supervisar y controlar las acciones de prevención, investigación, penalización, determinación, aplicación y liquidación de los tributos nacionales, derechos de aduana y comercio exterior, y aplicar sanciones por infracciones a los regímenes tributario, aduanero y cambiario.',
      'Expedir el régimen cambiario aplicable a residentes y no residentes, competencia que la Constitución atribuye a la Junta Directiva del Banco de la República.',
      'Representar judicialmente a la Nación en los procesos tributarios, función que en el ordenamiento corresponde a la Agencia Nacional de Defensa Jurídica del Estado.'
    ],
    correct: 1,
    justification:
      'La Dirección de Gestión de Fiscalización concentra las acciones de prevención, investigación, penalización, determinación, aplicación y liquidación de tributos y derechos de aduana, así como la aplicación de sanciones por infracciones a los regímenes tributario, aduanero y cambiario (Decreto 1742 de 2020, en desarrollo del 4048 de 2008).',
    wrong: [
      'Las devoluciones y el recaudo voluntario corresponden a la Dirección de Gestión de Ingresos.', '', 'El régimen cambiario lo expide la Junta Directiva del Banco de la República.', 'La representación judicial de la Nación corresponde a la Agencia Nacional de Defensa Jurídica del Estado; la DIAN interviene en sus propios procesos por medio de la Dirección de Gestión Jurídica.'
    ],
    source: 'Decreto 1742 de 2020; Decreto 4048 de 2008',
  },
  {
    id: 'q-m01-006',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Subdirecciones de fiscalización',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Una denuncia señala que un exportador recibió pagos del exterior en una cuenta en el extranjero y no los canalizó por el mercado cambiario. ¿Qué dependencia del nivel central de la DIAN es la competente para adelantar la investigación?',
    options: [
      'La Subdirección de Gestión de Fiscalización Internacional.',
      'La Dirección de Gestión de Ingresos.',
      'La Subdirección de Gestión de Control Cambiario.',
      'La Dirección Seccional de Aduanas del lugar de salida de la mercancía.',
    ],
    correct: 2,
    justification:
      'La investigación de las infracciones al régimen cambiario (como la no canalización de divisas) corresponde a la Subdirección de Gestión de Control Cambiario, dependencia de la Dirección de Gestión de Fiscalización.',
    wrong: [
      'La Fiscalización Internacional se ocupa de operaciones internacionales y precios de transferencia, no de la canalización cambiaria.', 'La Dirección de Gestión de Ingresos administra cumplimiento voluntario, recaudo y devoluciones.', '', 'Las seccionales de aduanas tramitan el régimen aduanero; la competencia especializada en control cambiario está en el nivel central.'
    ],
    source: 'Decreto 1742 de 2020; Decreto 4048 de 2008 (funciones de la Subdirección de Control Cambiario)',
  },
  {
    id: 'q-m01-007',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Presencia territorial',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La presencia territorial de la DIAN incluye, entre otras, las siguientes dependencias:',
    options: [
      '30 Direcciones Seccionales de Impuestos y Aduanas (DSIA), 6 Direcciones Seccionales de Aduanas, 7 Direcciones Seccionales de Impuestos y 7 Direcciones Seccionales Delegadas de Impuestos y Aduanas.',
      '32 direcciones departamentales y una dirección distrital en Bogotá.',
      'Una sede por cada municipio capital del país.',
      'Únicamente 6 gerencias regionales ubicadas en las ciudades principales.',
    ],
    correct: 0,
    justification:
      'La DIAN opera en el territorio mediante 30 DSIA, 6 DSA, 7 DSI y 7 Direcciones Seccionales Delegadas de Impuestos y Aduanas, además de puntos de contacto, con sede principal en Bogotá D.C.',
    wrong: [
      '', 'La DIAN no replica la división política departamental; sus seccionales siguen criterios administrativos propios.', 'No hay una sede por municipio capital; la cobertura se logra con puntos de contacto.', 'No se denominan gerencias regionales ni son solo 6.'
    ],
    source: 'Portal DIAN (Presentación de la entidad)',
  },
  {
    id: 'q-m01-008',
    indicator: 'i06',
    moduleId: 'm01',
    topic: 'Rol frente a otras entidades',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'Sobre la relación entre la DIAN y la UIAF es correcto afirmar que:',
    options: [
      'La UIAF es una dependencia de la DIAN encargada de sancionar el lavado de activos.',
      'La DIAN debe suministrar a la UIAF la información que repose en sus archivos y que esta requiera para documentar los reportes de operaciones sospechosas.',
      'La UIAF expide la normativa aduanera que aplica la DIAN.',
      'No existe relación alguna porque la UIAF depende del sector financiero privado.',
    ],
    correct: 1,
    justification:
      'La DIAN es una de las entidades obligadas a suministrar información a la UIAF para que esta documente los ROS, según las funciones previstas en el Decreto 4048 de 2008. La UIAF es una unidad de inteligencia financiera, no una dependencia de la DIAN.',
    wrong: [
      'La UIAF no es dependencia de la DIAN y no impone sanciones: analiza y traslada información.', '', 'La normativa aduanera la expiden el Gobierno Nacional y la DIAN mediante resoluciones; la UIAF no tiene esa competencia.', 'Sí existe relación legal de suministro de información; y la UIAF es una entidad pública (adscrita al Ministerio de Hacienda).'
    ],
    source: 'Decreto 4048 de 2008; Ley 526 de 1999',
  },
  {
    id: 'q-m01-009',
    indicator: 'i06',
    moduleId: 'm01',
    topic: 'Régimen cambiario',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'En materia cambiaria, la distribución correcta de competencias es:',
    options: [
      'La DIAN expide el régimen cambiario y el Banco de la República lo sanciona.',
      'La Junta Directiva del Banco de la República es la autoridad cambiaria que expide el régimen; la DIAN controla su cumplimiento y adelanta las investigaciones y sanciones administrativas de su competencia.',
      'La Superintendencia Financiera expide el régimen cambiario y la DIAN lo ejecuta.',
      'El Ministerio de Comercio expide el régimen cambiario y la DIAN recauda los aranceles.',
    ],
    correct: 1,
    justification:
      'El Banco de la República, como autoridad monetaria, cambiaria y crediticia (Constitución Política, arts. 371 y ss.), reglamenta el régimen de cambios; la DIAN aplica y controla su cumplimiento y sanciona administrativamente las infracciones de su competencia.',
    wrong: [
      'Los roles están invertidos: el Banco de la República expide, la DIAN controla y sanciona.', '', 'La Superintendencia Financiera vigila el sistema financiero, no expide el régimen cambiario.', 'El Ministerio de Comercio no expide el régimen cambiario; y los aranceles los recauda la DIAN dentro del ámbito aduanero.'
    ],
    source: 'Constitución Política arts. 371-373; Decreto 1742 de 2020',
  },
  {
    id: 'q-m01-010',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Distribución interna de funciones',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'El Decreto 1742 de 2020 faculta al Director General de la DIAN para:',
    options: [
      'Crear tributos nacionales mediante resolución.',
      'Expedir resoluciones para distribuir funciones entre las dependencias de la entidad, de acuerdo con los artículos 81 y siguientes.',
      'Modificar la planta de personal del Congreso de la República.',
      'Nombrar y remover al Ministro de Hacienda.',
    ],
    correct: 1,
    justification:
      'Los artículos 81 a 83 del Decreto 1742 de 2020 facultan al Director General para distribuir funciones entre las dependencias mediante resolución, lo que permite ajustar la operación interna sin reformar el decreto de estructura.',
    wrong: [
      'Los tributos solo pueden crearse por ley (principio de legalidad tributaria, art. 338 C.P.).', '', 'La planta del Congreso no es asunto de la DIAN.', 'El Ministro de Hacienda es de libre nombramiento y remoción del Presidente de la República.'
    ],
    source: 'Decreto 1742 de 2020, arts. 81-83',
  },
  {
    id: 'q-m01-011',
    indicator: 'i06',
    moduleId: 'm01',
    topic: 'Objeto de la DIAN',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'El objeto de la DIAN menciona la «facilitación de las operaciones de comercio exterior en condiciones de equidad, transparencia y legalidad». ¿Qué implicación práctica tiene esa expresión?',
    options: [
      'Que la DIAN debe abstenerse de ejercer control sobre importadores y exportadores.',
      'Que la DIAN debe equilibrar su función de control con la agilización del comercio legítimo, sin renunciar a la legalidad.',
      'Que la DIAN puede exonerar de tributos a los operadores de comercio exterior.',
      'Que la facilitación del comercio es competencia exclusiva del Ministerio de Comercio.',
    ],
    correct: 1,
    justification:
      'El objeto une control y facilitación: la DIAN debe hacer cumplir las obligaciones, pero también reducir cargas y agilizar las operaciones legítimas de comercio exterior, siempre dentro de la ley.',
    wrong: [
      'La facilitación no elimina el control; ambas funciones conviven en el objeto legal.', '', 'La DIAN no puede exonerar tributos por su cuenta: las exenciones las define la ley.', 'La facilitación del comercio exterior es función de la DIAN (además de las políticas comerciales del Ministerio de Comercio).'
    ],
    source: 'Decreto 1071 de 1999',
  },
  {
    id: 'q-m01-012',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Direcciones del nivel central',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      '¿Cuál de los siguientes NO es un área de gestión del nivel central de la DIAN según el Decreto 1742 de 2020?',
    options: [
      'Dirección de Gestión Corporativa.',
      'Dirección de Gestión Jurídica.',
      'Dirección de Gestión de Ingresos.',
      'Dirección de Gestión de Política Monetaria.',
    ],
    correct: 3,
    justification:
      'La política monetaria corresponde al Banco de la República. Las direcciones de gestión de la DIAN incluyen Corporativa, Jurídica, de Ingresos, de Fiscalización y de Aduanas.',
    wrong: [
      'La Dirección de Gestión Corporativa sí existe (soporte institucional).', 'La Dirección de Gestión Jurídica sí existe (defensa y doctrina).', 'La Dirección de Gestión de Ingresos sí existe (recaudo, devoluciones y cumplimiento voluntario).', ''
    ],
    source: 'Decreto 1742 de 2020',
  },
  {
    id: 'q-m01-013',
    indicator: 'i06',
    moduleId: 'm01',
    topic: 'CNSC y DIAN',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Frente al empleo de Gestor I de la convocatoria DIAN, la CNSC:',
    options: [
      'Es la entidad a la que quedará vinculado el aspirante seleccionado.',
      'Administra y vigila el proceso de selección por mérito; la vinculación se produce con la DIAN.',
      'Es una dependencia de la DIAN que califica las evaluaciones.',
      'Define las funciones misionales del empleo de Gestor I.',
    ],
    correct: 1,
    justification:
      'La CNSC administra la carrera administrativa y los procesos de selección por mérito; quien supera el concurso se vincula a la DIAN, que es la entidad que reportó la vacante.',
    wrong: [
      'La entidad de vinculación es la DIAN, no la CNSC.', '', 'La CNSC no es dependencia de la DIAN.', 'Las funciones del empleo las define la DIAN conforme al manual de funciones, no la CNSC.'
    ],
    source: 'Ley 909 de 2004; portal CNSC',
  },
  {
    id: 'q-m01-014',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Fiscalización y lavado de activos',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'En el nivel central de la DIAN, la coordinación especializada encargada de la detección y prevención de operaciones de lavado de activos está asociada a:',
    options: [
      'La Dirección de Gestión de Ingresos.',
      'La Dirección de Gestión Jurídica.',
      'La Dirección de Gestión de Fiscalización.',
      'La Dirección de Gestión de Aduanas.',
    ],
    correct: 2,
    justification:
      'La coordinación de control y prevención de lavado de activos se enmarca en la Dirección de Gestión de Fiscalización, que dirige los planes de fiscalización y control, incluida la detección de operaciones de lavado de activos.',
    wrong: [
      'Ingresos gestiona recaudo y devoluciones, no la detección de LA/FT.', 'La Dirección Jurídica se ocupa de defensa y doctrina.', '', 'Aunque las aduanas detectan operaciones sospechosas de comercio exterior, la coordinación central de prevención de LA/FT está en Fiscalización.'
    ],
    source: 'Decreto 1742 de 2020; Decreto 4048 de 2008',
  },
  {
    id: 'q-m01-015',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Siglas de dependencias',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'En la normativa interna de la DIAN, la sigla «DSIA» corresponde a:',
    options: [
      'Dirección de Servicios de Información Aduanera.',
      'Dirección Seccional de Impuestos y Aduanas.',
      'Dirección de Sanciones e Investigaciones Administrativas.',
      'Departamento de Sistemas de Información y Archivo.',
    ],
    correct: 1,
    justification:
      'DSIA significa Dirección Seccional de Impuestos y Aduanas: son las dependencias territoriales que integran las competencias tributarias y aduaneras de la DIAN.',
    wrong: [
      'No existe esa denominación en la estructura DIAN.', '', 'Las sanciones e investigaciones se organizan en la Dirección de Gestión de Fiscalización, no con esa sigla.', 'No corresponde a un departamento de sistemas; la tecnología depende de la Dirección de Gestión Corporativa.'
    ],
    source: 'Portal DIAN; resoluciones de distribución de funciones',
  },
]
