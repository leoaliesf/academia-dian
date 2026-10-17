import type { Question } from '../types'

// ============================================================
// Preguntas NUEVAS de práctica (fase 2) — Tributario
// Inspiradas en los temas y el estilo de las pruebas de práctica
// aportadas (Resolución 000227 de 2025, E.T., Decreto 1625/2016).
// Son elaboración propia: NO son preguntas oficiales de la DIAN
// ni de la CNSC.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-t1-001',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Instrumento de Firma Electrónica (IFE)',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'De acuerdo con la Resolución 000227 de 2025 de la DIAN, la vigencia del Instrumento de Firma Electrónica (IFE) es de:',
    options: [
      'Un (1) año, renovable automáticamente mientras el RUT esté activo.',
      'Tres (3) años, contados a partir de la culminación del procedimiento de generación del instrumento.',
      'Cinco (5) años, prorrogables por períodos iguales.',
      'Vigencia indefinida, salvo cancelación del RUT.',
    ],
    correct: 1,
    justification:
      'El artículo 1.7.4.2, numeral 4, de la Resolución 000227 de 2025 establece que la vigencia del IFE es de tres (3) años, contados a partir de que se culmine el procedimiento de generación del instrumento.',
    wrong: [
      'No corresponde: la renovación no es automática ni anual.',
      '',
      'La vigencia no es de cinco años ni se prorroga en esos términos.',
      'No es indefinida: está limitada a tres años desde la culminación del procedimiento de generación.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.7.4.2 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-002',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Presentación de declaraciones por medios electrónicos',
    difficulty: 'basica',
    kind: 'interpretacion',
    statement:
      'Un contribuyente obligado presenta su declaración anual de activos en el exterior (Formulario 160) impresa y firmada de manera autógrafa, enviada por correo certificado a la seccional, alegando fallas de internet. Conforme a la Resolución 000227 de 2025, la DIAN debe:',
    options: [
      'Aceptarla, porque la falla de internet constituye fuerza mayor.',
      'Tenerla por no presentada, porque el único medio válido de presentación es el electrónico con instrumento de firma autorizado.',
      'Aceptarla con una sanción reducida por extemporaneidad.',
      'Devolverla para que se presente en físico ante la entidad bancaria autorizada.',
    ],
    correct: 1,
    justification:
      'Los artículos 1.2.2.10 y 1.2.2.11 de la Resolución 000227 de 2025 disponen que la declaración debe presentarse por los servicios informáticos electrónicos con el instrumento de firma autorizado, y que las presentadas por un medio diferente se tendrán como no presentadas. La falla de internet del contribuyente no es un medio de presentación alternativo.',
    wrong: [
      'La falla de internet no habilita la presentación física: la norma no contempla esa excepción.',
      '',
      'No procede "aceptarla con sanción": al tenerse por no presentada, se aplica la consecuencia prevista para la omisión.',
      'La presentación física no es una alternativa válida en ningún caso para estas declaraciones.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-1». Arts. 1.2.2.10 y 1.2.2.11 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-003',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Justificación de la extemporaneidad',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Un contribuyente tenía plazo para presentar una declaración informativa hasta el 20 de mayo de 2026 y solicitó la activación de su Instrumento de Firma Electrónica (IFE) apenas el 19 de mayo, por lo que no alcanzó a presentar a tiempo. Frente a su solicitud de justificación de la extemporaneidad, la DIAN debe:',
    options: [
      'Aceptarla, porque la solicitud del IFE se hizo antes del vencimiento.',
      'Rechazarla, porque la falta de activación del IFE con la antelación debida no es causal de justificación de la extemporaneidad.',
      'Aceptarla con la condición de que presente al día siguiente hábil.',
      'Conceder un plazo de gracia de cinco días hábiles.',
    ],
    correct: 1,
    justification:
      'El artículo 1.6.4.10, inciso 2, numeral 3, de la Resolución 000227 de 2025 señala que no activar el IFE (o solicitar cambio o nueva asignación) con una antelación no inferior a tres (3) días hábiles al vencimiento no constituye causal de justificación de la extemporaneidad. La solicitud con un día de antelación es insuficiente.',
    wrong: [
      'No basta con solicitar el IFE antes del vencimiento: la norma exige una antelación mínima de tres días hábiles.',
      '',
      'No existe esa condición en la norma: la extemporaneidad no se subsana presentando al día siguiente.',
      'La norma no prevé plazos de gracia para este supuesto.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.6.4.10 inc. 2 num. 3 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-004',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Notificación electrónica',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'La DIAN envía electrónicamente un requerimiento especial el 10 de abril de 2026 (fecha de envío) y el correo llega al buzón autorizado del administrado ese mismo día (fecha de entrega). ¿En qué fecha se entiende surtida la notificación y desde cuándo corren los términos para responder?',
    options: [
      'Surtida el 10 de abril; los términos corren transcurridos cinco (5) días a partir de la entrega del correo.',
      'Surtida cinco días después del envío; los términos corren desde esa fecha.',
      'Surtida en la fecha en que el administrado abra el correo; los términos corren al día siguiente.',
      'Surtida el 10 de abril; los términos corren desde el día hábil siguiente a esa fecha.',
    ],
    correct: 0,
    justification:
      'El artículo 1.7.5.2.1, inciso 2, de la Resolución 000227 de 2025 establece que la notificación electrónica se entiende surtida para todos los efectos legales en la fecha del envío del acto en el correo electrónico autorizado, y que los términos comienzan a correr transcurridos cinco (5) días a partir de la entrega del correo electrónico.',
    wrong: [
      '',
      'La notificación se surte en la fecha de envío, no cinco días después.',
      'No depende de la apertura del correo ni del acuse de recibo del administrado.',
      'Los términos no corren al día siguiente del envío: corren transcurridos cinco días desde la entrega.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-1 y 2». Art. 1.7.5.2.1 inc. 2 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-005',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Dirección Procesal Electrónica',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un contribuyente tiene registrado en el RUT el correo diego@ejemplo.com. Durante la fiscalización, su apoderado informa expresamente la Dirección Procesal Electrónica proceso@apoderado.com. ¿A qué dirección debe la DIAN notificar el requerimiento especial?',
    options: [
      'A la dirección del RUT, por ser el dato oficial registrado.',
      'A la Dirección Procesal Electrónica, que se aplica de manera preferente.',
      'A ambas direcciones, para garantizar la efectividad de la notificación.',
      'A la del apoderado solo si el contribuyente lo autoriza por escrito.',
    ],
    correct: 1,
    justification:
      'El artículo 1.7.5.2.3, literal a), de la Resolución 000227 de 2025 dispone que si el administrado señala una Dirección Procesal Electrónica, la Administración debe notificar el acto administrativo a dicha dirección electrónica, que se aplica de manera preferente frente a la del RUT.',
    wrong: [
      'La dirección del RUT cede cuando se ha informado una Dirección Procesal Electrónica.',
      '',
      'No se notifica a ambas: la dirección procesal se aplica de manera preferente.',
      'No se requiere autorización adicional: basta con que el apoderado la informe expresamente.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.7.5.2.3 lit. a) Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-006',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Actividad económica principal (RUT)',
    difficulty: 'basica',
    kind: 'aplicacion',
    statement:
      'Una persona natural obtiene ingresos de $50 millones por comercio de autopartes, $120 millones por servicios de asesoría contable y $80 millones por arrendamiento de inmuebles. La actividad económica principal (AEP) que debe registrar en el RUT es:',
    options: [
      'El arrendamiento de inmuebles, por ser renta pasiva.',
      'Los servicios de asesoría contable, porque la AEP es la actividad que genera el mayor valor de ingresos.',
      'El comercio de autopartes, por ser la actividad más antigua.',
      'Cualquiera de las tres, a elección del contribuyente.',
    ],
    correct: 1,
    justification:
      'El artículo 1.1.5.2 de la Resolución 000227 de 2025 establece que la actividad económica principal será aquella que genere el mayor valor de ingresos. Con $120 millones, la asesoría contable es la que mayor ingreso genera.',
    wrong: [
      'La renta pasiva no es el criterio: el criterio es el mayor valor de ingresos.',
      '',
      'La antigüedad no es un criterio previsto en la norma.',
      'No es electiva: la norma impone el criterio objetivo del mayor valor de ingresos.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.1.5.2 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-007',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Factura electrónica a crédito y confirmación de recibido',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un adquirente recibe una factura electrónica de venta a crédito, la paga oportunamente, pero nunca generó el mensaje electrónico de confirmación del recibido de la factura y de los bienes. ¿Puede tomar la factura como soporte de costos y deducciones en su declaración de renta?',
    options: [
      'Sí, porque el pago de la factura es prueba suficiente para la deducción.',
      'No, porque la factura a crédito no se constituye en soporte de costos y deducciones si el adquirente no confirma el recibido mediante mensaje electrónico remitido al emisor.',
      'Sí, siempre que la factura incluya el CUFE y el código QR.',
      'No, porque las facturas a crédito nunca sirven de soporte fiscal.',
    ],
    correct: 1,
    justification:
      'El artículo 1.5.1.4.3, inciso 2, de la Resolución 000227 de 2025 exige que, tratándose de operaciones a crédito, el adquirente confirme el recibido de la factura y de los bienes o servicios adquiridos mediante mensaje electrónico remitido al emisor para que la factura se constituya en soporte de costos, deducciones e impuestos descontables.',
    wrong: [
      'El pago no suple la confirmación electrónica del recibido exigida por la norma.',
      '',
      'El CUFE y el código QR son requisitos de la factura, pero no reemplazan la confirmación del recibido en ventas a crédito.',
      'Sí pueden servir de soporte, pero solo si se cumple la confirmación electrónica del recibido.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.5.1.4.3 inc. 2 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-008',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Documento soporte en adquisiciones a no obligados',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un contribuyente no obligado a la generación electrónica del documento soporte compra un servicio a un sujeto no obligado a facturar y elabora el Documento Soporte en papel de forma manual. Ante una auditoría, el funcionario debe:',
    options: [
      'Exigir la transmisión electrónica del documento soporte dentro de los cinco días hábiles siguientes.',
      'Verificar que el documento soporte físico cumpla los requisitos del artículo 1.5.2.6.1 y que el contribuyente lo tenga a disposición.',
      'Tenerlo por no válido, porque el único medio de soporte es la factura electrónica de venta.',
      'Requerir que se reemplace por una factura electrónica de venta emitida por el proveedor.',
    ],
    correct: 1,
    justification:
      'El parágrafo del artículo 1.5.2.2.2 y el artículo 1.5.2.6.1 de la Resolución 000227 de 2025 permiten que los sujetos no obligados generen el documento soporte en forma física, siempre que cumpla los requisitos de la norma y permanezca a disposición de la autoridad cuando se requiera.',
    wrong: [
      'La transmisión electrónica no es obligatoria para los no obligados: pueden generarlo en físico.',
      '',
      'El documento soporte físico es válido para quienes no están obligados a su generación electrónica.',
      'No procede exigir la factura del proveedor: precisamente se trata de adquisiciones a sujetos no obligados a facturar.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Arts. 1.5.2.2.2 y 1.5.2.6.1 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-009',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'IVA descontable en adquisiciones a no residentes',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un contribuyente adquiere servicios de una persona o entidad no residente en Colombia, a quien no se le exige factura electrónica y le genera Documento Soporte. Para la procedencia del IVA descontable de esa operación, se requiere adicionalmente:',
    options: [
      'Que el documento soporte se genere en formato XML con el Código Único de Documento Soporte (CUDS).',
      'Acreditar que se practicó la respectiva retención en la fuente a título de IVA, conforme al artículo 437-2, numeral 3, del Estatuto Tributario.',
      'Que el no residente haya presentado la declaración de IVA de prestadores desde el exterior.',
      'Que la operación conste en escritura pública o documento equivalente.',
    ],
    correct: 1,
    justification:
      'El parágrafo 1, inciso 3, del artículo 1.5.2.6.1 de la Resolución 000227 de 2025 establece que, para la procedencia del IVA descontable en adquisiciones a no residentes, debe acreditarse adicionalmente la práctica de la retención en la fuente a título de IVA (art. 437-2, num. 3, del E.T.).',
    wrong: [
      'El formato XML con CUDS es un requisito de forma del documento, no el requisito adicional de fondo para el descuento.',
      '',
      'No existe esa condición: el requisito adicional es la acreditación de la retención en la fuente a título de IVA.',
      'La escritura pública no es un requisito previsto por la norma.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.5.2.6.1 par. 1 inc. 3 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-010',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Documento equivalente electrónico (P.O.S.)',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Un contribuyente presenta como soporte de costos e IVA descontable un tiquete de máquina registradora con sistema P.O.S. electrónico que solo contiene el NIT genérico 222222222222 y la leyenda "consumidor final". El funcionario debe:',
    options: [
      'Aceptarlo, porque el documento equivalente electrónico P.O.S. es soporte de costos y descontables.',
      'Rechazarlo, porque para servir de soporte debe identificar al adquirente con nombre o razón social y número de identificación.',
      'Requerir que se anule y se expida una factura electrónica de venta.',
      'Aceptarlo únicamente si el valor de la compra es inferior a 5 UVT.',
    ],
    correct: 1,
    justification:
      'El parágrafo del artículo 1.5.1.3.2.1 y el parágrafo 1 del artículo 1.5.1.3.2.4 de la Resolución 000227 de 2025 exigen que, para constituirse en soporte de costos, deducciones e impuestos descontables, el tiquete P.O.S. electrónico identifique al adquirente con nombre o razón social y número de identificación. Un NIT genérico no cumple esa exigencia.',
    wrong: [
      'El documento sirve como soporte solo si identifica plenamente al adquirente.',
      '',
      'La norma no exige reemplazarlo por factura: exige la identificación del adquirente; el rechazo como soporte es lo procedente.',
      'No existe un umbral en UVT que exonere el requisito de identificación.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-1». Arts. 1.5.1.3.2.1 par. y 1.5.1.3.2.4 par. 1 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-011',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Reducción de sanción por subsanación voluntaria',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'Un obligado a reportar información exógena no presentó a tiempo el Formato 1001 del año gravable 2024. Dos meses después del vencimiento presenta la información completa y la DIAN aún no ha proferido pliego de cargos. Para beneficiarse de la sanción reducida, el contribuyente debe:',
    options: [
      'Presentar la información y esperar el pliego de cargos para solicitar la reducción.',
      'Liquidar y pagar la sanción reducida, porque subsanar voluntariamente antes del pliego de cargos permite aplicar los artículos 651 y 640 del Estatuto Tributario.',
      'Pagar la sanción plena, porque la presentación extemporánea no admite gradualidad.',
      'Solicitar una condonación ante la Subdirección de Recaudo.',
    ],
    correct: 1,
    justification:
      'El artículo 1.3.11.1 de la Resolución 000227 de 2025 dispone que quien subsane voluntariamente los hechos, antes o después del pliego de cargos, podrá liquidar y pagar la sanción reducida en los términos de los artículos 651 y 640 del E.T. Subsanar antes del pliego maximiza la reducción.',
    wrong: [
      'No debe esperar el pliego: la reducción opera por subsanación voluntaria, y antes del pliego es más favorable.',
      '',
      'La gradualidad sí aplica a la presentación extemporánea de información exógena subsanada voluntariamente.',
      'La condonación no es un mecanismo previsto en la norma para este supuesto.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-1». Art. 1.3.11.1 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-012',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Abuso tributario: procedimiento',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Una sociedad realiza una serie de operaciones legalmente constituidas cuyo único resultado es extender un beneficio tributario a un tercero que de otra manera no lo habría obtenido, sin justificación económica aparente. Si la DIAN inicia el procedimiento por abuso tributario y lo comprueba, debe:',
    options: [
      'Anular de plano los negocios jurídicos celebrados.',
      'Recaracterizar o reconfigurar la operación, estableciendo los efectos tributarios que se hubieran generado.',
      'Imponer de inmediato la sanción por evasión, que es un hecho sancionable.',
      'Suspender la personería jurídica de la sociedad.',
    ],
    correct: 1,
    justification:
      'Los artículos 1.7.1.2.1 y 1.7.1.2.2 de la Resolución 000227 de 2025 facultan a la DIAN para desconocer los efectos fiscales del acto o negocio jurídico abusivo y establecer los efectos tributarios que se hubieran generado en la operación (recaracterización o reconfiguración), sin que ello equivalga automáticamente a una sanción por evasión.',
    wrong: [
      'La DIAN no anula los negocios: desconoce sus efectos fiscales y establece los efectos tributarios procedentes.',
      '',
      'El abuso no se castiga de inmediato como evasión: se reconfigura la operación; las sanciones proceden según las reglas propias.',
      'La suspensión de la personería jurídica no es una consecuencia prevista en el procedimiento de abuso.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-1». Arts. 1.7.1.2.1 y 1.7.1.2.2 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-013',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Emplazamiento especial por abuso',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Proferido el emplazamiento especial por abuso tributario, ¿cuál es el plazo del que dispone el contribuyente para formular objeciones y aportar pruebas?',
    options: [
      'Un (1) mes, contado desde la notificación del emplazamiento.',
      'Dos (2) meses, contados desde la notificación del emplazamiento.',
      'Tres (3) meses, contados a partir de la fecha de notificación del emplazamiento especial por abuso.',
      'Seis (6) meses, prorrogables por tres más a solicitud del contribuyente.',
    ],
    correct: 2,
    justification:
      'El artículo 1.7.1.4.4 de la Resolución 000227 de 2025 establece que la respuesta al emplazamiento especial por abuso debe presentarse dentro de los tres (3) meses contados a partir de la fecha de notificación del emplazamiento.',
    wrong: [
      'El plazo no es de un mes.',
      'El plazo no es de dos meses: es de tres meses.',
      '',
      'La norma no prevé prórrogas de ese tipo.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-1». Art. 1.7.1.4.4 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-014',
    indicator: 'i01',
    moduleId: 'm01',
    topic: 'Inscripción en el RUT por Cámara de Comercio',
    difficulty: 'basica',
    kind: 'interpretacion',
    statement:
      'Un empresario solicita la inscripción en el RUT a través del portal virtual de la Cámara de Comercio, con autenticación mediante Firma Electrónica. El funcionario de la Cámara le exige además fotocopia escaneada de su documento de identidad. ¿Es correcta esa exigencia?',
    options: [
      'Sí, porque la Cámara siempre debe verificar la identidad con copia del documento.',
      'No, porque en el trámite virtual con Firma Electrónica no se exige la presentación de originales o fotocopias del documento de identificación.',
      'Sí, pero solo cuando la Cámara no cuente con autenticación biométrica.',
      'No, porque la identidad la verifica exclusivamente la Registraduría Nacional.',
    ],
    correct: 1,
    justification:
      'El artículo 1.1.1.3, inciso 3, de la Resolución 000227 de 2025 dispone que cuando el trámite se realice de manera virtual no se exigirá la presentación de originales o fotocopias del documento de identificación, porque la autenticación se da a través de la Firma Electrónica.',
    wrong: [
      'La copia no es exigible en el trámite virtual: la autenticación la garantiza la Firma Electrónica.',
      '',
      'No hay una condición según el tipo de autenticación disponible: la regla es general para el trámite virtual.',
      'La verificación de identidad en el trámite corresponde al mecanismo de autenticación virtual, no a la Registraduría.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.1.1.3 inc. 3 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-015',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Devolución de IVA a turistas',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un ciudadano colombiano que también tiene nacionalidad española ingresa al país con su pasaporte español y solicita la devolución del IVA prevista para turistas extranjeros. La DIAN debe:',
    options: [
      'Aceptar la solicitud, porque ingresó con pasaporte extranjero y tiene estatus de turista.',
      'Rechazarla, porque los nacionales colombianos que ostenten doble nacionalidad no se consideran turistas extranjeros para este beneficio.',
      'Suspenderla hasta que presente certificado de Migración Colombia.',
      'Aceptarla únicamente si demuestra residencia fiscal en España.',
    ],
    correct: 1,
    justification:
      'El artículo 1.8.3.2.2.4, numeral 1, de la Resolución 000227 de 2025 establece que los nacionales colombianos que ostenten doble nacionalidad no se consideran turistas extranjeros y, por ende, no tienen derecho a la devolución del IVA prevista para turistas.',
    wrong: [
      'El ingreso con pasaporte extranjero no enerva la regla sobre doble nacionalidad.',
      '',
      'No procede suspensión: la norma niega directamente el derecho en este supuesto.',
      'La residencia fiscal en el exterior no cambia la regla: el criterio es la nacionalidad colombiana con doble nacionalidad.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.8.3.2.2.4 num. 1 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-016',
    indicator: 'i03',
    moduleId: 'm08',
    topic: 'Sanción por no actualización del RUT',
    difficulty: 'basica',
    kind: 'conceptual',
    statement:
      'Si un contribuyente omite actualizar la información de su actividad económica en el Registro Único Tributario (RUT), la sanción aplicable es:',
    options: [
      'La sanción por no enviar información del artículo 651 del Estatuto Tributario.',
      'La sanción por inexactitud del artículo 647 del Estatuto Tributario.',
      'La sanción de que trata el numeral 3 del artículo 658-3 del Estatuto Tributario.',
      'La sanción por extemporaneidad del artículo 641 del Estatuto Tributario.',
    ],
    correct: 2,
    justification:
      'El artículo 1.1.1.20 de la Resolución 000227 de 2025 dispone que la no actualización del RUT da lugar a la sanción de que trata el numeral 3 del artículo 658-3 del Estatuto Tributario.',
    wrong: [
      'El art. 651 sanciona el no suministro de información exógena, no la desactualización del RUT.',
      'La inexactitud sanciona declaraciones con datos falsos o incompletos, no el RUT.',
      '',
      'La extemporaneidad sanciona la presentación tardía de declaraciones o información, no la actualización del RUT.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.1.1.20 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-017',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Régimen SIMPLE y facturación electrónica',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Un contribuyente que YA estaba obligado a facturar electrónicamente opta por el Régimen Simple de Tributación y alega tener derecho a un plazo de dos meses para usar factura de talonario según las reglas del régimen. La DIAN debe:',
    options: [
      'Aceptar, porque las reglas del SIMPLE otorgan ese beneficio a todos sus contribuyentes.',
      'Rechazar, porque la facultad de usar factura de talonario por dos meses aplica solo a quienes no estaban obligados a facturar electrónicamente antes de optar por el régimen.',
      'Aceptar, siempre que el contribuyente se someta a las reglas del inconveniente tecnológico.',
      'Suspender su inscripción en el SIMPLE hasta que defina su sistema de facturación.',
    ],
    correct: 1,
    justification:
      'El artículo 1.5.1.1.2.2, inciso 3, de la Resolución 000227 de 2025 condiciona la factura de talonario en los casos de inconveniente tecnológico a que el contribuyente no estuviese obligado a facturar electrónicamente desde antes de optar por el régimen unificado.',
    wrong: [
      'El beneficio no es general: no aplica a quienes ya estaban obligados a la factura electrónica.',
      '',
      'El sometimiento a las reglas de inconveniente tecnológico no habilita a quien ya era obligado antes de optar por el SIMPLE.',
      'La norma no prevé la suspensión de la inscripción por ese motivo.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.5.1.1.2.2 inc. 3 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-018',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Obligación de facturar de profesionales liberales',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Un contador público, persona natural no responsable de IVA (no superó los umbrales), presta servicios profesionales y entrega a su cliente un documento de cobro informal. Frente a la obligación de expedir factura de venta o documento equivalente:',
    options: [
      'Está obligado, porque todas las personas que ejercen profesiones liberales deben expedir factura.',
      'No está obligado, si cumple la totalidad de las condiciones previstas en la norma para los no obligados (no responsable de IVA e ingresos inferiores a 3.500 UVT, entre otras).',
      'Está obligado únicamente si el cliente la solicita formalmente.',
      'Está obligado a expedir factura de talonario o de papel, no electrónica.',
    ],
    correct: 1,
    justification:
      'El artículo 1.5.1.1.3.4, numeral 3, de la Resolución 000227 de 2025 incluye entre los no obligados a expedir factura de venta y/o documento equivalente a las personas naturales no responsables de IVA que cumplan la totalidad de las condiciones de la norma (como no superar el umbral de 3.500 UVT). Si el contador las cumple, no está obligado.',
    wrong: [
      'El ejercicio de profesión liberal no genera obligación automática: depende de las condiciones de la norma.',
      '',
      'La obligación no depende de la solicitud del cliente sino de los criterios objetivos de la norma.',
      'Si opta por facturar, el medio es el electrónico; el talonario no es la regla general.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.5.1.1.3.4 num. 3 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-019',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Extracto bancario como documento soporte',
    difficulty: 'basica',
    kind: 'interpretacion',
    statement:
      'Una persona jurídica paga intereses por un crédito de consumo a un banco y recibe el extracto mensual. Para soportar el costo del interés pagado:',
    options: [
      'Debe exigir al banco una factura electrónica de venta por los servicios financieros.',
      'El extracto expedido por los bancos es un documento válido como soporte.',
      'Debe generar un Documento Soporte en adquisiciones a sujetos no obligados a facturar.',
      'Solo sirve si el extracto está firmado por el representante legal del banco.',
    ],
    correct: 1,
    justification:
      'El parágrafo 1 del artículo 1.5.2.6.1 de la Resolución 000227 de 2025 reconoce como documento válido el extracto expedido por los sujetos del numeral 1 del artículo 1.6.1.4.3 del Decreto 1625 de 2016 (bancos), sin que deba exigirse factura.',
    wrong: [
      'No se exige factura del banco: la norma reconoce expresamente el extracto.',
      '',
      'No procede generar Documento Soporte cuando la norma ya reconoce el extracto como soporte válido.',
      'La firma del representante legal no es un requisito previsto para el extracto.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.5.2.6.1 par. 1 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-020',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Inspección tributaria virtual',
    difficulty: 'intermedia',
    kind: 'caso',
    statement:
      'Durante una inspección tributaria virtual, al finalizar la diligencia el contribuyente informa que no puede firmar el acta digitalizada por una falla en su escáner. Para formalizar el acta, el funcionario debe:',
    options: [
      'Exigir la firma en físico al día siguiente, porque la firma virtual no es obligatoria.',
      'Remitir el acta en formato PDF firmada por el funcionario al correo del contribuyente, para que la devuelva firmada a más tardar al día siguiente hábil de su remisión.',
      'Dejar constancia de la negativa del contribuyente a firmar y proceder con la notificación.',
      'Suspender la diligencia hasta que el contribuyente repare su escáner.',
    ],
    correct: 1,
    justification:
      'El artículo 1.7.6.1, inciso 6, de la Resolución 000227 de 2025 dispone que si el contribuyente no puede firmar el acta, el funcionario la remite en PDF desde su buzón institucional debidamente firmada, para que el contribuyente la devuelva firmada (mecánica, digitalizada o escaneada) a más tardar al día siguiente hábil de su remisión.',
    wrong: [
      'No se exige firma física presencial: el mecanismo previsto es la devolución del PDF firmado.',
      '',
      'No es un caso de negativa: es una imposibilidad técnica, con mecanismo propio de formalización.',
      'La norma no prevé suspender la diligencia: prevé el envío del PDF para su devolución firmada.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.7.6.1 inc. 6 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-021',
    indicator: 'i10',
    moduleId: 'm06',
    topic: 'Negativa a suscribir el acta de inspección',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Si el contribuyente se niega a suscribir el acta de la inspección tributaria virtual, el efecto de su negativa es:',
    options: [
      'El acta pierde su valor probatorio y la DIAN debe repetir la diligencia en físico.',
      'Los funcionarios comisionados dejan constancia de la negativa, y tal omisión no afecta el valor probatorio del acta.',
      'El contribuyente queda incurso en sanción por obstrucción a la fiscalización.',
      'El acta se tiene por inexistente y debe repetirse la notificación.',
    ],
    correct: 1,
    justification:
      'El artículo 1.7.6.2, inciso final, de la Resolución 000227 de 2025 establece que si alguna de las partes se niega a suscribir el acta, los funcionarios deben dejar constancia de la negativa, y tal omisión no afectará el valor probatorio de la misma.',
    wrong: [
      'La negativa no destruye el valor probatorio: se deja constancia y el acta sigue siendo válida.',
      '',
      'La norma no impone sanción automática por la negativa: solo ordena dejar constancia.',
      'No se tiene por inexistente: conserva su valor probatorio con la constancia de la negativa.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.7.6.2 inc. final Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-022',
    indicator: 'i05',
    moduleId: 'm05',
    topic: 'Formulario 210 y herramienta "Usuario No Experto"',
    difficulty: 'basica',
    kind: 'interpretacion',
    statement:
      'Un contribuyente persona natural, no obligado a usar el IFE, diligenció el Formulario 210 (renta) con la herramienta "Usuario No Experto" y el sistema calculó erróneamente su impuesto. Ante la consulta sobre la responsabilidad por el error, el funcionario debe:',
    options: [
      'Asumir la responsabilidad de la DIAN, por tratarse de una herramienta suministrada por la entidad.',
      'Indicar que el uso de la herramienta es bajo la propia y exclusiva responsabilidad del contribuyente.',
      'Remitir el caso a la Dirección de Gestión de Innovación y Tecnología para que corrijan el software.',
      'Eximir al contribuyente del pago del impuesto calculado erróneamente.',
    ],
    correct: 1,
    justification:
      'El artículo 1.2.2.14 de la Resolución 000227 de 2025 establece que el uso de la herramienta tecnológica "Usuario No Experto" es libre, espontáneo y bajo la propia y exclusiva responsabilidad del contribuyente.',
    wrong: [
      'La norma atribuye expresamente la responsabilidad al contribuyente, no a la DIAN.',
      '',
      'No procede remitir a otra dependencia: la responsabilidad es del contribuyente.',
      'El error del cálculo no exime del impuesto correcto que resulte aplicable.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.2.2.14 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-023',
    indicator: 'i11',
    moduleId: 'm11',
    topic: 'Contratos de importación de tecnología',
    difficulty: 'avanzada',
    kind: 'caso',
    statement:
      'Una empresa presenta para registro un contrato de licencia de patente que contiene una cláusula que restringe el uso de la tecnología a la empresa licenciada después de la terminación del contrato. La DIAN debe:',
    options: [
      'Registrar el contrato, porque la DIAN solo registra su existencia, no su contenido.',
      'Notificar al solicitante que el contrato no será objeto de registro, por contener una cláusula prohibida.',
      'Solicitar la anulación de la cláusula y requerir la modificación del contrato en tres meses.',
      'Registrarlo con la condición de que la cláusula no produzca efectos en Colombia.',
    ],
    correct: 1,
    justification:
      'El parágrafo 2 del artículo 1.6.7.2 de la Resolución 000227 de 2025 dispone que los contratos de importación de tecnología que contengan las cláusulas de restricción o prohibición señaladas en el Decreto 259 de 1992 no serán objeto de registro.',
    wrong: [
      'El contenido sí se examina: las cláusulas prohibidas impiden el registro.',
      '',
      'La norma no prevé un plazo de modificación: la consecuencia es la negativa del registro.',
      'No existe el registro condicionado: la consecuencia es que el contrato no será objeto de registro.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.6.7.2 par. 2 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
  {
    id: 'q-t1-024',
    indicator: 'i09',
    moduleId: 'm04',
    topic: 'Vigencia del convenio con EOP (devolución IVA a turistas)',
    difficulty: 'avanzada',
    kind: 'conceptual',
    statement:
      'Respecto del convenio suscrito con la Empresa Operadora de Pagos (EOP) autorizada por la DIAN para la devolución del IVA a turistas extranjeros, su vigencia es de:',
    options: [
      'Un (1) año, prorrogable tácitamente.',
      'Dos (2) años, prorrogables por un año más.',
      'Tres (3) años, prorrogables hasta por otro período igual por decisión de la DIAN.',
      'Cinco (5) años, no prorrogables.',
    ],
    correct: 2,
    justification:
      'El artículo 1.8.3.2.8.4 de la Resolución 000227 de 2025 establece que la vigencia del convenio es de tres (3) años, prorrogables hasta máximo por otro período igual, por decisión de la DIAN.',
    wrong: [
      'La vigencia no es de un año ni de prórroga tácita.',
      'No es de dos años.',
      '',
      'No es de cinco años ni improrrogable.',
    ],
    source: 'Elaboración propia a partir del material de práctica «PRUEBAS-DE-CONOCIMIENTO-TRIBUTARIO-2». Art. 1.8.3.2.8.4 Res. 000227 de 2025. No es pregunta oficial de la DIAN ni de la CNSC.',
  },
]
