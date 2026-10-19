import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 5 (i05 liquidación de impuestos nacionales)
// 34 preguntas: renta PJ, renta PN, RTE, ganancia ocasional, IVA e INC.
// Las cuantías se expresan con la UVT vigente para 2026 ($52.374, Resolución
// DIAN 000238 del 15-dic-2025) o con la UVT del año del caso, según se indique.
// Las tarifas reflejan la Ley 2277 de 2022 y la normativa posterior verificada.
// El arreglo wrong esta alineado por indice con options: wrong[i] explica por
// que la opcion i es incorrecta (el indice correcto contiene la confirmacion).
// ============================================================

export const QUESTIONS: Question[] = [
  // ---------------- Lección 1: renta de personas jurídicas ----------------
  {
    id: 'q-m05-001',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Tarifa general de renta de personas jurídicas',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Para el año gravable 2026, la tarifa general del impuesto sobre la renta aplicable a las sociedades nacionales y asimiladas es:',
    options: ['30%', '32%', '35%', '40%'],
    correct: 2,
    justification:
      'El artículo 10 de la Ley 2277 de 2022 modificó el artículo 240 del Estatuto Tributario y fijó la tarifa general en 35% a partir del año gravable 2023. La Ley 2010 de 2019 había establecido 32% para 2020, 31% para 2021 y 30% para 2022, tarifas que el material de estudio recoge pero que ya no rigen.',
    wrong: [
      'El 30% correspondió al año gravable 2022 (Ley 2010 de 2019) y fue sustituido por el 35% desde 2023.',
      'El 32% correspondió al año gravable 2020 (Ley 2010 de 2019); no es la tarifa vigente.',
      'Es la opción correcta: 35% desde el año gravable 2023 (Ley 2277 de 2022, art. 10; art. 240 del ET).',
      'El 40% resulta de sumar la sobretasa de 5 puntos del parágrafo 2 del artículo 240 del ET, que solo aplica a ciertas entidades financieras y aseguradoras con renta gravable igual o superior a 120.000 UVT.',
    ],
    source: 'Ley 2277 de 2022, art. 10 (art. 240 del ET); MATERIAL TOTAL, Unidad 1',
  },
  {
    id: 'q-m05-002',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Clasificación de los sujetos',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      '¿Cuál de las siguientes entidades es no contribuyente declarante del impuesto sobre la renta?',
    options: [
      'Una sociedad anónima nacional, pues las sociedades del artículo 16 son no contribuyentes declarantes.',
      'Una entidad sin ánimo de lucro del artículo 19 del Estatuto Tributario, que declara sin ser contribuyente.',
      'Una junta de acción comunal, porque su naturaleza comunitaria la obliga a declarar renta cada año.',
      'Una sucursal de sociedad extranjera, porque al no tener domicilio en el país no es contribuyente.',
    ],
    correct: 1,
    justification:
      'Las entidades sin ánimo de lucro del artículo 19 del ET son no contribuyentes declarantes: no son contribuyentes del impuesto sobre la renta, pero están obligadas a presentar declaración (de ingresos y patrimonio o del régimen tributario especial). Las sociedades del artículo 16 son contribuyentes declarantes; las juntas de acción comunal son no contribuyentes no declarantes del artículo 22; y las sucursales de sociedades extranjeras son contribuyentes con establecimiento permanente.',
    wrong: [
      'Las sociedades anónimas nacionales son contribuyentes declarantes del artículo 16 del ET, no no contribuyentes: declaran y pagan sobre su renta.',
      'Es la opción correcta: las ESAL del artículo 19 del ET son no contribuyentes declarantes.',
      'Las juntas de acción comunal son no contribuyentes no declarantes del artículo 22 del ET; su naturaleza comunitaria no las obliga a declarar renta.',
      'Las sucursales de sociedades extranjeras son contribuyentes con establecimiento permanente: tributan sobre las rentas de fuente nacional atribuibles, aunque su casa matriz no tenga domicilio en el país.',
    ],
    source: 'Estatuto Tributario, arts. 16, 19, 22 y 23; MATERIAL TOTAL, Unidad 1',
  },
  {
    id: 'q-m05-003',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Depuración y liquidación del impuesto (caso)',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'La sociedad Comercializadora Andina S.A.S. reportó en el año: ingresos brutos $1.000.000.000; devoluciones, rebajas y descuentos $50.000.000; dividendos no constitutivos de renta de otra sociedad nacional $100.000.000; costos $400.000.000; deducciones procedentes $250.000.000. No tiene rentas exentas, pérdidas fiscales, descuentos tributarios ni retenciones. ¿Cuál es el impuesto sobre la renta a pagar?',
    options: ['$60.000.000', '$70.000.000', '$65.000.000', '$72.500.000'],
    correct: 1,
    justification:
      'Depuración: ingresos netos = $1.000.000.000 − $50.000.000 = $950.000.000; renta bruta = $950.000.000 − $100.000.000 = $850.000.000; renta líquida = $850.000.000 − $400.000.000 − $250.000.000 = $200.000.000; renta líquida gravable = $200.000.000. Impuesto al 35% (Ley 2277 de 2022) = $70.000.000.',
    wrong: [
      '$60.000.000 resulta de aplicar el 30% (tarifa derogada para los años gravables actuales) sobre la renta líquida de $200.000.000.',
      'Es la opción correcta: la renta líquida es $200.000.000 y el 35% de esa base equivale a $70.000.000.',
      '$65.000.000 supone una renta líquida de $200.000.000 con una tarifa del 32,5%, que no corresponde a ninguna vigente.',
      '$72.500.000 excede el impuesto correcto: los datos no generan una base superior a $200.000.000.',
    ],
    source: 'Estatuto Tributario, art. 26; Ley 2277 de 2022, art. 10',
  },
  {
    id: 'q-m05-004',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Hecho generador del impuesto sobre la renta',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'De acuerdo con el artículo 26 del Estatuto Tributario, el hecho generador del impuesto sobre la renta está constituido por:',
    options: [
      'La firma de cualquier contrato comercial con personas nacionales, pues todo negocio jurídico genera renta para las partes que lo celebran.',
      'Los ingresos susceptibles de producir un incremento neto del patrimonio en el momento de su percepción, que no hayan sido expresamente exceptuados.',
      'La posesión de bienes cuyo valor supere 4.500 UVT al 31 de diciembre, porque ese patrimonio demuestra capacidad contributiva.',
      'La venta de bienes corporales muebles dentro del territorio nacional, pues toda enajenación produce un ingreso gravable.',
    ],
    correct: 1,
    justification:
      'El artículo 26 del ET define el hecho generador como los ingresos susceptibles de producir un incremento neto del patrimonio en el momento de su percepción, siempre que no hayan sido expresamente exceptuados. Sobre esa definición se construye toda la depuración que conduce a la renta líquida gravable.',
    wrong: [
      'La firma de contratos no es un hecho generador de renta: el tributo recae sobre los ingresos que produzcan incremento neto del patrimonio, no sobre el negocio jurídico en sí.',
      'Es la opción correcta: así define el artículo 26 del ET el hecho generador del impuesto sobre la renta.',
      'La posesión de bienes por más de 4.500 UVT es un criterio para determinar si una persona natural está obligada a declarar, no el hecho generador del artículo 26 del ET.',
      'La venta de bienes corporales muebles es el hecho generador del IVA (art. 420 del ET); en renta lo gravable es el ingreso que la operación produzca, no la venta como tal.',
    ],
    source: 'Estatuto Tributario, art. 26',
  },
  {
    id: 'q-m05-005',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Sobretasas del artículo 240 del ET',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Una entidad del sector financiero obtuvo en 2026 una renta gravable de 150.000 UVT. ¿Qué tarifa total del impuesto sobre la renta le corresponde?',
    options: ['35%', '38%', '40%', '45%'],
    correct: 2,
    justification:
      'El parágrafo 2 del artículo 240 del ET (Ley 2277 de 2022) establece 5 puntos adicionales sobre la tarifa general para las entidades del sector financiero y asegurador cuya renta gravable sea igual o superior a 120.000 UVT, durante los años gravables 2023 a 2027. Como 150.000 UVT supera el umbral, la tarifa es 35% + 5 = 40%.',
    wrong: [
      'El 35% es la tarifa general, pero no incluye la sobretasa sectorial que aplica por superar 120.000 UVT de renta gravable.',
      'El 38% (35% + 3 puntos) corresponde a la sobretasa de las generadoras de energía con recursos hídricos, no al sector financiero.',
      'Es la opción correcta: 35% más 5 puntos adicionales de la sobretasa financiera = 40%.',
      'El 45% es el tope de la sobretasa del sector del carbón (0 a 10 puntos) y no aplica al sector financiero.',
    ],
    source: 'Estatuto Tributario, art. 240, parágrafo 2; Ley 2277 de 2022',
  },
  // ---------------- Lección 2: base, anticipo y autorretención ----------------
  {
    id: 'q-m05-006',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Anticipo del impuesto sobre la renta (caso)',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una sociedad determinó un impuesto neto de renta de $400.000.000 y le practicaron retenciones y autorretenciones por $70.000.000 durante el año. ¿Cuál es el anticipo del impuesto sobre la renta del año siguiente, conforme al artículo 807 del Estatuto Tributario?',
    options: ['$300.000.000', '$230.000.000', '$400.000.000', '$370.000.000'],
    correct: 1,
    justification:
      'El anticipo equivale al 75% del impuesto neto de renta, menos las retenciones en la fuente que le practicaron durante el año gravable: 75% x $400.000.000 = $300.000.000; $300.000.000 − $70.000.000 = $230.000.000.',
    wrong: [
      '$300.000.000 es el 75% del impuesto neto sin descontar las retenciones del año.',
      'Es la opción correcta: 75% x $400.000.000 = $300.000.000, menos $70.000.000 de retenciones = $230.000.000.',
      '$400.000.000 corresponde al impuesto neto de renta del año, no al anticipo del año siguiente.',
      '$370.000.000 resulta de restar las retenciones al impuesto neto, operación que corresponde al saldo del año y no al cálculo del anticipo.',
    ],
    source: 'Estatuto Tributario, art. 807; MATERIAL TOTAL, Unidad 1',
  },
  {
    id: 'q-m05-007',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Renta presuntiva',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'En relación con la renta presuntiva del impuesto sobre la renta para el año gravable 2026, es correcto afirmar que:',
    options: [
      'Equivale al 3,5% del patrimonio líquido depurado del año anterior.',
      'Equivale al 1,5% del patrimonio líquido y siempre se paga sobre ella.',
      'Es del 0% desde el año gravable 2021.',
      'Fue derogada, por lo que ya no se compara con la renta líquida gravable.',
    ],
    correct: 2,
    justification:
      'El artículo 90 de la Ley 2010 de 2019 modificó el artículo 188 del ET y redujo el porcentaje de la renta presuntiva al 0,5% para 2020 y al 0% a partir del año gravable 2021. La norma no fue derogada: la liquidación sigue comparando la renta líquida gravable con la presuntiva y tomando la mayor, pero hoy la presuntiva es cero.',
    wrong: [
      'El 3,5% era el porcentaje general del artículo 188 del ET antes de la reducción de la Ley 2010 de 2019.',
      'El 1,5% correspondió a los años gravables hasta 2019 y, además, no siempre se paga sobre ella, sino sobre la base que resulte mayor.',
      'Es la opción correcta: 0% desde el año gravable 2021 (art. 90 de la Ley 2010 de 2019, que modificó el art. 188 del ET).',
      'La renta presuntiva no fue derogada: el artículo 188 sigue vigente y la comparación con la renta líquida gravable continúa en la liquidación.',
    ],
    source: 'Estatuto Tributario, arts. 188 y 189; Ley 2010 de 2019, art. 90',
  },
  {
    id: 'q-m05-008',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Compensación de pérdidas fiscales (caso)',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'La sociedad El Roble S.A.S. obtuvo en 2026 una renta líquida de $500.000.000 y tiene una pérdida fiscal de $180.000.000 generada hace cuatro años, aún pendiente de compensar y debidamente probada. ¿Cuál es el impuesto sobre la renta del año, sin otros conceptos?',
    options: ['$175.000.000', '$112.000.000', '$130.000.000', '$63.000.000'],
    correct: 1,
    justification:
      'Las pérdidas fiscales se compensan con las rentas líquidas ordinarias de los doce periodos gravables siguientes (art. 147 del ET). Renta líquida gravable = $500.000.000 − $180.000.000 = $320.000.000. Impuesto = $320.000.000 x 35% = $112.000.000.',
    wrong: [
      '$175.000.000 resulta de no compensar la pérdida y gravar los $500.000.000 completos.',
      'Es la opción correcta: $500.000.000 − $180.000.000 = $320.000.000, y el 35% de esa base es $112.000.000.',
      '$130.000.000 supone una renta gravable de $371.428.571, que no se deriva de los datos.',
      '$63.000.000 es el 35% de la pérdida ($180.000.000), no el impuesto del año; la pérdida reduce la base, no genera impuesto.',
    ],
    source: 'Estatuto Tributario, art. 147; Ley 2277 de 2022, art. 10',
  },
  {
    id: 'q-m05-009',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Comparación de bases',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Si en un año gravable la renta líquida gravable de una sociedad fuera de $100.000.000 y la renta presuntiva de $250.000.000, la sociedad debería pagar el impuesto sobre:',
    options: [
      'Los $100.000.000, porque la renta real siempre prevalece.',
      'Los $250.000.000, porque se toma la base mayor.',
      'La suma de ambas bases, $350.000.000.',
      'El promedio de las dos bases, $175.000.000.',
    ],
    correct: 1,
    justification:
      'El artículo 188 del ET obliga a comparar la renta líquida gravable con la renta presuntiva y a liquidar sobre la mayor. Aunque hoy la renta presuntiva es del 0% (por lo que en la práctica siempre resulta menor), la regla de comparación sigue vigente: en el supuesto planteado la base sería $250.000.000.',
    wrong: [
      'La renta líquida gravable no prevalece por sí sola: la ley toma la base mayor entre la real y la presuntiva.',
      'Es la opción correcta: se compara y se liquida sobre la base mayor, que en el supuesto es la renta presuntiva de $250.000.000.',
      'Las bases legales no se suman: son alternativas y se escoge la mayor.',
      'La ley no contempla promedios de bases gravables.',
    ],
    source: 'Estatuto Tributario, art. 188',
  },
  {
    id: 'q-m05-010',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Autorretención especial',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Un contador debe configurar la autorretención especial a título del impuesto sobre la renta de una sociedad exonerada del pago de aportes parafiscales. ¿Cuál de las siguientes afirmaciones es correcta?',
    options: [
      'La tarifa única es del 1% sobre los ingresos brutos, sin importar la actividad.',
      'La tarifa se determina según el código de actividad económica (CIIU) y puede ser 0,40%, 0,75%, 1,10% o 1,50%.',
      'La autorretención solo la practican las entidades sin ánimo de lucro.',
      'La autorretención se declara y paga anualmente junto con la declaración de renta.',
    ],
    correct: 1,
    justification:
      'La autorretención especial del Decreto 2201 de 2016 (artículos 1.2.6.6 a 1.2.6.9 del DURT) aplica a las sociedades nacionales y asimiladas exoneradas de aportes parafiscales (art. 114-1 del ET). Su tarifa depende de la actividad económica: el artículo 1.2.6.8 del DURT, sustituido por el Decreto 242 de 2024, fijó tarifas del 0,40%, 0,75%, 1,10% y 1,50%. Se declara y paga mensualmente.',
    wrong: [
      'No existe una tarifa única del 1%: es una tarifa diferenciada por actividad económica definida en el DURT.',
      'Es la opción correcta: la tarifa depende del código CIIU y oscila entre 0,40% y 1,50% (DURT, art. 1.2.6.8).',
      'Las entidades sin ánimo de lucro no son autorretenedoras; la obligación recae en las sociedades exoneradas de parafiscales.',
      'La autorretención tiene periodo mensual, no anual; la declaración anual es la de renta.',
    ],
    source: 'Decreto 2201 de 2016 (DURT, arts. 1.2.6.6 a 1.2.6.9); Decreto 242 de 2024',
  },
  // ---------------- Lección 3: ESAL y RTE ----------------
  {
    id: 'q-m05-011',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Requisitos del Régimen Tributario Especial',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Una entidad sin ánimo de lucro debe presentar la memoria económica con la manifestación firmada por el representante legal y el revisor fiscal cuando sus ingresos del año:',
    options: [
      'Superan 3.500 UVT.',
      'Superan 45.000 UVT.',
      'Superan 160.000 UVT.',
      'Superan 1.000 UVT.',
    ],
    correct: 2,
    justification:
      'El artículo 356-3 del ET exige a las entidades del Régimen Tributario Especial presentar, junto con la declaración, una memoria económica con la manifestación firmada del representante legal y el revisor fiscal (cuando exista) cuando los ingresos del año superen 160.000 UVT.',
    wrong: [
      'Las 3.500 UVT son el umbral del artículo 356-1 del ET para los controles de adquisiciones y del régimen simplificado del INC de restaurantes, no el de la memoria económica.',
      'Las 45.000 UVT corresponden al umbral del deber de presentar conciliación fiscal en otros contextos, no a la memoria económica del RTE.',
      'Es la opción correcta: la memoria económica es exigible cuando los ingresos superan 160.000 UVT (art. 356-3 del ET).',
      'Las 1.000 UVT corresponden, entre otros, al tope de la renta exenta de pensiones por mes, no a la memoria económica.',
    ],
    source: 'Estatuto Tributario, art. 356-3; MATERIAL TOTAL, Unidad 2',
  },
  {
    id: 'q-m05-012',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Actividades meritorias',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      '¿Cuál de las siguientes es una actividad meritoria del artículo 359 del Estatuto Tributario?',
    options: [
      'La importación y comercialización de vehículos.',
      'La actividad de microcrédito.',
      'La intermediación financiera con ánimo de lucro.',
      'La explotación de juegos de suerte y azar.',
    ],
    correct: 1,
    justification:
      'El artículo 359 del ET enumera trece actividades meritorias, entre las que se incluyen educación, salud, cultura, ciencia, desarrollo social, medio ambiente, deporte, derechos humanos y la actividad de microcrédito, adicionada por la Ley 1819 de 2016.',
    wrong: [
      'La importación y comercialización de vehículos es una actividad comercial con ánimo de lucro, ajena a las actividades meritorias.',
      'Es la opción correcta: el microcrédito es una de las trece actividades meritorias del artículo 359 del ET.',
      'La intermediación financiera con ánimo de lucro no está en la lista del artículo 359 del ET.',
      'La explotación de juegos de suerte y azar no es una actividad meritoria del artículo 359.',
    ],
    source: 'Estatuto Tributario, art. 359 (Ley 1819 de 2016, art. 151)',
  },
  {
    id: 'q-m05-013',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Beneficio neto o excedente (caso)',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una fundación del Régimen Tributario Especial obtuvo ingresos por actividades meritorias de $1.200.000.000 y rendimientos financieros de $60.000.000; sus costos y gastos procedentes fueron de $900.000.000. Invirtió $300.000.000 en el objeto social y dejó $60.000.000 sin invertir. ¿Cuánto impuesto debe pagar por el excedente no invertido?',
    options: ['$0', '$12.000.000', '$21.000.000', '$126.000.000'],
    correct: 1,
    justification:
      'Beneficio neto o excedente = ($1.200.000.000 + $60.000.000) − $900.000.000 = $360.000.000. El excedente invertido en el objeto social está exento (art. 358 del ET). El excedente no invertido de $60.000.000 se grava a la tarifa especial del 20% (art. 1.2.1.5.1.36 del DURT): $60.000.000 x 20% = $12.000.000.',
    wrong: [
      '$0 supondría que todo el excedente quedó exento, pero $60.000.000 no se invirtieron en el objeto social.',
      'Es la opción correcta: los $60.000.000 no invertidos se gravan al 20%, es decir, $12.000.000.',
      '$21.000.000 resultaría de aplicar el 35% sobre el excedente no invertido, tarifa que no corresponde al excedente no invertido de una ESAL del RTE.',
      '$126.000.000 resultaría de gravar al 35% el excedente total de $360.000.000, desconociendo la exención del artículo 358 del ET.',
    ],
    source: 'Estatuto Tributario, arts. 357 y 358; DURT, art. 1.2.1.5.1.36',
  },
  {
    id: 'q-m05-014',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Pérdida del Régimen Tributario Especial',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Una ESAL calificada en el Régimen Tributario Especial no acredita el cumplimiento de los requisitos durante el año. La consecuencia prevista en el artículo 364-3 del Estatuto Tributario es que la DIAN:',
    options: [
      'Le concede automáticamente un periodo de gracia de cinco años.',
      'La determina como sociedad comercial, con sometimiento al régimen tributario general.',
      'Le impone una multa del 1% de su patrimonio, sin otra consecuencia.',
      'La excluye del RUT de manera definitiva e irrevocable.',
    ],
    correct: 1,
    justification:
      'El artículo 364-3 del ET (modificado por el artículo 70 de la Ley 2010 de 2019) dispone que si la entidad no cumple los requisitos del Régimen Tributario Especial, la DIAN la determina como sociedad comercial, con lo cual pasa al régimen tributario general y a la tarifa general del impuesto sobre la renta.',
    wrong: [
      'La ley no concede un periodo de gracia automático de cinco años; la calificación se actualiza cada año y el incumplimiento tiene consecuencias inmediatas.',
      'Es la opción correcta: la consecuencia legal es la determinación como sociedad comercial (art. 364-3 del ET).',
      'La consecuencia del artículo 364-3 no es una multa del 1% del patrimonio, sino la determinación como sociedad comercial.',
      'La exclusión del RUT no es definitiva ni irrevocable; además, la consecuencia legal específica es la determinación como sociedad comercial.',
    ],
    source: 'Estatuto Tributario, art. 364-3; Ley 2010 de 2019, art. 70',
  },
  // ---------------- Lección 4: renta de personas naturales ----------------
  {
    id: 'q-m05-015',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Residencia fiscal de personas naturales',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Para efectos del impuesto sobre la renta, una persona natural es residente fiscal en Colombia, entre otros supuestos, cuando permanece en el país de manera continua o discontinua por más de:',
    options: ['90 días en el año calendario.', '183 días en el año calendario.', '180 días en el semestre.', '365 días en el año calendario.'],
    correct: 1,
    justification:
      'El artículo 10 del ET considera residentes a las personas naturales que permanezcan en el país de manera continua o discontinua por más de 183 días durante el año calendario, además de otros supuestos (nacionales con residencia en el país, funcionarios del Estado en el exterior, familiares residentes, rentas de fuente nacional superiores al 50% de los ingresos totales).',
    wrong: [
      'Noventa días no es el plazo legal de residencia.',
      'Es la opción correcta: más de 183 días en el año calendario (art. 10 del ET).',
      'La ley habla de 183 días en el año calendario, no de 180 días en el semestre.',
      'La residencia no se determina por la permanencia de todo el año calendario; el umbral legal es de más de 183 días.',
    ],
    source: 'Estatuto Tributario, art. 10',
  },
  {
    id: 'q-m05-016',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Topes para declarar renta (aplicación)',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Con la UVT de 2026 ($52.374), una persona natural está obligada a declarar renta cuando sus ingresos brutos del año superan:',
    options: ['$69.719.000', '$73.323.600', '$235.683.000', '$52.374.000'],
    correct: 1,
    justification:
      'El artículo 1.6.1.13.2.7 del DURT fija el tope de ingresos brutos en 1.400 UVT. Con la UVT de 2026 ($52.374): 1.400 x $52.374 = $73.323.600. El tope de patrimonio bruto es de 4.500 UVT = $235.683.000.',
    wrong: [
      '$69.719.000 correspondía a 1.400 UVT con la UVT de 2025 ($49.799), no con la de 2026.',
      'Es la opción correcta: 1.400 UVT x $52.374 = $73.323.600.',
      '$235.683.000 es el tope de patrimonio bruto (4.500 UVT), no el de ingresos.',
      '$52.374.000 equivale a 1.000 UVT: no corresponde a ninguno de los topes legales de declaración.',
    ],
    source: 'DURT, art. 1.6.1.13.2.7; Resolución DIAN 000238 de 2025 (UVT 2026)',
  },
  {
    id: 'q-m05-017',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Clasificación cedular de los ingresos',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Los honorarios que percibe un profesional liberal por el ejercicio independiente de su profesión, sin relación laboral, corresponden a:',
    options: [
      'Rentas de trabajo de la cédula general.',
      'Rentas de capital de la cédula general.',
      'Rentas no laborales de la cédula general.',
      'Ganancias ocasionales.',
    ],
    correct: 0,
    justification:
      'El artículo 103 del ET incluye expresamente en las rentas de trabajo los honorarios y comisiones percibidos por el ejercicio de profesiones liberales, incluso sin relación laboral. Por eso integran la subcédula de rentas de trabajo de la cédula general y admiten la elección entre costos y gastos o la renta exenta del 25% del artículo 206 numeral 10.',
    wrong: [
      'Es la opción correcta: el artículo 103 del ET ubica los honorarios de profesiones liberales entre las rentas de trabajo.',
      'Las rentas de capital provienen de bienes que producen rendimientos (intereses, arrendamientos, regalías), no del ejercicio profesional.',
      'Las rentas no laborales del artículo 340 del ET incluyen honorarios distintos de las profesiones liberales y las actividades comerciales e industriales; la profesión liberal está expresamente en el artículo 103.',
      'Las ganancias ocasionales se generan por hechos excepcionales (venta de activos poseídos dos años o más, herencias, loterías), no por la prestación habitual de servicios profesionales.',
    ],
    source: 'Estatuto Tributario, arts. 103, 335, 338, 339 y 340',
  },
  {
    id: 'q-m05-018',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Límite del 40% y 1.340 UVT (caso)',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un residente presenta un resultado previo de la cédula general (ingresos totales menos INCRNGO y costos y gastos) de $266.000.000 y solicita rentas exentas y deducciones por $90.000.000 (todas computables al límite). Con la UVT de 2025 ($49.799), ¿cuál es la renta líquida cedular de la cédula general?',
    options: ['$176.000.000', '$199.269.340', '$159.600.000', '$106.400.000'],
    correct: 1,
    justification:
      'El límite del artículo 336 del ET es el menor entre el 40% del resultado previo ($266.000.000 x 40% = $106.400.000) y 1.340 UVT (1.340 x $49.799 = $66.730.660). Como las partidas computables ascienden a $90.000.000 y superan el tope de $66.730.660, solo se resta ese valor: $266.000.000 − $66.730.660 = $199.269.340.',
    wrong: [
      '$176.000.000 resta las partidas completas ($266.000.000 − $90.000.000) sin aplicar el límite legal.',
      'Es la opción correcta: se resta el tope de 1.340 UVT ($66.730.660) y la renta líquida cedular es $199.269.340.',
      '$159.600.000 resultaría de restar $106.400.000, es decir, de ignorar que el límite absoluto de 1.340 UVT es menor.',
      '$106.400.000 confunde el valor del límite con la renta líquida cedular resultante.',
    ],
    source: 'Estatuto Tributario, art. 336; Ley 2277 de 2022, art. 7',
  },
  {
    id: 'q-m05-019',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Renta exenta del 25% frente a costos y gastos',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Un profesional independiente que presta servicios personales puede solicitar la renta exenta del 25% del artículo 206 numeral 10 del ET. Sobre esa elección es correcto afirmar que:',
    options: [
      'Puede solicitar el 25% exento y, además, deducir los costos y gastos de los mismos ingresos.',
      'Debe elegir entre deducir los costos y gastos o solicitar la renta exenta del 25%, pues son excluyentes.',
      'La renta exenta del 25% reemplaza siempre a los costos y gastos, que no pueden deducirse en ningún caso.',
      'La renta exenta del 25% solo existe para los asalariados con contrato de trabajo.',
    ],
    correct: 1,
    justification:
      'El artículo 336 numeral 2 del ET y el parágrafo 5 del artículo 206 exigen optar: el contribuyente que solicita la renta exenta del 25% no puede además deducir los costos y gastos de los mismos ingresos. La opción aplica tanto a las rentas de trabajo por honorarios como a las rentas no laborales, y el tope de la exención es de 790 UVT anuales después de la Ley 2277 de 2022.',
    wrong: [
      'La ley prohíbe expresamente acumular el 25% exento con los costos y gastos de los mismos ingresos.',
      'Es la opción correcta: el contribuyente debe optar entre costos y gastos o la renta exenta del 25%.',
      'El contribuyente sí puede deducir costos y gastos si renuncia al 25% exento; la exclusión opera en ambos sentidos.',
      'El numeral 10 del artículo 206 del ET y su parágrafo 5 aplican también a quienes no tienen relación laboral (honorarios y rentas no laborales).',
    ],
    source: 'Estatuto Tributario, arts. 206 y 336; Ley 2277 de 2022, art. 2',
  },
  // ---------------- Lección 5: pensiones, dividendos y tarifas ----------------
  {
    id: 'q-m05-020',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Cédula de pensiones (caso)',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un pensionado residente recibe una mesada mensual de $62.848.800, equivalente a 1.200 UVT de 2026 ($52.374). Sin otras rentas, ¿cuál es el impuesto sobre la renta a cargo por el año?',
    options: ['$0', '$16.340.688', '$125.697.600', '$8.170.344'],
    correct: 1,
    justification:
      'La exención del artículo 206 numeral 5 del ET cubre 1.000 UVT mensuales. Exceso gravado mensual: 1.200 − 1.000 = 200 UVT; renta líquida cedular anual: 200 x 12 = 2.400 UVT = $125.697.600. Con la tabla del artículo 241: (2.400 − 1.700) x 28% + 116 UVT = 312 UVT. Impuesto: 312 x $52.374 = $16.340.688.',
    wrong: [
      '$0 supondría que toda la mesada queda exenta, pero el exceso de 200 UVT mensuales está gravado.',
      'Es la opción correcta: la renta cedular de 2.400 UVT se grava con 312 UVT = $16.340.688.',
      '$125.697.600 es la renta líquida cedular gravable (2.400 UVT), no el impuesto.',
      '$8.170.344 es la mitad del impuesto correcto y no corresponde a ningún paso de la liquidación.',
    ],
    source: 'Estatuto Tributario, arts. 206 num. 5, 241 y 337',
  },
  {
    id: 'q-m05-021',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Descuento por dividendos (art. 254-1)',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Un residente recibe dividendos no gravados por $209.496.000, equivalentes a 4.000 UVT de 2026 ($52.374). ¿A cuánto asciende el descuento tributario del artículo 254-1 del Estatuto Tributario?',
    options: ['$28.957.585', '$22.861.251', '$152.408.340', '$76.000.000'],
    correct: 0,
    justification:
      'El artículo 254-1 del ET (adicionado por la Ley 2277 de 2022) otorga un descuento del 19% sobre el exceso de 1.090 UVT de la renta líquida cedular de dividendos: (4.000 − 1.090) = 2.910 UVT x 19% = 552,9 UVT. En pesos: 552,9 x $52.374 = $28.957.585.',
    wrong: [
      'Es la opción correcta: (4.000 − 1.090) UVT x 19% = 552,9 UVT = $28.957.585.',
      '$22.861.251 corresponde al 15% de las 2.910 UVT ($152.408.340), que es la tarifa de retención en la fuente sobre el exceso de 1.090 UVT, no el descuento.',
      '$152.408.340 es el valor del exceso de 1.090 UVT, antes de aplicar cualquier tarifa.',
      '$76.000.000 resulta de aplicar el 19% a las 4.000 UVT completas, sin excluir las 1.090 UVT que la norma no grava con el descuento.',
    ],
    source: 'Estatuto Tributario, art. 254-1; Ley 2277 de 2022, art. 5',
  },
  {
    id: 'q-m05-022',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Tabla del artículo 241',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Una persona natural residente tiene una renta líquida gravable de 3.000 UVT. Según la tabla del artículo 241 del Estatuto Tributario, su impuesto se determina con:',
    options: [
      'El 0%, porque no supera 4.100 UVT.',
      'El 19% sobre el exceso de 1.090 UVT.',
      'El 28% sobre el exceso de 1.700 UVT, más 116 UVT.',
      'El 33% sobre el exceso de 4.100 UVT, más 788 UVT.',
    ],
    correct: 2,
    justification:
      'La tabla del artículo 241 es marginal y tiene siete rangos. Una base de 3.000 UVT cae en el rango más de 1.700 hasta 4.100 UVT, cuya fórmula es: (renta líquida gravable − 1.700 UVT) x 28% + 116 UVT. La fórmula del rango se aplica porque la base supera el límite inferior del tramo.',
    wrong: [
      'El 0% solo aplica al primer rango, de 0 a 1.090 UVT; la base de 3.000 UVT lo supera.',
      'La fórmula del 19% corresponde al rango más de 1.090 hasta 1.700 UVT.',
      'Es la opción correcta: 3.000 UVT cae en el rango de más de 1.700 hasta 4.100 UVT (28% + 116 UVT).',
      'La fórmula del 33% más 788 UVT corresponde al rango más de 4.100 hasta 8.670 UVT.',
    ],
    source: 'Estatuto Tributario, art. 241',
  },
  {
    id: 'q-m05-023',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Liquidación con la tabla del artículo 241 (caso)',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un residente tiene una renta líquida gravable de 10.000 UVT en 2026 (UVT de $52.374). ¿Cuál es el impuesto de renta antes de descuentos y retenciones?',
    options: ['$144.630.801', '$120.250.704', '$143.242.890', '$24.380.097'],
    correct: 0,
    justification:
      'La base de 10.000 UVT cae en el rango más de 8.670 hasta 18.970 UVT: impuesto = (10.000 − 8.670) x 35% + 2.296 UVT = 1.330 x 0,35 + 2.296 = 465,5 + 2.296 = 2.761,5 UVT. En pesos: 2.761,5 x $52.374 = $144.630.801.',
    wrong: [
      'Es la opción correcta: (10.000 − 8.670) x 35% + 2.296 = 2.761,5 UVT = $144.630.801.',
      '$120.250.704 corresponde solo al impuesto acumulado del límite inferior del rango (2.296 UVT), sin sumar el impuesto sobre el exceso.',
      '$143.242.890 resulta de aplicar la fórmula del tramo anterior (33% sobre el exceso de 4.100 UVT, más 788 UVT), que corresponde a bases de más de 4.100 hasta 8.670 UVT.',
      '$24.380.097 es únicamente el impuesto sobre el exceso (465,5 UVT), sin sumar el impuesto del límite inferior del rango.',
    ],
    source: 'Estatuto Tributario, art. 241',
  },
  {
    id: 'q-m05-024',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Aportes a pensiones voluntarias y AFC',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'Los aportes a fondos de pensiones voluntarias y a cuentas de ahorro para el fomento de la construcción (AFC) son exentos o deducibles hasta el 30% del ingreso laboral o tributario del año, con un tope anual de:',
    options: ['1.200 UVT', '3.800 UVT', '5.040 UVT', '790 UVT'],
    correct: 1,
    justification:
      'Los artículos 126-1 y 126-4 del ET permiten tratar como exentos o deducibles los aportes a pensiones voluntarias y AFC hasta el 30% del ingreso laboral o tributario del año, con un límite conjunto de 3.800 UVT anuales y una permanencia mínima de 10 años.',
    wrong: [
      'Las 1.200 UVT corresponden al tope de los intereses de vivienda del artículo 119 del ET.',
      'Es la opción correcta: 3.800 UVT anuales para el conjunto de aportes voluntarios y AFC (arts. 126-1 y 126-4 del ET).',
      'Las 5.040 UVT eran el tope del límite conjunto de rentas exentas y deducciones antes de la Ley 2277 de 2022; hoy ese tope es de 1.340 UVT.',
      'Las 790 UVT corresponden al tope anual de la renta exenta del 25% de los pagos laborales.',
    ],
    source: 'Estatuto Tributario, arts. 126-1 y 126-4',
  },
  // ---------------- Lección 6: ganancia ocasional ----------------
  {
    id: 'q-m05-025',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Hecho generador de la ganancia ocasional',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La utilidad obtenida por la venta de un activo fijo se considera ganancia ocasional cuando el bien ha sido poseído por el contribuyente durante:',
    options: ['Seis meses o más.', 'Un año o más.', 'Dos años o más.', 'Cinco años o más.'],
    correct: 2,
    justification:
      'El artículo 300 del ET considera ganancia ocasional la utilidad proveniente de la enajenación de bienes de cualquier naturaleza que hayan poseído el contribuyente por dos años o más, contados desde la adquisición hasta la venta. Si el bien se poseyó por menos de dos años, la utilidad es renta ordinaria de la cédula general.',
    wrong: [
      'Seis meses no es el plazo legal; la utilidad sería renta ordinaria.',
      'Un año no es suficiente: la norma exige dos años o más de posesión.',
      'Es la opción correcta: dos años o más de posesión (art. 300 del ET).',
      'Cinco años no es el plazo legal; la ganancia ocasional se configura desde los dos años.',
    ],
    source: 'Estatuto Tributario, art. 300',
  },
  {
    id: 'q-m05-026',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Venta de activo fijo (caso)',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Andrés vendió en 2026 una bodega que había comprado en 2018: precio de venta $500.000.000 y costo fiscal $320.000.000. ¿Cuál es el impuesto de ganancia ocasional?',
    options: ['$18.000.000', '$27.000.000', '$54.000.000', '$9.000.000'],
    correct: 1,
    justification:
      'La bodega se poseyó más de dos años, por lo que la utilidad es ganancia ocasional (art. 300 del ET). Ganancia ocasional gravable = $500.000.000 − $320.000.000 = $180.000.000. La tarifa general de ganancia ocasional es del 15% (arts. 313, 314 y 316 del ET, Ley 2277 de 2022): $180.000.000 x 15% = $27.000.000.',
    wrong: [
      '$18.000.000 resulta de aplicar el 10%, tarifa anterior a la Ley 2277 de 2022.',
      'Es la opción correcta: la ganancia gravable es $180.000.000 y el 15% de esa base es $27.000.000.',
      '$54.000.000 resultaría de aplicar el 30% sobre la utilidad, tarifa que no corresponde a la ganancia ocasional.',
      '$9.000.000 es el 5% de la utilidad, tarifa que no existe para este concepto.',
    ],
    source: 'Estatuto Tributario, arts. 300, 313, 314 y 316',
  },
  {
    id: 'q-m05-027',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Herencia y exenciones del artículo 307 (caso)',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un causante dejó una casa que era su vivienda de habitación ($700.000.000), una finca ($400.000.000) y acciones ($150.000.000); tiene un solo heredero. Con UVT de 2026 ($52.374), ¿cuál es el impuesto de ganancia ocasional del heredero?',
    options: ['$0', '$8.773.725', '$125.000.000', '$58.491.500'],
    correct: 1,
    justification:
      'Ingreso por ganancia ocasional: $1.250.000.000. Exenciones del artículo 307 del ET (Ley 2277 de 2022): vivienda de habitación del causante 13.000 UVT = $680.862.000; demás inmuebles 6.500 UVT = $340.431.000; asignación por herencia al beneficiario 3.250 UVT = $170.215.500. Total exenciones: $1.191.508.500. Ganancia gravable: $1.250.000.000 − $1.191.508.500 = $58.491.500. Impuesto al 15%: $58.491.500 x 15% = $8.773.725.',
    wrong: [
      '$0 supondría que las exenciones cubren todo el ingreso, pero quedan $58.491.500 gravados.',
      'Es la opción correcta: la ganancia gravable es $58.491.500 y el 15% de esa base es $8.773.725.',
      '$125.000.000 resulta de aplicar el 10% sobre el valor total de la herencia, sin exenciones y con la tarifa anterior.',
      '$58.491.500 es la ganancia ocasional gravable, es decir, la base antes de aplicar la tarifa del 15%.',
    ],
    source: 'Estatuto Tributario, arts. 302, 307, 314 y 316; Ley 2277 de 2022, art. 30',
  },
  {
    id: 'q-m05-028',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Tarifa de loterías, rifas y apuestas',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'De acuerdo con el artículo 317 del Estatuto Tributario, la ganancia ocasional proveniente de loterías, rifas, apuestas y similares se grava con la tarifa del:',
    options: ['10%', '15%', '20%', '35%'],
    correct: 2,
    justification:
      'El artículo 317 del ET mantiene la tarifa del 20% para las ganancias ocasionales provenientes de loterías, rifas, apuestas y similares, que se calcula sobre el valor del premio. Es una excepción a la tarifa general del 15% de los artículos 313, 314 y 316.',
    wrong: [
      'El 10% era la tarifa general de ganancia ocasional antes de la Ley 2277 de 2022 y nunca fue la de las loterías.',
      'El 15% es hoy la tarifa general de ganancia ocasional, pero no la de las loterías, rifas y apuestas.',
      'Es la opción correcta: 20% para loterías, rifas, apuestas y similares (art. 317 del ET).',
      'El 35% es la tarifa general del impuesto de renta de las personas jurídicas, no una tarifa de ganancia ocasional.',
    ],
    source: 'Estatuto Tributario, art. 317',
  },
  {
    id: 'q-m05-029',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Seguros de vida (aplicación)',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'María recibe una indemnización por seguro de vida de $300.000.000. Con UVT de 2026 ($52.374), ¿cuál es el impuesto de ganancia ocasional?',
    options: ['$19.467.675', '$25.956.900', '$0', '$45.000.000'],
    correct: 0,
    justification:
      'El artículo 303-1 del ET, modificado por la Ley 2277 de 2022, exime las indemnizaciones por seguros de vida hasta 3.250 UVT: 3.250 x $52.374 = $170.215.500. Ganancia gravable: $300.000.000 − $170.215.500 = $129.784.500. Impuesto al 15%: $129.784.500 x 15% = $19.467.675.',
    wrong: [
      'Es la opción correcta: ($300.000.000 − $170.215.500) x 15% = $19.467.675.',
      '$25.956.900 resultaría de aplicar el 20% sobre la ganancia gravable, tarifa que corresponde a loterías y apuestas.',
      '$0 supondría que la exención cubre toda la indemnización, pero el exceso de $129.784.500 está gravado.',
      '$45.000.000 resulta de aplicar el 15% sobre el valor total sin descontar la exención de 3.250 UVT.',
    ],
    source: 'Estatuto Tributario, art. 303-1; Ley 2277 de 2022, art. 29',
  },
  // ---------------- Lección 7: IVA e INC ----------------
  {
    id: 'q-m05-030',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Bienes exentos y excluidos del IVA',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'La diferencia fundamental entre un bien exento y un bien excluido del impuesto sobre las ventas consiste en que:',
    options: [
      'El exento está gravado a la tarifa del 0% y da derecho a descontar el IVA de las compras y a devolución; el excluido no causa el impuesto y el IVA de sus compras se lleva como mayor costo.',
      'El exento no causa impuesto y el excluido sí lo causa a la tarifa general, porque la exclusión solo opera para los bienes de la canasta familiar.',
      'Ambos se gravan al 19% y solo se diferencian en la periodicidad de la declaración, ya que el exento se declara bimestral y el excluido anual.',
      'El excluido permite descontar el IVA de las compras y el exento no, pues la exclusión equivale a una exención con derecho a devolución.',
    ],
    correct: 0,
    justification:
      'Los bienes exentos están gravados a la tarifa del 0% (art. 477 del ET): el responsable puede descontar el IVA de sus compras y solicitar devoluciones. Los bienes excluidos (art. 424 del ET) están fuera del ámbito del impuesto: no se causa IVA en la venta y el IVA pagado en las compras se pierde como mayor valor del costo, sin derecho a descuento ni devolución.',
    wrong: [
      'Es la opción correcta: el exento (0%) da derecho a descuento y devolución; el excluido no causa el impuesto y su IVA es mayor costo.',
      'El exento sí está gravado, a la tarifa del 0%, y el excluido no está gravado en absoluto; la exclusión no se limita a la canasta familiar.',
      'La diferencia no es de periodicidad sino de causación del impuesto y de tratamiento del IVA de las compras; ambos pueden declararse en el mismo periodo.',
      'El excluido no da derecho a descontar el IVA de las compras; precisamente por eso ese IVA se lleva como mayor costo del bien o servicio.',
    ],
    source: 'Estatuto Tributario, arts. 424, 477 y 481; MATERIAL TOTAL, Unidad 5',
  },
  {
    id: 'q-m05-031',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Base gravable con descuentos (caso)',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una empresa vende mercancía por $100.000.000 y otorga un descuento efectivo del 10% pactado en la misma operación. ¿Cuál es el IVA generado a la tarifa general del 19%?',
    options: ['$19.000.000', '$17.100.000', '$18.050.000', '$9.500.000'],
    correct: 1,
    justification:
      'El descuento efectivo, otorgado en la misma operación, se resta de la base gravable del artículo 447 del ET: base = $100.000.000 − 10% = $90.000.000. IVA = $90.000.000 x 19% = $17.100.000. La conclusión sería distinta si el descuento fuera condicionado (por pronto pago), caso en el cual la base seguiría siendo $100.000.000 y el IVA $19.000.000.',
    wrong: [
      '$19.000.000 correspondería a la base sin descontar los descuentos efectivos, tratamiento aplicable solo a los descuentos condicionados.',
      'Es la opción correcta: la base es $90.000.000 y el 19% de esa base es $17.100.000.',
      '$18.050.000 supone una base de $95.000.000, que no corresponde al descuento del 10% pactado.',
      '$9.500.000 equivale al 9,5% de la base inicial y no corresponde a ninguna tarifa del impuesto.',
    ],
    source: 'Estatuto Tributario, art. 447; MATERIAL TOTAL, Unidad 5',
  },
  {
    id: 'q-m05-032',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Proporcionalidad del IVA descontable (caso)',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Una empresa tuvo en el bimestre ventas gravadas por $90.000.000, exentas por $40.000.000 y excluidas por $70.000.000 (total $200.000.000). Las compras de utilización común fueron de $60.000.000 más IVA de $11.400.000. ¿Cuál es el IVA descontable por esas compras?',
    options: ['$11.400.000', '$7.410.000', '$5.130.000', '$3.990.000'],
    correct: 1,
    justification:
      'El artículo 490 del ET proporcionaliza el IVA de las compras comunes: se descuenta en la proporción de las operaciones que dan derecho a descuento (gravadas y exentas) sobre el total. Proporción = ($90.000.000 + $40.000.000) / $200.000.000 = 65%. IVA descontable = $11.400.000 x 65% = $7.410.000. El 35% restante ($3.990.000) se lleva como mayor valor del costo o gasto.',
    wrong: [
      '$11.400.000 supondría descontar la totalidad del IVA de las compras, sin considerar las operaciones excluidas.',
      'Es la opción correcta: 65% de $11.400.000 = $7.410.000.',
      '$5.130.000 corresponde al 45% de las ventas gravadas, pero la proporción del artículo 490 incluye también las ventas exentas (65%).',
      '$3.990.000 es el IVA no descontable (35%), que se lleva como mayor valor del costo.',
    ],
    source: 'Estatuto Tributario, arts. 485, 488, 490 y 491; MATERIAL TOTAL, Unidad 5',
  },
  {
    id: 'q-m05-033',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'No responsables del IVA',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Una persona natural que en 2026 obtuvo ingresos por $120.000.000, tiene un solo establecimiento de comercio, no desarrolla actividades por franquicia, no es usuario aduanero y no realiza importaciones ni ventas al exterior. Frente al IVA:',
    options: [
      'Es responsable del IVA, porque sus ingresos de $120.000.000 superan 1.400 UVT, tope que obliga a registrarse como responsable.',
      'No es responsable del IVA, porque cumple todas las condiciones del parágrafo 3 del artículo 437 del ET, pues sus ingresos no superan 3.500 UVT ($183.309.000).',
      'Es responsable del IVA, porque toda persona natural con establecimiento de comercio abierto al público lo es, sin importar el monto de sus ingresos.',
      'No es responsable del IVA únicamente si todas sus ventas son excluidas, pues la exclusión del bien es la que define la responsabilidad.',
    ],
    correct: 1,
    justification:
      'El parágrafo 3 del artículo 437 del ET permite que la persona natural que cumpla todas las condiciones (un solo establecimiento, ingresos inferiores a 3.500 UVT, no franquicia, no usuario aduanero, sin importaciones ni ventas al exterior) no sea responsable del IVA. Con la UVT de 2026 ($52.374), 3.500 UVT equivalen a $183.309.000, umbral que los ingresos de $120.000.000 no superan.',
    wrong: [
      'El tope de 1.400 UVT es el de ingresos brutos para declarar renta; la responsabilidad del IVA se determina con el umbral de 3.500 UVT del parágrafo 3 del artículo 437 del ET, que aquí no se supera.',
      'Es la opción correcta: al cumplir todas las condiciones del parágrafo 3 del artículo 437 del ET, la persona no es responsable del IVA.',
      'La sola existencia de un establecimiento de comercio no genera la responsabilidad: el parágrafo 3 del artículo 437 exige además superar el tope de ingresos y no incurrir en las demás causales.',
      'La naturaleza excluida del bien no define la responsabilidad: esta se determina con las reglas del artículo 437 del ET; si las ventas fueran excluidas simplemente no se causaría el impuesto por ese bien.',
    ],
    source: 'Estatuto Tributario, art. 437, parágrafo 3; Resolución DIAN 000238 de 2025',
  },
  {
    id: 'q-m05-034',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'INC y bolsas plásticas (caso)',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una cuenta de restaurante asciende a $250.000 y el cliente solicita 3 bolsas plásticas. En 2026, ¿cuánto suman el impuesto nacional al consumo y el impuesto a las bolsas plásticas?',
    options: ['$20.000', '$219', '$20.219', '$47.500'],
    correct: 2,
    justification:
      'El servicio de comidas y bebidas causa INC del 8% (art. 512-3 del ET): $250.000 x 8% = $20.000. El impuesto nacional al consumo de bolsas plásticas vale $73 por bolsa en 2026 (Circular DIAN 000005 del 16 de diciembre de 2025): 3 x $73 = $219. Total: $20.000 + $219 = $20.219.',
    wrong: [
      '$20.000 es solo el INC de comidas y bebidas, sin las bolsas.',
      '$219 es solo el impuesto de las tres bolsas, sin el INC del servicio.',
      'Es la opción correcta: $20.000 de INC más $219 del impuesto a las bolsas = $20.219.',
      '$47.500 resultaría de aplicar el 19% del IVA a la cuenta, tarifa que no corresponde al INC de restaurantes.',
    ],
    source: 'Estatuto Tributario, arts. 512-3 y 512-15; Circular DIAN 000005 de 2025',
  },
]
