import type { ModuleDef } from '../types'

// ============================================================
// Módulo 4 — Obligaciones formales y sustanciales en materia
// tributaria. Indicador: i09.
// Fuente principal: TACI Curso Completo (Unidad 2: obligación
// sustancial y formal, determinación del tributo, sanción por
// no declarar, págs. 16-102) y Estatuto Tributario.
// Normas verificadas en fuentes oficiales el 2026-10-15;
// cuando no fue posible confirmar la vigencia se marca
// status 'verificar'.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm04',
  order: 4,
  title: 'Obligaciones formales y sustanciales en materia tributaria',
  description:
    'La obligación tributaria sustancial (concepto, nacimiento y elementos), las obligaciones formales que la acompañan (declarar, facturar, inscribirse en el RUT, informar, llevar contabilidad), los sujetos que las cumplen y responden por ellas, y las formas de determinación del tributo (privada, oficial y mixta).',
  indicators: ['i09'],
  lessons: [
    {
      id: 'm04-l01',
      moduleId: 'm04',
      title: 'La obligación tributaria sustancial: concepto, nacimiento y elementos',
      indicators: ['i09'],
      objectives: [
        'Definir la obligación tributaria sustancial y distinguirla de las obligaciones formales.',
        'Explicar el nacimiento de la obligación a partir del hecho generador y de la causación (art. 1 E.T.).',
        'Identificar los elementos de la obligación sustancial y su exigibilidad.',
        'Reconocer las formas de extinción de la obligación tributaria y su relación con el procedimiento.',
      ],
      sections: [
        {
          heading: 'Concepto de obligación tributaria sustancial',
          paragraphs: [
            'El artículo 1 del Estatuto Tributario define la obligación tributaria sustancial como el vínculo jurídico que se establece entre el Estado y el sujeto pasivo (contribuyente o responsable) con ocasión de la realización del hecho generador previsto en la ley, y cuyo objeto es el pago del tributo. Es una obligación ex lege: nace de la ley y no del acuerdo de voluntades, de manera que no puede ser creada, modificada ni extinguida por la sola voluntad de las partes.',
            'El material de formación la presenta con una fórmula que conviene retener: la obligación sustancial es el pago efectivo del tributo, y la obligación formal es la parte procedimental que permite al contribuyente cumplir con la obligación sustancial. Una empresa puede haber causado el impuesto (obligación sustancial) y a la vez estar obligada a presentar la declaración, expedir facturas y llevar contabilidad (obligaciones formales); son obligaciones distintas, con objetos distintos, y el incumplimiento de cualquiera de las dos genera sanciones.',
            'La obligación tributaria sustancial tiene carácter personal (se exige de un sujeto determinado), patrimonial (se satisface con el patrimonio del deudor) e indisponible (el sujeto activo no puede condonarla ni renunciar a ella por fuera de los casos que la ley señala).',
          ],
          callout: {
            type: 'norma',
            text: 'Artículo 1 del Estatuto Tributario: «La obligación tributaria sustancial se origina al realizarse el presupuesto o los presupuestos previstos en la ley como generadores del impuesto y ella tiene por objeto el pago del tributo».',
          },
        },
        {
          heading: 'Nacimiento de la obligación: hecho generador y causación',
          paragraphs: [
            'La obligación sustancial se origina al realizarse el presupuesto previsto en la ley como generador del impuesto. De ahí se desprenden dos momentos: el hecho generador, que es la descripción legal y abstracta del presupuesto, y la causación, que es la realización concreta de ese presupuesto en el mundo de los hechos.',
            'En el impuesto sobre la renta el hecho generador es la obtención de ingresos susceptibles de producir un incremento neto del patrimonio en el momento de su percepción (artículo 26 E.T.), y los ingresos se entienden realizados en el año o período gravable en que se causen, conforme a los artículos 27 y 28 del Estatuto Tributario. Para las personas que llevan contabilidad por el sistema de causación, los ingresos se realizan cuando nace el derecho a exigir el pago, aunque no se haya recibido el dinero.',
            'En el impuesto sobre las ventas la causación sigue reglas propias (artículo 429 E.T.): en las ventas, el impuesto se causa en la fecha de emisión de la factura o documento equivalente y, a falta de uno y otro, en la fecha de la entrega de la mercancía; en la prestación de servicios, en la fecha de emisión de la factura o documento equivalente, o en la fecha de terminación de los servicios, o en la fecha de pago o abono en cuenta, la que fuere anterior. En los juegos de suerte y azar el impuesto se causa en el momento del pago del valor de la apuesta.',
            'Distinguir hecho generador de causación tiene consecuencias prácticas: una operación puede haberse pactado en diciembre y causado en enero, y de ello depende el período gravable al que se imputa el impuesto.',
          ],
          table: {
            caption: 'Causación en los principales tributos (resumen)',
            headers: ['Tributo', 'Hecho generador', 'Momento de causación'],
            rows: [
              ['Renta', 'Obtención de ingresos susceptibles de incrementar el patrimonio', 'En el año o período gravable en que se realizan los ingresos (arts. 27 y 28 E.T.)'],
              ['IVA en ventas', 'Venta de bienes corporales muebles e inmuebles y demás hechos del art. 420 E.T.', 'Fecha de emisión de la factura o documento equivalente; en su defecto, fecha de entrega (art. 429 E.T.)'],
              ['IVA en servicios', 'Prestación de servicios gravados', 'Factura, terminación del servicio o pago o abono en cuenta, la que sea anterior (art. 429 E.T.)'],
              ['Impuesto nacional al consumo', 'Consumo de bienes o servicios señalados por la ley', 'Al momento de la venta o de la prestación del servicio al consumidor final'],
              ['Retención en la fuente', 'Pago o abono en cuenta de un concepto sujeto a retención', 'En el momento del pago o abono en cuenta (art. 368 y ss. E.T.)'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Hecho generador = la ley describe. Causación = el contribuyente realiza. Obligación sustancial = nace con la causación. Declaración = obligación formal para liquidar y pagar.',
          },
        },
        {
          heading: 'Elementos de la obligación sustancial',
          paragraphs: [
            'Los elementos de la obligación sustancial coinciden con los elementos del tributo: el sujeto activo (el Estado, que en los tributos nacionales actúa a través de la DIAN), el sujeto pasivo (contribuyente o responsable del pago), el hecho generador y la base gravable, que determinan la cuantía de la obligación, y la tarifa, que aplicada a la base arroja el monto del tributo.',
            'Sobre el sujeto pasivo, el artículo 2 del Estatuto Tributario precisa que son contribuyentes o responsables directos del pago del tributo los sujetos respecto de quienes se realiza el hecho generador de la obligación sustancial. El artículo 3 se ocupa de los responsables: sin perjuicio de las exenciones y de las disposiciones especiales, son responsables de los impuestos los que, sin tener el carácter de contribuyentes, deben cumplir por disposición expresa de la ley las obligaciones atribuidas a estos. Para el impuesto sobre las ventas, el numeral 4 del artículo 3 asimila las palabras contribuyente y responsable, y a falta de una y otra usa la expresión sujeto pasivo.',
            'La exigibilidad de la obligación se produce cuando vence el plazo legal para declarar y pagar. Antes de ese momento el sujeto pasivo debe cumplir obligaciones preparatorias (inscribirse en el RUT, facturar, informar), pero la administración no puede exigirle coactivamente el pago. Vencido el plazo y presentada la declaración, esta presta mérito ejecutivo (artículo 828 E.T.) y la DIAN puede cobrar el tributo con intereses de mora.',
          ],
          bullets: [
            'Sujeto activo: el Estado; en los tributos nacionales, la DIAN como administración tributaria.',
            'Sujeto pasivo: contribuyente (realiza el hecho generador) o responsable (la ley le atribuye el cumplimiento).',
            'Hecho generador: presupuesto legal que da origen al tributo.',
            'Base gravable: magnitud del hecho gravado a la que se aplica la tarifa.',
            'Tarifa: porcentaje o monto que aplicado a la base determina el impuesto.',
            'Período gravable: lapso en el que se realiza el hecho generador (en renta, anual).',
          ],
        },
        {
          heading: 'Exigibilidad y extinción de la obligación tributaria',
          paragraphs: [
            'La obligación sustancial se extingue por los modos que regula el Estatuto Tributario en el libro dedicado a la extinción de la obligación tributaria: el pago (y sus formas especiales, como el pago en exceso o de lo no debido), la compensación, la prescripción de la acción de cobro, la remisión y la pérdida de fuerza ejecutoria de los actos de determinación, entre otros.',
            'La prescripción de la acción de cobro se cuenta desde la fecha en que la obligación se hizo exigible (vencimiento del plazo para declarar y pagar) y se interrumpe con la notificación del mandamiento de pago y con la admisión del acuerdo de pago; el término y las causales de suspensión se desarrollan en los artículos 817 y siguientes del Estatuto Tributario.',
            'Es importante no confundir la prescripción de la acción de cobro con la firmeza de la declaración: la firmeza (artículo 714 E.T.) cierra la posibilidad de que la administración modifique la liquidación privada mediante actos de determinación; la prescripción de la acción de cobro limita la ejecución del título ejecutivo. Ambas operan en momentos y con finalidades distintas.',
          ],
          callout: {
            type: 'importante',
            text: 'La declaración tributaria, una vez presentada, es un acto del contribuyente que presta mérito ejecutivo (art. 828 E.T.) y es la base de la liquidación privada. De ahí la responsabilidad que asume quien la firma y la importancia de la exactitud de los datos.',
          },
          norm: {
            norm: 'Estatuto Tributario',
            article: 'arts. 1, 2 y 3; extinción de la obligación (arts. 817 y ss.); art. 828',
            status: 'vigente',
            note: 'Artículos verificados en la compilación del Estatuto Tributario (secretariasenado.gov.co) el 2026-10-15. Los artículos 1 a 3 no han sido modificados en su texto esencial.',
          },
        },
        {
          heading: 'La obligación sustancial en el régimen aduanero',
          paragraphs: [
            'En el régimen aduanero existe también una obligación sustancial con los mismos elementos: el hecho generador es la introducción de mercancías al territorio aduanero nacional, el sujeto activo es la DIAN, el sujeto pasivo es el importador o el declarante en calidad de deudor (y también el adquirente de mercancías que salen de San Andrés, Providencia y Santa Catalina o de zonas de régimen aduanero especial), y la base gravable es el valor en aduana de la mercancía.',
            'La obligación aduanera es más amplia que la tributaria aduanera: comprende los trámites aduaneros, el pago de los tributos aduaneros y de los intereses, tasas, recargos y sanciones, y las obligaciones derivadas de las actuaciones de la autoridad aduanera. Este paralelo explica por qué el estudio de la obligación sustancial en el módulo tributario sirve de base para los módulos aduaneros.',
          ],
        },
      ],
      summary: [
        'La obligación tributaria sustancial es el vínculo jurídico entre el Estado y el sujeto pasivo que nace al realizarse el hecho generador y tiene por objeto el pago del tributo (art. 1 E.T.).',
        'Es una obligación ex lege, personal, patrimonial e indisponible; se distingue de las obligaciones formales, que son instrumentales y procedimentales.',
        'Nace con la causación; en renta se realiza el ingreso en el año o período gravable (arts. 26 a 28 E.T.); en IVA se siguen las reglas del artículo 429 E.T.',
        'Sus elementos son los mismos del tributo: sujeto activo, sujeto pasivo, hecho generador, base gravable, tarifa y período gravable.',
        'El sujeto pasivo puede ser contribuyente (realiza el hecho generador) o responsable (la ley le atribuye el cumplimiento); en IVA la ley asimila ambos términos (numeral 4, art. 3 E.T.).',
        'La obligación se extingue por pago, compensación, prescripción, remisión y pérdida de fuerza ejecutoria; la declaración presta mérito ejecutivo (art. 828 E.T.).',
      ],
      memorize: [
        'Artículo 1 E.T.: la obligación sustancial se origina al realizarse el presupuesto legal y tiene por objeto el pago del tributo.',
        'Artículo 2 E.T.: contribuyentes o responsables directos son los sujetos respecto de quienes se realiza el hecho generador.',
        'Artículo 3 E.T.: responsables son quienes, sin ser contribuyentes, deben cumplir por mandato legal las obligaciones de estos; para IVA, contribuyente y responsable son sinónimos.',
        'Obligación sustancial = pagar; obligación formal = declarar, facturar, inscribirse, informar, llevar contabilidad.',
        'Artículo 429 E.T.: causación del IVA en servicios = factura, terminación o pago, la que sea anterior.',
      ],
      examples: [
        {
          heading: 'Ejemplo: la misma empresa frente a las dos obligaciones',
          paragraphs: [
            'Una sociedad presta servicios gravados con IVA en noviembre y expide la factura el 30 de noviembre. La obligación sustancial (pagar el IVA) nace con la causación, es decir, el 30 de noviembre. La obligación formal (presentar la declaración bimestral, haber facturado con todos los requisitos, estar inscrita en el RUT y reportar la información exógena) permite liquidar y controlar ese pago. Si la sociedad factura pero no declara, incumple la obligación formal y se expone a la sanción por no declarar; si declara pero no paga, incumple la obligación sustancial y se expone a intereses de mora y a la sanción por no pagar.',
          ],
        },
        {
          heading: 'Ejemplo: causación de la retención en la fuente',
          paragraphs: [
            'Una empresa paga honorarios el 12 de diciembre y practica la retención en la fuente el mismo día: la obligación sustancial del agente retenedor (entregar el dinero retenido al Estado) nace con el pago o abono en cuenta. La obligación formal (declarar mensualmente las retenciones, expedir el certificado de retención y presentarlo en enero del año siguiente) es independiente y también debe cumplirse.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que la obligación tributaria nace cuando se presenta la declaración.',
          correction: 'La obligación sustancial nace con la causación, es decir, cuando se realiza el hecho generador (art. 1 E.T.). La declaración es el acto formal con el que se cuantifica y se declara el tributo, pero no crea la obligación: la reconoce y la liquida.',
        },
        {
          mistake: 'Sostener que las obligaciones formales son accesorias y que solo importan si hay impuesto a pagar.',
          correction: 'Las obligaciones formales son autónomas: existen aunque el impuesto resulte en cero o haya saldo a favor (declaraciones de renta en cero o con pérdidas, declaraciones de IVA sin movimiento). Su incumplimiento genera sanciones propias, como la sanción por no declarar o la de información exógena.',
        },
        {
          mistake: 'Confundir la firmeza de la declaración con la prescripción de la acción de cobro.',
          correction: 'La firmeza (art. 714 E.T.) marca el límite temporal para que la administración modifique la liquidación privada; la prescripción de la acción de cobro limita la ejecución del título ejecutivo. Son instituciones distintas, con plazos y efectos distintos.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 1, 2 y 3',
          status: 'vigente',
          note: 'Definición de la obligación sustancial y de los sujetos pasivos. Verificado el 2026-10-15.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 26, 27, 28 y 429',
          status: 'vigente',
          note: 'Realización del ingreso y causación del IVA. Verificado en la compilación del Estatuto Tributario.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 817 y siguientes (extinción) y art. 828 (mérito ejecutivo)',
          status: 'verificar',
          note: 'La numeración de los artículos del libro de extinción de la obligación tributaria se reorganizó por reformas posteriores (Ley 1819 de 2016 y siguientes); confirme el artículo exacto antes de citarlo en una actuación.',
        },
        {
          norm: 'Decreto 1165 de 2019',
          article: 'obligación aduanera',
          status: 'modificada',
          note: 'Estatuto Aduanero, modificado por el Decreto 659 de 2024. Aplica a los tributos aduaneros.',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — compilación Secretaría del Senado', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'DIAN — Renta persona jurídica', url: 'https://www.dian.gov.co/impuestos/renta-personas-juridicas/Paginas/default.aspx' },
      ],
      mindmap: {
        root: 'Obligación sustancial',
        branches: [
          { label: 'Concepto', children: ['Vínculo Estado-sujeto pasivo', 'Art. 1 E.T.', 'Ex lege, personal, patrimonial'] },
          { label: 'Nacimiento', children: ['Hecho generador', 'Causación', 'Realización del ingreso'] },
          { label: 'Elementos', children: ['Sujeto activo', 'Sujeto pasivo', 'Base y tarifa'] },
          { label: 'Exigibilidad', children: ['Vencimiento del plazo', 'Mérito ejecutivo (art. 828)', 'Intereses de mora'] },
          { label: 'Extinción', children: ['Pago', 'Compensación', 'Prescripción', 'Remisión'] },
        ],
      },
      mindmapText:
        'La obligación tributaria sustancial es el vínculo jurídico entre el Estado y el sujeto pasivo que nace al realizarse el hecho generador y tiene por objeto el pago del tributo (art. 1 E.T.). Es una obligación ex lege, personal, patrimonial e indisponible, cuyos elementos coinciden con los del tributo. Se hace exigible al vencimiento del plazo legal y se extingue por pago, compensación, prescripción, remisión o pérdida de fuerza ejecutoria. Se distingue de las obligaciones formales porque estas últimas son instrumentales: existen para permitir el cumplimiento y el control de la obligación sustancial, y su incumplimiento genera sanciones propias.',
      source: [
        { doc: 'taci', pages: 'págs. 16-20 (obligación sustancial en el impuesto sobre la renta)' },
        { doc: 'taci', pages: 'págs. 63-65 (concepto de obligación formal y sustancial)' },
        { doc: 'taci', pages: 'págs. 169-170 (obligación sustancial en el régimen aduanero)' },
      ],
      activityId: 'm04-a01',
    },
    {
      id: 'm04-l02',
      moduleId: 'm04',
      title: 'Obligaciones formales: declarar, facturar, RUT, registros, información exógena y contabilidad',
      indicators: ['i09'],
      objectives: [
        'Enunciar y explicar las principales obligaciones formales de los contribuyentes y responsables.',
        'Describir el RUT como mecanismo único de identificación y las obligaciones de inscripción y actualización.',
        'Explicar la factura electrónica de venta, su validación por la DIAN y los documentos equivalentes.',
        'Identificar las obligaciones de informar (exógena), de llevar contabilidad y de conciliar fiscalmente, y sus sanciones.',
      ],
      sections: [
        {
          heading: 'Qué son las obligaciones formales y cuáles son',
          paragraphs: [
            'Las obligaciones formales son los deberes instrumentales que la ley impone a los sujetos pasivos y a terceros para permitir la determinación, el control y el pago de los tributos. El material de formación las describe como el conjunto de deberes formales a los que están obligados tanto las personas naturales como jurídicas, y precisa el criterio constitucional que las limita: los deberes formales no pueden desconocer los principios de proporcionalidad, razonabilidad y legalidad (Corte Constitucional, C-521 de 2019, entre otras).',
            'El artículo 571 del Estatuto Tributario y los que le siguen desarrollan el cumplimiento de los deberes formales: cuando se trata de sociedades, el cumplimiento debe hacerse a través de sus representantes legales, y cuando se trata de personas naturales, personalmente o por medio de sus representantes o apoderados. El incumplimiento de los deberes formales genera sanciones propias, previstas en los artículos 641 y siguientes del Estatuto Tributario.',
          ],
          bullets: [
            'Inscribirse y actualizar el Registro Único Tributario (RUT) y obtener el NIT.',
            'Expedir factura electrónica de venta con validación previa y los documentos equivalentes que la ley autoriza.',
            'Presentar las declaraciones tributarias (renta, IVA, retenciones, impuesto nacional al consumo, patrimonio, activos en el exterior, ingresos y patrimonio, precios de transferencia, entre otras) en los plazos y lugares señalados.',
            'Efectuar la retención en la fuente, consignarla y declararla (obligación del agente retenedor).',
            'Informar el estado de los activos y pasivos a 1 de enero de cada año, así como las operaciones y movimientos de sus cuentas (información exógena).',
            'Llevar contabilidad y preparar la conciliación fiscal conforme a las normas contables y fiscales.',
            'Registrar y conservar las operaciones del comercio exterior, incluidas la declaración anual de activos en el exterior y el registro de operaciones de no residentes, según los artículos 607, 631 y 631-1 del E.T.',
          ],
        },
        {
          heading: 'El Registro Único Tributario (RUT)',
          paragraphs: [
            'El Registro Único Tributario, administrado por la DIAN, constituye el mecanismo único para identificar, ubicar y clasificar a las personas y entidades que tengan la calidad de contribuyentes declarantes del impuesto sobre la renta y no contribuyentes declarantes de ingresos y patrimonio; los responsables del régimen común y simplificado del IVA; los agentes retenedores; los importadores, exportadores y demás usuarios aduaneros; y los demás sujetos de obligaciones administradas por la DIAN.',
            'La inscripción en el RUT se hace en los bancos y en las oficinas de la DIAN, y puede efectuarse de manera virtual con firma electrónica. El Número de Identificación Tributaria (NIT) es el que identifica al inscrito y se usa en todas las declaraciones, facturas y actuaciones. La inscripción debe actualizarse cuando cambien los datos de identificación, la dirección, la actividad económica o la responsabilidad tributaria; la falta de actualización impide expedir facturas con el nuevo régimen y puede generar sanciones y la suspensión de la actividad.',
            'El control de la obligación de inscribirse en el RUT es una función de las áreas de fiscalización y de servicio al ciudadano de la DIAN, que revisan que los obligados estén inscritos y que los datos correspondan a la realidad económica del administrado.',
          ],
          callout: {
            type: 'norma',
            text: 'Estatuto Tributario, art. 555-2: el RUT es el mecanismo único para identificar, ubicar y clasificar a los sujetos de obligaciones administradas por la DIAN. Su reglamentación está, entre otras, en el Decreto 1625 de 2016 (DUR) y en las resoluciones de estructura del registro.',
          },
        },
        {
          heading: 'La facturación: factura electrónica de venta y documentos equivalentes',
          paragraphs: [
            'El artículo 615 del Estatuto Tributario impone a quienes tengan la calidad de comerciantes y a quienes ejerzan profesiones liberales u ofrezcan servicios gravar la obligación de expedir factura con el lleno de los requisitos formales. La Ley 1943 de 2018 y la Ley 2010 de 2019 generalizaron la factura electrónica de venta: hoy la factura se expide en formato electrónico, con validación previa de la DIAN, y se entiende expedida cuando es validada y entregada al adquirente.',
            'El material de formación resume el régimen así: quienes tengan la obligación de facturar electrónicamente deben hacerlo con validación previa, con los requisitos de los artículos 617 y 618 del E.T. y del artículo 616-1; por inconvenientes tecnológicos que no permitan el cumplimiento del deber, el obligado puede expedir la factura por talonario o en formato papel, siempre que autorice el sistema de facturación y acceda a los servicios informáticos; los parámetros y requisitos específicos están en las resoluciones de facturación de la DIAN (Resolución 000165 de 2023, compilada en la Resolución Única 000227 de 2025).',
            'En la factura de venta y en los demás documentos equivalentes deben identificarse: el nombre o razón social y el NIT del vendedor, el nombre o razón social y el NIT o identificación del adquiriente, la fecha, la descripción de los bienes y servicios, el valor total y los demás requisitos de los artículos 617 y 618 del E.T. Los documentos equivalentes a la factura son los que la ley o el reglamento autorizan (por ejemplo, el tiquete de máquina registradora con sus requisitos, la factura de importación o los documentos de las empresas de transporte).',
          ],
          bullets: [
            'Factura electrónica de venta: se expide y se valida previamente ante la DIAN; se entiende expedida cuando es validada y entregada al adquirente.',
            'Excepción por inconvenientes tecnológicos: se permite facturar por talonario o formato papel, con las condiciones de la ley y de la DIAN.',
            'La factura de venta se debe conservar mientras la obligación tributaria no esté prescrita (art. 632 E.T.), y su pérdida se sanciona (art. 434 C.P. y art. 655 E.T.).',
            'Quienes no están obligados a facturar por volumen de ingresos o calidad de la operación deben expedir documentos equivalentes.',
            'La factura electrónica es, además, el insumo del sistema de información que usa la DIAN para la fiscalización masiva y para la información exógena.',
          ],
          callout: {
            type: 'importante',
            text: 'Regla de oro: si un contribuyente vende bienes o presta servicios y no expide factura o documento equivalente, incurre en el desconocimiento de costos y deducciones para efectos fiscales, además de las sanciones formales. La factura es requisito para la procedencia de costos, deducciones e impuestos descontables.',
          },
        },
        {
          heading: 'Las declaraciones tributarias y sus plazos',
          paragraphs: [
            'Las declaraciones tributarias son documentos públicos que se consideran testimonios escritos en los procesos de fiscalización, y en ellas el contribuyente autoliquida el tributo. Según su forma de presentación, pueden ser anuales (renta, ganancias ocasionales, activos en el exterior, ingresos y patrimonio), bimestrales (IVA e impuesto nacional al consumo), cuatrimestrales (IVA para algunos responsables), mensuales (retención en la fuente) y por evento (impuestos denunciables, loterías, vehículos).',
            'El material de formación enumera las principales declaraciones administradas por la DIAN: el impuesto sobre la renta y complementarios y el impuesto sobre la renta para la equidad del orden municipal (cuando la ley lo permita), el impuesto sobre las ventas, las retenciones en la fuente, el ingreso y patrimonio de las entidades no contribuyentes, el impuesto al patrimonio, los activos en el exterior, el impuesto nacional al consumo, el impuesto nacional a la gasolina y al ACPM, el impuesto sobre las ventas en juegos de suerte y azar, el gravamen a los movimientos financieros, la declaración de estudios de precios de transferencia, y las declaraciones de los sujetos del régimen simple de tributación.',
            'Los plazos y lugares para declarar son los que señala el Gobierno nacional mediante decreto reglamentario, y las declaraciones deben presentarse por los medios informáticos que dispone la DIAN (Servicios Informáticos Electrónicos). El incumplimiento del deber de declarar genera la sanción por no declarar del artículo 643 E.T. y el procedimiento de emplazamiento previo (artículos 715 y siguientes E.T.).',
          ],
          norm: {
            norm: 'Estatuto Tributario',
            article: 'arts. 591 y ss. (obligación de declarar), 602 y ss. (declaraciones), 643 (sanción por no declarar)',
            status: 'vigente',
            note: 'Verificado el 2026-10-15. Los plazos anuales se fijan en el decreto que reglamenta el período de declaración de cada año gravable (para 2025 y 2026 consulte el decreto de plazos vigente).',
          },
        },
        {
          heading: 'La información exógena',
          paragraphs: [
            'La información exógena es el conjunto de datos sobre las operaciones de los contribuyentes que reportan terceros, agentes retenedores y entidades obligadas a enviar información, para que la DIAN pueda cruzar los datos declarados con la realidad económica. El material de formación la define como las obligaciones de reportar información de carácter exógeno y relaciona los formatos principales: el 1001 (pagos y abonos en cuenta y retenciones), el 1007 (ingresos recibidos), el 1009 (cuentas corrientes y de ahorro), el 1010 (socios y accionistas), el 1019 (rentas de trabajo), el 1020 (rentas de pensiones), el 1023 (declaraciones de renta), el 1024 y el 1026, los formatos 1034 a 1036, el 1159, el 2276 y el 2279.',
            'El deber de informar se concreta en las resoluciones que el Director General de la DIAN expide cada año, en las que se fijan los sujetos obligados, los formatos y las especificaciones técnicas. El incumplimiento, la presentación incompleta o la presentación extemporánea genera la sanción por no enviar información del artículo 651 E.T., que se reduce al 5 por ciento si se presenta antes del emplazamiento.',
            'La información exógena es la base del sistema de gestión de riesgo de la DIAN: a través de cruces entre las declaraciones de IVA, renta y retención se detectan omisiones de ingresos, deducciones improcedentes y uso de facturas falsas.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Exógena = información que reportan terceros sobre operaciones de un contribuyente. Formato 1001: pagos y abonos en cuenta y retenciones practicadas; formato 1007: ingresos recibidos; formato 1010: socios y accionistas.',
          },
        },
        {
          heading: 'Contabilidad, libros y soportes',
          paragraphs: [
            'El artículo 19 del Código de Comercio obliga a todos los comerciantes a llevar contabilidad. Para efectos fiscales, el material de formación advierte que la contabilidad es una obligación que en la actualidad comporta la aplicación de las normas de contabilidad emitidas por el Estado (Ley 1314 de 2009 y Normas de Información Financiera-NIF), con grupos diferenciados: el Grupo 1 (NIF plenas) para entidades de interés público y empresas de mayor tamaño, el Grupo 2 (NIF para pymes) y el Grupo 3 (microempresas).',
            'La contabilidad es también un medio de prueba (artículos 772, 773 y 774 E.T.): las afirmaciones contenidas en los libros de contabilidad y en los estados financieros son prueba a favor del contribuyente cuando cumplen los requisitos legales y se hayan llevado en debida forma; cuando no es así, la administración puede desconocer la prueba y liquidar sobre las cifras que determine. El artículo 655 E.T. sanciona la irregularidad en la contabilidad.',
            'Como obligación formal específica, los contribuyentes del impuesto sobre la renta y complementarios obligados a llevar contabilidad deben presentar la conciliación fiscal, que es un documento que explica las diferencias entre las cifras contables (NIF) y las cifras fiscales. La Ley 1943 de 2018 precisó que solo deben presentarla por los servicios informáticos electrónicos los contribuyentes con ingresos brutos iguales o superiores a 45.000 UVT, y que la administración puede solicitar la conciliación con la declaración y hacerla obligatoria por resolución.',
          ],
          bullets: [
            'Libros de contabilidad conforme a los marcos técnicos normativos vigentes (NIF plenas, pymes o microempresas).',
            'Conservación de soportes, comprobantes y facturas (art. 632 E.T.: mientras la obligación no esté prescrita).',
            'Conciliación fiscal: obligatoria por servicios informáticos electrónicos a partir de 45.000 UVT de ingresos brutos.',
            'La contabilidad solo prueba a favor cuando está llevada en debida forma y no tiene irregularidades.',
            'Sanción por irregularidad en la contabilidad: hasta el 5 por ciento del valor total de las operaciones, según el art. 655 E.T.',
          ],
          norm: {
            norm: 'Ley 1314 de 2009',
            article: 'marcos técnicos normativos',
            status: 'vigente',
            note: 'Convergencia hacia normas internacionales de contabilidad; determina los tres grupos de preparadores.',
          },
        },
        {
          heading: 'Otras obligaciones formales: bancarización y medios de pago',
          paragraphs: [
            'El artículo 771-5 del Estatuto Tributario establece los medios de pago para efectos fiscales: los contribuyentes deben utilizar canales financieros para el pago de sus operaciones, con un límite de pagos en efectivo que se ha venido reduciendo gradualmente por la ley. El reconocimiento fiscal de costos, deducciones, pasivos e impuestos descontables exige que el pago o abono en cuenta se haya efectuado por los medios previstos en la ley.',
            'El material de formación recuerda los criterios que la DIAN ha profesionalizado (Concepto 2136 de 2018): el límite es por el sujeto que las recibe, dentro de un año gravable, y no por el sujeto que las paga; para 2019 y siguientes los pagos individuales en efectivo que excedan las 100 UVT no son fiscalmente aceptados.',
          ],
          callout: {
            type: 'aviso',
            text: 'Las cifras de la información exógena (cuantías mínimas, UVT, formatos) cambian cada año por resolución de la DIAN. El material de formación es de 2022: verifique siempre la resolución del año que declara.',
          },
        },
      ],
      summary: [
        'Las obligaciones formales son deberes instrumentales (declarar, facturar, inscribirse, informar, llevar contabilidad) que permiten determinar, controlar y pagar el tributo.',
        'El RUT es el mecanismo único de identificación de los sujetos de obligaciones administradas por la DIAN (art. 555-2 E.T.); el NIT identifica al inscrito.',
        'La factura electrónica de venta con validación previa de la DIAN es la regla general (arts. 615, 616-1, 617 y 618 E.T.); la factura por talonario es la excepción por inconvenientes tecnológicos.',
        'Las declaraciones tributarias autoliquidan el tributo; sus plazos y lugares los fija el decreto de plazos, y su omisión genera la sanción por no declarar (art. 643 E.T.).',
        'La información exógena es reportada por terceros (formato 1001 y siguientes) y su incumplimiento se sanciona con el artículo 651 E.T.',
        'La contabilidad debe seguir los marcos técnicos NIF y sirve de medio de prueba; la conciliación fiscal es obligatoria por servicios informáticos a partir de 45.000 UVT de ingresos brutos.',
        'La bancarización (art. 771-5 E.T.) condiciona el reconocimiento fiscal de costos y deducciones y limita los pagos en efectivo.',
      ],
      memorize: [
        'Deberes formales: RUT, factura, declaraciones, retenciones, exógena, contabilidad, conciliación fiscal, activos en el exterior.',
        'RUT: art. 555-2 E.T.; lo administra la DIAN; mecanismo único para identificar, ubicar y clasificar.',
        'Factura electrónica: arts. 615, 616-1, 617 y 618 E.T.; Resolución DIAN 000165 de 2023 (compilada en la Resolución Única 000227 de 2025).',
        'Exógena: Resolución del Director General de la DIAN, expedida cada año (sujetos obligados, formatos y especificaciones técnicas).',
        'Conciliación fiscal: obligatoria por servicios informáticos desde 45.000 UVT de ingresos brutos (contribuyentes obligados a llevar contabilidad).',
        'Bancarización: art. 771-5 E.T.; el límite de efectivo se calcula por el sujeto que recibe los pagos.',
      ],
      examples: [
        {
          heading: 'Ejemplo: incumplimiento de la obligación formal frente al sustancial',
          paragraphs: [
            'Una empresa causó el IVA del bimestre y lo incluyó correctamente, pero presentó la declaración 40 días después del vencimiento. Cumplió la obligación sustancial en su cuantía, pero incumplió la obligación formal de declarar oportunamente: la DIAN aplica la sanción por extemporaneidad del artículo 641 E.T. (que puede reducirse conforme a los artículos 640 y 642 si se paga antes de la liquidación oficial), sin perjuicio de los intereses de mora.',
            'Otra empresa no expidió factura electrónica por tres meses y vendió a una empresa que rechazó el costo: el comprador pierde la deducción por falta de factura y el vendedor responde por la sanción por no facturar del artículo 652-1 E.T. (para la emisión sin requisitos legales la sanción es la del artículo 652 E.T.).',
          ],
        },
        {
          heading: 'Ejemplo: cruce de información exógena',
          paragraphs: [
            'Un profesional independiente declara ingresos por 60 millones, pero el formato 1001 reportado por sus clientes como pagadores suma 95 millones. La DIAN detecta la diferencia por cruce de exógena, expide un requerimiento especial y, si el contribuyente no corrige, determina la renta por liquidación oficial de revisión con sanción por inexactitud.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que la facturación por talonario sigue siendo la regla general.',
          correction: 'La regla general hoy es la factura electrónica de venta con validación previa de la DIAN. La factura por talonario o en papel es la excepción por inconvenientes tecnológicos, con las condiciones que señalan la ley y las resoluciones de la DIAN.',
        },
        {
          mistake: 'Pensar que solo los obligados a presentar declaración deben inscribirse en el RUT.',
          correction: 'La inscripción en el RUT cobija a los contribuyentes declarantes y no contribuyentes declarantes de ingresos y patrimonio, a los responsables de IVA, a los agentes retenedores, a los importadores, exportadores y usuarios aduaneros, y a los demás sujetos de obligaciones administradas por la DIAN.',
        },
        {
          mistake: 'Sostener que la conciliación fiscal la deben presentar todos los contribuyentes por servicios informáticos.',
          correction: 'La obligación de presentar la conciliación fiscal por servicios informáticos electrónicos aplica a los contribuyentes obligados a llevar contabilidad con ingresos brutos iguales o superiores a 45.000 UVT; los demás pueden ser requeridos por la administración.',
        },
        {
          mistake: 'Suponer que pagar en efectivo siempre es válido fiscalmente.',
          correction: 'El artículo 771-5 E.T. condiciona el reconocimiento fiscal de costos, deducciones, pasivos e impuestos descontables al uso de los medios de pago previstos; los pagos individuales en efectivo que superan el límite (100 UVT en el material) no son aceptados fiscalmente.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 571 a 573 (deberes formales)',
          status: 'vigente',
          note: 'Cumplimiento de los deberes formales por representantes legales y responsabilidad subsidiaria; concepto DIAN 1098 de 2022. Verificado el 2026-10-15.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'art. 555-2 (RUT)',
          status: 'verificar',
          note: 'No fue posible verificar el texto íntegro del artículo en fuente oficial durante esta revisión; la reglamentación operativa (Decreto 1625 de 2016, DUR, y resoluciones de la DIAN) está confirmada. Confirme el texto del art. 555-2 antes de citarlo textualmente.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 615, 616-1, 617, 618 (facturación)',
          status: 'modificada',
          note: 'Modificados por las Leyes 1943 de 2018, 2010 de 2019 y 2155 de 2021. La reglamentación de la factura electrónica está en la Resolución DIAN 000165 de 2023, compilada en la Resolución Única 000227 de 2025.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'art. 771-5 (bancarización)',
          status: 'vigente',
          note: 'Medios de pago para efectos fiscales; la gradualidad del límite de efectivo está prevista por la propia norma. Verificado el 2026-10-15.',
        },
        {
          norm: 'Ley 1314 de 2009',
          status: 'vigente',
          note: 'Marcos técnicos normativos de contabilidad (NIF): grupos 1, 2 y 3.',
        },
        {
          norm: 'Resolución DIAN 000165 de 2023 (y Resolución Única 000227 de 2025)',
          status: 'modificada',
          note: 'Reglamentación de la factura electrónica de venta; compilada y sustituida por las resoluciones de facturación y de información exógena posteriores. Verifique la resolución vigente del año que declara.',
        },
      ],
      links: [
        { label: 'DIAN — Factura electrónica', url: 'https://www.dian.gov.co/factura-electronica/Paginas/default.aspx' },
        { label: 'DIAN — RUT', url: 'https://www.dian.gov.co/impuestos/Paginas/RUT.aspx' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
      ],
      mindmap: {
        root: 'Obligaciones formales',
        branches: [
          { label: 'Identificación', children: ['RUT (art. 555-2 E.T.)', 'NIT', 'Inscripción y actualización'] },
          { label: 'Facturación', children: ['Factura electrónica de venta', 'Validación previa DIAN', 'Documentos equivalentes', 'Excepción por fallas tecnológicas'] },
          { label: 'Declarar', children: ['Renta, IVA, INC', 'Retenciones', 'Activos en el exterior', 'Régimen simple'] },
          { label: 'Informar', children: ['Exógena (1001, 1007, 1010...)', 'Resolución anual', 'Sanción art. 651 E.T.'] },
          { label: 'Registrar', children: ['Contabilidad NIF', 'Conciliación fiscal', 'Libros y soportes', 'Bancarización'] },
        ],
      },
      mindmapText:
        'Las obligaciones formales son los deberes instrumentales que rodean la obligación sustancial: inscribirse y actualizar el RUT, expedir factura electrónica de venta con validación previa, presentar las declaraciones tributarias en los plazos que fija el decreto de plazos, practicar y declarar la retención en la fuente, reportar información exógena en los formatos que establece la resolución anual del Director General, llevar contabilidad conforme a los marcos técnicos NIF y presentar la conciliación fiscal, y cumplir las reglas de bancarización. Su incumplimiento no se excusa por no tener impuesto a pagar: genera sanciones autónomas (extemporaneidad, no declarar, no facturar, no enviar información, irregularidad contable).',
      source: [
        { doc: 'taci', pages: 'págs. 63-80 (obligaciones formales: RUT, factura, exógena, contabilidad, conciliación fiscal)' },
        { doc: 'taci', pages: 'págs. 52-62 (declaración del impuesto sobre las ventas y sanciones asociadas)' },
      ],
      activityId: 'm04-a02',
    },
    {
      id: 'm04-l03',
      moduleId: 'm04',
      title: 'Sujetos de la obligación tributaria: contribuyente, responsable, agente retenedor y sucesores',
      indicators: ['i09'],
      objectives: [
        'Distinguir al contribuyente del responsable y ubicar las figuras del agente de retención y del autorretenedor.',
        'Explicar las obligaciones y la responsabilidad del agente retenedor frente al Estado y frente al contribuyente.',
        'Identificar los representantes legales y los casos de responsabilidad subsidiaria (arts. 571 a 573 E.T.).',
        'Reconocer los supuestos de solidaridad y de sucesión en las obligaciones tributarias (arts. 793 a 795-1 E.T.).',
      ],
      sections: [
        {
          heading: 'Contribuyente y responsable',
          paragraphs: [
            'El sujeto pasivo de la obligación tributaria puede ser contribuyente o responsable. El artículo 2 del Estatuto Tributario define como contribuyentes o responsables directos del pago del tributo a los sujetos respecto de quienes se realiza el hecho generador de la obligación sustancial. El artículo 3, por su parte, señala que son responsables de los impuestos los que, sin tener el carácter de contribuyente, deben cumplir por disposición expresa de la ley las obligaciones atribuidas a estos.',
            'La distinción es útil sobre todo en los impuestos indirectos. El IVA es el ejemplo clásico: el consumidor final soporta el impuesto (sujeto pasivo económico), pero quien está obligado a declararlo y pagarlo es el responsable (comerciante, importador o prestador del servicio). El numeral 4 del artículo 3 del E.T. resuelve la terminología: para el impuesto sobre las ventas, las expresiones contribuyente y responsable se consideran sinónimas y, a falta de una y otra, se usa la expresión sujeto pasivo.',
            'Los responsables pueden ser responsables directos (los que realizan el hecho generador y además deben declarar y pagar) o responsables del recaudo (los agentes de retención y percepción, que no generan el impuesto pero están obligados a recaudarlo por cuenta del Estado).',
          ],
          table: {
            caption: 'Figuras del sujeto pasivo',
            headers: ['Figura', 'Definición', 'Ejemplo', 'Obligaciones principales'],
            rows: [
              ['Contribuyente', 'Sujeto respecto del cual se realiza el hecho generador (art. 2 E.T.)', 'Persona natural asalariada en renta; sociedad que vende bienes gravados con IVA', 'Declarar y pagar el tributo; cumplir deberes formales'],
              ['Responsable (art. 3 E.T.)', 'Quien sin ser contribuyente debe cumplir por mandato legal las obligaciones de este', 'Responsable del IVA por la venta de bienes de terceros; responsable de IVA en importación', 'Declarar y pagar; facturar; responder por el impuesto'],
              ['Agente de retención', 'Quien por mandato legal recauda el impuesto al pagar o abonar en cuenta (art. 368 E.T.)', 'Sociedades, entidades públicas, notarios y demás señalados por el decreto y la ley', 'Retener, declarar, pagar, certificar, informar; responder por lo no retenido'],
              ['Autorretenedor', 'Responsable obligado a practicarse la retención a sí mismo', 'Contribuyentes señalados por decreto y por el art. 114-1 E.T.', 'Autorretener, declarar y pagar; certificar según el caso'],
              ['Sucesor', 'Quien responde por las obligaciones del causante o de la entidad disuelta', 'Herederos y legatarios; sociedad absorbente en una fusión', 'Responder por los tributos del antecesor hasta concurrencia de su participación'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Contribuyente = se realiza el hecho generador en su cabeza (art. 2 E.T.). Responsable = la ley le atribuye cumplir obligaciones de aquel (art. 3 E.T.). En IVA son sinónimos (numeral 4, art. 3 E.T.).',
          },
        },
        {
          heading: 'El agente retenedor: obligaciones y responsabilidad',
          paragraphs: [
            'El artículo 368 del Estatuto Tributario define la obligación de retener: los sujetos que realicen pagos o abonos en cuenta sujetos a retención deberán recaudar el impuesto en el momento del pago o abono. Ese recaudo es una obligación propia del agente y no un simple encargo: el agente responde directa y solidariamente por el valor dejado de retener o retenido sin consignar.',
            'El material de formación enumera las obligaciones del agente retenedor: (i) efectuar y declarar los valores retenidos (declaración mensual de retenciones en la fuente, formulario 350); (ii) pagar los valores retenidos y declarados (formulario 490); (iii) expedir los certificados por las retenciones practicadas; (iv) inscribirse en el RUT; (v) suministrar la información exógena de las retenciones; y (vi) responder directa y solidariamente por los valores dejados de retener o retenidos sin consignar (art. 370 E.T.), con los intereses de mora (arts. 634 y ss. E.T.) y las sanciones que correspondan; si retuvo y no consignó, afronta además la responsabilidad penal por omisión del agente retenedor (art. 402 del Código Penal, que recogió el contenido del art. 665 E.T.).',
            'La responsabilidad del agente es sustancial: aunque no haya retenido, la ley lo obliga a pagar el valor que debió retener (artículo 370 E.T.). Cuando el agente no retiene, el contribuyente sigue obligado a declarar el ingreso; pero el Estado cobra al agente lo dejado de retener y le exige los intereses correspondientes.',
          ],
          norm: {
            norm: 'Estatuto Tributario',
            article: 'arts. 368, 370, 371, 372 y ss.',
            status: 'vigente',
            note: 'Obligación de retener y responsabilidad del agente retenedor. Verificado el 2026-10-15.',
          },
        },
        {
          heading: 'Representantes legales y responsabilidad subsidiaria de administradores',
          paragraphs: [
            'El artículo 571 del Estatuto Tributario establece que el cumplimiento de los deberes formales debe hacerse personalmente por los contribuyentes o responsables. En el caso de las sociedades y demás entidades, el cumplimiento corresponde a los representantes legales, quienes responden por el cumplimiento de las obligaciones formales y sustanciales de la entidad.',
            'El artículo 572 del E.T. precisa que para los efectos de la responsabilidad tributaria se consideran representantes legales los gerentes, administradores, síndicos, revisores fiscales y las demás personas que ocupen los primeros cargos de dirección en las personas jurídicas. El artículo 572-1 extiende consecuencias a los apoderados generales y a los mandatarios especiales que administren o dispongan de los bienes de la sociedad, que comprometen su responsabilidad cuando dejan de cumplir las obligaciones tributarias.',
            'El artículo 573 del E.T. establece la responsabilidad subsidiaria de los socios, copartícipes, asociados, cooperados, comuneros y consorciados por los impuestos de las sociedades y entidades de que sean socios, cuando por cualquier causa se liquiden o terminen de manera irregular. También son responsables subsidiarios los representantes legales de las sociedades que sirvan como fachada o para el desarrollo de la actividad evasiva.',
            'La diferencia práctica entre responsabilidad solidaria y subsidiaria está en el beneficio de excusión: el responsable subsidiario solo puede ser cobrado cuando se haya agotado la persecución del deudor principal (y en algunos casos solo hasta el límite de su aporte o participación); el responsable solidario responde sin ese beneficio y la administración puede cobrarle desde el principio.',
          ],
          callout: {
            type: 'importante',
            text: 'Regla: cumplimiento de deberes formales = personal del contribuyente o responsable; en sociedades, del representante legal (art. 571 E.T.). Responsabilidad subsidiaria = socios y administradores en los casos del art. 573 E.T.',
          },
        },
        {
          heading: 'Sucesores y solidaridad en la obligación tributaria',
          paragraphs: [
            'El artículo 793 del Estatuto Tributario lista los casos de solidaridad: (i) los herederos y legatarios del causante, por las obligaciones del causante; (ii) los socios, copartícipes, asociados, cooperados, comuneros y consorciados, por los impuestos de la sociedad o entidad a que pertenezcan, cuando la entidad o sociedad se esté liquidando o haya sido liquidada irregularmente; (iii) los socios de sociedades disueltas, hasta concurrencia de su participación en el capital, por los impuestos, sanciones e intereses causados; (iv) los terceros que, por cualquier motivo, hayan sido dueños, poseedores o tenedores de bienes; (v) los tenedores de bienes en el negocio de enajenación a cualquier título, y (vi) los socios, copartícipes, asociados, cooperados y comuneros, por los impuestos de las sociedades o entidades extranjeras de que sean socios.',
            'El artículo 794 del E.T. precisa que los socios de sociedades disueltas y liquidadas responden solidariamente por los impuestos, sanciones e intereses causados por la sociedad hasta el monto de la distribución recibida, sin perjuicio de la responsabilidad frente a la sociedad. La solidaridad no se presume: solo existe en los casos expresamente señalados por la ley.',
            'El artículo 795 del E.T. establece la responsabilidad directa y solidaria de los socios, copartícipes, asociados, cooperados y comuneros por los impuestos, anticipos, sanciones e intereses de las entidades no contribuyentes que hayan sido utilizadas por ellos para evadir impuestos; el procedimiento se desarrolla en el artículo 795-1, que la Corte Constitucional precisó que solo aplica a la solidaridad del artículo 795, no a las obligaciones propias del artículo 793.',
          ],
          bullets: [
            'Herederos y legatarios: responden por las obligaciones del causante hasta el límite de su participación en la herencia.',
            'Socios de sociedades liquidadas o disueltas irregularmente: responsabilidad solidaria hasta el monto de la distribución recibida.',
            'Terceros dueños, poseedores o tenedores de bienes: solidaridad por los impuestos que graviten sobre esos bienes (por ejemplo, predial y su relación con la solidaridad tributaria).',
            'Entidades no contribuyentes utilizadas para evadir: responsabilidad directa y solidaria de sus socios (arts. 795 y 795-1 E.T.).',
            'Adquirentes de bienes en negocios de enajenación: la responsabilidad se rige por las reglas de la ley.',
          ],
          callout: {
            type: 'error',
            text: 'Error frecuente: creer que la solidaridad tributaria se presume. La solidaridad solo nace de la ley o del contrato y opera únicamente en los casos que el E.T. enumera (art. 793 y ss.).',
          },
          norm: {
            norm: 'Estatuto Tributario',
            article: 'arts. 793, 794, 795 y 795-1',
            status: 'vigente',
            note: 'Solidaridad y responsabilidad de socios y sucesores. Verificado el 2026-10-15.',
          },
        },
        {
          heading: 'Sucesiones ilíquidas y responsabilidad del cónyuge',
          paragraphs: [
            'En las sucesiones ilíquidas, la obligación tributaria del causante se sigue exigiendo de la sucesión mientras no se liquide la herencia: la sucesión es contribuyente del impuesto de renta durante el período comprendido entre la apertura de la sucesión y la adjudicación de los bienes (artículos 13, 572 y 573 E.T., y las reglas de las sucesiones ilíquidas). Una vez adjudicados los bienes, los herederos y legatarios responden por las obligaciones que fueron del causante, con el límite de solidaridad del artículo 793.',
            'El cónyuge y los socios también pueden verse afectados por la responsabilidad cuando la ley lo señala: por ejemplo, en la disolución de la sociedad conyugal, los bienes adjudicados responden por las deudas sociales conforme a las reglas civiles, y en materia fiscal el E.T. tiene reglas especiales de responsabilidad que operan junto con las civiles.',
            'Más allá de la letra de la ley, el módulo busca una lectura de justicia: las reglas de responsabilidad buscan evitar que la persona jurídica o el causante se conviertan en pantalla para eludir el deber de contribuir, pero su aplicación siempre debe respetar el debido proceso y el derecho de defensa.',
          ],
        },
      ],
      summary: [
        'El sujeto pasivo puede ser contribuyente (se realiza el hecho generador en su cabeza, art. 2 E.T.) o responsable (la ley le impone cumplir obligaciones ajenas, art. 3 E.T.); en IVA los términos son sinónimos.',
        'El agente de retención recauda el impuesto al hacer pagos o abonos en cuenta (art. 368 E.T.) y responde por los valores retenidos y no consignados, y por los dejados de retener (art. 370 E.T.).',
        'El cumplimiento de los deberes formales es personal; en las sociedades lo asume el representante legal, con la responsabilidad de los artículos 571 a 573 E.T.',
        'Los representantes legales incluyen gerentes, administradores, síndicos y revisores fiscales (art. 572 E.T.); los apoderados generales y mandatarios especiales también pueden comprometer su responsabilidad (art. 572-1 E.T.).',
        'La solidaridad tributaria solo existe en los casos del artículo 793 E.T. (herederos, legatarios, socios, terceros tenedores de bienes, socios de entidades no contribuyentes usadas para evadir); no se presume.',
        'La responsabilidad subsidiaria del artículo 573 E.T. cobija a socios y administradores por las irregularidades en la liquidación de sociedades y a los representantes legales de sociedades de fachada.',
      ],
      memorize: [
        'Art. 2 E.T.: contribuyente = se realiza el hecho generador; art. 3 E.T.: responsable = obligaciones por mandato legal; numeral 4 art. 3: en IVA son sinónimos.',
        'Art. 368 E.T.: obligación de retener en el momento del pago o abono en cuenta; art. 370 E.T.: el agente responde por lo no retenido.',
        'Art. 571 E.T.: cumplimiento personal de los deberes formales; en sociedades, por el representante legal.',
        'Art. 572 E.T.: gerentes, administradores, síndicos y revisores fiscales son representantes legales para efectos tributarios.',
        'Art. 573 E.T.: responsabilidad subsidiaria de socios y de representantes legales de sociedades de fachada.',
        'Art. 793 E.T.: lista de casos de solidaridad; art. 794 E.T.: socios hasta el monto de la distribución recibida.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: el agente retenedor que no retuvo',
          paragraphs: [
            'Una sociedad paga honorarios por 20 millones a un profesional y no practica la retención que correspondía (por ejemplo, 10 por ciento). La DIAN puede exigir al agente el valor dejado de retener (2 millones), con los intereses de mora (arts. 634 y ss. E.T.) y las sanciones que correspondan, sin perjuicio de la declaración del profesional, que debe declarar el ingreso. El agente no se libera alegando que el pago ya se hizo: su obligación de retener nació al momento del pago o abono en cuenta.',
          ],
        },
        {
          heading: 'Ejemplo 2: solidaridad de herederos',
          paragraphs: [
            'Una persona fallece en 2024 debiendo impuesto de renta del año 2023. Mientras la sucesión está ilíquida, la DIAN cobra a la sucesión; cuando se adjudica la herencia, los herederos responden solidariamente por las obligaciones del causante hasta el límite de lo recibido. Si la herencia se adjudica con bienes por 500 millones, la responsabilidad de cada heredero se mide por su hijuela, sin que pueda perseguirse su patrimonio personal más allá de esa medida (arts. 793 y 794 E.T.).',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Confundir al responsable del IVA con el sujeto pasivo económico.',
          correction: 'El responsable (comerciante, prestador) es el sujeto pasivo de derecho: declara y paga el impuesto. El sujeto pasivo económico es el consumidor final, que soporta el gravamen dentro del precio.',
        },
        {
          mistake: 'Creer que el representante legal responde personalmente de todas las deudas tributarias de la sociedad.',
          correction: 'Su responsabilidad opera en los casos que la ley señala (arts. 572, 572-1 y 573 E.T.): cumplimiento de deberes formales, administración irregular, sociedades de fachada o liquidación irregular. No se extiende, como regla general, a todas las obligaciones sociales.',
        },
        {
          mistake: 'Pensar que la solidaridad tributaria se presume por ser socio o heredero.',
          correction: 'La solidaridad solo existe en los casos expresamente previstos en la ley (art. 793 E.T.). El socio de una sociedad en funcionamiento no responde por los impuestos de la sociedad por el solo hecho de serlo.',
        },
        {
          mistake: 'Suponer que el representante legal de una sucesión ilíquida responde igual que el de una sociedad.',
          correction: 'La sucesión ilíquida tiene reglas propias: es contribuyente del impuesto de renta durante el periodo de liquidación y sus obligaciones se atienden con los bienes de la sucesión; la responsabilidad personal de herederos y albaceas se rige por las normas del E.T. y del Código Civil.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 2, 3 y 4',
          status: 'vigente',
          note: 'Contribuyentes, responsables y terminología del sujeto pasivo. Verificado el 2026-10-15.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 368, 370, 371, 372 y 634 y ss.',
          status: 'vigente',
          note: 'Retención en la fuente, responsabilidad directa y solidaria del agente retenedor e intereses de mora; la omisión de consignar lo retenido tiene además consecuencia penal (art. 402 del Código Penal, antes art. 665 E.T.). Verificado el 2026-10-15.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 571, 572, 572-1 y 573',
          status: 'vigente',
          note: 'Representantes legales y responsabilidad subsidiaria; confirmado por concepto DIAN 1098 de 2022 y jurisprudencia constitucional.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 793, 794, 795 y 795-1',
          status: 'vigente',
          note: 'Solidaridad y responsabilidad de sucesores. La Corte Constitucional precisó que el procedimiento del art. 795-1 solo aplica a la solidaridad del art. 795.',
        },
        {
          norm: 'Decreto 1625 de 2016 (DUR)',
          article: 'arts. 1.6.1.1 y siguientes',
          status: 'vigente',
          note: 'Régimen de retención en la fuente y responsables obligados a retener, con las modificaciones de decretos posteriores. Verifique la tarifa y la base de cada concepto de retención en la tabla del año.',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — compilación Secretaría del Senado', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
        { label: 'DIAN — Retención en la fuente', url: 'https://www.dian.gov.co/impuestos/retencion-fuente/Paginas/default.aspx' },
      ],
      mindmap: {
        root: 'Sujetos de la obligación',
        branches: [
          { label: 'Sujeto pasivo', children: ['Contribuyente (art. 2)', 'Responsable (art. 3)', 'Directo o del recaudo'] },
          { label: 'Agente retenedor', children: ['Retener al pagar (art. 368)', 'Declarar y consignar', 'Certificar e informar', 'Responde al no retener (art. 370)'] },
          { label: 'Representantes', children: ['Representante legal (art. 571)', 'Gerentes y revisores fiscales (art. 572)', 'Apoderados generales (art. 572-1)'] },
          { label: 'Subsidiariedad', children: ['Socios por liquidación irregular', 'Representantes de sociedades de fachada'] },
          { label: 'Solidaridad', children: ['Herederos y legatarios', 'Socios hasta la distribución', 'Terceros tenedores de bienes', 'Arts. 795 y 795-1'] },
        ],
      },
      mindmapText:
        'El sujeto pasivo de la obligación es contribuyente o responsable: el contribuyente es quien realiza el hecho generador y el responsable quien, sin serlo, debe cumplir por mandato legal lo que la ley atribuye a aquel. En esa categoría aparecen el agente de retención (que recauda al pagar o abonar en cuenta y responde por lo retenido y por lo dejado de retener), los representantes legales de las sociedades y entidades, los apoderados generales, y los sucesores (herederos, legatarios y socios de sociedades liquidadas irregularmente), cuya responsabilidad surge solo en los casos expresamente previstos en los artículos 571 a 573 y 793 a 795-1 del Estatuto Tributario.',
      source: [
        { doc: 'taci', pages: 'págs. 66-75 (obligaciones del agente retenedor y responsabilidad de los representantes)' },
        { doc: 'taci', pages: 'págs. 90-99 (responsabilidad por las obligaciones tributarias y efectos de la determinación)' },
      ],
      activityId: 'm04-a01',
    },
    {
      id: 'm04-l04',
      moduleId: 'm04',
      title: 'Determinación del tributo: clases, sistemas y efectos',
      indicators: ['i09'],
      objectives: [
        'Explicar en qué consiste el procedimiento de determinación de los tributos.',
        'Distinguir la determinación privada o del contribuyente, la determinación oficial y la determinación mixta.',
        'Identificar los actos de determinación oficial: liquidación de revisión, liquidación de aforo, liquidación provisional y facturación.',
        'Comprender los efectos de la determinación: firmeza, mérito ejecutivo y cosa juzgada.',
      ],
      sections: [
        {
          heading: 'Qué es la determinación del tributo',
          paragraphs: [
            'Los procedimientos tributarios son las reglas y actuaciones que deben observarse para la determinación de los tributos, la discusión de los actos, la imposición de sanciones y el recaudo. La determinación es el conjunto de actos mediante los cuales se fija la cuantía del tributo que corresponde a un sujeto pasivo y a un período, y puede realizarla el propio obligado o la administración.',
            'El material de formación define la determinación como la operación o conjunto de operaciones mediante las cuales se declara o se establece la obligación tributaria. Cuando la realiza el sujeto pasivo se llama determinación privada o del contribuyente; cuando la realiza la administración se llama determinación oficial; y existe una determinación mixta cuando el acto resulta del acuerdo o la aquiescencia entre el contribuyente y la administración (por ejemplo, la liquidación oficial de corrección provocada por el contribuyente).',
            'El punto de partida de todo el sistema es la declaración: el sistema tributario colombiano es de autoliquidación (autodeterminación). El Estado no liquida el impuesto de cada contribuyente: confía en su declaración y luego la verifica mediante la fiscalización.',
          ],
          bullets: [
            'Determinación privada: la hace el contribuyente o responsable en su declaración (autodeterminación o autoliquidación).',
            'Determinación oficial: la hace la administración mediante actos administrativos de carácter particular (liquidación oficial de revisión, de aforo, provisional, facturación del impuesto).',
            'Determinación mixta: la que resulta de la corrección de la declaración (por el contribuyente o provocada por la administración) o del allanamiento al requerimiento especial.',
            'Procedimiento de discusión: recursos de reconsideración y reposición contra los actos de determinación, y demanda ante la jurisdicción contencioso-administrativa.',
          ],
        },
        {
          heading: 'Determinación privada o del contribuyente',
          paragraphs: [
            'La determinación privada se concreta en las declaraciones tributarias, que son el acto por el cual el sujeto pasivo autoliquida el tributo. La declaración tiene tres efectos principales: hacia el futuro, señala la cifra sobre la cual la administración ejerce su control; hacia el propio contribuyente, define su situación fiscal y sirve de base para el pago; y hacia terceros, presta mérito ejecutivo por el saldo a pagar declarado (artículo 828 E.T.).',
            'La declaración tributaria tiene un régimen de corrección: de acuerdo con el artículo 588 del Estatuto Tributario, las declaraciones tributarias podrán corregirse por el contribuyente mediante la presentación de una declaración de corrección, dentro de los términos previstos por la ley (dos años desde la fecha límite para declarar sin sanción, con las reglas de los artículos 588 a 590 E.T.), o dentro del proceso de fiscalización (corrección provocada). La corrección puede ser voluntaria (con sanción de corrección reducida) o provocada por la administración (con sanción plena reducida por colaboración).',
            'La declaración, una vez firmada, no puede ser desconocida por el propio declarante: para modificar el saldo, el contribuyente debe usar la corrección o el proceso de discusión. Y si la declaración es correcta, la administración no puede desconocerla oficiosamente sin adelantar el procedimiento de determinación oficial.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Artículo 588 E.T.: las declaraciones posteriores son correcciones de la inicial y tienen el efecto de sustituir los valores en ellas consignados. La potestad de corrección es la expresión de la determinación privada.',
          },
        },
        {
          heading: 'Determinación oficial: la liquidación de revisión',
          paragraphs: [
            'La liquidación oficial de revisión es el acto administrativo por el cual la administración modifica la liquidación privada contenida en la declaración, cuando detecta diferencias entre lo declarado y lo que en derecho corresponde. El procedimiento está regulado en los artículos 702 a 714 del Estatuto Tributario y se desarrolla así: investigación y verificación (por los medios de prueba legales), requerimiento especial (artículo 703), respuesta y pruebas del contribuyente (artículo 707), y liquidación de revisión (artículo 711).',
            'Plazos esenciales (artículos 705 y 710 E.T.): el requerimiento especial debe notificarse a más tardar dentro de los tres años siguientes a la fecha de vencimiento del plazo para declarar; si la declaración se presentó antes del vencimiento, el término se cuenta igualmente desde la fecha de vencimiento; si se presentó extemporáneamente, se cuenta desde la fecha de presentación; y si la declaración arroja saldo a favor, se cuenta desde la fecha de presentación de la solicitud de devolución o compensación, no desde que esta se acepta. El plazo para notificar la liquidación oficial de revisión es de seis meses contados desde el vencimiento del término para dar respuesta al requerimiento especial o a su ampliación (artículo 710 E.T.).',
            'El término para notificar el requerimiento especial se suspende en tres casos: un mes por la notificación del emplazamiento para corregir (acto que invita al contribuyente a corregir su declaración y que no es de obligatoria expedición); tres meses cuando se practica inspección tributaria de oficio, contados desde la notificación del auto que la decreta; y durante todo el término de la inspección cuando esta se practica a solicitud del administrado. La suspensión solo opera si el auto que decreta la inspección se notifica debidamente y la inspección se practica de manera efectiva.',
            'Si el contribuyente no responde o las pruebas no lo favorecen, la administración modifica la liquidación sobre las bases que establezca (artículo 711 E.T.). La liquidación de revisión debe contener la explicación de las modificaciones; su notificación habilita los recursos de reposición y en subsidio de reconsideración y, agotada la vía administrativa, el contribuyente puede demandar ante la jurisdicción de lo contencioso administrativo dentro de los cuatro meses siguientes a la notificación (artículo 164, numeral 2, literal c) de la Ley 1437 de 2011).',
          ],
          callout: {
            type: 'importante',
            text: 'Secuencia del proceso de revisión: verificación previa → requerimiento especial → respuesta y pruebas → liquidación oficial de revisión → recursos. Sin requerimiento especial no hay liquidación de revisión (salvo las excepciones legales).',
          },
        },
        {
          heading: 'Determinación oficial: aforo, provisional y facturación',
          paragraphs: [
            'La liquidación oficial de aforo se aplica a quienes incumplen la obligación de declarar. La administración emplaza al contribuyente por no presentar la declaración (artículo 715 E.T.), le concede un plazo de un mes para declarar y, si no lo hace, la DIAN le determina el impuesto mediante liquidación de aforo (artículos 716 a 719 E.T.), sin necesidad de declaración previa y con la sanción por no declarar del artículo 643 E.T. También procede el aforo cuando el obligado no presenta la declaración de retención en la fuente.',
            'La liquidación provisional es un acto de determinación oficial que se emite con base en la información disponible (por ejemplo, la exógena) cuando la declaración no coincide con los datos en poder de la administración. Fue introducida en el Estatuto Tributario por la Ley 1819 de 2016 (el material de formación la atribuye a la «Ley 1819 de 2019», transcripción equivocada). Solo procede respecto de contribuyentes que en el año inmediatamente anterior al que se refiere la liquidación hayan declarado ingresos brutos iguales o inferiores a 15.000 UVT, o un patrimonio bruto igual o inferior a 30.000 UVT, o el que determine la administración a falta de declaración.',
            'La liquidación provisional se profiere por una sola vez y en tres oportunidades (artículo 765 E.T.): dentro del término de firmeza de la declaración, cuando se trate de modificarla; dentro de los cinco años siguientes a la fecha de vencimiento del plazo para declarar, cuando el obligado no haya cumplido el deber formal de declarar; y dentro del término previsto para imponer sanciones, cuando se trate de obligaciones distintas al deber de declarar. Notificada, el contribuyente puede aceptarla en su totalidad, rechazarla o solicitar su modificación por una única vez, dentro del mes siguiente; se entiende aceptada si corrige o presenta la declaración conforme a la liquidación provisional o si no se pronuncia oportunamente. Si la rechaza, la liquidación provisional reemplaza al requerimiento especial, al emplazamiento previo por no declarar o al pliego de cargos, según el caso, y la administración la ratifica con la liquidación oficial de revisión dentro de los dos meses siguientes a que se agote el término de respuesta. La firmeza de las declaraciones corregidas o presentadas como consecuencia de la aceptación es de seis meses contados desde su corrección o presentación.',
            'El acto de facturación del impuesto es la determinación oficial del tributo cuando el sistema no es de declaración, sino de facturación. El artículo 616-5 del Estatuto Tributario, adicionado por el artículo 14 de la Ley 2155 de 2021, autorizó a la DIAN para facturar el impuesto sobre la renta y complementarios, tomando como base la información obtenida de terceros, los mecanismos del propio Estatuto y el sistema de factura electrónica del artículo 616-1 E.T. La Resolución DIAN 1212 de 2022 reglamentó la materia: la factura es un acto administrativo de determinación oficial que, una vez en firme, presta mérito ejecutivo (numeral 3 del artículo 828 E.T.); se notifica mediante inserción en la página web de la DIAN y, si el contribuyente tiene correo electrónico inscrito en el RUT, la notificación se entiende surtida desde el día siguiente al envío del correo. Si el contribuyente no está de acuerdo con los valores de la factura, debe presentar la declaración del impuesto con los valores de su realidad económica dentro de los dos meses siguientes a la notificación, con la sanción por extemporaneidad que corresponda; con esa presentación la factura pierde fuerza ejecutoria.',
          ],
          table: {
            caption: 'Crítica del material: sistemas de determinación del impuesto sobre la renta',
            headers: ['Sistema', 'En qué consiste', 'A quién aplica'],
            rows: [
              ['Declaración (método general)', 'El contribuyente declara su renta y su impuesto', 'Contribuyentes obligados a declarar'],
              ['Aforo', 'La administración determina el impuesto a quien no declaró', 'Quienes incumplieron la obligación de declarar'],
              ['Facturación', 'La administración factura el impuesto a partir de la información disponible', 'Sujetos señalados legalmente (facturación del impuesto sobre la renta, art. 616-5 E.T.)'],
              ['Determinación privada', 'La declaración del contribuyente', 'Regla general'],
              ['Determinación oficial', 'Los actos administrativos de determinación', 'Cuando hay diferencias, omisión o incumplimiento'],
            ],
          },
        },
        {
          heading: 'Determinación mixta: la liquidación oficial de corrección',
          paragraphs: [
            'La determinación mixta es la que resulta de la concurrencia de la voluntad del contribuyente y de la administración. El ejemplo típico es la liquidación oficial de corrección del artículo 589 E.T.: si el contribuyente acepta un requerimiento especial (o se allana a la liquidación de revisión), pueden suscribirse actas de corrección provocada por la administración, con reducción de la sanción por inexactitud (del 200 por ciento se reduce a la cuarta parte si acepta los hechos y a la mitad si aporta pruebas).',
            'La liquidación de corrección también procede por errores aritméticos o de transcripción de la declaración privada, y por la corrección provocada por la administración cuando esta detecta la falta de pago o errores en las declaraciones.',
            'En términos prácticos, la determinación mixta es el resultado de una negociación dentro del proceso: el contribuyente corrige y la administración consolida el acto. Por eso se estudia como una tercera modalidad, distinta de la determinación puramente privada (declaración) y de la determinación puramente oficial (liquidación de revisión o de aforo).',
          ],
          norm: {
            norm: 'Estatuto Tributario',
            article: 'arts. 589 y 709',
            status: 'verificar',
            note: 'La liquidación oficial de corrección y el allanamiento se modificaron por la Ley 1819 de 2016 y la Ley 2277 de 2022 (reducción de sanciones). Verifique la redacción vigente del art. 589 y el porcentaje de reducción aplicable al año del caso.',
          },
        },
        {
          heading: 'Efectos de la determinación: firmeza, mérito ejecutivo y sanciones',
          paragraphs: [
            'La firmeza implica que, por el paso del tiempo señalado en la ley, la administración ya no puede modificar ni cuestionar la liquidación privada y que el propio contribuyente tampoco puede modificarla. La regla general (artículo 714 E.T.) es que la declaración queda en firme si dentro de los tres años siguientes al vencimiento del término para declarar no se ha notificado requerimiento especial. Ese mismo término de tres años se cuenta: desde la fecha de presentación, cuando la declaración se presentó extemporáneamente; y desde la fecha de la solicitud de devolución o compensación, cuando la declaración contiene un saldo a favor.',
            'Para las declaraciones de renta en las que se determinan o compensan pérdidas fiscales y para las de los contribuyentes sujetos al régimen de precios de transferencia, la firmeza es de cinco años, regla aplicable a las declaraciones presentadas a partir de 2020 (Ley 2010 de 2019); para declaraciones anteriores regía el término de seis años del inciso final del artículo 147 E.T. Además, las declaraciones de IVA y de retención en la fuente tienen la firmeza de la declaración de renta del período gravable con el cual coincidan, sin excepción (artículo 705-1 E.T.), y el beneficio de auditoría no las afecta: ellas siguen las reglas generales del artículo 714.',
            'La firmeza opera también cuando el acto se notifica por fuera del término legal: el artículo 710 E.T. consagra la firmeza por notificación extemporánea de la liquidación oficial de revisión, y el artículo 714 produce el mismo efecto cuando vence el plazo para notificar el requerimiento especial sin que se haya notificado.',
            'La declaración y los actos de determinación prestan mérito ejecutivo (artículo 828 E.T.) y con ellos la DIAN inicia el proceso de cobro coactivo. En el proceso de determinación también se imponen sanciones: por no declarar (artículo 643 E.T.), por extemporaneidad (artículos 641 y 642 E.T.), por inexactitud (artículo 647 E.T.) y por corrección (artículo 644 E.T.).',
          ],
          table: {
            caption: 'Firmeza de la declaración: reglas principales',
            headers: ['Regla', 'Término', 'Fundamento'],
            rows: [
              ['Regla general', '3 años desde el vencimiento del plazo para declarar', 'Art. 714 E.T.'],
              ['Declaración extemporánea', '3 años desde la fecha de presentación de la declaración', 'Art. 714 E.T.'],
              ['Declaración con saldo a favor', '3 años desde la presentación de la solicitud de devolución o compensación', 'Art. 714 E.T.'],
              ['Pérdidas fiscales y precios de transferencia', '5 años (declaraciones presentadas desde 2020)', 'Art. 714 E.T.; Ley 2010 de 2019'],
              ['Declaraciones de IVA y retención', 'La firmeza de la declaración de renta del período correspondiente', 'Art. 705-1 E.T.'],
              ['Liquidación de revisión', '6 meses desde el vencimiento del término para responder el requerimiento especial o su ampliación', 'Art. 710 E.T.'],
              ['Notificación extemporánea', 'Si el acto se notifica después del término, la declaración queda en firme', 'Art. 710 E.T.'],
            ],
          },
          callout: {
            type: 'error',
            text: 'Cuidado con el punto de partida: si la declaración se presentó antes del vencimiento, el término se cuenta desde la fecha de vencimiento y no desde la presentación; si se presentó tarde (extemporáneamente), el término se cuenta desde la fecha de presentación; y si la declaración arroja saldo a favor, el término se cuenta desde la solicitud de devolución o compensación, no desde que esta se acepta.',
          },
        },
      ],
      summary: [
        'La determinación es el conjunto de actos con los que se establece la cuantía del tributo; puede ser privada (declaración del contribuyente), oficial (actos de la administración) o mixta (corrección o allanamiento).',
        'La determinación privada se concreta en la declaración tributaria, que autoliquida el tributo, presta mérito ejecutivo y se corrige conforme a los artículos 588 a 590 E.T.',
        'La determinación oficial se realiza mediante liquidación de revisión (arts. 702 a 714 E.T.), liquidación de aforo (arts. 715 a 719 E.T.) y liquidación provisional, y se concreta en la facturación del impuesto en los casos del artículo 616-5 E.T.',
        'La determinación mixta es la liquidación oficial de corrección (art. 589 E.T.), que puede ser provocada por el contribuyente o por la administración.',
        'La firmeza es de tres años como regla general, con reglas especiales de conteo (declaración extemporánea y saldo a favor), y de cinco años en pérdidas fiscales y precios de transferencia para declaraciones presentadas desde 2020.',
        'Los actos de determinación prestan mérito ejecutivo (art. 828 E.T.) y su incumplimiento genera sanciones por no declarar, extemporaneidad, inexactitud y corrección.',
      ],
      memorize: [
        'Determinación privada = declaración (art. 588: las declaraciones posteriores son correcciones).',
        'Determinación oficial = liquidación de revisión (arts. 702-714), de aforo (arts. 715-719), provisional (Ley 1819 de 2016) y facturación (art. 616-5, Ley 2155 de 2021).',
        'Determinación mixta = liquidación oficial de corrección (art. 589 E.T.).',
        'Firmeza (art. 714 E.T.): 3 años general; desde la presentación si la declaración fue extemporánea; desde la solicitud de devolución si hay saldo a favor; 5 años en pérdidas fiscales y precios de transferencia (declaraciones desde 2020).',
        'Liquidación provisional: solo para quienes declararon ingresos brutos de hasta 15.000 UVT o patrimonio bruto de hasta 30.000 UVT; se profiere por una sola vez (art. 765 E.T.).',
        'Liquidación de revisión: 6 meses desde el vencimiento del plazo para responder el requerimiento (art. 710 E.T.).',
        'Sanción por no declarar: art. 643 E.T.; por inexactitud: art. 647 E.T.; por corrección: art. 644 E.T.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: el ciclo completo de una revisión',
          paragraphs: [
            'Una empresa presenta su declaración de renta del año 2023 el 15 de abril de 2024. La DIAN, en un cruce de exógena, detecta ingresos no declarados por 500 millones. Dentro de los tres años siguientes al vencimiento del plazo (art. 714 E.T.), profiere requerimiento especial (art. 703 E.T.). La empresa responde y aporta pruebas de que parte de esos ingresos corresponden a operaciones no gravadas; la DIAN acepta el argumento parcialmente y expide liquidación oficial de revisión por 300 millones. La empresa interpone recurso de reconsideración y, si no prospera, puede demandar ante la jurisdicción de lo contencioso administrativo.',
          ],
        },
        {
          heading: 'Ejemplo 2: aforo por no declarar',
          paragraphs: [
            'Un contribuyente obligado a declarar renta no presenta su declaración. La DIAN lo emplaza (art. 715 E.T.) y, al no obtener respuesta dentro del mes, expide liquidación de aforo determinando el impuesto con base en la información disponible y aplicando la sanción por no declarar del artículo 643 E.T. Este acto es determinación oficial y presta mérito ejecutivo.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Afirmar que la liquidación provisional fue creada por la Ley 1819 de 2019.',
          correction: 'Fue creada por la Ley 1819 de 2016. El material de formación cita la Ley 1819 de 2019, pero la reforma que introdujo la liquidación provisional (art. 764 E.T.) es la Ley 1819 de 2016.',
        },
        {
          mistake: 'Creer que la DIAN puede modificar la declaración sin ningún procedimiento previo.',
          correction: 'La modificación de la liquidación privada requiere el procedimiento de determinación oficial: requerimiento especial y respuesta antes de la liquidación de revisión, y los demás pasos y plazos de los artículos 702 a 714 E.T.',
        },
        {
          mistake: 'Confundir la firmeza con la prescripción.',
          correction: 'La firmeza impide modificar la declaración o el acto por vía administrativa; la prescripción extingue la acción de cobro. La firmeza se cuenta desde el vencimiento del plazo para declarar y la prescripción desde que la obligación se hace exigible, con los términos y las interrupciones de la ley.',
        },
        {
          mistake: 'Pensar que la determinación mixta no existe en el sistema colombiano.',
          correction: 'El sistema colombiano es de autoliquidación, pero reconoce la determinación mixta en la liquidación oficial de corrección (art. 589 E.T.) y en el allanamiento del contribuyente al requerimiento especial.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 588, 589 y 590',
          status: 'verificar',
          note: 'Corrección de las declaraciones y liquidación oficial de corrección; modificados por las Leyes 1819 de 2016 y 2277 de 2022. Verifique la redacción vigente antes de citarlos textualmente.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 702 a 714 (revisión) y 715 a 719 (aforo)',
          status: 'vigente',
          note: 'Procedimiento de determinación oficial; verificado el 2026-10-15 en la compilación del Estatuto Tributario.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'art. 764 (liquidación provisional)',
          status: 'vigente',
          note: 'Creada por la Ley 1819 de 2016, no por la Ley 1819 de 2019 que cita el material.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'art. 616-5 (facturación del impuesto sobre la renta)',
          status: 'modificada',
          note: 'Adicionado por la Ley 2155 de 2021; reglamentado por la Resolución DIAN 1212 de 2022. Verifique las UVT y los requisitos del año gravable aplicable.',
        },
        {
          norm: 'Resolución DIAN 1212 de 2022',
          status: 'verificar',
          note: 'Reglamenta el sistema de facturación del impuesto sobre la renta. Confirme la resolución compilatoria vigente en el normograma de la DIAN.',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — compilación Secretaría del Senado', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'Normograma DIAN — Resoluciones de facturación', url: 'https://normograma.dian.gov.co/dian/' },
        { label: 'DIAN — Servicios informáticos electrónicos', url: 'https://www.dian.gov.co/impuestos/servicios-informaticos-electronicos/Paginas/default.aspx' },
      ],
      mindmap: {
        root: 'Determinación del tributo',
        branches: [
          { label: 'Privada', children: ['Declaración tributaria', 'Art. 588 E.T.', 'Correcciones'] },
          { label: 'Oficial', children: ['Liquidación de revisión', 'Liquidación de aforo', 'Liquidación provisional', 'Facturación (art. 616-5)'] },
          { label: 'Mixta', children: ['Liquidación oficial de corrección', 'Allanamiento', 'Actas de corrección'] },
          { label: 'Firmeza', children: ['3 años general', '5 años saldo a favor y precios de transferencia', '2 años régimen especial'] },
          { label: 'Efectos', children: ['Mérito ejecutivo (art. 828)', 'Sanciones', 'Cobro coactivo'] },
        ],
      },
      mindmapText:
        'La determinación del tributo es el conjunto de actos con los que se establece la cuantía de la obligación. En Colombia la regla es la determinación privada: el contribuyente autoliquida en su declaración (art. 588 E.T.) y esa declaración presta mérito ejecutivo (art. 828). La administración determina oficialmente mediante liquidación de revisión (arts. 702 a 714), liquidación de aforo (arts. 715 a 719), liquidación provisional (Ley 1819 de 2016) y facturación del impuesto (art. 616-5 E.T., Ley 2155 de 2021). La determinación mixta surge de la liquidación oficial de corrección y del allanamiento (art. 589 E.T., art. 709 E.T.). Los actos quedan en firme en los términos del artículo 714 E.T. y con ellos la DIAN puede adelantar el cobro coactivo, además de las sanciones que correspondan.',
      source: [
        { doc: 'taci', pages: 'págs. 80-102 (determinación del tributo, firmeza, sanción por no declarar y efectos)' },
        { doc: 'taci', pages: 'págs. 122-131 (sanciones y procedimiento en el impuesto sobre la renta)' },
      ],
      activityId: 'm04-a02',
    },
  ],
}
