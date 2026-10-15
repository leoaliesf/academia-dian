import type { Activity } from '../types'

// Actividades guiadas — Módulo 10 (régimen cambiario)
export const ACTIVITIES: Activity[] = [
  {
    id: 'm10-a01',
    moduleId: 'm10',
    indicator: 'i08',
    title: 'Caso: exportador que no canaliza sus divisas',
    kind: 'caso',
    instructions:
      'Lea el escenario y responda cada pregunta. Al finalizar, revise la explicación paso a paso, que le muestra cómo la DIAN detecta la infracción, cómo se cuantifica la sanción y qué defensas proceden.',
    scenario:
      'Exportadora Andina S.A., sociedad colombiana, celebró tres exportaciones de servicios de ingeniería por USD 300.000 en total, facturadas a clientes de Chile y Perú. Las divisas fueron consignadas por los clientes en una cuenta bancaria que la sociedad mantiene en Panamá. La sociedad no presentó declaración de cambio, no negoció las divisas con ningún intermediario del mercado cambiario y no las reintegró a una cuenta de compensación: los USD 300.000 permanecen en la cuenta del exterior. La sociedad sí declaró los ingresos en su declaración de renta y pagó el impuesto correspondiente. La DIAN, al cruzar la información de la facturación electrónica, la declaración de renta y los reportes de los intermediarios del mercado cambiario, detecta que no existe ninguna declaración de cambio asociada a esas exportaciones de servicios. Los pagos de intereses al exterior de un crédito relacionado se declararon correctamente. La TRM certificada al momento de la detección es de 4.000 pesos por dólar. El representante legal firmó todos los estados financieros y el revisor fiscal certificó las operaciones sin formular salvedades.',
    questions: [
      {
        q: '¿Cuál es la calificación correcta de las operaciones de Exportadora Andina S.A. desde el punto de vista cambiario?',
        options: [
          'Operaciones del mercado libre, porque fueron pagadas en el exterior y nunca ingresaron físicamente al país',
          'Operaciones de obligatoria canalización (exportación de servicios), incumplidas al no reintegrar ni negociar las divisas por el mercado cambiario',
          'Operaciones internas, porque los clientes son residentes en países de la Comunidad Andina',
          'Operaciones no sujetas al régimen cambiario, por tratarse de servicios y no de bienes',
        ],
        correct: 1,
        why: 'La exportación de servicios es una operación de obligatoria canalización. El hecho de que las divisas se hayan consignado en una cuenta del exterior no convierte la operación en mercado libre: el residente debía reintegrarlas por un IMC, por una cuenta de compensación o aplicarlas a los usos autorizados, y presentar la declaración de cambio.',
      },
      {
        q: '¿Cuál es la base de la sanción por la infracción de no canalización y su cuantificación aproximada?',
        options: [
          'USD 300.000: la sanción es de 25 UVT por cada declaración no presentada',
          'El monto dejado de canalizar (USD 300.000 = 1.200.000.000 de pesos a la TRM de 4.000), con una sanción de hasta el 100 % de ese monto',
          'Solo la sanción por no declarar los ingresos, porque el impuesto sobre la renta ya se pagó',
          'Una amonestación, porque el incumplimiento es formal y no afectó el recaudo tributario',
        ],
        correct: 1,
        why: 'La sanción por no canalizar equivale hasta al 100 % del monto dejado de canalizar. Los USD 300.000 se convierten a moneda legal colombiana con la TRM certificada por la Superintendencia Financiera (1.200.000.000 de pesos). Las 25 UVT por declaración corresponden al numeral 1 (declaración de cambio no presentada), sanción que puede acumularse porque el incumplimiento es doble: ni se canalizó ni se declaró.',
      },
      {
        q: '¿Qué efecto tiene el hecho de que la sociedad haya declarado los ingresos para el impuesto sobre la renta y pagado el tributo?',
        options: [
          'Extingue la obligación cambiaria, porque los regímenes tributario y cambiario son el mismo',
          'No extingue la infracción cambiaria: los regímenes son independientes y el cumplimiento tributario no sustituye la canalización',
          'Reduce automáticamente la sanción cambiaria en un 90 %',
          'Convierte la operación en mercado libre, porque ya está reconocida fiscalmente',
        ],
        correct: 1,
        why: 'La obligación cambiaria es autónoma de las obligaciones tributarias. Haber declarado el ingreso y pagado el impuesto no subsana la falta de canalización, aunque puede acreditar buena fe y apoyar la solicitud de reducción por reconocimiento voluntario si se paga antes de la decisión.',
      },
      {
        q: '¿Qué responsabilidades adicionales pueden derivarse para el representante legal y el revisor fiscal?',
        options: [
          'Ninguna: la responsabilidad es exclusiva de la sociedad',
          'Pueden ser responsables solidarios por haber intervenido en las operaciones o en su certificación, conforme al régimen cambiario',
          'Responden penalmente por contrabando, sin excepción',
          'Responden únicamente si la DIAN prueba dolo, porque el régimen cambiario no admite responsabilidad objetiva de los administradores',
        ],
        correct: 1,
        why: 'El régimen cambiario prevé responsabilidad solidaria de representantes legales, socios, administradores, revisores fiscales, contadores y demás personas que hayan intervenido en la operación o en su declaración. La responsabilidad solidaria es administrativa y se concreta en el pago de la multa cuando no se paga por el infractor directo.',
      },
    ],
    explanation:
      'Paso 1: identifique la operación. La exportación de servicios es una operación de obligatoria canalización conforme a la resolución externa vigente (R.E. 1 de 2018), junto con las importaciones y exportaciones de bienes, los gastos asociados, el endeudamiento externo y la inversión internacional. Paso 2: verifique el cumplimiento de la obligación sustancial. Canalizar significa negociar las divisas con un IMC, reintegrarlas a una cuenta de compensación o aplicarlas al pago de obligaciones en moneda extranjera autorizadas; mantenerlas en una cuenta del exterior sin declararlas no cumple ninguna de esas formas. Paso 3: cuantifique. La base es el monto dejado de canalizar (aquí, la totalidad de los USD 300.000), convertido a pesos a la TRM certificada por la Superintendencia Financiera, y la sanción puede llegar al 100 % de ese monto; también proceden las sanciones por las declaraciones de cambio no presentadas (25 UVT cada una, con tope de 1.000 UVT). Paso 4: recuerde el principio de independencia. El régimen cambiario no se satisface con el pago del impuesto sobre la renta: son obligaciones distintas, controladas por áreas distintas, con sanciones distintas. Paso 5: evalúe las responsabilidades. El representante legal que firmó los estados financieros y el revisor fiscal que certificó las operaciones sin salvedades pueden ser responsables solidarios si intervinieron en las operaciones o en su declaración. Paso 6: examine las salidas procesales. Si la sociedad reconoce la infracción y paga antes de que se notifique la resolución sancionatoria, la sanción se reduce en un 75 % (art. 23 del Decreto Ley 2245 de 2011); en los descargos, dentro de los dos meses siguientes a la notificación del acto de formulación de cargos, debe aportar las pruebas de las operaciones y de los abonos o pagos parciales que existan, teniendo presente que la ausencia de declaración de cambio dificulta la prueba de la canalización.',
  },
  {
    id: 'm10-a02',
    moduleId: 'm10',
    indicator: 'i08',
    title: 'Ordena las etapas de la actuación administrativa cambiaria',
    kind: 'ordenar',
    instructions:
      'Ordene cronológicamente las etapas de la actuación administrativa cambiaria de competencia de la DIAN, desde la detección de la conducta hasta la decisión del recurso. Considere los términos de cada etapa.',
    orderItems: [
      'Detección de los hechos: inicio de la actuación de oficio, por informes de funcionarios, visitas de investigación, traslado de otras autoridades o quejas',
      'Verificación y documentación de los hechos: requerimientos de información, cruces y visitas, con las actas e informes correspondientes',
      'Expedición y notificación del acto de formulación de cargos: dentro de los 5 años siguientes a la comisión de la infracción; contra él no procede recurso',
      'Traslado para descargos: 2 meses contados desde la notificación, para formular objeciones y solicitar o aportar pruebas',
      'Período probatorio: 4 meses para pruebas que deban practicarse en el país y 6 meses para las que deban practicarse en el exterior, desde la ejecutoria del auto que las decreta',
      'Notificación de la resolución que impone la sanción o de la que termina la actuación: dentro de los 2 años siguientes al vencimiento del término de traslado',
      'Recurso de reconsideración: se interpone contra la resolución sancionatoria y se resuelve dentro de los 7 meses siguientes; el silencio administrativo opera a favor del recurrente',
      'Terminación anticipada (vía alterna): reconocimiento de la infracción y pago voluntario antes de la decisión, con reducción del 75 % de la sanción',
    ],
    explanation:
      'Paso 1: la actuación cambiaria comienza con la detección de los hechos, que puede ser oficiosa, por informes de funcionarios, por visitas de investigación, por traslado de otras autoridades o por quejas; no requiere denuncia de parte. Paso 2: la autoridad documenta los hechos con requerimientos de información, cruces de datos (declaración de cambio, operación aduanera, información exógena) y visitas, y deja constancia en actas o informes. Paso 3: el acto de formulación de cargos es el acto que abre el proceso formal: debe expedirse y notificarse dentro de los 5 años siguientes a la comisión de la infracción, contiene hechos, pruebas, normas infringidas y la liquidación de la sanción en moneda legal colombiana, y contra él no procede recurso. Paso 4: el traslado para descargos es de 2 meses y es la oportunidad para controvertir los hechos y pedir pruebas; solicitar pruebas después de ese término es extemporáneo. Paso 5: el período probatorio es de 4 meses para pruebas nacionales y 6 meses para pruebas en el exterior, contados desde la ejecutoria del auto que las decreta, con reposición de 1 mes contra la negativa y decisión en 2 meses. Paso 6: la resolución que impone la sanción o termina la actuación debe notificarse dentro de los 2 años siguientes al vencimiento del traslado. Paso 7: contra la resolución procede la reconsideración, que se resuelve en 7 meses; si no se decide, el silencio administrativo favorece al recurrente. Paso 8: en paralelo, el artículo 23 del Decreto Ley 2245 de 2011 permite terminar la actuación mediante el reconocimiento de la infracción y el pago antes de la decisión, con reducción del 75 % de la sanción: es una vía alterna, no una etapa necesaria del procedimiento.',
  },
]
