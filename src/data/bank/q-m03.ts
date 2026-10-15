import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 3
// Fundamentos tributarios, aduaneros y cambiarios (i06, i09)
// El arreglo wrong está alineado con options: wrong[i] explica
// por qué la opción i es incorrecta (el índice correct queda
// con la razón de la respuesta correcta).
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m03-001',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Principios constitucionales del sistema tributario',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'El artículo 363 de la Constitución Política establece que el sistema tributario se funda en los principios de…',
    options: [
      '…legalidad, igualdad y solidaridad, y que las leyes tributarias se aplican de manera retroactiva cuando favorecen al Estado.',
      '…equidad, eficiencia y progresividad, y que las leyes tributarias no se aplicarán con retroactividad.',
      '…progresividad, unidad de materia y publicidad, y que las leyes tributarias rigen desde su promulgación para todos los periodos.',
      '…eficiencia, capacidad contributiva y favorabilidad, y que las leyes tributarias se aplican de inmediato a los periodos en curso.',
    ],
    correct: 1,
    justification:
      'El artículo 363 C.P. dice textualmente: «El sistema tributario se funda en los principios de equidad, eficiencia y progresividad. Las leyes tributarias no se aplicarán con retroactividad». Es la norma síntesis del sistema tributario y la más preguntada del tema.',
    wrong: [
      'La legalidad y la solidaridad existen en el ordenamiento, pero no son los principios que enuncia el artículo 363; además, la retroactividad no se admite en favor del Estado.',
      'Respuesta correcta: equidad, eficiencia y progresividad, con prohibición de retroactividad.',
      'La unidad de materia y la publicidad son reglas de la ley en general, no los principios del artículo 363, y las leyes tributarias no rigen retroactivamente.',
      'La capacidad contributiva y la favorabilidad son principios y reglas conexas, pero no son los que enuncia el artículo 363, y las leyes no se aplican de inmediato a los periodos en curso.',
    ],
    source: 'Constitución Política, art. 363; TACI Unidad 1 (págs. 7-8)',
  },
  {
    id: 'q-m03-002',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Poder tributario y reserva de ley',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'En tiempo de paz, ¿quiénes pueden imponer contribuciones fiscales o parafiscales según el artículo 338 de la Constitución?',
    options: [
      'El Congreso, el Presidente de la República mediante decreto y las superintendencias.',
      'Solamente el Congreso de la República, mediante ley.',
      'El Congreso, las asambleas departamentales y los concejos distritales y municipales.',
      'El Congreso, las asambleas departamentales y la Junta Directiva del Banco de la República.',
    ],
    correct: 2,
    justification:
      'El artículo 338 C.P. dispone que en tiempo de paz solamente el Congreso, las asambleas departamentales y los concejos distritales y municipales podrán imponer contribuciones fiscales o parafiscales. Cada nivel lo hace mediante su propio acto: ley, ordenanza o acuerdo.',
    wrong: [
      'El Presidente no puede crear tributos por decreto: el decreto reglamentario desarrolla la ley, pero no fija por sí mismo los elementos del tributo; las superintendencias tampoco tienen esa competencia.',
      'El Congreso no es el único: las asambleas y los concejos también pueden imponer contribuciones en su ámbito territorial.',
      'Respuesta correcta: Congreso (ley), asambleas (ordenanza) y concejos (acuerdo).',
      'La Junta Directiva del Banco de la República no tiene competencia para imponer contribuciones; su función en esa materia es la autoridad cambiaria y crediticia.',
    ],
    source: 'Constitución Política, art. 338; TACI Unidad 1 (pág. 7)',
  },
  {
    id: 'q-m03-003',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Contenido de la ley tributaria',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Una ordenanza departamental crea una contribución para recuperar el costo de un servicio y delega en el gobernador la fijación de la tarifa. ¿Es válida esa delegación?',
    options: [
      'No, porque la tarifa es siempre un elemento que solo el Congreso puede fijar mediante ley.',
      'Sí, sin ninguna condición: la fijación de tarifas es una facultad discrecional de las autoridades administrativas.',
      'Sí, siempre que el sistema y el método para definir los costos y beneficios y la forma de repartirlos estén fijados por la ley, la ordenanza o el acuerdo, y la contribución se cobre como recuperación de costos.',
      'No, porque las contribuciones territoriales solo pueden crearse por ley de la República.',
    ],
    correct: 2,
    justification:
      'El artículo 338 C.P. exige que la ley, las ordenanzas y los acuerdos fijen directamente los sujetos activos y pasivos, los hechos y las bases gravables y las tarifas, pero admite una excepción: las tasas y contribuciones que cobren las entidades territoriales por recuperación de costos o participación en beneficios pueden tener la tarifa fijada por la autoridad, siempre que el sistema y el método para definir costos y beneficios queden fijados en la ley, la ordenanza o el acuerdo.',
    wrong: [
      'La tarifa no es competencia exclusiva del Congreso: las ordenanzas y acuerdos también fijan tarifas de los tributos territoriales y, en el caso de tasas y contribuciones, pueden habilitar a la autoridad con sistema y método legal.',
      'La habilitación no es incondicional: requiere que la ley, la ordenanza o el acuerdo fijen el sistema y el método para definir los costos y beneficios y la forma de repartirlos, y que la contribución corresponda a recuperación de costos o participación en beneficios.',
      'Respuesta correcta: la excepción del artículo 338 C.P. permite que la tarifa la fije la autoridad si el sistema y el método están predeterminados en el acto correspondiente.',
      'Las contribuciones territoriales se crean por ordenanza o acuerdo, no solo por ley; el artículo 338 C.P. reconoce la competencia de asambleas y concejos.',
    ],
    source: 'Constitución Política, art. 338; TACI Unidad 1 (pág. 8)',
  },
  {
    id: 'q-m03-004',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Clasificación de los tributos',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La contribución de valorización que paga un propietario porque una obra pública valorizó su predio se clasifica como…',
    options: [
      '…impuesto, porque su producto se destina al presupuesto general del municipio.',
      '…tasa, porque se paga por el uso de un servicio público domiciliario.',
      '…contribución, porque se genera por un beneficio individualizado derivado de una obra o gasto estatal.',
      '…contribución parafiscal, porque se destina a un sector específico de la economía.',
    ],
    correct: 2,
    justification:
      'La contribución de valorización es el ejemplo canónico de contribución: su hecho generador es el beneficio individualizado que recibe el propietario por una obra pública. El impuesto, en cambio, no supone contraprestación; la tasa se paga por el uso de un servicio; y la contribución parafiscal es la que se cobra por pertenencia a un sector (SENA, ICBF, cajas).',
    wrong: [
      'No es impuesto: en la contribución de valorización el hecho generador está ligado a un beneficio individualizado, no a una manifestación general de capacidad contributiva.',
      'No es tasa: la tasa se paga por el uso efectivo o potencial de un servicio o bien del Estado (por ejemplo, un peaje o un derecho de trámite), no por la valorización del predio.',
      'Respuesta correcta: el beneficio individualizado por la obra pública es lo que define la contribución.',
      'No es parafiscal: las contribuciones parafiscales se cobran por pertenencia a un sector (aportes a SENA, ICBF y cajas de compensación) y tienen destinación sectorial, no por el beneficio de una obra.',
    ],
    source: 'TACI Unidad 1 (págs. 8-10); doctrina sobre clasificación de tributos',
  },
  {
    id: 'q-m03-005',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Equidad horizontal y vertical',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Dos empleados con idéntico salario y situación familiar pagan la misma retención en la fuente, mientras que un tercero con el triple de salario paga una proporción mayor de su renta. ¿Qué dimensión de la equidad ilustra cada situación?',
    options: [
      'La primera ilustra la equidad vertical y la segunda la equidad horizontal.',
      'La primera ilustra la equidad horizontal y la segunda la equidad vertical, propia de un sistema progresivo.',
      'Ambas ilustran la eficiencia del sistema tributario, no la equidad.',
      'La primera ilustra la progresividad y la segunda la capacidad contributiva exclusivamente.',
    ],
    correct: 1,
    justification:
      'La equidad horizontal exige igual carga para quienes tienen la misma capacidad de pago; la equidad vertical exige que quienes tienen mayor capacidad contributiva soporten una proporción mayor de la carga, lo que se concreta en la progresividad (tarifas marginales crecientes de la tabla del artículo 241 E.T. y límites como el 40 por ciento y 1.340 UVT de la Ley 2277 de 2022).',
    wrong: [
      'Está invertida: la primera situación es equidad horizontal (iguales cargas para igual capacidad) y la segunda, equidad vertical.',
      'Respuesta correcta: la equidad horizontal se refleja en el trato igual y la vertical en la progresividad.',
      'No se trata de eficiencia: la eficiencia se refiere al costo y a las distorsiones del sistema, no a la distribución de la carga entre capacidades distintas.',
      'La progresividad es el instrumento de la equidad vertical en su conjunto, pero la segunda situación no ilustra solo capacidad contributiva sino la mayor carga proporcional; la primera además no es progresividad.',
    ],
    source: 'Constitución Política, art. 363; Corte Constitucional, C-397 de 2011',
  },
  {
    id: 'q-m03-006',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Irretroactividad y favorabilidad',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'En marzo de 2026 entra a regir una ley que aumenta la tarifa del impuesto de renta para las personas jurídicas. ¿Cuál es el efecto de esa ley sobre el año gravable 2025, que ya terminó?',
    options: [
      'Se aplica al año 2025 porque la ley tributaria rige desde su promulgación para todos los periodos no declarados.',
      'No se aplica al año gravable 2025, por el principio de irretroactividad de las leyes tributarias; regirá para los periodos que se inicien a partir de su vigencia.',
      'Se aplica al año 2025 solo si el contribuyente no ha presentado la declaración.',
      'Se aplica al año 2025 solo si resulta más favorable que la tarifa anterior, porque en materia tributaria siempre prevalece la norma más benigna.',
    ],
    correct: 1,
    justification:
      'El artículo 363 C.P. prohíbe la retroactividad de las leyes tributarias y el artículo 338 C.P. refuerza la regla para los tributos de periodo: la ley que modifica elementos de un impuesto de periodo solo rige para los periodos que comiencen después de su entrada en vigencia. La excepción de favorabilidad opera en materia sancionatoria (norma posterior más benigna), no para cambiar la tarifa sustancial de un periodo ya cerrado.',
    wrong: [
      'La ley tributaria no rige para periodos anteriores no declarados: el vencimiento del plazo para declarar no convierte en retroactiva una norma sustancial.',
      'Respuesta correcta: la irretroactividad impide aplicar la nueva tarifa al año gravable 2025.',
      'La presentación o no de la declaración no altera la aplicación temporal de la ley: la irretroactividad protege el periodo ya iniciado o cerrado con independencia de la declaración.',
      'La favorabilidad se predica de las normas sancionatorias; la tarifa es un elemento sustancial del tributo y no se aplica retroactivamente aunque sea más benévola.',
    ],
    source: 'Constitución Política, arts. 338 y 363; TACI Unidad 1 (págs. 10-11)',
  },
  {
    id: 'q-m03-007',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Impuestos nacionales y territoriales',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      '¿Cuál de los siguientes impuestos es administrado por la DIAN y, por tanto, corresponde al orden nacional?',
    options: [
      'El impuesto de industria y comercio (ICA).',
      'El impuesto predial unificado.',
      'El impuesto sobre las ventas (IVA).',
      'El impuesto al consumo de cervezas, licores y cigarrillos.',
    ],
    correct: 2,
    justification:
      'El IVA es un impuesto nacional administrado por la DIAN. También lo son el impuesto sobre la renta y complementarios, el impuesto nacional al consumo, el impuesto al patrimonio, el gravamen a los movimientos financieros, el impuesto de timbre y los impuestos ambientales y a la gasolina.',
    wrong: [
      'El ICA es un impuesto municipal: lo administra el municipio donde se desarrolla la actividad gravada.',
      'El predial unificado es un impuesto municipal cuyo sujeto activo es el municipio.',
      'Respuesta correcta: el IVA es nacional y su administración corresponde a la DIAN.',
      'El impuesto al consumo de cervezas, licores y cigarrillos es departamental (aunque sobre los licores y el vino hay un componente nacional en algunos casos, el impuesto territorial es el departamental).',
    ],
    source: 'TACI Unidad 1 (págs. 11-12); Estatuto Tributario, arts. 420 y ss.',
  },
  {
    id: 'q-m03-008',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Contribuciones parafiscales',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una empresa paga los aportes de sus trabajadores al SENA, al ICBF y a la caja de compensación familiar. Un auditor afirma que se trata de impuestos nacionales. ¿Cuál es la calificación correcta?',
    options: [
      'Son impuestos nacionales, porque su recaudo se incorpora al presupuesto general de la Nación.',
      'Son tasas, porque la empresa recibe un servicio directo de cada entidad.',
      'Son contribuciones parafiscales con destinación sectorial: la ley las autoriza en casos y condiciones especiales y su producto no se incorpora al presupuesto nacional.',
      'Son contribuciones de valorización, porque benefician a un grupo de propietarios.',
    ],
    correct: 2,
    justification:
      'Los aportes parafiscales son contribuciones parafiscales: la Constitución autoriza al Congreso para imponerlos en casos y condiciones especiales; se cobran a un grupo o sector y su producto se destina al mismo sector, sin incorporarse al presupuesto general de la Nación.',
    wrong: [
      'Su producto no ingresa al presupuesto general de la Nación: es precisamente la destinación sectorial lo que caracteriza a las contribuciones parafiscales.',
      'No son tasas: no retribuyen el uso individual de un servicio del Estado por parte de la empresa.',
      'Respuesta correcta: son contribuciones parafiscales con destinación sectorial.',
      'No son contribuciones de valorización: estas se generan por una obra pública que valoriza un inmueble, no por la pertenencia al sector laboral.',
    ],
    source: 'Constitución Política, arts. 150-12 y 338; TACI Unidad 2 (págs. 9-12)',
  },
  {
    id: 'q-m03-009',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Elementos del tributo',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'En los tributos nacionales, el sujeto activo de la obligación tributaria es…',
    options: [
      'El Ministerio de Hacienda, que recauda directamente los impuestos.',
      'La Nación (el Estado), representada por la DIAN como administración tributaria.',
      'La Superintendencia Financiera, por su rol de vigilancia del mercado.',
      'El contribuyente, porque es quien declara y paga el tributo.',
    ],
    correct: 1,
    justification:
      'El sujeto activo es el beneficiario del tributo, la entidad que puede disponer de los recursos: en los tributos nacionales, la Nación, cuyo administrador es la DIAN. El contribuyente es el sujeto pasivo, no el activo.',
    wrong: [
      'El Ministerio de Hacienda orienta la política fiscal y es el sector al que está adscrita la DIAN, pero el administrador y sujeto activo por excelencia de los tributos nacionales es la Nación-DIAN.',
      'Respuesta correcta: la Nación, representada por la DIAN.',
      'La Superintendencia Financiera vigila a los intermediarios del mercado cambiario y a las entidades del sector financiero, no administra tributos.',
      'El contribuyente es el sujeto pasivo: la persona que realiza el hecho generador y debe cumplir la obligación tributaria.',
    ],
    source: 'TACI Unidad 1 y 2 (elementos del tributo)',
  },
  {
    id: 'q-m03-010',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Base gravable',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Una sociedad obtuvo ingresos gravables por 900 millones, con costos y deducciones procedentes de 600 millones y una renta exenta de 50 millones. Si tiene además 20 millones de descuentos tributarios, ¿cuánto paga por impuesto de renta con la tarifa general del 35 por ciento?',
    options: [
      '210 millones, porque se aplica el 35 por ciento a los ingresos gravables.',
      '87,5 millones, porque la base es la renta líquida gravable (250 millones), el 35 por ciento es 87,5 y a ese resultado le restan los descuentos.',
      '105 millones, porque se aplica el 35 por ciento a la renta líquida (300 millones) sin considerar exenciones ni descuentos.',
      '67,5 millones, porque además de la depuración se resta la renta exenta del impuesto.',
    ],
    correct: 1,
    justification:
      'Base gravable = 900 - 600 - 50 = 250 millones (renta líquida gravable: ingresos menos costos, deducciones y rentas exentas). Impuesto = 250 x 35 por ciento = 87,5 millones. Los descuentos tributarios (por ejemplo, por IVA de activos fijos reales productivos) se restan del impuesto básico de renta, no de la base.',
    wrong: [
      'No se aplica la tarifa a los ingresos: primero hay que depurar costos, deducciones y rentas exentas para llegar a la base gravable.',
      'Respuesta correcta: 250 millones de base x 35 por ciento = 87,5 millones, antes de restar descuentos.',
      'La renta líquida de 300 millones (900 - 600) todavía debe restar la renta exenta de 50 millones para llegar a la renta líquida gravable; además los descuentos se restan del impuesto.',
      'Los 67,5 millones corresponderían a una tarifa del 27 por ciento, no a la tarifa general del 35 por ciento aplicable.',
    ],
    source: 'Estatuto Tributario, arts. 240 y depuración de la renta; TACI Unidad 2 (págs. 20-40)',
  },
  {
    id: 'q-m03-011',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Causación del IVA en servicios',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una consultora contrata el 1 de marzo, termina el servicio el 20 de abril, expide la factura el 25 de abril y recibe el pago el 10 de mayo. ¿Cuándo se causa el IVA?',
    options: [
      'El 1 de marzo, por la firma del contrato.',
      'El 20 de abril, porque es la fecha anterior entre la factura (25 de abril), la terminación del servicio (20 de abril) y el pago (10 de mayo).',
      'El 25 de abril, porque el impuesto se causa con la emisión de la factura en todos los casos.',
      'El 10 de mayo, porque en los servicios el IVA se causa al momento del pago.',
    ],
    correct: 1,
    justification:
      'El artículo 429 del Estatuto Tributario señala que en la prestación de servicios el impuesto se causa en la fecha de emisión de la factura o documento equivalente, o en la fecha de terminación de los servicios, o en la fecha de pago o abono en cuenta, la que fuere anterior. La fecha anterior es la terminación del servicio: 20 de abril.',
    wrong: [
      'La firma del contrato no es un hecho de causación del IVA en servicios: se causará cuando ocurra el primero de los tres eventos legales.',
      'Respuesta correcta: se causa el 20 de abril, por ser la fecha anterior de las tres.',
      'La emisión de la factura solo determina la causación si es la fecha anterior; aquí la terminación del servicio ocurrió antes.',
      'El pago es una de las fechas alternativas, pero solo si es anterior a la factura y a la terminación del servicio; aquí es posterior.',
    ],
    source: 'Estatuto Tributario, art. 429; TACI Unidad 2 (págs. 49-51)',
  },
  {
    id: 'q-m03-012',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Aspectos del hecho generador',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Al analizar el hecho generador del impuesto sobre las ventas, el intérprete se pregunta si se grava la venta de un bien inmueble ubicado en Colombia realizada por un vendedor no residente. Esa pregunta corresponde al aspecto…',
    options: [
      '…material del hecho generador.',
      '…personal y espacial del hecho generador.',
      '…temporal del hecho generador.',
      '…cuantitativo del hecho generador.',
    ],
    correct: 1,
    justification:
      'El aspecto personal identifica quién realiza el hecho (el vendedor, residente o no) y el aspecto espacial determina dónde se entiende realizado (el inmueble ubicado en Colombia). El aspecto material responde a qué hecho se grava y el temporal, a cuándo se entiende realizado. El aspecto cuantitativo no es un aspecto del hecho generador, sino la fase de cuantificación (base y tarifa).',
    wrong: [
      'El aspecto material respondería a la pregunta sobre qué operación se grava (por ejemplo, si la venta de inmuebles es un hecho gravado), no sobre quién la realiza ni dónde ocurre.',
      'Respuesta correcta: la identificación del sujeto es aspecto personal y la ubicación del bien es aspecto espacial.',
      'El aspecto temporal responde cuándo se entiende realizado el hecho (por ejemplo, las reglas del artículo 429 E.T. para el IVA).',
      'El aspecto cuantitativo no es un aspecto del hecho generador; la cuantificación del tributo corresponde a la base gravable y a la tarifa.',
    ],
    source: 'TACI Unidad 1 y 2 (elementos del tributo); Estatuto Tributario, art. 420',
  },
  {
    id: 'q-m03-013',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Sujeto pasivo de iure y de facto',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'En el impuesto sobre las ventas, la afirmación «el responsable del IVA es el sujeto pasivo de derecho, pero el consumidor final es el sujeto pasivo económico» significa que…',
    options: [
      '…el consumidor debe declarar y pagar el IVA cuando el vendedor no lo hace.',
      '…el responsable está obligado a declarar y pagar el impuesto, mientras que el consumidor lo soporta económicamente dentro del precio.',
      '…el vendedor y el consumidor son codeudores solidarios de la obligación tributaria.',
      '…el consumidor puede solicitar la devolución del IVA que pagó en sus compras.',
    ],
    correct: 1,
    justification:
      'El IVA es un impuesto indirecto: el responsable (vendedor o prestador) es el sujeto pasivo de derecho y debe declarar y pagar; el consumidor final es el sujeto pasivo económico o de facto, porque soporta el gravamen incorporado en el precio. Esta distinción la recoge la doctrina y la jurisprudencia (Corte Constitucional) y la terminología del numeral 4 del artículo 3 E.T., que para el IVA asimila contribuyente y responsable.',
    wrong: [
      'El consumidor no es sujeto pasivo de derecho en el IVA: no declara ni responde ante la DIAN por el impuesto causado en la operación.',
      'Respuesta correcta: el responsable declara y paga; el consumidor soporta el impuesto en el precio.',
      'No hay solidaridad entre vendedor y consumidor por la obligación del IVA: la obligación recae en el responsable, y la solidaridad solo existe en los casos que la ley señala.',
      'El consumidor final no tiene derecho a devolución del IVA que soporta en sus compras: el impuesto descontable corresponde a los responsables en el régimen que lo permite.',
    ],
    source: 'TACI Unidad 1 (págs. 46-47); Estatuto Tributario, art. 3, numeral 4',
  },
  {
    id: 'q-m03-014',
    indicator: 'i09',
    moduleId: 'm03',
    topic: 'Base gravable del IVA en la importación',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Una importación tiene un valor en aduana de 10.000 dólares; los derechos de aduana ascienden a 1.500 dólares. La base gravable del IVA en la importación es…',
    options: [
      '…10.000 dólares, porque la base es el valor en aduana de la mercancía.',
      '…11.500 dólares, porque la base corresponde a la base de los derechos de aduana adicionada con el valor de esos derechos.',
      '…1.500 dólares, porque solo se gravan los derechos de aduana.',
      '…8.500 dólares, porque se descuentan los derechos del valor en aduana.',
    ],
    correct: 1,
    justification:
      'El artículo 459 del Estatuto Tributario establece que la base gravable del IVA en la importación corresponde a la misma que se usa para liquidar los derechos de aduana, adicionada con el valor de esos derechos. Así, 10.000 (valor en aduana) + 1.500 (derechos) = 11.500 dólares como base del IVA.',
    wrong: [
      'El valor en aduana es el punto de partida, pero la norma exige adicionarle el valor de los derechos de aduana.',
      'Respuesta correcta: 11.500 dólares (valor en aduana más derechos de aduana).',
      'Los derechos de aduana no son la base del IVA: son un componente que se adiciona a la base de los derechos de aduana.',
      'La norma adiciona los derechos, no los resta: no se descuenta ningún concepto del valor en aduana.',
    ],
    source: 'Estatuto Tributario, art. 459; TACI Unidad 2 (págs. 50-51)',
  },
  {
    id: 'q-m03-015',
    indicator: 'i06',
    moduleId: 'm03',
    topic: 'Ámbito y naturaleza del régimen aduanero',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Sobre el ámbito de aplicación del régimen aduanero colombiano, es correcto afirmar que…',
    options: [
      '…se aplica a mercancías y a todo tipo de intangibles, incluidos los servicios transfronterizos.',
      '…su ámbito es el territorio nacional, que se subdivide en zonas francas y depósitos habilitados, los cuales no hacen parte del territorio aduanero nacional.',
      '…solo se aplica a las zonas francas y a los depósitos habilitados.',
      '…se aplica exclusivamente a las importaciones, no a las exportaciones.',
    ],
    correct: 1,
    justification:
      'El material de formación precisa que el ámbito de aplicación del régimen aduanero es el territorio nacional (aéreo, marítimo y terrestre), que se subdivide en zonas francas y depósitos habilitados, y que estas dos últimas no hacen parte del territorio aduanero nacional. Además, el régimen de aduanas solo se ocupa de mercancías y bienes tangibles, no de intangibles.',
    wrong: [
      'El régimen aduanero no se refiere a la importación o exportación de intangibles: solo regula el movimiento de mercancía y bienes tangibles.',
      'Respuesta correcta: el ámbito es el territorio nacional, con las zonas francas y los depósitos habilitados excluidos del territorio aduanero nacional.',
      'Las zonas francas y los depósitos habilitados están por fuera del territorio aduanero nacional, pero forman parte del ámbito de aplicación del régimen como zonas con tratamiento especial.',
      'El régimen aduanero regula tanto las importaciones como las exportaciones y los regímenes suspensivos, de transformación y de tránsito.',
    ],
    source: 'TACI Unidad 9 (págs. 166-167); Decreto 1165 de 2019',
  },
  {
    id: 'q-m03-016',
    indicator: 'i06',
    moduleId: 'm03',
    topic: 'Norma que rige el régimen aduanero',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La norma que estableció el régimen de aduanas, con el fin de armonizar las disposiciones que estaban dispersas en varios decretos, es…',
    options: [
      'El Decreto 2685 de 1999, que continúa vigente en su totalidad.',
      'El Decreto 1165 de 2019, modificado, entre otros, por el Decreto 659 de 2024.',
      'La Ley 1609 de 2013, que contiene el estatuto aduanero completo.',
      'La Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República.',
    ],
    correct: 1,
    justification:
      'El Decreto 1165 del 2 de julio de 2019 estableció el régimen de aduanas para armonizar lo dispuesto en los Decretos 2685 de 1999, 390 de 2016, 2147 de 2016, 349 de 2018 y 659 de 2018. Ha sido modificado, entre otras normas, por el Decreto 659 de 2024, que introdujo la declaración anticipada obligatoria y ajustes de control.',
    wrong: [
      'El Decreto 2685 de 1999 fue una de las normas que se armonizaron en el estatuto de 2019; no es el régimen vigente.',
      'Respuesta correcta: Decreto 1165 de 2019, modificado por el Decreto 659 de 2024.',
      'La Ley 1609 de 2013 es la ley marco de aduanas: fija los principios y las normas generales, pero no contiene el estatuto aduanero completo.',
      'La Resolución Externa 1 de 2018 es el compendio del régimen cambiario, no el estatuto aduanero.',
    ],
    source: 'TACI Unidad 9 (págs. 166-167); Decreto 1165 de 2019; Decreto 659 de 2024',
  },
  {
    id: 'q-m03-017',
    indicator: 'i06',
    moduleId: 'm03',
    topic: 'Obligación aduanera y sujetos',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'Respecto de la obligación aduanera, ¿cuál de las siguientes afirmaciones es correcta?',
    options: [
      'Es el vínculo entre la administración aduanera y las personas relacionadas directa o indirectamente con una operación aduanera, y comprende trámites, pago de tributos y obligaciones derivadas de las actuaciones de la autoridad.',
      'Es exclusivamente la obligación de pagar los derechos de aduana, y no incluye trámites ni sanciones.',
      'Solo vincula a los importadores, no a los exportadores ni a las agencias de aduanas.',
      'Nace con la presentación de la declaración de importación y no con la introducción de la mercancía al territorio aduanero nacional.',
    ],
    correct: 0,
    justification:
      'La obligación aduanera es el vínculo entre la administración aduanera y cualquier persona directa o indirectamente relacionada con una operación aduanera, y comprende los trámites aduaneros, el pago de tributos aduaneros, intereses, tasas, recargos y sanciones, y las obligaciones derivadas de las actuaciones de la autoridad.',
    wrong: [
      'Respuesta correcta: la obligación aduanera es más amplia que el pago de los tributos aduaneros.',
      'La obligación aduanera no se limita al pago de los derechos: incluye los trámites y las obligaciones derivadas de las actuaciones de la autoridad aduanera.',
      'La obligación vincula a los obligados directos (importadores, exportadores, declarantes, agencias de aduanas y demás usuarios) y a los obligados indirectos.',
      'El hecho generador de los tributos aduaneros es la introducción de mercancías al territorio aduanero nacional; la declaración es el instrumento de cumplimiento, no el hecho que origina la obligación.',
    ],
    source: 'TACI Unidad 9 (págs. 169-170); Decreto 1165 de 2019',
  },
  {
    id: 'q-m03-018',
    indicator: 'i06',
    moduleId: 'm03',
    topic: 'Elementos de los tributos aduaneros',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'En los tributos aduaneros, el sujeto activo, el hecho generador y la base gravable son, respectivamente…',
    options: [
      'La Nación-Ministerio de Hacienda; el pago de la mercancía al exterior; el valor de la factura comercial.',
      'La DIAN; la introducción de mercancías al territorio aduanero nacional; el valor en aduana de la mercancía importada.',
      'La DIAN; la presentación de la declaración de importación; el valor FOB de la mercancía.',
      'El Banco de la República; la canalización de las divisas; el valor en moneda extranjera.',
    ],
    correct: 1,
    justification:
      'En los tributos aduaneros el sujeto activo es la DIAN; el hecho generador es la introducción de mercancías al territorio aduanero nacional; y la base gravable es el valor en aduana de la mercancía importada (para los derechos de aduana) y, cuando corresponda, esa misma base adicionada para los demás derechos, según el artículo 459 E.T. para el IVA.',
    wrong: [
      'El sujeto activo de los tributos aduaneros es la DIAN y el hecho generador no es el pago al exterior, sino la introducción de las mercancías al territorio aduanero nacional.',
      'Respuesta correcta: DIAN, introducción de mercancías al territorio aduanero nacional y valor en aduana.',
      'La declaración de importación es el instrumento de cumplimiento, no el hecho generador; y la base no siempre es el valor FOB: se determina según las reglas de valoración aduanera.',
      'El Banco de la República no es sujeto activo de los tributos aduaneros ni las divisas son su base gravable: su rol es de autoridad cambiaria.',
    ],
    source: 'TACI Unidad 9 (págs. 170-171); Decreto 1165 de 2019; Estatuto Tributario, art. 459',
  },
  {
    id: 'q-m03-019',
    indicator: 'i06',
    moduleId: 'm03',
    topic: 'Autoridad cambiaria',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      '¿Cuál es la autoridad cambiaria en Colombia y qué papel cumple la DIAN en esa materia?',
    options: [
      'La autoridad cambiaria es el Ministerio de Hacienda y la DIAN expide las resoluciones de cambios internacionales.',
      'La autoridad cambiaria es la Junta Directiva del Banco de la República, que expide el régimen; la DIAN controla, vigila y sanciona administrativamente su cumplimiento.',
      'La autoridad cambiaria es la DIAN, y el Banco de la República solo registra las cuentas de compensación.',
      'La autoridad cambiaria es la Superintendencia Financiera y la DIAN ejerce funciones de policía judicial.',
    ],
    correct: 1,
    justification:
      'La Ley 9 de 1991 y la Ley 31 de 1992 atribuyen al Banco de la República, a través de su Junta Directiva, la facultad de regular el régimen cambiario (hoy compendiado en la Resolución Externa 1 de 2018). La DIAN, por su parte, ejerce el control, la vigilancia y la sanción administrativa por el incumplimiento del régimen (Decreto 1742 de 2020, art. 3; Decreto 2245 de 2011).',
    wrong: [
      'El Ministerio de Hacienda no expide el régimen cambiario: esa es función de la Junta Directiva del Banco de la República.',
      'Respuesta correcta: la Junta Directiva del Banco de la República diseña el régimen y la DIAN controla y sanciona su cumplimiento.',
      'La DIAN no es la autoridad cambiaria ni expide el régimen; sus funciones son de control, vigilancia y sanción administrativa.',
      'La Superintendencia Financiera vigila a los intermediarios del mercado cambiario, pero no es la autoridad cambiaria; la DIAN ejerce funciones administrativas y no de policía judicial.',
    ],
    source: 'TACI Unidad 4 (págs. 133-138); Ley 9 de 1991; Decreto 1742 de 2020, art. 3',
  },
  {
    id: 'q-m03-020',
    indicator: 'i06',
    moduleId: 'm03',
    topic: 'Operaciones de cambio',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      '¿Cuál de las siguientes operaciones es de obligatoria canalización a través del mercado cambiario?',
    options: [
      'Los pagos internos entre residentes por la venta de un inmueble ubicado en el país.',
      'La inversión extranjera en Colombia y sus rendimientos.',
      'La posesión de divisas por un residente que las recibió en una operación no canalizable.',
      'Los gastos de un viajero en el exterior pagados con divisas de libre tenencia.',
    ],
    correct: 1,
    justification:
      'Son de obligatoria canalización, entre otras, la importación y exportación de bienes, la inversión extranjera en Colombia y sus rendimientos, la inversión colombiana en el exterior y sus rendimientos, las inversiones financieras en el exterior y sus rendimientos, los avales y garantías en moneda extranjera y las operaciones de derivados.',
    wrong: [
      'Los pagos internos entre residentes deben efectuarse en moneda legal colombiana: son operaciones internas, no de canalización.',
      'Respuesta correcta: la inversión extranjera en Colombia y sus rendimientos son de obligatoria canalización.',
      'Los residentes pueden tener, poseer y negociar divisas de operaciones no canalizables sin que ello sea infracción al régimen cambiario.',
      'Los gastos de viajeros con divisas de libre tenencia no son operaciones de obligatoria canalización.',
    ],
    source: 'TACI Unidad 4 (págs. 137-143); Resolución Externa 1 de 2018',
  },
  {
    id: 'q-m03-021',
    indicator: 'i06',
    moduleId: 'm03',
    topic: 'Control cambiario: caso',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Una empresa exportadora recibe el pago de su venta al exterior en una cuenta bancaria abierta en el exterior sin registrarla como cuenta de compensación y por fuera de los intermediarios del mercado cambiario. La operación era de obligatoria canalización. ¿Qué consecuencia corresponde?',
    options: [
      'Ninguna, porque la empresa es libre de recibir sus divisas donde quiera.',
      'La DIAN puede adelantar la investigación y aplicar el régimen sancionatorio cambiario del Decreto 2245 de 2011, sin perjuicio de las normas tributarias y aduaneras aplicables.',
      'La sanción corresponde exclusivamente al Banco de la República, que sanciona a los residentes por incumplir el régimen que expide.',
      'La Superintendencia Financiera sanciona al banco del exterior y la DIAN archiva el caso por falta de competencia.',
    ],
    correct: 1,
    justification:
      'Las operaciones de obligatoria canalización deben negociarse o transferirse a través de los intermediarios del mercado cambiario o por cuentas de compensación. La DIAN vigila el cumplimiento del régimen cambiario en materia de importaciones y exportaciones, y sanciona administrativamente su incumplimiento con el procedimiento del Decreto 2245 de 2011.',
    wrong: [
      'No hay libertad absoluta: las operaciones de obligatoria canalización deben cursar por el mercado cambiario (IMC o cuentas de compensación), y su incumplimiento genera sanción.',
      'Respuesta correcta: la DIAN investiga y sanciona administrativamente el incumplimiento del régimen cambiario.',
      'El Banco de la República expide el régimen y registra las cuentas de compensación; la sanción administrativa por su incumplimiento corresponde a la DIAN.',
      'La Superintendencia Financiera vigila a los intermediarios del mercado cambiario, pero la competencia para sancionar al residente infractor en materia cambiaria es de la DIAN.',
    ],
    source: 'TACI Unidad 4 y 5 (págs. 138-149); Decreto 1742 de 2020, art. 3; Decreto 2245 de 2011',
  },
  {
    id: 'q-m03-022',
    indicator: 'i06',
    moduleId: 'm03',
    topic: 'Declaración de cambio e intermediarios',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'La declaración de cambio es…',
    options: [
      '…el formulario en el que se reporta al Banco de la República la posición propia de las divisas de los bancos.',
      '…la declaración juramentada, contenida en un formulario, en la que se consigna la información sobre el monto, las características y las demás condiciones de una operación de cambio canalizada a través del mercado cambiario.',
      '…el documento con el que se declaran los impuestos aduaneros de una importación.',
      '…el registro que hacen los viajeros ante la DIAN al ingresar al país.',
    ],
    correct: 1,
    justification:
      'La declaración de cambio es la declaración juramentada contenida en un formulario en la que se consigna la información sobre el monto, las características y las demás condiciones de la operación de cambio celebrada a través del mercado cambiario. Se diligencia a nombre de quien realiza la operación y puede presentarla el intermediario del mercado cambiario con mandato.',
    wrong: [
      'La declaración de cambio reporta operaciones de los residentes y no residentes canalizadas por el mercado; no es un reporte de posición propia de los establecimientos bancarios.',
      'Respuesta correcta: es la declaración juramentada de la operación de cambio canalizada.',
      'Los tributos aduaneros se declaran en la declaración de importación, que es un documento distinto y de competencia aduanera.',
      'El ingreso de viajeros se controla con la declaración de equipaje y dinero, regulada por las normas aduaneras y cambiarias sobre viajeros.',
    ],
    source: 'TACI Unidad 4 (págs. 135-136); Resolución Externa 1 de 2018 (art. 8 y ss.)',
  },
  {
    id: 'q-m03-023',
    indicator: 'i06',
    moduleId: 'm03',
    topic: 'Competencias de control de la DIAN',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un funcionario de la DIAN recibe información sobre un hotel que no exige ni conserva el conocimiento del cliente en operaciones de cambio, un importador que subfactura y un profesional que compra y vende divisas sin autorización. ¿Cuál norma le permite fundamentar las tres actuaciones de control?',
    options: [
      'El artículo 3 del Decreto 1742 de 2020, que le asigna funciones de control y vigilancia cambiaria, incluida la competencia residual y la autorización de profesionales de compra y venta de divisas.',
      'La Resolución Externa 1 de 2018, que faculta a la DIAN para expedir el régimen cambiario.',
      'El Decreto 1165 de 2019, que le atribuye el control aduanero de las operaciones de cambio.',
      'La Ley 1609 de 2013, que le asigna funciones de policía judicial en materia de divisas.',
    ],
    correct: 0,
    justification:
      'El artículo 3 del Decreto 1742 de 2020 señala las funciones de control y vigilancia cambiaria de la DIAN: vigilar el cumplimiento del régimen cambiario en importación y exportación de bienes y servicios, gastos asociados, financiación en moneda extranjera, subfacturación y sobrefacturación; controlar las operaciones derivadas del régimen que no sean competencia de otra entidad (competencia residual); y autorizar, controlar y vigilar a las personas que ejercen profesionalmente la compra y venta de divisas.',
    wrong: [
      'Respuesta correcta: las tres actuaciones se enmarcan en el artículo 3 del Decreto 1742 de 2020.',
      'La Resolución Externa 1 de 2018 es expedida por la Junta Directiva del Banco de la República y no faculta a la DIAN para expedir el régimen cambiario.',
      'El Decreto 1165 de 2019 es el estatuto aduanero y no contiene las funciones de control cambiario de la DIAN.',
      'La Ley 1609 de 2013 establece los principios y normas generales de la legislación aduanera; no asigna funciones de policía judicial a la DIAN en materia de divisas.',
    ],
    source: 'Decreto 1742 de 2020, art. 3; TACI Unidad 4 y 5 (págs. 143-149)',
  },
]
