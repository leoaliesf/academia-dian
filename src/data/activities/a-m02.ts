import type { Activity } from '../types'

// Actividades guiadas — Módulo 2 (i02 gestión documental)
// Tema no desarrollado en los PDF de estudio: actividad construida sobre
// Ley 594 de 2000, Decreto 1080 de 2015, Ley 527 de 1999 y acuerdos del
// Archivo General de la Nación. Verificación: 2026-10-15.
export const ACTIVITIES: Activity[] = [
  {
    id: 'm02-a01',
    moduleId: 'm02',
    indicator: 'i02',
    title: 'Relaciona cada concepto archivístico con su definición',
    kind: 'relacionar',
    instructions:
      'Relaciona cada concepto de la gestión documental con la definición o el instrumento que le corresponde. Al terminar, verifica y revisa la explicación de cada pareja.',
    pairs: [
      { a: 'Gestión documental', b: 'Actividades administrativas y técnicas de planificación, manejo y organización de la documentación desde su origen hasta su destino final' },
      { a: 'Archivo de gestión', b: 'Documentación sometida a continua utilización y consulta administrativa por la oficina que la produjo o la recibió' },
      { a: 'Archivo central', b: 'Conjunto de documentos transferidos por los archivos de gestión de la entidad, con consulta menos frecuente pero todavía vigente' },
      { a: 'Archivo histórico', b: 'Recibe del archivo central los documentos de archivo de conservación permanente' },
      { a: 'Tabla de retención documental', b: 'Listado de series con sus tipos documentales y los tiempos de permanencia en cada etapa del ciclo vital' },
      { a: 'Cuadro de clasificación documental', b: 'Desarrollo jerárquico del fondo documental: dependencias productoras, series y subseries' },
      { a: 'Foliación', b: 'Numeración consecutiva de cada folio de la unidad documental, garantía de su orden e integridad' },
      { a: 'Inventario documental', b: 'Instrumento descriptivo que relaciona los documentos o unidades documentales en cualquier etapa del ciclo vital' },
      { a: 'Transferencia primaria', b: 'Traslado de los documentos del archivo de gestión al archivo central' },
      { a: 'Mensaje de datos', b: 'Información generada, enviada, recibida, almacenada o comunicada por medios electrónicos, ópticos o similares (Ley 527 de 1999)' },
    ],
    explanation:
      'Paso 1: ubica cada concepto en el momento del ciclo vital al que pertenece: el archivo de gestión usa los documentos, el archivo central los custodia después de la transferencia primaria y el archivo histórico conserva los de valor permanente. Paso 2: distingue los instrumentos: el CCD organiza jerárquicamente el fondo (no fija tiempos), la TRD fija series y tiempos de retención, y el inventario describe lo que existe en cada etapa. Paso 3: separa las operaciones técnicas: clasificar (por el CCD), ordenar (secuencia del trámite), foliar (numerar folios), describir (inventario e índice) y cerrar. Paso 4: recuerda que la foliación y el inventario son operaciones de control: permiten citar el contenido de un expediente y detectar la pérdida o la inserción de documentos. Paso 5: en el entorno electrónico, el mensaje de datos de la Ley 527 de 1999 cumple la misma función que el documento escrito (equivalencia funcional) y el índice electrónico cumple la función de la foliación.',
  },
  {
    id: 'm02-a02',
    moduleId: 'm02',
    indicator: 'i02',
    title: 'Detecta las inconsistencias del expediente',
    kind: 'inconsistencias',
    instructions:
      'Revisa la descripción del expediente y marca si cada afirmación describe una inconsistencia documental (incumplimiento de las reglas de conformación, foliación u organización) o si, por el contrario, es una práctica correcta.',
    scenario:
      'En el archivo de gestión de una división de fiscalización se encuentra el expediente S-2026-014, correspondiente a un proceso de determinación de impuestos, con las siguientes características.',
    items: [
      { text: 'El expediente no tiene hoja de control ni índice de contenido.', inconsistent: true, why: 'El índice y la hoja de control son los instrumentos que permiten identificar y verificar el contenido del expediente; sin ellos no hay control de lo que debe estar y de lo que falta.' },
      { text: 'La carpeta contiene documentos de dos contribuyentes distintos, porque «así se ahorra espacio».', inconsistent: true, why: 'Cada expediente corresponde a una unidad documental y a un trámite: mezclar expedientes rompe el principio de orden original y el de integridad, y en materia tributaria agrava el riesgo de revelar información reservada de un tercero.' },
      { text: 'Los documentos están ordenados en la secuencia en que se produjo el trámite, del más antiguo al más reciente.', inconsistent: false, why: 'Es la forma correcta: el orden original reproduce la secuencia del trámite y es la base de la organización del expediente.' },
      { text: 'Los folios están numerados con lápiz de forma consecutiva, del 1 al 183.', inconsistent: false, why: 'La foliación consecutiva es la técnica correcta. La numeración se hace folio por folio y sin omitir ni repetir números.' },
      { text: 'El folio 92 aparece dos veces porque se numeró dos veces el mismo documento.', inconsistent: true, why: 'La foliación no admite repeticiones. Si se detecta el error, debe dejarse la constancia correspondiente (acta o anotación en el índice o en la hoja de control) sin rehacer la numeración ya asignada.' },
      { text: 'Un documento fundamental del expediente —el requerimiento especial— se retiró y se prestó a otra dependencia sin dejar registro alguno.', inconsistent: true, why: 'Los documentos que salen del expediente deben controlarse con el formato y el registro de préstamo, que consigna el número total de folios y la fecha de devolución. Sin registro se pierde la trazabilidad y la posibilidad de probar que el documento existió.' },
      { text: 'Al final del expediente se anexó una constancia de cierre, firmada, con la fecha en que se agotó la serie documental.', inconsistent: false, why: 'El cierre del expediente mediante constancia firmada es una práctica conforme a la normativa archivística: marca el momento a partir del cual el expediente no admite nuevas incorporaciones.' },
      { text: 'El expediente permanece en la oficina productora cuatro años después de que la TRD preveía su transferencia al archivo central.', inconsistent: true, why: 'Cumplido el tiempo de permanencia en el archivo de gestión, debe realizarse la transferencia primaria al archivo central con el inventario documental. Retenerlo desnaturaliza el ciclo vital, satura el archivo de gestión y desconoce la TRD.' },
      { text: 'Los documentos se conservan en una carpeta de cartón en un estante metálico, con el espacio identificado por el código de la serie documental.', inconsistent: false, why: 'La identificación por el código de la serie y la custodia en condiciones básicas adecuadas son prácticas correctas de instalación y de control de la ubicación.' },
      { text: 'La radicación de una actuación se registró con fecha posterior a la de su notificación personal.', inconsistent: true, why: 'Es una inconsistencia cronológica: un acto no puede notificarse antes de existir. Este tipo de incoherencia es señal de una posible alteración del expediente y debe investigarse.' },
    ],
    explanation:
      'Paso 1: verifica la identidad del expediente: ¿todos los documentos corresponden al mismo trámite y al mismo sujeto? Si hay documentos de otro contribuyente, la unidad documental está rota. Paso 2: verifica la foliación: numeración consecutiva, sin omisiones ni repeticiones, y constancia de los errores detectados sin rehacer la numeración anterior. Paso 3: verifica los instrumentos de control: índice, hoja de control, inventario documental y registro de préstamo con el total de folios. Paso 4: verifica la cronología y la coherencia interna del trámite: fechas de radicación, de notificación y de cierre deben ser sucesivas y lógicas. Paso 5: verifica el ciclo vital: si la TRD preveía la transferencia al archivo central, la retención indefinida en la oficina productora es un incumplimiento. Paso 6: recuerda el efecto de las inconsistencias: comprometen la integridad y la autenticidad del expediente y, con ellas, su valor probatorio en el proceso administrativo y en la eventual actuación judicial.',
  },
]
