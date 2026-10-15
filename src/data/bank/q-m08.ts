import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 8 (i03 imposición de sanciones)
// Fuente principal: MATERIAL TOTAL DIAN - FISCALIZACION, Unidad 7
// (págs. 407-442) y anexos 09 (págs. 455-457).
// wrong[] está alineado con options[]: la posición de la respuesta
// correcta contiene la razón por la que esa opción es la correcta.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m08-001',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Principio de legalidad',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'En virtud del principio de legalidad y de la reserva de ley que rigen el régimen sancionatorio tributario, la sanción por no declarar del artículo 643 del Estatuto Tributario no puede aplicarse…',
    options: [
      '…a la declaración de renta de las sociedades extranjeras.',
      '…al impuesto CREE ni al impuesto unificado bajo el régimen simple de tributación (SIMPLE), porque no están descritos en sus numerales y la analogía está prohibida.',
      '…a los agentes retenedores, porque la norma solo vincula a los contribuyentes.',
      '…cuando el obligado sea una entidad sin ánimo de lucro.',
    ],
    correct: 1,
    justification:
      'El artículo 643 del ET tipifica diez declaraciones (renta, IVA e impuesto nacional al consumo, retenciones en la fuente, timbre, gasolina y ACPM o carbono, gravamen a los movimientos financieros, ingresos y patrimonio, activos en el exterior, riqueza y monotributo). La tipificación cerrada y la prohibición de analogía (reserva de ley, artículo 29 de la Constitución; Sentencia C-412 de 2015) impiden extenderla al CREE y al SIMPLE: la remisión en blanco del artículo 916 del ET no es lo suficientemente específica.',
    wrong: [
      'Las sociedades extranjeras obligadas a declarar renta sí están cubiertas: el numeral 1 del artículo 643 del ET sanciona la omisión de esa declaración sin distinguir la nacionalidad del sujeto.',
      'Opción correcta: la reserva de ley y la prohibición de analogía impiden extender el artículo 643 del ET al CREE y al SIMPLE, que no están tipificados en sus numerales.',
      'Los agentes retenedores están expresamente comprendidos: el numeral 3 del artículo 643 del ET cubre la omisión de la declaración de retenciones en la fuente.',
      'La naturaleza de la entidad no la excluye: lo que importa es la existencia de la obligación de declarar y que la declaración esté tipificada en la norma.',
    ],
    source: 'Estatuto Tributario, artículos 643 y 916 (MATERIAL TOTAL, págs. 410-411)',
  },
  {
    id: 'q-m08-002',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Clasificación de las sanciones',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'De las siguientes sanciones, ¿cuál es autoliquidada o voluntaria, esto es, liquidada por el propio obligado en la declaración privada o en el recibo de pago?',
    options: [
      'La sanción por no declarar (artículo 643 del ET).',
      'La sanción por extemporaneidad (artículo 641 del ET).',
      'La sanción por inexactitud (artículos 647 y 648 del ET).',
      'La sanción a administradores y representantes legales (artículo 658-1 del ET).',
    ],
    correct: 1,
    justification:
      'Son autoliquidadas las sanciones que el obligado determina en la declaración privada o en el recibo de pago: los intereses de mora (artículo 634, recibo de pago) y las sanciones de los artículos 641, 642, 644 y 645 (declaración privada), además del artículo 651 cuando se paga con recibo de pago. Las demás opciones corresponden a sanciones provocadas, que impone la DIAN.',
    wrong: [
      'La sanción por no declarar es provocada: se impone en resolución sanción, previo traslado de cargos, y no puede ser liquidada por el obligado.',
      'Opción correcta: la sanción por extemporaneidad del artículo 641 del ET se autoliquida en la propia declaración privada.',
      'La inexactitud se liquida en la liquidación oficial de revisión, que es un acto de la Administración.',
      'La sanción del artículo 658-1 la impone la DIAN en resolución sanción: equivale al 20% de la sanción del contribuyente, sin superar 4.100 UVT, y no puede ser sufragada por la representada.',
    ],
    source: 'MATERIAL TOTAL, págs. 411-414 (Tablas 1 y 2: sanciones autoliquidadas y provocadas)',
  },
  {
    id: 'q-m08-003',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Sanción mínima y UVT',
    difficulty: 'basica',
    kind: 'conceptual',
    statement: 'Sobre la sanción mínima del artículo 639 del Estatuto Tributario, ¿cuál afirmación es correcta?',
    options: [
      'Es de 20 UVT y no aplica a las sanciones reducidas.',
      'Es de 10 UVT, aplica también a las sanciones reducidas, y se exceptúan los intereses de mora y las sanciones de los numerales 1 y 3 del artículo 658-3.',
      'Es de 10 UVT y se liquida con la UVT vigente al momento de la imposición de la sanción.',
      'Es de 5 UVT para personas naturales y de 10 UVT para sociedades.',
    ],
    correct: 1,
    justification:
      'El artículo 639 del ET fija en 10 UVT el valor mínimo de cualquier sanción, incluidas las reducidas, ya sea que las liquide el obligado o la Administración; la norma exceptúa los intereses de mora y los numerales 1 y 3 del artículo 658-3. La UVT aplicable es la vigente al momento en que se comete el acto o conducta sancionable (doctrina de la DIAN): con la UVT de 2026 ($52.374), la sanción mínima equivale a $523.740.',
    wrong: [
      'Las 20 UVT son la sanción mínima de las entidades autorizadas para recaudar (artículo 676-3 del ET), y la mínima de 10 UVT sí se aplica a las sanciones reducidas.',
      'Opción correcta: la sanción mínima es de 10 UVT (artículo 639 del ET), aplica también a las sanciones reducidas y tiene las excepciones señaladas.',
      'Se toma la UVT del momento de la conducta sancionable, no la de la fecha del acto que impone la sanción.',
      'No hay mínimos diferenciados por tipo de sujeto: la regla es de 10 UVT para cualquier sanción.',
    ],
    source: 'Estatuto Tributario, artículos 639 y 676-3 (MATERIAL TOTAL, págs. 417-418)',
  },
  {
    id: 'q-m08-004',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Sanción por extemporaneidad',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Un contribuyente presentó su declaración de renta cinco meses después del vencimiento del plazo. El impuesto a cargo es de $80.000.000. ¿Cuál es el valor de la sanción plena por extemporaneidad, sin reducciones?',
    options: [
      '$4.000.000, equivalente al 5% del impuesto.',
      '$20.000.000, equivalente al 5% por cada mes o fracción de retardo sobre el impuesto a cargo: 5 x 5% = 25% x $80.000.000.',
      '$80.000.000, equivalente al 100% del impuesto.',
      '$40.000.000, equivalente al 50% del impuesto.',
    ],
    correct: 1,
    justification:
      'El artículo 641 del ET liquida la sanción al 5% del impuesto a cargo o retención por cada mes o fracción de mes calendario de retardo, sin exceder del 100%: 5 meses x 5% = 25%; 25% x $80.000.000 = $20.000.000. Sobre ese valor proceden las reducciones del artículo 640 del ET (al 50% con dos años de buen comportamiento y sin pliego de cargos, requerimiento especial o emplazamiento previo: $10.000.000).',
    wrong: [
      'El 5% se aplica por cada mes de retardo, no una sola vez: se omitió multiplicar por los cinco meses.',
      'Opción correcta: 5% x 5 meses = 25% del impuesto a cargo: 25% x $80.000.000 = $20.000.000.',
      'El 100% es el tope máximo de la sanción, no su valor: con cinco meses de retardo la tarifa acumulada es del 25%.',
      'El 50% corresponde a la reducción del artículo 640 del ET, no a la sanción plena.',
    ],
    source: 'Estatuto Tributario, artículo 641 (MATERIAL TOTAL, pág. 418)',
  },
  {
    id: 'q-m08-005',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Extemporaneidad posterior al emplazamiento',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Una sociedad no declaró el impuesto sobre las ventas de un período. La DIAN la emplazó y, 24 meses después del vencimiento del plazo, la sociedad presentó la declaración con un impuesto a cargo de $50.000.000. ¿Cuál es la sanción por extemporaneidad?',
    options: [
      '$60.000.000.',
      '$100.000.000, porque al ser posterior al emplazamiento la tarifa es del 10% mensual, con tope del 200% del impuesto.',
      '$50.000.000.',
      '$120.000.000.',
    ],
    correct: 1,
    justification:
      'Al presentarse la declaración con posterioridad al emplazamiento aplica el artículo 642 del ET: 10% del impuesto a cargo por cada mes o fracción de retardo, sin exceder del 200%. La tarifa acumulada sería 24 x 10% = 240%, que supera el tope; por tanto la sanción es del 200% x $50.000.000 = $100.000.000.',
    wrong: [
      'Corresponde a 12 meses de retardo al 10%, cuando el retardo fue de 24 meses.',
      'Opción correcta: 10% x 24 meses = 240%, limitado al tope del 200% del impuesto: $100.000.000.',
      'Los $50.000.000 equivaldrían al 100% del impuesto, que es el tope del artículo 641 del ET, no del artículo 642.',
      'Los $120.000.000 resultarían de aplicar el 240% x $50.000.000 sin respetar el tope del 200%.',
    ],
    source: 'Estatuto Tributario, artículo 642 (MATERIAL TOTAL, págs. 418-419)',
  },
  {
    id: 'q-m08-006',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Sanción por inexactitud',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'En una liquidación oficial de revisión la DIAN determinó un saldo a pagar de $312.000.000, mientras el contribuyente había declarado $250.000.000. ¿A cuánto asciende la sanción por inexactitud, sin reducciones?',
    options: [
      '$250.000.000.',
      '$62.000.000, equivalente al 100% de la diferencia entre el saldo determinado oficialmente y el declarado.',
      '$124.000.000.',
      '$312.000.000.',
    ],
    correct: 1,
    justification:
      'El artículo 647 del ET fija la sanción por inexactitud en el 100% de la diferencia entre el saldo a pagar o saldo a favor determinado en la liquidación oficial y el declarado: $312.000.000 - $250.000.000 = $62.000.000. Antes de la Ley 1819 de 2016 la tarifa era del 160% ($99.200.000), pero por favorabilidad se reliquidan al 100%. La sanción se adiciona al mayor impuesto, que se paga con intereses de mora.',
    wrong: [
      'Tomar el saldo determinado como sanción desconoce la base legal: la sanción es el 100% de la diferencia, no del saldo oficial.',
      'Opción correcta: 100% de la diferencia ($312.000.000 - $250.000.000) = $62.000.000.',
      'El 200% correspondería a duplicar el resultado; la tarifa del artículo 647 del ET es del 100% de la diferencia.',
      'El valor del saldo oficial no es la sanción: es uno de los términos de comparación de la base.',
    ],
    source: 'Estatuto Tributario, artículos 647 y 648 (MATERIAL TOTAL, págs. 425-426)',
  },
  {
    id: 'q-m08-007',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Sanción por no informar',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Un obligado suministró de forma extemporánea, antes de que se profiera pliego de cargos, información exógena por $800.000.000. Si aplica la reducción del artículo 651 del Estatuto Tributario, ¿cuál es el valor a pagar por sanción?',
    options: [
      '$24.000.000.',
      '$4.800.000, porque la sanción plena es el 3% de $800.000.000 ($24.000.000) y, al subsanar antes del pliego de cargos, se reduce al 20%.',
      '$12.000.000.',
      '$40.000.000.',
    ],
    correct: 1,
    justification:
      'La información se suministró de forma extemporánea, luego el criterio aplicable es el 3% (literal c del numeral 1 del artículo 651 del ET): 3% x $800.000.000 = $24.000.000 de sanción plena. Al subsanar voluntariamente antes de que se profiera pliego de cargos, el parágrafo reduce la sanción al 20%: 20% x $24.000.000 = $4.800.000, con un ahorro de $19.200.000. El pago se realiza con el recibo de pago 490, concepto 71, previo memorial de aceptación.',
    wrong: [
      'Los $24.000.000 son la sanción plena: falta aplicar la reducción al 20% del parágrafo del artículo 651 del ET.',
      'Opción correcta: sanción plena del 3% ($24.000.000) reducida al 20% por subsanar antes del pliego de cargos: $4.800.000.',
      'El 50% corresponde a la reducción cuando la omisión se subsana antes de que se notifique la imposición de la sanción, no antes del pliego de cargos.',
      'El 5% es el criterio para la información no suministrada, no para la información suministrada de forma extemporánea.',
    ],
    source: 'Estatuto Tributario, artículo 651 (MATERIAL TOTAL, págs. 421-423 y 435-436)',
  },
  {
    id: 'q-m08-008',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Sanción por corrección',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Con ocasión del emplazamiento para corregir, un contribuyente corrige su declaración de renta y determina un mayor valor a pagar de $90.000.000. ¿A cuánto asciende la sanción por corrección?',
    options: [
      '$9.000.000 (10%).',
      '$18.000.000 (20%), porque la corrección se realiza con ocasión del emplazamiento para corregir.',
      '$45.000.000 (50%).',
      'No hay sanción cuando la corrección la provoca la propia DIAN.',
    ],
    correct: 1,
    justification:
      'El numeral 2 del artículo 644 del ET eleva al 20% la sanción por corrección cuando esta se realiza con ocasión del emplazamiento para corregir o con posterioridad a la notificación del requerimiento especial o del pliego de cargos: 20% x $90.000.000 = $18.000.000. El 10% del numeral 1 aplica a la corrección voluntaria que aumenta el valor a pagar o disminuye el saldo a favor.',
    wrong: [
      'El 10% solo procede en la corrección voluntaria, sin actuación previa de la Administración.',
      'Opción correcta: la corrección con ocasión del emplazamiento se sanciona al 20% del mayor valor a pagar: 20% x $90.000.000 = $18.000.000.',
      'El 50% no corresponde a la sanción por corrección: los porcentajes del artículo 644 del ET son 10% y 20%.',
      'La sanción se causa precisamente porque el obligado corrige; lo que cambia con el emplazamiento es su tarifa, que pasa al 20%.',
    ],
    source: 'Estatuto Tributario, artículos 644 y 588 (MATERIAL TOTAL, págs. 430-431)',
  },
  {
    id: 'q-m08-009',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Reducción por principios',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement: 'Sobre la reducción de sanciones del artículo 640 del Estatuto Tributario, ¿cuál afirmación es correcta?',
    options: [
      'Cuando la sanción la liquida el obligado, se reduce al 80% con dos años de buen comportamiento; cuando la determina la DIAN, al 60%.',
      'Cuando la sanción la liquida el obligado, se reduce al 50% si no cometió la misma conducta en los dos años anteriores y no hubo pliego de cargos, requerimiento especial o emplazamiento previo por no declarar, y al 75% con solo un año; cuando la determina la DIAN, al 50% con cuatro años y al 75% con dos, con aceptación de la sanción y subsanación de la infracción.',
      'La reducción es siempre del 50% y no depende de períodos de buen comportamiento.',
      'La reducción solo aplica a las sanciones que determina la DIAN, nunca a las autoliquidadas.',
    ],
    correct: 1,
    justification:
      'El artículo 640 del ET distingue: numerales 1 y 2 (sanción liquidada por el contribuyente, agente retenedor, responsable o declarante): se reduce al 50% con dos años sin la misma conducta y sin pliego de cargos, requerimiento especial o emplazamiento previo por no declarar, y al 75% cuando solo se exige un año. Numerales 3 y 4 (sanción propuesta o determinada por la DIAN): al 50% con cuatro años y sanción en firme, y al 75% con dos años, en ambos casos con aceptación de la sanción y subsanación de la infracción.',
    wrong: [
      'Los porcentajes del artículo 640 del ET son 50% y 75%, no 80% ni 60%; a mayor tiempo de buen comportamiento corresponde mayor reducción.',
      'Opción correcta: los numerales 1 y 2 (liquida el obligado) y 3 y 4 (determina la DIAN) fijan reducciones al 50% y al 75% según los períodos de buen comportamiento.',
      'La reducción depende de los períodos de buen comportamiento y de quién liquida la sanción: por eso la norma tiene cuatro numerales.',
      'El artículo 640 del ET regula precisamente la reducción de las sanciones que debe liquidar el propio obligado (numerales 1 y 2).',
    ],
    source: 'Estatuto Tributario, artículo 640 (MATERIAL TOTAL, págs. 426-427)',
  },
  {
    id: 'q-m08-010',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Reincidencia',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Una sociedad fue sancionada por no suministrar información mediante resolución que quedó en firme el 20 de mayo de 2025. En agosto de 2026 incurre de nuevo en la misma conducta y la DIAN propone una sanción plena de $40.000.000. ¿Cuál es el valor de la sanción?',
    options: [
      '$40.000.000, porque la reincidencia solo aplica en materia penal.',
      '$80.000.000, porque hay reincidencia: la misma infracción se cometió dentro de los dos años siguientes a la firmeza del acto sancionatorio y el monto se aumenta en un 100%.',
      '$20.000.000, porque la reincidencia reduce la sanción a la mitad.',
      '$60.000.000, porque el incremento por reincidencia es de una tercera parte.',
    ],
    correct: 1,
    justification:
      'El parágrafo 2 del artículo 640 del ET define la reincidencia: el sancionado, por acto administrativo en firme, comete una nueva infracción del mismo tipo dentro de los dos años siguientes al día en que cobró firmeza el acto sancionatorio, con excepción de la sanción del artículo 652 y de las que deban ser liquidadas por el contribuyente, responsable, agente retenedor o declarante. Agosto de 2026 está dentro de los dos años siguientes al 20 de mayo de 2025. Cálculo: $40.000.000 más el 100% = $80.000.000.',
    wrong: [
      'La reincidencia es una circunstancia agravante del régimen sancionatorio administrativo (artículo 640, parágrafo 2, del ET; Concepto DIAN 046589 del 18 de mayo de 2000), independiente de la responsabilidad penal.',
      'Opción correcta: la nueva conducta se cometió dentro de los dos años siguientes a la firmeza (20 de mayo de 2025) y el monto se aumenta en un 100%: $80.000.000.',
      'El efecto es el contrario: la reincidencia aumenta la sanción en un 100%.',
      'El incremento de una tercera parte corresponde a los agravantes penales de los artículos 434A y 434B del Código Penal, no a la reincidencia tributaria.',
    ],
    source: 'Estatuto Tributario, artículo 640, parágrafo 2 (MATERIAL TOTAL, pág. 420)',
  },
  {
    id: 'q-m08-011',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Reducción por procedimiento',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'La reducción del 40% de las sanciones derivadas de la liquidación provisional (artículo 764-3 del ET) exige aceptar y pagar dentro del mes siguiente a la notificación y NO aplica a…',
    options: [
      '…las sanciones por inexactitud.',
      '…las sanciones generadas por la omisión o corrección de las declaraciones tributarias, ni a las derivadas del incumplimiento de obligaciones formales que puedan subsanarse voluntariamente antes de proferido el pliego de cargos.',
      '…las sanciones por no informar cuando la información ya se suministró.',
      '…ninguna sanción: es una reducción general e incondicionada.',
    ],
    correct: 1,
    justification:
      'El artículo 764-3 del ET consagra la reducción del 40% con dos exclusiones expresas: no aplica a las sanciones generadas por la omisión o corrección de las declaraciones tributarias, ni a las derivadas del incumplimiento de obligaciones formales que puedan ser subsanadas por el contribuyente en forma voluntaria antes de proferido el pliego de cargos. La reducción puede acumularse con otras, siempre que no exista normativa en contrario.',
    wrong: [
      'La inexactitud es una sanción típica derivada de la liquidación provisional y accede a la reducción si se acepta y paga en el término.',
      'Opción correcta: la reducción del 40% del artículo 764-3 del ET no aplica a las sanciones por omisión o corrección de declaraciones ni a las obligaciones formales subsanables antes del pliego de cargos.',
      'La exclusión se refiere a las obligaciones formales subsanables antes del pliego de cargos, no a todas las sanciones por no informar.',
      'La reducción tiene requisitos (aceptación y pago en el mes siguiente) y exclusiones expresas.',
    ],
    source: 'Estatuto Tributario, artículo 764-3 (MATERIAL TOTAL, pág. 429)',
  },
  {
    id: 'q-m08-012',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Favorabilidad',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'A un contribuyente se le impuso sanción por inexactitud del 160% sobre una diferencia de $120.000.000, antes de la Ley 1819 de 2016. Aplicando el principio de favorabilidad, ¿cuál es el valor de la sanción?',
    options: [
      '$192.000.000, porque se mantiene la tarifa del 160% vigente al momento de la conducta.',
      '$120.000.000, porque la ley posterior más favorable reduce la tarifa al 100%, con un ahorro de $72.000.000.',
      '$60.000.000, porque la favorabilidad reduce la sanción a la mitad.',
      '$72.000.000, equivalente al ahorro obtenido.',
    ],
    correct: 1,
    justification:
      'El parágrafo 5 del artículo 640 del ET permite aplicar la ley permisiva o favorable aun cuando sea posterior, y la jurisprudencia (Consejo de Estado, Sentencia 23403 del 12 de diciembre de 2018, M.P. Milton Chaves García) la aplica de oficio o a solicitud de parte. Con la Ley 1819 de 2016 la tarifa del artículo 647 del ET pasó del 160% al 100%: 100% x $120.000.000 = $120.000.000. La sanción anterior era de $192.000.000 (160% x $120.000.000); el ahorro es de $72.000.000.',
    wrong: [
      'Mantener la tarifa del 160% desconoce la favorabilidad: la ley posterior más benigna se aplica en materia sancionatoria.',
      'Opción correcta: por favorabilidad la tarifa pasa del 160% al 100%: 100% x $120.000.000 = $120.000.000.',
      'La favorabilidad no fija la sanción en la mitad; reduce la tarifa del 160% al 100% del texto vigente del artículo 647 del ET.',
      'El ahorro es la diferencia entre $192.000.000 y $120.000.000, no el valor de la sanción.',
    ],
    source: 'Estatuto Tributario, artículos 640 (parágrafo 5) y 647 (MATERIAL TOTAL, págs. 424-426)',
  },
  {
    id: 'q-m08-013',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Delitos fiscales',
    difficulty: 'avanzada',
    kind: 'conceptual',
    statement: 'Sobre la omisión del agente retenedor o recaudador (artículo 402 del Código Penal), ¿cuál afirmación es correcta?',
    options: [
      'La pena es de prisión de 36 a 60 meses y el pago de lo adeudado extingue también las sanciones administrativas.',
      'Incurre en prisión de 48 a 108 meses y multa equivalente al doble de lo no consignado (sin superar 1.020.000 UVT) quien, dentro de los dos meses siguientes a la fecha fijada por el Gobierno, no consigna las sumas retenidas o recaudadas; el pago o compensación con intereses da lugar a resolución inhibitoria, preclusión o cesación de procedimiento, sin perjuicio de las sanciones administrativas.',
      'Solo se configura si el monto no consignado supera 5.000 SMLMV.',
      'La acción penal requiere sentencia previa de la jurisdicción de lo contencioso administrativo que anule la declaración.',
    ],
    correct: 1,
    justification:
      'El artículo 402 del Código Penal castiga con prisión de 48 a 108 meses y multa del doble de lo no consignado (tope 1.020.000 UVT) la falta de consignación de retenciones o recaudos dentro de los dos meses siguientes a la fecha fijada por el Gobierno, y se extiende al responsable de IVA o del impuesto nacional al consumo. Su parágrafo permite la resolución inhibitoria, la preclusión o la cesación de procedimiento cuando se extingue la obligación por pago o compensación con intereses, sin perjuicio de las sanciones administrativas.',
    wrong: [
      'La pena de 36 a 60 meses es la del artículo 434B del Código Penal; además, el pago extingue la acción penal pero no las sanciones administrativas, como lo advierte el propio parágrafo.',
      'Opción correcta: prisión de 48 a 108 meses y multa del doble de lo no consignado (tope 1.020.000 UVT), con extinción de la acción penal por pago o compensación con intereses, sin perjuicio de las sanciones administrativas.',
      'El umbral de 5.000 SMLMV corresponde al artículo 434A del Código Penal (omisión de activos o inclusión de pasivos inexistentes), no al artículo 402.',
      'No se exige pronunciamiento previo de la jurisdicción contenciosa: en los delitos de los artículos 434A y 434B la acción penal se activa con la petición especial del Director General de la DIAN sobre la base de la liquidación oficial.',
    ],
    source: 'Código Penal, artículo 402 (MATERIAL TOTAL, págs. 437-439)',
  },
  {
    id: 'q-m08-014',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Abuso en materia tributaria',
    difficulty: 'avanzada',
    kind: 'conceptual',
    statement:
      'Según el artículo 869 del Estatuto Tributario y el procedimiento de abuso en materia tributaria, ¿cuál afirmación es correcta?',
    options: [
      'La Administración puede desconocer los efectos de una operación abusiva, pero solo después de proferir el requerimiento especial.',
      'Constituye abuso el uso de actos o negocios jurídicos artificiosos, sin razón o propósito económico o comercial aparente, con el fin de obtener provecho tributario; antes de proferir el requerimiento especial o el emplazamiento por no declarar se debe surtir el emplazamiento especial por abuso, con tres meses para responder y visto bueno previo.',
      'El abuso se configura únicamente cuando existe intención subjetiva de evadir, que la DIAN debe probar plenamente.',
      'El emplazamiento especial por abuso se notifica después de la liquidación oficial y solo para efectos de la sanción.',
    ],
    correct: 1,
    justification:
      'El artículo 869 del ET define el abuso como el uso o implementación de uno o varios actos o negocios jurídicos artificiosos, sin razón o propósito económico o comercial aparente, con el fin de obtener provecho tributario, independientemente de cualquier intención subjetiva adicional, y faculta a la Administración para recaracterizar o reconfigurar las operaciones y desconocer sus efectos. El procedimiento exige el emplazamiento especial por abuso (dentro de los términos de firmeza del artículo 714 del ET), la respuesta del obligado dentro de los tres meses, la valoración de pruebas con posibilidad de archivo y el visto bueno del director de la Seccional y del delegado del Director de Gestión de Fiscalización antes del requerimiento especial o del emplazamiento por no declarar. La Resolución DIAN 000004 de 2020 distingue la evasión (ocultar la obligación existente, sin propósito comercial) y la elusión (evitar el nacimiento del hecho generador).',
    wrong: [
      'El emplazamiento especial por abuso es precisamente el acto que debe anteceder al requerimiento especial o al emplazamiento por no declarar.',
      'Opción correcta: el abuso se define por actos o negocios artificiosos sin propósito económico o comercial aparente y su procedimiento exige emplazamiento especial, tres meses de respuesta y visto bueno previo.',
      'La norma aclara que el abuso se configura independientemente de cualquier intención subjetiva adicional: no se exige probar el ánimo de evadir.',
      'El emplazamiento especial es previo, no posterior a la liquidación: es la garantía de contradicción específica del procedimiento de abuso.',
    ],
    source: 'Estatuto Tributario, artículo 869; Resolución DIAN 000004 de 2020 (MATERIAL TOTAL, anexos, págs. 455-457)',
  },
]
