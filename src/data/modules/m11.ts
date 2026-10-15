import type { ModuleDef } from '../types'

// ============================================================
// Módulo 11 — Fiscalidad internacional
// Indicadores: i09 (obligaciones formales y sustanciales) e i10 (procedimiento de fiscalización)
// Fuente principal: TACI, Unidad 3 (págs. 103-131).
// Verificación normativa: el régimen de precios de transferencia del Estatuto
// Tributario (arts. 260-1 a 260-11) fue reformado por las Leyes 1819 de 2016 y
// 2155 de 2021 y reglamentado en el Decreto 1625 de 2016. Las listas de
// jurisdicciones no cooperantes y los topes en UVT de cada obligación se
// actualizan periódicamente y se marcan como 'verificar'.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm11',
  order: 11,
  title: 'Fiscalidad internacional',
  description:
    'Residencia fiscal de personas naturales y jurídicas, sede efectiva de administración, rentas de fuente nacional y extranjera, régimen de precios de transferencia (principio de plena competencia, vinculación económica, métodos y documentación comprobatoria) y control de la DIAN a las operaciones internacionales: declaración informativa, intercambio de información y sanciones.',
  indicators: ['i09', 'i10'],
  lessons: [
    {
      id: 'm11-l01',
      moduleId: 'm11',
      title: 'Residencia fiscal y tributación de las operaciones internacionales',
      indicators: ['i09'],
      objectives: [
        'Explicar la tensión entre los criterios de fuente y de residencia y su relación con la doble tributación.',
        'Aplicar los criterios de residencia de las personas naturales del artículo 10 del Estatuto Tributario.',
        'Determinar la residencia de las personas jurídicas y el alcance de la sede efectiva de administración.',
        'Distinguir los efectos tributarios de la residencia: renta mundial frente a renta de fuente nacional.',
        'Identificar rentas de fuente nacional y extranjera conforme al artículo 24 del Estatuto Tributario.',
      ],
      sections: [
        {
          heading: 'El problema de la fiscalidad internacional: residencia y fuente',
          paragraphs: [
            'En un mundo sin fronteras económicas, la renta puede obtenerse en un país distinto de aquel donde reside su beneficiario y los patrimonios pueden estar distribuidos entre varias jurisdicciones. Cada Estado aplica un criterio de conexión para gravar: el criterio de la FUENTE (donde se origina la renta) y el criterio de la RESIDENCIA (donde el contribuyente tiene su vínculo personal o societario). El cruce de ambos criterios produce la doble tributación internacional, que se corrige mediante convenios para evitar la doble imposición y, cuando no existen, mediante reglas unilaterales de crédito tributario.',
            'La fiscalidad internacional es, entonces, el conjunto de normas que determinan quién tributa, sobre qué rentas y en qué país: la residencia define el universo de rentas gravables (renta mundial o renta de fuente nacional), las reglas de fuente definen qué rentas se consideran nacionales, y los convenios distribuyen la potestad tributaria entre los Estados y establecen los métodos para eliminar la doble imposición.',
          ],
        },
        {
          heading: 'Residencia de las personas naturales (art. 10 E.T.)',
          paragraphs: [
            'El artículo 10 del Estatuto Tributario define cuándo una persona natural es residente fiscal en Colombia. Son residentes las personas naturales que cumplan cualquiera de los siguientes criterios:',
          ],
          bullets: [
            'Permanecer continua o discontinuamente en el país por más de ciento ochenta y tres (183) días calendario en el año o período gravable, incluyendo días de entrada y de salida; en el caso de fracciones de día se computa el día completo.',
            'Permanecer continua o discontinuamente en el país por más de ciento ochenta y tres (183) días calendario en el año o período gravable, contados dentro de un período de trescientos sesenta y cinco (365) días consecutivos (criterio de permanencia en el año o en los 365 días consecutivos, según la formulación vigente).',
            'Ser nacional colombiano y tener en el año o período gravable el centro de sus intereses vitales o de sus negocios en el país, o ser nacional que ostente la calidad de funcionario público en el exterior y conserve su relación laboral con el Estado.',
            'Ser nacional colombiano y no demostrar una residencia fiscal diferente mediante el certificado correspondiente.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Regla de los 183 días: quien permanece en el país más de 183 días calendario en el año o período gravable (o dentro de los 365 días consecutivos) es residente fiscal, y como tal tributa sobre su renta mundial.',
          },
        },
        {
          heading: 'Criterios adicionales y la regla del 50 %',
          paragraphs: [
            'El artículo 10 incorpora criterios especiales para evitar que la residencia se determine solo por la permanencia: los nacionales colombianos tienen reglas propias (centro de intereses vitales o de negocios, calidad de funcionario público en el exterior, obligación de demostrar residencia fiscal en otro país), y el parágrafo introducido por la Ley 1739 de 2014 establece que se considera residente fiscal la persona natural nacional colombiana cuyo cincuenta por ciento (50 %) o más de sus ingresos o de sus activos, en el año o período gravable, se encuentren localizados en Colombia, con las excepciones previstas (rentas pasivas y otras que la norma señala).',
            'La residencia puede demostrarse o desvirtuarse con el certificado de residencia fiscal expedido por la autoridad competente del otro país, que es el documento llamado a acreditar la residencia ante la DIAN y que resulta indispensable para invocar los beneficios de un convenio de doble tributación.',
          ],
          callout: {
            type: 'aviso',
            text: 'Los convenios de doble tributación contienen reglas de desempate para los casos de doble residencia (vivienda permanente, centro de intereses vitales, nacionalidad, etc.). Cuando no hay convenio, se aplica la legislación interna: la regla del 50 % de ingresos o activos en Colombia refuerza la residencia de los nacionales.',
          },
        },
        {
          heading: 'Residencia de las personas jurídicas y sede efectiva de administración',
          paragraphs: [
            'Las sociedades y entidades nacionales son contribuyentes del impuesto sobre la renta por sus rentas de fuente nacional y extranjera, con independencia de su nacionalidad o domicilio. Junto al criterio de la constitución o el domicilio, el artículo 12-1 del Estatuto Tributario introdujo el criterio de la sede efectiva de administración: se considera sociedad nacional, y por lo tanto residente fiscal en Colombia, la sociedad o entidad que tenga su sede efectiva de administración en el territorio colombiano, aunque se haya constituido en el exterior.',
            'La sede efectiva de administración se ubica en Colombia cuando aquí se toman las decisiones comerciales y de gestión necesarias para desarrollar el objeto social principal. La norma y su reglamentación contemplan excepciones y elementos de prueba para no reubicar la sede por hechos accidentales: la simple celebración de la junta directiva o de órganos sociales en el país, la tenencia de acciones o participaciones por parte de accionistas residentes o la condición de sociedad cotizada en bolsa no implican por sí solas la sede efectiva de administración; tampoco se considera que se administra en Colombia una sociedad cuyo ochenta por ciento (80 %) o más de sus ingresos se origine en la jurisdicción donde está constituida, excluidas las rentas pasivas.',
            'Las sociedades extranjeras y los establecimientos permanentes de entidades del exterior son contribuyentes por sus rentas de fuente nacional, conforme al artículo 12 del Estatuto Tributario, salvo cuando exista un régimen especial (por ejemplo, el de las entidades del exterior bajo el régimen de ECE) o un convenio que modifique la distribución de la potestad.',
          ],
          callout: {
            type: 'norma',
            text: 'Artículo 12-1 del Estatuto Tributario (adicionado por la Ley 1819 de 2016): sede efectiva de administración. Una sociedad constituida en el exterior puede ser residente fiscal colombiana si la sede de administración está en Colombia.',
          },
        },
        {
          heading: 'Efectos de la residencia: renta mundial y renta de fuente nacional',
          paragraphs: [
            'La residencia determina la base: los residentes fiscales en Colombia (personas naturales, personas jurídicas y sus equivalentes) son contribuyentes por su renta mundial, es decir, por la totalidad de sus ingresos cualquiera sea el lugar donde se generen, con derecho al crédito por los impuestos pagados en el exterior conforme a las reglas del artículo 254 del Estatuto Tributario y a los convenios. Los no residentes y las entidades del exterior sin presencia en el país tributan únicamente sobre sus rentas y ganancias ocasionales de fuente nacional.',
            'Este esquema exige tres operaciones técnicas que el fiscalizador aplica de forma permanente: (i) determinar la residencia del contribuyente; (ii) calificar la fuente de cada renta; y (iii) aplicar el crédito o el convenio cuando corresponda. Un error en la primera operación contamina todas las siguientes.',
          ],
          table: {
            caption: 'Efectos de la residencia fiscal',
            headers: ['Situación', 'Base gravable', 'Reglas relevantes'],
            rows: [
              ['Residente fiscal (persona natural o jurídica)', 'Renta mundial: rentas de fuente nacional y de fuente extranjera', 'Crédito por impuestos pagados en el exterior (art. 254 E.T.), precio de transferencia, ECE, CHC, convenios de doble tributación'],
              ['No residente (persona natural)', 'Solo renta de fuente nacional', 'Retención en la fuente sobre los pagos; reglas especiales de los convenios'],
              ['Entidad del exterior sin residencia ni establecimiento permanente', 'Solo renta de fuente nacional', 'Retención en la fuente (art. 408 y siguientes E.T.); reglas de los CDIs'],
              ['Sociedad extranjera con sede efectiva de administración en Colombia', 'Renta mundial (se considera nacional)', 'Art. 12-1 E.T. y excepciones reglamentadas'],
            ],
          },
        },
        {
          heading: 'Rentas de fuente nacional y de fuente extranjera (art. 24 E.T.)',
          paragraphs: [
            'El artículo 24 del Estatuto Tributario enumera las rentas que se consideran de fuente nacional. La calificación es decisiva porque de ella depende la potestad del Estado colombiano para gravarlas en cabeza de los no residentes y la aplicación de las reglas de retención en la fuente.',
          ],
          table: {
            caption: 'Principales rentas de fuente nacional',
            headers: ['Tipo de renta', 'Regla general'],
            rows: [
              ['Bienes inmuebles', 'Se consideran de fuente nacional cuando están ubicados en el país, con sus accesorios.'],
              ['Bienes muebles', 'Se consideran de fuente nacional cuando están ubicados en el país (con las excepciones legales, como los bienes muebles de personas naturales que no los posean de manera directa o indirecta a través de sociedades).'],
              ['Explotación de bienes y servicios', 'Las rentas de la explotación de toda especie de propiedad industrial o del know-how, de la prestación de servicios de asistencia técnica, de servicios técnicos, digitales o de consultoría, cuando se originen en la prestación de servicios desde el exterior o se exploten en el país.'],
              ['Enajenación de acciones y participaciones', 'La enajenación de acciones o cuotas de interés social de sociedades u otras entidades nacionales, así como las vinculadas a la venta de activos fijos, se califican como de fuente nacional, con reglas especiales para la enajenación indirecta de acciones.'],
              ['Servicios de transporte y comunicación', 'Las rentas de transporte y de las comunicaciones internacionales se gravan conforme a las reglas especiales del artículo 24 y de los convenios.'],
              ['Beneficios de contratos y dividendos', 'Los beneficios de la enajenación de bienes de personas naturales residentes, los dividendos y los demás conceptos que la norma enumera tienen reglas propias de calificación.'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Toda renta que no se califique como de fuente nacional por el artículo 24 E.T. y las normas especiales es de fuente extranjera. La calificación de fuente es el primer paso de cualquier análisis de fiscalidad internacional.',
          },
        },
        {
          heading: 'Doble tributación: convenios, crédito y cláusulas antiabuso',
          paragraphs: [
            'La doble tributación se elimina por tres vías: los convenios para evitar la doble imposición (CDIs), que distribuyen la potestad tributaria entre los Estados contratantes y fijan límites a la retención en la fuente; la Decisión 578 de la Comunidad Andina, que opera como régimen multilateral en la subregión; y las reglas unilaterales del Estatuto Tributario, principalmente el crédito por impuestos pagados en el exterior del artículo 254.',
            'Los CDIs generan incentivos para la planificación tributaria que la DIAN controla con especial atención: el treaty shopping (utilización de sociedades interpuestas residentes en una jurisdicción con convenio para acceder a sus beneficios), la creación de sociedades canalizadoras (conduit companies) sin sustancia económica, las sociedades escalonadas (stepping stone) y las operaciones de tránsito o channel. Para contrarrestarlas, los convenios incluyen cláusulas de abuso (cláusula de abstinencia, de transparencia, de exclusión, de sujeción efectiva al impuesto, de tránsito y de buena fe) y el Estatuto prevé la facultad de desconocer los efectos de las operaciones sin propósito económico o con abuso en materia tributaria.',
          ],
          callout: {
            type: 'importante',
            text: 'Los beneficios de un convenio no son automáticos: exigen residencia fiscal acreditada con el certificado del otro Estado, beneficiario efectivo y sustancia económica. La DIAN verifica estos requisitos antes de reconocer tarifas reducidas o exenciones.',
          },
        },
      ],
      summary: [
        'La fiscalidad internacional combina el criterio de la fuente con el criterio de la residencia; su cruce genera doble tributación, que se corrige con convenios y con el crédito tributario unilateral.',
        'Son residentes fiscales las personas naturales que permanecen más de 183 días calendario en el año o dentro de los 365 días consecutivos y los nacionales que tienen su centro de intereses vitales o de negocios en el país; la regla del 50 % de ingresos o activos refuerza la residencia de los nacionales.',
        'Las sociedades constituidas en el exterior pueden ser residentes fiscales colombianas si tienen en el país su sede efectiva de administración (art. 12-1 E.T.), con las excepciones reglamentadas.',
        'Los residentes tributan sobre su renta mundial con derecho al crédito por impuestos pagados en el exterior; los no residentes y las entidades del exterior solo sobre su renta de fuente nacional.',
        'El artículo 24 del Estatuto Tributario enumera las rentas de fuente nacional; lo que no está allí ni en normas especiales es de fuente extranjera.',
        'Los CDIs distribuyen la potestad tributaria y limitan la retención, pero su aplicación exige residencia acreditada, beneficiario efectivo y control de las figuras de treaty shopping, conduits y stepping stone.',
      ],
      memorize: [
        '183 días calendario: permanencia que convierte a la persona natural en residente fiscal.',
        'Sede efectiva de administración (art. 12-1 E.T.): sociedad constituida en el exterior puede ser nacional.',
        'Residente = renta mundial. No residente = renta de fuente nacional.',
        'Certificado de residencia fiscal: documento para acreditar residencia e invocar un CDI.',
        'Art. 24 E.T.: rentas de fuente nacional; lo demás, fuente extranjera.',
      ],
      examples: [
        {
          heading: 'Una persona natural que divide su permanencia entre dos países',
          paragraphs: [
            'Un ingeniero colombiano trabaja por proyectos: permanece 100 días en Colombia y 265 días en Chile durante el año. Aunque quiere invocar su permanencia limitada en Colombia, lo relevante es la regla de los 183 días: al superar ese umbral en el país (100 días no lo superan, pero el criterio debe verificarse también frente a los 365 días consecutivos y frente a la residencia fiscal en Chile), la DIAN analiza si es residente en Colombia. Si además es nacional colombiano y no demuestra residencia fiscal en Chile, se activan los criterios del artículo 10 y la regla del 50 %. Con el certificado de residencia chileno y la aplicación del convenio, la doble residencia se resuelve con las reglas de desempate del tratado.',
          ],
        },
        {
          heading: 'Una sociedad panameña administrada desde Bogotá',
          paragraphs: [
            'Una sociedad constituida en Panamá es administrada materialmente desde Bogotá: su gerente, su contador y su comité de inversión operan en Colombia y allí se toman las decisiones comerciales y de gestión del objeto social. La DIAN puede considerar que la sociedad tiene su sede efectiva de administración en Colombia y, por tanto, es sociedad nacional residente, gravada sobre su renta mundial. Si la sociedad pretende invocar un CDI, el análisis de sede efectiva y de sustancia económica será determinante para desconocer el beneficio.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que la residencia fiscal de una sociedad depende exclusivamente del lugar de constitución.',
          correction: 'Además del lugar de constitución y del domicilio, opera el criterio de la sede efectiva de administración (art. 12-1 E.T.): una sociedad constituida en el exterior puede ser residente fiscal colombiana si en Colombia se toman las decisiones comerciales y de gestión.',
        },
        {
          mistake: 'Suponer que basta con tener una sociedad en un país con convenio para aplicar las tarifas reducidas del CDI.',
          correction: 'Los beneficios de los convenios exigen residencia fiscal acreditada del beneficiario, condición de beneficiario efectivo y sustancia económica. La interposición de sociedades sin sustancia (conduit companies) o el treaty shopping se controlan y sancionan.',
        },
        {
          mistake: 'Calificar como de fuente extranjera toda renta pagada desde Colombia.',
          correction: 'La fuente de la renta se determina por las reglas del artículo 24 del Estatuto Tributario y las normas especiales, no por el lugar del pago ni por la residencia de quien paga. El lugar del pago solo activa, en su caso, la retención en la fuente.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'art. 10',
          status: 'vigente',
          note: 'Residencia fiscal de las personas naturales: permanencia por más de 183 días calendario, criterios para nacionales colombianos y regla del 50 % de ingresos o activos en Colombia (parágrafo, adicionado por la Ley 1739 de 2014).',
        },
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'arts. 9, 12, 12-1 y 24',
          status: 'vigente',
          note: 'Renta mundial de los residentes, tributación de las sociedades extranjeras, sede efectiva de administración (art. 12-1, adicionado por la Ley 1819 de 2016) y rentas de fuente nacional.',
        },
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'art. 254',
          status: 'modificada',
          note: 'Crédito por impuestos pagados en el exterior; la tarifa de referencia y el porcentaje del crédito fueron modificados por la Ley 2277 de 2022. Verificar el texto vigente del artículo.',
        },
        {
          norm: 'Decreto 1625 de 2016',
          article: 'arts. 1.2.2.1.1 y siguientes',
          status: 'vigente',
          note: 'Decreto Único Reglamentario en materia tributaria: reglamentación de la residencia, la sede efectiva de administración y las obligaciones de fiscalidad internacional.',
        },
        {
          norm: 'Decisión 578 de la Comunidad Andina',
          status: 'vigente',
          note: 'Régimen multilateral para evitar la doble tributación entre los países de la Comunidad Andina (Colombia, Perú, Ecuador y Bolivia).',
        },
      ],
      links: [
        { label: 'DIAN — Fiscalización internacional y precios de transferencia', url: 'https://www.dian.gov.co/' },
        { label: 'Estatuto Tributario (Secretaría del Senado)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'Comunidad Andina — Decisión 578', url: 'https://www.comunidadandina.org/' },
        { label: 'SUIN-Juriscol — normativa nacional', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'Residencia fiscal',
        branches: [
          { label: 'Personas naturales (art. 10 E.T.)', children: ['Más de 183 días calendario', '365 días consecutivos', 'Centro de intereses vitales o de negocios', 'Funcionario público en el exterior', 'Regla del 50 % de ingresos o activos'] },
          { label: 'Personas jurídicas', children: ['Constitución o domicilio', 'Sede efectiva de administración (art. 12-1 E.T.)', 'Excepciones: junta directiva, accionistas, cotizadas, 80 % de ingresos'] },
          { label: 'Efectos', children: ['Residente: renta mundial', 'No residente: renta de fuente nacional', 'Crédito por impuestos pagados en el exterior'] },
          { label: 'Fuente (art. 24 E.T.)', children: ['Inmuebles y muebles en el país', 'Explotación de bienes y servicios', 'Asistencia técnica y servicios desde el exterior', 'Enajenación de acciones'] },
          { label: 'Doble tributación', children: ['CDIs y Decisión 578', 'Crédito unilateral (art. 254)', 'Treaty shopping y conduits', 'Cláusulas antiabuso'] },
        ],
      },
      mindmapText:
        'La fiscalidad internacional combina la fuente y la residencia. Son residentes las personas naturales que permanecen más de 183 días en el año o dentro de los 365 días consecutivos y los nacionales con centro de intereses en el país, con la regla del 50 % de ingresos o activos. Las sociedades son residentes si se constituyen en el país o si tienen allí su sede efectiva de administración (art. 12-1 E.T.). Los residentes tributan sobre renta mundial con crédito por impuestos pagados en el exterior y los no residentes solo sobre renta de fuente nacional, según el artículo 24 del Estatuto Tributario. La doble tributación se corrige con convenios y con el crédito unilateral, bajo estricto control de beneficiario efectivo y sustancia económica.',
      source: [
        { doc: 'taci', pages: 'págs. 103-131 (Unidad 3: control a la fiscalidad internacional — residencia fiscal y fuente)' },
      ],
    },
    {
      id: 'm11-l02',
      moduleId: 'm11',
      title: 'Precios de transferencia: plena competencia, vinculados económicos, métodos y documentación',
      indicators: ['i09'],
      objectives: [
        'Explicar la finalidad del régimen de precios de transferencia y su relación con la erosión de bases imponibles.',
        'Determinar cuándo existe vinculación económica conforme al artículo 260-1 del Estatuto Tributario.',
        'Aplicar el principio de plena competencia a operaciones entre vinculados.',
        'Distinguir los métodos de precios de transferencia y sus criterios de selección.',
        'Reconocer la documentación comprobatoria exigible y el régimen de los acuerdos anticipados de precios.',
      ],
      sections: [
        {
          heading: '¿Qué son los precios de transferencia y por qué se controlan?',
          paragraphs: [
            'Los precios de transferencia son los precios y márgenes que se pactan en las operaciones entre partes vinculadas. El problema es evidente cuando las partes están en jurisdicciones distintas: un grupo empresarial puede fijar precios artificiales para trasladar utilidades hacia la jurisdicción de menor tributación, erosionando la base gravable del país donde se genera el valor. El régimen de precios de transferencia existe para que esas operaciones se valoren como si se hubieran pactado entre partes independientes.',
            'El control de precios de transferencia se dirige a evitar la manipulación de precios entre vinculados para erosionar la base imponible y a evitar la doble tributación cuando las administraciones ajustan precios. Su fundamento se examinó en la Sentencia C-690 de 2003, que declaró exequible el régimen por tratarse de un mecanismo de control objetivo de la capacidad contributiva, y se inscribe hoy en el proyecto BEPS de la OCDE, del que Colombia es parte desde su ingreso a la organización.',
          ],
          callout: {
            type: 'importante',
            text: 'El régimen no prohíbe las operaciones entre vinculados: exige que se realicen a precios de plena competencia y que el contribuyente pueda demostrarlo con la documentación comprobatoria.',
          },
        },
        {
          heading: 'Vinculación económica (art. 260-1 E.T.)',
          paragraphs: [
            'El régimen se aplica a las operaciones realizadas entre vinculados económicos, incluidos los vinculados del exterior. La ley presume la vinculación, entre otros casos, cuando existe subordinación, control o dependencia económica; cuando una persona natural o jurídica y sus familiares hasta el segundo grado de consanguinidad, afinidad o civil tienen control sobre una sociedad; cuando varias sociedades conforman un grupo empresarial; y cuando existen establecimientos permanentes de entidades del exterior. Igualmente hay vinculación cuando se realizan operaciones con entidades localizadas en jurisdicciones no cooperantes, de bajo riesgo o con regímenes fiscales preferentes, respecto de las cuales operan presunciones específicas de vinculación y reglas especiales.',
            'El concepto de vinculado incluye a las personas o entidades que tienen capacidad de incidir en las decisiones de la otra (por administración, control, dependencia o subordinación) y a las sucursales, agencias o establecimientos permanentes de las sociedades del exterior. Para las operaciones con vinculados del exterior, además, constituyen criterios de vinculación la existencia de sucursales, la tenencia de inversiones y las relaciones de dependencia económica.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Vinculación económica: subordinación, control, dependencia económica, grupos empresariales, establecimientos permanentes y operaciones con jurisdicciones no cooperantes. La vinculación se presume legalmente: acreditar la independencia es carga del contribuyente.',
          },
        },
        {
          heading: 'El principio de plena competencia (art. 260-2 E.T.)',
          paragraphs: [
            'El artículo 260-2 del Estatuto Tributario consagra el principio de plena competencia: los contribuyentes del impuesto sobre la renta que celebren operaciones con vinculados económicos deben determinar sus ingresos, costos y deducciones considerando los precios y márgenes de utilidad que habrían utilizado partes independientes en operaciones comparables. Es el mismo estándar de comparabilidad entre partes independientes que aplica la OCDE.',
            'La aplicación del principio exige un análisis de comparabilidad que considera las características de los bienes o servicios, las funciones asumidas, los activos utilizados y los riesgos asumidos por cada parte (análisis funcional), los términos contractuales, las circunstancias económicas y las estrategias de negocio. Cuando existen diferencias entre la operación vinculada y las comparables, deben practicarse los ajustes de comparabilidad razonables para eliminar el efecto de esas diferencias.',
            'El resultado del análisis es un rango de plena competencia: si el precio o margen del contribuyente se ubica dentro del rango intercuartil de las comparables, se acepta; si se ubica por fuera, la DIAN puede ajustarlo al valor de la mediana del rango (o al cuartil correspondiente según la posición del contribuyente respecto de las comparables).',
          ],
        },
        {
          heading: 'Métodos para determinar el precio o margen de plena competencia (art. 260-3 E.T.)',
          paragraphs: [
            'El artículo 260-3 del Estatuto Tributario enumera los métodos aplicables, que corresponden a los métodos reconocidos internacionalmente:',
          ],
          table: {
            caption: 'Métodos de precios de transferencia',
            headers: ['Método del Estatuto Tributario', 'Equivalente internacional', 'Cuándo se utiliza'],
            rows: [
              ['Precio comparable no controlado', 'Comparable Uncontrolled Price (CUP)', 'Cuando existen operaciones comparables con partes independientes sobre bienes o servicios idénticos o similares; es el método más directo y preferente cuando la información disponible lo permite.'],
              ['Precio de reventa', 'Resale price method', 'Para operaciones de distribución: se parte del precio de reventa a un tercero independiente y se resta el margen de reventa apropiado (gastos y utilidad del distribuidor).'],
              ['Costo adicionado', 'Cost plus method', 'Para operaciones de producción o prestación de servicios: al costo de la operación se adiciona el margen de utilidad apropiado.'],
              ['Márgenes transaccionales de utilidad de operación', 'Transactional net margin method (TNMM)', 'Se compara el margen neto de utilidad de la operación vinculada con el de operaciones comparables, sobre una base apropiada (ventas, costos, activos). Es el método más utilizado en la práctica por la disponibilidad de información financiera.'],
              ['Partición de utilidades', 'Profit split', 'Para operaciones complejas con intangibles o contribuciones conjuntas relevantes: se asigna la utilidad de la operación entre las partes según su contribución.'],
              ['Residual de partición de utilidades', 'Residual profit split', 'Variante del anterior: primero se asignan utilidades por funciones rutinarias y el remanente se reparte según la contribución a los intangibles y factores no rutinarios.'],
            ],
          },
          bullets: [
            'Regla de selección: la ley establece una preferencia jerárquica por el método de precio comparable no controlado, pero el contribuyente puede apartarse de ella cuando el método no refleje el principio de plena competencia y justifique la aplicación de otro método.',
            'Además de los métodos enumerados, el reglamento admite la aplicación de otros métodos técnicamente idóneos cuando los anteriores no resulten apropiados para reflejar la realidad económica de la operación, previa sustentación.',
            'La aplicación de los métodos exige consistencia en el análisis: no se puede aplicar un método distinto a operaciones idénticas sin justificar el cambio, ni alternarlos de forma que se elija siempre el resultado más favorable.',
          ],
        },
        {
          heading: 'Documentación comprobatoria: informe local, informe maestro e informe país por país',
          paragraphs: [
            'El régimen de precios de transferencia exige que el obligado prepare, conserve y ponga a disposición de la DIAN la documentación que demuestre el cumplimiento del principio de plena competencia. La estructura es la del proyecto BEPS y comprende tres piezas:',
          ],
          table: {
            caption: 'Documentación comprobatoria de precios de transferencia',
            headers: ['Documento', 'Contenido', 'Obligados y umbral'],
            rows: [
              ['Informe local', 'Resumen ejecutivo, análisis funcional, análisis de mercado, análisis económico y análisis de las operaciones comparables de las operaciones celebradas con vinculados.', 'Quienes celebren operaciones con vinculados y cumplan los umbrales; la norma exime de ciertos tipos de operación cuando su monto es inferior a 45.000 UVT (los préstamos se computan por el monto del principal y no por los intereses).'],
              ['Informe maestro', 'Información global del grupo multinacional: estructura organizacional, descripción de los negocios, intangibles, actividades financieras y situación tributaria del grupo.', 'Quienes estén obligados a preparar el informe local y pertenezcan a un grupo multinacional que consolide estados financieros.'],
              ['Informe país por país (CbC)', 'Información por jurisdicción del grupo: ingresos, utilidades, impuestos pagados, capital, empleados y activos, con la lista de las entidades del grupo.', 'Las entidades controlantes de grupos multinacionales con ingresos consolidados superiores a 81.000.000 de UVT, obligadas a presentar la declaración informativa por país por país.'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'Los umbrales en UVT se actualizan y algunas cifras son de difícil verificación en fuentes secundarias: al estudiar la regulación vigente debe confirmarse el monto exacto de cada umbral en el Decreto 1625 de 2016 y en la resolución que fija los formatos. La estructura (informe local, maestro y país por país) es, en cambio, la vigente.',
          },
        },
        {
          heading: 'Acuerdos anticipados de precios (APA)',
          paragraphs: [
            'El artículo 260-10 del Estatuto Tributario faculta a los contribuyentes para solicitar que la DIAN apruebe acuerdos anticipados de precios (APA), que fijan la metodología y el rango de precios o márgenes aplicables a las operaciones con vinculados durante un período determinado. Los APA pueden ser unilaterales, bilaterales o multilaterales, tienen una vigencia de tres (3) años a partir del período gravable siguiente a su aprobación (con las condiciones y prórrogas que señala el reglamento) y su celebración libera al contribuyente de preparar el informe local y el informe maestro respecto de las operaciones cubiertas por el acuerdo.',
            'El procedimiento para su aplicación está reglamentado en el Decreto 1625 de 2016 (artículos 1.2.2.4.4 a 1.2.2.4.6 y concordantes): se solicita antes del inicio del año o período gravable en que se aplicará, la solicitud se sustenta con la propuesta de metodología y comparables, y la DIAN puede celebrar reuniones de discusión y análisis con el solicitante. El incumplimiento o la aplicación indebida del acuerdo genera la sanción correspondiente y la obligación de documentar conforme a las reglas generales.',
          ],
          callout: {
            type: 'memoriza',
            text: 'APA: unilateral, bilateral o multilateral; vigencia de 3 años; libra del informe local y del informe maestro respecto de las operaciones cubiertas; se solicita antes de iniciar el período gravable.',
          },
        },
      ],
      summary: [
        'El régimen de precios de transferencia impide la manipulación de precios entre vinculados para erosionar la base imponible y evita la doble tributación; su exequibilidad fue examinada en la Sentencia C-690 de 2003.',
        'La vinculación económica (art. 260-1 E.T.) se configura por subordinación, control, dependencia económica, grupos empresariales, establecimientos permanentes y operaciones con jurisdicciones no cooperantes.',
        'El principio de plena competencia (art. 260-2 E.T.) exige precios y márgenes como los de partes independientes en operaciones comparables, con análisis funcional y ajustes de comparabilidad, y su resultado se expresa en un rango de plena competencia.',
        'Los métodos del artículo 260-3 E.T. son el precio comparable no controlado, el precio de reventa, el costo adicionado, los márgenes transaccionales de utilidad de operación, la partición de utilidades y el residual de partición de utilidades, con preferencia por el primero y posibilidad de apartarse justificadamente.',
        'La documentación comprobatoria se integra por el informe local, el informe maestro y el informe país por país, con umbrales en UVT y exenciones por tipos de operación; el incumplimiento se sanciona.',
        'Los acuerdos anticipados de precios fijan la metodología por tres años y liberan del informe local y maestro respecto de las operaciones cubiertas.',
      ],
      memorize: [
        'Vinculación económica: subordinación, control, dependencia, grupo empresarial, establecimiento permanente, jurisdicción no cooperante.',
        'Principio de plena competencia = precios y márgenes como los de partes independientes en operaciones comparables.',
        'Métodos: CUP (precio comparable no controlado), reventa, costo adicionado, márgenes transaccionales de utilidad de operación, partición de utilidades y residual.',
        'Documentación: informe local, informe maestro e informe país por país; umbral del informe local: operaciones desde 45.000 UVT (préstamos por el principal).',
        'APA: unilateral, bilateral o multilateral; 3 años de vigencia; libera del informe local y maestro.',
      ],
      examples: [
        {
          heading: 'Aplicación de un método en una operación de servicios',
          paragraphs: [
            'Una sociedad colombiana presta servicios de administración a su matriz en el exterior y cobra por ellos 10.000.000 de pesos al año. Para verificar que el precio es de plena competencia, se buscan empresas independientes que presten servicios comparables y se compara el margen de utilidad de operación sobre los costos: el promedio del rango intercuartil de las comparables arroja un margen superior al obtenido por la sociedad. Como el margen de la sociedad está por debajo del rango, la DIAN puede ajustar la base gravable a la mediana del rango mediante liquidación oficial, y el contribuyente debe soportar el ajuste con el análisis funcional, la descripción de los servicios y la selección de comparables del informe local.',
          ],
        },
        {
          heading: 'Un APA para una cadena de distribución',
          paragraphs: [
            'Un grupo multinacional con operaciones de importación y distribución en Colombia y su matriz en un país con CDI solicita un APA bilateral para fijar el margen neto de utilidad de operación del distribuidor colombiano. La solicitud se presenta antes de iniciar el período gravable, con la propuesta de metodología (margen neto transaccional sobre ventas) y el estudio de comparables. Aprobado el acuerdo por tres años, la sociedad colombiana aplica el margen pactado, evita la incertidumbre del ajuste y queda liberada de preparar el informe local y el informe maestro respecto de las operaciones cubiertas.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que el régimen de precios de transferencia solo aplica a las grandes multinacionales.',
          correction: 'El régimen se aplica a quienes celebren operaciones con vinculados económicos y cumplan los umbrales legales (incluidas operaciones con jurisdicciones no cooperantes desde 10.000 UVT para la declaración informativa, y otros umbrales específicos por tipo de obligación). Debe verificarse cada umbral en la norma vigente y en el RUT.',
        },
        {
          mistake: 'Pensar que cualquier método sirve indistintamente y que basta con elegir el que arroje el mejor resultado.',
          correction: 'La ley establece una preferencia por el precio comparable no controlado y exige justificar la aplicación de otro método cuando el preferente no refleje el principio de plena competencia. El cambio de método entre períodos debe estar sustentado.',
        },
        {
          mistake: 'Confundir el informe país por país con el informe maestro.',
          correction: 'El informe maestro describe el grupo multinacional (estructura, negocios, intangibles y situación financiera), mientras el informe país por país presenta datos desagregados por jurisdicción (ingresos, utilidades, impuestos, empleados y activos) y se presenta como declaración informativa por las entidades controlantes que superan el umbral de ingresos consolidados.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'arts. 260-1, 260-2 y 260-3',
          status: 'vigente',
          note: 'Vinculación económica, principio de plena competencia y métodos para determinar el precio o margen de utilidad de las operaciones con vinculados.',
        },
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'arts. 260-4 y 260-5',
          status: 'verificar',
          note: 'Documentación comprobatoria (informe local e informe maestro). La Ley 1819 de 2016 reorganizó estos artículos y los umbrales en UVT (entre ellos el de 45.000 UVT por tipo de operación) se actualizan periódicamente: debe confirmarse la numeración y las cifras en el texto vigente y en el Decreto 1625 de 2016.',
        },
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'art. 260-10',
          status: 'vigente',
          note: 'Acuerdos anticipados de precios: unilateral, bilateral o multilateral, con vigencia de tres años y efectos liberatorios respecto del informe local y maestro.',
        },
        {
          norm: 'Decreto 1625 de 2016',
          article: 'arts. 1.2.2.4.4 a 1.2.2.4.6 y concordantes',
          status: 'verificar',
          note: 'Reglamentación de los APA y de la documentación comprobatoria; la numeración de los artículos del DUR en materia de precios de transferencia ha sido modificada por decretos posteriores, por lo que debe verificarse en la versión compilada vigente.',
        },
        {
          norm: 'Jurisdicciones no cooperantes, de bajo riesgo o con regímenes fiscales preferentes',
          status: 'verificar',
          note: 'La primera lista se expidió por el Decreto 2193 de 2013 y fue sustituida por el Decreto 1966 de 2014 (37 jurisdicciones), hoy compilada en el Decreto 1625 de 2016. La lista se actualiza periódicamente: debe verificarse la lista vigente y el umbral (10.000 UVT) en la norma actual.',
        },
        {
          norm: 'Sentencia C-690 de 2003',
          status: 'vigente',
          note: 'Exequibilidad del régimen de precios de transferencia de la Ley 788 de 2002: es un mecanismo objetivo de control de la capacidad contributiva.',
        },
      ],
      links: [
        { label: 'DIAN — Precios de transferencia (documentación y declaración informativa)', url: 'https://www.dian.gov.co/' },
        { label: 'OCDE — Proyecto BEPS y precios de transferencia', url: 'https://www.oecd.org/tax/transfer-pricing/' },
        { label: 'Estatuto Tributario (Secretaría del Senado)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
      ],
      mindmap: {
        root: 'Precios de transferencia',
        branches: [
          { label: 'Finalidad', children: ['Evitar erosión de bases', 'Evitar doble tributación', 'BEPS / OCDE', 'Sentencia C-690 de 2003'] },
          { label: 'Vinculación (260-1)', children: ['Subordinación', 'Control', 'Dependencia económica', 'Grupos empresariales', 'Establecimientos permanentes', 'Jurisdicciones no cooperantes'] },
          { label: 'Plena competencia (260-2)', children: ['Análisis funcional', 'Comparabilidad y ajustes', 'Rango de plena competencia', 'Intercuartil y mediana'] },
          { label: 'Métodos (260-3)', children: ['Precio comparable no controlado', 'Precio de reventa', 'Costo adicionado', 'Márgenes transaccionales de utilidad', 'Partición de utilidades', 'Residual'] },
          { label: 'Documentación', children: ['Informe local', 'Informe maestro', 'Informe país por país', 'Umbrales en UVT'] },
          { label: 'APA (260-10)', children: ['Unilateral, bilateral, multilateral', 'Vigencia de 3 años', 'Libera informe local y maestro'] },
        ],
      },
      mindmapText:
        'El régimen de precios de transferencia obliga a valorar las operaciones entre vinculados económicos como las pactarían partes independientes (principio de plena competencia, art. 260-2 E.T.), para evitar la erosión de la base imponible y la doble tributación. La vinculación (art. 260-1) comprende subordinación, control, dependencia económica, grupos, establecimientos permanentes y operaciones con jurisdicciones no cooperantes. Los métodos (art. 260-3) son el precio comparable no controlado, el precio de reventa, el costo adicionado, los márgenes transaccionales de utilidad de operación, la partición de utilidades y el residual, con preferencia por el primero. La documentación comprobatoria se integra por el informe local, el maestro y el país por país, y los APA fijan la metodología por tres años.',
      source: [
        { doc: 'taci', pages: 'págs. 103-131 (Unidad 3: precios de transferencia, vinculación y métodos)' },
      ],
      activityId: 'm11-a01',
    },
    {
      id: 'm11-l03',
      moduleId: 'm11',
      title: 'Control de la DIAN a la fiscalidad internacional: declaración informativa, intercambio de información y sanciones',
      indicators: ['i09', 'i10'],
      objectives: [
        'Identificar los obligados a presentar la declaración informativa de precios de transferencia y sus umbrales.',
        'Precisar las obligaciones de documentación, conservación y suministro de información.',
        'Explicar los mecanismos de intercambio de información internacional y su utilidad en la fiscalización.',
        'Reconocer los regímenes de entidades controladas del exterior y compañías holding colombianas.',
        'Enunciar las sanciones específicas por incumplimiento de las obligaciones de fiscalidad internacional.',
      ],
      sections: [
        {
          heading: 'La declaración informativa de precios de transferencia',
          paragraphs: [
            'La declaración informativa de precios de transferencia es la obligación formal con la que el contribuyente reporta a la DIAN las operaciones realizadas con vinculados económicos. Están obligados a presentarla los contribuyentes del impuesto sobre la renta que celebren operaciones con vinculados del exterior y cumplan los umbrales previstos en el artículo 260-9 del Estatuto Tributario: patrimonio bruto a 31 de diciembre superior a cien mil (100.000) UVT o ingresos brutos del año superiores a sesenta y un mil (61.000) UVT, además de los casos especiales (operaciones con jurisdicciones no cooperantes desde 10.000 UVT y quienes realizan operaciones con vinculados del exterior sujetas al régimen).',
            'La declaración se presenta en el formulario oficial (Formato 1125), cuyos datos alimentan el formulario de declaración de renta (Formato 110 o 120 según el caso). Debe presentarse dentro de los plazos que fija el Gobierno nacional por medios electrónicos y está sujeta a las reglas generales de firma, corrección y sanción por no presentar o presentar mal.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Umbrales de la declaración informativa de precios de transferencia: patrimonio bruto superior a 100.000 UVT o ingresos brutos superiores a 61.000 UVT, y operaciones con jurisdicciones no cooperantes desde 10.000 UVT.',
          },
        },
        {
          heading: 'Otras obligaciones formales de fiscalidad internacional',
          paragraphs: [
            'Además de la declaración informativa, el régimen impone a los contribuyentes con operaciones internacionales obligaciones formales que se verifican en el RUT y en los sistemas de información de la DIAN:',
          ],
          bullets: [
            'Inscribir en el RUT las responsabilidades propias de la fiscalidad internacional (por ejemplo, las relacionadas con precios de transferencia, entidades controladas del exterior y compañías holding colombianas), conforme a la resolución que regula el registro.',
            'Conservar y poner a disposición de la DIAN la documentación comprobatoria (informe local, informe maestro y, cuando corresponda, la documentación de país por país), con sujeción a los términos de conservación de la información y a los plazos de suministro cuando la administración la requiera.',
            'Presentar la declaración informativa de activos en el exterior cuando se cumplan los umbrales legales, y reportar los patrimonios y las rentas obtenidas en el exterior.',
            'Declarar el régimen de entidades controladas del exterior (ECE) y las rentas de esas entidades, y solicitar y cumplir el régimen de compañías holding colombianas (CHC) cuando se opte por él.',
            'Atender los requerimientos especiales de información de la fiscalización internacional, incluidos los relativos a la aplicación de los convenios de doble tributación y a la residencia fiscal.',
          ],
        },
        {
          heading: 'Régimen de entidades controladas del exterior (ECE) y compañías holding colombianas',
          paragraphs: [
            'El régimen de entidades controladas del exterior (ECE), previsto en los artículos 882 y siguientes del Estatuto Tributario, se aplica a los residentes fiscales colombianos que sean controlantes de entidades del exterior y las somete a un régimen de transparencia: las rentas pasivas (intereses, cánones, dividendos, ganancias de capital, regalías y otros ingresos de esa naturaleza) de la entidad controlada se entienden realizadas en cabeza del controlante residente, en el año en que se perciben o se causan, con las reglas de realización del artículo 886 y las presunciones de control cuando la entidad está en una jurisdicción no cooperante. La finalidad es impedir el diferimiento indefinido de rentas en jurisdicciones de baja tributación.',
            'El régimen de compañías holding colombianas (CHC) permite que las sociedades colombianas que cumplan ciertos requisitos (participación directa o indirecta de al menos el 10 % en dos o más sociedades del exterior, por un período mínimo de doce meses, con un mínimo de tres empleados, dirección propia, y comunicación a la DIAN) se sujeten a un régimen especial que neutraliza la aplicación de la renta por cambio de posición en las inversiones y de los regímenes de ECE, facilitando la inversión desde Colombia hacia el exterior. El procedimiento y los requisitos están reglamentados en el Decreto 1625 de 2016.',
          ],
          callout: {
            type: 'aviso',
            text: 'La regulación de las ECE y de las compañías holding colombianas se ha modificado en varias oportunidades (leyes de financiamiento y reformas tributarias posteriores). Al estudiarla debe confirmarse la numeración y el texto vigentes de los artículos del Estatuto Tributario y del Decreto 1625 de 2016.',
          },
        },
        {
          heading: 'Intercambio de información internacional',
          paragraphs: [
            'El control de las operaciones internacionales depende de la información que el país obtenga del exterior. Colombia cuenta con varias vías de intercambio de información:',
          ],
          table: {
            caption: 'Vías de intercambio de información internacional',
            headers: ['Instrumento', 'Contenido y utilidad'],
            rows: [
              ['Convenios de doble tributación (CDIs)', 'Incluyen cláusulas de intercambio de información entre administraciones tributarias que permiten obtener datos bancarios, financieros y de operaciones de los contribuyentes que invocan el convenio.'],
              ['Ley 1661 de 2013', 'Aprueba la Convención Multilateral sobre Asistencia Administrativa Mutua en Materia Fiscal (OCDE y Consejo de Europa): habilita el intercambio de información a solicitud, espontáneo y automático.'],
              ['Ley 1666 de 2013', 'Aprueba el acuerdo intergubernamental con Estados Unidos para el intercambio de información (FATCA, modelo 1): las entidades financieras colombianas reportan información de cuentas de residentes estadounidenses.'],
              ['Foro Global sobre Transparencia e Intercambio de Información', 'Marco multilateral de evaluación entre pares; Colombia se sumó a los estándares de intercambio automático de información de cuentas financieras (CRS).'],
              ['RILO (Red de Oficinas Regionales de Enlace de Inteligencia de la OMA)', 'Cooperación aduanera e intercambio de inteligencia entre administraciones aduaneras: la DIAN participa en la red y canaliza información sobre mercancías de riesgo, contrabando y sobre y subfacturación.'],
              ['Información exógena y convenios de cooperación', 'Cruces con la información reportada por las entidades financieras y los terceros, y cooperación con la UIAF y con otras autoridades nacionales e internacionales.'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'La información obtenida del exterior se incorpora al expediente con las garantías del debido proceso y sirve de soporte para los requerimientos, las liquidaciones y las sanciones. Es la fuente principal con la que la DIAN verifica la residencia fiscal y los precios de transferencia.',
          },
        },
        {
          heading: 'Sanciones específicas de la fiscalidad internacional',
          paragraphs: [
            'El incumplimiento de las obligaciones de fiscalidad internacional tiene sanciones propias, sin perjuicio de las sanciones generales por inexactitud y de las consecuencias penales:',
          ],
          table: {
            caption: 'Sanciones por incumplimiento en fiscalidad internacional',
            headers: ['Conducta', 'Sanción'],
            rows: [
              ['No presentar la declaración informativa de precios de transferencia', 'Sanción en UVT fijada por el artículo 260-11 del Estatuto Tributario, con topes que la norma actualiza periódicamente.'],
              ['No preparar, no conservar o no poner a disposición la documentación comprobatoria (informe local o maestro)', 'Sanción en UVT, con tope legal; se agrava cuando la documentación se presenta de forma incompleta o con datos que no permiten verificar el cumplimiento del principio de plena competencia.'],
              ['No suministrar la documentación comprobatoria cuando la DIAN la requiera', 'Sanción en UVT, con topes diferenciados según la conducta y la reincidencia.'],
              ['Presentar la documentación con datos inexactos o incompletos', 'Sanción en UVT, con posibilidad de corrección y reducción si se subsana.'],
              ['No implementar o incumplir un APA', 'Sanción e imposibilidad de invocar el acuerdo, con obligación de documentar conforme a las reglas generales.'],
              ['Inexactitud por omisión de rentas de fuente extranjera o por incumplir el régimen de ECE', 'Sanción por inexactitud conforme al régimen general (art. 648 y siguientes E.T.), además de los intereses moratorios.'],
            ],
          },
          bullets: [
            'Las sanciones se expresan en UVT y se actualizan anualmente, por lo que el valor en pesos de una misma conducta varía según el año.',
            'El régimen general de reducción de sanciones del Estatuto Tributario (pago o subsanación antes de la notificación del acto) aplica también a las sanciones de fiscalidad internacional, en los términos y porcentajes de cada norma.',
            'La DIAN ejerce la fiscalización de estas obligaciones a través de la Subdirección de Gestión de Fiscalización Internacional y de las dependencias de fiscalización de las direcciones seccionales.',
            'Las conductas de simulación, abuso en materia tributaria o utilización de figuras sin sustancia económica pueden además ser desconocidas por la DIAN y generar las sanciones por inexactitud, con remisión a la justicia penal cuando corresponda.',
          ],
          callout: {
            type: 'importante',
            text: 'Los topes en UVT de las sanciones del artículo 260-11 del Estatuto Tributario han cambiado con las reformas tributarias (Ley 1819 de 2016, Ley 2155 de 2021 y normas posteriores): al cuantificar una sanción debe consultarse el texto vigente del artículo y el valor de la UVT del año de la conducta.',
          },
        },
        {
          heading: 'Las cláusulas antiabuso y el control material',
          paragraphs: [
            'Además de las sanciones formales, el control de la fiscalidad internacional se apoya en cláusulas antíabuso que permiten a la DIAN desconocer los efectos de las operaciones cuando no exista propósito económico o cuando se abuse de las formas jurídicas: la facultad general de recalificación de operaciones, el régimen de abuso en materia tributaria y las cláusulas de los convenios (abstinencia, transparencia, exclusión, sujeción efectiva al impuesto, tránsito y buena fe).',
            'En la práctica fiscalizadora, la DIAN aplica ese control sobre cuatro frentes que el material del curso destaca: las operaciones con vinculados cuyos precios se apartan del principio de plena competencia; la interposición de sociedades en jurisdicciones no cooperantes para diferir rentas (ECE); el uso indebido de convenios por sociedades sin sustancia (treaty shopping y conduit companies); y la residencia fiscal simulada o mal acreditada de personas y sociedades.',
          ],
        },
      ],
      summary: [
        'La declaración informativa de precios de transferencia la presentan los contribuyentes con operaciones con vinculados del exterior que tengan patrimonio bruto superior a 100.000 UVT o ingresos brutos superiores a 61.000 UVT, además de los casos de operaciones con jurisdicciones no cooperantes desde 10.000 UVT.',
        'Las obligaciones formales de fiscalidad internacional incluyen la inscripción de responsabilidades en el RUT, la conservación y suministro de la documentación comprobatoria, la declaración de activos en el exterior, la aplicación de los regímenes ECE y CHC y la atención de los requerimientos de la fiscalización internacional.',
        'El régimen ECE grava en cabeza del controlante residente las rentas pasivas de las entidades controladas del exterior; el régimen CHC ofrece un tratamiento especial a las sociedades colombianas holding que cumplan los requisitos de participación, empleo y dirección.',
        'El intercambio de información opera por los CDIs, la Ley 1661 de 2013 (Convención Multilateral), la Ley 1666 de 2013 (FATCA), el Foro Global (CRS) y la red RILO de cooperación aduanera de la OMA.',
        'Las sanciones específicas por no presentar la declaración informativa, no documentar, no suministrar o presentar información inexacta se expresan en UVT y se suman a la sanción por inexactitud y a las consecuencias penales de la simulación y el abuso.',
        'El control material se cierra con las cláusulas antiabuso de los convenios y las facultades de recalificación, que atacan el treaty shopping, las conduit companies y la residencia mal acreditada.',
      ],
      memorize: [
        'Declaración informativa PT: patrimonio bruto > 100.000 UVT o ingresos brutos > 61.000 UVT; jurisdicciones no cooperantes desde 10.000 UVT.',
        'ECE: rentas pasivas del exterior se gravan en cabeza del controlante residente (arts. 882 y siguientes E.T.).',
        'CHC: participación ≥ 10 % en dos o más sociedades del exterior por 12 meses, mínimo 3 empleados, dirección propia y comunicación a la DIAN.',
        'Intercambio: CDIs, Ley 1661 de 2013 (Convención Multilateral), Ley 1666 de 2013 (FATCA), Foro Global (CRS) y RILO (OMA).',
        'Sanciones: art. 260-11 E.T. con topes en UVT actualizables y sanciones generales por inexactitud.',
      ],
      examples: [
        {
          heading: 'Un grupo que omite la declaración informativa',
          paragraphs: [
            'Una sociedad colombiana con ingresos brutos de 70.000 UVT y patrimonio bruto de 120.000 UVT realiza operaciones con su matriz en el exterior por servicios y préstamos. Al superar ambos umbrales, está obligada a presentar la declaración informativa de precios de transferencia y a preparar el informe local. Como no la presenta, la DIAN le impone la sanción del artículo 260-11 del Estatuto Tributario por no presentar la declaración informativa y, en el mismo proceso, le solicita la documentación comprobatoria. Si la sociedad no la aporta, se suma la sanción por no suministrar la documentación; y si el análisis de los comparables muestra que el margen se aparta del rango de plena competencia, la DIAN practica la liquidación oficial de revisión con el ajuste correspondiente y la sanción por inexactitud.',
          ],
        },
        {
          heading: 'Rentas pasivas en una entidad controlada del exterior',
          paragraphs: [
            'Un residente fiscal colombiano es propietario del 100 % de una sociedad en una jurisdicción no cooperante que solo recibe intereses por préstamos concedidos a terceros. Aunque la sociedad no distribuya los intereses, el régimen ECE los grava en cabeza del controlante residente en el año en que se perciben o se causan, por tratarse de rentas pasivas y por existir presunción de control. La omisión de esas rentas en la declaración de renta del residente genera sanción por inexactitud e intereses, además de la obligación de documentar la inversión en el exterior y declararla cuando corresponda.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que la declaración informativa de precios de transferencia se presenta solo si la DIAN la solicita.',
          correction: 'Es una declaración informativa de presentación obligatoria y periódica para quienes cumplan los umbrales legales, con plazos fijados por el Gobierno. Su omisión genera sanción sin necesidad de requerimiento previo.',
        },
        {
          mistake: 'Suponer que la documentación comprobatoria debe presentarse junto con la declaración informativa.',
          correction: 'La documentación comprobatoria (informe local y maestro) se prepara y conserva, y se pone a disposición de la DIAN cuando esta la requiera dentro de la fiscalización. Solo la declaración informativa, y la declaración país por país cuando corresponda, se presentan ante la administración.',
        },
        {
          mistake: 'Pensar que la información obtenida del exterior no puede usarse como prueba en un proceso de fiscalización.',
          correction: 'La información proveniente del intercambio internacional (CDIs, Convención Multilateral, FATCA, CRS, RILO) se incorpora al expediente y soporta requerimientos, liquidaciones y sanciones, con plena observancia del debido proceso y del derecho de contradicción.',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'art. 260-9',
          status: 'vigente',
          note: 'Declaración informativa de precios de transferencia: obligados y umbrales (patrimonio bruto superior a 100.000 UVT o ingresos brutos superiores a 61.000 UVT; operaciones con jurisdicciones no cooperantes desde 10.000 UVT).',
        },
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'art. 260-11',
          status: 'vigente',
          note: 'Sanciones por incumplimiento de las obligaciones de precios de transferencia (no presentar la declaración informativa, no documentar, no suministrar o presentar información inexacta). Los topes en UVT han sido modificados por reformas posteriores: verificar el texto vigente.',
        },
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'arts. 882 y siguientes',
          status: 'verificar',
          note: 'Régimen de entidades controladas del exterior (ECE): definición, presunciones de control, rentas pasivas (art. 884) y reglas de realización (art. 886). La numeración y el texto han sido modificados por reformas tributarias: debe verificarse en el estatuto vigente.',
        },
        {
          norm: 'Estatuto Tributario (Decreto Ley 624 de 1989)',
          article: 'arts. 894 y siguientes (compañías holding colombianas)',
          status: 'verificar',
          note: 'Régimen de compañías holding colombianas (CHC): requisitos de participación (10 % en dos o más sociedades por 12 meses), empleados, dirección propia y comunicación a la DIAN. La numeración de los artículos debe confirmarse en el texto vigente.',
        },
        {
          norm: 'Ley 1661 de 2013',
          status: 'vigente',
          note: 'Aprueba la Convención Multilateral sobre Asistencia Administrativa Mutua en Materia Fiscal: intercambio de información a solicitud, espontáneo y automático.',
        },
        {
          norm: 'Ley 1666 de 2013',
          status: 'vigente',
          note: 'Aprueba el acuerdo intergubernamental con Estados Unidos (FATCA, modelo 1) para el intercambio de información de cuentas financieras.',
        },
        {
          norm: 'Decreto 1625 de 2016',
          status: 'vigente',
          note: 'Reglamentación de las obligaciones de fiscalidad internacional, incluidos los regímenes de ECE y CHC y la documentación comprobatoria.',
        },
        {
          norm: 'RILO — Red de Oficinas Regionales de Enlace de Inteligencia (Organización Mundial de Aduanas)',
          status: 'verificar',
          note: 'Cooperación aduanera e intercambio de inteligencia. No se pudo verificar en fuentes secundarias la oficina de enlace concreta que atiende a Colombia ni su instrumento de adhesión: debe consultarse directamente a la DIAN o a la OMA.',
        },
      ],
      links: [
        { label: 'DIAN — Fiscalización internacional y precios de transferencia', url: 'https://www.dian.gov.co/' },
        { label: 'OCDE — Intercambio de información y asistencia administrativa mutua', url: 'https://www.oecd.org/tax/exchange-of-tax-information/' },
        { label: 'Organización Mundial de Aduanas — Red de enlace de inteligencia (RILO)', url: 'https://www.wcoomd.org/' },
        { label: 'Estatuto Tributario (Secretaría del Senado)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
      ],
      mindmap: {
        root: 'Control de la fiscalidad internacional',
        branches: [
          { label: 'Declaración informativa', children: ['Patrimonio > 100.000 UVT', 'Ingresos > 61.000 UVT', 'Jurisdicciones no cooperantes: 10.000 UVT', 'Formato 1125'] },
          { label: 'Obligaciones formales', children: ['RUT: responsabilidades', 'Documentación comprobatoria', 'Activos en el exterior', 'Atender requerimientos'] },
          { label: 'Régimenes especiales', children: ['ECE: rentas pasivas del controlante', 'CHC: 10 %, 12 meses, 3 empleados, dirección propia'] },
          { label: 'Intercambio de información', children: ['CDIs', 'Ley 1661 de 2013 (Convención Multilateral)', 'Ley 1666 de 2013 (FATCA)', 'Foro Global (CRS)', 'RILO (OMA)'] },
          { label: 'Sanciones', children: ['No presentar: art. 260-11 E.T.', 'No documentar', 'No suministrar', 'Datos inexactos', 'Inexactitud (art. 648 y ss.)'] },
          { label: 'Cláusulas antiabuso', children: ['Abuso en materia tributaria', 'Treaty shopping y conduits', 'Recalificación de operaciones', 'Buena fe y beneficiario efectivo'] },
        ],
      },
      mindmapText:
        'El control de la fiscalidad internacional se articula sobre la declaración informativa de precios de transferencia (patrimonio bruto superior a 100.000 UVT o ingresos brutos superiores a 61.000 UVT, y operaciones con jurisdicciones no cooperantes desde 10.000 UVT), la documentación comprobatoria y las obligaciones de información y RUT. Los regímenes ECE y CHC gravan o neutralizan las rentas pasivas del exterior y la inversión de sociedades holding colombianas. El intercambio de información opera por los CDIs, la Ley 1661 de 2013, la Ley 1666 de 2013 (FATCA), el Foro Global y la red RILO de la OMA. Las sanciones se expresan en UVT (art. 260-11 E.T.) y se complementan con la sanción por inexactitud y con las cláusulas antiabuso frente al treaty shopping y las sociedades sin sustancia.',
      source: [
        { doc: 'taci', pages: 'págs. 103-131 (Unidad 3: obligaciones formales, documentación comprobatoria e intercambio de información)' },
      ],
    },
  ],
}
