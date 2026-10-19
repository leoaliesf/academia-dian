import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 6 (i10 fiscalización y liquidación)
// Fuente principal: MATERIAL TOTAL DIAN - FISCALIZACION, Unidad 8
// (págs. 443-450) y anexos 09 (págs. 451-462); TACI Unidad 2.
// wrong[] está alineado con options[]: la posición de la respuesta
// correcta contiene la razón por la que esa opción es la correcta.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m06-001',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Facultades de fiscalización',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'El artículo 683 del Estatuto Tributario ordena a los funcionarios de la DIAN actuar con relevante espíritu de justicia en el ejercicio de las facultades de fiscalización. Según esa norma, el alcance de tal mandato es que…',
    options: [
      '…la DIAN puede condonar total o parcialmente las sanciones cuando la equidad lo aconseje.',
      '…el Estado no aspira a que al contribuyente se le exija más de aquello con lo que la misma ley ha querido que coadyuve a las cargas públicas.',
      '…las actuaciones de fiscalización requieren autorización previa del juez para practicar visitas y cruces de información.',
      '…el funcionario puede inaplicar la ley cuando su aplicación resulte manifiestamente injusta en un caso concreto.',
    ],
    correct: 1,
    justification:
      'El artículo 683 del ET exige a los funcionarios actuar con relevante espíritu de justicia y señala expresamente que el Estado no aspira a que al contribuyente se le exija más de aquello con lo que la misma ley ha querido que coadyuve a las cargas públicas. Es un criterio de aplicación de las facultades de fiscalización, no una habilitación para desconocer la ley.',
    wrong: [
      'La condonación de sanciones no procede por equidad: las sanciones solo se reducen o extinguen en los casos y con los requisitos que la ley señala.',
      'Opción correcta: el artículo 683 del ET exige actuar con relevante espíritu de justicia y precisa que el Estado no aspira a exigir más de aquello con lo que la misma ley ha querido que el contribuyente coadyuve a las cargas públicas.',
      'Las facultades de fiscalización del artículo 684 del ET se ejercen sin autorización judicial previa; la inspección tributaria y la visita se practican con las formalidades de ley, no con orden de juez.',
      'El funcionario no puede inaplicar la ley por justicia: el espíritu de justicia del artículo 683 orienta la actuación dentro de la ley, no habilita su desconocimiento.',
    ],
    source: 'Estatuto Tributario, artículos 683 y 684 (MATERIAL TOTAL, pág. 409)',
  },
  {
    id: 'q-m06-002',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Actuaciones de verificación y control',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'De acuerdo con los artículos 684-1 a 684-4 del Estatuto Tributario, dentro de las actuaciones de control que puede adelantar la DIAN se encuentran…',
    options: [
      '…únicamente la revisión de la declaración de renta de los tres últimos períodos gravables, porque la firmeza de las declaraciones impide a la DIAN revisar cualquier período anterior.',
      '…la verificación y cruce de información con terceros y otras administraciones, el control del cumplimiento de las obligaciones formales y sustanciales, la verificación de los agentes de retención y percepción y de las entidades autorizadas para recaudar.',
      '…solo las actuaciones que se ordenen mediante resolución motivada del Director General de la DIAN, pues sin ese acto las verificaciones carecen de fuerza vinculante.',
      '…exclusivamente la inspección tributaria y la visita al domicilio, con exclusión de los cruces de información, pues estos últimos requerirían autorización judicial previa.',
    ],
    correct: 1,
    justification:
      'Los artículos 684-1 a 684-4 del ET consagran la facultad de verificación y cruce de información, la verificación del cumplimiento de las obligaciones formales y sustanciales de los sujetos pasivos, la verificación de los deberes de los agentes de retención y percepción y la verificación de las entidades autorizadas para recaudar. Son manifestaciones específicas de las amplias facultades de fiscalización e investigación del artículo 684 del ET.',
    wrong: [
      'La fiscalización no se limita a la declaración de renta ni a un número fijo de períodos: comprende los tributos administrados por la DIAN y las actuaciones de verificación y cruce, con los términos de firmeza de cada caso.',
      'Opción correcta: los artículos 684-1 a 684-4 del ET cubren la verificación y cruce de información, el cumplimiento de obligaciones formales y sustanciales, los deberes de agentes de retención y percepción y la verificación de entidades autorizadas para recaudar.',
      'Las actuaciones de verificación y cruce del artículo 684-1 no requieren resolución del Director General; las decisiones de fondo se adoptan en actos definitivos, previo el procedimiento legal.',
      'Los cruces de información son precisamente el contenido principal de la facultad del artículo 684-1 del ET y no requieren autorización judicial previa.',
    ],
    source: 'Estatuto Tributario, artículos 684-1 a 684-4; TACI, págs. 108-110 (deber de informar)',
  },
  {
    id: 'q-m06-003',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Inspección tributaria',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'La inspección tributaria prevista en el artículo 779 del Estatuto Tributario se caracteriza porque…',
    options: [
      '…es un acto administrativo definitivo que solo puede demandarse junto con la liquidación oficial, porque resuelve de fondo sobre los hechos fiscalizados.',
      '…es un medio de prueba que se practica de oficio o a solicitud de parte y suspende por tres meses el término para notificar el requerimiento especial cuando es oficiosa.',
      '…solo puede decretarla el Director General y su término de práctica es de un mes improrrogable, sin efecto alguno sobre los términos del requerimiento.',
      '…procede únicamente dentro del proceso administrativo de cobro coactivo para verificar bienes del deudor, pues en fiscalización solo opera la visita.',
    ],
    correct: 1,
    justification:
      'La inspección tributaria es un medio de prueba para verificar el correcto cumplimiento de las obligaciones tributarias; se practica de oficio o a solicitud del obligado y, si es oficiosa, suspende por tres meses el término para notificar el requerimiento especial, contados desde la notificación del auto que la decreta (artículo 706 del ET). Cuando se practica a solicitud del contribuyente, la suspensión dura el término de la diligencia.',
    wrong: [
      'La inspección tributaria no es un acto definitivo sino una actuación probatoria; los actos definitivos deciden de fondo, como la liquidación de revisión, la resolución sanción y la liquidación de aforo.',
      'Opción correcta: la inspección tributaria es un medio de prueba, de oficio o a solicitud de parte, y su práctica oficiosa suspende por tres meses el término para notificar el requerimiento especial.',
      'No requiere decreto del Director General ni tiene un término único de un mes; su práctica oficiosa suspende por tres meses el término para notificar el requerimiento especial.',
      'La inspección tributaria es una facultad de fiscalización para verificar obligaciones tributarias y no está reservada al cobro coactivo; la visita es solo una de sus modalidades.',
    ],
    source: 'Estatuto Tributario, artículos 706 y 779 (TACI, págs. 85-86)',
  },
  {
    id: 'q-m06-004',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Términos del proceso de revisión',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Sobre el término para notificar el requerimiento especial (artículo 705 del Estatuto Tributario), ¿cuál de las siguientes afirmaciones es correcta?',
    options: [
      'El requerimiento se notifica dentro de los cinco años siguientes al vencimiento del plazo para declarar, en todos los casos, porque ese es el término general de firmeza.',
      'Si la declaración se presentó en forma extemporánea, los tres años se cuentan desde su presentación; y si arroja saldo a favor, desde la solicitud de devolución o compensación.',
      'Si la declaración arroja saldo a favor, el término se cuenta desde el vencimiento del plazo para declarar y nunca se amplía, pues el saldo a favor no altera la firmeza.',
      'El término es de dos años y se cuenta desde la notificación del emplazamiento para corregir, porque ese acto interrumpe la firmeza de la declaración.',
    ],
    correct: 1,
    justification:
      'El artículo 705 del ET fija tres momentos: i) declaración oportuna: tres años desde el vencimiento del plazo para declarar; ii) declaración extemporánea: tres años desde su presentación; iii) saldo a favor: tres años desde la presentación de la solicitud de devolución o compensación. Los cinco años corresponden a otras figuras (aforo del artículo 717 y declaraciones con pérdidas fiscales o sujetas a precios de transferencia).',
    wrong: [
      'El término general del requerimiento especial es de tres años; los cinco años rigen el aforo del artículo 717 y ciertas declaraciones con pérdidas fiscales o precios de transferencia.',
      'Opción correcta: el artículo 705 del ET fija tres momentos (vencimiento del plazo, presentación extemporánea y solicitud de devolución o compensación), todos con término de tres años.',
      'Cuando hay saldo a favor opera un tercer momento: el término se cuenta desde la solicitud de devolución o compensación, no desde el vencimiento del plazo para declarar.',
      'Dos años no es el término del requerimiento especial, y el emplazamiento para corregir no reemplaza al requerimiento ni interrumpe la firmeza: su efecto es suspender el término por un mes.',
    ],
    source: 'Estatuto Tributario, artículos 703 y 705 (MATERIAL TOTAL, págs. 443-450)',
  },
  {
    id: 'q-m06-005',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Oportunidad del requerimiento especial',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una sociedad presentó su declaración de renta del año gravable 2021 el 15 de junio de 2022; el vencimiento del plazo para declarar era el 10 de mayo de 2022. No se practicó inspección tributaria ni se notificó emplazamiento para corregir. ¿Hasta cuándo podía la DIAN notificar válidamente el requerimiento especial?',
    options: [
      'Hasta el 10 de mayo de 2025, porque el término se cuenta desde el vencimiento del plazo para declarar.',
      'Hasta el 15 de junio de 2025, porque al haberse presentado la declaración en forma extemporánea los tres años se cuentan desde la fecha de presentación.',
      'Hasta el 31 de diciembre de 2026, porque las declaraciones extemporáneas tienen una firmeza especial de cinco años.',
      'No había término: la presentación extemporánea habilita la revisión en cualquier tiempo.',
    ],
    correct: 1,
    justification:
      'Conforme al artículo 705 del ET, cuando la declaración inicial se presenta en forma extemporánea los tres años se cuentan a partir de la fecha de presentación de la declaración, es decir, desde el 15 de junio de 2022: el requerimiento especial podía notificarse hasta el 15 de junio de 2025.',
    wrong: [
      'Contar desde el vencimiento del plazo es la regla de la declaración presentada oportunamente; en la extemporánea el referente es la fecha de presentación.',
      'Opción correcta: al ser extemporánea la declaración, los tres años se cuentan desde su presentación (15 de junio de 2022), de modo que el requerimiento podía notificarse hasta el 15 de junio de 2025.',
      'No existe firmeza de cinco años para toda declaración extemporánea: los cinco años aplican a las declaraciones con pérdidas fiscales o sujetas a precios de transferencia y al procedimiento de aforo del artículo 717 del ET.',
      'La presentación extemporánea no elimina los términos de firmeza: solo cambia el punto de partida del término del artículo 705 del ET.',
    ],
    source: 'Estatuto Tributario, artículo 705 (caso de aplicación del material de clase)',
  },
  {
    id: 'q-m06-006',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Respuesta y ampliación del requerimiento',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Notificado el requerimiento especial el 5 de febrero de 2026, ¿qué términos rigen la respuesta del obligado y una eventual ampliación?',
    options: [
      'El obligado responde en 15 días hábiles y la ampliación se decreta dentro del mes siguiente, con traslado de 15 días, por ser términos de la actuación administrativa general.',
      'El obligado responde en 3 meses; la ampliación se puede decretar por una sola vez dentro de los 3 meses siguientes al vencimiento del plazo para responder y de ella se corre traslado no inferior a 3 ni superior a 6 meses.',
      'El obligado responde en 1 mes y la ampliación puede decretarse en cualquier tiempo antes de la liquidación de revisión, siempre que la DIAN conserve pruebas pendientes.',
      'No hay término de respuesta: el obligado puede objetar hasta antes de que se notifique la liquidación oficial de revisión, pues el silencio no precluye su defensa.',
    ],
    correct: 1,
    justification:
      'El artículo 707 del ET otorga tres meses desde la notificación del requerimiento para responder, objetar y solicitar pruebas; el artículo 708 permite ampliar el requerimiento por una sola vez, dentro de los tres meses siguientes al vencimiento de ese plazo, con traslado no inferior a tres ni superior a seis meses. La competencia para ampliar corresponde al jefe de la unidad de fiscalización (parágrafo del artículo 691 del ET, adicionado por el artículo 50 del Decreto Ley 2106 de 2019).',
    wrong: [
      'Los quince días no corresponden a ninguna etapa del proceso de revisión: la respuesta al requerimiento es de tres meses y la ampliación se somete a términos en meses.',
      'Opción correcta: la respuesta al requerimiento es de tres meses (artículo 707) y la ampliación, por una sola vez dentro de los tres meses siguientes al vencimiento de ese plazo, se corre traslado de tres a seis meses (artículo 708).',
      'El término de respuesta es de tres meses y la ampliación solo procede por una vez dentro de los tres meses siguientes al vencimiento de ese plazo; no en cualquier tiempo.',
      'El derecho de defensa exige un término: el artículo 707 del ET concede tres meses y la falta de respuesta precluye la oportunidad de objetar.',
    ],
    source: 'Estatuto Tributario, artículos 691 (parágrafo), 707 y 708 (MATERIAL TOTAL, págs. 445-447)',
  },
  {
    id: 'q-m06-007',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Liquidación oficial de revisión',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'En un proceso de revisión, el plazo para dar respuesta al requerimiento especial venció el 30 de septiembre de 2026. ¿Cuál es el último día para notificar la liquidación oficial de revisión y qué ocurre si no se notifica en término?',
    options: [
      '30 de diciembre de 2026; si no se notifica, el requerimiento queda sin efectos y la DIAN debe archivar el expediente.',
      '30 de marzo de 2027; si no se notifica, la declaración objeto del proceso queda en firme por el solo transcurso del término (firmeza por procedimiento).',
      '30 de junio de 2027; si no se notifica, la DIAN puede reiniciar el proceso con un nuevo requerimiento especial.',
      '30 de septiembre de 2027; si no se notifica, opera el silencio administrativo negativo y el contribuyente queda obligado a pagar.',
    ],
    correct: 1,
    justification:
      'El artículo 710 del ET exige notificar la liquidación oficial de revisión dentro de los seis meses siguientes a la fecha de vencimiento del plazo para responder el requerimiento especial o su ampliación: del 30 de septiembre de 2026 al 30 de marzo de 2027. Si no se notifica en ese término, la declaración queda en firme por el solo transcurso del tiempo: es la firmeza por procedimiento.',
    wrong: [
      'Tres meses no es el término del artículo 710 del ET: la liquidación de revisión se notifica dentro de los seis meses siguientes al vencimiento del plazo de respuesta.',
      'Opción correcta: la liquidación oficial de revisión se notifica dentro de los seis meses siguientes al vencimiento del plazo de respuesta (artículo 710); si no, la declaración queda en firme por procedimiento.',
      'El término es de seis meses, no de nueve, y no cabe reiniciar el proceso: la firmeza por procedimiento impide modificar la declaración por los hechos del requerimiento.',
      'Doce meses no corresponde al artículo 710 del ET y el silencio administrativo negativo no rige la expedición de la liquidación de revisión.',
    ],
    source: 'Estatuto Tributario, artículos 710 y 714 (MATERIAL TOTAL, pág. 447; TACI, págs. 86-87)',
  },
  {
    id: 'q-m06-008',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Procedimiento de aforo',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement: 'En el procedimiento de aforo (artículos 715 a 719 del Estatuto Tributario), son actos administrativos definitivos…',
    options: [
      'el emplazamiento para declarar y el traslado para responder, porque preparan y definen el contenido de la liquidación de aforo.',
      'la resolución sanción por no declarar, la liquidación oficial de aforo y los actos que resuelvan los recursos interpuestos contra ellas.',
      'el auto de inspección tributaria y el requerimiento ordinario, pues ambos contienen la determinación de la obligación tributaria.',
      'únicamente la liquidación oficial de aforo, porque las sanciones por no declarar son actos de trámite no demandables.',
    ],
    correct: 1,
    justification:
      'En el aforo, la manifestación de la voluntad de la Administración sobre la existencia de la obligación, el obligado y la cuantía del tributo se concreta en la resolución sanción por no declarar (artículo 643 del ET), en la liquidación oficial de aforo (artículo 717 del ET) y en los actos que resuelven los recursos. El emplazamiento y los traslados son actos de trámite.',
    wrong: [
      'El emplazamiento para declarar y los traslados son actos de trámite: preparan la decisión y no son demandables de forma autónoma.',
      'Opción correcta: en el aforo son definitivos la resolución sanción por no declarar, la liquidación oficial de aforo y los actos que resuelven los recursos.',
      'El auto de inspección es una actuación probatoria y el requerimiento ordinario es un acto de trámite; ninguno decide de fondo ni determina la obligación.',
      'La resolución sanción por no declarar también es un acto definitivo: define la sanción y habilita la liquidación de aforo.',
    ],
    source: 'Estatuto Tributario, artículos 643 y 715 a 717 (MATERIAL TOTAL, págs. 443-444)',
  },
  {
    id: 'q-m06-009',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Liquidación oficial de aforo',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Un obligado no presentó la declaración de renta del año gravable 2020, cuyo plazo venció el 20 de agosto de 2021. Después del emplazamiento y de la resolución sanción por no declarar, la DIAN practicó liquidación de aforo. ¿Dentro de qué término debía notificarse la liquidación de aforo?',
    options: [
      'Dentro de los tres años siguientes al vencimiento del plazo para declarar, es decir, hasta el 20 de agosto de 2024.',
      'Dentro de los cinco años siguientes al vencimiento del plazo señalado para declarar, es decir, hasta el 20 de agosto de 2026.',
      'Dentro de los seis meses siguientes a la resolución sanción por no declarar, sin importar la fecha del vencimiento.',
      'Dentro de los doce meses siguientes a la notificación del emplazamiento para declarar.',
    ],
    correct: 1,
    justification:
      'El artículo 717 del ET permite a la Administración determinar la obligación mediante liquidación oficial de aforo dentro de los cinco años siguientes al vencimiento del plazo señalado para declarar: del 20 de agosto de 2021 al 20 de agosto de 2026. Contra la liquidación de aforo procede el recurso de reconsideración dentro de los dos meses siguientes a su notificación.',
    wrong: [
      'Los tres años corresponden a la firmeza de las declaraciones presentadas, no al procedimiento de aforo del artículo 717 del ET.',
      'Opción correcta: la liquidación de aforo se notifica dentro de los cinco años siguientes al vencimiento del plazo para declarar (artículo 717 del ET).',
      'La liquidación de aforo no se sujeta al término de seis meses de la liquidación de revisión: su plazo propio es de cinco años desde el vencimiento para declarar.',
      'El emplazamiento habilita la sanción por no declarar, pero no es el punto de partida del término del artículo 717 del ET.',
    ],
    source: 'Estatuto Tributario, artículos 715 a 717 (MATERIAL TOTAL, págs. 443-444)',
  },
  {
    id: 'q-m06-010',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Liquidación provisional',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'La liquidación provisional regulada en los artículos 764 y siguientes del Estatuto Tributario puede proponerse a los contribuyentes que, en el año gravable inmediatamente anterior a aquel al que se refiere la liquidación, hayan declarado…',
    options: [
      '…ingresos brutos superiores a 30.000 UVT.',
      '…ingresos brutos iguales o inferiores a 15.000 UVT o un patrimonio bruto igual o inferior a 30.000 UVT.',
      '…ingresos brutos iguales o inferiores a 5.000 UVT y un patrimonio bruto inferior a 10.000 UVT.',
      '…cualquier nivel de ingresos: no hay límite de UVT para este procedimiento.',
    ],
    correct: 1,
    justification:
      'El artículo 764 del ET permite seleccionar sujetos cuyos ingresos brutos del año inmediatamente anterior sean iguales o inferiores a 15.000 UVT o cuyo patrimonio bruto sea igual o inferior a 30.000 UVT, sin superar esos topes. La actuación puede proponerse dentro de los cinco años siguientes al vencimiento para declarar o dentro del término previsto para sancionar, y reemplaza al requerimiento especial, al emplazamiento previo por no declarar o al pliego de cargos, según el caso.',
    wrong: [
      'Los topes operan como máximos: superar 15.000 UVT de ingresos brutos o 30.000 UVT de patrimonio bruto excluye al sujeto del procedimiento abreviado.',
      'Opción correcta: los topes del artículo 764 del ET son 15.000 UVT de ingresos brutos o 30.000 UVT de patrimonio bruto del año inmediatamente anterior.',
      'Los topes del artículo 764 del ET son 15.000 UVT de ingresos brutos y 30.000 UVT de patrimonio bruto, no los valores de esta opción.',
      'El procedimiento tiene límites expresos en UVT; sin ellos, la liquidación provisional sería una vía general de determinación, que no es lo que prevé la ley.',
    ],
    source: 'Estatuto Tributario, artículos 764 a 764-2 (MATERIAL TOTAL, pág. 448)',
  },
  {
    id: 'q-m06-011',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Reducción del 40% en liquidación provisional',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'En una liquidación provisional la DIAN propone una sanción por inexactitud de $50.000.000. El obligado la acepta y paga dentro del mes siguiente a su notificación. ¿A cuánto asciende la sanción después de la reducción?',
    options: [
      '$50.000.000, porque la reducción del 40% solo aplica a sanciones por obligaciones formales.',
      '$30.000.000, porque la sanción se reduce en un 40%: $50.000.000 - (40% x $50.000.000) = $30.000.000.',
      '$20.000.000, porque se paga solo el 40% de la sanción.',
      '$25.000.000, porque la reducción es del 50%.',
    ],
    correct: 1,
    justification:
      'El artículo 764-3 del ET reduce en un 40% las sanciones derivadas de la liquidación provisional cuando el obligado la acepta y paga dentro del mes siguiente, siempre que no se trate de sanciones por omisión o corrección de declaraciones ni de obligaciones formales subsanables voluntariamente antes del pliego de cargos. Cálculo: reducción = 40% x $50.000.000 = $20.000.000; valor a pagar = $50.000.000 - $20.000.000 = $30.000.000.',
    wrong: [
      'La reducción del 40% no se limita a obligaciones formales: precisamente algunas de ellas se excluyen, y la reducción aplica a las sanciones derivadas de la actuación, como la de inexactitud.',
      'Opción correcta: la reducción del 40% equivale a $20.000.000 y la sanción queda en $30.000.000.',
      'El 40% es el porcentaje de reducción, no el porcentaje a pagar: pagar solo el 40% equivaldría a una reducción del 60%.',
      'La reducción del 50% corresponde a otros escenarios, por ejemplo el artículo 640 del ET, no al artículo 764-3.',
    ],
    source: 'Estatuto Tributario, artículo 764-3 (MATERIAL TOTAL, pág. 448)',
  },
  {
    id: 'q-m06-012',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Recursos',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement: 'Contra la liquidación oficial de revisión procede…',
    options: [
      '…recurso de reposición y, en subsidio, apelación ante el Director General de la DIAN, pues el CPACA rige supletoriamente el procedimiento tributario.',
      '…recurso de reconsideración, que debe interponerse dentro de los dos meses siguientes a la notificación del acto y cuya decisión agota la vía administrativa.',
      '…únicamente el recurso de reposición, que se resuelve en el término de un mes y agota la vía administrativa.',
      '…la demanda de nulidad y restablecimiento del derecho sin necesidad de recurso previo, porque el acto ya está en firme.',
    ],
    correct: 1,
    justification:
      'El artículo 720 del ET consagra el recurso de reconsideración contra las liquidaciones oficiales y las resoluciones sanción, dentro de los dos meses siguientes a la notificación. Su decisión agota la vía administrativa y habilita la demanda ante la jurisdicción de lo contencioso administrativo. En la etapa de reconsideración no pueden objetarse los hechos aceptados expresamente (artículo 723 del ET), y la referencia del artículo 722 a la reposición quedó tácitamente derogada por el artículo 67 de la Ley 6 de 1992.',
    wrong: [
      'La apelación no procede en el proceso tributario de determinación y la reposición fue desplazada por la reconsideración como recurso principal; el CPACA no revive esas vías.',
      'Opción correcta: el recurso de reconsideración se interpone en los dos meses siguientes a la notificación y su decisión agota la vía administrativa (artículo 720 del ET).',
      'El único recurso es la reconsideración, con término de dos meses; la reposición del artículo 722 del ET fue tácitamente derogada por la Ley 6 de 1992.',
      'El agotamiento de la vía administrativa es presupuesto para demandar: primero debe resolverse el recurso de reconsideración.',
    ],
    source: 'Estatuto Tributario, artículos 720, 722 y 723 (MATERIAL TOTAL, págs. 449-450)',
  },
  {
    id: 'q-m06-013',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Nulidades y silencio administrativo',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'La DIAN no resolvió el recurso de reconsideración interpuesto por un contribuyente dentro del año siguiente a su interposición. Conforme al Estatuto Tributario, en principio…',
    options: [
      '…el recurso se entiende negado y el contribuyente debe demandar el acto de negativa presunta, pues en materia tributaria rige el silencio negativo.',
      '…opera el silencio administrativo positivo (artículo 734 del ET), salvo en las excepciones legales expresas, y el recurso se entiende resuelto a favor del recurrente.',
      '…se pierde el recurso y queda en firme la liquidación oficial por no haber decisión, salvo que el contribuyente insista.',
      '…se reinicia el término de un año, esta vez desde la solicitud de pruebas, porque la inactividad de la DIAN no produce efectos.',
    ],
    correct: 1,
    justification:
      'El artículo 732 del ET fija un año para resolver el recurso y el artículo 734 del ET consagra el silencio administrativo positivo: si la Administración no decide en término, el recurso se entiende resuelto a favor del recurrente, con las excepciones legales expresas, entre ellas la del parágrafo 1 del artículo 670 para las sanciones por devoluciones improcedentes solicitadas con garantía.',
    wrong: [
      'En materia tributaria el silencio es positivo, no negativo: no debe demandarse una negativa presunta, sino que el recurso se entiende resuelto a favor.',
      'Opción correcta: vencido el año sin decisión, opera el silencio administrativo positivo del artículo 734 del ET, salvo excepciones legales expresas.',
      'El silencio no produce la firmeza del acto: produce una decisión presunta favorable al recurrente, sin necesidad de insistencia adicional.',
      'El término no se reinicia: su vencimiento sin decisión activa el silencio administrativo positivo del artículo 734 del ET.',
    ],
    source: 'Estatuto Tributario, artículos 732 y 734 (MATERIAL TOTAL, pág. 450)',
  },
  {
    id: 'q-m06-014',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Revocatoria directa',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Un acto administrativo tributario en firme es manifiestamente contrario a la ley y causa agravio injustificado a su destinatario, quien no consiente en su revocatoria. ¿Qué puede hacer la DIAN?',
    options: [
      'Interponer por sí misma un recurso de reconsideración contra su propio acto, pues la revocatoria directa solo procedería a petición expresa del particular afectado.',
      'Acudir a la revocatoria directa del acto (artículos 93 a 97 del CPACA); si el titular no da su consentimiento previo, expreso y escrito, la entidad puede demandar el acto en ejercicio del medio de control de lesividad.',
      'Dejar sin efectos el acto mediante resolución motivada en cualquier tiempo, sin requisitos adicionales, porque la administración siempre puede corregir sus errores.',
      'Esperar a que el contribuyente demande la nulidad del acto, porque la Administración carece de mecanismos para revisar sus propios actos en firme, salvo la revocatoria de trámites.',
    ],
    correct: 1,
    justification:
      'La revocatoria directa procede por manifiesta oposición a la Constitución o a la ley, por inconformidad con el interés público o social, o cuando el acto causa agravio injustificado. En los actos de carácter particular y concreto se requiere consentimiento previo, expreso y escrito del titular; si este no consiente, la entidad queda habilitada para demandar el acto en lesividad, pues no puede revocarlo unilateralmente.',
    wrong: [
      'La Administración no recurre sus propios actos: el recurso presupone un acto que el recurrente no expidió, y la revocatoria directa no requiere petición del particular para iniciarse.',
      'Opción correcta: la revocatoria directa procede por las causales de los artículos 93 a 97 del CPACA y, en actos particulares, si el titular no consiente, la entidad puede demandar el acto en lesividad.',
      'La revocatoria directa de actos particulares exige el consentimiento previo, expreso y escrito del titular; sin él no puede dejarse sin efectos el acto por decisión unilateral.',
      'La entidad sí tiene mecanismos: la revocatoria directa con consentimiento del titular y, a falta de este, la demanda de lesividad ante la jurisdicción.',
    ],
    source: 'CPACA, artículos 93 a 97 (MATERIAL TOTAL, págs. 449-452)',
  },
]
