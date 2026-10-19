import type { Question } from '../types'

// ============================================================
// Preguntas NUEVAS de práctica (fase 2) — Cambiario
// Inspiradas en los temas y el estilo de la prueba de práctica
// aportada (DCIP-83 del Banco de la República, numerales
// cambiarios). Elaboración propia: NO son preguntas oficiales
// de la DIAN ni de la CNSC.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-c1-001',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Obligaciones de los IMC',
    difficulty: 'basica',
    kind: 'caso',
    statement:
      'En una visita de supervisión a un Intermediario del Mercado Cambiario (IMC), un funcionario de la DIAN observa que varias declaraciones de cambio carecen de la descripción del concepto de la operación y del país de procedencia de las divisas, aunque incluyen valor y fecha. El IMC alega que transmitió la información al Banco de la República dentro del plazo. El funcionario debe:',
    options: [
      'Considerar suficiente la transmisión oportuna, porque la circular solo exige el valor y la fecha como datos mínimos de la operación.',
      'Requerir al IMC ajustar sus mecanismos de recepción para exigir siempre la información completa de los datos mínimos de las operaciones de cambio y verificar su transmisión al Banco de la República.',
      'Solicitar únicamente a los residentes que actualicen sus datos de identificación, por ser los únicos obligados a suministrarlos.',
      'Imponer de inmediato la sanción máxima por infracción cambiaria, dado que la omisión afecta el registro de la balanza cambiaria.',
    ],
    correct: 1,
    justification:
      'Los numerales 1.1 y 1.2.2 literal b) de la DCIP-83 obligan a los IMC a exigir a residentes y no residentes la información completa de los datos mínimos de las operaciones de cambio que canalicen y a transmitirla al Banco de la República. La transmisión oportuna no subsana la exigencia de datos mínimos completos.',
    wrong: [
      'La transmisión oportuna no exime de exigir la totalidad de los datos mínimos.',
      '',
      'La actualización de datos de identificación no resuelve la omisión de los datos mínimos de la operación.',
      'La actuación correcta es el requerimiento de ajuste de procedimientos, no la sanción inmediata.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 nums. 1.1 y 1.2.2. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-002',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Corrección vs. anulación de declaración de cambio',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un residente registró por error su operación como "ingreso" cuando en realidad era un "egreso" de divisas, y el IMC pretende enmendar la naturaleza mediante el mecanismo de correcciones. El funcionario de la DIAN debe indicar que:',
    options: [
      'La corrección procede siempre que exista solicitud escrita del cliente y se acredite el error en la operación.',
      'La naturaleza de ingreso, egreso o devolución no puede ser objeto de corrección: debe tramitarse la anulación de la declaración y la posterior transmisión de una nueva.',
      'La declaración debe mantenerse sin cambio alguno, porque la circular prohíbe toda modificación posterior a la transmisión.',
      'La corrección procede únicamente si el valor de la operación supera la cuantía mínima fijada por el Banco de la República.',
    ],
    correct: 1,
    justification:
      'El numeral 1.4.1 literal a) de la DCIP-83 establece que la naturaleza de ingreso, egreso o devolución de la declaración de cambio no puede ser objeto de corrección; en esos casos debe seguirse el procedimiento de anulación del numeral 1.4.4 y, si hay operación real que declarar, transmitir una nueva declaración con la naturaleza correcta.',
    wrong: [
      'La solicitud escrita no habilita corregir datos que la circular declara no corregibles.',
      '',
      'Sí hay mecanismos de modificación, pero el procedente para la naturaleza es la anulación con nueva transmisión.',
      'La cuantía de la operación no es el criterio: la naturaleza es un dato no corregible en todo caso.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 nums. 1.4.1 y 1.4.4. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-003',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Cambios de declaración de cambio',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Un no residente desea reemplazar una declaración de cambio por tres declaraciones separadas que reflejen con mayor precisión cada servicio, manteniendo el mismo valor total. El procedimiento correcto es:',
    options: [
      'Anular la declaración inicial sin permitir nuevas declaraciones, porque el reemplazo por varias declaraciones solo opera dentro del mismo mes calendario.',
      'Usar el procedimiento de "cambios de declaración de cambio", reemplazando la inicial por varias del mismo o diferente tipo, siempre que la sumatoria de los valores de negociación sea igual al valor original.',
      'Presentar una solicitud formal de devolución de divisas ante el IMC y registrar las nuevas declaraciones como ingresos para compensar el valor total.',
      'Modificar directamente los valores mediante correcciones sucesivas autorizadas por el IMC, sin necesidad de anular la declaración.',
    ],
    correct: 1,
    justification:
      'El numeral 1.4.2 de la DCIP-83 autoriza reemplazar en cualquier tiempo una declaración de cambio por varias del mismo tipo, de diferente tipo o por una combinación, siempre que la sumatoria de los valores de negociación de las nuevas declaraciones sea igual al valor de la declaración reemplazada, conservando la naturaleza de la operación.',
    wrong: [
      'Sí pueden presentarse nuevas declaraciones: el reemplazo está expresamente autorizado.',
      '',
      'No se trata de una devolución de divisas: es un reemplazo formal de la declaración por otras de igual valor total.',
      'La modificación directa por correcciones no es el mecanismo previsto para el reemplazo por varias declaraciones.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 1.4.2. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-004',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Numerales cambiarios de importaciones',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Una sociedad importadora recibe maquinaria cuyo documento de transporte tiene fecha 5 de marzo y paga al proveedor extranjero a través de un IMC el 25 de marzo, es decir, dentro de un plazo igual o inferior a un mes. El numeral cambiario aplicable y la regla sobre compensación son:',
    options: [
      'Numeral 2022; la compensación con cuentas por cobrar del mismo proveedor es admisible en este caso.',
      'Numeral 2015, y la compensación de obligaciones no es admisible en operaciones de comercio exterior: debe canalizarse la totalidad del pago.',
      'Numeral 2017, por tratarse de un pago anticipado dentro del plazo de un mes desde el documento de transporte.',
      'Numeral 2026, por tratarse de una dación en pago de la obligación con el proveedor extranjero.',
    ],
    correct: 1,
    justification:
      'El Capítulo 3 de la DCIP-83 obliga a canalizar por el mercado cambiario los pagos de importaciones de bienes; cuando el pago se realiza en un plazo igual o inferior a un mes desde la fecha del documento de transporte corresponde el numeral cambiario 2015 "Giro por importaciones de bienes ya embarcados…". Además, la compensación de obligaciones no es admisible en operaciones de comercio exterior.',
    wrong: [
      'El numeral 2022 aplica a plazos entre 1 y 12 meses con financiación de no residentes, y la compensación está prohibida.',
      '',
      'No es un pago anticipado: la mercancía ya está embarcada; el 2017 aplica a pagos antes del embarque.',
      'El 2026 aplica a la dación en pago de obligaciones de financiación, no al giro ordinario de importación.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 Capítulo 3. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-005',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Pago de importaciones en moneda legal',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un importador pacta con su proveedor no residente el pago en moneda legal colombiana, abonando a una cuenta en pesos abierta en un IMC a nombre del proveedor. El pago se realiza dentro de un plazo igual o inferior a un mes desde el documento de transporte. ¿Qué debe exigir el funcionario?',
    options: [
      'Nada, porque el pago se realiza íntegramente en moneda legal y el proveedor tiene cuenta local.',
      'El suministro de los datos mínimos de la Declaración de Cambio por importaciones de bienes al IMC desde el cual se realiza el pago, aplicando el numeral 2015.',
      'La Declaración de Cambio con el numeral 2022, porque el pago en moneda legal siempre se registra como financiación.',
      'La anulación de la operación, por considerarse un pago efectuado por fuera del mercado cambiario.',
    ],
    correct: 1,
    justification:
      'El numeral 3.1.1 de la DCIP-83 regula el pago de importaciones en moneda legal: cuando se efectúe a través de IMC mediante abono a cuentas en moneda legal colombiana de proveedores del exterior, el importador debe suministrar la información de los datos mínimos de la Declaración de Cambio al IMC desde el cual se efectúa el pago, con el numeral 2015 (plazo ≤ 1 mes).',
    wrong: [
      'El pago en moneda legal no exime de la declaración: la norma lo regula expresamente.',
      '',
      'El 2022 corresponde a plazos entre 1 y 12 meses con financiación de no residentes, no a pagos en moneda legal dentro del mes.',
      'No hay anulación: la operación es canalizable a través del IMC con su declaración correspondiente.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 3.1.1. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-006',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Tarjetas de crédito en importaciones',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Un importador paga compras en línea de equipos de cómputo en el exterior con una tarjeta de crédito emitida en Colombia y cobrada en moneda legal colombiana. Sobre la Declaración de Cambio, el funcionario debe:',
    options: [
      'Exigir siempre una Declaración de Cambio por importaciones adicional ante un IMC, con el numeral 2015.',
      'Considerar que el registro de utilización de la tarjeta de crédito constituye la Declaración de Cambio, sin exigir una declaración adicional ante un IMC.',
      'Permitir que no se registre ni la utilización de la tarjeta ni declaración alguna, por tratarse de compras de bajo monto.',
      'Exigir la declaración únicamente si el valor de la compra supera 10.000 dólares.',
    ],
    correct: 1,
    justification:
      'El numeral 3.1.2 de la DCIP-83 dispone que cuando el pago de importaciones de bienes se realice con tarjetas de crédito o débito emitidas en Colombia y cobradas en moneda legal colombiana, el registro de utilización de la tarjeta constituye la Declaración de Cambio, sin que proceda exigir una adicional ante un IMC.',
    wrong: [
      'Imponer una declaración adicional sería crear un requisito no previsto por la circular.',
      '',
      'El registro de utilización de la tarjeta sí se produce y constituye la declaración.',
      'La norma no establece umbrales en dólares para este tratamiento.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 3.1.2. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-007',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Inscripción y cancelación del IMC',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una entidad financiera vigilada por la Superintendencia Financiera desea operar como IMC. El funcionario de la DIAN debe explicar que:',
    options: [
      'Basta con su licencia de funcionamiento para iniciar operaciones de cambio, porque la vigilancia de la Superintendencia Financiera cubre también el control cambiario.',
      'La inscripción como IMC se entiende automática con la primera operación reportada, pues la circular no exige un trámite previo de autorización ante el Banco de la República.',
      'Previo a realizar operaciones de cambio, la entidad debe solicitar al DCIP del Banco de la República su inscripción como IMC, con solicitud suscrita por el representante legal indicando el último patrimonio técnico reportado a la Superintendencia Financiera.',
      'Debe esperar a que el Banrep la inscriba de oficio, una vez verifique que la entidad cumple los requisitos patrimoniales y operativos exigidos por la circular.'
    ],
    correct: 2,
    justification:
      'El numeral 2.5 de la DCIP-83 establece que, previo a la realización de las operaciones de cambio autorizadas, las entidades deben solicitar al DCIP del Banrep su inscripción como IMC mediante solicitud suscrita por el representante legal, indicando el último patrimonio técnico reportado a la Superintendencia Financiera de Colombia.',
    wrong: [
      'La licencia de funcionamiento no habilita por sí sola para operar como IMC.',
      'No hay inscripción automática: se requiere la solicitud previa al DCIP.',
      '',
      'La inscripción es a solicitud de la entidad, no de oficio.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 2.5. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-008',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Cancelación del código de operación del IMC',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Tras la cancelación del código de operación de un IMC por orden de la autoridad competente, las operaciones de cambio anteriores pendientes de reporte:',
    options: [
      'Quedan exentas de reporte, porque la entidad perdió la condición de IMC y ya no está sujeta a la circular.',
      'Deben transmitirse electrónicamente al Banrep en el término señalado en el numeral 9 del Anexo 3 de la circular, pese a la cancelación.',
      'Quedan al arbitrio de la entidad, porque la circular guarda silencio sobre las operaciones anteriores.',
      'Deben reportarse únicamente si la autoridad competente las requiere de manera expresa.',
    ],
    correct: 1,
    justification:
      'El numeral 2.5 de la DCIP-83 dispone que, una vez cancelada la condición de IMC, la transmisión electrónica de la información de las operaciones de cambio al Banrep deberá cumplirse en el término señalado en el numeral 9 del Anexo 3 de la circular. La pérdida de la condición no exime de reportar las operaciones ya realizadas.',
    wrong: [
      'La cancelación no extingue el deber de transmitir la información de operaciones anteriores.',
      '',
      'La circular no guarda silencio: fija expresamente el término del Anexo 3.',
      'La obligación no depende de requerimientos adicionales de la autoridad.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 2.5. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-009',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Código CIIU en operaciones cambiarias',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Respecto al código CIIU en las operaciones cambiarias, la DCIP-83 establece que:',
    options: [
      'Es un dato opcional que solo se informa si la empresa lo considera útil para su clasificación interna.',
      'Cuando se requiera como dato mínimo de la operación de cambio, los titulares deben informarlo de acuerdo con los lineamientos del DANE.',
      'Solo es exigible a las personas naturales, no a las personas jurídicas ni a sus representantes.',
      'Solo es exigible a las entidades financieras y a los intermediarios del mercado cambiario.',
    ],
    correct: 1,
    justification:
      'El numeral 2.6 de la DCIP-83 dispone que los titulares de las operaciones cambiarias en las que se requiera la información del código CIIU como dato mínimo de la operación de cambio deberán informar dicho código de acuerdo con los lineamientos señalados por el DANE. Cuando la operación lo exige como dato mínimo, no es opcional.',
    wrong: [
      'Cuando es dato mínimo exigido, no es opcional.',
      '',
      'Aplica a los titulares de las operaciones cambiarias, personas naturales o jurídicas, sin esa distinción.',
      'No se limita a las entidades financieras.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 2.6. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-010',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Reintegro de exportaciones',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Un exportador recibió divisas por sus exportaciones, pero un ataque cibernético al banco del exterior impidió jurídicamente su reintegro dentro del plazo de seis meses. El funcionario de la DIAN debe:',
    options: [
      'Sancionar de todas formas, porque el reintegro dentro de seis meses es una obligación de resultado que no admite eximentes de ninguna clase ni valoración de las circunstancias del exportador.',
      'Verificar si los hechos constituyen una situación que impidió jurídicamente el cumplimiento (fuerza mayor, caso fortuito o inexigibilidad) y, de acreditarse, reconocer que en esos eventos no es exigible la canalización, exigiendo la conservación de los soportes.',
      'Conceder de oficio una prórroga de seis meses adicionales, prorrogables por otros seis a solicitud motivada del exportador, sin exigir prueba de la imposibilidad.',
      'Exigir el reintegro con intereses de mora, sin admitir justificación alguna, porque las contingencias tecnológicas del exterior no son oponibles a la DIAN ni al Banco de la República.'
    ],
    correct: 1,
    justification:
      'El Capítulo 4 de la DCIP-83 establece que en las situaciones que impiden o hayan impedido jurídicamente a los exportadores el cumplimiento de la obligación de reintegro de divisas —tales como fuerza mayor, caso fortuito, inexistencia o inexigibilidad— no será exigible la canalización del reintegro a través del mercado cambiario. El funcionario debe verificar los soportes que acrediten la imposibilidad y exigir su conservación.',
    wrong: [
      'La norma reconoce expresamente las situaciones que impiden jurídicamente el cumplimiento.',
      '',
      'La norma no prevé prórrogas automáticas: prevé la no exigibilidad en los eventos justificados.',
      'No procede exigir intereses cuando la situación jurídica excusa la canalización.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 Capítulo 4. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-011',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Compensación en comercio exterior',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un exportador propone no canalizar las divisas de sus exportaciones porque pretende compensarlas con las obligaciones que tiene con el mismo proveedor extranjero por importaciones. El funcionario debe:',
    options: [
      'Aceptar la compensación si las partes la documentan por escrito y la registran ante el IMC, por ser una práctica comercial admitida en comercio exterior.',
      'Aceptarla únicamente por el saldo neto entre exportaciones e importaciones, siempre que las divisas provengan del mismo proveedor y se informen al Banrep.',
      'Indicar que la compensación de obligaciones no es admisible en operaciones de comercio exterior y exigir la canalización de las divisas por el mercado cambiario, con la presentación de los datos mínimos correspondientes.',
      'Aceptarla si el monto compensado no supera el 50% del valor exportado y se acredita con la factura comercial y el documento de transporte correspondiente.',
    ],
    correct: 2,
    justification:
      'El Capítulo 4 de la DCIP-83 establece expresamente que la compensación de obligaciones no es admisible en operaciones de comercio exterior. Las obligaciones de canalizar divisas por exportaciones no pueden extinguirse mediante compensaciones contables con la misma contraparte; su incumplimiento constituye infracción al régimen cambiario.',
    wrong: [
      'La documentación por escrito no convierte en admisible lo que la norma prohíbe.',
      'No existe la figura del saldo neto compensable en comercio exterior.',
      '',
      'La norma no admite umbrales de compensación: la prohibición es general.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 Capítulo 4. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-012',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Devolución de divisas por mercancía devuelta',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Una empresa exportó bienes, reintegró las divisas y presentó su declaración de cambio. Meses después el comprador devuelve parte de la mercancía y la empresa gira al exterior una fracción de las divisas. El registro cambiario apropiado es:',
    options: [
      'Un nuevo egreso ordinario de divisas por servicios, sin referencia a la declaración de cambio anterior.',
      'No registrar ninguna declaración nueva, porque las divisas ya fueron informadas en el reintegro original.',
      'Una nueva declaración de cambio indicando que corresponde a una "Devolución", utilizando el mismo numeral cambiario de la operación inicial.',
      'Un cambio de declaración de cambio que sustituya la declaración original por su valor total.',
    ],
    correct: 2,
    justification:
      'El numeral 1.6 de la DCIP-83 dispone que cuando haya lugar a girar al exterior divisas ya reintegradas y reportadas —entre otros, por rechazo o pérdida de la mercancía— debe transmitirse una declaración de cambio indicando que corresponde a una "Devolución", y el numeral cambiario debe ser el mismo de la operación inicial.',
    wrong: [
      'No es un egreso ordinario: la circular prevé un tratamiento específico de devolución.',
      'Sí debe registrarse: la devolución al exterior es una operación de cambio que debe declararse.',
      '',
      'No es un reemplazo de la declaración original: es una declaración nueva de devolución vinculada a la operación inicial.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 1.6. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-013',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Actualización de datos del deudor de crédito externo',
    difficulty: 'basica',
    kind: 'interpretacion',
    statement:
      'Un residente deudor de un crédito externo registrado cambió su número de identificación tributaria por una reorganización societaria. Para actualizar sus datos en el sistema de información cambiaria debe:',
    options: [
      'Actualizar sus datos únicamente de manera directa en el sistema, sin intervención de IMC.',
      'Realizar la actualización por medio de cualquier IMC, por tratarse de deudor de crédito externo.',
      'Solicitar la unificación de identificación sin actualización previa.',
      'Esperar a que la DIAN actualice sus datos de oficio.',
    ],
    correct: 1,
    justification:
      'El numeral 1.7.1 de la DCIP-83 permite la actualización de datos directamente o a través del representante legal o apoderado, pero precisa que cuando sean deudores o acreedores de créditos externos deberán realizar la actualización por medio de cualquier IMC, conservando la trazabilidad de la información vinculada al crédito.',
    wrong: [
      'La actualización directa no procede para deudores de créditos externos: la vía es el IMC.',
      '',
      'La unificación de identificación es un trámite distinto, no el sustituto de la actualización de datos.',
      'La DIAN no actualiza de oficio los datos del deudor.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 1.7.1. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-014',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Cuentas de compensación',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Cuando una operación de cambio se canaliza a través de cuentas de compensación, el tratamiento correcto es:',
    options: [
      'Exigir además una Declaración de Cambio ante un IMC en Colombia, por el mismo valor de la operación.',
      'El Informe de Movimientos de Cuenta de Compensación hace las veces de Declaración de Cambio y debe ser transmitido por el titular de la cuenta.',
      'No se requiere informe ni declaración alguna, porque la cuenta de compensación ya está registrada.',
      'Exigir la declaración únicamente si el titular es persona jurídica y supera el umbral de operaciones.',
    ],
    correct: 1,
    justification:
      'El Capítulo 3 de la DCIP-83 indica que cuando la operación se canalice a través de cuentas de compensación, el Informe de Movimientos de Cuenta de Compensación hará las veces de la Declaración de Cambio y debe ser transmitido por el titular de la cuenta de compensación, conforme al Capítulo 8.',
    wrong: [
      'No se exige declaración adicional: el informe la sustituye.',
      '',
      'Sí se requiere el informe, transmitido por el titular.',
      'La obligación no depende de la naturaleza jurídica del titular.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 Capítulo 3. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-015',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Giros al exterior por IMC (DCIN-76)',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Un banco comercial inscrito como IMC recibe la instrucción de un importador de girar divisas al exterior a favor de un proveedor en Europa. El procedimiento operativo aplicable es:',
    options: [
      'Exclusivamente el Capítulo 2 de la DCIP-83, sin remisión a otras circulares del Banco de la República.',
      'El que defina libremente el IMC, sin sujeción a circulares específicas del Banco de la República.',
      'La reglamentación contenida en la Circular Externa Operativa y de Servicios DCIN-76, conforme lo señala el numeral 2.1 de la DCIP-83.',
      'El procedimiento previsto en el Capítulo 8 de la DCIP-83 para las cuentas de compensación.',
    ],
    correct: 2,
    justification:
      'El numeral 2.1 de la DCIP-83 establece que los giros al exterior que tramiten ante el Banrep los Intermediarios del Mercado Cambiario se efectuarán conforme a la reglamentación contenida en la Circular Externa Operativa y de Servicios DCIN-76, que desarrolla los detalles operativos de dichos giros.',
    wrong: [
      'La DCIP-83 remite expresamente a la DCIN-76 para los giros al exterior.',
      'El IMC no define libremente el procedimiento: debe aplicar la reglamentación del Banrep.',
      '',
      'El Capítulo 8 regula cuentas de compensación, no el procedimiento operativo de giros.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 2.1. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-016',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Pago anticipado de importaciones',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Un importador de insumos decide pagar por anticipado a su proveedor extranjero, con recursos propios, antes del embarque de la mercancía. La operación debe canalizarse:',
    options: [
      'Con el numeral 2015, por tratarse de importaciones de bienes ya embarcadas.',
      'Con el numeral 2022, por tratarse de una operación de financiación con el proveedor externo.',
      'Con el numeral 2017, informando los datos mínimos de la Declaración de Cambio por importaciones de bienes.',
      'Sin declaración, hasta que la mercancía sea embarcada y se inicie el trámite de importación.',
    ],
    correct: 2,
    justification:
      'El numeral 3.1.3 de la DCIP-83 define el pago anticipado como el efectuado a través del mercado cambiario antes del embarque de la mercancía y establece que los pagos anticipados sobre futuras importaciones con recursos propios deben informarse con los datos mínimos de la Declaración de Cambio por importaciones de bienes, utilizando el numeral cambiario 2017.',
    wrong: [
      'El 2015 aplica a importaciones ya embarcadas pagadas dentro del mes.',
      'El 2022 aplica a importaciones embarcadas con financiación de no residentes entre 1 y 12 meses.',
      '',
      'El pago anticipado sí debe canalizarse y declararse en el momento del pago.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 3.1.3. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-017',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Reintegro de exportaciones en moneda legal',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un exportador recibió el pago de sus exportaciones en moneda legal colombiana, abonado en su cuenta a través de un IMC el día 10 del mes. La información de los datos mínimos debe suministrarse:',
    options: [
      'Dentro de los cinco (5) días hábiles siguientes al abono en cuenta, con el numeral cambiario 1060.',
      'Dentro del mismo mes del abono en cuenta, con el numeral cambiario 1040.',
      'Al final del año gravable, con el numeral cambiario 1043 y la declaración de renta.',
      'No debe suministrarse, porque el pago se realizó en moneda legal colombiana.',
    ],
    correct: 0,
    justification:
      'El numeral 4.1.1 de la DCIP-83 establece que los residentes podrán recibir el pago de sus exportaciones en moneda legal colombiana únicamente a través de los IMC, y que el exportador debe suministrar al IMC la información de los datos mínimos de las operaciones de cambio dentro de los cinco (5) días hábiles siguientes al pago mediante abono en cuenta, con el numeral cambiario 1060 "Pago de exportaciones de bienes en moneda legal colombiana".',
    wrong: [
      '',
      'El 1040 corresponde al reintegro por exportaciones pagadas con divisas, no al pago en moneda legal.',
      'El 1043 corresponde a reintegros después de 12 meses, no a pagos en moneda legal.',
      'El pago en moneda legal por exportaciones sí debe informarse, por el mercado cambiario.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 4.1.1. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-018',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Anulación de declaraciones antiguas',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Un IMC reconoce que transmitió hace cuatro años una declaración de cambio por una operación de ingreso de divisas que nunca se perfeccionó. El funcionario de la DIAN debe concluir que:',
    options: [
      'Solo pueden anularse declaraciones dentro de los dos días hábiles siguientes a su transmisión al Banco de la República.',
      'Por el paso del tiempo la declaración queda consolidada y no procede ajuste alguno ante el IMC.',
      'La anulación puede tramitarse en cualquier tiempo, de acuerdo con el procedimiento previsto para las declaraciones transmitidas por los IMC.',
      'La anulación solo procede por orden de un juez de la República, previa demanda del interesado.',
    ],
    correct: 2,
    justification:
      'El numeral 1.4.4 de la DCIP-83 establece que la anulación de las declaraciones de cambio transmitidas por los IMC se puede tramitar en cualquier tiempo, siguiendo el procedimiento señalado en el Anexo 3 de la circular, siempre que se demuestre que la operación no correspondió a la realidad económica.',
    wrong: [
      'No existe el límite de dos días hábiles para la anulación.',
      'El paso del tiempo no consolida la declaración de forma inmodificable.',
      '',
      'No se requiere orden judicial: el trámite es administrativo ante el IMC/Banrep.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 1.4.4. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-019',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Dación en pago de importaciones',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'En la dación en pago de obligaciones derivadas de la financiación de importaciones de bienes, el tratamiento correcto es:',
    options: [
      'Aplicar los procedimientos ordinarios de corrección y de cambios de declaración, por tratarse de una operación de importación de bienes.',
      'Informar los datos mínimos de la Declaración de Cambio por importaciones con el numeral 2026, sin que procedan corrección, cambios de declaración ni devolución, salvo el procedimiento de anulación.',
      'No informar operación alguna, por no existir pago en divisas, pues la dación extingue la obligación sin flujo cambiario.',
      'Registrar la operación como un crédito externo con el propósito 59, por sustituir la obligación original con el proveedor.',
    ],
    correct: 1,
    justification:
      'El numeral 3.2.5 de la DCIP-83 regula la dación en pago de obligaciones de financiación de importaciones: debe suministrarse la información de los datos mínimos con el numeral cambiario 2026 "Dación en pago de importaciones de bienes", y no aplican los procedimientos de corrección, cambios de declaración de cambio ni devolución, aunque sí puede utilizarse el procedimiento de anulación del Capítulo 1.',
    wrong: [
      'La norma excluye expresamente corrección, cambios y devolución para la dación en pago.',
      '',
      'Sí debe informarse: la dación en pago tiene numeral cambiario propio (2026).',
      'El propósito 59 aplica a créditos externos obtenidos para pagar otros créditos externos, no a la dación en pago.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 3.2.5. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-c1-020',
    indicator: 'i08',
    moduleId: 'm10',
    topic: 'Leasing internacional e importación temporal',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Una empresa financia una importación temporal bajo la modalidad de leasing o arrendamiento financiero contratado con un no residente. El tratamiento cambiario correcto es:',
    options: [
      'No constituye crédito externo y no requiere informe, porque el leasing se rige por las normas propias de la importación temporal.',
      'Debe informarse antes del primer pago mediante el Informe de Crédito Externo Otorgado a Residentes con propósito 2, y los pagos posteriores mediante Declaración de Cambio por crédito externo.',
      'Se informa únicamente al terminar el contrato de leasing, cuando ya se conoce el valor total financiado.',
      'Se informa con la declaración de importaciones, sin que sea necesario un informe adicional de crédito externo ante el Banco de la República.',
    ],
    correct: 1,
    justification:
      'El numeral 3.3 de la DCIP-83 dispone que las importaciones temporales financiadas con no residentes bajo leasing o arrendamiento financiero constituyen crédito externo: el residente debe informar el crédito antes del primer pago mediante el Informe de Crédito Externo Otorgado a Residentes con el propósito 2 "Leasing o arrendamiento financiero contratado con no residentes", y los pagos se informan por Declaración de Cambio de crédito externo (Capítulo 5).',
    wrong: [
      'Sí constituye crédito externo según la circular.',
      '',
      'El informe debe presentarse antes del primer pago, no al final del contrato.',
      'La declaración de importaciones no sustituye el informe del crédito externo.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-CAMBIARIO». DCIP-83 num. 3.3. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
]
