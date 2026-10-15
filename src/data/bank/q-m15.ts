import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 15 (repaso general e integrador)
// Ítems que combinan dimensiones técnicas y comportamentales de
// la convocatoria: en cada caso el indicador registrado es el
// predominante, pero el enunciado exige integrar más de un
// criterio (norma + conducta, dato + decisión, procedimiento +
// trato al ciudadano).
// Los ítems técnicos se apoyan en hechos verificados del marco
// institucional de la DIAN y en principios generales del
// procedimiento administrativo; los comportamentales y de
// valores se apoyan en la Resolución 65 de 2024 de la DIAN y en
// el Código de Integridad del Servicio Público. Los escenarios
// son hipotéticos.
// Nota: wrong[] tiene una entrada por opción (4), en el mismo
// orden de options[]; la posición de la opción correcta queda
// vacía porque la interfaz la omite.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m15-001',
    indicator: 'i06',
    moduleId: 'm15',
    topic: 'Integrador: misionalidad y servicio',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Un ciudadano pregunta cuál es la finalidad de la DIAN. ¿Cuál respuesta recoge el objeto de la entidad y, a la vez, es coherente con la orientación al usuario y al ciudadano?',
    options: [
      'Recaudar la mayor cantidad de impuestos posible, con independencia de la atención que reciban los ciudadanos.',
      'Administrar y controlar el cumplimiento de las obligaciones tributarias, aduaneras y cambiarias y facilitar las operaciones de comercio exterior, prestando un servicio que permita al ciudadano cumplir sus obligaciones.',
      'Ejercer la vigilancia del sistema financiero y del mercado de valores en nombre del Estado.',
      'Administrar los tributos territoriales que las entidades subnacionales le deleguen.',
    ],
    correct: 1,
    justification:
      'El objeto de la DIAN, definido en el Decreto 1071 de 1999, comprende administrar y controlar el cumplimiento de las obligaciones tributarias, aduaneras y cambiarias y facilitar las operaciones de comercio exterior en condiciones de equidad, transparencia y legalidad. La opción es además coherente con la orientación al usuario: la facilitación del cumplimiento y el servicio al ciudadano forman parte de la misionalidad, no son un añadido.',
    wrong: [
      'La finalidad de recaudo no autoriza a descuidar la atención: la facilitación del cumplimiento es parte del objeto institucional.',
      '',
      'La vigilancia del sistema financiero corresponde a la Superintendencia Financiera de Colombia, no a la DIAN.',
      'Los tributos territoriales no forman parte del objeto de la DIAN, que administra los nacionales.',
    ],
    source: 'Decreto 1071 de 1999 (objeto de la DIAN), desarrollado en el módulo 1 de la plataforma.',
  },
  {
    id: 'q-m15-002',
    indicator: 'i01',
    moduleId: 'm15',
    topic: 'Integrador: naturaleza jurídica y estructura',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'Un funcionario debe explicar en una capacitación qué tipo de entidad es la DIAN dentro de la estructura del Estado. ¿Cuál afirmación es correcta?',
    options: [
      'Es una superintendencia con funciones de inspección, vigilancia y control sobre los contribuyentes.',
      'Es un establecimiento público del orden territorial, con autonomía plena frente al Gobierno nacional.',
      'Es una Unidad Administrativa Especial del orden nacional, con personería jurídica, autonomía administrativa y presupuestal y patrimonio propio, adscrita al Ministerio de Hacienda y Crédito Público.',
      'Es un ministerio con funciones administrativas delegadas por la Presidencia de la República.',
    ],
    correct: 2,
    justification:
      'La DIAN es una Unidad Administrativa Especial del orden nacional, con personería jurídica, autonomía administrativa y presupuestal y patrimonio propio, adscrita al Ministerio de Hacienda y Crédito Público, con carácter eminentemente técnico y especializado. Conocer esa naturaleza es el punto de partida para ubicar correctamente sus dependencias y sus funciones.',
    wrong: [
      'La DIAN no es una superintendencia: su naturaleza es de Unidad Administrativa Especial.',
      'No es una entidad territorial: es una entidad del orden nacional adscrita al Ministerio de Hacienda y Crédito Público.',
      '',
      'La DIAN no tiene rango de ministerio; su carácter técnico y especializado es precisamente lo que justifica su naturaleza de Unidad Administrativa Especial.',
    ],
    source: 'Decreto 2117 de 1992 y Decreto 1071 de 1999, desarrollados en el módulo 1 de la plataforma.',
  },
  {
    id: 'q-m15-003',
    indicator: 'i02',
    moduleId: 'm15',
    topic: 'Integrador: trazabilidad y razonamiento sobre el expediente',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'En una revisión se advierte que un expediente no permite reconstruir el orden de las actuaciones: hay documentos sin folio, anexos sin fecha de incorporación y versiones duplicadas del mismo oficio. Desde la lógica de la gestión documental, ¿cuál es la consecuencia más importante de esa situación?',
    options: [
      'El expediente ocupa más espacio físico del necesario.',
      'No es posible establecer con certeza qué actuación se produjo primero ni qué documento sirvió de base a cada decisión, lo que afecta la trazabilidad de la actuación administrativa.',
      'El funcionario encargado deberá volver a redactar todos los oficios.',
      'La entidad deberá digitalizar el expediente y destruir el original.',
    ],
    correct: 1,
    justification:
      'La trazabilidad es la capacidad de reconstruir la historia de una actuación: quién hizo qué, cuándo y con base en qué documento. La foliación consecutiva, el registro de radicación y la incorporación ordenada de anexos existen precisamente para permitir esa reconstrucción. Sin ellos, el expediente conserva los papeles pero pierde su valor probatorio y de control.',
    wrong: [
      'El volumen del expediente es un problema de espacio, no la consecuencia relevante: lo que se pierde es la capacidad de reconstruir la actuación.',
      '',
      'Rehacer los oficios no resuelve el problema de trazabilidad de lo ya actuado y supondría alterar documentos que forman parte del expediente.',
      'La digitalización puede aportar, pero no autoriza a destruir el original ni subsana por sí sola la falta de foliación y de registro.',
    ],
    source: 'Principios de gestión documental y trazabilidad, desarrollados en el módulo 2 de la plataforma.',
  },
  {
    id: 'q-m15-004',
    indicator: 'i11',
    moduleId: 'm15',
    topic: 'Integrador: decisión con base en datos',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Los datos de un punto de atención muestran: solicitudes recibidas por ventanilla, 400; por canal virtual, 250; por teléfono, 150. De las recibidas por ventanilla, el 30 por ciento correspondía a trámites que solo pueden realizarse en línea. ¿Qué conclusión se sigue de los datos?',
    options: [
      'El canal virtual es el menos utilizado, por lo que debería suprimirse.',
      'El 12 por ciento del total de solicitudes recibidas por ventanilla correspondía a trámites que podían haberse realizado en línea.',
      '120 solicitudes atendidas en ventanilla correspondían a trámites que solo pueden realizarse en línea.',
      'El teléfono es el canal con mayor demanda relativa.',
    ],
    correct: 2,
    justification:
      'Paso 1: el 30 por ciento de 400 es 120. Paso 2: esas 120 solicitudes recibidas por ventanilla correspondían a trámites que solo pueden realizarse en línea; es decir, el ciudadano acudió al canal presencial para un trámite que debía tramitar por el canal virtual. Paso 3: la única opción que reproduce correctamente el cálculo es la que indica 120, y las demás alteran el dato o el universo sobre el que se calcula.',
    wrong: [
      'El canal virtual tiene 250 solicitudes, más que el teléfono; además los datos no permiten concluir que deba suprimirse un canal de atención.',
      'El 12 por ciento surge de relacionar 120 con 1.000, pero la pregunta se refiere a las solicitudes recibidas por ventanilla, cuyo total es 400: la proporción es del 30 por ciento.',
      '',
      'El teléfono, con 150 solicitudes, es el canal con menor demanda absoluta entre los tres, no el mayor.',
    ],
    source: 'Elaboración propia de la plataforma. Datos hipotéticos con solución única verificada por cálculo porcentual.',
  },
  {
    id: 'q-m15-005',
    indicator: 'i10',
    moduleId: 'm15',
    topic: 'Integrador: procedimiento y trato con el contribuyente',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'En el desarrollo de una actuación de verificación, un contribuyente se muestra alterado, interrumpe la diligencia y afirma que la entidad «ya decidió sancionarlo». Usted debe continuar con la actuación conforme al procedimiento. ¿Qué conducta integra correctamente el cumplimiento del procedimiento con los principios de la actuación administrativa?',
    options: [
      'Suspender la diligencia para evitar que el contribuyente siga alterando el orden.',
      'Continuar la actuación conforme a las etapas previstas, permitiendo que el contribuyente exponga sus argumentos y explicándole en lenguaje claro en qué consiste la actuación, qué se espera de él y qué derechos puede ejercer.',
      'Informarle que, si insiste en su actitud, la sanción será mayor.',
      'Dar por terminada la diligencia y dejar constancia de que el contribuyente se negó a colaborar.',
    ],
    correct: 1,
    justification:
      'La actuación administrativa se rige por los principios de debido proceso, igualdad, imparcialidad y buena fe, y su finalidad incluye el respeto de los derechos de los administrados. La conducta correcta combina las dos dimensiones: se cumple el procedimiento en sus etapas y, al mismo tiempo, se garantiza la participación del interesado con información clara, sin convertir la diligencia en un intercambio de amenazas.',
    wrong: [
      'Suspender la diligencia por la actitud del contribuyente desconoce que el procedimiento tiene etapas y términos, y que la Administración debe agotarlas.',
      '',
      'Anunciar una sanción mayor por la actitud del contribuyente sugiere un uso sancionatorio de la actuación y contradice la imparcialidad que debe regirla.',
      'Dar por terminada la diligencia con la constancia de no colaboración sustituye el procedimiento previsto y afecta el derecho de defensa.',
    ],
    source: 'Principios de la actuación administrativa (Ley 1437 de 2011, arts. 5 a 8) y módulo 6 de la plataforma. Escenario hipotético.',
  },
  {
    id: 'q-m15-006',
    indicator: 'i12',
    moduleId: 'm15',
    topic: 'Integrador: adaptación al cambio sin perder el servicio',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'En plena temporada de alta demanda, la entidad implementa un nuevo aplicativo para consultar el estado de los trámites, con un tiempo de aprendizaje de varios días. Los ciudadanos ya están en la fila. ¿Qué conducta integra la adaptabilidad al cambio con el compromiso de servicio?',
    options: [
      'Pedir a los ciudadanos que regresen cuando los funcionarios dominen el nuevo aplicativo.',
      'Usar la herramienta anterior mientras se aprende la nueva, para no hacer esperar a los ciudadanos.',
      'Implementar el aplicativo, y mientras se alcanza destreza en su uso, apoyarse en las alternativas disponibles y en el trabajo del equipo para atender a los ciudadanos dentro de los tiempos, informando con claridad cuando una consulta tome más tiempo.',
      'Atender solo los casos urgentes hasta que la transición termine.',
    ],
    correct: 2,
    justification:
      'La Adaptabilidad de nivel 1 exige poner en marcha los cambios propuestos e integrar las nuevas herramientas para cumplir con la labor, y el Compromiso exige prestar un servicio ágil, amable y de calidad sin ignorar a los ciudadanos. La opción elegida implementa el cambio y, al mismo tiempo, sostiene el servicio durante la curva de aprendizaje apelando a los recursos disponibles.',
    wrong: [
      'Remitir a los ciudadanos a otro momento traslada al usuario el costo de una transición interna.',
      'Mantener la herramienta anterior suspende de hecho la implementación del cambio dispuesto por la entidad.',
      '',
      'Atender solo los casos urgentes deja sin servicio a la mayoría y no es una conducta de adaptación, sino de reducción del alcance.',
    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Adaptabilidad nivel 1) y Código de Integridad del Servicio Público (Compromiso).',
  },
  {
    id: 'q-m15-007',
    indicator: 'i19',
    moduleId: 'm15',
    topic: 'Integrador: atención a población en condición de vulnerabilidad',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Se acerca a la ventanilla una persona de edad avanzada que manifiesta dificultades para leer y para desplazarse, y que debe realizar un trámite que habitualmente se adelanta en línea. ¿Qué conducta corresponde a la orientación al usuario y al ciudadano?',
    options: [
      'Indicarle que el trámite solo se realiza en línea y que debe pedir ayuda a un familiar.',
      'Adelantar el trámite en el punto de atención aun cuando el procedimiento exija el canal virtual, para no someter a la persona a un desplazamiento adicional.',
      'Explicarle con paciencia y lenguaje sencillo cuál es el canal dispuesto, acompañarla en lo que esté al alcance para que pueda completar el trámite y señalarle los canales de atención disponibles para personas en su condición.',
      'Sugerirle que presente un derecho de petición para que se le autorice el trámite presencial.',
    ],
    correct: 2,
    justification:
      'La definición de la competencia exige entender y satisfacer las necesidades del ciudadano según las políticas públicas y los estándares establecidos, y su nivel 1 exige escuchar, brindar soluciones aplicando los protocolos y mostrar disposición, amabilidad y respeto. La conducta esperada orienta y acompaña dentro del marco institucional, sin desconocerlo ni dejar sola a la persona. El valor de Justicia refuerza esta lectura: reconocer y proteger los derechos de cada persona de acuerdo con sus necesidades y condiciones.',
    wrong: [
      'Remitir a un familiar sin más desconoce la escucha activa y la disposición de servicio que la competencia exige.',
      'Adelantar el trámite por fuera del canal previsto satisface al usuario al margen de las políticas y procedimientos que la propia definición incorpora como límite.',
      '',
      'Promover un derecho de petición como primera respuesta traslada a la persona una carga adicional en lugar de orientarla.',
    ],
    source: 'Resolución 65 de 2024 de la DIAN (Orientación al usuario y al ciudadano, nivel 1) y Código de Integridad del Servicio Público (Justicia). Escenario hipotético.',
  },
  {
    id: 'q-m15-008',
    indicator: 'i17',
    moduleId: 'm15',
    topic: 'Integrador: lenguaje claro con el contribuyente',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un contribuyente de un municipio pequeño recibe un requerimiento con lenguaje técnico y llama para preguntar qué debe hacer. No conoce la terminología tributaria y el término está corriendo. ¿Qué conducta corresponde al nivel 2 de Comunicación efectiva?',
    options: [
      'Leerle el requerimiento en voz alta para que identifique por sí mismo las instrucciones.',
      'Indicarle que contrate un contador, porque la entidad no presta asesoría personalizada.',
      'Adaptar su discurso al interlocutor: explicarle en lenguaje sencillo qué se le solicita, para qué se requiere, qué plazo tiene y cómo puede responder, confirmando al final que comprendió y ofreciéndole los canales de atención disponibles.',
      'Remitirle un oficio con la misma información técnica, para que quede constancia escrita de la respuesta.',
    ],
    correct: 2,
    justification:
      'El nivel 2 de Comunicación efectiva se define por comunicarse «de forma clara y concisa, de acuerdo con el tipo de interlocutor», y sus conductas incluyen «adapta su discurso y canal de acuerdo con el tipo de interlocutor». Explicar en lenguaje sencillo, verificar la comprensión y ofrecer canales de atención es exactamente esa adaptación, y sostiene el ejercicio del derecho de defensa del contribuyente.',
    wrong: [
      'Repetir el texto técnico en voz alta no adapta el discurso al interlocutor: reproduce la barrera que impide comprender.',
      'Remitir a un contador puede ser una opción legítima del ciudadano, pero como respuesta institucional desatiende la necesidad de información que la entidad debe satisfacer.',
      '',
      'Responder con otro oficio técnico mantiene el mismo lenguaje que generó la duda y no verifica comprensión.',
    ],
    source: 'Resolución 65 de 2024 de la DIAN (Comunicación efectiva, nivel 2) y Ley 1712 de 2014 sobre información comprensible. Escenario hipotético.',
  },
  {
    id: 'q-m15-009',
    indicator: 'i15',
    moduleId: 'm15',
    topic: 'Integrador: integridad frente a terceros',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un proveedor que contrata con la entidad ofrece al equipo de trabajo una capacitación gratuita con refrigerio en sus instalaciones, en vísperas de la evaluación de un contrato en curso. Un compañero considera que no hay problema porque es «solo una capacitación». ¿Qué conducta corresponde al nivel 4 de Comportamiento ético?',
    options: [
      'Aceptar la invitación, dejando constancia de que se trata de una actividad académica sin relación con la evaluación del contrato.',
      'Guardar silencio para no contrariar al equipo y no asistir personalmente a la actividad.',
      'Plantear al equipo que la aceptación puede comprometer la apariencia de imparcialidad, proponer que la capacitación se reciba por los canales institucionales o se realice sin patrocinio del contratista, y sostener esa práctica en el grupo.',
      'Informar a la Oficina de Control Interno que un compañero pretende recibir un beneficio indebido.',
    ],
    correct: 2,
    justification:
      'El nivel 4 de Comportamiento ético exige estructurar, fomentar y aplicar estrategias sobre la base de valores institucionales, y sus conductas incluyen promover la práctica del código de integridad en los equipos y ser referente por el propio comportamiento. Además, el valor de Honestidad prohíbe aceptar incentivos, favores o beneficios de personas o grupos interesados en un proceso de toma de decisiones. Proponer una alternativa institucional y sostenerla en el equipo reúne las dos dimensiones.',
    wrong: [
      'Dejar constancia no elimina el conflicto: el beneficio proviene de quien está siendo evaluado por la entidad.',
      'El silencio y la abstención personal permiten que la práctica continúe y no corresponde a quien debe fomentar el código en su equipo.',
      '',
      'Reportar a un compañero por una propuesta que aún no se ha ejecutado, sin gestión previa en el equipo, es desproporcionado y no fomenta la práctica.',
    ],
    source: 'Resolución 65 de 2024 de la DIAN (Comportamiento ético, nivel 4) y Código de Integridad del Servicio Público (Honestidad). Escenario hipotético.',
  },
  {
    id: 'q-m15-010',
    indicator: 'i21',
    moduleId: 'm15',
    topic: 'Integrador: decisiones del equipo y actitud de nivel 3',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'En una reunión de equipo se adopta, por mayoría, una decisión sobre la distribución de tareas con la que usted no está de acuerdo. La decisión es procedente y no vulnera ninguna norma. ¿Qué conducta corresponde al nivel 3 de Trabajo en equipo?',
    options: [
      'Acatar la decisión, pero dejar constancia por escrito de que no la comparte, para proteger su responsabilidad.',
      'Adoptar una actitud proactiva, receptiva y abierta frente a la decisión, y aportar para que se implemente bien, dejando sus observaciones en el espacio del equipo si más adelante resultan útiles.',
      'Solicitar que la decisión se someta a votación nuevamente en la siguiente reunión.',
      'Cumplir su parte sin involucrarse en el seguimiento, para no asumir responsabilidad por un resultado que no comparte.',
    ],
    correct: 1,
    justification:
      'El nivel 3 de Trabajo en equipo incluye expresamente «demuestra una actitud proactiva, receptiva y abierta frente a las decisiones adoptadas por el equipo». No se exige estar de acuerdo: se exige aportar a la implementación y cuidar el clima, dejando las observaciones por los canales del equipo en lugar de resistir la decisión.',
    wrong: [
      'Dejar constancia de la falta de acuerdo antes de implementar es una forma de desmarcarse que debilita el compromiso con la decisión colectiva.',
      '',
      'Reabrir una votación ya adoptada sin hechos nuevos desgasta al equipo y no aporta a la implementación.',
      'Cumplir sin involucrarse deja al equipo sin el aporte de uno de sus integrantes y contradice la actitud proactiva y receptiva que el nivel 3 describe.',
    ],
    source: 'Resolución 65 de 2024 de la DIAN (Trabajo en equipo, nivel 3). Escenario hipotético.',
  },
  {
    id: 'q-m15-011',
    indicator: 'i24',
    moduleId: 'm15',
    topic: 'Integrador: transparencia de la información',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Usted participa en la elaboración del informe trimestral de resultados del área. Los indicadores de gestión muestran dos metas alcanzadas y una con retraso. Se le sugiere presentar únicamente las metas alcanzadas y mencionar la tercera «cuando se recupere». ¿Qué conducta corresponde al valor de Honestidad?',
    options: [
      'Presentar solo las metas alcanzadas, ya que el informe es un instrumento de gestión y no un documento de rendición de cuentas.',
      'Presentar los resultados completos, incluida la meta con retraso, y sustentar las causas y las acciones previstas para recuperarla.',
      'Incluir la meta con retraso en un anexo, sin mencionarla en el cuerpo del informe.',
      'Preguntar al jefe inmediato qué versión presentar, para actuar conforme a su instrucción.',
    ],
    correct: 1,
    justification:
      'La Honestidad exige actuar siempre con fundamento en la verdad y facilitar el acceso a la información pública completa, veraz, oportuna y comprensible. Presentar los resultados completos con sus causas y acciones de mejora mantiene la información fiel y útil para decidir, que es el propósito de un informe de gestión.',
    wrong: [
      'Un informe de gestión alimenta decisiones: omitir un resultado desfavorable impide que la entidad actúe sobre él y afecta la veracidad de la información.',
      '',
      'Trasladar la meta a un anexo mantiene la omisión en el cuerpo principal y dificulta advertir el retraso.',
      'Delegar la decisión en el jefe no exime de la obligación de reportar con veracidad: el valor es exigible al servidor que elabora el informe.',
    ],
    source: 'Código de Integridad del Servicio Público (Función Pública), valor de Honestidad, y Ley 1712 de 2014. Escenario hipotético.',
  },
  {
    id: 'q-m15-012',
    indicator: 'i25',
    moduleId: 'm15',
    topic: 'Integrador: igualdad de trato entre usuarios',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Dos usuarios presentan solicitudes equivalentes el mismo día. Uno es una empresa reconocida de la región, con un representante que insiste en la urgencia; el otro es un pequeño comerciante que presentó su solicitud sin acompañamiento profesional. ¿Qué conducta corresponde al valor de Justicia?',
    options: [
      'Atender primero la solicitud de la empresa, porque su caso tiene mayor impacto económico en la región.',
      'Atender primero la solicitud del pequeño comerciante, para compensar la desventaja en que se encuentra.',
      'Aplicar a ambas solicitudes los mismos criterios de análisis, oportunidad y respuesta, sin que el tamaño, la capacidad económica o la presión del interesado alteren el orden ni el contenido de las decisiones.',
      'Solicitar al jefe inmediato un criterio de priorización para decidir cuál atender primero.',
    ],
    correct: 2,
    justification:
      'La Justicia exige actuar con imparcialidad y garantizar los derechos de las personas con equidad, igualdad y sin discriminación, y prohíbe favorecer el punto de vista de un grupo de interés sin tener en cuenta a todos los actores, así como permitir que presiones o intereses interfieran en el criterio. Aplicar los mismos criterios a solicitudes equivalentes es la conducta que expresa el valor.',
    wrong: [
      'Priorizar por el impacto económico o por la insistencia del interesado es precisamente favorecer a un grupo de interés.',
      'Invertir la prioridad para compensar una desventaja tampoco aplica criterios objetivos: la equidad no autoriza a alterar las reglas del procedimiento.',
      '',
      'Trasladar la decisión a un tercero no resuelve el punto: el criterio de igualdad ya está definido por la norma y por el valor.',
    ],
    source: 'Código de Integridad del Servicio Público (Función Pública), valor de Justicia. Escenario hipotético.',
  },
  {
    id: 'q-m15-013',
    indicator: 'i26',
    moduleId: 'm15',
    topic: 'Integrador: respeto ante opiniones distintas',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'En una reunión de trabajo un compañero expone una propuesta que, en su criterio, es equivocada y puede generar retrasos. Él ha escuchado con atención su posición. ¿Qué conducta corresponde al valor de Respeto?',
    options: [
      'Expresar su desacuerdo con argumentos y buen trato, sin descalificar a la persona ni su trabajo, y buscar con el equipo la alternativa que mejor sirva al objetivo.',
      'Señalar ante el grupo que la propuesta demuestra falta de experiencia.',
      'Abstenerse de opinar para no generar conflicto y acatar lo que decida la mayoría.',
      'Solicitar que la propuesta se evalúe por el jefe, dado que el compañero no tiene la formación necesaria para valorarla.',
    ],
    correct: 0,
    justification:
      'El Respeto se define como reconocer, valorar y tratar de manera digna a todas las personas y supone estar «abierto al diálogo y a la comprensión a pesar de perspectivas y opiniones distintas», exponiendo con argumentos la posición propia de manera noble. Discrepar con argumentos y buen trato expresa el valor sin renunciar al criterio técnico.',
    wrong: [
      '',
      'Calificar al compañero por su experiencia es una descalificación a la persona y no un argumento: es la conducta que el valor prohíbe.',
      'Callar para evitar el conflicto entrega el objetivo del equipo y no es respeto, sino evitación.',
      'Trasladar la evaluación al jefe por la supuesta falta de formación del compañero reproduce la descalificación personal.',
    ],
    source: 'Código de Integridad del Servicio Público (Función Pública), valor de Respeto, y Ley 1952 de 2019 sobre deberes de los servidores. Escenario hipotético.',
  },
  {
    id: 'q-m15-014',
    indicator: 'i23',
    moduleId: 'm15',
    topic: 'Integrador: priorización y gestión del tiempo',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Al iniciar la jornada usted tiene cuatro actuaciones pendientes: una con término que vence hoy y requiere dos horas; una con término que vence mañana y requiere tres horas; una solicitud de un compañero que no tiene término asociado; y una reunión convocada por su jefe para la última hora de la jornada. ¿Qué distribución es coherente con el valor de Diligencia?',
    options: [
      'Atender en el orden en que llegaron las actuaciones, para no alterar el turno.',
      'Comenzar por la más extensa, para asegurarse de terminarla, y dejar la más urgente para el final.',
      'Priorizar la actuación cuyo término vence hoy, programar la del día siguiente y la reunión en el horario previsto, y atender la solicitud sin término en los espacios disponibles o acordar con el compañero un momento para revisarla.',
      'Delegar la actuación urgente en un compañero, para atender personalmente la reunión convocada.',
    ],
    correct: 2,
    justification:
      'La Diligencia exige cumplir los deberes con atención, prontitud, destreza y eficiencia y no postergar las decisiones ni actividades que hagan parte del funcionamiento del cargo. Priorizar por el vencimiento de los términos, mantener los compromisos ya programados y no dejar sin atención ninguna solicitud es la distribución que respeta los tiempos estipulados y usa de forma razonable la jornada.',
    wrong: [
      'Atender por orden de llegada puede provocar el vencimiento de un término, que es el criterio de mayor peso en la gestión pública.',
      'Empezar por la tarea más extensa desconoce el término que vence hoy, con consecuencias jurídicas concretas.',
      '',
      'Trasladar la actuación urgente a un compañero le impone una carga y un riesgo que corresponden al titular del caso.',
    ],
    source: 'Código de Integridad del Servicio Público (Función Pública), valor de Diligencia. Escenario hipotético con solución única.',
  },
  {
    id: 'q-m15-015',
    indicator: 'i18',
    moduleId: 'm15',
    topic: 'Integrador: cumplimiento de metas y estándares de calidad',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'A tres días del cierre del trimestre, usted tiene pendientes de verificación ocho casos y la meta del área es verificar doce. La verificación de cada caso toma aproximadamente una jornada. ¿Qué conducta corresponde al nivel 1 de Orientación al logro?',
    options: [
      'Registrar la verificación de los ocho casos sin completarla, para que la meta del área se cumpla.',
      'Informar que no alcanzará la meta y esperar instrucciones.',
      'Organizar y controlar su trabajo para verificar los casos que efectivamente alcance en el tiempo disponible, asegurando la calidad de cada verificación, e informar con antelación a quien corresponda el avance real y las razones del faltante.',
      'Solicitar apoyo a un compañero para que verifique los casos que no alcance a atender.',
    ],
    correct: 2,
    justification:
      'El nivel 1 de Orientación al logro exige cumplir con lo solicitado en los tiempos previstos y con los recursos asignados, organizar y controlar el propio trabajo para incrementar la productividad y responsabilizarse por el logro de los objetivos y actividades propias. La opción elegida organiza el trabajo, preserva el estándar de calidad exigido por la definición de la competencia y asume la responsabilidad de informar el avance real con oportunidad.',
    wrong: [
      'Registrar verificaciones no realizadas falsea la información de gestión y vulnera el estándar de calidad: la meta se cumple en apariencia, no en los hechos.',
      'Informar y esperar instrucciones sin desplegar ninguna acción desconoce la organización y el control del propio trabajo.',
      '',
      'Trasladar los casos a un compañero sin coordinar con el equipo traslada también la responsabilidad que el nivel 1 exige asumir.',
    ],
    source: 'Resolución 65 de 2024 de la DIAN (Orientación al logro, nivel 1). Escenario hipotético.',
  },
]
