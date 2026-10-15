import type { Activity } from '../types'

// Actividades guiadas — Módulo 3
export const ACTIVITIES: Activity[] = [
  {
    id: 'm03-a01',
    moduleId: 'm03',
    indicator: 'i09',
    title: 'Relaciona cada principio y cada clase de tributo con su contenido',
    kind: 'relacionar',
    instructions:
      'Relaciona cada enunciado de la columna A con el principio, la clase de tributo o el concepto que le corresponde en la columna B. Al terminar, verifica y revisa la explicación de cada pareja.',
    pairs: [
      { a: 'El sistema tributario se funda en equidad, eficiencia y progresividad, y las leyes tributarias no se aplican con retroactividad', b: 'Artículo 363 de la Constitución Política' },
      { a: 'Solo el Congreso, las asambleas departamentales y los concejos distritales y municipales pueden imponer contribuciones fiscales o parafiscales', b: 'Artículo 338 de la Constitución Política (reserva de ley)' },
      { a: 'La ley, la ordenanza o el acuerdo deben fijar directamente los sujetos activos y pasivos, los hechos y las bases gravables y las tarifas', b: 'Legalidad en sentido material' },
      { a: 'Igual carga tributaria para quienes tienen la misma capacidad de pago', b: 'Equidad horizontal' },
      { a: 'Mayor carga proporcional para quienes tienen mayor capacidad contributiva', b: 'Equidad vertical o progresividad' },
      { a: 'Se paga por el uso efectivo o potencial de un servicio público o de un bien del Estado, y su monto procura recuperar el costo', b: 'Tasa (por ejemplo, derechos de trámite y peajes)' },
      { a: 'Se paga por un beneficio individualizado derivado de una obra pública o por la pertenencia a un sector', b: 'Contribución (por ejemplo, valorización y aportes parafiscales)' },
      { a: 'Se paga porque se realizó un hecho que revela capacidad contributiva, sin contraprestación directa', b: 'Impuesto (por ejemplo, renta, IVA y predial)' },
    ],
    explanation:
      'Paso 1: ubique las normas constitucionales. El artículo 363 C.P. enuncia los principios (equidad, eficiencia y progresividad) y prohíbe la retroactividad; el artículo 338 C.P. fija quiénes pueden imponer contribuciones y qué debe contener el acto que las crea. Paso 2: distinga los dos niveles de la legalidad: la reserva de ley (quién puede crear el tributo) y la legalidad en sentido material (qué elementos debe fijar directamente el acto). Paso 3: separe las dos dimensiones de la equidad. La horizontal compara iguales (misma capacidad, misma carga); la vertical compara desiguales (mayor capacidad, mayor carga). Paso 4: clasifique los tributos por su hecho generador: si no hay contraprestación es impuesto; si se paga por usar un servicio es tasa; si se paga por un beneficio individualizado o por pertenencia a un sector es contribución. Paso 5: verifique con un ejemplo: el ICA es impuesto (no hay contraprestación), el peaje es tasa (uso de la vía) y la valorización es contribución (beneficio de la obra).',
  },
  {
    id: 'm03-a02',
    moduleId: 'm03',
    indicator: 'i06',
    title: 'Caso: importación de maquinaria, tributos aduaneros y pago al exterior',
    kind: 'caso',
    instructions:
      'Lea el siguiente caso y responda las preguntas. Cada pregunta tiene una sola respuesta correcta; revise la explicación después de responder.',
    scenario:
      'Importadora Andina S.A.S. compró a un proveedor alemán una máquina por USD 100.000 (valor en aduana). Los derechos de aduana liquidados ascienden a USD 5.000. La empresa también contrató una asesoría de ingeniería con una firma alemana, que le prestará el servicio desde el exterior, y pagará ambos valores al proveedor y al consultor mediante transferencia desde una cuenta bancaria abierta en el exterior que no está registrada como cuenta de compensación. La empresa presentó su declaración de importación y pagó los tributos aduaneros.',
    questions: [
      {
        q: '¿Cuál es el hecho generador de los tributos aduaneros en esta operación?',
        options: [
          'El pago de la mercancía al proveedor del exterior.',
          'La introducción de la maquinaria al territorio aduanero nacional.',
          'La firma del contrato de compraventa internacional.',
          'La expedición del certificado de origen por el proveedor alemán.',
        ],
        correct: 1,
        why: 'El hecho generador de los tributos aduaneros es la introducción de mercancías al territorio aduanero nacional: la DIAN es el sujeto activo, el importador el sujeto pasivo y el valor en aduana la base gravable. El pago, el contrato y el certificado de origen son elementos del comercio exterior, pero no el hecho generador.',
      },
      {
        q: '¿Cuál es la base gravable del IVA en la importación de la máquina?',
        options: [
          'USD 100.000, porque la base es el valor en aduana.',
          'USD 105.000, porque la base corresponde a la base de los derechos de aduana adicionada con el valor de esos derechos (art. 459 E.T.).',
          'USD 5.000, porque solo se gravan los derechos de aduana.',
          'USD 95.000, porque se descuentan los derechos del valor en aduana.',
        ],
        correct: 1,
        why: 'El artículo 459 del Estatuto Tributario establece que la base gravable del IVA en la importación es la misma que se usa para liquidar los derechos de aduana, adicionada con el valor de esos derechos: 100.000 más 5.000 = 105.000 dólares, sobre los que se aplica la tarifa del IVA.',
      },
      {
        q: '¿El pago al proveedor y al consultor del exterior a través de la cuenta bancaria no registrada cumple el régimen cambiario?',
        options: [
          'Sí, porque los residentes pueden pagar sus obligaciones en el exterior como quieran.',
          'No, si las operaciones son de obligatoria canalización, deben negociarse o transferirse por los intermediarios del mercado cambiario o por cuentas de compensación.',
          'Sí, porque la asesoría es un servicio y los servicios no se someten a ninguna regla de cambio.',
          'No, porque todos los pagos al exterior deben hacerse en moneda legal colombiana.',
        ],
        correct: 1,
        why: 'La importación de bienes es una operación de obligatoria canalización; la cuenta de compensación es una cuenta bancaria en el exterior por medio de la cual se canalizan los ingresos o egresos de operaciones de obligatoria canalización, y debe estar registrada ante el Banco de la República. Pagar por fuera del mercado cambiario una operación canalizable incumple el régimen y habilita la actuación de la DIAN.',
      },
      {
        q: 'En el plano cambiario, ¿qué autoridad controla y sanciona el incumplimiento y con qué norma?',
        options: [
          'El Banco de la República, con la Resolución Externa 1 de 2018.',
          'La DIAN, con las funciones del artículo 3 del Decreto 1742 de 2020 y el procedimiento sancionatorio del Decreto 2245 de 2011.',
          'La Superintendencia Financiera, con las normas prudenciales del sector financiero.',
          'La DIAN, con el estatuto aduanero del Decreto 1165 de 2019.',
        ],
        correct: 1,
        why: 'La Junta Directiva del Banco de la República diseña el régimen (Resolución Externa 1 de 2018), pero el control, la vigilancia y la sanción administrativa del cumplimiento cambiario corresponden a la DIAN, conforme al artículo 3 del Decreto 1742 de 2020, con el procedimiento y las multas del Decreto 2245 de 2011. El estatuto aduanero no regula el régimen cambiario.',
      },
      {
        q: 'La empresa también contrató una asesoría de ingeniería que se prestará desde el exterior. ¿Se aplica a ese servicio el régimen aduanero?',
        options: [
          'Sí, porque toda operación con el exterior es una importación en el régimen aduanero.',
          'No, porque el régimen aduanero solo se refiere al movimiento de mercancías y bienes tangibles; el servicio puede tener efectos tributarios (renta, IVA) y cambiarios.',
          'Sí, pero solo si el servicio supera 10.000 dólares.',
          'No, porque los servicios desde el exterior están exentos de toda obligación tributaria.',
        ],
        correct: 1,
        why: 'El ámbito del régimen aduanero comprende el movimiento de mercancías y bienes tangibles; no se refiere a la importación o exportación de intangibles, ni a los servicios. La asesoría prestada desde el exterior se rige por las normas tributarias (renta, IVA por servicios desde el exterior) y por las reglas cambiarias sobre el pago, no por el estatuto aduanero.',
      },
    ],
    explanation:
      'Paso 1: identifique el hecho generador y los elementos del tributo aduanero: introducción de mercancías al territorio aduanero nacional (hecho generador), DIAN (sujeto activo), importador (sujeto pasivo) y valor en aduana (base gravable). Paso 2: recuerde la regla especial de cuantificación del IVA en importaciones (art. 459 E.T.): base de los derechos de aduana más el valor de esos derechos. Paso 3: separe los planos. Lo aduanero regula mercancías tangibles; lo cambiario regula las divisas; lo tributario regula renta, IVA e impuesto al consumo. La misma operación puede tocar los tres planos. Paso 4: ubique las autoridades: la DIAN administra los tributos aduaneros y controla y sanciona el régimen cambiario; el Banco de la República diseña el régimen cambiario y registra las cuentas de compensación; la Superintendencia Financiera vigila a los intermediarios del mercado cambiario. Paso 5: recuerde que los servicios transfronterizos no son mercancía: no pasan por el régimen aduanero, pero sí por el cambiario y el tributario.',
  },
]
