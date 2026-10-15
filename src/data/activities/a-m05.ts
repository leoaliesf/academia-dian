import type { Activity } from '../types'

// Actividades guiadas — Módulo 5
export const ACTIVITIES: Activity[] = [
  {
    id: 'm05-a01',
    moduleId: 'm05',
    indicator: 'i05',
    title: 'Caso integral: liquidación de renta de una persona natural',
    kind: 'caso',
    instructions:
      'Resuelva la liquidación de la cédula general de Laura Restrepo, residente fiscal, con la UVT de 2025 ($49.799). Siga el orden de la depuración: ingresos, INCRNGO, costos y gastos, deducciones, rentas exentas, verificación del límite del artículo 336 del ET y, al final, la liquidación del impuesto con la tabla del artículo 241. Responda las preguntas con los valores exactos.',
    scenario:
      'Laura Restrepo es residente fiscal y durante el año gravable 2025 obtuvo: (1) salarios por $180.000.000 y aportes obligatorios a salud y pensión de $14.400.000; (2) arrendamiento de un local comercial por $40.000.000, con gastos deducibles de $2.000.000; (3) honorarios como consultora independiente por $60.000.000, para los cuales decide tomar costos y gastos de $12.000.000 en lugar de la renta exenta del 25%, porque le resultan más favorables. Laura tiene dos dependientes y pagó intereses de vivienda por $6.000.000. No tiene dividendos, pensiones ni ganancias ocasionales.',
    table: {
      caption: 'Datos del caso (UVT 2025 = $49.799)',
      headers: ['Concepto', 'Valor'],
      rows: [
        ['Rentas de trabajo: salarios', '$180.000.000'],
        ['INCRNGO: aportes obligatorios a salud y pensión', '$14.400.000'],
        ['Rentas de capital: arrendamiento', '$40.000.000'],
        ['Deducción de las rentas de capital (gastos del inmueble)', '$2.000.000'],
        ['Rentas no laborales: honorarios', '$60.000.000'],
        ['Costos y gastos de los honorarios', '$12.000.000'],
        ['Deducción por dependientes (2), art. 387 del ET', '10% de los pagos laborales; tope 32 UVT al mes'],
        ['Intereses de vivienda (art. 119 del ET)', '$6.000.000'],
        ['Deducción adicional por dependientes (art. 336 num. 3)', '72 UVT por dependiente'],
        ['Renta exenta del 25% de los pagos laborales', 'Tope 790 UVT anuales'],
      ],
    },
    questions: [
      {
        q: '¿Cuál es el total de ingresos de la cédula general y el resultado previo (ingresos menos INCRNGO menos costos y gastos)?',
        options: [
          'Ingresos $280.000.000 y resultado previo $251.600.000.',
          'Ingresos $280.000.000 y resultado previo $265.600.000.',
          'Ingresos $300.000.000 y resultado previo $273.600.000.',
          'Ingresos $220.000.000 y resultado previo $191.600.000.',
        ],
        correct: 0,
        why: 'Ingresos: $180.000.000 + $40.000.000 + $60.000.000 = $280.000.000. Se restan los INCRNGO ($14.400.000) y los costos y gastos ($2.000.000 + $12.000.000 = $14.000.000): $280.000.000 − $14.400.000 − $14.000.000 = $251.600.000. Ese resultado previo es la base sobre la cual se calcula el límite del 40%.',
      },
      {
        q: '¿Cuál es el valor de la renta exenta del 25% de los pagos laborales que puede solicitar Laura?',
        options: [
          '$45.000.000, el 25% de los salarios sin restar nada.',
          '$39.341.210, el tope de 790 UVT anuales, porque siempre se toma el tope.',
          '$35.400.000, porque la base es $141.600.000.',
          '$141.600.000, porque la exención se calcula sobre toda la base.',
        ],
        correct: 2,
        why: 'La base de la exención es el total de pagos laborales menos los INCRNGO y las deducciones y demás rentas exentas diferentes a la del numeral 10: $180.000.000 − $14.400.000 − ($18.000.000 + $6.000.000) = $141.600.000. El 25% es $35.400.000 y no supera el tope anual de 790 UVT = 790 x $49.799 = $39.341.210, de modo que se toma $35.400.000.',
      },
      {
        q: '¿Cuánto vale la deducción por dependientes del artículo 387 del ET y cuánto la deducción adicional del artículo 336?',
        options: [
          'Art. 387: $18.000.000. Deducción adicional: 144 UVT = $7.171.056.',
          'Art. 387: $19.122.816, porque siempre se aplica el tope de 32 UVT mensuales. Deducción adicional: $7.171.056.',
          'Art. 387: $18.000.000. Deducción adicional: 3.600 UVT, sin relación con el número de dependientes.',
          'Art. 387: $1.593.568. Deducción adicional: no existe para dos dependientes.',
        ],
        correct: 0,
        why: 'La deducción del artículo 387 equivale al 10% de los pagos laborales: 10% x $180.000.000 = $18.000.000, y no supera el tope de 32 UVT mensuales (384 UVT al año = 384 x $49.799 = $19.122.816), por lo que se toma completa. La deducción adicional del artículo 336 numeral 3 es de 72 UVT por dependiente: 2 x 72 = 144 UVT = 144 x $49.799 = $7.171.056, y se resta fuera del límite del 40%.',
      },
      {
        q: '¿El límite del artículo 336 del ET (40% y 1.340 UVT) limita las rentas exentas y deducciones solicitadas?',
        options: [
          'Sí: se limita a $100.640.000, que es el 40% del resultado previo.',
          'Sí: se limita a $66.730.660, el valor de 1.340 UVT.',
          'No: la deducción adicional por dependientes se cuenta dentro del límite y lo supera.',
          'No: las partidas computables suman $59.400.000 y el límite aplicable es $66.730.660, el menor entre el 40% de $251.600.000 ($100.640.000) y 1.340 UVT ($66.730.660).',
        ],
        correct: 3,
        why: 'Las partidas computables al límite son la deducción del artículo 387 ($18.000.000), los intereses de vivienda ($6.000.000) y la renta exenta del 25% ($35.400.000): total $59.400.000. El límite es el menor entre el 40% del resultado previo ($251.600.000 x 40% = $100.640.000) y 1.340 UVT (1.340 x $49.799 = $66.730.660). Como $59.400.000 no supera $66.730.660, todas las partidas se restan completas.',
      },
      {
        q: '¿Cuál es la renta líquida cedular de la cédula general y el impuesto de renta antes de descuentos y retenciones?',
        options: [
          'Renta líquida cedular $185.028.944 e impuesto $33.880.750.',
          'Renta líquida cedular $192.200.000 e impuesto $35.888.560.',
          'Renta líquida cedular $185.028.944 e impuesto $29.043.520.',
          'Renta líquida cedular $251.600.000 e impuesto $36.120.211.',
        ],
        correct: 0,
        why: 'Renta líquida cedular = $251.600.000 − $18.000.000 − $6.000.000 − $35.400.000 − $7.171.056 = $185.028.944, equivalentes a $185.028.944 / $49.799 = 3.715,52 UVT. Con la tabla del artículo 241 (rango más de 1.700 hasta 4.100 UVT): (3.715,52 − 1.700) x 28% + 116 = 564,35 + 116 = 680,35 UVT. Impuesto = 680,35 x $49.799 = $33.880.750.',
      },
    ],
    explanation:
      'Paso 1: sume los ingresos de las tres subcédulas ($180.000.000 + $40.000.000 + $60.000.000 = $280.000.000) y reste los INCRNGO y los costos y gastos para obtener el resultado previo de $251.600.000. Paso 2: calcule la deducción del artículo 387 (10% de $180.000.000 = $18.000.000, tope 32 UVT al mes) y los intereses de vivienda ($6.000.000, tope 1.200 UVT). Paso 3: compute la renta exenta del 25% sobre la base depurada de $141.600.000, que da $35.400.000, y verifique que no supere 790 UVT ($39.341.210). Paso 4: sume las partidas computables al límite ($59.400.000) y compárelas con el menor entre el 40% del resultado previo ($100.640.000) y 1.340 UVT ($66.730.660): no hay limitación. Paso 5: reste la deducción adicional por dos dependientes (144 UVT = $7.171.056), que está excluida del límite por el parágrafo 2 del artículo 336. Paso 6: convierta la renta líquida cedular de $185.028.944 a UVT (3.715,52) y aplique la fórmula del rango correspondiente de la tabla del artículo 241 para obtener $33.880.750. Recuerde que, si existieran dividendos o pensiones, cada cédula se liquidaría por separado y luego se sumarían los resultados para aplicar la tabla.',
    },
  {
    id: 'm05-a02',
    moduleId: 'm05',
    indicator: 'i05',
    title: 'Tabla de tarifas y cuantías en UVT: interpretación y cálculo',
    kind: 'tabla',
    instructions:
      'Lea la tabla de tarifas y cuantías clave del sistema tributario nacional y responda las preguntas. Para los valores en pesos use la UVT de 2026 ($52.374). Identifique en cada caso la norma que fija la tarifa o el tope y verifique si la cifra corresponde al impuesto de renta, al IVA o al impuesto nacional al consumo.',
    scenario:
      'Usted atiende el punto de orientación de la DIAN en el primer día de la temporada de declaración de renta. Varios contribuyentes llegan con dudas sobre tarifas, topes y cuantías: un empresario del sector financiero quiere confirmar su tarifa, un pensionado pregunta hasta cuánto queda exento, un dueño de restaurante debe aplicar el impuesto nacional al consumo y el impuesto a las bolsas plásticas, y una persona natural necesita saber si está obligada a declarar. La tabla que aparece a continuación reúne las cifras clave con la UVT de 2026 ($52.374); úsela para responder cada consulta citando la norma aplicable.',
    table: {
      caption: 'Tarifas y cuantías clave (UVT 2026 = $52.374)',
      headers: ['Concepto', 'Norma', 'Tarifa o cuantía', 'Valor en pesos 2026'],
      rows: [
        ['Tarifa general de renta de personas jurídicas', 'Art. 240 del ET (Ley 2277 de 2022, art. 10)', '35%', 'No aplica'],
        ['Sobretasa de entidades financieras', 'Art. 240, parágrafo 2 del ET', '5 puntos (40%) si la renta gravable es igual o superior a 120.000 UVT', 'No aplica'],
        ['Tarifa general de ganancia ocasional', 'Arts. 313, 314 y 316 del ET', '15%', 'No aplica'],
        ['Loterías, rifas y apuestas', 'Art. 317 del ET', '20%', 'No aplica'],
        ['Límite de rentas exentas y deducciones de la cédula general', 'Art. 336 del ET', '40% del resultado previo, máximo 1.340 UVT', '$70.181.160'],
        ['Deducción adicional por dependiente (hasta 4)', 'Art. 336 num. 3 del ET', '72 UVT por dependiente', '$3.770.928'],
        ['Renta exenta del 25% de pagos laborales', 'Art. 206 num. 10 del ET', '790 UVT anuales', '$41.375.460'],
        ['Exención de pensiones', 'Art. 206 num. 5 del ET', '1.000 UVT al mes', '$52.374.000'],
        ['Topes para declarar renta', 'DURT, art. 1.6.1.13.2.7', '4.500 UVT de patrimonio y 1.400 UVT de ingresos', '$235.683.000 y $73.323.600'],
        ['IVA general', 'Art. 468 del ET', '19%', 'No aplica'],
        ['INC de comidas y bebidas', 'Art. 512-3 del ET', '8%', 'No aplica'],
        ['INC de telefonía y datos', 'Art. 512-2 del ET', '4%', 'No aplica'],
        ['Vehículos de uso particular con valor FOB igual o superior a USD 30.000', 'Art. 512-4 del ET', '16%', 'No aplica'],
        ['Impuesto a las bolsas plásticas', 'Art. 512-15 del ET; Circular DIAN 000005 de 2025', '$73 por bolsa', '$73'],
      ],
    },
    questions: [
      {
        q: 'Con la UVT de 2026, ¿a cuánto equivale el límite absoluto de rentas exentas y deducciones de la cédula general?',
        options: ['$70.181.160', '$62.848.800', '$39.341.210', '$235.683.000'],
        correct: 0,
        why: 'El tope es de 1.340 UVT (art. 336 del ET, modificado por el artículo 7 de la Ley 2277 de 2022, que lo redujo desde 5.040 UVT). Con la UVT de 2026: 1.340 x $52.374 = $70.181.160.',
      },
      {
        q: '¿Cuánto vale en pesos, con la UVT de 2026, la renta exenta del 25% de los pagos laborales?',
        options: ['$52.374.000', '$41.375.460', '$28.800.000', '$12.569.760'],
        correct: 1,
        why: 'El tope es de 790 UVT anuales (art. 206 numeral 10 del ET, modificado por la Ley 2277 de 2022; antes eran 240 UVT mensuales). Con la UVT de 2026: 790 x $52.374 = $41.375.460. Las 1.000 UVT ($52.374.000) son el tope mensual de la exención de pensiones y las 240 UVT ($12.569.760) el tope de la deducción del 1% por compras electrónicas.',
      },
      {
        q: 'Un empresario del sector financiero con renta gravable de 130.000 UVT y una empresa de comidas y bebidas que debe aplicar el INC preguntan por sus tarifas. ¿Cuáles son, respectivamente?',
        options: ['35% y 19%', '40% y 8%', '35% y 8%', '40% y 16%'],
        correct: 1,
        why: 'La entidad financiera tributa al 40%: 35% de tarifa general más 5 puntos adicionales, porque su renta gravable (130.000 UVT) es igual o superior a 120.000 UVT (art. 240, parágrafo 2 del ET). El servicio de comidas y bebidas causa INC del 8% (art. 512-3 del ET); el 19% es la tarifa general del IVA y el 16% aplica a vehículos de gama alta y otros hechos generadores del INC.',
      },
      {
        q: '¿Cuánto paga por impuesto nacional al consumo una cuenta de restaurante de $400.000 y cuánto vale cada bolsa plástica en 2026?',
        options: [
          '$32.000 de INC y $70 por bolsa.',
          '$76.000 de INC y $73 por bolsa.',
          '$32.000 de INC y $73 por bolsa.',
          '$20.000 de INC y $73 por bolsa.',
        ],
        correct: 2,
        why: 'INC de comidas y bebidas: $400.000 x 8% = $32.000 (art. 512-3 del ET). La bolsa plástica vale $73 en 2026 (Circular DIAN 000005 del 16 de diciembre de 2025); los $70 correspondían a 2025. El valor de $76.000 resultaría de aplicar el 19% del IVA, que no es la tarifa del INC de restaurantes.',
      },
      {
        q: 'Una persona natural obtuvo en 2026 ingresos brutos por $80.000.000 y su patrimonio bruto al 31 de diciembre es de $250.000.000. ¿Está obligada a declarar renta?',
        options: [
          'No, porque ninguno de los dos topes se supera.',
          'Sí, porque su patrimonio bruto supera 4.500 UVT ($235.683.000), aunque sus ingresos ($80.000.000) superen el tope de 1.400 UVT ($73.323.600), lo que también la obliga.',
          'No, porque solo se tiene en cuenta el tope de ingresos.',
          'Sí, pero solo si además es responsable del IVA.',
        ],
        correct: 1,
        why: 'Los topes del DURT (art. 1.6.1.13.2.7) son alternativos: basta superar uno de ellos. Con la UVT de 2026, el patrimonio bruto de $250.000.000 supera 4.500 UVT ($235.683.000) y los ingresos de $80.000.000 superan 1.400 UVT ($73.323.600); por cualquiera de las dos razones la persona está obligada a declarar.',
      },
    ],
    explanation:
      'Paso 1: identifique en la tabla la norma y el tipo de tributo de cada fila; no mezcle topes de renta de personas naturales con tarifas del IVA o del INC. Paso 2: convierta las UVT multiplicando por $52.374 (UVT de 2026): 1.340 UVT = $70.181.160 y 790 UVT = $41.375.460. Paso 3: recuerde que el límite de 1.340 UVT es conjunto (rentas exentas más deducciones) y que las excepciones del parágrafo 2 del artículo 336 (72 UVT por dependiente y 1% de compras electrónicas) no consumen ese tope. Paso 4: diferencie las tarifas de cada tributo: renta de personas jurídicas 35% (40% con sobretasa financiera), ganancia ocasional 15% y 20%, IVA 19% y 5%, INC 4%, 8% y 16%. Paso 5: para los topes de declaración, recuerde que son alternativos: superar el de patrimonio o el de ingresos obliga a declarar.',
    },
  {
    id: 'm05-a03',
    moduleId: 'm05',
    indicator: 'i05',
    title: 'Ordena los pasos de la depuración de la renta de una persona jurídica',
    kind: 'ordenar',
    instructions:
      'Ordene los pasos de la determinación del impuesto sobre la renta de una persona jurídica, desde el primero hasta el último, tal como los presenta el artículo 26 del Estatuto Tributario y la liquidación del formulario 110.',
    orderItems: [
      'Ingresos brutos del periodo: se toma el total de los ingresos realizados, ordinarios y extraordinarios, que sean susceptibles de producir incremento neto del patrimonio.',
      'Restar las devoluciones, rebajas y descuentos: con ello se obtienen los ingresos netos.',
      'Restar los ingresos no constitutivos de renta ni ganancia ocasional (INCRNGO): con ello se obtiene la renta bruta.',
      'Restar los costos y las deducciones procedentes: con ello se obtiene la renta líquida.',
      'Restar las rentas exentas y las pérdidas fiscales compensables de periodos anteriores (art. 147 del ET): con ello se obtiene la renta líquida gravable.',
      'Comparar la renta líquida gravable con la renta presuntiva (art. 188 del ET) y tomar la base mayor: hoy la renta presuntiva es del 0%.',
      'Aplicar la tarifa del artículo 240 del ET (35% general) y restar los descuentos tributarios: con ello se obtiene el impuesto neto de renta.',
      'Restar retenciones y autorretenciones y el anticipo del año anterior, y calcular y sumar el anticipo del año siguiente (art. 807 del ET): se obtiene el total a pagar con la declaración.',
    ],
    explanation:
      'Paso 1: la depuración comienza con los ingresos brutos, definidos por el artículo 26 del ET como los ingresos susceptibles de producir incremento neto del patrimonio en el momento de su percepción. Paso 2: las devoluciones, rebajas y descuentos son el primer ajuste porque no representan ingreso para el contribuyente; al restarlas se llega a los ingresos netos. Paso 3: los INCRNGO (por ejemplo, los dividendos recibidos de otras sociedades nacionales) no se gravan, y su resta da la renta bruta. Paso 4: solo después se restan los costos y las deducciones procedentes, que son el instrumento para atender la actividad productora de renta; el resultado es la renta líquida. Paso 5: la renta líquida gravable resulta de restar las rentas exentas del artículo 235-2 del ET y las pérdidas fiscales compensables de los 12 periodos siguientes. Paso 6: la base así obtenida se compara con la renta presuntiva del artículo 188 y se toma la mayor, aunque hoy la presuntiva es del 0%. Paso 7: sobre la base se aplica la tarifa del artículo 240 (35% general, con las sobretasas sectoriales) y se restan los descuentos tributarios, con lo que se obtiene el impuesto neto de renta. Paso 8: a la liquidación final se incorporan los pagos anticipados: se descuentan las retenciones y autorretenciones del año y el anticipo del año anterior, y se suma el anticipo del año siguiente calculado al 75% del impuesto neto de renta menos retenciones del año (art. 807 del ET).',
  },
]
