import type { Activity } from '../types'

// Actividades guiadas — Módulo 4
export const ACTIVITIES: Activity[] = [
  {
    id: 'm04-a01',
    moduleId: 'm04',
    indicator: 'i09',
    title: 'Caso: obligación sustancial, agentes de retención y responsabilidad de los socios',
    kind: 'caso',
    instructions:
      'Lea el caso y responda las preguntas. Cada pregunta tiene una sola respuesta correcta; al final revise la explicación del procedimiento.',
    scenario:
      'Comercializadora del Norte S.A.S. (sociedad por acciones simplificada, con dos socios) vendió mercancías gravadas con IVA en noviembre de 2025 y expidió la factura electrónica el 30 de noviembre de 2025. En diciembre pagó honorarios a un profesional por 30 millones y no le practicó la retención en la fuente que correspondía. En enero de 2026 presentó y pagó la declaración de IVA del bimestre noviembre-diciembre; sin embargo, la DIAN le exige ahora el valor dejado de retener a título de retención en la fuente y, adicionalmente, un tercero propone requerir a uno de los socios por las deudas de la sociedad, que está en pleno funcionamiento. La empresa, además, no ha actualizado su RUT tras cambiar de dirección y de actividad económica.',
    questions: [
      {
        q: '¿En qué momento nació la obligación tributaria sustancial del IVA por la venta de noviembre?',
        options: [
          'El 31 de diciembre de 2025, por el cierre del período bimestral.',
          'El 30 de noviembre de 2025, cuando se causó el impuesto con la emisión de la factura electrónica (art. 429 E.T.).',
          'En enero de 2026, cuando presentó la declaración.',
          'Cuando el comprador pagó la mercancía, cualquiera sea la fecha.',
        ],
        correct: 1,
        why: 'La obligación sustancial se origina al realizarse el hecho generador (art. 1 E.T.). En el IVA, en las ventas el impuesto se causa en la fecha de emisión de la factura o documento equivalente y, a falta de uno y otro, en la fecha de entrega de la mercancía (art. 429 E.T.). El cierre del bimestre y la presentación de la declaración son posteriores y no determinan el nacimiento de la obligación.',
      },
      {
        q: '¿Cuál es la consecuencia de no haber practicado la retención en la fuente al profesional?',
        options: [
          'Ninguna, porque la retención la debe practicar el propio profesional cuando declara.',
          'La sociedad, como agente retenedor, responde por el valor que debió retener, con los intereses de mora y las sanciones que correspondan, sin perjuicio de las obligaciones del profesional.',
          'La sociedad solo debe expedir el certificado de retención con valor cero.',
          'La sociedad debe asumir el impuesto de renta del profesional de por vida.',
        ],
        correct: 1,
        why: 'La obligación de retener nace en el momento del pago o abono en cuenta (art. 368 E.T.) y el agente retenedor responde directa y solidariamente por el valor dejado de retener o retenido sin consignar (art. 370 E.T.), con los intereses de mora (arts. 634 y ss. E.T.) y las sanciones que correspondan. El profesional conserva sus propias obligaciones como contribuyente.',
      },
      {
        q: '¿Quién es el sujeto pasivo del IVA por la venta: la sociedad o el comprador?',
        options: [
          'La sociedad es el sujeto pasivo de derecho (responsable que declara y paga) y el comprador el sujeto pasivo económico que soporta el impuesto en el precio.',
          'Solo el comprador, porque es quien paga el IVA dentro del precio.',
          'Ambos son codeudores solidarios de la obligación tributaria.',
          'La sociedad y el comprador son el mismo sujeto pasivo frente a la DIAN.',
        ],
        correct: 0,
        why: 'En el IVA, el responsable (la sociedad vendedora) es el sujeto pasivo de derecho: declara y paga el impuesto ante la DIAN. El comprador o consumidor final es el sujeto pasivo económico o de facto, porque soporta el gravamen incorporado en el precio. No hay solidaridad ni identidad entre ambos por esta obligación.',
      },
      {
        q: '¿Es viable requerir a uno de los socios por las deudas tributarias de la sociedad, que está en funcionamiento?',
        options: [
          'Sí, porque los socios responden siempre por las obligaciones de la sociedad.',
          'No, en principio, porque la solidaridad tributaria solo existe en los casos expresamente previstos en la ley (art. 793 E.T.); la sola calidad de socio de una sociedad en funcionamiento no la genera.',
          'Sí, porque la sociedad es una S.A.S. y las S.A.S. no tienen responsabilidad limitada.',
          'No, porque ningún socio responde por deudas tributarias en ningún caso.',
        ],
        correct: 1,
        why: 'La solidaridad no se presume: solo opera en los casos del artículo 793 E.T. (herederos y legatarios, socios de sociedades liquidadas o disueltas irregularmente hasta el monto de la distribución, terceros tenedores de bienes y socios de entidades no contribuyentes usadas para evadir, entre otros). El socio de una sociedad en funcionamiento no responde por los impuestos sociales por su sola condición.',
      },
      {
        q: 'La empresa no actualizó su RUT tras cambiar de dirección y de actividad económica. ¿Qué efecto tiene esa omisión?',
        options: [
          'Ninguno, porque el RUT solo se inscribe una vez y no se actualiza.',
          'Incumple una obligación formal: la inscripción en el RUT debe actualizarse cuando cambien los datos, y la omisión genera sanciones y dificulta la expedición de facturas y las actuaciones ante la DIAN.',
          'Es una infracción cambiaria sancionada con el Decreto 2245 de 2011.',
          'Obliga a la DIAN a archivar la declaración de IVA presentada.',
        ],
        correct: 1,
        why: 'El RUT es el mecanismo único de identificación, ubicación y clasificación de los sujetos de obligaciones administradas por la DIAN (art. 555-2 E.T.) y debe mantenerse actualizado. La falta de actualización es un incumplimiento de deberes formales, con las sanciones del Estatuto Tributario y efectos prácticos sobre la facturación y los trámites ante la entidad.',
      },
    ],
    explanation:
      'Paso 1: distinga las dos obligaciones. La sustancial es el pago del tributo y nace con la causación (art. 1 E.T.): en el caso, el IVA se causó con la factura del 30 de noviembre (art. 429 E.T.). Las formales (declarar, facturar, retener, informar, actualizar el RUT) son instrumentales y su incumplimiento se sanciona de manera autónoma. Paso 2: ubique los sujetos. La sociedad es el sujeto pasivo de derecho del IVA y el comprador el sujeto pasivo económico; adicionalmente, la sociedad es agente retenedor respecto de los honorarios pagados. Paso 3: aplique la responsabilidad del retenedor: responde por lo dejado de retener (art. 370 E.T.) con los intereses de mora y las sanciones que correspondan. Paso 4: revise la solidaridad: no se presume; solo procede en los casos del artículo 793 E.T., que no cobijan al socio de una sociedad en funcionamiento. Paso 5: cierre con las obligaciones formales: RUT actualizado, factura electrónica con validación previa y declaraciones oportunas.',
  },
  {
    id: 'm04-a02',
    moduleId: 'm04',
    indicator: 'i09',
    title: 'Detecta las afirmaciones inconsistentes sobre obligaciones formales y determinación del tributo',
    kind: 'inconsistencias',
    instructions:
      'Lea cada afirmación y marque si es inconsistente con la ley (incorrecta) o si es correcta. Después revise el porqué de cada una.',
    items: [
      {
        text: 'El RUT solo lo deben inscribir los contribuyentes obligados a declarar el impuesto sobre la renta.',
        inconsistent: true,
        why: 'El RUT cobija a los contribuyentes declarantes y no contribuyentes declarantes de ingresos y patrimonio, a los responsables de IVA, a los agentes retenedores, a los importadores, exportadores y usuarios aduaneros y a los demás sujetos de obligaciones administradas por la DIAN (art. 555-2 E.T.).',
      },
      {
        text: 'La factura electrónica de venta se entiende expedida cuando es validada por la DIAN y entregada al adquirente.',
        inconsistent: false,
        why: 'Es la regla del régimen de facturación electrónica de venta: se expide con validación previa y se entiende expedida cuando es validada y entregada al adquirente. La factura por talonario es la excepción por inconvenientes tecnológicos.',
      },
      {
        text: 'La conciliación fiscal se debe presentar por los servicios informáticos electrónicos de la DIAN por todos los obligados a llevar contabilidad, cualquiera sea el monto de sus ingresos.',
        inconsistent: true,
        why: 'La obligación de presentarla por servicios informáticos aplica a los contribuyentes obligados a llevar contabilidad con ingresos brutos iguales o superiores a 45.000 UVT (Ley 1943 de 2018). Los demás deben conservarla y pueden ser requeridos por la administración.',
      },
      {
        text: 'La firmeza de las declaraciones de IVA y de retención en la fuente se computa de manera independiente de la declaración de renta.',
        inconsistent: true,
        why: 'La firmeza de las declaraciones de IVA y de retención en la fuente es la misma de la declaración de renta del período gravable con el cual coincidan, sin excepción (art. 705-1 E.T.), y el beneficio de auditoría no las afecta: siguen las reglas generales del artículo 714 E.T.',
      },
      {
        text: 'Si el contribuyente no presenta la declaración, la DIAN puede emplazarlo y, si no declara en el plazo, determinar el tributo mediante liquidación de aforo con la sanción por no declarar.',
        inconsistent: false,
        why: 'Es el procedimiento de los artículos 715 a 719 del Estatuto Tributario: emplazamiento previo por no declarar, plazo de un mes y liquidación de aforo con base en la información disponible, con la sanción del artículo 643 E.T.',
      },
      {
        text: 'La firmeza general de la declaración tributaria es de cinco años contados desde la fecha de su presentación.',
        inconsistent: true,
        why: 'La regla general es de tres años contados desde el vencimiento del plazo para declarar (art. 714 E.T.); si la declaración fue extemporánea, desde su presentación; si hay saldo a favor, desde la solicitud de devolución o compensación. El término de cinco años aplica a pérdidas fiscales y precios de transferencia en declaraciones presentadas desde 2020.',
      },
      {
        text: 'Todo pago en efectivo es fiscalmente aceptable para reconocer costos y deducciones.',
        inconsistent: true,
        why: 'El artículo 771-5 E.T. condiciona el reconocimiento fiscal de costos, deducciones, pasivos e impuestos descontables al uso de los medios de pago previstos; los pagos individuales en efectivo que superan el límite legal no son aceptados fiscalmente.',
      },
      {
        text: 'Los herederos responden solidariamente por las obligaciones tributarias del causante, hasta el monto de la distribución recibida.',
        inconsistent: false,
        why: 'Así resulta del artículo 793 E.T. (solidaridad de herederos y legatarios) y de la regla del artículo 794 E.T., que limita la responsabilidad al monto de la distribución recibida. Mientras la sucesión está ilíquida, responde la sucesión con los bienes de la herencia.',
      },
    ],
    explanation:
      'Paso 1: separe las obligaciones formales de las sustanciales. Las formales (RUT, facturación, exógena, contabilidad, conciliación fiscal, bancarización) son autónomas: existen aunque no haya impuesto a pagar. Paso 2: revise las reglas de facturación: electrónica con validación previa como regla general, talonario como excepción. Paso 3: verifique los umbrales y las cuantías: conciliación fiscal por servicios informáticos desde 45.000 UVT de ingresos brutos; límite de efectivo del artículo 771-5 E.T. por el sujeto que recibe los pagos. Paso 4: repase la determinación y la firmeza: la regla general de firmeza es de tres años con reglas especiales de conteo; las declaraciones de IVA y retención siguen la firmeza de la renta del período (art. 705-1 E.T.); el aforo procede ante la omisión de declarar. Paso 5: cierre con la responsabilidad: la solidaridad solo existe en los casos del artículo 793 E.T. y, en el caso de los herederos, con el límite del monto recibido.',
  },
]
