import type { ModuleDef } from '../types'

// ============================================================
// Módulo 13 — Razonamiento analítico
// Indicador: i11 (razonamiento analítico)
// Este tema NO está desarrollado en los PDF de estudio. El
// contenido se construyó a partir de fuentes oficiales
// verificadas el 2026-10-15: definición de razonamiento
// analítico de la CNSC (2025, citada en documento oficial de la
// CNSC) y marco de la Ley 909 de 2004 sobre concursos de mérito.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm13',
  order: 13,
  title: 'Razonamiento analítico',
  description:
    'Qué es el razonamiento analítico, cómo lo evalúa la CNSC en las pruebas escritas y qué técnicas usar para resolver silogismos, tablas de datos, secuencias e interpretación de argumentos con el menor margen de error.',
  indicators: ['i11'],
  lessons: [
    {
      id: 'm13-l01',
      moduleId: 'm13',
      title: 'Qué es el razonamiento analítico y cómo se evalúa',
      indicators: ['i11'],
      objectives: [
        'Definir el razonamiento analítico con la definición oficial de la CNSC.',
        'Descomponer la competencia en sus tres componentes: identificar datos, establecer relaciones y sacar conclusiones.',
        'Reconocer el formato de los ítems de razonamiento analítico en las pruebas escritas de la CNSC.',
      ],
      sections: [
        {
          heading: 'La definición oficial',
          paragraphs: [
            'El razonamiento analítico es, en la definición que la Comisión Nacional del Servicio Civil utiliza en los procesos de selección, una «habilidad cognitiva que permite descomponer un problema o situación compleja en partes más manejables para entender su estructura y analizar las relaciones entre sus componentes. Este tipo de razonamiento se centra en la capacidad de identificar patrones, relaciones y conexiones entre distintos elementos, con el objetivo de llegar a conclusiones lógicas y fundamentadas» (CNSC, 2025).',
            'La definición es corta pero muy densa: contiene tres verbos que resumen toda la competencia. DESCOMPONER: tomar un problema grande y partirlo en partes manejables. ANALIZAR RELACIONES: ver cómo se conectan esas partes entre sí. CONCLUIR: llegar a una conclusión lógica y, sobre todo, fundamentada en los datos y no en la intuición.',
            'La misma definición menciona la fuente en que se apoya la CNSC: la obra de Gerald Nosich sobre aprendizaje crítico (2003, p. 116), donde el razonamiento analítico se describe como la capacidad de evaluar la información disponible y extraer conclusiones razonables para resolver una situación.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Razonamiento analítico = DESCOMPONER + RELACIONAR + CONCLUIR. La conclusión tiene que estar FUNDAMENTADA en los datos del enunciado, no en lo que crees recordar del mundo real.',
          },
        },
        {
          heading: 'Los tres componentes, con un ejemplo',
          paragraphs: [
            'Un ejemplo real de ítem usado en un proceso de selección sirve para ver los tres componentes en acción. El enunciado presenta un informe con el número de millones ejecutados por varios procesos: LOG con 17 M, FIN con 22 M y ADM con 34 M, y pide identificar cuál proceso registra el valor intermedio.',
            'El aspirante que responde bien hace lo siguiente: PRIMERO identifica los datos relevantes (los tres valores, no todo el informe); SEGUNDO establece la relación entre ellos (ordenarlos de menor a mayor: 17 < 22 < 34); TERCERO concluye (el valor intermedio es 22 M, es decir FIN). No hay ningún conocimiento tributario o aduanero en juego: la respuesta se verifica enteramente dentro del enunciado.',
            'Fíjate en un detalle importante: quien elige LOG (17 M) no falla por no saber de la DIAN, falla porque confundió «valor intermedio» con «valor menor». El error es de lectura y de relación, no de conocimiento.',
          ],
          table: {
            caption: 'Los tres componentes y las preguntas que los activan',
            headers: ['Componente', 'Qué haces', 'Pregunta que te haces'],
            rows: [
              ['Identificar datos', 'Separar del texto los datos que resuelven la pregunta', '¿Qué datos necesito y cuáles sobran?'],
              ['Establecer relaciones', 'Comparar, ordenar, agrupar, calcular proporciones', '¿Cómo se conectan esos datos entre sí?'],
              ['Sacar conclusiones', 'Elegir la única afirmación que se sigue de los datos', '¿Qué se concluye necesariamente y no solo de manera posible?'],
            ],
          },
        },
        {
          heading: 'Cómo se evalúa en la prueba escrita',
          paragraphs: [
            'El razonamiento analítico aparece en las pruebas escritas de la CNSC como un bloque de ítems de tipo cognitivo: no se evalúa si memorizaste la definición, sino si puedes aplicarla a un caso con datos. Los formatos típicos son los mismos que verás en este módulo:',
          ],
          bullets: [
            'Análisis de datos numéricos y tablas: comparar cifras, hallar promedios, proporciones, valores intermedios y variaciones.',
            'Relaciones lógicas: silogismos, condicionales («si… entonces…») y deducciones con «todos», «algunos» y «ninguno».',
            'Secuencias y patrones: series numéricas, literales o gráficas que siguen una regla.',
            'Comprensión e interpretación de textos: identificar la conclusión de un argumento o la premisa que falta.',
          ],
          callout: {
            type: 'importante',
            text: 'En los ítems de razonamiento la respuesta correcta es única y verificable: se demuestra con los datos del enunciado. Si para responder necesitas suponer un dato que no está escrito, esa opción es descartable.',
          },
        },
        {
          heading: 'Razonar no es opinar',
          paragraphs: [
            'El error conceptual de fondo que se comete con esta competencia es creer que se responde «con lógica de la vida real». En un ítem de razonamiento analítico, si el enunciado dice que en cierto país todos los comerciantes están obligados a facturar, entonces para efectos del ítem es verdad, aunque en tu experiencia conozcas excepciones. El enunciado define el mundo; tu tarea es ver qué se sigue de él.',
            'Por eso dos reglas gobiernan todo el módulo: (1) no introduzcas información externa, y (2) la conclusión debe ser necesaria, no meramente posible. Una opción que «podría ser cierta» es una opción incorrecta cuando existe otra que «tiene que ser cierta».',
          ],
          callout: {
            type: 'error',
            text: 'Error típico: responder con lo que sabes del tema del enunciado en lugar de con lo que el enunciado dice. El razonamiento analítico se resuelve dentro del texto, no fuera de él.',
          },
        },
      ],
      summary: [
        'El razonamiento analítico es la habilidad cognitiva de descomponer un problema complejo, analizar las relaciones entre sus componentes y llegar a conclusiones lógicas y fundamentadas (CNSC, 2025, con base en Nosich, 2003).',
        'Sus tres componentes operativos son identificar los datos relevantes, establecer relaciones entre ellos y extraer la conclusión que necesariamente se sigue.',
        'Se evalúa con ítems de datos, lógica, secuencias y argumentos, en los que la respuesta correcta es única y se verifica con el propio enunciado.',
        'La conclusión debe ser NECESARIA y no depender de información externa al enunciado.',
      ],
      memorize: [
        'Definición: descomponer el problema + analizar relaciones entre componentes + llegar a conclusiones lógicas y fundamentadas.',
        'Tres componentes: IDENTIFICAR datos · RELACIONAR · CONCLUIR.',
        'Regla de oro: la conclusión se demuestra con el enunciado; no se supone nada externo.',
        'Conclusión NECESARIA > conclusión posible.',
      ],
      examples: [
        {
          heading: 'Ejemplo resuelto: valor intermedio de un informe',
          paragraphs: [
            'Enunciado: «Un informe de gestión registra la ejecución presupuestal de cuatro procesos: LOG 17 M, FIN 22 M, ADM 34 M y OPE 15 M. ¿Cuál proceso registra el valor que ocupa la posición intermedia entre el mayor y el menor?».',
            'Paso 1 — Identificar: los datos son los cuatro valores. La posición intermedia entre el mayor y el menor es el punto medio, no la mediana de la lista.',
            'Paso 2 — Relacionar: mayor = 34 M (ADM); menor = 15 M (OPE). El punto medio aritmético es (34 + 15) / 2 = 24,5 M.',
            'Paso 3 — Concluir: ningún proceso registra exactamente 24,5 M; el valor más cercano a esa posición intermedia es FIN con 22 M. Si el enunciado pidiera «el valor intermedio de los cuatro ordenados de menor a mayor», la respuesta sería distinta, y por eso el paso 1 (leer con precisión qué se pide) decide el ítem.',
            'Moraleja: la mitad de los errores en razonamiento analítico se cometen antes de calcular, al leer el enunciado sin precisión.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Buscar en el enunciado un tema conocido (impuestos, aduanas) y responder con conocimientos previos.',
          correction: 'En los ítems de razonamiento la respuesta está contenida en el enunciado. El tema es un disfraz; el problema es de datos y relaciones.',
        },
        {
          mistake: 'Elegir la opción que «podría ser verdad» porque suena razonable.',
          correction: 'Solo es correcta la opción que se sigue NECESARIAMENTE de los datos. Si admite un escenario en que sea falsa sin contradecir el enunciado, se descarta.',
        },
        {
          mistake: 'Calcular antes de terminar de leer la pregunta.',
          correction: 'Primero identifica con precisión qué se pide (valor intermedio, mayor, promedio, variación) y solo después opera con los datos.',
        },
      ],
      norms: [
        {
          norm: 'Ley 909 de 2004',
          article: 'art. 24',
          status: 'verificar',
          note: 'Régimen general del empleo público y regulación de las pruebas dentro del proceso de selección por mérito. Verificar la numeración del artículo en el texto vigente.',
        },
      ],
      links: [
        { label: 'CNSC — Comisión Nacional del Servicio Civil', url: 'https://www.cnsc.gov.co/' },
        { label: 'CNSC — Guías de orientación al aspirante', url: 'https://historico.cnsc.gov.co/index.php/guias-y-protocolos' },
        { label: 'Función Pública — Guía de orientación al aspirante', url: 'https://www.funcionpublica.gov.co/' },
      ],
      mindmap: {
        root: 'Razonamiento analítico',
        branches: [
          { label: 'Definición CNSC', children: ['Habilidad cognitiva', 'Descomponer el problema', 'Analizar relaciones', 'Conclusiones fundamentadas'] },
          { label: 'Componentes', children: ['Identificar datos', 'Establecer relaciones', 'Sacar conclusiones'] },
          { label: 'Formas de evaluarlo', children: ['Datos y tablas', 'Silogismos y condicionales', 'Secuencias y patrones', 'Argumentos de texto'] },
          { label: 'Reglas de oro', children: ['Nada de información externa', 'Conclusión necesaria', 'Leer primero, calcular después'] },
        ],
      },
      mindmapText:
        'El razonamiento analítico es la habilidad de descomponer un problema complejo, analizar las relaciones entre sus componentes y llegar a conclusiones lógicas y fundamentadas. Se compone de tres operaciones: identificar los datos, relacionarlos y concluir. Se evalúa con ítems de datos y tablas, silogismos y condicionales, secuencias y patrones, e interpretación de argumentos. La conclusión debe ser necesaria y demostrable únicamente con el enunciado.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). El contenido proviene de fuentes oficiales verificadas (definición de razonamiento analítico de la CNSC, 2025, y marco de la Ley 909 de 2004) y de bibliografía de razonamiento crítico citada por la propia CNSC (Nosich, 2003).',
        },
      ],
      activityId: 'm13-a01',
      quizId: 'q-m13',
    },
    {
      id: 'm13-l02',
      moduleId: 'm13',
      title: 'Técnicas de razonamiento para pruebas: silogismos, datos, secuencias y argumentos',
      indicators: ['i11'],
      objectives: [
        'Validar silogismos y razonamientos condicionales aplicando las reglas de inferencia y detectando falacias.',
        'Resolver ítems de tablas y datos numéricos mediante comparación, ordenamiento y proporciones.',
        'Descubrir la regla de una secuencia numérica o gráfica y proyectar su término siguiente.',
        'Identificar la conclusión y la premisa oculta de un argumento presentado en un texto.',
      ],
      sections: [
        {
          heading: 'Silogismos: la validez no depende del contenido',
          paragraphs: [
            'Un silogismo es un razonamiento con dos premisas y una conclusión. Lo que se evalúa nunca es si la conclusión es verdadera en el mundo real, sino si se sigue válidamente de las premisas. Un silogismo puede ser válido y tener una conclusión falsa; y puede ser inválido y tener una conclusión verdadera por casualidad.',
            'Las palabras «todos», «ningún» y «algunos» determinan por completo la validez. Dos reglas resuelven la mayoría de los ítems: (1) de dos premisas particulares o negativas no se sigue nada concluyente, y (2) el término que aparece en las dos premisas (término medio) es el que sostiene la inferencia y no puede aparecer en la conclusión.',
            'Ejemplo válido: «Todos los funcionarios de la DIAN son servidores públicos. Ningún servidor público puede ser juez y parte en un asunto de su competencia. Luego ningún funcionario de la DIAN puede ser juez y parte en un asunto de su competencia». Aquí el término medio es «servidor público», que conecta las dos premisas y desaparece de la conclusión.',
          ],
          table: {
            caption: 'Cuadro de oposición y relaciones de cantidad',
            headers: ['Enunciado', 'Consecuencia válida', 'No se sigue'],
            rows: [
              ['Todos los A son B', 'Algún B es A', 'Todos los B son A'],
              ['Ningún A es B', 'Ningún B es A', 'Algún A es B'],
              ['Algunos A son B', 'Algunos B son A', 'Todos los A son B'],
              ['Algunos A no son B', 'Algunos no-B podrían no existir como A', 'Ningún A es B'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: '«Algunos» significa «al menos uno», nunca «no todos». De «algunos comerciantes incumplen» NO se sigue «algunos comerciantes no incumplen».',
          },
        },
        {
          heading: 'Condicionales: la única inferencia segura',
          paragraphs: [
            'Un condicional tiene la forma «si P, entonces Q» (P es el antecedente, Q el consecuente). De él solo se siguen dos inferencias válidas:',
          ],
          bullets: [
            'Modus ponens: afirmado P, se concluye Q. «Si el contribuyente no paga, se genera sanción por extemporaneidad. El contribuyente no pagó. Luego se genera sanción por extemporaneidad».',
            'Modus tollens: negado Q, se concluye la negación de P. «Si se generó sanción por extemporaneidad, entonces el contribuyente no pagó. No se generó sanción por extemporaneidad. Luego el contribuyente pagó».',
            'Equivalencia (contraposición): «si P entonces Q» equivale exactamente a «si no Q entonces no P». Con «si el documento está firmado, la solicitud es válida» equivale a «si la solicitud no es válida, el documento no está firmado».',
          ],
          callout: {
            type: 'error',
            text: 'Dos falacias que aparecen continuamente en los exámenes: AFIRMAR EL CONSECUENTE («si P entonces Q; Q es verdad; luego P») y NEGAR EL ANTECEDENTE («si P entonces Q; no P; luego no Q»). Ninguna de las dos es válida.',
          },
        },
        {
          heading: 'Tablas y datos numéricos',
          paragraphs: [
            'Los ítems de datos casi nunca requieren cálculos largos: requieren saber qué se pregunta. Antes de operar, identifica en la tabla o el informe: ¿hay totales?, ¿las cifras están en la misma unidad?, ¿la pregunta pide el mayor, el menor, el intermedio, la variación, el promedio o una proporción?',
            'Los tres cálculos que resuelven la mayoría de los ítems son: (1) comparación y ordenamiento para hallar extremos y posiciones intermedias; (2) diferencia y variación porcentual, calculada como (valor final − valor inicial) ÷ valor inicial × 100; y (3) proporción o participación, calculada como parte ÷ total × 100.',
            'Una advertencia de unidades: si una columna está en millones y otra en miles, comparar directamente los números produce un error garantizado. Normaliza las unidades antes de comparar.',
          ],
          table: {
            caption: 'Ejemplo de tabla de trabajo (cifras hipotéticas, en millones)',
            headers: ['Seccional', 'Recaudo 2024', 'Recaudo 2025', 'Variación'],
            rows: [
              ['Norte', '120', '150', '+25,0 %'],
              ['Centro', '200', '220', '+10,0 %'],
              ['Sur', '80', '120', '+50,0 %'],
              ['Oriente', '100', '90', '−10,0 %'],
              ['Total', '500', '580', '+16,0 %'],
            ],
          },
          callout: {
            type: 'ejemplo',
            text: 'Ejercicio: ¿qué seccional tuvo la mayor variación porcentual? No es la de mayor recaudo (Centro, 220) sino SUR, que creció 50 %. La pregunta pide VARIACIÓN, no VOLUMEN: otro error clásico de lectura.',
          },
        },
        {
          heading: 'Secuencias y patrones',
          paragraphs: [
            'En una secuencia numérica, el primer paso es calcular las DIFERENCIAS entre términos consecutivos; si las diferencias no son constantes, calcula las diferencias de las diferencias (segundo orden). Si tampoco, prueba dividir cada término por el anterior (patrón multiplicativo) o buscar una regla de alternancia.',
            'Ejemplo 1 (primer orden): 5, 9, 15, 23, 33… Las diferencias son 4, 6, 8, 10: aumentan de dos en dos, luego la siguiente diferencia es 12 y el término siguiente es 45.',
            'Ejemplo 2 (regla no lineal): 2, 6, 12, 20, 30… Cada término es n × (n + 1) con n = 1, 2, 3, 4, 5; también las diferencias son 4, 6, 8, 10. El término siguiente es 6 × 7 = 42.',
            'Ejemplo 3 (alternancia): 3, 100, 6, 90, 12, 80… Las posiciones impares se duplican (3, 6, 12, 24) y las pares bajan de diez en diez (100, 90, 80). El término siguiente es 24.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Orden de ataque en secuencias: 1) diferencias; 2) diferencias de las diferencias; 3) cociente entre términos; 4) patrón alterno (dos series intercaladas).',
          },
        },
        {
          heading: 'Interpretación de textos y argumentos',
          paragraphs: [
            'Un argumento tiene premisas (lo que se afirma como base) y una conclusión (lo que se pretende demostrar, que suele ir con «por lo tanto», «en consecuencia», «se concluye que»). Para responder bien, localiza primero la conclusión y pregúntate de qué premisas depende.',
            'Dos tipos de pregunta aparecen una y otra vez: cuál es la conclusión principal del texto, y cuál es la premisa o SUPUESTO implícito que el argumento necesita para funcionar. En el segundo tipo, la respuesta correcta es aquella sin la cual el argumento se derrumba, no una que simplemente lo refuerce.',
            'Ejemplo: «La DIAN aumentó las acciones de control en comercio exterior y las importaciones irregulares detectadas crecieron un 30 %. Por lo tanto, el control fue más efectivo». El argumento supone que las importaciones irregulares no crecieron por causas ajenas al control (por ejemplo, un aumento general del comercio). Ese supuesto es la respuesta correcta a «¿qué asume el autor?».',
          ],
        },
      ],
      summary: [
        'En silogismos, la validez depende de la cantidad («todos», «ninguno», «algunos») y del término medio, no del contenido ni de la verdad real de las premisas.',
        'De un condicional solo se siguen el modus ponens y el modus tollens; afirmar el consecuente o negar el antecedente son falacias.',
        'En ítems de datos, el paso decisivo es leer con precisión qué se pide (extremo, posición intermedia, variación, proporción) y normalizar las unidades antes de comparar.',
        'En secuencias, ataca en orden: diferencias, segundas diferencias, cociente y patrones alternos.',
        'En argumentos, identifica la conclusión y el supuesto implícito del que depende.',
      ],
      memorize: [
        'Modus ponens: P → Q, P, luego Q. Modus tollens: P → Q, no Q, luego no P.',
        'Falacias: afirmar el consecuente y negar el antecedente.',
        '«Algunos» = al menos uno (no significa «no todos»).',
        'Variación porcentual = (final − inicial) ÷ inicial × 100.',
        'Secuencias: diferencias → segundas diferencias → cociente → alternancia.',
      ],
      examples: [
        {
          heading: 'Ejemplo resuelto 1: condicional aplicado a un caso DIAN',
          paragraphs: [
            'Enunciado: «En el régimen de control interno aplicable a un proceso, si un expediente está incompleto, entonces no puede pasar a la etapa de resolución. El expediente 2025-441 sí pasó a la etapa de resolución. ¿Qué se concluye necesariamente?».',
            'Paso 1 — Formalizar: P = «expediente incompleto»; Q = «no puede pasar a resolución». El enunciado da «si P entonces Q» y afirma que el expediente pasó a resolución, es decir, que NO Q es el caso.',
            'Paso 2 — Aplicar la regla: tenemos P → Q y «no Q»; la única inferencia válida es el modus tollens: «no P».',
            'Paso 3 — Concluir en lenguaje natural: el expediente no estaba incompleto. La opción que diga «el expediente estaba completo» es la correcta. Cualquier opción que diga «el expediente estaba incompleto» o «el expediente se resolvió favorablemente» introduce información que el enunciado no contiene.',
          ],
        },
        {
          heading: 'Ejemplo resuelto 2: tabla con pregunta de proporción',
          paragraphs: [
            'Enunciado: «El área de fiscalización resolvió en un mes 240 requerimientos: 96 fueron de fiscalización tributaria, 60 de fiscalización aduanera, 48 de control cambiario y 36 de fiscalización internacional. ¿Qué porcentaje del total representan conjuntamente los requerimientos de fiscalización aduanera y control cambiario?».',
            'Paso 1 — Identificar: total = 240; se piden los grupos aduanera (60) y cambiario (48), que juntos suman 108. Los grupos tributario e internacional son datos distractores.',
            'Paso 2 — Relacionar: proporción = parte ÷ total = 108 ÷ 240.',
            'Paso 3 — Concluir: 108 ÷ 240 = 0,45 = 45 %. Si el resultado se hubiera calculado mal y hubiera dado 40 % o 24 %, conviene verificar si el error fue sumar el grupo equivocado o dividir entre otro total (por ejemplo, entre los requerimientos tributarios).',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Evaluar un silogismo según si la conclusión es verdadera en la realidad, en lugar de si se sigue de las premisas.',
          correction: 'La validez es formal. Un silogismo válido con premisas falsas da una conclusión falsa pero el razonamiento sigue siendo válido.',
        },
        {
          mistake: 'Confundir en las tablas el volumen con la variación o la participación.',
          correction: 'Lee la pregunta: «quién recaudó más» pide extremos; «quién creció más» pide variación porcentual; «qué porcentaje del total» pide participación. Son tres operaciones distintas.',
        },
        {
          mistake: 'Tratar «algunos» como si significara «no todos».',
          correction: 'En lógica, «algunos A son B» significa «al menos un A es B» y es compatible con que todos lo sean.',
        },
        {
          mistake: 'En secuencias, proyectar el término siguiente sin haber verificado la regla con el último par de términos.',
          correction: 'Comprueba siempre la regla hallada contra al menos los dos últimos términos de la serie antes de proyectar.',
        },
      ],
      norms: [],
      links: [
        { label: 'CNSC — Comisión Nacional del Servicio Civil', url: 'https://www.cnsc.gov.co/' },
        { label: 'CNSC — Guías y protocolos para aspirantes', url: 'https://historico.cnsc.gov.co/index.php/guias-y-protocolos' },
      ],
      mindmap: {
        root: 'Técnicas de razonamiento',
        branches: [
          { label: 'Silogismos', children: ['Todos / ninguno / algunos', 'Término medio', 'Validez formal'] },
          { label: 'Condicionales', children: ['Modus ponens', 'Modus tollens', 'Contraposición', 'Falacias'] },
          { label: 'Datos y tablas', children: ['Extremos e intermedios', 'Variación %', 'Proporción', 'Unidades'] },
          { label: 'Secuencias', children: ['Diferencias', 'Segundas diferencias', 'Cociente', 'Alternancia'] },
          { label: 'Argumentos', children: ['Conclusión', 'Premisas', 'Supuesto implícito'] },
        ],
      },
      mindmapText:
        'Las técnicas de razonamiento para pruebas se agrupan en cuatro familias. Los silogismos se validan por la cantidad y el término medio. Los condicionales solo admiten modus ponens y modus tollens. Los ítems de datos exigen identificar con precisión qué se pide y normalizar unidades antes de comparar. Las secuencias se abordan por diferencias sucesivas, cocientes o patrones alternos. Y los argumentos se interpretan localizando la conclusión y el supuesto implícito.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). El contenido proviene de fuentes oficiales verificadas (definición y tipo de ítems de razonamiento analítico reportados por la CNSC) y de lógica elemental aplicada.',
        },
      ],
      activityId: 'm13-a02',
    },
    {
      id: 'm13-l03',
      moduleId: 'm13',
      title: 'Estrategia para las preguntas de razonamiento en el examen',
      indicators: ['i11'],
      objectives: [
        'Aplicar un método de lectura del enunciado que evite los errores de interpretación.',
        'Descartar opciones por criterios lógicos verificables antes de concluir que «ninguna sirve».',
        'Administrar el tiempo del bloque de razonamiento dentro del examen.',
        'Reconocer y neutralizar los errores típicos del razonamiento en pruebas de selección.',
      ],
      sections: [
        {
          heading: 'Método de cuatro pasos para leer el enunciado',
          paragraphs: [
            'Casi todos los errores evitables ocurren antes de razonar. Un método fijo de lectura los reduce drásticamente:',
          ],
          bullets: [
            'Paso 1 — Lee la PREGUNTA antes que los datos. Saber qué se pide evita procesar información inútil.',
            'Paso 2 — Subraya las palabras de cantidad o relación: «todos», «ninguno», «algunos», «si», «solo si», «excepto», «al menos», «como máximo».',
            'Paso 3 — Traduce a un esquema (P → Q, una tabla, una lista ordenada). No razones sobre el texto en prosa si puedes razonar sobre un esquema.',
            'Paso 4 — Verifica la conclusión contra cada opción: ¿se sigue necesariamente? ¿o solo es posible?',
          ],
          callout: {
            type: 'importante',
            text: 'Palabras que cambian todo el ítem: TODOS, NINGUNO, ALGUNOS, SOLO SI, EXCEPTO, NO, AL MENOS, COMO MÁXIMO, INTERMEDIO. Casi siempre hay una opción diseñada para quien las pasó por alto.',
          },
        },
        {
          heading: 'Cómo descartar opciones',
          paragraphs: [
            'En un ítem de razonamiento bien construido hay una sola opción correcta, pero las tres incorrectas suelen ser de tres tipos reconocibles, y cada tipo tiene su antídoto:',
          ],
          table: {
            caption: 'Tipos de opción incorrecta y cómo descartarlas',
            headers: ['Tipo de distractores', 'Cómo se reconoce', 'Antídoto'],
            rows: [
              ['Conclusión posible, pero no necesaria', 'Introduce un «podría», depende de un dato que no está', 'Pregúntate: ¿admito un escenario que la contradiga sin violar el enunciado? Si sí, se descarta'],
              ['Confusión de cantidad o de relación', 'Cambia «algunos» por «todos», o intercambia el orden de los términos', 'Vuelve al esquema y compara término por término'],
              ['Falacia formal', 'Afirma el consecuente o niega el antecedente', 'Escribe la forma (P → Q) y aplica solo ponens o tollens'],
              ['Dato externo o de sentido común', 'Incluye información que el enunciado no da', 'Si no está en el enunciado, no cuenta'],
            ],
          },
          callout: {
            type: 'error',
            text: 'Nunca descartes una opción por «sonar rara». Descarta por una razón enunciable: excede lo que dicen los datos, altera la cantidad, invierte una relación o comete una falacia.',
          },
        },
        {
          heading: 'Manejo del tiempo',
          paragraphs: [
            'El razonamiento analítico consume tiempo de forma desigual: algunos ítems se resuelven en treinta segundos y otros parecen devorar tres minutos. La estrategia es de dos pasadas:',
          ],
          bullets: [
            'Primera pasada: resuelve los ítems que reconoces de inmediato (silogismo simple, secuencia de primer orden, tabla pequeña) y marca los demás.',
            'Segunda pasada: aborda los ítems marcados con el tiempo restante, aplicando el método de cuatro pasos.',
            'Regla de abandono: si un ítem no cede tras aplicar el método y agotar dos intentos, déjalo marcado y continúa. Volver más tarde con la mente despejada funciona.',
            'Control de reloj: asigna de antemano un tope por ítem (por ejemplo, un minuto u ochenta segundos) y respétalo. El costo de oportunidad se mide en ítems no leídos.',
            'No dejes casillas vacías: en pruebas de selección la respuesta incorrecta normalmente no resta, pero la pregunta sin responder sí cuenta como error.',
          ],
          callout: {
            type: 'aviso',
            text: 'La regla sobre si las respuestas incorrectas penalizan depende del reglamento de cada convocatoria y debe verificarse en la guía oficial de la CNSC correspondiente al proceso. Consúltala antes del examen y ajusta tu estrategia de adivinanza según lo que allí se establezca.',
          },
        },
        {
          heading: 'Errores típicos del razonamiento en pruebas',
          paragraphs: [
            'Cinco errores concentran la mayoría de los puntos perdidos en este bloque:',
          ],
          bullets: [
            'Responder desde el conocimiento del tema y no desde los datos: el enunciado es el mundo.',
            'Invertir una relación condicional: leer «A si B» como «B si A».',
            'Ignorar una negación o una excepción («no», «excepto», «salvo») al pasar a las opciones.',
            'Confundir correlación con causalidad: que dos cifras crezcan juntas no demuestra que una cause la otra.',
            'Verificar solo la opción elegida y no comprobar su unicidad: si dos opciones parecen correctas, falta una precisión en el enunciado.',
          ],
        },
      ],
      summary: [
        'Un método fijo de lectura (pregunta primero, subrayar cantidades, esquematizar, verificar necesidad) previene la mayoría de los errores.',
        'Las opciones incorrectas son de tipos reconocibles: conclusión meramente posible, alteración de cantidad o relación, falacia formal y dato externo.',
        'El tiempo se administra en dos pasadas, con un tope por ítem y una regla de abandono explícita.',
        'Los ítems que parecen tener dos respuestas correctas casi siempre esconden una palabra de cantidad, negación o excepción pasada por alto.',
      ],
      memorize: [
        'Lee la pregunta ANTES que los datos.',
        'Palabras críticas: todos, ninguno, algunos, solo si, excepto, no, al menos, intermedio.',
        'Descarta por razón enunciable, nunca por intuición.',
        'Dos pasadas: primero lo fácil, después lo marcado.',
      ],
      examples: [
        {
          heading: 'Ejemplo resuelto: ítem con negación inadvertida',
          paragraphs: [
            'Enunciado: «De los 12 procesos de la entidad, solo los que tienen riesgo alto reciben acompañamiento permanente. El proceso de Gestión Documental no recibe acompañamiento permanente. ¿Qué se concluye necesariamente?».',
            'Paso 1 — Pregunta: se pide una conclusión necesaria.',
            'Paso 2 — Palabras críticas: «solo los que tienen riesgo alto». «Solo A recibe B» equivale a «si recibe B, entonces es A»; es decir, B → A, no A → B. Este es el punto que falla la mayoría.',
            'Paso 3 — Esquema: B = «recibe acompañamiento permanente»; A = «riesgo alto». Formalización correcta: B → A, equivalente a «no A → no B».',
            'Paso 4 — Verificación: el enunciado dice que Gestión Documental no recibe acompañamiento (no B). Con (B → A) y no B no se sigue nada sobre A: podría tener riesgo alto y no recibir acompañamiento por otra razón. Por tanto, la opción correcta es la que afirma que NO puede concluirse nada sobre el nivel de riesgo, y se descartan todas las que afirmen «no tiene riesgo alto» (negar el antecedente) o «tiene riesgo bajo».',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Leer «solo los que tienen riesgo alto reciben acompañamiento» como «todos los de riesgo alto reciben acompañamiento».',
          correction: '«Solo A es B» da B → A. La dirección de la implicación es la trampa más frecuente en los ítems de condicionales.',
        },
        {
          mistake: 'Empeñarse en un ítem difícil y consumir en él el tiempo de tres o cuatro ítems fáciles.',
          correction: 'Aplica la regla de abandono: marca, continúa y vuelve en la segunda pasada.',
        },
        {
          mistake: 'Suponer que la respuesta incorrecta resta puntos sin haberlo verificado en la guía oficial del proceso.',
          correction: 'La penalización por respuestas incorrectas depende de cada convocatoria; se verifica en la guía oficial de la CNSC antes del examen.',
        },
      ],
      norms: [],
      links: [
        { label: 'CNSC — Comisión Nacional del Servicio Civil', url: 'https://www.cnsc.gov.co/' },
        { label: 'CNSC — Guías de orientación al aspirante por proceso', url: 'https://historico.cnsc.gov.co/index.php/guias-y-protocolos' },
      ],
      mindmap: {
        root: 'Estrategia en el examen',
        branches: [
          { label: 'Leer', children: ['Pregunta primero', 'Subrayar cantidades', 'Esquematizar'] },
          { label: 'Descartar', children: ['Posible vs. necesario', 'Cantidad alterada', 'Falacia formal', 'Dato externo'] },
          { label: 'Tiempo', children: ['Dos pasadas', 'Tope por ítem', 'Regla de abandono'] },
          { label: 'Errores', children: ['Conocimiento previo', 'Invertir el condicional', 'Ignorar negaciones', 'Correlación ≠ causalidad'] },
        ],
      },
      mindmapText:
        'La estrategia para los ítems de razonamiento combina cuatro frentes: un método de lectura que empieza por la pregunta y subraya las palabras de cantidad; un criterio de descarte basado en distinguir lo posible de lo necesario y en detectar falacias formales; una administración del tiempo en dos pasadas con tope por ítem; y el reconocimiento anticipado de los errores típicos, en especial invertir la dirección de un condicional.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo textual en los PDF de estudio',
          note: 'Este tema NO está desarrollado en los PDF (MATERIAL TOTAL / TACI). Es contenido pedagógico propio de la plataforma, construido sobre la definición oficial de razonamiento analítico de la CNSC y sobre técnicas estándar de resolución de pruebas.',
        },
      ],
    },
  ],
}
