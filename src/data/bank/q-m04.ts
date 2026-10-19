import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 4
// Obligaciones formales y sustanciales en materia tributaria
// (indicador i09).
// El arreglo wrong está alineado con options: wrong[i] explica
// por qué la opción i es incorrecta (el índice correct queda
// con la razón de la respuesta correcta).
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m04-001',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Concepto de obligación tributaria sustancial',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Según el artículo 1 del Estatuto Tributario, la obligación tributaria sustancial…',
    options: [
      '…nace con la presentación de la declaración tributaria y tiene por objeto el pago del tributo.',
      '…se origina al realizarse el presupuesto o los presupuestos previstos en la ley como generadores del impuesto y tiene por objeto el pago del tributo.',
      '…nace del acuerdo entre el contribuyente y la administración y tiene por objeto la presentación de información.',
      '…se origina al notificarse el requerimiento especial y tiene por objeto la imposición de sanciones.',
    ],
    correct: 1,
    justification:
      'El artículo 1 E.T. define la obligación sustancial como el vínculo jurídico entre el Estado y el sujeto pasivo que se origina al realizarse el presupuesto legal (hecho generador) y que tiene por objeto el pago del tributo. Es una obligación ex lege: nace de la ley, no del acuerdo de voluntades, y no se confunde con las obligaciones formales.',
    wrong: [
      'La declaración no crea la obligación: la declara y la cuantifica. La obligación nace con la causación del hecho generador.',
      'Respuesta correcta: la obligación sustancial se origina al realizarse el hecho generador y tiene por objeto el pago del tributo.',
      'La obligación tributaria no nace de un acuerdo de voluntades sino de la ley, y su objeto es el pago del tributo, no la presentación de información (eso corresponde a las obligaciones formales).',
      'El requerimiento especial es un acto del procedimiento de determinación y la imposición de sanciones es una obligación distinta de la sustancial; ninguna de las dos define su nacimiento.',
    ],
    source: 'Estatuto Tributario, art. 1; TACI Unidad 2 (págs. 16-20)',
  },
  {
    id: 'q-m04-002',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Nacimiento y causación',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Una sociedad vendió mercancías gravadas con IVA en diciembre de 2025 y expidió la factura el 28 de diciembre de 2025, pero solo presentó y pagó la declaración en febrero de 2026. ¿En qué momento nació la obligación sustancial?',
    options: [
      'En febrero de 2026, porque la presentación de la declaración y el pago son los hechos que hacen exigible la obligación.',
      'El 28 de diciembre de 2025, con la causación del impuesto al emitirse la factura, aunque su declaración y pago se hicieran después.',
      'El 31 de diciembre de 2025, porque el cierre del período bimestral del IVA determina la causación del impuesto.',
      'En enero de 2026, porque el vencimiento del plazo para declarar marca el nacimiento de la obligación sustancial.',
    ],
    correct: 1,
    justification:
      'La obligación sustancial nace con la causación del hecho generador (art. 1 E.T.). En el IVA, tratándose de ventas, el impuesto se causa en la fecha de emisión de la factura o documento equivalente y, a falta de uno y otro, en la fecha de entrega de la mercancía (art. 429 E.T.). La declaración y el pago son posteriores y corresponden al cumplimiento, no al nacimiento.',
    wrong: [
      'La presentación y el pago son actos de cumplimiento de una obligación que ya había nacido; no determinan su nacimiento.',
      'Respuesta correcta: la obligación nació el 28 de diciembre de 2025, con la causación en la fecha de la factura.',
      'El IVA es de causación instantánea: el bimestre es el período para declarar, no un período de causación que se cierre el 31 de diciembre.',
      'El vencimiento del plazo para declarar marca la exigibilidad de la obligación, pero no su nacimiento.',
    ],
    source: 'Estatuto Tributario, arts. 1 y 429; TACI Unidad 2 (págs. 49-51)',
  },
  {
    id: 'q-m04-003',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Retención en la fuente',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Una empresa paga honorarios el 20 de diciembre pero abona en cuenta el valor al proveedor el 5 de enero siguiente. ¿Cuándo se causa la retención en la fuente?',
    options: [
      'El 20 de diciembre, porque la orden de pago es la que genera la retención, con independencia del abono en cuenta.',
      'El 5 de enero, porque la retención se causa en el momento del pago o abono en cuenta, el que ocurra primero.',
      'El 31 de diciembre, porque el cierre del año gravable depura las cuentas y define el momento de la retención.',
      'Cuando se expida el certificado de retención, porque ese documento acredita la práctica de la retención.',
    ],
    correct: 1,
    justification:
      'El artículo 368 E.T. obliga a retener en el momento del pago o abono en cuenta. Si primero se abona en cuenta (5 de enero), la retención se causa en esa fecha, aunque el pago material sea posterior. La retención es un anticipo del impuesto de renta del contribuyente y una obligación propia del agente retenedor.',
    wrong: [
      'La orden de pago no causa la retención: la causación se produce con el pago o el abono en cuenta.',
      'Respuesta correcta: si el abono en cuenta ocurre el 5 de enero y es anterior al pago, la retención se causa en esa fecha.',
      'El cierre del año gravable es relevante para el impuesto de renta, pero no es el hecho que causa la retención en la fuente.',
      'El certificado de retención es una obligación formal del agente; su expedición no determina la causación de la retención.',
    ],
    source: 'Estatuto Tributario, arts. 368 y 370; TACI Unidad 2 (págs. 66-71)',
  },
  {
    id: 'q-m04-004',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Exigibilidad, firmeza y mérito ejecutivo',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      '¿Cuál de las siguientes afirmaciones distingue correctamente la firmeza de la declaración y el mérito ejecutivo de los actos de determinación?',
    options: [
      'La firmeza impide que la administración modifique la liquidación privada; el mérito ejecutivo habilita el cobro coactivo del saldo a pagar determinado en la declaración o en el acto (art. 828 E.T.).',
      'La firmeza y el mérito ejecutivo son lo mismo: ambos se producen a los tres años de presentada la declaración y habilitan el cobro coactivo por la DIAN.',
      'El mérito ejecutivo se produce con la notificación del requerimiento especial y la firmeza con la liquidación de revisión, pues ambos actos cierran la discusión.',
      'La firmeza se predica exclusivamente de los actos de la administración y el mérito ejecutivo solo de las sanciones, no de los saldos a pagar por impuestos.',
    ],
    correct: 0,
    justification:
      'La firmeza (art. 714 E.T.) cierra la posibilidad de que la administración modifique la liquidación privada o el acto de determinación; el mérito ejecutivo (art. 828 E.T.) es el atributo que convierte la declaración y los actos de determinación en títulos ejecutivos para el cobro coactivo. Son instituciones distintas y cumplen funciones distintas.',
    wrong: [
      'Respuesta correcta: la firmeza limita la modificación de la declaración; el mérito ejecutivo habilita el cobro.',
      'No son lo mismo: la firmeza se refiere a la posibilidad de modificar la liquidación privada y el mérito ejecutivo al cobro coactivo; además la regla general de firmeza se cuenta desde el vencimiento del plazo para declarar, no desde la presentación.',
      'El requerimiento especial no produce mérito ejecutivo ni la liquidación de revisión produce firmeza por sí sola: la firmeza es el resultado del paso del tiempo sin actos oportunos.',
      'La firmeza se predica de la declaración y de los actos de determinación, y el mérito ejecutivo no se limita a las sanciones: comprende los saldos a pagar por impuestos y sanciones.',
    ],
    source: 'Estatuto Tributario, arts. 714 y 828; TACI Unidad 2 (págs. 100-102)',
  },
  {
    id: 'q-m04-005',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Sujeto pasivo en el Estatuto Tributario',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'De acuerdo con los artículos 2 y 3 del Estatuto Tributario, los contribuyentes o responsables directos del pago del tributo son…',
    options: [
      '…las personas que la DIAN designe mediante resolución como deudores del tributo.',
      '…los sujetos respecto de quienes se realiza el hecho generador de la obligación sustancial.',
      '…los terceros que, sin realizar el hecho generador, se ofrezcan voluntariamente a pagar el impuesto.',
      '…las entidades que el Gobierno determine como recaudadoras, sean públicas o privadas.',
    ],
    correct: 1,
    justification:
      'El artículo 2 E.T. define como contribuyentes o responsables directos del pago del tributo a los sujetos respecto de quienes se realiza el hecho generador de la obligación sustancial. El artículo 3 se ocupa de los responsables: quienes, sin tener el carácter de contribuyentes, deben cumplir por disposición expresa de la ley las obligaciones atribuidas a estos; para el IVA, el numeral 4 de ese artículo asimila los términos contribuyente y responsable.',
    wrong: [
      'La calidad de contribuyente no la asigna la administración por resolución: se deriva directamente de la ley y de la realización del hecho generador.',
      'Respuesta correcta: son los sujetos respecto de quienes se realiza el hecho generador de la obligación sustancial.',
      'El pago voluntario de un tercero no lo convierte en contribuyente; la ley puede atribuirle responsabilidad, pero no por su sola voluntad.',
      'Las entidades recaudadoras son agentes o responsables del recaudo, no contribuyentes, y su designación no depende de una decisión libre del Gobierno.',
    ],
    source: 'Estatuto Tributario, arts. 2 y 3; TACI Unidad 2 (págs. 16-18)',
  },
  {
    id: 'q-m04-006',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Registro Único Tributario',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'El Registro Único Tributario (RUT) es…',
    options: [
      '…el registro mercantil que llevan las cámaras de comercio, obligatorio para todas las personas naturales y jurídicas que desarrollan actividad económica.',
      '…el mecanismo único para identificar, ubicar y clasificar a los sujetos de obligaciones administradas por la DIAN, administrado por esa entidad.',
      '…el sistema de facturación electrónica de la DIAN, con el que se identifican los contribuyentes y se validan sus documentos.',
      '…el registro de los importadores y exportadores que lleva la Superintendencia de Sociedades para el control del comercio exterior.',
    ],
    correct: 1,
    justification:
      'El RUT, administrado por la DIAN, es el mecanismo único para identificar, ubicar y clasificar a las personas y entidades con obligaciones administradas por la entidad: contribuyentes declarantes, no contribuyentes declarantes de ingresos y patrimonio, responsables de IVA, agentes retenedores, importadores, exportadores y usuarios aduaneros, entre otros. La inscripción genera el NIT con el que se identifican las declaraciones y actuaciones.',
    wrong: [
      'El registro mercantil corresponde a las cámaras de comercio y es independiente del RUT; los obligados a inscribirse en el RUT son los señalados por las normas tributarias.',
      'Respuesta correcta: el RUT es el mecanismo único de identificación de los obligados ante la DIAN.',
      'La facturación electrónica es un sistema distinto, reglamentado por los artículos 615, 616-1, 617 y 618 E.T.; el RUT es el registro de identificación del obligado.',
      'El registro de importadores y exportadores se realiza a través del RUT ante la DIAN, no ante la Superintendencia de Sociedades.',
    ],
    source: 'Estatuto Tributario, art. 555-2; TACI Unidad 2 (págs. 66-68)',
  },
  {
    id: 'q-m04-007',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Facturación electrónica',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'Sobre la factura electrónica de venta, es correcto afirmar que…',
    options: [
      '…es obligatoria solo para las grandes empresas con ingresos superiores a 100.000 UVT, mientras las demás pueden seguir facturando en papel sin validación previa.',
      '…se expide con validación previa de la DIAN y se entiende expedida cuando es validada y entregada al adquirente; excepcionalmente, por inconvenientes tecnológicos, se puede facturar por talonario o en papel.',
      '…puede expedirse en cualquier formato, incluido el papel, y su validación ante la DIAN es voluntaria para los obligados a facturar, salvo que el adquirente la solicite.',
      '…reemplazó todos los documentos equivalentes, que ya no pueden utilizarse en ningún caso, ni siquiera en las operaciones de transporte.',
    ],
    correct: 1,
    justification:
      'El régimen de facturación electrónica (arts. 615, 616-1, 617 y 618 E.T., y las resoluciones de facturación de la DIAN) exige la factura electrónica de venta con validación previa: se entiende expedida cuando es validada y entregada al adquirente. Por inconvenientes tecnológicos que impidan el cumplimiento del deber, el obligado puede facturar por talonario o en papel, autorizando el sistema y accediendo a los servicios informáticos de la DIAN.',
    wrong: [
      'La obligación de facturar electrónicamente no depende de un umbral de 100.000 UVT: cobija a comerciantes y a quienes prestan servicios gravados, con las excepciones que la ley y la DIAN señalan para pequeños contribuyentes y grupos específicos.',
      'Respuesta correcta: factura electrónica con validación previa, con la excepción del talonario por inconvenientes tecnológicos.',
      'La validación de la DIAN no es voluntaria: es requisito del régimen de factura electrónica de venta.',
      'Los documentos equivalentes a la factura subsisten en los casos que la ley autoriza (tiquetes de máquina registradora, factura de importación, documentos de transporte, entre otros).',
    ],
    source: 'Estatuto Tributario, arts. 615, 616-1, 617 y 618; TACI Unidad 2 (págs. 68-72)',
  },
  {
    id: 'q-m04-008',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Efectos de no facturar',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una empresa vende mercancías a otra y no expide la factura ni un documento equivalente. ¿Cuál es la consecuencia fiscal más relevante para el comprador?',
    options: [
      'Ninguna, porque el comprador ya pagó el precio y la operación es válida civilmente, de modo que el costo puede reconocerse en la contabilidad.',
      'El comprador no puede reconocer fiscalmente el costo o la deducción si no acredita la existencia de la factura con el lleno de los requisitos legales.',
      'El comprador debe asumir la sanción por no facturar del vendedor, porque la DIAN cobra la sanción a quien se beneficia del costo.',
      'El comprador debe expedir la factura en lugar del vendedor para poder deducir el costo y descontar el IVA de la operación.',
    ],
    correct: 1,
    justification:
      'Los costos, deducciones e impuestos descontables requieren estar soportados en facturas con el lleno de los requisitos legales (arts. 615, 616-1, 617, 618, 771-2 y ss. E.T.). Si el vendedor no factura, el comprador pierde la posibilidad de reconocer el costo o la deducción y el impuesto descontable, además de las sanciones que recaen sobre el vendedor (art. 652-1 E.T. por no facturar; art. 652 E.T. si expide factura sin los requisitos legales).',
    wrong: [
      'La validez civil de la operación no salva el requisito fiscal: sin factura con requisitos legales, el comprador no puede soportar el costo o la deducción.',
      'Respuesta correcta: sin factura, el comprador no puede reconocer fiscalmente el costo ni la deducción.',
      'La sanción por no facturar recae en el obligado a facturar (el vendedor); el comprador afronta el desconocimiento del costo o la deducción.',
      'El comprador no puede ni debe facturar por el vendedor: la obligación de facturar corresponde a quien vende o presta el servicio.',
    ],
    source: 'Estatuto Tributario, arts. 615, 617, 618, 652-1 y 771-2; TACI Unidad 2 (págs. 68-72)',
  },
  {
    id: 'q-m04-009',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Información exógena',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La información exógena es…',
    options: [
      '…la información que el contribuyente incluye en su propia declaración de renta y que se conoce como información endógena.',
      '…la información sobre operaciones de los contribuyentes que suministran terceros y entidades obligadas a reportar, para el control de la DIAN.',
      '…la contabilidad que llevan los comerciantes conforme a las NIF y que se reporta anualmente a la DIAN a través de los formatos de información exógena.',
      '…la información de los estados financieros que las sociedades publican en su página web y que la DIAN utiliza para el control.',
    ],
    correct: 1,
    justification:
      'La información exógena es la reportada por terceros (agentes retenedores, entidades financieras, notarios, cámaras de comercio, empresas y entidades obligadas) en los formatos que fija la resolución anual del Director General de la DIAN (por ejemplo, formato 1001 de pagos y abonos en cuenta y retenciones, 1007 de ingresos recibidos, 1010 de socios y accionistas). Su incumplimiento se sanciona con el artículo 651 E.T.',
    wrong: [
      'La información que el contribuyente declara es endógena (su propia declaración); la exógena proviene de terceros.',
      'Respuesta correcta: es la información de terceros que permite a la DIAN cruzar datos y controlar el cumplimiento.',
      'La contabilidad es una obligación formal distinta, regida por las normas contables y por los artículos 19 C.Co. y 772 y siguientes E.T.',
      'La publicación de estados financieros es una obligación societaria, no la información exógena tributaria.',
    ],
    source: 'Estatuto Tributario, arts. 623 y ss. y 651; TACI Unidad 2 (págs. 68-72)',
  },
  {
    id: 'q-m04-010',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Conciliación fiscal',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Una sociedad obligada a llevar contabilidad obtuvo ingresos brutos de 30.000 UVT en el año. ¿Debe presentar la conciliación fiscal por los servicios informáticos electrónicos de la DIAN?',
    options: [
      'Sí, porque todos los obligados a llevar contabilidad deben presentar la conciliación fiscal por servicios informáticos, sin importar su nivel de ingresos, como requisito para que la declaración de renta se entienda presentada.',
      'No, porque solo están obligados por servicios informáticos los contribuyentes obligados a llevar contabilidad con ingresos brutos iguales o superiores a 45.000 UVT; sin embargo, puede ser requerida por la administración.',
      'No, porque la conciliación fiscal solo la deben presentar las personas naturales obligadas a llevar contabilidad y con ingresos altos, mientras las sociedades la conservan sin reportarla.',
      'Sí, pero solo si la DIAN lo solicita mediante requerimiento especial o emplazamiento dentro de un proceso de fiscalización.',
    ],
    correct: 1,
    justification:
      'La Ley 1943 de 2018 precisó que la conciliación fiscal debe presentarse por los servicios informáticos electrónicos solo por los contribuyentes obligados a llevar contabilidad cuyos ingresos brutos sean iguales o superiores a 45.000 UVT, sin perjuicio de que la administración pueda solicitar la conciliación a otros contribuyentes y de que estos deban conservarla a disposición de la DIAN.',
    wrong: [
      'La obligación por servicios informáticos no cobija a todos los obligados a llevar contabilidad: la ley fijó el umbral de 45.000 UVT de ingresos brutos.',
      'Respuesta correcta: con 30.000 UVT no está obligada por servicios informáticos, pero debe conservar la conciliación y puede ser requerida.',
      'La conciliación fiscal no es exclusiva de personas naturales: aplica a los contribuyentes obligados a llevar contabilidad, sean personas naturales o jurídicas.',
      'El requerimiento especial es un acto del proceso de revisión; la conciliación fiscal se pone a disposición de la administración sin necesidad de ese acto.',
    ],
    source: 'Ley 1943 de 2018; Decreto 1625 de 2016 (conciliación fiscal); TACI Unidad 2 (págs. 77-80)',
  },
  {
    id: 'q-m04-011',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Bancarización',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Una empresa pagó en efectivo 300 UVT en un solo pago por la compra de mercancía y pretende deducir el costo. Sobre la procedencia fiscal de esa deducción, es correcto afirmar que…',
    options: [
      '…procede, porque el proveedor es el obligado a facturar y los medios de pago no afectan el reconocimiento del costo, siempre que exista factura válida.',
      '…no procede, porque los pagos individuales en efectivo que superan el límite previsto en el artículo 771-5 E.T. no son fiscalmente aceptados para el reconocimiento de costos, deducciones, pasivos e impuestos descontables.',
      '…procede, porque el límite de efectivo del artículo 771-5 E.T. se calcula por el total anual de pagos y no por cada pago individual del pagador.',
      '…no procede, porque ningún pago en efectivo es aceptado fiscalmente en Colombia desde 2016, cuando se eliminó el régimen gradual de bancarización.',
    ],
    correct: 1,
    justification:
      'El artículo 771-5 E.T. establece los medios de pago para efectos fiscales y condiciona el reconocimiento fiscal de costos, deducciones, pasivos e impuestos descontables al uso de dichos medios. La DIAN ha precisado (Concepto 2136 de 2018) que el límite es por el sujeto que recibe los pagos, dentro de un año gravable; el material de formación ilustra el límite en 100 UVT por pago individual.',
    wrong: [
      'La obligación de facturar es del vendedor, pero la bancarización es una condición autónoma del reconocimiento fiscal a cargo del pagador.',
      'Respuesta correcta: el pago en efectivo que supera el límite del artículo 771-5 E.T. no es aceptado fiscalmente.',
      'El límite se calcula por el sujeto que recibe los pagos y por cada pago individual, según la interpretación oficial (Concepto DIAN 2136 de 2018), no por el total del año del pagador.',
      'Las normas de bancarización no prohíben todo pago en efectivo: fijan límites y un régimen gradual; los pagos por debajo del límite mantienen relevancia fiscal.',
    ],
    source: 'Estatuto Tributario, art. 771-5; Concepto DIAN 2136 de 2018; TACI Unidad 2 (págs. 77-80)',
  },
  {
    id: 'q-m04-012',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Contribuyente y responsable',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La diferencia entre contribuyente y responsable es que…',
    options: [
      '…el contribuyente realiza el hecho generador y el responsable, sin ser contribuyente, debe cumplir por disposición expresa de la ley las obligaciones atribuidas a este.',
      '…el contribuyente paga y el responsable solo informa las operaciones a la DIAN, sin asumir el pago del impuesto.',
      '…el responsable siempre responde de manera subsidiaria y el contribuyente de manera solidaria, por los artículos 573 y 793 E.T.',
      '…en todos los impuestos los términos son sinónimos, porque ambas figuras realizan el hecho generador y responden por el tributo.',
    ],
    correct: 0,
    justification:
      'El artículo 2 E.T. define al contribuyente como el sujeto respecto del cual se realiza el hecho generador; el artículo 3 E.T. define a los responsables como quienes, sin tener el carácter de contribuyentes, deben cumplir por disposición expresa de la ley las obligaciones atribuidas a estos. El numeral 4 del artículo 3 aclara que, para el impuesto sobre las ventas, los términos contribuyente y responsable son sinónimos.',
    wrong: [
      'Respuesta correcta: el contribuyente realiza el hecho generador; el responsable cumple por mandato legal obligaciones de aquel.',
      'El responsable no solo informa: debe declarar, pagar, facturar y certificar según el caso, y responde por el impuesto (art. 370 E.T.).',
      'Ni la responsabilidad subsidiaria ni la solidaria se predican por regla general de estas figuras: son categorías de los artículos 573 y 793 E.T., aplicables en los casos que la ley señala.',
      'La sinonimia existe solo para el IVA (numeral 4 del art. 3 E.T.); en los demás tributos el E.T. distingue al contribuyente del responsable.',
    ],
    source: 'Estatuto Tributario, arts. 2 y 3; TACI Unidad 2 (págs. 16-18)',
  },
  {
    id: 'q-m04-013',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Responsabilidad del agente retenedor',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una sociedad pagó honorarios por 40 millones y no practicó la retención que correspondía. ¿Cuál es la consecuencia para la sociedad?',
    options: [
      'Ninguna, porque la retención solo se causa si el beneficiario del pago es contribuyente declarante y presenta la declaración de renta en el mismo año.',
      'La DIAN puede exigirle el valor dejado de retener con los intereses de mora y las sanciones que correspondan, porque el agente retenedor responde por los valores que debió retener y no retuvo.',
      'La sociedad solo debe expedir el certificado de retención y anotar el pago en su contabilidad, sin consecuencias económicas ni intereses.',
      'La sociedad debe pagar el impuesto de renta del profesional por su cuenta y sin recargo, porque lo sustituye en la obligación sustancial como responsable solidario.',
    ],
    correct: 1,
    justification:
      'El artículo 370 E.T. establece que los agentes de retención responden directa y solidariamente por el valor dejado de retener o retenido sin consignar. La responsabilidad del agente es sustancial: aunque no haya retenido, debe pagar el valor que debió retener, con los intereses de mora (arts. 634 y ss. E.T.) y las sanciones que correspondan; si hubiera retenido y no consignado, afrontaría además la responsabilidad penal por omisión del agente retenedor (art. 402 del Código Penal), sin perjuicio de las obligaciones del beneficiario del pago.',
    wrong: [
      'La obligación de retener depende del concepto y del sujeto señalado por las normas de retención, no de que el beneficiario sea declarante.',
      'Respuesta correcta: el agente retenedor responde por los valores que debió retener y no retuvo.',
      'El certificado es una obligación formal adicional, pero la consecuencia principal es económica: el pago del valor no retenido con los intereses de mora y las sanciones que correspondan.',
      'El agente no sustituye al contribuyente en el impuesto de renta por el ingreso: su obligación es la retención dejada de practicar y las sanciones asociadas.',
    ],
    source: 'Estatuto Tributario, arts. 368, 370 y 634 y ss.; Código Penal, art. 402; TACI Unidad 2 (págs. 66-71)',
  },
  {
    id: 'q-m04-014',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Representantes legales y deberes formales',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'Sobre el cumplimiento de los deberes formales, el Estatuto Tributario dispone que…',
    options: [
      '…puede cumplirlos cualquier empleado de la empresa sin autorización, sin que ello comprometa responsabilidad.',
      '…el cumplimiento debe hacerse personalmente por el contribuyente o responsable y, tratándose de sociedades y entidades, por sus representantes legales.',
      '…solo el revisor fiscal responde por el cumplimiento de los deberes formales de las sociedades.',
      '…el contador público es el único obligado a firmar las declaraciones y a responder por ellas.',
    ],
    correct: 1,
    justification:
      'El artículo 571 E.T. establece que el cumplimiento de los deberes formales debe hacerse personalmente por los contribuyentes o responsables y, tratándose de sociedades y demás entidades, a través de sus representantes legales. El artículo 572 precisa que se consideran representantes legales los gerentes, administradores, síndicos, revisores fiscales y las demás personas que ocupen los primeros cargos de dirección.',
    wrong: [
      'El cumplimiento de deberes formales puede delegarse en apoderados o dependientes, pero la responsabilidad legal recae en el contribuyente y en sus representantes legales, no en cualquier empleado sin autorización.',
      'Respuesta correcta: cumplimiento personal del obligado y, en las sociedades, de sus representantes legales.',
      'El revisor fiscal puede ser considerado representante legal para efectos tributarios en los casos de los artículos 571 y 572, pero no es el único que responde.',
      'El contador firma y dictamina estados financieros y declaraciones cuando la ley lo exige, pero no sustituye la responsabilidad del representante legal.',
    ],
    source: 'Estatuto Tributario, arts. 571, 572 y 572-1; TACI Unidad 2 (págs. 71-75)',
  },
  {
    id: 'q-m04-015',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Solidaridad tributaria',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Un socio de una sociedad limitada en pleno funcionamiento recibe un requerimiento de la DIAN por los impuestos de la sociedad argumentando que, como socio, responde solidariamente. ¿Es procedente el requerimiento?',
    options: [
      'Sí, porque todos los socios responden solidariamente por las deudas de la sociedad, sin límite distinto del monto de sus aportes según el artículo 793 E.T.',
      'No, en principio, porque la solidaridad tributaria solo existe en los casos expresamente previstos en la ley (art. 793 E.T.) y no por la sola calidad de socio de una sociedad en funcionamiento.',
      'Sí, porque la solidaridad se presume cuando la sociedad tiene más de dos socios y la DIAN puede cobrar a cualquiera de ellos la deuda de la sociedad.',
      'No, porque los socios nunca responden por las deudas tributarias de la sociedad, cualquiera sea la causa de su disolución o liquidación irregular.',
    ],
    correct: 1,
    justification:
      'La solidaridad no se presume: solo existe en los casos expresamente señalados por la ley. El artículo 793 E.T. la impone, entre otros, a los herederos y legatarios, a los socios de sociedades disueltas o liquidadas irregularmente (hasta el monto de la distribución recibida, art. 794 E.T.) y a los socios de entidades no contribuyentes utilizadas para evadir impuestos (arts. 795 y 795-1 E.T.). La sola calidad de socio de una sociedad en funcionamiento no genera solidaridad.',
    wrong: [
      'La solidaridad no se presume ni se deriva automáticamente de la calidad de socio: requiere norma expresa y, en el caso de sociedades en funcionamiento, no existe por regla general.',
      'Respuesta correcta: sin norma expresa que imponga la solidaridad, el requerimiento no es procedente contra el socio.',
      'No hay presunción de solidaridad por el número de socios: la ley tributaria no crea solidaridad por esa circunstancia.',
      'Los socios sí pueden responder en los casos de los artículos 573, 793, 794 y 795 E.T.; lo que no existe es una responsabilidad general e ilimitada por el solo hecho de ser socio.',
    ],
    source: 'Estatuto Tributario, arts. 793, 794, 795 y 795-1; TACI Unidad 2 (págs. 90-99)',
  },
  {
    id: 'q-m04-016',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Sucesiones y herederos',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Una persona fallece en 2025 adeudando el impuesto de renta de 2023. La sucesión se liquida y se adjudican bienes a dos herederos por 300 y 200 millones respectivamente. ¿Cómo opera la responsabilidad por la deuda tributaria?',
    options: [
      'Los herederos responden solidariamente por el total de la deuda, sin límite alguno, con su patrimonio personal, porque la obligación se transmite íntegra.',
      'Los herederos responden solidariamente por las obligaciones del causante hasta el monto de la distribución recibida; la sucesión ilíquida responde con los bienes de la herencia mientras no se adjudique.',
      'La deuda se extingue con la muerte del causante, porque las obligaciones tributarias son personalísimas y no se transmiten a los herederos.',
      'Solo responde el albacea, porque es el representante legal de la sucesión y concentra la administración de los bienes de la herencia.',
    ],
    correct: 1,
    justification:
      'El artículo 793 E.T. impone la solidaridad de los herederos y legatarios por las obligaciones del causante, y el artículo 794 la precisa para los casos de sociedades respecto del monto de la distribución. Mientras la sucesión está ilíquida, la sucesión es contribuyente del impuesto de renta y responde con los bienes de la herencia; adjudicados los bienes, cada heredero responde hasta el límite de su hijuela.',
    wrong: [
      'La solidaridad de los herederos no es ilimitada ni compromete su patrimonio personal más allá de lo recibido: el límite es el monto de la distribución o hijuela.',
      'Respuesta correcta: solidaridad de los herederos hasta el monto recibido, y responsabilidad de la sucesión ilíquida con los bienes de la herencia.',
      'La muerte no extingue las obligaciones tributarias del causante: se transmiten y los herederos y la sucesión responden en los términos de los artículos 793 y siguientes E.T.',
      'El albacea es un representante de la sucesión, pero la responsabilidad por las deudas del causante recae en la sucesión y, adjudicados los bienes, en los herederos y legatarios.',
    ],
    source: 'Estatuto Tributario, arts. 572, 573, 793 y 794; TACI Unidad 2 (págs. 90-99)',
  },
  {
    id: 'q-m04-017',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Clases de determinación',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La determinación del tributo puede ser privada, oficial o mixta. La determinación privada se concreta en…',
    options: [
      '…la liquidación oficial de revisión expedida por la administración para modificar la declaración.',
      '…la declaración tributaria que presenta el contribuyente o responsable (autoliquidación).',
      '…la liquidación de aforo que expide la DIAN cuando el contribuyente no presenta la declaración.',
      '…la resolución sanción por no declarar, que cuantifica el tributo y la sanción a cargo del incumplido.',
    ],
    correct: 1,
    justification:
      'La determinación privada es la que realiza el propio sujeto pasivo mediante su declaración tributaria: el sistema colombiano es de autoliquidación (autodeterminación). La liquidación oficial de revisión y la liquidación de aforo son actos de determinación oficial, y la determinación mixta surge de la corrección o del allanamiento dentro del proceso.',
    wrong: [
      'La liquidación oficial de revisión es determinación oficial, pues la profiere la administración para modificar la liquidación privada (arts. 702 a 714 E.T.).',
      'Respuesta correcta: la determinación privada se concreta en la declaración del contribuyente.',
      'La liquidación de aforo es determinación oficial que se profiere frente a quien no declaró (arts. 715 a 719 E.T.).',
      'La resolución sanción es un acto sancionatorio, no un acto de determinación del tributo.',
    ],
    source: 'TACI Unidad 2 (págs. 80-102); Estatuto Tributario, arts. 588 y ss.',
  },
  {
    id: 'q-m04-018',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Procedimiento de revisión',
    difficulty: 'intermedia',
    kind: 'conceptual',
    statement:
      'En el procedimiento de determinación oficial mediante liquidación de revisión, el orden correcto de las actuaciones es…',
    options: [
      'Liquidación de revisión, requerimiento especial, respuesta del contribuyente.',
      'Requerimiento especial, respuesta y pruebas del contribuyente, liquidación oficial de revisión.',
      'Pliego de cargos, resolución sanción, liquidación de revisión.',
      'Emplazamiento previo por no declarar, liquidación de aforo, requerimiento especial.',
    ],
    correct: 1,
    justification:
      'El procedimiento de revisión (arts. 702 a 714 E.T.) exige notificar el requerimiento especial (art. 703) en el que se propone la modificación de la liquidación privada, conceder un plazo para responder y aportar pruebas (art. 707), y luego proferir la liquidación oficial de revisión (art. 711). Omitir el requerimiento especial es causal de nulidad de la liquidación de revisión.',
    wrong: [
      'El orden está invertido: la liquidación de revisión es el acto final del procedimiento, previa respuesta al requerimiento especial.',
      'Respuesta correcta: requerimiento especial, respuesta y pruebas, y liquidación oficial de revisión.',
      'El pliego de cargos y la resolución sanción pertenecen al procedimiento sancionatorio (arts. 638 y ss. E.T.), no a la determinación del tributo.',
      'El emplazamiento previo por no declarar y la liquidación de aforo son el camino para quien no declaró (arts. 715 a 719 E.T.), distinto del procedimiento de revisión.',
    ],
    source: 'Estatuto Tributario, arts. 703, 707, 711 y 714; TACI Unidad 2 (págs. 82-97)',
  },
  {
    id: 'q-m04-019',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Término de firmeza',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Una sociedad presentó su declaración de renta del año gravable 2023 de forma extemporánea el 20 de junio de 2024; el plazo para declarar vencía el 10 de abril de 2024. ¿Desde cuándo se cuentan los tres años de firmeza para la notificación del requerimiento especial?',
    options: [
      'Desde el 10 de abril de 2024, fecha de vencimiento del plazo para declarar.',
      'Desde el 20 de junio de 2024, fecha de presentación extemporánea de la declaración.',
      'Desde el 31 de diciembre de 2023, por ser el cierre del año gravable.',
      'Desde la fecha en que la DIAN notifique el primer acto de verificación.',
    ],
    correct: 1,
    justification:
      'El artículo 714 E.T. fija la regla general de tres años desde el vencimiento del plazo para declarar, pero cuando la declaración inicial se presenta extemporáneamente el término de tres años se cuenta desde la fecha de presentación de la declaración. Por eso, en el caso, el término corre desde el 20 de junio de 2024.',
    wrong: [
      'El vencimiento del plazo para declarar es el punto de partida cuando la declaración se presenta oportunamente (incluso si se presenta antes); para la declaración extemporánea la ley fijó la fecha de presentación.',
      'Respuesta correcta: los tres años se cuentan desde el 20 de junio de 2024, fecha de la presentación extemporánea.',
      'El cierre del año gravable es el punto de referencia del período, no el inicio del término de firmeza.',
      'Los actos de verificación de la administración no modifican el término legal de firmeza; solo las suspensiones previstas en la ley (por ejemplo, la inspección tributaria) afectan el término para responder.',
    ],
    source: 'Estatuto Tributario, art. 714; TACI Unidad 2 (págs. 100-102)',
  },
  {
    id: 'q-m04-020',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Liquidación de aforo',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un contribuyente obligado a declarar renta no presentó su declaración. La DIAN lo emplazó y, vencido el plazo, expidió la liquidación de aforo. ¿Cuál afirmación es correcta?',
    options: [
      'La liquidación de aforo es ilegal porque la DIAN necesita la declaración del contribuyente para determinar el tributo.',
      'La liquidación de aforo es un acto de determinación oficial que la DIAN profiere con base en la información disponible, con la sanción por no declarar del artículo 643 E.T.',
      'La liquidación de aforo solo procede si el contribuyente autoriza expresamente su expedición.',
      'Vencido el plazo del emplazamiento, la DIAN debe archivar el expediente y esperar a que el contribuyente declare.',
    ],
    correct: 1,
    justification:
      'El artículo 715 E.T. obliga a emplazar al contribuyente que no declaró para que lo haga en el término de un mes; si no lo hace, la administración determina el impuesto mediante liquidación de aforo (arts. 716 a 719 E.T.), con base en los datos disponibles, y aplica la sanción por no declarar del artículo 643 E.T. Es un acto de determinación oficial que presta mérito ejecutivo.',
    wrong: [
      'La administración puede determinar el tributo sin la declaración del contribuyente: precisamente para eso existe la liquidación de aforo.',
      'Respuesta correcta: la liquidación de aforo es determinación oficial con base en la información disponible y con sanción por no declarar.',
      'La liquidación de aforo no requiere autorización del contribuyente: se profiere ante su incumplimiento del deber de declarar.',
      'La DIAN no archiva el expediente: ante la omisión determina oficialmente el impuesto y cobra la sanción correspondiente.',
    ],
    source: 'Estatuto Tributario, arts. 643, 715, 716 y 717; TACI Unidad 2 (págs. 88-90)',
  },
  {
    id: 'q-m04-021',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Liquidación provisional',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Sobre la liquidación provisional, es correcto afirmar que…',
    options: [
      '…fue creada por la Ley 1819 de 2016, solo procede contra contribuyentes que el año anterior declararon ingresos brutos de hasta 15.000 UVT o patrimonio bruto de hasta 30.000 UVT; si la rechazan, reemplaza al requerimiento especial, al emplazamiento por no declarar o al pliego de cargos.',
      '…fue creada por la Ley 2010 de 2019 y reemplaza a la liquidación oficial de revisión en todos los casos, de modo que el contribuyente no puede solicitar su modificación porque esa ley eliminó el requerimiento especial.',
      '…procede respecto de cualquier contribuyente, sin límite de ingresos ni patrimonio, y solo puede aceptarse o solicitar su modificación una vez, porque la rechazada se convierte automáticamente en liquidación oficial de revisión.',
      '…es un acto del contribuyente equivalente a una corrección de su declaración, que se presenta con la sanción por corrección y produce firmeza inmediata sin necesidad de aceptación de la DIAN.',
    ],
    correct: 0,
    justification:
      'La liquidación provisional fue introducida por la Ley 1819 de 2016 y está reglamentada en los artículos 764 y 765 E.T.: solo puede proferirse respecto de contribuyentes que en el año inmediatamente anterior declararon ingresos brutos iguales o inferiores a 15.000 UVT, o un patrimonio bruto igual o inferior a 30.000 UVT. El contribuyente puede aceptarla, rechazarla o solicitar su modificación por una sola vez; si la rechaza, la liquidación provisional reemplaza al requerimiento especial, al emplazamiento previo por no declarar o al pliego de cargos, según el caso.',
    wrong: [
      'Respuesta correcta: creada por la Ley 1819 de 2016, con los umbrales de 15.000 y 30.000 UVT y con el efecto de reemplazar los actos preparatorios si es rechazada.',
      'La liquidación provisional no fue creada por la Ley 2010 de 2019 (el material cita por error la Ley 1819 de 2019) y no reemplaza a la liquidación oficial de revisión: esta la ratifica cuando el contribuyente rechaza la provisional.',
      'No procede respecto de cualquier contribuyente: la ley fijó los umbrales de ingresos brutos y patrimonio bruto, y el contribuyente puede aceptarla, rechazarla o solicitar su modificación.',
      'La liquidación provisional es un acto administrativo de determinación oficial proferido por la DIAN, no una declaración del contribuyente.',
    ],
    source: 'Estatuto Tributario, arts. 764 y 765; Ley 1819 de 2016; TACI Unidad 2 (págs. 91-95)',
  },
  {
    id: 'q-m04-022',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Facturación del impuesto sobre la renta',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Un contribuyente recibe la factura del impuesto sobre la renta que expidió la DIAN con base en el artículo 616-5 E.T. y no está de acuerdo con los valores allí determinados. ¿Qué debe hacer?',
    options: [
      'Presentar recurso de reposición contra la factura dentro de los diez días siguientes a su notificación, para que la DIAN revise los valores determinados y los ajuste antes de que adquiera firmeza.',
      'Presentar la declaración del impuesto incluyendo los valores de su realidad económica dentro de los dos meses siguientes a la notificación, junto con la sanción por extemporaneidad procedente; con esa presentación la factura pierde fuerza ejecutoria.',
      'Esperar a que la factura quede en firme y demandarla ante la jurisdicción ordinaria, porque la facturación es un acto sujeto al control judicial posterior sin necesidad de presentar declaración.',
      'Solicitar a la DIAN que archive la factura sin presentar declaración, porque la facturación solo procede con autorización previa del contribuyente y de su contador.',
    ],
    correct: 1,
    justification:
      'Según el artículo 616-5 E.T. (adicionado por la Ley 2155 de 2021) y la Resolución DIAN 1212 de 2022, notificada la factura y antes de que adquiera firmeza, el contribuyente que no esté de acuerdo debe presentar la declaración del impuesto con los valores que correspondan a su realidad jurídica, económica y financiera, dentro de los dos meses siguientes a la notificación y con la sanción por extemporaneidad que proceda; con esa presentación la factura pierde fuerza ejecutoria.',
    wrong: [
      'La vía que fija la norma no es el recurso de reposición contra la factura, sino la presentación de la declaración con los valores propios dentro de los dos meses.',
      'Respuesta correcta: presentación de la declaración dentro de los dos meses, con sanción por extemporaneidad, y pérdida de fuerza ejecutoria de la factura.',
      'No debe dejar que la factura quede en firme: la factura en firme presta mérito ejecutivo y el camino previsto es presentar la declaración antes de la firmeza.',
      'La facturación no requiere autorización del contribuyente; es un acto administrativo de determinación oficial que se notifica por inserción en la página web y por correo electrónico.',
    ],
    source: 'Estatuto Tributario, art. 616-5; Ley 2155 de 2021, art. 14; Resolución DIAN 1212 de 2022; TACI Unidad 2 (págs. 98-99)',
  },
]
