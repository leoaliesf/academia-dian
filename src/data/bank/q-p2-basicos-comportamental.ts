import type { Question } from '../types'

// ============================================================
// Preguntas NUEVAS de práctica (fase 2) — Básicos DIAN
// (gestión documental/MIPG) y juicio situacional comportamental
// (indicadores i12-i26). Elaboración propia: NO son preguntas
// oficiales de la DIAN ni de la CNSC.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-b1-001',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Tablas de Retención Documental',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'En una entidad pública, las Tablas de Retención Documental (TRD) son el instrumento que:',
    options: [
      'Lista las series documentales con sus tiempos de retención y disposición final, elaborado con la metodología del Archivo General de la Nación y aprobado por la instancia competente.',
      'Registra únicamente los documentos históricos de la entidad, dejando por fuera los archivos de gestión y central, que se manejan con instrumentos internos informales.',
      'Autoriza la eliminación inmediata de documentos sin inventario, porque la tabla opera como una orden general de destrucción una vez vencidos los plazos.',
      'Es opcional para las entidades del orden nacional, que pueden acogerse a la metodología del AGN solo si su volumen documental lo justifica.'
    ],
    correct: 0,
    justification:
      'Las TRD son instrumentos archivísticos que relacionan las series documentales con sus tiempos de retención en archivo de gestión y central y su disposición final, y se elaboran con la metodología del AGN y se convalidan/aprueban conforme a la Ley 594 de 2000 y el Decreto 1080 de 2015. Son de obligatoria conformación en las entidades públicas.',
    wrong: [
      '',
      'Los documentos históricos son objeto de las Tablas de Valoración Documental y del archivo histórico, no exclusivamente de las TRD.',
      'Las TRD no autorizan eliminaciones inmediatas: la eliminación sigue un procedimiento con publicación previa.',
      'Las TRD son obligatorias para las entidades públicas.',
    ],
    source: 'Elaboración propia a partir del material de práctica «CONOCIMIENTOS-BASICOS-DIAN». Ley 594 de 2000; Decreto 1080 de 2015. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-002',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Eliminación de documentos',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Antes de proceder a la eliminación de documentos que cumplieron sus tiempos de retención, la entidad debe:',
    options: [
      'Destruir los documentos de inmediato para liberar espacio.',
      'Contar con las TRD/TVD convalidadas, el inventario documental correspondiente y publicar el proceso de eliminación, conforme al procedimiento del Archivo General de la Nación.',
      'Eliminar únicamente los documentos en papel, conservando los digitales.',
      'Solicitar permiso al funcionario que produjo los documentos.',
    ],
    correct: 1,
    justification:
      'La eliminación documental exige TRD/TVD convalidadas, inventario documental y la publicación previa del proceso en la página web de la entidad, conforme a la Ley 594 de 2000, el Decreto 1080 de 2015 y los acuerdos del AGN, garantizando trazabilidad y participación ciudadana.',
    wrong: [
      'La destrucción inmediata sin procedimiento vulnera la normativa archivística.',
      '',
      'La eliminación se rige por los tiempos de retención y la disposición final, sin distinción por soporte arbitraria.',
      'El permiso del productor no sustituye el procedimiento institucional.',
    ],
    source: 'Elaboración propia a partir del material de práctica «CONOCIMIENTOS-BASICOS-DIAN». Ley 594 de 2000; Acuerdo 001 de 2024 AGN. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-003',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Gestión documental y MIPG',
    difficulty: 'basica',
    kind: 'interpretacion',
    statement:
      'Frente a la articulación de la gestión documental con el Modelo Integrado de Planeación y Gestión (MIPG), la entidad debe:',
    options: [
      'Manejar la gestión documental como un proceso aislado del resto de la gestión institucional.',
      'Articular la gestión documental con las políticas de gestión y desempeño de MIPG: planeación institucional, información y comunicación, y control interno.',
      'Delegar toda la gestión documental al Archivo General de la Nación.',
      'Limitar la gestión documental al archivo de correspondencia.',
    ],
    correct: 1,
    justification:
      'MIPG integra las políticas de gestión y desempeño institucional; la gestión documental debe articularse con la planeación, la información y comunicación y el control interno, de modo que los documentos y expedientes soporten la gestión y la rendición de cuentas. La Ley 594 de 2000 define la gestión documental como función archivística integral, no aislada.',
    wrong: [
      'El aislamiento contradice la naturaleza integradora de MIPG.',
      '',
      'El AGN fija la política archivística, pero la gestión documental la ejecuta cada entidad.',
      'La gestión documental abarca todo el ciclo vital de los documentos, no solo la correspondencia.',
    ],
    source: 'Elaboración propia a partir del material de práctica «CONOCIMIENTOS-BASICOS-DIAN». MIPG; Ley 594 de 2000. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-004',
    indicator: 'i24',
    moduleId: 'm02',
    topic: 'Conflicto de intereses',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'A un servidor le asignan un expediente de fiscalización de una empresa donde trabaja un familiar cercano. La conducta acorde con el Código de Integridad es:',
    options: [
      'Tramitar el caso sin mencionar la relación para no entorpecer el proceso.',
      'Declarar oportunamente el conflicto de interés y apartarse del conocimiento o decisión del asunto, por los canales institucionales.',
      'Consultar informalmente con compañeros y decidir según su criterio.',
      'Tramitar el caso, pero con especial rigor para demostrar imparcialidad.',
    ],
    correct: 1,
    justification:
      'El valor de Honestidad del Código de Integridad exige actuar con transparencia y apartarse del conocimiento o decisión de los asuntos encomendados cuando exista conflicto entre el interés general y el interés particular. La declaración oportuna por los canales institucionales es la conducta esperada (Ley 2013 de 2019 en lo pertinente).',
    wrong: [
      'Ocultar el conflicto vulnera la transparencia exigida por el código.',
      '',
      'La consulta informal no sustituye la declaración formal del conflicto.',
      'El "rigor especial" no resuelve el conflicto: lo correcto es declararlo y apartarse.',
    ],
    source: 'Elaboración propia a partir del material de práctica «CONOCIMIENTOS-BASICOS-DIAN». Código de Integridad (Honestidad). No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-005',
    indicator: 'i14',
    moduleId: 'm14',
    topic: 'Comportamiento ético nivel 1: congruencia',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'En una capacitación, un servidor afirma públicamente que todos sus trámites cumplen los tiempos legales, pero en privado sabe que tiene tres casos vencidos sin gestionar. ¿Qué conducta corresponde al nivel 1 de Comportamiento ético?',
    options: [
      'Mantener la afirmación pública, porque nadie conoce los casos vencidos.',
      'Reconocer la situación real y ponerla en conocimiento de su superior, actuando con congruencia entre lo que dice y lo que hace.',
      'Guardar silencio y resolver los casos en silencio sin informar a nadie.',
      'Justificar los vencimientos argumentando carga laboral excesiva.',
    ],
    correct: 1,
    justification:
      'El nivel 1 de Comportamiento ético (Resolución 65 de 2024 de la DIAN) exige desarrollar el trabajo a la luz del código de integridad institucional, demostrando integridad y congruencia entre el discurso y la actuación, siendo consciente del impacto de su actuación. Reconocer la verdad y activar el canal institucional es la conducta congruente.',
    wrong: [
      'Mantener una afirmación falsa rompe la congruencia entre discurso y actuación.',
      '',
      'Resolver en silencio sin informar oculta la situación y evita la trazabilidad exigida.',
      'La justificación no sustituye la transparencia: primero se informa, luego se gestionan las causas.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-INTEGRIDAD-DIAN-2026». Resolución 65 de 2024 DIAN. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-006',
    indicator: 'i15',
    moduleId: 'm14',
    topic: 'Comportamiento ético nivel 4: referente del equipo',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'En su equipo se ha vuelto costumbre presentar a la Dirección solo los indicadores favorables, omitiendo los desfavorables "para no desgastar al área". Usted advierte la práctica. ¿Qué conducta corresponde al nivel 4 de Comportamiento ético?',
    options: [
      'Abstenerse de participar, sin mencionar el tema al equipo.',
      'Presentar un informe completo por su cuenta y archivar el asunto.',
      'Promover en el equipo un criterio común de reporte completo y veraz, acordar la forma de presentar los resultados y sostener la práctica con el ejemplo, de modo que la entidad reciba información fiel.',
      'Denunciar al equipo ante control disciplinario antes de intentar cambiar la práctica.',
    ],
    correct: 2,
    justification:
      'El nivel 4 de Comportamiento ético describe «estructura, fomenta y aplica estrategias organizacionales sobre la base de valores institucionales»: promueve en los equipos la práctica del código de integridad y es referente. La conducta correcta es estructurar con el equipo la práctica de reporte completo y sostenerla con el ejemplo, no la conducta individual ni la denuncia sin gestión previa.',
    wrong: [
      'La abstención individual es insuficiente en el nivel 4: se exige fomentar la práctica en el equipo.',
      'Actuar solo no estructura ni fomenta un cambio de la práctica del equipo.',
      '',
      'El nivel 4 exige promover el cambio en el equipo antes de acudir a medidas disciplinarias.',
    ],
    source: 'Elaboración propia a partir del material de práctica «DIAN-PRUEBAS-COMPORTAMENTALES». Resolución 65 de 2024 DIAN. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-007',
    indicator: 'i17',
    moduleId: 'm14',
    topic: 'Comunicación efectiva nivel 2: asertividad',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Debe informar a un área interna que su solicitud de recursos será negada. Sabe que la decisión es incómoda para su colega. ¿Qué conducta corresponde al nivel 2 de Comunicación efectiva?',
    options: [
      'Posponer la comunicación para no afectar la relación, hasta que el colega pregunte.',
      'Enviar un correo impersonal con la negativa, sin dar explicaciones.',
      'Comunicar la decisión con claridad y asertividad, explicando el fundamento, escuchando los argumentos del otro y dejando claro el canal para revisar el caso si hay nueva evidencia.',
      'Suavizar la información hasta hacerla incomprensible, para no incomodar.',
    ],
    correct: 2,
    justification:
      'El nivel 2 de Comunicación efectiva incluye «comunica con transparencia y asertividad, tanto los acuerdos como los desacuerdos» y adaptar el discurso al interlocutor. Comunicar la negativa con claridad, fundamento y escucha activa, manteniendo el canal abierto, es la conducta del nivel 2.',
    wrong: [
      'Posponer es la versión laboral de no comunicar.',
      'Un correo impersonal evade el diálogo y no adapta el registro al interlocutor.',
      '',
      'Suavizar hasta la incomprensión no es transparencia ni asertividad.',
    ],
    source: 'Elaboración propia a partir del material de práctica «DIAN-PRUEBAS-COMPORTAMENTALES». Resolución 65 de 2024 DIAN. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-008',
    indicator: 'i20',
    moduleId: 'm14',
    topic: 'Trabajo en equipo nivel 1: acuerdos',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'El equipo acordó entregar cada parte del informe el miércoles en un formato común. Usted prefiere su formato personal, que considera más eficiente. ¿Qué conducta corresponde al nivel 1 de Trabajo en equipo?',
    options: [
      'Entregar su parte en su formato personal, explicando que es mejor.',
      'Cumplir el acuerdo: entregar el miércoles en el formato común y, si tiene una propuesta de mejora, plantearla en el espacio del equipo para la siguiente ocasión.',
      'Entregar después del miércoles para ganar tiempo de calidad.',
      'Pedir a su superior que lo exonere del formato común.',
    ],
    correct: 1,
    justification:
      'El nivel 1 de Trabajo en equipo describe «se compromete con los acuerdos alcanzados por el equipo»: participa, cumple los acuerdos y acepta las normas comunes de trabajo. Cumplir el acuerdo y canalizar la mejora por el espacio colectivo es la conducta esperada.',
    wrong: [
      'Romper unilateralmente el formato común incumple el compromiso con los acuerdos.',
      '',
      'La entrega tardía también incumple el acuerdo.',
      'La exoneración individual rompe la norma común del equipo.',
    ],
    source: 'Elaboración propia a partir del material de práctica «DIAN-PRUEBAS-COMPORTAMENTALES». Resolución 65 de 2024 DIAN. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-009',
    indicator: 'i21',
    moduleId: 'm14',
    topic: 'Trabajo en equipo nivel 3: datos y clima',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'El equipo lleva dos semanas de retraso. En la reunión, un integrante afirma que el problema son dos compañeros "que no aportan" y propone quitarles tareas. ¿Qué conducta corresponde al nivel 3 de Trabajo en equipo?',
    options: [
      'Respaldar la propuesta para corregir el retraso cuanto antes, porque reducir la carga de los atrasados es la salida más rápida y práctica para la meta conjunta.',
      'Verificar el avance con datos concretos antes de opinar, revisar con el equipo dónde están las desviaciones reales y encauzar la conversación hacia la reorganización del trabajo, cuidando el clima laboral.',
      'Evitar el tema para no generar tensión en el equipo, confiando en que el retraso se corregirá solo en las próximas semanas.',
      'Imponer un plan de trabajo individual y llamar la atención a los atrasados, ejerciendo el control directo que la meta exige.'
    ],
    correct: 1,
    justification:
      'El nivel 3 de Trabajo en equipo exige «fomenta el espíritu de colaboración, valorando positivamente los aportes de cada integrante y cuidando el buen clima laboral», incluyendo monitorear los objetivos y alertar las desviaciones con fundamento en los datos. Verificar con datos, orientar al equipo y cuidar el clima es la conducta correcta.',
    wrong: [
      'Respaldar la atribución de culpas sin datos deteriora el clima y contradice el nivel 3.',
      '',
      'Evitar el tema omite la conducta de monitoreo y alerta con datos del nivel 3.',
      'El control autoritario individual no corresponde a la definición del nivel 3.',
    ],
    source: 'Elaboración propia a partir del material de práctica «DIAN-PRUEBAS-COMPORTAMENTALES». Resolución 65 de 2024 DIAN. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-010',
    indicator: 'i22',
    moduleId: 'm14',
    topic: 'Compromiso: disposición de servicio',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'Un ciudadano llega confundido con un requerimiento que no comprende, minutos antes del cierre de la jornada. ¿Qué conducta corresponde al valor de Compromiso?',
    options: [
      'Indicarle que regrese al día siguiente, porque el horario de atención está por terminar.',
      'Atenderlo con disposición, escuchar su situación sin distracciones, orientarlo con claridad y asegurarse de que sepa qué debe hacer.',
      'Resolver el trámite por él para que no tenga que volver.',
      'Remitirlo a otro punto de atención sin verificar que allí le orienten.',
    ],
    correct: 1,
    justification:
      'El Compromiso se define como «soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas». Sus principios de acción incluyen escuchar, atender y orientar a quien necesite guía, mantener la atención plena y jamás ignorar a un ciudadano y sus inquietudes.',
    wrong: [
      'Despachar al ciudadano sin orientarlo es ignorar su inquietud, conducta prohibida por el valor.',
      '',
      'Sustituir al ciudadano en su trámite no es la conducta del valor: es orientar y servir.',
      'Derivar sin verificar traslada el problema sin resolver la necesidad.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-INTEGRIDAD-DIAN-2026». Código de Integridad (Compromiso). No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-011',
    indicator: 'i25',
    moduleId: 'm14',
    topic: 'Justicia: decisiones informadas',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Dos contribuyentes presentan casos idénticos. Uno es una gran empresa con apoderados influyentes; el otro, un pequeño comerciante insistente y descortés. ¿Qué conducta corresponde al valor de Justicia?',
    options: [
      'Resolver primero el caso del comerciante para que deje de insistir.',
      'Resolver primero el caso de la gran empresa por la cordialidad de sus apoderados.',
      'Decidir ambos casos con base en los hechos y la norma, en igualdad de condiciones, sin dejarse influir por simpatías, antipatías ni presiones.',
      'Delegar uno de los casos para no tener que decidir entre los dos.',
    ],
    correct: 2,
    justification:
      'La Justicia se define como «actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación», y su «lo que no hago» prohíbe que odios, simpatías, antipatías, caprichos o presiones interfieran en el criterio. Decidir ambos casos por los hechos y la norma es la conducta imparcial.',
    wrong: [
      'Decidir por la insistencia deja que la presión interfiera en el criterio.',
      'Decidir por cordialidad es la simpatía que el valor prohíbe.',
      '',
      'Delegar evita el dilema pero no lo resuelve: la imparcialidad exige decidir con fundamento.',
    ],
    source: 'Elaboración propia a partir del material de práctica «DIAN-PRUEBAS-COMPORTAMENTALES». Código de Integridad (Justicia). No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-012',
    indicator: 'i26',
    moduleId: 'm14',
    topic: 'Respeto: trato digno',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'Un ciudadano alterado lo insulta mientras usted le explica una decisión. ¿Qué conducta corresponde al valor de Respeto?',
    options: [
      'Responder en el mismo tono para imponer la autoridad de la entidad.',
      'Mantener el trato digno, no devolver la agresión verbal y explicar la decisión y los recursos con argumentos y lenguaje respetuoso, sin ironías.',
      'Negarse a atenderlo hasta que se disculpe.',
      'Llamar de inmediato a seguridad sin dar explicación alguna.',
    ],
    correct: 1,
    justification:
      'El Respeto se define como «reconozco, valoro y trato de manera digna a todas las personas» e incluye exponer con argumentos la posición propia con un lenguaje que refleje consideración por la persona; su «lo que no hago» prohíbe actuar de manera grosera o hiriente y usar ironías o burlas. El trato digno no se condiciona a la conducta del otro.',
    wrong: [
      'Devolver la agresión vulnera el mismo valor que debe protegerse.',
      '',
      'Condicionar la atención a una disculpa niega el trato digno que el valor exige siempre.',
      'La retirada sin explicación priva al ciudadano de conocer la decisión y sus recursos.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-INTEGRIDAD-DIAN-2026». Código de Integridad (Respeto). No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-013',
    indicator: 'i23',
    moduleId: 'm14',
    topic: 'Diligencia: términos y calidad',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Está por vencer el término legal para resolver una solicitud y tiene tres casos más en la misma situación; no alcanzará a resolverlos todos con el análisis que requieren. ¿Qué conducta corresponde al valor de Diligencia?',
    options: [
      'Dejar vencer los términos en silencio, esperando que nadie lo note.',
      'Resolverlos a la carrera con análisis incompleto para cumplir formalmente.',
      'Priorizar conforme a los términos, reportar oportunamente la situación a quien corresponda y asegurar que ningún caso quede sin gestión, sin evadir la función.',
      'Trasladar los casos a un compañero sin informarle el contexto.',
    ],
    correct: 2,
    justification:
      'La Diligencia se define como «cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia». Su «lo que no hago» prohíbe postergar decisiones y evadir funciones; la conducta correcta prioriza por términos, reporta oportunamente y asegura calidad sin evasión.',
    wrong: [
      'Dejar vencer términos en silencio es desinterés y evasión, prohibidos por el valor.',
      'La calidad a medias también contradice la diligencia: se exige asegurar la calidad de lo entregado.',
      '',
      'Trasladar sin contexto no asegura la gestión adecuada de los casos.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-INTEGRIDAD-DIAN-2026». Código de Integridad (Diligencia). No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-014',
    indicator: 'i13',
    moduleId: 'm14',
    topic: 'Adaptabilidad nivel 2: revaluar certezas',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Usted defendió durante años un criterio técnico que una nueva doctrina institucional cambió, con argumentos que inicialmente no compartía. ¿Qué conducta corresponde al nivel 2 de Adaptabilidad?',
    options: [
      'Mantener su criterio anterior mientras la doctrina no se lo exija caso por caso.',
      'Aplicar el nuevo criterio en silencio, quejándose informalmente con compañeros.',
      'Evaluar las distintas posturas, revisar la solidez de su propia certeza ante los nuevos argumentos y ajustar su actuación al criterio institucional vigente.',
      'Solicitar por escrito la reconsideración de la doctrina antes de aplicarla.',
    ],
    correct: 2,
    justification:
      'El nivel 2 de Adaptabilidad describe «revalúa la seguridad que le dan sus certezas, modificando su actuar en consonancia con los nuevos argumentos organizacionales» e incluye evaluar las posturas mostrando apertura para ajustar el accionar ante nuevas evidencias. Revisar la certeza propia y ajustar la actuación es la conducta del nivel 2.',
    wrong: [
      'Mantener el criterio anterior condicionando el cambio es resistencia, no adaptación.',
      'Aplicar con resistencia pasiva (quejas informales) no es la conducta de apoyo del nivel 2.',
      '',
      'Suspender la aplicación hasta una reconsideración no corresponde a la conducta esperada.',
    ],
    source: 'Elaboración propia a partir del material de práctica «DIAN-PRUEBAS-COMPORTAMENTALES». Resolución 65 de 2024 DIAN. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-015',
    indicator: 'i16',
    moduleId: 'm14',
    topic: 'Comunicación efectiva nivel 1: verificar comprensión',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'Explica a un ciudadano un procedimiento de tres pasos. El ciudadano asiente, pero usted nota que no tomó nota. ¿Qué conducta corresponde al nivel 1 de Comunicación efectiva?',
    options: [
      'Dar por cumplida la función, porque la información ya se entregó.',
      'Entregarle un folleto sin verificar nada más.',
      'Verificar la comprensión: pedirle que repita los pasos o confirmar los datos críticos antes de que se retire.',
      'Decirle que consulte la página web si tiene dudas.',
    ],
    correct: 2,
    justification:
      'El nivel 1 de Comunicación efectiva incluye «se asegura de que su interlocutor comprenda el mensaje». La verificación de comprensión (pedir que reformule o confirmar los puntos clave) es la conducta observable esperada, y no se cumple con la sola entrega de información.',
    wrong: [
      'Entregar información no es asegurar comprensión, conducta central del nivel 1.',
      'El folleto no verifica la comprensión del procedimiento concreto.',
      '',
      'Remitir a la página web evade la responsabilidad de asegurar la comprensión.',
    ],
    source: 'Elaboración propia a partir del material de práctica «DIAN-PRUEBAS-COMPORTAMENTALES». Resolución 65 de 2024 DIAN. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-b1-016',
    indicator: 'i19',
    moduleId: 'm14',
    topic: 'Orientación al usuario nivel 1',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'Un ciudadano llama alterado por una demora y, al explicarle, usted confirma que parte de su reclamo tiene fundamento. ¿Qué conducta corresponde al nivel 1 de Orientación al usuario y al ciudadano?',
    options: [
      'Defender la actuación de la entidad sin reconocer el error parcial.',
      'Escuchar con respeto, reconocer lo que procede del reclamo, explicar con claridad los pasos siguientes y los tiempos, y dejar el caso en gestión verificable.',
      'Transferir la llamada a otra área sin explicación.',
      'Prometer una solución inmediata sin verificar si es posible.',
    ],
    correct: 1,
    justification:
      'El nivel 1 de Orientación al usuario y al ciudadano (Resolución 65 de 2024 de la DIAN) exige atender las necesidades del ciudadano con respeto, brindar información clara sobre el trámite y su estado y orientarlo hacia la solución, sin promesas infundadas ni evasiones.',
    wrong: [
      'No reconocer lo procedente del reclamo deteriora la confianza y no orienta al usuario.',
      '',
      'Transferir sin explicación no orienta ni resuelve la necesidad.',
      'Prometer sin verificar genera expectativas falsas y no es servicio de calidad.',
    ],
    source: 'Elaboración propia a partir del material de práctica «DIAN-PRUEBAS-COMPORTAMENTALES». Resolución 65 de 2024 DIAN. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
]
