import type { Activity } from '../types'

// Actividades guiadas — Módulo 8
export const ACTIVITIES: Activity[] = [
  {
    id: 'm08-a01',
    moduleId: 'm08',
    indicator: 'i03',
    title: 'Caso: cálculo de la sanción por extemporaneidad con reducciones',
    kind: 'caso',
    instructions:
      'Calcula la sanción aplicando los artículos 641 y 640 del Estatuto Tributario y verifica el piso de la sanción mínima. Selecciona la opción correcta en cada pregunta y revisa la explicación final.',
    scenario:
      'La sociedad Andina presentó su declaración de renta del año gravable 2025 el 10 de julio de 2026, cuando el vencimiento del plazo era el 10 de abril de 2026: tres meses de retardo. El impuesto a cargo es de $90.000.000. La sociedad no cometió la misma conducta en los dos años anteriores y la DIAN no ha proferido pliego de cargos, requerimiento especial ni emplazamiento previo por no declarar.',
    questions: [
      {
        q: '¿Cuál es el valor de la sanción plena por extemporaneidad (art. 641 ET), antes de reducciones?',
        options: ['$4.500.000', '$27.000.000', '$13.500.000', '$90.000.000'],
        correct: 2,
        why: 'La sanción es del 5% del impuesto a cargo por cada mes o fracción de retardo: 3 meses x 5% = 15%. Sanción = 15% x $90.000.000 = $13.500.000. El tope del 100% del impuesto ($90.000.000) no se alcanza.',
      },
      {
        q: '¿A qué reducción tiene derecho la sociedad y cuál es el valor final a pagar?',
        options: [
          'Al 75%: $10.125.000',
          'Al 50% (art. 640, numeral 1): $6.750.000',
          'Al 40% (art. 764-3): $8.100.000',
          'A ninguna reducción: $13.500.000',
        ],
        correct: 1,
        why: 'Como la sociedad no cometió la misma conducta en los dos años anteriores y no hubo pliego de cargos, requerimiento especial ni emplazamiento previo por no declarar, aplica el numeral 1 del art. 640: la sanción se reduce al 50%. Valor: 50% x $13.500.000 = $6.750.000, con un ahorro de $6.750.000.',
      },
      {
        q: 'Si la sociedad hubiera cometido la misma conducta dentro de los dos años anteriores (por ejemplo, extemporaneidad en IVA en 2025) pero no en el último año, ¿qué reducción aplicaría?',
        options: ['Al 50%: $6.750.000', 'No habría reducción', 'Se duplicaría: $27.000.000', 'Al 75% (art. 640, numeral 2): $10.125.000'],
        correct: 3,
        why: 'Con la misma conducta cometida dentro de los dos años anteriores, pero no en el último año, aplica el numeral 2 del art. 640: la sanción se reduce al 75%. Valor: 75% x $13.500.000 = $10.125.000. El buen comportamiento más prolongado (numeral 1) produce el mayor descuento ($6.750.000).',
      },
      {
        q: 'Antes de pagar, ¿cómo verifica la sociedad el piso legal de la sanción?',
        options: [
          'No aplica la sanción mínima a las sanciones reducidas',
          'El piso es de 10 UVT ($523.740 con la UVT de 2026); como el valor calculado lo supera, se paga la sanción calculada',
          'El piso es de 20 UVT y reemplaza la sanción calculada',
          'La sanción mínima reemplaza la reducción cuando el resultado es inferior a 100 UVT',
        ],
        correct: 1,
        why: 'El art. 639 del ET fija la sanción mínima en 10 UVT para cualquier sanción, incluidas las reducidas: con la UVT de 2026 ($52.374), equivale a $523.740. Como $6.750.000 lo supera, se paga el valor calculado. La sanción mínima solo operaría si la reducción dejara la sanción por debajo de ese piso.',
      },
    ],
    explanation:
      'Paso 1: liquida la sanción plena del art. 641 ET: 5% x 3 meses = 15% del impuesto a cargo; 15% x $90.000.000 = $13.500.000 (el tope del 100% no se alcanza). Paso 2: revisa las condiciones del art. 640: sin la misma conducta en los dos años anteriores y sin pliego de cargos, requerimiento especial ni emplazamiento previo por no declarar, la sanción se reduce al 50% (numeral 1): $6.750.000. Con solo un año limpio, la reducción sería al 75% (numeral 2): $10.125.000. Paso 3: verifica el piso del art. 639 ET: la sanción reducida nunca puede ser inferior a 10 UVT ($523.740 con la UVT de 2026). Paso 4: recuerda que la sanción se liquida en la propia declaración privada (es autoliquidada) y que la UVT aplicable es la del momento de la conducta sancionable.',
  },
  {
    id: 'm08-a02',
    moduleId: 'm08',
    indicator: 'i03',
    title: 'Relaciona cada sanción con su artículo, base y tope',
    kind: 'relacionar',
    instructions:
      'Relaciona cada sanción del Estatuto Tributario con la regla de cuantificación que le corresponde. Al terminar, verifica y revisa la explicación de cada pareja.',
    pairs: [
      { a: 'Artículo 641 ET (extemporaneidad)', b: '5% del impuesto a cargo o retención por mes o fracción de retardo, sin exceder del 100%' },
      { a: 'Artículo 642 ET (extemporaneidad posterior al emplazamiento)', b: '10% del impuesto a cargo o retención por mes o fracción, sin exceder del 200%' },
      { a: 'Artículo 643 ET (no declarar)', b: 'Resolución sanción sobre las diez declaraciones tipificadas; no se aplica por analogía al CREE ni al SIMPLE' },
      { a: 'Artículo 644 ET (corrección)', b: '10% voluntaria y 20% cuando se corrige con ocasión del emplazamiento para corregir o después del requerimiento o del pliego de cargos, sobre el mayor valor a pagar o el menor saldo a favor' },
      { a: 'Artículo 647 ET (inexactitud)', b: '100% de la diferencia entre el saldo determinado en la liquidación oficial y el declarado' },
      { a: 'Artículo 651 ET (no informar)', b: '5%, 4% o 3% de las sumas según la conducta (y 0,5% si no hay cuantía), con multa máxima de 15.000 UVT' },
      { a: 'Artículo 639 ET (sanción mínima)', b: '10 UVT para cualquier sanción, incluidas las reducidas, salvo intereses de mora y numerales 1 y 3 del art. 658-3' },
      { a: 'Artículo 640, parágrafo 2 (reincidencia)', b: 'Aumento del 100% cuando la misma infracción se comete dentro de los 2 años siguientes a la firmeza del acto sancionatorio' },
    ],
    explanation:
      'Paso 1: agrupa las sanciones por el hecho que las origina: extemporaneidad simple (641) y agravada por el emplazamiento (642), omisión de la declaración (643), corrección (644), inexactitud (647-648) y deber de informar (651). Paso 2: identifica la base de cada sanción: impuesto a cargo o retención (641 y 642), mayor valor a pagar o menor saldo a favor (644), diferencia entre el saldo oficial y el declarado (647), sumas no informadas o informadas con error (651). Paso 3: memoriza los topes: 100% y 200% para extemporaneidad, 15.000 UVT para no informar, 950 UVT para facturación (652), 20.000 UVT para contabilidad (655) y 4.100 UVT para administradores (658-1). Paso 4: no olvides los pisos y agravantes: 10 UVT de sanción mínima (639), 20 UVT para entidades recaudadoras (676-3) y el aumento del 100% por reincidencia (640, parágrafo 2), que no aplica al art. 652 ni a las sanciones autoliquidables.',
  },
]
