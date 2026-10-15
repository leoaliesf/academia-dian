import type { ModuleDef } from '../types'

// ============================================================
// Módulo 14 — Competencias comportamentales y valores
// Indicadores: i12 a i26
// Este tema NO está desarrollado en los PDF de estudio. El
// contenido se construyó a partir de fuentes oficiales
// verificadas el 2026-10-15:
//  - Resolución 65 de 2024 de la DIAN (Diario Oficial 52.730 de
//    17 de abril de 2024), que adopta el Diccionario de
//    Competencias Comportamentales de la DIAN: definiciones,
//    niveles de desarrollo y conductas observables de las seis
//    competencias básicas. Las citas textuales provienen de ahí.
//  - Código de Integridad del Servicio Público (DAFP/Función
//    Pública) para los cinco valores.
//  - Decreto 815 de 2018 (arts. 2.2.4.7 y 2.2.4.8) como marco
//    general de las competencias comportamentales.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm14',
  order: 14,
  title: 'Competencias comportamentales y valores',
  description:
    'Las seis competencias comportamentales básicas con sus definiciones y niveles de desarrollo oficiales (Adaptabilidad, Comportamiento ético, Comunicación efectiva, Orientación al logro, Orientación al usuario y al ciudadano y Trabajo en equipo) y los cinco valores del Código de Integridad del Servicio Público.',
  indicators: ['i12', 'i13', 'i14', 'i15', 'i16', 'i17', 'i18', 'i19', 'i20', 'i21', 'i22', 'i23', 'i24', 'i25', 'i26'],
  lessons: [
    {
      id: 'm14-l01',
      moduleId: 'm14',
      title: 'Introducción a las competencias comportamentales: qué son y cómo se evalúan',
      indicators: ['i12', 'i13', 'i14', 'i15', 'i16', 'i17', 'i18', 'i19', 'i20', 'i21'],
      objectives: [
        'Definir qué es una competencia comportamental y distinguirla de una competencia funcional.',
        'Identificar las seis competencias comportamentales básicas de la DIAN y su relación con los indicadores de la convocatoria.',
        'Explicar los cuatro niveles de desarrollo y qué significa que una competencia se evalúe en el nivel 1.',
        'Reconocer el formato de las preguntas de juicio situacional y el criterio con que se califican.',
      ],
      sections: [
        {
          heading: 'Competencias funcionales y competencias comportamentales',
          paragraphs: [
            'La evaluación por competencias del empleo público parte de una distinción sencilla. Las competencias FUNCIONALES son las que se exigen para hacer bien las tareas del cargo: para un Gestor I de la DIAN, conocer la liquidación de impuestos o el procedimiento de fiscalización. Las competencias COMPORTAMENTALES son las que se exigen para desempeñarse bien en el entorno de trabajo: cómo reaccionas ante un cambio, cómo tratas a un ciudadano, cómo te comunicas con un superior.',
            'El Decreto Ley 927 de 2023, que rige el sistema específico de carrera de los empleados de la DIAN, define en su artículo 57 dos tipos de competencias laborales —funcionales y comportamentales— y ordena que ambas se incluyan en el Manual Específico de Requisitos y Funciones (MERF) de la entidad. El Diccionario de Competencias Comportamentales de la DIAN, adoptado por la Resolución 65 de 2024, es el desarrollo de esa orden.',
            'La consecuencia práctica es que no basta con saber de impuestos y aduanas: el concurso también mide conductas, y esas conductas se miden con ítems situacionales que tienen una respuesta claramente mejor que las demás.',
          ],
          callout: {
            type: 'memoriza',
            text: 'FUNCIONALES = saber hacer el trabajo (impuestos, aduanas, auditoría). COMPORTAMENTALES = saber comportarse en el trabajo (adaptarse, comunicar, servir, cooperar). El concurso evalúa ambas.',
          },
        },
        {
          heading: 'Qué es exactamente una competencia comportamental',
          paragraphs: [
            'Una competencia comportamental no es un rasgo de personalidad ni un valor abstracto: es la capacidad de desplegar ciertas CONDUCTAS OBSERVABLES en situaciones de trabajo. Ese detalle es decisivo para el examen, porque las preguntas no indagan qué eres, sino qué HACES. Ante un escenario, la respuesta correcta es siempre la conducta concreta, no la buena intención.',
            'El Diccionario de la DIAN organiza cada competencia con la misma estructura de ficha: una DEFINICIÓN (qué capacidad es), un NIVEL DE DESARROLLO (qué se espera en ese grado) y las CONDUCTAS OBSERVABLES (qué se ve hacer a quien la tiene en ese nivel). Estudiar con esa estructura es lo que permite responder con precisión.',
          ],
          table: {
            caption: 'Estructura de una ficha de competencia (Resolución 65 de 2024, DIAN)',
            headers: ['Elemento', 'Qué contiene'],
            rows: [
              ['Nombre', 'Denominación oficial de la competencia'],
              ['Definición', 'La capacidad que se espera, en una frase'],
              ['Nivel de desarrollo', 'Descripción de lo esperado en los niveles 1 a 4'],
              ['Conductas observables', 'Las acciones concretas que evidencian ese nivel'],
            ],
          },
        },
        {
          heading: 'Las seis competencias básicas y su encaje en la convocatoria',
          paragraphs: [
            'Las competencias comportamentales BÁSICAS son las que el Diccionario define como exigibles a todos los empleos de la planta de la DIAN, con independencia de la función que se desempeñe. Son seis, y coinciden exactamente con los indicadores comportamentales de la convocatoria:',
          ],
          table: {
            caption: 'Competencias básicas e indicadores asociados',
            headers: ['Competencia', 'Indicador(es)', 'Enfoque de la evaluación'],
            rows: [
              ['Adaptabilidad', 'i12 (nivel 1), i13 (nivel 2)', 'Reacción ante cambios, nuevas perspectivas y contextos'],
              ['Comportamiento ético', 'i14 (nivel 1), i15 (nivel 4)', 'Congruencia entre discurso y actuación; código de integridad'],
              ['Comunicación efectiva', 'i16 (nivel 1), i17 (nivel 2)', 'Escucha, claridad del mensaje, redes de contacto'],
              ['Orientación al logro', 'i18 (nivel 1)', 'Cumplimiento de objetivos con calidad y oportunidad'],
              ['Orientación al usuario y al ciudadano', 'i19 (nivel 1)', 'Atención objetiva, cordial y oportuna al ciudadano'],
              ['Trabajo en equipo', 'i20 (nivel 1), i21 (nivel 3)', 'Acuerdos de equipo, colaboración y clima laboral'],
            ],
          },
          callout: {
            type: 'importante',
            text: 'El Diccionario distingue tres grupos: básicas, específicas y gerenciales. Las básicas se exigen a todos los empleos; las específicas dependen del proceso o subproceso; las gerenciales aplican a quienes tienen personal a cargo. Para el empleo de Gestor I, el foco del concurso son las básicas.',
          },
        },
        {
          heading: 'Los cuatro niveles de desarrollo',
          paragraphs: [
            'El Diccionario describe cada competencia en cuatro niveles, del 1 al 4, que expresan grados crecientes de desarrollo: el nivel 1 es el más básico y el 4 el más alto, y las conductas del nivel 4 incluyen típicamente influir en otros, anticiparse y ser referente. El propio Diccionario precisa una regla clave: «las competencias comportamentales básicas se asimilan al nivel más bajo de las competencias comportamentales, esto es el nivel 1 de desarrollo».',
            'Esa regla explica por qué la mayoría de los indicadores de la convocatoria se fijan en el nivel 1: es el nivel exigible a cualquier servidor de la DIAN. Pero la convocatoria no se limita al nivel 1: para Adaptabilidad pide también el nivel 2, para Comunicación efectiva el nivel 2, para Trabajo en equipo el nivel 3 y para Comportamiento ético el nivel 4. El nivel indicado no es un adorno: define cuál de las conductas de la ficha es la respuesta correcta.',
            'Hay un caso que conviene entender bien. El Diccionario advierte expresamente que «la competencia Comportamiento Ético se clasifica como comportamental básica, siendo evaluada en el nivel 1 de desarrollo. Es también competencia comportamental específica y gerencial, y para el efecto su nivel de desarrollo será superior a 1». Por eso el comportamiento ético aparece evaluado en el nivel 1 (i14) y en el nivel 4 (i15): son dos exigencias distintas de la misma competencia.',
          ],
          table: {
            caption: 'Progresión general de los niveles de desarrollo',
            headers: ['Nivel', 'Qué caracteriza al nivel', 'Verbo típico'],
            rows: [
              ['Nivel 1', 'Cumple lo esperado en su propio trabajo, ajustándose a lo establecido', 'Cumple / aplica'],
              ['Nivel 2', 'Ajusta su actuar con criterio, incorpora nuevas evidencias y contextos', 'Adapta / incorpora'],
              ['Nivel 3', 'Se anticipa, monitorea y orienta el trabajo del equipo', 'Anticipa / orienta'],
              ['Nivel 4', 'Influye en otros, fomenta prácticas y es referente', 'Fomenta / es referente'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'Guía pedagógica orientativa. La tabla anterior resume el sentido general de la progresión observada en las fichas oficiales de la Resolución 65 de 2024; los niveles no siguen una fórmula idéntica en todas las competencias. Para cada competencia concreta, la fuente que manda es el texto de su propia ficha, que se cita en las lecciones siguientes.',
          },
        },
        {
          heading: 'Cómo se evalúan: la prueba de juicio situacional',
          paragraphs: [
            'Las competencias comportamentales se evalúan con preguntas de JUICIO SITUACIONAL. El ítem no pregunta por definiciones: plantea una situación de trabajo verosímil («un compañero…», «un ciudadano insiste en…», «su jefe le pide…») y ofrece varias conductas posibles. La tarea es elegir la que mejor se corresponde con la competencia y el nivel evaluados.',
            'La consecuencia práctica es que el examen no premia la respuesta «correcta en abstracto», sino la MÁS ADECUADA entre varias defendibles. Casi siempre hay una opción que es una reacción emocional, otra que es una salida evasiva (no hacer nada, dejarlo para después), otra que es una actuación correcta pero de un nivel inferior al exigido, y la correcta, que refleja exactamente el nivel pedido.',
            'Para los valores del Código de Integridad, la lógica es la misma: se busca identificar las conductas asociadas a los cinco valores. Esto significa que un ítem sobre «Justicia» no preguntará qué dice la definición, sino qué harías tú en una situación donde la imparcialidad está en juego.',
          ],
          callout: {
            type: 'aviso',
            text: 'El número exacto de opciones y el formato del ítem dependen del diseño de cada proceso de selección. Esta plataforma usa cuatro opciones por pregunta para entrenar la discriminación fina entre conductas; verifica el formato definitivo en la guía oficial de la CNSC de tu convocatoria.',
          },
        },
        {
          heading: 'Marco normativo de las competencias comportamentales',
          paragraphs: [
            'Además del sistema específico de carrera de la DIAN, las competencias comportamentales del empleo público colombiano tienen un marco general: el Decreto 815 de 2018, que en sus artículos 2.2.4.7 y 2.2.4.8 estableció las competencias comportamentales comunes a los servidores públicos y las competencias mínimas por nivel jerárquico (directivo, asesor, profesional, técnico y asistencial), y que permite a cada entidad agregar las que correspondan a sus particularidades.',
            'La relación con el Diccionario de la DIAN es de complementariedad: el Decreto fija el mínimo común del empleo público y el Diccionario desarrolla, con niveles y conductas observables, las competencias aplicables a la DIAN. En el Decreto, por ejemplo, la competencia equivalente a la Adaptabilidad se denomina «Adaptación al cambio» y se define como «enfrentar con flexibilidad las situaciones nuevas» asumiendo un manejo positivo y constructivo de los cambios.',
          ],
          callout: {
            type: 'importante',
            text: 'Si en el examen aparece «Adaptación al cambio» con la definición del Decreto 815 de 2018 y en otra pregunta «Adaptabilidad» con la definición del Diccionario de la DIAN, no son competencias contradictorias: son dos denominaciones del mismo constructo en dos fuentes normativas distintas.',
          },
        },
      ],
      summary: [
        'Las competencias comportamentales son capacidades que se evidencian en conductas observables, y se evalúan con preguntas de juicio situacional.',
        'El Diccionario de Competencias Comportamentales de la DIAN (Resolución 65 de 2024) fija seis competencias básicas: Adaptabilidad, Comportamiento ético, Comunicación efectiva, Orientación al logro, Orientación al usuario y al ciudadano y Trabajo en equipo.',
        'Las competencias básicas «se asimilan al nivel más bajo de las competencias comportamentales, esto es el nivel 1 de desarrollo»; los niveles 2, 3 y 4 expresan grados crecientes de desarrollo.',
        'El Comportamiento ético es a la vez competencia básica (nivel 1) y específica y gerencial (nivel superior a 1), lo que explica sus indicadores i14 (nivel 1) e i15 (nivel 4).',
        'El marco general del empleo público es el Decreto 815 de 2018 (arts. 2.2.4.7 y 2.2.4.8); el desarrollo propio de la DIAN está en su Diccionario.',
      ],
      memorize: [
        'Seis competencias básicas: Adaptabilidad · Comportamiento ético · Comunicación efectiva · Orientación al logro · Orientación al usuario y al ciudadano · Trabajo en equipo.',
        'Básicas = nivel 1 de desarrollo (regla del Diccionario).',
        'Niveles del 1 al 4: cumple → adapta → anticipa → fomenta y es referente.',
        'La evaluación es SITUACIONAL: se elige la conducta más adecuada, no la definición.',
        'Resolución 65 de 2024 (DIAN) = Diccionario de Competencias Comportamentales.',
      ],
      examples: [
        {
          heading: 'Ejemplo de razonamiento situacional',
          paragraphs: [
            'Supongamos un ítem así: «Un compañero de su dependencia le comenta que va a apoyar a otro proceso en una tarea urgente, y que por ello no podrá entregar a tiempo el reporte que ambos acordaron. ¿Qué haría usted?».',
            'La opción débil sería «le recuerda que ese reporte era su compromiso y que debe priorizarlo», porque antepone la tarea al acuerdo y no reconoce la situación del otro. La opción evasiva sería «continúa con su trabajo y espera que el compañero resuelva».',
            'La opción que refleja el nivel 1 de Trabajo en equipo —«se compromete con los acuerdos alcanzados por el equipo y colabora con los demás integrantes»— sería la que busca reencuadrar el acuerdo con el equipo, avisar oportunamente y cubrir la parte que esté al alcance propio para que el compromiso no se rompa.',
            'Observa el detalle decisivo: en las tres opciones nadie hace algo ilegal ni absurdo. La pregunta no evalúa si tu conducta es admisible, sino si es la MÁS adecuada según la competencia y el nivel.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Estudiar las competencias comportamentales como definiciones para memorizar y no como conductas para aplicar.',
          correction: 'La pregunta situacional se responde eligiendo la conducta que corresponde al nivel. Memorizar la definición sin traducirla a comportamientos no sirve en el examen.',
        },
        {
          mistake: 'Elegir en los ítems situacionales la opción «más completa» o «más heroica».',
          correction: 'La respuesta correcta es la que corresponde exactamente al nivel que se está evaluando. Un comportamiento de nivel 4 en un ítem de nivel 1 puede ser excesivo y resultar incorrecto.',
        },
        {
          mistake: 'Creer que Adaptabilidad y Adaptación al cambio son competencias distintas con contenidos opuestos.',
          correction: 'Son la misma capacidad nombrada de dos maneras: «Adaptación al cambio» en el Decreto 815 de 2018 y «Adaptabilidad» en el Diccionario de la DIAN.',
        },
      ],
      norms: [
        {
          norm: 'Resolución 65 de 2024 de la DIAN',
          status: 'vigente',
          note: 'Adopta el Diccionario de Competencias Comportamentales de la DIAN (Diario Oficial 52.730 de 17 de abril de 2024). Contiene las definiciones, niveles de desarrollo y conductas observables utilizados en este módulo.',
        },
        {
          norm: 'Decreto Ley 927 de 2023',
          article: 'art. 57',
          status: 'vigente',
          note: 'Sistema Específico de Carrera de los empleados públicos de la DIAN; define las competencias funcionales y comportamentales y derogó el Decreto Ley 71 de 2020.',
        },
        {
          norm: 'Decreto 815 de 2018',
          article: 'arts. 2.2.4.7 y 2.2.4.8',
          status: 'vigente',
          note: 'Competencias comportamentales comunes a los servidores públicos y competencias por nivel jerárquico. Marco general del empleo público.',
        },
        {
          norm: 'Ley 909 de 2004',
          article: 'art. 19',
          status: 'vigente',
          note: 'Régimen general del empleo público; la Resolución 65 de 2024 la invoca entre las facultades para adoptar el Diccionario.',
        },
        {
          norm: 'Decreto 1083 de 2015',
          article: 'art. 2.2.2.6.1',
          status: 'vigente',
          note: 'Perfil de competencias del empleo y estudio técnico que lo justifica.',
        },
      ],
      links: [
        { label: 'Función Pública — Gestor Normativo', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/' },
        { label: 'CNSC — Comisión Nacional del Servicio Civil', url: 'https://www.cnsc.gov.co/' },
        { label: 'DIAN — Código de Ética y de Buen Gobierno', url: 'https://www.dian.gov.co/dian/entidad/CodigoBuenGobierno/Codigo-de-Etica-Vr1-2021.pdf' },
      ],
      mindmap: {
        root: 'Competencias comportamentales',
        branches: [
          { label: 'Seis básicas', children: ['Adaptabilidad', 'Comportamiento ético', 'Comunicación efectiva', 'Orientación al logro', 'Orientación al usuario', 'Trabajo en equipo'] },
          { label: 'Niveles 1-4', children: ['1 cumple', '2 adapta', '3 anticipa', '4 fomenta'] },
          { label: 'Ficha', children: ['Definición', 'Nivel de desarrollo', 'Conductas observables'] },
          { label: 'Evaluación', children: ['Juicio situacional', 'Conducta más adecuada', 'Nivel exigido decide'] },
          { label: 'Normas', children: ['Resolución 65/2024 DIAN', 'Decreto Ley 927/2023', 'Decreto 815/2018'] },
        ],
      },
      mindmapText:
        'Las competencias comportamentales son capacidades evidenciadas en conductas observables y se evalúan con preguntas de juicio situacional. El Diccionario de la DIAN (Resolución 65 de 2024) define seis competencias básicas con cuatro niveles de desarrollo cada una: Adaptabilidad, Comportamiento ético, Comunicación efectiva, Orientación al logro, Orientación al usuario y al ciudadano, y Trabajo en equipo. Las básicas se asimilan al nivel 1, y los niveles superiores exigen conductas más complejas. El marco general es el Decreto 815 de 2018 y el sistema específico de carrera de la DIAN es el Decreto Ley 927 de 2023.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). Todo el contenido proviene de fuentes oficiales verificadas: Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), Decreto Ley 927 de 2023, Decreto 815 de 2018 y Ley 909 de 2004.',
        },
      ],
      activityId: 'm14-a01',
      quizId: 'q-m14',
    },
    {
      id: 'm14-l02',
      moduleId: 'm14',
      title: 'Adaptabilidad: niveles 1 y 2',
      indicators: ['i12', 'i13'],
      objectives: [
        'Enunciar la definición oficial de la competencia Adaptabilidad.',
        'Distinguir las conductas observables del nivel 1 y del nivel 2.',
        'Resolver situaciones que exigen diferenciar una adaptación de nivel 1 de una de nivel 2.',
      ],
      sections: [
        {
          heading: 'Definición oficial',
          paragraphs: [
            'En el Diccionario de Competencias Comportamentales de la DIAN, la Adaptabilidad se define como la «capacidad para comprender diferentes perspectivas y responder oportunamente a diversas situaciones, contextos, medios y personas, modificando su conducta y formas de trabajo, alineadas con el cumplimiento de los objetivos institucionales».',
            'Tres elementos conviene retener de esa definición. Primero, la adaptabilidad no es cambiar por cambiar: el cambio de conducta se alinea con los objetivos institucionales. Segundo, incluye comprender PERSPECTIVAS distintas, no solo tolerar cambios de procedimiento. Tercero, «medios» y «personas» amplían la competencia a los entornos y a los interlocutores, no solo a las normas.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Adaptabilidad = comprender perspectivas distintas + responder oportunamente a situaciones, contextos, medios y personas + modificar la conducta y la forma de trabajo, alineado con los objetivos institucionales.',
          },
        },
        {
          heading: 'Nivel 1: comprender y ajustarse',
          paragraphs: [
            'El nivel 1 de desarrollo se describe así: «comprende perspectivas diferentes y cambia las conductas a fin de ajustar su accionar a los diferentes contextos».',
            'Sus conductas observables son tres:',
          ],
          bullets: [
            '«Pone en marcha los cambios que le son propuestos en sus objetivos laborales».',
            '«Integra con facilidad nuevas perspectivas, aprendizajes y tecnologías que le permitan cumplir con su labor».',
            '«Acepta con disposición el enfrentarse a nuevas e inesperadas situaciones y medios».',
          ],
          callout: {
            type: 'importante',
            text: 'El nivel 1 es RECEPTIVO: el cambio lo proponen otros (un jefe, una norma, una resolución) y el servidor lo pone en marcha sin resistencia. La clave del nivel 1 es la disposición, no la iniciativa.',
          },
        },
        {
          heading: 'Nivel 2: revaluar las propias certezas',
          paragraphs: [
            'El nivel 2 se describe como: «revalúa la seguridad que le dan sus certezas, modificando su actuar en consonancia con los nuevos argumentos organizacionales, en línea con el Código de Integridad».',
            'Es un salto cualitativo respecto del nivel 1. Ya no se trata solo de aceptar un cambio externo, sino de revisar las propias convicciones profesionales cuando aparecen argumentos nuevos. Un servidor de nivel 2 no defiende su práctica anterior por costumbre: la revisa.',
            'Sus conductas observables son:',
          ],
          bullets: [
            '«Evalúa las distintas posturas, mostrando apertura para ajustar su accionar ante nuevas evidencias o posibilidades».',
            '«Se esfuerza por entender de manera sistémica los cambios y aplica las metodologías y herramientas que propone la organización para facilitar su adaptación».',
            '«Apoya y promueve los cambios en las dinámicas laborales y trabaja para llevarlos a cabo, fundamentado en el Código de Integridad».',
          ],
          callout: {
            type: 'memoriza',
            text: 'Diferencia práctica: NIVEL 1 = ejecuto bien el cambio que me proponen. NIVEL 2 = reviso mis propias certezas, entiendo el cambio sistémicamente y lo apoyo activamente.',
          },
        },
        {
          heading: 'Cuadro comparativo de los dos niveles',
          paragraphs: [
            'Este cuadro es la herramienta que necesitas en el examen: cuando el enunciado plantee una situación de cambio, debes identificar si la conducta correcta es la de recepción (nivel 1) o la de revisión y promoción (nivel 2).',
          ],
          table: {
            caption: 'Adaptabilidad: nivel 1 frente a nivel 2',
            headers: ['Criterio', 'Nivel 1', 'Nivel 2'],
            rows: [
              ['Origen del cambio', 'Lo proponen otros', 'Se revisan las propias certezas ante nuevos argumentos'],
              ['Postura ante perspectivas distintas', 'Las comprende y se ajusta', 'Las evalúa y ajusta su accionar ante nuevas evidencias'],
              ['Comprensión del cambio', 'Lo pone en marcha', 'Lo entiende de manera sistémica'],
              ['Actitud', 'Acepta con disposición', 'Apoya y promueve'],
              ['Referencia de conducta', 'Objetivos laborales propios', 'Código de Integridad y argumentos organizacionales'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'Guía pedagógica orientativa. El cuadro organiza las conductas textuales de los niveles 1 y 2 de la ficha oficial de Adaptabilidad (Resolución 65 de 2024) para facilitar su contraste; los criterios de comparación son una ayuda de estudio, no una clasificación de la norma.',
          },
        },
        {
          heading: 'Adaptabilidad en el contexto DIAN',
          paragraphs: [
            'En la DIAN la adaptabilidad tiene escenarios muy concretos: la entrada en vigor de una reforma tributaria o de una resolución de procedimiento que cambia un formato y una metodología de trabajo; la implementación de nuevos sistemas de información; la reasignación temporal de funciones por un pico de carga; la rotación de procesos internos; y la atención de usuarios con expectativas muy distintas entre sí (un gran contribuyente, un pequeño comerciante y un ciudadano que reclama).',
            'En todos esos escenarios, la conducta incorrecta es la resistencia silenciosa o la queja, incluso cuando la queja tiene razón técnica. El Diccionario no premia tener razón: premia ajustar la conducta a los objetivos institucionales y, en el nivel 2, aportar activamente para que el cambio funcione.',
          ],
        },
      ],
      summary: [
        'Definición: capacidad para comprender diferentes perspectivas y responder oportunamente a diversas situaciones, contextos, medios y personas, modificando la conducta y las formas de trabajo conforme a los objetivos institucionales.',
        'Nivel 1: comprende perspectivas diferentes y cambia su conducta para ajustarse a los distintos contextos; pone en marcha los cambios que le proponen e integra nuevas perspectivas, aprendizajes y tecnologías.',
        'Nivel 2: revalúa sus propias certezas ante nuevos argumentos organizacionales; evalúa posturas, entiende el cambio de manera sistémica y apoya y promueve los cambios en las dinámicas laborales.',
        'La diferencia operativa: el nivel 1 recibe el cambio; el nivel 2 revisa sus certezas y promueve el cambio.',
      ],
      memorize: [
        'Adaptabilidad = comprender perspectivas + responder oportunamente + modificar la conducta y las formas de trabajo.',
        'Nivel 1: PONE EN MARCHA los cambios propuestos e integra nuevas perspectivas y tecnologías.',
        'Nivel 2: REVALÚA sus certezas, entiende el cambio de forma sistémica y APOYA Y PROMUEVE los cambios.',
        'Ambos niveles se alinean con los objetivos institucionales; el nivel 2 añade el Código de Integridad como referencia.',
      ],
      examples: [
        {
          heading: 'Ejemplo situacional de nivel 1',
          paragraphs: [
            'Situación: «La entidad expide una resolución que modifica el formato y el flujo de radicación de las solicitudes en su dependencia. Usted conoce bien el procedimiento anterior y considera que el nuevo es más lento».',
            'La conducta de nivel 1 es: implementar el nuevo formato desde su entrada en vigor, aprender su uso funcional y ajustar su rutina de trabajo al procedimiento vigente, aunque personalmente prefiera el anterior. La competencia no exige que te guste el cambio: exige que lo pongas en marcha y que integres la nueva herramienta para cumplir con tu labor.',
            'Sería incorrecta la opción de seguir usando el formato anterior «mientras tanto», aun si se justifica en la mayor eficiencia, porque sustituye el procedimiento institucional por un criterio propio.',
          ],
        },
        {
          heading: 'Ejemplo situacional de nivel 2',
          paragraphs: [
            'Situación: «En una reunión de área usted sostiene, con argumentos, que cierta validación manual es indispensable por control. Un superior presenta datos de los últimos seis meses que muestran que el sistema automatizado detecta los mismos casos y además reduce el tiempo de respuesta. El equipo está dividido».',
            'La conducta de nivel 2 es evaluar las posturas y ajustar el propio accionar ante la nueva evidencia: reconocer los datos, revaluar la propia certeza técnica y apoyar la implementación del cambio, aportando para que el control se mantenga donde efectivamente se requiere. Se trata de revisar la posición propia ante argumentos nuevos, no de ceder por jerarquía.',
            'Sería incorrecta la opción de «mantener su posición porque la evidencia no cubre todos los escenarios», si esa objeción se usa para no adaptarse en lugar de para perfeccionar la implementación. El nivel 2 exige entender el cambio sistémicamente y trabajar para llevarlo a cabo.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Elegir en un ítem de nivel 1 una conducta de nivel 2 (promover el cambio, anticiparse, influir en el equipo).',
          correction: 'El nivel evaluado es parte de la respuesta correcta. En nivel 1 lo esperado es poner en marcha el cambio propuesto y ajustarse, no liderarlo.',
        },
        {
          mistake: 'Interpretar la adaptabilidad como «hacer lo que el jefe diga» sin criterio.',
          correction: 'La definición ancla la adaptación a los objetivos institucionales y, en el nivel 2, al Código de Integridad. No se adapta bien quien ejecuta algo contrario a esos referentes.',
        },
        {
          mistake: 'Confundir adaptabilidad con disponibilidad permanente de horarios o tareas.',
          correction: 'La competencia se refiere a la conducta y a las formas de trabajo frente a situaciones, contextos, medios y personas, no a la disponibilidad personal.',
        },
      ],
      norms: [
        {
          norm: 'Resolución 65 de 2024 de la DIAN',
          status: 'vigente',
          note: 'Ficha de la competencia Adaptabilidad: definición, niveles de desarrollo 1 a 4 y conductas observables.',
        },
        {
          norm: 'Decreto 815 de 2018',
          article: 'art. 2.2.4.7',
          status: 'vigente',
          note: 'Define la competencia común «Adaptación al cambio» como enfrentar con flexibilidad las situaciones nuevas, con un manejo positivo y constructivo de los cambios.',
        },
      ],
      links: [
        { label: 'DIAN — Código de Ética y de Buen Gobierno', url: 'https://www.dian.gov.co/dian/entidad/CodigoBuenGobierno/Codigo-de-Etica-Vr1-2021.pdf' },
        { label: 'CNSC — Comisión Nacional del Servicio Civil', url: 'https://www.cnsc.gov.co/' },
      ],
      mindmap: {
        root: 'Adaptabilidad',
        branches: [
          { label: 'Definición', children: ['Comprender perspectivas', 'Responder oportunamente', 'Modificar conducta y formas de trabajo', 'Alineado a objetivos'] },
          { label: 'Nivel 1', children: ['Comprende perspectivas diferentes', 'Pone en marcha los cambios', 'Integra nuevas perspectivas y tecnologías', 'Acepta nuevas situaciones'] },
          { label: 'Nivel 2', children: ['Revalúa sus certezas', 'Evalúa posturas ante nuevas evidencias', 'Entiende el cambio sistémicamente', 'Apoya y promueve los cambios'] },
          { label: 'Contexto DIAN', children: ['Reformas y resoluciones', 'Nuevos sistemas de información', 'Reasignación de funciones', 'Usuarios diversos'] },
        ],
      },
      mindmapText:
        'La Adaptabilidad es la capacidad de comprender diferentes perspectivas y responder oportunamente a diversas situaciones, contextos, medios y personas, modificando la conducta y las formas de trabajo conforme a los objetivos institucionales. En el nivel 1 el servidor comprende perspectivas distintas, pone en marcha los cambios que le proponen e integra nuevas perspectivas, aprendizajes y tecnologías. En el nivel 2 revalúa sus propias certezas ante nuevos argumentos organizacionales, evalúa distintas posturas, entiende los cambios de manera sistémica y apoya y promueve los cambios en las dinámicas laborales.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). Definiciones, niveles y conductas observables tomados textualmente de la Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales).',
        },
      ],
    },
    {
      id: 'm14-l03',
      moduleId: 'm14',
      title: 'Comportamiento ético: niveles 1 y 4',
      indicators: ['i14', 'i15'],
      objectives: [
        'Enunciar la definición oficial de la competencia Comportamiento ético.',
        'Distinguir las conductas del nivel 1 (básico) y del nivel 4 (gerencial y específico).',
        'Aplicar un método de análisis a dilemas éticos del contexto DIAN.',
      ],
      sections: [
        {
          heading: 'Definición oficial',
          paragraphs: [
            'El Diccionario de Competencias Comportamentales de la DIAN define el Comportamiento ético como la «capacidad para actuar de acuerdo con prácticas laborales correctas, demostrando congruencia entre el discurso y la actuación, enmarcado en el código de integridad de la DIAN».',
            'La definición destaca la CONGRUENCIA: no basta con conocer las normas éticas ni con declarar adhesión a ellas; la competencia se mide por la coincidencia entre lo que se dice y lo que se hace. El referente concreto es el código de integridad institucional, es decir, los cinco valores del Código de Integridad del Servicio Público que la DIAN incorporó a su Código de Ética y de Buen Gobierno.',
            'Recuerda la particularidad de esta competencia, que el propio Diccionario advierte: es básica y se evalúa en nivel 1 para todos los empleos, y es además específica y gerencial, caso en el cual su nivel de desarrollo exigido es superior a 1. Esa es la razón de que la convocatoria incluya i14 (nivel 1) e i15 (nivel 4).',
          ],
          callout: {
            type: 'memoriza',
            text: 'Comportamiento ético = prácticas laborales correctas + CONGRUENCIA entre el discurso y la actuación + enmarcado en el código de integridad de la DIAN.',
          },
        },
        {
          heading: 'Nivel 1: obrar a la luz del código de integridad',
          paragraphs: [
            'El nivel 1 se describe como: «desarrolla su trabajo a la luz del código de integridad institucional y siendo consciente del impacto de su actuación en el quehacer institucional».',
            'Sus conductas observables son:',
          ],
          bullets: [
            '«Demuestra integridad en el ejercicio de sus tareas».',
            '«Conoce y aplica el código de integridad de la organización».',
            '«Se identifica y asume como propio el código de integridad de la Entidad».',
          ],
          callout: {
            type: 'importante',
            text: 'El nivel 1 exige tres cosas concretas: conocer el código, aplicarlo y asumirlo como propio. La ignorancia del código no es una excusa válida en un ítem de nivel 1: conocerlo es parte de la conducta esperada.',
          },
        },
        {
          heading: 'Nivel 4: estructurar, fomentar y ser referente',
          paragraphs: [
            'El nivel 4 se describe como: «estructura, fomenta y aplica estrategias organizacionales sobre la base de valores institucionales y prácticas organizacionales, para sí mismo y para la organización».',
            'Sus conductas observables son:',
          ],
          bullets: [
            '«Es consciente de las repercusiones de su actuación en el servicio que ofrece la entidad, orientando su conducta de acuerdo con el código de integridad».',
            '«Promueve en los equipos de trabajo en que participa la práctica del código de integridad en todas las esferas de actuación».',
            '«Es referente en la organización por su comportamiento ético».',
          ],
          callout: {
            type: 'memoriza',
            text: 'Los tres verbos del nivel 4: ESTRUCTURA estrategias, FOMENTA la práctica en sus equipos y ES REFERENTE. La conducta ética deja de ser individual y se convierte en influencia sobre otros.',
          },
        },
        {
          heading: 'Los niveles intermedios, para ubicar la progresión',
          paragraphs: [
            'Aunque la convocatoria evalúa los niveles 1 y 4, conocer los niveles 2 y 3 ayuda a no confundirlos. El nivel 2 se describe como «respeta el código de integridad, aún sobre sus propios intereses, y lo incorpora en todos los ámbitos»; el nivel 3, como «es confiable en su manera de proceder con la información a su cargo, basado en la aplicación del código de integridad».',
            'La progresión, entonces, va del cumplimiento propio (nivel 1) al cumplimiento sostenido por encima del interés personal (nivel 2), luego a la confiabilidad en el manejo de la información (nivel 3) y finalmente a la influencia organizacional (nivel 4).',
          ],
          table: {
            caption: 'Comportamiento ético: los cuatro niveles',
            headers: ['Nivel', 'Descripción oficial resumida', 'Conducta característica'],
            rows: [
              ['1', 'Desarrolla su trabajo a la luz del código de integridad institucional', 'Conoce, aplica y asume como propio el código'],
              ['2', 'Respeta el código aún sobre sus propios intereses y lo incorpora en todos los ámbitos', 'Maneja con imparcialidad los temas a su cargo'],
              ['3', 'Es confiable en su proceder con la información a su cargo', 'Coherencia entre el decir y el hacer; asume consecuencias'],
              ['4', 'Estructura, fomenta y aplica estrategias sobre la base de valores institucionales', 'Promueve el código en sus equipos y es referente'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'Guía pedagógica orientativa. El resumen de los niveles 2 y 3 en esta tabla es una síntesis de las descripciones oficiales de la Resolución 65 de 2024, incluida para contextualizar la progresión; para los niveles 1 y 4 se conservan las expresiones textuales de la norma.',
          },
        },
        {
          heading: 'Cómo resolver un dilema ético en el examen',
          paragraphs: [
            'Los ítems de comportamiento ético presentan situaciones con presión: un superior que pide agilizar un trámite sin el soporte documental completo, un compañero que solicita información de un contribuyente, un usuario que ofrece un obsequio por la atención, una cifra del informe que «conviene» redondear.',
            'Un método de cuatro pasos resuelve la mayoría: (1) identifica el valor o la norma en tensión (honestidad, justicia, respeto, confidencialidad); (2) pregúntate qué exige el código de integridad, no qué resulta más cómodo ni más simpático; (3) descarta toda opción que consista en ocultar, postergar sin dejar rastro o resolver informalmente; (4) elige la conducta que actúa conforme al código y deja trazabilidad (informar, dejar constancia, usar los canales institucionales).',
            'En el nivel 4 hay un paso adicional: además de actuar bien, la respuesta correcta suele incluir promover la práctica en el equipo o dejar capacidad instalada, sin exponer innecesariamente a las personas ni convertirse en denunciante informal.',
          ],
          callout: {
            type: 'error',
            text: 'Cuidado con las opciones «heroicas»: confrontar en público a un superior o negarse en seco a cumplir una instrucción pueden parecer íntegras, pero si existe un canal institucional para reportar, la conducta correcta es usarlo. La ética del empleo público se ejerce por los cauces previstos.',
          },
        },
      ],
      summary: [
        'Definición: capacidad para actuar de acuerdo con prácticas laborales correctas, demostrando congruencia entre el discurso y la actuación, enmarcado en el código de integridad de la DIAN.',
        'Nivel 1 (i14): desarrolla su trabajo a la luz del código de integridad institucional, es consciente del impacto de su actuación, demuestra integridad, conoce y aplica el código y lo asume como propio.',
        'Nivel 4 (i15): estructura, fomenta y aplica estrategias organizacionales sobre la base de valores institucionales; promueve la práctica del código en sus equipos y es referente por su comportamiento ético.',
        'La competencia es básica (nivel 1) y a la vez específica y gerencial (nivel superior a 1), según la nota expresa del Diccionario.',
        'En los dilemas, la respuesta correcta actúa conforme al código de integridad y por los canales institucionales, no por vías informales.',
      ],
      memorize: [
        'Definición: prácticas correctas + congruencia entre decir y hacer + código de integridad de la DIAN.',
        'Nivel 1: CONOCE, APLICA y ASUME COMO PROPIO el código; es consciente del impacto de su actuación.',
        'Nivel 4: ESTRUCTURA, FOMENTA y ES REFERENTE.',
        'Niveles 2 y 3: respeta el código sobre sus propios intereses (2) y es confiable con la información a su cargo (3).',
        'Método del dilema: identificar el valor en tensión → aplicar el código → evitar ocultamientos → usar los canales institucionales.',
      ],
      examples: [
        {
          heading: 'Ejemplo situacional de nivel 1',
          paragraphs: [
            'Situación: «Un compañero le pide que le permita consultar la información tributaria de un tercero en el sistema, argumentando que es para un trámite personal y que él no tiene permisos habilitados».',
            'La conducta de nivel 1 es negarse a facilitar el acceso y, si la insistencia continúa, poner el caso en conocimiento por los canales establecidos. El nivel 1 exige conocer y aplicar el código de integridad: la confidencialidad de la información a cargo no se negocia y el hecho de que quien pide sea un compañero no modifica la regla.',
            'Sería incorrecta la opción de «permitirle la consulta bajo su supervisión y solo esta vez», porque convierte una excepción informal en la regla, justo lo contrario de aplicar el código.',
          ],
        },
        {
          heading: 'Ejemplo situacional de nivel 4',
          paragraphs: [
            'Situación: «En su equipo se ha vuelto costumbre que los reportes de gestión se ajusten para que las cifras se vean mejor ante la Dirección, sin falsear datos pero presentando solo los indicadores favorables. Usted advierte esta práctica recurrente».',
            'La conducta de nivel 4 no se limita a negarse a participar: estructura y fomenta una práctica distinta. Implica promover en el equipo un criterio común de presentación completa de resultados (incluidos los desfavorables), acordar con el equipo la forma de reportar, y sostener esa práctica con el ejemplo, de modo que la entidad reciba información fiel.',
            'La diferencia con el nivel 1 es la dirección de la conducta: aquí el servidor no solo cumple el código en su propio trabajo, sino que influye en cómo lo cumple el equipo. Ese es el sentido del nivel 4: ser referente.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Pensar que el comportamiento ético se limita a no cometer delitos.',
          correction: 'La definición incluye la congruencia entre el discurso y la actuación y el cumplimiento del código de integridad en el trabajo diario: evitar sesgos, no usar recursos públicos para fines privados, no dar trato preferencial.',
        },
        {
          mistake: 'Responder en un ítem de nivel 4 con una conducta individual correcta.',
          correction: 'El nivel 4 exige fomentar la práctica en los equipos y ser referente. Una acción correcta pero solitaria se corresponde como máximo con niveles inferiores.',
        },
        {
          mistake: 'Elegir opciones de denuncia pública o confrontación directa por parecer más íntegras.',
          correction: 'El comportamiento ético se ejerce por los canales institucionales establecidos. La confrontación pública puede lesionar otros valores y no es la conducta esperada.',
        },
      ],
      norms: [
        {
          norm: 'Resolución 65 de 2024 de la DIAN',
          status: 'vigente',
          note: 'Ficha de la competencia Comportamiento ético: definición, niveles 1 a 4 y conductas observables. La nota de la resolución precisa que es competencia básica, específica y gerencial.',
        },
        {
          norm: 'Código de Integridad del Servicio Público',
          status: 'vigente',
          note: 'Valores y principios de acción adoptados por la DIAN en su Código de Ética y de Buen Gobierno.',
        },
        {
          norm: 'Ley 1952 de 2019',
          status: 'verificar',
          note: 'Código General Disciplinario: consecuencias del incumplimiento de los deberes éticos del servidor público. Verificar vigencia y modificaciones posteriores.',
        },
      ],
      links: [
        { label: 'DIAN — Código de Ética y de Buen Gobierno', url: 'https://www.dian.gov.co/dian/entidad/CodigoBuenGobierno/Codigo-de-Etica-Vr1-2021.pdf' },
        { label: 'Función Pública — Código de Integridad del Servicio Público', url: 'https://www.funcionpublica.gov.co/' },
      ],
      mindmap: {
        root: 'Comportamiento ético',
        branches: [
          { label: 'Definición', children: ['Prácticas laborales correctas', 'Congruencia decir-hacer', 'Código de integridad DIAN'] },
          { label: 'Nivel 1 (i14)', children: ['Trabaja a la luz del código', 'Demuestra integridad', 'Conoce y aplica el código', 'Lo asume como propio'] },
          { label: 'Nivel 4 (i15)', children: ['Estructura estrategias', 'Promueve en los equipos', 'Referente institucional'] },
          { label: 'Método del dilema', children: ['Identificar el valor en tensión', 'Aplicar el código', 'Evitar ocultamientos', 'Usar canales institucionales'] },
        ],
      },
      mindmapText:
        'El Comportamiento ético es la capacidad de actuar conforme a prácticas laborales correctas, demostrando congruencia entre el discurso y la actuación, enmarcado en el código de integridad de la DIAN. En el nivel 1 el servidor desarrolla su trabajo a la luz del código, conoce y lo aplica y lo asume como propio, consciente del impacto de su actuación. En el nivel 4 estructura, fomenta y aplica estrategias sobre la base de valores institucionales, promueve la práctica del código en sus equipos y es referente por su comportamiento ético.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). Definiciones, niveles y conductas observables tomados textualmente de la Resolución 65 de 2024 de la DIAN, complementados con el Código de Ética y de Buen Gobierno de la DIAN.',
        },
      ],
    },
    {
      id: 'm14-l04',
      moduleId: 'm14',
      title: 'Comunicación efectiva: niveles 1 y 2',
      indicators: ['i16', 'i17'],
      objectives: [
        'Enunciar la definición oficial de la competencia Comunicación efectiva.',
        'Distinguir las conductas observables del nivel 1 y del nivel 2.',
        'Aplicar técnicas de escucha activa, verificación de comprensión y comunicación asertiva.',
      ],
      sections: [
        {
          heading: 'Definición oficial',
          paragraphs: [
            'El Diccionario define la Comunicación efectiva como la «capacidad para escuchar, entender a otros y transmitir de forma clara y precisa la información requerida, tanto en lo escrito como en lo verbal y gestual, a fin de construir redes de contacto efectivas con los funcionarios y ciudadanos para alcanzar los objetivos institucionales».',
            'Hay tres precisiones valiosas en esa definición. La primera es que el orden empieza por ESCUCHAR, no por hablar. La segunda es que la comunicación incluye lo gestual: el tono, el gesto y la actitud comunican tanto como las palabras. La tercera es que la competencia tiene una finalidad instrumental: construir redes de contacto para alcanzar objetivos institucionales, no simplemente «caer bien».',
          ],
          callout: {
            type: 'memoriza',
            text: 'Comunicación efectiva = ESCUCHAR + ENTENDER + TRANSMITIR con claridad y precisión (escrito, verbal y gestual) para construir REDES DE CONTACTO y alcanzar los objetivos institucionales.',
          },
        },
        {
          heading: 'Nivel 1: escucha, claridad y verificación',
          paragraphs: [
            'El nivel 1 se describe como: «escucha activamente y brinda información de forma clara y precisa, verificando la comprensión del mensaje por parte de su interlocutor».',
            'Sus conductas observables son:',
          ],
          bullets: [
            '«Hace un uso adecuado de las redes de contacto organizacionales, manteniendo un diálogo respetuoso con superiores, colaboradores, pares y ciudadanos».',
            '«Realiza las preguntas adecuadas a fin de obtener la información que necesita, de acuerdo con la necesidad».',
            '«Se asegura de que su interlocutor comprenda el mensaje».',
          ],
          callout: {
            type: 'importante',
            text: 'La conducta más discriminante del nivel 1 es la tercera: ASEGURARSE de que el otro comprendió. En los ítems situacionales, las opciones que solo «informan» o «envían» sin verificar comprensión suelen ser las incorrectas.',
          },
        },
        {
          heading: 'Nivel 2: adaptarse al interlocutor y a los canales',
          paragraphs: [
            'El nivel 2 se describe como: «se comunica de forma clara y concisa, de acuerdo con el tipo de interlocutor, siendo receptivo a nuevas redes de contacto en diferentes contextos».',
            'Sus conductas observables son:',
          ],
          bullets: [
            '«Identifica nuevas redes de contacto externas e internas que faciliten su gestión».',
            '«Comunica con transparencia y asertividad, tanto los acuerdos como los desacuerdos».',
            '«Adapta su discurso y canal de acuerdo con el tipo de interlocutor».',
          ],
          callout: {
            type: 'memoriza',
            text: 'Diferencia práctica: NIVEL 1 = comunica claro y verifica que le entendieron. NIVEL 2 = ADAPTA el discurso y el canal al interlocutor y es ASERTIVO también al expresar desacuerdos.',
          },
        },
        {
          heading: 'Técnicas que se evalúan',
          paragraphs: [
            'Estas cuatro técnicas aparecen una y otra vez en los ítems de comunicación, y conviene tenerlas identificadas por nombre:',
          ],
          table: {
            caption: 'Técnicas de comunicación y su conducta observable',
            headers: ['Técnica', 'En qué consiste', 'Conducta observable asociada'],
            rows: [
              ['Escucha activa', 'Atender sin interrumpir, parafrasear para confirmar, atender al lenguaje no verbal', 'Hace preguntas adecuadas para obtener la información que necesita'],
              ['Verificación de comprensión', 'Pedir al interlocutor que reformule o confirmar los puntos clave', 'Se asegura de que su interlocutor comprenda el mensaje'],
              ['Asertividad', 'Expresar acuerdos y desacuerdos con claridad y respeto, sin agresividad ni pasividad', 'Comunica con transparencia y asertividad acuerdos y desacuerdos'],
              ['Adaptación del canal y del registro', 'Elegir el medio y el lenguaje según el interlocutor y el contexto', 'Adapta su discurso y canal de acuerdo con el tipo de interlocutor'],
            ],
          },
          callout: {
            type: 'ejemplo',
            text: 'Ejemplo de adaptación de canal: la misma decisión se comunica con un oficio formal al contribuyente, con una reunión breve al equipo interno y con una llamada al área que necesita la información de inmediato. El contenido es el mismo; el canal y el registro cambian con el interlocutor.',
          },
        },
        {
          heading: 'Comunicación efectiva en la atención al ciudadano',
          paragraphs: [
            'En la DIAN la comunicación efectiva tiene una cara muy visible: la atención a contribuyentes y usuarios. Un ciudadano que no entiende un requerimiento no es un ciudadano desinformado; en muchos casos es el resultado de una comunicación institucional poco clara. Por eso la competencia se conecta directamente con la Orientación al usuario y al ciudadano (i19).',
            'Las conductas que se valoran en este contexto son: explicar en lenguaje comprensible sin renunciar al rigor técnico, confirmar que el ciudadano entendió qué debe hacer y en qué plazo, no usar el lenguaje técnico como barrera, y mantener un diálogo respetuoso incluso cuando el usuario está molesto o cuando la respuesta es negativa.',
          ],
        },
      ],
      summary: [
        'Definición: capacidad para escuchar, entender a otros y transmitir de forma clara y precisa la información requerida, escrita, verbal y gestual, para construir redes de contacto efectivas y alcanzar los objetivos institucionales.',
        'Nivel 1: escucha activamente, brinda información clara y precisa y verifica la comprensión del mensaje; usa adecuadamente las redes de contacto y hace las preguntas adecuadas.',
        'Nivel 2: se comunica clara y concisamente según el tipo de interlocutor, identifica nuevas redes de contacto, es transparente y asertivo con acuerdos y desacuerdos y adapta discurso y canal.',
        'Técnicas evaluadas: escucha activa, verificación de comprensión, asertividad y adaptación del canal según el interlocutor.',
      ],
      memorize: [
        'Definición: escuchar + entender + transmitir claro y preciso (escrito, verbal y gestual) + redes de contacto.',
        'Nivel 1: escucha activa, claridad y VERIFICA que el otro comprendió.',
        'Nivel 2: ADAPTA el discurso y el canal; asertividad también en los desacuerdos; identifica nuevas redes de contacto.',
        'Las tres conductas del nivel 1: redes de contacto con respeto · preguntas adecuadas · asegurar la comprensión.',
      ],
      examples: [
        {
          heading: 'Ejemplo situacional de nivel 1',
          paragraphs: [
            'Situación: «Un ciudadano se acerca a la ventanilla y usted le explica un procedimiento de tres pasos. Al terminar, el ciudadano asiente con la cabeza y se retira, pero advierte que no tomó nota».',
            'La conducta de nivel 1 es verificar la comprensión antes de que el ciudadano se retire: pedirle que le repita los pasos o confirmar con él los dos datos críticos (qué debe presentar y en qué plazo). Asegurarse de que el interlocutor comprendió el mensaje es una de las tres conductas observables del nivel 1, y no se cumple con un simple «¿alguna pregunta?» seguido del silencio.',
            'Sería incorrecta la opción de considerar que la función ya está cumplida porque la información se entregó, o la de entregar un folleto sin verificar nada.',
          ],
        },
        {
          heading: 'Ejemplo situacional de nivel 2',
          paragraphs: [
            'Situación: «Debe informar a un área interna que su solicitud de información será negada. Es un par suyo, con quien tiene buena relación, y sabe que la respuesta le incomodará».',
            'La conducta de nivel 2 es comunicar con transparencia y asertividad tanto el desacuerdo como el acuerdo: informar la decisión con claridad, explicar el fundamento, escuchar los argumentos del otro y dejar claro el canal para revisar el caso si hay nueva evidencia. No se suaviza la información hasta hacerla incomprensible ni se evade la conversación delegándola a un correo impersonal.',
            'Sería incorrecta la opción de «posponer la comunicación para no afectar la relación», que es la versión laboral de no comunicar, ni la de comunicarla por un canal inadecuado (un chat informal) sin adaptar el registro al tema y al interlocutor.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Equiparar comunicación efectiva con «hablar bien» o con redactar correctamente.',
          correction: 'La definición empieza por escuchar y entender. Un texto impecable que el receptor no comprende no evidencia la competencia.',
        },
        {
          mistake: 'Creer que verificar la comprensión es ofensivo o redundante.',
          correction: 'Asegurarse de que el interlocutor comprendió es una conducta observable del nivel 1, no un exceso de celo.',
        },
        {
          mistake: 'Evitar comunicar desacuerdos para no generar tensión.',
          correction: 'El nivel 2 exige comunicar con transparencia y asertividad tanto los acuerdos como los desacuerdos. Omitir el desacuerdo no es asertividad, es evitación.',
        },
      ],
      norms: [
        {
          norm: 'Resolución 65 de 2024 de la DIAN',
          status: 'vigente',
          note: 'Ficha de la competencia Comunicación efectiva: definición, niveles 1 a 4 y conductas observables.',
        },
        {
          norm: 'Ley 1437 de 2011',
          article: 'arts. 5-8',
          status: 'vigente',
          note: 'Debido proceso, igualdad, imparcialidad y buena fe en las actuaciones administrativas; marco del diálogo respetuoso con los ciudadanos.',
        },
        {
          norm: 'Ley 1712 de 2014',
          status: 'vigente',
          note: 'Transparencia y derecho de acceso a la información pública: comunicar información completa, veraz, oportuna y comprensible.',
        },
      ],
      links: [
        { label: 'DIAN — Código de Ética y de Buen Gobierno', url: 'https://www.dian.gov.co/dian/entidad/CodigoBuenGobierno/Codigo-de-Etica-Vr1-2021.pdf' },
        { label: 'Función Pública — Gestor Normativo', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/' },
      ],
      mindmap: {
        root: 'Comunicación efectiva',
        branches: [
          { label: 'Definición', children: ['Escuchar y entender', 'Transmitir claro y preciso', 'Escrito, verbal y gestual', 'Redes de contacto'] },
          { label: 'Nivel 1', children: ['Escucha activa', 'Información clara y precisa', 'Verifica la comprensión', 'Preguntas adecuadas'] },
          { label: 'Nivel 2', children: ['Según el tipo de interlocutor', 'Nuevas redes de contacto', 'Transparencia y asertividad', 'Adapta discurso y canal'] },
          { label: 'Técnicas', children: ['Escucha activa', 'Verificación', 'Asertividad', 'Canal y registro'] },
        ],
      },
      mindmapText:
        'La Comunicación efectiva es la capacidad de escuchar, entender a otros y transmitir de forma clara y precisa la información requerida, en lo escrito, verbal y gestual, para construir redes de contacto efectivas. En el nivel 1 el servidor escucha activamente, brinda información clara y precisa, hace las preguntas adecuadas y verifica que su interlocutor comprendió el mensaje. En el nivel 2 se comunica de forma clara y concisa según el tipo de interlocutor, identifica nuevas redes de contacto, comunica con transparencia y asertividad los acuerdos y los desacuerdos, y adapta su discurso y su canal.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). Definiciones, niveles y conductas observables tomados textualmente de la Resolución 65 de 2024 de la DIAN.',
        },
      ],
    },
    {
      id: 'm14-l05',
      moduleId: 'm14',
      title: 'Orientación al logro y Orientación al usuario y al ciudadano (nivel 1)',
      indicators: ['i18', 'i19'],
      objectives: [
        'Enunciar las definiciones oficiales de Orientación al logro y de Orientación al usuario y al ciudadano.',
        'Identificar las conductas observables del nivel 1 de ambas competencias.',
        'Diferenciar las dos competencias en situaciones que las tensionan entre sí.',
      ],
      sections: [
        {
          heading: 'Orientación al logro: definición oficial',
          paragraphs: [
            'El Diccionario define la Orientación al logro como la «capacidad de orientar el trabajo propio para el cumplimiento de los objetivos propuestos en el marco de la estrategia organizacional, bajo estándares de calidad establecidos».',
            'Dos expresiones de la definición hacen todo el trabajo: «trabajo propio» y «estándares de calidad establecidos». La competencia se refiere a la gestión del propio trabajo, no a la de otros, y el cumplimiento de los objetivos no es válido si se logra por fuera de los estándares de calidad. Un resultado obtenido rápido pero mal hecho no evidencia esta competencia.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Orientación al logro = orientar el TRABAJO PROPIO al cumplimiento de los objetivos, dentro de la estrategia organizacional y BAJO ESTÁNDARES DE CALIDAD.',
          },
        },
        {
          heading: 'Orientación al logro, nivel 1',
          paragraphs: [
            'El nivel 1 se describe como: «demuestra disposición y cumple con las acciones necesarias para alcanzar los objetivos asignados».',
            'Sus conductas observables son:',
          ],
          bullets: [
            '«Cumple con lo solicitado en los tiempos previstos y con los recursos que se le asignan».',
            '«Realiza una adecuada organización y control de su propio trabajo para incrementar su productividad, haciendo buen uso de la tecnología».',
            '«Se responsabiliza por el logro de los objetivos y actividades propias».',
          ],
          callout: {
            type: 'importante',
            text: 'Los tres criterios del nivel 1 son TIEMPO, ORGANIZACIÓN y RESPONSABILIDAD. Si una opción del examen resuelve el objetivo incumpliendo un plazo, desorganizando el trabajo propio o trasladando la responsabilidad a otro, no es la respuesta correcta.',
          },
        },
        {
          heading: 'Orientación al usuario y al ciudadano: definición oficial',
          paragraphs: [
            'La Orientación al usuario y al ciudadano se define como la «capacidad y disposición para entender y satisfacer las necesidades y expectativas de los usuarios y ciudadanos, según las políticas públicas, los estándares de calidad establecidos y las competencias institucionales».',
            'La parte final de la definición es la que suele pasarse por alto: la satisfacción del usuario se busca «según las políticas públicas, los estándares de calidad establecidos y las competencias institucionales». Es decir, la competencia no autoriza a complacer al usuario por fuera de la ley: la cordialidad y la eficacia operan dentro del marco normativo. Ese es el punto exacto donde esta competencia se tensiona con otras y donde se construyen los ítems más difíciles.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Orientación al usuario y al ciudadano = ENTENDER y SATISFACER necesidades y expectativas, pero SEGÚN las políticas públicas, los estándares de calidad y las competencias institucionales. No es complacencia.',
          },
        },
        {
          heading: 'Orientación al usuario y al ciudadano, nivel 1',
          paragraphs: [
            'El nivel 1 se describe como: «escucha y atiende al ciudadano en forma objetiva y cordial para dar respuesta dentro de los plazos y condiciones de calidad establecidos».',
            'Sus conductas observables son:',
          ],
          bullets: [
            '«Escucha activamente las necesidades y requerimientos de los ciudadanos y orienta sus esfuerzos en la entrega de respuestas y/o soluciones oportunas, actualizadas y eficientes».',
            '«Brinda soluciones a los usuarios y ciudadanos aplicando los protocolos de servicio, los estándares de calidad y haciendo uso de la tecnología disponible».',
            '«Muestra disposición de servicio, amabilidad y respeto en la atención a los ciudadanos y usuarios».',
          ],
          table: {
            caption: 'Comparación de las dos competencias',
            headers: ['Criterio', 'Orientación al logro (i18)', 'Orientación al usuario y al ciudadano (i19)'],
            rows: [
              ['Definición', 'Orientar el trabajo propio al cumplimiento de los objetivos, bajo estándares de calidad', 'Entender y satisfacer las necesidades y expectativas de usuarios y ciudadanos según políticas y estándares'],
              ['Nivel 1', 'Demuestra disposición y cumple las acciones necesarias para alcanzar los objetivos asignados', 'Escucha y atiende en forma objetiva y cordial, dentro de plazos y condiciones de calidad'],
              ['Conducta clave', 'Cumplir en los tiempos previstos, organizar el propio trabajo, responsabilizarse', 'Escuchar, brindar soluciones según protocolos y mostrar amabilidad y respeto'],
              ['Riesgo si se exagera', 'Lograr la meta a costa de la calidad o del usuario', 'Complacer al usuario al margen de la norma'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'Guía pedagógica orientativa. Los «riesgos si se exagera» son una ayuda de estudio para entender la tensión entre ambas competencias; no son categorías que aparezcan en la norma.',
          },
        },
        {
          heading: 'La tensión entre las dos competencias',
          paragraphs: [
            'Ambas competencias pueden empujar en direcciones opuestas. Un servidor orientado al logro puede sentirse tentado a resolver rápido y cerrar el caso, mientras la orientación al usuario le exige escuchar hasta el final y explicar. Y al contrario: un servidor muy orientado al usuario puede prometer lo que la norma no permite, incumpliendo los estándares de calidad.',
            'La resolución que el Diccionario sugiere es explícita: la orientación al usuario opera «según las políticas públicas, los estándares de calidad establecidos y las competencias institucionales». Por tanto, ante un ítem que enfrenta la comodidad del usuario con el cumplimiento de la norma, la respuesta correcta es cumplir la norma y, al mismo tiempo, explicar, orientar y ofrecer las alternativas legales disponibles. Nunca es correcto saltarse el procedimiento para satisfacer al usuario, ni es correcto atender de mal modo invocando el procedimiento.',
          ],
          callout: {
            type: 'ejemplo',
            text: 'Ejemplo: un contribuyente solicita verbalmente que se le exima de una sanción. La conducta esperada es explicarle con claridad que la sanción no puede levantarse por esa vía, informarle qué recursos o procedimientos existen y cómo usarlos, y atenderlo con respeto. Ni la exención informal (falla la norma) ni el «no se puede, siguiente» (falla la orientación al usuario).',
          },
        },
      ],
      summary: [
        'Orientación al logro: capacidad de orientar el trabajo propio al cumplimiento de los objetivos propuestos en el marco de la estrategia organizacional, bajo estándares de calidad establecidos.',
        'Su nivel 1 (i18): demuestra disposición y cumple las acciones necesarias para alcanzar los objetivos asignados; cumple tiempos y recursos, organiza y controla su propio trabajo, y se responsabiliza de sus objetivos.',
        'Orientación al usuario y al ciudadano: capacidad y disposición para entender y satisfacer las necesidades y expectativas de usuarios y ciudadanos, según las políticas públicas, los estándares de calidad y las competencias institucionales.',
        'Su nivel 1 (i19): escucha y atiende al ciudadano en forma objetiva y cordial dentro de los plazos y condiciones de calidad; escucha activamente, brinda soluciones según protocolos y muestra amabilidad y respeto.',
        'Ante la tensión entre ambas, la norma manda: se cumple el procedimiento y se atiende bien al usuario al mismo tiempo.',
      ],
      memorize: [
        'Orientación al logro: trabajo PROPIO + objetivos + estándares de calidad.',
        'Nivel 1 de logro: tiempos y recursos · organización y control del propio trabajo · responsabilidad.',
        'Orientación al usuario: entender y satisfacer necesidades SEGÚN políticas, estándares y competencias institucionales.',
        'Nivel 1 del usuario: escucha activa · soluciones según protocolos y tecnología · amabilidad y respeto.',
        'Ni complacencia por fuera de la norma, ni eficiencia sin calidad.',
      ],
      examples: [
        {
          heading: 'Ejemplo situacional de Orientación al logro (nivel 1)',
          paragraphs: [
            'Situación: «Le asignan tres tareas con el mismo plazo de entrega y recursos limitados. A mitad de semana advierte que no podrá terminarlas todas con la calidad exigida».',
            'La conducta de nivel 1 es organizar y controlar el propio trabajo: priorizar según los objetivos asignados, reasignar su tiempo, hacer uso de las herramientas tecnológicas disponibles para ganar productividad, e informar oportunamente a quien corresponda si algún plazo está en riesgo, asumiendo la responsabilidad por sus objetivos.',
            'Sería incorrecta la opción de esperar al día de la entrega para reportar el incumplimiento, o la de entregar las tres tareas por debajo del estándar de calidad. El nivel 1 exige cumplir con lo solicitado en los tiempos previstos y con los recursos asignados, dentro del estándar de calidad de la definición.',
          ],
        },
        {
          heading: 'Ejemplo situacional de Orientación al usuario (nivel 1)',
          paragraphs: [
            'Situación: «Un ciudadano llega con un documento incompleto y solicita que se le reciba de todas formas, porque vive lejos y el plazo vence hoy. Se muestra visiblemente alterado».',
            'La conducta de nivel 1 combina los tres elementos: escuchar activamente su situación, brindarle la solución que los protocolos permiten (por ejemplo, orientarlo sobre cómo completar el requisito, los canales virtuales disponibles y el efecto real del plazo) y hacerlo con disposición de servicio, amabilidad y respeto, manteniendo el autocontrol ante la molestia.',
            'Sería incorrecta la opción de recibir el documento incompleto para evitar el conflicto, porque la definición subordina la satisfacción del usuario a las políticas públicas y a los estándares de calidad. También sería incorrecta la opción de responder con frialdad que «sin el requisito no hay nada que hacer»: la atención debe ser objetiva y cordial, con disposición de servicio.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Entender la orientación al usuario como obligación de dar al ciudadano lo que pide.',
          correction: 'La definición exige satisfacer necesidades y expectativas SEGÚN las políticas públicas, los estándares de calidad y las competencias institucionales. El límite es la norma.',
        },
        {
          mistake: 'Creer que la orientación al logro justifica entregar rápido aunque la calidad baje.',
          correction: 'La definición incorpora expresamente los estándares de calidad establecidos. Cumplir el plazo incumpliendo la calidad no acredita la competencia.',
        },
        {
          mistake: 'Trasladar a otros la responsabilidad cuando el propio trabajo está en riesgo.',
          correction: 'El nivel 1 exige responsabilizarse por el logro de los objetivos y actividades propias, e informar oportunamente.',
        },
      ],
      norms: [
        {
          norm: 'Resolución 65 de 2024 de la DIAN',
          status: 'vigente',
          note: 'Fichas de las competencias Orientación al logro y Orientación al usuario y al ciudadano: definiciones, niveles y conductas observables.',
        },
        {
          norm: 'Ley 1437 de 2011',
          article: 'arts. 5-8',
          status: 'vigente',
          note: 'Principios del procedimiento administrativo, incluidos debido proceso, igualdad, imparcialidad y buena fe.',
        },
        {
          norm: 'Ley 1755 de 2015',
          status: 'verificar',
          note: 'Regula el derecho de petición y los términos para resolver las solicitudes de los ciudadanos. Verificar términos vigentes.',
        },
      ],
      links: [
        { label: 'DIAN — Atención al ciudadano', url: 'https://www.dian.gov.co/atencionciudadano/Paginas/default.aspx' },
        { label: 'Función Pública — Gestor Normativo', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/' },
      ],
      mindmap: {
        root: 'Logro y usuario',
        branches: [
          { label: 'Orientación al logro', children: ['Trabajo propio', 'Objetivos de la estrategia', 'Estándares de calidad'] },
          { label: 'Logro nivel 1', children: ['Tiempos y recursos', 'Organización y control propios', 'Uso de tecnología', 'Responsabilidad'] },
          { label: 'Orientación al usuario', children: ['Entender necesidades', 'Satisfacer expectativas', 'Según políticas y estándares'] },
          { label: 'Usuario nivel 1', children: ['Escucha activa', 'Soluciones según protocolos', 'Amabilidad y respeto'] },
        ],
      },
      mindmapText:
        'La Orientación al logro es la capacidad de orientar el trabajo propio al cumplimiento de los objetivos en el marco de la estrategia organizacional y bajo estándares de calidad; en el nivel 1 implica cumplir tiempos y recursos, organizar y controlar el propio trabajo y responsabilizarse por los objetivos propios. La Orientación al usuario y al ciudadano es la capacidad y disposición para entender y satisfacer las necesidades y expectativas de usuarios y ciudadanos según las políticas públicas, los estándares de calidad y las competencias institucionales; en el nivel 1 implica escuchar y atender en forma objetiva y cordial, brindar soluciones según los protocolos y mostrar amabilidad y respeto.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). Definiciones, niveles y conductas observables tomados textualmente de la Resolución 65 de 2024 de la DIAN.',
        },
      ],
    },
    {
      id: 'm14-l06',
      moduleId: 'm14',
      title: 'Trabajo en equipo: niveles 1 y 3',
      indicators: ['i20', 'i21'],
      objectives: [
        'Enunciar la definición oficial de la competencia Trabajo en equipo.',
        'Distinguir las conductas observables del nivel 1 y del nivel 3.',
        'Reconocer las conductas de fomento de la colaboración y cuidado del clima laboral propias del nivel 3.',
      ],
      sections: [
        {
          heading: 'Definición oficial',
          paragraphs: [
            'El Diccionario define el Trabajo en equipo como la «capacidad para trabajar con otros de forma coordinada, armónica y sinérgica, potenciando los aportes de cada integrante, en pro del logro de los objetivos establecidos».',
            'Tres palabras describen el modo de trabajar: COORDINADA (con acuerdos y sincronía), ARMÓNICA (sin fricciones innecesarias) y SINÉRGICA (el resultado del conjunto supera la suma de las partes). Y una expresión describe el propósito: potenciar los aportes de cada integrante. Esto último es importante: el trabajo en equipo no exige homogeneidad, exige aprovechar lo que cada uno aporta.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Trabajo en equipo = trabajar con otros de forma COORDINADA, ARMÓNICA y SINÉRGICA, POTENCIANDO LOS APORTES de cada integrante, para los objetivos establecidos.',
          },
        },
        {
          heading: 'Nivel 1: cumplir los acuerdos y colaborar',
          paragraphs: [
            'El nivel 1 se describe como: «se compromete con los acuerdos alcanzados por el equipo para el desarrollo del trabajo y la consecución de objetivos establecidos».',
            'Sus conductas observables son:',
          ],
          bullets: [
            '«Participa en las actividades del equipo y cumple con los acuerdos, en pro de la consecución de los objetivos establecidos».',
            '«Colabora con los demás integrantes del equipo».',
            '«Acepta las normas comunes de trabajo establecidas para la consecución de los resultados».',
          ],
          callout: {
            type: 'importante',
            text: 'En el nivel 1 la palabra que decide es ACUERDOS. La conducta esperada es cumplir lo pactado por el equipo y aceptar sus normas comunes, aunque individualmente se prefiera otra forma de trabajar.',
          },
        },
        {
          heading: 'Nivel 3: fomentar el espíritu de colaboración',
          paragraphs: [
            'El nivel 3 se describe como: «fomenta el espíritu de colaboración, valorando positivamente los aportes de cada integrante y cuidando el buen clima laboral».',
            'Sus conductas observables son:',
          ],
          bullets: [
            '«Orienta el trabajo del equipo, fomenta y reconoce la participación de todos, cuidando del buen ambiente de trabajo».',
            '«Monitorea el cumplimiento de los objetivos del equipo y los alerta sobre las desviaciones, con fundamento en los datos».',
            '«Demuestra una actitud proactiva, receptiva y abierta frente a las decisiones adoptadas por el equipo».',
          ],
          table: {
            caption: 'Trabajo en equipo: nivel 1 frente a nivel 3',
            headers: ['Criterio', 'Nivel 1', 'Nivel 3'],
            rows: [
              ['Foco', 'El propio cumplimiento dentro del equipo', 'El funcionamiento del equipo en conjunto'],
              ['Conducta central', 'Cumple los acuerdos y colabora', 'Fomenta la colaboración y cuida el clima laboral'],
              ['Aporte al equipo', 'Participa y acepta las normas comunes', 'Orienta, reconoce la participación de todos y monitorea los objetivos'],
              ['Ante los aportes de otros', 'Colabora con los integrantes', 'Los valora positivamente y los potencia'],
              ['Ante las decisiones del equipo', 'Las acepta', 'Es proactivo, receptivo y abierto frente a ellas'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'Guía pedagógica orientativa. El cuadro organiza y contrasta las conductas textuales de los niveles 1 y 3 de la ficha oficial (Resolución 65 de 2024); los criterios de comparación son una ayuda de estudio, no una clasificación normativa.',
          },
        },
        {
          heading: 'El detalle del nivel 3: alertar con fundamento en los datos',
          paragraphs: [
            'La segunda conducta del nivel 3 merece atención especial porque combina dos cosas que rara vez van juntas en la intuición de los aspirantes: monitorear el cumplimiento de los objetivos del equipo y alertar sobre las desviaciones CON FUNDAMENTO EN LOS DATOS.',
            'Esto significa que en un ítem de nivel 3 la respuesta correcta no es la que «se preocupa» por el retraso ni la que lo comenta en pasillo, sino la que verifica el estado real del avance con información y lo pone en conocimiento del equipo de manera oportuna y sustentada. La diferencia entre alertar con datos y opinar sin ellos es exactamente lo que la ficha oficial está distinguiendo.',
            'Fíjate además en la combinación con la tercera conducta: la actitud proactiva, receptiva y abierta frente a las decisiones del equipo. El nivel 3 no es el que impone: es el que sostiene el clima y a la vez hace seguimiento riguroso.',
          ],
          callout: {
            type: 'error',
            text: 'Error frecuente: elegir como respuesta de nivel 3 una conducta de control autoritario del equipo («verifica que cada uno haga su parte y llama la atención a quien se atrasa»). El nivel 3 se define por fomentar la colaboración y cuidar el clima, no por supervisar a las personas.',
          },
        },
      ],
      summary: [
        'Definición: capacidad para trabajar con otros de forma coordinada, armónica y sinérgica, potenciando los aportes de cada integrante, en pro del logro de los objetivos establecidos.',
        'Nivel 1 (i20): se compromete con los acuerdos alcanzados por el equipo; participa en las actividades, colabora con los demás integrantes y acepta las normas comunes de trabajo.',
        'Nivel 3 (i21): fomenta el espíritu de colaboración, valora positivamente los aportes de cada integrante y cuida el buen clima laboral; orienta el trabajo del equipo, monitorea los objetivos y alerta desviaciones con fundamento en los datos.',
        'El nivel 1 se centra en el propio cumplimiento dentro del equipo; el nivel 3 se centra en el funcionamiento del equipo como conjunto.',
      ],
      memorize: [
        'Definición: coordinada + armónica + sinérgica + potenciando los aportes de cada integrante.',
        'Nivel 1: ACUERDOS. Participa, cumple los acuerdos, colabora y acepta las normas comunes.',
        'Nivel 3: FOMENTA la colaboración, VALORA los aportes de todos y CUIDA el clima laboral.',
        'Nivel 3: monitorea objetivos y alerta desviaciones CON FUNDAMENTO EN LOS DATOS.',
      ],
      examples: [
        {
          heading: 'Ejemplo situacional de nivel 1',
          paragraphs: [
            'Situación: «El equipo acordó que cada integrante entregará su parte del informe el miércoles, para consolidarlo el jueves. Usted considera que el formato acordado es menos eficiente que el que usa habitualmente».',
            'La conducta de nivel 1 es entregar su parte en la fecha acordada y en el formato común, colaborando con los demás integrantes, y aceptar las normas comunes de trabajo establecidas para la consecución del resultado. Si tiene una propuesta de mejora, la plantea en el espacio del equipo para la siguiente ocasión, no la aplica por su cuenta rompiendo el acuerdo.',
            'Sería incorrecta la opción de entregar su parte en su formato propio «porque es mejor», porque el compromiso con los acuerdos y las normas comunes del equipo es precisamente el contenido del nivel 1.',
          ],
        },
        {
          heading: 'Ejemplo situacional de nivel 3',
          paragraphs: [
            'Situación: «El equipo lleva dos semanas con retraso en una meta conjunta. En la reunión, un integrante plantea que el problema es que dos compañeros no están aportando lo suficiente y propone asignarles menos tareas».',
            'La conducta de nivel 3 combina las tres conductas de la ficha: monitorear el avance con datos antes de opinar, orientar el trabajo del equipo reconociendo la participación de todos y cuidar el clima laboral. En concreto: llevar la verificación del avance con información concreta, revisar con el equipo dónde están las desviaciones reales y qué obstáculos las explican, y encauzar la conversación hacia la reorganización del trabajo en lugar de hacia la atribución de culpas.',
            'Sería incorrecta la opción de respaldar la propuesta de reducir tareas a dos compañeros sin verificar los datos (alerta sin fundamento y deterioro del clima), y también la de evitar el tema para no generar tensión: monitorear y alertar oportunamente es parte del nivel 3.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Responder en un ítem de nivel 1 con conductas de liderazgo o coordinación del equipo.',
          correction: 'El nivel 1 se limita al compromiso con los acuerdos y la colaboración. Orientar el trabajo del equipo corresponde al nivel 3.',
        },
        {
          mistake: 'Interpretar el nivel 3 como autoridad sobre el equipo.',
          correction: 'El nivel 3 se define por fomentar la colaboración, valorar los aportes de todos y cuidar el clima laboral, sin perjuicio de monitorear objetivos y alertar desviaciones con datos.',
        },
        {
          mistake: 'Creer que evidenciar una desviación del equipo es «echar al equipo al agua».',
          correction: 'Alertar sobre las desviaciones con fundamento en los datos es una conducta observable del nivel 3. Lo incorrecto es alertar sin datos o imputando responsabilidades a personas.',
        },
      ],
      norms: [
        {
          norm: 'Resolución 65 de 2024 de la DIAN',
          status: 'vigente',
          note: 'Ficha de la competencia Trabajo en equipo: definición, niveles 1 a 4 y conductas observables.',
        },
        {
          norm: 'Decreto 815 de 2018',
          article: 'art. 2.2.4.7',
          status: 'vigente',
          note: 'Define la competencia común Trabajo en equipo como trabajar con otros de forma integrada y armónica para la consecución de metas institucionales comunes.',
        },
      ],
      links: [
        { label: 'CNSC — Comisión Nacional del Servicio Civil', url: 'https://www.cnsc.gov.co/' },
        { label: 'Función Pública — Gestor Normativo', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/' },
      ],
      mindmap: {
        root: 'Trabajo en equipo',
        branches: [
          { label: 'Definición', children: ['Coordinada', 'Armónica', 'Sinérgica', 'Potenciar los aportes'] },
          { label: 'Nivel 1', children: ['Se compromete con los acuerdos', 'Participa y cumple', 'Colabora con los demás', 'Acepta las normas comunes'] },
          { label: 'Nivel 3', children: ['Fomenta la colaboración', 'Valora los aportes de todos', 'Cuida el clima laboral', 'Monitorea y alerta con datos'] },
          { label: 'Clave', children: ['N1 = mi cumplimiento', 'N3 = el funcionamiento del equipo'] },
        ],
      },
      mindmapText:
        'El Trabajo en equipo es la capacidad de trabajar con otros de forma coordinada, armónica y sinérgica, potenciando los aportes de cada integrante para el logro de los objetivos establecidos. En el nivel 1 el servidor se compromete con los acuerdos del equipo, participa en sus actividades, colabora con los demás integrantes y acepta las normas comunes de trabajo. En el nivel 3 fomenta el espíritu de colaboración, valora positivamente los aportes de cada integrante, cuida el buen clima laboral, orienta el trabajo del equipo, monitorea el cumplimiento de los objetivos y alerta sobre las desviaciones con fundamento en los datos.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). Definiciones, niveles y conductas observables tomados textualmente de la Resolución 65 de 2024 de la DIAN.',
        },
      ],
    },
    {
      id: 'm14-l07',
      moduleId: 'm14',
      title: 'Los valores del Código de Integridad: Honestidad, Respeto, Compromiso, Diligencia y Justicia',
      indicators: ['i22', 'i23', 'i24', 'i25', 'i26'],
      objectives: [
        'Enunciar la definición oficial de cada uno de los cinco valores del Código de Integridad del Servicio Público.',
        'Relacionar cada valor con conductas concretas del contexto de la DIAN.',
        'Resolver situaciones de examen distinguiendo el valor comprometido en cada escenario.',
      ],
      sections: [
        {
          heading: 'Qué es el Código de Integridad y por qué importa en el concurso',
          paragraphs: [
            'El Código de Integridad del Servicio Público es el código tipo construido por el Departamento Administrativo de la Función Pública para todos los servidores de la Rama Ejecutiva. Se elaboró con participación de más de 25.000 servidores públicos y ciudadanos, que votaron por los cinco valores más importantes del servicio público: Honestidad, Respeto, Compromiso, Diligencia y Justicia.',
            'Su estructura es uniforme para los cinco valores: una DEFINICIÓN (la frase «Soy…») y dos listas de principios de acción, «lo que hago» y «lo que no hago». Esa estructura es exactamente la que sirve para responder los ítems del concurso, porque las preguntas de valores no piden recitar la definición: piden reconocer la conducta.',
            'La DIAN incorporó el Código de Integridad a su Código de Ética y de Buen Gobierno, y la propia competencia de Comportamiento ético del Diccionario de la DIAN se define con referencia al «código de integridad de la DIAN». Valores y competencias comportamentales son, en la práctica, dos caras de la misma exigencia.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Cinco valores del Código de Integridad: HONESTIDAD · RESPETO · COMPROMISO · DILIGENCIA · JUSTICIA. Cada uno con definición («Soy…») y con listas de «lo que hago» y «lo que no hago».',
          },
        },
        {
          heading: 'Honestidad (i24)',
          paragraphs: [
            'Definición oficial: «Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y siempre favoreciendo el interés general».',
            'Entre sus principios de acción están: decir siempre la verdad, incluso cuando se cometen errores, porque lo humano es equivocarse pero no esconderlo; buscar orientación en las instancias pertinentes cuando hay dudas sobre los deberes; facilitar el acceso a la información pública completa, veraz, oportuna y comprensible; denunciar las faltas, delitos o violaciones de derechos de los que se tenga conocimiento en el ejercicio del cargo; y apartarse del conocimiento o decisión de los asuntos encomendados cuando exista conflicto entre el interés general y el interés particular.',
            'En el «no hago» están: no dar trato preferencial a personas cercanas en procesos que se resuelven en igualdad de condiciones; no aceptar incentivos, favores ni beneficios de personas o grupos interesados en una decisión; no usar recursos públicos para fines personales; y no ser descuidado con la información a cargo.',
            'En la DIAN, la honestidad tiene un escenario crítico propio del Código de Ética de la entidad: no prestar ni facilitar el carné de identificación, no usar la identificación de otro para simular el registro de ingreso o salida, y no utilizar la identificación ni el cargo para presionar indebidamente a autoridades, contribuyentes o usuarios del servicio.',
          ],
          callout: {
            type: 'ejemplo',
            text: 'Conducta DIAN: ante un error propio en la liquidación de un trámite, informarlo y corregirlo por el cauce institucional es honestidad en acción. El «lo que no hago» lo dice expresamente: no esconder los errores.',
          },
        },
        {
          heading: 'Respeto (i26)',
          paragraphs: [
            'Definición oficial: «Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, títulos o cualquier otra condición».',
            'Sus principios de acción incluyen: atender con amabilidad, igualdad y equidad a todas las personas, sin importar su condición social, económica, religiosa, étnica o de cualquier otro orden; estar abierto al diálogo y a la comprensión a pesar de perspectivas y opiniones distintas; exponer con argumentos la posición propia de manera noble, con un lenguaje que refleje consideración real por la postura y la persona del otro; y contribuir a un adecuado clima laboral.',
            'En el «no hago»: no actuar de manera discriminatoria, grosera o hiriente bajo ninguna circunstancia; no basar las decisiones en presunciones, estereotipos o prejuicios; y no referirse a los demás de forma injuriosa o calumniosa, ni con ironía, burla, sarcasmo o desdén.',
            'En la DIAN el respeto es especialmente exigente por la asimetría de la relación con el usuario: un contribuyente fiscalizado no está en posición de defenderse con la misma fuerza que la Administración. El respeto es también lo que permite que una decisión desfavorable se comunique sin humillar a quien la recibe.',
          ],
        },
        {
          heading: 'Compromiso (i22)',
          paragraphs: [
            'Definición oficial: «Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas, buscando siempre mejorar su bienestar».',
            'Sus principios de acción: asumir el papel de servidor público entendiendo el valor de los compromisos adquiridos frente a la ciudadanía y al país; ponerse en los zapatos de las personas para entender su contexto, necesidades y requerimientos; escuchar, atender y orientar a quien necesite información o guía; mantener la atención plena sin distracciones al interactuar con otras personas; y prestar un servicio ágil, amable y de calidad.',
            'En el «no hago»: nunca trabajar con actitud negativa; no pensar que el trabajo como servidor es un «favor» que se le hace a la ciudadanía; no asumir que el propio trabajo es irrelevante para la sociedad; y jamás ignorar a un ciudadano y sus inquietudes.',
          ],
          callout: {
            type: 'ejemplo',
            text: 'Conducta DIAN: en una jornada de alta demanda, atender a cada ciudadano con escucha plena y sin distracciones, sin apurar la atención para «despachar la fila», es la expresión directa del compromiso.',
          },
        },
        {
          heading: 'Diligencia (i23)',
          paragraphs: [
            'Definición oficial: «Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia, para así optimizar el uso de los recursos del Estado».',
            'Sus principios de acción: usar responsablemente los recursos públicos para cumplir las obligaciones, porque lo público es de todos y no se desperdicia; cumplir con los tiempos estipulados para cada obligación laboral; asegurar la calidad de cada producto entregado bajo los estándares del servicio público, porque no son aceptables las gestiones a medias; y ser proactivo comunicando a tiempo propuestas de mejora.',
            'En el «no hago»: no malgastar ningún recurso público; no postergar decisiones o actividades que den solución a problemáticas ciudadanas o que hagan parte del funcionamiento del cargo; no demostrar desinterés ante los ciudadanos ni ante los demás servidores; y no evadir las funciones y responsabilidades por ningún motivo.',
            'La diligencia es el valor que conecta directamente con el indicador de orientación al logro: tiempo, calidad y uso eficiente de los recursos. En la DIAN, dejar vencer un término legal es una falla de diligencia con consecuencias jurídicas concretas, no solo una demora.',
          ],
        },
        {
          heading: 'Justicia (i25)',
          paragraphs: [
            'Definición oficial: «Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación».',
            'Sus principios de acción: tomar decisiones informadas y objetivas basadas en evidencias y datos confiables, pues es muy grave fallar por no tener claridad suficiente; reconocer y proteger los derechos de cada persona de acuerdo con sus necesidades y condiciones; y tomar decisiones estableciendo mecanismos de diálogo y concertación con las partes involucradas.',
            'En el «no hago»: no promover ni ejecutar políticas, programas o medidas que afecten la igualdad y la libertad de las personas; no favorecer el punto de vista de un grupo de interés sin tener en cuenta a todos los actores; y nunca permitir que odios, simpatías, antipatías, caprichos, presiones o intereses personales o grupales interfieran en el criterio, la toma de decisiones y la gestión pública.',
            'Para un Gestor I de la DIAN, la justicia es el valor más directamente ligado a la función: la actuación frente a contribuyentes y usuarios debe fundarse en los hechos y en la norma, no en la simpatía, la presión, la cuantía del caso ni el poder del interesado.',
          ],
          callout: {
            type: 'importante',
            text: 'La justicia exige DECISIONES INFORMADAS: el propio Código dice que es «muy grave fallar por no tener claridad suficiente». Decidir sin verificar los hechos no es solo un error técnico, es una falla del valor de justicia.',
          },
        },
        {
          heading: 'Diferenciar los valores en un ítem',
          paragraphs: [
            'La dificultad de los ítems de valores no está en conocer las definiciones, sino en identificar cuál valor está en juego en una situación donde varios parecen aplicables. Estos criterios ayudan:',
          ],
          table: {
            caption: 'Pistas para identificar el valor comprometido',
            headers: ['Valor', 'La situación suele versar sobre…', 'Palabra guía'],
            rows: [
              ['Honestidad', 'Verdad, transparencia, conflictos de interés, uso de recursos, información', 'Veracidad'],
              ['Respeto', 'Trato digno, discriminación, lenguaje, clima laboral, opiniones distintas', 'Dignidad'],
              ['Compromiso', 'Disposición de servicio, empatía con el ciudadano, actitud, no ignorar', 'Disposición'],
              ['Diligencia', 'Tiempos, calidad, uso de recursos, no postergar, no evadir', 'Prontitud'],
              ['Justicia', 'Imparcialidad, decisiones fundadas en datos, presión de terceros, igualdad', 'Imparcialidad'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'Guía pedagógica orientativa. Las «pistas» y «palabras guía» son una herramienta de estudio elaborada para esta plataforma a partir de las listas de «lo que hago» y «lo que no hago» del Código de Integridad; no forman parte del texto oficial del Código.',
          },
        },
      ],
      summary: [
        'El Código de Integridad del Servicio Público tiene cinco valores: Honestidad, Respeto, Compromiso, Diligencia y Justicia, cada uno con definición y con listas de lo que se hace y lo que no se hace.',
        'Honestidad: actuar siempre con fundamento en la verdad, cumpliendo los deberes con transparencia y rectitud y favoreciendo el interés general.',
        'Respeto: reconocer, valorar y tratar de manera digna a todas las personas, sin importar su labor, procedencia, títulos o cualquier otra condición.',
        'Compromiso: ser consciente de la importancia del rol de servidor público y estar en disposición permanente de comprender y resolver las necesidades de las personas.',
        'Diligencia: cumplir los deberes, funciones y responsabilidades con atención, prontitud, destreza y eficiencia, para optimizar el uso de los recursos del Estado.',
        'Justicia: actuar con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación.',
      ],
      memorize: [
        'Honestidad: verdad + transparencia + rectitud + interés general.',
        'Respeto: reconocer, valorar y tratar de manera digna, sin importar condición alguna.',
        'Compromiso: conciencia del rol + disposición permanente + mejorar el bienestar de las personas.',
        'Diligencia: atención + prontitud + destreza + eficiencia + optimizar recursos del Estado.',
        'Justicia: imparcialidad + equidad + igualdad + sin discriminación.',
        'Cinco valores: H-R-C-D-J (Honestidad, Respeto, Compromiso, Diligencia, Justicia).',
      ],
      examples: [
        {
          heading: 'Ejemplo situacional: Justicia',
          paragraphs: [
            'Situación: «Un contribuyente de reconocido prestigio en la región y con vínculos con altos funcionarios le solicita que revise con benevolencia su caso, y le recuerda que puede influir en su carrera. El expediente, revisado objetivamente, arroja una inconsistencia que debe reportarse».',
            'La conducta correcta refleja el valor de Justicia: decidir con base en las evidencias y datos confiables del expediente y no permitir que presiones o intereses de orden personal o grupal interfieran en el criterio y en la toma de decisión. El propio Código advierte que es muy grave fallar por no tener claridad en los temas, lo que refuerza la exigencia de verificar los hechos antes de resolver.',
            'Sería incorrecta cualquier opción que consista en «revisar el caso más adelante» o «dejarlo en manos de otra persona para no comprometerse»: la imparcialidad no se logra evitando decidir, sino decidiendo con fundamento en los hechos. Y también es incorrecta la opción de endurecer la decisión para demostrar independencia: la justicia exige decidir por la evidencia, no contra el interesado.',
          ],
        },
        {
          heading: 'Ejemplo situacional: Diligencia',
          paragraphs: [
            'Situación: «Está a punto de vencer el término legal para resolver una solicitud y usted tiene tres casos más en la misma situación. Ya sabe que no alcanzará a resolverlos todos con el análisis completo que cada uno requiere».',
            'La respuesta alineada con Diligencia implica actuar con prontitud y no postergar decisiones ni actividades que hagan parte del funcionamiento del cargo: priorizar conforme a los términos, reportar oportunamente la situación a quien corresponda para que se tomen medidas, y asegurar que ningún caso quede sin gestión. No evadir la función por ningún motivo es parte explícita de «lo que no hago».',
            'Sería incorrecta la opción de dejar vencer los términos en silencio esperando que nadie lo note: la diligencia incluye no demostrar desinterés y no evadir responsabilidades. Y también la de resolver los casos a la carrera con análisis incompleto, porque el valor exige asegurar la calidad de lo que se entrega bajo los estándares del servicio público.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Confundir Compromiso con Diligencia.',
          correction: 'Compromiso es la disposición y la actitud frente al servicio y las personas (no ignorar, prestar servicio ágil y amable). Diligencia es el cumplimiento efectivo de los deberes con prontitud, calidad y uso eficiente de los recursos.',
        },
        {
          mistake: 'Reducir la Honestidad a «no robar».',
          correction: 'La definición abarca la verdad incluso ante los propios errores, la transparencia, el conflicto de interés, el trato no preferencial y el cuidado de la información.',
        },
        {
          mistake: 'Entender la Justicia como severidad.',
          correction: 'Justicia es decidir con imparcialidad y con base en evidencias y datos confiables, garantizando derechos con equidad e igualdad. Ser más severo de lo que los hechos justifican también es injusto.',
        },
        {
          mistake: 'Aprender las definiciones sin las conductas de «lo que hago» y «lo que no hago».',
          correction: 'Los ítems presentan conductas, no definiciones. Las listas de principios de acción son la parte del Código que se evalúa.',
        },
      ],
      norms: [
        {
          norm: 'Código de Integridad del Servicio Público',
          status: 'vigente',
          note: 'Departamento Administrativo de la Función Pública. Cinco valores con definición y principios de acción («lo que hago» / «lo que no hago»).',
        },
        {
          norm: 'Resolución 65 de 2024 de la DIAN',
          status: 'vigente',
          note: 'La competencia Comportamiento ético se define con referencia al código de integridad de la DIAN.',
        },
        {
          norm: 'Ley 1474 de 2011',
          article: 'art. 73',
          status: 'verificar',
          note: 'Plan Anticorrupción y de Atención al Ciudadano, dentro del cual las entidades adoptan códigos de integridad. Verificar la redacción vigente del artículo.',
        },
        {
          norm: 'Ley 1952 de 2019',
          status: 'verificar',
          note: 'Código General Disciplinario: los deberes de los servidores públicos y sus consecuencias. Verificar modificaciones posteriores.',
        },
      ],
      links: [
        { label: 'DIAN — Código de Ética y de Buen Gobierno', url: 'https://www.dian.gov.co/dian/entidad/CodigoBuenGobierno/Codigo-de-Etica-Vr1-2021.pdf' },
        { label: 'Función Pública — Código de Integridad del Servicio Público', url: 'https://www.funcionpublica.gov.co/' },
      ],
      mindmap: {
        root: 'Código de Integridad',
        branches: [
          { label: 'Honestidad (i24)', children: ['Verdad y transparencia', 'No esconder errores', 'Conflicto de interés', 'No usar recursos públicos'] },
          { label: 'Respeto (i26)', children: ['Trato digno e igualitario', 'No discriminar', 'Sin estereotipos', 'Clima laboral'] },
          { label: 'Compromiso (i22)', children: ['Conciencia del rol', 'Empatía con el ciudadano', 'Atención plena', 'No ignorar'] },
          { label: 'Diligencia (i23)', children: ['Prontitud y calidad', 'Cuidar recursos', 'No postergar', 'No evadir'] },
          { label: 'Justicia (i25)', children: ['Imparcialidad', 'Decisiones informadas', 'Equidad e igualdad', 'Sin presiones'] },
        ],
      },
      mindmapText:
        'El Código de Integridad del Servicio Público se organiza en cinco valores, cada uno con una definición y con listas de lo que se hace y lo que no se hace. Honestidad es actuar siempre con fundamento en la verdad, con transparencia y rectitud, favoreciendo el interés general. Respeto es reconocer, valorar y tratar de manera digna a todas las personas sin importar su condición. Compromiso es ser consciente del rol de servidor y estar en disposición permanente de comprender y resolver las necesidades de las personas. Diligencia es cumplir los deberes con atención, prontitud, destreza y eficiencia, optimizando los recursos del Estado. Justicia es actuar con imparcialidad, equidad e igualdad, sin discriminación.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). Las definiciones y los principios de acción provienen del Código de Integridad del Servicio Público (Función Pública) y del Código de Ética y de Buen Gobierno de la DIAN (Vr1-2021), ambos verificados.',
        },
      ],
      activityId: 'm14-a02',
    },
  ],
}
