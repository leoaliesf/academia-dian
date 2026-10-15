import type { ModuleDef } from '../types'

// ============================================================
// Módulo 6 — Fiscalización y liquidación tributaria
// Indicador: i10 (determinación oficial de los tributos)
// Fuentes:
//  - MATERIAL TOTAL DIAN - FISCALIZACION, Unidad 7 (págs. 407-442):
//    régimen sancionatorio y penalización de la evasión (solo el marco
//    de facultades: art. 684, art. 683, art. 638).
//  - MATERIAL TOTAL DIAN - FISCALIZACION, Unidad 8 (págs. 443-450) y
//    anexo 09 (págs. 451-462): clases de procedimiento, procedimiento
//    ordinario, revisión, aforo, liquidación provisional, abuso,
//    firmeza y prescripción.
//  - TACI Curso Completo (págs. 51-100 y 101-150): obligaciones
//    formales como disposiciones de control, información exógena,
//    suspensión de la firmeza por inspección tributaria.
// Textos de los artículos del ET verificados en estatuto.co / DIAN el
// 2026-10-15. Los artículos cuya redacción vigente no pudo confirmarse
// en fuente oficial quedan marcados con estado 'verificar'.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm06',
  order: 6,
  title: 'Fiscalización y liquidación tributaria',
  description:
    'Cómo ejerce la DIAN las facultades de fiscalización e investigación, cómo se determina oficialmente el impuesto (requerimiento especial, liquidación de revisión, aforo, liquidación provisional) y cómo se discuten, se vuelven firmes y se cobran los actos administrativos tributarios.',
  indicators: ['i10'],
  lessons: [
    {
      id: 'm06-l01',
      moduleId: 'm06',
      title: 'Facultades de fiscalización e investigación de la DIAN',
      indicators: ['i10'],
      objectives: [
        'Explicar el fundamento constitucional y legal de las facultades de fiscalización e investigación de la DIAN.',
        'Identificar los instrumentos con que cuenta la Administración: requerimiento ordinario, información exógena, cruces, visitas e inspección tributaria.',
        'Reconocer las obligaciones formales como disposiciones para el control tributario.',
        'Distinguir los límites y condiciones de ejercicio de las facultades de fiscalización.',
      ],
      sections: [
        {
          heading: 'Fundamento de la facultad de fiscalización',
          paragraphs: [
            'El artículo 684 del ET consagra que la Administración Tributaria tiene amplias facultades de fiscalización e investigación para asegurar el efectivo cumplimiento de las normas sustanciales. Con fundamento en ellas puede verificar la consistencia de las declaraciones tributarias, investigar los hechos generadores de obligaciones no declarados, citar o requerir a informantes y ordenar la exhibición de libros y documentos.',
            'La facultad no es un poder ilimitado. El artículo 683 del ET, que el material cita al explicar las sanciones provocadas por la DIAN, recuerda que los funcionarios son servidores públicos, que la aplicación recta de las leyes debe estar presidida por un relevante espíritu de justicia y que el Estado no aspira a que al contribuyente se le exija más de aquello con lo que la misma ley ha querido que coadyuve a las cargas públicas.',
            'El otro límite estructural proviene del artículo 29 de la Constitución Política: el debido proceso y el principio de legalidad exigen que la conducta reprochable y la sanción estén predeterminadas en la ley, con anterioridad a los hechos investigados (lex scripta y lex previa). En materia sancionatoria tributaria rige la reserva de ley: no hay sanción sin ley que la establezca ni analogía que la extienda.',
            'El artículo 684-1 del ET completa el marco al permitir que en las investigaciones tributarias se utilicen los instrumentos probatorios y de policía de los códigos de Procedimiento Penal y Nacional de Policía, en lo que no sea contrario al Estatuto Tributario.',
          ],
          callout: {
            type: 'importante',
            text: 'La facultad de fiscalización es AMPLIA y se ejerce DE OFICIO, pero está sometida a tres frenos: el espíritu de justicia (art. 683 ET), el debido proceso y la legalidad (art. 29 C.P.) y la reserva de ley en materia sancionatoria.',
          },
        },
        {
          heading: 'Las obligaciones formales como disposiciones para el control',
          paragraphs: [
            'El material de formación del TACI (págs. 65 y ss.) explica que las obligaciones tributarias se clasifican en sustanciales y formales: la obligación sustancial es el pago efectivo del tributo y la formal es el procedimiento que permite cumplirla. Las obligaciones formales son, por eso, las verdaderas disposiciones de control tributario: cada dato que el obligado entrega a la DIAN alimenta su capacidad de verificación.',
            'Entre las obligaciones formales que debe cumplir un contribuyente están inscribirse en el RUT, expedir factura electrónica y demás documentos electrónicos, reportar información exógena, practicar la retención en la fuente, presentar las declaraciones tributarias, preparar y presentar la conciliación fiscal, presentar la declaración informativa de activos en el exterior, llevar contabilidad y bancarizar.',
          ],
          table: {
            caption: 'Obligaciones formales y su utilidad para el control',
            headers: ['Obligación formal', 'Qué control permite'],
            rows: [
              ['Inscripción en el RUT (asigna el NIT)', 'Identificar, ubicar y clasificar a los sujetos de las obligaciones administradas'],
              ['Factura electrónica y documentos equivalentes', 'Rastrear el ingreso real de cada operación y cruzar ventas con compras'],
              ['Información exógena (resolución general)', 'Cruzar datos de terceros con lo declarado por el contribuyente'],
              ['Retención en la fuente', 'Anticipar el recaudo y detectar inconsistencias entre pagos y retenciones'],
              ['Declaraciones tributarias', 'Establecer la base para verificar la consistencia de lo autoliquidado'],
              ['Conciliación fiscal y contabilidad', 'Constatar el origen de las cifras declaradas y la razonabilidad de saldos'],
              ['Bancarización y declaración de activos en el exterior', 'Detectar operaciones no bancarizadas y rentas de fuente extranjera'],
            ],
          },
        },
        {
          heading: 'El deber de informar: requerimiento ordinario e información exógena',
          paragraphs: [
            'El deber de informar consiste en suministrar a la Administración los datos que le sean solicitados y tiene respaldo constitucional en el artículo 15 de la Constitución: para efectos tributarios podrá exigirse la presentación de libros de contabilidad y demás documentos privados, en los términos que señale la ley. El artículo 686 del ET impone a los sujetos obligados el deber de atender los requerimientos de la Administración.',
            'El material del TACI distingue dos fuentes obligacionales del deber de informar: la información solicitada por medio de requerimiento ordinario, que es una obligación de suministrar informaciones particulares y concretas, notificada al sujeto obligado con un término para allegar la información con el contenido, la forma y en el lugar establecidos, y la información exógena, que se solicita por medio de una resolución de carácter general y abstracto y se suministra por el sistema, diligenciando los prevalidadores puestos a disposición de los obligados dentro de los plazos fijados para el efecto.',
            'El objeto de la información exógena es precisamente permitir que la DIAN realice cruces y estudios de información que le posibiliten cumplir la función de fiscalización, ejerciendo el control de los tributos y del cumplimiento de las obligaciones sustanciales y formales. Los sujetos obligados, los formatos y los topes son los que señale la resolución del Director General para cada año gravable, de modo que su contenido cambia periódicamente y no es un listado legal cerrado.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Requerimiento ordinario = información PARTICULAR y CONCRETA, caso a caso, con término y contenido señalados en el propio requerimiento. Información exógena = resolución GENERAL y ABSTRACTA, masiva, por prevalidadores y en los plazos de la resolución.',
          },
        },
        {
          heading: 'Competencia para la actuación fiscalizadora y sistemas técnicos de control',
          paragraphs: [
            'El artículo 688 del ET fija la competencia para la actuación fiscalizadora: corresponde al jefe de la unidad de fiscalización expedir los requerimientos especiales, los pliegos de cargos, los traslados de cargos y los emplazamientos, mientras que los funcionarios autorizados realizan las visitas, investigaciones, verificaciones y cruces de información. Esta competencia funcional es la que explica que los actos de trámite del proceso de revisión se profieran por el jefe de la unidad de fiscalización.',
            'El artículo 687 del ET aclara que las opiniones de terceros no obligan a la Administración: los conceptos de asesores, gremios o peritos no vinculan a la DIAN, que debe decidir sobre las pruebas del expediente.',
            'El legislador también dotó a la Administración de instrumentos técnicos de control: el artículo 684-2 permite exigir la implantación de sistemas técnicos de control a determinados sectores, el artículo 684-3 autoriza la tarjeta fiscal, y el artículo 684-4 establece sanciones aplicables a los proveedores autorizados y tecnológicos, que van desde la imposibilidad de contratar nuevos clientes hasta la cancelación de la habilitación, sin perjuicio de la clausura del establecimiento y de la sanción pecuniaria.',
          ],
          table: {
            caption: 'Instrumentos técnicos de control del ET',
            headers: ['Artículo', 'Contenido', 'Consecuencia de incumplir'],
            rows: [
              ['684-2', 'Implantación de sistemas técnicos de control', 'No adoptarlos faculta a la Administración a aplicar la clausura del establecimiento del art. 657 ET'],
              ['684-3', 'Tarjeta fiscal como control técnico antievasión', 'Aplicación de la sanción prevista en la misma norma'],
              ['684-4', 'Sanciones a proveedores autorizados y tecnológicos', 'Imposibilidad de contratar nuevos clientes, cancelación de la habilitación, clausura y multa'],
              ['616-3', 'Clausura a empresas que elaboren facturas sin requisitos', 'Clausura del establecimiento'],
            ],
          },
        },
        {
          heading: 'Oportunidad y caducidad de la facultad sancionadora',
          paragraphs: [
            'El artículo 638 del ET regula la prescripción de la facultad para imponer sanciones, es decir, el plazo dentro del cual la Administración puede sancionar. Cuando las sanciones se imponen en liquidaciones oficiales, la facultad prescribe en el mismo término de la liquidación correspondiente.',
            'Cuando la sanción se impone en resolución independiente, el pliego de cargos debe expedirse dentro de los dos años siguientes a la fecha en que se presentó la declaración de renta del período durante el cual ocurrió la irregularidad sancionable o cesó la irregularidad, para el caso de las infracciones continuadas. Vencido el término de respuesta al pliego de cargos, la Administración tiene seis meses para imponer la sanción.',
            'La misma norma exceptúa de la regla de dos años, con un término de cinco años, a la sanción por no declarar, a los intereses de mora y a las sanciones de los artículos 659, 659-1 y 660 del ET. El material ilustra este procedimiento con el caso de las obligaciones formales distintas de la obligación de declarar, tramitadas en resolución independiente: pliego de cargos, respuesta dentro del mes siguiente a su notificación y resolución sanción con recurso de reconsideración.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Art. 638 ET: pliego de cargos en 2 años (desde la declaración de renta del período de la irregularidad) y 6 meses para sancionar. Excepción de 5 años: no declarar, intereses de mora y arts. 659, 659-1 y 660.',
          },
        },
        {
          heading: 'Límites: reserva de la información y suspensión de la firmeza',
          paragraphs: [
            'Las facultades de fiscalización se ejercen sobre información sometida a reserva legal. El artículo 693 del ET declara reservados los expedientes tributarios y el artículo 693-1 regula la información tributaria, cuyo acceso está restringido a los fines propios de la administración de los tributos.',
            'Un límite temporal relevante es el de la suspensión de la firmeza de la declaración: conforme al artículo 706 del ET, el término para notificar el requerimiento especial se suspende por tres meses contados a partir de la notificación del auto que decreta la inspección tributaria de oficio, por el término que dure la inspección cuando esta se practica a solicitud del administrado, y por un mes contado desde la notificación del emplazamiento para corregir.',
            'La suspensión no opera automáticamente: según la jurisprudencia del Consejo de Estado citada por el material del TACI (sentencia de 7 de abril de 2022, exp. 25587), la suspensión por inspección oficiosa exige que el auto esté debidamente notificado y que la Administración adelante por lo menos una actuación encaminada a la constatación directa de los hechos dentro de los tres meses siguientes. Si no lo hace, el plazo para notificar el requerimiento especial no se suspende y la declaración queda en firme.',
            'El artículo 779 del ET define la inspección tributaria como la diligencia en virtud de la cual se realiza la constatación directa de los hechos que interesan a un proceso adelantado por la autoridad tributaria, para verificar su existencia, características y demás circunstancias de tiempo, modo y lugar, en la cual pueden decretarse todos los medios de prueba autorizados, previa observancia de las ritualidades que les sean propias; se decreta mediante auto notificado por correo o personalmente, en el que se indican los hechos materia de la prueba y los funcionarios comisionados para practicarla.',
          ],
          callout: {
            type: 'error',
            text: 'Error frecuente: creer que basta decretar la inspección tributaria para suspender el término. La suspensión exige notificación del auto Y práctica efectiva de la diligencia dentro de los tres meses.',
          },
        },
      ],
      summary: [
        'El artículo 684 del ET otorga a la DIAN amplias facultades de fiscalización e investigación para asegurar el efectivo cumplimiento de las normas sustanciales; el 684-1 permite usar los instrumentos probatorios de los códigos de Procedimiento Penal y Nacional de Policía.',
        'Las obligaciones formales (RUT, factura, exógena, retención, declarar, contabilidad, bancarización) son las disposiciones que hacen posible el control tributario.',
        'El deber de informar tiene dos fuentes: el requerimiento ordinario (información particular y concreta) y la información exógena (resolución general y abstracta, suministrada por prevalidadores).',
        'La competencia para la actuación fiscalizadora está en el art. 688 ET: el jefe de la unidad de fiscalización expide requerimientos, pliegos y emplazamientos y los funcionarios autorizados practican visitas, verificaciones y cruces.',
        'Los límites son el espíritu de justicia (art. 683), el debido proceso y la legalidad (art. 29 C.P.), la reserva de ley sancionatoria y la reserva de los expedientes (arts. 693 y 693-1).',
        'La facultad sancionadora caduca: pliego de cargos en dos años (art. 638) y seis meses para sancionar; la firmeza se suspende en los casos del art. 706, siempre que la inspección se practique efectivamente.',
      ],
      memorize: [
        'Art. 684 ET: la DIAN tiene AMPLIAS facultades de fiscalización e investigación para asegurar el efectivo cumplimiento de las normas sustanciales.',
        'Art. 683 ET: espíritu de justicia; el Estado no pide más de lo que la ley quiso.',
        'Requerimiento ordinario (particular, con término) frente a información exógena (general, masiva, por prevalidadores).',
        'Art. 688 ET: el jefe de la unidad de fiscalización expide requerimientos especiales, pliegos y traslados de cargos y emplazamientos.',
        'Art. 706 ET: suspensión de la firmeza por 3 meses (inspección oficiosa), por el término de la diligencia (inspección a solicitud) y por 1 mes (emplazamiento para corregir).',
        'Art. 638 ET: 2 años para el pliego de cargos y 6 meses para imponer la sanción; 5 años para no declarar, intereses de mora y arts. 659, 659-1 y 660.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: cruce de información exógena',
          paragraphs: [
            'La DIAN recibe de un establecimiento bancario el reporte anual de cuentas y de un cliente suyo el reporte de pagos y retenciones. Al cruzar esa información exógena con la declaración de renta del contribuyente detecta ingresos financieros no declarados. Ese cruce es el punto de partida típico de una actuación de fiscalización: la exógena no es prueba plena por sí sola, pero habilita la investigación y sirve como indicio que se debe contrastar con las pruebas del expediente.',
            'Técnicamente: el cruce detecta la inconsistencia (fase de verificación), la inconsistencia motiva el proceso de determinación (fase de investigación) y, si se confirma la omisión de ingresos, se propone la sanción de inexactitud en el requerimiento especial.',
          ],
        },
        {
          heading: 'Ejemplo 2: inspección tributaria que no suspende el término',
          paragraphs: [
            'La DIAN notifica el 10 de noviembre el auto que decreta inspección tributaria de oficio. Los tres meses de suspensión corren desde esa notificación: 10 de noviembre a 10 de febrero. Si la primera actuación de constatación directa de los hechos se realiza el 2 de abril (más de cuatro meses después) y esta consiste además en un simple requerimiento ordinario de información, la suspensión no se configura y el término para notificar el requerimiento especial sigue corriendo desde su fecha original. Es exactamente el supuesto de la sentencia del Consejo de Estado citada en el material del TACI.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que la DIAN necesita autorización judicial o del contribuyente para fiscalizar.',
          correction: 'Las facultades de fiscalización e investigación del art. 684 ET se ejercen de oficio y son amplias; su control es posterior (debido proceso, legalidad y reserva de ley), no una autorización previa. Lo que sí exige ritualidades es cada actuación: el auto de inspección se notifica, el requerimiento ordinario se notifica con término, etc.',
        },
        {
          mistake: 'Confundir requerimiento ordinario con requerimiento especial.',
          correction: 'El requerimiento ordinario pide información particular dentro de una investigación (deber de informar, art. 686 ET) y no es un acto de determinación. El requerimiento especial es el acto de trámite que inicia el proceso de revisión, propone modificaciones a la liquidación privada y es requisito previo de la liquidación oficial de revisión (art. 703 ET).',
        },
        {
          mistake: 'Sostener que decretar la inspección tributaria suspende automáticamente el término de firmeza.',
          correction: 'La suspensión del art. 706 ET es por tres meses desde la notificación del auto, pero exige que la inspección se practique de manera efectiva dentro de ese término; de lo contrario el plazo para notificar el requerimiento especial no se suspende.',
        },
      ],
      norms: [
        {
          norm: 'Constitución Política de Colombia',
          article: 'Artículos 15 y 29',
          status: 'vigente',
          note: 'Art. 29: debido proceso y principio de legalidad (nullum crimen, nulla poena sine lege). Art. 15: para efectos tributarios puede exigirse la presentación de libros y documentos privados.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 683 y 684',
          status: 'vigente',
          note: 'Art. 683 espíritu de justicia; art. 684 facultades de fiscalización e investigación. Citados en el material, págs. 407-408.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 684-1, 684-2, 684-3 y 684-4',
          status: 'vigente',
          note: 'Otras normas de procedimiento aplicables, implantación de sistemas técnicos de control, tarjeta fiscal y sanciones a proveedores autorizados y tecnológicos. El material cita el art. 684-4 en la pág. 417.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 686, 687, 688, 693 y 693-1',
          status: 'vigente',
          note: 'Deber de atender requerimientos, opiniones de terceros, competencia para la actuación fiscalizadora y reserva de expedientes e información tributaria.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 638, 706 y 779',
          status: 'vigente',
          note: 'Oportunidad para imponer sanciones en resolución independiente, suspensión del término de firmeza e inspección tributaria. Todos citados en el material (pág. 437 y material del TACI, págs. 85-86).',
        },
        {
          norm: 'Decreto Ley 2106 de 2019',
          status: 'verificar',
          note: 'Norma que el material cita como modificatoria del parágrafo del art. 691 del ET (art. 50). Su vigencia y efectos deben confirmarse en fuente oficial antes de citarlo como fundamento de la competencia para ampliar el requerimiento especial.',
        },
      ],
      links: [
        { label: 'DIAN — Estatuto Tributario (normograma)', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm' },
        { label: 'Estatuto Tributario — Libro V, Título IV: determinación del impuesto e imposición de sanciones', url: 'https://estatuto.co/libro/5/v-titulo-iv' },
        { label: 'DIAN — Proveedores ficticios (publicación de la declaratoria)', url: 'https://www.dian.gov.co/Proveedores_Ficticios/Paginas/default.aspx' },
        { label: 'SUIN-Juriscol', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'Facultades de fiscalización (DIAN)',
        branches: [
          { label: 'Fundamento', children: ['Art. 684 ET: facultades amplias', 'Art. 684-1: normas de procedimiento', 'Art. 29 C.P.: debido proceso', 'Art. 683 ET: espíritu de justicia'] },
          { label: 'Instrumentos', children: ['Requerimiento ordinario', 'Información exógena (resolución general)', 'Cruces de información', 'Visitas y verificaciones', 'Inspección tributaria (art. 779)'] },
          { label: 'Obligaciones formales', children: ['RUT', 'Factura electrónica', 'Retención', 'Declarar', 'Contabilidad y conciliación fiscal', 'Bancarización'] },
          { label: 'Competencia y control técnico', children: ['Art. 688: jefe de fiscalización', 'Arts. 684-2 y 684-3: controles técnicos', 'Art. 684-4: proveedores tecnológicos'] },
          { label: 'Límites', children: ['Reserva de ley sancionatoria', 'Reserva de expedientes (arts. 693 y 693-1)', 'Suspensión de firmeza (art. 706)', 'Caducidad sancionadora (art. 638)'] },
        ],
      },
      mindmapText:
        'La DIAN ejerce de oficio amplias facultades de fiscalización e investigación (art. 684 ET) para asegurar el cumplimiento de las normas sustanciales, con los límites del debido proceso y la legalidad (art. 29 C.P.), el espíritu de justicia (art. 683 ET) y la reserva de ley sancionatoria. Sus instrumentos son el requerimiento ordinario, la información exógena, los cruces de información, las visitas y la inspección tributaria (art. 779 ET); la competencia funcional la fija el art. 688 ET y los controles técnicos los arts. 684-2, 684-3 y 684-4. La firmeza se suspende en los casos del art. 706 ET y la facultad sancionadora caduca según el art. 638 ET.',
      source: [
        { doc: 'material', pages: 'págs. 407-408 (art. 684 y art. 683)', note: 'El material cita expresamente las facultades de fiscalización e investigación del art. 684 y el espíritu de justicia del art. 683.' },
        { doc: 'material', pages: 'pág. 417 (régimen sancionatorio de tipógrafos, litógrafos y proveedores tecnológicos, art. 684-4)' },
        { doc: 'material', pages: 'pág. 437 (art. 651 como sanción por no informar)', note: 'Adelanto del deber de informar, desarrollado en el módulo 8.' },
        { doc: 'taci', pages: 'págs. 65-70 (obligaciones formales como disposiciones para el control; información exógena)' },
        { doc: 'taci', pages: 'págs. 85-86 (suspensión del término por inspección tributaria; art. 779 ET)', note: 'Incluye la sentencia del Consejo de Estado de 7 de abril de 2022, exp. 25587.' },
        { doc: 'taci', pages: 'págs. 108-110 (deber de informar: requerimiento ordinario e información exógena; sujetos obligados)', note: 'Texto del material OCR del curso.' },
      ],
    },
    {
      id: 'm06-l02',
      moduleId: 'm06',
      title: 'El proceso de determinación oficial: requerimiento especial y liquidación de revisión',
      indicators: ['i10'],
      objectives: [
        'Diferenciar las clases de procedimiento tributario previstas en el ET.',
        'Explicar las etapas y los términos del proceso de revisión: emplazamiento para corregir, requerimiento especial, respuesta, ampliación y liquidación oficial de revisión.',
        'Identificar los actos de trámite y los actos definitivos del proceso de determinación.',
        'Aplicar los términos de notificación y las consecuencias de su incumplimiento (firmeza de la declaración).',
      ],
      sections: [
        {
          heading: 'Las cuatro clases de procedimiento en materia tributaria',
          paragraphs: [
            'El material de la Unidad 8 clasifica los procedimientos mediante los cuales la DIAN puede determinar impuestos o imponer sanciones en cuatro: el procedimiento ordinario, la liquidación provisional, el procedimiento simplificado del régimen simple de tributación y el procedimiento de abuso en materia tributaria.',
            'El procedimiento ordinario es la regla general y se orienta a verificar dos tipos de obligaciones: la obligación de declarar y las obligaciones diferentes a la de declarar. La razón de la subdivisión es que el acto administrativo y el procedimiento cambian según se trate de un omiso, de un inexacto o del incumplimiento de una obligación formal.',
          ],
          table: {
            caption: 'Clases de procedimiento para determinar impuestos o imponer sanciones',
            headers: ['Procedimiento', 'Norma base', 'Se activa cuando'],
            rows: [
              ['Ordinario (revisión y aforo)', 'Arts. 703 a 719 ET', 'Se incumple la obligación de declarar (omiso) o se declara indebidamente (inexacto)'],
              ['Liquidación provisional', 'Arts. 764 a 764-6 ET', 'El sujeto está en los topes de los arts. 764-1 y 764-2 ET; procedimiento abreviado'],
              ['Simplificado (SIMPLE)', 'Art. 916 ET', 'Declaraciones del impuesto unificado bajo el régimen simple de tributación'],
              ['Abuso en materia tributaria', 'Art. 869 ET', 'Operaciones o serie de operaciones con actos o negocios jurídicos artificiosos'],
            ],
          },
        },
        {
          heading: 'Omisos e inexactos: dos caminos dentro del procedimiento ordinario',
          paragraphs: [
            'En la obligación de declarar el material distingue dos sujetos. Los omisos son quienes, estando obligados a declarar, no lo hacen; frente a ellos proceden la resolución sanción por no declarar y la liquidación oficial de aforo. Los inexactos son quienes declaran, pero no en debida forma, esto es, declaran por menor valor al legalmente debido o generan mayores saldos a favor o pérdidas a las que no tienen derecho; frente a ellos procede la liquidación oficial de revisión con la sanción de inexactitud.',
            'En ambos casos el cumplimiento puede ser voluntario o provocado. En el caso del omiso, el cumplimiento voluntario consiste en presentar extemporáneamente la declaración liquidando la sanción del artículo 641 del ET, con lo cual nace una declaración privada. En el caso del inexacto, el cumplimiento voluntario consiste en corregir la declaración (artículo 588 del ET) dentro de los tres años siguientes al vencimiento del plazo para declarar y antes de que se le notifique requerimiento especial o pliego de cargos, liquidando la sanción por corrección del artículo 644 del ET.',
          ],
          table: {
            caption: 'Cumplimiento voluntario y provocado en la obligación de declarar',
            headers: ['Situación', 'Cumplimiento voluntario', 'Cumplimiento provocado'],
            rows: [
              ['Omiso (no declara)', 'Declaración extemporánea con sanción del art. 641 ET; nace declaración privada', 'Emplazamiento para declarar, sanción por no declarar (art. 643 ET) y liquidación oficial de aforo (art. 717 ET)'],
              ['Inexacto (declara mal)', 'Corrección del art. 588 ET con sanción del art. 644 ET, dentro de los 3 años y antes del requerimiento especial o pliego de cargos', 'Emplazamiento para corregir, requerimiento especial (art. 703 ET) y liquidación oficial de revisión (art. 710 ET)'],
              ['Obligación formal distinta de declarar', 'Subsanación voluntaria cuando la ley la permite', 'Pliego de cargos (art. 638 ET) y resolución sanción'],
            ],
          },
        },
        {
          heading: 'El emplazamiento para corregir',
          paragraphs: [
            'Antes de notificar el requerimiento especial, la Administración puede notificar el emplazamiento para corregir (artículo 685 del ET), con el fin de invitar al contribuyente a corregir su liquidación privada antes de iniciar el procedimiento de revisión.',
            'Este acto no es de obligatoria expedición para la DIAN. Sin embargo, tiene un efecto procesal importante: con su notificación se suspende por un mes el término para notificar el requerimiento especial (artículo 706 del ET). Se trata de un acto de trámite que materializa el debido proceso y que da al obligado la última oportunidad de autocorregirse a bajo costo, porque la sanción por corrección del numeral 2 del artículo 644 del ET es inferior a la sanción de inexactitud.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Emplazamiento para corregir: NO es obligatorio, SÍ suspende por 1 mes el término para notificar el requerimiento especial.',
          },
        },
        {
          heading: 'El requerimiento especial: término y contenido',
          paragraphs: [
            'El artículo 703 del ET consigna que el requerimiento especial es requisito previo a la liquidación de revisión: antes de modificarse la liquidación privada debe notificarse el requerimiento especial, salvo en los casos de liquidación provisional. El proceso de revisión inicia, entonces, con la notificación del requerimiento dentro del término de firmeza de la declaración.',
            'El artículo 705 del ET fija el término para notificar el requerimiento teniendo en cuenta tres momentos: i) a más tardar dentro de los tres años siguientes a la fecha de vencimiento del plazo para declarar, si la declaración se presentó dentro del plazo; ii) si la declaración inicial se presentó en forma extemporánea, los tres años se cuentan a partir de la fecha de presentación de la declaración extemporánea; y iii) si la declaración presenta un saldo a favor del contribuyente o responsable, el requerimiento deberá notificarse a más tardar tres años después de la fecha de presentación de la solicitud de devolución o compensación.',
            'En el requerimiento especial debe consignarse la cuantificación de los impuestos, anticipos, retenciones y sanciones que se pretenden adicionar a la liquidación privada del sujeto obligado. El artículo 704 del ET regula su contenido y el artículo 711 exige que la liquidación de revisión guarde correspondencia con los hechos contemplados en el requerimiento especial o en su ampliación.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Los TRES momentos del art. 705 ET: 1) declaración oportuna: 3 años desde el vencimiento del plazo. 2) declaración extemporánea: 3 años desde la presentación. 3) saldo a favor solicitado en devolución o compensación: 3 años desde la solicitud.',
          },
        },
        {
          heading: 'Suspensión del término del artículo 706',
          paragraphs: [
            'El término para notificar el requerimiento especial se suspende en tres eventos: cuando se practica inspección tributaria de oficio, por tres meses contados a partir de la notificación del auto que la decreta; cuando la inspección tributaria se practica a solicitud del sujeto obligado, por el término que dure la diligencia; y durante el mes siguiente a la notificación del emplazamiento para corregir.',
            'La suspensión es un concepto clave en el examen de oportunidad del requerimiento: el término de firmeza se corre en el tiempo, de manera que el requerimiento puede notificarse válidamente después de los tres años, siempre que el tiempo de suspensión cubra el exceso. Como se vio en la lección anterior, la suspensión por inspección oficiosa exige la práctica efectiva de la diligencia dentro de los tres meses.',
          ],
        },
        {
          heading: 'Respuesta, ampliación y prueba',
          paragraphs: [
            'En ejercicio del debido proceso, del derecho de defensa y de contradicción de la prueba, el obligado sujeto de la investigación cuenta con tres meses a partir de la notificación del requerimiento especial para presentar un escrito en el que consigne sus objeciones, solicite pruebas, subsane las omisiones que permita la ley y solicite a la DIAN que allegue al proceso documentos que reposen en sus archivos (artículo 707 del ET).',
            'El artículo 708 del ET permite ampliar el requerimiento especial. Conforme al parágrafo del artículo 691 del ET, tal como fue adicionado por el artículo 50 del Decreto Ley 2106 de 2019, el jefe de la unidad de fiscalización es el competente para expedir la ampliación. Esta se puede decretar por una sola vez, dentro de los tres meses siguientes a la fecha de vencimiento del plazo para responder el requerimiento, y en ella se pueden decretar pruebas, incluir hechos y conceptos no contemplados en el requerimiento inicial y proponer una nueva determinación.',
            'Notificada la ampliación, la DIAN debe otorgar al sujeto investigado un término para contestarla que no puede ser inferior a tres meses ni superior a seis meses. El acto de ampliación es una garantía del derecho de defensa: amplía los hechos y las pruebas, pero también obliga a dar traslado de lo nuevo antes de decidir.',
          ],
          table: {
            caption: 'Esquema de etapas y términos del proceso de revisión',
            headers: ['Etapa', 'Acto administrativo', 'Término', 'Norma'],
            rows: [
              ['1. Invitación a corregir', 'Emplazamiento para corregir', 'No obligatorio; suspende 1 mes el término del requerimiento', 'Arts. 685 y 706 ET'],
              ['2. Inicio de la revisión', 'Requerimiento especial', '3 años desde el vencimiento del plazo, desde la presentación extemporánea o desde la solicitud de devolución, según el caso', 'Arts. 703 y 705 ET'],
              ['3. Suspensión (si hay)', 'Auto de inspección tributaria de oficio', '3 meses desde la notificación del auto (o el término de la diligencia si es a solicitud)', 'Arts. 706 y 779 ET'],
              ['4. Defensa del obligado', 'Respuesta al requerimiento especial', '3 meses desde la notificación', 'Art. 707 ET'],
              ['5. Ampliación (una sola vez)', 'Ampliación al requerimiento especial', 'Se decreta dentro de los 3 meses siguientes al vencimiento del plazo para responder; la respuesta no puede ser inferior a 3 ni superior a 6 meses', 'Art. 708 ET'],
              ['6. Determinación', 'Liquidación oficial de revisión', '6 meses siguientes al vencimiento del plazo para responder el requerimiento o su ampliación', 'Arts. 710 y 714 ET'],
              ['7. Discusión', 'Recurso de reconsideración', '2 meses desde la notificación del acto', 'Art. 720 ET'],
            ],
          },
        },
        {
          heading: 'La liquidación oficial de revisión',
          paragraphs: [
            'La liquidación oficial de revisión es el acto mediante el cual la Administración decide modificar la liquidación privada del contribuyente, luego de haberse notificado debidamente el requerimiento especial. Debe notificarse dentro de los seis meses siguientes a la fecha de vencimiento del plazo con que cuenta el sujeto investigado para dar respuesta al requerimiento especial o a su ampliación (artículo 710 del ET).',
            'Este acto debe estar motivado y contener, conforme al artículo 712 del ET: la fecha y, en caso de no indicarse, se tendrá como tal la de su notificación; el período gravable; el nombre o razón social del contribuyente; el número de identificación tributaria; las bases de cuantificación del tributo; el monto de los tributos y sanciones a cargo; la explicación sumaria de las modificaciones efectuadas en lo concerniente a la declaración; y la firma o sello del control manual o automatizado.',
            'Además, la liquidación oficial de revisión debe guardar correspondencia con los hechos contemplados en el requerimiento especial o en su ampliación y solo puede contraerse a la declaración del contribuyente (artículos 711 y 712 ET). Si no se notifica dentro de los seis meses, la declaración objeto del proceso de revisión queda en firme por el solo transcurso del término: es la llamada firmeza por procedimiento.',
            'Dentro del término para interponer el recurso de reconsideración el obligado puede aceptar total o parcialmente lo decidido en la liquidación oficial de revisión; si lo hace y corrige la declaración en esa etapa, accede a la reducción de la sanción de inexactitud y liquida intereses con la fórmula de interés simple, a la tasa de interés bancario corriente certificada por la Superintendencia Financiera para créditos de consumo y ordinario, más dos puntos (artículos 713 y 590 del ET).',
          ],
          callout: {
            type: 'importante',
            text: 'Cadena de firmes y términos: 3 años para el requerimiento (art. 705) + suspensiones + 3 meses de respuesta (art. 707) + 6 meses para notificar la liquidación de revisión (art. 710). Si el último término se incumple, sobreviene la firmeza por procedimiento (art. 714, inciso 3).',
          },
        },
      ],
      summary: [
        'Los procedimientos para determinar impuestos o imponer sanciones son cuatro: ordinario, liquidación provisional, simplificado (SIMPLE) y abuso en materia tributaria.',
        'Dentro del procedimiento ordinario, los omisos se tramitan por aforo y sanción por no declarar; los inexactos, por el proceso de revisión con requerimiento especial y liquidación oficial de revisión.',
        'El emplazamiento para corregir no es obligatorio, pero suspende por un mes el término para notificar el requerimiento especial.',
        'El requerimiento especial es requisito previo de la liquidación de revisión y se notifica dentro de los tres años contados desde el vencimiento del plazo para declarar, desde la presentación extemporánea o desde la solicitud de devolución o compensación, según el caso.',
        'El obligado tiene tres meses para responder el requerimiento; la ampliación se decreta una sola vez dentro de los tres meses siguientes al vencimiento de ese plazo y su respuesta no puede ser inferior a tres ni superior a seis meses.',
        'La liquidación oficial de revisión se notifica dentro de los seis meses siguientes al vencimiento del plazo para responder el requerimiento o su ampliación; si no se notifica, la declaración queda en firme (firmeza por procedimiento).',
      ],
      memorize: [
        'Requerimiento especial = requisito previo de la liquidación de revisión (art. 703 ET).',
        'Art. 705 ET: 3 años, con tres momentos (vencimiento / presentación extemporánea / solicitud de devolución).',
        'Art. 706 ET: suspensiones de 3 meses (inspección oficiosa), duración de la diligencia (a solicitud) y 1 mes (emplazamiento para corregir).',
        'Art. 707 ET: 3 meses para responder el requerimiento. Art. 708 ET: ampliación una sola vez, respuesta de 3 a 6 meses.',
        'Art. 710 ET: 6 meses para notificar la liquidación oficial de revisión. Si se incumplen, firmeza por procedimiento.',
        'Art. 712 ET: la liquidación de revisión debe estar motivada y guardar correspondencia con el requerimiento o su ampliación.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: cómputo del término del requerimiento especial',
          paragraphs: [
            'Una sociedad presentó su declaración de renta del año gravable 2022 el 20 de abril de 2023, dentro del plazo. El término de firmeza corre desde el vencimiento del plazo para declarar: los tres años vencen el 20 de abril de 2026. Si el 10 de mayo de 2025 la DIAN notifica un emplazamiento para corregir, el término se suspende un mes y, en consecuencia, el requerimiento especial podrá notificarse válidamente hasta el 20 de mayo de 2026.',
            'Si además la DIAN hubiera decretado y practicado efectivamente una inspección tributaria de oficio notificada el 1 de julio de 2025, se sumarían tres meses más de suspensión, con lo que el término se extendería hasta el 20 de agosto de 2026. Lo determinante no es la fecha del auto, sino su notificación y la práctica efectiva de la diligencia dentro de los tres meses.',
          ],
        },
        {
          heading: 'Ejemplo 2: ampliación al requerimiento especial',
          paragraphs: [
            'Notificado el requerimiento especial el 5 de marzo de 2025, el plazo de tres meses para responder vence el 5 de junio de 2025. La ampliación solo puede decretarse dentro de los tres meses siguientes a esa fecha, es decir, hasta el 5 de septiembre de 2025. Si se profiere ampliación el 20 de agosto de 2025, el plazo para contestarla debe ser de mínimo tres y máximo seis meses, y solo desde su vencimiento empiezan a correr los seis meses para notificar la liquidación oficial de revisión.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que el emplazamiento para corregir es obligatorio para que la DIAN pueda expedir el requerimiento especial.',
          correction: 'El emplazamiento para corregir es facultativo. Su efecto relevante es procesal: suspende por un mes el término para notificar el requerimiento especial (art. 706 ET).',
        },
        {
          mistake: 'Pensar que la ampliación al requerimiento especial puede hacerse cuantas veces la DIAN quiera y sin traslado.',
          correction: 'La ampliación se decreta por una sola vez, dentro de los tres meses siguientes al vencimiento del plazo para responder el requerimiento, y el investigado debe tener un término para contestarla no inferior a tres meses ni superior a seis.',
        },
        {
          mistake: 'Confundir el término para notificar el requerimiento especial con el término para notificar la liquidación de revisión.',
          correction: 'El requerimiento se notifica dentro de los tres años del art. 705 (con suspensiones del art. 706); la liquidación de revisión, dentro de los seis meses siguientes al vencimiento del plazo para responder el requerimiento o su ampliación (art. 710).',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 685, 686 y 688',
          status: 'vigente',
          note: 'Emplazamiento para corregir, deber de atender requerimientos y competencia para la actuación fiscalizadora.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 702, 703, 704, 705 y 706',
          status: 'vigente',
          note: 'Facultad de modificar la liquidación privada, el requerimiento especial como requisito previo, su contenido, su término (tres momentos) y las causales de suspensión.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 707, 708, 710, 711, 712 y 713',
          status: 'vigente',
          note: 'Respuesta al requerimiento, ampliación, término y contenido de la liquidación de revisión, correspondencia con el requerimiento y aceptación con reducción de sanciones.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 714 y 720',
          status: 'vigente',
          note: 'Firmeza de la declaración (incluida la firmeza por procedimiento del inciso 3) y recurso de reconsideración con su término de dos meses.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 588, 589 y 644',
          status: 'vigente',
          note: 'Correcciones que aumentan el valor a pagar (588), solicitudes de corrección que lo disminuyen (589) y sanción por corrección (644).',
        },
        {
          norm: 'Decreto Ley 2106 de 2019',
          article: 'Artículo 50',
          status: 'verificar',
          note: 'El material lo cita como norma que adicionó el parágrafo del art. 691 del ET sobre la competencia del jefe de la unidad de fiscalización para ampliar requerimientos. Requiere confirmación en fuente oficial.',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — Título IV del Libro V (arts. 702-714)', url: 'https://estatuto.co/libro/5/v-titulo-iv' },
        { label: 'DIAN — Normograma del Estatuto Tributario', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm' },
        { label: 'Secretaría del Senado — Estatuto Tributario', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
      ],
      mindmap: {
        root: 'Proceso de revisión',
        branches: [
          { label: 'Antes del requerimiento', children: ['Emplazamiento para corregir (no obligatorio)', 'Suspende 1 mes', 'Corrección del art. 588 ET'] },
          { label: 'Requerimiento especial', children: ['Requisito previo (art. 703)', 'Término de 3 años (art. 705)', 'Cuantifica impuestos, retenciones y sanciones', 'Suspensiones del art. 706'] },
          { label: 'Defensa', children: ['Respuesta: 3 meses (art. 707)', 'Ampliación: una sola vez (art. 708)', 'Respuesta a la ampliación: 3 a 6 meses'] },
          { label: 'Determinación', children: ['Liquidación oficial de revisión (art. 710)', 'Motivación y contenido (art. 712)', 'Correspondencia con el requerimiento (art. 711)'] },
          { label: 'Efectos', children: ['Firmeza por procedimiento', 'Recurso de reconsideración (2 meses)', 'Aceptación con reducción (art. 713)'] },
        ],
      },
      mindmapText:
        'El proceso de revisión empieza con la invitación a corregir (emplazamiento para corregir, no obligatorio, que suspende un mes). El requerimiento especial es requisito previo de la liquidación de revisión y se notifica dentro de los tres años de los tres momentos del art. 705 ET, con las suspensiones del art. 706. El obligado responde en tres meses; la DIAN puede ampliar una sola vez y la respuesta a la ampliación va de tres a seis meses. La liquidación oficial de revisión se notifica en los seis meses siguientes al vencimiento del plazo de respuesta, debe estar motivada y corresponder a los hechos del requerimiento o su ampliación; si no se notifica, la declaración queda en firme por procedimiento. Contra ella procede el recurso de reconsideración dentro de los dos meses siguientes a su notificación.',
      source: [
        { doc: 'material', pages: 'págs. 443-450 (clases de procedimiento; procedimiento ordinario: omisos e inexactos; requerimiento especial, respuesta y ampliación)' },
        { doc: 'material', pages: 'págs. 451-452 (liquidación oficial de revisión, resolución sanción independiente y recurso de reconsideración)' },
        { doc: 'material', pages: 'págs. 458-462 (firmeza general, firmeza por procedimiento, suspensión de la firmeza)' },
        { doc: 'taci', pages: 'págs. 85-88 (suspensión del término, contenido de la liquidación de revisión, término para notificarla)', note: 'Incluye el análisis jurisprudencial del art. 706 ET.' },
      ],
      activityId: 'm06-a01',
    },
    {
      id: 'm06-l03',
      moduleId: 'm06',
      title: 'Liquidación provisional y otros procedimientos de determinación',
      indicators: ['i10'],
      objectives: [
        'Describir el procedimiento de aforo y sus etapas, actos y términos.',
        'Explicar las clases de corrección a las declaraciones y sus efectos sancionatorios.',
        'Aplicar la reducción del 40 por ciento de las sanciones en la liquidación provisional.',
        'Diferenciar los efectos de aceptar, guardar silencio o rechazar una liquidación provisional.',
      ],
      sections: [
        {
          heading: 'El procedimiento de aforo (arts. 715 a 719 ET)',
          paragraphs: [
            'El aforo es el procedimiento dirigido a determinar oficialmente la obligación tributaria de quien, teniendo el deber de declarar, no lo cumple, o de quien habiendo declarado tiene su declaración por no presentada o ineficaz.',
            'Según la jurisprudencia del Consejo de Estado citada por el material, el proceso de aforo comprende tres etapas: el emplazamiento por no declarar, la sanción por no declarar y la liquidación de aforo. El emplazamiento para declarar (artículo 715 del ET) otorga un plazo de un mes para que el obligado cumpla y le advierte las consecuencias de persistir en la omisión; si el obligado no contesta o se opone y la respuesta no resulta satisfactoria (artículo 716 del ET), la DIAN expide la resolución sanción por no declarar (artículo 643 del ET).',
            'Agotado el procedimiento previsto en los artículos 643, 715 y 716, la Administración puede determinar mediante liquidación oficial de aforo la obligación tributaria, dentro de los cinco años siguientes al vencimiento del plazo señalado para declarar (artículo 717 del ET). Contra la liquidación de aforo procede el recurso de reconsideración dentro de los dos meses siguientes a su notificación, con lo cual se agota la vía administrativa; una vez ejecutoriada y en firme, el acto es ejecutivo y su cobro se persigue por el proceso de cobro coactivo.',
            'En este procedimiento los actos administrativos definitivos son la resolución sanción por no declarar, la liquidación de aforo y los actos que resuelvan los recursos interpuestos contra ellas, porque en ellos se concreta la manifestación de la voluntad de la Administración sobre la existencia de la obligación, el obligado y la cuantía del tributo.',
          ],
          table: {
            caption: 'Procedimiento de aforo: etapas, términos y actos',
            headers: ['Etapa', 'Acto', 'Término', 'Norma'],
            rows: [
              ['1. Emplazamiento', 'Emplazamiento para declarar', 'Otorga 1 mes para declarar', 'Art. 715 ET'],
              ['2. Sanción', 'Resolución sanción por no declarar', 'Si no se contesta o la respuesta no satisface (traslado de 1 mes para responder)', 'Arts. 643 y 716 ET'],
              ['3. Determinación', 'Liquidación oficial de aforo', 'Dentro de los 5 años siguientes al vencimiento del plazo para declarar', 'Art. 717 ET'],
              ['Discusión', 'Recurso de reconsideración', '2 meses desde la notificación', 'Art. 720 ET'],
            ],
          },
        },
        {
          heading: 'La corrección de las declaraciones',
          paragraphs: [
            'El material identifica la corrección como una de las sanciones relativas a las declaraciones tributarias (artículos 644, 645 y 647-1 del ET) y explica que el inexacto puede cumplir voluntariamente corrigiendo su declaración con base en el artículo 588 del ET, dentro de los tres años siguientes al vencimiento del plazo para declarar y antes de que se le notifique requerimiento especial o pliego de cargos. Si la corrección ocurre con ocasión del emplazamiento para corregir, se liquida la sanción del numeral 2 del artículo 644 del ET.',
            'Junto a la corrección voluntaria convive la corrección aritmética (artículos 697 a 701 del ET), que procede cuando, pese a haberse declarado correctamente los hechos imponibles o bases gravables, se anota como valor resultante un dato equivocado, se aplica una tarifa distinta a la que ha debido resultar o se comete un error de operación aritmética que implique un menor valor a pagar o un mayor saldo a favor. La corrección aritmética la practica la Administración mediante liquidación de corrección y no constituye una sanción por inexactitud, precisamente porque no hay un desconocimiento de la realidad económica sino un error de cálculo.',
          ],
          table: {
            caption: 'Clases de corrección y su tratamiento',
            headers: ['Clase', 'Qué corrige', 'Quién la realiza', 'Norma'],
            rows: [
              ['Corrección voluntaria que aumenta el valor a pagar o disminuye el saldo a favor', 'Errores u omisiones del declarante', 'El obligado, con sanción del art. 644 ET', 'Art. 588 ET'],
              ['Solicitud de corrección que disminuye el valor a pagar o aumenta el saldo a favor', 'Errores u omisiones del declarante', 'El obligado, por solicitud ante la DIAN', 'Art. 589 ET'],
              ['Corrección provocada por el requerimiento especial', 'Glosas propuestas en el requerimiento', 'El obligado, aceptando total o parcialmente', 'Art. 709 ET'],
              ['Corrección aritmética', 'Errores de operación, tarifa o valor resultante', 'La Administración, por liquidación de corrección', 'Arts. 697 a 701 ET'],
            ],
          },
        },
        {
          heading: 'La liquidación provisional: naturaleza, sujetos y obligaciones investigables',
          paragraphs: [
            'El procedimiento de liquidación provisional, contenido en los artículos 764 al 764-6 del ET, constituye un procedimiento para determinar impuestos o imponer sanciones con características especiales frente al sujeto que puede ser seleccionado, el término para desarrollar las etapas y la firmeza de la declaración. El material lo describe como un proceso abreviado, más expedito que el ordinario.',
            'Pueden ser sujetos de liquidación provisional los contribuyentes que, en el año gravable inmediatamente anterior a aquel al que se refiere la liquidación provisional, hayan declarado ingresos brutos iguales o inferiores a quince mil (15.000) UVT, un patrimonio bruto igual o inferior a treinta mil (30.000) UVT, o los valores que determine la Administración Tributaria a falta de declaración. En ningún caso se puede superar dicho tope.',
            'Las obligaciones que se pueden investigar por esta vía son: los impuestos, gravámenes, contribuciones, sobretasas, anticipos y retenciones declarados de manera inexacta o no declarados por el contribuyente, agente de retención o declarante, junto con las sanciones que se deriven de la inexactitud u omisión; las sanciones omitidas o indebidamente liquidadas en las declaraciones; y las sanciones por el incumplimiento de las obligaciones formales.',
            'La actuación puede proponerse dentro de los cinco años siguientes a la fecha del vencimiento para declarar, o dentro del término previsto para sancionar, según corresponda.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Topes del art. 764 ET: ingresos brutos del año anterior hasta 15.000 UVT o patrimonio bruto hasta 30.000 UVT. Término: 5 años desde el vencimiento para declarar o el término previsto para sancionar.',
          },
        },
        {
          heading: 'La liquidación provisional reemplaza al acto que corresponda',
          paragraphs: [
            'La liquidación provisional cumple una función de sustitución procesal: reemplaza al requerimiento especial, al emplazamiento previo por no declarar o al pliego de cargos, según la situación del obligado. Por eso el procedimiento es más corto y por eso el legislador exige que, si el contribuyente la rechaza o discute, la Administración ratifique la propuesta mediante el acto definitivo que corresponda.',
            'El artículo 764-6 del ET fija los términos de esa ratificación y discusión: cuando la liquidación provisional reemplace al requerimiento especial o se profiera su ampliación, la Administración la ratifica con la liquidación oficial de revisión dentro de los dos meses siguientes a que se agote el término de respuesta a la liquidación provisional; cuando reemplace al emplazamiento previo por no declarar, la ratifica con la liquidación oficial de aforo dentro de los dos meses siguientes a que se agote el término de respuesta, y en ese mismo acto debe imponer la sanción por no declarar del artículo 643 del ET; y cuando reemplace al pliego de cargos, la ratifica con la resolución sanción dentro de los dos meses siguientes, contados después de agotado el término de respuesta a la liquidación provisional.',
            'Cuando el investigado guarda silencio ante la liquidación provisional, esta se considera aceptada por el contribuyente, en cuyo caso la Administración puede iniciar el procedimiento administrativo de cobro. El silencio, entonces, no equivale a rechazo: equivale a aceptación.',
          ],
          table: {
            caption: 'La liquidación provisional y el acto que reemplaza',
            headers: ['Acto reemplazado', 'Conducta del obligado', 'Acto con que la DIAN ratifica', 'Norma'],
            rows: [
              ['Requerimiento especial (o su ampliación)', 'Rechaza o no acepta', 'Liquidación oficial de revisión, en los 2 meses siguientes al término de respuesta', 'Art. 764-6, num. 1'],
              ['Emplazamiento previo por no declarar', 'Rechaza o no acepta', 'Liquidación oficial de aforo en los 2 meses siguientes, con la sanción por no declarar en el mismo acto', 'Art. 764-6, num. 2'],
              ['Pliego de cargos', 'Rechaza o no acepta', 'Resolución sanción en los 2 meses siguientes', 'Art. 764-6, num. 3'],
              ['Cualquiera de los anteriores', 'Guarda silencio', 'Se entiende aceptada: se puede iniciar el cobro', 'Art. 764-6'],
            ],
          },
        },
        {
          heading: 'La reducción del 40 por ciento y la firmeza de seis meses',
          paragraphs: [
            'El artículo 764-3 del ET establece que las sanciones que se deriven de una liquidación provisional aceptada se reducen en un cuarenta por ciento (40%) del valor que resulte de la aplicación del régimen sancionatorio del Estatuto Tributario, siempre que el contribuyente la acepte y pague dentro del mes siguiente a su notificación, bien sea que se haya discutido o no.',
            'La reducción tiene dos exclusiones expresas: no aplica para las sanciones generadas por la omisión o corrección de las declaraciones tributarias, ni para las sanciones derivadas del incumplimiento de obligaciones formales que puedan ser subsanadas por el contribuyente en forma voluntaria antes de proferido el pliego de cargos. En estos dos casos se aplica el régimen sancionatorio general del ET.',
            'La reducción de sanciones en el procedimiento tributario puede aplicarse de forma acumulativa, siempre y cuando no exista normativa en contrario. Esto significa que, por ejemplo, una sanción reducida por el artículo 640 del ET puede además verse beneficiada por la reducción del 40% del artículo 764-3, si el obligado acepta y paga dentro del mes siguiente.',
            'Adicionalmente, el artículo 764-4 del ET fija la firmeza de las declaraciones corregidas o presentadas con ocasión de la aceptación de la liquidación provisional en seis (6) meses a partir de la fecha de su corrección o presentación, siempre que se atiendan las formalidades y condiciones establecidas para que la declaración se considere válidamente presentada. Es una firmeza abreviada: la contrapartida de haber aceptado el procedimiento abreviado.',
          ],
          callout: {
            type: 'importante',
            text: 'Reducción del 40% (art. 764-3 ET): requiere ACEPTAR y PAGAR dentro del mes siguiente a la notificación. NO aplica a sanciones por omisión o corrección de declaraciones ni a las de obligaciones formales subsanables voluntariamente antes del pliego de cargos.',
          },
        },
        {
          heading: 'Ejemplo de cálculo de la reducción del 40 por ciento',
          paragraphs: [
            'Supuesto: la DIAN profiere una liquidación provisional en la que propone una sanción por no informar (artículo 651 del ET) equivalente a treinta millones de pesos ($30.000.000). El obligado acepta la liquidación provisional y paga dentro del mes siguiente a su notificación.',
            'Cálculo: sanción plena $30.000.000; reducción del 40% sobre el valor que resulte de aplicar el régimen sancionatorio, es decir $30.000.000 x 0,40 = $12.000.000 de reducción; sanción a pagar $30.000.000 - $12.000.000 = $18.000.000. El pago debe hacerse dentro del mes siguiente a la notificación; si se paga después, se pierde el beneficio y se aplica el valor pleno.',
            'Contraste con el procedimiento ordinario: si en lugar de aceptar la liquidación provisional el obligado rechazara la propuesta y la DIAN expidiera la resolución sanción, no tendría derecho a esta reducción y pagaría la sanción plena, más los intereses de mora causados durante la discusión.',
          ],
        },
        {
          heading: 'El procedimiento simplificado y el procedimiento de abuso',
          paragraphs: [
            'El procedimiento simplificado corresponde al impuesto unificado bajo el régimen simple de tributación (SIMPLE). El artículo 916 del ET dispone que el régimen de procedimiento, sancionatorio y de firmeza de las declaraciones del SIMPLE es el previsto en el Estatuto Tributario. El material advierte una consecuencia práctica del principio de legalidad: como el artículo 643 del ET no describe la sanción por no declarar del SIMPLE ni del desaparecido CREE, en virtud de la reserva de ley no procede aplicar por analogía las sanciones de ese artículo.',
            'El procedimiento de abuso en materia tributaria (artículo 869 del ET) se estudia con la penalización de la evasión en el módulo 8: allí se desarrolla la recaracterización de operaciones, el emplazamiento especial por abuso y el trámite del visto bueno.',
          ],
        },
      ],
      summary: [
        'El aforo comprende tres etapas (emplazamiento para declarar, sanción por no declarar y liquidación de aforo) y la determinación debe hacerse dentro de los cinco años siguientes al vencimiento del plazo para declarar.',
        'La corrección puede ser voluntaria (arts. 588 y 589 ET), provocada por el requerimiento especial (art. 709 ET) o aritmética (arts. 697 a 701 ET, que no constituye sanción por inexactitud).',
        'La liquidación provisional (arts. 764 a 764-6 ET) es un procedimiento abreviado para sujetos con ingresos brutos hasta 15.000 UVT o patrimonio bruto hasta 30.000 UVT del año anterior, dentro de los cinco años siguientes al vencimiento para declarar o al término para sancionar.',
        'La liquidación provisional reemplaza al requerimiento especial, al emplazamiento previo por no declarar o al pliego de cargos; si se rechaza, la DIAN ratifica con la liquidación oficial de revisión, de aforo o la resolución sanción, dentro de los dos meses siguientes.',
        'El silencio ante la liquidación provisional equivale a aceptación y habilita el cobro.',
        'Las sanciones de una liquidación provisional aceptada se reducen en un 40% si se acepta y paga dentro del mes siguiente a la notificación; la reducción no aplica a sanciones por omisión o corrección de declaraciones ni a obligaciones formales subsanables antes del pliego de cargos, y puede ser acumulativa con otras reducciones.',
        'La firmeza de las declaraciones aceptadas en liquidación provisional es de seis meses (art. 764-4 ET).',
      ],
      memorize: [
        'Aforo: emplazamiento (1 mes) → sanción por no declarar (art. 643) → liquidación de aforo (5 años, art. 717).',
        'Art. 764 ET: 15.000 UVT de ingresos brutos o 30.000 UVT de patrimonio bruto del año anterior.',
        'Art. 764-3 ET: reducción del 40% si acepta y paga dentro del mes siguiente a la notificación.',
        'Art. 764-6 ET: silencio = aceptación; ratificación en 2 meses con liquidación de revisión, de aforo o resolución sanción.',
        'Art. 764-4 ET: firmeza de 6 meses para las declaraciones aceptadas en liquidación provisional.',
        'Corrección aritmética (arts. 697-701 ET) no es sanción por inexactitud: es un error de cálculo, no un desconocimiento de la realidad.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: aforo con sanción por no declarar',
          paragraphs: [
            'Un comerciante obligado a declarar renta por el año gravable 2023 no presentó la declaración. Vencido el plazo el 10 de abril de 2024, la DIAN lo emplaza el 15 de julio de 2025 para que declare dentro del mes siguiente. Como no presenta la declaración, expide resolución sanción por no declarar y, con base en la información exógena disponible, practica liquidación oficial de aforo el 20 de febrero de 2026.',
            'El plazo se verifica así: la determinación de aforo debía practicarse dentro de los cinco años siguientes al vencimiento del plazo para declarar, es decir, hasta el 10 de abril de 2029, de modo que el acto se profirió en tiempo. El recurso de reconsideración procede dentro de los dos meses siguientes a la notificación del acto; agotada la vía administrativa, el acto queda ejecutoriado y es título de cobro.',
          ],
        },
        {
          heading: 'Ejemplo 2: reducción del 40% sobre una sanción por desconocimiento de costos',
          paragraphs: [
            'La DIAN propone en liquidación provisional una sanción por incumplimiento de una obligación formal distinta de la de declarar, por valor de $30.000.000, subsanable únicamente de forma provocada (no procede la subsanación voluntaria antes del pliego de cargos). El obligado acepta y paga dentro del mes siguiente a la notificación.',
            'Cálculo: $30.000.000 x 40% = $12.000.000 de reducción. Sanción a pagar: $18.000.000. Si en cambio la sanción hubiera correspondido a la omisión de una obligación formal subsanable voluntariamente antes del pliego de cargos, la reducción del 40% no aplicaría y se liquidaría el régimen sancionatorio general.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Aplicar la reducción del 40% a las sanciones por omisión o corrección de declaraciones.',
          correction: 'El art. 764-3 ET excluye expresamente las sanciones generadas por la omisión o corrección de las declaraciones tributarias y las derivadas de obligaciones formales subsanables voluntariamente antes del pliego de cargos.',
        },
        {
          mistake: 'Creer que el silencio del contribuyente ante la liquidación provisional equivale a rechazo y obliga a la DIAN a proferir una liquidación oficial de revisión.',
          correction: 'El silencio se tiene por aceptación de la liquidación provisional, y con base en ella la Administración puede iniciar directamente el procedimiento administrativo de cobro (art. 764-6 ET).',
        },
        {
          mistake: 'Confundir la liquidación de corrección aritmética con la sanción por inexactitud.',
          correction: 'La corrección aritmética corrige errores de operación, tarifa o valor resultante (arts. 697 a 701 ET) y no es sanción por inexactitud; la inexactitud supone omitir ingresos, incluir costos o deducciones inexistentes o usar datos falsos que generan un menor impuesto o un mayor saldo a favor.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 715, 716, 717, 718 y 719',
          status: 'vigente',
          note: 'Emplazamiento para declarar, respuesta, facultad de aforo, contenido y término de la liquidación de aforo.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 697, 698, 699, 700 y 701',
          status: 'vigente',
          note: 'Error aritmético, facultad de corrección, término, contenido de la liquidación de corrección y corrección de sanciones.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 764, 764-1, 764-2, 764-3, 764-4 y 764-6',
          status: 'vigente',
          note: 'Procedimiento de liquidación provisional, sujetos, obligaciones investigables, sanciones con reducción del 40%, firmeza de seis meses y determinación y discusión de las actuaciones derivadas.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 916',
          status: 'vigente',
          note: 'Régimen de procedimiento, sancionatorio y de firmeza de las declaraciones del impuesto unificado bajo el régimen simple de tributación (SIMPLE).',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 869',
          status: 'vigente',
          note: 'Abuso en materia tributaria: recaracterización o reconfiguración de operaciones. Desarrollado en el módulo 8.',
        },
        {
          norm: 'Ley 2010 de 2019',
          article: 'Artículo 117',
          status: 'verificar',
          note: 'El material cita esta norma como fuente del término de firmeza de cinco años de las declaraciones con pérdidas fiscales y de quienes están sujetos al régimen de precios de transferencia; conviene confirmar la numeración vigente.',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — liquidación provisional (arts. 764 y ss.)', url: 'https://estatuto.co/libro/5/v-titulo-v' },
        { label: 'DIAN — Normograma del Estatuto Tributario', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm' },
        { label: 'Estatuto Tributario — Título IV del Libro V (corrección y aforo)', url: 'https://estatuto.co/libro/5/v-titulo-iv' },
      ],
      mindmap: {
        root: 'Otros procedimientos de determinación',
        branches: [
          { label: 'Aforo', children: ['Emplazamiento para declarar (art. 715)', 'Sanción por no declarar (art. 643)', 'Liquidación de aforo (art. 717, 5 años)'] },
          { label: 'Corrección', children: ['Voluntaria (arts. 588 y 589)', 'Provocada (art. 709)', 'Aritmética (arts. 697-701)'] },
          { label: 'Liquidación provisional', children: ['Sujetos: 15.000 / 30.000 UVT', '5 años', 'Reemplaza requerimiento, emplazamiento o pliego de cargos'] },
          { label: 'Efectos', children: ['Reducción del 40% (art. 764-3)', 'Silencio = aceptación', 'Ratificación en 2 meses (art. 764-6)', 'Firmeza de 6 meses (art. 764-4)'] },
        ],
      },
      mindmapText:
        'La determinación oficial puede lograrse por aforo (emplazamiento para declarar, sanción por no declarar y liquidación de aforo dentro de los cinco años), por corrección (voluntaria de los arts. 588 y 589, provocada del art. 709 o aritmética de los arts. 697 a 701) o por liquidación provisional (arts. 764 y ss.), un procedimiento abreviado para sujetos con ingresos brutos hasta 15.000 UVT o patrimonio bruto hasta 30.000 UVT que reemplaza al requerimiento especial, al emplazamiento previo por no declarar o al pliego de cargos. Si se acepta y se paga dentro del mes siguiente a la notificación, las sanciones se reducen en un 40% (art. 764-3), con exclusión de las sanciones por omisión o corrección de declaraciones y de las obligaciones formales subsanables antes del pliego de cargos; el silencio equivale a aceptación y la firmeza de la declaración aceptada es de seis meses.',
      source: [
        { doc: 'material', pages: 'págs. 445-448 (omisos y aforo; corrección voluntaria del art. 588 ET; procedimiento de aforo en tres etapas)' },
        { doc: 'material', pages: 'págs. 453-455 (procedimiento de liquidación provisional: sujetos, obligaciones investigables, art. 764-6)', note: 'Incluye el texto del art. 764-6 ET.' },
        { doc: 'material', pages: 'pág. 429 (reducción del 40% en la liquidación provisional, art. 764-3 ET)' },
        { doc: 'material', pages: 'pág. 431 (sanción de corrección aritmética, arts. 646 y 697 ET)' },
        { doc: 'material', pages: 'pág. 448 (art. 916 ET y la reserva de ley en el SIMPLE y el CREE)' },
        { doc: 'material', pages: 'págs. 460-461 (firmeza por liquidación provisional, art. 764-4 ET)' },
      ],
      activityId: 'm06-a02',
    },
    {
      id: 'm06-l04',
      moduleId: 'm06',
      title: 'Actos administrativos, recursos, firmeza y prescripción',
      indicators: ['i10'],
      objectives: [
        'Distinguir los actos de trámite de los actos definitivos en materia tributaria y reconocer cuáles prestan mérito ejecutivo.',
        'Explicar el recurso de reconsideración: oportunidad, requisitos, efectos y agotamiento de la vía administrativa.',
        'Identificar los casos y condiciones de la revocatoria directa de los actos tributarios.',
        'Diferenciar la firmeza de las declaraciones de la prescripción de la acción de cobro.',
      ],
      sections: [
        {
          heading: 'Actos de trámite y actos definitivos',
          paragraphs: [
            'El material clasifica las actuaciones del procedimiento tributario en actos de trámite y actos definitivos. Son actos de trámite el emplazamiento para declarar, el emplazamiento para corregir, el requerimiento especial y su ampliación, el pliego de cargos y el auto de inspección tributaria; no deciden de fondo y no son susceptibles de recursos.',
            'Son actos definitivos la resolución sanción por no declarar, la liquidación oficial de aforo, la liquidación oficial de revisión, la resolución sanción proferida en resolución independiente y los actos que resuelven los recursos interpuestos contra ellos. En estos se concreta la manifestación de la voluntad de la Administración sobre la existencia de la obligación, el obligado y la cuantía del tributo, y son los que prestan mérito ejecutivo y pueden constituirse en título de cobro.',
            'El material recuerda que en el campo tributario existen documentos privados y administrativos susceptibles de constituirse en títulos ejecutivos de cobro, los cuales deben cumplir con la normativa vigente para evitar reprocesos en las cobranzas: la declaración privada presentada por el contribuyente es título ejecutivo por sí misma, y lo mismo ocurre con las liquidaciones oficiales y resoluciones sanción una vez ejecutoriadas.',
          ],
          table: {
            caption: 'Actos de trámite y actos definitivos',
            headers: ['Momento', 'Actos de trámite (no recurribles)', 'Actos definitivos (recurribles, título de cobro)'],
            rows: [
              ['Omisos', 'Emplazamiento para declarar', 'Resolución sanción por no declarar y liquidación oficial de aforo'],
              ['Inexactos', 'Emplazamiento para corregir, requerimiento especial y su ampliación', 'Liquidación oficial de revisión'],
              ['Obligaciones formales', 'Pliego de cargos', 'Resolución sanción (resolución independiente)'],
              ['Liquidación provisional', 'Liquidación provisional', 'Liquidación de revisión, de aforo o resolución sanción que la ratifica'],
              ['Abuso en materia tributaria', 'Emplazamiento especial por abuso', 'Actos que recaracterizan la operación y liquidan impuestos y sanciones'],
            ],
          },
        },
        {
          heading: 'El recurso de reconsideración',
          paragraphs: [
            'Contra las liquidaciones oficiales y las resoluciones sanción procede el recurso de reconsideración (artículo 720 del ET), que debe interponerse dentro de los dos meses siguientes a la notificación del acto administrativo. Con la notificación de la decisión que lo resuelve se agota la vía administrativa y el obligado queda habilitado para acudir ante la jurisdicción de lo contencioso administrativo mediante la demanda de nulidad y restablecimiento del derecho.',
            'Los requisitos del recurso de reconsideración y de reposición están en el artículo 722 del ET: que se formule por escrito con expresión concreta de los motivos de inconformidad, que se interponga dentro de la oportunidad legal, y que se interponga directamente por el contribuyente, responsable, agente retenedor o declarante, o se acredite la personería si actúa por medio de apoderado o representante. El requisito de pago de la liquidación privada como condición para recurrir fue declarado inexequible por la Corte Constitucional mediante la Sentencia C-1441 de 2000, y el Decreto 19 de 2012 precisó que no se requiere abogado para interponer recursos, salvo cuando el recurso requiera sustentación técnica propia de la profesión.',
            'El artículo 723 del ET contiene una regla de congruencia del recurso: en la etapa de reconsideración el recurrente no puede objetar los hechos aceptados por él expresamente en la respuesta al requerimiento especial o en su ampliación. Se trata de una consecuencia del principio de contradicción: quien aceptó un hecho no puede después negarlo.',
            'Respecto a la mención del artículo 722 a la reposición, la doctrina de la DIAN precisa que la referencia fue tácitamente derogada por el artículo 67 de la Ley 6 de 1992, que modificó el artículo 720 y dejó como único recurso procedente contra las liquidaciones oficiales y las resoluciones sancionatorias el de reconsideración, que se resuelve en sede administrativa y agota la vía gubernativa.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Recurso de reconsideración (art. 720 ET): procede contra liquidaciones oficiales y resoluciones sanción; se interpone dentro de los DOS MESES siguientes a la notificación; con su resolución se agota la VÍA ADMINISTRATIVA.',
          },
        },
        {
          heading: 'Nulidades, término para resolver y silencio administrativo',
          paragraphs: [
            'El artículo 730 del ET enumera las causales de nulidad de los actos de liquidación de impuestos y de resolución de recursos: haber sido expedidos por funcionario incompetente; haber omitido el requerimiento especial previo o preterm itido el término de respuesta; no haberse notificado dentro del término legal; omitir las bases gravables, el monto de los tributos o las explicaciones del aforo; corresponder a procedimientos legalmente concluidos; y adolecer de otros vicios procedimentales señalados como causal de nulidad. Las nulidades deben alegarse dentro del término previsto en el artículo 731 del ET.',
            'La Administración debe resolver el recurso dentro del año siguiente a su interposición, conforme al artículo 732 del ET, y si no lo hace opera el silencio administrativo positivo en los términos del artículo 734 del ET, salvo en las excepciones legales expresas, entre ellas la señalada en el parágrafo 1 del artículo 670 para las sanciones por devoluciones improcedentes solicitadas con garantía.',
          ],
          callout: {
            type: 'aviso',
            text: 'Las causales del art. 730 ET son taxativas y se alegar durante el trámite; el vencimiento de los términos procesales de la DIAN produce consecuencias distintas según el acto: firmeza de la declaración si no se notifica el requerimiento o la liquidación a tiempo, y silencio administrativo positivo si no se resuelve el recurso.',
          },
        },
        {
          heading: 'La revocatoria directa',
          paragraphs: [
            'Además de los recursos, la Administración puede controlar sus propios actos mediante la revocatoria directa, regulada en los artículos 93 a 97 del CPACA (Ley 1437 de 2011). Las causales del artículo 93 son: que el acto sea manifiestamente opuesto a la Constitución o a la ley; que no esté conforme con el interés público o social, o atente contra él; o que con él se cause agravio injustificado a una persona. Pueden revocar los actos las mismas autoridades que los expidieron o sus inmediatos superiores jerárquicos o funcionales.',
            'La revocatoria directa no procede por la primera causal cuando se pide a solicitud de parte y el peticionario ya interpuso los recursos o dejó caducar la oportunidad para demandar (artículo 94), y procede aun cuando esté en curso un proceso ante la jurisdicción de lo contencioso administrativo, siempre que no se haya notificado el auto admisorio de la demanda; la solicitud debe resolverse en dos meses y contra esa decisión no procede recurso alguno (artículo 95).',
            'La regla decisiva para los actos tributarios es la del artículo 97: si el acto es de carácter particular y concreto, como lo son las liquidaciones oficiales y las resoluciones sanción que reconocen situaciones a un obligado determinado, la revocatoria directa requiere el consentimiento previo, expreso y escrito del respectivo titular. Si este lo niega, la autoridad debe demandar su propio acto ante la jurisdicción de lo contencioso administrativo (acción de lesividad). Si el acto se obtuvo por medios ilegales o fraudulentos, la Administración demanda sin conciliación previa y solicita la suspensión provisional.',
          ],
          callout: {
            type: 'importante',
            text: 'Revocatoria directa de actos particulares y concretos (art. 97 CPACA): requiere CONSENTIMIENTO previo, expreso y escrito del titular. Si lo niega, solo procede la demanda de lesividad ante la jurisdicción.',
          },
        },
        {
          heading: 'Firmeza de las declaraciones',
          paragraphs: [
            'La firmeza es la característica de la declaración tributaria que impide su revisión o corrección. En el procedimiento tributario existen varias firmezas, con plazos distintos según el supuesto de hecho, reguladas en los artículos 147, 689-2, 714 y 764-4 del ET: la regla general de tres años contados a partir del vencimiento del plazo para declarar, de la presentación extemporánea, de la solicitud de devolución o compensación o de la imputación del saldo a favor; la de cinco años para las declaraciones con pérdidas fiscales y para las sujetas al régimen de precios de transferencia; la de seis meses o un año, según corresponda, en las declaraciones con beneficio de auditoría; la de seis meses en las declaraciones aceptadas en liquidación provisional; y la regla del artículo 705-1 del ET para las declaraciones de IVA y retención en la fuente, cuya firmeza es la misma de la declaración de renta respecto de los períodos que coincidan con el año gravable.',
            'La firmeza se suspende en los términos del artículo 706 del ET: cuando se practica inspección tributaria de oficio, por tres meses contados desde la notificación del auto que la decreta; cuando la inspección se practica a solicitud del contribuyente, mientras dure la inspección; y durante el mes siguiente a la notificación del emplazamiento para corregir. La firmeza puede declararse de oficio o a solicitud de parte.',
          ],
          table: {
            caption: 'Términos de firmeza de las declaraciones tributarias',
            headers: ['Supuesto', 'Término de firmeza', 'Norma'],
            rows: [
              ['Regla general (con requerimiento especial como acto interruptor)', '3 años desde el vencimiento para declarar, la presentación extemporánea, la solicitud de devolución o la imputación del saldo a favor', 'Art. 714 ET'],
              ['Declaraciones con pérdidas fiscales', '5 años', 'Art. 117, Ley 2010 de 2019'],
              ['Declaraciones sujetas al régimen de precios de transferencia', '5 años', 'Art. 117, Ley 2010 de 2019'],
              ['Beneficio de auditoría', '6 meses (incremento del 30% del impuesto neto de renta) o 12 meses (incremento del 20%)', 'Art. 689-2 ET'],
              ['Aceptación de liquidación provisional', '6 meses desde la corrección o presentación', 'Art. 764-4 ET'],
              ['IVA y retención en la fuente', 'La misma de la declaración de renta del año gravable correspondiente', 'Art. 705-1 ET'],
              ['Suspensión', '3 meses (inspección oficiosa), duración de la diligencia (a solicitud) y 1 mes (emplazamiento para corregir)', 'Art. 706 ET'],
            ],
          },
        },
        {
          heading: 'Prescripción de la acción de cobro',
          paragraphs: [
            'En materia tributaria la prescripción se predica del título ejecutivo de cobro y de la acción de cobro, es decir, aplica al procedimiento administrativo de cobro coactivo. Son competentes para decretarla de oficio o a petición de parte los administradores de impuestos o de impuestos y aduanas nacionales respectivos, o los servidores públicos de la respectiva administración en quienes aquellos deleguen la facultad (artículo 817 del ET).',
            'La acción de cobro de las obligaciones fiscales prescribe en el término de cinco años contados a partir de: la fecha de vencimiento del término para declarar fijado por el Gobierno Nacional, para las declaraciones presentadas oportunamente; la fecha de presentación de la declaración, en el caso de las presentadas en forma extemporánea; la fecha de presentación de la declaración de corrección, en relación con los mayores valores; y la fecha de ejecutoria del respectivo acto administrativo de determinación o discusión.',
            'El término se interrumpe por la notificación del mandamiento de pago, por el otorgamiento de facilidades para el pago, por la admisión de la solicitud de concordato y por la declaratoria oficial de la liquidación forzosa administrativa. Se suspende desde que se dicta el auto de suspensión de la diligencia de remate y hasta la ejecutoria de la providencia que decide la revocatoria, la ejecutoria de la providencia que resuelve la situación del artículo 567 del ET y el pronunciamiento definitivo de la jurisdicción contencioso administrativa en el caso del artículo 835 del ET.',
            'Finalmente, quien paga una obligación ya prescrita no puede pedir la devolución de lo pagado, porque la doctrina considera ese pago como el cumplimiento de una obligación natural.',
          ],
          callout: {
            type: 'error',
            text: 'No confundir FIRMEZA con PRESCRIPCIÓN: la firmeza se predica de la declaración tributaria y de los actos administrativos (impide su revisión); la prescripción se predica de la acción de cobro (extingue la posibilidad de cobrar, en 5 años, art. 817 ET).',
          },
        },
      ],
      summary: [
        'Los actos de trámite (emplazamientos, requerimiento especial y su ampliación, pliego de cargos) no deciden de fondo; los actos definitivos (liquidaciones oficiales y resoluciones sanción) prestan mérito ejecutivo y son título de cobro.',
        'El recurso de reconsideración procede contra liquidaciones oficiales y resoluciones sanción, se interpone dentro de los dos meses siguientes a la notificación y agota la vía administrativa.',
        'Los requisitos del recurso están en el art. 722 ET; el art. 723 prohíbe objetar en reconsideración los hechos aceptados expresamente; el art. 730 enumera las causales de nulidad y el art. 732 fija un año para resolver, con silencio administrativo positivo del art. 734.',
        'La revocatoria directa (arts. 93 a 97 del CPACA) procede por oposición manifiesta a la Constitución o a la ley, por inconformidad con el interés público o social y por agravio injustificado; en actos particulares y concretos exige consentimiento previo, expreso y escrito del titular.',
        'La firmeza de las declaraciones tiene términos diferenciados (3 años general, 5 años con pérdidas o precios de transferencia, 6 o 12 meses con beneficio de auditoría, 6 meses en liquidación provisional) y se suspende en los casos del art. 706 ET.',
        'La acción de cobro prescribe en cinco años (art. 817 ET), término que se interrumpe con el mandamiento de pago y con las facilidades de pago, y que se suspende en los eventos legales.',
      ],
      memorize: [
        'Art. 720 ET: reconsideración en 2 meses; agota la vía administrativa.',
        'Art. 722 ET: por escrito, motivos concretos, oportunidad y legitimación.',
        'Art. 730 ET: causales de nulidad (incompetencia, falta de requerimiento especial, notificación extemporánea, falta de bases o explicaciones, procedimiento concluido).',
        'Art. 97 CPACA: revocatoria directa de actos particulares y concretos exige consentimiento del titular; si lo niega, demanda de lesividad.',
        'Firmeza general: 3 años (art. 714 ET). Prescripción de la acción de cobro: 5 años (art. 817 ET).',
        'Art. 706 ET: suspensiones de 3 meses, del término de la diligencia y de 1 mes.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: ruta completa de un acto de determinación',
          paragraphs: [
            'Notificada la liquidación oficial de revisión el 5 de mayo de 2026, el obligado tiene hasta el 5 de julio de 2026 para interponer el recurso de reconsideración. Si lo interpone, la DIAN debe resolverlo dentro del año siguiente; notificada la decisión que lo resuelve, se agota la vía administrativa y el contribuyente puede demandar ante la jurisdicción de lo contencioso administrativo. Si no interpone recurso, el acto queda ejecutoriado y ejecutivo, presta mérito ejecutivo y habilita el cobro coactivo.',
            'La prescripción de la acción de cobro se cuenta, en este caso, desde la ejecutoria del acto administrativo de determinación o discusión: cinco años, con las interrupciones y suspensiones del artículo 817 del ET.',
          ],
        },
        {
          heading: 'Ejemplo 2: revocatoria directa de una devolución',
          paragraphs: [
            'Si la DIAN advierte que reconoció una devolución con base en un saldo a favor generado por facturas inexistentes, el acto que reconoció el saldo es de carácter particular y concreto. Para revocarlo directamente por la causal de agravio injustificado (art. 93, numeral 3, del CPACA) necesita el consentimiento previo, expreso y escrito del titular. Si el contribuyente lo niega, la vía es demandar el propio acto ante la jurisdicción de lo contencioso administrativo (acción de lesividad), sin perjuicio de la sanción por devolución improcedente del artículo 670 del ET, que en el caso de documentos falsos o fraude es del 100% del monto devuelto de forma improcedente.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Sostener que la revocatoria directa puede aplicarse libremente a las liquidaciones oficiales sin intervención del obligado.',
          correction: 'Tratándose de actos de carácter particular y concreto se requiere el consentimiento previo, expreso y escrito del titular (art. 97 CPACA); sin él solo cabe demandar el acto en lesividad.',
        },
        {
          mistake: 'Creer que la firmeza y la prescripción son la misma figura.',
          correction: 'La firmeza impide revisar o corregir la declaración o el acto (arts. 714 y 764-4 ET, entre otros); la prescripción extingue la acción de cobro del título ejecutivo y se rige por el art. 817 ET (cinco años).',
        },
        {
          mistake: 'Pensar que en la reconsideración se pueden discutir todos los hechos, incluidos los aceptados.',
          correction: 'El art. 723 del ET prohíbe objetar en la etapa de reconsideración los hechos aceptados expresamente en la respuesta al requerimiento especial o en su ampliación.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 720, 722, 723, 726, 728, 730, 731, 732 y 734',
          status: 'vigente',
          note: 'Recurso de reconsideración y de reposición, requisitos, hechos aceptados, inadmisión, causales de nulidad, alegación de nulidades, término de un año para resolver y silencio administrativo positivo.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 714, 705-1 y 764-4',
          status: 'vigente',
          note: 'Firmeza general de las declaraciones, firmeza de las declaraciones de IVA y retención en la fuente y firmeza de las declaraciones aceptadas en liquidación provisional.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 706 y 817',
          status: 'vigente',
          note: 'Suspensión del término de firmeza y prescripción de la acción de cobro (cinco años, con sus causales de interrupción y suspensión).',
        },
        {
          norm: 'Ley 1437 de 2011 (CPACA)',
          article: 'Artículos 93, 94, 95, 96 y 97',
          status: 'vigente',
          note: 'Causales, improcedencia, oportunidad, efectos y revocatoria de actos de carácter particular y concreto (consentimiento del titular y demanda de lesividad).',
        },
        {
          norm: 'Ley 6 de 1992',
          article: 'Artículo 67',
          status: 'verificar',
          note: 'La DIAN lo cita como norma que modificó el art. 720 del ET y derogó tácitamente la referencia a la reposición como recurso contra liquidaciones oficiales y resoluciones sanción en el orden nacional.',
        },
        {
          norm: 'Ley 2010 de 2019',
          article: 'Artículo 117',
          status: 'verificar',
          note: 'Término de firmeza de cinco años para declaraciones con pérdidas fiscales y sujetas al régimen de precios de transferencia, según la cita del material (págs. 460-461).',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — Título V del Libro V (discusión de los actos)', url: 'https://estatuto.co/libro/5/v-titulo-v' },
        { label: 'Secretaría del Senado — Ley 1437 de 2011 (CPACA)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1437_2011.html' },
        { label: 'DIAN — Normograma del Estatuto Tributario', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm' },
        { label: 'Consejo de Estado — Relatoría y boletines', url: 'https://www.consejodeestado.gov.co/' },
      ],
      mindmap: {
        root: 'Actos, recursos y firmeza',
        branches: [
          { label: 'Actos', children: ['De trámite: emplazamientos, requerimiento, pliego', 'Definitivos: liquidaciones y resoluciones sanción', 'Título ejecutivo y cobro coactivo'] },
          { label: 'Recursos', children: ['Reconsideración (art. 720): 2 meses', 'Requisitos (art. 722)', 'Hechos aceptados (art. 723)', 'Agota la vía administrativa'] },
          { label: 'Control de la Administración', children: ['Nulidades (art. 730)', 'Revocatoria directa (arts. 93-97 CPACA)', 'Lesividad si el titular no consiente'] },
          { label: 'Firmeza', children: ['3 años general (art. 714)', '5 años: pérdidas y precios de transferencia', '6 o 12 meses: beneficio de auditoría', '6 meses: liquidación provisional', 'Suspensión (art. 706)'] },
          { label: 'Prescripción', children: ['Acción de cobro: 5 años (art. 817)', 'Interrupción: mandamiento de pago y facilidades', 'Pago de obligación prescrita: obligación natural'] },
        ],
      },
      mindmapText:
        'En materia tributaria los actos de trámite no deciden de fondo y los actos definitivos (liquidaciones oficiales y resoluciones sanción) prestan mérito ejecutivo. Contra ellos procede el recurso de reconsideración dentro de los dos meses siguientes a la notificación (art. 720 ET), con los requisitos del art. 722, la prohibición de objetar hechos aceptados del art. 723 y las causales de nulidad del art. 730; la Administración tiene un año para resolver y opera el silencio administrativo positivo. La revocatoria directa (arts. 93 a 97 del CPACA) exige consentimiento del titular en actos particulares y concretos. La firmeza de las declaraciones tiene términos de 3, 5, 6 o 12 meses según el supuesto y se suspende por inspección tributaria o emplazamiento para corregir; la acción de cobro prescribe en 5 años (art. 817 ET).',
      source: [
        { doc: 'material', pages: 'págs. 445-452 (actos de trámite y definitivos; resolución sanción independiente; recurso de reconsideración y ejecutoria)' },
        { doc: 'material', pages: 'págs. 451-452 (art. 638 ET y procedimiento de resolución sanción independiente)' },
        { doc: 'material', pages: 'págs. 458-460 (firmeza, prescripción de la acción de cobro, art. 817 ET)' },
        { doc: 'material', pages: 'págs. 460-462 (firmezas especiales, art. 705-1 y suspensión de la firmeza)', note: 'Unidad 9 del material: prescripción y firmeza.' },
        { doc: 'taci', pages: 'págs. 86-87 (contenido y término de la liquidación oficial de revisión; aceptación con reducción de la sanción de inexactitud)' },
      ],
    },
  ],
  quizId: 'q-m06',
}
