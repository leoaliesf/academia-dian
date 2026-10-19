import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 14 (i12 a i26)
// Competencias comportamentales y valores: preguntas de JUICIO
// SITUACIONAL. En cada ítem la opción correcta es la que mejor
// refleja el comportamiento esperado SEGÚN LA COMPETENCIA Y EL
// NIVEL indicados; las demás opciones son conductas plausibles
// pero de nivel inferior, evasivas, reactivas o contrarias a la
// ficha oficial.
// Este tema NO está desarrollado en los PDF de estudio. Las
// definiciones y conductas provienen de la Resolución 65 de 2024
// de la DIAN (Diccionario de Competencias Comportamentales) y del
// Código de Integridad del Servicio Público, verificados el
// 2026-10-15. Los escenarios son hipotéticos, ambientados en el
// contexto de la DIAN, y no reproducen casos reales.
// Nota: wrong[] tiene una entrada por opción (4), en el mismo
// orden de options[]; la posición de la opción correcta queda
// vacía porque la interfaz la omite.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m14-001',
    indicator: 'i12',
    moduleId: 'm14',
    topic: 'Adaptabilidad nivel 1: implementación de cambios',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'La entidad puso en funcionamiento un nuevo módulo del sistema para registrar las actuaciones. Usted ya conoce el módulo, pero varios compañeros de su grupo continúan registrando en la hoja de cálculo anterior porque les parece más rápida. ¿Qué conducta corresponde al nivel 1 de Adaptabilidad?',
    options: [
      'Seguir registrando en la hoja de cálculo anterior hasta que la entidad vuelva obligatorio el nuevo módulo, para no duplicar trabajo.',
      'Registrar sus actuaciones en el nuevo módulo desde su puesta en funcionamiento, aprendiendo su uso y ajustando su rutina a la herramienta dispuesta por la entidad.',
      'Solicitar por escrito una autorización para mantener el registro anterior hasta que el nuevo módulo demuestre ser más eficiente.',
      'Esperar una instrucción personal de su jefe antes de modificar su forma de trabajo.',
    ],
    correct: 1,
    justification:
      'El nivel 1 de Adaptabilidad comprende «pone en marcha los cambios que le son propuestos en sus objetivos laborales» e «integra con facilidad nuevas perspectivas, aprendizajes y tecnologías que le permitan cumplir con su labor». El nuevo módulo es un cambio dispuesto por la organización: la conducta esperada es implementarlo y ajustar la propia rutina, sin condicionarlo a demostraciones de eficiencia ni a una instrucción individual.',
    wrong: [
      'Condiciona el cumplimiento a que el cambio sea obligatorio y mantiene una práctica que la entidad ya reemplazó: es resistencia al cambio, aunque se justifique en la carga de trabajo.',
      '',
      'Supedita la implementación a una autorización y a una demostración previa de eficiencia: la conducta del nivel 1 es poner en marcha el cambio, no negociarlo.',
      'Esperar una instrucción personal es una omisión: el cambio ya fue propuesto por la organización y aceptarlo con disposición es la conducta observable del nivel 1.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 1 de Adaptabilidad. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-002',
    indicator: 'i12',
    moduleId: 'm14',
    topic: 'Adaptabilidad nivel 1: nuevos procedimientos',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una resolución modifica el formato de respuesta a los requerimientos e incorpora dos secciones adicionales. Usted considera que el nuevo formato aumenta el tiempo de redacción sin mejorar la calidad de la respuesta. ¿Qué hace conforme al nivel 1 de Adaptabilidad?',
    options: [
      'Aplicar el nuevo formato en sus respuestas, ajustando su forma de trabajo al procedimiento vigente y manifestando su observación por los canales dispuestos para ello.',
      'Mantener el formato anterior porque, en su criterio técnico, el nuevo incrementa los tiempos sin mejorar la calidad.',
      'Aplicar el nuevo formato únicamente en los casos de mayor cuantía, para reducir el impacto en su carga de trabajo.',
      'Solicitar a su superior que autorice al grupo a seguir usando el formato anterior mientras se evalúa el nuevo.',
    ],
    correct: 0,
    justification:
      'La Adaptabilidad exige modificar la conducta y las formas de trabajo conforme a los objetivos institucionales. Aplicar el nuevo formato es la puesta en marcha del cambio propuesto, y la observación técnica se canaliza en los espacios previstos, sin que ello suspenda su aplicación. Esto corresponde al nivel 1: comprender la perspectiva institucional y ajustar el accionar al contexto vigente.',
    wrong: [
      '',
      'Mantener el formato anterior sustituye la decisión institucional por un criterio propio: es la conducta contraria a la competencia, incluso si la observación técnica es razonable.',
      'Aplicar el formato solo en algunos casos genera actuaciones heterogéneas y desconoce el cambio en la parte que resulta más cómoda.',
      'Solicitar autorización para no aplicar la resolución convierte la adaptación en una excepción condicionada, que no corresponde al nivel 1.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 1 de Adaptabilidad. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-003',
    indicator: 'i13',
    moduleId: 'm14',
    topic: 'Adaptabilidad nivel 2: nuevas evidencias',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'En una reunión de área usted sostiene que una validación manual es indispensable para el control. Un superior presenta los datos de los últimos seis meses, que muestran que el sistema automatizado detecta los mismos casos y reduce el tiempo de respuesta. El equipo está dividido. ¿Qué conducta corresponde al nivel 2 de Adaptabilidad?',
    options: [
      'Mantener su posición, porque los datos de seis meses no cubren todos los escenarios posibles y el control tributario no admite ningún riesgo.',
      'Aceptar el cambio sin analizarlo, para no generar discusión con el superior y evitar que el equipo se divida.',
      'Solicitar que el tema se decida en otra reunión y abstenerse de pronunciarse, para no comprometer su posición ante el equipo.',
      'Reconocer los datos, revaluar su propia certeza y apoyar la implementación del cambio, aportando para que el control se mantenga donde efectivamente se requiere.',
    ],
    correct: 3,
    justification:
      'El nivel 2 de Adaptabilidad se describe como «revalúa la seguridad que le dan sus certezas, modificando su actuar en consonancia con los nuevos argumentos organizacionales», y sus conductas incluyen «evalúa las distintas posturas, mostrando apertura para ajustar su accionar ante nuevas evidencias o posibilidades» y «apoya y promueve los cambios en las dinámicas laborales». Reconocer los datos, revisar la posición propia y aportar a la implementación es exactamente esa conducta.',
    wrong: [
      'Usar la insuficiencia parcial de la evidencia para no modificar el propio actuar es precisamente lo contrario a revaluar las certezas ante nuevos argumentos.',
      'Aceptar sin analizar no es adaptabilidad de nivel 2: esa conducta omite la evaluación de posturas y el entendimiento sistémico del cambio.',
      'Posponer la decisión y no pronunciarse equivale a no evaluar las posturas ni apoyar el cambio; el nivel 2 exige una actitud activa.',
      '',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 2 de Adaptabilidad. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-004',
    indicator: 'i13',
    moduleId: 'm14',
    topic: 'Adaptabilidad nivel 2: entendimiento sistémico del cambio',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'La entidad dispone que el reporte de gestión del área se elabore ahora por indicadores y no por actividades, con una metodología definida. Varios compañeros consideran que la nueva metodología les duplica el trabajo. ¿Cuál es la conducta esperada en el nivel 2 de Adaptabilidad?',
    options: [
      'Cumplir con la nueva metodología en su parte y evitar referirse al tema cuando los compañeros se quejan, para no afectar el clima.',
      'Señalar al equipo que la decisión se tomó en otro nivel y que no hay nada que discutir.',
      'Entender el propósito del cambio, aplicar la metodología y las herramientas dispuestas por la organización, y apoyar su implementación en los espacios de trabajo del equipo.',
      'Proponer que se mantenga la metodología anterior para las tareas urgentes y que la nueva se aplique solo a las ordinarias.',
    ],
    correct: 2,
    justification:
      'El nivel 2 incluye «se esfuerza por entender de manera sistémica los cambios y aplica las metodologías y herramientas que propone la organización para facilitar su adaptación» y «apoya y promueve los cambios en las dinámicas laborales y trabaja para llevarlos a cabo». Entender el propósito, aplicar la metodología y sostenerla en el equipo reúne las dos conductas.',
    wrong: [
      'Cumplir en lo individual y callar ante el equipo evidencia a lo sumo una adaptación de nivel 1: no hay esfuerzo por entender el cambio de manera sistémica ni por promoverlo.',
      'Escudarse en el origen jerárquico de la decisión no es entender el cambio ni apoyarlo: es una forma de desentenderse de su implementación.',
      '',
      'Segmentar la aplicación de la metodología desnaturaliza el cambio y lo subordina a una evaluación propia de conveniencia, propia de una adaptación incompleta.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 2 de Adaptabilidad. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-005',
    indicator: 'i14',
    moduleId: 'm14',
    topic: 'Comportamiento ético nivel 1: cumplimiento del código',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Su superior le pide agilizar un trámite que aún no cuenta con la totalidad de los soportes exigidos por la norma, indicándole que el interesado es una persona confiable y que los documentos llegarán después. ¿Qué conducta corresponde al nivel 1 de Comportamiento ético?',
    options: [
      'Tramitar el caso como se lo piden, dejando constancia en el sistema de que actuó por instrucción del superior, porque la responsabilidad recaería en quien dio la orden.',
      'Negarse de manera terminada a realizar cualquier gestión relacionada con el caso, porque sin todos los soportes exigidos no existe actuación posible.',
      'Realizar la parte de la gestión que es procedente con los soportes existentes y, si falta un requisito de ley, señalarle la situación al superior y buscar orientación en las instancias competentes antes de resolver.',
      'Comentarle la situación a un compañero para que sea él quien advierta al superior, y así evitar un conflicto directo con quien dio la instrucción.',
    ],
    correct: 2,
    justification:
      'El nivel 1 de Comportamiento ético consiste en desarrollar el trabajo «a la luz del código de integridad institucional», demostrando integridad y siendo consciente del impacto de la propia actuación. La opción elegida mantiene la actuación dentro de la norma, advierte al superior y busca orientación en las instancias pertinentes, que es la conducta que el propio Código de Integridad recomienda cuando surgen dudas sobre la aplicación de los deberes.',
    wrong: [
      'Dejar constancia de la instrucción no vuelve conforme al código una actuación que carece de soportes: traslada la responsabilidad sin evitar el riesgo.',
      'Negarse de manera terminada desconoce que existe una parte procedente y prescinde de los canales institucionales de orientación.',
      '',
      'Trasladar la advertencia a un tercero convierte una obligación propia en un rumor de oficina y diluye la responsabilidad del servidor.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales) y Código de Integridad del Servicio Público. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-006',
    indicator: 'i14',
    moduleId: 'm14',
    topic: 'Comportamiento ético nivel 1: errores propios',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Al revisar su trabajo, advierte que en una liquidación ya notificada incluyó un dato equivocado que reduce el valor a cargo del contribuyente. El error es suyo y nadie lo ha advertido. ¿Qué conducta corresponde al nivel 1 de Comportamiento ético?',
    options: [
      'Corregir el dato en el sistema sin informar, para evitar el registro negativo en su evaluación.',
      'Esperar a que el contribuyente presente un recurso para corregir el caso en esa oportunidad.',
      'Informar el error por los canales internos y adelantar la corrección conforme al procedimiento aplicable.',
      'Comentarlo con un compañero de confianza para establecer si vale la pena reportarlo.',
    ],
    correct: 2,
    justification:
      'El nivel 1 exige conocer y aplicar el código de integridad y demostrar integridad en el ejercicio de las tareas. El Código de Integridad del Servicio Público, en el valor de Honestidad, incluye decir siempre la verdad incluso cuando se cometen errores, porque es humano equivocarse pero no es correcto esconderlos, y no ser descuidado con la información a cargo. Informar y corregir por el canal institucional es la conducta esperada.',
    wrong: [
      'Corregir sin informar oculta el error: es precisamente la conducta que el Código descarta al señalar que no es correcto esconder los errores.',
      'Esperar el recurso del contribuyente traslada a un tercero la corrección de un error propio y posterga indebidamente una decisión.',
      '',
      'Someter a consideración de un compañero algo que el código ya define diluye la responsabilidad y convierte la decisión en una consulta informal.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN y Código de Integridad del Servicio Público (valor de Honestidad). Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-007',
    indicator: 'i15',
    moduleId: 'm14',
    topic: 'Comportamiento ético nivel 4: fomento de prácticas',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'En su equipo se ha generalizado el uso compartido de credenciales de acceso al sistema, con el argumento de no bloquear el servicio cuando alguien se ausenta. Usted no participa en esa práctica, pero el mecanismo se usa abiertamente. ¿Qué conducta corresponde al nivel 4 de Comportamiento ético?',
    options: [
      'Abstenerse de usar credenciales ajenas y no referirse al tema, para no entrometerse en la forma de trabajar de los demás, pues cada funcionario responde por sus propios accesos.',
      'Reportar ante la oficina de control a cada compañero que haya usado credenciales ajenas, para que la entidad determine las responsabilidades individuales y aplique las sanciones que correspondan.',
      'Pedir al jefe inmediato que prohíba por escrito la práctica y esperar la instrucción para el equipo, pues la decisión sobre las prácticas del equipo corresponde a la jefatura.',
      'Promover en el equipo la adopción de una práctica de custodia de credenciales (uso individual, solicitud de permisos por los canales definidos y plan de contingencia para ausencias), sustentarla en el código de integridad y sostenerla con su ejemplo.',
    ],
    correct: 3,
    justification:
      'El nivel 4 se describe como «estructura, fomenta y aplica estrategias organizacionales sobre la base de valores institucionales» y sus conductas incluyen «promueve en los equipos de trabajo en que participa la práctica del código de integridad en todas las esferas de actuación» y «es referente en la organización por su comportamiento ético». Promover una práctica alternativa sostenible, fundada en el código y sostenida con el ejemplo, es la conducta del nivel 4.',
    wrong: [
      'No participar y callar es una conducta individual correcta, pero corresponde a niveles inferiores: el nivel 4 exige fomentar la práctica en el equipo.',
      'Reportar a cada compañero sin gestión previa no estructura ni fomenta una práctica: sustituye la construcción de la solución por la sanción individual.',
      'Delegar la solución en una prohibición del jefe no estructura ni promueve: traslada a un tercero la tarea del nivel 4.',
      '',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 4 de Comportamiento ético. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-008',
    indicator: 'i16',
    moduleId: 'm14',
    topic: 'Comunicación efectiva nivel 1: verificación de la comprensión',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'En la ventanilla explica a un ciudadano un procedimiento de tres pasos para completar su trámite. Al terminar, el ciudadano asiente con la cabeza y se dispone a retirarse, pero usted advierte que no tomó nota de nada. ¿Qué conducta corresponde al nivel 1 de Comunicación efectiva?',
    options: [
      'Dar por cumplida la atención, porque la información fue entregada de forma clara y el ciudadano afirmó haber entendido.',
      'Antes de que se retire, pedirle que le repita los pasos principales o confirmar con él los dos datos críticos del trámite, para asegurarse de que comprendió.',
      'Entregarle un folleto con los pasos y continuar con el siguiente usuario de la fila, para no retrasar la atención de los demás.',
      'Repetirle la explicación en voz más alta, por si no escuchó bien, cuidando que el resto de la fila también pueda oírla.',
    ],
    correct: 1,
    justification:
      'Una de las conductas observables del nivel 1 de Comunicación efectiva es «se asegura de que su interlocutor comprenda el mensaje». Verificar la comprensión no es redundante ni ofensivo: es la conducta que la ficha oficial identifica de manera expresa, y en la atención al ciudadano evita que el trámite fracase por una instrucción mal entendida.',
    wrong: [
      'Entregar la información no equivale a lograr la comprensión: la conducta observable exige verificarla.',
      '',
      'El folleto puede ayudar, pero entregarlo y continuar sin verificar comprensión omite la conducta del nivel 1.',
      'Subir el volumen parte de una hipótesis equivocada y no verifica nada; además puede resultar descortés con el ciudadano.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 1 de Comunicación efectiva. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-009',
    indicator: 'i16',
    moduleId: 'm14',
    topic: 'Comunicación efectiva nivel 1: preguntas adecuadas',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Necesita información de otra área para resolver un caso, pero el correo que envió hace tres días no obtuvo respuesta y el término está próximo a vencer. ¿Qué conducta corresponde al nivel 1 de Comunicación efectiva?',
    options: [
      'Escalar el caso al jefe inmediato para que el área responda por conducto jerárquico, dado que ya pasaron tres días sin respuesta.',
      'Reenviar el mismo correo, marcándolo como urgente y solicitando confirmación de lectura, para dejar constancia del segundo intento.',
      'Dirigirse al área y formular las preguntas concretas sobre la información que necesita, precisando para qué la requiere y el término que debe atender.',
      'Aplazar la tarea hasta recibir la información solicitada, informando del aplazamiento para que el término no se dé por vencido.',
    ],
    correct: 2,
    justification:
      'El nivel 1 incluye «realiza las preguntas adecuadas a fin de obtener la información que necesita, de acuerdo con la necesidad». La llamada o visita con preguntas precisas, contexto y plazo es la conducta que apunta directamente a obtener la información, y usa de manera adecuada las redes de contacto organizacionales manteniendo un diálogo respetuoso.',
    wrong: [
      'Escalar de inmediato sin haber precisado la necesidad agota una vía que puede reservarse para cuando la gestión directa no funciona.',
      'Reenviar el mismo mensaje sin precisar la necesidad repite el intento sin mejorar la comunicación.',
      '',
      'Aplazar la tarea deja vencer el término y no es una conducta de comunicación, sino una omisión.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 1 de Comunicación efectiva. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-010',
    indicator: 'i17',
    moduleId: 'm14',
    topic: 'Comunicación efectiva nivel 2: asertividad y adaptación del canal',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Debe informar a un funcionario de otra área que su solicitud de información será negada. Es un par suyo y sabe que la respuesta le resultará incómoda. ¿Qué conducta corresponde al nivel 2 de Comunicación efectiva?',
    options: [
      'Posponer la comunicación hasta encontrar una alternativa que permita darle una respuesta favorable, para no deteriorar la relación de trabajo.',
      'Comunicarle la decisión por un chat informal, para que el tema no trascienda en el área y no exponga al funcionario ante sus compañeros.',
      'Delegar la comunicación en un tercero, para preservar la relación de trabajo y evitar que el desacuerdo se convierta en un conflicto personal.',
      'Comunicarle la decisión con claridad y fundamento, escuchar sus argumentos e indicarle el canal previsto para revisar el caso si surge nueva evidencia.',
    ],
    correct: 3,
    justification:
      'El nivel 2 incluye «comunica con transparencia y asertividad, tanto los acuerdos como los desacuerdos» y «adapta su discurso y canal de acuerdo con el tipo de interlocutor». Informar una negativa con fundamento, escuchar y señalar la vía de revisión es la conducta asertiva y adaptada al interlocutor; la asertividad no consiste en evitar el desacuerdo, sino en expresarlo con claridad y respeto.',
    wrong: [
      'Posponer la comunicación para no dar una mala noticia es evitación, no asertividad, y además retrasa una decisión que afecta a otra área.',
      'Usar un canal informal para un asunto institucional desnaturaliza la comunicación y no adapta el canal al tipo de interlocutor ni al tema.',
      'Delegar la comunicación preserva la comodidad personal, pero incumple la conducta de comunicar con transparencia los desacuerdos.',
      '',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 2 de Comunicación efectiva. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-011',
    indicator: 'i18',
    moduleId: 'm14',
    topic: 'Orientación al logro nivel 1: organización del propio trabajo',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Le asignan tres tareas con el mismo plazo de entrega y con recursos limitados. A mitad de semana advierte que no podrá terminarlas todas con la calidad exigida. ¿Qué conducta corresponde al nivel 1 de Orientación al logro?',
    options: [
      'Priorizar según los objetivos asignados, reorganizar su tiempo y los recursos, aprovechar las herramientas tecnológicas disponibles y, si algún plazo está en riesgo, informarlo oportunamente a quien corresponda.',
      'Esperar hasta la fecha de entrega y reportar las tareas que no pudo terminar, para que la jefatura decida cómo redistribuirlas y se deje constancia de la carga asignada.',
      'Entregar las tres tareas por debajo del estándar, con tal de cumplir con la fecha, pues la puntualidad es el criterio principal que evalúa la competencia.',
      'Pedir a un compañero que asuma una de las tareas para no incumplir, comprometiéndose a asumir una de las suyas en la siguiente oportunidad.',
    ],
    correct: 0,
    justification:
      'El nivel 1 de Orientación al logro comprende «cumple con lo solicitado en los tiempos previstos y con los recursos que se le asignan», «realiza una adecuada organización y control de su propio trabajo para incrementar su productividad, haciendo buen uso de la tecnología» y «se responsabiliza por el logro de los objetivos y actividades propias». La opción elegida organiza y controla el trabajo propio, usa la tecnología y asume la responsabilidad de anticipar el riesgo.',
    wrong: [
      '',
      'Reportar el incumplimiento cuando ya ocurrió no es organizar ni controlar el propio trabajo, y desmiente la responsabilidad sobre los objetivos asignados.',
      'Cumplir el plazo incumpliendo el estándar contradice la propia definición de la competencia, que exige actuar bajo estándares de calidad establecidos.',
      'Trasladar una tarea a un compañero traslada también la responsabilidad, que el nivel 1 exige asumir sobre los objetivos propios.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 1 de Orientación al logro. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-012',
    indicator: 'i18',
    moduleId: 'm14',
    topic: 'Orientación al logro nivel 1: continuidad del servicio',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'A mitad de la jornada el sistema de gestión presenta una falla general. Usted tiene diez solicitudes pendientes de respuesta cuyos términos vencen en dos días y varias de ellas requieren consultar el sistema. ¿Qué conducta corresponde al nivel 1 de Orientación al logro?',
    options: [
      'Esperar a que el sistema se restablezca para retomar las labores, porque sin él no es posible avanzar y cualquier gestión quedaría incompleta.',
      'Reportar la falla por el canal interno, adelantar el trabajo que no depende del sistema, llevar el control de lo pendiente y preparar las respuestas para registrarlas cuando el servicio se restablezca.',
      'Solicitar que se suspendan los términos de las solicitudes mientras dure la falla, para no incurrir en incumplimientos ajenos a su voluntad.',
      'Trabajar horas adicionales al día siguiente, sin informar a nadie la situación, para recuperar el tiempo perdido y no afectar los términos pendientes.',
    ],
    correct: 1,
    justification:
      'La conducta esperada en el nivel 1 combina las tres conductas observables: reportar la falla es parte de la organización del propio trabajo, adelantar lo que no depende del sistema incrementa la productividad con los medios disponibles y llevar el control de lo pendiente hace responsable al servidor del logro de sus objetivos dentro de los tiempos previstos.',
    wrong: [
      'La espera pasiva desconoce la conducta de organizar y controlar el propio trabajo para incrementar la productividad.',
      '',
      'Solicitar la suspensión de términos supone una facultad que el servidor no tiene y traslada a otro la solución de un problema que puede gestionarse.',
      'Trabajar horas adicionales sin informar impide que se tomen medidas y no organiza el trabajo: la solución queda sujeta al esfuerzo personal y al azar.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 1 de Orientación al logro. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-013',
    indicator: 'i19',
    moduleId: 'm14',
    topic: 'Orientación al usuario nivel 1: límites de la atención',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un ciudadano que vive en un municipio lejano llega con un documento incompleto y solicita que se le reciba de todas formas, porque el término vence ese día. Se muestra visiblemente alterado. ¿Qué conducta corresponde al nivel 1 de Orientación al usuario y al ciudadano?',
    options: [
      'Recibir el documento incompleto para evitar que el ciudadano pierda el viaje, dejando constancia de la situación y de que los soportes faltantes se aportarán después.',
      'Indicarle que debe leer los requisitos publicados en la página web y continuar con el siguiente turno, para no retrasar la fila de atención.',
      'Explicarle con claridad que en esas condiciones no es posible recibirlo, indicarle qué debe completar, los canales disponibles para hacerlo y el efecto real del término, atendiéndolo con disposición y respeto.',
      'Sugerirle que presente una queja por la demora en la atención, para que quede constancia de su situación y la entidad revise el procedimiento.',
    ],
    correct: 2,
    justification:
      'La definición de la competencia exige entender y satisfacer las necesidades de los usuarios «según las políticas públicas, los estándares de calidad establecidos y las competencias institucionales», y su nivel 1 exige escuchar y atender «en forma objetiva y cordial», brindando soluciones conforme a los protocolos y mostrando disposición de servicio, amabilidad y respeto. La opción elegida mantiene el límite normativo y, al mismo tiempo, orienta y acompaña al ciudadano.',
    wrong: [
      'Recibir un documento que no cumple los requisitos satisface al usuario al margen de la norma: la definición subordina la atención a las políticas y estándares institucionales.',
      'Remitir a la página web sin orientar desconoce la escucha activa y la disposición de servicio que el nivel 1 exige.',
      '',
      'Promover una queja no resuelve la necesidad del ciudadano y desvía la atención hacia un trámite adicional.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 1 de Orientación al usuario y al ciudadano. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-014',
    indicator: 'i19',
    moduleId: 'm14',
    topic: 'Orientación al usuario nivel 1: atención de reclamos',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un ciudadano llama visiblemente alterado y, en su reclamo por una demora, eleva el tono y usa palabras ofensivas. El caso que plantea tiene fundamento parcial. ¿Qué conducta corresponde al nivel 1 de Orientación al usuario y al ciudadano?',
    options: [
      'Advertirle que si continúa con ese tono la llamada será terminada, porque la atención debe prestarse en un marco de respeto mutuo.',
      'Escuchar sin interrumpir, reconocer la molestia, explicarle con lenguaje claro las opciones que el procedimiento permite y señalarle los canales para escalar el caso si lo considera necesario.',
      'Responder en el mismo tono para que entienda que será atendido cuando se calme, sin aceptar que un ciudadano trate así a un servidor público.',
      'Transferir la llamada a otro funcionario para que la atienda, dado que el caso genera una carga emocional que afecta la objetividad.',
    ],
    correct: 1,
    justification:
      'El nivel 1 exige escuchar y atender al ciudadano «en forma objetiva y cordial», con amabilidad y respeto, aplicando los protocolos de servicio. Escuchar, reconocer y explicar las opciones legales es la conducta que mantiene el servicio dentro del marco institucional, sin ceder a la provocación ni abandonar la atención.',
    wrong: [
      'La advertencia convierte la atención en una negociación sobre el tono y no responde al fundamento parcial del reclamo.',
      '',
      'Responder en el mismo tono vulnera la disposición de servicio, la amabilidad y el respeto exigidos por la ficha.',
      'Transferir la llamada abandona la atención del ciudadano y reproduce el problema en otra persona.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 1 de Orientación al usuario y al ciudadano. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-015',
    indicator: 'i20',
    moduleId: 'm14',
    topic: 'Trabajo en equipo nivel 1: cumplimiento de acuerdos',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'El equipo acordó que cada integrante entregará su parte del informe el miércoles, en un formato común, para consolidarlo el jueves. Usted considera que el formato acordado es menos eficiente que el que usa habitualmente. ¿Qué conducta corresponde al nivel 1 de Trabajo en equipo?',
    options: [
      'Entregar su parte en la fecha acordada y en el formato común, y plantear su propuesta de mejora en el espacio de trabajo del equipo para la próxima ocasión.',
      'Entregar su parte en el formato que considera mejor, explicando a sus compañeros las ventajas.',
      'Entregar su parte a tiempo, pero solicitar que el informe se consolide con el formato que usted propone.',
      'Comentar con un compañero que el formato acordado es ineficiente, para que sea él quien lo proponga al equipo.',
    ],
    correct: 0,
    justification:
      'El nivel 1 de Trabajo en equipo consiste en comprometerse con los acuerdos alcanzados por el equipo y en participar y cumplir lo pactado, colaborando con los demás integrantes y aceptando las normas comunes de trabajo. Entregar en la fecha y en el formato comunes cumple el acuerdo; la propuesta de mejora se canaliza por el espacio del equipo, sin romperlo.',
    wrong: [
      '',
      'Aplicar un formato propio rompe el acuerdo y dificulta la consolidación: el criterio individual se impone sobre el compromiso del equipo.',
      'Condicionar la consolidación al formato propio equivale a incumplir el acuerdo hasta que se acepte una condición personal.',
      'Trasladar la propuesta a un compañero por vía informal evita el espacio del equipo y convierte la mejora en una gestión de pasillo.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 1 de Trabajo en equipo. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-016',
    indicator: 'i20',
    moduleId: 'm14',
    topic: 'Trabajo en equipo nivel 1: colaboración',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un compañero recién incorporado le pide ayuda para entender un procedimiento, en un momento en que usted está atrasado con sus propias tareas. ¿Qué conducta corresponde al nivel 1 de Trabajo en equipo?',
    options: [
      'Indicarle que no puede ayudarlo en ese momento porque tiene trabajo atrasado, y sugerirle que vuelva cuando la carga de ambos lo permita.',
      'Dedicarle un tiempo acorde con sus posibilidades para explicarle lo que necesita, y señalarle dónde está la información y a quién más puede consultar.',
      'Sugerirle que consulte al coordinador, porque no es su responsabilidad entrenarlo y esa función corresponde a la jefatura del área.',
      'Realizarle el trabajo para que el equipo no se atrase, aunque ello implique dejar de lado sus propias tareas por un tiempo.',
    ],
    correct: 1,
    justification:
      'El nivel 1 incluye la conducta «colabora con los demás integrantes del equipo». La opción elegida colabora de manera sostenible: atiende la necesidad del compañero en la medida de sus posibilidades, sin abandonar sus propios compromisos, y fortalece la autonomía del otro indicándole fuentes y contactos.',
    wrong: [
      'Negar toda ayuda desconoce la conducta de colaboración, incluso cuando la carga de trabajo propia es real.',
      '',
      'Desplazar al coordinador no es colaborar: es derivar una solicitud de apoyo entre pares.',
      'Hacer el trabajo del compañero no colabora con el equipo: impide que el nuevo integrante desarrolle la competencia y desborda su propio rol.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 1 de Trabajo en equipo. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-017',
    indicator: 'i21',
    moduleId: 'm14',
    topic: 'Trabajo en equipo nivel 3: fomento del clima y monitoreo con datos',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'El equipo lleva dos semanas de retraso en una meta conjunta. En la reunión, un integrante afirma que el problema son dos compañeros que no están aportando y propone asignarles menos tareas. Usted integra el equipo y participa en la reunión. ¿Qué conducta corresponde al nivel 3 de Trabajo en equipo?',
    options: [
      'Respaldar la propuesta, para que la meta se cumpla con quienes efectivamente están trabajando y no se retrase aún más el equipo.',
      'Evitar pronunciarse para no afectar el ambiente de trabajo, confiando en que la jefatura advertirá la desviación por los reportes.',
      'Verificar con datos el avance del equipo, revisar con todos los obstáculos que explican las desviaciones y orientar la reorganización del trabajo, reconociendo el aporte de cada integrante.',
      'Informar reservadamente al jefe que dos integrantes no están aportando, para que intervenga y reasigne sus tareas sin exponerlos ante el equipo.',
    ],
    correct: 2,
    justification:
      'El nivel 3 se describe como «fomenta el espíritu de colaboración, valorando positivamente los aportes de cada integrante y cuidando el buen clima laboral», y sus conductas incluyen «monitorea el cumplimiento de los objetivos del equipo y los alerta sobre las desviaciones, con fundamento en los datos», además de orientar el trabajo del equipo reconociendo la participación de todos. La opción elegida verifica con datos, orienta la solución y protege el clima.',
    wrong: [
      'Respaldar señalamientos sin datos contradice el monitoreo fundado en datos y deteriora el clima laboral, que el nivel 3 protege expresamente.',
      'No pronunciarse deja sin atención una desviación real: alertar oportunamente es también una conducta del nivel 3.',
      '',
      'Escalar el caso atribuyendo responsabilidades a personas, sin datos y sin gestión del equipo, es lo contrario del fomento de la colaboración.',

    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN, nivel 3 de Trabajo en equipo. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-018',
    indicator: 'i22',
    moduleId: 'm14',
    topic: 'Compromiso: disposición permanente de servicio',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'Es un día de alta demanda en el punto de atención y la fila de ciudadanos es extensa. Varios compañeros proponen reducir las explicaciones para despachar más rápido. ¿Qué conducta corresponde al valor de Compromiso?',
    options: [
      'Reducir las explicaciones a lo indispensable para que todos los ciudadanos alcancen a ser atendidos.',
      'Atender a cada ciudadano con escucha plena y sin distracciones, explicando con claridad, sin apurar la atención para avanzar en la fila.',
      'Sugerir que se cierre la atención al público para terminar los casos pendientes del día anterior.',
      'Indicar a los ciudadanos que regresen otro día, cuando el volumen de solicitudes sea menor.',
    ],
    correct: 1,
    justification:
      'El Compromiso se define como estar en disposición permanente para comprender y resolver las necesidades de las personas, y sus principios de acción incluyen escuchar, atender y orientar a quien necesite información, estar atento sin distracciones al interactuar con otras personas y prestar un servicio ágil, amable y de calidad. Atender con escucha plena y sin distracciones es la conducta que corresponde al valor.',
    wrong: [
      'Recortar las explicaciones para avanzar más rápido afecta la calidad del servicio y la comprensión del ciudadano.',
      '',
      'Cerrar la atención al público para adelantar trabajo interno es exactamente ignorar las inquietudes de los ciudadanos que el valor prohíbe.',
      'Remitir a otro día no resuelve la necesidad del ciudadano y traslada el costo de la demanda al usuario.',

    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Compromiso. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-019',
    indicator: 'i22',
    moduleId: 'm14',
    topic: 'Compromiso: actitud frente al propio rol',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Mientras tramitan solicitudes de rutina, un compañero comenta en voz alta que ese trabajo «no le cambia la vida a nadie» y que la entidad funcionaría igual sin su oficina. ¿Qué conducta corresponde al valor de Compromiso?',
    options: [
      'Darle la razón para evitar una discusión y continuar con el trabajo en silencio, pues la actitud del compañero no afecta el cumplimiento de las tareas.',
      'Recordarle que ese tipo de comentarios puede acarrearle una sanción disciplinaria, para que mida el efecto de sus palabras en el equipo.',
      'Reconocer que la tarea parece menor, explicarle con un ejemplo concreto el efecto del trámite para el ciudadano y mantener el mismo cuidado en la atención, sin descalificar al compañero.',
      'Informar el comentario al jefe inmediato, para que ubique al compañero en otro contexto de trabajo donde valore mejor su función.',
    ],
    correct: 2,
    justification:
      'El Compromiso supone asumir el papel de servidor público y entender el valor de los compromisos adquiridos frente a la ciudadanía, y sus principios advierten que no se debe trabajar con actitud negativa ni asumir que el propio trabajo es irrelevante para la sociedad. Explicar el efecto real del trámite y sostener la calidad de la atención expresa el valor en la práctica y en el trato con el compañero.',
    wrong: [
      'Darle la razón respalda expresamente la idea de que el trabajo es irrelevante, que el propio Código descarta.',
      'Responder con una amenaza disciplinaria no reafirma el valor ni mejora la actitud en el equipo.',
      '',
      'Escalar un comentario aislado resulta desproporcionado y no atiende el fondo: el compañero necesita entender el sentido de su trabajo.',

    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Compromiso. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-020',
    indicator: 'i23',
    moduleId: 'm14',
    topic: 'Diligencia: términos y gestión de casos',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Está a punto de vencer el término legal para resolver una solicitud y tiene tres casos más en la misma situación. Sabe que no alcanzará a resolverlos todos con el análisis completo que cada uno requiere. ¿Qué conducta corresponde al valor de Diligencia?',
    options: [
      'Dejar vencer los términos en silencio, a la espera de que la situación no genere consecuencias, pues la sobrecarga permite priorizar otros casos.',
      'Resolver los casos a la carrera, con el análisis que alcance en el tiempo disponible, para que al menos queden atendidos dentro del término.',
      'Priorizar conforme a los términos, informar la situación a quien corresponda y adelantar la gestión de todos los casos para que ninguno quede sin atención.',
      'Solicitar una prórroga general de los términos, alegando sobrecarga de trabajo, mientras se resuelven los casos con el análisis completo.',
    ],
    correct: 2,
    justification:
      'La Diligencia exige cumplir los deberes «con atención, prontitud, destreza y eficiencia» y sus principios de acción incluyen cumplir con los tiempos estipulados, no postergar las decisiones ni actividades que den solución a problemáticas ciudadanas y no evadir las funciones por ningún motivo. Priorizar, informar y gestionar todos los casos es la conducta que responde a los tres principios a la vez.',
    wrong: [
      'Dejar vencer los términos sin gestionar nada es evadir las funciones y demostrar desinterés: la conducta expresamente prohibida.',
      'Resolver a la carrera sacrifica la calidad que el propio valor exige: no son válidas las gestiones a medias.',
      '',
      'Solicitar una prórroga general supone una facultad inexistente y no resuelve el caso más urgente.',

    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Diligencia. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-021',
    indicator: 'i23',
    moduleId: 'm14',
    topic: 'Diligencia: calidad de los productos y tiempos',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Debe entregar hoy un informe de gestión. Le falta verificar una cifra, lo que tomaría aproximadamente dos horas de trabajo en los sistemas disponibles, y no hay otra persona que pueda hacerlo. ¿Qué conducta corresponde al valor de Diligencia?',
    options: [
      'Entregar el informe con la cifra sin verificar, dejando una nota interna que indique que el dato está pendiente, para no incumplir la fecha de entrega.',
      'Presentar el informe a tiempo con la cifra tomada del informe del período anterior, suponiendo que no habrá variaciones significativas.',
      'Verificar la cifra con los medios disponibles, entregar el informe completo y actualizado en el menor tiempo posible e informar a quien corresponda el ajuste del momento de entrega.',
      'Dejar el informe para el día siguiente, sin informar la situación, para disponer del tiempo necesario y verificar la cifra con calma.',
    ],
    correct: 2,
    justification:
      'La Diligencia exige asegurar la calidad de cada producto entregado bajo los estándares del servicio público y cumplir con los tiempos estipulados, sin postergar indebidamente las actividades ni evadir responsabilidades. Verificar y comunicar oportunamente el ajuste del momento de entrega satisface ambos principios: no se entrega un dato sin verificar y tampoco se posterga la entrega en silencio.',
    wrong: [
      'Entregar un dato sin verificar afecta la calidad del producto, que el valor obliga a asegurar.',
      'Usar una cifra de un período anterior entrega información no actualizada y puede inducir decisiones equivocadas.',
      '',
      'Postergar la entrega sin informar incumple el deber de prontitud y deja al destinatario sin la información para decidir.',

    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Diligencia. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-022',
    indicator: 'i24',
    moduleId: 'm14',
    topic: 'Honestidad: trato preferencial',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un vecino suyo se acerca a su lugar de trabajo para pedirle que su solicitud sea tramitada «con prioridad», recordándole la relación personal que los une. ¿Qué conducta corresponde al valor de Honestidad?',
    options: [
      'Ayudarlo a radicar su solicitud con prioridad, porque conocerlo no constituye ningún beneficio indebido y la relación personal no altera el trámite.',
      'Indicarle que no puede darle trato preferencial y explicarle los canales ordinarios para presentar su solicitud, atendiéndolo con la misma diligencia que a cualquier ciudadano.',
      'Abstenerse de atenderlo y pedir a un compañero que lo haga en su lugar, para que la relación personal no influya en la decisión.',
      'Tramitar su solicitud sin mencionar a nadie la relación personal que existe, para evitar suspicacias y no perjudicar al vecino.',
    ],
    correct: 1,
    justification:
      'La Honestidad se define como actuar siempre con fundamento en la verdad, cumpliendo los deberes con transparencia y rectitud y favoreciendo siempre el interés general. El propio Código incluye, en «lo que no hago», no dar trato preferencial a personas cercanas para favorecerlas en un proceso en igualdad de condiciones. Negar el privilegio y orientar por el canal ordinario con la misma diligencia expresa el valor.',
    wrong: [
      'Priorizar a un conocido por la relación personal es exactamente el trato preferencial que el Código prohíbe.',
      '',
      'Dejar la atención en manos de otro no resuelve la situación y podría trasladar la presión al compañero.',
      'Ocultar la relación personal no elimina el conflicto: la transparencia es parte de la definición del valor.',

    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Honestidad. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-023',
    indicator: 'i25',
    moduleId: 'm14',
    topic: 'Justicia: imparcialidad frente a presiones',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un contribuyente de reconocido prestigio en la región, con vínculos con altos funcionarios, le pide que revise «con benevolencia» su caso y le recuerda que puede influir en su carrera profesional. El expediente, revisado objetivamente, arroja una inconsistencia que debe reportarse. ¿Qué conducta corresponde al valor de Justicia?',
    options: [
      'Solicitar que otro funcionario asuma el caso, para evitar cualquier cuestionamiento posterior.',
      'Decidir conforme a las evidencias del expediente, sin que las presiones o los vínculos del interesado alteren el criterio.',
      'Aplicar el criterio con mayor rigor del acostumbrado, para demostrar independencia frente al interesado.',
      'Posponer la decisión hasta que el interesado no pueda relacionarla con su solicitud.',
    ],
    correct: 1,
    justification:
      'La Justicia exige actuar con imparcialidad y garantizar los derechos de las personas, con equidad e igualdad, y sus principios de acción señalan tomar decisiones informadas y objetivas basadas en evidencias y datos confiables, sin permitir que odios, simpatías, antipatías, caprichos, presiones o intereses personales o grupales interfieran en el criterio y en la toma de decisiones. Decidir con base en el expediente es la conducta del valor.',
    wrong: [
      'Retirarse del caso no es imparcialidad: es evitar la decisión, con lo cual el asunto queda sin resolver.',
      '',
      'Endurecer el criterio para demostrar independencia introduce un factor ajeno a los hechos: la decisión también deja de ser objetiva.',
      'Posponer la decisión traslada el problema al futuro y desconoce que el valor exige decidir con fundamento en las evidencias.',

    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Justicia. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-024',
    indicator: 'i26',
    moduleId: 'm14',
    topic: 'Respeto: trato digno y no discriminación',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Durante la atención al público, un compañero hace comentarios burlones sobre la forma de hablar y la apariencia de una ciudadana que acaba de salir, y espera la complicidad del grupo. ¿Qué conducta corresponde al valor de Respeto?',
    options: [
      'Reírse del comentario para no generar tensión con el compañero y continuar con la jornada, pues se trata de una broma sin mayor trascendencia.',
      'Señalarle en privado que ese tipo de comentarios resulta ofensivo y recordarle que el trato debe ser digno para todas las personas, absteniéndose de continuar esa conversación.',
      'Responderle con dureza delante del grupo, para que entienda la gravedad de lo que dijo y el equipo no repita ese tipo de comentarios.',
      'Informar el comentario a la oficina de control disciplinario sin decirle nada al compañero, para que la entidad investigue y aplique una sanción.',
    ],
    correct: 1,
    justification:
      'El Respeto se define como reconocer, valorar y tratar de manera digna a todas las personas, sin importar su labor, procedencia, títulos o cualquier otra condición, y sus principios de acción prohíben actuar de manera discriminatoria, grosera o hiriente y basar las decisiones en presunciones, estereotipos o prejuicios. La réplica directa y reservada al compañero, junto con la abstención de participar en la burla, expresa el valor sin agredir a nadie.',
    wrong: [
      'Reírse convalida el trato indigno y convierte la burla en una práctica aceptada del grupo de trabajo.',
      '',
      'La confrontación pública humilla a un compañero y contradice, en el modo, el mismo respeto que se está defendiendo.',
      'Acudir al control disciplinario sin ninguna gestión previa resulta desproporcionado frente a un comentario aislado y no promueve un cambio de conducta.',

    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Respeto. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-025',
    indicator: 'i13',
    moduleId: 'm14',
    topic: 'Adaptabilidad nivel 2: revaluar las propias certezas',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Durante años usted ha aplicado un criterio técnico que considera correcto para clasificar cierto tipo de operaciones. Una nueva doctrina institucional, sustentada en argumentos que usted no compartía, fija un criterio distinto. Sus compañeros saben que usted defendía el criterio anterior. ¿Qué conducta corresponde al nivel 2 de Adaptabilidad?',
    options: [
      'Seguir aplicando su criterio anterior mientras la doctrina no se lo exija expresamente caso por caso.',
      'Evaluar las distintas posturas, revisar la solidez de su propia certeza a la luz de los nuevos argumentos y ajustar su actuación al criterio institucional vigente.',
      'Solicitar por escrito a la dependencia competente que reconsidere la doctrina antes de aplicarla.',
      'Aplicar el nuevo criterio en silencio, pero expresar su desacuerdo en comentarios informales con sus compañeros.',
    ],
    correct: 1,
    justification:
      'El nivel 2 de Adaptabilidad describe: «revalúa la seguridad que le dan sus certezas, modificando su actuar en consonancia con los nuevos argumentos organizacionales», e incluye evaluar las distintas posturas mostrando apertura para ajustar el accionar ante nuevas evidencias o posibilidades. La conducta correcta es revisar la certeza propia y adecuar la actuación al criterio institucional, sin condicionar su aplicación y sin resistencia pasiva.',
    wrong: [
      'Mantener el criterio anterior condicionando el cambio a exigencias individuales es la conducta contraria al nivel 2.',
      '',
      'Suspender la aplicación del criterio institucional hasta obtener una reconsideración no corresponde a la conducta de adaptación esperada.',
      'Aplicar el cambio con resistencia pasiva (quejarse informalmente) no es la conducta de apoyo y promoción que describe el nivel 2.',
    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 2 de Adaptabilidad. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-026',
    indicator: 'i14',
    moduleId: 'm14',
    topic: 'Comportamiento ético nivel 1: no aceptar beneficios',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un usuario, agradecido por la atención que usted le prestó en un trámite, le deja en su escritorio una caja de obsequios «para que comparta con el equipo». Usted no participó en ninguna decisión que favoreciera al usuario. ¿Qué conducta corresponde al nivel 1 de Comportamiento ético?',
    options: [
      'Aceptar el obsequio y compartirlo con el equipo, porque es una muestra de agradecimiento sin contraprestación y rechazarlo podría ofender al usuario.',
      'Rechazar amablemente el obsequio, explicar que los servidores públicos no aceptan este tipo de beneficios y dejar constancia del hecho por los canales institucionales si resulta pertinente.',
      'Aceptar el obsequio y reportarlo formalmente a la oficina de control interno para que quede registrado, de modo que la entidad conozca el hecho.',
      'Devolver el obsequio sin dar explicaciones para no incomodar al usuario, aunque ello impida que conozca la regla que se aplica.',
    ],
    correct: 1,
    justification:
      'El nivel 1 de Comportamiento ético exige desarrollar el trabajo a la luz del código de integridad y aplicarlo en lo cotidiano. El Código de Integridad, en el valor de Honestidad, prohíbe expresamente aceptar incentivos, favores o beneficios de personas o grupos interesados en una decisión, incluso cuando no exista contraprestación. Rechazar con claridad y dejar constancia por el canal previsto es la conducta congruente con el código.',
    wrong: [
      'Aceptar beneficios, así se presenten como agradecimiento, contradice expresamente el «lo que no hago» del valor de Honestidad.',
      '',
      'Aceptar y luego reportar no subsana la falta: el código prohíbe aceptar, no solo ocultar.',
      'Devolver sin explicación deja pasar la oportunidad de aplicar el código con transparencia y de explicar al ciudadano la regla.',
    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN; Código de Integridad del Servicio Público (Honestidad). Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-027',
    indicator: 'i15',
    moduleId: 'm14',
    topic: 'Comportamiento ético nivel 4: ser referente en el equipo',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'En su área se ha instalado la práctica de «agilizar» de manera informal algunos trámites de personas conocidas por los integrantes del equipo, sin alterar los expedientes pero saltándose turnos internos. Usted no participa de esa práctica. ¿Qué conducta corresponde al nivel 4 de Comportamiento ético?',
    options: [
      'Limitarse a no participar y a resolver con estricta sujeción a las reglas los casos que le corresponden, para no inmiscuirse en la conducta de los demás integrantes del equipo.',
      'Promover en el equipo un acuerdo expreso sobre trato igualitario y estricto orden de trámite, explicar el fundamento ético y normativo, y sostener con el ejemplo la práctica, de modo que el equipo deje la conducta informal.',
      'Denunciar a los compañeros ante la oficina de control disciplinario antes de hablar con el equipo, para que la entidad investigue la práctica informal y determine responsabilidades.',
      'Dejar constancia individual en cada expediente suyo de que usted no participa en esas prácticas, para protegerse de cualquier cuestionamiento posterior sobre su actuar.',
    ],
    correct: 1,
    justification:
      'El nivel 4 de Comportamiento ético describe: «estructura, fomenta y aplica estrategias organizacionales sobre la base de valores institucionales», incluyendo promover en los equipos la práctica del código de integridad y ser referente. La conducta correcta es influir en el equipo: estructurar un acuerdo de trato igualitario, explicarlo y sostenerlo con el ejemplo, no limitarse a la conducta individual ni saltar a la denuncia sin gestión previa.',
    wrong: [
      'La conducta individual correcta es necesaria, pero en el nivel 4 es insuficiente: la competencia exige fomentar la práctica en el equipo.',
      '',
      'Acudir al control disciplinario como primera medida, sin promover antes el cambio en el equipo, no corresponde a la conducta de estructuración y fomento del nivel 4.',
      'Dejar constancia individual documenta la propia conducta, pero no estructura ni fomenta un cambio de la práctica en el equipo.',
    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 4 de Comportamiento ético. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-028',
    indicator: 'i16',
    moduleId: 'm14',
    topic: 'Comunicación efectiva nivel 1: verificar la comprensión',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'Por teléfono, usted da a un compañero de otra ciudad las instrucciones para registrar un trámite en el sistema: son cinco pasos con nombres técnicos. El compañero dice que entendió, pero usted nota dudas en su tono. ¿Qué conducta corresponde al nivel 1 de Comunicación efectiva?',
    options: [
      'Dar por terminada la llamada, porque el compañero afirmó que entendió y insistir podría hacerle sentir que se duda de su capacidad.',
      'Pedirle que le repita los pasos clave o que confirme con sus palabras lo que debe hacer, y aclarar las dudas antes de terminar la llamada.',
      'Enviarle el manual completo del sistema por correo para que lo estudie por su cuenta, y continuar con sus propias tareas pendientes.',
      'Sugerirle que pida ayuda a un compañero que esté cerca de su puesto, para que le explique los pasos mientras usted atiende otros asuntos.',
    ],
    correct: 1,
    justification:
      'Una conducta observable del nivel 1 de Comunicación efectiva es «se asegura de que su interlocutor comprenda el mensaje». La verificación de comprensión —pedir que reformule o confirme los puntos clave— es la técnica asociada, y no se satisface con la sola afirmación del interlocutor cuando hay señales de duda.',
    wrong: [
      'Dar por terminada la comunicación sin verificar deja incumplida la conducta central del nivel 1.',
      '',
      'Remitir el manual sin verificar la comprensión de la instrucción concreta desplaza la responsabilidad de la comunicación efectiva a un documento.',
      'Derivar la solicitud a un tercero evade la propia responsabilidad de asegurar que el mensaje fue comprendido.',
    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 1 de Comunicación efectiva. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-029',
    indicator: 'i17',
    moduleId: 'm14',
    topic: 'Comunicación efectiva nivel 2: adaptar discurso y canal',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'El mismo día debe presentar una decisión técnica al comité directivo y explicarla al equipo operativo que la ejecutará. El comité necesita el análisis y los fundamentos; el equipo necesita instrucciones claras de aplicación. ¿Qué conducta corresponde al nivel 2 de Comunicación efectiva?',
    options: [
      'Preparar una única presentación técnica completa y usarla en ambas audiencias para no duplicar trabajo, aunque el nivel de detalle no se ajuste a cada una.',
      'Adaptar el discurso, el nivel de detalle y el canal a cada interlocutor: análisis y fundamentos para el comité, e instrucciones operativas y espacio de preguntas para el equipo.',
      'Presentar solo al comité directivo y enviar al equipo las diapositivas por correo, para que cada audiencia revise la información que necesita.',
      'Redactar un oficio formal con la decisión y enviarlo a ambas audiencias, evitando reuniones y dejando constancia escrita de la comunicación.',
    ],
    correct: 1,
    justification:
      'El nivel 2 de Comunicación efectiva incluye «adaptar su discurso y canal de acuerdo con el tipo de interlocutor». Una misma decisión se comunica de modo distinto según la audiencia: análisis para quien decide y supervisa, instrucciones y verificación para quien ejecuta. El contenido es el mismo; el registro, el detalle y el canal cambian.',
    wrong: [
      'Usar una presentación única ignora la conducta distintiva del nivel 2: adaptar el discurso al tipo de interlocutor.',
      '',
      'Suprimir la comunicación con el equipo operativo deja sin resolver la necesidad de la audiencia que ejecutará la decisión.',
      'Un oficio formal único no adapta el canal ni el registro a cada interlocutor y omite el diálogo que la competencia promueve.',
    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 2 de Comunicación efectiva. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-030',
    indicator: 'i20',
    moduleId: 'm14',
    topic: 'Trabajo en equipo nivel 1: aceptar las normas comunes',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'El equipo acuerda una norma común: cada integrante registrará el avance diario de sus casos en una tabla compartida, antes de las 4:00 p. m. Usted considera que registrar el avance le resta tiempo al trabajo de fondo. ¿Qué conducta corresponde al nivel 1 de Trabajo en equipo?',
    options: [
      'Registrar su avance solo los días en que tenga tiempo disponible, para no restar horas al trabajo de fondo que considera prioritario.',
      'Cumplir el registro diario según lo acordado y colaborar con el equipo en el uso de la tabla, planteando su observación en el espacio del equipo para evaluarla colectivamente.',
      'No registrar su avance y explicar que su tiempo debe destinarse al trabajo de fondo, pues la tabla no aporta valor a su gestión individual.',
      'Registrar su avance en su propio archivo y enviarlo por correo al final de la semana, para que el equipo lo consolide cuando lo requiera.',
    ],
    correct: 1,
    justification:
      'El nivel 1 de Trabajo en equipo describe: «se compromete con los acuerdos alcanzados por el equipo» e incluye participar en las actividades del equipo, cumplir los acuerdos y aceptar las normas comunes de trabajo. La conducta correcta es cumplir la norma acordada y canalizar la propuesta de mejora por el espacio colectivo, sin romper unilateralmente el acuerdo.',
    wrong: [
      'Registrar solo cuando haya tiempo incumple el acuerdo y la norma común del equipo.',
      '',
      'Sustituir la norma común por el criterio propio es la conducta contraria al compromiso con los acuerdos.',
      'Usar un formato propio y una periodicidad distinta rompe la norma común acordada por el equipo.',
    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 1 de Trabajo en equipo. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-031',
    indicator: 'i21',
    moduleId: 'm14',
    topic: 'Trabajo en equipo nivel 3: valorar aportes y cuidar el clima',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'El equipo acaba de cumplir una meta exigente. En la reunión de cierre, un integrante, que aportó poco durante el proceso, celebra el resultado como propio; otro, que resolvió los casos más difíciles, permanece en silencio y su trabajo pasó inadvertido. ¿Qué conducta corresponde al nivel 3 de Trabajo en equipo?',
    options: [
      'Limitarse a felicitar al equipo en general, sin entrar en detalles, para que nadie se sienta excluido y el reconocimiento se reparta por igual entre todos.',
      'Reconocer públicamente los aportes concretos de cada integrante, incluido el trabajo silencioso que sostuvo el resultado, y orientar la conversación para que todos se sientan parte del logro, cuidando el clima del equipo.',
      'Señalar a quien celebró sin aportar lo suficiente, para que el equipo sepa la verdad sobre el esfuerzo real de cada integrante y ajuste sus expectativas.',
      'Comentar en privado, con quien resolvió los casos difíciles, que su trabajo no fue reconocido, para que reclame por su cuenta el reconocimiento que merece.',
    ],
    correct: 1,
    justification:
      'El nivel 3 de Trabajo en equipo describe: «fomenta el espíritu de colaboración, valorando positivamente los aportes de cada integrante y cuidando el buen clima laboral», e incluye orientar el trabajo del equipo, fomentar y reconocer la participación de todos y cuidar el buen ambiente de trabajo. La conducta correcta valora los aportes concretos, hace visible el trabajo silencioso y sostiene el clima, sin confrontaciones ni cuchicheos.',
    wrong: [
      'Una felicitación genérica no valora los aportes concretos de cada integrante, que es la conducta distintiva del nivel 3.',
      '',
      'Señalar públicamente a un integrante deteriora el clima laboral y no corresponde a la valoración positiva de los aportes.',
      'El comentario privado no reconoce ante el equipo el trabajo silencioso y deja intacto el problema de clima.',
    ],
    source: 'Elaboración propia de la plataforma. Resolución 65 de 2024 de la DIAN (Diccionario de Competencias Comportamentales), nivel 3 de Trabajo en equipo. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-032',
    indicator: 'i22',
    moduleId: 'm14',
    topic: 'Compromiso: disposición permanente de servicio',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'Faltan diez minutos para terminar su jornada cuando un ciudadano de la tercera edad llega visiblemente confundido con un requerimiento que no comprende. El ciudadano no sabe a quién acudir. ¿Qué conducta corresponde al valor de Compromiso?',
    options: [
      'Indicarle que el horario de atención está por terminar y que regrese al día siguiente, para que sea atendido con el tiempo que el caso requiere.',
      'Atenderlo con disposición plena, escuchar sin distracciones su situación, orientarlo con claridad sobre el requerimiento y asegurarse de que sepa qué debe hacer y a quién dirigirse.',
      'Resolver el requerimiento por él, para que no tenga que volver, aunque ello implique asumir funciones que corresponden al ciudadano.',
      'Remitirlo al punto de información sin verificar que allí le puedan orientar, para que reciba atención de una dependencia especializada.',
    ],
    correct: 1,
    justification:
      'El Compromiso se define como «soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono». Sus principios de acción incluyen escuchar, atender y orientar a quien necesite información o guía, mantener la atención plena sin distracciones y jamás ignorar a un ciudadano y sus inquietudes.',
    wrong: [
      'Despachar al ciudadano sin orientarlo es ignorar su inquietud, conducta expresamente prohibida por el valor.',
      '',
      'Sustituir al ciudadano en su trámite no es la conducta del valor: el compromiso es orientar y servir, no asumir las obligaciones del usuario.',
      'Derivar sin verificar traslada el problema sin resolver la necesidad de la persona.',
    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Compromiso. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-033',
    indicator: 'i24',
    moduleId: 'm14',
    topic: 'Honestidad: conflicto de intereses',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Le asignan un expediente de fiscalización y advierte que el contribuyente es una empresa de la que su cónyuge es socio. El caso no está relacionado con las gestiones de su cónyuge, pero usted conoce a los directivos de la empresa. ¿Qué conducta corresponde al valor de Honestidad?',
    options: [
      'Tramitar el caso con especial rigor para demostrar imparcialidad, sin mencionar la relación, porque la rigurosidad garantiza una decisión objetiva.',
      'Informar de inmediato el conflicto de interés a su superior o a la instancia competente y apartarse del conocimiento o decisión del asunto, conforme a los canales institucionales.',
      'Tramitar el caso normalmente, porque la relación es con su cónyuge y no con usted, y no existe un interés personal directo en el resultado.',
      'Solicitar que le cambien el caso sin explicar la razón, para evitar comentarios y preservar la reserva sobre la situación familiar.',
    ],
    correct: 1,
    justification:
      'La Honestidad se define como «actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y siempre favoreciendo el interés general». Entre sus principios de acción está apartarse del conocimiento o decisión de los asuntos encomendados cuando exista conflicto entre el interés general y el interés particular. La conducta correcta es declarar el conflicto y apartarse por el canal previsto.',
    wrong: [
      'Ocultar la relación y tramitar el caso, aunque sea con rigor, vulnera el deber de transparencia y el principio de apartarse ante el conflicto de intereses.',
      '',
      'La relación del cónyuge como socio es una causal de conflicto de interés, sin que importe que las gestiones de aquel no estén involucradas.',
      'Solicitar el cambio sin declarar la razón oculta el conflicto y priva a la entidad de la información necesaria para garantizar la transparencia.',
    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Honestidad. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-034',
    indicator: 'i25',
    moduleId: 'm14',
    topic: 'Justicia: decisiones informadas y sin discriminación',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Tiene sobre su escritorio dos casos idénticos en sus hechos: uno pertenece a una empresa grande, representada por una firma que lo ha tratado con cordialidad; el otro, a un pequeño comerciante que ha sido insistente y algo descortés en sus solicitudes. Ambos vencen el mismo día. ¿Qué conducta corresponde al valor de Justicia?',
    options: [
      'Resolver primero el caso del comerciante, para que deje de insistir y pueda continuar con la atención de los demás casos pendientes.',
      'Resolver ambos casos con base en los hechos y la norma, en igualdad de condiciones y sin dejarse influir por simpatías, antipatías ni presiones, aplicando el mismo criterio a los dos.',
      'Resolver primero el caso de la empresa grande, porque su apoderado ha sido cordial y la relación facilita el intercambio de información.',
      'Delegar uno de los casos para no tener que decidir entre los dos, y así evitar que cualquier preferencia personal influya en la decisión.',
    ],
    correct: 1,
    justification:
      'La Justicia se define como «actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación», y su «lo que no hago» prohíbe que odios, simpatías, antipatías, caprichos o presiones interfieran en el criterio y en la toma de decisiones. La conducta correcta es decidir ambos casos por los hechos y la norma, con el mismo criterio, sin que la actitud del interesado altere la decisión.',
    wrong: [
      'Resolver primero para evitar la insistencia deja que la presión del interesado interfiera en el criterio, lo que el valor prohíbe expresamente.',
      '',
      'Dar prioridad por la cordalidad del apoderado es exactamente la simpatía que el valor prohíbe en la gestión pública.',
      'Delegar para no decidir evita el dilema, pero no lo resuelve: la imparcialidad exige decidir con fundamento, no esquivar la decisión.',
    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Justicia. Tema no desarrollado en los PDF de estudio.',
  },
  {
    id: 'q-m14-035',
    indicator: 'i26',
    moduleId: 'm14',
    topic: 'Respeto: trato digno ante la agresión verbal',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un ciudadano, alterado por una sanción que considera injusta, lo insulta y alza la voz frente a otras personas en la oficina. Usted debe explicarle la decisión y los recursos que proceden. ¿Qué conducta corresponde al valor de Respeto?',
    options: [
      'Responderle en el mismo tono para que entienda la autoridad de la entidad y no vuelva a dirigirse así a un servidor público frente a los demás.',
      'Mantener la calma y el trato digno, no devolver la agresión verbal, exponer con argumentos y lenguaje respetuoso la decisión y explicarle los recursos a los que tiene derecho, sin ironías ni burlas.',
      'Negarse a atenderlo hasta que se disculpe por su comportamiento, para preservar la dignidad del servidor y del resto de las personas presentes.',
      'Solicitar a seguridad que lo retire de inmediato, sin darle ninguna explicación, para proteger el orden y evitar que la situación escale.',
    ],
    correct: 1,
    justification:
      'El Respeto se define como «reconozco, valoro y trato de manera digna a todas las personas», e incluye exponer con argumentos la posición propia de manera noble, con un lenguaje que refleje consideración real por la postura y la persona del otro; su «lo que no hago» prohíbe actuar de manera discriminatoria, grosera o hiriente y referirse a los demás con ironía, burla o sarcasmo. La conducta correcta sostiene el trato digno incluso ante la agresión verbal, sin renunciar a explicar la decisión ni a los derechos del ciudadano.',
    wrong: [
      'Devolver la agresión verbal vulnera el mismo valor que se debe proteger: el trato digno no se condiciona a la conducta del otro.',
      '',
      'Condicionar la atención a una disculpa niega el servicio y el trato digno que el valor exige en todo momento.',
      'Retirar al ciudadano sin explicación priva a la persona del derecho a conocer la decisión y los recursos, además de escalar la situación.',
    ],
    source: 'Elaboración propia de la plataforma. Código de Integridad del Servicio Público (Función Pública), valor de Respeto. Tema no desarrollado en los PDF de estudio.',
  },
]
