import type { Question } from '../types'

// ============================================================
// Preguntas NUEVAS de práctica (fase 2) — Aduanero
// Inspiradas en los temas y el estilo de las pruebas de práctica
// aportadas (Decreto 1165 de 2019 y normas concordantes).
// Elaboración propia: NO son preguntas oficiales de la DIAN
// ni de la CNSC.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-a1-001',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Conservación de documentos aduaneros',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'De acuerdo con el Decreto 1165 de 2019, el importador que actúa directamente debe conservar los documentos soporte y los recibos oficiales de pago:',
    options: [
      'Por cinco (5) años, contados a partir de la presentación y aceptación de la declaración, a disposición de la autoridad aduanera.',
      'Por dos (2) años, contados desde la nacionalización de la mercancía y a disposición de la autoridad aduanera.',
      'Por un (1) año, contado desde la visita de fiscalización o desde el requerimiento de la autoridad.',
      'De manera indefinida, mientras subsista la sociedad importadora y no se liquide el patrimonio.',
    ],
    correct: 0,
    justification:
      'El artículo 10, numeral 3.7, del Decreto 1165 de 2019 establece que el importador o exportador que actúe directamente debe conservar los documentos soporte y los recibos oficiales de pago por un período de cinco (5) años, contado desde la presentación y aceptación de la declaración, a disposición de la autoridad aduanera. La conservación es clave para el control posterior.',
    wrong: [
      '',
      'El término no es de dos años: la norma fija cinco años.',
      'No depende de visitas de fiscalización: corre desde la presentación y aceptación de la declaración.',
      'No es indefinida: está limitada a cinco años.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, art. 10 num. 3.7. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-002',
    indicator: 'i03',
    moduleId: 'm09',
    topic: 'Incumplimiento de exhibición de documentos',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'En una visita de fiscalización, un importador que actúa directamente no puede exhibir los documentos soporte de sus operaciones dentro del plazo otorgado. ¿Cómo debe proceder el funcionario de la DIAN?',
    options: [
      'Archivar el hallazgo, porque se trata de un deber formal sin relevancia para la liquidación de los tributos aduaneros.',
      'Tener por no presentadas las declaraciones de importación afectadas por la falta de exhibición.',
      'Documentar el hallazgo en el acta de visita y considerar la apertura del procedimiento sancionatorio por el incumplimiento de las obligaciones del importador.',
      'Exigir de inmediato la destrucción de las mercancías importadas, por carecer de soporte documental válido.',
    ],
    correct: 2,
    justification:
      'El artículo 10 del Decreto 1165 de 2019 (numerales 3.4 y 3.7) obliga al importador a proporcionar, exhibir o entregar la documentación requerida dentro del plazo establecido; su incumplimiento puede configurar una infracción administrativa sujeta al régimen sancionatorio del título 13. El hallazgo debe documentarse en actas y considerarse la apertura del procedimiento sancionatorio.',
    wrong: [
      'El incumplimiento del deber de exhibición sí puede configurar infracción administrativa.',
      'La falta de exhibición no convierte las declaraciones en no presentadas.',
      '',
      'La destrucción de mercancías no es una consecuencia prevista para este incumplimiento.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, art. 10 y título 13. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-003',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Tratamientos especiales OEA',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Respecto de los tratamientos especiales del Operador Económico Autorizado (OEA), es correcto afirmar que:',
    options: [
      'Son permanentes e irrevocables una vez otorgada la autorización, porque la confianza legítima del operador no admite revocatoria de los beneficios.',
      'Pueden incluir la no constitución de garantías para respaldar el cumplimiento de sus obligaciones aduaneras, en los términos y condiciones definidos por la DIAN, y pueden revocarse o modificarse ante incumplimientos.',
      'Se otorgan automáticamente a cualquier importador inscrito en el RUT, sin necesidad de solicitud ni de evaluación previa de riesgo.',
      'Solo consisten en la reducción de aranceles, pues la autorización OEA no contempla otras facilitaciones operativas distintas de las arancelarias.'
    ],
    correct: 1,
    justification:
      'El artículo 23, numeral 2.1, del Decreto 1165 de 2019 prevé como tratamiento especial del OEA la posibilidad de no constituir garantías para respaldar sus obligaciones aduaneras, en los términos definidos por la DIAN; y los artículos 22 y 23 condicionan los tratamientos a la autorización conferida y a su conducta, pudiendo revocarse o modificarse ante incumplimientos.',
    wrong: [
      'No son irrevocables: pueden revocarse o modificarse ante incumplimientos.',
      '',
      'Requieren autorización de la DIAN con base en la gestión del riesgo; no son automáticos.',
      'Los tratamientos son facilitaciones del control (garantías, reembarques, plazos), no reducciones de arancel.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, arts. 22 y 23. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-004',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Modalidad de viajeros',
    difficulty: 'basica',
    kind: 'interpretacion',
    statement:
      'En la modalidad de importación de viajeros, los tributos aduaneros aplicables son:',
    options: [
      'Los vigentes en la fecha de presentación y aceptación de la declaración de importación.',
      'Los vigentes el 1.º de enero del año en que se produce el ingreso del viajero.',
      'Los vigentes en la fecha de llegada del viajero, conforme a lo indicado en el pasaporte.',
      'Los del año anterior al viaje, por corresponder al cierre fiscal del equipaje.',
    ],
    correct: 2,
    justification:
      'El artículo 14, numeral 5, del Decreto 1165 de 2019 dispone que en la modalidad de viajeros los tributos aduaneros aplicables serán los vigentes en la fecha de llegada del viajero, de acuerdo con lo indicado en el pasaporte, criterio que armoniza con el momento de ingreso de la mercancía al territorio.',
    wrong: [
      'No se rigen por la fecha de la declaración: el criterio es la fecha de llegada.',
      'No se rigen por el 1.º de enero.',
      '',
      'No se rigen por el año anterior.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, art. 14 num. 5. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-005',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Valor en aduana y conversión de moneda',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Para determinar el valor en aduana de mercancías importadas cuyo precio fue negociado en una moneda distinta del dólar estadounidense, el Decreto 1165 de 2019 establece que:',
    options: [
      'El valor se determina directamente en pesos colombianos usando la TRM del día de la importación, sin pasar por la conversión a dólares que exige la norma, pues la TRM ya refleja esa conversión.',
      'El valor en aduana se determina en dólares de los Estados Unidos; el valor negociado en otra moneda se convierte a dólares con el tipo de cambio vigente el último día hábil de la semana anterior a la presentación y aceptación de la declaración, y luego se convierte a pesos con la TRM del mismo período.',
      'El valor se determina en la moneda de negociación y se declara sin conversión, porque la base gravable admite cualquier divisa expresada en la factura comercial, siempre que el proveedor la certifique.',
      'Se usa el promedio de la TRM de los últimos treinta días, como criterio que suaviza las fluctuaciones cambiarias para efectos de la liquidación de los tributos aduaneros y de las sanciones.'
    ],
    correct: 1,
    justification:
      'El artículo 15 del Decreto 1165 de 2019 dispone que el valor en aduana se determina en dólares de los Estados Unidos; cuando el valor esté expresado en otra moneda, se convierte a dólares usando el tipo de cambio vigente el último día hábil de la semana anterior a la presentación y aceptación de la declaración, y el resultado se convierte a pesos con la tasa de cambio representativa del mercado (TRM) de ese mismo período.',
    wrong: [
      'La conversión no se hace directamente a pesos con la TRM del día: hay un paso intermedio a dólares.',
      '',
      'La moneda de negociación no se declara sin conversión: el valor en aduana se expresa en dólares.',
      'La norma no prevé promedios de treinta días.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, art. 15. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-006',
    indicator: 'i10',
    moduleId: 'm09',
    topic: 'Declaración de corrección',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Un importador detecta que declaró una subpartida arancelaria equivocada. Sobre la posibilidad de corregir:',
    options: [
      'No es posible corregir, porque la subpartida arancelaria declarada es inmutable y la autoridad la toma como definitiva en todo caso, sin excepción.',
      'Puede corregirla mediante declaración de corrección voluntaria dentro del término previsto, siempre que no se haya proferido liquidación oficial, liquidando los mayores tributos, intereses y la sanción correspondiente.',
      'Solo puede corregirse mediante orden judicial, porque la declaración de importación es un acto de naturaleza jurisdiccional y no administrativa.',
      'Puede corregirla en cualquier tiempo y sin sanción, porque el error involuntario no genera consecuencias para el declarante ni intereses.'
    ],
    correct: 1,
    justification:
      'El artículo 296 del Decreto 1165 de 2019 admite la corrección voluntaria de la declaración de importación para errores como la subpartida arancelaria, siempre que se haga dentro del término señalado y antes de que exista liquidación oficial de corrección o revisión de valor, liquidando los mayores tributos e intereses y la sanción respectiva.',
    wrong: [
      'Sí es corregible por la vía prevista en la norma.',
      '',
      'No se requiere orden judicial: existe el mecanismo administrativo de corrección.',
      'La corrección extemporánea o posterior a liquidación oficial no es libre ni queda exenta de consecuencias.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, art. 296. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-007',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Informe de descargue e inconsistencias',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La obligación del transportador o del agente de carga internacional respecto del informe de descargue e inconsistencias es:',
    options: [
      'Presentarlo a la DIAN a través de los servicios informáticos electrónicos, dentro del término previsto.',
      'Presentarlo en papel en la seccional de aduanas correspondiente dentro del mismo término.',
      'No presentar informe alguno: basta con el manifiesto de carga.',
      'Presentarlo únicamente cuando la DIAN lo solicite por escrito.',
    ],
    correct: 0,
    justification:
      'El Decreto 1165 de 2019 impone al transportador o agente de carga internacional la obligación de presentar a la DIAN, a través de los servicios informáticos electrónicos (SIE), el informe de descargue e inconsistencias, dentro del término previsto. Su incumplimiento puede dar lugar a actuaciones sancionatorias.',
    wrong: [
      '',
      'La presentación es electrónica, no en papel.',
      'El manifiesto no sustituye el informe de descargue e inconsistencias.',
      'Es una obligación periódica, no sujeta a requerimiento previo.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, deberes del transportador. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-008',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Régimen de tránsito aduanero',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Sobre la obligación aduanera en el régimen de tránsito y la responsabilidad por los tributos si la mercancía no llega a destino, es correcto afirmar que:',
    options: [
      'La obligación comprende la presentación de la declaración de tránsito, la ejecución de la operación y la finalización del régimen dentro de los plazos; si la mercancía no llega, responde el declarante de la declaración de tránsito por los tributos aduaneros.',
      'La obligación se limita al pago del flete y del seguro de la carga, pues los tributos aduaneros solo se causan en la importación definitiva y no en el tránsito aduanero.',
      'Si la mercancía no llega a destino, responde exclusivamente el importador final, por ser el beneficiario económico de la operación y quien recibe la mercancía en destino.',
      'No existe responsabilidad alguna por la mercancía en tránsito, porque los riesgos se trasladan al comprador desde el embarque según las reglas comerciales internacionales.'
    ],
    correct: 0,
    justification:
      'El Decreto 1165 de 2019 define la obligación aduanera en tránsito como la presentación de la declaración de tránsito, la ejecución de la operación y la finalización del régimen dentro de los plazos; y establece que, si la mercancía no llega a su destino, el declarante de la declaración de tránsito responde por el pago de los tributos aduaneros.',
    wrong: [
      '',
      'El flete y el seguro son asuntos comerciales, no el contenido de la obligación aduanera.',
      'La responsabilidad tributaria recae en el declarante del tránsito, no en el importador final.',
      'Sí existe responsabilidad: la asume el declarante de la declaración de tránsito.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, régimen de tránsito. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-009',
    indicator: 'i10',
    moduleId: 'm09',
    topic: 'Planilla de envío',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Durante un control, un funcionario detecta mercancías en circulación hacia un depósito habilitado sin planilla de envío. El tratamiento correcto es:',
    options: [
      'Permitir la circulación si el conductor muestra la factura comercial y el documento de transporte.',
      'Considerar la mercancía como mercancía en tránsito interno sin la debida amparabilidad documental, lo que puede dar lugar a su aprehensión.',
      'Devolver la mercancía al lugar de origen sin consecuencias, por tratarse de un error formal.',
      'Exigir únicamente el pago del peaje correspondiente y continuar el control documental.',
    ],
    correct: 1,
    justification:
      'El Decreto 1165 de 2019 exige que el traslado de mercancías a un depósito habilitado esté amparado por la planilla de envío expedida con base en la información transmitida por los servicios informáticos electrónicos. La circulación sin esa amparabilidad documental puede dar lugar a la aprehensión de la mercancía.',
    wrong: [
      'La factura comercial no ampara la circulación de la mercancía en tránsito interno.',
      '',
      'No existe la devolución sin consecuencias: la mercancía puede ser aprehendida.',
      'El peaje es irrelevante para el control aduanero documental.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, planilla de envío. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-010',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Abandono legal',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Sobre el abandono legal de mercancías, el Decreto 1165 de 2019 establece que:',
    options: [
      'Opera cuando, vencido el término de permanencia establecido para cada régimen, la mercancía no ha sido sometida al régimen correspondiente; sin rescate oportuno, pasa a favor de la Nación.',
      'Solo opera por renuncia escrita y expresa del importador ante la autoridad aduanera competente, previa aceptación de la DIAN.',
      'Opera automáticamente al día siguiente de la llegada de la mercancía al territorio aduanero nacional, sin trámite previo.',
      'No tiene efectos jurídicos sobre la propiedad de la mercancía, que permanece en cabeza del importador hasta su venta.',
    ],
    correct: 0,
    justification:
      'El Decreto 1165 de 2019 define el abandono legal como la situación en que, vencido el término de permanencia establecido para cada régimen o modalidad, la mercancía no ha sido sometida al régimen correspondiente; vencido además el término para rescate, la mercancía pasa a favor de la Nación.',
    wrong: [
      '',
      'El abandono legal no requiere renuncia: se configura por el vencimiento del término.',
      'No opera al día siguiente de la llegada: el término general de permanencia es de un mes, prorrogable según la norma.',
      'Sí tiene efectos: la mercancía no rescatada pasa a favor de la Nación.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, abandono legal. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-011',
    indicator: 'i10',
    moduleId: 'm09',
    topic: 'Franquicias de viajeros y aprehensión',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un viajero ingresa al país con bienes que superan las franquicias previstas y, en el control aduanero, se niega a declararlos. El funcionario debe:',
    options: [
      'Permitirle el ingreso por tratarse de bienes de uso personal, aunque excedan la franquicia, por aplicación del principio de favorabilidad al viajero.',
      'Decomisar los bienes de inmediato, sin trámite adicional, por tratarse de mercancía no declarada y de ingreso prohibido.',
      'Informar la obligación de declarar los bienes que exceden la franquicia; si se niega a declarar, procede la aprehensión de los bienes no declarados y el proceso correspondiente.',
      'Cobrar únicamente una multa fija sin retener la mercancía, por ser una infracción formal del viajero.',
    ],
    correct: 2,
    justification:
      'El Decreto 1165 de 2019 dispone que los bienes que superan las franquicias deben someterse a la modalidad de importación que corresponda, liquidando y pagando los tributos; y que la negativa a declarar habilita la aprehensión de los bienes no declarados y el adelantamiento del proceso correspondiente.',
    wrong: [
      'Exceder la franquicia impide el ingreso libre, aunque sean de uso personal.',
      'La aprehensión no es un decomiso automático: procede conforme al proceso previsto.',
      '',
      'La retención/aprehensión de la mercancía es la medida procedente, no una simple multa.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, modalidad de viajeros. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-012',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Exportación definitiva',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'La obligación aduanera en la exportación definitiva comprende:',
    options: [
      'Únicamente el pago del arancel de exportación y de los demás tributos que gravan la salida.',
      'La presentación de la solicitud de autorización de embarque, la ejecución del embarque y la finalización del régimen.',
      'Solo la emisión de la factura comercial y la entrega de la mercancía al transportador.',
      'La obtención de una licencia previa del Ministerio de Comercio en todos los casos.',
    ],
    correct: 1,
    justification:
      'El Decreto 1165 de 2019 define la obligación aduanera en la exportación definitiva como la que comprende la presentación de la solicitud de autorización de embarque, la ejecución del embarque y la finalización del régimen dentro de los plazos establecidos.',
    wrong: [
      'El arancel de exportación solo existe para ciertos bienes; no es el contenido general de la obligación.',
      '',
      'La factura comercial es un soporte, no el contenido de la obligación aduanera.',
      'Los vistos buenos o licencias solo se exigen para mercancías específicas, no en todos los casos.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, exportación definitiva. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-013',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Depósitos públicos habilitados',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Sobre la habilitación de un depósito público cuyo término venció sin haberse renovado:',
    options: [
      'Queda sin efecto desde el vencimiento del plazo, y el depósito no puede recibir nuevas mercancías bajo esa figura.',
      'Se renueva automáticamente por un período igual, salvo manifestación en contrario.',
      'Continúa operando mientras no haya una orden expresa de cierre de la autoridad aduanera.',
      'Solo se suspende si se comprueba un perjuicio al fisco o un incumplimiento grave.',
    ],
    correct: 0,
    justification:
      'El Decreto 1165 de 2019 establece que, vencido el plazo de la habilitación sin que se hubiere solicitado su renovación, la habilitación queda sin efecto, y el depósito no puede recibir nuevas mercancías bajo la figura de depósito público.',
    wrong: [
      '',
      'No hay renovación automática: debe solicitarse la renovación.',
      'La pérdida de efectos opera por el solo vencimiento, sin orden expresa adicional.',
      'No depende de la comprobación de perjuicios: basta el vencimiento sin renovación.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, depósitos. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-014',
    indicator: 'i03',
    moduleId: 'm09',
    topic: 'Sanciones aduaneras y reiteración',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un transportador oculta de manera reiterada parte de la carga para evitar su revisión. La DIAN, además de las sanciones por cada incumplimiento, puede:',
    options: [
      'Aumentar el nivel de riesgo asignado al transportador y justificar controles más intensos y frecuentes sobre sus operaciones.',
      'Cancelar definitivamente el RUT del transportador como primera medida, por reiteración de la conducta.',
      'Ignorar la reiteración, porque cada operación se juzga de forma aislada.',
      'Prohibir al transportador operar en todo el territorio nacional de forma automática.',
    ],
    correct: 0,
    justification:
      'Bajo el enfoque de gestión del riesgo del Decreto 1165 de 2019, la práctica reiterada de ocultar carga eleva el perfil de riesgo del operador: la DIAN puede aumentar su nivel de riesgo y justificar controles más intensos y frecuentes, sin perjuicio de las sanciones por cada incumplimiento.',
    wrong: [
      '',
      'La cancelación del RUT no es la primera medida ni es automática.',
      'La reiteración es un criterio relevante de gestión del riesgo.',
      'No existe una prohibición territorial automática; los controles se intensifican conforme al riesgo.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, gestión del riesgo. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-015',
    indicator: 'i09',
    moduleId: 'm09',
    topic: 'Puesta a disposición de la mercancía',
    difficulty: 'basica',
    kind: 'interpretacion',
    statement:
      'La obligación del transportador respecto de la carga que arriba al territorio aduanero nacional es:',
    options: [
      'Poner a disposición de las autoridades aduaneras las mercancías objeto de control.',
      'Entregar la carga directamente al importador sin intervención aduanera.',
      'Almacenarla en cualquier lugar a su elección.',
      'Notificar al importador y esperar sus instrucciones.',
    ],
    correct: 0,
    justification:
      'El Decreto 1165 de 2019 impone al transportador la obligación de poner a disposición de las autoridades aduaneras las mercancías objeto de control que arriben al territorio aduanero nacional, garantizando la disponibilidad para el ejercicio del control aduanero.',
    wrong: [
      '',
      'La entrega directa al importador sin control aduanero desconoce la obligación.',
      'El almacenamiento no es libre: debe permitir el control de la autoridad.',
      'La obligación es frente a la autoridad aduanera, no solo frente al importador.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, obligaciones del transportador. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-a1-016',
    indicator: 'i10',
    moduleId: 'm09',
    topic: 'Actuación ante hallazgos en visita',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'En una visita a un depósito, el funcionario detecta mercancías que podrían estar en situación de aprehensión. La actuación correcta es:',
    options: [
      'Levantar acta de inspección o de hechos, aprehender la mercancía si corresponde y dar inicio al proceso administrativo previsto.',
      'Retirar la mercancía de inmediato sin documentar el hallazgo, para evitar su deterioro y la congestión del depósito.',
      'Solicitar al depositario que oculte la mercancía hasta nueva orden, mientras se define la situación jurídica.',
      'Esperar la orden de un juez para cualquier actuación, por tratarse de una medida restrictiva de la propiedad.',
    ],
    correct: 0,
    justification:
      'El Decreto 1165 de 2019 prevé que, ante hallazgos en visitas de control, el funcionario levante acta de inspección o de hechos, aprehenda la mercancía cuando corresponda según las causales y dé inicio al proceso administrativo correspondiente, documentando siempre la actuación.',
    wrong: [
      '',
      'La actuación debe documentarse: el acta de hechos es esencial para el proceso.',
      'No procede ocultar mercancías: ello configuraría irregularidades adicionales.',
      'La aprehensión aduanera es una medida administrativa que no requiere orden judicial previa.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-ADUANERO-2». Decreto 1165 de 2019, aprehensión. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
]
