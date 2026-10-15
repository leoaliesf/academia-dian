import type { ModuleDef } from '../types'

// ============================================================
// Módulo 12 — Lavado de activos y financiación del terrorismo
// Indicador: i04
// Fuentes: Código Penal (Ley 599 de 2000, arts. 323 y 345 y sus
// modificaciones), Ley 526 de 1999, Ley 1762 de 2015, Decreto 1068 de
// 2015, Ley 2195 de 2022 y documentos de la UIAF, la DIAN, el GAFI y
// GAFILAT. Verificados en fuentes oficiales el 2026-10-15.
// Los PDF de estudio mencionan el tema de manera tangencial
// (funciones de fiscalización), por lo que el desarrollo proviene de
// fuentes oficiales.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm12',
  order: 12,
  title: 'Lavado de activos y financiación del terrorismo',
  description:
    'Qué es el lavado de activos y cuáles son sus etapas, en qué se diferencia de la financiación del terrorismo, cómo funciona el sistema antilavado colombiano alrededor de la UIAF y del Reporte de Operaciones Sospechosas, y cuál es el papel de la DIAN en la detección, el reporte y la denuncia.',
  indicators: ['i04'],
  lessons: [
    {
      id: 'm12-l01',
      moduleId: 'm12',
      title: 'Lavado de activos: concepto, etapas y delitos fuente',
      indicators: ['i04'],
      objectives: [
        'Definir el lavado de activos y explicar el bien jurídico que protege.',
        'Identificar y diferenciar las tres etapas del lavado: colocación, estratificación y integración.',
        'Reconocer los verbos rectores y los delitos fuente del artículo 323 del Código Penal.',
        'Aplicar el concepto a situaciones concretas de comercio exterior y de operación económica.',
      ],
      sections: [
        {
          heading: '¿Qué es el lavado de activos?',
          paragraphs: [
            'El lavado de activos es el conjunto de actividades encaminadas a dar apariencia de legalidad a recursos de origen ilícito. El lavador no oculta el dinero: oculta su origen. El objetivo final es poder usar, invertir y disfrutar los recursos sin que las autoridades puedan vincularlos con el delito que los produjo.',
            'En términos económicos es una operación de blanqueo: se introduce dinero sucio en el circuito económico legal y se extrae, al final del ciclo, dinero que parece limpio, con trazabilidad aparente y respaldo documental.',
            'El bien jurídico protegido es el orden económico y social. Por eso se trata de un delito pluriofensivo: afecta la estabilidad y la transparencia de la economía, la libre competencia (el lavador opera con recursos que no le costó obtener y puede desplomar precios), la capacidad del Estado de conocer la realidad económica del país y la administración de justicia.',
          ],
          callout: {
            type: 'importante',
            text: 'El lavado de activos protege el ORDEN ECONÓMICO Y SOCIAL, no la administración de justicia ni el patrimonio de una persona. Es un delito autónomo: se configura con independencia de que exista o no condena por el delito fuente.',
          },
        },
        {
          heading: 'Las tres etapas del lavado',
          paragraphs: [
            'El lavado se describe convencionalmente en tres etapas, que en la práctica pueden superponerse o desarrollarse simultáneamente, pero que sirven para analizar cualquier caso:',
          ],
          table: {
            caption: 'Etapas del lavado de activos',
            headers: ['Etapa', 'En qué consiste', 'Objetivo', 'Ejemplos típicos'],
            rows: [
              [
                '1. Colocación',
                'Ingreso físico o material de los recursos ilícitos al sistema económico o financiero.',
                'Introducir el dinero sucio en el circuito formal sin levantar sospechas.',
                'Consignaciones fraccionadas por debajo de los umbrales de reporte; compra de mercancía importada con dinero en efectivo; ingreso de divisas en efectivo; pago de facturas comerciales con efectivo; adquisición de bienes suntuarios.',
              ],
              [
                '2. Estratificación (ocultamiento)',
                'Separación de los fondos de su origen mediante múltiples y sucesivas transacciones, nacionales o internacionales.',
                'Romper la cadena de trazabilidad y hacer imposible vincular los bienes con el delito.',
                'Transferencias entre cuentas de varias sociedades; triangulación comercial con terceros países; sobrefacturación y subfacturación de importaciones y exportaciones; préstamos simulados entre empresas vinculadas; fraccionamiento de operaciones.',
              ],
              [
                '3. Integración',
                'Reingreso de los recursos ya «lavados» a la economía formal, con apariencia de legitimidad.',
                'Incorporar los bienes al patrimonio con respaldo documental creíble.',
                'Inversión en bienes raíces, sociedades o activos financieros; pago de obligaciones tributarias sobre rentas ficticias; capitalización de empresas; adquisición de activos productivos.',
              ],
            ],
          },
        },
        {
          heading: 'El ciclo completo en un ejemplo de comercio exterior',
          paragraphs: [
            'Un ejemplo que integra las tres etapas en el comercio exterior: una organización obtiene recursos del narcotráfico (colocación: ingresan en efectivo a una empresa exportadora ficticia); la empresa sobrefactura exportaciones a un tercero en el exterior y recibe el pago desde el extranjero (estratificación: el origen se pierde entre operaciones de comercio aparentemente legítimas); finalmente los recursos se invierten en bienes raíces y en la compra de una empresa de transporte (integración).',
          ],
          callout: {
            type: 'memoriza',
            text: 'COLOCACIÓN = entra · ESTRATIFICACIÓN = se enreda · INTEGRACIÓN = sale limpio. Si en un caso identificas el momento en que el recurso ilícito ingresa al circuito formal, estás frente a la colocación.',
          },
        },
        {
          heading: 'El artículo 323 del Código Penal',
          paragraphs: [
            'El delito de lavado de activos está tipificado en el artículo 323 de la Ley 599 de 2000, modificado por la Ley 1762 de 2015. La conducta se describe a través de un listado de verbos rectores: quien incurre en ellos respecto de bienes con origen mediato o inmediato en las actividades delictivas señaladas en la misma norma, incurre por esa sola conducta en la pena prevista.',
            'Los verbos rectores son: adquirir, resguardar, invertir, transportar, transformar, almacenar, conservar, custodiar o administrar. La Sala Penal de la Corte Suprema de Justicia ha agrupado estas conductas en tres bloques: las de adquisición y manejo de los bienes; las de dar apariencia de legalidad o legalizar; y las de ocultar o encubrir.',
            'La escala penal vigente es de prisión de diez (10) a treinta (30) años y multa de mil (1.000) a cincuenta mil (50.000) salarios mínimos legales mensuales vigentes. La pena se agrava —se aumenta de una tercera parte a la mitad— cuando la conducta se realiza respecto de bienes provenientes de delitos ejecutados en el exterior, cuando se realizan operaciones de cambio o de comercio exterior, o cuando se introduce mercancía al territorio nacional por lugares no habilitados.',
            'Ese agravante es de máxima relevancia para un gestor de la DIAN: el propio Código Penal reconoce que las operaciones de comercio exterior son un canal privilegiado del lavado y por eso castiga con más severidad el lavado cometido a través de ellas.',
          ],
          callout: {
            type: 'norma',
            text: 'Art. 323 C.P.: prisión de 10 a 30 años y multa de 1.000 a 50.000 SMLMV. Agravante cuando se realizan operaciones de cambio o de comercio exterior o se introduce mercancía por lugares no habilitados.',
          },
        },
        {
          heading: 'Los delitos fuente',
          paragraphs: [
            'El artículo 323 enumera las actividades delictivas cuyo producto puede ser lavado (los «delitos fuente»). Suelen agruparse así para facilitar el estudio:',
          ],
          bullets: [
            'Delitos relacionados con drogas: tráfico de estupefacientes y conexos.',
            'Delitos contra la administración pública: enriquecimiento ilícito, cohecho.',
            'Delitos económicos y financieros: delitos contra el sistema financiero, contrabando, fraude aduanero, evasión y defraudación tributaria, captación masiva y habitual de dineros no autorizada.',
            'Delitos contra la libertad y la integridad: trata de personas, tráfico de migrantes, extorsión, secuestro.',
            'Delitos contra la seguridad: rebelión, tráfico de armas y municiones, terrorismo y financiación del terrorismo.',
            'Otros: minería ilegal, delitos contra los recursos naturales y el medio ambiente, explotación ilícita de yacimientos mineros.',
          ],
        },
        {
          heading: 'Autonomía del lavado y exigencia de tipicidad',
          paragraphs: [
            'La lista ha crecido con las reformas legales. Lo importante para el examen es entender la lógica, no memorizar el listado completo: el lavado de activos es, por definición, un delito «en segundo grado», que presupone la existencia de otra conducta delictiva que generó los bienes.',
            'Precisamente por esto la jurisprudencia ha precisado dos reglas:',
          ],
          bullets: [
            'El lavado es autónomo respecto del delito fuente: no se requiere sentencia condenatoria previa por el delito subyacente para su configuración; basta la prueba indiciaria razonable sobre el origen ilícito de los bienes.',
            'Sin embargo, la Corte Constitucional declaró inexequible, mediante la Sentencia C-191 de 2016, la expresión «o realice cualquier otro acto para ocultar o encubrir su origen ilícito», por razones de tipicidad. En consecuencia no basta la simple falta de comprobación del origen lícito del patrimonio para condenar: debe acreditarse la conducta típica descrita en los verbos rectores.',
          ],
          callout: {
            type: 'memoriza',
            text: 'El lavado NO necesita condena previa por el delito fuente, pero SÍ necesita prueba del origen ilícito. Autonomía del delito ≠ presunción de ilicitud.',
          },
        },
        {
          heading: 'La responsabilidad administrativa por LA/FT',
          paragraphs: [
            'El lavado de activos es un delito penal, perseguido por la Fiscalía General de la Nación y sancionado por los jueces. Pero el Estado también impone obligaciones administrativas de prevención a las entidades públicas y privadas: deberes de conocer al cliente, de reportar operaciones sospechosas, de mantener información disponible y de adoptar sistemas de administración del riesgo.',
            'Estas obligaciones se concretan en los sistemas de administración del riesgo LA/FT, con nombres sectoriales distintos: SARLAFT en el sector financiero y asegurador, SAGRILAFT y el régimen de medidas mínimas en las entidades vigiladas o controladas por la Superintendencia de Sociedades (Capítulo X de la Circular Básica Jurídica, modificado de manera integral por la Circular Externa 100-000016 de 2020), SARLAFT en el sector salud, y los sistemas internos que adopten otras entidades.',
            'Un punto que se evalúa con frecuencia: el SAGRILAFT de la Circular Externa 100-000016 de 2020 de la Superintendencia de Sociedades NO se aplica a la DIAN. Esa circular obliga a las sociedades vigiladas o controladas por esa superintendencia que superen los umbrales de ingresos o activos en ella previstos, y a ciertos sectores de actividad con economías. La DIAN no es una entidad vigilada por la Superintendencia de Sociedades: es una entidad pública sujeta a la Ley 526 de 1999, al Decreto 1068 de 2015 y a la normativa de la UIAF, además de sus propias obligaciones como autoridad.',
          ],
          callout: {
            type: 'error',
            text: 'No confundas el régimen aplicable. SAGRILAFT (Circular Externa 100-000016 de 2020 de Supersociedades) rige sociedades vigiladas por esa superintendencia. La DIAN es una entidad pública: sus obligaciones frente a la UIAF derivan de la Ley 526 de 1999 y del Decreto 1068 de 2015.',
          },
        },
      ],
      summary: [
        'El lavado de activos es el conjunto de actividades dirigidas a dar apariencia de legalidad a recursos de origen ilícito; protege el orden económico y social y es un delito pluriofensivo y autónomo.',
        'Sus etapas son colocación (ingreso del recurso ilícito al circuito económico), estratificación u ocultamiento (separación del origen mediante múltiples transacciones) e integración (reingreso con apariencia de legitimidad).',
        'El artículo 323 del Código Penal, modificado por la Ley 1762 de 2015, sanciona con 10 a 30 años de prisión y multa de 1.000 a 50.000 SMLMV a quien adquiera, resguarde, invierta, transporte, transforme, almacene, conserve, custodie o administre bienes de origen mediato o inmediato en los delitos que la norma enumera.',
        'La pena se agrava de una tercera parte a la mitad cuando hay operaciones de cambio o de comercio exterior o ingreso de mercancía por lugares no habilitados.',
        'El lavado es autónomo del delito fuente (no requiere condena previa), pero la Sentencia C-191 de 2016 eliminó la cláusula abierta de ocultamiento, por lo que debe acreditarse la conducta típica.',
      ],
      memorize: [
        'Etapas: COLOCACIÓN → ESTRATIFICACIÓN (ocultamiento) → INTEGRACIÓN.',
        'Verbos rectores del art. 323: adquirir, resguardar, invertir, transportar, transformar, almacenar, conservar, custodiar, administrar.',
        'Pena art. 323: 10 a 30 años de prisión y multa de 1.000 a 50.000 SMLMV.',
        'Agravante: operaciones de cambio o comercio exterior; ingreso de mercancía por lugares no habilitados.',
        'Bien jurídico: orden económico y social. Delito pluriofensivo y autónomo.',
        'Sentencia C-191 de 2016: declaró inexequible la expresión abierta sobre «cualquier otro acto para ocultar o encubrir» el origen ilícito.',
      ],
      examples: [
        {
          heading: 'Ejemplo de examen: identificar la etapa',
          paragraphs: [
            'Situación: una sociedad constituida hace seis meses importa vehículos de gama alta por un valor declarado muy superior al de mercado, y paga al proveedor extranjero mediante giros desde tres cuentas bancarias distintas, ninguna de las cuales corresponde a la sociedad importadora. Los recursos provienen de la venta de estupefacientes.',
            'Análisis: la sociedad es el vehículo de la operación. El uso de tres cuentas de terceros y la sobrefacturación buscan separar los recursos de su origen ilícito, enturbiando la trazabilidad mediante operaciones de comercio exterior aparentemente legítimas. Ese momento del proceso corresponde a la ESTRATIFICACIÓN u ocultamiento. Si más adelante las utilidades de esa sociedad se invierten en bienes raíces, se habrá entrado en la integración.',
          ],
        },
        {
          heading: 'Ejemplo: colocación clásica y su señal de alerta',
          paragraphs: [
            'Un comerciante consigna en efectivo, el mismo día y en cuatro oficinas distintas de la misma ciudad, sumas que individualmente no alcanzan los umbrales de reporte, pero que en conjunto equivalen a varios cientos de millones de pesos. El fraccionamiento —conocido en la jerga como «pitufeo» o estructuración— busca evitar los controles de reporte. Estamos en la etapa de colocación y la señal de alerta es la operación fraccionada sin justificación económica.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que el lavado de activos solo aplica a dinero en efectivo o a cuentas bancarias.',
          correction: 'El artículo 323 habla de «bienes», no solo de dinero, y los verbos rectores cubren conductas como transportar, transformar, almacenar o administrar. Se puede lavar con mercancía, inmuebles, vehículos, activos virtuales, participaciones societarias o cualquier otro bien de contenido patrimonial.',
        },
        {
          mistake: 'Pensar que la estratificación y la integración son etapas obligatorias y sucesivas que siempre se presentan en ese orden.',
          correction: 'Son etapas analíticas: sirven para comprender el fenómeno, pero en la práctica pueden superponerse o no presentarse todas. La tipicidad no depende de completar el ciclo: basta realizar una de las conductas descritas sobre bienes de origen ilícito.',
        },
        {
          mistake: 'Sostener que sin sentencia condenatoria por el delito fuente no puede haber lavado de activos.',
          correction: 'El lavado es un delito autónomo. La jurisprudencia admite su configuración sin condena previa por el delito subyacente, siempre que exista prueba sobre el origen ilícito de los bienes. Lo que sí se exige, tras la Sentencia C-191 de 2016, es la acreditación de la conducta típica y no la mera ausencia de prueba sobre el origen lícito.',
        },
        {
          mistake: 'Aplicar a la DIAN el SAGRILAFT de la Superintendencia de Sociedades.',
          correction: 'La Circular Externa 100-000016 de 2020 (Capítulo X de la Circular Básica Jurídica de Supersociedades) obliga a las sociedades vigiladas o controladas por esa superintendencia y a determinados sectores. La DIAN es una Unidad Administrativa Especial y sus obligaciones antilavado derivan de la Ley 526 de 1999 y del Decreto 1068 de 2015.',
        },
      ],
      norms: [
        {
          norm: 'Ley 599 de 2000',
          article: 'art. 323',
          status: 'vigente',
          note: 'Lavado de activos. Modificado por la Ley 1762 de 2015 (art. 11). Pena de 10 a 30 años de prisión y multa de 1.000 a 50.000 SMLMV; agravante por operaciones de cambio, comercio exterior o ingreso de mercancía por lugares no habilitados.',
        },
        {
          norm: 'Sentencia C-191 de 2016 de la Corte Constitucional',
          status: 'vigente',
          note: 'Declaró inexequible la expresión del art. 323 referida a «realizar cualquier otro acto para ocultar o encubrir» el origen ilícito, por razones de tipicidad. Incide en la exigencia probatoria.',
        },
        {
          norm: 'Ley 1762 de 2015',
          status: 'vigente',
          note: 'Adoptó instrumentos para prevenir, controlar y sancionar el contrabando, el lavado de activos y la evasión fiscal; modificó los arts. 319, 320, 321 y 323 del Código Penal, entre otros, y el art. 3 de la Ley 526 de 1999.',
        },
        {
          norm: 'Circular Externa 100-000016 de 2020 de la Superintendencia de Sociedades',
          status: 'vigente',
          note: 'Modificó integralmente el Capítulo X de la Circular Básica Jurídica y transformó el SAGRLAFT en SAGRILAFT. Aplica a las sociedades vigiladas o controladas por Supersociedades que cumplan los umbrales previstos; NO aplica a la DIAN.',
        },
        {
          norm: 'Recomendaciones del GAFI',
          status: 'verificar',
          note: 'Estándares internacionales de prevención de LA/FT/FPADM. No son normas vinculantes de derecho interno colombiano, pero orientan el diseño del sistema nacional ALA/CFT y la evaluación mutua de Colombia. Verificar la edición vigente de las recomendaciones.',
        },
      ],
      links: [
        { label: 'UIAF — Unidad de Información y Análisis Financiero', url: 'https://www.uiaf.gov.co/' },
        { label: 'Gestor Normativo — Ley 599 de 2000 (Código Penal)', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388' },
        { label: 'Normograma DIAN — Ley 1762 de 2015', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/ley_1762_2015.htm' },
        { label: 'GAFI — Grupo de Acción Financiera Internacional', url: 'https://www.fatf-gafi.org/' },
      ],
      mindmap: {
        root: 'Lavado de activos',
        branches: [
          {
            label: 'Concepto',
            children: ['Dar apariencia de legalidad', 'Bien jurídico: orden económico y social', 'Delito pluriofensivo', 'Delito autónomo'],
          },
          {
            label: 'Etapas',
            children: ['Colocación — ingreso', 'Estratificación — ocultamiento', 'Integración — reingreso'],
          },
          {
            label: 'Art. 323 C.P.',
            children: ['Verbos rectores', 'Delitos fuente', '10 a 30 años y multa 1.000-50.000 SMLMV', 'Agravante por comercio exterior'],
          },
          {
            label: 'Delitos fuente',
            children: ['Narcotráfico', 'Contrabando y evasión', 'Enriquecimiento ilícito y cohecho', 'Extorsión y secuestro', 'Minería ilegal'],
          },
          {
            label: 'Riesgo administrativo',
            children: ['SARLAFT (financiero)', 'SAGRILAFT (Supersociedades)', 'Obligaciones ante la UIAF'],
          },
        ],
      },
      mindmapText:
        'El lavado de activos es el conjunto de actividades que buscan dar apariencia de legalidad a bienes de origen ilícito, protegiendo el orden económico y social. Se desarrolla en tres etapas: colocación (ingreso del recurso ilícito al circuito económico), estratificación u ocultamiento (separación del origen mediante múltiples transacciones) e integración (reingreso con apariencia de legitimidad). El artículo 323 del Código Penal sanciona a quien adquiera, resguarde, invierta, transporte, transforme, almacene, conserve, custodie o administre bienes provenientes de los delitos que la norma enumera, con prisión de 10 a 30 años y multa de 1.000 a 50.000 SMLMV, con agravante cuando median operaciones de comercio exterior o de cambio.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo en los PDF',
          note: 'Tema no desarrollado en los PDF; contenido construido a partir de fuentes oficiales verificadas (Código Penal arts. 323 y ss., Ley 1762 de 2015, UIAF, GAFI). Verificación: 2026-10-15.',
        },
      ],
      activityId: 'm12-a01',
    },
    {
      id: 'm12-l02',
      moduleId: 'm12',
      title: 'Financiación del terrorismo: concepto, diferencias con el lavado y el estándar internacional',
      indicators: ['i04'],
      objectives: [
        'Definir la financiación del terrorismo y describir la conducta típica del artículo 345 del Código Penal.',
        'Comparar el lavado de activos y la financiación del terrorismo en cuanto a dirección de los recursos, origen y finalidad.',
        'Identificar el papel del GAFI y de GAFILAT en el estándar internacional ALA/CFT.',
        'Explicar por qué la financiación del terrorismo puede cometerse con recursos de origen lícito.',
      ],
      sections: [
        {
          heading: '¿Qué es la financiación del terrorismo?',
          paragraphs: [
            'La financiación del terrorismo (FT) consiste en proveer, recolectar, entregar, recibir, administrar, aportar, custodiar o guardar fondos, bienes o recursos —o realizar cualquier acto que promueva, organice, apoye, mantenga, financie o sostenga económicamente— a grupos terroristas, grupos armados al margen de la ley o grupos de delincuencia organizada, o destinados a actividades terroristas.',
            'La diferencia esencial con el lavado de activos es de dirección: el lavado mueve recursos DESDE el delito HACIA la economía legal (para ocultar su origen); la financiación del terrorismo mueve recursos DESDE cualquier fuente HACIA el delito (para sostenerlo). El lavador busca que el dinero parezca limpio; el financiador busca que el dinero llegue a su destino, sin importar de dónde venga.',
            'De ahí se deriva la consecuencia más importante y más preguntada: la financiación del terrorismo puede cometerse con recursos de ORIGEN LÍCITO. No se requiere que el dinero provenga de un delito previo; basta que se destine a la actividad terrorista o al sostenimiento de un grupo armado ilegal.',
          ],
          callout: {
            type: 'memoriza',
            text: 'LA: dinero sucio → apariencia limpia (importa el ORIGEN). FT: dinero cualquiera → actividad terrorista (importa el DESTINO). Por eso la FT puede cometerse con recursos lícitos.',
          },
        },
        {
          heading: 'El artículo 345 del Código Penal',
          paragraphs: [
            'El delito está tipificado en el artículo 345 de la Ley 599 de 2000, bajo la denominación «Financiación del terrorismo y administración de recursos relacionados con actividades terroristas». El artículo fue reformulado por la Ley 1121 de 2006, que le dio su denominación actual y lo configuró como delito autónomo, y su última modificación corresponde al artículo 16 de la Ley 1453 de 2011.',
            'La conducta típica cubre dos modalidades:',
          ],
          bullets: [
            'Proveer, recolectar, entregar, recibir, administrar, aportar, custodiar o guardar fondos, bienes o recursos, o realizar cualquier acto que promueva, organice, apoye, mantenga, financie o sostenga económicamente a grupos de delincuencia organizada, grupos armados al margen de la ley o grupos terroristas nacionales o extranjeros.',
            'Proveer, recolectar, entregar, recibir, administrar, aportar, custodiar o guardar fondos, bienes o recursos, o realizar cualquier acto que promueva, organice, apoye, mantenga, financie o sostenga económicamente actividades terroristas.',
          ],
        },
        {
          heading: 'Pena, autonomía y diferencias con el concierto para delinquir',
          paragraphs: [
            'La escala penal prevista en la norma es de prisión de trece (13) a veintidós (22) años y multa de mil trescientos (1.300) a quince mil (15.000) salarios mínimos legales mensuales vigentes.',
            'La FT es un delito autónomo desde la Ley 1121 de 2006: no requiere que se haya cometido un acto terrorista, ni condena por él. Le basta acreditar la puesta a disposición de recursos con la finalidad de financiar la actividad. Además, su juzgamiento está excluido del principio de oportunidad y corresponde a los jueces penales especializados.',
            'Conviene no confundir el artículo 345 con el inciso 2 del artículo 340 (concierto para delinquir agravado cuando la organización tiene por objeto cometer delitos de terrorismo, financiación del terrorismo, narcotráfico, etc.). Son tipos penales distintos y con penas distintas, aunque frecuentemente concurran en un mismo caso.',
          ],
          callout: {
            type: 'norma',
            text: 'Art. 345 C.P.: financiación del terrorismo y administración de recursos relacionados con actividades terroristas. Modificado por la Ley 1453 de 2011 (art. 16), que había sido reformulado por la Ley 1121 de 2006 (art. 16). Pena: 13 a 22 años de prisión y multa de 1.300 a 15.000 SMLMV.',
          },
        },
        {
          heading: 'Cuadro comparativo: lavado de activos vs. financiación del terrorismo',
          paragraphs: [
            'Este cuadro es el instrumento de estudio más rentable del módulo, porque casi todas las preguntas de interpretación se resuelven aplicando una de estas filas:',
          ],
          table: {
            caption: 'Diferencias entre lavado de activos (LA) y financiación del terrorismo (FT)',
            headers: ['Criterio', 'Lavado de activos', 'Financiación del terrorismo'],
            rows: [
              ['Dirección del flujo', 'Desde el delito hacia la economía legal (el dinero se «limpia»).', 'Desde cualquier fuente hacia el delito (el dinero se «destina»).'],
              ['Origen de los recursos', 'Necesariamente ilícito: proviene de un delito fuente.', 'Puede ser lícito o ilícito: lo determinante es el destino.'],
              ['Momento típico', 'Después de la comisión del delito fuente (etapa de beneficio).', 'Antes o durante la actividad terrorista (etapa de preparación o sostenimiento).'],
              ['Finalidad perseguida', 'Ocultar el origen ilícito y disfrutar de los bienes.', 'Sostener, promover u organizar la actividad terrorista o el grupo armado.'],
              ['Bien jurídico', 'Orden económico y social.', 'Seguridad pública y orden público; el orden económico también resulta afectado (delito pluriofensivo).'],
              ['Cuantías típicas', 'Frecuentemente montos altos y estructurados.', 'Frecuentemente montos pequeños y fraccionados, para evitar controles.'],
              ['Tipo penal', 'Art. 323 C.P. — 10 a 30 años y multa de 1.000 a 50.000 SMLMV.', 'Art. 345 C.P. — 13 a 22 años y multa de 1.300 a 15.000 SMLMV.'],
              ['Conducta con recursos lícitos', 'No aplica: siempre requiere origen ilícito.', 'Sí: es la hipótesis central.'],
            ],
          },
        },
        {
          heading: 'Lectura operativa del cuadro comparativo',
          paragraphs: [
            'La consecuencia operativa de la última fila es enorme. En una entidad como la DIAN, la detección de LA parte de indicios de origen ilícito de los recursos (una compra con recursos cuyo origen no se explica, una sobrefacturación, un patrimonio que crece sin sustento). La detección de FT, en cambio, parte de la identificación de un DESTINO prohibido: una donación, un pago o una entrega de recursos a un grupo armado ilegal, aunque su origen documental sea impecable.',
          ],
          callout: {
            type: 'importante',
            text: 'Pregunta típica: ¿puede haber financiación del terrorismo con dinero de origen lícito? SÍ. Es precisamente lo que la distingue del lavado de activos.',
          },
        },
        {
          heading: 'El estándar internacional: GAFI y GAFILAT',
          paragraphs: [
            'El GAFI (Grupo de Acción Financiera Internacional, en inglés FATF) es el organismo intergubernamental que fija los estándares internacionales para combatir el lavado de activos, la financiación del terrorismo y la financiación de la proliferación de armas de destrucción masiva. Su instrumento central son las Cuarenta Recomendaciones, que no son normas directamente aplicables en el derecho interno colombiano, pero que orientan el diseño de la legislación y del sistema institucional ALA/CFT.',
            'GAFILAT es el organismo regional de tipo GAFI para América Latina. Colombia hace parte de GAFILAT y es evaluada periódicamente mediante el mecanismo de evaluaciones mutuas, que mide dos cosas distintas: el cumplimiento técnico de las recomendaciones y la EFICACIA del sistema (los resultados obtenidos).',
            'En la cuarta ronda de evaluaciones mutuas, el informe de evaluación mutua de Colombia fue publicado por GAFILAT en noviembre de 2018, con una evaluación elaborada con el apoyo del FMI y datos con corte a julio de 2017. Colombia obtuvo cumplimiento sustancial en la mayoría de las recomendaciones, con la Recomendación 29 sobre unidades de inteligencia financiera calificada como «ampliamente cumplida», y quedó en seguimiento reforzado con un plan de acción orientado a mejorar, entre otras, la debida diligencia del cliente y las sanciones financieras dirigidas. El propio informe destacó una capacidad importante de las autoridades para producir inteligencia financiera de alta calidad.',
            'Una de las recomendaciones más citadas en el trabajo diario de las entidades es la Recomendación 20, que obliga a los sujetos obligados a reportar las operaciones sospechosas a la unidad de inteligencia financiera, sin recurrir a umbrales mínimos ni a criterios de cuantía. Esa es, precisamente, la lógica que subyace al Reporte de Operaciones Sospechosas colombiano.',
          ],
          table: {
            caption: 'Del estándar internacional al deber interno',
            headers: ['Nivel', 'Instrumento', 'Efecto en Colombia'],
            rows: [
              ['Internacional', 'Cuarenta Recomendaciones del GAFI', 'No son norma interna directamente aplicable; orientan el diseño legislativo y reglamentario.'],
              ['Regional', 'Evaluaciones mutuas de GAFILAT', 'Miden cumplimiento técnico y eficacia; generan planes de acción y seguimiento.'],
              ['Nacional (ley)', 'Ley 526 de 1999 y modificaciones', 'Crea la UIAF y define el sistema de reporte de operaciones sospechosas.'],
              ['Nacional (reglamento)', 'Decreto 1068 de 2015 y resoluciones UIAF', 'Concreta qué entidades reportan, qué reportan y por qué canales.'],
              ['Institucional', 'Procedimientos internos de cada entidad', 'Traduce las obligaciones en instructivos, señales de alerta y rutas de reporte.'],
            ],
          },
        },
      ],
      summary: [
        'La financiación del terrorismo consiste en proveer, recolectar, entregar, recibir, administrar, aportar, custodiar o guardar recursos, o realizar actos que promuevan, organicen, apoyen, mantengan, financien o sostengan grupos terroristas, grupos armados al margen de la ley o grupos de delincuencia organizada, o actividades terroristas.',
        'Está tipificada en el artículo 345 del Código Penal (reformulado por la Ley 1121 de 2006 y modificado por el art. 16 de la Ley 1453 de 2011), con pena de 13 a 22 años y multa de 1.300 a 15.000 SMLMV.',
        'La diferencia central con el lavado es la dirección del flujo y el origen de los recursos: el lavado oculta el origen ilícito; la financiación del terrorismo puede cometerse con recursos lícitos porque lo determinante es el destino.',
        'La FT es delito autónomo: no requiere la comisión previa de un acto terrorista ni condena por él, y su juzgamiento está excluido del principio de oportunidad.',
        'El GAFI fija las Cuarenta Recomendaciones y GAFILAT evalúa a Colombia mediante evaluaciones mutuas; el informe de Colombia de la cuarta ronda fue publicado en noviembre de 2018.',
      ],
      memorize: [
        'Art. 345 C.P. = financiación del terrorismo y administración de recursos relacionados con actividades terroristas.',
        'Pena art. 345: 13 a 22 años de prisión y multa de 1.300 a 15.000 SMLMV.',
        'LA oculta el ORIGEN · FT oculta el DESTINO. La FT admite recursos de origen lícito.',
        'GAFI = estándar internacional (Cuarenta Recomendaciones). GAFILAT = organismo regional; evalúa a Colombia.',
        'La Recomendación 20 del GAFI es la base del deber de reportar operaciones sospechosas sin umbrales mínimos.',
      ],
      examples: [
        {
          heading: 'Ejemplo: la misma operación, dos lecturas distintas',
          paragraphs: [
            'Una empresa constructora gira mensualmente sumas moderadas a varias fundaciones sin actividad verificable, ubicadas en municipios con presencia de grupos armados ilegales. El origen del dinero está documentado: son utilidades declaradas y tributadas.',
            'Si el análisis busca origen ilícito, no hay lavado de activos evidente. Pero si los giros terminan sosteniendo económicamente a un grupo armado organizado, estamos frente a financiación del terrorismo. El dinero era limpio; el destino no. Esta es la razón por la cual los sistemas de prevención exigen analizar el destino y los beneficiarios, no solo el origen.',
          ],
        },
        {
          heading: 'Ejemplo: montos pequeños, máximo riesgo',
          paragraphs: [
            'Un error frecuente es asociar el riesgo de LA/FT al tamaño de las operaciones. En financiación del terrorismo ocurre lo contrario: el sostenimiento de una estructura ilegal puede requerir gastos operativos pequeños y recurrentes —alimentación, transporte, comunicaciones— pagados en efectivo o mediante giros fraccionados justamente para no llamar la atención. Por eso el reporte de operaciones sospechosas no depende de cuantías: depende de que la operación se salga de los patrones habituales y no tenga justificación razonable.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Aplicar al artículo 345 la exigencia de un delito fuente, como si fuera una modalidad de lavado.',
          correction: 'La financiación del terrorismo es un delito autónomo y puede cometerse con recursos lícitos. No requiere delito previo ni condena por un acto terrorista: lo que se sanciona es la puesta a disposición de recursos con esa finalidad.',
        },
        {
          mistake: 'Confundir el artículo 345 con el concierto para delinquir agravado del artículo 340.',
          correction: 'Son tipos penales distintos. El art. 340 sanciona el acuerdo para cometer delitos (entre ellos los de terrorismo y financiación del terrorismo); el art. 345 sanciona específicamente proveer, recolectar o administrar recursos con destino a esas actividades. Pueden concurrir en un mismo caso.',
        },
        {
          mistake: 'Creer que las Cuarenta Recomendaciones del GAFI son normas de aplicación directa en Colombia.',
          correction: 'El GAFI produce estándares internacionales que no se aplican directamente en el derecho interno. Su cumplimiento se logra mediante la legislación y la reglamentación nacionales (como la Ley 526 de 1999 y el Decreto 1068 de 2015) y se verifica a través de las evaluaciones mutuas.',
        },
      ],
      norms: [
        {
          norm: 'Ley 599 de 2000',
          article: 'art. 345',
          status: 'vigente',
          note: 'Financiación del terrorismo y administración de recursos relacionados con actividades terroristas. Reformulado por la Ley 1121 de 2006 (art. 16) y modificado por la Ley 1453 de 2011 (art. 16). Pena: 13 a 22 años de prisión y multa de 1.300 a 15.000 SMLMV.',
        },
        {
          norm: 'Ley 1121 de 2006',
          article: 'art. 16',
          status: 'vigente',
          note: 'Norma de prevención, detección, investigación y sanción de la financiación del terrorismo; configuró la FT como delito autónomo y le dio su denominación actual.',
        },
        {
          norm: 'Ley 1453 de 2011',
          article: 'art. 16',
          status: 'vigente',
          note: 'Modificó el artículo 345 del Código Penal, fijando la redacción vigente de la conducta típica.',
        },
        {
          norm: 'Ley 1908 de 2018',
          status: 'vigente',
          note: 'Fortalece la investigación y judicialización de organizaciones criminales (GDO y GAO). No es una norma de creación del delito de financiación del terrorismo en Colombia; regula medidas procesales y penales frente a esos grupos. Verificar su articulado específico si se cita por artículo.',
        },
        {
          norm: 'Cuarenta Recomendaciones del GAFI',
          status: 'verificar',
          note: 'Estándar internacional no vinculante directamente. La Recomendación 20 consagra el deber de reportar operaciones sospechosas sin umbrales mínimos. Verificar la edición vigente.',
        },
      ],
      links: [
        { label: 'GAFI — Grupo de Acción Financiera Internacional', url: 'https://www.fatf-gafi.org/' },
        { label: 'GAFILAT — Grupo de Acción Financiera de Latinoamérica', url: 'https://www.gafilat.org/' },
        { label: 'UIAF — Asuntos internacionales y evaluaciones mutuas', url: 'https://www.uiaf.gov.co/' },
        { label: 'Gestor Normativo — Ley 599 de 2000 (Código Penal)', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388' },
      ],
      mindmap: {
        root: 'Financiación del terrorismo',
        branches: [
          {
            label: 'Concepto',
            children: ['Proveer, recolectar, administrar recursos', 'Destino: grupos armados o actividades terroristas', 'Delito autónomo'],
          },
          {
            label: 'Art. 345 C.P.',
            children: ['Pena 13 a 22 años', 'Multa 1.300 a 15.000 SMLMV', 'Ley 1121 de 2006', 'Ley 1453 de 2011'],
          },
          {
            label: 'LA vs. FT',
            children: ['Origen vs. destino', 'Recursos ilícitos vs. lícitos o ilícitos', 'Ocultar vs. sostener'],
          },
          {
            label: 'Estándar internacional',
            children: ['GAFI — Cuarenta Recomendaciones', 'GAFILAT — evaluaciones mutuas', 'Recomendación 20: reporte sin umbrales'],
          },
        ],
      },
      mindmapText:
        'La financiación del terrorismo consiste en proveer, recolectar, entregar, administrar o custodiar recursos con destino a grupos armados ilegales, grupos terroristas o actividades terroristas. Está tipificada en el artículo 345 del Código Penal, con pena de 13 a 22 años de prisión y multa de 1.300 a 15.000 SMLMV, y es un delito autónomo que puede cometerse con recursos de origen lícito. Se diferencia del lavado de activos en la dirección del flujo: el lavado lleva recursos del delito hacia la economía legal ocultando su origen, mientras la financiación lleva recursos desde cualquier fuente hacia el delito. En el plano internacional, el GAFI fija las Cuarenta Recomendaciones y GAFILAT evalúa periódicamente a Colombia mediante evaluaciones mutuas.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo en los PDF',
          note: 'Tema no desarrollado en los PDF; contenido construido a partir de fuentes oficiales verificadas (Código Penal art. 345, Ley 1121 de 2006, Ley 1453 de 2011, GAFI, GAFILAT). Verificación: 2026-10-15.',
        },
      ],
    },
    {
      id: 'm12-l03',
      moduleId: 'm12',
      title: 'El sistema antilavado colombiano: la UIAF y el Reporte de Operaciones Sospechosas',
      indicators: ['i04'],
      objectives: [
        'Explicar qué es la UIAF, cuáles son sus objetivos legales y a qué sector está adscrita.',
        'Definir el Reporte de Operaciones Sospechosas (ROS) y las condiciones en que debe presentarse.',
        'Aplicar las reglas de reserva, buena fe y ausencia de responsabilidad del reportante.',
        'Identificar las obligaciones de reporte de las entidades públicas y el papel del SIREL.',
      ],
      sections: [
        {
          heading: 'La UIAF: la unidad de inteligencia financiera de Colombia',
          paragraphs: [
            'La Unidad de Información y Análisis Financiero (UIAF) fue creada por la Ley 526 de 1999 como una unidad administrativa especial adscrita al Ministerio de Hacienda y Crédito Público. Es la unidad de inteligencia financiera de Colombia: su misión es elaborar productos de inteligencia financiera de carácter orientador, con base en metodologías de rigor científico, para prevenir y detectar amenazas contra la economía nacional.',
            'El artículo 3 de la Ley 526 de 1999 —modificado por el artículo 33 de la Ley 1762 de 2015— fija sus dos objetivos centrales:',
          ],
          bullets: [
            'Prevenir y detectar operaciones que puedan ser utilizadas para ocultar, manejar, invertir o aprovechar dinero u otros bienes de origen delictivo, o destinados a financiar esas actividades, o para dar apariencia de legalidad a delitos y transacciones vinculadas, con prioridad en el lavado de activos y la financiación del terrorismo. Para ello la Unidad centraliza, sistematiza y analiza, mediante actividades de inteligencia financiera, la información recaudada.',
            'Prevenir, detectar y analizar operaciones sospechosas de comercio exterior relacionadas con contrabando y fraude aduanero, como delitos autónomos o subyacentes al lavado de activos, junto con los delitos conexos.',
          ],
        },
        {
          heading: 'La UIAF no sanciona: su lugar en el sistema',
          paragraphs: [
            'Este segundo objetivo es el que explica de manera directa la relación entre la UIAF y la DIAN: la ley le asigna expresamente a la unidad de inteligencia financiera la competencia sobre las operaciones sospechosas de comercio exterior vinculadas a contrabando y fraude aduanero, que son precisamente los ámbitos en los que la DIAN ejerce su función de control.',
            'La UIAF no es una autoridad judicial ni sancionatoria. No investiga penalmente, no acusa y no condena: recibe información, la centraliza, la analiza mediante inteligencia financiera y traslada a las autoridades competentes (Fiscalía General de la Nación, entre otras) los resultados de su análisis. El ROS, en particular, no es una denuncia penal.',
          ],
          callout: {
            type: 'memoriza',
            text: 'UIAF: RECIBE → CENTRALIZA → ANALIZA → TRASLADA. No sanciona, no condena, no es una denuncia penal.',
          },
        },
        {
          heading: 'El Reporte de Operaciones Sospechosas (ROS)',
          paragraphs: [
            'El Reporte de Operaciones Sospechosas es el reporte mediante el cual un sujeto obligado informa a la UIAF sobre una operación que, por su número, cantidad o características, no se encuentra dentro de los parámetros de normalidad de la actividad de que se trate, y respecto de la cual no se tiene una justificación razonable.',
            'Sus características esenciales son:',
          ],
          bullets: [
            'Es inmediato: debe reportarse tan pronto se detecta. No es un reporte periódico ni un informe de cierre.',
            'No está sujeto a umbrales de cuantía: no hay un monto mínimo a partir del cual se reporta. Lo que importa es la configuración de la operación, no su valor.',
            'Es reservado: el sujeto obligado no puede informar a la persona reportada ni a terceros que presentó el ROS. La reserva protege la investigación y los derechos de las personas involucradas.',
            'No exige certeza: no se necesita tener la prueba del delito. El estándar es el de la sospecha fundada sobre una operación que se sale de los patrones habituales y carece de justificación razonable.',
            'No constituye denuncia penal: es un reporte de inteligencia financiera. Su función es alimentar el análisis de la UIAF, no activar directamente el proceso penal.',
            'No genera responsabilidad para quien reporta de buena fe: la ley exime de responsabilidad a quien presenta el reporte, y esa protección es la garantía que permite que las entidades reporten sin temor a represalias judiciales.',
          ],
        },
        {
          heading: 'El AROS y el canal de reporte',
          paragraphs: [
            'Existe además una figura complementaria: el AROS, reporte de ausencia de operaciones sospechosas, que se presenta cuando el sujeto obligado, cumplido el periodo establecido, no identificó operaciones sospechosas que reportar. La existencia del AROS permite verificar que el sujeto obligado efectivamente está haciendo el análisis y no simplemente omitiendo el reporte.',
            'El canal tecnológico diseñado por la UIAF para la presentación de reportes en línea es el SIREL (Sistema de Reporte en Línea). Los reportes se presentan por ese canal y no por correo ni por ventanilla.',
          ],
          callout: {
            type: 'importante',
            text: 'ROS ≠ denuncia penal. El ROS es reservado, no admite revelación al reportado, no requiere certeza probatoria y no genera responsabilidad para el reportante de buena fe. La denuncia penal sigue otro camino: se presenta ante la Fiscalía General de la Nación.',
          },
        },
        {
          heading: 'Buena fe y reserva: las dos garantías del sistema',
          paragraphs: [
            'El sistema de reporte solo funciona si las entidades reportan sin miedo y si la información no se filtra. De ahí que el régimen consagre dos garantías simétricas.',
            'La buena fe: quien presenta un reporte obedeciendo el deber legal no incurre en responsabilidad por esa actuación. La Ley 190 de 1995 (Estatuto Anticorrupción) consagró esa exención de responsabilidad, y el régimen de la Ley 526 de 1999 la articula con el deber de reporte de la UIAF. La protección opera mientras el reporte se presente en cumplimiento del deber legal y no se use como instrumento para perjudicar a alguien con información falsa.',
            'La reserva: la información recogida por la UIAF y sus productos de análisis están sujetos a reserva. La reserva alcanza a las entidades y a sus servidores, que no pueden revelar al reportado que existe un reporte en su contra ni permitir el acceso de personas no autorizadas. La Ley 526 de 1999 modificó el Estatuto Orgánico del Sistema Financiero para consagrar expresamente esa reserva sobre la información reportada, y el régimen fue precisado por la Ley 1621 de 2013, que regula la actividad de inteligencia y contrainteligencia.',
            'La razón de la reserva es doble. Hacia afuera, evita que el reportado destruya pruebas o adapte su comportamiento. Hacia adentro, protege el derecho al buen nombre y a la intimidad de quien es reportado y que puede resultar finalmente inocente: un reporte no es una acusación y no puede tratarse como tal.',
          ],
          callout: {
            type: 'error',
            text: 'Revelar al contribuyente que se presentó un ROS en su contra, además de violar la reserva, compromete la investigación y expone disciplinariamente al servidor público. Está expresamente prohibido.',
          },
        },
        {
          heading: '¿Quiénes están obligados a reportar?',
          paragraphs: [
            'El deber de reporte tiene dos fuentes normativas que conviene no confundir.',
            'La primera son las obligaciones permanentes y sectoriales: las entidades del sector financiero y asegurador y del mercado de valores están sujetas a las obligaciones de los artículos 102 a 107 del Estatuto Orgánico del Sistema Financiero, y cada sector cuenta con instrucciones del respectivo supervisor. En el caso de las sociedades, la Superintendencia de Sociedades expide el Capítulo X de su Circular Básica Jurídica (SAGRILAFT y régimen de medidas mínimas).',
            'La segunda es la cláusula general del artículo 2.14.2 del Decreto 1068 de 2015, Decreto Único Reglamentario del Sector Hacienda y Crédito Público: las entidades públicas y privadas de sectores distintos al financiero, asegurador y del mercado de valores deben reportar a la UIAF la información de los artículos 102 a 104 del EOSF —que comprenden el reporte de operaciones sospechosas y de operaciones en efectivo— cuando la UIAF lo solicite, en la forma y oportunidad que esta señale.',
            'De ahí se siguen tres conclusiones prácticas para una entidad pública como la DIAN:',
          ],
          bullets: [
            'La DIAN es fuente de información para la UIAF: debe suministrar la información que reposa en sus archivos cuando la Unidad la requiera para documentar reportes de operaciones sospechosas.',
            'La DIAN es también sujeto de deberes de reporte frente a la UIAF en los términos de la cláusula general del Decreto 1068 de 2015 y de las resoluciones que la UIAF expida.',
            'Las autoridades con funciones de inspección, vigilancia y control tienen además el deber legal de instruir a sus vigiladas sobre las medidas de prevención de LA/FT (Ley 526 de 1999, art. 10).',
          ],
          table: {
            caption: 'Cómo se organiza el reporte a la UIAF',
            headers: ['Tipo de reporte', 'Contenido', 'Periodicidad'],
            rows: [
              ['ROS — Reporte de Operaciones Sospechosas', 'Operación que se sale de los parámetros de normalidad y carece de justificación razonable.', 'Inmediato, cuando se detecta. Sin umbral de cuantía.'],
              ['AROS — Reporte de Ausencia de Operaciones Sospechosas', 'Constancia de que, cumplido el periodo, no se identificaron operaciones sospechosas.', 'Con la periodicidad que señale la UIAF para cada sector.'],
              ['Reportes de operaciones en efectivo y otros reportes objetivos', 'Operaciones definidas por la normativa de cada sector (EOSF arts. 102 a 104).', 'Según las resoluciones de la UIAF y las instrucciones del supervisor.'],
            ],
          },
        },
        {
          heading: 'De ROS a denuncia: dos caminos que no se sustituyen',
          paragraphs: [
            'Una confusión que se evalúa con frecuencia consiste en creer que presentar el ROS exime a la entidad de denunciar penalmente, o que el ROS equivale a la denuncia.',
            'No es así. Son dos deberes diferentes y autónomos:',
          ],
          table: {
            caption: 'ROS vs. denuncia penal',
            headers: ['Aspecto', 'ROS ante la UIAF', 'Denuncia penal ante la Fiscalía'],
            rows: [
              ['Naturaleza', 'Reporte de inteligencia financiera.', 'Actuación de carácter penal que activa la investigación judicial.'],
              ['Destinatario', 'UIAF.', 'Fiscalía General de la Nación (o autoridad con funciones de policía judicial).'],
              ['Estándar', 'Sospecha fundada; no requiere certeza ni prueba del delito.', 'Conocimiento de hechos con características de delito.'],
              ['Reserva', 'Reservado respecto del reportado.', 'Sujeto a las reglas procesales penales, con reserva de la actuación en los términos de ley.'],
              ['Efecto', 'Alimenta el análisis de inteligencia; la UIAF traslada resultados a las autoridades competentes si corresponde.', 'Inicia o se incorpora a la investigación penal.'],
            ],
          },
        },
        {
          heading: 'La regla de trabajo en una entidad pública',
          paragraphs: [
            'En una entidad pública, la regla de trabajo es la siguiente: si el hecho detectado tiene características de delito, se denuncia; si además configura una operación sospechosa de LA/FT en los términos legales, se reporta a la UIAF; y las dos actuaciones se tramitan por separado, con sus propios canales y sus propias reglas de reserva.',
          ],
          callout: {
            type: 'memoriza',
            text: 'ROS → UIAF (inteligencia financiera, reservado, sin umbrales). Denuncia → Fiscalía (penal). Uno no sustituye al otro.',
          },
        },
      ],
      summary: [
        'La UIAF es la unidad de inteligencia financiera de Colombia, creada por la Ley 526 de 1999 y adscrita al Ministerio de Hacienda; su artículo 3, modificado por la Ley 1762 de 2015, la faculta para centralizar, sistematizar y analizar información y para prevenir y detectar operaciones sospechosas de comercio exterior relacionadas con contrabando y fraude aduanero.',
        'La UIAF no sanciona: recibe, centraliza, analiza y traslada información a las autoridades competentes.',
        'El ROS es el reporte de una operación que se sale de los parámetros de normalidad y carece de justificación razonable; es inmediato, sin umbrales de cuantía, reservado y no requiere certeza probatoria.',
        'El ROS no es una denuncia penal y no genera responsabilidad para quien reporta de buena fe; su presentación se hace por el SIREL. El AROS reporta la ausencia de operaciones sospechosas en el periodo.',
        'Las entidades públicas de sectores distintos al financiero deben reportar a la UIAF cuando esta lo solicite (Decreto 1068 de 2015, art. 2.14.2), y las autoridades de inspección, vigilancia y control deben instruir a sus vigiladas (Ley 526 de 1999, art. 10).',
      ],
      memorize: [
        'UIAF = unidad de inteligencia financiera, creada por la Ley 526 de 1999, adscrita al Ministerio de Hacienda.',
        'Objetivos del art. 3: prevención y detección de LA/FT + operaciones sospechosas de comercio exterior (contrabando y fraude aduanero).',
        'ROS: inmediato · sin umbral de cuantía · reservado · sin necesidad de certeza · no es denuncia penal · no genera responsabilidad a quien reporta de buena fe.',
        'AROS = reporte de ausencia de operaciones sospechosas.',
        'SIREL = sistema de reporte en línea de la UIAF.',
        'Decreto 1068 de 2015, art. 2.14.2: entidades públicas y privadas de sectores distintos al financiero reportan a la UIAF cuando la UIAF lo solicite.',
      ],
      examples: [
        {
          heading: 'Ejemplo: ¿se reporta o no se reporta?',
          paragraphs: [
            'Un funcionario revisa una declaración de importación y observa que el importador, una sociedad constituida hace tres meses con un capital de diez millones de pesos, declara importaciones por más de dos mil millones en el mismo mes, y que la sociedad no tiene empleados registrados ni movimientos financieros compatibles con esa actividad.',
            'Análisis: la operación no se ajusta a los parámetros de normalidad y no existe una justificación razonable evidente. Hay una operación sospechosa que debe reportarse a la UIAF y, simultáneamente, un hecho con posibles características de delito que debe evaluarse para traslado a la autoridad penal competente. Lo que NO se hace es: informar al importador que se está reportando, pedirle explicaciones sobre el reporte, o esperar a tener la prueba plena del delito para reportar.',
          ],
        },
        {
          heading: 'Ejemplo: la reserva en la práctica',
          paragraphs: [
            'Una entidad presenta un ROS sobre un cliente. Días después, el cliente llama a preguntar si existe algún reporte en su contra y solicita copia de la información remitida a la UIAF. La respuesta correcta es negativa y sin explicaciones sobre el contenido: la reseriva del reporte impide confirmar su existencia al reportado. La reserva no es una cortesía administrativa: es una obligación legal cuyo incumplimiento acarrea responsabilidad disciplinaria y penal.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que el ROS es una denuncia penal y que presentarlo releva a la entidad de denunciar.',
          correction: 'El ROS es un reporte de inteligencia financiera dirigido a la UIAF, reservado y sin exigencia de certeza. La denuncia penal se presenta ante la Fiscalía General de la Nación y responde a reglas distintas. Son deberes autónomos: pueden coexistir y ninguno sustituye al otro.',
        },
        {
          mistake: 'Sostener que solo se reportan operaciones sospechosas cuando superan cierto monto.',
          correction: 'El ROS no está sujeto a umbrales de cuantía. La Recomendación 20 del GAFI y la normativa colombiana exigen reportar con base en las características de la operación y la ausencia de justificación razonable, no en su valor. En financiación del terrorismo, de hecho, las operaciones suelen ser de montos pequeños.',
        },
        {
          mistake: 'Informar al cliente o usuario que se presentó un reporte en su contra.',
          correction: 'La reserva del reporte es una obligación legal que alcanza a la entidad y a sus servidores. Revelar la existencia del ROS al reportado compromete la investigación y genera responsabilidad disciplinaria.',
        },
        {
          mistake: 'Pensar que la UIAF sanciona a quien comete lavado de activos o financiación del terrorismo.',
          correction: 'La UIAF es una unidad de inteligencia financiera: recibe, centraliza, analiza y traslada información. Las sanciones penales las imponen los jueces penales; las administrativas, cada entidad competente en su ámbito. La UIAF no tiene competencia sancionatoria penal.',
        },
      ],
      norms: [
        {
          norm: 'Ley 526 de 1999',
          article: 'arts. 3, 9, 10 y 11',
          status: 'vigente',
          note: 'Crea la UIAF y define sus objetivos y funciones (art. 3, modificado por la Ley 1762 de 2015, art. 33), la reserva de la información (art. 9, modificado por el parágrafo del art. 34 de la Ley 1621 de 2013), el deber de las autoridades de inspección, vigilancia y control de instruir a sus vigiladas (art. 10) y la reserva sobre la información reportada (art. 11, que modificó el EOSF).',
        },
        {
          norm: 'Decreto 1068 de 2015',
          article: 'art. 2.14.2',
          status: 'vigente',
          note: 'Decreto Único Reglamentario del Sector Hacienda: las entidades públicas y privadas de sectores distintos al financiero, asegurador y del mercado de valores deben reportar a la UIAF la información de los arts. 102 a 104 del EOSF cuando la UIAF lo solicite.',
        },
        {
          norm: 'Ley 190 de 1995',
          article: 'art. 42',
          status: 'vigente',
          note: 'Estatuto Anticorrupción: exención de responsabilidad para quien reporta operaciones sospechosas en cumplimiento de un deber legal (base normativa de la protección por buena fe).',
        },
        {
          norm: 'Ley 1621 de 2013',
          article: 'art. 34 (parágrafo)',
          status: 'vigente',
          note: 'Regula la actividad de inteligencia y contrainteligencia y precisa el régimen de reserva aplicable a la información y a los productos de la UIAF.',
        },
        {
          norm: 'Recomendación 20 del GAFI',
          status: 'verificar',
          note: 'Establece el deber de reportar operaciones sospechosas a la unidad de inteligencia financiera, sin umbrales mínimos. Estándar internacional no aplicable directamente; verificar la edición vigente.',
        },
      ],
      links: [
        { label: 'UIAF — Unidad de Información y Análisis Financiero', url: 'https://www.uiaf.gov.co/' },
        { label: 'UIAF — Misión, visión, funciones y deberes', url: 'https://uiaf.gov.co/index.php/1.1-Misi%C3%B3n-visi%C3%B3n-funciones-y-deberes/' },
        { label: 'Gestor Normativo — Ley 526 de 1999', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6288' },
        { label: 'UIAF — Evaluaciones mutuas e información internacional', url: 'https://www.uiaf.gov.co/index.php/asuntos-internacionales/resultados-evaluaciones-mutuas/cuarta-ronda' },
      ],
      mindmap: {
        root: 'Sistema antilavado',
        branches: [
          {
            label: 'UIAF',
            children: ['Ley 526 de 1999', 'Adscrita a MinHacienda', 'Centraliza, sistematiza y analiza', 'Traslada a autoridades'],
          },
          {
            label: 'Objetivos (art. 3)',
            children: ['Prevenir y detectar LA/FT', 'Operaciones sospechosas de comercio exterior', 'Contrabando y fraude aduanero'],
          },
          {
            label: 'ROS',
            children: ['Inmediato', 'Sin umbrales de cuantía', 'Reservado', 'No es denuncia penal', 'No genera responsabilidad de buena fe'],
          },
          {
            label: 'Otros reportes',
            children: ['AROS — ausencia de operaciones sospechosas', 'Operaciones en efectivo', 'SIREL — canal de reporte'],
          },
          {
            label: 'Obligados',
            children: ['Sector financiero (EOSF arts. 102-107)', 'Supersociedades — SAGRILAFT', 'Entidades públicas — Decreto 1068 de 2015 art. 2.14.2'],
          },
        ],
      },
      mindmapText:
        'La UIAF, creada por la Ley 526 de 1999 y adscrita al Ministerio de Hacienda, es la unidad de inteligencia financiera de Colombia: centraliza, sistematiza y analiza información para prevenir y detectar el lavado de activos, la financiación del terrorismo y las operaciones sospechosas de comercio exterior vinculadas a contrabando y fraude aduanero. Su principal instrumento de captación de información es el Reporte de Operaciones Sospechosas: inmediato, sin umbrales de cuantía, reservado, sin exigencia de certeza y sin responsabilidad para el reportante de buena fe. El ROS no es una denuncia penal: se presenta por el SIREL y se complementa con el AROS cuando no hay operaciones que reportar. Las entidades públicas son fuente de información para la UIAF y están sujetas a la cláusula general del Decreto 1068 de 2015.',
      source: [
        {
          doc: 'material',
          pages: 'sin desarrollo en los PDF',
          note: 'Tema no desarrollado en los PDF; contenido construido a partir de fuentes oficiales verificadas (Ley 526 de 1999, Decreto 1068 de 2015, portal y documentos de la UIAF). Verificación: 2026-10-15.',
        },
      ],
    },
    {
      id: 'm12-l04',
      moduleId: 'm12',
      title: 'El papel de la DIAN: detección en comercio exterior, coordinación y denuncias',
      indicators: ['i04'],
      objectives: [
        'Identificar las dependencias de la DIAN con competencia en materia de prevención de LA/FT.',
        'Reconocer señales de alerta de lavado de activos en operaciones de comercio exterior.',
        'Explicar la relación entre la DIAN y la UIAF en el suministro de información.',
        'Describir la ruta de las denuncias de fiscalización y el traslado a la Fiscalía General de la Nación.',
      ],
      sections: [
        {
          heading: 'Dónde está la competencia LA/FT en la DIAN',
          paragraphs: [
            'La prevención y el control del lavado de activos y la financiación del terrorismo no constituyen una dependencia aislada en la DIAN: son una función transversal del proceso de fiscalización. El material de formación de la entidad lo enuncia de manera expresa al describir el subproceso misional de Fiscalización y Liquidación, cuyas funciones en materia tributaria incluyen, además de la investigación y determinación de impuestos y la imposición de sanciones, el «control y prevención a operaciones sospechosas de lavado de activos y financiación del terrorismo» y las «denuncias de fiscalización».',
            'En la estructura vigente, esta función se articula así:',
          ],
          bullets: [
            'La Dirección de Gestión de Fiscalización dirige los planes de fiscalización y control, incluida la detección de operaciones de lavado de activos.',
            'En el nivel central funcionan una coordinación de control y prevención de lavado de activos y una coordinación de RILO y auditoría de denuncias de fiscalización.',
            'La Subdirección de Apoyo en la Lucha contra el Delito Aduanero y Fiscal canaliza las actuaciones frente a conductas delictivas en materia aduanera y fiscal, incluidas las denuncias de fiscalización.',
            'Las direcciones seccionales, a través de sus divisiones de fiscalización y control operativo, detectan en el terreno operaciones inusuales o sospechosas, incluidas las de carácter cambiario.',
            'El Decreto 4048 de 2008 ya había previsto, entre las funciones de la entidad, la de suministrar a la UIAF la información que repose en los archivos de la DIAN y que la Unidad requiera para documentar los reportes de operaciones sospechosas.',
          ],
          callout: {
            type: 'memoriza',
            text: 'LA/FT en la DIAN NO es una dependencia independiente: es una función transversal del proceso de fiscalización, con coordinación de control y prevención de lavado de activos y coordinación de denuncias de fiscalización en el nivel central.',
          },
        },
        {
          heading: 'Señales de alerta en operaciones de comercio exterior',
          paragraphs: [
            'En el comercio exterior, el lavado de activos se vale de la compraventa internacional de bienes y servicios para justificar el movimiento de recursos. El mecanismo se llama manipulación de precios de comercio: si el precio declarado no corresponde al valor real de la mercancía, la diferencia es el vehículo por el que fluyen los recursos.',
            'Las dos modalidades clásicas son:',
          ],
          bullets: [
            'Sobrevaloración (sobrefacturación) de importaciones: el importador paga al exterior más de lo que vale la mercancía y remite al exterior el excedente asociado a un valor de aduana inflado. Es un mecanismo de FALSA IMPORTACIÓN y suele asociarse a la salida de capitales.',
            'Subvaloración (subfacturación) de exportaciones: el exportador declara un valor inferior al real y deja en el exterior la diferencia. Es un mecanismo de FALSA EXPORTACIÓN y suele asociarse al ingreso de recursos.',
            'Triangulación: la mercancía o los recursos pasan por uno o más terceros países o jurisdicciones intermedias sin justificación económica, para dificultar la identificación del origen real de los fondos y del beneficiario final.',
            'Inconsistencias documentales: cantidades declaradas que no coinciden con los documentos de transporte, clasificación arancelaria sin relación con la mercancía, descripción genérica o vaga de los bienes.',
            'Manipulación del valor en aduana: subvaloración o sobrevaloración del valor declarado respecto de mercancías idénticas o similares en el mercado internacional.',
          ],
        },
        {
          heading: 'Señales de alerta en el perfil del operador',
          paragraphs: [
            'A estas señales de naturaleza aduanera se suman señales de comportamiento del operador, que en conjunto constituyen el perfil de riesgo:',
          ],
          bullets: [
            'Sociedades constituidas recientemente con capital reducido que realizan operaciones de alto volumen.',
            'Operadores que no tienen actividad económica coherente con el tamaño ni con la naturaleza de las operaciones declaradas.',
            'Cambios frecuentes de representante legal, de domicilio o de proveedores, sin razón comercial verificable.',
            'Uso de jurisdicciones de alto riesgo o de territorios con regímenes opacos de información societaria.',
            'Pago de operaciones desde cuentas de terceros sin relación aparente con el importador o exportador.',
            'Fraccionamiento de operaciones para mantener cada una por debajo de los umbrales de control.',
            'Doble facturación o existencia de dos documentos con valores distintos para la misma operación.',
          ],
          callout: {
            type: 'importante',
            text: 'Sobrevaloración de importaciones y subvaloración de exportaciones son las dos señales más preguntadas. Regla mnemotécnica: se paga de más hacia afuera (importación sobrevalorada) o se declara de menos hacia adentro (exportación subvalorada).',
          },
        },
        {
          heading: 'La relación DIAN-UIAF',
          paragraphs: [
            'La relación entre las dos entidades opera en cuatro planos:',
          ],
          table: {
            caption: 'Canales de relación entre la DIAN y la UIAF',
            headers: ['Plano', 'Contenido'],
            rows: [
              ['Suministro de información', 'La DIAN entrega a la UIAF la información que reposa en sus archivos y que la Unidad requiere para documentar los reportes de operaciones sospechosas.'],
              ['Reporte de operaciones sospechosas', 'La DIAN reporta a la UIAF las operaciones sospechosas de LA/FT detectadas en sus ámbitos de competencia (tributario, aduanero y cambiario).'],
              ['Análisis conjunto sobre comercio exterior', 'El art. 3 de la Ley 526 de 1999 le asigna expresamente a la UIAF la prevención y detección de operaciones sospechosas de comercio exterior relacionadas con contrabando y fraude aduanero.'],
              ['Articulación interinstitucional', 'Participación en instancias de coordinación contra el contrabando, la evasión y el lavado de activos, con Fiscalía, Policía Fiscal y Aduanera (POLFA) y demás autoridades.'],
            ],
          },
        },
        {
          heading: 'El Registro Único de Beneficiarios Finales',
          paragraphs: [
            'Un instrumento adicional de articulación es el Registro Único de Beneficiarios Finales (RUB), creado por la Ley 2195 de 2022. El artículo 13 de esa ley establece que el RUB es reservado y no público, y autoriza el acceso a la información únicamente a determinadas entidades para el ejercicio de funciones de inspección, vigilancia y control, investigación fiscal y disciplinaria, y de lucha contra el lavado de activos, la financiación del terrorismo, la corrupción y la captación masiva no autorizada. Entre las entidades autorizadas están la DIAN, la UIAF, la Fiscalía General de la Nación, la Contraloría General de la República, la Procuraduría General de la Nación, la Superintendencia de Sociedades y la Superintendencia Financiera.',
            'La información sobre el beneficiario final —la persona natural que en últimas se beneficia de la operación— es especialmente relevante frente a estructuras societarias en cadena diseñadas para ocultar al verdadero interesado, que es una de las técnicas típicas de estratificación.',
          ],
          callout: {
            type: 'memoriza',
            text: 'DIAN ↔ UIAF: la DIAN SUMINISTRA información y REPORTA operaciones sospechosas; la UIAF ANALIZA y TRASLADA. El RUB (Ley 2195 de 2022, art. 13) es reservado y la DIAN tiene acceso a él.',
          },
        },
        {
          heading: 'Las denuncias de fiscalización y el traslado a la Fiscalía',
          paragraphs: [
            'La DIAN cuenta con un sistema interno de recepción, asignación, perfilamiento, trazabilidad, traslado y control de las denuncias de fiscalización en materia tributaria, aduanera, cambiaria y de fiscalidad internacional. Es el instrumento operativo mediante el cual la ciudadanía, otras entidades y las áreas internas informan hechos que pueden constituir incumplimiento de las obligaciones tributarias, aduaneras o cambiarias.',
            'Los elementos esenciales de una denuncia de fiscalización son:',
          ],
          bullets: [
            'Identificación del denunciante, aunque la denuncia puede presentarse de manera anónima.',
            'Identificación del denunciado: nombre o razón social, identificación y, cuando sea posible, dirección.',
            'Descripción concreta de los hechos: qué ocurrió, cómo, cuándo y dónde.',
            'Elementos de prueba o soportes documentales que acompañen la denuncia.',
            'Claridad sobre la materia: tributaria, aduanera, cambiaria o de fiscalidad internacional.',
          ],
        },
        {
          heading: 'La ruta de la denuncia y el traslado penal',
          paragraphs: [
            'Recibida la denuncia, la entidad la evalúa, la clasifica y la asigna a la dependencia competente para el control administrativo. Si en el curso de esa evaluación se identifican hechos con características de delito, la entidad debe dar traslado a la Fiscalía General de la Nación para lo de su competencia; en el ámbito aduanero, la Policía Fiscal y Aduanera (POLFA) cumple funciones de policía judicial en apoyo de la DIAN.',
            'Este punto es decisivo para el examen: la DIAN ejerce el control ADMINISTRATIVO (investigación, determinación, sanción) y, en paralelo, tiene el deber de poner en conocimiento de la autoridad penal los hechos que puedan constituir delito. Las dos vías son independientes: una sanción administrativa no agota el reproche penal, y un proceso penal no suspende la facultad de fiscalización administrativa.',
            'La entidad también ha advertido sobre conductas que suplantan su función: personas que se presentan como funcionarios de la DIAN para ofrecer servicios gratuitos o para intermediar en trámites, o que cobran por gestiones que la entidad presta sin costo. Son señales de alerta de corrupción que deben reportarse por los canales institucionales.',
          ],
          table: {
            caption: 'Ruta del informe al proceso',
            headers: ['Paso', 'Qué ocurre', 'Responsable'],
            rows: [
              ['1. Recepción de la denuncia', 'Ingreso por los canales institucionales de la DIAN; puede ser anónima; se radica con número único.', 'DIAN — canal de denuncias de fiscalización'],
              ['2. Clasificación y perfilamiento', 'Se identifica la materia (tributaria, aduanera, cambiaria, fiscalidad internacional) y se asigna a la dependencia competente.', 'Coordinación de denuncias de fiscalización'],
              ['3. Control administrativo', 'Actuación de fiscalización: verificación, investigación, determinación y sanción si corresponde.', 'Dependencias de fiscalización'],
              ['4. Reporte de operación sospechosa', 'Si el caso configura una operación sospechosa de LA/FT, se reporta a la UIAF de manera reservada e inmediata.', 'Área competente de la DIAN'],
              ['5. Traslado penal', 'Si hay hechos con características de delito, se da traslado a la Fiscalía General de la Nación.', 'DIAN / Fiscalía'],
            ],
          },
        },
      ],
      summary: [
        'La prevención de LA/FT es una función transversal del proceso de fiscalización de la DIAN: el material de formación la enumera, junto con las denuncias de fiscalización, entre las funciones del subproceso de Fiscalización y Liquidación.',
        'Participan la Dirección de Gestión de Fiscalización, la coordinación de control y prevención de lavado de activos, la coordinación de RILO y auditoría de denuncias de fiscalización, la Subdirección de Apoyo en la Lucha contra el Delito Aduanero y Fiscal y las dependencias de fiscalización territoriales.',
        'Las señales de alerta en comercio exterior incluyen sobrefacturación de importaciones, subfacturación de exportaciones, triangulaciones, inconsistencias documentales, manipulación del valor en aduana y perfiles de operador anómalos.',
        'La DIAN suministra información a la UIAF para documentar reportes de operaciones sospechosas, le reporta operaciones sospechosas detectadas y participa en instancias de coordinación interinstitucional; tiene acceso al Registro Único de Beneficiarios Finales (Ley 2195 de 2022, art. 13).',
        'Las denuncias de fiscalización se tramitan por el canal institucional (pueden ser anónimas), se clasifican y asignan según la materia, y cuando hay hechos con características de delito se da traslado a la Fiscalía General de la Nación, sin que ello suspenda la actuación administrativa.',
      ],
      memorize: [
        'Funciones del subproceso de Fiscalización y Liquidación (material de formación): investigación y determinación · sanciones · CONTROL Y PREVENCIÓN DE OPERACIONES SOSPECHOSAS DE LA/FT · DENUNCIAS DE FISCALIZACIÓN.',
        'Señales de alerta de comercio exterior: sobrefacturación de importaciones, subfacturación de exportaciones, triangulación, inconsistencia documental, manipulación del valor en aduana.',
        'DIAN → UIAF: suministra información y reporta operaciones sospechosas. UIAF → autoridades: analiza y traslada.',
        'RUB (Ley 2195 de 2022, art. 13): reservado; la DIAN es una de las entidades con acceso.',
        'La DIAN controla administrativamente y traslada a la Fiscalía cuando hay hechos con características de delito. Las dos vías son independientes.',
        'SIRI es un sistema de la Procuraduría General de la Nación, NO de la DIAN.',
      ],
      examples: [
        {
          heading: 'Ejemplo: una exportación con señales de alerta',
          paragraphs: [
            'Una sociedad exporta café verde a un comprador en el sudeste asiático, pero el país de destino declarado no es un mercado tradicional de café colombiano y el precio declarado está muy por debajo de la cotización internacional de referencia. El pago se recibe desde una cuenta en un tercer país sin relación comercial aparente con el comprador.',
            'Señales identificadas: subvaloración del valor declarado (subfacturación de exportación), triangulación con jurisdicción intermedia y pago desde un tercero sin vínculo aparente. El análisis debe determinar si la diferencia de precio quedó en el exterior —lo que sugiere un mecanismo de ingreso o de mantenimiento de recursos fuera del país— y si la operación presenta características de lavado de activos. Según el resultado: actuación administrativa por lo aduanero y cambiario, reporte a la UIAF por la operación sospechosa y traslado a la Fiscalía si hay indicios de delito.',
          ],
        },
        {
          heading: 'Ejemplo: distinguir el canal correcto',
          paragraphs: [
            'Un ciudadano denuncia que un comerciante vende mercancía importada sin declarar en un local del centro de la ciudad. Esa información ingresa por el canal de denuncias de fiscalización de la DIAN en materia aduanera y activa el control administrativo (aprehensión de mercancía, sanción). Si adicionalmente se advierte que el comerciante realiza operaciones con recursos que no puede justificar y que el negocio es fachada de una estructura mayor, la DIAN debe evaluar el reporte a la UIAF y, si hay indicios de delito, el traslado a la Fiscalía.',
            'Lo que no se hace: remitir la denuncia a la UIAF como si fuera una denuncia penal, ni tramitar el reporte de operaciones sospechosas por el canal de PQRS de la entidad. Cada canal tiene su destinatario, su reserva y su finalidad.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Afirmar que la DIAN expide la normativa antilavado o que es la autoridad que sanciona el lavado de activos.',
          correction: 'La DIAN detecta, controla administrativamente, reporta a la UIAF y traslada a la Fiscalía. El delito de lavado de activos lo investiga la Fiscalía General de la Nación y lo juzgan los jueces penales. La UIAF, por su parte, centraliza y analiza información y no sanciona.',
        },
        {
          mistake: 'Confundir el SIRI con un sistema de la DIAN.',
          correction: 'El SIRI (Sistema de Información de Registro de Sanciones e Inhabilidades) es administrado por la Procuraduría General de la Nación y certifica sanciones disciplinarias, penales, contractuales y fiscales. Los sistemas propios de la DIAN para esta materia son su sistema de denuncias de fiscalización y los canales de PQRS de la entidad.',
        },
        {
          mistake: 'Creer que la sanción administrativa impuesta por la DIAN agota el reproche por la conducta.',
          correction: 'Las vías administrativa y penal son independientes y autónomas. La DIAN puede sancionar administrativamente por infracción a los regímenes aduanero, cambiario o tributario y, simultáneamente, trasladar los hechos a la Fiscalía cuando tengan características de delito.',
        },
        {
          mistake: 'Pensar que el sistema de denuncias de la DIAN no admite el anonimato.',
          correction: 'Las denuncias de fiscalización pueden presentarse de manera anónima. El denunciante puede identificarse o no; en todo caso la denuncia debe describir hechos concretos y, cuando sea posible, aportar soportes documentales.',
        },
      ],
      norms: [
        {
          norm: 'Decreto 1742 de 2020',
          status: 'vigente',
          note: 'Estructura de la DIAN: la Dirección de Gestión de Fiscalización dirige los planes de fiscalización y control, incluida la detección de operaciones de lavado de activos, y cuenta con coordinaciones de control y prevención de lavado de activos y de RILO y auditoría de denuncias de fiscalización.',
        },
        {
          norm: 'Decreto 4048 de 2008',
          status: 'modificada',
          note: 'Previó la función de suministrar a la UIAF la información que repose en los archivos de la DIAN y que la Unidad requiera para documentar los reportes de operaciones sospechosas. Parcialmente sustituido por el Decreto 1742 de 2020.',
        },
        {
          norm: 'Ley 526 de 1999',
          article: 'art. 3',
          status: 'vigente',
          note: 'Asigna a la UIAF la prevención, detección y análisis de las operaciones sospechosas de comercio exterior relacionadas con contrabando y fraude aduanero, como delitos autónomos o subyacentes al lavado de activos.',
        },
        {
          norm: 'Ley 2195 de 2022',
          article: 'art. 13',
          status: 'vigente',
          note: 'Registro Único de Beneficiarios Finales (RUB): reservado y no público; autoriza el acceso a la DIAN y a otras seis entidades para funciones de control, investigación fiscal y disciplinaria y lucha contra el LA/FT.',
        },
        {
          norm: 'Ley 1762 de 2015',
          status: 'vigente',
          note: 'Instrumentos para prevenir, controlar y sancionar el contrabando, el lavado de activos y la evasión fiscal; modifica el Código Penal y el régimen de reporte a la UIAF.',
        },
        {
          norm: 'Decreto 1068 de 2015',
          article: 'art. 2.14.2',
          status: 'vigente',
          note: 'Cláusula general de reporte a la UIAF para entidades públicas y privadas de sectores distintos al financiero, cuando la Unidad lo solicite.',
        },
      ],
      links: [
        { label: 'DIAN — Denuncias de fiscalización', url: 'https://www.dian.gov.co/atencionciudadano/PQSRD/Paginas/Denuncias.aspx' },
        { label: 'DIAN — Paso a paso para radicar una denuncia de fiscalización', url: 'https://www.dian.gov.co/atencionciudadano/PQSRD/Documents/paso-a-paso-radicacion-denuncias-de-fiscalizacion.pdf' },
        { label: 'UIAF — Unidad de Información y Análisis Financiero', url: 'https://www.uiaf.gov.co/' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
        { label: 'PANORAMA — CONPES de lucha contra el contrabando y la evasión fiscal', url: 'https://www.dian.gov.co/' },
      ],
      mindmap: {
        root: 'DIAN frente al LA/FT',
        branches: [
          {
            label: 'Competencia',
            children: ['Dirección de Gestión de Fiscalización', 'Coordinación de control y prevención de LA/FT', 'Coordinación de RILO y auditoría de denuncias', 'Subdirección de Apoyo contra el Delito Aduanero y Fiscal'],
          },
          {
            label: 'Señales de alerta',
            children: ['Sobrevaloración de importaciones', 'Subvaloración de exportaciones', 'Triangulación', 'Inconsistencia documental', 'Manipulación del valor en aduana', 'Perfil anómalo del operador'],
          },
          {
            label: 'Relación con la UIAF',
            children: ['Suministro de información', 'Reporte de operaciones sospechosas', 'Comercio exterior (art. 3 Ley 526/1999)', 'Coordinación interinstitucional'],
          },
          {
            label: 'Beneficiario final',
            children: ['Registro Único de Beneficiarios Finales', 'Ley 2195 de 2022, art. 13', 'Acceso restringido a siete entidades'],
          },
          {
            label: 'Denuncias',
            children: ['Denuncias de fiscalización', 'Puede ser anónima', 'Control administrativo', 'Traslado a la Fiscalía'],
          },
        ],
      },
      mindmapText:
        'La prevención del lavado de activos y la financiación del terrorismo es una función transversal del proceso de fiscalización de la DIAN, que opera a través de la Dirección de Gestión de Fiscalización, su coordinación de control y prevención de LA/FT, la coordinación de RILO y auditoría de denuncias y la Subdirección de Apoyo en la Lucha contra el Delito Aduanero y Fiscal. En comercio exterior se detectan mediante señales de alerta como la sobrevaloración de importaciones, la subvaloración de exportaciones, la triangulación y las inconsistencias documentales. La DIAN suministra información a la UIAF, le reporta operaciones sospechosas y tiene acceso al Registro Único de Beneficiarios Finales. Las denuncias de fiscalización se tramitan por canales institucionales, admiten el anonimato y, cuando revelan hechos con características de delito, se trasladan a la Fiscalía General de la Nación sin suspender la actuación administrativa.',
      source: [
        {
          doc: 'material',
          pages: 'págs. 1-200 (OCR parcial)',
          note: 'Menciona expresamente, entre las funciones del subproceso misional de Fiscalización y Liquidación en materia tributaria, el «control y prevención a operaciones sospechosas de lavado de activos y financiación del terrorismo» y las «denuncias de fiscalización». El resto del contenido proviene de fuentes oficiales verificadas (Decreto 1742 de 2020, Decreto 4048 de 2008, Ley 2195 de 2022, Ley 526 de 1999, portal DIAN).',
        },
        {
          doc: 'material',
          pages: 'pág. 408',
          note: 'La detección de operaciones de lavado de activos se menciona como función de la Dirección de Gestión de Fiscalización.',
        },
        {
          doc: 'taci',
          pages: 'págs. 1-50 y 151-200',
          note: 'El material del curso menciona el lavado de activos de forma tangencial: como conducta a neutralizar en el control aduanero y en la lista de delitos con caducidad especial de la acción sancionatoria aduanera. No desarrolla el tema.',
        },
      ],
    },
  ],
}
