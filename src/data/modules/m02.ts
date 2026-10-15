import type { ModuleDef } from '../types'

// ============================================================
// Módulo 2 — Gestión documental y trazabilidad de expedientes
// Indicador: i02
// Fuentes: Ley 594 de 2000, Decreto 1080 de 2015, Ley 527 de 1999,
// Decreto 2364 de 2012 y Acuerdos del Archivo General de la Nación
// (Acuerdo 001 de 2024, Acuerdo 002 de 2014, Acuerdo 042 de 2002),
// complementados con los instrumentos archivísticos publicados por la
// DIAN (PGD, TRD, CCD, BANTER). Verificados en fuentes oficiales el
// 2026-10-15. Los PDF de estudio NO desarrollan esta temática.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm02',
  order: 2,
  title: 'Gestión documental y trazabilidad de expedientes',
  description:
    'Cómo se produce, organiza, conserva y consulta el documento público: principios archivísticos, ciclo vital, el expediente y su trazabilidad, los instrumentos archivísticos (CCD, TRD, TVD y PGD) y su aplicación concreta en la DIAN y en los expedientes de fiscalización.',
  indicators: ['i02'],
  lessons: [
    {
      id: 'm02-l01',
      moduleId: 'm02',
      title: 'Fundamentos de la gestión documental: principios, ciclo vital y Ley 594 de 2000',
      indicators: ['i02'],
      objectives: [
        'Explicar qué es la gestión documental y por qué es una función pública obligatoria.',
        'Aplicar los principios archivísticos de procedencia y orden original.',
        'Distinguir las tres edades del ciclo vital del documento: archivo de gestión, central e histórico.',
        'Identificar los artículos de la Ley 594 de 2000 que soportan cada obligación archivística.',
      ],
      sections: [
        {
          heading: '¿Qué es la gestión documental?',
          paragraphs: [
            'La gestión documental es el conjunto de actividades administrativas y técnicas orientadas a la planificación, manejo y organización de la documentación producida y recibida por las entidades, desde su origen hasta su destino final, con el objeto de facilitar su utilización y conservación.',
            'La Ley 594 de 2000 (Ley General de Archivos) la estructura bajo el concepto de «archivo total»: el proceso documental comprende la producción o recepción, la distribución, la consulta, la organización, la recuperación y la disposición final de los documentos.',
            'No es una tarea auxiliar ni un simple trámite de oficina. La Ley 594 de 2000 dispone que «el Estado está obligado a la creación, organización, preservación y control de los archivos», y esa obligación se cumple aplicando los principios de procedencia y orden original, las reglas del ciclo vital y las normas técnicas de la función archivística.',
          ],
          callout: {
            type: 'norma',
            text: 'Ley 594 de 2000, art. 22 (archivo total): producción o recepción · distribución · consulta · organización · recuperación · disposición final.',
          },
        },
        {
          heading: 'Los principios archivísticos',
          paragraphs: [
            'Dos principios gobiernan toda la organización documental pública y son el criterio con el que se evalúa si un archivo está bien o mal organizado:',
          ],
          bullets: [
            'Principio de procedencia (respect des fonds): los documentos deben conservarse agrupados según la unidad administrativa que los produjo. No se mezclan documentos de dependencias distintas, aunque traten el mismo asunto.',
            'Principio de orden original: los documentos deben conservarse en el orden en que fueron producidos y acumulados durante el trámite. Ese orden es información: revela la secuencia del procedimiento y no puede alterarse.',
          ],
        },
        {
          heading: 'Los principios generales del artículo 4 y las funciones del archivo',
          paragraphs: [
            'A estos dos principios rectores se suman los principios generales del artículo 4 de la Ley 594 de 2000, entre ellos los fines de los archivos, la institucionalidad e instrumentalidad, la responsabilidad, la dirección y coordinación de la función archivística a cargo del Archivo General de la Nación, la administración y acceso, la racionalidad, la modernización, la función probatoria de los archivos, el manejo y aprovechamiento y la interpretación.',
            'La función de los archivos se expresa en tres dimensiones que conviene memorizar: son PROBATORIOS (sirven de prueba de los hechos y de las actuaciones administrativas), GARANTIZADORES (protegen los derechos de las personas y del Estado) y PERPETUADORES de la memoria institucional y de la historia.',
          ],
          callout: {
            type: 'memoriza',
            text: 'PROCEDENCIA = agrupar por dependencia productora. ORDEN ORIGINAL = conservar la secuencia real del trámite. Si alteras cualquiera de los dos, el archivo pierde valor probatorio.',
          },
        },
        {
          heading: 'El ciclo vital del documento: las tres edades del archivo',
          paragraphs: [
            'Todo documento atraviesa un ciclo vital (también llamado teoría de las tres edades). La Ley 594 de 2000 divide los archivos según la etapa del ciclo en que se encuentran y define cada uno en su artículo 3:',
          ],
          table: {
            caption: 'Las tres edades del archivo según la Ley 594 de 2000',
            headers: ['Etapa', 'Denominación legal', 'Qué contiene', 'Quién lo custodia'],
            rows: [
              [
                'Primera edad',
                'Archivo de gestión',
                'Documentos de continua utilización y consulta administrativa por la oficina productora, necesarios para resolver los asuntos en curso.',
                'La dependencia u oficina que produce el documento.',
              ],
              [
                'Segunda edad',
                'Archivo central',
                'Documentos transferidos por los distintos archivos de gestión; su consulta es menos frecuente, pero siguen vigentes y disponibles para la entidad y el público.',
                'El área coordinadora de la función archivística de la entidad.',
              ],
              [
                'Tercera edad',
                'Archivo histórico',
                'Documentos de conservación permanente, transferidos desde el archivo central por su valor secundario (histórico, científico o cultural).',
                'El Archivo General de la Nación o el archivo histórico territorial correspondiente.',
              ],
            ],
          },
        },
        {
          heading: 'Disposición final y protección de los documentos de archivo',
          paragraphs: [
            'Al final del ciclo se produce la disposición final, que puede ser conservación total, eliminación, selección o digitalización, según lo que determine la tabla de retención documental y la tabla de valoración documental.',
            'La Ley 594 de 2000 también establece que los documentos de archivo de las entidades públicas no pueden salir del país sin autorización del Archivo General de la Nación y que los documentos históricos son inalienables, imprescriptibles e inembargables.',
          ],
          callout: {
            type: 'importante',
            text: 'La transferencia avanza siempre en un solo sentido: archivo de gestión → archivo central → archivo histórico. Nunca al contrario. Un documento que «devuelve» de histórico a gestión está fuera de la ley.',
          },
        },
        {
          heading: 'El documento y el archivo: definiciones legales',
          paragraphs: [
            'El artículo 3 de la Ley 594 de 2000 fija las definiciones que se usan en todo el sector público. Estas son las de mayor rendimiento en un examen:',
          ],
          bullets: [
            'Archivo: conjunto de documentos, sea cual fuere su fecha, forma o soporte material, acumulados en un proceso natural por una persona o entidad pública o privada, en el transcurso de su gestión.',
            'Documento de archivo: toda información registrada, con independencia del soporte o la forma, producida o recibida por una entidad en el ejercicio de sus funciones.',
            'Tabla de retención documental: listado de series con sus correspondientes tipos documentales, a las cuales se asigna el tiempo de permanencia en cada etapa del ciclo vital.',
            'Archivo total: concepto que integra las tres etapas del ciclo y todos los soportes en que se registra la información.',
          ],
        },
        {
          heading: 'Otras obligaciones de la Ley 594 de 2000',
          paragraphs: [
            'Además de los principios y las definiciones, la ley impone deberes concretos cuya inobservancia genera hallazgos de auditoría y sanciones disciplinarias:',
          ],
          bullets: [
            'Art. 24: es obligatorio para las entidades del Estado elaborar y adoptar las respectivas tablas de retención documental.',
            'Art. 26: las entidades deben elaborar inventarios de los documentos que produzcan en ejercicio de sus funciones, asegurando el control en todas las fases.',
            'Art. 25: la conservación, retención y servicio de documentos especiales (historias clínicas, historias laborales, documentos contables y notariales) se rige por reglas propias.',
            'El incumplimiento de las normas archivísticas se sanciona administrativa y disciplinariamente.',
          ],
          norm: {
            norm: 'Ley 594 de 2000',
            article: 'arts. 3, 4, 11, 22, 23, 24, 25 y 26',
            status: 'vigente',
            note: 'Ley General de Archivos: definiciones, principios, archivo total, ciclo vital, obligatoriedad de las TRD e inventarios documentales.',
          },
        },
      ],
      summary: [
        'La gestión documental es la planificación, manejo y organización de los documentos desde su origen hasta su destino final; opera bajo el concepto de archivo total (Ley 594 de 2000, art. 22).',
        'Los principios de procedencia (agrupar por dependencia productora) y orden original (conservar la secuencia del trámite) rigen toda la organización documental pública (art. 11).',
        'El ciclo vital tiene tres edades: archivo de gestión (oficina productora), archivo central (área coordinadora) y archivo histórico (documentos de conservación permanente).',
        'La función de los archivos es probatoria, garantizadora y perpetuadora de la memoria institucional.',
        'Es obligatorio elaborar y adoptar las TRD (art. 24) y elaborar inventarios documentales (art. 26); su incumplimiento genera responsabilidad administrativa y disciplinaria.',
      ],
      memorize: [
        'Art. 22 Ley 594/2000 — archivo total: producción/recepción · distribución · consulta · organización · recuperación · disposición final.',
        'Archivo de gestión (1.ª edad) → archivo central (2.ª edad) → archivo histórico (3.ª edad).',
        'Principios: procedencia + orden original.',
        'Funciones del archivo: probatoria · garantizadora · perpetuadora.',
        'Art. 24: las TRD son obligatorias para las entidades del Estado.',
      ],
      examples: [
        {
          heading: 'Ejemplo: cómo se ve el ciclo vital en la práctica',
          paragraphs: [
            'Una resolución de sanción se expide en la Dirección Seccional: mientras el proceso está en trámite y puede ser objeto de recursos, el original vive en el archivo de gestión de la dependencia que la profirió. Al año siguiente, una vez en firme y notificada, se transfiere al archivo central de la seccional, donde se consulta con menos frecuencia. Veinte años después, la TRD ordena conservación total: el expediente se transfiere al archivo histórico y queda disponible para investigación y memoria institucional.',
            'Si en el camino alguien desempapela el expediente, mezcla hojas de otro contribuyente o invierte el orden de las actuaciones, se rompen ambos principios y el valor probatorio del documento queda cuestionado aunque el contenido sea verdadero.',
          ],
        },
        {
          heading: 'Ejemplo: por qué el orden original es prueba',
          paragraphs: [
            'En un expediente sancionatorio, la secuencia de folios demuestra que el requerimiento especial se notificó ANTES de la resolución sanción. Si la foliación muestra lo contrario, la entidad tendría que probar la fecha por otros medios. El orden del expediente no es estética: es la prueba de la secuencia procedimental y del respeto de los términos y del derecho de defensa.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que el archivo central es el archivo de la oficina donde trabajo.',
          correction: 'El archivo de gestión es el de la oficina productora y contiene los documentos de trámite corriente. El archivo central recibe los documentos ya transferidos por las oficinas y los custodia el área coordinadora de la función archivística de la entidad.',
        },
        {
          mistake: 'Organizar los documentos por tema o por nombre del contribuyente en lugar de por dependencia y serie documental.',
          correction: 'Eso viola el principio de procedencia. La organización se hace por dependencia productora y por series y subseries definidas en el cuadro de clasificación documental y en la TRD, no por criterios de conveniencia personal.',
        },
        {
          mistake: 'Pensar que la gestión documental solo aplica al papel.',
          correction: 'La Ley 594 de 2000 define el archivo como el conjunto de documentos «sea cual fuere su fecha, forma o soporte material». Los documentos electrónicos están plenamente cubiertos y tienen reglas propias de conformación, foliación funcional y preservación.',
        },
      ],
      norms: [
        {
          norm: 'Ley 594 de 2000',
          article: 'arts. 3, 4, 11, 22, 23, 24, 25, 26',
          status: 'vigente',
          note: 'Ley General de Archivos: definiciones (art. 3), principios (art. 4), obligación de creación y organización con procedencia y orden original (art. 11), archivo total (art. 22), ciclo vital (art. 23), TRD obligatorias (art. 24) e inventarios (art. 26).',
        },
        {
          norm: 'Constitución Política',
          article: 'art. 74',
          status: 'vigente',
          note: 'Derecho de acceso a los documentos públicos, salvo las excepciones legales: fundamento del servicio de consulta de archivos.',
        },
      ],
      links: [
        { label: 'Archivo General de la Nación — Ley 594 de 2000', url: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/' },
        { label: 'Normograma DIAN — Ley 594 de 2000', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/ley_0594_2000.htm' },
        { label: 'Función Pública — Gestor Normativo (Ley 594 de 2000)', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4275' },
      ],
      mindmap: {
        root: 'Gestión documental',
        branches: [
          {
            label: 'Marco legal',
            children: ['Ley 594 de 2000', 'Decreto 1080 de 2015 (compila)', 'Acuerdos del AGN'],
          },
          {
            label: 'Principios',
            children: ['Procedencia', 'Orden original', 'Institucionalidad', 'Responsabilidad', 'Acceso'],
          },
          {
            label: 'Ciclo vital',
            children: ['Archivo de gestión', 'Archivo central', 'Archivo histórico', 'Disposición final'],
          },
          {
            label: 'Función del archivo',
            children: ['Probatoria', 'Garantizadora', 'Perpetuadora'],
          },
          {
            label: 'Obligaciones',
            children: ['TRD obligatorias (art. 24)', 'Inventarios (art. 26)', 'Documentos especiales (art. 25)'],
          },
        ],
      },
      mindmapText:
        'La gestión documental es una función pública regida por la Ley 594 de 2000 y desarrollada por los acuerdos del Archivo General de la Nación. Se apoya en dos principios: procedencia (agrupar por dependencia productora) y orden original (conservar la secuencia del trámite). El documento recorre un ciclo vital de tres edades: archivo de gestión, archivo central y archivo histórico, al final del cual se decide su disposición final. Los archivos cumplen función probatoria, garantizadora y perpetuadora, y las entidades están obligadas a elaborar tablas de retención documental e inventarios.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo en los PDF',
          note: 'Tema no desarrollado en los PDF; contenido construido a partir de fuentes oficiales verificadas (Ley 594 de 2000, Archivo General de la Nación, portal DIAN). Verificación: 2026-10-15.',
        },
      ],
      activityId: 'm02-a01',
    },
    {
      id: 'm02-l02',
      moduleId: 'm02',
      title: 'El expediente y su trazabilidad: conformación, foliación, TRD y expediente electrónico',
      indicators: ['i02'],
      objectives: [
        'Definir el expediente como unidad documental compleja y explicar cómo se conforma.',
        'Aplicar las reglas de ordenación interna, foliación e inventario de un expediente.',
        'Diferenciar el cuadro de clasificación documental, la tabla de retención documental y la tabla de valoración documental.',
        'Explicar qué es la trazabilidad documental, cómo se garantiza y qué la rompe.',
        'Reconocer los elementos del expediente electrónico y el valor probatorio del mensaje de datos.',
      ],
      sections: [
        {
          heading: '¿Qué es un expediente?',
          paragraphs: [
            'El expediente es una unidad documental compleja: el conjunto de documentos de archivo producidos y recibidos durante el desarrollo de un mismo trámite o actuación administrativa, que se reúnen y ordenan para demostrar la secuencia del procedimiento.',
            'Los acuerdos del Archivo General de la Nación desarrollan esta materia. El Acuerdo 002 de 2014 estableció los criterios básicos para la creación, conformación, organización, control y consulta de los expedientes de archivo, y el Acuerdo 001 de 2024, por el cual se expide el Acuerdo Único de la Función Archivística, recogió y actualizó esa regulación junto con la de las tablas de retención y valoración documental.',
            'El expediente se conforma a partir del cuadro de clasificación documental y de la tabla de retención documental, y abarca desde el inicio hasta la terminación del trámite. Su gestión comprende la creación, el control de la incorporación de documentos, la foliación o paginación, la ordenación interna, el inventario y el cierre.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Unidad documental SIMPLE = varios documentos del mismo tipo (por ejemplo, varias declaraciones de renta). Unidad documental COMPLEJA = EXPEDIENTE, con documentos de tipos distintos unidos por un mismo trámite.',
          },
        },
        {
          heading: 'Ordenación interna, foliación e inventario',
          paragraphs: [
            'Conformado el expediente, se aplican tres operaciones técnicas que son el corazón de la organización documental:',
          ],
          bullets: [
            'Ordenación: los documentos se disponen respetando el orden original del trámite, sin alterar la secuencia en que fueron producidos y acumulados.',
            'Foliación: se numeran correlativamente todos los folios de la unidad documental, lo que permite controlar el volumen y la integridad del expediente. Es el mecanismo archivístico aceptado para garantizar que ninguna hoja se sustraiga o se agregue.',
            'Inventario: se relaciona el contenido del expediente mediante el formato único de inventario documental, que es el soporte del control y del acta de transferencia.',
            'La foliación se practica sobre todas las unidades documentales de las series y subseries, con el fin de facilitar su ordenación, consulta y control, y el registro de préstamo debe indicar el número total de folios para poder verificar la devolución íntegra. En soporte electrónico, el equivalente funcional de la foliación es la asociación de los documentos a un índice electrónico.',
          ],
        },
        {
          heading: 'Reglas de control del expediente y del préstamo documental',
          paragraphs: [
            'Dos reglas de control son de especial relevancia práctica:',
          ],
          bullets: [
            'El orden interno de los documentos de un expediente no puede modificarse; cualquier intervención requiere autorización del comité competente de la entidad.',
            'Los expedientes cerrados y transferidos no se intervienen: no se refolían ni se reorganizan. Una vez cerrado, el expediente es intocable.',
          ],
          callout: {
            type: 'error',
            text: 'Error frecuente en auditorías: expedientes sin foliar, con foliación duplicada o con folios agregados después del cierre. Es la observación más repetida por los organismos de control en materia archivística.',
          },
        },
        {
          heading: 'Del cuadro de clasificación a la tabla de valoración: los instrumentos archivísticos',
          paragraphs: [
            'El Decreto 1080 de 2015, Decreto Único Reglamentario del Sector Cultura, enumera en su artículo 2.8.2.5.8 los instrumentos archivísticos con los que se desarrolla la gestión documental en las entidades públicas. Son la caja de herramientas completa del gestor documental:',
          ],
          table: {
            caption: 'Instrumentos archivísticos — Decreto 1080 de 2015, art. 2.8.2.5.8',
            headers: ['Instrumento', 'Qué es y para qué sirve'],
            rows: [
              ['Cuadro de Clasificación Documental (CCD)', 'Estructura jerárquica que refleja el organigrama y las funciones de la entidad: fondo, secciones, subsecciones, series y subseries. Es el mapa del archivo.'],
              ['Tabla de Retención Documental (TRD)', 'Listado de series y subseries con sus tipos documentales y los tiempos de permanencia en el archivo de gestión y en el archivo central, más la disposición final.'],
              ['Tabla de Valoración Documental (TVD)', 'Instrumento que valora los documentos acumulados (fondos cerrados o sin TRD) para determinar su disposición final.'],
              ['Programa de Gestión Documental (PGD)', 'Plan institucional que articula los procesos de gestión documental con la planeación estratégica de la entidad.'],
              ['Plan Institucional de Archivos (PINAR)', 'Herramienta de planeación que define los proyectos y acciones archivísticas de la entidad a mediano plazo.'],
              ['Inventario Documental (FUID)', 'Relación ordenada de las unidades documentales; soporta el control y las transferencias.'],
              ['Modelo de Requisitos (MoReQ)', 'Especificaciones para la gestión de documentos electrónicos.'],
              ['BANTER', 'Banco terminológico de tipos, series y subseries documentales: unifica el lenguaje documental de la entidad.'],
              ['Tablas de Control de Acceso (TCA)', 'Definen los niveles de acceso y las restricciones sobre los documentos, según la ley de transparencia y las reservas legales.'],
            ],
          },
        },
        {
          heading: 'Cómo se relacionan el CCD, la TRD y la TVD',
          paragraphs: [
            'La relación lógica entre los tres primeros es la pregunta clásica de examen. El CCD responde «cómo se organiza el archivo de la entidad». La TRD responde «cuánto tiempo se conserva cada serie y qué se hace con ella al final». La TVD se usa para valorar acervos que no cuentan con TRD aplicable, típicamente fondos acumulados o cerrados.',
          ],
          callout: {
            type: 'memoriza',
            text: 'CCD = CÓMO se clasifica (jerarquía de funciones). TRD = CUÁNTO se retiene y QUÉ se hace al final. TVD = valoración de fondos sin TRD.',
          },
        },
        {
          heading: 'La trazabilidad documental: qué es y cómo se garantiza',
          paragraphs: [
            'La trazabilidad es la capacidad de reconstruir, sin saltos ni vacíos, la historia completa de una actuación: qué documento se produjo, quién lo produjo, cuándo, en qué orden, qué se decidió y a quién se notificó. En términos prácticos, es poder seguirle el rastro al expediente y demostrar esa secuencia ante un tercero (un juez, un organismo de control, el propio ciudadano).',
            'La trazabilidad no depende de la memoria de los funcionarios, sino de mecanismos objetivos incorporados al expediente:',
          ],
          bullets: [
            'Radicación con número único y fecha: todo documento que entra o sale queda registrado en el sistema de gestión documental.',
            'Consecutividad: folios numerados correlativamente y sin interrupciones (físico) o índice electrónico con documentos asociados (electrónico).',
            'Hoja de control: formato que relaciona los documentos del expediente y sus novedades.',
            'Metadatos: en el entorno electrónico, los datos que describen el documento (autor, fecha, tipo documental, serie, versión) son parte del documento y lo hacen verificable.',
            'Registro de préstamo y transferencia: dejando constancia del número total de folios, se puede comprobar que el expediente vuelve íntegro.',
            'Cierre formal del expediente: marca el fin del trámite y congela su contenido.',
          ],
        },
        {
          heading: 'Cómo se rompe la trazabilidad',
          paragraphs: [
            'La trazabilidad se rompe cuando hay folios sin numerar, documentos incorporados después del cierre, ausencia de constancia de notificación, expedientes desmembrados o versiones electrónicas sin control de metadatos. En estos casos el expediente puede seguir existiendo, pero deja de probar de forma confiable lo que ocurrió.',
          ],
          callout: {
            type: 'importante',
            text: 'Trazabilidad = secuencia + integridad + autoría verificable. Un expediente completo pero sin orden ni foliación NO es trazable; una actuación sin constancia de notificación tampoco.',
          },
        },
        {
          heading: 'El expediente electrónico y el valor probatorio del mensaje de datos',
          paragraphs: [
            'El Acuerdo 001 de 2024 regula el expediente electrónico: se conforma en el Sistema de Gestión de Documentos Electrónicos de Archivo (SGDEA) y está integrado por los documentos electrónicos, el índice electrónico, la firma de ese índice y los metadatos. El acuerdo regula también su cierre, la eliminación por borrado seguro cuando la TRD lo autorice y su preservación a largo plazo, así como el expediente híbrido, que combina documentos en soporte físico y electrónico.',
            'El respaldo jurídico de lo anterior está en la Ley 527 de 1999, que adoptó los principios de equivalencia funcional y neutralidad tecnológica:',
          ],
          bullets: [
            'Art. 2: define mensaje de datos como la información generada, enviada, recibida, almacenada o comunicada por medios electrónicos, ópticos o similares; define firma digital como el valor numérico que se adhiere a un mensaje de datos y que, utilizando un procedimiento matemático conocido, vinculado a la clave del iniciador, permite determinar que ese valor se ha obtenido exclusivamente con dicha clave.',
            'Arts. 6, 7 y 8: equivalencia funcional del escrito, de la firma y del original.',
            'Art. 10: los mensajes de datos son admisibles como prueba y no se les negará efecto, validez o fuerza obligatoria por el solo hecho de estar en ese formato.',
            'Art. 11: su fuerza probatoria se valora conforme a las reglas de la sana crítica, atendiendo la confiabilidad del modo de generación, archivo y comunicación, la integridad de la información y la identificación del iniciador.',
          ],
        },
        {
          heading: 'La firma electrónica y el cuadro comparativo del expediente',
          paragraphs: [
            'El Decreto 2364 de 2012 reglamentó el artículo 7 de la Ley 527 de 1999 en materia de firma electrónica, consagró la neutralidad tecnológica y precisó cuándo una firma electrónica cumple el requisito de firma: cuando es tan confiable y apropiada como el fin con que se generó el mensaje, y cuando los datos de creación corresponden exclusivamente al firmante y permiten detectar alteraciones posteriores.',
            'De esta arquitectura se derivan dos consecuencias prácticas para la DIAN: un acto administrativo electrónico debidamente firmado y con metadatos íntegros tiene el mismo valor que uno en papel; y la impresión simple de un documento electrónico no es el documento, sino una copia sujeta a las reglas generales de valoración.',
          ],
          table: {
            caption: 'Expediente físico vs. expediente electrónico',
            headers: ['Aspecto', 'Expediente físico', 'Expediente electrónico'],
            rows: [
              ['Soporte', 'Papel y unidades de conservación (carpetas, cajas)', 'Archivos digitales gestionados en un SGDEA'],
              ['Foliación', 'Numeración correlativa de folios, en el ángulo superior derecho', 'Equivalente funcional: asociación a un índice electrónico'],
              ['Integridad', 'Control por foliación, inventario y registro de préstamo', 'Metadatos, firmas y control de versiones'],
              ['Cierre', 'Acta de cierre; el expediente cerrado no se interviene', 'Cierre en el sistema; se bloquean nuevas incorporaciones'],
              ['Consulta', 'Presencial, con préstamo controlado', 'En línea, sujeta a las tablas de control de acceso'],
            ],
          },
        },
      ],
      summary: [
        'El expediente es una unidad documental compleja que reúne los documentos de un mismo trámite; se conforma desde el cuadro de clasificación y la TRD y se cierra al terminar la actuación.',
        'Su gestión comprende creación, control de documentos, foliación o paginación, ordenación interna, inventario y cierre; el orden interno no se modifica y los expedientes cerrados no se intervienen.',
        'Los instrumentos archivísticos del Decreto 1080 de 2015 (art. 2.8.2.5.8) son CCD, TRD, TVD, PGD, PINAR, inventario, MoReQ, BANTER y tablas de control de acceso.',
        'La trazabilidad es la reconstrucción completa de la actuación y se garantiza con radicación, consecutividad de folios, hoja de control, metadatos, registro de préstamo y cierre formal.',
        'El expediente electrónico se conforma en el SGDEA con documentos, índice electrónico, firma del índice y metadatos; la Ley 527 de 1999 le reconoce equivalencia funcional y valor probatorio valorado por sana crítica.',
      ],
      memorize: [
        'Expediente = unidad documental compleja. Unidad documental simple = documentos del mismo tipo.',
        'CCD (cómo clasificar) · TRD (cuánto retener y disposición final) · TVD (valorar fondos sin TRD) · PGD (plan institucional).',
        'Folio = cada una de las hojas. Foliar = numerar correlativamente todos los folios.',
        'Expediente cerrado NO se interviene: no se refolía.',
        'Ley 527 de 1999: equivalencia funcional + neutralidad tecnológica; art. 10 = admisibilidad del mensaje de datos; art. 11 = sana crítica.',
        'Expediente electrónico = documentos + índice electrónico + firma del índice + metadatos (Acuerdo 001 de 2024).',
      ],
      examples: [
        {
          heading: 'Ejemplo: conformación correcta de un expediente de fiscalización',
          paragraphs: [
            'Se inicia una actuación de fiscalización contra un contribuyente. El expediente se abre con el auto de inicio, se le asigna un número de radicado único y se registra en el sistema. Cada documento posterior —requerimiento especial, respuesta del contribuyente, pruebas, resolución sanción, constancias de notificación, recursos— se incorpora de manera consecutiva y se folia. Cuando se resuelven los recursos y la actuación queda en firme, se cierra el expediente, se elabora el inventario y, cumplido el tiempo de retención en el archivo de gestión, se transfiere al archivo central.',
            'En cualquier momento de ese recorrido, un tercero puede tomar el expediente y reconstruir la actuación completa: cuándo se inició, qué se le dijo al contribuyente, cuándo respondió, qué se decidió y cómo se notificó. Eso es trazabilidad.',
          ],
        },
        {
          heading: 'Ejemplo: tres formas típicas de romper la trazabilidad',
          paragraphs: [
            'Primera: se emite la resolución sanción pero no se incorpora la constancia de notificación. El expediente «prueba» la decisión, pero no que el contribuyente la conoció, y los términos de firmeza quedan en el aire. Segunda: el funcionario retira un oficio para fotocopiarlo y lo reintegra al final del expediente, después de dos folios que ya estaban numerados. El orden original se rompió y la secuencia procesal ya no es verificable. Tercera: el expediente se transfiere al archivo central sin inventario y sin registrar el número total de folios; meses después nadie puede demostrar si volvió completo.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Confundir el cuadro de clasificación documental con la tabla de retención documental.',
          correction: 'El CCD es la estructura jerárquica de clasificación (fondo, sección, subsección, serie, subserie), reflejo de las funciones de la entidad. La TRD se deriva del CCD y agrega los tiempos de retención en cada etapa y la disposición final. El CCD dice CÓMO se organiza; la TRD dice CUÁNTO se conserva.',
        },
        {
          mistake: 'Refoliar un expediente ya cerrado o transferido para «corregir» una numeración deficiente.',
          correction: 'Un expediente cerrado o transferido no puede intervenirse: la refoliación está prohibida porque altera la integridad del conjunto. Si se detecta un error de foliación se deja constancia mediante el instrumento de control que autorice el comité competente, sin deshacer el expediente.',
        },
        {
          mistake: 'Creer que la impresión en papel de un documento electrónico es el documento original.',
          correction: 'La Ley 527 de 1999 reconoce el mensaje de datos como original cuando cumple las condiciones de integridad y accesibilidad; la impresión es una copia y su valor probatorio se valora por las reglas generales, no por la equivalencia funcional del original electrónico.',
        },
        {
          mistake: 'Pensar que la trazabilidad se logra porque el expediente está completo.',
          correction: 'Estar completo no es suficiente: la trazabilidad exige secuencia (orden original), integridad (que nada falte ni se agregue) y autoría verificable (quién produjo cada documento y cuándo). Un expediente completo pero desordenado o sin constancias de notificación no es trazable.',
        },
      ],
      norms: [
        {
          norm: 'Decreto 1080 de 2015',
          article: 'art. 2.8.2.5.8',
          status: 'vigente',
          note: 'Decreto Único Reglamentario del Sector Cultura: instrumentos archivísticos (CCD, TRD, TVD, PGD, PINAR, inventario, MoReQ, BANTER, TCA).',
        },
        {
          norm: 'Acuerdo 001 de 2024 del Archivo General de la Nación',
          status: 'vigente',
          note: 'Acuerdo Único de la Función Archivística: foliación (art. 4.3.1.8), cierre de unidades documentales (art. 4.3.1.9), expediente electrónico y sus elementos (arts. 4.3.2.1 a 4.3.2.6), expediente híbrido (art. 4.3.3.1), TRD y TVD (Título 5), archivo central y transferencias primarias (arts. 4.4.2 y 4.4.3).',
        },
        {
          norm: 'Acuerdo 002 de 2014 del Archivo General de la Nación',
          status: 'verificar',
          note: 'Criterios básicos para creación, conformación, organización, control y consulta de expedientes de archivo; regula foliación, ordenación interna, inventario y cierre, y el expediente electrónico. Verificar su vigencia frente a la expedición del Acuerdo 001 de 2024, que unificó la normativa archivística.',
        },
        {
          norm: 'Acuerdo 042 de 2002 del Archivo General de la Nación',
          status: 'verificar',
          note: 'Criterios para la organización de los archivos de gestión (exige que las unidades documentales estén debidamente foliadas y que el registro de préstamo indique el total de folios). Reportado como derogado por el Acuerdo 001 de 2024 según matrices de requisitos legales; confirmar alcance.',
        },
        {
          norm: 'Ley 527 de 1999',
          article: 'arts. 2, 6, 7, 8, 10 y 11',
          status: 'vigente',
          note: 'Comercio electrónico y mensajes de datos: equivalencia funcional, admisibilidad y fuerza probatoria valorada por sana crítica.',
        },
        {
          norm: 'Decreto 2364 de 2012',
          status: 'vigente',
          note: 'Reglamenta el art. 7 de la Ley 527 de 1999 sobre firma electrónica; neutralidad tecnológica y criterios de confiabilidad. Compilado en el Decreto 1074 de 2015.',
        },
      ],
      links: [
        { label: 'Archivo General de la Nación — normativa archivística', url: 'https://normativa.archivogeneral.gov.co/' },
        { label: 'DIAN — Gestión documental e inventarios documentales', url: 'https://www.dian.gov.co/dian/entidad/Paginas/GDocumental.aspx' },
        { label: 'Función Pública — Acuerdo 002 de 2014 (expedientes)', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=61730' },
        { label: 'Archivo General de la Nación — Acuerdo 042 de 2002', url: 'https://normativa.archivogeneral.gov.co/acuerdo-042-de-2002/' },
      ],
      mindmap: {
        root: 'Expediente y trazabilidad',
        branches: [
          {
            label: 'Expediente',
            children: ['Unidad documental compleja', 'Conformación por CCD y TRD', 'Ordenación interna', 'Foliación', 'Inventario', 'Cierre'],
          },
          {
            label: 'Instrumentos',
            children: ['CCD — clasificación', 'TRD — retención', 'TVD — valoración', 'PGD', 'PINAR', 'BANTER', 'TCA'],
          },
          {
            label: 'Trazabilidad',
            children: ['Radicación única', 'Consecutividad de folios', 'Hoja de control', 'Metadatos', 'Registro de préstamo'],
          },
          {
            label: 'Expediente electrónico',
            children: ['SGDEA', 'Índice electrónico', 'Firma del índice', 'Metadatos', 'Preservación a largo plazo'],
          },
          {
            label: 'Respaldo legal',
            children: ['Ley 527 de 1999', 'Decreto 2364 de 2012', 'Acuerdo 001 de 2024'],
          },
        ],
      },
      mindmapText:
        'El expediente es una unidad documental compleja que reúne los documentos de un mismo trámite. Se conforma a partir del cuadro de clasificación y la tabla de retención documental, se ordena respetando el orden original, se folia de manera correlativa, se inventaria y se cierra. La trazabilidad es la reconstrucción completa y verificable de la actuación, garantizada por la radicación, la consecutividad de folios, la hoja de control, los metadatos y el registro de préstamo. En el entorno electrónico, el expediente se conforma en el SGDEA con documentos, índice electrónico, firma del índice y metadatos, con equivalencia funcional y valor probatorio reconocidos por la Ley 527 de 1999.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo en los PDF',
          note: 'Tema no desarrollado en los PDF; contenido construido a partir de fuentes oficiales verificadas (Ley 594 de 2000, Decreto 1080 de 2015, Ley 527 de 1999, acuerdos del Archivo General de la Nación). Verificación: 2026-10-15.',
        },
      ],
      activityId: 'm02-a02',
    },
    {
      id: 'm02-l03',
      moduleId: 'm02',
      title: 'La gestión documental en la DIAN: política, instrumentos y el expediente de fiscalización',
      indicators: ['i02'],
      objectives: [
        'Describir cómo está organizada la función archivística en la DIAN y qué instrumentos publica la entidad.',
        'Explicar el papel del Programa de Gestión Documental y del SGDEA en la operación de la DIAN.',
        'Relacionar la trazabilidad documental con la validez del proceso de fiscalización y liquidación.',
        'Identificar las reglas de conservación, transferencia y consulta aplicables a los expedientes de la entidad.',
      ],
      sections: [
        {
          heading: 'La función archivística en la DIAN',
          paragraphs: [
            'La DIAN, como entidad pública, está sujeta a la Ley 594 de 2000, al Decreto 1080 de 2015 y a los acuerdos del Archivo General de la Nación. Su función archivística se articula con el modelo de operación por procesos de la entidad y con su planeación estratégica: el Programa de Gestión Documental de la DIAN declara expresamente su articulación con el Plan Estratégico Institucional y con el marco de la Ley 594 de 2000 y del Decreto 1080 de 2015.',
            'La entidad publica sus instrumentos archivísticos para consulta ciudadana en su portal, en la sección de gestión documental:',
          ],
          bullets: [
            'Tablas de Retención Documental por nivel y vigencia: nivel central (versiones 1999, 2010, 2020 y 2025) y seccionales de aduanas, de impuestos y aduanas, delegadas e de impuestos.',
            'Cuadro de Clasificación Documental asociado a las TRD.',
            'Banco Terminológico de Series y Subseries Documentales (BANTER-DIAN).',
            'Planes de eliminación documental, con las actas del comité, las actas de eliminación y los planes aprobados.',
            'Planes de transferencias documentales primarias.',
            'Inventarios documentales de las series que han cumplido su tiempo de retención.',
          ],
        },
        {
          heading: 'Los instrumentos archivísticos que publica la DIAN',
          paragraphs: [
            'Esta publicidad no es un gesto de transparencia opcional: es una obligación derivada, por un lado, de la Ley 594 de 2000 y del Decreto 1080 de 2015 y, por otro, de la Ley 1712 de 2014, que obliga a publicar los instrumentos de gestión de la información de la entidad.',
          ],
          callout: {
            type: 'norma',
            text: 'La TRD es el instrumento donde consta cuánto tiempo se conserva cada serie documental de la DIAN en el archivo de gestión y en el archivo central, y si su disposición final es conservación total o eliminación. Sin TRD no hay eliminación válida.',
          },
        },
        {
          heading: 'Programa de Gestión Documental y SGDEA',
          paragraphs: [
            'El Programa de Gestión Documental (PGD) es el instrumento que ordena, a nivel institucional, todos los procesos de gestión documental: planeación, producción, gestión y trámite, organización, transferencia, disposición de documentos, preservación a largo plazo y valoración. El PGD de la DIAN cubre el ciclo de vida de los documentos físicos y electrónicos, define el tratamiento de metadatos y la preservación a largo plazo, y sirve de marco para los desarrollos tecnológicos de la entidad.',
            'El soporte tecnológico de esa política es el Sistema de Gestión de Documentos Electrónicos de Archivo (SGDEA). Los documentos de especificación funcional de la DIAN para su gestor documental contemplan, entre otros requisitos: control de versiones, codificación normalizada conforme a los acuerdos de normalización del Archivo General de la Nación, gestión de expedientes y radicados, tablas de retención y preservación a largo plazo. La entidad también dispone de instructivos internos para la organización de las unidades documentales y su almacenamiento y control.',
            'El punto clave para el examen es la relación entre PGD, SGDEA y TRD: el PGD define QUÉ se hace y con qué instrumentos; el SGDEA es la herramienta donde eso ocurre; y la TRD es la regla concreta de retención y disposición que el sistema debe automatizar por serie documental.',
          ],
          callout: {
            type: 'importante',
            text: 'PGD = política y plan. SGDEA = herramienta tecnológica. TRD = regla de retención y disposición final. Los tres deben decir lo mismo: un SGDEA que no aplique la TRD produce expedientes electrónicos inválidos.',
          },
        },
        {
          heading: 'El expediente administrativo en fiscalización y su trazabilidad',
          paragraphs: [
            'En el proceso de fiscalización y liquidación, el expediente no es un simple contenedor de papeles: es el soporte probatorio de la actuación administrativa. La DIAN ejerce potestades de investigación, determinación y sanción, y todas ellas deben quedar demostradas en un expediente que resista el control judicial y de los organismos de control.',
            'La trazabilidad documental cumple en este contexto cuatro funciones concretas:',
          ],
          bullets: [
            'Demuestra la existencia y el contenido de la actuación: qué se requirió, qué se respondió, qué se decidió.',
            'Acredita el respeto de los términos y del procedimiento: fechas de expedición, notificación y firmeza.',
            'Garantiza el derecho de defensa y contradicción: prueba que el contribuyente fue efectivamente vinculado e informado.',
            'Permite la verificación interna y externa: auditorías, control fiscal, control disciplinario y eventual control judicial.',
          ],
        },
        {
          heading: 'Los puntos de quiebre del expediente de fiscalización',
          paragraphs: [
            'Los puntos de quiebre más frecuentes en un expediente de fiscalización son predecibles y por eso se evalúan: ausencia o defecto de las constancias de notificación, documentos citados en la resolución que no aparecen en el expediente, foliación que no permite verificar la secuencia, pruebas aportadas por el contribuyente no incorporadas, y expedientes desmembrados entre dependencias sin inventario de transferencia.',
            'El estándar de trabajo es sencillo de enunciar y exigente de cumplir: cualquier tercero ajeno a la actuación (un juez, un auditor, el propio contribuyente) debe poder reconstruir la historia completa de la actuación leyendo únicamente el expediente, sin necesidad de preguntarle a ningún funcionario qué pasó.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Regla de oro del expediente de fiscalización: si no está en el expediente, no ocurrió. Una actuación bien hecha pero mal documentada es, jurídicamente, una actuación débilmente probada.',
          },
        },
        {
          heading: 'Conservación, transferencia y consulta',
          paragraphs: [
            'Cerrado el expediente, su recorrido sigue el ciclo vital definido en la TRD de la entidad:',
          ],
          table: {
            caption: 'Recorrido del expediente en la DIAN',
            headers: ['Etapa', 'Qué ocurre', 'Instrumento que lo soporta'],
            rows: [
              ['Archivo de gestión', 'El expediente permanece en la dependencia que tramitó la actuación, con consulta administrativa continua.', 'TRD (tiempo de retención en gestión) y hoja de control'],
              ['Transferencia primaria', 'Vencido el tiempo en gestión, se transfiere al archivo central con inventario.', 'Formato único de inventario documental y plan de transferencias primarias'],
              ['Archivo central', 'Se custodia, describe, controla y presta el servicio de consulta.', 'Acuerdo 001 de 2024 (art. 4.4.2) y TRD'],
              ['Disposición final', 'Se aplica lo que diga la TRD: conservación total, eliminación, selección o digitalización.', 'TRD, acta del comité y plan de eliminación documental'],
              ['Archivo histórico', 'Los documentos de conservación permanente se transfieren al archivo histórico.', 'TRD y Acuerdo del AGN'],
            ],
          },
        },
        {
          heading: 'La eliminación documental y el acceso a la consulta',
          paragraphs: [
            'Sobre la eliminación hay una regla que no admite atajos: ningún documento se destruye por decisión de un funcionario ni por razones de espacio. La eliminación requiere que la serie haya cumplido el tiempo de retención previsto en la TRD, que exista el acta del comité institucional competente y que se haya publicado el inventario correspondiente. La DIAN publica precisamente esos inventarios de series que han cumplido su retención y pueden eliminarse.',
            'Sobre la consulta, el derecho de acceso a los documentos públicos (art. 74 de la Constitución y Ley 1712 de 2014) opera como regla general, con las excepciones legales: información reservada en materia tributaria, datos personales y las reservas específicas previstas en la ley. Las tablas de control de acceso son el instrumento que traduce esas reglas en niveles concretos de acceso por serie documental.',
          ],
          callout: {
            type: 'error',
            text: 'Destruir documentos sin TRD, sin acta de comité y sin inventario publicado no es «depuración de archivo»: es una conducta sancionable administrativa y disciplinariamente, y puede comprometer la prueba de actuaciones en curso.',
          },
        },
      ],
      summary: [
        'La DIAN cumple la Ley 594 de 2000 y el Decreto 1080 de 2015 mediante un Programa de Gestión Documental articulado a su planeación estratégica, y publica sus instrumentos: TRD por nivel y vigencia, CCD, BANTER-DIAN, planes de eliminación y de transferencias primarias e inventarios documentales.',
        'El PGD define la política y los procesos; el SGDEA es el sistema donde se gestionan los documentos electrónicos; la TRD es la regla concreta de retención y disposición final por serie documental.',
        'El expediente de fiscalización es el soporte probatorio de la actuación: demuestra la actuación, acredita términos y procedimiento, garantiza el derecho de defensa y permite el control interno y externo.',
        'El recorrido del expediente es archivo de gestión → transferencia primaria → archivo central → disposición final → archivo histórico, según la TRD.',
        'La eliminación documental exige tiempo de retención cumplido, acta del comité competente e inventario publicado; la consulta se rige por el derecho de acceso con las excepciones legales y las tablas de control de acceso.',
      ],
      memorize: [
        'Instrumentos publicados por la DIAN: TRD (por nivel y año), CCD, BANTER-DIAN, planes de eliminación, planes de transferencias primarias, inventarios documentales.',
        'PGD = política · SGDEA = herramienta · TRD = regla de retención y disposición.',
        'Regla de oro: si no está en el expediente, no ocurrió.',
        'Eliminación válida = tiempo cumplido en la TRD + acta del comité + inventario publicado.',
        'Consulta: derecho de acceso (art. 74 C.P. y Ley 1712 de 2014) con excepciones legales y tablas de control de acceso.',
      ],
      examples: [
        {
          heading: 'Ejemplo: hallazgo típico en una auditoría al proceso de fiscalización',
          paragraphs: [
            'Un organismo de control revisa una muestra de expedientes de determinación de impuestos. Encuentra que tres de ellos citan en la resolución un requerimiento especial que no aparece incorporado, y que en otro la constancia de notificación registra una fecha anterior a la de expedición de la resolución. El resultado no es que la liquidación esté mal calculada, sino que la entidad no puede demostrar que la actuación se surtió conforme al procedimiento. La consecuencia es un hallazgo con plan de mejoramiento y, en el peor escenario, la caída del acto por vicios de procedimiento.',
            'Observa el contraste: el problema no fue la gestión documental entendida como «archivar papeles», fue la trazabilidad entendida como garantía del debido proceso. Por eso el indicador de gestión documental es un indicador técnico y no un asunto meramente administrativo.',
          ],
        },
        {
          heading: 'Ejemplo: expediente electrónico en la operación diaria',
          paragraphs: [
            'Un funcionario recibe por el canal electrónico una respuesta del contribuyente a un requerimiento. La incorpora al expediente electrónico del caso. El sistema hereda los metadatos de la TRD (serie, subserie, tipo documental, dependencia), asigna el documento al índice electrónico del expediente, registra fecha y hora de incorporación y firma el índice. Meses después, el expediente se cierra en el sistema. La secuencia es verificable sin depender de la memoria de nadie y sin riesgo de que una hoja se pierda entre carpetas.',
            'Compáralo con lo que ocurriría si el mismo documento llegara en papel y se dejara sobre el escritorio: aunque el contenido sea idéntico, la trazabilidad de la segunda versión depende por completo de que el funcionario lo folie y lo archive en el lugar correcto ese mismo día.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Entender la gestión documental como una tarea exclusiva del área de archivo y no como una responsabilidad de todos los servidores públicos.',
          correction: 'La organización, preservación y custodia del archivo de gestión es responsabilidad de los jefes de las unidades administrativas y de los servidores que producen y tramitan los documentos. El área de gestión documental coordina y asesora, pero no puede «arreglar» expedientes mal conformados por las dependencias.',
        },
        {
          mistake: 'Eliminar documentos por falta de espacio físico, sin TRD ni acta de comité.',
          correction: 'La eliminación documental solo procede cuando la serie ha cumplido el tiempo de retención de la TRD y existe acta del comité institucional competente e inventario publicado. La falta de espacio nunca es causal de eliminación.',
        },
        {
          mistake: 'Creer que la trazabilidad es un requisito formal que se resuelve con una buena numeración de folios.',
          correction: 'La foliación es condición necesaria pero no suficiente. La trazabilidad exige además que las actuaciones clave estén probadas dentro del expediente —en especial las notificaciones y los términos— y que el orden original no haya sido alterado.',
        },
      ],
      norms: [
        {
          norm: 'Ley 594 de 2000',
          article: 'arts. 11, 22, 23, 24 y 26',
          status: 'vigente',
          note: 'Obligaciones de creación, organización, preservación y control de archivos; ciclo vital; TRD obligatorias e inventarios.',
        },
        {
          norm: 'Decreto 1080 de 2015',
          article: 'art. 2.8.2.5.8 y ss.',
          status: 'vigente',
          note: 'Instrumentos archivísticos y procesos de la gestión documental aplicables a las entidades públicas, incluida la DIAN.',
        },
        {
          norm: 'Acuerdo 001 de 2024 del Archivo General de la Nación',
          article: 'arts. 4.3.1.1, 4.3.1.8, 4.3.1.9, 4.4.2, 4.4.3 y Título 5',
          status: 'vigente',
          note: 'Acuerdo Único de la Función Archivística: organización documental, foliación, cierre de unidades documentales, archivo central institucional, transferencias primarias y TRD/TVD.',
        },
        {
          norm: 'Ley 1712 de 2014',
          status: 'vigente',
          note: 'Ley de Transparencia y del Derecho de Acceso a la Información Pública: obliga a publicar los instrumentos de gestión de la información y a aplicar las excepciones de acceso.',
        },
        {
          norm: 'Programa de Gestión Documental (PGD) de la DIAN',
          status: 'verificar',
          note: 'La DIAN publica su PGD en el portal institucional (sección de atención al ciudadano). No se identificó en esta verificación un número de resolución específico que adopte la política de gestión documental de la entidad; confirmarlo en el normograma DIAN antes de citarlo como norma.',
        },
      ],
      links: [
        { label: 'DIAN — Gestión documental, TRD e inventarios documentales', url: 'https://www.dian.gov.co/dian/entidad/Paginas/GDocumental.aspx' },
        { label: 'DIAN — Programa de Gestión Documental', url: 'https://www.dian.gov.co/atencionciudadano/Documents/7-1-5-Programa-de-Gestion-Documental-PGD.pdf' },
        { label: 'Archivo General de la Nación', url: 'https://www.archivogeneral.gov.co/' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
      ],
      mindmap: {
        root: 'Gestión documental DIAN',
        branches: [
          {
            label: 'Marco',
            children: ['Ley 594 de 2000', 'Decreto 1080 de 2015', 'Acuerdos del AGN', 'Ley 1712 de 2014'],
          },
          {
            label: 'Instrumentos publicados',
            children: ['TRD por nivel y año', 'CCD', 'BANTER-DIAN', 'Planes de eliminación', 'Transferencias primarias', 'Inventarios'],
          },
          {
            label: 'Herramientas',
            children: ['PGD', 'SGDEA', 'Instructivos de organización de expedientes'],
          },
          {
            label: 'Expediente de fiscalización',
            children: ['Soporte probatorio', 'Términos y notificaciones', 'Derecho de defensa', 'Control interno y externo'],
          },
          {
            label: 'Conservación y consulta',
            children: ['Archivo de gestión', 'Transferencia primaria', 'Archivo central', 'Disposición final', 'Archivo histórico'],
          },
        ],
      },
      mindmapText:
        'En la DIAN la función archivística se articula con la Ley 594 de 2000, el Decreto 1080 de 2015 y los acuerdos del Archivo General de la Nación. La entidad publica sus instrumentos: TRD por nivel y vigencia, cuadro de clasificación documental, BANTER-DIAN, planes de eliminación y de transferencias primarias e inventarios documentales. El Programa de Gestión Documental define la política; el SGDEA es la herramienta tecnológica; y la TRD es la regla de retención y disposición final. En fiscalización, el expediente es el soporte probatorio de la actuación y su trazabilidad garantiza términos, notificaciones y derecho de defensa. Cerrado el expediente, el recorrido es archivo de gestión, transferencia primaria, archivo central, disposición final y archivo histórico.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo en los PDF',
          note: 'Tema no desarrollado en los PDF; contenido construido a partir de fuentes oficiales verificadas (portal DIAN — sección de gestión documental, PGD de la DIAN, Ley 594 de 2000, Decreto 1080 de 2015, acuerdos del AGN). Verificación: 2026-10-15.',
        },
      ],
    },
  ],
}
