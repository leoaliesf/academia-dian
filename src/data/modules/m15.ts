import type { ModuleDef } from '../types'

// ============================================================
// Módulo 15 — Repaso general y simulacros
// Indicadores: todos (i01 a i26)
// Módulo de cierre: no introduce temas nuevos. La matriz de
// cobertura se construyó sobre los módulos efectivamente
// publicados en la plataforma y la guía de repaso describe las
// herramientas reales de la aplicación (banco, modo estudio,
// fichas, actividades, simulacros, examen final y diagnóstico).
// Los criterios de clasificación del diagnóstico son internos de
// la plataforma y NO son criterios oficiales de la CNSC ni de la
// DIAN; los datos de la convocatoria (fechas, número de
// preguntas, puntajes, sedes) solo constan en los actos oficiales
// publicados por la CNSC.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm15',
  order: 15,
  title: 'Repaso general y simulacros',
  description:
    'Cierre del plan de estudio: matriz que relaciona cada uno de los 26 indicadores de la convocatoria con el módulo donde se estudia y el tipo de pregunta con que se evalúa, y guía práctica para usar el banco de preguntas, el modo estudio, las fichas y los simulacros con repaso espaciado.',
  indicators: [
    'i01', 'i02', 'i03', 'i04', 'i05', 'i06', 'i07', 'i08', 'i09', 'i10',
    'i11', 'i12', 'i13', 'i14', 'i15', 'i16', 'i17', 'i18', 'i19', 'i20',
    'i21', 'i22', 'i23', 'i24', 'i25', 'i26',
  ],
  lessons: [
    {
      id: 'm15-l01',
      moduleId: 'm15',
      title: 'Matriz de cobertura: qué evalúa cada indicador y dónde estudiarlo',
      indicators: [
        'i01', 'i02', 'i03', 'i04', 'i05', 'i06', 'i07', 'i08', 'i09', 'i10',
        'i11', 'i12', 'i13', 'i14', 'i15', 'i16', 'i17', 'i18', 'i19', 'i20',
        'i21', 'i22', 'i23', 'i24', 'i25', 'i26',
      ],
      objectives: [
        'Relacionar cada uno de los 26 indicadores de la convocatoria con el módulo de la plataforma donde se estudia.',
        'Reconocer el tipo de pregunta con que se evalúa cada grupo de indicadores (conceptual, caso, interpretación, aplicación).',
        'Identificar los indicadores que se evalúan de forma cruzada y los que actúan de manera transversal en todo el examen.',
        'Usar la matriz para elaborar un plan de repaso priorizado según el diagnóstico personal.',
      ],
      sections: [
        {
          heading: 'Los 26 indicadores, agrupados',
          paragraphs: [
            'La convocatoria de Gestor I se organiza en 26 indicadores. No son 26 temas sueltos: se agrupan en tres categorías, y cada categoría se evalúa con un formato de pregunta distinto. Reconocer la categoría de un indicador es el primer paso para saber qué tipo de razonamiento aplicar.',
            'Los indicadores técnicos (i01 a i10) son los que corresponden a los conocimientos propios del oficio: estructura de la entidad, gestión documental, sanciones, lavado de activos, liquidación de impuestos, misionalidad, auditoría, normativa cambiaria, obligaciones tributarias y procedimiento de fiscalización. Se evalúan con preguntas conceptuales, de caso y de aplicación normativa.',
            'El razonamiento analítico (i11) es transversal: no depende de un conocimiento particular, sino de la habilidad para descomponer un problema, encontrar relaciones y llegar a conclusiones. Se evalúa con preguntas de interpretación, series, tablas y silogismos.',
            'Los indicadores comportamentales (i12 a i21) corresponden a las seis competencias del Diccionario de Competencias Comportamentales de la DIAN, con el nivel que la convocatoria exige en cada caso. Y los cinco valores (i22 a i26) corresponden al Código de Integridad del Servicio Público. Ambos grupos se evalúan con preguntas de juicio situacional: casos con conductas posibles, donde hay que elegir la más adecuada.',
          ],
          table: {
            caption: 'Distribución de los 26 indicadores por categoría',
            headers: ['Categoría', 'Indicadores', 'Cuántos', 'Cómo se evalúan'],
            rows: [
              ['Técnicos', 'i01 a i10', '10', 'Conceptuales, casos y aplicación normativa'],
              ['Razonamiento', 'i11', '1', 'Interpretación, series, tablas y silogismos'],
              ['Comportamentales', 'i12 a i21', '10', 'Juicio situacional (conducta más adecuada)'],
              ['Valores', 'i22 a i26', '5', 'Juicio situacional sobre conductas del Código de Integridad'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: '10 técnicos + 1 de razonamiento + 10 comportamentales + 5 valores = 26 indicadores.',
          },
        },
        {
          heading: 'Matriz de cobertura: indicador por indicador',
          paragraphs: [
            'Esta es la matriz completa. La columna «dónde estudiarlo» señala el módulo de la plataforma responsable del tema; cuando un indicador se desarrolla en más de un módulo, se indican todos, porque conviene repasarlo en los dos. La columna «tipo de pregunta» anticipa el formato con que suele evaluarse, para que el repaso se haga con el tipo de ejercicio correcto.',
          ],
          table: {
            caption: 'Matriz de cobertura de los 26 indicadores',
            headers: ['Indicador', 'Qué evalúa', 'Dónde estudiarlo', 'Tipo de pregunta'],
            rows: [
              ['i01', 'Estructura organizacional de la DIAN: naturaleza, organización y dependencias', 'Módulo 1: Estructura organizacional y misionalidad (m01)', 'Conceptual y caso'],
              ['i02', 'Gestión documental y trazabilidad de expedientes: ciclo del documento, radicación, archivo', 'Módulo 2: Gestión documental y trazabilidad (m02)', 'Conceptual y aplicación'],
              ['i03', 'Imposición de sanciones: régimen sancionatorio, tipos, graduación y procedimiento', 'Módulo 8: Imposición de sanciones (m08)', 'Caso y aplicación'],
              ['i04', 'Lavado de activos, financiación del terrorismo, reporte de operaciones sospechosas y denuncias', 'Módulo 12: Lavado de activos y financiación del terrorismo (m12)', 'Conceptual y caso'],
              ['i05', 'Liquidación de impuestos nacionales: bases, tarifas y determinación del tributo', 'Módulo 5: Liquidación de impuestos nacionales (m05)', 'Aplicación y caso'],
              ['i06', 'Misionalidad de la DIAN: fines, funciones y servicios a la ciudadanía', 'Módulos 1 y 3 (m01 y m03)', 'Conceptual'],
              ['i07', 'Normas y técnicas de auditoría: evidencia, papeles de trabajo, riesgos', 'Módulo 7: Procedimientos administrativos y auditoría (m07)', 'Conceptual y caso'],
              ['i08', 'Normativa cambiaria: obligaciones, operaciones y régimen de cambios', 'Módulo 10: Régimen cambiario (m10)', 'Conceptual y caso'],
              ['i09', 'Obligaciones formales y sustanciales en materia tributaria: sujetos, deberes y deberes formales', 'Módulos 3, 4 y 9 (m03, m04 y m09), con refuerzo en el 11 (m11)', 'Conceptual y aplicación'],
              ['i10', 'Procedimiento de fiscalización y liquidación tributaria y aduanera: etapas, actos y términos', 'Módulos 6 y 9 (m06 y m09), con refuerzo en el 11 (m11)', 'Caso y aplicación'],
              ['i11', 'Razonamiento analítico: identificar datos, establecer relaciones y concluir', 'Módulo 13 (m13)', 'Interpretación y aplicación'],
              ['i12', 'Adaptabilidad, nivel 1', 'Módulo 14, lección m14-l02', 'Juicio situacional'],
              ['i13', 'Adaptabilidad, nivel 2', 'Módulo 14, lección m14-l02', 'Juicio situacional'],
              ['i14', 'Comportamiento ético, nivel 1', 'Módulo 14, lección m14-l03', 'Juicio situacional'],
              ['i15', 'Comportamiento ético, nivel 4', 'Módulo 14, lección m14-l03', 'Juicio situacional'],
              ['i16', 'Comunicación efectiva, nivel 1', 'Módulo 14, lección m14-l04', 'Juicio situacional'],
              ['i17', 'Comunicación efectiva, nivel 2', 'Módulo 14, lección m14-l04', 'Juicio situacional'],
              ['i18', 'Orientación al logro, nivel 1', 'Módulo 14, lección m14-l05', 'Juicio situacional'],
              ['i19', 'Orientación al usuario y al ciudadano, nivel 1', 'Módulo 14, lección m14-l05', 'Juicio situacional'],
              ['i20', 'Trabajo en equipo, nivel 1', 'Módulo 14, lección m14-l06', 'Juicio situacional'],
              ['i21', 'Trabajo en equipo, nivel 3', 'Módulo 14, lección m14-l06', 'Juicio situacional'],
              ['i22', 'Compromiso', 'Módulo 14, lección m14-l07', 'Juicio situacional'],
              ['i23', 'Diligencia', 'Módulo 14, lección m14-l07', 'Juicio situacional'],
              ['i24', 'Honestidad', 'Módulo 14, lección m14-l07', 'Juicio situacional'],
              ['i25', 'Justicia', 'Módulo 14, lección m14-l07', 'Juicio situacional'],
              ['i26', 'Respeto', 'Módulo 14, lección m14-l07', 'Juicio situacional'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'La ruta de estudio de la plataforma se organiza en 15 módulos que siguen el orden de esta matriz: los diez técnicos, el de razonamiento analítico, el de competencias y valores, y este módulo de repaso. Si algún indicador no aparece cubierto en la matriz de tu copia, ubícalo por el nombre del tema en la columna «qué evalúa».',
          },
        },
        {
          heading: 'Los cuatro tipos de pregunta',
          paragraphs: [
            'La plataforma clasifica cada pregunta en uno de cuatro tipos. Saber reconocerlos sirve para dos cosas: estudiar con el tipo de ejercicio que corresponde y no perder tiempo en el examen decidiendo cómo abordar cada ítem.',
          ],
          table: {
            caption: 'Tipos de pregunta y estrategia de abordaje',
            headers: ['Tipo', 'En qué consiste', 'Qué hacer'],
            rows: [
              ['Conceptual', 'Pregunta por una definición, una clasificación o un elemento normativo', 'Recuperar el dato memorizado y verificar que la opción no cambie un elemento'],
              ['Caso', 'Plantea una situación concreta y pide la actuación o la consecuencia aplicable', 'Identificar los hechos relevantes, descartar los irrelevantes y aplicar la regla al caso'],
              ['Interpretación', 'Ofrece un texto, una tabla o un argumento y pide una conclusión', 'Leer el enunciado de la pregunta antes que el material; volver al material para verificar'],
              ['Aplicación', 'Exige calcular, liquidar u operar con datos (tarifas, plazos, series)', 'Escribir los datos, hacer el cálculo y comparar con las opciones; una sola opción debe cuadrar'],
            ],
          },
          callout: {
            type: 'importante',
            text: 'Los indicadores técnicos admiten conceptuales, casos y aplicación. Los comportamentales y los valores son siempre casos (juicio situacional). El razonamiento analítico se mueve entre interpretación y aplicación.',
          },
        },
        {
          heading: 'Indicadores que se evalúan cruzados',
          paragraphs: [
            'Pocas preguntas evalúan un indicador en aislamiento. En el examen hay cruces previsibles, y reconocerlos evita sorpresas:',
          ],
          table: {
            caption: 'Cruces frecuentes entre indicadores',
            headers: ['Cruce', 'Cómo aparece en la pregunta'],
            rows: [
              ['i06 con i01', 'La misionalidad se pregunta a través de la estructura: qué dependencia tiene a cargo qué función'],
              ['i09 con i10', 'Una obligación formal incumplida desencadena el procedimiento de fiscalización: la pregunta recorre ambos'],
              ['i03 con i09', 'La sanción por incumplimiento de una obligación formal exige conocer primero la obligación'],
              ['i07 con i10', 'La auditoría aporta el marco de evidencia y papeles de trabajo que se aplica en la fiscalización'],
              ['i12 a i21 con i22 a i26', 'Un caso puede comprometer a la vez una competencia y un valor: p. ej. Comunicación efectiva con Respeto'],
              ['i11 con todos', 'Cualquier ítem de interpretación de datos o de argumentación activa razonamiento analítico, incluso si su indicador es técnico'],
            ],
          },
          callout: {
            type: 'ejemplo',
            text: 'Ejemplo de cruce: un caso sobre un contribuyente que presenta un requerimiento fuera de término puede evaluar i09 (la obligación) y i10 (el procedimiento) en la misma pregunta. Si además el funcionario debe explicarle la situación con respeto, el caso toca i26.',
          },
        },
        {
          heading: 'Cómo usar la matriz para planear el repaso',
          paragraphs: [
            'La matriz no es un adorno de consulta: es la lista de verificación de tu preparación. El uso recomendado es el siguiente: recorre las 26 filas y marca tu estado en cada una, honestamente, según lo que sabrías explicar sin material de apoyo. Las filas que no puedas explicar en voz alta son tus temas de esta semana.',
            'La plataforma tiene una vista de diagnóstico que calcula el rendimiento por indicador a partir de tus respuestas y clasifica cada tema con criterios internos: se considera dominado a partir del 80 por ciento de aciertos, requiere refuerzo por debajo del 60 por ciento, y no se evalúa un indicador con menos de tres respuestas registradas.',
            'Esos umbrales son una herramienta de estudio elaborada para esta plataforma: no son criterios oficiales de la CNSC ni de la DIAN, y no permiten predecir ningún resultado del concurso. Sirven, eso sí, para dirigir el esfuerzo hacia donde el desempeño propio es más débil, que es exactamente lo que la matriz busca.',
          ],
          callout: {
            type: 'error',
            text: 'Error de estudio frecuente: repasar primero los temas que más gustan. La matriz y el diagnóstico existen para lo contrario: empezar por las filas que no se saben explicar, porque ahí es donde está el puntaje que falta.',
          },
        },
        {
          heading: 'Cómo cambia el repaso según el grupo de indicadores',
          paragraphs: [
            'No todos los indicadores se repasan del mismo modo, y confundir los métodos hace perder tiempo. En los técnicos, el repaso útil es de recuperación de datos precisos: plazos, tarifas, sujetos, etapas. En el razonamiento analítico, lo que se entrena es el proceso, no el dato: conviene practicar series, silogismos y lectura de tablas hasta que el procedimiento sea automático.',
          ],
          bullets: [
            'Indicadores técnicos (i01 a i10): repasar con preguntas de tipo conceptual y de aplicación, y verificar cada norma citada en la fuente oficial. La ficha es útil para fijar datos duros.',
            'Razonamiento analítico (i11): practicar series, silogismos, condicionales y tablas de datos todos los días, en sesiones cortas y frecuentes. Es habilidad, no memoria.',
            'Comportamentales (i12 a i21): repasar las fichas de competencia y, sobre todo, resolver casos distinguiendo el NIVEL evaluado. La respuesta correcta depende del nivel.',
            'Valores (i22 a i26): repasar las definiciones y luego practicar con casos que permitan discriminar qué valor está comprometido, porque en los ítems difíciles varios valores parecen aplicables a la vez.',
            'Transversal: llevar un registro de los errores propios. El error repetido es el mejor indicador de qué estudiar mañana.',
          ],
        },
      ],
      summary: [
        'Los 26 indicadores se agrupan en 10 técnicos (i01-i10), 1 de razonamiento analítico (i11), 10 comportamentales (i12-i21) y 5 valores (i22-i26).',
        'Cada grupo se evalúa con un formato característico: los técnicos con conceptuales, casos y aplicación; el razonamiento con interpretación y aplicación; las competencias y los valores con juicio situacional.',
        'La matriz de cobertura relaciona cada indicador con el módulo donde se estudia y con el tipo de pregunta con que se evalúa.',
        'Hay cruces previsibles entre indicadores (i06 con i01, i09 con i10, i03 con i09, competencias con valores) y el razonamiento analítico actúa en todo el examen.',
        'Los umbrales del diagnóstico de la plataforma (dominado ≥80 por ciento, refuerzo <60 por ciento, mínimo 3 respuestas) son criterios internos de estudio, no criterios oficiales.',
      ],
      memorize: [
        '26 indicadores = 10 técnicos + 1 razonamiento + 10 comportamentales + 5 valores.',
        'Técnico → conceptual, caso y aplicación. Razonamiento → interpretación y aplicación. Competencias y valores → juicio situacional.',
        'Cruces más frecuentes: i06-i01, i09-i10, i03-i09, competencias-valores.',
        'El nivel exigido (1, 2, 3 o 4) es parte de la respuesta correcta en los ítems comportamentales.',
      ],
      examples: [
        {
          heading: 'Ejemplo de uso de la matriz',
          paragraphs: [
            'Supón que en el diagnóstico personal aparecen tres indicadores en estado de refuerzo: i10, i17 y i23. La matriz permite decidir de inmediato cómo atacar cada uno y con qué herramienta.',
            'Para i10 (procedimiento de fiscalización) corresponde volver a los módulos 6 y 9, repasar las etapas y los términos con preguntas de caso y de aplicación, y verificar las normas en la fuente oficial. Para i17 (Comunicación efectiva nivel 2) corresponde volver a la lección m14-l04, repasar la ficha y practicar casos, poniendo atención al nivel: la respuesta correcta de un ítem de nivel 2 adapta el discurso y el canal al interlocutor.',
            'Para i23 (Diligencia) corresponde repasar la lección m14-l07, en particular las listas de «lo que hago» y «lo que no hago» del valor, y practicar casos donde la diligencia compite con la comodidad o con la presión del tiempo.',
            'Observa que la matriz no solo dice dónde estudiar: dice con qué tipo de pregunta y qué habilidad ejercitar en cada caso. Ese es su rendimiento real como herramienta.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Estudiar los temas en el orden del índice sin atender al propio diagnóstico.',
          correction: 'La matriz y el diagnóstico existen para priorizar. Repasa primero los indicadores en estado de refuerzo y deja para el final los que ya sabes explicar sin apoyo.',
        },
        {
          mistake: 'Preparar los indicadores comportamentales como si fueran definiciones para memorizar.',
          correction: 'Se evalúan con casos de juicio situacional. Hay que practicar la elección de la conducta más adecuada según la competencia y el nivel.',
        },
        {
          mistake: 'Creer que el razonamiento analítico solo se juega en las preguntas de su indicador.',
          correction: 'El razonamiento analítico actúa en todo el examen: interpretar un caso, comparar opciones y descartar con argumentos es razonamiento en acción.',
        },
      ],
      norms: [
        {
          norm: 'Ley 909 de 2004',
          article: 'art. 24',
          status: 'verificar',
          note: 'Pruebas o instrumentos de selección del concurso de méritos: su finalidad es apreciar la capacidad, idoneidad y adecuación del aspirante respecto del empleo. Verificar la redacción vigente.',
        },
        {
          norm: 'Decreto Ley 927 de 2023',
          status: 'vigente',
          note: 'Sistema Específico de Carrera de los empleados públicos de la DIAN: regula el concurso para ingresar a los empleos de la entidad.',
        },
      ],
      links: [
        { label: 'CNSC — Comisión Nacional del Servicio Civil', url: 'https://www.cnsc.gov.co/' },
        { label: 'Función Pública — Gestor Normativo', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/' },
        { label: 'DIAN — Portal institucional', url: 'https://www.dian.gov.co/' },
      ],
      mindmap: {
        root: 'Matriz de cobertura (26 indicadores)',
        branches: [
          { label: 'Técnicos i01-i10', children: ['Estructura y misionalidad', 'Documental', 'Sanciones', 'LA/FT', 'Liquidación', 'Auditoría', 'Cambiario', 'Obligaciones', 'Fiscalización'] },
          { label: 'Razonamiento i11', children: ['Datos', 'Relaciones', 'Conclusiones', 'Interpretación y aplicación'] },
          { label: 'Comportamentales i12-i21', children: ['Adaptabilidad', 'Comportamiento ético', 'Comunicación', 'Logro', 'Usuario', 'Equipo'] },
          { label: 'Valores i22-i26', children: ['Compromiso', 'Diligencia', 'Honestidad', 'Justicia', 'Respeto'] },
          { label: 'Tipos de pregunta', children: ['Conceptual', 'Caso', 'Interpretación', 'Aplicación'] },
        ],
      },
      mindmapText:
        'La convocatoria se organiza en 26 indicadores agrupados en cuatro bloques: los diez técnicos (i01 a i10), que cubren estructura de la entidad, gestión documental, sanciones, lavado de activos, liquidación de impuestos, misionalidad, auditoría, normativa cambiaria, obligaciones tributarias y fiscalización; el razonamiento analítico (i11); los diez comportamentales (i12 a i21), que corresponden a las seis competencias básicas de la DIAN con su nivel; y los cinco valores del Código de Integridad (i22 a i26). Cada bloque se evalúa con un tipo de pregunta característico, y la matriz de cobertura permite ubicar el módulo donde se estudia cada indicador y planear el repaso según el propio diagnóstico.',
      source: [
        {
          doc: 'material',
          pages: 'no aplica — contenido propio de la plataforma',
          note: 'Este módulo NO proviene de los PDF de estudio ni de una fuente normativa externa: es contenido pedagógico elaborado para esta plataforma, que organiza y remite a los temas desarrollados en los demás módulos. La lista de indicadores se transcribió de la información de la convocatoria incluida en el proyecto.',
        },
      ],
      activityId: 'm15-a01',
      quizId: 'q-m15',
    },
    {
      id: 'm15-l02',
      moduleId: 'm15',
      title: 'Guía de repaso y simulacros: cómo entrenar con la plataforma',
      indicators: [
        'i01', 'i02', 'i03', 'i04', 'i05', 'i06', 'i07', 'i08', 'i09', 'i10',
        'i11', 'i12', 'i13', 'i14', 'i15', 'i16', 'i17', 'i18', 'i19', 'i20',
        'i21', 'i22', 'i23', 'i24', 'i25', 'i26',
      ],
      objectives: [
        'Elegir la herramienta de la plataforma adecuada para cada momento del estudio.',
        'Aplicar la técnica de repaso espaciado con recuperación activa a los 26 indicadores.',
        'Realizar simulacros y aprovechar su análisis posterior para corregir.',
        'Organizar la última semana de preparación con criterios realistas y sin depender de información no oficial.',
      ],
      sections: [
        {
          heading: 'Las herramientas de la plataforma y cuándo usar cada una',
          paragraphs: [
            'La plataforma no tiene una sola forma de estudiar: tiene varias, y cada una sirve para un momento distinto. Usar la herramienta equivocada es la causa más común de sesiones de estudio que se sienten productivas pero no dejan nada.',
          ],
          table: {
            caption: 'Herramientas de la plataforma y su uso recomendado',
            headers: ['Herramienta', 'Para qué sirve', 'Cuándo usarla'],
            rows: [
              ['Ruta y módulos', 'Recorrer el contenido completo de cada indicador', 'Primera vuelta de estudio, tema por tema'],
              ['Lecciones', 'Comprender desde cero, con cuadros, ejemplos y errores frecuentes', 'Al estudiar un tema por primera vez'],
              ['Mentefactos', 'Ver la estructura del tema en un solo golpe de vista', 'Al cerrar un tema y al repasarlo'],
              ['Fichas de memoria', 'Fijar definiciones, datos y conductas clave', 'Repaso diario breve y repaso espaciado'],
              ['Banco de preguntas', 'Practicar por indicador, módulo o dificultad', 'Después de estudiar cada tema'],
              ['Modo estudio', 'Resolver sin límite de tiempo, con explicación inmediata, favoritos, notas y filtro de preguntas falladas', 'Entrenamiento diario y corrección de errores'],
              ['Actividades', 'Ejercicios guiados: relacionar, ordenar, interpretar tablas, casos', 'Para variar el tipo de práctica y consolidar'],
              ['Simulacros', 'Practicar bajo presión de tiempo con temas y cantidad configurables', 'Una o dos veces por semana, según avance'],
              ['Examen final', 'Medir la preparación con una prueba extensa de todos los indicadores', 'Al final del plan, y luego con periodicidad'],
              ['Diagnóstico', 'Ver el rendimiento por indicador y un plan de estudio sugerido', 'Cada semana, para ajustar prioridades'],
              ['Búsqueda y biblioteca', 'Localizar un tema o una norma puntual', 'Cuando una duda concreta aparece'],
              ['Fuentes', 'Consultar las fuentes de cada contenido y su estado de verificación', 'Cuando se quiere confirmar un dato'],
            ],
          },
        },
        {
          heading: 'Repaso espaciado con recuperación activa',
          paragraphs: [
            'Repasar no es releer. La evidencia sobre aprendizaje es consistente en dos puntos: se aprende más cuando se intenta RECUPERAR la información de memoria (recuperación activa) y cuando esa recuperación se distribuye en el tiempo (repaso espaciado), en lugar de concentrarse en una sola sesión larga.',
            'El formato mínimo funcional es sencillo: intentar responder de memoria antes de mirar; verificar; y anotar lo que no salió. Ese último paso es el que casi todo el mundo omite, y es el que permite que el repaso siguiente sea más corto y más útil, porque se concentra en lo que efectivamente falla.',
          ],
          table: {
            caption: 'Calendario de repaso espaciado sugerido',
            headers: ['Momento', 'Qué se repasa', 'Herramienta'],
            rows: [
              ['Día 0', 'Estudio del tema y mentefacto de cierre', 'Lección y mentefacto'],
              ['Día 1', 'Recuperación activa del tema sin material y fichas del tema', 'Fichas y banco'],
              ['Día 3', 'Preguntas del tema, incluyendo las falladas', 'Banco y modo estudio'],
              ['Día 7', 'Preguntas mezcladas con otros indicadores', 'Modo estudio por indicador'],
              ['Día 15', 'Solo lo que sigue fallando, más fichas de datos duros', 'Modo estudio con filtro de falladas'],
              ['Día 30', 'Simulacro que incluya el tema', 'Simulacros'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'Los intervalos de este calendario son una recomendación pedagógica general de la plataforma, basada en la práctica del repaso espaciado. No son un requisito oficial ni deben tomarse como un plan con fechas garantizadas: adáptalos a tu disponibilidad real de tiempo.',
          },
        },
        {
          heading: 'Intercalar y variar: dos ajustes que rinden',
          paragraphs: [
            'Dos ajustes mejoran el rendimiento del estudio sin exigir más horas. El primero es INTERCALAR: en lugar de dedicar una semana entera a un solo indicador, alternar dos o tres temas en la misma sesión. Al mezclarlos, el cerebro debe distinguir de qué tema se trata antes de aplicar la regla, que es exactamente la operación que el examen exige.',
            'El segundo es VARIAR el tipo de ejercicio. Los indicadores técnicos se benefician de alternar conceptuales con casos y aplicación; los comportamentales, de alternar fichas de competencia con casos donde compiten varias competencias. El modo estudio permite filtrar por indicador, por módulo, por dificultad y por preguntas falladas: usar esos filtros es la forma práctica de programar la variación.',
          ],
          callout: {
            type: 'importante',
            text: 'En el modo estudio no busques la puntuación: busca el error. Una sesión en la que fallaste cinco preguntas y entendiste por qué, vale más que una sesión de diez aciertos que no te exigió nada.',
          },
        },
        {
          heading: 'Cómo hacer un simulacro que sirva',
          paragraphs: [
            'El simulacro de la plataforma se configura con los temas, la cantidad de preguntas (entre 5 y 50), la dificultad y el tiempo disponible (entre 10 y 120 minutos). Incluye cronómetro, navegación entre preguntas y opción de marcar preguntas para revisarlas después.',
            'Para que rinda, conviene respetar tres condiciones. La primera: condiciones de examen, sin pausas ni consultas, en un solo bloque continuo. La segunda: tiempo proporcional al número de preguntas, porque administrar el reloj es en sí mismo una destreza que el examen evaluará. La tercera, y la más importante: dedicar al análisis posterior tanto tiempo como al simulacro mismo.',
            'El análisis posterior tiene cuatro pasos. Uno: revisar solo las preguntas falladas y las marcadas. Dos: clasificar cada error, porque no todos valen lo mismo — hay errores de contenido (no lo sabía), de lectura (leí mal el enunciado), de tiempo (no alcancé) y de descarte (dudé entre dos y elegí mal). Tres: para los errores de contenido, volver a la lección y a la ficha del tema. Cuatro: programar las preguntas falladas en la siguiente sesión usando el filtro de preguntas falladas del modo estudio.',
          ],
          table: {
            caption: 'Diagnóstico del error y acción correctiva',
            headers: ['Tipo de error', 'Señal típica', 'Acción'],
            rows: [
              ['De contenido', 'No reconocías el tema al leer la pregunta', 'Volver a la lección y a la ficha; repasar con banco del indicador'],
              ['De lectura', 'Entendiste la pregunta después de ver la respuesta', 'Leer el enunciado completo antes de mirar las opciones; subrayar el verbo de la tarea'],
              ['De tiempo', 'Las últimas preguntas quedaron sin responder', 'Practicar descarte rápido; no exceder un límite por pregunta'],
              ['De descarte', 'Dudaste entre dos y elegiste la incorrecta', 'Estudiar los patrones de distractor: sigilo, exceso de lenguaje o excepción'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'La plataforma genera los simulacros con preguntas aleatorias del banco para practicar los temas y la administración del tiempo. Esa distribución no reproduce ni pretende reproducir la distribución oficial de preguntas, puntajes o tiempos de la convocatoria, que solo consta en los actos oficiales de la CNSC.',
          },
        },
        {
          heading: 'La última semana y el día anterior',
          paragraphs: [
            'La última semana no es para aprender temas nuevos de cero. Es para consolidar lo estudiado, cerrar los huecos conocidos y llegar en condiciones de rendir. Un plan razonable de siete días incluye: dos simulacros con su análisis, repaso de las fichas de todos los temas, revisión de los errores acumulados, y repaso de mentefactos como cierre visual de cada módulo.',
            'El día anterior conviene reducir la carga: repasar fichas y mentefactos, no resolver simulacros completos. Y conviene dedicar un rato a la logística, verificando únicamente en los canales oficiales lo relativo a la citación, los documentos de identificación exigidos y las condiciones de la prueba. Los rumores de pasillo sobre el examen son la peor fuente posible y consumen exactamente la energía que la prueba necesita.',
            'Sobre el día del examen, dos reglas de administración del tiempo sirven para cualquier prueba de selección: resolver primero las preguntas que se saben y marcar las dudosas para volver a ellas al final; y no dejar preguntas sin responder cuando el instrumento no tenga penalización por error, verificando ese punto en la guía oficial del proceso y no en suposiciones.',
          ],
          callout: {
            type: 'aviso',
            text: 'Fechas de la prueba, número de preguntas, puntajes, pesos por prueba, sedes y reglas de calificación son datos que solo constan en los actos oficiales de la convocatoria publicados por la CNSC y en la guía de la prueba. Esta plataforma no los anuncia ni los sustituye: consúltalos siempre en los canales oficiales.',
          },
        },
        {
          heading: 'Un plan semanal que sí cabe en la vida real',
          paragraphs: [
            'La preparación se pierde más por abandono que por falta de materiales. Este esquema mínimo se sostiene incluso en semanas difíciles: sesiones cortas, todos los días, con un día de descanso.',
          ],
          bullets: [
            'Lunes a viernes, 30 a 45 minutos: una tanda de fichas del tema en curso y entre 10 y 15 preguntas en modo estudio, con lectura de las justificaciones.',
            'Dos días de la semana, 20 minutos extra: repaso de las preguntas falladas acumuladas.',
            'Un día de la semana, 60 a 90 minutos: estudio del tema nuevo de la ruta, con mentefacto de cierre.',
            'Sábado: simulacro configurado a la medida del avance, con análisis posterior completo.',
            'Domingo: descanso o repaso ligero de fichas.',
          ],
          callout: {
            type: 'ejemplo',
            text: 'Ejemplo de sesión de 30 minutos: 10 minutos de fichas del tema (recuperación activa, sin mirar el reverso antes de intentar), 15 minutos de preguntas en modo estudio con lectura de cada justificación, y 5 minutos para anotar los errores del día y qué hacer con ellos.',
          },
        },
      ],
      summary: [
        'Cada herramienta de la plataforma sirve a un momento distinto del estudio: lecciones para comprender, fichas para fijar, banco y modo estudio para practicar, simulacros para medir bajo presión, diagnóstico para priorizar.',
        'El repaso espaciado con recuperación activa (intentar de memoria, verificar y anotar el error) es más eficaz que releer, y se organiza en intervalos crecientes.',
        'Intercalar temas y variar el tipo de ejercicio obliga a discriminar, que es la operación que el examen exige.',
        'El simulacro rinde si se hace en condiciones de examen, con tiempo proporcional, y si se dedica al análisis posterior tanto tiempo como a la prueba misma.',
        'La última semana es para consolidar y cerrar huecos, no para aprender temas nuevos de cero.',
        'Los datos de la convocatoria y de la prueba solo constan en los actos oficiales de la CNSC.',
      ],
      memorize: [
        'Estudiar = comprender (lección) → fijar (ficha) → practicar (banco y modo estudio) → medir (simulacro) → corregir (diagnóstico).',
        'Recuperación activa: intentar de memoria antes de mirar; verificar; anotar el error.',
        'Intervalos de repaso: día 0, 1, 3, 7, 15 y 30.',
        'Cuatro tipos de error: contenido, lectura, tiempo y descarte. Cada uno tiene su acción correctiva.',
        'La última semana: simulacros, fichas y errores. Nunca temas nuevos de cero.',
      ],
      examples: [
        {
          heading: 'Ejemplo de análisis de un simulacro',
          paragraphs: [
            'Supón que en un simulacro de 20 preguntas en 30 minutos fallaste seis. Al analizarlas: dos eran de contenido (no recordabas plazos del procedimiento de fiscalización), dos las entendiste después de leer la respuesta (leíste el enunciado a medias y respondiste sobre otra cosa), una quedó sin responder por falta de tiempo, y en una dudaste entre dos opciones y elegiste la que introducía una excepción inexistente.',
            'La acción correctiva no es «estudiar más»: es específica. Para las de contenido, volver a la lección del tema y pasar las fichas correspondientes al repaso de mañana. Para las de lectura, entrenar la rutina de leer el enunciado completo y subrayar mentalmente qué se pregunta antes de mirar las opciones. Para la de tiempo, fijar un límite por pregunta y practicar el descarte rápido. Para la de descarte, revisar los patrones de distractor: en el examen, las opciones que agregan excepciones, sigilo o condiciones que el enunciado no menciona suelen ser falsas.',
            'Ese análisis toma veinte minutos y convierte un simulacro mediocre en un plan de estudio concreto. Un simulacro sin análisis solo produce una cifra, y la cifra no enseña nada por sí sola.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Acumular simulacros sin analizar los errores.',
          correction: 'Sin análisis posterior, el simulacro solo produce una cifra. El valor está en clasificar cada error y programar su corrección.',
        },
        {
          mistake: 'Estudiar con relectura pasiva del material.',
          correction: 'La relectura genera sensación de dominio sin comprobarlo. Sustitúyela por recuperación activa: responder de memoria, verificar y anotar el error.',
        },
        {
          mistake: 'Concentrar toda la preparación en una sola sesión larga, por ejemplo de fin de semana.',
          correction: 'El repaso distribuido en intervalos produce retención mucho más duradera que la misma cantidad de horas concentradas.',
        },
        {
          mistake: 'Dejar el estudio de los indicadores comportamentales para el final por considerarlos «de sentido común».',
          correction: 'Dependen de niveles oficiales y de conductas específicas. Sin practicar la discriminación por nivel, el sentido común elige respuestas plausibles pero incorrectas.',
        },
        {
          mistake: 'Buscar en fuentes no oficiales fechas, número de preguntas o puntajes del examen.',
          correction: 'Esos datos solo constan en los actos oficiales de la CNSC. Cualquier otra fuente, incluida esta plataforma, no los establece.',
        },
      ],
      norms: [
        {
          norm: 'Ley 909 de 2004',
          article: 'art. 24',
          status: 'verificar',
          note: 'Finalidad de las pruebas o instrumentos de selección en el concurso de méritos. Verificar la redacción vigente del artículo.',
        },
        {
          norm: 'Decreto Ley 927 de 2023',
          status: 'vigente',
          note: 'Establece el Sistema Específico de Carrera de los empleados públicos de la DIAN y el marco de sus concursos.',
        },
        {
          norm: 'Decreto 1083 de 2015',
          article: 'arts. 2.2.2.6.1 y siguientes',
          status: 'verificar',
          note: 'Reglamentación del proceso de selección en el empleo público. Verificar los apartados vigentes y su concordancia con el sistema específico de la DIAN.',
        },
      ],
      links: [
        { label: 'CNSC — Comisión Nacional del Servicio Civil', url: 'https://www.cnsc.gov.co/' },
        { label: 'CNSC — Simulacros y material de apoyo', url: 'https://www.cnsc.gov.co/index.php/simulacros' },
        { label: 'Función Pública — Gestor Normativo', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/' },
        { label: 'DIAN — Portal institucional', url: 'https://www.dian.gov.co/' },
      ],
      mindmap: {
        root: 'Repaso y simulacros',
        branches: [
          { label: 'Herramientas', children: ['Lecciones y mentefactos', 'Fichas', 'Banco', 'Modo estudio', 'Actividades', 'Simulacros', 'Examen final', 'Diagnóstico'] },
          { label: 'Repaso espaciado', children: ['Día 0, 1, 3, 7, 15, 30', 'Recuperación activa', 'Anotar el error', 'Intercalar temas'] },
          { label: 'Simulacro', children: ['Condiciones de examen', 'Tiempo proporcional', 'Análisis posterior', 'Cuatro tipos de error'] },
          { label: 'Última semana', children: ['Consolidar, no aprender de cero', 'Fichas y errores', 'Logística en fuentes oficiales'] },
        ],
      },
      mindmapText:
        'Cada herramienta de la plataforma cumple una función: las lecciones y mentefactos para comprender, las fichas para fijar, el banco y el modo estudio para practicar, las actividades para variar, los simulacros para medir bajo presión, el examen final para evaluar la preparación completa y el diagnóstico para priorizar. El repaso se hace con recuperación activa y en intervalos crecientes (días 0, 1, 3, 7, 15 y 30), intercalando temas y variando el tipo de ejercicio. Los simulacros rinden cuando se hacen en condiciones de examen y se analizan después, clasificando cada error en contenido, lectura, tiempo o descarte. La última semana se dedica a consolidar, no a aprender temas nuevos, y la información sobre la prueba se consulta únicamente en los canales oficiales de la CNSC.',
      source: [
        {
          doc: 'material',
          pages: 'no aplica — contenido propio de la plataforma',
          note: 'Este módulo NO proviene de los PDF de estudio: es contenido pedagógico elaborado para esta plataforma sobre técnicas de estudio (repaso espaciado y recuperación activa) y describe las herramientas de la propia aplicación. No contiene datos de la convocatoria ni fechas oficiales.',
        },
      ],
    },
  ],
}
