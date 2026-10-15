import type { ModuleDef } from '../types'

// ============================================================
// Módulo 9 — Régimen aduanero
// Indicadores: i09 (obligaciones formales y sustanciales), i10 (procedimiento de fiscalización)
// Fuente principal: TACI, Unidades 9 a 12 (págs. 165-198).
// Verificación normativa: el material cita el Decreto 390 de 2016 (NEA) y el
// Decreto 920 de 2023 para el régimen sancionatorio; hoy la norma de base es el
// Decreto 1165 de 2019 (Estatuto Aduanero) y el régimen sancionatorio y de decomiso
// es la Ley 2586 de 2026, que sustituyó al Decreto Ley 920 de 2023 (declarado
// inexequible con efectos diferidos por la Sentencia C-072 de 2025).
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm09',
  order: 9,
  title: 'Régimen aduanero',
  description:
    'Obligación aduanera sustancial (tributos aduaneros, hecho generador, base gravable y declaración de importación), los regímenes aduaneros (importación, exportación, tránsito y zonas francas) y el procedimiento, el régimen probatorio y el régimen sancionatorio aduanero de competencia de la DIAN.',
  indicators: ['i09', 'i10'],
  lessons: [
    {
      id: 'm09-l01',
      moduleId: 'm09',
      title: 'Obligación aduanera sustancial: tributos, hecho generador, base gravable y declaración',
      indicators: ['i09'],
      objectives: [
        'Definir el régimen aduanero y delimitar su ámbito de aplicación (bienes tangibles y territorio aduanero nacional).',
        'Explicar en qué consiste la obligación aduanera sustancial y distinguirla de la obligación formal.',
        'Identificar los elementos de los tributos aduaneros: hecho generador, sujeto activo, sujeto pasivo y base gravable.',
        'Determinar la base gravable del IVA en la importación y liquidar tributos aduaneros en casos sencillos.',
        'Reconocer los documentos que deben amparar la mercancía extranjera en el territorio aduanero nacional.',
      ],
      sections: [
        {
          heading: '¿Qué es el régimen aduanero y cuál es su ámbito?',
          paragraphs: [
            'El régimen aduanero determina los requisitos legales y procedimentales que deben cumplir el importador y el exportador en la comercialización internacional de bienes, así como las responsabilidades de los agentes de aduanas y demás usuarios aduaneros en el tratamiento de las cargas. Su existencia permite organizar la mercancía sujeta a control aduanero, dar fluidez al flujo de mercadería internacional y ejercer control sobre la entrada y salida de bienes al país.',
            'La regulación aduanera se aplica en la totalidad del territorio aduanero nacional y regula las relaciones jurídicas entre la administración aduanera y quienes intervienen en el ingreso, permanencia, traslado y salida de las mercancías. El territorio aduanero nacional comprende el territorio nacional aéreo, marítimo y terrestre; las zonas francas y los depósitos habilitados no hacen parte del territorio aduanero nacional, aunque están sometidos a control aduanero.',
            'El Decreto 1165 del 2 de julio de 2019 expidió el régimen de aduanas con el fin de armonizar las disposiciones dispersas de los Decretos 2685 de 1999, 390 de 2016, 2147 de 2016, 349 de 2018 y 659 de 2018. Además de los principios constitucionales y de los previstos en el CPACA, el régimen se aplica e interpreta con los principios de eficiencia (prevalecerá el servicio ágil y oportuno que facilite y dinamice el comercio exterior, sin perjuicio del control) y de favorabilidad (si antes de la firmeza del acto que decide de fondo una sanción o un decomiso entra a regir una norma más favorable, la autoridad aduanera la aplicará oficiosamente).',
          ],
          callout: {
            type: 'importante',
            text: 'El régimen de aduanas solo se ocupa del movimiento de mercancías y de bienes tangibles. No regula la importación o exportación de intangibles: la prestación de servicios desde o hacia el exterior es una operación del régimen cambiario, no una operación aduanera.',
          },
        },
        {
          heading: 'Objetivos del régimen de aduanas',
          paragraphs: [
            'El régimen de aduanas colombiano persigue cinco objetivos expresos que explican su doble vocación de control y facilitación:',
          ],
          bullets: [
            'Facilitar el desarrollo y la aplicación de los convenios y tratados internacionales vigentes para Colombia y la participación en los procesos de integración económica.',
            'Adecuar las disposiciones aduaneras a la política comercial, al fomento y protección de la producción nacional y a los acuerdos suscritos, teniendo en cuenta las recomendaciones de los organismos internacionales de comercio.',
            'Facilitar y agilizar las operaciones de comercio exterior, para garantizar la dinámica del intercambio comercial, el acceso de los productos y servicios a los mercados internos y externos y la competitividad de los productos colombianos.',
            'Fomentar el uso de tecnologías y medios de comunicación modernos y ambientalmente sostenibles.',
            'Propender por la adopción de procedimientos simplificados que contribuyan a la facilitación y agilización de las operaciones de comercio exterior.',
          ],
        },
        {
          heading: 'La obligación aduanera: sustancial y formal',
          paragraphs: [
            'La obligación aduanera es el vínculo que existe entre la administración aduanera y cualquier persona que esté directa o indirectamente relacionada con una operación aduanera. Comprende tres bloques: (i) los trámites aduaneros; (ii) el pago de los tributos aduaneros, intereses, tasas, recargos y sanciones; y (iii) las obligaciones que se derivan de las actuaciones que inicie la autoridad aduanera.',
            'De esa definición se desprenden dos dimensiones que conviene no confundir: la obligación sustancial, que se concreta en el pago de los tributos aduaneros y en el cumplimiento de las condiciones del régimen, y la obligación formal, que se concreta en declarar, presentar información, conservar documentos y soportar las actuaciones de control.',
          ],
          table: {
            caption: 'Obligación aduanera sustancial y formal',
            headers: ['Aspecto', 'Obligación sustancial', 'Obligación formal'],
            rows: [
              ['Contenido', 'Pago de tributos aduaneros, rescate, intereses y sanciones', 'Presentar declaraciones, documentos soporte e información; conservar pruebas'],
              ['Se materializa en', 'Liquidación en la declaración y pago por bancos autorizados', 'Declaración de importación, declaración andina del valor, documentos soporte, respuesta a requerimientos'],
              ['Incumplimiento típico', 'Subfacturación, inexactitud en la base gravable, no pago', 'No declarar, declarar mal, no conservar documentos soporte'],
            ],
          },
        },
        {
          heading: 'Obligados aduaneros: directos e indirectos',
          paragraphs: [
            'La legislación aduanera distingue dos categorías de obligados. Son obligados directos los usuarios aduaneros que intervienen en el movimiento de mercancías a través de las fronteras internacionales, por vía de importación, exportación o tránsito aduanero: el importador, el exportador, el declarante, el agente de aduanas, el transportador y los depósitos, entre otros. Son obligados indirectos todas las personas que en desarrollo de su actividad hayan intervenido de manera indirecta en el cumplimiento de cualquier trámite u operación aduanera y, en general, cualquier persona requerida por la autoridad aduanera.',
            'Serán responsables por su intervención, según corresponda, y por el suministro de toda la documentación e información exigida por la DIAN, tanto los obligados directos como los indirectos. El importador, en particular, es responsable de acreditar la legal introducción de las mercancías al territorio aduanero nacional, con el lleno de los requisitos y el pago de los tributos aduaneros a que haya lugar.',
          ],
          bullets: [
            'Cuando el importador actúa directamente, responde por la exactitud y veracidad de los datos de la declaración aduanera y por la correcta determinación de la base gravable y de la liquidación de tributos, sanciones y rescate.',
            'Cuando actúa a través de una agencia de aduanas, responde por la autenticidad de los documentos soporte que él obtiene y suministra, y por entregar toda la información sobre los elementos de hecho y las circunstancias comerciales de la negociación necesaria para la valoración aduanera.',
            'El exportador debe tener vigente la declaración juramentada de origen de cada producto, cumplir las normas de origen de los acuerdos comerciales y conservar los documentos que demuestren ese cumplimiento; además debe presentar la solicitud de autorización de embarque, el ingreso a zona primaria, el embarque y la certificación de embarque.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Obligados DIRECTOS = usuarios aduaneros que intervienen en la operación (importador, exportador, declarante, agente de aduanas, transportador). Obligados INDIRECTOS = quienes intervienen de modo indirecto o son requeridos por la autoridad.',
          },
        },
        {
          heading: 'Elementos de los tributos aduaneros',
          paragraphs: [
            'Los tributos aduaneros se estructuran con los mismos elementos de todo tributo: hecho generador, sujeto activo, sujeto pasivo y base gravable. El régimen aduanero los precisa así:',
          ],
          table: {
            caption: 'Elementos de los tributos aduaneros',
            headers: ['Elemento', 'Contenido'],
            rows: [
              ['Hecho generador', 'La introducción de las mercancías al territorio aduanero nacional, así como la introducción de mercancías en el área demarcada del país vecino donde se cumplan trámites y controles aduaneros en virtud de acuerdos binacionales fronterizos. Respecto de los impuestos que se generan con ocasión de la importación (IVA, impuesto al consumo), el hecho generador es el establecido en la ley.'],
              ['Sujeto activo', 'La DIAN (la Nación — UAE Dirección de Impuestos y Aduanas Nacionales).'],
              ['Sujeto pasivo', 'El importador o el declarante cuando haya lugar a ello, en calidad de deudor. También es sujeto pasivo el adquirente de mercancías que salen del departamento de San Andrés, Providencia y Santa Catalina y de las zonas de régimen aduanero especial con destino al resto del territorio aduanero nacional.'],
              ['Base gravable', 'Para los derechos de aduana, el valor en aduana de la mercancía importada, determinado conforme a las disposiciones de valoración aduanera. Para los demás derechos que conforman los tributos aduaneros, el valor en aduana cuando corresponda y, en casos especiales, lo que dispongan las normas. Para el IVA en la importación, la base del artículo 459 del Estatuto Tributario.'],
            ],
          },
        },
        {
          heading: 'Base gravable del IVA en la importación',
          paragraphs: [
            'La regla que más se pregunta en los casos prácticos es la del IVA: la base gravable sobre la cual se liquida el impuesto sobre las ventas en el caso de mercancías importadas es la misma que se tiene en cuenta para liquidar los derechos de aduana, adicionada con el valor de ese gravamen. Es decir, la base del IVA es el valor en aduana más el arancel.',
            'Los tributos aduaneros se liquidan en la declaración de importación y se pagan a través de los bancos y entidades financieras autorizadas por la DIAN, una vez presentada y aceptada la declaración. El valor a pagar por concepto de tributos aduaneros, rescate, sanciones y demás obligaciones se aproxima al múltiplo de mil (1.000) más cercano. Tratándose de declaraciones de importación para operaciones de salida de zona franca al resto del territorio aduanero nacional, el pago debe efectuarse a más tardar dentro de los dos (2) meses siguientes a su presentación y aceptación; en caso contrario se debe presentar una nueva declaración.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Base del IVA en importación = VALOR EN ADUANA + ARANCEL (art. 459 E.T.). Sobre esa suma se aplica la tarifa del impuesto sobre las ventas.',
          },
        },
        {
          heading: 'La declaración de importación y los documentos que amparan la mercancía',
          paragraphs: [
            'La declaración aduanera es el acto o documento mediante el cual el declarante identifica el régimen aduanero que debe aplicarse a las mercancías e introduce los datos e información esenciales. Es importante precisar que las declaraciones aduaneras no identifican la propiedad de las mercancías sujetas a importación, exportación o tránsito aduanero: identifican la operación y sus elementos.',
            'En importación se utiliza el Formato 500, que también sirve como declaración especial de importación para las operaciones de salida de zona franca al resto del territorio aduanero nacional. En exportación, el exportador o la agencia de aduanas presentan y firman la declaración de exportación (Formato 600) una vez efectuada la certificación de embarque.',
            'Conforme al artículo 594 del Decreto 1165 de 2019, las mercancías extranjeras que se encuentren en el territorio aduanero nacional —salvo el equipaje de viajeros con exoneración de tributos y los efectos personales— deben estar amparadas por uno de los siguientes documentos: (1) la declaración aduanera o el documento que haga sus veces; (2) la planilla que ampare el traslado de la mercancía dentro de la misma jurisdicción; (3) la factura de nacionalización; (4) el acta de remate, adjudicación o transmisión del derecho de dominio de vehículos automotores que carezcan de declaración de importación; (5) la autorización de internación temporal de vehículos automotores, motocicletas y embarcaciones fluviales menores; y (6) la autorización de entrega urgente del artículo 265 del Decreto 1165 de 2019.',
            'La autoridad aduanera no puede exigir documentación distinta a la enumerada para demostrar la legal disposición de mercancías de procedencia extranjera, salvo la que se requiera dentro de los procesos formales de fiscalización o en virtud del requerimiento de información del artículo 592 del Decreto 1165 de 2019.',
          ],
          callout: {
            type: 'norma',
            text: 'Artículo 594 del Decreto 1165 de 2019: lista taxativa de documentos que amparan la tenencia y disposición de mercancía extranjera en el territorio aduanero nacional. Es una norma de cierre: fuera de esos documentos, la mercancía se presume no amparada.',
          },
        },
      ],
      summary: [
        'El régimen aduanero fija requisitos legales y procedimentales para el comercio internacional de bienes; las zonas francas y los depósitos habilitados no hacen parte del territorio aduanero nacional, aunque están sujetos a control.',
        'El Decreto 1165 de 2019 es el Estatuto Aduanero vigente en su parte general y se interpreta con los principios de eficiencia y favorabilidad, además de los constitucionales y del CPACA.',
        'La obligación aduanera comprende trámites aduaneros, el pago de tributos, intereses, tasas, recargos y sanciones, y las obligaciones derivadas de las actuaciones de la autoridad; solo cubre bienes tangibles.',
        'Los tributos aduaneros tienen como hecho generador la introducción de mercancías al territorio aduanero nacional; el sujeto activo es la DIAN y el sujeto pasivo es el importador o declarante.',
        'La base de los derechos de aduana es el valor en aduana; la base del IVA en importación es el valor en aduana adicionado con el arancel.',
        'La mercancía extranjera debe estar amparada por los documentos del artículo 594 del Decreto 1165 de 2019; el pago de los tributos se hace por bancos autorizados y se aproxima al múltiplo de mil.',
      ],
      memorize: [
        'Hecho generador aduanero = introducción de mercancías al territorio aduanero nacional.',
        'Base del IVA en importación = valor en aduana + arancel (art. 459 E.T.).',
        'Formato 500: declaración de importación (y declaración especial de importación desde zona franca). Formato 600: declaración de exportación.',
        'Obligados directos (usuarios aduaneros) vs. obligados indirectos (intervinientes y requeridos).',
        'Pago de tributos: bancos autorizados por la DIAN; aproximación al múltiplo de mil más cercano.',
      ],
      examples: [
        {
          heading: 'Liquidación de tributos aduaneros de una importación ordinaria',
          paragraphs: [
            'Una empresa importa mercancía cuyo valor en aduana, determinado según las normas de valoración, es de USD 20.000 con una TRM de 4.000 pesos por dólar, es decir, 80.000.000 de pesos. Si el arancel aplicable es del 10 %, los derechos de aduana son 8.000.000 de pesos. La base del IVA es 80.000.000 + 8.000.000 = 88.000.000; al 19 % el IVA de importación asciende a 16.720.000 pesos. Los tributos aduaneros totales son 24.720.000 pesos, suma que se aproxima al múltiplo de mil más cercano al momento de pagar en el banco autorizado.',
            'Observe el orden lógico: primero el valor en aduana, luego el arancel, después el IVA sobre la suma de ambos. Si se liquidara el IVA solo sobre el valor en aduana se subestimaría el impuesto en 1.520.000 pesos, generando una inexactitud que la DIAN puede corregir mediante liquidación oficial de revisión.',
          ],
        },
        {
          heading: 'Reparto de responsabilidades cuando se declara por agencia de aduanas',
          paragraphs: [
            'Una sociedad contrata una agencia de aduanas para nacionalizar mercancía. El importador sigue siendo el obligado aduanero y sujeto pasivo: debe suministrar a la agencia toda la información sobre los elementos de hecho y las circunstancias comerciales de la negociación (precio, condiciones de entrega, vinculación con el proveedor) y responde por la autenticidad de los documentos soporte que él obtiene. La agencia, por su parte, responde por el diligenciamiento de la declaración y por los datos que consigna, y queda vinculada en el requerimiento especial aduanero cuando se propone deducir la responsabilidad que le pueda caber.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Confundir el valor en aduana con el valor facturado por el proveedor.',
          correction: 'El valor en aduana se determina con las normas de valoración aduanera y puede diferir del valor de la factura porque incorpora fletes, seguros y otros ajustes, y porque existen métodos específicos para operaciones entre vinculados. La base de los derechos de aduana es el valor en aduana, no el valor facturado.',
        },
        {
          mistake: 'Liquidar el IVA de importación únicamente sobre el valor en aduana.',
          correction: 'La base gravable del IVA en la importación es el valor en aduana adicionado con el valor de los derechos de aduana (arancel), conforme al artículo 459 del Estatuto Tributario.',
        },
        {
          mistake: 'Creer que el régimen aduanero cubre la importación y exportación de servicios o de intangibles.',
          correction: 'El régimen de aduanas solo regula el movimiento de mercancías y bienes tangibles. La importación y la exportación de servicios son operaciones del régimen cambiario sujetas al control de la DIAN, pero no se declaran ante la autoridad aduanera como mercancía.',
        },
      ],
      norms: [
        {
          norm: 'Decreto 1165 de 2019',
          article: 'arts. 1, 2, 3, 592 y 594',
          status: 'modificada',
          note: 'Estatuto Aduanero vigente en su parte general (obligación aduanera, importación, exportación, tránsito y zonas francas); sus títulos de régimen sancionatorio y de decomiso fueron sustituidos primero por el Decreto Ley 920 de 2023 y hoy por la Ley 2586 de 2026. Verificado en la compilación jurídica de la DIAN.',
        },
        {
          norm: 'Ley 1609 de 2013',
          article: 'art. 5, numeral 4',
          status: 'modificada',
          note: 'Ley Marco de Aduanas. El numeral 4 del artículo 5 fue declarado inexequible por la Sentencia C-441 de 2021, con efectos diferidos al 20 de junio de 2023, lo que obligó a expedir un nuevo régimen sancionatorio y de decomiso.',
        },
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'art. 459',
          status: 'vigente',
          note: 'Base gravable del impuesto sobre las ventas en la importación: valor en aduana adicionado con el arancel.',
        },
        {
          norm: 'Decreto 390 de 2016',
          status: 'modificada',
          note: 'Nuevo Estatuto Aduanero (NEA) citado por el material de formación (arts. 506 y 507 sobre medidas cautelares); fue sustituido por el Decreto 1165 de 2019, que es la norma hoy aplicable.',
        },
      ],
      links: [
        { label: 'DIAN — Compilación jurídica: Decreto 1165 de 2019 (Estatuto Aduanero)', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1165_2019.htm' },
        { label: 'DIAN — Portal institucional (régimen aduanero)', url: 'https://www.dian.gov.co/' },
        { label: 'Estatuto Tributario — artículo 459 (Secretaría del Senado)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'SUIN-Juriscol — normativa nacional', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'Obligación aduanera sustancial',
        branches: [
          { label: 'Régimen aduanero', children: ['Bienes tangibles', 'Territorio aduanero nacional', 'Principios: eficiencia y favorabilidad'] },
          { label: 'Obligación aduanera', children: ['Trámites aduaneros', 'Pago de tributos, intereses y sanciones', 'Actuaciones de la autoridad'] },
          { label: 'Obligados', children: ['Directos: usuarios aduaneros', 'Indirectos: intervinientes y requeridos'] },
          { label: 'Tributos aduaneros', children: ['Hecho generador: introducción al TAN', 'Sujeto activo: DIAN', 'Sujeto pasivo: importador o declarante', 'Base: valor en aduana'] },
          { label: 'IVA importación', children: ['Base = valor en aduana + arancel', 'Art. 459 E.T.'] },
          { label: 'Documentos', children: ['Formato 500 importación', 'Formato 600 exportación', 'Art. 594: documentos que amparan'] },
        ],
      },
      mindmapText:
        'El régimen aduanero regula el movimiento de bienes tangibles dentro del territorio aduanero nacional mediante el Decreto 1165 de 2019. La obligación aduanera vincula a la administración con los obligados directos (usuarios aduaneros) e indirectos, y comprende trámites, pago de tributos y actuaciones de la autoridad. Los tributos aduaneros se causan por la introducción de mercancías al territorio aduanero nacional, tienen como sujeto activo a la DIAN, como sujeto pasivo al importador o declarante y como base el valor en aduana; el IVA se liquida sobre el valor en aduana más el arancel. La mercancía debe estar amparada por los documentos del artículo 594 del Estatuto Aduanero y los tributos se pagan por bancos autorizados.',
      source: [
        { doc: 'taci', pages: 'págs. 165-175 (Unidad 9: obligación sustancial en el régimen aduanero)' },
        { doc: 'material', pages: 'págs. 69-70 (índice temático del régimen aduanero)', note: 'Confirma la estructura de títulos del Estatuto Aduanero usada en la lección.' },
      ],
    },
    {
      id: 'm09-l02',
      moduleId: 'm09',
      title: 'Los regímenes aduaneros: importación, exportación, tránsito y zonas francas',
      indicators: ['i09'],
      objectives: [
        'Clasificar las modalidades del régimen de importación y distinguir la importación ordinaria de las importaciones temporales.',
        'Diferenciar las modalidades del régimen de exportación y su finalidad económica.',
        'Explicar el régimen de tránsito aduanero y su relación con el transporte multimodal, el cabotaje y el transbordo.',
        'Identificar las clases de zonas francas, sus usuarios y el tratamiento cambiario de las operaciones internas.',
      ],
      sections: [
        {
          heading: 'Cómo se organiza el régimen aduanero',
          paragraphs: [
            'El Estatuto Aduanero organiza la materia por títulos: disposiciones generales, declarantes, zonas primarias aduaneras, inscripción y habilitación de usuarios aduaneros, régimen de importación, régimen de exportación, régimen de tránsito aduanero (con transporte multimodal, cabotaje y transbordo), zonas francas, puerto libre de San Andrés, Providencia y Santa Catalina, zonas de régimen aduanero especial (Urabá, Tumaco y Guapi; Maicao, Uribía y Manaure; Leticia), controles aduaneros, régimen sancionatorio, causales de aprehensión y decomiso, procedimientos administrativos, medidas de frontera, cobro, devolución y compensación de obligaciones aduaneras, disposición de mercancías aprehendidas o abandonadas, notificaciones y disposiciones finales.',
            'Para el examen importan dos criterios de lectura. Primero, el criterio del destino: la mercancía puede ingresar para quedarse (importación ordinaria), ingresar para salir (importación temporal) o simplemente atravesar el territorio (tránsito aduanero). Segundo, el criterio de los tributos: hay regímenes con pago inmediato de tributos aduaneros y regímenes con suspensión o exención de los mismos, sujetos a garantía y a plazos estrictos.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Tres preguntas para clasificar cualquier operación: ¿la mercancía se queda o se va? (importación vs. exportación), ¿se van a pagar tributos ahora o están suspendidos? (ordinario vs. temporal/suspensivo) y ¿la operación termina en el país o fuera de él? (importación/exportación frente a tránsito).',
          },
        },
        {
          heading: 'Régimen de importación',
          paragraphs: [
            'El régimen de importación agrupa las modalidades mediante las cuales ingresan mercancías de procedencia extranjera al territorio aduanero nacional. La modalidad principal es la importación ordinaria, en la que la mercancía ingresa para permanecer en el país y se pagan los tributos aduaneros correspondientes, con levante de la mercancía. Bajo esa lógica operan también la importación con franquicia (tributos exonerados por mandato legal o de tratado) y la reimportación en el mismo estado (retorno de mercancía exportada temporalmente sin haber sido transformada).',
            'El segundo gran grupo es el de las importaciones temporales, que se caracterizan por la suspensión de los tributos aduaneros y por un plazo obligatorio de permanencia:',
          ],
          bullets: [
            'Importación temporal para reexportación en el mismo estado: la mercancía ingresa con suspensión de tributos aduaneros y debe salir sin modificación alguna, salvo la depreciación normal por el uso. Puede ser de corto plazo (hasta seis meses) o de largo plazo (bienes de capital, con plazos de hasta cinco años), y exige garantía constituida a favor de la Nación.',
            'Importación temporal para perfeccionamiento activo: la mercancía ingresa con suspensión de tributos para ser transformada, elaborada o reparada y luego reexportada. Comprende tres clases: bienes de capital (reparación o acondicionamiento), los Sistemas Especiales de Importación-Exportación (conocidos como Plan Vallejo) y el procesamiento industrial.',
            'Otras modalidades: importación para transformación y ensamble, importación por tráfico postal y envíos urgentes, entregas urgentes, importación de bienes para el uso de viajeros (incluido el menaje), y las modalidades asociadas a las zonas de régimen aduanero especial y al puerto libre de San Andrés, Providencia y Santa Catalina.',
          ],
          callout: {
            type: 'aviso',
            text: 'La importación temporal no es una importación sin consecuencias: obliga a terminar el régimen en el plazo autorizado (con reexportación, importación ordinaria, destrucción o legalización) y a constituir garantía. La no terminación oportuna genera sanción y puede dar lugar a aprehensión.',
          },
        },
        {
          heading: 'Régimen de exportación',
          paragraphs: [
            'La exportación es la salida de productos del territorio aduanero nacional hacia el extranjero, así como la de mercancías que ingresan a una zona franca o a un depósito franco, de conformidad con el régimen aduanero. En el trámite intervienen la DIAN como autoridad aduanera, el exportador, la agencia de aduanas como declarante en su nombre y los demás usuarios aduaneros según su participación.',
            'El trámite de exportación se surte conforme a los artículos 340 y siguientes del Decreto 1165 de 2019 y a las normas que lo reglamentan, y culmina con la certificación de embarque. En la exportación se distinguen:',
          ],
          bullets: [
            'Exportación definitiva: la mercancía sale del territorio aduanero nacional para permanecer en el exterior.',
            'Exportación temporal para reimportación en el mismo estado: la mercancía sale y debe retornar sin modificación, con suspensión de tributos a la reimportación dentro del plazo autorizado.',
            'Exportación temporal para perfeccionamiento pasivo: la mercancía sale para ser transformada, elaborada o reparada en el exterior y luego reimportada, con la posibilidad de pagar tributos aduaneros sobre el valor agregado en el exterior cuando se importe el producto resultante.',
            'Otras modalidades: exportación por tráfico postal, envíos urgentes y las modalidades asociadas a zonas francas y al puerto libre.',
          ],
          callout: {
            type: 'importante',
            text: 'Las exportaciones e importaciones de SERVICIOS no son operaciones aduaneras porque el régimen de aduanas solo se refiere a bienes tangibles. Su control corresponde al régimen cambiario (canalización de divisas por el mercado cambiario), aunque la DIAN controle también la subfacturación y la sobrefacturación de esas operaciones.',
          },
        },
        {
          heading: 'Régimen de tránsito aduanero, transporte multimodal, cabotaje y transbordo',
          paragraphs: [
            'El régimen de tránsito aduanero permite el traslado de mercancías bajo control aduanero desde una aduana de partida hasta una aduana de destino, sin que la mercancía pierda su identidad ni se cause tributos aduaneros en el trayecto. Es un régimen suspensivo: la mercancía no se somete aún a las modalidades de importación o exportación y exige garantía, plazos y rutas autorizadas, además de la presentación de la declaración de tránsito y de la planilla que ampara el traslado dentro de la misma jurisdicción.',
            'Junto al tránsito aduanero el estatuto regula el transporte multimodal (cuando el traslado se realiza con dos o más modos de transporte bajo un único contrato), el cabotaje (traslado de mercancías entre puertos nacionales) y el transbordo (traslado de mercancía de un medio de transporte a otro dentro de la misma zona primaria). Todas son operaciones interconectadas: el tránsito, el cabotaje y el transbordo son la mecánica con la que la mercancía se mueve por el país antes de su levante o después de su embarque.',
          ],
        },
        {
          heading: 'Zonas francas: concepto, clases y usuarios',
          paragraphs: [
            'Las zonas francas son áreas del territorio nacional geográficamente delimitadas donde se desarrollan actividades industriales de bienes y servicios, o actividades comerciales, bajo una normativa especial en materia aduanera, tributaria y de comercio exterior. Por mandato legal, las zonas francas y los depósitos habilitados no hacen parte del territorio aduanero nacional: la mercancía que ingresa a ellos no se entiende importada y su salida hacia el resto del país activa el trámite de importación.',
            'El régimen distingue tres clases de zonas francas: la zona franca permanente, que opera como recinto delimitado con uno o varios usuarios; la zona franca permanente especial, que se autoriza para un único proyecto de inversión y opera como recinto delimitado dentro del cual se desarrollan actividades industriales de bienes y servicios; y la zona franca transitoria, autorizada para eventos de duración determinada, como ferias, congresos, seminarios o exposiciones.',
          ],
          table: {
            caption: 'Usuarios y operaciones de las zonas francas',
            headers: ['Tipo de usuario o actividad', 'Característica principal'],
            rows: [
              ['Usuario industrial de bienes', 'Desarrolla actividades de producción, transformación o elaboración de bienes con destino a la exportación o al mercado nacional'],
              ['Usuario industrial de bienes y servicios', 'Combina la actividad industrial con la prestación de servicios'],
              ['Usuario comercial', 'Desarrolla actividades de mercadeo, comercialización, almacenamiento y distribución de bienes'],
              ['Usuario de servicios', 'Presta servicios logísticos, de valor agregado, educativos o de salud, entre otros, dentro del área de la zona franca'],
              ['Zona franca permanente especial', 'Un único proyecto de inversión, con recinto delimitado dentro del cual se realizan actividades industriales'],
              ['Zona franca transitoria', 'Eventos de duración determinada: ferias, congresos, seminarios y exposiciones'],
            ],
          },
          callout: {
            type: 'norma',
            text: 'Para efectos CAMBIARIOS, las operaciones entre residentes y usuarios de zona franca, o entre usuarios de zona franca, se consideran operaciones internas pagaderas en moneda legal colombiana, independientemente de su calificación aduanera. En cambio, la salida de mercancía de zona franca al resto del mundo, aunque no es exportación de bienes para efectos aduaneros, se asimila a exportación para efectos cambiarios y su pago debe canalizarse por el mercado cambiario.',
          },
        },
        {
          heading: 'Cuadro comparativo de los regímenes aduaneros',
          paragraphs: [
            'El siguiente cuadro sintetiza las diferencias que más se preguntan entre las modalidades de importación y exportación y el tránsito aduanero:',
          ],
          table: {
            caption: 'Comparación de regímenes aduaneros',
            headers: ['Régimen o modalidad', 'Finalidad', 'Tributos aduaneros', 'Plazo y garantía', 'Terminación'],
            rows: [
              ['Importación ordinaria', 'Ingreso definitivo de la mercancía al país', 'Se causan y se pagan', 'No aplica plazo de permanencia', 'Levante y libre disposición'],
              ['Importación temporal para reexportación en el mismo estado', 'Uso temporal de la mercancía (bienes de capital, equipos, muestras)', 'Suspendidos', 'Corto plazo hasta 6 meses; largo plazo hasta 5 años; garantía a favor de la Nación', 'Reexportación, importación ordinaria, destrucción o legalización'],
              ['Importación temporal para perfeccionamiento activo', 'Transformar, elaborar o reparar bienes para reexportar', 'Suspendidos', 'Según la clase (bienes de capital, Plan Vallejo o procesamiento industrial) y con garantía', 'Reexportación del producto transformado'],
              ['Importación con franquicia', 'Ingreso definitivo con exención legal de tributos', 'Exonerados por norma legal o tratado', 'Las condiciones del beneficio', 'Levante con destino al fin previsto'],
              ['Exportación definitiva', 'Salida de mercancía para permanecer en el exterior', 'No se causan (los exportadores pueden solicitar la devolución del IVA pagado)', 'No aplica', 'Certificación de embarque'],
              ['Exportación temporal para reimportación en el mismo estado', 'Salida y retorno de la mercancía sin transformación', 'Suspensión en la reimportación', 'Plazo autorizado', 'Reimportación dentro del plazo'],
              ['Exportación temporal para perfeccionamiento pasivo', 'Transformar o reparar la mercancía en el exterior', 'Se pagan sobre el valor agregado en el exterior al reimportar', 'Plazo autorizado', 'Reimportación del producto resultante'],
              ['Tránsito aduanero', 'Trasladar mercancía bajo control entre aduanas', 'No se causan en el trayecto', 'Garantía y plazo del trayecto; rutas autorizadas', 'Llegada a la aduana de destino'],
              ['Zona franca', 'Desarrollar actividad industrial, comercial o de servicios en área delimitada', 'La mercancía no se entiende importada mientras permanezca en la zona', 'Autorización de la zona y del usuario', 'Salida al resto del mundo (exportación) o al TAN (importación)'],
            ],
          },
        },
      ],
      summary: [
        'El régimen de importación incluye la importación ordinaria, la importación con franquicia, la reimportación en el mismo estado y las importaciones temporales (reexportación en el mismo estado y perfeccionamiento activo), que suspenden los tributos y exigen garantía y plazo.',
        'El régimen de exportación comprende la exportación definitiva y las exportaciones temporales (reimportación en el mismo estado y perfeccionamiento pasivo); el trámite culmina con la certificación de embarque.',
        'El tránsito aduanero es un régimen suspensivo que permite trasladar mercancía bajo control entre aduanas; se complementa con el transporte multimodal, el cabotaje y el transbordo.',
        'Las zonas francas y los depósitos habilitados no hacen parte del territorio aduanero nacional; existen zonas francas permanentes, permanentes especiales y transitorias, con usuarios industriales de bienes, industriales de bienes y servicios, comerciales y de servicios.',
        'Para efectos cambiarios, las operaciones entre residentes y usuarios de zona franca son operaciones internas en moneda legal colombiana; la salida de zona franca al resto del mundo se asimila a exportación.',
      ],
      memorize: [
        'Importación temporal: corto plazo hasta 6 meses; largo plazo (bienes de capital) hasta 5 años; suspensión de tributos con garantía.',
        'Perfeccionamiento activo: bienes de capital, Sistemas Especiales de Importación-Exportación (Plan Vallejo) y procesamiento industrial.',
        'Zonas francas: permanente, permanente especial y transitoria. Usuarios: industrial de bienes, industrial de bienes y servicios, comercial y de servicios.',
        'Zonas francas y depósitos habilitados NO hacen parte del territorio aduanero nacional.',
        'Tránsito aduanero = régimen suspensivo de traslado bajo control entre aduanas de partida y de destino.',
      ],
      examples: [
        {
          heading: 'Una importación temporal que se convierte en ordinaria',
          paragraphs: [
            'Una empresa constructora importa temporalmente una grúa por el plazo de largo plazo autorizado para bienes de capital. Si al vencer el plazo el proyecto continúa, tiene tres caminos: reexportar la grúa, destruirla (si procede) o importarla ordinariamente pagando los tributos aduaneros calculados sobre el valor en aduana depreciado, según las reglas de la modalidad. Si no hace nada, incurre en incumplimiento: la mercancía queda irregular, se exponen las garantías y se abre paso a sanción y a aprehensión.',
          ],
        },
        {
          heading: 'Venta de un usuario industrial de zona franca a un cliente del resto del país',
          paragraphs: [
            'Un usuario industrial de bienes vende productos terminados a un comprador ubicado en el resto del territorio aduanero nacional. La operación es una importación: se presenta la declaración de importación (declaración especial de importación desde zona franca, Formato 500) y se pagan tributos aduaneros solo a partir del componente nacional exportado de manera definitiva o introducido de manera definitiva, y sobre la materia prima importada, según las reglas de la modalidad. Para efectos cambiarios, en cambio, la operación es interna entre residentes y se paga en moneda legal colombiana.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Tratar la zona franca como territorio extranjero.',
          correction: 'La zona franca es área del territorio nacional que no hace parte del territorio aduanero nacional. La mercancía que ingresa no se entiende importada, pero la zona está sujeta a control aduanero y su salida al resto del país se somete al régimen de importación.',
        },
        {
          mistake: 'Creer que una importación temporal termina sola cuando vence el plazo autorizado.',
          correction: 'El régimen debe terminarse por reexportación, importación ordinaria, destrucción o legalización dentro del plazo. La no terminación oportuna genera sanción, afecta la garantía y puede dar lugar a aprehensión y decomiso.',
        },
        {
          mistake: 'Suponer que una exportación de servicios se declara como exportación aduanera.',
          correction: 'El régimen aduanero solo cubre bienes tangibles. Las exportaciones de servicios son operaciones del régimen cambiario, con obligación de canalización de divisas cuando corresponda, y su facturación y pago se controlan desde la perspectiva cambiaria y tributaria.',
        },
      ],
      norms: [
        {
          norm: 'Decreto 1165 de 2019',
          article: 'arts. 200-215 (importación temporal), 222-249 (perfeccionamiento activo), 340 y ss. (exportación), 470 y ss. (zonas francas)',
          status: 'vigente',
          note: 'Estatuto Aduanero. Los rangos de artículos corresponden a la estructura del título de importación, exportación y zonas francas verificada en la compilación jurídica de la DIAN.',
        },
        {
          norm: 'Ley 1004 de 2005',
          status: 'vigente',
          note: 'Norma marco de las zonas francas: régimen especial en materia aduanera, tributaria y de comercio exterior.',
        },
        {
          norm: 'Decreto 2147 de 2016',
          status: 'modificada',
          note: 'Régimen de zonas francas citado por el material de formación; su contenido fue recogido y modificado por el Decreto 1165 de 2019, que hoy contiene la regulación aplicable en su título de zonas francas.',
        },
        {
          norm: 'Decreto 1165 de 2019',
          article: 'art. 3',
          status: 'vigente',
          note: 'Definiciones de exportación e importación de bienes, usadas por el régimen cambiario para delimitar las operaciones obligatoriamente canalizables.',
        },
      ],
      links: [
        { label: 'DIAN — Compilación jurídica: Decreto 1165 de 2019 (Estatuto Aduanero)', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1165_2019.htm' },
        { label: 'DIAN — Portal institucional', url: 'https://www.dian.gov.co/' },
        { label: 'SUIN-Juriscol — Ley 1004 de 2005 (zonas francas)', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'Regímenes aduaneros',
        branches: [
          { label: 'Importación', children: ['Ordinaria', 'Con franquicia', 'Reimportación en el mismo estado', 'Temporal para reexportación en el mismo estado', 'Temporal para perfeccionamiento activo'] },
          { label: 'Exportación', children: ['Definitiva', 'Temporal para reimportación en el mismo estado', 'Temporal para perfeccionamiento pasivo'] },
          { label: 'Tránsito', children: ['Tránsito aduanero', 'Transporte multimodal', 'Cabotaje', 'Transbordo'] },
          { label: 'Zonas francas', children: ['Permanente', 'Permanente especial', 'Transitoria', 'Usuarios: industrial, comercial, de servicios'] },
          { label: 'Régimen suspensivo', children: ['Suspensión de tributos', 'Garantía a favor de la Nación', 'Plazo obligatorio de terminación'] },
        ],
      },
      mindmapText:
        'Los regímenes aduaneros organizan la entrada, permanencia y salida de mercancías. En importación existen la ordinaria, la importación con franquicia y las importaciones temporales (para reexportación en el mismo estado y para perfeccionamiento activo), que suspenden tributos y exigen garantía y plazo. En exportación existen la definitiva y las temporales (reimportación en el mismo estado y perfeccionamiento pasivo). El tránsito aduanero traslada mercancía bajo control entre aduanas y se complementa con el transporte multimodal, el cabotaje y el transbordo. Las zonas francas, permanentes, permanentes especiales y transitorias, no hacen parte del territorio aduanero nacional y albergan usuarios industriales de bienes, industriales de bienes y servicios, comerciales y de servicios.',
      source: [
        { doc: 'taci', pages: 'págs. 165-175 (Unidad 9: obligación sustancial aduanera y definiciones de exportación e importación)' },
        { doc: 'material', pages: 'págs. 69-70 (índice de títulos del Estatuto Aduanero: régimen de importación, exportación, tránsito y zonas francas)' },
      ],
      activityId: 'm09-a01',
    },
    {
      id: 'm09-l03',
      moduleId: 'm09',
      title: 'Procedimiento aduanero de competencia de la DIAN: control posterior, aprehensión, decomiso y liquidaciones oficiales',
      indicators: ['i10'],
      objectives: [
        'Describir las medidas cautelares en materia aduanera y su finalidad.',
        'Explicar el procedimiento de decomiso ordinario y las particularidades del decomiso directo.',
        'Identificar el contenido, los términos y los efectos del requerimiento especial aduanero y de las liquidaciones oficiales.',
        'Distinguir los efectos del silencio administrativo positivo en los procesos de fiscalización aduanera.',
        'Reconocer los trámites de cobro, devolución y compensación de obligaciones aduaneras.',
      ],
      sections: [
        {
          heading: 'Los procedimientos administrativos aduaneros',
          paragraphs: [
            'El procedimiento aduanero de competencia de la DIAN comprende los trámites para el decomiso de mercancías, la determinación e imposición de sanciones, la formulación de liquidaciones oficiales de revisión y de corrección, la declaratoria de incumplimiento y la efectividad de garantías, y la verificación de origen de mercancías.',
            'El material de formación construye esta unidad sobre el Decreto 920 de 2023, expedido en junio de 2023 como nuevo régimen sancionatorio y de decomiso de mercancías. Esa norma se expidió porque la Sentencia C-441 de 2021 declaró inexequible el numeral 4 del artículo 5 de la Ley 1609 de 2013, con efectos diferidos al 20 de junio de 2023, mientras el Congreso expedía el régimen sancionatorio y el procedimiento aplicable. El Decreto Ley 920 de 2023 fue a su vez declarado inexequible por la Sentencia C-072 de 2025, con efectos diferidos al 20 de junio de 2026, y fue sustituido por la Ley 2586 de 2026, que hoy contiene el régimen sancionatorio y de decomiso de mercancías en materia aduanera.',
          ],
          callout: {
            type: 'aviso',
            text: 'El material del curso (2022-2023) enseña el régimen del Decreto 920 de 2023. Para efectos de examen conviene manejar las dos capas: la estructura del procedimiento (que se mantiene) y la norma vigente (Ley 2586 de 2026), teniendo presente el principio de favorabilidad aduanera.',
          },
        },
        {
          heading: 'Control posterior y medidas cautelares',
          paragraphs: [
            'El control posterior es el conjunto de actuaciones con las que la autoridad aduanera verifica, después del levante, la exactitud de las declaraciones y el cumplimiento de las obligaciones aduaneras. Para asegurar el resultado de esas actuaciones la ley prevé medidas cautelares: restricciones o suspensiones temporales que impiden disponer de las mercancías o ejercer determinadas facultades.',
            'El material de formación describe ocho medidas cautelares, con fundamento en los artículos 506 y 507 del Decreto 390 de 2016 (Nuevo Estatuto Aduanero):',
          ],
          bullets: [
            'El decomiso.',
            'La suspensión de la operación de importación o exportación.',
            'La suspensión provisional de un operador de comercio exterior.',
            'La inmovilización.',
            'La vigilancia.',
            'El acompañamiento de las mercancías.',
            'La imposición de dispositivos de seguridad.',
            'Cualquier otra medida que cumpla con los fines previstos en la norma.',
          ],
          callout: {
            type: 'importante',
            text: 'No todas las medidas cautelares restringen la disposición de la mercancía. El decomiso, la suspensión de la operación, la suspensión provisional del operador y la inmovilización sí limitan o impiden temporalmente actuar sobre la mercancía; en cambio, la vigilancia, el acompañamiento y los dispositivos de seguridad son instrumentos de control que no impiden la disposición, lo que ha generado debate doctrinal sobre su naturaleza cautelar.',
          },
        },
        {
          heading: 'Decomiso ordinario y acta de aprehensión',
          paragraphs: [
            'Establecida la existencia de una causal de aprehensión y decomiso, la administración aduanera expide un acta de aprehensión, con la cual se inicia el proceso de decomiso. El acta debe contener, como mínimo: la dependencia que la practica; el lugar y la fecha de la diligencia; la causal o causales de aprehensión; la identificación del medio de transporte, cuando haya lugar; la identificación y dirección de las personas que intervienen y de los titulares de derechos o responsables de las mercancías; la descripción de las mercancías que permita identificarlas plenamente por naturaleza, marca, referencia, serial, cantidad y peso; el avalúo unitario y total; y la dirección seccional donde continuará el proceso de decomiso.',
            'Además, cuando las objeciones del interesado no se incorporen al acta de hechos, deben registrarse en el acta de aprehensión, junto con la relación de las pruebas aportadas por el interesado. El acta de aprehensión es un acto administrativo de trámite contra el que no procede recurso alguno en sede administrativa. Cuando pueda haber lugar a imponer la sanción accesoria de cierre del establecimiento de comercio, la propuesta de imposición se incluye en el acta de aprehensión.',
          ],
        },
        {
          heading: 'Decomiso directo',
          paragraphs: [
            'El decomiso directo se realiza simultáneamente con la aprehensión y solo procede cuando la causal o causales de aprehensión surgen respecto de mercancías que la ley enumera taxativamente. Conforme al artículo 667 del Decreto 1165 de 2019, procede respecto de: (1) mercancías que, sin importar su naturaleza, tengan un valor inferior o igual a quinientas (500) UVT; (2) hidrocarburos o sus derivados; (3) licores, vinos, aperitivos, cervezas, sifones y refajos; (4) tabaco y cigarrillos; (5) perfumes; (6) animales vivos; (7) mercancías de prohibida importación; (8) mercancías objeto de devolución en virtud de convenios internacionales; y (9) mercancías que impliquen alto riesgo para la salubridad pública, certificado por la autoridad respectiva.',
            'En la misma diligencia de decomiso directo el interesado debe aportar los documentos que amparen la mercancía de procedencia extranjera, que demuestren su legal importación e impidan el decomiso (artículo 668 del Decreto 1165 de 2019). Si no los aporta en ese momento, la mercancía queda decomisada de forma directa.',
          ],
          table: {
            caption: 'Decomiso ordinario y decomiso directo',
            headers: ['Aspecto', 'Decomiso ordinario', 'Decomiso directo'],
            rows: [
              ['Momento', 'Se inicia con el acta de aprehensión y continúa en la dirección seccional', 'Se realiza simultáneamente con la aprehensión'],
              ['Mercancías', 'Cualquier mercancía respecto de la cual se configure una causal de aprehensión', 'Solo las mercancías taxativamente enumeradas (valor <= 500 UVT, hidrocarburos, licores, tabaco, perfumes, animales vivos, prohibida importación, devolución por convenios, alto riesgo para la salubridad)'],
              ['Oportunidad para defenderse', 'Aportando el documento de objeción a la aprehensión y las pruebas dentro del proceso', 'En la misma diligencia, aportando los documentos que amparen la mercancía e impidan el decomiso'],
              ['Acto que decide', 'Resolución de decomiso, con recurso de reconsideración', 'Acta de decomiso directo, con los recursos previstos en el procedimiento'],
            ],
          },
        },
        {
          heading: 'Requerimiento especial aduanero y liquidaciones oficiales',
          paragraphs: [
            'El requerimiento especial aduanero es el acto con el que se inicia formalmente el proceso administrativo. Conforme al artículo 680 del Decreto 1165 de 2019, la autoridad aduanera lo formula contra el presunto autor o autores de una infracción aduanera, para proponer la imposición de la sanción correspondiente, o contra el declarante, para formular liquidación oficial de corrección o de revisión.',
            'Sin perjuicio de los términos de caducidad y de firmeza de la declaración, el funcionario responsable debe expedirlo a más tardar dentro de los treinta (30) días siguientes a la fecha en que se haya establecido la presunta comisión de la infracción o identificado la inexactitud de la declaración. El requerimiento debe contener: los aspectos de la declaración aduanera que se proponen modificar; la cuantificación de los tributos aduaneros, el rescate y las sanciones que se proponen; la vinculación del agente de aduanas para efectos de deducir la responsabilidad que le pueda caber; la vinculación del garante y de los terceros a que hubiere lugar; los hechos que constituyen la infracción; y las normas en que se sustentan.',
            'El interesado responde dentro de los quince (15) días hábiles siguientes a la notificación, formulando sus objeciones y solicitando las pruebas que pretenda hacer valer; el escrito de respuesta no requiere presentación personal. Vencido el término de respuesta, dentro de los diez (10) días hábiles siguientes se ordena, mediante auto motivado, la práctica de las pruebas solicitadas o de las que se decreten de oficio. El auto se notifica por estado o por vía electrónica si lo autoriza el interesado, y contra el auto que niegue las pruebas procede el recurso de reposición, dentro de los cinco (5) días hábiles siguientes a su notificación, que se resuelve en los cinco (5) días hábiles siguientes a su interposición.',
            'La liquidación oficial es el acto administrativo mediante el cual la autoridad aduanera modifica la declaración aduanera para corregir las inexactitudes que ella presente; puede ser de corrección o de revisión y reemplaza la declaración aduanera correspondiente. La liquidación oficial de corrección procede para corregir errores u omisiones en la declaración que generen un menor pago de tributos aduaneros o de sanciones, y también, previa solicitud del declarante, para liquidar un menor valor por concepto de tributos, sanciones o rescate; la solicitud debe presentarse dentro del término de firmeza de la declaración. La liquidación oficial de revisión se emite una sola vez cuando se presentan inexactitudes que no son susceptibles de corregirse por otra vía: clasificación arancelaria, valor FOB, origen, fletes, seguros, otros gastos y ajustes, y en general cuando el valor en aduana declarado no corresponde al establecido por la autoridad aduanera.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Términos del proceso aduanero: requerimiento especial aduanero dentro de los 30 días siguientes a la detección del hecho; respuesta del interesado en 15 días hábiles; auto de pruebas en los 10 días hábiles siguientes; reposición contra la negativa de pruebas en 5 días hábiles; recurso de reconsideración contra las liquidaciones oficiales, el decomiso y las sanciones en 15 días hábiles.',
          },
        },
        {
          heading: 'Firmeza, recurso de reconsideración y silencio administrativo positivo',
          paragraphs: [
            'La declaración de importación queda en firme transcurridos tres (3) años desde su presentación y aceptación, o desde la corrección o modificación, salvo que se haya notificado requerimiento especial aduanero y en los casos en que la declaración sea objeto de verificación de origen, en los cuales el término de firmeza se suspende desde la notificación del requerimiento ordinario de verificación de origen hasta la ejecutoria de la resolución de determinación de origen.',
            'Contra las liquidaciones oficiales, los decomisos y las resoluciones que impongan sanciones procede el recurso de reconsideración, que se interpone dentro de los quince (15) días hábiles siguientes a la notificación. El recurso debe formularse por escrito con expresión concreta de los motivos de inconformidad, interponerse dentro de la oportunidad legal y por el destinatario del acto, su apoderado o su representante legal; no requiere presentación personal si quien lo presenta ha sido reconocido en la actuación, y solo los abogados en ejercicio pueden ser apoderados. El término para decidir el recurso de reconsideración es de cuatro (4) meses, y se suspende por el tiempo que dure el período probatorio.',
            'Transcurrido el plazo para expedir el acto que resuelve de fondo un proceso de fiscalización (liquidación oficial, sanción, decomiso o recurso de reconsideración) se produce el silencio administrativo positivo, que se declara de oficio o a petición de parte mediante resolución motivada contra la cual procede recurso de apelación. Sus efectos son: en un proceso sancionatorio se entiende absuelto el procesado; en un proceso de liquidación oficial da lugar a la firmeza de la declaración; en un proceso de decomiso da lugar a la devolución de las mercancías previa presentación y aceptación de la declaración aduanera con el cumplimiento de todos los requisitos y el pago de los tributos e intereses; y en una verificación de origen se entiende aceptado el trato arancelario preferencial invocado.',
            'El silencio administrativo positivo NO se configura cuando no se ha presentado el documento de objeción a la aprehensión, cuando se trata de mercancía respecto de la cual no procede rescate o que tiene restricciones legales o administrativas para su importación (salvo que se acredite su cumplimiento), cuando no se ha presentado respuesta al requerimiento especial aduanero, o cuando en la verificación de origen el exportador o productor no respondió a la solicitud de información o cuestionario escrito, no aportó los registros o documentos solicitados o no consintió la visita de verificación. En esos eventos se profiere la decisión de fondo, aun fuera del término.',
          ],
        },
        {
          heading: 'Cobro, devolución y compensación de obligaciones aduaneras',
          paragraphs: [
            'Para el cobro de los tributos aduaneros a la importación, intereses, sanciones, garantías y cualquier otro valor causado a favor de la DIAN por una operación de comercio exterior se aplica el procedimiento del Estatuto Tributario, incluida la causación y liquidación de intereses de mora, la imputación y actualización de valores, la prescripción, las facilidades de pago y la remisión de deudas.',
            'Los intereses de mora se calculan, entre otras fechas, desde el día siguiente al vencimiento del término de permanencia de la mercancía en depósito temporal cuando la declaración de corrección o la liquidación oficial determina un mayor valor a pagar, y desde el día siguiente al vencimiento del plazo para pagar tributos aduaneros, cuotas, pago consolidado y declaraciones de envíos urgentes o mensajería expresa.',
            'La DIAN compensa o devuelve los pagos en exceso, de sanciones o de lo no debido por concepto de obligaciones aduaneras. Excepcionalmente se puede autorizar la compensación de tributos internos a tributos externos y de tributos externos a tributos internos, siempre que no existan deudas en los tributos donde se origina el pago de lo no debido. La solicitud de compensación o devolución del pago en exceso de tributos aduaneros, rescate o sanciones debe presentarse a más tardar dentro de los seis (6) meses siguientes a la fecha del pago que dio origen al exceso, o desde la ejecutoria del acto administrativo cuando las sumas se determinen en liquidaciones oficiales o actos administrativos.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Firmeza de la declaración de importación: 3 años. Recurso de reconsideración: se interpone en 15 días hábiles y se decide en 4 meses. Solicitud de devolución o compensación por pago en exceso: 6 meses.',
          },
        },
      ],
      summary: [
        'El procedimiento aduanero cubre el decomiso, las sanciones, las liquidaciones oficiales de revisión y corrección, la declaratoria de incumplimiento, la efectividad de garantías y la verificación de origen.',
        'Las medidas cautelares buscan asegurar el control; el decomiso, la suspensión de la operación, la suspensión provisional del operador y la inmovilización restringen la disposición de la mercancía, mientras la vigilancia, el acompañamiento y los dispositivos de seguridad no la impiden.',
        'El decomiso ordinario se inicia con el acta de aprehensión (acto de trámite sin recursos), que puede proponer el cierre del establecimiento de comercio; el decomiso directo se practica en la misma diligencia y solo respecto de las mercancías taxativamente señaladas.',
        'El requerimiento especial aduanero se expide dentro de los 30 días siguientes a la detección del hecho, se responde en 15 días hábiles y abre el período probatorio; las liquidaciones oficiales de corrección y de revisión reemplazan la declaración aduanera.',
        'La declaración de importación queda en firme en 3 años; el recurso de reconsideración se interpone en 15 días hábiles y se decide en 4 meses; el silencio administrativo positivo tiene efectos liberatorios, pero no se configura en los eventos legalmente exceptuados.',
        'El cobro sigue el procedimiento tributario; la devolución o compensación por pago en exceso se solicita dentro de los 6 meses siguientes al pago o a la ejecutoria del acto.',
      ],
      memorize: [
        'Acta de aprehensión: acto de trámite, no procede recurso alguno en sede administrativa.',
        'Decomiso directo: se practica simultáneamente con la aprehensión y solo para mercancías taxativas (500 UVT, hidrocarburos, licores, tabaco, perfumes, animales vivos, prohibida importación, devoluciones por convenios, alto riesgo sanitario).',
        'Requerimiento especial aduanero: 30 días para expedirlo, 15 días hábiles para responder, 10 días hábiles para el auto de pruebas.',
        'Recurso de reconsideración: 15 días hábiles para interponer, 4 meses para decidir.',
        'Solicitud de devolución o compensación: 6 meses.',
      ],
      examples: [
        {
          heading: 'Aprehensión de mercancía sin amparo documental',
          paragraphs: [
            'En una diligencia de control posterior, la DIAN encuentra en una bodega mercancía de procedencia extranjera que no está amparada por ninguno de los documentos del artículo 594 del Decreto 1165 de 2019. Como se configura una causal de aprehensión, se levanta el acta de aprehensión con la descripción, el avalúo y la causal invocada. Si el valor de la mercancía no supera 500 UVT (o si se trata, por ejemplo, de licores o tabaco), procede el decomiso directo y el interesado debe aportar en la misma diligencia los documentos que demuestren la legal importación para impedirlo. Si no los aporta, la mercancía se decomisa directamente y el caso pasa a la dirección seccional solo para los efectos de disposición de la mercancía.',
          ],
        },
        {
          heading: 'Silencio administrativo positivo en un proceso de decomiso',
          paragraphs: [
            'Notificada la resolución de decomiso, el interesado interpone recurso de reconsideración en tiempo. Si la DIAN deja transcurrir el término legal sin expedir ni notificar la resolución que decide el recurso, se configura el silencio administrativo positivo, que se declara mediante resolución motivada y produce la devolución de la mercancía, previa presentación y aceptación de la declaración aduanera con el cumplimiento de los requisitos y el pago de los tributos e intereses cuando estos se incrementen. La declaración debe presentarse dentro del mes siguiente a la declaratoria; en caso contrario, la autoridad se pronuncia de fondo.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Interponer recursos contra el acta de aprehensión.',
          correction: 'El acta de aprehensión es un acto administrativo de trámite y contra ella no procede recurso alguno en sede administrativa. La defensa se ejerce mediante el documento de objeción a la aprehensión y, posteriormente, con los recursos contra el acto que decide de fondo.',
        },
        {
          mistake: 'Creer que el decomiso directo aplica a cualquier mercancía.',
          correction: 'El decomiso directo solo procede respecto de las mercancías taxativamente enumeradas (valor igual o inferior a 500 UVT, hidrocarburos y derivados, licores, tabaco, perfumes, animales vivos, mercancía de prohibida importación, devoluciones por convenios internacionales y mercancía de alto riesgo para la salubridad). En los demás casos se sigue el decomiso ordinario.',
        },
        {
          mistake: 'Suponer que el silencio administrativo positivo siempre se configura.',
          correction: 'No se configura, entre otros eventos, cuando no se presentó el documento de objeción a la aprehensión, cuando la mercancía no es susceptible de rescate o tiene restricciones no acreditadas, cuando no se respondió el requerimiento especial aduanero o cuando no se atendió la verificación de origen.',
        },
      ],
      norms: [
        {
          norm: 'Ley 2586 de 2026',
          status: 'vigente',
          note: 'Régimen sancionatorio y de decomiso de mercancías en materia aduanera y procedimiento aplicable; sustituyó al Decreto Ley 920 de 2023 y fue expedida antes del vencimiento del plazo fijado por la Sentencia C-072 de 2025 (20 de junio de 2026).',
        },
        {
          norm: 'Decreto Ley 920 de 2023',
          status: 'modificada',
          note: 'Nuevo régimen sancionatorio y de decomiso aduanero enseñado por el material de formación; declarado inexequible por la Sentencia C-072 de 2025 con efectos diferidos al 20 de junio de 2026 y sustituido por la Ley 2586 de 2026.',
        },
        {
          norm: 'Decreto 1165 de 2019',
          article: 'arts. 667, 668, 673 y 680',
          status: 'vigente',
          note: 'Decomiso directo, documentos que impiden el decomiso, liquidaciones oficiales y requerimiento especial aduanero.',
        },
        {
          norm: 'Sentencia C-441 de 2021',
          status: 'vigente',
          note: 'Declaró inexequible el numeral 4 del artículo 5 de la Ley 1609 de 2013, con efectos diferidos al 20 de junio de 2023; origen de la expedición del nuevo régimen sancionatorio aduanero.',
        },
        {
          norm: 'Decreto 390 de 2016',
          article: 'arts. 506 y 507',
          status: 'modificada',
          note: 'Medidas cautelares en materia aduanera (Nuevo Estatuto Aduanero) citadas por el material; sustituido por el Decreto 1165 de 2019.',
        },
      ],
      links: [
        { label: 'DIAN — Compilación jurídica: Decreto 1165 de 2019', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1165_2019.htm' },
        { label: 'DIAN — Portal institucional', url: 'https://www.dian.gov.co/' },
        { label: 'SUIN-Juriscol — normativa nacional', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'Procedimiento aduanero',
        branches: [
          { label: 'Medidas cautelares', children: ['Decomiso', 'Suspensión de la operación', 'Suspensión del operador', 'Inmovilización', 'Vigilancia, acompañamiento y dispositivos'] },
          { label: 'Decomiso ordinario', children: ['Acta de aprehensión', 'Contenido mínimo', 'Acto de trámite sin recursos'] },
          { label: 'Decomiso directo', children: ['Simultáneo con la aprehensión', 'Mercancías taxativas', 'Documentos que lo impiden'] },
          { label: 'Requerimiento especial aduanero', children: ['30 días', 'Respuesta en 15 días hábiles', 'Auto de pruebas en 10 días hábiles'] },
          { label: 'Liquidaciones oficiales', children: ['De corrección', 'De revisión', 'Reemplazan la declaración'] },
          { label: 'Recursos y silencio positivo', children: ['Reconsideración: 15 días hábiles / 4 meses', 'Efectos del silencio positivo', 'Excepciones a la configuración'] },
          { label: 'Cobro y devoluciones', children: ['Procedimiento del Estatuto Tributario', 'Devolución o compensación en 6 meses'] },
        ],
      },
      mindmapText:
        'El procedimiento aduanero de la DIAN comprende el control posterior con medidas cautelares, el decomiso ordinario que se inicia con el acta de aprehensión y el decomiso directo que se practica en la misma diligencia para mercancías taxativas. El proceso administrativo se abre con el requerimiento especial aduanero (30 días para expedirlo, 15 días hábiles para responder y 10 días hábiles para el auto de pruebas) y puede concluir con una liquidación oficial de corrección o de revisión, que reemplaza la declaración. Contra las liquidaciones, los decomisos y las sanciones procede el recurso de reconsideración, y el vencimiento de los términos sin decisión configura el silencio administrativo positivo, con las excepciones legales. El cobro se rige por el Estatuto Tributario y la devolución o compensación se solicita en el término de seis meses.',
      source: [
        { doc: 'taci', pages: 'págs. 176-187 (Unidad 10: procedimiento aduanero competencia de la DIAN)' },
      ],
    },
    {
      id: 'm09-l04',
      moduleId: 'm09',
      title: 'Régimen probatorio y sancionatorio aduanero: pruebas, infracciones, sanciones y causales de aprehensión',
      indicators: ['i10'],
      objectives: [
        'Identificar los principios probatorios y los medios de prueba admisibles en materia aduanera.',
        'Explicar la práctica y valoración de la inspección contable, la prueba pericial y la inspección administrativa.',
        'Aplicar las reglas de caducidad de la acción administrativa sancionatoria aduanera.',
        'Clasificar las infracciones aduaneras y relacionarlas con las sanciones que corresponden.',
        'Reconocer las principales causales de aprehensión y decomiso y los eventos de remisión a la justicia penal.',
      ],
      sections: [
        {
          heading: 'Principios del derecho probatorio aduanero',
          paragraphs: [
            'En la actuación administrativa aduanera se observan los principios del derecho probatorio: necesidad de la prueba, publicidad, eficacia, contradicción y evaluación de las pruebas fundada en la sana crítica. Toda decisión de la autoridad aduanera debe fundarse en los hechos que aparezcan probados en el expediente, a través de las pruebas allegadas dentro de los términos y oportunidades establecidos en la norma.',
            'El artículo 29 de la Constitución Política garantiza el derecho a presentar y solicitar pruebas y a controvertir las que se aduzcan en contra; son nulas de pleno derecho las pruebas decretadas y obtenidas sin el cumplimiento de las formalidades legales. Aunque la legislación aduanera tiene reglas propias de calificación y carga de la prueba, en los procedimientos aduaneros se aplican también las reglas del procedimiento civil y del procedimiento tributario, de modo que la prueba debe cumplir no solo los requisitos particulares del estatuto aduanero sino los principios generales que garantizan el debido proceso y el derecho de defensa.',
          ],
        },
        {
          heading: 'Medios de prueba admisibles',
          paragraphs: [
            'Son admisibles como medios de prueba los documentos propios del comercio exterior, los señalados en el estatuto aduanero y sus reglamentos, los previstos en los acuerdos comerciales, los convenios de cooperación y asistencia mutua y los tratados suscritos por Colombia y, en lo pertinente, los del régimen probatorio del Estatuto Tributario y del Código General del Proceso.',
            'En particular son admisibles, sin limitarse a ellos: la declaración de parte, la confesión, el testimonio, el interrogatorio de parte, el dictamen pericial, la inspección aduanera, la inspección contable, los documentos, los indicios, los informes y cualesquiera otros medios útiles para formar el convencimiento del funcionario aduanero acerca de los hechos.',
          ],
          table: {
            caption: 'Medios de prueba y reglas de práctica en materia aduanera',
            headers: ['Medio de prueba', 'Regla de práctica'],
            rows: [
              ['Inspección contable', 'Se practica en el control posterior sobre documentos soporte, correspondencia comercial, registros, libros contables, operaciones bancarias, comerciales y fiscales y demás elementos que sirvan para determinar el alcance de las operaciones aduaneras; se deja constancia en el acta de hechos.'],
              ['Prueba pericial', 'La realiza un experto que puede ser funcionario de la DIAN, de otra entidad oficial o un particular experto; se sujeta al CPACA (arts. 218 y ss.) y, si la solicita el usuario, los costos son de su cargo.'],
              ['Inspección administrativa', 'Es la constatación directa de los hechos; se decreta por auto notificado por correo o personalmente, en el que se indican los hechos materia de la prueba y los funcionarios comisionados; de ella se levanta acta. Si se practica antes del proceso, el término es de dos (2) meses, prorrogable por un período igual.'],
              ['Prueba de laboratorio', 'Cuando se requiera y no pueda realizarla la DIAN, se puede acudir a un organismo de evaluación de la conformidad acreditado; los costos los asume el interesado o procesado (art. 41 Ley 1762 de 2015).'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Oportunidades para solicitar pruebas en materia aduanera: con la aprehensión, con el documento de objeción a la aprehensión, con la respuesta al requerimiento especial, con el recurso de reconsideración, o de oficio por la autoridad aduanera.',
          },
        },
        {
          heading: 'Valoración de las pruebas y carga de la prueba',
          paragraphs: [
            'Las pruebas se aprecian en su conjunto, de acuerdo con las reglas de la sana crítica, con independencia de quien las haya solicitado. En el acto que decide de fondo, el funcionario aduanero debe exponer en forma razonada el mérito que le asignó a cada prueba que obra en el expediente.',
            'Las pruebas que solicite la parte interesada deben ser pertinentes, necesarias y conducentes para la verificación de los hechos objeto de la actuación; se rechazan las que notoriamente no lo sean, exponiendo las razones del rechazo. En cuanto a la carga de la prueba, los importadores y exportadores y los responsables de las obligaciones aduaneras derivadas de su participación en las operaciones tienen, en principio, el deber de probar que las mercancías se ajustan a la normativa aduanera, precisamente porque están obligados a conservar y proporcionar a la autoridad aduanera las pruebas de su cumplimiento.',
          ],
        },
        {
          heading: 'Caducidad de la acción administrativa sancionatoria aduanera',
          paragraphs: [
            'La facultad de la autoridad aduanera para imponer sanciones caduca en el término de tres (3) años contados a partir de la comisión del hecho o de la omisión constitutiva de infracción administrativa aduanera; dentro de ese término el acto administrativo que impone la sanción debe haber sido expedido y notificado. Cuando se trate de un hecho o conducta de ejecución sucesiva, continuada o permanente, el término de caducidad se cuenta a partir de la ocurrencia del último hecho, omisión o conducta.',
            'Los actos que resuelven los recursos son distintos del acto sancionatorio y deben decidirse dentro de los términos propios del procedimiento. En todo caso, la acción administrativa sancionatoria aduanera caducará en ocho (8) años cuando se trate de delitos como contrabando, contrabando de hidrocarburos y sus derivados, favorecimiento y facilitación de contrabando, fraude aduanero, enriquecimiento ilícito, tráfico de armas, municiones, explosivos y minas antipersona, tráfico de estupefacientes, lavado de activos, conductas contra la seguridad pública, testaferrato, delitos contra la fe pública, contra los recursos naturales y el medio ambiente, cohecho, delitos contra servidores públicos, contra la propiedad industrial, contra los derechos de autor y fraude procesal.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Caducidad de la acción sancionatoria aduanera: regla general 3 años (expedición y notificación del acto); casos de delitos enumerados por la ley: 8 años.',
          },
        },
        {
          heading: 'Infracciones y sanciones en el régimen aduanero',
          paragraphs: [
            'El régimen sancionatorio aduanero es el conjunto de normas que establecen las sanciones y penalizaciones aplicables a los usuarios aduaneros y demás partes involucradas por el incumplimiento de las obligaciones aduaneras. Sin perjuicio de la responsabilidad civil, penal, fiscal o cambiaria que pueda derivarse de las conductas investigadas, la DIAN aplica las sanciones que correspondan según el tipo de infracción, y ello aun cuando se subsanen los errores que dieron origen a la infracción y se paguen los tributos aduaneros.',
            'Las sanciones de suspensión solo se aplican a las operaciones realizadas con posterioridad a la fecha del acto administrativo que las impone, y los procesos en curso deben tramitarse hasta su conclusión. Pueden ser sujetos de sanción quienes realizan declaraciones de aduanas, los declarantes autorizados, reconocidos o registrados, las personas que utilicen zonas francas, los depósitos públicos y privados, los titulares de puertos y muelles de servicio, los usuarios de procesamiento electrónico de datos, los intermediarios de los modos de transporte postal y de correo urgente, los transportistas y los transitarios.',
            'El Decreto 920 de 2023 clasificó las infracciones administrativas aduaneras en leves, graves y gravísimas, sancionadas con amonestación, multas, suspensión o cancelación de la autorización, inscripción o habilitación para ejercer actividades, según la naturaleza de la infracción y la gravedad de la falta. La sanción de amonestación consiste en un llamado de atención formal y escrito que hace la autoridad aduanera y queda registrado en el sistema de información aduanera; la sanción de cancelación surte efecto para operaciones posteriores a la ejecutoria del acto que la impone.',
            'El sistema de categorías del Decreto 920 de 2023 se estructuró así: las infracciones de categoría 1 y 2 se entienden gravísimas, las de categoría 3 graves y las de categorías 4 y 5 leves.',
          ],
          table: {
            caption: 'Categorías de infracción y sanciones (esquema del Decreto 920 de 2023)',
            headers: ['Categoría', 'Conductas típicas', 'Sanción'],
            rows: [
              ['Categoría 1 (gravísima)', 'Usuarios aduaneros habilitados, autorizados, calificados, inscritos o registrados que introducen mercancía por lugar no habilitado u omitiendo la presentación de los documentos que la amparan, sustraen u ocultan mercancía del control aduanero, simulan operaciones de comercio exterior, introducen mercancía de prohibida importación, usan medios irregulares para obtener la habilitación o afectan la salud, la seguridad nacional, la seguridad en las fronteras o la cadena logística.', 'Multa del 100 % del valor FOB de la mercancía o de su avalúo, el que sea mayor, sin que sea inferior a 4.000 UVT por operación.'],
              ['Categoría 2 (gravísima)', 'Las mismas conductas cometidas por usuarios aduaneros distintos de los de categoría 1.', 'Multa del 100 % del valor FOB o del avalúo, el que sea mayor; si no se conoce el valor, 1.000 UVT.'],
              ['Categoría 3 (grave)', 'Incumplimiento de trámites que puede dar lugar a menor pago de tributos, mercancía no declarada, incumplimiento de requisitos de ingreso, permanencia o salida de zona franca, obtención de beneficios sin derecho, incumplimiento de restricciones legales o administrativas, violación de derechos de propiedad intelectual, incumplimiento de requisitos de habilitación.', 'Multa de 400 UVT.'],
              ['Categoría 4 (leve)', 'Incumplimiento de términos y condiciones de los procesos aduaneros que obstaculiza el control o la actividad de la autoridad aduanera, y demás conductas no clasificadas en las categorías anteriores siempre que exista una obligación en la normatividad aduanera.', 'Multa de 150 UVT.'],
              ['Categoría 5 (leve)', 'Afectación menor en los procesos aduaneros, como mecanismo de prevención para evitar su repetición e incentivar la cultura de cumplimiento.', 'Amonestación.'],
            ],
          },
          callout: {
            type: 'importante',
            text: 'El valor mínimo de cualquier sanción, incluidas las sanciones reducidas, ya sea que la liquide el infractor o la autoridad aduanera, es el equivalente a 10 UVT. Es una regla transversal del esquema sancionatorio.',
          },
        },
        {
          heading: 'Causales de aprehensión y decomiso de mercancías',
          paragraphs: [
            'Las causales de aprehensión y decomiso son los hechos típicos que habilitan a la autoridad aduanera para aprehender la mercancía y, en su caso, decomisarla. El régimen las enumera taxativamente y la Ley 2586 de 2026 las reorganizó y redujo, en línea con la simplificación del catálogo sancionatorio. Los grupos de causales que tradicionalmente se identifican son:',
          ],
          bullets: [
            'Mercancía de procedencia extranjera que no se encuentra amparada por los documentos exigidos legalmente (la causal más frecuente del control posterior).',
            'Mercancía introducida al territorio aduanero nacional por lugar no habilitado u omitiendo la presentación ante la autoridad aduanera.',
            'Mercancía no declarada, con declaración inexacta en elementos esenciales, o amparada con documentos falsos, adulterados o que no corresponden a la mercancía.',
            'Mercancía de prohibida importación o cuya importación está restringida sin que se acredite el cumplimiento de la restricción.',
            'Mercancía respecto de la cual no se terminó oportunamente una modalidad suspensiva (por ejemplo, importación temporal vencida) o no se cumplió la destinación o el compromiso de exportación asumido.',
            'Mercancía que no puede ser rescatada por no cumplir las condiciones legales, o mercancía abandonada en los términos de la ley.',
            'Mercancía vinculada a delitos aduaneros como el contrabando o el fraude aduanero.',
          ],
          callout: {
            type: 'aviso',
            text: 'El régimen de la Ley 2586 de 2026 eliminó los errores de digitación en el serial o en la descripción como causal autónoma de aprehensión: esas diferencias pueden corregirse sin sanción y sin pérdida de la mercancía. Es un buen ejemplo del principio de favorabilidad aplicado al control aduanero.',
          },
        },
        {
          heading: 'Del régimen del material al régimen vigente: del Decreto 920 de 2023 a la Ley 2586 de 2026',
          paragraphs: [
            'El material de formación describe los desarrollos del Decreto 920 de 2023: una sanción mínima de 10 UVT, la posibilidad de que la DIAN suspenda hasta por un mes el término para expedir el acto sancionatorio, la vía Per Saltum para acudir a la jurisdicción contencioso administrativa sin agotar el recurso de reconsideración, un procedimiento abreviado para infracciones leves, la presentación electrónica o física de los recursos de reconsideración y la notificación de los actos administrativos para dar aplicación al silencio administrativo positivo.',
            'La Ley 2586 de 2026 mantiene la estructura de categorías y reemplazó el régimen anterior. Entre sus rasgos principales: reduce y reorganiza el catálogo de infracciones y de causales de aprehensión, incorpora la debida diligencia como causal de exoneración de responsabilidad, permite la corrección voluntaria sin sanción cuando la DIAN no ha iniciado el control, mantiene sanciones mínimas, y fija reglas de tránsito normativo: los procesos en curso continúan solo si la conducta conserva una descripción típica equivalente en la nueva ley, aplicándose siempre la sanción más favorable. Para los titulares de garantías globales y los Operadores Económicos Autorizados se regula además el cobro de las sumas solo después de que se resuelva la discusión en sede judicial.',
          ],
        },
        {
          heading: 'Sanciones penales y remisión a la Fiscalía',
          paragraphs: [
            'Cuando en ejercicio del control se encuentren hechos que puedan constituir delito, deben ponerse en conocimiento de la Fiscalía General de la Nación, conforme al artículo 67 del Código de Procedimiento Penal, siguiendo las disposiciones internas de la DIAN. En los eventos en que, en la aprehensión o decomiso de mercancía, se determine que la conducta puede dar lugar a delitos previstos en la ley penal, la unidad aprehensora debe remitir el informe a la Subdirección de Asuntos Penales de la Dirección de Gestión Jurídica, o a los grupos internos de trabajo de unidad penal o dependencias equivalentes de la respectiva dirección seccional, adjuntando copia de las actuaciones adelantadas para la formulación de la denuncia penal.',
            'Cuando el interesado haya presentado documento de objeción contra el reconocimiento y avalúo de la mercancía o cuando mediante avalúo de oficio se disminuya el valor de la mercancía con incidencia en la investigación penal, debe informarse al día siguiente de la modificación oficial del avalúo al área de unidad penal competente.',
          ],
        },
      ],
      summary: [
        'La actuación administrativa aduanera se rige por los principios de necesidad de la prueba, publicidad, eficacia, contradicción y sana crítica; toda decisión debe fundarse en hechos probados en el expediente.',
        'Son admisibles los medios de prueba del comercio exterior, del estatuto aduanero, de los tratados y, en lo pertinente, del Estatuto Tributario y del Código General del Proceso: declaración de parte, confesión, testimonio, peritaje, inspección aduanera y contable, documentos e indicios.',
        'Las pruebas se solicitan con la aprehensión, con la objeción a la aprehensión, con la respuesta al requerimiento especial o con el recurso de reconsideración, o se decretan de oficio; se valoran en conjunto según la sana crítica.',
        'La acción sancionatoria aduanera caduca en 3 años (expedición y notificación del acto) y en 8 años tratándose de los delitos enumerados por la ley.',
        'El régimen sancionatorio clasifica las infracciones en categorías: 1 y 2 gravísimas, 3 graves y 4 y 5 leves, con sanciones que van del 100 % del valor FOB (mínimo 4.000 UVT) hasta la amonestación, y con un mínimo general de 10 UVT.',
        'Las causales de aprehensión y decomiso son taxativas y giran en torno a la mercancía sin amparo documental, introducida por lugar no habilitado, no declarada, de prohibida importación, con régimen suspensivo no terminado o vinculada a delitos; los hechos con apariencia de delito se remiten a la Fiscalía.',
      ],
      memorize: [
        'Sana crítica + necesidad, publicidad, eficacia y contradicción de la prueba.',
        'Caducidad sancionatoria aduanera: 3 años (regla general); 8 años en los delitos enumerados por la ley.',
        'Categorías: 1 y 2 = gravísimas (hasta 100 % del valor FOB); 3 = grave (400 UVT); 4 = leve (150 UVT); 5 = leve (amonestación).',
        'Sanción mínima de cualquier multa, incluidas las reducidas: 10 UVT.',
        'Inspección administrativa: 2 meses, prorrogable por otro período igual, cuando se practica antes del proceso.',
      ],
      examples: [
        {
          heading: 'Sanción por mercancía no declarada',
          paragraphs: [
            'Un usuario aduanero habilitado introduce mercancía por un lugar no habilitado y omite la presentación de los documentos que la amparan. La conducta se tipifica en la categoría 1 (gravísima) cuando la comete un usuario aduanero habilitado, autorizado o registrado: la multa es del 100 % del valor FOB de la mercancía o de su avalúo, el que sea mayor, con un piso de 4.000 UVT por operación. Si la misma conducta la comete un usuario aduanero no habilitado, se ubica en la categoría 2 y, si no se conoce el valor de la mercancía, la sanción equivale a 1.000 UVT. En ambos casos la multa no puede liquidarse por debajo de 10 UVT y procede además la aprehensión y el decomiso de la mercancía.',
          ],
        },
        {
          heading: 'Corrección voluntaria y debida diligencia bajo la Ley 2586 de 2026',
          paragraphs: [
            'Una empresa detecta por su cuenta que declaró mal la subpartida arancelaria de una importación. Antes de que la DIAN inicie control, corrige la declaración y paga la diferencia de tributos, con lo cual, bajo el régimen de la Ley 2586 de 2026, la corrección voluntaria la exonera de sanción por esa conducta. Si la DIAN ya hubiera iniciado el control, la empresa podría alegar la debida diligencia como causal de exoneración, demostrando que contaba con controles internos razonables y que la inexactitud no derivó de un incumplimiento culposo o doloso.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que probar la legalidad de la mercancía es carga exclusiva de la DIAN.',
          correction: 'Los importadores y exportadores y los responsables de obligaciones aduaneras tienen el deber de conservar y proporcionar las pruebas de que las mercancías se ajustan a la normativa aduanera. La autoridad controla, pero la prueba de cumplimiento está en cabeza del obligado.',
        },
        {
          mistake: 'Aplicar los términos de caducidad del procedimiento tributario al aduanero.',
          correction: 'En materia aduanera la acción sancionatoria caduca en 3 años desde la comisión del hecho o la omisión (8 años en los delitos enumerados por la ley), término dentro del cual el acto sancionatorio debe estar expedido y notificado.',
        },
        {
          mistake: 'Suponer que la suspensión de la autorización afecta las operaciones anteriores.',
          correction: 'Las sanciones de suspensión solo se aplican a las operaciones realizadas con posterioridad a la fecha del acto administrativo que las impone; los procesos en curso se tramitan hasta su conclusión.',
        },
      ],
      norms: [
        {
          norm: 'Ley 2586 de 2026',
          status: 'vigente',
          note: 'Régimen sancionatorio y de decomiso de mercancías en materia aduanera vigente: reduce el catálogo de infracciones y de causales de aprehensión, incorpora la debida diligencia como causal de exoneración y la corrección voluntaria sin sanción.',
        },
        {
          norm: 'Decreto Ley 920 de 2023',
          article: 'arts. 15, 30 y ss.',
          status: 'modificada',
          note: 'Régimen sancionatorio enseñado por el material (categorías 1 a 5, sanciones en UVT y porcentaje del valor FOB, sanción mínima de 10 UVT); sustituido por la Ley 2586 de 2026.',
        },
        {
          norm: 'Ley 1762 de 2015',
          article: 'art. 41',
          status: 'vigente',
          note: 'Pruebas de laboratorio a través de organismos de evaluación de la conformidad acreditados; los costos los asume el interesado o procesado.',
        },
        {
          norm: 'Ley 1609 de 2013',
          article: 'art. 5, numeral 4',
          status: 'modificada',
          note: 'Declarado inexequible por la Sentencia C-441 de 2021, con efectos diferidos; es el origen de la reforma al régimen sancionatorio y de decomiso aduanero.',
        },
        {
          norm: 'Código de Procedimiento Penal (Ley 906 de 2004)',
          article: 'art. 67',
          status: 'vigente',
          note: 'Deber de poner en conocimiento de la Fiscalía General de la Nación los hechos que puedan constituir delito.',
        },
        {
          norm: 'Causales de aprehensión y decomiso de mercancías (enumeración legal)',
          status: 'verificar',
          note: 'El material de formación cita 42 causales de aprehensión (art. 69 del Decreto Ley 920 de 2023) y las fuentes consultadas reportan cifras y numeraciones distintas tras la expedición de la Ley 2586 de 2026 (reducción del catálogo). La lección enseña los grupos de causales, no su enumeración cerrada: debe verificarse la lista vigente en el texto actual del régimen sancionatorio aduanero.',
        },
      ],
      links: [
        { label: 'DIAN — Compilación jurídica: Decreto 1165 de 2019', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1165_2019.htm' },
        { label: 'DIAN — Portal institucional', url: 'https://www.dian.gov.co/' },
        { label: 'SUIN-Juriscol — normativa nacional', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'Régimen probatorio y sancionatorio aduanero',
        branches: [
          { label: 'Principios probatorios', children: ['Necesidad de la prueba', 'Publicidad', 'Eficacia', 'Contradicción', 'Sana crítica'] },
          { label: 'Medios de prueba', children: ['Declaración de parte y confesión', 'Testimonio e interrogatorio', 'Dictamen pericial', 'Inspección aduanera, contable y administrativa', 'Documentos, indicios e informes'] },
          { label: 'Oportunidades', children: ['Aprehensión u objeción', 'Respuesta al requerimiento especial', 'Recurso de reconsideración', 'De oficio'] },
          { label: 'Caducidad', children: ['3 años: regla general', '8 años: delitos enumerados'] },
          { label: 'Infracciones y sanciones', children: ['Categorías 1 y 2: gravísimas', 'Categoría 3: grave', 'Categorías 4 y 5: leves', 'Mínimo general: 10 UVT'] },
          { label: 'Causales de aprehensión', children: ['Mercancía sin amparo documental', 'Lugar no habilitado', 'No declarada o con documentos falsos', 'Prohibida importación', 'Régimen suspensivo no terminado'] },
          { label: 'Sanciones penales', children: ['Remisión a la Fiscalía', 'Subdirección de Asuntos Penales', 'Avalúo con incidencia penal'] },
        ],
      },
      mindmapText:
        'El régimen probatorio aduanero se apoya en la necesidad, publicidad, eficacia y contradicción de la prueba, valorada en conjunto según la sana crítica. Son admisibles los medios de prueba del comercio exterior, del estatuto aduanero, de los tratados y, en lo pertinente, del Estatuto Tributario y del Código General del Proceso; las pruebas se solicitan en oportunidades precisas o se decretan de oficio. La acción sancionatoria caduca en 3 años, o en 8 años tratándose de los delitos enumerados. Las infracciones se clasifican en categorías (1 y 2 gravísimas, 3 grave, 4 y 5 leves) con sanciones que van del 100 % del valor FOB hasta la amonestación y un mínimo de 10 UVT, y las causales de aprehensión y decomiso son taxativas. Los hechos con apariencia de delito se remiten a la Fiscalía General de la Nación.',
      source: [
        { doc: 'taci', pages: 'págs. 188-192 (Unidad 11: régimen probatorio aduanero)' },
        { doc: 'taci', pages: 'págs. 193-198 (Unidad 12: régimen sancionatorio aduanero)' },
      ],
    },
  ],
}
