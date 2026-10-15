import type { ModuleDef } from '../types'

// ============================================================
// Módulo 3 — Fundamentos tributarios, aduaneros y cambiarios
// Indicadores: i06 (misionalidad de la DIAN), i09 (obligaciones
// formales y sustanciales en materia tributaria).
// Fuente principal: TACI Curso Completo (Unidad 1, págs. 7-14;
// Unidad 4, págs. 132-143; Unidad 9, págs. 165-172) y Estatuto
// Tributario. Las normas se verificaron en fuentes oficiales
// (secretariasenado.gov.co, normograma.dian.gov.co, SUIN-Juriscol,
// banrep.gov.co) salvo cuando se indica status 'verificar'.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm03',
  order: 3,
  title: 'Fundamentos tributarios, aduaneros y cambiarios',
  description:
    'El marco constitucional del sistema tributario (principios, poder tributario y clases de tributos), los elementos estructurales del tributo y la lógica de los sistemas aduanero y cambiario como sistemas de control a cargo de la DIAN y de otras autoridades.',
  indicators: ['i06', 'i09'],
  lessons: [
    {
      id: 'm03-l01',
      moduleId: 'm03',
      title: 'El sistema tributario colombiano: principios constitucionales y estructura',
      indicators: ['i06', 'i09'],
      objectives: [
        'Explicar qué es el sistema tributario y en qué consiste el poder tributario del Estado.',
        'Enunciar y aplicar los principios del artículo 363 de la Constitución: equidad, eficiencia, progresividad y no retroactividad.',
        'Relacionar los principios de legalidad y reserva de ley (arts. 150 y 338 C.P.) con el contenido mínimo de la ley tributaria.',
        'Clasificar los tributos en impuestos, tasas y contribuciones, y distinguir los impuestos nacionales de los territoriales.',
      ],
      sections: [
        {
          heading: 'El sistema tributario y el poder tributario',
          paragraphs: [
            'El sistema tributario es el conjunto ordenado de tributos que el Estado establece para financiar el gasto público, junto con los principios constitucionales que lo limitan y con las reglas de competencia para crearlos. El material de formación lo presenta a partir del marco constitucional: la Constitución de 1991 fijó el marco dentro del cual deben reglamentarse las materias tributaria, aduanera y cambiaria, y atribuyó al Congreso, a las asambleas y a los concejos la facultad de imponer contribuciones.',
            'El poder tributario (o poder de imposición) es la potestad del Estado de crear tributos y exigir su pago como manifestación de su soberanía financiera. No es un poder ilimitado: se ejerce mediante la ley, está sometido a los principios constitucionales del artículo 363 y a los derechos fundamentales, y se distribuye entre la Nación, los departamentos y los distritos y municipios.',
            'El artículo 338 de la Constitución resume ese poder y sus titulares: en tiempo de paz, solamente el Congreso, las asambleas departamentales y los concejos distritales y municipales pueden imponer contribuciones fiscales o parafiscales.',
          ],
          bullets: [
            'Congreso de la República: impone, mediante ley, los tributos nacionales y las contribuciones parafiscales en los casos y condiciones especiales que la Constitución autoriza.',
            'Asambleas departamentales: imponen, mediante ordenanza, los tributos del departamento.',
            'Concejos distritales y municipales: imponen, mediante acuerdo, los tributos distritales y municipales, incluida la facultad de fijar la tarifa de las tasas y contribuciones para recuperar los costos de los servicios que presten.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Artículo 363 de la Constitución: «El sistema tributario se funda en los principios de equidad, eficiencia y progresividad. Las leyes tributarias no se aplicarán con retroactividad». Es la norma que más se pregunta del tema.',
          },
          norm: {
            norm: 'Constitución Política de Colombia',
            article: 'arts. 150-12, 150-19, 338 y 363',
            status: 'vigente',
            note: 'Verificado en la compilación de la Constitución de 1991 (Secretaría del Senado) el 2026-10-15.',
          },
        },
        {
          heading: 'Los principios generales del derecho tributario',
          paragraphs: [
            'Los principios del derecho tributario se seleccionan del texto constitucional porque son las bases respecto de las cuales deben sujetar sus actuaciones tanto la administración como los contribuyentes. Los más relevantes para el estudio son los siguientes.',
          ],
          bullets: [
            'Reserva de ley y representación popular (arts. 150 y 338 C.P.): ningún tributo puede entrar al régimen tributario sin la previa aprobación del órgano de representación popular. No es solo una garantía del derecho de propiedad: es un control político de la actividad financiera del Estado, que obliga a discutir en el Congreso la incidencia del tributo sobre la capacidad contributiva.',
            'Capacidad contributiva (arts. 95-9 y 363 C.P.): separar con justicia la porción necesaria para la supervivencia del asociado (mínimos exentos, artículo 206 del Estatuto Tributario, que responden al concepto de mínimo vital) de la parte sujeta a financiar las cargas públicas. La capacidad contributiva es una sola, nacional y subnacional: el deudor tributario «solo tiene un bolsillo».',
            'Progresividad y equidad (art. 363 C.P.): la progresividad se concreta en la equidad horizontal (cargas iguales a quienes tienen la misma capacidad de pago) y en la equidad vertical (mayor proporción a quienes disponen de mayor capacidad contributiva) (Corte Constitucional, C-397 de 2011).',
            'Irretroactividad (arts. 338 y 363 C.P.): las leyes tributarias no se aplican con retroactividad. Una ley que modifica los elementos de un tributo de periodo (por ejemplo, el impuesto sobre la renta) no puede aplicarse al mismo periodo gravable que ya venía corriendo.',
            'Favorabilidad y retrospectividad: como excepción, sí puede aplicarse una norma posterior a situaciones en trámite o no cerradas cuando favorece al interesado, especialmente en materia sancionatoria (si una sanción se reduce, el contribuyente se beneficia de la reducción).',
          ],
          table: {
            caption: 'Principios constitucionales del sistema tributario',
            headers: ['Principio', 'Contenido esencial', 'Referencia'],
            rows: [
              ['Legalidad / reserva de ley', 'Solo la ley, la ordenanza o el acuerdo pueden crear tributos y fijar sus elementos', 'arts. 150-12, 338 C.P.'],
              ['Equidad', 'Igualdad para los iguales y desigualdad para los desiguales; límite formal y material al poder tributario', 'art. 363 C.P.; C-183 de 1998'],
              ['Eficiencia', 'El sistema debe generar los recursos con el menor costo y distorsión posible', 'art. 363 C.P.'],
              ['Progresividad', 'A mayor capacidad contributiva, mayor carga tributaria (equidad vertical)', 'art. 363 C.P.; C-397 de 2011'],
              ['Irretroactividad', 'Las leyes tributarias rigen hacia el futuro', 'art. 363 inc. 2 C.P.'],
              ['Capacidad contributiva', 'Concreción del deber de contribuir según la aptitud económica del sujeto', 'arts. 95-9 y 363 C.P.'],
              ['Unidad de materia y favorabilidad', 'La ley tributaria responde a una misma materia; la norma sancionatoria favorable se aplica oficiosamente', 'art. 29 y 158 C.P.; art. 640 E.T.'],
            ],
          },
        },
        {
          heading: 'Legalidad en sentido material: qué debe fijar la ley',
          paragraphs: [
            'El artículo 338 de la Constitución precisa que la ley, las ordenanzas y los acuerdos deben fijar directamente los sujetos activos y pasivos, los hechos y las bases gravables y las tarifas de los impuestos. Esa es la llamada legalidad en sentido material: no basta con que exista una norma, sino que la propia ley (no el reglamento) determine los elementos estructurales del tributo.',
            'La Constitución admite una excepción para las tasas y contribuciones que cobren las entidades territoriales como recuperación de los costos de los servicios que presten o participación en los beneficios que proporcionen: la ley, la ordenanza o el acuerdo pueden permitir que las autoridades fijen la tarifa, siempre que el sistema y el método para definir los costos y beneficios y la forma de repartirlos queden fijados por la ley, la ordenanza o el acuerdo.',
            'La reserva de ley no se limita entonces a garantizar la legalidad de los actos de la administración: pretende de modo fundamental la garantía del derecho de propiedad y el control político de la actividad financiera del Estado.',
          ],
          callout: {
            type: 'error',
            text: 'Error frecuente: creer que el Gobierno puede crear tributos por decreto. El decreto reglamentario desarrolla la ley, pero no puede crear el tributo ni fijar por sí mismo sujetos, hechos, bases ni tarifas.',
          },
        },
        {
          heading: 'Clasificación de los tributos: impuestos, tasas y contribuciones',
          paragraphs: [
            'La doctrina y la jurisprudencia clasifican los tributos en impuestos, tasas y contribuciones. La distinción se apoya en el hecho generador y en la existencia de una contraprestación o beneficio individualizado.',
            'El impuesto es el tributo cuyo hecho generador no supone una contraprestación directa: se paga porque se realizó un hecho que revela capacidad contributiva (obtener renta, consumir un bien, poseer patrimonio). La tasa, en cambio, se paga porque el obligado usa efectivamente un servicio público o un bien del Estado, y su monto procura recuperar el costo del servicio. La contribución se paga por un beneficio individualizado derivado de una obra o gasto estatal, o por la pertenencia a un sector (contribuciones parafiscales).',
          ],
          table: {
            caption: 'Cuadro comparativo: impuesto, tasa y contribución',
            headers: ['Aspecto', 'Impuesto', 'Tasa', 'Contribución'],
            rows: [
              ['Hecho generador', 'Situación que revela capacidad contributiva (renta, consumo, patrimonio)', 'Uso efectivo o potencial de un servicio o bien del Estado', 'Beneficio individualizado por obra o gasto público; pertenencia al sector (parafiscal)'],
              ['Individualización', 'No hay contraprestación directa', 'Se individualiza en quien usa el servicio', 'Se individualiza en el grupo beneficiado'],
              ['Destinación', 'Recaudo de destinación general (presupuesto)', 'Recuperación del costo del servicio', 'Financiación del beneficio o del sector'],
              ['Fuente normativa', 'Ley, ordenanza o acuerdo que fija todos los elementos', 'La tarifa puede fijarla la autoridad con sistema y método legal', 'Ley (parafiscales), con destinación sectorial'],
              ['Ejemplos', 'Renta, IVA, impuesto nacional al consumo, predial unificado', 'Tarifa por servicios públicos, derechos de trámite, peajes', 'Contribución de valorización, contribución por plusvalía, aportes parafiscales (SENA, ICBF, cajas de compensación)'],
            ],
          },
          callout: {
            type: 'importante',
            text: 'Truco de examen: pregunte qué se paga y por qué. Si se paga por una renta, un consumo o un patrimonio sin contraprestación, es impuesto. Si se paga por usar un servicio, es tasa. Si se paga por un beneficio o por pertenecer a un sector, es contribución.',
          },
        },
        {
          heading: 'Impuestos nacionales y territoriales',
          paragraphs: [
            'Los tributos nacionales son administrados por la DIAN y se crean por ley. Entre ellos están el impuesto sobre la renta y complementarios (que, según el artículo 5 del Estatuto Tributario, se considera un solo tributo y comprende el de renta y ganancias ocasionales), el impuesto sobre las ventas (IVA), el impuesto nacional al consumo y el impuesto nacional al consumo de bolsas plásticas, el impuesto al patrimonio, el gravamen a los movimientos financieros, el impuesto de timbre y el impuesto nacional a la gasolina y al ACPM, además de los impuestos ambientales al carbono y al consumo de bolsas plásticas.',
            'Los tributos territoriales son administrados por departamentos, distritos y municipios. Entre los departamentos administran, entre otros, el impuesto al consumo de licores, cervezas y cigarrillos, el impuesto de registro, el impuesto sobre vehículos automotores, el degüello de ganado mayor y la sobretasa a la gasolina. Los municipios administran el impuesto predial unificado, el impuesto de industria y comercio (ICA) y sus complementarios de avisos y tableros, la sobretasa bomberil, y las contribuciones y tasas locales. El régimen simple de tributación (RST) integra el impuesto de renta, el ICA consolidado y el impuesto nacional al consumo, pero mantiene la naturaleza y los elementos de cada uno.',
            'El artículo 59 de la Ley 788 de 2002 autoriza a las entidades territoriales para aplicar los procedimientos del Estatuto Tributario Nacional a los impuestos que administran, con las simplificaciones que la propia norma permite; por eso, al estudiar un tributo territorial siempre hay que revisar además la normativa local.',
          ],
          table: {
            caption: 'Impuestos nacionales y territoriales: quién administra qué',
            headers: ['Orden', 'Administración', 'Ejemplos'],
            rows: [
              ['Nacional', 'DIAN', 'Renta y ganancias ocasionales, IVA, impuesto nacional al consumo, patrimonio, GMF, timbre, gasolina y ACPM, carbono'],
              ['Departamental', 'Gobernaciones (secretarías de hacienda)', 'Consumo de licores, cervezas y cigarrillos; registro; vehículos automotores; degüello de ganado mayor; sobretasa a la gasolina'],
              ['Distrital y municipal', 'Alcaldías y concejos', 'Predial unificado, ICA y complementarios, sobretasa bomberil, delineación urbana, contribución de valorización'],
            ],
          },
          norm: {
            norm: 'Estatuto Tributario',
            article: 'art. 5',
            status: 'vigente',
            note: 'El impuesto sobre la renta y complementarios se considera un solo tributo y comprende renta y ganancias ocasionales.',
          },
        },
        {
          heading: 'El deber de contribuir y el puente con los sistemas aduanero y cambiario',
          paragraphs: [
            'El artículo 95, numeral 9, de la Constitución establece como deber de la persona y del ciudadano contribuir al financiamiento de los gastos e inversiones del Estado dentro de conceptos de justicia y equidad. Ese deber es el fundamento del sistema tributario y explica por qué la DIAN tiene funciones de control y fiscalización: el incumplimiento de las obligaciones tributarias es un incumplimiento de un deber constitucional.',
            'Junto con el sistema tributario, la DIAN administra el sistema aduanero (tributos aduaneros y control del comercio exterior) y vigila el cumplimiento del régimen cambiario. Los tres sistemas comparten los mismos principios generales de actuación administrativa y, en el caso aduanero y cambiario, se suman principios propios como la eficiencia, la facilitación y la favorabilidad, que se estudian en la lección 3.',
          ],
          callout: {
            type: 'norma',
            text: 'Artículo 95-9 C.P.: «Contribuir al financiamiento de los gastos e inversiones del Estado dentro de conceptos de justicia y equidad».',
          },
        },
      ],
      summary: [
        'El sistema tributario es el conjunto de tributos y de principios que los ordena; su norma síntesis es el artículo 363 de la Constitución: equidad, eficiencia, progresividad y no retroactividad.',
        'El poder tributario se ejerce a través de la ley, la ordenanza o el acuerdo (art. 338 C.P.) y solo el Congreso, las asambleas y los concejos pueden imponer contribuciones fiscales o parafiscales.',
        'La ley debe fijar directamente los sujetos activos y pasivos, los hechos y las bases gravables y las tarifas; solo en tasas y contribuciones territoriales puede habilitarse a la autoridad para fijar la tarifa, con sistema y método legal.',
        'Los tributos se clasifican en impuestos (renta, consumo, patrimonio), tasas (uso de servicios) y contribuciones (beneficio individualizado o parafiscal).',
        'La DIAN administra los tributos nacionales; los departamentos, distritos y municipios administran los territoriales, y el artículo 59 de la Ley 788 de 2002 les permite aplicar los procedimientos del Estatuto Tributario Nacional.',
        'El deber de contribuir (art. 95-9 C.P.) fundamenta el sistema y la función de fiscalización de la DIAN.',
      ],
      memorize: [
        'Artículo 363 C.P.: equidad, eficiencia, progresividad + irretroactividad.',
        'Artículo 338 C.P.: ley, ordenanza y acuerdo fijan sujetos activos y pasivos, hechos, bases y tarifas; excepción: tarifa de tasas y contribuciones territoriales.',
        'Equidad horizontal = igual carga para capacidad igual; equidad vertical = mayor carga para mayor capacidad.',
        'Impuesto (sin contraprestación) · Tasa (uso de servicio) · Contribución (beneficio individualizado o parafiscal).',
        'Renta + ganancias ocasionales = un solo tributo (art. 5 E.T.).',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: aplicar equidad y progresividad',
          paragraphs: [
            'Dos asalariados devengan el mismo salario y tienen la misma composición familiar: la ley debe darles la misma carga tributaria (equidad horizontal). Un tercer asalariado devenga el triple: la ley debe exigirle una proporción mayor de su renta (equidad vertical). Esto sucede en la práctica con la tabla del artículo 241 del Estatuto Tributario, cuyas tarifas marginales crecen con la base gravable.',
            'Si una reforma tributaria modificara los elementos del impuesto de renta en junio, esa modificación no podría aplicarse al año gravable que ya venía corriendo (irretroactividad, art. 363 C.P. y art. 338 inciso final C.P.).',
          ],
        },
        {
          heading: 'Ejemplo 2: clasificar un cobro',
          paragraphs: [
            'Una empresa paga el impuesto de industria y comercio por desarrollar actividad comercial en un municipio: es un impuesto territorial (no hay contraprestación directa). Una constructora paga la contribución de valorización porque una obra vial valorizó su predio: es una contribución (beneficio individualizado). Un ciudadano paga los derechos de trámite para obtener su cédula: es una tasa (uso de un servicio del Estado). Un importador paga arancel e IVA en la importación: son tributos aduaneros administrados por la DIAN.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que los principios del artículo 363 se evalúan impuesto por impuesto.',
          correction: 'La jurisprudencia constitucional ha precisado que la equidad, la eficiencia y la progresividad se predican del sistema tributario en su conjunto, no de cada tributo aislado (Corte Constitucional, C-264 de 2013, entre otras).',
        },
        {
          mistake: 'Decir que la retroactividad está absolutamente prohibida en materia tributaria.',
          correction: 'La irretroactividad aplica a las leyes tributarias en general, pero se admite la aplicación retrospectiva de normas favorables a situaciones no cerradas, especialmente en materia sancionatoria (principio de favorabilidad), y los beneficios tributarios pueden regir en el mismo periodo en que entra a regir la ley cuando así lo disponga el legislador.',
        },
        {
          mistake: 'Confundir contribución parafiscal con impuesto nacional.',
          correction: 'Los aportes parafiscales (SENA, ICBF, cajas de compensación familiar) son contribuciones parafiscales con destinación sectorial; no son impuestos nacionales y no se consignan en el presupuesto general de la Nación, aunque la facultad de imponerlos corresponde al Congreso en los casos y condiciones que fija la Constitución.',
        },
        {
          mistake: 'Creer que la DIAN administra el impuesto de industria y comercio o el predial.',
          correction: 'La DIAN administra los tributos nacionales. El ICA, el predial y los demás tributos territoriales son administrados por los municipios y distritos, aunque pueden aplicar los procedimientos del Estatuto Tributario Nacional por remisión del artículo 59 de la Ley 788 de 2002.',
        },
      ],
      norms: [
        {
          norm: 'Constitución Política de Colombia',
          article: 'arts. 95-9, 150-12, 338 y 363',
          status: 'vigente',
          note: 'Texto verificado en compilaciones oficiales el 2026-10-15. El artículo 363 es la norma base del sistema tributario.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'art. 5',
          status: 'vigente',
          note: 'Impuesto sobre la renta y complementarios como un solo tributo.',
        },
        {
          norm: 'Ley 788 de 2002',
          article: 'art. 59',
          status: 'vigente',
          note: 'Remisión de las entidades territoriales a los procedimientos del Estatuto Tributario Nacional.',
        },
        {
          norm: 'Ley 2277 de 2022',
          status: 'vigente',
          note: 'Reforma tributaria que modificó el artículo 240 E.T. (tarifa general del 35 por ciento), el artículo 336 E.T. (límite del 40 por ciento y 1.340 UVT) y creó el impuesto al patrimonio con vocación permanente (art. 296-3 E.T.). El material de formación es de 2022 y ya incorpora algunos de estos cambios.',
        },
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 240, 241 y 296-3',
          status: 'verificar',
          note: 'Tarifas sujetas a cambio por cada reforma tributaria. Para el año 2026 existe, además, el Decreto Legislativo 1474 de 2025 (medida de emergencia) que adiciona puntos a la tarifa del impuesto de renta, con efectos jurídicos discutidos en los tribunales; verifique siempre la norma vigente del año gravable que estudie.',
        },
      ],
      links: [
        { label: 'Secretaría del Senado — Constitución Política de Colombia', url: 'http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html' },
        { label: 'Corte Constitucional — Relatoría', url: 'https://www.corteconstitucional.gov.co/relatoria/' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
      ],
      mindmap: {
        root: 'Sistema tributario',
        branches: [
          {
            label: 'Principios (art. 363 C.P.)',
            children: ['Equidad', 'Eficiencia', 'Progresividad', 'Irretroactividad'],
          },
          {
            label: 'Poder tributario',
            children: ['Congreso (ley)', 'Asambleas (ordenanza)', 'Concejos (acuerdo)', 'Art. 338 C.P.'],
          },
          {
            label: 'Elementos que fija la ley',
            children: ['Sujetos activos y pasivos', 'Hechos gravables', 'Bases gravables', 'Tarifas'],
          },
          {
            label: 'Clases de tributo',
            children: ['Impuesto', 'Tasa', 'Contribución', 'Parafiscal'],
          },
          {
            label: 'Niveles',
            children: ['Nacionales (DIAN)', 'Departamentales', 'Municipales y distritales'],
          },
        ],
      },
      mindmapText:
        'El sistema tributario colombiano se construye sobre el artículo 363 de la Constitución, que impone los principios de equidad, eficiencia y progresividad y prohíbe la retroactividad de las leyes tributarias. El poder tributario se ejerce por el Congreso mediante leyes, por las asambleas mediante ordenanzas y por los concejos mediante acuerdos (art. 338), y esos actos deben fijar directamente sujetos, hechos, bases y tarifas. Los tributos se clasifican en impuestos, tasas y contribuciones, y por su ámbito se dividen entre nacionales, administrados por la DIAN, y territoriales, administrados por departamentos, distritos y municipios.',
      source: [
        { doc: 'taci', pages: 'págs. 7-14 (Unidad 1: principios constitucionales tributarios, aduaneros y cambiarios)' },
        { doc: 'taci', pages: 'págs. 43-49 (impuesto sobre las ventas y clasificación de tributos)', note: 'Complementado con el Estatuto Tributario y jurisprudencia constitucional verificada.' },
      ],
      activityId: 'm03-a01',
    },
    {
      id: 'm03-l02',
      moduleId: 'm03',
      title: 'Elementos del tributo: sujetos, hecho generador, base, tarifa y causación',
      indicators: ['i09', 'i06'],
      objectives: [
        'Identificar y definir los elementos estructurales del tributo: sujeto activo, sujeto pasivo, hecho generador, base gravable, tarifa y período gravable.',
        'Distinguir el hecho generador de la causación y reconocer los aspectos material, personal, temporal y espacial del hecho generador.',
        'Elaborar y leer un cuadro comparativo de elementos aplicado al impuesto sobre la renta, al IVA y a los tributos aduaneros.',
        'Explicar la distinción entre sujeto pasivo de iure y de facto en el impuesto sobre las ventas.',
      ],
      sections: [
        {
          heading: 'La estructura del tributo: seis elementos más la causación',
          paragraphs: [
            'Todo tributo se estructura con los mismos elementos, cualquiera sea su clase o su nivel: sujeto activo, sujeto pasivo, hecho generador, base gravable, tarifa y período gravable. La causación es el momento en que la obligación tributaria sustancial nace a la vida jurídica, y no siempre coincide con el período gravable.',
            'El material de formación presenta esos elementos con apoyo en la jurisprudencia: el hecho generador es la situación de hecho, indicadora de una capacidad contributiva, que la ley establece de manera abstracta como susceptible de generar la obligación tributaria (Corte Constitucional, C-987 de 1999); la base gravable es la magnitud o medición del hecho gravado a la cual se le aplica la tarifa para liquidar el monto de la obligación (Corte Constitucional, en cita del material); y la tarifa es la magnitud o monto que se aplica a la base gravable y en virtud del cual se determina el valor final en dinero que debe pagar el contribuyente (Corte Constitucional, C-537 de 1995).',
          ],
          table: {
            caption: 'Los elementos del tributo y su lectura en renta, IVA y aduanas',
            headers: ['Elemento', 'Contenido', 'Impuesto sobre la renta', 'IVA', 'Tributos aduaneros'],
            rows: [
              ['Sujeto activo', 'Beneficiario del tributo; entidad que puede disponer de los recursos', 'La Nación (Estado), representada por la DIAN', 'La Nación, en cabeza de la DIAN', 'La DIAN (art. 1.1.2 del Decreto 1165 de 2019)'],
              ['Sujeto pasivo', 'Quien realiza el hecho generador (contribuyente o responsable directo)', 'Quien obtiene la renta o ganancia ocasional', 'Responsable del impuesto (recaudador) y sujeto pasivo económico (consumidor)', 'El importador o el declarante, en calidad de deudor'],
              ['Hecho generador', 'Presupuesto de hecho legal que revela capacidad contributiva', 'Obtención, en el año o período gravable, de ingresos susceptibles de producir incremento neto del patrimonio', 'Venta de bienes y prestación de servicios gravados, importación, juegos de suerte y azar (art. 420 E.T.)', 'Introducción de mercancías al territorio aduanero nacional'],
              ['Base gravable', 'Magnitud del hecho gravado a la que se aplica la tarifa', 'Renta líquida gravable', 'Valor de la operación o del bien, según las reglas del E.T.', 'Valor en aduana de la mercancía importada'],
              ['Tarifa', 'Porcentaje o monto que se aplica a la base', '35 por ciento general (art. 240 E.T.); tabla del art. 241 para personas naturales', '19 por ciento general; 5 por ciento y 0 por ciento en los casos señalados por la ley', 'Arancel según el arancel de aduanas y el acuerdo comercial aplicable'],
              ['Período gravable', 'Tiempo durante el cual se realiza el hecho generador', 'Anual: 1 de enero a 31 de diciembre', 'Instantáneo (causación por operación), con declaración bimestral o cuatrimestral', 'Por operación de importación (no hay periodo)'],
              ['Causación', 'Momento en que nace la obligación tributaria', 'Al finalizar el período gravable, por la realización de los ingresos (arts. 27 y 28 E.T.)', 'En la venta, al emitir la factura; en servicios, al emitir la factura, terminar el servicio o pagar o abonar en cuenta, la que sea anterior (art. 429 E.T.)', 'Con la introducción de la mercancía al territorio aduanero nacional'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Estructura del tributo: S-H-B-T-P (Sujetos, Hecho generador, Base, Tarifa, Período) + causación. Si falta uno de esos elementos en la ley, el tributo es inaplicable por violación de la legalidad.',
          },
        },
        {
          heading: 'El hecho generador y sus cuatro aspectos',
          paragraphs: [
            'El hecho generador es la descripción legal y abstracta de un hecho que, si se realiza concretamente, hace nacer la obligación fiscal. Para analizarlo se distinguen cuatro aspectos: el material (qué hecho se grava), el personal (quién lo realiza), el temporal (cuándo se entiende realizado) y el espacial (dónde se entiende realizado).',
            'Ejemplo con el IVA: el aspecto material es la venta de bienes corporales muebles e inmuebles, la venta o cesión de derechos sobre activos intangibles asociados con la propiedad industrial, la prestación de servicios en el territorio nacional o desde el exterior, la importación de bienes corporales y la circulación, venta u operación de juegos de suerte y azar, con excepción de las loterías y de los juegos operados exclusivamente por internet (artículo 420 del Estatuto Tributario). El aspecto personal es el responsable (vendedor o prestador) y el sujeto pasivo económico (consumidor); el temporal se resuelve con las reglas de causación del artículo 429; el espacial se resuelve con la territorialidad (bienes en el país, servicios en el territorio nacional o desde el exterior).',
            'En el impuesto sobre la renta, el hecho generador es la obtención, en el año o período gravable, de ingresos susceptibles de producir incremento neto del patrimonio al momento de su percepción. No son susceptibles de producir incremento neto del patrimonio los ingresos por reembolso de capital ni la indemnización por daño emergente.',
          ],
          bullets: [
            'Aspecto material: descripción objetiva del hecho gravado.',
            'Aspecto personal: el sujeto que lo realiza (contribuyente o responsable).',
            'Aspecto temporal: momento de realización o causación (arts. 27, 28 y 429 E.T., entre otros).',
            'Aspecto espacial: vínculo territorial (fuente nacional o extranjera, arts. 24 y 25 E.T.; bienes y servicios en el territorio nacional para el IVA).',
          ],
          callout: {
            type: 'importante',
            text: 'El hecho generador es la descripción legal; la causación es la realización concreta del hecho que hace nacer la obligación. La ley describe; el sujeto realiza; el hecho causa.',
          },
        },
        {
          heading: 'Sujetos: activo y pasivo; de iure y de facto',
          paragraphs: [
            'El sujeto activo es el beneficiario del tributo, la entidad que finalmente puede disponer de esos recursos. En los tributos nacionales es el Estado, representado por el Ministerio de Hacienda y Crédito Público y, concretamente, por la Dirección de Impuestos y Aduanas Nacionales. En los tributos aduaneros el sujeto activo es la DIAN.',
            'El sujeto pasivo es quien debe cumplir la obligación tributaria. La Corte Constitucional ha distinguido los sujetos pasivos de iure de los sujetos pasivos de facto: los primeros son los que formalmente deben pagar el impuesto; los segundos son quienes en últimas soportan las consecuencias económicas del gravamen. En el IVA esa distinción se expresa como sujeto pasivo de derecho (el responsable, que recauda y declara) y sujeto pasivo económico (el consumidor final que soporta el impuesto dentro del precio).',
            'El artículo 2 del Estatuto Tributario señala que son contribuyentes o responsables directos del pago del tributo los sujetos respecto de quienes se realiza el hecho generador de la obligación sustancial.',
          ],
        },
        {
          heading: 'Base gravable y tarifa',
          paragraphs: [
            'La base gravable es la magnitud o medición del hecho gravado a la cual se le aplica la tarifa. Su determinación puede ser compleja: en el impuesto sobre la renta de las personas jurídicas la base es la renta líquida gravable, que se obtiene después de una depuración que parte de los ingresos ordinarios y extraordinarios, resta las devoluciones, los ingresos no constitutivos de renta, los costos y las deducciones, y aplica las compensaciones de pérdidas fiscales. En el impuesto sobre la renta de las personas naturales residentes se usa un sistema cedular.',
            'En algunos tributos la ley establece reglas especiales de base gravable que conviene memorizar: en el impuesto nacional al consumo de vehículos la base es el valor total del bien, incluyendo los accesorios de fábrica y sin incluir el IVA (artículo 512-3 del Estatuto Tributario); en la importación, la base gravable del IVA es la misma que se usa para liquidar los derechos de aduana, adicionada con el valor de ese gravamen (artículo 459 del Estatuto Tributario).',
            'La tarifa es el porcentaje o valor que se aplica a la base. En el impuesto sobre la renta la tarifa general es del 35 por ciento (artículo 240 E.T.) y las personas naturales residentes se rigen por la tabla del artículo 241; en el IVA la regla general es del 19 por ciento, con tarifas del 5 por ciento y del 0 por ciento (exentos) en los casos señalados en la ley. La tarifa puede ser progresiva (aumenta por rangos de base), como en renta de personas naturales, o proporcional (una sola tarifa para toda la base), como el IVA.',
          ],
          table: {
            caption: 'Cómo se determina la base gravable del impuesto sobre la renta de personas jurídicas (renta global)',
            headers: ['Concepto', 'Operación'],
            rows: [
              ['Ingresos ordinarios y extraordinarios realizados', '(+)'],
              ['Devoluciones, rebajas y descuentos', '(-)'],
              ['Ingresos no constitutivos de renta ni ganancia ocasional', '(-)'],
              ['Ingresos netos', '(=)'],
              ['Costos realizados imputables a los ingresos', '(-)'],
              ['Renta bruta', '(=)'],
              ['Deducciones realizadas', '(-)'],
              ['Renta líquida ordinaria', '(=)'],
              ['Compensación de pérdidas fiscales y excesos de renta presuntiva', '(-)'],
              ['Renta líquida, menos rentas exentas y más rentas gravables', '(=) Renta líquida gravable'],
              ['Renta líquida gravable x tarifa, menos descuentos tributarios', '(=) Impuesto neto de renta'],
            ],
          },
        },
        {
          heading: 'Período gravable y causación',
          paragraphs: [
            'El período gravable es el lapso durante el cual se realiza el hecho generador y sirve de referencia para liquidar el tributo. El impuesto sobre la renta es de período anual (del 1 de enero al 31 de diciembre), aunque puede ser inferior por terminación de la sucesión o por liquidación de la persona jurídica. El IVA y el impuesto nacional al consumo son de ejecución instantánea (se causan operación por operación) pero sus declaraciones se presentan por períodos bimestrales o cuatrimestrales, según el caso.',
            'La renta presuntiva merece una nota: es el rendimiento mínimo fiscal que debe tener el contribuyente en un período gravable, calculado sobre el patrimonio líquido del período anterior; sin embargo, desde el año 2022 su tarifa es del 0 por ciento, por lo que hoy no tiene efectos (artículo 288 del Estatuto Tributario).',
          ],
          table: {
            caption: 'Período gravable y causación por tributo',
            headers: ['Tributo', 'Período gravable', 'Causación', 'Declaración'],
            rows: [
              ['Renta y complementarios', 'Anual (1 de enero a 31 de diciembre)', 'Por la realización de los ingresos en el periodo (arts. 27 y 28 E.T.)', 'Anual (formulario 110 o 210)'],
              ['Ganancias ocasionales', 'Se declara con la renta del periodo en que ocurre', 'Al realizarse el hecho (venta de activo fijo poseído dos años o más, herencia, lotería)', 'En la declaración de renta'],
              ['IVA', 'No hay periodo; la obligación es de periodo para declarar', 'En la venta, al emitir factura o entregar el bien; en servicios, la que sea anterior entre factura, terminación o pago (art. 429 E.T.)', 'Bimestral o cuatrimestral'],
              ['Impuesto nacional al consumo', 'Instantáneo', 'Al vender o prestar el servicio al consumidor final', 'Bimestral'],
              ['Tributos aduaneros', 'No hay periodo', 'Con la introducción de la mercancía al territorio aduanero nacional', 'En la declaración de importación'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Regla de causación del IVA en servicios: se causa en la fecha de emisión de la factura, o en la fecha de terminación del servicio, o en la fecha de pago o abono en cuenta, la que fuere anterior (art. 429 E.T.).',
          },
        },
        {
          heading: 'Los elementos del tributo en el régimen aduanero',
          paragraphs: [
            'Los tributos aduaneros también tienen elementos estructurales, y el material de formación los resume así: el hecho generador es la introducción de mercancías al territorio aduanero nacional; el sujeto activo es la DIAN; el sujeto pasivo, en calidad de deudor, es el importador o el declarante cuando haya lugar a ello, y también el adquirente de mercancías que salen del departamento de San Andrés, Providencia y Santa Catalina o de las zonas de régimen aduanero especial con destino al resto del territorio aduanero nacional.',
            'La base gravable se determina así: para los derechos de aduana se toma el valor en aduana de la mercancía importada, determinado conforme a las disposiciones de valoración aduanera; para los demás derechos que conforman los tributos aduaneros, el valor en aduana cuando corresponda y, en casos especiales, lo que dispongan las normas; y para el IVA en la importación, conforme al artículo 459 del Estatuto Tributario y su reglamentación.',
          ],
          norm: {
            norm: 'Decreto 1165 de 2019',
            article: 'arts. 1.1.1 y siguientes (elementos de los tributos aduaneros)',
            status: 'modificada',
            note: 'Estatuto Aduanero vigente, modificado por el Decreto 659 de 2024 (declaración anticipada obligatoria, control previo) y por decretos posteriores. Verificado en normograma.dian.gov.co.',
          },
        },
      ],
      summary: [
        'Los elementos del tributo son sujeto activo, sujeto pasivo, hecho generador, base gravable, tarifa y período gravable; la causación es el momento en que nace la obligación.',
        'El sujeto activo es el Estado (para los nacionales, la DIAN); el sujeto pasivo es quien realiza el hecho generador (contribuyente o responsable directo), y en IVA se distingue el sujeto pasivo de derecho (responsable) del económico (consumidor).',
        'El hecho generador tiene aspectos material, personal, temporal y espacial; en renta es la obtención de ingresos susceptibles de incrementar el patrimonio; en IVA, los supuestos del artículo 420 E.T.',
        'La base gravable es la magnitud del hecho gravado (en renta de personas jurídicas, la renta líquida gravable) y la tarifa el porcentaje que se le aplica (35 por ciento general en renta; 19 por ciento general en IVA).',
        'El período gravable es anual en renta y no existe como tal en IVA y aduanas, donde el impuesto se causa por operación; desde 2022 la renta presuntiva tiene tarifa del 0 por ciento.',
        'En aduanas: hecho generador = introducción de mercancías al territorio aduanero nacional; sujeto activo = DIAN; sujeto pasivo = importador o declarante; base = valor en aduana.',
      ],
      memorize: [
        'Secuencia: S-H-B-T-P (sujetos, hecho generador, base, tarifa, período) + causación.',
        'Renta: hecho generador = obtención de ingresos con incremento neto del patrimonio; base = renta líquida gravable; tarifa general = 35 por ciento (art. 240 E.T.).',
        'IVA: hecho generador = art. 420 E.T.; causación = art. 429 E.T.; tarifas = 0, 5 y 19 por ciento.',
        'IVA importación: base gravable = base de los derechos de aduana + el valor de esos derechos (art. 459 E.T.).',
        'Renta presuntiva: tarifa del 0 por ciento desde 2022 (art. 288 E.T.).',
      ],
      examples: [
        {
          heading: 'Ejemplo práctico: liquidar con los elementos del tributo',
          paragraphs: [
            'Una sociedad colombiana obtuvo en el año ingresos gravables por 1.000 millones, con costos y deducciones procedentes de 700 millones y ninguna renta exenta. Su renta líquida gravable es de 300 millones (base gravable). Con la tarifa general del 35 por ciento, el impuesto de renta es de 105 millones, menos los descuentos tributarios a que tenga derecho (por ejemplo, el IVA pagado en la adquisición de activos fijos reales productivos). El sujeto activo es la Nación-DIAN; el sujeto pasivo, la sociedad; el período gravable, el año calendario; la causación, el 31 de diciembre.',
          ],
        },
        {
          heading: 'Ejemplo práctico: causación del IVA en un servicio',
          paragraphs: [
            'Una empresa de consultoría firma un contrato el 1 de marzo, presta los servicios el 20 de abril, expide la factura el 25 de abril y el cliente paga el 10 de mayo. El IVA se causa el 20 de abril, porque es la fecha anterior entre la emisión de la factura (25 de abril), la terminación del servicio (20 de abril) y el pago (10 de mayo). Si la prestación se hubiera facturado el 15 de abril (antes de terminar el servicio), el impuesto se habría causado el 15 de abril.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Confundir el hecho generador con la causación.',
          correction: 'El hecho generador es la descripción legal y abstracta del presupuesto que puede generar el tributo; la causación es el momento en que ese presupuesto se realiza efectivamente y nace la obligación. En renta, el hecho generador es obtener ingresos; la causación ocurre al finalizar el período gravable, con las reglas de realización.',
        },
        {
          mistake: 'Afirmar que el IVA es un impuesto directo porque la empresa lo declara.',
          correction: 'El IVA es un impuesto indirecto: el responsable lo recauda y lo declara (sujeto pasivo de derecho), pero quien soporta económicamente el gravamen es el consumidor final (sujeto pasivo económico). El impuesto sobre la renta sí es directo, porque quien declara es quien responde por su pago.',
        },
        {
          mistake: 'Creer que el período gravable del IVA es bimestral porque la declaración es bimestral.',
          correction: 'El IVA es de ejecución instantánea: se causa en cada operación (art. 429 E.T.). El bimestre o el cuatrimestre es solo el período para declarar y pagar, no el período de causación.',
        },
        {
          mistake: 'Pensar que en la importación la base del IVA es solo el valor de la mercancía.',
          correction: 'En la importación la base gravable del IVA corresponde a la base de los derechos de aduana adicionada con el valor de esos derechos (art. 459 E.T. y reglamentación aduanera).',
        },
      ],
      norms: [
        {
          norm: 'Estatuto Tributario',
          article: 'arts. 2, 5, 24 a 28, 240, 241, 288, 420, 429, 459 y 512-3',
          status: 'verificar',
          note: 'Artículos estructurales del tributo. Verifique la tarifa del artículo 240 y la tabla del artículo 241 para el año gravable que estudie, por las reformas posteriores a 2022.',
        },
        {
          norm: 'Decreto 1165 de 2019',
          article: 'sistema de elementos de los tributos aduaneros',
          status: 'modificada',
          note: 'Estatuto Aduanero; modificado por el Decreto 659 de 2024. La base del IVA en importación se rige además por el artículo 459 E.T.',
        },
        {
          norm: 'Ley 2277 de 2022',
          status: 'vigente',
          note: 'Modificó la tarifa general del impuesto de renta y el límite de rentas exentas y deducciones de la cédula general (40 por ciento y 1.340 UVT).',
        },
      ],
      links: [
        { label: 'Estatuto Tributario — compilación Secretaría del Senado', url: 'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'DIAN — Impuesto sobre la renta', url: 'https://www.dian.gov.co/impuestos/Paginas/default.aspx' },
        { label: 'Normograma DIAN — Decreto 1165 de 2019', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1165_2019.htm' },
      ],
      mindmap: {
        root: 'Elementos del tributo',
        branches: [
          { label: 'Sujetos', children: ['Activo: Estado-DIAN', 'Pasivo: contribuyente o responsable', 'De iure / de facto'] },
          { label: 'Hecho generador', children: ['Aspecto material', 'Aspecto personal', 'Aspecto temporal', 'Aspecto espacial'] },
          { label: 'Cuantificación', children: ['Base gravable', 'Tarifa', 'Progresiva o proporcional'] },
          { label: 'Tiempo', children: ['Período gravable', 'Causación', 'Instantáneo vs. periódico'] },
          { label: 'Ejemplos', children: ['Renta: base = renta líquida gravable', 'IVA: base = valor de la operación', 'Aduanas: base = valor en aduana'] },
        ],
      },
      mindmapText:
        'Todo tributo se estructura con seis elementos: sujeto activo (el Estado, para los nacionales la DIAN), sujeto pasivo (quien realiza el hecho generador), hecho generador (con sus aspectos material, personal, temporal y espacial), base gravable (magnitud a la que se aplica la tarifa), tarifa (porcentaje o monto) y período gravable. La causación es el momento en que nace la obligación, y en tributos instantáneos como el IVA o los tributos aduaneros no coincide con un período, sino con cada operación.',
      source: [
        { doc: 'taci', pages: 'págs. 16-20 (elementos del tributo en el impuesto sobre la renta)' },
        { doc: 'taci', pages: 'págs. 43-51 (IVA: sujetos, hecho generador, causación, tarifas y determinación)' },
        { doc: 'taci', pages: 'págs. 170-171 (elementos de los tributos aduaneros)' },
      ],
      activityId: 'm03-a02',
    },
    {
      id: 'm03-l03',
      moduleId: 'm03',
      title: 'Los sistemas aduanero y cambiario como sistemas de control',
      indicators: ['i06'],
      objectives: [
        'Explicar qué es el régimen aduanero, su ámbito de aplicación y sus principios generales.',
        'Identificar los sujetos de la obligación aduanera y las obligaciones del importador y del exportador.',
        'Explicar qué es el régimen cambiario, quién lo diseña y qué operaciones son de obligatoria canalización.',
        'Reconocer las competencias de control y vigilancia de la DIAN en materia cambiaria y su relación con las demás autoridades.',
      ],
      sections: [
        {
          heading: 'El régimen aduanero: concepto, ámbito y principios',
          paragraphs: [
            'El régimen aduanero determina los requisitos legales y procedimentales que deben cumplir el exportador o el importador en la comercialización internacional de bienes, y fija las responsabilidades y obligaciones de los agentes de aduana en el tratamiento de las cargas. La existencia de los regímenes aduaneros permite organizar la mercancía sujeta a control aduanero, dar fluidez al flujo de mercadería internacional y ejercer un control general sobre la entrada y salida de bienes del país.',
            'Mediante el Decreto 1165 del 2 de julio de 2019 el Gobierno nacional estableció el régimen de aduanas, con el fin de armonizar las disposiciones que estaban dispersas en los Decretos 2685 de 1999, 390 de 2016, 2147 de 2016, 349 de 2018 y 659 de 2018. Ese estatuto fue modificado en 2024 por el Decreto 659 de 2024, que introdujo, entre otros cambios, la declaración anticipada de importación obligatoria y reglas más estrictas de control previo.',
            'El ámbito de aplicación del régimen aduanero es el territorio nacional (aéreo, marítimo y terrestre), que se subdivide en zonas francas y depósitos habilitados; estos dos últimos no hacen parte del territorio aduanero nacional. Una precisión importante del material: el régimen de aduanas solo tiene que ver con el movimiento de mercancía y de bienes tangibles, y no se refiere a la importación o exportación de intangibles.',
          ],
          bullets: [
            'Principio de eficiencia: en las actuaciones administrativas relativas a la función aduanera siempre prevalece el servicio ágil y oportuno para facilitar y dinamizar el comercio exterior, sin perjuicio del control de la autoridad aduanera.',
            'Principio de favorabilidad: si antes de la firmeza del acto que decide de fondo la imposición de una sanción o el decomiso entra a regir una norma que favorezca al interesado, la autoridad aduanera la aplicará oficiosamente.',
            'Principio de justicia: todas las actuaciones administrativas relativas a la función aduanera deben estar presididas por un relevante espíritu de justicia; el Estado no aspira a exigir al obligado más de lo que la ley pretende.',
            'Prohibición de doble sanción por el mismo hecho: a nadie se le puede sancionar dos veces por el mismo hecho ni aprehender más de una vez la mercancía por la misma causal (art. 29 C.P.).',
            'Seguridad y facilitación en la cadena logística: las actuaciones de control se cumplen en el marco de un sistema de gestión del riesgo, para promover la seguridad de la cadena logística y facilitar el comercio internacional, neutralizando el contrabando y el lavado de activos.',
            'Principios de la Ley Marco de Aduanas (Ley 1609 de 2013, art. 4): debido proceso, igualdad, buena fe, economía, celeridad, eficacia, imparcialidad, prevalencia de lo sustancial, responsabilidad, publicidad y contradicción, y progresividad.',
          ],
          table: {
            caption: 'Objetivos del régimen de aduanas (Decreto 1165 de 2019)',
            headers: ['Objetivo', 'Contenido'],
            rows: [
              ['Convenios internacionales', 'Facilitar el desarrollo y la aplicación de los tratados y convenios vigentes para Colombia y la integración económica'],
              ['Política comercial', 'Adecuar el régimen a la política comercial, al fomento y protección de la producción nacional y a las recomendaciones de organismos internacionales'],
              ['Facilitación', 'Facilitar y agilizar las operaciones de comercio exterior y la competitividad de los productos colombianos'],
              ['Tecnología', 'Fomentar el uso de tecnologías y medios de comunicación modernos y ambientalmente sostenibles'],
              ['Simplificación', 'Propender por procedimientos simplificados de comercio exterior'],
            ],
          },
          norm: {
            norm: 'Ley 1609 de 2013',
            article: 'art. 4',
            status: 'vigente',
            note: 'Ley Marco de Aduanas; vigente. Verificada en normograma.dian.gov.co y secretariasenado.gov.co el 2026-10-15.',
          },
        },
        {
          heading: 'La obligación aduanera y sus sujetos',
          paragraphs: [
            'La obligación aduanera es el vínculo que existe entre la administración aduanera y cualquier persona que esté directa o indirectamente relacionada con una operación aduanera. Comprende (i) los trámites aduaneros; (ii) el pago de tributos aduaneros, intereses, tasas, recargos y sanciones; y (iii) las obligaciones que se derivan de las actuaciones que inicie la autoridad aduanera.',
            'Los obligados aduaneros pueden ser directos o indirectos. Son obligados directos los usuarios aduaneros (importadores, exportadores, declarantes, agencias de aduanas y demás usuarios); son obligados indirectos todas las personas que, en desarrollo de su actividad, hayan intervenido de manera indirecta en el cumplimiento de cualquier trámite u operación aduanera y, en general, cualquier persona que sea requerida por la autoridad aduanera.',
            'El importador es responsable de acreditar la legal introducción de las mercancías al territorio aduanero nacional, con el lleno de los requisitos y el pago de los tributos aduaneros. Cuando actúa de manera directa, responde por la exactitud y veracidad de los datos de la declaración aduanera y por la correcta determinación de la base gravable y de la liquidación de los tributos, sanciones y rescate. Cuando actúa a través de una agencia de aduanas, responde por la autenticidad de los documentos soporte que él obtiene y suministra, y por entregar toda la información sobre los elementos de hecho y las circunstancias comerciales de la negociación para la valoración aduanera.',
          ],
          bullets: [
            'Obligaciones de importación: diligenciar los documentos soporte vigentes, elaborar y suscribir la declaración andina de valor, conservar la documentación soporte, informar sobre la inspección previa de las mercancías y presentar las declaraciones aduaneras por los medios señalados por la DIAN.',
            'Obligaciones de exportación: tener vigente la declaración juramentada de origen, cumplir las normas de origen de los acuerdos comerciales, conservar documentos y pruebas, y presentar la solicitud de autorización de embarque y las demás actuaciones del trámite.',
            'Elementos de los tributos aduaneros: hecho generador (introducción de mercancías al territorio aduanero nacional), sujeto activo (la DIAN), sujeto pasivo (el importador o el declarante, en calidad de deudor, y el adquirente de mercancías de San Andrés, Providencia y Santa Catalina o de zonas de régimen aduanero especial) y base gravable (el valor en aduana).',
            'Pago: presentada y aceptada la declaración, el pago de los tributos aduaneros, rescate, sanciones y demás obligaciones se efectúa a través de los bancos y entidades financieras autorizadas por la DIAN, y el valor se aproxima al múltiplo de mil más cercano.',
          ],
          callout: {
            type: 'importante',
            text: 'El régimen aduanero solo regula mercancías y bienes tangibles. Una operación de servicios transfronterizos no se somete al régimen aduanero, aunque sí puede tener efectos tributarios (renta, IVA) y cambiarios.',
          },
          norm: {
            norm: 'Decreto 1165 de 2019',
            article: 'obligación aduanera y sujetos',
            status: 'modificada',
            note: 'Modificado por el Decreto 659 de 2024 (declaración anticipada, responsabilidad del importador, abandono legal). Verificado en normograma.dian.gov.co.',
          },
        },
        {
          heading: 'El régimen cambiario: marco y reglas básicas',
          paragraphs: [
            'El régimen cambiario es el sistema de normas que regula el comercio internacional de divisas: regula el mercado donde se compran y venden las monedas extranjeras (por ejemplo, los mercados peso-dólar y peso-euro). El acceso a las divisas es esencial para que los agentes económicos realicen actividades de comercio internacional o de inversión en el extranjero, y las transacciones en moneda extranjera se realizan en Colombia a través de intermediarios autorizados y supervisados por el Banco de la República.',
            'El marco legal del régimen cambiario está conformado, entre otras normas, por la Constitución Política (arts. 113, 150, 189, 371, 372 y 373), la Ley 9 de 1991 (Ley Marco de Cambios Internacionales), la Ley 31 de 1992, los estatutos del Banco de la República, el compendio de la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República, y el Decreto 1068 de 2015 con su Decreto modificatorio 119 de 2018, que regula el régimen general de las inversiones internacionales. El régimen sancionatorio cambiario está en el Decreto 2245 de 2011.',
            'La Junta Directiva del Banco de la República es la autoridad cambiaria: expide y compendia el régimen, y tiene amplias facultades para regular los requisitos y condiciones en que actúan los intermediarios del mercado cambiario. La DIAN, en cambio, no diseña el régimen: lo controla, lo vigila y sanciona administrativamente su incumplimiento.',
          ],
          bullets: [
            'Operaciones internas: las que se realizan entre residentes, entre residentes y usuarios de zona franca o entre estos últimos, independientemente de su regulación aduanera, deben pagarse en moneda legal colombiana.',
            'Residentes con activos en el exterior: los residentes pueden tener, poseer y negociar divisas que no deban transferirse o negociarse por el mercado cambiario, sin que ello sea infracción al régimen cambiario.',
            'Canalización obligatoria: algunas operaciones deben negociarse o transferirse a través de los intermediarios del mercado cambiario o de cuentas de compensación: importación y exportación de bienes; inversión extranjera en Colombia y sus rendimientos; inversión colombiana en el exterior y sus rendimientos; inversiones financieras en títulos emitidos y activos radicados en el exterior y sus rendimientos (salvo cuando se hagan con divisas de operaciones no canalizables); avales y garantías en moneda extranjera; y operaciones de derivados.',
            'Canalización: la negociación o transferencia de divisas se hace a través de los intermediarios del mercado cambiario (IMC) o de cuentas de compensación, que son cuentas bancarias en el exterior por medio de las cuales se canalizan los ingresos o egresos de las operaciones de obligatoria canalización.',
            'Declaración de cambio: es la declaración juramentada contenida en un formulario en la que se consigna la información sobre el monto, las características y las demás condiciones de la operación de cambio celebrada a través del mercado cambiario. Se diligencia a nombre del residente o no residente que realiza la operación y el obligado puede otorgar mandato al IMC para presentarla.',
            'Numeral cambiario: código asignado por el Banco de la República para identificar las operaciones de cambio que se canalizan por el mercado cambiario.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Autoridad cambiaria = Junta Directiva del Banco de la República (diseña el régimen). La DIAN = control, vigilancia y sanción administrativa. No confunda los dos roles.',
          },
        },
        {
          heading: 'Autoridades y reparto de competencias en el control',
          paragraphs: [
            'El control del régimen cambiario no está concentrado en una sola entidad. La DIAN ejerce la vigilancia sobre las operaciones de cambio cuya competencia no esté asignada a otra autoridad (competencia residual) y, de manera expresa, sobre las operaciones que enumera el material de formación.',
            'Según el artículo 3 del Decreto 1742 de 2020, las funciones de control y vigilancia cambiaria de la DIAN son: (a) vigilar el cumplimiento del régimen cambiario en materia de importación y exportación de bienes y servicios, gastos asociados, financiación en moneda extranjera de importaciones y exportaciones, y subfacturación y sobrefacturación de estas operaciones; (b) controlar y vigilar las operaciones derivadas del régimen cambiario que no sean competencia de otra entidad; y (c) autorizar, controlar y vigilar las actividades de las personas que ejerzan de manera profesional la compra y venta de divisas.',
          ],
          table: {
            caption: 'Quién hace qué en el sistema cambiario',
            headers: ['Entidad', 'Rol', 'Instrumento principal'],
            rows: [
              ['Junta Directiva del Banco de la República', 'Autoridad cambiaria: diseña y compendia el régimen; registra cuentas de compensación', 'Resolución Externa 1 de 2018; Circular Reglamentaria Externa DCIP-83'],
              ['DIAN', 'Control, vigilancia y sanción administrativa; competencia residual; profesionales de compra y venta de divisas', 'Decreto 1742 de 2020, art. 3; Decreto 2245 de 2011; Resolución 000161 de 2021 (información exógena cambiaria)'],
              ['Superintendencia Financiera', 'Vigilancia de los intermediarios del mercado cambiario (IMC)', 'Normas prudenciales y de supervisión'],
              ['UIAF', 'Inteligencia financiera: recibe y analiza reportes de operaciones sospechosas', 'Ley 526 de 1999 y normativa de prevención de LA/FT'],
              ['Ministerio de Hacienda', 'Política fiscal y sector al que está adscrita la DIAN', 'Decreto 1742 de 2020'],
            ],
          },
          norm: {
            norm: 'Decreto 1742 de 2020',
            article: 'art. 3',
            status: 'vigente',
            note: 'Funciones de control y vigilancia cambiaria de la DIAN. Verificado en normograma.dian.gov.co.',
          },
        },
        {
          heading: 'Puente hacia la fiscalización: por qué estos sistemas importan para un Gestor I',
          paragraphs: [
            'Los sistemas aduanero y cambiario son sistemas de control: en ellos la DIAN no solo recauda, sino que verifica que las mercancías entren y salgan legalmente y que las divisas se canalicen y declaren conforme al régimen. Los módulos 9 y 10 desarrollan los procedimientos de fiscalización y liquidación aduanera y cambiaria; esta lección deja instalados los conceptos básicos sobre los que se apoyan.',
            'La evidencia que un funcionario encuentra en un expediente (declaración de importación, declaración de cambio, facturas, cuentas de compensación) es el punto de partida de las actuaciones de control: de ahí la importancia de saber qué documento corresponde a cada obligación y qué autoridad controla cada operación.',
          ],
          callout: {
            type: 'aviso',
            text: 'El material de formación cita la Resolución Externa 8 de 2000 y el Decreto 1735 de 1993 en varios apartes del módulo cambiario. Hoy el compendio vigente es la Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República; al estudiar, cite siempre la norma compilatoria vigente.',
          },
        },
      ],
      summary: [
        'El régimen aduanero fija los requisitos, procedimientos y responsabilidades de la comercialización internacional de bienes; se rige por el Decreto 1165 de 2019, modificado por el Decreto 659 de 2024, y por los principios de la Ley 1609 de 2013.',
        'El ámbito del régimen aduanero es el territorio aduanero nacional (sin zonas francas ni depósitos habilitados) y solo cubre mercancías y bienes tangibles.',
        'La obligación aduanera vincula a la administración aduanera con los obligados directos (usuarios aduaneros) e indirectos; el importador responde por la legal introducción, la exactitud de la declaración y la correcta liquidación de los tributos.',
        'El régimen cambiario es diseñado por la Junta Directiva del Banco de la República (compendio en la Resolución Externa 1 de 2018) y controlado en Colombia por la DIAN, con competencia residual y funciones expresas del artículo 3 del Decreto 1742 de 2020.',
        'Las operaciones internas se pagan en moneda legal colombiana; los residentes pueden tener activos en el exterior; y las operaciones de obligatoria canalización se negocian por los IMC o por cuentas de compensación.',
        'La declaración de cambio es la declaración juramentada en la que se reportan los datos mínimos de la operación de cambio.',
      ],
      memorize: [
        'Aduanero: Decreto 1165 de 2019 (E.A.) + Decreto 659 de 2024 + Ley 1609 de 2013 (principios).',
        'Cambiario: Ley 9 de 1991 + Ley 31 de 1992 + Resolución Externa 1 de 2018 (Junta Directiva BanRep) + Decreto 1068 de 2015 + Decreto 2245 de 2011 (sanciones).',
        'Operaciones de obligatoria canalización: importación y exportación de bienes; inversión extranjera en Colombia y sus rendimientos; inversión colombiana en el exterior y sus rendimientos; inversiones financieras en el exterior y sus rendimientos; avales y garantías en moneda extranjera; derivados.',
        'Control cambiario de la DIAN (art. 3, Decreto 1742 de 2020): importaciones y exportaciones, gastos y financiación asociados, competencia residual y profesionales de compra y venta de divisas.',
        'Un IMC es una entidad vigilada por la Superintendencia Financiera; una cuenta de compensación es una cuenta bancaria en el exterior.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: seguir el rastro de una importación',
          paragraphs: [
            'Una empresa importa maquinaria por USD 100.000. En el plano aduanero debe presentar la declaración de importación (con declaración anticipada, si aplica), liquidar los derechos de aduana sobre el valor en aduana y el IVA sobre la base del artículo 459 E.T., y conservar los documentos soporte. En el plano cambiario, el pago al proveedor del exterior es una operación de obligatoria canalización: debe hacerse a través de un IMC o de una cuenta de compensación y reportarse en la declaración de cambio con el numeral cambiario correspondiente. Si la DIAN detecta que el pago se hizo por fuera del mercado cambiario, adelanta la investigación y aplica el régimen sancionatorio del Decreto 2245 de 2011.',
          ],
        },
        {
          heading: 'Ejemplo 2: distinguir el rol de cada autoridad',
          paragraphs: [
            'Un particular pregunta si puede abrir una cuenta en el exterior para recibir pagos por exportación de servicios. La respuesta de fondo la da el régimen cambiario que compendia la Junta Directiva del Banco de la República (por ejemplo, sobre cuentas de compensación y operaciones de obligatoria canalización); la vigilancia del cumplimiento y la eventual sanción administrativa corresponden a la DIAN; y si los recursos tienen señales de lavado de activos, la DIAN debe reportar el caso a la UIAF.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Decir que la DIAN expide el régimen cambiario.',
          correction: 'El régimen cambiario lo expide y compendia la Junta Directiva del Banco de la República. La DIAN lo controla, lo vigila y sanciona administrativamente su incumplimiento.',
        },
        {
          mistake: 'Creer que todas las operaciones de cambio son de obligatoria canalización.',
          correction: 'Existe un mercado libre para las divisas de libre tenencia, posesión y negociación. Solo las operaciones señaladas en la regulación (importación y exportación de bienes, inversiones internacionales y sus rendimientos, avales y garantías y derivados, entre otras) son de obligatoria canalización por los IMC o cuentas de compensación.',
        },
        {
          mistake: 'Suponer que el régimen aduanero se aplica a los intangibles y a los servicios.',
          correction: 'El régimen de aduanas solo se refiere al movimiento de mercancías y bienes tangibles. La prestación de servicios transfronterizos se rige por las normas tributarias y cambiarias, no por el estatuto aduanero.',
        },
        {
          mistake: 'Creer que las zonas francas hacen parte del territorio aduanero nacional.',
          correction: 'El ámbito de aplicación del régimen aduanero es el territorio nacional, que se subdivide en zonas francas y depósitos habilitados; estos dos no hacen parte del territorio aduanero nacional.',
        },
      ],
      norms: [
        {
          norm: 'Decreto 1165 de 2019',
          status: 'modificada',
          note: 'Estatuto Aduanero. Modificado por el Decreto 659 de 2024 (declaración anticipada obligatoria 48 horas antes del arribo, responsabilidad del importador, abandono legal, seriales) y por decretos de 2026. Verificado en normograma.dian.gov.co y alcaldiabogota.gov.co.',
        },
        {
          norm: 'Ley 1609 de 2013',
          article: 'art. 4',
          status: 'vigente',
          note: 'Ley Marco de Aduanas; principios generales del régimen. Verificada en fuentes oficiales el 2026-10-15.',
        },
        {
          norm: 'Ley 9 de 1991',
          status: 'vigente',
          note: 'Ley Marco de Cambios Internacionales; normas generales a las que debe sujetarse el Gobierno para regular los cambios internacionales.',
        },
        {
          norm: 'Resolución Externa 1 de 2018 (Junta Directiva del Banco de la República)',
          status: 'vigente',
          note: 'Compendio del régimen de cambios internacionales; sustituyó los compendios anteriores (entre ellos el de la Resolución Externa 8 de 2000 que cita el material). Verificado en banrep.gov.co.',
        },
        {
          norm: 'Decreto 1068 de 2015',
          article: 'arts. 2.17.1.1 y siguientes',
          status: 'modificada',
          note: 'Régimen general de inversiones internacionales; modificado por el Decreto 119 de 2018. Verificar la compilación vigente.',
        },
        {
          norm: 'Decreto 2245 de 2011',
          status: 'vigente',
          note: 'Régimen sancionatorio cambiario: procedimiento y multas por incumplimiento del régimen de cambios (por ejemplo, 40 UVT hasta 2.000 UVT por deficiencias en el conocimiento del cliente en hoteles y agencias de viajes, según el material).',
        },
        {
          norm: 'Resolución DIAN 000161 de 2021',
          status: 'verificar',
          note: 'Información exógena cambiaria a cargo de las entidades del régimen cambiario y de los sujetos obligados a canalizar operaciones; verifique el número de resolución y su compilación vigente (Resolución Única DIAN 000227 de 2025).',
        },
      ],
      links: [
        { label: 'Banco de la República — Régimen cambiario', url: 'https://www.banrep.gov.co/es/regimen-cambiario' },
        { label: 'Normograma DIAN — Decreto 1165 de 2019', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1165_2019.htm' },
        { label: 'Normograma DIAN — Ley 1609 de 2013', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/ley_1609_2013.htm' },
        { label: 'DIAN — Comercio exterior', url: 'https://www.dian.gov.co/aduanas/Paginas/default.aspx' },
      ],
      mindmap: {
        root: 'Sistemas de control',
        branches: [
          { label: 'Régimen aduanero', children: ['Decreto 1165 de 2019', 'Decreto 659 de 2024', 'Territorio aduanero', 'Solo bienes tangibles'] },
          { label: 'Obligación aduanera', children: ['Obligados directos', 'Obligados indirectos', 'Importador responsable', 'Elementos del tributo aduanero'] },
          { label: 'Régimen cambiario', children: ['Ley 9 de 1991', 'Resolución Externa 1 de 2018', 'Junta Directiva BanRep', 'Decreto 1068 de 2015'] },
          { label: 'Operaciones de cambio', children: ['Canalización obligatoria', 'IMC', 'Cuentas de compensación', 'Declaración de cambio'] },
          { label: 'Autoridades', children: ['DIAN (control)', 'BanRep (régimen)', 'Superfinanciera (IMC)', 'UIAF (LA/FT)'] },
        ],
      },
      mindmapText:
        'El sistema aduanero se rige por el Decreto 1165 de 2019, modificado por el Decreto 659 de 2024, y por los principios de la Ley 1609 de 2013; su ámbito es el territorio aduanero nacional y solo cubre mercancías tangibles. La obligación aduanera vincula a la administración aduanera con obligados directos e indirectos, y el importador responde por la legal introducción y la exactitud de la declaración. El sistema cambiario, diseñado por la Junta Directiva del Banco de la República (Resolución Externa 1 de 2018), regula el mercado de divisas, define las operaciones de obligatoria canalización y exige la declaración de cambio. La DIAN controla, vigila y sanciona administrativamente el cumplimiento cambiario, con la competencia residual que le asigna el Decreto 1742 de 2020.',
      source: [
        { doc: 'taci', pages: 'págs. 11-14 (principios generales del derecho aduanero y del derecho cambiario)' },
        { doc: 'taci', pages: 'págs. 133-149 (Unidades 4 y 5: obligación sustancial y formal en el régimen cambiario)' },
        { doc: 'taci', pages: 'págs. 165-172 (Unidad 9: obligación sustancial en el régimen aduanero)', note: 'Las páginas 165 y siguientes pertenecen al mismo documento TACI (archivo 03); se citan porque desarrollan el contenido aduanero que la Unidad 1 solo introduce.' },
      ],
      activityId: 'm03-a02',
    },
  ],
}
