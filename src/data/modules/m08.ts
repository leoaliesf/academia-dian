import type { ModuleDef } from '../types'

// ============================================================
// Módulo 8 — Imposición de sanciones
// Indicador: i03 (régimen sancionatorio tributario)
// Fuentes:
//  - MATERIAL TOTAL DIAN - FISCALIZACION, Unidad 7 (págs. 407-442):
//    régimen sancionatorio, cuantificación (sanción mínima, límites,
//    reincidencia, reducciones), sanciones específicas y delitos
//    fiscales (arts. 402, 434A y 434B del Código Penal).
//  - MATERIAL TOTAL DIAN - FISCALIZACION, anexo 09 (págs. 455-457):
//    procedimiento de abuso en materia tributaria (art. 869 ET) y
//    definiciones de evasión y elusión de la Resolución DIAN 000004
//    de 2020.
// Textos de los artículos citados verificados en estatuto.co / DIAN
// el 2026-10-15. Los artículos cuya redacción vigente no pudo
// confirmarse en fuente oficial quedan marcados con estado 'verificar'.
// NOTA: el porcentaje de las sanciones es el que resulta de aplicar el
// régimen sancionatorio del ET; cuando la norma dice "se reducirá al
// 50%" debe entenderse que el obligado paga la mitad y ahorra la otra
// mitad.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm08',
  order: 8,
  title: 'Imposición de sanciones',
  description:
    'Régimen sancionatorio tributario: principios aplicables (legalidad, favorabilidad, proporcionalidad, gradualidad y non bis in idem), clasificación de las sanciones (autoliquidadas y provocadas), sanciones específicas por extemporaneidad, omisión, corrección, inexactitud y no informar, reducciones y reincidencia, y penalización de la evasión (delitos fiscales y abuso en materia tributaria).',
  indicators: ['i03'],
  lessons: [
    {
      id: 'm08-l01',
      moduleId: 'm08',
      title: 'El régimen sancionatorio tributario: principios y clasificación',
      indicators: ['i03'],
      objectives: [
        'Explicar el principio de legalidad y la reserva de ley en materia sancionatoria tributaria.',
        'Diferenciar las sanciones autoliquidadas o voluntarias de las provocadas o determinadas por la DIAN.',
        'Aplicar los principios de favorabilidad, proporcionalidad, gradualidad y non bis in idem al análisis de un caso.',
        'Identificar los límites inferior (sanción mínima) y superior de las sanciones y la UVT aplicable.',
      ],
      sections: [
        {
          heading: 'La potestad sancionadora y el principio de legalidad',
          paragraphs: [
            'La división del poder público (artículo 150 de la Constitución) asigna al Congreso la elaboración de las leyes; esa norma, armonizada con el preámbulo de la Constitución y con su artículo 29, que consagra el debido proceso, se resume en materia sancionatoria en la máxima nullum crimen, nulla poena sine praevia lege: en la ley deben estar definidos los sujetos, las conductas y las sanciones a las que se hará merecedor el infractor cuando su actuar se enmarque en ellas.',
            'En materia tributaria las sanciones deben estar descritas con precisión en la ley y no pueden hacerse analogías, ni establecerse en decretos, resoluciones u otros actos administrativos, en virtud de la reserva de ley que aplica al régimen sancionatorio tributario. En la Sentencia C-412 de 2015 la Corte Constitucional definió la reserva de ley como una manifestación del principio de democracia y de la división de poderes, que exige que ciertas materias sean directamente reguladas por el legislador mediante leyes y no a través de regulaciones de menor jerarquía.',
            'Ese mandato de tipificación exige describir los elementos básicos de la conducta típica, así como la determinación del tipo y la cuantía de las sanciones, el procedimiento para imponerlas y la autoridad competente para adelantarlo. La tipificación admite tipos en blanco, bajo remisiones normativas precisas o criterios que permitan determinar con claridad la conducta (Consejo de Estado, 5 de marzo de 2019, exp. 2403).',
          ],
          callout: {
            type: 'memoriza',
            text: 'Reserva de ley sancionatoria: conducta, sujeto, cuantía, procedimiento y autoridad competente deben estar en la LEY. Prohibición de analogía y de crear sanciones por decreto o resolución.',
          },
        },
        {
          heading: 'Tipicidad y prohibición de analogía: el ejemplo del artículo 643 del ET',
          paragraphs: [
            'El artículo 643 del ET es el mejor ejemplo del principio de legalidad. Su texto tipifica la sanción por no declarar para diez declaraciones específicas: 1) impuesto sobre la renta y complementarios; 2) impuesto sobre las ventas e impuesto nacional al consumo; 3) retenciones en la fuente; 4) impuesto de timbre; 5) impuesto nacional a la gasolina y al ACPM, o al carbono; 6) gravamen a los movimientos financieros; 7) ingresos y patrimonio; 8) activos en el exterior; 9) impuesto a la riqueza y complementario; 10) monotributo.',
            'Como la tipificación es cerrada, si una declaración no está descrita en la ley no puede sancionarse por analogía: el impuesto CREE no tiene sanción por no declarar establecida en el artículo 643, de modo que, en virtud de la reserva de ley, esa sanción no podría aplicarse. Otro tanto ocurre con el impuesto unificado bajo el régimen simple de tributación (SIMPLE): aunque el artículo 916 del ET dispone que su régimen de procedimiento, sancionatorio y de firmeza es el previsto en el Estatuto Tributario, esa norma en blanco no es lo suficientemente específica como para aplicar el artículo 643 al impuesto.',
          ],
          table: {
            caption: 'Las diez declaraciones tipificadas en el artículo 643 del ET',
            headers: ['Numeral', 'Declaración cuya omisión está sancionada'],
            rows: [
              ['1', 'Impuesto sobre la renta y complementarios'],
              ['2', 'Impuesto sobre las ventas e impuesto nacional al consumo'],
              ['3', 'Retenciones en la fuente'],
              ['4', 'Impuesto de timbre'],
              ['5', 'Impuesto nacional a la gasolina y al ACPM, o al carbono'],
              ['6', 'Gravamen a los movimientos financieros (GMF)'],
              ['7', 'Ingresos y patrimonio'],
              ['8', 'Activos en el exterior'],
              ['9', 'Impuesto a la riqueza y complementario'],
              ['10', 'Monotributo'],
            ],
          },
        },
        {
          heading: 'Clasificación de las sanciones: autoliquidadas y provocadas',
          paragraphs: [
            'Las sanciones contenidas en el Estatuto Tributario son de dos tipos: autoliquidadas o voluntarias, que el mismo infractor de la ley puede determinar, y provocadas, que son las que determina la Administración Tributaria en aplicación de las facultades de fiscalización e investigación del artículo 684 del ET.',
            'Las sanciones autoliquidadas se liquidan en la declaración privada o en el recibo de pago. Las provocadas se imponen en resoluciones independientes o en liquidaciones oficiales y su imposición está presidida por el artículo 683 del ET, que ordena a los funcionarios actuar con un relevante espíritu de justicia, teniendo presente que el Estado no aspira a que al contribuyente se le exija más de aquello con lo que la misma ley ha querido que coadyuve a las cargas públicas.',
          ],
          table: {
            caption: 'Sanciones autoliquidadas o voluntarias',
            headers: ['Sanción', 'Artículo del ET', 'Documento en que se liquida'],
            rows: [
              ['Intereses de mora', '634', 'Recibo de pago'],
              ['Extemporaneidad', '641', 'Declaración privada'],
              ['Extemporaneidad después de emplazamiento', '642', 'Declaración privada'],
              ['Corrección de las declaraciones', '644', 'Declaración privada'],
              ['Relativa a la declaración de ingresos y patrimonio', '645', 'Declaración privada'],
              ['Por no enviar información o enviarla con errores', '651', 'Recibo de pago'],
            ],
          },
        },
        {
          heading: 'Sanciones provocadas o determinadas por la DIAN',
          paragraphs: [
            'En la legislación tributaria colombiana predominan las sanciones determinadas por la Administración. Estas se imponen en liquidación oficial y/o en resolución sanción, previo agotamiento del debido proceso (emplazamiento, pliego de cargos o requerimiento especial, según el caso).',
          ],
          table: {
            caption: 'Sanciones provocadas o determinadas por la DIAN',
            headers: ['Sanción', 'Artículo del ET', 'Documento en que se liquida'],
            rows: [
              ['Otras sanciones', '640-1', 'Liquidación oficial y/o resolución sanción'],
              ['No declarar', '643', 'Resolución sanción'],
              ['Corrección aritmética', '646', 'Liquidación oficial'],
              ['Inexactitud', '647-648', 'Liquidación oficial'],
              ['Uso fraudulento de cédulas', '650', 'Liquidación oficial'],
              ['No enviar información o enviarla con errores', '651', 'Liquidación oficial y/o resolución sanción'],
              ['Expedir factura sin requisitos', '652', 'Liquidación oficial y/o resolución sanción'],
              ['No facturar', '652-1', 'Liquidación oficial y/o resolución sanción'],
              ['Libros de contabilidad', '654-655', 'Liquidación oficial y/o resolución sanción'],
              ['Clausura del establecimiento', '657', 'Resolución sanción'],
              ['Administradores y representantes legales', '658-1', 'Resolución sanción'],
              ['Evasión pasiva', '658-2', 'Resolución sanción'],
              ['No inscribirse en el RUT u obtener el NIT', '658-3', 'Resolución sanción'],
              ['Violación de las normas que rigen la profesión contable', '659', 'Acto administrativo de la Junta Central de Contadores'],
              ['Sociedades de contadores públicos', '659-1', 'Acto administrativo de la Junta Central de Contadores'],
              ['Suspensión de la facultad de firmar declaraciones', '660', 'Resolución sanción'],
            ],
          },
        },
        {
          heading: 'Favorabilidad, proporcionalidad, gradualidad y non bis in idem',
          paragraphs: [
            'El principio de favorabilidad aplica al régimen sancionatorio tributario aun cuando la ley permisiva o favorable sea posterior (artículo 640, parágrafo 5, del ET). El Consejo de Estado tiene por jurisprudencia reiterada que la favorabilidad en materia sancionatoria tributaria es aplicable de oficio o a solicitud de parte. Un ejemplo es la sanción de inexactitud: antes de la Ley 1819 de 2016 se tasaba en el 160% de la diferencia entre el saldo determinado oficialmente y el declarado, y después de esa ley se redujo al 100%. En la Sentencia 23403 del 12 de diciembre de 2018 la Sala dio aplicación al principio de favorabilidad y reliquidó la sanción al 100%, y no al 160% impuesto en los actos demandados.',
            'La proporcionalidad significa que la sanción debe corresponder a la gravedad de la falta cometida, y la gradualidad, que debe aplicarse en forma gradual, de acuerdo con la falta de menor a mayor gravedad. El artículo 640 del ET es la expresión de estos principios: exige períodos previos de buen comportamiento para acceder a los mayores descuentos en la sanción.',
            'La coexistencia de sanciones administrativas con los delitos fiscales ha suscitado controversias frente al principio non bis in idem, que prohíbe que una persona, por el mismo hecho, sea sometida a juicios sucesivos o le sean impuestas varias sanciones en el mismo juicio, salvo que una sea tan solo accesoria de la otra. En el ordenamiento colombiano esa coexistencia se ha considerado superada, pues la sanción administrativa protege el deber de contribuir y el delito protege el bien jurídico de la administración pública.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Favorabilidad (art. 640, par. 5 ET): si una ley posterior es más favorable al infractor, se aplica. Ejemplo: inexactitud del 160% (antes de la Ley 1819 de 2016) al 100% (después).',
          },
        },
        {
          heading: 'Sanción mínima y límite superior',
          paragraphs: [
            'El artículo 639 del ET fija la sanción mínima: el valor mínimo de cualquier sanción, incluidas las sanciones reducidas, ya sea que deba liquidarla el obligado o la Administración, es equivalente a 10 UVT. La misma norma exceptúa los intereses de mora y las sanciones de los numerales 1 y 3 del artículo 658-3 del ET.',
            'En el régimen sancionatorio de las entidades autorizadas para recaudar existe una regla especial: en ningún caso el valor de las sanciones de los artículos 674, 675, 676 y 676-1 del ET será inferior a 20 UVT por cada conducta sancionable (artículo 676-3 del ET).',
            'Una duda habitual es qué UVT se toma para liquidar la sanción. La doctrina de la DIAN ha establecido que la sanción aplicable es la vigente al momento en que se comete el acto o conducta sancionable. Para 2026 la UVT equivale a $52.374, de modo que la sanción mínima del artículo 639 es de $523.740.',
            'El régimen también tiene límites superiores, que no aplican a todas las sanciones sino a las que la ley señala de manera expresa. Los más relevantes son: extemporaneidad (artículo 641): 5% del impuesto a cargo o retención por mes o fracción, sin exceder del 100%; extemporaneidad con posterioridad al emplazamiento (artículo 642): 10% mensual, sin exceder del 200%; sanción por no informar (artículo 651): multa que no supere 15.000 UVT; sanción por expedir factura sin requisitos (artículo 652): 1% del valor de las operaciones facturadas sin requisitos, sin exceder 950 UVT; sanción por irregularidades en la contabilidad (artículo 655): 0,5% del mayor valor entre el patrimonio líquido y los ingresos netos del año anterior, sin exceder 20.000 UVT; sanción a administradores y representantes legales (artículo 658-1): 20% de la sanción impuesta al contribuyente, sin exceder 4.100 UVT, la cual no podrá ser sufragada por su representada.',
          ],
          callout: {
            type: 'importante',
            text: 'La sanción mínima de 10 UVT (art. 639 ET) se aplica incluso a las sanciones reducidas. Excepciones: intereses de mora y numerales 1 y 3 del art. 658-3. Para entidades recaudadoras la mínima es de 20 UVT (art. 676-3).',
          },
        },
      ],
      summary: [
        'La potestad sancionadora tributaria está regida por el principio de legalidad (art. 29 C.P.) y por la reserva de ley: solo el legislador puede describir las conductas, los sujetos, las cuantías, el procedimiento y la autoridad competente.',
        'La tipificación es cerrada y no admite analogía: el art. 643 del ET no cubre el CREE ni el SIMPLE, de modo que respecto de esos impuestos no puede aplicarse la sanción por no declarar.',
        'Las sanciones son autoliquidadas o voluntarias (intereses del art. 634, extemporaneidad 641 y 642, corrección 644, ingresos y patrimonio 645 y no informar 651) o provocadas por la DIAN (640-1, 643, 646, 647-648, 652, 655, 657, 658-1, 658-3, entre otras).',
        'La favorabilidad se aplica aun cuando la ley permisiva o favorable sea posterior (art. 640, par. 5); su ejemplo clásico es la sanción de inexactitud, que pasó del 160% al 100% con la Ley 1819 de 2016.',
        'La proporcionalidad exige correspondencia con la gravedad de la falta y la gradualidad, aplicación progresiva según la gravedad; ambos principios se concretan en el art. 640 del ET.',
        'Los límites cuantitativos son la sanción mínima de 10 UVT (art. 639), con excepciones, y los topes superiores de cada sanción, como los arts. 641, 642, 651, 652, 655 y 658-1.',
      ],
      memorize: [
        'Nullum crimen, nulla poena sine praevia lege + reserva de ley: todo lo sancionatorio está en la ley, sin analogía.',
        'Autoliquidadas: 634, 641, 642, 644, 645 y 651. Provocadas: 640-1, 643, 646, 647-648, 652, 655, 657, 658-1, 658-3, etc.',
        'Sanción mínima: 10 UVT (art. 639 ET), aplicable incluso a las sanciones reducidas; excepciones: intereses de mora y num. 1 y 3 del art. 658-3.',
        'Entidades autorizadas para recaudar: sanción mínima de 20 UVT por conducta (art. 676-3 ET).',
        'Favorabilidad: art. 640, parágrafo 5 ET; inexactitud del 160% al 100% (Ley 1819 de 2016; Sentencia 23403 de 2018).',
        'UVT aplicable: la vigente al momento de la conducta sancionable. UVT 2026 = $52.374; 10 UVT = $523.740.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: aplicación del principio de favorabilidad',
          paragraphs: [
            'Una sociedad tiene una sanción por inexactitud impuesta bajo la vigencia del texto anterior del artículo 647 del ET, equivalente al 160% de la diferencia entre el saldo a pagar determinado en la liquidación oficial y el declarado. La diferencia entre ambos saldos es de $50.000.000.',
            'Cálculo con la ley anterior: 160% x $50.000.000 = $80.000.000. Cálculo con la Ley 1819 de 2016: 100% x $50.000.000 = $50.000.000. Como la ley posterior es más favorable, el obligado tiene derecho a que la sanción se reliquide en $50.000.000, con un ahorro de $30.000.000. La favorabilidad se aplica de oficio o a solicitud de parte (Sentencia 23403 del 12 de diciembre de 2018).',
          ],
        },
        {
          heading: 'Ejemplo 2: sanción mínima por debajo del valor legal',
          paragraphs: [
            'Un obligado presenta una declaración de IVA con dos meses de extemporaneidad, sin impuesto a cargo y con un saldo a favor de $800.000. Al liquidar la sanción por extemporaneidad sobre la base de ingresos brutos (0,5% x ingresos del período) resulta un valor de $60.000, inferior a la sanción mínima.',
            'Aplicación: como el artículo 639 del ET no permite sanciones inferiores a 10 UVT, la sanción a liquidar es de 10 UVT. Con la UVT de 2026 ($52.374): 10 x $52.374 = $523.740. La sanción mínima se aplica aun cuando la sanción hubiera sido reducida.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Sancionar por analogía conductas u obligaciones que la ley no tipifica.',
          correction: 'La tipificación sancionatoria es cerrada y la analogía está prohibida (reserva de ley). Por eso el art. 643 del ET no puede extenderse al CREE ni al SIMPLE: esas declaraciones no están descritas en sus numerales.',
        },
        {
          mistake: 'Creer que la sanción mínima es un piso que puede superarse libremente y que no se aplica a las sanciones reducidas.',
          correction: 'El art. 639 del ET la impone respecto de cualquier sanción, incluidas las sanciones reducidas, ya las liquide el obligado o la DIAN, con las únicas excepciones de los intereses de mora y los numerales 1 y 3 del art. 658-3.',
        },
        {
          mistake: 'Aplicar la UVT del momento en que la DIAN sanciona.',
          correction: 'La doctrina de la DIAN ha establecido que la sanción aplicable se liquida con la UVT vigente al momento en que se comete la conducta sancionable, no con la del acto que la impone.',
        },
        {
          mistake: 'Sostener que la sanción administrativa y el proceso penal por el mismo asunto vulneran siempre el non bis in idem.',
          correction: 'La coexistencia se ha considerado superada: la sanción administrativa protege el deber de contribuir y el delito protege un bien jurídico distinto (la administración pública), de modo que ambas pueden concurrir por los mismos hechos.',
        },
      ],
      norms: [
        {
          norm: 'Constitución Política de Colombia',
          article: 'Artículos 29 y 150',
          status: 'vigente',
          note: 'Debido proceso y legalidad sancionatoria; competencia del Congreso para hacer las leyes (reserva de ley).',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 638, 639 y 640',
          status: 'vigente',
          note: 'Oportunidad para imponer sanciones, sanción mínima (10 UVT) y reducción de sanciones por principios de favorabilidad, proporcionalidad y gradualidad. Textos citados en el material (págs. 417-420 y 426-427).',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 640-1',
          status: 'verificar',
          note: 'Otras sanciones: inhabilidad para ejercer el comercio, la profesión u oficio de uno a cinco años y multa de 410 a 2.000 UVT para el agente retenedor o responsable del IVA o del impuesto nacional al consumo que, habiendo actuado con fraude, omisión de información, simulación o cualquier otro acto ilícito, no consigne las sumas retenidas o recaudadas. Conviene confirmar en fuente oficial el umbral de UVT y la redacción vigente antes de citarlo como fundamento.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 641, 642, 643, 644, 645, 646, 647 y 648',
          status: 'vigente',
          note: 'Sanciones por extemporaneidad, extemporaneidad después de emplazamiento, no declarar, corrección, ingresos y patrimonio, corrección aritmética e inexactitud.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 651, 652, 655 y 676-3',
          status: 'vigente',
          note: 'Sanción por no informar (hasta 15.000 UVT), por expedir factura sin requisitos (1%, tope 950 UVT), por irregularidades en la contabilidad (0,5%, tope 20.000 UVT) y sanción mínima de 20 UVT para entidades autorizadas para recaudar.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 683, 684 y 916',
          status: 'vigente',
          note: 'Espíritu de justicia, facultades de fiscalización e investigación y régimen de procedimiento, sancionatorio y de firmeza del SIMPLE (norma en blanco que no permite aplicar por analogía el art. 643).',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — Título I del Libro V (sanciones, arts. 634 y ss.)', url: 'https://estatuto.co/libro/5/v-titulo-i' },
        { label: 'DIAN — Normograma del Estatuto Tributario', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm' },
        { label: 'Corte Constitucional — Sentencia C-412 de 2015', url: 'https://www.corteconstitucional.gov.co/relatoria/2015/C-412-15.htm' },
        { label: 'DIAN — Conceptos y doctrina oficial', url: 'https://www.dian.gov.co/normatividad/Paginas/Doctrina.aspx' },
      ],
      mindmap: {
        root: 'Régimen sancionatorio',
        branches: [
          { label: 'Principios', children: ['Legalidad y reserva de ley', 'Tipicidad (sin analogía)', 'Favorabilidad (art. 640, par. 5)', 'Proporcionalidad y gradualidad', 'Non bis in idem frente a lo penal'] },
          { label: 'Clasificación', children: ['Autoliquidadas: 634, 641, 642, 644, 645, 651', 'Provocadas: 640-1, 643, 646, 647-648, 652, 655, 657, 658-1...'] },
          { label: 'Límites', children: ['Mínimo: 10 UVT (art. 639)', '20 UVT entidades recaudadoras (art. 676-3)', 'Máximos por sanción (100%, 200%, 15.000 UVT, etc.)', 'UVT de la conducta'] },
          { label: 'Cuantificación', children: ['Reincidencia: +100% (art. 640, par. 2)', 'Reducción por principios (art. 640)', 'Reducción por procedimiento (art. 764-3)', 'Reducción en el mismo artículo (art. 651)'] },
        ],
      },
      mindmapText:
        'El régimen sancionatorio tributario está presidido por el principio de legalidad y la reserva de ley: conductas, sujetos, cuantías, procedimiento y autoridad competente solo pueden estar en la ley, sin analogía (ejemplo: el art. 643 del ET no cubre el CREE ni el SIMPLE). Las sanciones se clasifican en autoliquidadas (634, 641, 642, 644, 645, 651) y provocadas por la DIAN (640-1, 643, 646, 647-648, 652, 655, 657, 658-1, 658-3, entre otras). Rigen además la favorabilidad (art. 640, par. 5), la proporcionalidad y la gradualidad, y el non bis in idem frente a los delitos fiscales. Los límites cuantitativos son la sanción mínima de 10 UVT (art. 639), la de 20 UVT de las entidades recaudadoras (art. 676-3) y los topes superiores de cada sanción, liquidados con la UVT vigente al momento de la conducta.',
      source: [
        { doc: 'material', pages: 'págs. 409-411 (legalidad, reserva de ley, Sentencia C-412 de 2015, Consejo de Estado exp. 2403 y ejemplo del art. 643 ET)' },
        { doc: 'material', pages: 'págs. 411-414 (Tablas 1 y 2: sanciones autoliquidadas y provocadas; art. 683 del ET)' },
        { doc: 'material', pages: 'págs. 417-419 (sanción mínima del art. 639, excepciones, art. 676-3, UVT aplicable y Tabla 9 de límites superiores)' },
        { doc: 'material', pages: 'pág. 420 (reincidencia, art. 640 parágrafo 2 del ET y Concepto DIAN 046589 del 18 de mayo de 2000)' },
        { doc: 'material', pages: 'págs. 424-426 (favorabilidad: sanción de inexactitud del 160% al 100%; Sentencia 23403 del 12 de diciembre de 2018)' },
      ],
    },
    {
      id: 'm08-l02',
      moduleId: 'm08',
      title: 'Sanciones específicas: extemporaneidad, no declarar, corrección, inexactitud y no informar',
      indicators: ['i03'],
      objectives: [
        'Aplicar las tarifas y topes de las sanciones por extemporaneidad (arts. 641 y 642 ET).',
        'Explicar la estructura y el alcance de la sanción por no declarar (art. 643 ET).',
        'Calcular la sanción por corrección (art. 644 ET) y la sanción por inexactitud (arts. 647 y 648 ET).',
        'Liquidar la sanción por no enviar información o enviarla con errores (art. 651 ET) con sus reducciones.',
      ],
      sections: [
        {
          heading: 'Sanción por extemporaneidad (art. 641 ET)',
          paragraphs: [
            'La sanción por extemporaneidad se liquida por el propio obligado, por cada mes o fracción de mes calendario de retardo contado desde el vencimiento del plazo para declarar, y se determina en la declaración privada. Existen tres bases alternativas según la situación del declarante.',
            'Si la declaración arroja impuesto a cargo, la sanción es del cinco por ciento (5%) del total del impuesto a cargo o retención objeto de la declaración, sin exceder del cien por ciento (100%) del impuesto o retención. Si no hay impuesto a cargo, se aplica el medio por ciento (0,5%) de los ingresos brutos percibidos en el período, sin exceder la cifra menor resultante de aplicar el 5% a dichos ingresos, el doble del saldo a favor si lo hubiere o 2.500 UVT cuando no existiere saldo a favor. Y si tampoco hay ingresos, el uno por ciento (1%) del patrimonio líquido del año inmediatamente anterior, sin exceder la cifra menor resultante de aplicar el 10% al mismo, el doble del saldo a favor si lo hubiere o 2.500 UVT cuando no existiere saldo a favor. Para el impuesto al patrimonio y los activos en el exterior, la sanción en todo caso no puede superar el 10% del valor de los activos poseídos en el exterior.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Art. 641 ET: 5% por mes o fracción del impuesto a cargo o retención, tope 100%. Sin impuesto: 0,5% de ingresos brutos o 1% del patrimonio líquido, con topes alternativos. Art. 642 ET (después del emplazamiento): 10% mensual, tope 200%; 1% de ingresos o 2% del patrimonio.',
          },
        },
        {
          heading: 'Sanción por extemporaneidad con posterioridad al emplazamiento (art. 642 ET)',
          paragraphs: [
            'Cuando el obligado presenta la declaración después de que la DIAN le notificó el emplazamiento para declarar, el retardo es más grave y la tarifa se duplica: la sanción es del diez por ciento (10%) del total del impuesto a cargo o retención objeto de la declaración, sin exceder del doscientos por ciento (200%) del impuesto o retención.',
            'Cuando no hay impuesto a cargo, la sanción es del uno por ciento (1%) de los ingresos brutos percibidos en el período, sin exceder la cifra menor resultante de aplicar el 10% a dichos ingresos, cuatro (4) veces el saldo a favor si lo hubiere o 5.000 UVT cuando no existiere saldo a favor. Si no hay ingresos, es del dos por ciento (2%) del patrimonio líquido del año inmediatamente anterior, sin exceder la cifra menor resultante de aplicar el 20% al mismo, cuatro (4) veces el saldo a favor si lo hubiere o 5.000 UVT cuando no existiere saldo a favor.',
            'En el caso del gravamen a los movimientos financieros, la sanción por extemporaneidad no puede exceder el 200% del impuesto si la declaración se presenta con posterioridad al emplazamiento y antes de que se profiera la resolución sanción por no declarar.',
          ],
        },
        {
          heading: 'Sanción por no declarar (art. 643 ET)',
          paragraphs: [
            'Los contribuyentes, agentes retenedores o responsables obligados a declarar que omitan la presentación de las declaraciones tributarias son objeto de una sanción equivalente, en cada caso, a lo previsto en los diez numerales del artículo 643 del ET, que corresponden a las diez declaraciones tipificadas.',
            'La sanción por no declarar se impone en resolución sanción, previo traslado de cargos, y es una sanción provocada: no puede ser autoliquidada por el obligado. Cuando la omisión se refiere a una declaración no tipificada (por ejemplo, la del desaparecido CREE), en virtud de la reserva de ley no procede aplicar sanción alguna.',
            'La sanción por no declarar se relaciona con el procedimiento de aforo: emplazamiento para declarar (artículo 715 ET), resolución sanción por no declarar y liquidación oficial de aforo (artículo 717 ET). Si el obligado declara voluntariamente antes del emplazamiento, en cambio, liquida la sanción por extemporaneidad del artículo 641 (o del 642 si declara después del emplazamiento) y su declaración es una declaración privada válida.',
          ],
          callout: {
            type: 'importante',
            text: 'La sanción por no declarar se impone en RESOLUCIÓN SANCIÓN (es provocada). Si el obligado declara de forma voluntaria, el camino es la sanción por extemporaneidad del art. 641 o 642 en la propia declaración privada.',
          },
        },
        {
          heading: 'Sanción por corrección (art. 644 ET)',
          paragraphs: [
            'La sanción por corrección es la sanción que se liquida en la declaración de corrección. Cuando la corrección aumenta el valor a pagar o disminuye el saldo a favor, la sanción es del diez por ciento (10%) del mayor valor a pagar o del menor saldo a favor determinado en la corrección respecto de la liquidación privada que se corrige.',
            'Cuando la corrección se realiza con ocasión del emplazamiento para corregir, o con posterioridad a la notificación del requerimiento especial o del pliego de cargos, la sanción se eleva al veinte por ciento (20%) del mayor valor a pagar o del menor saldo a favor. Esa diferencia de trato explica la conveniencia de corregir de manera voluntaria: sin requerimiento previo se paga el 10%; provocada por el emplazamiento, el 20%.',
            'La corrección debe presentarse dentro de los tres años siguientes al vencimiento del plazo para declarar y antes de que se notifique requerimiento especial o pliego de cargos (artículo 588 ET). Si la corrección se realiza con posterioridad a la notificación del requerimiento especial, el camino es la corrección provocada del artículo 709 del ET, con reducción de la sanción de inexactitud respecto de los hechos aceptados y liquidación de intereses de mora.',
          ],
          table: {
            caption: 'Sanción por corrección (art. 644 ET)',
            headers: ['Situación', 'Sanción', 'Se liquida en'],
            rows: [
              ['Corrección voluntaria que aumenta el valor a pagar o disminuye el saldo a favor', '10% del mayor valor a pagar o del menor saldo a favor', 'Declaración de corrección (art. 588 ET)'],
              ['Corrección con ocasión del emplazamiento para corregir, o después del requerimiento especial o del pliego de cargos', '20% del mayor valor a pagar o del menor saldo a favor', 'Declaración de corrección'],
              ['Corrección provocada por el requerimiento especial (aceptación de hechos)', 'Reducción de la sanción de inexactitud + intereses de mora', 'Declaración de corrección (art. 709 ET)'],
            ],
          },
        },
        {
          heading: 'Sanción por inexactitud (arts. 647 y 648 ET)',
          paragraphs: [
            'La sanción por inexactitud es equivalente al ciento por ciento (100%) de la diferencia entre el saldo a pagar o saldo a favor, según el caso, determinado en la liquidación oficial y el declarado por el contribuyente, agente retenedor o responsable. Antes de la Ley 1819 de 2016 la tarifa era del 160%, y por favorabilidad se reliquidan al 100% las sanciones impuestas bajo el texto anterior.',
            'Constituyen inexactitud, entre otras conductas: la omisión de ingresos o impuestos generados por operaciones gravadas, de bienes, activos o actuaciones susceptibles de gravamen; no incluir en la declaración de retención la totalidad de retenciones que han debido efectuarse, efectuarlas y no declararlas, o efectuarlas por un valor inferior; la inclusión de costos, deducciones, descuentos, exenciones, pasivos, impuestos descontables, retenciones o anticipos inexistentes o inexactos; la utilización de datos o factores falsos, desfigurados, alterados, simulados o modificados artificialmente de los cuales se derive un menor impuesto o saldo a pagar o un mayor saldo a favor; y las compras o gastos efectuados a quienes la DIAN hubiere declarado como proveedores ficticios o insolventes.',
            'El artículo 648 del ET extiende la inexactitud a la declaración de ingresos y patrimonio: para esos efectos constituyen inexactitud las causales enunciadas, aunque no exista impuesto a pagar. Además, el régimen no configura inexactitud cuando el menor valor a pagar se deriva de errores de apreciación o de diferencias de criterio sobre la interpretación del derecho aplicable, siempre que los hechos y cifras denunciados sean completos y verdaderos: es el mismo estándar de la interpretación razonable del derecho aplicable que recoge el parágrafo 1 del artículo 434B del Código Penal.',
          ],
        },
        {
          heading: 'Sanción por no enviar información o enviarla con errores (art. 651 ET)',
          paragraphs: [
            'Las personas y entidades obligadas a suministrar información tributaria, así como aquellas a quienes se les haya solicitado informaciones o pruebas, que no las suministren, no las suministren dentro del plazo o cuyo contenido presente errores o no corresponda a lo solicitado, incurren en una multa que no supere quince mil (15.000) UVT, fijada con estos criterios: 5% de las sumas respecto de las cuales no se suministró la información exigida; 4% de las sumas respecto de las cuales se suministró en forma errónea; y 3% de las sumas respecto de las cuales se suministró de forma extemporánea. Cuando no sea posible establecer la base para tasarla o la información no tuviere cuantía, se aplica el 0,5% de los ingresos netos y, si no existieren ingresos, el 0,5% del patrimonio bruto del año inmediatamente anterior o de la última declaración de renta o de ingresos y patrimonio.',
            'El numeral 2 del artículo 651 agrava el efecto de la sanción: cuando la información requerida se refiera a costos, rentas exentas, deducciones, descuentos, pasivos, impuestos descontables y retenciones que deban conservarse y mantenerse a disposición de la Administración, su desconocimiento procede de pleno derecho. Las tres reducciones del mismo artículo (20%, 50% y 70%) se estudian en la lección 3.',
          ],
          table: {
            caption: 'Comparativo de sanciones específicas',
            headers: ['Sanción', 'Artículo', 'Base y tarifa', 'Tope', 'Forma de imposición'],
            rows: [
              ['Extemporaneidad', '641', '5% por mes o fracción del impuesto a cargo o retención; 0,5% de ingresos brutos; 1% del patrimonio líquido', '100% del impuesto; límites alternativos de 2.500 UVT', 'Autoliquidada en la declaración privada'],
              ['Extemporaneidad después de emplazamiento', '642', '10% por mes o fracción del impuesto a cargo o retención; 1% de ingresos brutos; 2% del patrimonio líquido', '200% del impuesto; límites alternativos de 5.000 UVT', 'Autoliquidada en la declaración privada'],
              ['No declarar', '643', 'Según el numeral aplicable a cada declaración omitida (diez declaraciones tipificadas)', 'Según el numeral', 'Resolución sanción'],
              ['Corrección', '644', '10% (num. 1) o 20% (num. 2) del mayor valor a pagar o del menor saldo a favor', 'Según el artículo', 'Declaración privada'],
              ['Inexactitud', '647-648', '100% de la diferencia entre el saldo determinado oficialmente y el declarado', 'Sin tope porcentual', 'Liquidación oficial (de revisión)'],
              ['No informar', '651', '5%, 4% o 3% de las sumas según la conducta; 0,5% de ingresos netos o patrimonio bruto si no hay cuantía', '15.000 UVT', 'Resolución sanción y/o liquidación oficial'],
            ],
          },
        },
      ],
      summary: [
        'La extemporaneidad (art. 641) es del 5% mensual del impuesto a cargo o retención, con tope del 100%, y admite bases alternativas de 0,5% de ingresos brutos o 1% del patrimonio líquido con topes de 2.500 UVT.',
        'La extemporaneidad posterior al emplazamiento (art. 642) duplica la tarifa: 10% mensual, tope del 200%, con bases alternativas de 1% de ingresos y 2% del patrimonio líquido y topes de 5.000 UVT.',
        'La sanción por no declarar (art. 643) es provocada, se impone en resolución sanción y solo cubre las diez declaraciones tipificadas; en virtud de la reserva de ley no se aplica al CREE ni al SIMPLE.',
        'La sanción por corrección (art. 644) es del 10% del mayor valor a pagar o del menor saldo a favor cuando es voluntaria, y del 20% cuando se realiza con ocasión del emplazamiento para corregir o después del requerimiento especial o del pliego de cargos.',
        'La sanción por inexactitud (arts. 647 y 648) es del 100% de la diferencia entre el saldo determinado en la liquidación oficial y el declarado; se extiende a la declaración de ingresos y patrimonio y no se configura por diferencias de criterio con hechos y cifras completos y verdaderos.',
        'La sanción por no informar (art. 651) es del 5% (no informar), 4% (informar con errores) o 3% (informar extemporáneamente), con multa máxima de 15.000 UVT y desconocimiento de costos y deducciones cuando la información se refiera a esos conceptos.',
      ],
      memorize: [
        '641: 5% x mes o fracción, tope 100%. 642: 10% x mes o fracción, tope 200%.',
        '651: 5% no informar / 4% con errores / 3% extemporánea / 0,5% sin cuantía. Tope: 15.000 UVT.',
        '647: inexactitud = 100% de la diferencia (antes de la Ley 1819 de 2016 era el 160%).',
        '644: corrección voluntaria 10%; con ocasión del emplazamiento o después del requerimiento, 20%.',
        '643: sanción por no declarar solo para las diez declaraciones tipificadas; se impone en resolución sanción.',
        'Art. 589 ET: las correcciones que disminuyen el impuesto o aumentan el saldo a favor se presentan como solicitud ante la DIAN, no como corrección unilateral.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: sanción por extemporaneidad',
          paragraphs: [
            'Una sociedad presentó su declaración de renta del año gravable 2019 con vencimiento el 20 de agosto de 2020, de forma extemporánea el 20 de agosto de 2021, es decir, doce meses después. El impuesto a cargo de la declaración es de $100.000.000.',
            'Cálculo: 5% por cada mes o fracción de mes calendario de retardo = 5% x 12 = 60%; sanción plena = 60% x $100.000.000 = $60.000.000. El tope del 100% del impuesto ($100.000.000) no se supera. Sobre esta sanción plena procede la reducción por principios del artículo 640 del ET, que se estudia en la lección siguiente (con dos años de buen comportamiento se reduce al 50%: $30.000.000; con un año, al 75%: $45.000.000).',
          ],
        },
        {
          heading: 'Ejemplo 2: sanción por no informar',
          paragraphs: [
            'Un obligado a presentar información exógena cuyo vencimiento era el 3 de abril de 2020 no la presentó y decidió hacerlo de forma extemporánea el 14 de octubre de 2020. La información asciende a $1.000.000.000.',
            'Cálculo: como la información se suministra de forma extemporánea, el criterio aplicable es el 3% del artículo 651 del ET: 3% x $1.000.000.000 = $30.000.000 (sanción plena). Como el obligado subsanó antes de que se notificara pliego de cargos, el parágrafo del artículo 651 permite liquidar y pagar la sanción reducida al veinte por ciento (20%): 20% x $30.000.000 = $6.000.000, con un ahorro de $24.000.000. El pago se realiza en el recibo de pago 490, concepto 71.',
          ],
        },
        {
          heading: 'Ejemplo 3: sanción por inexactitud',
          paragraphs: [
            'En una liquidación oficial de revisión la DIAN determina un saldo a pagar de $230.000.000, mientras el contribuyente había declarado $180.000.000. La diferencia es de $50.000.000.',
            'Cálculo: sanción por inexactitud = 100% x $50.000.000 = $50.000.000, más los intereses de mora sobre el mayor impuesto. Si el obligado acepta las glosas del requerimiento especial o de la liquidación de revisión, accede a las reducciones de los artículos 709 y 713 del ET, con liquidación de intereses de mora.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Aplicar la tarifa del 5% del art. 641 a una declaración presentada después del emplazamiento para declarar.',
          correction: 'Si la declaración se presenta con posterioridad al emplazamiento, la tarifa es la del art. 642: 10% por mes o fracción, con tope del 200% del impuesto, y bases alternativas de 1% de ingresos brutos o 2% del patrimonio líquido.',
        },
        {
          mistake: 'Liquidar la sanción por no declarar sobre cualquier declaración omitida, incluida la del SIMPLE.',
          correction: 'El art. 643 del ET tipifica diez declaraciones. El SIMPLE y el CREE no están descritos, y por virtud de la reserva de ley no puede aplicarse la sanción por analogía.',
        },
        {
          mistake: 'Liquidar la sanción por corrección del 10% cuando la corrección se presenta con ocasión del emplazamiento para corregir.',
          correction: 'En ese caso la sanción es del 20% (art. 644, numeral 2, del ET). El 10% aplica solo a la corrección voluntaria que aumenta el valor a pagar o disminuye el saldo a favor.',
        },
        {
          mistake: 'Confundir la sanción por inexactitud con el mayor impuesto a pagar.',
          correction: 'Son obligaciones distintas: el mayor impuesto se paga con intereses de mora y la sanción por inexactitud equivale al 100% de la diferencia entre el saldo determinado oficialmente y el declarado, sin perjuicio de las reducciones por aceptación.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 641 y 642',
          status: 'vigente',
          note: 'Sanciones por extemporaneidad y por extemporaneidad con posterioridad al emplazamiento para declarar, con sus bases alternativas y topes (material, págs. 418-419, Tabla 9).',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 643',
          status: 'vigente',
          note: 'Sanción por no declarar: diez numerales, uno por cada declaración tipificada. Texto transcrito parcialmente en el material, pág. 410.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 644 y 645',
          status: 'verificar',
          note: 'Sanción por corrección y sanción relativa a la declaración de ingresos y patrimonio. Los porcentajes del art. 644 citados en esta lección (10% y 20%) provienen del texto vigente del artículo; conviene confirmar en fuente oficial la redacción del numeral 3 y del art. 645.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 647 y 648',
          status: 'vigente',
          note: 'Sanción por inexactitud (100% de la diferencia, texto de la Ley 1819 de 2016, art. 287) y su extensión a la declaración de ingresos y patrimonio.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 651',
          status: 'vigente',
          note: 'Sanción por no enviar información o enviarla con errores: multa hasta 15.000 UVT con criterios de 5%, 4%, 3% y 0,5%; desconocimiento de costos y deducciones; reducciones del parágrafo (20%) y del inciso final (50% y 70%). Texto transcrito en el material, págs. 421-423 y 435-436.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 588, 589 y 709',
          status: 'vigente',
          note: 'Correcciones que aumentan el valor a pagar (588), solicitudes de corrección que lo disminuyen (589) y corrección provocada por el requerimiento especial (709).',
        },
        {
          norm: 'Ley 1819 de 2016',
          article: 'Artículos 287, 288 y 289',
          status: 'verificar',
          note: 'Artículos de la reforma que modificaron la sanción por inexactitud del art. 647 y eliminaron la tarifa del 160%. Confirmar la numeración exacta de los artículos de la ley en el diario oficial.',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — Título I del Libro V (arts. 641-651)', url: 'https://estatuto.co/libro/5/v-titulo-i' },
        { label: 'DIAN — Normograma del Estatuto Tributario', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm' },
        { label: 'DIAN — Resolución de información exógena vigente', url: 'https://www.dian.gov.co/normatividad/Paginas/Resoluciones.aspx' },
      ],
      mindmap: {
        root: 'Sanciones específicas',
        branches: [
          { label: 'Declaraciones', children: ['641: 5%/mes, tope 100%', '642: 10%/mes, tope 200%', '643: no declarar (resolución sanción)', '644: corrección 10% / 20%'] },
          { label: 'Inexactitud', children: ['647: 100% de la diferencia', '648: ingresos y patrimonio', 'Conductas típicas', 'No hay inexactitud por diferencia de criterio'] },
          { label: 'Información', children: ['651: 5% / 4% / 3% / 0,5%', 'Tope 15.000 UVT', 'Desconocimiento de costos (num. 2)', 'Reducciones 20% / 50% / 70%'] },
          { label: 'Otras', children: ['652: factura sin requisitos (950 UVT)', '655: contabilidad (20.000 UVT)', '658-1: administradores (4.100 UVT)', '657: clausura'] },
        ],
      },
      mindmapText:
        'Las sanciones específicas más relevantes son: extemporaneidad del 5% mensual del impuesto a cargo o retención con tope del 100% (art. 641) y del 10% con tope del 200% si es posterior al emplazamiento (art. 642); la sanción por no declarar, provocada y limitada a las diez declaraciones tipificadas en el art. 643; la sanción por corrección del 10% voluntaria y del 20% provocada por el emplazamiento (art. 644); la sanción por inexactitud del 100% de la diferencia entre el saldo oficial y el declarado, que se extiende a ingresos y patrimonio y no se configura por diferencias de criterio razonables (arts. 647 y 648); y la sanción por no informar del art. 651, con criterios de 5%, 4%, 3% y 0,5%, multa máxima de 15.000 UVT, desconocimiento de costos y reducciones del 20%, 50% y 70%.',
      source: [
        { doc: 'material', pages: 'págs. 418-419 (Tabla 9: límites superiores de las sanciones; arts. 641 y 642)' },
        { doc: 'material', pages: 'págs. 410-411 (art. 643 del ET: los diez numerales y la reserva de ley en el CREE y el SIMPLE)' },
        { doc: 'material', pages: 'págs. 421-423 (art. 651: criterios de 5%, 4% y 3%, reducción del 20% y ejemplo del recibo 490 concepto 71)' },
        { doc: 'material', pages: 'págs. 424-426 (sanción de inexactitud del 160% al 100%: Tabla 12)' },
        { doc: 'material', pages: 'págs. 430-431 (Tabla 16: sanciones relativas a las declaraciones y conductas de la inexactitud)' },
        { doc: 'material', pages: 'págs. 435-436 (art. 651: literales a) a d), numeral 2 y desconocimiento de costos)' },
        { doc: 'material', pages: 'págs. 448-449 (cumplimiento voluntario y provocado del inexacto: arts. 588 y 644 del ET)' },
      ],
      activityId: 'm08-a02',
    },
    {
      id: 'm08-l03',
      moduleId: 'm08',
      title: 'Reducción de sanciones y reincidencia',
      indicators: ['i03'],
      objectives: [
        'Diferenciar las reducciones que la ley prevé en el mismo artículo de la sanción, por principios y por procedimiento.',
        'Aplicar la reducción por principios del artículo 640 del ET a casos de sanción autoliquidada y de sanción determinada por la DIAN.',
        'Calcular el incremento del 100% por reincidencia y verificar sus condiciones.',
        'Resolver casos de acumulación de reducciones con liquidación aritméticamente correcta.',
      ],
      sections: [
        {
          heading: 'Dónde se reduce una sanción tributaria',
          paragraphs: [
            'El Estatuto Tributario contempla la reducción de las sanciones en diferentes momentos y por circunstancias particulares que, al igual que la potestad sancionatoria, tienen reserva de ley. El material distingue tres fuentes: la reducción establecida en la misma norma que contempla la sanción; la que se aplica por los principios de favorabilidad, proporcionalidad y gradualidad (artículo 640 del ET); y la que depende del procedimiento utilizado para su determinación (artículo 764-3 del ET).',
            'La reducción de sanciones en el procedimiento tributario puede ser aplicada de forma acumulativa, siempre y cuando no exista normativa en contrario. Así, por ejemplo, una sanción reducida por el artículo 640 puede además beneficiarse de la reducción del 40% de la liquidación provisional si el obligado acepta y paga dentro del mes siguiente.',
          ],
          callout: {
            type: 'importante',
            text: 'Las reducciones son ACUMULABLES salvo norma en contrario: mismo artículo + principios (art. 640) + procedimiento (art. 764-3) pueden operar sucesivamente sobre la misma sanción.',
          },
        },
        {
          heading: 'Reducción establecida en el mismo artículo: el caso del artículo 651',
          paragraphs: [
            'En el derecho tributario la sanción se reduce en la medida en que el sujeto obligado acepta que ha cometido la conducta sancionable. Esa oportunidad suele estar en el mismo artículo que contempla la sanción. En el artículo 651 del ET coexisten tres reducciones: la del parágrafo, que baja la sanción al veinte por ciento (20%) cuando el obligado subsana de manera voluntaria antes de que la DIAN profiera pliego de cargos; la del cincuenta por ciento (50%), si la omisión es subsanada antes de que se notifique la imposición de la sanción; y la del setenta por ciento (70%), si la omisión se subsana dentro de los dos meses siguientes a la fecha en que se notifique la sanción.',
            'En los tres casos el obligado debe presentar ante la oficina que conoce de la investigación un memorial de aceptación de la sanción reducida en el que acredite que la omisión fue subsanada, así como el pago o acuerdo de pago de la misma. Las correcciones que se realicen a la información tributaria antes del vencimiento del plazo para su presentación no son objeto de sanción.',
          ],
          table: {
            caption: 'Reducciones del artículo 651 del ET sobre la sanción por no informar',
            headers: ['Momento en que se subsana', 'Porcentaje aplicable', 'Resultado sobre la sanción plena'],
            rows: [
              ['Antes de que se profiera pliego de cargos', '20% de la sanción plena (parágrafo)', 'Paga $6.000.000 de una sanción plena de $30.000.000'],
              ['Antes de que se notifique la imposición de la sanción', '50% de la suma liquidada', 'Paga $25.000.000 de una sanción plena de $50.000.000'],
              ['Dentro de los 2 meses siguientes a la notificación de la sanción', '70% de la suma liquidada', 'Paga $35.000.000 de una sanción plena de $50.000.000'],
              ['Sin subsanación', '100% (sanción plena)', 'Según la conducta: 5%, 4%, 3% o 0,5%'],
            ],
          },
        },
        {
          heading: 'Reducción por principios: el artículo 640 del ET',
          paragraphs: [
            'El artículo 640 del ET consagra la reducción de la sanción por favorabilidad, proporcionalidad y gradualidad, distinguiendo si la sanción debe ser liquidada por el propio obligado o si es propuesta o determinada por la DIAN.',
            'Cuando la sanción deba ser liquidada por el contribuyente, agente retenedor, responsable o declarante: 1) la sanción se reduce al cincuenta por ciento (50%) del monto previsto en la ley, siempre que dentro de los dos años anteriores a la fecha de la comisión de la conducta sancionable no se hubiere cometido la misma y que la Administración no haya proferido pliego de cargos, requerimiento especial o emplazamiento previo por no declarar, según el caso; 2) la sanción se reduce al setenta y cinco por ciento (75%) del monto previsto en la ley, si dentro del año anterior a la comisión de la conducta no se hubiere cometido la misma y tampoco se hubiere proferido pliego de cargos, requerimiento especial o emplazamiento previo por no declarar.',
            'Cuando la sanción sea propuesta o determinada por la DIAN: 3) la sanción se reduce al cincuenta por ciento (50%) del monto previsto en la ley, siempre que dentro de los cuatro (4) años anteriores a la fecha de la comisión de la conducta sancionable no se hubiere cometido la misma, y esta se hubiere sancionado mediante acto administrativo en firme, y que la sanción sea aceptada y la infracción subsanada de conformidad con el tipo sancionatorio correspondiente; 4) la sanción se reduce al setenta y cinco por ciento (75%), si dentro de los dos (2) años anteriores no se hubiere cometido la misma conducta sancionada en firme, con las mismas condiciones de aceptación y subsanación.',
          ],
          table: {
            caption: 'Reducción por principios (art. 640 ET)',
            headers: ['Quién liquida la sanción', 'Tiempo sin cometer la misma conducta', 'Reducción', 'Condición adicional'],
            rows: [
              ['El obligado (num. 1)', '2 años anteriores', 'Al 50% (paga la mitad)', 'Que no se haya proferido pliego de cargos, requerimiento especial o emplazamiento previo por no declarar'],
              ['El obligado (num. 2)', '1 año anterior', 'Al 75% (paga tres cuartas partes)', 'Misma condición anterior'],
              ['La DIAN (num. 3)', '4 años anteriores, con sanción en firme', 'Al 50% (paga la mitad)', 'Que la sanción sea aceptada y la infracción subsanada'],
              ['La DIAN (num. 4)', '2 años anteriores, con sanción en firme', 'Al 75% (paga tres cuartas partes)', 'Que la sanción sea aceptada y la infracción subsanada'],
            ],
          },
          callout: {
            type: 'error',
            text: 'Ojo con la fórmula: "la sanción se reducirá AL 50%" significa que se paga el 50% y se ahorra el 50%. "Reducida al 75%" significa que se paga el 75%. A mayor tiempo de buen comportamiento, mayor descuento: 2 años (o 4 si la DIAN liquida) dan mejor reducción que 1 año (o 2).',
          },
        },
        {
          heading: 'Reincidencia: el incremento del 100% (art. 640, parágrafo 2, del ET)',
          paragraphs: [
            'La reincidencia es la circunstancia agravante de la responsabilidad: cuando el sujeto que ha sido sancionado incurre nuevamente en violación del mismo tipo legal, se considera que la sanción impuesta por la primera infracción no cumplió su cometido, y por ello el castigo debe ser mayor, de tal manera que logre desestimular la comisión de futuras faltas y sea ejemplarizante para la sociedad (Concepto DIAN 046589 del 18 de mayo de 2000).',
            'El artículo 640 del ET consagra la reincidencia en el parágrafo 2: hay reincidencia siempre que el sancionado, por acto administrativo en firme, cometiere una nueva infracción del mismo tipo dentro de los dos (2) años siguientes al día en el que cobre firmeza el acto por medio del cual se impuso la sanción, con excepción de la señalada en el artículo 652 del ET y de aquellas que deban ser liquidadas por el contribuyente, responsable, agente retenedor o declarante. El monto de la sanción se aumenta en un ciento por ciento (100%) si la persona o entidad es reincidente.',
            'La norma exige, entonces: i) que se incurra en una conducta sancionable; ii) que la sanción inicial haya sido impuesta por acto administrativo; iii) que se cometa la misma conducta dentro de los dos años siguientes a la firmeza del primer acto administrativo; y iv) que no se trate de la sanción del artículo 652 del ET ni de las sanciones autoliquidables, que por definición no son objeto del incremento.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Reincidencia (art. 640, par. 2 ET): misma infracción del mismo tipo dentro de los 2 años siguientes a la firmeza del acto sancionatorio; el monto se aumenta en un 100%. NO aplica al art. 652 ni a las sanciones autoliquidables.',
          },
        },
        {
          heading: 'Reducción por procedimiento y límites de las sanciones reducidas',
          paragraphs: [
            'La reducción por procedimiento más relevante es la del artículo 764-3 del ET: las sanciones que se deriven de una liquidación provisional aceptada se reducen en un cuarenta por ciento (40%) del valor que resulte de la aplicación del régimen sancionatorio, siempre que el contribuyente la acepte y pague dentro del mes siguiente a su notificación, bien sea que se haya discutido o no. La reducción no aplica a las sanciones generadas por la omisión o corrección de las declaraciones tributarias ni a las derivadas del incumplimiento de obligaciones formales que puedan subsanarse voluntariamente antes de proferido el pliego de cargos.',
            'En el procedimiento ordinario, la aceptación del requerimiento especial o de la liquidación oficial de revisión también reduce la sanción de inexactitud (artículos 709 y 713 del ET) y obliga a liquidar intereses de mora desde el vencimiento del plazo para declarar.',
            'Un límite importante opera sobre las sanciones ya reducidas: el valor mínimo de cualquier sanción, incluidas las sanciones reducidas, es de 10 UVT (artículo 639 del ET), sin perjuicio de las excepciones de los intereses de mora y de los numerales 1 y 3 del artículo 658-3. Así, ninguna reducción puede llevar la sanción por debajo de ese piso legal.',
          ],
        },
      ],
      summary: [
        'Las reducciones de sanciones tienen reserva de ley y provienen de tres fuentes: la misma norma sancionatoria, los principios del art. 640 y el procedimiento del art. 764-3; son acumulables salvo norma en contrario.',
        'El art. 651 del ET contiene tres reducciones por subsanación: al 20% antes del pliego de cargos, al 50% antes de la notificación de la sanción y al 70% dentro de los dos meses siguientes a esa notificación.',
        'La reducción por principios del art. 640 distingue si la sanción la liquida el obligado (50% con 2 años de buen comportamiento; 75% con 1 año) o la DIAN (50% con 4 años y sanción en firme; 75% con 2 años), siempre con aceptación y subsanación cuando la determina la Administración.',
        'La reincidencia incrementa la sanción en un 100% cuando se comete la misma infracción dentro de los dos años siguientes a la firmeza del acto que impuso la sanción, con excepción del art. 652 y de las sanciones autoliquidables.',
        'La liquidación provisional aceptada y pagada dentro del mes siguiente reduce las sanciones en un 40%, con exclusión de las sanciones por omisión o corrección de declaraciones y de las obligaciones formales subsanables antes del pliego de cargos.',
        'Ninguna sanción reducida puede ser inferior a 10 UVT (art. 639 ET).',
      ],
      memorize: [
        'Tres fuentes de reducción: mismo artículo (651: 20/50/70), principios (640: 50/75) y procedimiento (764-3: 40%).',
        'Art. 640, numerales 1 y 2 (liquida el obligado): 2 años limpios = 50%; 1 año limpio = 75%; y no debe haber pliego, requerimiento ni emplazamiento.',
        'Art. 640, numerales 3 y 4 (determina la DIAN): 4 años = 50%; 2 años = 75%; con aceptación y subsanación.',
        'Reincidencia (art. 640, par. 2): +100% si la misma infracción se comete dentro de los 2 años siguientes a la firmeza del acto sancionatorio. Excepciones: art. 652 y sanciones autoliquidables.',
        'Acumulación: las reducciones pueden aplicarse de forma acumulativa salvo norma en contrario.',
        'Piso legal: la sanción reducida nunca es inferior a 10 UVT (art. 639 ET).',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: reducción al 50% del artículo 640',
          paragraphs: [
            'Un responsable de renta cuyo plazo para declarar por el período gravable 2019 vencía el 20 de agosto de 2020 presenta la declaración de forma extemporánea el 20 de agosto de 2021 (un año después). El impuesto a cargo es de $100.000.000 y la sanción por extemporaneidad, del 5% por mes o fracción durante 12 meses, asciende a $60.000.000.',
            'Revisado su historial entre el 20 de agosto de 2019 y el 20 de agosto de 2021, el obligado no había presentado ninguna declaración extemporánea en los dos años anteriores. En consecuencia, tiene derecho a la reducción al 50% del artículo 640 del ET: 50% x $60.000.000 = $30.000.000, con un ahorro de $30.000.000 frente a la sanción plena.',
          ],
        },
        {
          heading: 'Ejemplo 2: reducción al 75% del artículo 640',
          paragraphs: [
            'El mismo obligado del ejemplo anterior, con idéntico impuesto a cargo de $100.000.000 y la misma extemporaneidad de 12 meses (sanción plena de $60.000.000), presenta sin embargo extemporaneidad en el impuesto sobre las ventas del período 4 de 2019 (declaración presentada en octubre de 2019 con un mes de extemporaneidad).',
            'Como dentro de los dos años anteriores sí cometió la misma conducta, pero dentro del año anterior no, la reducción aplicable no es la del numeral 1 sino la del numeral 2 del artículo 640: la sanción se reduce al 75%: 75% x $60.000.000 = $45.000.000. El portarse bien durante más tiempo da una reducción superior: $30.000.000 con 2 años limpios frente a $45.000.000 con solo 1 año limpio.',
          ],
        },
        {
          heading: 'Ejemplo 3: reincidencia',
          paragraphs: [
            'Una sociedad fue sancionada por no informar mediante resolución sanción que quedó en firme el 10 de marzo de 2025. El 15 de septiembre de 2026 la DIAN verifica que incurrió de nuevo en la misma conducta (no suministrar la información solicitada) y propone una sanción plena de $40.000.000.',
            'Análisis: la nueva conducta se cometió dentro de los dos años siguientes a la firmeza del acto sancionatorio anterior (10 de marzo de 2025 a 10 de marzo de 2027) y es del mismo tipo, de modo que hay reincidencia. Cálculo: incremento del 100% sobre la sanción plena: $40.000.000 x 2 = $80.000.000. Si la nueva conducta se hubiera cometido después del 10 de marzo de 2027, no habría reincidencia y la sanción sería la plena, con las reducciones del artículo 640 si el obligado acepta y subsana.',
          ],
        },
        {
          heading: 'Ejemplo 4: acumulación de reducciones',
          paragraphs: [
            'Una sanción por no informar (artículo 651) se propone en liquidación provisional por $50.000.000 (sanción plena del 5%). El obligado acepta la liquidación provisional y paga dentro del mes siguiente a su notificación.',
            'Paso 1: reducción por procedimiento del artículo 764-3: 40% x $50.000.000 = $20.000.000 de reducción; queda en $30.000.000. Paso 2: si además cumple las condiciones del artículo 640, numeral 3, aplicable cuando la sanción es propuesta o determinada por la DIAN (cuatro años anteriores sin la misma conducta sancionada en firme, con aceptación de la sanción y subsanación de la infracción), la sanción se reduce al 50%: $30.000.000 x 50% = $15.000.000. Paso 3: verificación del piso legal: $15.000.000 supera 10 UVT ($523.740 con la UVT de 2026), de modo que no se aplica la sanción mínima. Total a pagar: $15.000.000.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Interpretar "la sanción se reducirá al 50%" como si se descontara el 50% de la sanción.',
          correction: 'Las dos lecturas coinciden en el resultado (pagar la mitad es ahorrar la mitad), pero el error frecuente es invertir los numerales: dos años de buen comportamiento (num. 1) dan la reducción AL 50% (el mayor beneficio) y un año (num. 2) da la reducción AL 75%. A más tiempo sin incurrir en la conducta, menor el valor a pagar.',
        },
        {
          mistake: 'Aplicar el incremento del 100% por reincidencia a las sanciones autoliquidables o a la sanción del artículo 652 del ET.',
          correction: 'El parágrafo 2 del artículo 640 excluye expresamente la sanción señalada en el artículo 652 del ET y aquellas que deban ser liquidadas por el contribuyente, responsable, agente retenedor o declarante.',
        },
        {
          mistake: 'Reducir una sanción por debajo de las 10 UVT.',
          correction: 'El artículo 639 del ET fija la sanción mínima en 10 UVT para cualquier sanción, incluidas las sanciones reducidas, salvo los intereses de mora y los numerales 1 y 3 del artículo 658-3.',
        },
        {
          mistake: 'Creer que las reducciones son excluyentes entre sí.',
          correction: 'La reducción de sanciones en el procedimiento tributario puede aplicarse de forma acumulativa, siempre que no exista normativa en contrario; así pueden concurrir la reducción por principios del art. 640 y la del 40% del art. 764-3.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 640',
          status: 'vigente',
          note: 'Reducción de sanciones por principios: numerales 1 y 2 (sanción liquidada por el obligado: 50% y 75%) y numerales 3 y 4 (sanción determinada por la DIAN: 50% y 75%); parágrafo 2 (reincidencia con incremento del 100%); parágrafo 5 (favorabilidad). Textos transcritos en el material, págs. 420 y 426-427.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 651',
          status: 'vigente',
          note: 'Reducciones al 20% (parágrafo, subsanación voluntaria antes del pliego de cargos), al 50% y al 70% (subsanación antes o dentro de los dos meses siguientes a la notificación de la sanción).',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 764-3 y 764-4',
          status: 'vigente',
          note: 'Reducción del 40% de las sanciones derivadas de la liquidación provisional aceptada (aceptación y pago dentro del mes siguiente) y firmeza de seis meses de las declaraciones aceptadas.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículos 709 y 713',
          status: 'verificar',
          note: 'Reducción de la sanción de inexactitud por aceptación del requerimiento especial (709) y de la liquidación de revisión dentro del término para recurrir (713), con liquidación de intereses de mora. Confirmar en fuente oficial el porcentaje vigente de la reducción.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 639',
          status: 'vigente',
          note: 'Sanción mínima de 10 UVT aplicable a cualquier sanción, incluidas las reducidas. Excepciones: intereses de mora y numerales 1 y 3 del art. 658-3.',
        },
        {
          norm: 'DIAN — Concepto 046589 del 18 de mayo de 2000',
          status: 'verificar',
          note: 'Doctrina citada por el material (pág. 420) sobre el fundamento de la reincidencia. Conviene consultar el texto del concepto y su vigencia en el repositorio de doctrina oficial.',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — art. 640 y ss. (reducción de sanciones)', url: 'https://estatuto.co/libro/5/v-titulo-i' },
        { label: 'DIAN — Normograma del Estatuto Tributario', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm' },
        { label: 'Estatuto Tributario — liquidación provisional (art. 764-3)', url: 'https://estatuto.co/libro/5/v-titulo-v' },
      ],
      mindmap: {
        root: 'Reducción de sanciones',
        branches: [
          { label: 'Por el mismo artículo', children: ['Art. 651: 20% antes del pliego', '50% antes de la notificación de la sanción', '70% dentro de los 2 meses siguientes', 'Memorial de aceptación y pago'] },
          { label: 'Por principios (art. 640)', children: ['Liquida el obligado: 50% (2 años) / 75% (1 año)', 'Determina la DIAN: 50% (4 años) / 75% (2 años)', 'Sin pliego, requerimiento o emplazamiento'] },
          { label: 'Por procedimiento', children: ['Art. 764-3: 40% en liquidación provisional', 'Arts. 709 y 713: aceptación en revisión', 'Acumulables salvo norma en contrario'] },
          { label: 'Agravantes y límites', children: ['Reincidencia: +100% (art. 640, par. 2)', 'Excepciones: art. 652 y autoliquidables', 'Piso: 10 UVT (art. 639)', 'Favorabilidad (art. 640, par. 5)'] },
        ],
      },
      mindmapText:
        'Las sanciones se reducen por tres vías: la misma norma que las consagra (art. 651: al 20% antes del pliego de cargos, al 50% antes de la notificación de la sanción y al 70% dentro de los dos meses siguientes), los principios del art. 640 (al 50% con dos años de buen comportamiento si la sanción la liquida el obligado, al 75% con un año; al 50% con cuatro años y sanción en firme si la determina la DIAN, al 75% con dos años) y el procedimiento (art. 764-3: 40% en la liquidación provisional aceptada y pagada dentro del mes siguiente). Son acumulables salvo norma en contrario. La reincidencia incrementa el monto en un 100% cuando la misma infracción se comete dentro de los dos años siguientes a la firmeza del acto sancionatorio, con excepción del art. 652 y de las sanciones autoliquidables, y ninguna sanción reducida puede quedar por debajo de 10 UVT.',
      source: [
        { doc: 'material', pages: 'págs. 421-423 (reducciones del art. 651: 20%, 50% y 70%; ejemplos con $1.000.000.000 y ahorros de $24.000.000 y $25.000.000)' },
        { doc: 'material', pages: 'págs. 426-427 (texto de los numerales 1 a 4 del art. 640 ET y Tabla 13)' },
        { doc: 'material', pages: 'págs. 427-428 (ejemplos 1 y 2: sanción plena de $60.000.000 reducida a $30.000.000 y a $45.000.000)' },
        { doc: 'material', pages: 'pág. 420 (reincidencia: parágrafo 2 del art. 640 ET y Concepto DIAN 046589 de 2000)' },
        { doc: 'material', pages: 'pág. 429 (reducción del 40% del art. 764-3 y acumulación de reducciones)' },
        { doc: 'material', pages: 'pág. 417 (la sanción mínima de 10 UVT aplica también a las sanciones reducidas)' },
      ],
      activityId: 'm08-a01',
    },
    {
      id: 'm08-l04',
      moduleId: 'm08',
      title: 'Penalización de la evasión: delitos fiscales y abuso en materia tributaria',
      indicators: ['i03'],
      objectives: [
        'Identificar los tres delitos fiscales del Código Penal y sus elementos típicos.',
        'Explicar las causales de extinción de la acción penal por pago o corrección.',
        'Diferenciar la evasión, la elusión y el abuso en materia tributaria.',
        'Describir el procedimiento de abuso del artículo 869 del ET y la conexión entre sanciones administrativas y penales.',
      ],
      sections: [
        {
          heading: 'Los delitos fiscales y el principio non bis in idem',
          paragraphs: [
            'El Código Penal colombiano establece en el Título XV los delitos contra la administración pública y tipifica tres conductas delictivas de origen tributario: i) la omisión del agente retenedor o recaudador; ii) la omisión de activos o inclusión de pasivos inexistentes; y iii) la defraudación o evasión tributaria. Todos ellos han sido objeto de control constitucional y se diseñaron con el propósito de luchar contra la evasión y el contrabando.',
            'La coexistencia de sanciones administrativas con los delitos fiscales ha suscitado controversias frente al principio non bis in idem, que prohíbe que una persona, por el mismo hecho, sea sometida a juicios sucesivos o le sean impuestas varias sanciones en el mismo juicio, salvo que una sea tan solo accesoria de la otra. El ordenamiento colombiano ha superado ese cuestionamiento: la sanción administrativa y la penal protegen bienes jurídicos distintos y persiguen finalidades distintas, de modo que ambas pueden concurrir por los mismos hechos.',
          ],
        },
        {
          heading: 'Omisión del agente retenedor o recaudador (art. 402 C.P.)',
          paragraphs: [
            'El artículo 402 del Código Penal dispone que el agente retenedor o autorretenedor que no consigne las sumas retenidas o autorretenidas por concepto de retención en la fuente dentro de los dos (2) meses siguientes a la fecha fijada por el Gobierno nacional para la presentación y pago de la respectiva declaración de retención en la fuente, o quien encargado de recaudar tasas o contribuciones públicas no las consigne dentro del término legal, incurrirá en prisión de cuarenta y ocho (48) a ciento ocho (108) meses y multa equivalente al doble de lo no consignado, sin que supere el equivalente a 1.020.000 UVT.',
            'En la misma sanción incurre el responsable del impuesto sobre las ventas o del impuesto nacional al consumo que, teniendo la obligación legal de hacerlo, no consigne las sumas recaudadas por dicho concepto dentro de los dos meses siguientes a la fecha fijada para presentar y pagar la respectiva declaración; y también incurre en la misma pena quien, estando obligado, omita la obligación de cobrar y recaudar estos impuestos. Tratándose de sociedades u otras entidades, quedan sometidas a esas mismas sanciones las personas naturales encargadas en cada entidad del cumplimiento de dichas obligaciones.',
            'El parágrafo del artículo 402 contiene la causal de extinción: el agente retenedor o autorretenedor, el responsable del impuesto a las ventas o del impuesto nacional al consumo y el recaudador de tasas o contribuciones públicas que extinga la obligación tributaria por pago o compensación de las sumas adeudadas, junto con sus correspondientes intereses previstos en el Estatuto Tributario y las normas legales respectivas, se hará beneficiario de resolución inhibitoria, preclusión de la investigación o cesación de procedimiento dentro del proceso penal, sin perjuicio de las sanciones administrativas a que haya lugar.',
          ],
          table: {
            caption: 'Elementos del delito de omisión del agente retenedor o recaudador',
            headers: ['Elemento', 'Contenido'],
            rows: [
              ['Sujeto activo', 'El agente retenedor o autorretenedor; el responsable de IVA o del impuesto nacional al consumo; el recaudador de tasas o contribuciones públicas; y, en sociedades, las personas naturales encargadas del cumplimiento de esas obligaciones'],
              ['Sujeto pasivo', 'El Estado'],
              ['Conducta', 'No consignar las sumas retenidas, autorretenidas o recaudadas dentro de los dos (2) meses siguientes a la fecha fijada para declarar y pagar; u omitir el deber de cobrar y recaudar'],
              ['Pena', 'Prisión de 48 a 108 meses y multa equivalente al doble de lo no consignado, sin superar 1.020.000 UVT'],
              ['Causal de extinción', 'Pago o compensación de las sumas adeudadas con sus intereses (resolución inhibitoria, preclusión o cesación de procedimiento), sin perjuicio de las sanciones administrativas'],
            ],
          },
        },
        {
          heading: 'Omisión de activos o inclusión de pasivos inexistentes (art. 434A C.P.)',
          paragraphs: [
            'El contribuyente que omita activos, declare un menor valor de los activos o declare pasivos inexistentes en la declaración del impuesto sobre la renta y complementarios, por un valor igual o superior a 5.000 salarios mínimos legales mensuales vigentes, definido por liquidación oficial de la autoridad tributaria, incurre en prisión de 48 a 108 meses. El valor de los activos omitidos o declarados por menor valor se establece conforme a las reglas de valoración patrimonial de activos del Estatuto Tributario, y el de los pasivos inexistentes por el valor por el que hayan sido incluidos en la declaración.',
            'La norma contiene agravantes punitivos: si el valor es superior a 7.250 y hasta 8.500 SMLMV, las penas se incrementan en una tercera parte; si es superior a 8.500 SMLMV, se incrementan en la mitad. La acción penal solo puede iniciarse por petición especial del Director General de la DIAN o su delegado, siguiendo criterios de razonabilidad y proporcionalidad, y la autoridad se abstiene de presentar la petición cuando exista una interpretación razonable del derecho aplicable, siempre que los hechos y cifras declarados por el contribuyente sean completos y verdaderos.',
            'La acción penal se extingue cuando el contribuyente presenta o corrige la declaración o declaraciones correspondientes, siempre y cuando esté dentro del término para corregir previsto en el Estatuto Tributario y, en todo caso, realice los respectivos pagos de impuestos, sanciones tributarias e intereses.',
          ],
        },
        {
          heading: 'Defraudación o evasión tributaria (art. 434B C.P.)',
          paragraphs: [
            'El artículo 434B del Código Penal es de carácter residual: se aplica siempre que la conducta no constituya otro delito sancionado con pena mayor. Sanciona al contribuyente que, estando obligado a declarar, no declare, o que en una declaración tributaria omita ingresos, incluya costos o gastos inexistentes, o reclame créditos fiscales, retenciones o anticipos improcedentes por un valor igual o superior a 250 SMLMV e inferior a 2.500 SMLMV, definido por liquidación oficial de la autoridad tributaria, con pena privativa de la libertad de 36 a 60 meses de prisión.',
            'Si el valor es superior a 2.500 e inferior a 8.500 SMLMV, las penas se incrementan en una tercera parte; si es superior a 8.500 SMLMV, se incrementan en la mitad. Igual que en el artículo 434A, la acción penal requiere petición especial del Director General de la DIAN o su delegado, se abstiene cuando exista interpretación razonable del derecho aplicable con hechos y cifras completos y verdaderos, y se extingue cuando el contribuyente presenta o corrige la declaración dentro del término para corregir y realiza los pagos de impuestos, sanciones e intereses.',
          ],
          table: {
            caption: 'Comparativo de los delitos fiscales',
            headers: ['Delito', 'Artículo C.P.', 'Umbral', 'Pena', 'Extinción de la acción penal'],
            rows: [
              ['Omisión del agente retenedor o recaudador', '402', 'No consignar lo retenido o recaudado dentro de los 2 meses siguientes', '48 a 108 meses de prisión y multa del doble de lo no consignado (tope 1.020.000 UVT)', 'Pago o compensación de lo adeudado con intereses'],
              ['Omisión de activos o inclusión de pasivos inexistentes', '434A', 'Igual o superior a 5.000 SMLMV (agravantes desde 7.250 y desde 8.500)', '48 a 108 meses (con incrementos de un tercio o de la mitad)', 'Presentación o corrección de la declaración con pago de impuestos, sanciones e intereses'],
              ['Defraudación o evasión tributaria', '434B', 'Igual o superior a 250 SMLMV e inferior a 2.500 (agravantes desde 2.500 y desde 8.500)', '36 a 60 meses de prisión (con incrementos de un tercio o de la mitad)', 'Presentación o corrección de la declaración con pago de impuestos, sanciones e intereses'],
            ],
          },
        },
        {
          heading: 'Abuso en materia tributaria (art. 869 ET): recaracterización y reconfiguración',
          paragraphs: [
            'El artículo 869 del ET faculta a la Administración Tributaria para recaracterizar o reconfigurar toda operación o serie de operaciones que constituya abuso en materia tributaria y, consecuentemente, desconocer sus efectos; en ese sentido puede expedir los actos administrativos correspondientes en los cuales proponga y liquide los impuestos, intereses y sanciones respectivos. Una operación o serie de operaciones constituye abuso cuando involucra el uso o la implementación de uno o varios actos o negocios jurídicos artificiosos, sin razón o propósito económico o comercial aparente, con el fin de obtener provecho tributario, independientemente de cualquier intención subjetiva adicional.',
            'El parágrafo 1 del artículo 869 define la recaracterización o reconfiguración como la potestad con que cuenta la Administración para modificar los efectos tributarios que, de otra manera, se generarían en cabeza de uno o más obligados tributarios o beneficiarios efectivos, tales como la eliminación, reducción o diferimiento del tributo, el incremento del saldo a favor o de las pérdidas fiscales y la extensión de beneficios o exenciones tributarias.',
            'La Resolución DIAN 000004 de 2020, que desarrolló este procedimiento, define la evasión y la elusión. Evasión es la acción u omisión por medio de la cual el contribuyente oculta ante la administración tributaria la obligación tributaria existente; carece de propósito económico o comercial, pues su único fin es obtener un provecho tributario, y ni siquiera cuenta con un propósito comercial aparente que deba ser refutado por la cláusula general antiabuso. Elusión es la conducta por medio de la cual el contribuyente, a través de diferentes técnicas o procedimientos, evita el nacimiento del hecho que la ley precisa como presupuesto de la obligación tributaria; por ello, una operación es elusiva o abusiva cuando involucra el uso o la implementación de uno o varios actos o negocios jurídicos artificiosos, sin razón o propósito económico o comercial aparente.',
          ],
          table: {
            caption: 'Procedimiento de abuso en materia tributaria (art. 869 ET)',
            headers: ['Paso', 'Contenido', 'Término'],
            rows: [
              ['1. Competencia', 'Funcionario de la Dirección de Gestión de Fiscalización de la correspondiente Dirección Seccional, o quien haga sus veces', 'No aplica'],
              ['2. Emplazamiento especial por abuso', 'Con el contenido mínimo que señala la norma (hechos, operaciones, actos, montos de tributos y sanciones pretendidos)', 'Dentro de los términos de firmeza del art. 714 del ET'],
              ['3. Respuesta del obligado', 'Objeciones por escrito y solicitud de pruebas', '3 meses desde la notificación'],
              ['4. Archivo', 'El funcionario puede ordenar el archivo si valora favorablemente los argumentos y pruebas', 'No aplica'],
              ['5. Solicitud de visto bueno', 'Se solicita al director de la Seccional y al delegado del director de Gestión de Fiscalización', 'Dentro de los 30 días hábiles siguientes'],
              ['6. Respuesta al visto bueno', 'Contestación sobre procedencia o improcedencia', '1 mes (prorrogable por otro mes justificado)'],
              ['7. Efecto del visto bueno', 'Si no se otorga, se archiva el proceso; si se otorga, se puede proferir requerimiento especial o emplazamiento por no declarar incluyendo las glosas del abuso y otros asuntos de fiscalización', 'No aplica'],
            ],
          },
        },
        {
          heading: 'Conexión entre sanciones administrativas y penales',
          paragraphs: [
            'Los mismos hechos pueden generar, simultáneamente, consecuencias administrativas y penales. La omisión del agente retenedor (artículo 402 C.P.) convive con los intereses de mora y las sanciones del Estatuto Tributario; la omisión de activos o la inclusión de pasivos inexistentes (artículo 434A) convive con la sanción por inexactitud (artículo 647-648) liquidada en la liquidación oficial que sirve de base a la petición especial; y la defraudación tributaria (artículo 434B) convive con las sanciones de los artículos 647 y 648, sin perjuicio de otras sanciones como la del artículo 670 por devoluciones improcedentes obtenidas con documentos falsos o fraude (100% del monto devuelto).',
            'La conexión tiene un efecto práctico: las causales de extinción de la acción penal (pagar o corregir) están diseñadas para incentivar el cumplimiento, pero no extinguen las sanciones administrativas a que haya lugar, precisamente porque el non bis in idem no impide la concurrencia de la sanción administrativa y la penal. Igualmente, la petición especial del Director General de la DIAN funciona como filtro de política criminal: la entidad se abstiene de promover la acción penal cuando existe una interpretación razonable del derecho aplicable y los hechos y cifras declarados son completos y verdaderos.',
          ],
          callout: {
            type: 'aviso',
            text: 'Pagar o corregir extingue la acción penal (arts. 402, par.; 434A, par. 2; 434B, par. 2 C.P.), pero NO las sanciones administrativas ni los intereses: el proceso administrativo sigue su curso.',
          },
        },
      ],
      summary: [
        'El Código Penal tipifica tres delitos fiscales en el Título XV (delitos contra la administración pública): omisión del agente retenedor o recaudador (art. 402), omisión de activos o inclusión de pasivos inexistentes (art. 434A) y defraudación o evasión tributaria (art. 434B).',
        'El art. 402 castiga con 48 a 108 meses de prisión y multa del doble de lo no consignado (tope 1.020.000 UVT) la falta de consignación de lo retenido o recaudado dentro de los dos meses siguientes al plazo; se extingue con el pago o compensación con intereses.',
        'El art. 434A sanciona la omisión de activos o la inclusión de pasivos inexistentes desde 5.000 SMLMV, con agravantes de un tercio (desde 7.250) y de la mitad (desde 8.500), previa liquidación oficial y petición especial del Director General de la DIAN.',
        'El art. 434B, residual, sanciona la defraudación o evasión tributaria desde 250 SMLMV (36 a 60 meses de prisión), con agravantes desde 2.500 y desde 8.500 SMLMV; no procede cuando existe interpretación razonable del derecho aplicable.',
        'El abuso en materia tributaria (art. 869 ET) permite recaracterizar o reconfigurar operaciones artificiosas sin propósito económico o comercial aparente, mediante emplazamiento especial por abuso, respuesta de tres meses y visto bueno previo a la expedición del requerimiento especial o del emplazamiento por no declarar.',
        'Las sanciones administrativas y penales concurren por los mismos hechos sin vulnerar el non bis in idem: la extinción de la acción penal por pago o corrección no extingue las sanciones administrativas.',
      ],
      memorize: [
        'Tres delitos fiscales: 402 (omisión del agente retenedor o recaudador), 434A (omisión de activos / pasivos inexistentes) y 434B (defraudación o evasión tributaria).',
        'Art. 402: 2 meses de plazo para consignar; prisión de 48 a 108 meses; multa del doble de lo no consignado, tope 1.020.000 UVT; el pago extingue la acción penal.',
        'Art. 434A: umbral 5.000 SMLMV; agravantes en 7.250 y 8.500 SMLMV (un tercio y la mitad).',
        'Art. 434B: umbral 250 SMLMV; agravantes en 2.500 y 8.500 SMLMV; prisión de 36 a 60 meses.',
        'Abuso (art. 869 ET): recaracterizar o reconfigurar operaciones artificiosas sin propósito económico o comercial aparente; procedimiento con emplazamiento especial, 3 meses de respuesta y visto bueno.',
        'Evasión: ocultar la obligación tributaria existente (no hay propósito comercial). Elusión: evitar el nacimiento del hecho generador con actos artificiosos.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: multa del artículo 402 C.P.',
          paragraphs: [
            'Una sociedad practicó retenciones en la fuente por $200.000.000 en el período y no las consignó dentro de los dos meses siguientes a la fecha fijada por el Gobierno nacional para presentar y pagar la declaración de retención. La obligación continúa sin extinguirse.',
            'Cálculo de la multa: el doble de lo no consignado = 2 x $200.000.000 = $400.000.000. Verificación del tope: 1.020.000 UVT; con la UVT de 2026 ($52.374), el tope equivale a $53.421.480.000, de modo que la multa de $400.000.000 se mantiene. La pena de prisión aplicable es de 48 a 108 meses. Si la sociedad paga o compensa lo adeudado con sus intereses, accede a resolución inhibitoria, preclusión o cesación de procedimiento, sin perjuicio de los intereses y sanciones administrativas.',
          ],
        },
        {
          heading: 'Ejemplo 2: umbrales del artículo 434B C.P.',
          paragraphs: [
            'En una liquidación oficial se determina que un contribuyente omitió ingresos por valor equivalente a 3.000 SMLMV. El supuesto cae en el rango superior a 2.500 SMLMV e inferior a 8.500 SMLMV.',
            'Consecuencia: la pena base de 36 a 60 meses de prisión se incrementa en una tercera parte, es decir, el rango pasa a 48 a 80 meses (36 + 12 = 48; 60 + 20 = 80). Si la omisión hubiera sido de 9.000 SMLMV (más de 8.500), el incremento sería de la mitad y el rango sería de 54 a 90 meses (36 + 18 = 54; 60 + 30 = 90). En ambos casos la acción penal requiere petición especial del Director General de la DIAN y se extingue si el contribuyente corrige dentro del término legal y paga impuestos, sanciones e intereses.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que el pago de la obligación tributaria extingue también las sanciones administrativas.',
          correction: 'Los parágrafos de los artículos 402, 434A y 434B señalan expresamente que la extinción de la acción penal y la resolución inhibitoria, preclusión o cesación de procedimiento operan "sin perjuicio de las sanciones administrativas a que haya lugar".',
        },
        {
          mistake: 'Aplicar el artículo 434B del Código Penal como regla principal.',
          correction: 'El artículo 434B es residual: se aplica "siempre que la conducta no constituya otro delito sancionado con pena mayor". Además, requiere que el valor defraudado sea igual o superior a 250 SMLMV, definido por liquidación oficial.',
        },
        {
          mistake: 'Confundir la elusión con la evasión.',
          correction: 'La evasión oculta una obligación tributaria ya existente y carece por completo de propósito comercial aparente; la elusión evita el nacimiento del hecho generador mediante técnicas o procedimientos que pueden constituir actos artificiosos, supuesto en el que la cláusula del art. 869 del ET permite la recaracterización.',
        },
        {
          mistake: 'Sostener que la recaracterización por abuso puede hacerse sin agotar el procedimiento especial.',
          correction: 'El art. 869 del ET exige el emplazamiento especial por abuso (dentro del término de firmeza), el término de tres meses para la respuesta del obligado, la valoración de pruebas con posibilidad de archivo y el visto bueno del director de la Seccional y del delegado del Director de Gestión de Fiscalización antes de proferir el requerimiento especial o el emplazamiento por no declarar.',
        },
      ],
      norms: [
        {
          norm: 'Código Penal (Ley 599 de 2000)',
          article: 'Artículo 402',
          status: 'vigente',
          note: 'Omisión del agente retenedor o recaudador: prisión de 48 a 108 meses y multa del doble de lo no consignado (tope 1.020.000 UVT); parágrafo con la causal de extinción. Texto transcrito en el material, págs. 437-438.',
        },
        {
          norm: 'Código Penal (Ley 599 de 2000)',
          article: 'Artículo 434A',
          status: 'vigente',
          note: 'Omisión de activos o inclusión de pasivos inexistentes: umbral de 5.000 SMLMV, agravantes en 7.250 y 8.500 SMLMV, petición especial del Director General de la DIAN y extinción por corrección y pago. Texto transcrito en el material, págs. 440-441.',
        },
        {
          norm: 'Código Penal (Ley 599 de 2000)',
          article: 'Artículo 434B',
          status: 'vigente',
          note: 'Defraudación o evasión tributaria: tipo residual, umbral de 250 SMLMV, penas de 36 a 60 meses con agravantes desde 2.500 y 8.500 SMLMV, petición especial y extinción por corrección y pago. Texto transcrito en el material, pág. 442.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 869',
          status: 'vigente',
          note: 'Abuso en materia tributaria: recaracterización o reconfiguración de operaciones y desconocimiento de sus efectos; parágrafo 1 con la definición. Texto transcrito en el material, págs. 455-456.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 670',
          status: 'vigente',
          note: 'Sanción por devoluciones o compensaciones improcedentes: 100% del monto devuelto o compensado de forma improcedente cuando se utilizan documentos falsos o fraude, con responsabilidad solidaria del contador o revisor fiscal y del representante legal. Material, págs. 434-435.',
        },
        {
          norm: 'Estatuto Tributario (Decreto 624 de 1989)',
          article: 'Artículo 671',
          status: 'vigente',
          note: 'Compras o gastos a proveedores ficticios o insolventes: no son deducibles ni dan derecho a impuestos descontables; la calificación de proveedor ficticio se levanta pasados cinco años. Material, págs. 435-436.',
        },
        {
          norm: 'Resolución DIAN 000004 de 2020',
          status: 'verificar',
          note: 'Resolución que desarrolla el procedimiento de abuso en materia tributaria y en la que se definen la evasión y la elusión (material, pág. 456). Conviene confirmar su vigencia y sus modificaciones en el repositorio oficial de la DIAN.',
        },
        {
          norm: 'Ley 2010 de 2019',
          article: 'Artículo 117',
          status: 'verificar',
          note: 'Modificación del término de firmeza de las declaraciones con pérdidas fiscales y de las sujetas al régimen de precios de transferencia, asociada al control de la evasión.',
        },
      ],
      links: [
        { label: 'Ley 599 de 2000 — Código Penal (arts. 402, 434A y 434B)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000_pr012.html' },
        { label: 'Estatuto Tributario — art. 869 (abuso en materia tributaria)', url: 'https://estatuto.co/libro/5/v-titulo-viii' },
        { label: 'DIAN — Proveedores ficticios', url: 'https://www.dian.gov.co/Proveedores_Ficticios/Paginas/default.aspx' },
        { label: 'DIAN — Normatividad y resoluciones', url: 'https://www.dian.gov.co/normatividad/Paginas/Resoluciones.aspx' },
      ],
      mindmap: {
        root: 'Penalización de la evasión',
        branches: [
          { label: 'Delitos fiscales', children: ['402: omisión del agente retenedor o recaudador', '434A: omisión de activos / pasivos inexistentes', '434B: defraudación o evasión tributaria (residual)'] },
          { label: 'Elementos comunes', children: ['Petición especial del Director General de la DIAN', 'Interpretación razonable del derecho aplicable', 'Extinción por corrección y pago', 'No extingue sanciones administrativas'] },
          { label: 'Umbrales', children: ['402: 2 meses y doble de lo no consignado', '434A: 5.000 / 7.250 / 8.500 SMLMV', '434B: 250 / 2.500 / 8.500 SMLMV'] },
          { label: 'Abuso (art. 869 ET)', children: ['Recaracterizar o reconfigurar', 'Actos artificiosos sin propósito económico', 'Emplazamiento especial (3 meses)', 'Visto bueno previo'] },
          { label: 'Evasión, elusión y abuso', children: ['Evasión: ocultar la obligación', 'Elusión: evitar el hecho generador', 'Abuso: actos artificiosos con provecho tributario'] },
        ],
      },
      mindmapText:
        'El Código Penal tipifica tres delitos fiscales: la omisión del agente retenedor o recaudador (art. 402, prisión de 48 a 108 meses y multa del doble de lo no consignado con tope de 1.020.000 UVT), la omisión de activos o inclusión de pasivos inexistentes (art. 434A, umbral de 5.000 SMLMV con agravantes en 7.250 y 8.500) y la defraudación o evasión tributaria (art. 434B, residual, umbral de 250 SMLMV con agravantes en 2.500 y 8.500). Todos requieren petición especial del Director General de la DIAN, admiten la interpretación razonable del derecho como causa de abstención y se extinguen por corrección con pago, sin perjuicio de las sanciones administrativas; la concurrencia de sanciones administrativas y penales no vulnera el non bis in idem. El abuso en materia tributaria (art. 869 ET) permite recaracterizar o reconfigurar operaciones artificiosas sin propósito económico o comercial aparente, mediante emplazamiento especial por abuso, respuesta de tres meses, posibilidad de archivo y visto bueno previo a la expedición del requerimiento especial.',
      source: [
        { doc: 'material', pages: 'págs. 437-439 (delitos fiscales, non bis in idem y art. 402 del Código Penal con su tabla de elementos)' },
        { doc: 'material', pages: 'págs. 440-442 (arts. 434A y 434B del Código Penal, umbrales en SMLMV y agravantes)' },
        { doc: 'material', pages: 'págs. 434-436 (sanciones por devolución improcedente, art. 670, y proveedores ficticios, art. 671)' },
        { doc: 'material', pages: 'págs. 455-457 (art. 869 del ET, procedimiento de abuso y definiciones de evasión y elusión de la Resolución DIAN 000004 de 2020)' },
      ],
    },
  ],
  quizId: 'q-m08',
}
