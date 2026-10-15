import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 2 (i02 gestión documental)
// Los PDF de estudio no desarrollan el tema: las preguntas se construyen
// sobre normas oficiales verificadas (Ley 594 de 2000, Decreto 1080 de
// 2015, Ley 527 de 1999, acuerdos del Archivo General de la Nación).
// Verificación: 2026-10-15.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m02-001',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Concepto de gestión documental',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Según el artículo 3 de la Ley 594 de 2000, la gestión documental se define como el conjunto de actividades administrativas y técnicas tendientes a…',
    options: [
      '…la digitalización de todos los documentos que produce la entidad, con el fin de eliminar el soporte en papel.',
      '…la planificación, manejo y organización de la documentación producida y recibida por las entidades, desde su origen hasta su destino final.',
      '…la custodia de los documentos históricos en un edificio con condiciones ambientales controladas.',
      '…la eliminación periódica de los documentos que ya no se necesitan para la gestión.',
    ],
    correct: 1,
    justification:
      'La definición legal de gestión documental (art. 3 de la Ley 594 de 2000) es la planificación, manejo y organización de la documentación producida y recibida por las entidades, desde su origen hasta su destino final. Cubre todo el ciclo vital y comprende tanto actividades administrativas como técnicas.',
    wrong: [
      'La digitalización es una técnica posible, no la definición legal: la gestión documental cubre los documentos cualquiera sea su soporte y no elimina el papel por el solo hecho de digitalizar.',
      '',
      'La custodia de los documentos históricos es una de las etapas del ciclo vital (archivo histórico), no el concepto completo de gestión documental.',
      'La eliminación es una de las decisiones de la disposición final y solo procede con fundamento en las tablas de retención y valoración; no define la gestión documental.',
    ],
    source: 'Ley 594 de 2000, art. 3 (Definiciones)',
  },
  {
    id: 'q-m02-002',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Ciclo vital del documento',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Un contrato que se encuentra en la oficina que lo tramitó y que se consulta de manera continua para el cumplimiento de sus obligaciones está en la etapa del ciclo vital correspondiente a…',
    options: [
      '…el archivo histórico, porque su conservación es permanente.',
      '…el archivo de gestión, porque es objeto de continua utilización y consulta administrativa por la oficina productora.',
      '…el archivo central, porque ya fue transferido y se consulta con menor frecuencia.',
      '…la disposición final, porque el expediente ya fue cerrado.',
    ],
    correct: 1,
    justification:
      'El artículo 23 de la Ley 594 de 2000 clasifica los archivos según el ciclo vital: el archivo de gestión reúne la documentación sometida a continua utilización y consulta administrativa por las oficinas productoras. Mientras el documento se usa todos los días en la oficina que lo tramitó, está en el archivo de gestión.',
    wrong: [
      'El archivo histórico recibe los documentos de conservación permanente transferidos desde el archivo central; no es la etapa de uso administrativo continuo.',
      '',
      'El archivo central agrupa los documentos transferidos por los archivos de gestión, con consulta menos frecuente pero todavía vigente para la administración.',
      'La disposición final es la decisión última (conservación total, eliminación, selección, microfilmación o digitalización) y se adopta con base en las tablas de retención y valoración, no por el hecho de cerrar el expediente.',
    ],
    source: 'Ley 594 de 2000, art. 23 (Formación de archivos)',
  },
  {
    id: 'q-m02-003',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Principios de procedencia y orden original',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Una dependencia decide reorganizar su archivo agrupando todos los documentos por tema (contratos, resoluciones, facturas), sin importar la oficina que los produjo, y ordenándolos por fecha para facilitar la búsqueda. Frente a los principios archivísticos, esta decisión es:',
    options: [
      'Correcta, porque la organización temática facilita la consulta y la eficiencia administrativa.',
      'Correcta, porque los principios archivísticos solo se aplican a los archivos históricos.',
      'Incorrecta, porque vulnera el principio de procedencia (respeto por el fondo y la oficina productora) y el principio de orden original (respeto por la secuencia del trámite).',
      'Indiferente, porque la organización del archivo es una decisión discrecional de cada dependencia.',
    ],
    correct: 2,
    justification:
      'La organización documental pública se rige por los principios de procedencia —respeto por el fondo documental y por la dependencia que produjo los documentos— y de orden original —respeto por la secuencia natural del trámite—. Reagrupar documentos de distintas oficinas por tema y reordenarlos por fecha destruye ambos principios y la capacidad probatoria del archivo.',
    wrong: [
      'La organización temática puede ser un criterio de búsqueda o de descripción, pero no puede sustituir la organización por fondos y series que impone el principio de procedencia.',
      'Los principios archivísticos rigen toda la función archivística y toda la organización documental pública, en cualquiera de las etapas del ciclo vital.',
      '',
      'No es discrecional: la organización con procedencia y orden original es una obligación derivada de la ley y de los acuerdos del Archivo General de la Nación, y su incumplimiento genera responsabilidad.',
    ],
    source: 'Ley 594 de 2000, arts. 4 y 11; acuerdos del Archivo General de la Nación',
  },
  {
    id: 'q-m02-004',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Tablas de retención documental',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Sobre las tablas de retención documental (TRD), la Ley 594 de 2000 establece que:',
    options: [
      'Son de elaboración potestativa: cada entidad decide si las adopta según su tamaño.',
      'Es obligatorio para las entidades del Estado elaborarlas y adoptarlas; son el instrumento que lista las series y tipos documentales con sus tiempos de retención.',
      'Solo se exigen a las entidades del sector financiero y a las sociedades vigiladas.',
      'Se elaboran únicamente en el archivo histórico, después de que el documento pierde valor administrativo.',
    ],
    correct: 1,
    justification:
      'El artículo 24 de la Ley 594 de 2000 consagra la obligatoriedad de las tablas de retención documental. La propia ley las define (art. 3) como el listado de series con sus correspondientes tipos documentales, a los cuales se les asigna el tiempo de permanencia en cada etapa del ciclo vital.',
    wrong: [
      'No es potestativa: la ley usa expresamente la fórmula de obligatoriedad para las entidades del Estado.',
      '',
      'La obligación no se limita a un sector: aplica a las entidades públicas y a las privadas que cumplen funciones públicas, y su elaboración se articula con el Programa de Gestión Documental.',
      'Las TRD se elaboran a partir de la producción documental de las oficinas y son el punto de partida de la organización del archivo, no un instrumento posterior del archivo histórico.',
    ],
    source: 'Ley 594 de 2000, arts. 3 y 24',
  },
  {
    id: 'q-m02-005',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Instrumentos archivísticos',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'El Decreto 1080 de 2015 (art. 2.8.2.5.8) enumera los instrumentos archivísticos con los que deben contar las entidades. ¿Cuál de los siguientes hace parte de esa lista junto con el cuadro de clasificación documental, las tablas de retención y valoración documental y el programa de gestión documental?',
    options: [
      'El plan de desarrollo institucional y el plan de acción anual.',
      'La tabla de control de acceso, el banco terminológico de series y subseries (BANTER) y el modelo de requisitos para la gestión de documentos electrónicos (MoReQ).',
      'El estado financiero consolidado y el informe de gestión anual.',
      'El manual de funciones y el reglamento interno de trabajo.',
    ],
    correct: 1,
    justification:
      'Entre los instrumentos archivísticos del Decreto 1080 de 2015 están: el cuadro de clasificación documental (CCD), las tablas de retención documental (TRD), las tablas de valoración documental (TVD), el programa de gestión documental (PGD), el plan institucional de archivos (PINAR), el inventario documental, el modelo de requisitos para la gestión de documentos electrónicos (MoReQ), el banco terminológico de series y subseries (BANTER), los mapas de procesos y flujos documentales y las tablas de control de acceso.',
    wrong: [
      'Los planes de desarrollo y de acción son instrumentos de planeación institucional, no instrumentos archivísticos del decreto.',
      '',
      'Los estados financieros y los informes de gestión son productos de la administración y la contabilidad, no instrumentos de la función archivística.',
      'El manual de funciones y el reglamento interno de trabajo pertenecen al ámbito laboral y administrativo, no al listado de instrumentos archivísticos.',
    ],
    source: 'Decreto 1080 de 2015, art. 2.8.2.5.8',
  },
  {
    id: 'q-m02-006',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Foliación del expediente',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Al revisar un expediente de 240 folios, un funcionario advierte que: hay tres folios numerados como 57, uno de ellos sin documento anexo; el folio 100 está repetido; y los últimos ocho documentos no están foliados. Conforme a la normativa archivística, la actuación correcta es:',
    options: [
      'Dejar el expediente como está y consignar la inconsistencia únicamente en el acta de cierre.',
      'Renumerar todo el expediente desde el folio 1 con lápiz, para que la foliación quede perfecta, y eliminar el folio sobrante.',
      'Corregir la foliación por medio de un acta o constancia firmada, foliar los documentos faltantes y anotar el error sin alterar la numeración ya asignada.',
      'Solicitar al Archivo General de la Nación que folie el expediente antes de cualquier actuación.',
    ],
    correct: 2,
    justification:
      'La foliación es la numeración consecutiva de cada folio que garantiza la integridad y el orden del expediente. Cuando se detecta un error, la práctica archivística admitida es dejar constancia del hecho (mediante acta o anotación en el índice o en la hoja de control) y continuar la numeración sin borrar ni repetir números ya asignados; el folio sin documento anexo se salva con la anotación correspondiente y los documentos no foliados se incorporan a la secuencia.',
    wrong: [
      'Dejar el expediente sin corregir afecta la integridad y la trazabilidad del expediente y dificulta su control; la constancia por sí sola no sustituye la corrección.',
      'Renumerar y eliminar folios altera un expediente ya conformado, destruye la referencia de citas anteriores y puede constituir una conducta irregular: la numeración de un expediente no se rehace hacia atrás.',
      '',
      'La foliación es responsabilidad de la entidad que conforma y custodia el expediente, no del Archivo General de la Nación, que ejerce la función archivística general y expide los lineamientos técnicos.',
    ],
    source: 'Acuerdo 042 de 2002 (art. 4) y Acuerdo 001 de 2024 del AGN (art. 4.3.1.8), que consagran la foliación del expediente y su equivalente electrónico',
  },
  {
    id: 'q-m02-007',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Expediente electrónico',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'En un sistema de gestión de documentos electrónicos de archivo (SGDEA), el expediente electrónico se conforma por los documentos electrónicos y, además, por:',
    options: [
      'Una copia impresa obligatoria de todos los documentos, foliada y firmada.',
      'El índice electrónico, la firma digital del índice por parte del servidor responsable y los metadatos mínimos obligatorios.',
      'Únicamente una carpeta comprimida con los archivos, sin metadatos ni índice.',
      'El acta de cierre firmada por el jefe de la dependencia y el inventario documental en papel.',
    ],
    correct: 1,
    justification:
      'En el expediente electrónico los documentos se organizan en el SGDEA y se acompañan del índice electrónico —que hace las veces de la foliación, al garantizar el orden y la integridad del conjunto—, de la firma del índice por el servidor público responsable y de los metadatos mínimos obligatorios para su identificación, autenticidad y conservación.',
    wrong: [
      'La impresión de todos los documentos no es un requisito del expediente electrónico: la equivalencia funcional permite que el mensaje de datos cumpla la función del documento en papel y no exige duplicar el soporte.',
      '',
      'Guardar los archivos sin índice ni metadatos impide acreditar el orden, la integridad y la autenticidad del expediente, y no satisface los requisitos del SGDEA.',
      'El acta de cierre y el inventario pueden formar parte de la gestión del expediente, pero no son los elementos definitorios del expediente electrónico en el sistema, y el inventario no se exige en papel.',
    ],
    source: 'Acuerdo 001 de 2024 del AGN (arts. 4.3.2.1 a 4.3.2.6); Ley 527 de 1999',
  },
  {
    id: 'q-m02-008',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Ordenación, foliación y clasificación',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'En la organización de un expediente, la foliación consiste específicamente en:',
    options: [
      'Agrupar los documentos por series y subseries según el cuadro de clasificación documental.',
      'Numerar consecutivamente cada uno de los folios que integran la unidad documental, garantizando su orden y su integridad.',
      'Describir el contenido del expediente en el inventario documental.',
      'Determinar el tiempo de permanencia del expediente en cada etapa del ciclo vital.',
    ],
    correct: 1,
    justification:
      'La foliación es la numeración consecutiva de los folios de la unidad documental. Es un requisito de integridad y de control: permite citar y verificar el contenido del expediente y detectar la pérdida, la sustracción o la inserción de documentos.',
    wrong: [
      'Agrupar por series y subseries según el cuadro de clasificación es la clasificación documental, una operación distinta.',
      '',
      'Describir el contenido del expediente en el inventario es la operación de descripción documental.',
      'Determinar el tiempo de permanencia es la valoración documental, que se plasma en las tablas de retención y valoración.',
    ],
    source: 'Acuerdo 042 de 2002 (art. 4) y Acuerdo 001 de 2024 del AGN (art. 4.3.1.8)',
  },
  {
    id: 'q-m02-009',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Documento electrónico y equivalencia funcional',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'Según la Ley 527 de 1999, cuando la ley exige que un documento conste por escrito o que sea firmado, dichos requisitos se entienden satisfechos por un mensaje de datos si este es accesible para su consulta posterior y si la firma cumple los criterios de confiabilidad. Este principio se conoce como:',
    options: [
      'Neutralidad tecnológica absoluta, que exime de toda forma al documento electrónico.',
      'Equivalencia funcional del mensaje de datos respecto del documento escrito y de la firma.',
      'Jerarquía documental, según la cual el papel prevalece sobre el documento electrónico.',
      'Presunción de autenticidad, que impide controvertir el contenido del mensaje de datos.',
    ],
    correct: 1,
    justification:
      'La Ley 527 de 1999 consagra la equivalencia funcional: el mensaje de datos produce los mismos efectos jurídicos que el documento escrito cuando la información es accesible para su consulta posterior, y las firmas electrónicas y digitales cumplen la función de la firma manuscrita cuando satisfacen los criterios de confiabilidad y de integridad previstos en la ley.',
    wrong: [
      'La neutralidad tecnológica significa que la ley no impone ni privilegia una tecnología determinada, pero no exime del cumplimiento de los criterios legales de accesibilidad e integridad.',
      '',
      'La ley no establece jerarquía a favor del papel: precisamente la equivalencia funcional busca que el mensaje de datos no sea discriminado por su soporte.',
      'El mensaje de datos puede ser controvertido y valorado conforme a la sana crítica; la ley no crea una presunción absoluta de autenticidad.',
    ],
    source: 'Ley 527 de 1999, arts. 2, 6, 7, 8, 10 y 11; Decreto 2364 de 2012 (compilado en el Decreto 1074 de 2015)',
  },
  {
    id: 'q-m02-010',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Transferencias documentales',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Una dependencia cumplió el tiempo de retención previsto en la tabla de retención documental para una serie documental y los documentos siguen teniendo valor administrativo para la entidad, aunque ya no se consultan a diario. La actuación que corresponde es:',
    options: [
      'Eliminar los documentos aplicando el procedimiento de eliminación documental.',
      'Transferirlos al archivo central mediante transferencia primaria, con el inventario documental correspondiente.',
      'Transferirlos directamente al archivo histórico, porque ya superaron su tiempo de retención.',
      'Conservarlos indefinidamente en la oficina productora, que es la única que puede custodiarlos.',
    ],
    correct: 1,
    justification:
      'La transferencia primaria es el traslado de los documentos del archivo de gestión al archivo central, una vez cumplido el tiempo de permanencia en la primera edad y previa aplicación de la tabla de retención documental. Se documenta con el inventario documental, que relaciona los folios que se transfieren.',
    wrong: [
      'La eliminación solo procede cuando la tabla de retención y valoración así lo dispone y se cumplen los requisitos del procedimiento; aquí los documentos conservan valor administrativo.',
      '',
      'El archivo histórico recibe los documentos de conservación permanente transferidos desde el archivo central (transferencia secundaria), no directamente desde el archivo de gestión.',
      'Retener indefinidamente en la oficina productora desconoce la tabla de retención, satura el archivo de gestión y desnaturaliza el ciclo vital.',
    ],
    source: 'Ley 594 de 2000, art. 23; Acuerdo 001 de 2024 del AGN (arts. 4.4.2 y 4.4.3)',
  },
  {
    id: 'q-m02-011',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Cuadro de clasificación documental',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'El cuadro de clasificación documental (CCD) cumple la función de:',
    options: [
      'Determinar cuáles documentos se eliminan y cuáles se conservan permanentemente.',
      'Desarrollar jerárquicamente el fondo documental de la entidad, identificando sus dependencias productoras, sus series y subseries documentales.',
      'Controlar el préstamo de expedientes a los funcionarios y su devolución oportuna.',
      'Registrar la ubicación física de cada caja y carpeta en el depósito del archivo.',
    ],
    correct: 1,
    justification:
      'El cuadro de clasificación documental es el instrumento que desarrolla jerárquicamente el fondo documental: identifica el fondo, las dependencias productoras y las series y subseries documentales, de acuerdo con la estructura orgánico-funcional de la entidad. Sobre él se construyen las tablas de retención documental.',
    wrong: [
      'Determinar qué se conserva y qué se elimina es la función de las tablas de retención y valoración documental, no del CCD.',
      '',
      'El control del préstamo se lleva mediante el formato de préstamo y su registro, con anotación del total de folios del expediente.',
      'Registrar la ubicación de cajas y carpetas es la función de la guía o del inventario topográfico.',
    ],
    source: 'Decreto 1080 de 2015, art. 2.8.2.5.8; acuerdos del Archivo General de la Nación',
  },
  {
    id: 'q-m02-012',
    indicator: 'i02',
    moduleId: 'm02',
    topic: 'Caso: integridad del expediente de fiscalización',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'En el archivo de una división de fiscalización se encuentra un expediente sancionatorio sin foliar, con documentos de dos contribuyentes distintos mezclados en una misma carpeta, sin hoja de control ni índice, y con una actuación notificada cuyo original no aparece. La consecuencia más grave desde el punto de vista de la gestión documental es que:',
    options: [
      'El expediente ocupa más espacio del necesario en el archivo de gestión.',
      'Se compromete la integridad, la autenticidad y la trazabilidad del expediente, y con ellas su valor probatorio en el proceso administrativo y en eventuales actuaciones judiciales.',
      'Se dificulta el cumplimiento de las metas de digitalización de la entidad.',
      'Se incumple únicamente una formalidad estética, subsanable con una nueva carátula.',
    ],
    correct: 1,
    justification:
      'La conformación del expediente —unidad documental, foliada, ordenada, con sus instrumentos de control e índice— no es una formalidad: es lo que acredita que los documentos son auténticos, íntegros y que corresponden al trámite que dicen documentar. Sin foliación ni control no puede probarse que un documento no fue sustituido ni retirado, y la mezcla de expedientes de distintos contribuyentes agrava el riesgo de divulgación indebida de información reservada en materia tributaria.',
    wrong: [
      'El espacio físico es un asunto operativo, no la consecuencia más grave de una conformación irregular.',
      '',
      'La digitalización es un medio de gestión y preservación, y no repara la pérdida de integridad del expediente original.',
      'La conformación del expediente es un requisito legal y técnico con efectos probatorios y disciplinarios, no una cuestión estética.',
    ],
    source: 'Acuerdo 001 de 2024 del AGN (arts. 4.3.1.1, 4.3.1.8, 4.3.1.9 y 4.3.2); Ley 594 de 2000, art. 11',
  },
]
