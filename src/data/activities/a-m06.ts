import type { Activity } from '../types'

// Actividades guiadas — Módulo 6
export const ACTIVITIES: Activity[] = [
  {
    id: 'm06-a01',
    moduleId: 'm06',
    indicator: 'i10',
    title: 'Ordena las etapas del proceso de revisión',
    kind: 'ordenar',
    instructions:
      'Ordena cronológicamente las etapas del proceso de determinación oficial de revisión, desde la actuación previa hasta la discusión del acto definitivo. Ten en cuenta que la ampliación es eventual y que la inspección tributaria suspende los términos.',
    orderItems: [
      'Emplazamiento para corregir (art. 685 ET): invitación previa, no obligatoria, que suspende por un mes el término del requerimiento especial',
      'Requerimiento especial (arts. 703 y 705 ET): se notifica dentro de los 3 años siguientes al vencimiento del plazo para declarar, a la presentación extemporánea o a la solicitud de devolución, según el caso',
      'Respuesta al requerimiento especial (art. 707 ET): 3 meses desde la notificación para objetar, solicitar pruebas y subsanar',
      'Ampliación al requerimiento especial (art. 708 ET): por una sola vez, dentro de los 3 meses siguientes al vencimiento del plazo para responder',
      'Respuesta a la ampliación: traslado no inferior a 3 ni superior a 6 meses',
      'Liquidación oficial de revisión (art. 710 ET): debe notificarse dentro de los 6 meses siguientes al vencimiento del plazo de respuesta; si no, la declaración queda en firme por procedimiento',
      'Recurso de reconsideración (art. 720 ET): 2 meses desde la notificación del acto; su decisión agota la vía administrativa',
    ],
    explanation:
      'Paso 1: el proceso puede abrirse con una invitación a corregir (emplazamiento para corregir), que no es obligatoria y suspende un mes el término. Paso 2: el acto de inicio formal es el requerimiento especial, cuya oportunidad depende del art. 705 (declaración oportuna, extemporánea o con saldo a favor). Paso 3: el obligado tiene 3 meses para responder (art. 707); la inspección tributaria puede suspender ese término por 3 meses. Paso 4: la DIAN puede ampliar el requerimiento por una sola vez dentro de los 3 meses siguientes al vencimiento del plazo de respuesta, con traslado de 3 a 6 meses. Paso 5: la decisión se adopta en la liquidación oficial de revisión, que debe notificarse en los 6 meses siguientes al vencimiento del plazo de respuesta o su ampliación; su notificación tardía produce firmeza por procedimiento. Paso 6: contra la liquidación procede el recurso de reconsideración dentro de los 2 meses siguientes a la notificación, que agota la vía administrativa.',
  },
  {
    id: 'm06-a02',
    moduleId: 'm06',
    indicator: 'i10',
    title: 'Caso: liquidación provisional y reducción del 40%',
    kind: 'caso',
    instructions:
      'Resuelve el caso aplicando los artículos 764 y 764-3 del Estatuto Tributario. Selecciona la opción correcta en cada pregunta y revisa la explicación final.',
    scenario:
      'La DIAN notificó a la señora Gómez una liquidación provisional por su declaración de renta: propone un mayor impuesto, intereses de mora y una sanción por inexactitud de $40.000.000. La contribuyente acepta la liquidación provisional y paga dentro del mes siguiente a su notificación.',
    questions: [
      {
        q: '¿Cuál es el valor de la sanción después de la reducción del 40% (art. 764-3 ET)?',
        options: ['$40.000.000', '$16.000.000', '$24.000.000', '$32.000.000'],
        correct: 2,
        why: 'La reducción equivale a 40% x $40.000.000 = $16.000.000. La sanción queda en $40.000.000 - $16.000.000 = $24.000.000. Recuerda que la reducción no aplica a sanciones por omisión o corrección de declaraciones ni a obligaciones formales subsanables antes del pliego de cargos.',
      },
      {
        q: '¿Qué debía hacer la contribuyente, y en qué término, para acceder a esa reducción?',
        options: [
          'Dentro de los dos meses siguientes a la notificación, presentar solicitud de revocatoria directa',
          'Dentro del mes siguiente a la notificación, aceptar la liquidación provisional y pagar',
          'Dentro de los seis meses siguientes a la notificación, aceptar y pagar',
          'En cualquier tiempo antes de que la DIAN inicie el cobro coactivo',
        ],
        correct: 1,
        why: 'El art. 764-3 ET condiciona la reducción del 40% a que el contribuyente acepte la liquidación provisional y pague dentro del mes siguiente a su notificación, bien sea que se haya discutido o no.',
      },
      {
        q: 'Si la contribuyente no responde ni paga (guarda silencio), el artículo 764-6 del ET dispone que…',
        options: [
          '…la liquidación provisional se entiende rechazada y la DIAN debe proferir liquidación oficial de revisión',
          '…la actuación se archiva por falta de respuesta',
          '…la liquidación provisional se entiende aceptada y la Administración puede iniciar el procedimiento administrativo de cobro',
          '…se duplica la sanción por no responder',
        ],
        correct: 2,
        why: 'El silencio ante la liquidación provisional equivale a aceptación: la Administración puede iniciar el procedimiento administrativo de cobro. El silencio no es rechazo; es una forma de aceptación tácita.',
      },
      {
        q: 'Si la contribuyente decide no aceptarla y discutirla, ¿qué debe hacer la Administración?',
        options: [
          'Cobrar de inmediato el valor propuesto',
          'Archivar la actuación y esperar una nueva denuncia',
          'Convertir la liquidación provisional en resolución sanción ejecutoriada',
          'Ratificar la propuesta mediante el acto definitivo que corresponda (por ejemplo, la liquidación oficial de revisión) dentro de los dos meses siguientes a que se agote el término de respuesta',
        ],
        correct: 3,
        why: 'La liquidación provisional reemplaza al requerimiento especial, al emplazamiento previo por no declarar o al pliego de cargos. Si el obligado la rechaza o discute, la DIAN debe ratificarla con el acto definitivo correspondiente (liquidación oficial de revisión, liquidación oficial de aforo o resolución sanción, según el caso) dentro de los dos meses siguientes a que se agote el término de respuesta (art. 764-6 ET).',
      },
    ],
    explanation:
      'Paso 1: identifica el procedimiento aplicable: liquidación provisional de los arts. 764 y ss. ET, que reemplaza al acto que corresponda según la situación del obligado. Paso 2: calcula la sanción plena (en el caso, $40.000.000 de inexactitud) y aplica la reducción del 40% del art. 764-3: reducción = $16.000.000; valor a pagar = $24.000.000, siempre que acepte y pague dentro del mes siguiente. Paso 3: recuerda las exclusiones de la reducción: sanciones por omisión o corrección de declaraciones y obligaciones formales subsanables voluntariamente antes del pliego de cargos. Paso 4: distingue los efectos de la conducta del obligado: aceptación expresa (paga con reducción), silencio (aceptación tácita y cobro) y rechazo o discusión (ratificación por el acto definitivo en dos meses). Paso 5: verifica que la sanción reducida no quede por debajo de la sanción mínima de 10 UVT (art. 639 ET).',
  },
]
