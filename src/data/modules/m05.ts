import type { ModuleDef } from '../types'

// ============================================================
// MÓDULO 5 — Liquidación de impuestos nacionales (indicador i05)
// Academia DIAN — Gestor I (empleo 236767, nivel profesional)
// Fuente base: MATERIAL TOTAL DIAN - FISCALIZACION, Módulo 5
//   Unidad 1: renta personas jurídicas (págs. 201-261)
//   Unidad 2: ESAL y Régimen Tributario Especial (págs. 262-316)
//   Unidad 3: renta personas naturales (págs. 317-367)
//   Unidad 4: ganancia ocasional (págs. 368-384)
//   Unidad 5: impuesto sobre las ventas (págs. 385-399)
//   Unidad 6: impuesto nacional al consumo y bolsas plásticas (págs. 400-406)
// NOTA DE ACTUALIZACIÓN: el material se redactó con la legislación vigente
// hacia 2020-2021 (Leyes 1819 de 2016, 2010 de 2019 y 2068 de 2020). La
// Ley 2277 de 2022 modificó, entre otras, la tarifa general de renta de
// personas jurídicas (35%), la tarifa general de ganancia ocasional (15%),
// la tributación de dividendos, el tope de rentas exentas y deducciones de
// la cédula general (1.340 UVT) y varias rentas exentas. En cada lección se
// indica expresamente qué cambió y se marca el estado de cada norma.
// UVT de referencia 2026: $52.374 (Resolución DIAN 000238 del 15-dic-2025).
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm05',
  order: 5,
  title: 'Liquidación de impuestos nacionales',
  description:
    'Determinación y liquidación de los impuestos nacionales: renta de personas jurídicas (elementos, depuración, tarifas, renta presuntiva, anticipo y autorretención), régimen tributario especial de las entidades sin ánimo de lucro, renta de personas naturales (residencia, sistema cedular, rentas exentas y tarifas), ganancia ocasional, impuesto sobre las ventas e impuesto nacional al consumo.',
  indicators: ['i05'],
  lessons: [
    // ----------------------------------------------------------
    // LECCIÓN 1
    // ----------------------------------------------------------
    {
      id: 'm05-l01',
      moduleId: 'm05',
      title: 'Renta de personas jurídicas I: contribuyentes, elementos y depuración',
      indicators: ['i05'],
      objectives: [
        'Identificar los sujetos que intervienen en el impuesto sobre la renta y complementarios: quién lo administra, quién lo paga y quiénes son contribuyentes declarantes, no contribuyentes declarantes y no declarantes.',
        'Reconocer los elementos del tributo (sujeto activo, sujeto pasivo, hecho generador, base gravable, tarifa y periodo) aplicados a las personas jurídicas.',
        'Explicar la evolución de la tarifa general de renta de las personas jurídicas hasta el 35% vigente y reconocer las sobretasas y tarifas diferenciales que hoy contempla el artículo 240 del Estatuto Tributario.',
        'Aplicar el esquema de depuración del artículo 26 del Estatuto Tributario para pasar de los ingresos brutos a la renta líquida gravable.',
      ],
      sections: [
        {
          heading: 'El impuesto sobre la renta y complementarios',
          paragraphs: [
            'El impuesto sobre la renta y complementarios es un tributo nacional, directo, de periodo y de cargo de quienes obtienen ingresos susceptibles de producir un incremento neto del patrimonio. Se denomina directo porque grava una manifestación directa de capacidad contributiva (la renta obtenida) y de periodo porque se liquida sobre los resultados de un año gravable completo, que ordinariamente va del 1 de enero al 31 de diciembre.',
            'En el caso de las personas jurídicas, la ley grava la renta de la sociedad como sujeto independiente de sus socios: la sociedad declara y paga sobre su propia renta, y los socios tributan después por los dividendos que reciben. Esa separación es una de las diferencias estructurales frente al régimen de las personas naturales, que se estudia más adelante en este módulo.',
          ],
          callout: {
            type: 'importante',
            text: 'El impuesto de renta de las personas jurídicas es anual y se declara en el formulario 110. Los contribuyentes obligados a llevar contabilidad deben presentar además la conciliación fiscal (art. 772-1 del ET).',
          },
        },
        {
          heading: 'Evolución de las reformas tributarias recientes',
          paragraphs: [
            'La tarifa general del impuesto de renta de las sociedades ha cambiado varias veces en los últimos años. El material de estudio recoge la trayectoria que va de la Ley 1607 de 2012 a la Ley 2010 de 2019; a esa secuencia debe agregarse la Ley 2277 de 2022, que rige hoy.',
          ],
          table: {
            caption: 'Evolución reciente de la tarifa general de renta de personas jurídicas',
            headers: ['Norma', 'Contenido principal', 'Tarifa general'],
            rows: [
              ['Ley 1607 de 2012', 'Creó el CREE (impuesto sobre la renta para la equidad) y redujo la tarifa del impuesto de renta de sociedades', '25% + CREE 9% = 34%'],
              ['Ley 1739 de 2014', 'Adicionó una sobretasa al CREE (5% en 2015, 6% en 2016, 8% en 2017 y 2018)', 'Hasta 42% de carga combinada'],
              ['Ley 1819 de 2016', 'Eliminó el CREE como tributo independiente y lo integró al impuesto de renta; eliminó la sobretasa', '34% en 2017; 33% desde 2018'],
              ['Ley 1943 de 2018', 'Redujo gradualmente la tarifa (declarada inexequible por Sentencia C-481 de 2019, pero su contenido fue reproducido por la Ley 2010 de 2019)', '33% en 2019'],
              ['Ley 2010 de 2019', 'Consolidó la reducción gradual de la tarifa y eliminó la sobretasa del sector financiero', '32% en 2020; 31% en 2021; 30% en 2022'],
              ['Ley 2277 de 2022', 'Elevó la tarifa general, creó sobretasas sectoriales y la tasa mínima de tributación del 15%', '35% desde el año gravable 2023'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'Ojo con el material: el documento de estudio se redactó cuando regía la Ley 2010 de 2019 (tarifa del 30% para 2022). Hoy la tarifa general es del 35% (art. 10 de la Ley 2277 de 2022). En las preguntas de la convocatoria debe primar la norma vigente.',
          },
        },
        {
          heading: 'Los cuatro grupos de sujetos frente al impuesto',
          paragraphs: [
            'El Estatuto Tributario clasifica a los sujetos en cuatro grupos, y de esa clasificación depende quién paga el impuesto y quién está obligado a declarar. La distinción es una de las preguntas de examen más frecuentes.',
          ],
          bullets: [
            'Contribuyentes declarantes (art. 16 del ET): personas naturales, jurídicas y asimiladas que deben declarar y pagar. Allí están las sociedades nacionales y extranjeras.',
            'No contribuyentes declarantes (art. 19 del ET): entidades como las ESAL del régimen tributario especial, los sindicatos, los partidos políticos, las entidades religiosas y los fondos de empleados. No son contribuyentes, pero deben declarar (presentan declaración de ingresos y patrimonio o del régimen especial).',
            'No contribuyentes no declarantes (art. 22 del ET): entidades como la Nación, los departamentos, los municipios y las juntas de acción comunal. No declaran el impuesto de renta.',
            'No declarantes (art. 23 del ET): personas naturales que no superan los topes de declaración y ciertas entidades y fondos sin ánimo de lucro. No están obligadas a declarar.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'arts. 16, 19, 22 y 23', status: 'vigente', note: 'Textos compilados en el Decreto 1625 de 2016 y de consulta permanente en el normograma de la DIAN.' },
        },
        {
          heading: 'Elementos del impuesto',
          paragraphs: [
            'Todo tributo se analiza a partir de sus elementos. En el impuesto de renta de las personas jurídicas estos son los siguientes:',
          ],
          bullets: [
            'Sujeto activo: la Nación, representada por la Dirección de Impuestos y Aduanas Nacionales (DIAN), que administra el impuesto.',
            'Sujeto pasivo: el contribuyente, es decir, la sociedad o entidad asimilada que realiza el hecho generador y es titular de la obligación tributaria sustancial.',
            'Hecho generador: según el artículo 26 del ET, está constituido por los ingresos susceptibles de producir un incremento neto del patrimonio en el momento de su percepción, siempre que no hayan sido expresamente exceptuados.',
            'Base gravable: la renta líquida gravable (art. 26 del ET) o, si resulta superior, la renta presuntiva (art. 188 del ET). Hoy la renta presuntiva es del 0%, pero la regla de comparación sigue en el Estatuto.',
            'Tarifa: la señalada en el artículo 240 del ET (35% general) con las sobretasas y tarifas diferenciales de sus parágrafos.',
            'Periodo gravable: el año calendario, salvo en casos especiales (por ejemplo, el periodo que termina con la liquidación de la sociedad).',
          ],
          callout: {
            type: 'memoriza',
            text: 'Hecho generador (art. 26 ET): ingresos susceptibles de producir incremento neto del patrimonio en el momento de su percepción. Departura clave: bruto, neto, bruta, líquida, líquida gravable.',
          },
        },
        {
          heading: 'Tarifa general, sobretasas y tarifas diferenciales',
          paragraphs: [
            'El artículo 240 del ET fija la tarifa general del 35% para las sociedades nacionales y asimiladas, los establecimientos permanentes y las personas jurídicas extranjeras con o sin residencia en el país. Sobre esa tarifa se aplican puntos adicionales con enfoque sectorial.',
            'La Ley 2277 de 2022 también introdujo la tasa mínima de tributación (TMT) del 15% sobre la renta líquida depurada: si la tasa de tributación depurada del contribuyente resulta inferior al 15%, deberá pagar la diferencia. Con ello se busca que ninguna sociedad pague un impuesto efectivo inferior a ese piso.',
          ],
          table: {
            caption: 'Tarifas especiales y sobretasas del artículo 240 del ET (vigentes en 2026)',
            headers: ['Sector o situación', 'Puntos adicionales', 'Tarifa total'],
            rows: [
              ['Tarifa general', '—', '35%'],
              ['Entidades financieras y aseguradoras, si la renta gravable iguala o supera 120.000 UVT', '+5 puntos (años gravables 2023 a 2027)', '40%'],
              ['Generación de energía con recursos hídricos', '+3 puntos (2023 a 2026)', '38%'],
              ['Extracción de carbón (CIIU 0510 y 0520)', 'De 0 a 10 puntos según precio internacional', 'Hasta 45%'],
              ['Extracción de petróleo crudo (CIIU 0610)', 'Hasta 15 puntos según precio Brent (norma con pronunciamiento parcial de la Corte Constitucional en 2024)', 'Hasta 50%'],
              ['Servicios hoteleros y parques temáticos de ecoturismo, empresas editoriales', 'Tarifa diferencial', '15%'],
              ['Empresas industriales y comerciales del Estado y nuevos hoteles en municipios de menor tamaño', 'Tarifa diferencial', '9%'],
            ],
          },
          norm: { norm: 'Ley 2277 de 2022', article: 'art. 10 (modifica el art. 240 del ET)', status: 'vigente', note: 'Tarifa general del 35% desde el año gravable 2023 y sobretasas sectoriales; aplica también para 2026.' },
        },
        {
          heading: 'La depuración del artículo 26 del ET: de los ingresos a la renta líquida gravable',
          paragraphs: [
            'La determinación del impuesto sigue una secuencia ordenada que el material denomina depuración. Cada paso resta una categoría distinta de la anterior y conviene memorizar el orden porque es la columna vertebral de toda la liquidación.',
          ],
          table: {
            caption: 'Esquema de depuración del impuesto sobre la renta (art. 26 del ET)',
            headers: ['Paso', 'Concepto', 'Qué se resta'],
            rows: [
              ['1', 'Ingresos brutos', '—'],
              ['2', 'Ingresos netos', 'Devoluciones, rebajas y descuentos'],
              ['3', 'Renta bruta', 'Ingresos no constitutivos de renta ni ganancia ocasional (INCRNGO)'],
              ['4', 'Renta líquida', 'Costos y deducciones procedentes (arts. 107 y siguientes del ET)'],
              ['5', 'Renta líquida gravable', 'Rentas exentas y pérdidas fiscales compensables'],
              ['6', 'Base gravable final', 'Se compara la renta líquida gravable con la renta presuntiva y se toma la mayor'],
            ],
          },
          callout: {
            type: 'ejemplo',
            text: 'Ingresos brutos $1.000.000.000; devoluciones $50.000.000; INCRNGO $100.000.000; costos $400.000.000; deducciones $250.000.000. Ingresos netos = $950.000.000; renta bruta = $850.000.000; renta líquida = $200.000.000; sin rentas exentas ni pérdidas, la renta líquida gravable es $200.000.000 y el impuesto, al 35%, es $70.000.000.',
          },
        },
        {
          heading: 'Realización del ingreso y conciliación fiscal',
          paragraphs: [
            'Para las personas jurídicas obligadas a llevar contabilidad, los ingresos se realizan en el año en que se causen, de acuerdo con el artículo 27 del ET (pagos en dinero) y el artículo 28 (pagos en especie). El artículo 28 contiene reglas especiales, como la del numeral 6 sobre los contratos de construcción, y el artículo 21-1 sobre las contraprestaciones por transferencia de activos.',
            'La diferencia en cambio es un ejemplo típico de realización: si un ingreso en moneda extranjera se abona en un momento distinto al de la causación, la variación de la tasa de cambio genera una diferencia que se reconoce conforme a las reglas contables y fiscales aplicables.',
            'La conciliación fiscal (art. 772-1 del ET) obliga a los contribuyentes a llevar un sistema documental que explique las diferencias entre la contabilidad y las bases fiscales. Se presenta en el formato 2516 y su omisión puede acarrear sanciones.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'arts. 21-1, 27, 28 y 772-1', status: 'vigente', note: 'El artículo 772-1 fue adicionado por la Ley 1819 de 2016 y reglamentado en el DURT.' },
        },
      ],
      summary: [
        'El impuesto de renta de personas jurídicas es nacional, directo, de periodo y se declara en el formulario 110.',
        'Los sujetos se clasifican en contribuyentes declarantes (art. 16), no contribuyentes declarantes (art. 19), no contribuyentes no declarantes (art. 22) y no declarantes (art. 23).',
        'La tarifa general es del 35% desde el año gravable 2023 (Ley 2277 de 2022, art. 10), con sobretasas hasta del 50% para sectores extractivos y diferenciales del 9% y 15%.',
        'La depuración del artículo 26 conduce de los ingresos brutos a la renta líquida gravable en seis pasos, cada uno con una resta distinta.',
        'La renta líquida gravable se compara con la renta presuntiva y se toma la mayor, aunque hoy la presuntiva es del 0%.',
        'Los obligados a llevar contabilidad deben conciliar fiscalmente sus cifras contables y fiscales (art. 772-1 del ET).',
      ],
      memorize: [
        'Tarifa general de renta de personas jurídicas: 35% (Ley 2277 de 2022, art. 10 del ET). Antes: 32% en 2020, 31% en 2021 y 30% en 2022.',
        'Sobretasa financiera: 5 puntos adicionales si la renta gravable es igual o superior a 120.000 UVT; tarifa total 40%.',
        'Depuración: ingresos brutos − devoluciones = ingresos netos; − INCRNGO = renta bruta; − costos y deducciones = renta líquida; − rentas exentas y pérdidas = renta líquida gravable.',
        'Hecho generador (art. 26 del ET): ingresos susceptibles de producir incremento neto del patrimonio en el momento de su percepción.',
        'Grupos de sujetos: art. 16 declarantes, art. 19 no contribuyentes declarantes, art. 22 no contribuyentes no declarantes, art. 23 no declarantes.',
        'Tasa mínima de tributación: 15% sobre la renta líquida depurada.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: depuración básica y liquidación del impuesto',
          paragraphs: [
            'La sociedad Comercializadora Andina S.A.S. reporta en el año gravable 2025: ingresos brutos operacionales $1.000.000.000; devoluciones, rebajas y descuentos $50.000.000; dividendos no constitutivos de renta provenientes de otra sociedad nacional $100.000.000; costos $400.000.000; deducciones procedentes $250.000.000. No tiene rentas exentas ni pérdidas fiscales que compensar.',
            'Ingresos netos: $1.000.000.000 − $50.000.000 = $950.000.000. Renta bruta: $950.000.000 − $100.000.000 = $850.000.000. Renta líquida: $850.000.000 − $400.000.000 − $250.000.000 = $200.000.000. Como no hay rentas exentas ni pérdidas, la renta líquida gravable es $200.000.000.',
            'Impuesto sobre la renta: $200.000.000 x 35% = $70.000.000. Si la sociedad no tiene descuentos tributarios ni retenciones a favor, ese es el valor a pagar por el año gravable 2025.',
          ],
          table: {
            caption: 'Liquidación del ejemplo 1',
            headers: ['Concepto', 'Valor'],
            rows: [
              ['Ingresos brutos', '$1.000.000.000'],
              ['(−) Devoluciones, rebajas y descuentos', '$50.000.000'],
              ['(=) Ingresos netos', '$950.000.000'],
              ['(−) Ingresos no constitutivos de renta (dividendos)', '$100.000.000'],
              ['(=) Renta bruta', '$850.000.000'],
              ['(−) Costos', '$400.000.000'],
              ['(−) Deducciones', '$250.000.000'],
              ['(=) Renta líquida', '$200.000.000'],
              ['(−) Rentas exentas y pérdidas fiscales', '$0'],
              ['(=) Renta líquida gravable', '$200.000.000'],
              ['Impuesto (35%)', '$70.000.000'],
            ],
          },
        },
        {
          heading: 'Ejemplo 2: efecto de la reforma sobre una misma renta gravable',
          paragraphs: [
            'Una sociedad con renta líquida gravable de $500.000.000 pagó, en el año gravable 2022, $150.000.000 (tarifa del 30% de la Ley 2010 de 2019). En el año gravable 2026, con la misma renta gravable, paga $175.000.000 (tarifa del 35% de la Ley 2277 de 2022).',
            'La diferencia de $25.000.000 muestra por qué el examen insiste en verificar la vigencia de la tarifa antes de liquidar: el material de estudio quedó anclado en el 30% y las preguntas de la convocatoria se resuelven con la norma actual.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Seguir usando la tarifa del 30% o del 32% porque así aparece en el material de estudio.',
          correction: 'El material recoge la Ley 2010 de 2019 (30% para 2022). La tarifa general vigente es del 35% desde el año gravable 2023 (Ley 2277 de 2022, art. 10 del ET).',
        },
        {
          mistake: 'Restar las rentas exentas antes de los costos y deducciones dentro de la depuración.',
          correction: 'El orden es: ingresos netos menos INCRNGO = renta bruta; renta bruta menos costos y deducciones = renta líquida; renta líquida menos rentas exentas y pérdidas = renta líquida gravable.',
        },
        {
          mistake: 'Confundir a las ESAL del artículo 19 del ET con contribuyentes del impuesto.',
          correction: 'Las ESAL del art. 19 son no contribuyentes declarantes: no pagan el impuesto de renta, pero están obligadas a declarar. Las sociedades del art. 16 sí son contribuyentes y pagan.',
        },
        {
          mistake: 'Creer que todas las sociedades pagan 35% sin revisar sobretasas ni tarifas diferenciales.',
          correction: 'El artículo 240 del ET contiene puntos adicionales (financiero, hidroeléctrico, carbón, petróleo) y tarifas diferenciales del 9% y 15% para sectores como hotelería y editoriales.',
        },
      ],
      norms: [
        { norm: 'Estatuto Tributario (Decreto 624 de 1989)', article: 'arts. 16, 19, 22 y 23', status: 'vigente', note: 'Clasificación de los sujetos frente al impuesto.' },
        { norm: 'Estatuto Tributario', article: 'art. 26', status: 'vigente', note: 'Hecho generador y esquema de depuración (ingresos, renta bruta, renta líquida, renta líquida gravable).' },
        { norm: 'Estatuto Tributario', article: 'art. 240', status: 'modificada', note: 'Modificado por el art. 10 de la Ley 2277 de 2022: tarifa general del 35% desde 2023, sobretasas sectoriales y tasa mínima de tributación del 15%.' },
        { norm: 'Ley 2010 de 2019', article: 'art. 9 (tarifas 32%, 31% y 30%)', status: 'modificada', note: 'Rige para los años gravables 2020 a 2022; sustituida por la Ley 2277 de 2022 a partir de 2023.' },
        { norm: 'Ley 2277 de 2022', article: 'art. 10', status: 'vigente', note: 'Verificada en el normograma DIAN y en secretariasenado.gov.co.' },
        { norm: 'Estatuto Tributario', article: 'art. 772-1 (conciliación fiscal)', status: 'vigente', note: 'Adicionado por la Ley 1819 de 2016; se presenta en el formato 2516.' },
        { norm: 'Estatuto Tributario', article: 'arts. 27, 28 y 21-1 (realización del ingreso)', status: 'vigente', note: '' },
      ],
      links: [
        { label: 'Estatuto Tributario compilado (Secretaría del Senado)', url: 'https://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'Normograma DIAN (compilación jurídica)', url: 'https://normograma.dian.gov.co/dian/' },
        { label: 'Ley 2277 de 2022 (DIAN)', url: 'https://www.dian.gov.co/normatividad/Paginas/Normatividad.aspx' },
      ],
      mindmap: {
        root: 'Renta de personas jurídicas: sujetos y elementos',
        branches: [
          { label: 'Sujetos', children: ['Contribuyentes declarantes (art. 16)', 'No contribuyentes declarantes (art. 19)', 'No contribuyentes no declarantes (art. 22)', 'No declarantes (art. 23)'] },
          { label: 'Elementos', children: ['Sujeto activo: Nación - DIAN', 'Sujeto pasivo: la sociedad', 'Hecho generador: art. 26 del ET', 'Base: renta líquida gravable vs. presuntiva', 'Tarifa: art. 240 del ET'] },
          { label: 'Tarifa general', children: ['35% desde 2023 (Ley 2277 de 2022)', 'Sobretasa financiera: 40%', 'Diferenciales: 9% y 15%', 'Tasa mínima de tributación: 15%'] },
          { label: 'Depuración (art. 26)', children: ['Ingresos brutos - devoluciones', 'Ingresos netos - INCRNGO', 'Renta bruta - costos y deducciones', 'Renta líquida - exentas y pérdidas'] },
          { label: 'Obligaciones formales', children: ['Declaración en formulario 110', 'Conciliación fiscal (art. 772-1)', 'Formato 2516'] },
        ],
      },
      mindmapText:
        'El mentefacto parte de la renta de personas jurídicas y se abre en cinco ramas. La primera distingue los cuatro grupos de sujetos (arts. 16, 19, 22 y 23 del ET). La segunda recoge los elementos del tributo: sujeto activo, sujeto pasivo, hecho generador del artículo 26, base gravable y tarifa. La tercera resume la tarifa general del 35% con sobretasas y diferenciales y la tasa mínima de tributación del 15%. La cuarta describe la depuración en cuatro restas sucesivas que llevan de los ingresos brutos a la renta líquida gravable. La quinta agrupa las obligaciones formales: declarar en el formulario 110 y presentar la conciliación fiscal en el formato 2516.',
      source: [
        { doc: 'material', pages: 'págs. 202-224', note: 'Unidad 1: impuesto sobre la renta de personas jurídicas. Historia de reformas, elementos, sujetos y depuración del art. 26 del ET.' },
      ],
    },
    // ----------------------------------------------------------
    // LECCIÓN 2
    // ----------------------------------------------------------
    {
      id: 'm05-l02',
      moduleId: 'm05',
      title: 'Renta de personas jurídicas II: renta líquida, renta presuntiva, anticipo y autorretención',
      indicators: ['i05'],
      objectives: [
        'Diferenciar la renta líquida de la renta presuntiva y explicar por qué hoy la presuntiva es del 0%.',
        'Identificar las rentas exentas del artículo 235-2 del ET y las reglas de compensación de pérdidas fiscales del artículo 147 del ET.',
        'Calcular el anticipo del impuesto sobre la renta del artículo 807 del ET y liquidar una declaración completa de persona jurídica.',
        'Explicar la autorretención especial a título de renta del Decreto 2201 de 2016 y sus tarifas según la actividad económica.',
      ],
      sections: [
        {
          heading: 'La renta líquida y la renta presuntiva: dos bases que se comparan',
          paragraphs: [
            'La base gravable del impuesto de renta es la renta líquida gravable, pero el artículo 188 del ET obliga a compararla con la renta presuntiva: si la presuntiva resulta superior, el contribuyente paga sobre ella. La presuntiva es una renta mínima que la ley presume por el solo hecho de poseer un patrimonio, sin necesidad de probar que produjo ingresos.',
            'La renta presuntiva se calcula aplicando un porcentaje al patrimonio líquido del contribuyente en el último día del año gravable anterior, depurado conforme al artículo 189 del ET. El porcentaje general del artículo 188 es del 3,5%, pero el artículo 90 de la Ley 2010 de 2019 lo redujo al 0,5% para el año gravable 2020 y al 0% a partir del año gravable 2021. En consecuencia, hoy la renta presuntiva de las personas jurídicas es cero.',
          ],
          table: {
            caption: 'Renta presuntiva: porcentajes por año gravable (art. 188 del ET)',
            headers: ['Año gravable', 'Porcentaje sobre patrimonio líquido depurado'],
            rows: [
              ['Hasta 2019', '1,5%'],
              ['2020', '0,5%'],
              ['2021 y siguientes (incluido 2026)', '0%'],
            ],
          },
          callout: {
            type: 'importante',
            text: 'Aunque la renta presuntiva sea 0%, la norma no fue derogada: el artículo 188 sigue en el Estatuto y la liquidación debe comparar las dos bases. Además, los excesos de renta presuntiva generados en 2020 pueden compensarse en los cinco años siguientes (es decir, el año gravable 2025 fue el último periodo para hacerlo).',
          },
        },
        {
          heading: 'Estudio del caso que trae el material: presuntiva del año 2020',
          paragraphs: [
            'El material de estudio liquida la renta presuntiva del año 2020 así: patrimonio líquido declarado $3.110.000.000; se descuenta la participación del 20,06% por valor de $163.726.452, con lo cual la base depurada es $2.946.273.548; se aplica el 0,5% y resulta una renta presuntiva de $14.731.368. Ese valor debía compararse con la renta líquida gravable del ejercicio y pagar sobre la mayor.',
            'Pruébelo: $3.110.000.000 − $163.726.452 = $2.946.273.548; $2.946.273.548 x 0,5% = $14.731.367,74, que se aproxima a $14.731.368. Para 2021 y años siguientes el mismo cálculo arroja cero.',
          ],
        },
        {
          heading: 'Rentas exentas de las personas jurídicas',
          paragraphs: [
            'El artículo 235-2 del ET consagra las rentas exentas aplicables a las personas jurídicas. Entre las más representativas están las de la economía naranja (empresas de industrias creativas y culturales, por siete años), las del sector agropecuario (diez años), las de generación de energía con fuentes no convencionales, las de proyectos de vivienda de interés social y prioritario y las del sector forestal.',
            'La mayoría de estas exenciones está condicionada a crear empleos y a cumplir niveles de inversión que la propia norma expresa en UVT, y exige solicitar la exención ante la DIAN. Las exenciones no operan de manera automática: deben acreditarse dentro del año gravable.',
          ],
          bullets: [
            'Economía naranja: siete años, con umbrales de empleo e inversión en UVT.',
            'Sector agropecuario: diez años desde la solicitud, con tabla de empleos.',
            'Energía a partir de fuentes no convencionales: quince años.',
            'Vivienda de interés social y prioritario (VIS y VIP): hasta 2025 según el diseño de la Ley 2010 de 2019.',
            'Servicios de transporte fluvial con motores de tecnología limpia y aprovechamiento forestal con plantaciones.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'art. 235-2', status: 'vigente', note: 'Adicionado por la Ley 2019 de 2019 y modificado por la Ley 2068 de 2020.' },
        },
        {
          heading: 'Compensación de pérdidas fiscales',
          paragraphs: [
            'Cuando la depuración arroja pérdida fiscal, esta no se pierde: el artículo 147 del ET permite compensarla con las rentas líquidas ordinarias de los doce periodos gravables siguientes, sin perjuicio de la renta presuntiva del ejercicio. La pérdida no es transferible a los socios.',
            'En fusiones y escisiones la compensación tiene límites: la sociedad absorbente solo puede compensar las pérdidas de las sociedades fusionadas en proporción a su participación en el patrimonio, y solo si las actividades económicas de las sociedades intervinientes eran iguales antes del proceso. Las pérdidas originadas en ingresos no constitutivos de renta o en costos y deducciones sin relación de causalidad no son compensables.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Pérdidas fiscales de sociedades: se compensan dentro de los 12 periodos gravables siguientes (art. 147 del ET). La firmeza de la declaración que determina o compensa pérdidas es de 5 años (art. 117 de la Ley 2010 de 2019).',
          },
        },
        {
          heading: 'El anticipo del impuesto sobre la renta',
          paragraphs: [
            'El artículo 807 del ET obliga a pagar, junto con la declaración del año, un anticipo del impuesto del año siguiente equivalente al 75% del impuesto neto de renta del periodo que se declara. Del anticipo así calculado se descuentan las retenciones y autorretenciones que le practicaron al contribuyente durante el año gravable correspondiente al anticipo.',
            'Para contribuyentes nuevos los porcentajes son menores: 25% en el primer año y 50% en el segundo, y 75% a partir del tercero. Si en los tres primeros meses del año los ingresos caen de manera significativa, la ley permite solicitar la reducción del anticipo (arts. 808 y 809 del ET). El anticipo pagado se descuenta del impuesto del año siguiente, de modo que no constituye un mayor impuesto sino un pago anticipado.',
          ],
          callout: {
            type: 'ejemplo',
            text: 'Impuesto neto de renta del año: $500.000.000. Anticipo del año siguiente = 75% x $500.000.000 − retenciones del año ($80.000.000) = $375.000.000 − $80.000.000 = $295.000.000.',
          },
        },
        {
          heading: 'Autorretención especial a título del impuesto sobre la renta',
          paragraphs: [
            'El parágrafo 2 del artículo 365 del ET y el Decreto 2201 de 2016 (compilado en los artículos 1.2.6.6 a 1.2.6.9 del DURT) establecen que las sociedades nacionales y sus asimiladas, los establecimientos permanentes y las personas jurídicas extranjeras que estén exoneradas del pago de aportes parafiscales (art. 114-1 del ET) son autorretenedoras del impuesto sobre la renta. Las entidades sin ánimo de lucro no están obligadas.',
            'La tarifa se determina por la actividad económica principal (código CIIU). El artículo 1.2.6.8 del DURT, sustituido por el Decreto 242 de 2024, fijó tarifas diferenciadas del 0,40%, 0,75%, 1,10% y 1,50%. La autorretención se declara y paga mensualmente en el formulario que señale la DIAN, y el Consejo de Estado (2019) precisó que no hay autorretención para las entidades que conservan la exención del artículo 207-2 del ET.',
          ],
          table: {
            caption: 'Bases y tarifas de la autorretención especial (DURT, arts. 1.2.6.6 a 1.2.6.9)',
            headers: ['Aspecto', 'Regla'],
            rows: [
              ['Quiénes autorretienen', 'Sociedades nacionales y asimiladas, establecimientos permanentes y personas jurídicas extranjeras exoneradas de aportes parafiscales (art. 114-1 del ET)'],
              ['Quiénes no', 'Entidades sin ánimo de lucro y entidades que conservan la exención del art. 207-2 del ET'],
              ['Tarifa', 'Según la actividad económica CIIU: 0,40%, 0,75%, 1,10% o 1,50% (art. 1.2.6.8 del DURT, sustituido por el Decreto 242 de 2024)'],
              ['Base', 'Ingresos brutos realizados en el mes, con las bases especiales del art. 1.2.6.7 del DURT (combustibles, sector financiero, seguros, agrícolas, comercializadoras internacionales, entre otras)'],
              ['Obligación formal', 'Declaración y pago mensual'],
            ],
          },
          norm: { norm: 'Decreto 1625 de 2016 (DURT)', article: 'arts. 1.2.6.6 a 1.2.6.9 (adicionados por el Decreto 2201 de 2016)', status: 'vigente', note: 'Tarifas actualizadas por el Decreto 242 de 2024. Verifique la tarifa del código CIIU de su actividad.' },
        },
      ],
      summary: [
        'La base gravable es la renta líquida gravable, pero debe compararse con la renta presuntiva y tomarse la mayor.',
        'La renta presuntiva es del 0% desde el año gravable 2021 (art. 188 del ET, modificado por la Ley 2010 de 2019).',
        'Las rentas exentas del art. 235-2 del ET (economía naranja, agro, energía, VIS y VIP, forestal) están condicionadas a inversión, empleo y solicitud ante la DIAN.',
        'Las pérdidas fiscales se compensan en los 12 periodos siguientes (art. 147 del ET) y las declaraciones que las determinan tienen firmeza de 5 años.',
        'El anticipo del art. 807 del ET es del 75% del impuesto neto de renta, menos retenciones; 25% el primer año y 50% el segundo.',
        'La autorretención especial a título de renta aplica a sociedades exoneradas de parafiscales, con tarifas del 0,40% al 1,50% según el CIIU.',
      ],
      memorize: [
        'Renta presuntiva: 3,5% general en el art. 188, pero 0,5% en 2020 y 0% desde 2021.',
        'Pérdidas fiscales: 12 periodos gravables siguientes (art. 147 del ET).',
        'Anticipo de renta (art. 807 del ET): 75% del impuesto neto de renta menos retenciones; 25% el primer año y 50% el segundo.',
        'Autorretención especial: arts. 1.2.6.6 a 1.2.6.9 del DURT; tarifas 0,40%, 0,75%, 1,10% y 1,50%.',
        'Bancarización (art. 771-5 del ET): los pagos individuales superiores a 100 UVT deben canalizarse por el sistema financiero para tener efecto fiscal.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: liquidación completa de una persona jurídica (año gravable 2025)',
          paragraphs: [
            'La sociedad Distribuciones del Caribe S.A.S. presenta la siguiente información del año gravable 2025: ingresos brutos $8.000.000.000; devoluciones, rebajas y descuentos $100.000.000; dividendos no constitutivos de renta de sociedades nacionales $400.000.000; costos $4.600.000.000; deducciones $1.200.000.000 (incluida la deducción del 1% por atenciones a clientes del art. 107-1 del ET, que asciende a $79.000.000 y se limita a 1.000 UVT = $49.799.000); pérdida fiscal compensable de un año anterior $200.000.000; descuentos tributarios $25.000.000; retenciones y autorretenciones $80.000.000; anticipo del año anterior $60.000.000.',
            'La renta líquida es $1.700.000.000; al restar las pérdidas compensables queda una renta líquida gravable de $1.500.000.000. La renta presuntiva es cero, de modo que la base definitiva es la renta líquida gravable. El impuesto al 35% es $525.000.000; menos descuentos de $25.000.000, el impuesto neto de renta es $500.000.000.',
            'El anticipo del año siguiente se calcula así: 75% x $500.000.000 = $375.000.000, menos retenciones del año ($80.000.000) = $295.000.000. El total a pagar con la declaración es $360.000.000 (saldo del año) más $295.000.000 (anticipo) = $655.000.000.',
          ],
          table: {
            caption: 'Liquidación privada del año gravable 2025 (cifras en pesos)',
            headers: ['Concepto', 'Valor'],
            rows: [
              ['Ingresos brutos', '$8.000.000.000'],
              ['(−) Devoluciones, rebajas y descuentos', '$100.000.000'],
              ['(=) Ingresos netos', '$7.900.000.000'],
              ['(−) Ingresos no constitutivos de renta (dividendos)', '$400.000.000'],
              ['(=) Renta bruta', '$7.500.000.000'],
              ['(−) Costos', '$4.600.000.000'],
              ['(−) Deducciones', '$1.200.000.000'],
              ['(=) Renta líquida', '$1.700.000.000'],
              ['(−) Pérdidas fiscales compensables (art. 147)', '$200.000.000'],
              ['(=) Renta líquida gravable', '$1.500.000.000'],
              ['Renta presuntiva (0%)', '$0'],
              ['Impuesto sobre la renta (35%)', '$525.000.000'],
              ['(−) Descuentos tributarios', '$25.000.000'],
              ['(=) Impuesto neto de renta', '$500.000.000'],
              ['(−) Retenciones y autorretenciones', '$80.000.000'],
              ['(−) Anticipo del año anterior', '$60.000.000'],
              ['(=) Saldo a pagar del año', '$360.000.000'],
              ['(+) Anticipo del año siguiente (75% de $500.000.000 − $80.000.000)', '$295.000.000'],
              ['(=) Total a pagar con la declaración', '$655.000.000'],
            ],
          },
        },
        {
          heading: 'Ejemplo 2: aplicación del límite de la deducción del 1%',
          paragraphs: [
            'La deducción por atenciones a clientes del artículo 107-1 del ET equivale al 1% de las ventas netas, limitada a 1.000 UVT. En el ejemplo, el 1% de $7.900.000.000 es $79.000.000, pero el tope de 1.000 UVT equivale a $49.799.000 (con UVT de 2025). La sociedad solo puede deducir $49.799.000 por este concepto.',
            'Este es un patrón típico de examen: el cálculo nominal supera el tope legal y debe tomarse el menor. Revise siempre si la partida tiene límite en UVT.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Liquidar la renta presuntiva con el 3,5% porque el artículo 188 lo menciona.',
          correction: 'El porcentaje general del art. 188 fue reducido por la Ley 2010 de 2019: 0,5% en 2020 y 0% desde 2021. Hoy la renta presuntiva es cero.',
        },
        {
          mistake: 'Restar el anticipo del año siguiente como si fuera un descuento del impuesto del año.',
          correction: 'El anticipo del art. 807 del ET es un pago del impuesto del año siguiente que se suma al valor a pagar. Solo el anticipo del año anterior se descuenta, porque ya corresponde al periodo que se declara.',
        },
        {
          mistake: 'Compensar la pérdida fiscal sin límite temporal o transferirla a los socios.',
          correction: 'La pérdida se compensa en los 12 periodos gravables siguientes y no es transferible a los socios (art. 147 del ET).',
        },
        {
          mistake: 'Ignorar la autorretención porque la sociedad no es agente retenedor.',
          correction: 'La autorretención es una obligación propia del contribuyente exonerado de parafiscales; se calcula sobre sus propios ingresos y se paga mensualmente.',
        },
      ],
      norms: [
        { norm: 'Estatuto Tributario', article: 'art. 188', status: 'modificada', note: 'Porcentaje del 3,5% reducido al 0,5% para 2020 y al 0% desde 2021 por el art. 90 de la Ley 2010 de 2019.' },
        { norm: 'Estatuto Tributario', article: 'art. 189', status: 'vigente', note: 'Depuración de la base de la renta presuntiva.' },
        { norm: 'Estatuto Tributario', article: 'art. 235-2', status: 'vigente', note: 'Rentas exentas de personas jurídicas; modificado por la Ley 2068 de 2020.' },
        { norm: 'Estatuto Tributario', article: 'art. 147', status: 'vigente', note: 'Compensación de pérdidas fiscales en los 12 periodos siguientes (modificado por la Ley 1819 de 2016).' },
        { norm: 'Estatuto Tributario', article: 'arts. 807, 808 y 809', status: 'vigente', note: 'Cálculo, reducción general e individual del anticipo de renta.' },
        { norm: 'Decreto 2201 de 2016 (DURT, arts. 1.2.6.6 a 1.2.6.9)', article: '', status: 'vigente', note: 'Autorretención especial a título de renta. Tarifas actualizadas por el Decreto 242 de 2024.' },
        { norm: 'Ley 2010 de 2019', article: 'art. 117 (firmeza de declaraciones con pérdidas)', status: 'vigente', note: 'Firmeza de 5 años.' },
        { norm: 'Estatuto Tributario', article: 'art. 771-5 (bancarización)', status: 'verificar', note: 'Los porcentajes de bancarización han sido modificados varias veces (Ley 1819 de 2016 y Ley 2010 de 2019). Consulte el porcentaje vigente del año gravable antes de aplicar el límite a pagos individuales superiores a 100 UVT.' },
      ],
      links: [
        { label: 'Normograma DIAN: DURT (Decreto 1625 de 2016)', url: 'https://normograma.dian.gov.co/dian/compilacion/docs/pdf/decreto_1625_2016.pdf' },
        { label: 'Estatuto Tributario compilado (Secretaría del Senado)', url: 'https://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'DIAN: impuestos administrados y formularios', url: 'https://www.dian.gov.co/impuestos/Paginas/default.aspx' },
      ],
      mindmap: {
        root: 'Renta de personas jurídicas: base, anticipo y autorretención',
        branches: [
          { label: 'Base gravable', children: ['Renta líquida gravable (art. 26)', 'Renta presuntiva (art. 188): 0% desde 2021', 'Se toma la mayor'] },
          { label: 'Rentas exentas', children: ['Art. 235-2 del ET', 'Economía naranja, agro, energía, VIS y VIP, forestal', 'Requieren inversión, empleo y solicitud'] },
          { label: 'Pérdidas fiscales', children: ['Compensación en 12 periodos (art. 147)', 'Límites en fusiones y escisiones', 'Firmeza de 5 años'] },
          { label: 'Anticipo', children: ['Art. 807 del ET: 75% del impuesto neto', 'Menos retenciones del año', '25% y 50% para contribuyentes nuevos'] },
          { label: 'Autorretención', children: ['DURT arts. 1.2.6.6 a 1.2.6.9', 'Tarifas 0,40% a 1,50% según CIIU', 'Declaración mensual'] },
        ],
      },
      mindmapText:
        'La lección se organiza en cinco ramas. La base gravable compara la renta líquida gravable con la renta presuntiva (hoy 0%) y toma la mayor. Las rentas exentas del artículo 235-2 exigen inversión, empleo y solicitud. Las pérdidas fiscales se compensan en 12 periodos con firmeza de 5 años. El anticipo del artículo 807 equivale al 75% del impuesto neto menos retenciones. La autorretención especial se rige por los artículos 1.2.6.6 a 1.2.6.9 del DURT con tarifas del 0,40% al 1,50%.',
      source: [
        { doc: 'material', pages: 'págs. 216-261', note: 'Unidad 1: renta líquida, renta presuntiva (con ejemplo del año 2020), rentas exentas del art. 235-2, compensación de pérdidas, anticipo y cierre de la liquidación.' },
      ],
      activityId: 'm05-a03',
    },
    // ----------------------------------------------------------
    // LECCIÓN 3
    // ----------------------------------------------------------
    {
      id: 'm05-l03',
      moduleId: 'm05',
      title: 'Entidades sin ánimo de lucro y Régimen Tributario Especial',
      indicators: ['i05'],
      objectives: [
        'Explicar qué es una entidad sin ánimo de lucro y por qué el artículo 19 del ET las trata como no contribuyentes declarantes.',
        'Describir el procedimiento de calificación, permanencia y actualización en el Régimen Tributario Especial (RTE).',
        'Identificar las trece actividades meritorias del artículo 359 del ET y los límites a la distribución indirecta de excedentes.',
        'Liquidar el beneficio neto o excedente y determinar las consecuencias de no invertirlo en el objeto social.',
      ],
      sections: [
        {
          heading: 'Las entidades sin ánimo de lucro (ESAL)',
          paragraphs: [
            'Las entidades sin ánimo de lucro son personas jurídicas constituidas para realizar actividades en beneficio de sus asociados o de la comunidad, sin repartir utilidades entre sus miembros. El artículo 19 del ET las considera no contribuyentes del impuesto sobre la renta, siempre que cumplan las condiciones legales: estar constituidas conforme a la ley, no tener ánimo de lucro y destinar sus excedentes al objeto social sin distribuirlos directa ni indirectamente.',
            'El gran salto normativo se produjo con la Ley 1819 de 2016, que organizó el Régimen Tributario Especial (RTE): las ESAL que quieran gozar del tratamiento preferencial deben calificarse, permanecer y actualizar su información ante la DIAN; quienes incumplan quedan en el régimen tributario general como sociedades comerciales.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Las ESAL del art. 19 del ET son no contribuyentes declarantes: no pagan renta, pero deben declarar y calificarse si quieren pertenecer al Régimen Tributario Especial.',
          },
        },
        {
          heading: 'Requisitos para pertenecer al RTE',
          paragraphs: [
            'La entidad debe estar constituida legalmente, no distribuir excedentes ni remanentes, destinar su patrimonio a fines sociales y desarrollar las actividades meritorias del artículo 359 del ET. Además debe solicitar la calificación en el RUT, actualizarla anualmente y, si supera los 160.000 UVT de ingresos, presentar la memoria económica firmada por el representante legal y el revisor fiscal.',
          ],
          bullets: [
            'Estar legalmente constituida y acreditar su naturaleza sin ánimo de lucro.',
            'No repartir excedentes ni remanentes entre asociados, ni directa ni indirectamente (art. 356-1 del ET).',
            'Desarrollar una o varias actividades meritorias del art. 359 del ET.',
            'Presentar la solicitud de calificación en los términos del DURT (arts. 1.2.1.5.1.7 y siguientes).',
            'Actualizar la calificación en el RUT cada año con la presentación de la declaración (art. 356-3 del ET).',
            'Si los ingresos superan 160.000 UVT, presentar la memoria económica con manifestación del representante legal y del revisor fiscal.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'arts. 356-2 y 356-3', status: 'modificada', note: 'El art. 23 de la Ley 2277 de 2022 modificó el inciso 3 del art. 356-2: si la DIAN advierte que no se acreditó la información, informa para subsanar dentro del mes siguiente; si no se subsana, rechaza la solicitud mediante acto administrativo con recurso de reposición.' },
        },
        {
          heading: 'Las trece actividades meritorias del artículo 359 del ET',
          paragraphs: [
            'La actividad meritoria es el corazón del RTE: solo las entidades que desarrollan actividades de interés general pueden pertenecer a él y recibir el tratamiento preferencial. El artículo 359 del ET enumera trece actividades.',
          ],
          bullets: [
            'Educación y formación para el trabajo.',
            'Salud y salud pública.',
            'Cultura y actividades culturales.',
            'Ciencia, tecnología e innovación.',
            'Desarrollo social (incluye protección a la niñez, la familia y la tercera edad).',
            'Protección al medio ambiente.',
            'Prevención del uso y consumo de sustancias psicoactivas, alcohol y tabaco.',
            'Promoción y apoyo a actividades deportivas.',
            'Desarrollo empresarial y emprendimiento.',
            'Derechos humanos y objetivos globales de la ONU.',
            'Promoción y mejoramiento de la administración de justicia.',
            'Promoción y apoyo a otras ESAL que ejecuten acciones directas en el territorio nacional.',
            'Actividades de microcrédito (adicionada por la Ley 1819 de 2016).',
          ],
          callout: {
            type: 'importante',
            text: 'La página de preguntas frecuentes de la DIAN suele listar doce actividades; el texto legal vigente del art. 359 contiene trece e incluye el microcrédito. Para el examen, la referencia es el texto del Estatuto Tributario.',
          },
        },
        {
          heading: 'Límites a la distribución indirecta de excedentes',
          paragraphs: [
            'El artículo 356-1 del ET evita que las ESAL usen la figura asociativa para favorecer a sus fundadores, asociados o vinculados económicos a través de contratos con precios que no corresponden al mercado. Con ese fin fija reglas de control: los servicios deben pactarse a precios comerciales promedio, los contratos con vinculados económicos deben registrarse ante la DIAN, y las adquisiciones que superen el 30% del gasto total anual (para entidades con ingresos superiores a 3.500 UVT) requieren evaluación previa de dos oferentes.',
            'Si la administración comprueba que no existen esas condiciones, presume la desviación de excedentes: un 25% para entidades con ingresos entre 3.500 y 160.000 UVT y un 15% en los demás casos, presunción que la entidad puede desvirtuar. El artículo 364-2 del ET califica estas prácticas como abuso en materia tributaria.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'arts. 356-1 y 364-2', status: 'vigente', note: 'Reglas de precios comerciales promedio, registro de contratos y comparación de oferentes.' },
        },
        {
          heading: 'Beneficio neto o excedente y su inversión',
          paragraphs: [
            'El artículo 357 del ET y el artículo 1.2.1.5.1.24 del DURT definen el beneficio neto o excedente como la diferencia entre los ingresos y los egresos procedentes del periodo, determinada con un procedimiento de cuatro pasos que arranca de los ingresos del ejercicio, resta los egresos procedentes y los no procedentes, y compara el resultado con el ejercicio anterior.',
            'El artículo 358 del ET exime el beneficio neto o excedente destinado a las actividades meritorias del objeto social. Si el excedente no se invierte en el objeto social, se somete a la tarifa especial del 20% prevista en el artículo 1.2.1.5.1.36 del DURT, que además contiene diez subcasos de aplicación. Los egresos improcedentes también se gravan al 20%. Los ingresos por obra pública se gravan a la tarifa general del impuesto de renta, no a la tarifa especial.',
          ],
          table: {
            caption: 'Tratamiento del excedente de una ESAL del RTE',
            headers: ['Situación', 'Consecuencia tributaria', 'Tarifa'],
            rows: [
              ['Excedente invertido en el objeto social y en actividades meritorias', 'Exento (art. 358 del ET)', '0%'],
              ['Excedente no invertido o egresos improcedentes', 'Gravado', '20%'],
              ['Ingresos por obra pública', 'Gravado', 'Tarifa general del art. 240 del ET (35%)'],
              ['Incumplimiento de requisitos del RTE', 'La DIAN determina la entidad como sociedad comercial (art. 364-3 del ET); pasa al régimen general', '35%'],
            ],
          },
        },
        {
          heading: 'Pérdida del RTE y readmisión',
          paragraphs: [
            'La pertenencia al RTE no es definitiva. La entidad pierde el tratamiento especial si incumple los requisitos, si renuncia voluntariamente o si no presenta la memoria económica cuando está obligada. La consecuencia más grave es la determinación como sociedad comercial (art. 364-3 del ET, modificado por la Ley 2010 de 2019), con paso al régimen general y a la tarifa del 35%.',
            'El DURT regula las consecuencias de la pérdida (art. 1.2.1.5.1.26 y siguientes), el tratamiento de las pérdidas fiscales acumuladas y la posibilidad de readmisión, que exige acreditar de nuevo el cumplimiento de todos los requisitos. El Consejo de Estado (Radicado 23781 de 2019) se pronunció sobre el alcance del procedimiento de calificación y los efectos frente a las entidades que lo incumplen.',
          ],
        },
      ],
      summary: [
        'Las ESAL son no contribuyentes declarantes del impuesto de renta (art. 19 del ET) si están legalmente constituidas, no tienen ánimo de lucro y no distribuyen excedentes.',
        'El RTE exige calificación, permanencia y actualización anual en el RUT, además de la memoria económica si los ingresos superan 160.000 UVT.',
        'El artículo 359 del ET enumera trece actividades meritorias, incluida la actividad de microcrédito.',
        'Los contratos con vinculados se controlan con precios comerciales promedio, registro ante la DIAN y presunciones de desviación del 25% y del 15% (art. 356-1 del ET).',
        'El excedente invertido en el objeto social está exento (art. 358 del ET); el no invertido y los egresos improcedentes se gravan al 20%; la obra pública tributa a la tarifa general.',
        'El incumplimiento puede llevar a que la DIAN determine la entidad como sociedad comercial (art. 364-3 del ET).',
      ],
      memorize: [
        'Art. 19 del ET: constitución legal, ausencia de ánimo de lucro y no distribución de excedentes.',
        'Memoria económica obligatoria cuando los ingresos superan 160.000 UVT (art. 356-3 del ET).',
        'Actividades meritorias: trece, en el art. 359 del ET.',
        'Excedente invertido en el objeto social: exento (art. 358). No invertido o egresos improcedentes: 20%.',
        'Obra pública: tarifa general del impuesto de renta.',
        'Pérdida del RTE: determinación como sociedad comercial (art. 364-3 del ET).',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: liquidación del beneficio neto o excedente',
          paragraphs: [
            'La Fundación Semillas del Futuro, calificada en el RTE, obtuvo en el año ingresos por actividades meritorias de $1.200.000.000 y rendimientos financieros de $60.000.000. Sus costos y gastos procedentes fueron de $900.000.000 y no registró egresos improcedentes.',
            'Beneficio neto o excedente: $1.260.000.000 − $900.000.000 = $360.000.000. De ese valor, invierte $300.000.000 en programas del objeto social y deja $60.000.000 sin invertir.',
            'Exención: $300.000.000 quedan exentos por destinarse al objeto social (art. 358 del ET). El excedente no invertido de $60.000.000 se grava a la tarifa especial del 20%: $60.000.000 x 20% = $12.000.000. Si en lugar de no invertirlo hubiera efectuado egresos improcedentes por ese valor, el resultado fiscal sería el mismo.',
          ],
          table: {
            caption: 'Beneficio neto o excedente del ejemplo',
            headers: ['Concepto', 'Valor'],
            rows: [
              ['Ingresos por actividades meritorias', '$1.200.000.000'],
              ['Ingresos por rendimientos financieros', '$60.000.000'],
              ['(−) Costos y gastos procedentes', '$900.000.000'],
              ['(=) Beneficio neto o excedente', '$360.000.000'],
              ['Invertido en el objeto social (exento)', '$300.000.000'],
              ['No invertido (gravado al 20%)', '$60.000.000'],
              ['Impuesto: $60.000.000 x 20%', '$12.000.000'],
            ],
          },
        },
        {
          heading: 'Ejemplo 2: cuándo se pierde el tratamiento especial',
          paragraphs: [
            'Una ESAL con ingresos de 200.000 UVT no presenta la memoria económica del artículo 356-3 del ET. Como consecuencia, la DIAN puede determinarla como sociedad comercial (art. 364-3). Suponga una renta líquida gravable de $500.000.000: en el RTE habría quedado exenta si se invertía en el objeto social; al pasar al régimen general, tributa al 35% y paga $175.000.000.',
            'La lección práctica es que el tratamiento preferencial es condicional: la sola existencia de fines sociales no exime; hay que acreditar el cumplimiento año a año.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que toda entidad sin ánimo de lucro está automáticamente exenta del impuesto de renta.',
          correction: 'La exención exige pertenecer al RTE mediante calificación y cumplir los requisitos de los arts. 19, 356-1 y siguientes del ET. El incumplimiento lleva al régimen general.',
        },
        {
          mistake: 'Confundir el tratamiento del excedente no invertido (20%) con la tarifa general (35%).',
          correction: 'El excedente no invertido y los egresos improcedentes se gravan al 20% (art. 1.2.1.5.1.36 del DURT); la obra pública y el régimen general tributan al 35%.',
        },
        {
          mistake: 'Pensar que las actividades meritorias son doce y que el microcrédito no cuenta.',
          correction: 'El artículo 359 del ET vigente contiene trece actividades meritorias, incluido el microcrédito.',
        },
        {
          mistake: 'Ignorar el registro de contratos con vinculados económicos.',
          correction: 'El artículo 356-1 del ET exige registrarlos ante la DIAN y aplicar precios comerciales promedio; su ausencia genera presunciones de desviación de excedentes.',
        },
      ],
      norms: [
        { norm: 'Estatuto Tributario', article: 'art. 19', status: 'vigente', note: 'No contribuyentes declarantes; requisitos de las ESAL (modificado por la Ley 1819 de 2016).' },
        { norm: 'Estatuto Tributario', article: 'arts. 356-1, 356-2 y 356-3', status: 'modificada', note: 'El art. 356-2 fue modificado por el art. 23 de la Ley 2277 de 2022 (procedimiento de calificación y rechazo mediante acto administrativo).' },
        { norm: 'Estatuto Tributario', article: 'art. 357 (beneficio neto o excedente)', status: 'vigente', note: 'Reglamentado en el art. 1.2.1.5.1.24 del DURT (procedimiento de cuatro pasos).' },
        { norm: 'Estatuto Tributario', article: 'art. 358', status: 'vigente', note: 'Exención del excedente destinado al objeto social; reglamentado en los arts. 1.2.1.5.1.22 y 1.2.1.5.1.27 del DURT.' },
        { norm: 'Estatuto Tributario', article: 'art. 359', status: 'vigente', note: 'Trece actividades meritorias (adicionado por el art. 151 de la Ley 1819 de 2016).' },
        { norm: 'Estatuto Tributario', article: 'art. 364-3', status: 'modificada', note: 'Modificado por el art. 70 de la Ley 2010 de 2019: consecuencias del incumplimiento (determinación como sociedad comercial).' },
        { norm: 'Decreto 1625 de 2016 (DURT)', article: 'arts. 1.2.1.5.1.7 y siguientes y 1.2.1.5.1.36', status: 'vigente', note: 'Procedimiento de calificación, inversiones y tarifas del RTE (incluida la tarifa especial del 20%).' },
        { norm: 'Ley 1819 de 2016', article: 'arts. 140 a 155 y 151', status: 'vigente', note: 'Diseño del Régimen Tributario Especial.' },
      ],
      links: [
        { label: 'DIAN: Régimen Tributario Especial (RTE)', url: 'https://www.dian.gov.co/impuestos/sociedades/Regimen-Tributario-Especial-RTE/Paginas/default.aspx' },
        { label: 'DIAN: actividades meritorias económicas', url: 'https://www.dian.gov.co/impuestos/sociedades/Regimen-Tributario-Especial-RTE/Actividades-Meritorias-Economicas/Paginas/default.aspx' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
      ],
      mindmap: {
        root: 'ESAL y Régimen Tributario Especial',
        branches: [
          { label: 'Naturaleza', children: ['No contribuyentes declarantes (art. 19)', 'Sin ánimo de lucro', 'Sin distribución de excedentes'] },
          { label: 'Del RTE', children: ['Calificación en el RUT', 'Permanencia y actualización (art. 356-3)', 'Memoria económica: más de 160.000 UVT'] },
          { label: 'Actividades meritorias', children: ['Trece actividades (art. 359)', 'Educación, salud, cultura, ciencia', 'Microcrédito'] },
          { label: 'Límites', children: ['Precios comerciales promedio', 'Registro de contratos con vinculados', 'Presunciones: 25% y 15%'] },
          { label: 'Excedentes', children: ['Invertidos: exentos (art. 358)', 'No invertidos y egresos improcedentes: 20%', 'Obra pública: tarifa general'] },
          { label: 'Pérdida del RTE', children: ['Determinación como sociedad comercial (art. 364-3)', 'Paso al régimen general (35%)', 'Readmisión con requisitos cumplidos'] },
        ],
      },
      mindmapText:
        'El mentefacto de las ESAL tiene seis ramas. La naturaleza las define como no contribuyentes declarantes del artículo 19. El RTE exige calificación, permanencia y actualización, con memoria económica por encima de 160.000 UVT. Las actividades meritorias son trece. Los límites controlan la distribución indirecta de excedentes con precios comerciales promedio y presunciones del 25% y 15%. Los excedentes invertidos están exentos, los no invertidos se gravan al 20% y la obra pública al 35%. La pérdida del RTE conduce al régimen general.',
      source: [
        { doc: 'material', pages: 'págs. 262-316', note: 'Unidad 2: entidades sin ánimo de lucro y Régimen Tributario Especial. Calificación, actividades meritorias, límites, excedentes, tarifas y pérdida del tratamiento.' },
      ],
    },
    // ----------------------------------------------------------
    // LECCIÓN 4
    // ----------------------------------------------------------
    {
      id: 'm05-l04',
      moduleId: 'm05',
      title: 'Renta de personas naturales I: residencia, cédulas y depuración de la cédula general',
      indicators: ['i05'],
      objectives: [
        'Determinar cuándo una persona natural es residente fiscal en Colombia conforme al artículo 10 del ET y explicar las consecuencias tributarias de la residencia.',
        'Reconocer los topes de patrimonio e ingresos que obligan a declarar renta y el sistema cedular del artículo 335 del ET.',
        'Clasificar correctamente los ingresos en las cédulas general (trabajo, capital y no laborales), de pensiones y de dividendos.',
        'Aplicar la depuración de la cédula general: INCRNGO, costos y gastos, deducciones, rentas exentas y el límite del 40% y 1.340 UVT.',
      ],
      sections: [
        {
          heading: 'Quién es residente fiscal en Colombia',
          paragraphs: [
            'La residencia fiscal determina si una persona natural tributa en Colombia por sus rentas de fuente mundial (residente) o únicamente por sus rentas de fuente nacional (no residente). El artículo 10 del ET define como residentes, entre otros casos, a quien permanezca en el país de manera continua o discontinua por más de 183 días en el año calendario; a los nacionales colombianos que tengan su residencia en el país, y a los nacionales que sean funcionarios del Estado y hayan permanecido en el exterior por razón de su cargo.',
            'También se consideran residentes los nacionales que tengan su residencia en el exterior pero cuyo cónyuge o compañero permanente no se haya separado legalmente, o cuyos hijos dependientes, residan en Colombia; y los nacionales que, en el año, obtengan rentas de fuente nacional iguales o superiores al 50% de sus ingresos totales. Existen reglas especiales para quien adquiere la residencia y para quien la pierde, previstas en los parágrafos del artículo 10.',
          ],
          bullets: [
            'Permanencia superior a 183 días en el año calendario.',
            'Nacionales colombianos con residencia en el país.',
            'Funcionarios del Estado colombiano en el exterior por razón de su cargo.',
            'Nacionales con residencia en el exterior cuyo cónyuge o hijos dependientes residan en Colombia.',
            'Nacionales con rentas de fuente nacional iguales o superiores al 50% de sus ingresos totales.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'art. 10', status: 'vigente', note: 'Residencia fiscal de personas naturales. Los no residentes tributan sobre rentas de fuente nacional (arts. 9 y 592-2 del ET).' },
        },
        {
          heading: 'Topes de patrimonio e ingresos para declarar',
          paragraphs: [
            'No toda persona natural está obligada a declarar renta. El Decreto 1625 de 2016 (DURT, art. 1.6.1.13.2.7) fija los topes: patrimonio bruto a 31 de diciembre superior a 4.500 UVT o ingresos brutos en el año superiores a 1.400 UVT. Con la UVT de 2026 ($52.374), esos topes equivalen a $235.683.000 de patrimonio bruto y $73.323.600 de ingresos brutos.',
            'Además, deben declarar quienes sean responsables del IVA, quienes hayan estado obligados a declarar en el año anterior y quienes no estén obligados pero hayan practicado retenciones. En materia de patrimonio, la declaración es obligatoria cuando el patrimonio bruto a 31 de diciembre supera el tope, también expresado en UVT.',
          ],
          callout: {
            type: 'ejemplo',
            text: 'Topes con UVT de 2026 ($52.374): patrimonio bruto mayor a 4.500 UVT = $235.683.000; ingresos brutos mayores a 1.400 UVT = $73.323.600. Con UVT de 2025 ($49.799) los valores eran $224.096.000 y $69.719.000.',
          },
        },
        {
          heading: 'El sistema cedular',
          paragraphs: [
            'Desde la Ley 1607 de 2012 y, sobre todo, con el modelo organizado por la Ley 1819 de 2016, las personas naturales residentes y las sucesiones ilíquidas determinan su impuesto por cédulas. Cada cédula es una canasta de ingresos con reglas propias de depuración y con su propia renta líquida cedular; las cédulas son cuatro: la general, la de pensiones, la de dividendos y participaciones y la de ganancias ocasionales.',
            'La cédula general (art. 335 del ET) agrupa o suma los resultados de las tres subcédulas de rentas de trabajo, rentas de capital y rentas no laborales. Las cédulas no pueden compensarse entre sí: una pérdida de una cédula no se descuenta de la renta de otra, salvo la compensación de pérdidas de la cédula general con ganancias ocasionales en casos especiales previstos en el artículo 340 y las compensaciones de excesos de renta presuntiva, que operan dentro de la cédula general.',
          ],
          table: {
            caption: 'Las cuatro cédulas del sistema de renta de personas naturales',
            headers: ['Cédula', 'Base de la cédula', 'Renta líquida cedular'],
            rows: [
              ['General (art. 335)', 'Rentas de trabajo (art. 103), de capital (arts. 338 y 339) y no laborales (art. 340)', 'Suma de las tres subcédulas con deducciones, exentas y el límite del 40% y 1.340 UVT'],
              ['Pensiones (art. 337)', 'Pensiones y demás ingresos de fuente nacional del art. 206-5', 'Ingresos menos INCRNGO y exenta de 1.000 UVT mensuales'],
              ['Dividendos (art. 342)', 'Dividendos y participaciones (art. 242 del ET)', 'Dividendos no gravados y gravados con las reglas del art. 242 y la tabla del art. 241'],
              ['Ganancias ocasionales', 'Ganancias ocasionales gravables (arts. 300 a 317 del ET)', 'Renta cedular separada; se liquida con la tarifa del 15% (20% para loterías)'],
            ],
          },
        },
        {
          heading: 'Las rentas de la cédula general: trabajo, capital y no laborales',
          paragraphs: [
            'Las rentas de trabajo son los ingresos que recibe la persona por su trabajo personal, en relación laboral o sin ella. El artículo 103 del ET enumera los ingresos de trabajo: los sueldos y demás asignaciones de una relación laboral, las prestaciones sociales, los honorarios y comisiones en ejercicio de profesiones liberales, la representación comercial y las consultas, entre otros.',
            'Las rentas de capital (arts. 338 y 339 del ET) provienen de bienes de los que se deriva un rendimiento: intereses, rendimientos financieros, arrendamientos de bienes muebles e inmuebles, regalías y participaciones, entre otros. Las rentas no laborales (art. 340 del ET) son las que no caben en trabajo, capital o pensiones: las del ejercicio de una actividad comercial, industrial o agropecuaria, los honorarios en actividades distintas a las profesiones liberales, los ingresos por ventas ocasionales de activos fijos y las rentas obtenidas por comisionistas. A las rentas no laborales se aplican las reglas del artículo 336-1 del ET.',
          ],
          bullets: [
            'Trabajo: salarios, honorarios de profesiones liberales, prestaciones sociales, comisiones por representación comercial.',
            'Capital: intereses, rendimientos financieros, arrendamientos, regalías.',
            'No laborales: actividad comercial e industrial, honorarios distintos de las profesiones liberales, ventas ocasionales de activos fijos, comisiones de comisionistas.',
            'Regla especial (art. 336-1): las rentas no laborales se depuran con reglas propias de las rentas de trabajo.',
          ],
        },
        {
          heading: 'Depuración de la cédula general',
          paragraphs: [
            'La depuración de la cédula general (arts. 335 y 336 del ET) parte de la suma de los ingresos de las tres subcédulas, resta los ingresos no constitutivos de renta ni ganancia ocasional, los costos y gastos procedentes y las deducciones especiales, y adiciona las rentas exentas. El resultado es la renta líquida cedular general.',
            'El artículo 336 del ET impone un límite: las rentas exentas y las deducciones (excepto las excepciones del parágrafo 2) no pueden exceder el 40% del resultado que resulte de restar de los ingresos totales los INCRNGO y los costos y gastos, ni superar 1.340 UVT anuales. Con la UVT de 2026, ese tope es $70.181.160.',
            'Dentro de las deducciones típicas están la deducción del 10% de los pagos laborales por dependientes (art. 387 del ET, con tope de 32 UVT mensuales), los intereses de vivienda (art. 119 del ET, hasta 1.200 UVT anuales) y la deducción del 1% por compras con factura electrónica (art. 336 numeral 5, hasta 240 UVT). El parágrafo 2 del artículo 336 excluye del límite la deducción adicional de 72 UVT por dependiente (hasta cuatro) y la del 1% por compras electrónicas.',
          ],
          table: {
            caption: 'Pasos de la depuración de la cédula general',
            headers: ['Paso', 'Concepto', 'Regla'],
            rows: [
              ['1', 'Ingresos de las tres subcédulas', 'Trabajo + capital + no laborales'],
              ['2', '(−) INCRNGO', 'Aportes obligatorios de salud y pensión, entre otros'],
              ['3', '(−) Costos y gastos procedentes', 'Con relación de causalidad y necesidad'],
              ['4', '(−) Deducciones', 'Arts. 387, 119, 336 y otros'],
              ['5', '(−) Rentas exentas', 'Art. 206 del ET'],
              ['6', 'Límite', 'Rentas exentas + deducciones no pueden exceder el 40% del resultado del paso 3 ni 1.340 UVT'],
              ['7', '(=) Renta líquida cedular general', 'Base para sumar las demás cédulas y aplicar el art. 241'],
            ],
          },
        },
        {
          heading: 'Mutua exclusión entre el 25% exento y los costos y gastos',
          paragraphs: [
            'Las personas naturales que obtienen rentas de trabajo por honorarios y las que obtienen rentas no laborales pueden elegir entre deducir los costos y gastos procedentes o aplicar la renta exenta del 25% del artículo 206 numeral 10 del ET. La elección es excluyente: no se puede aplicar el 25% exento sobre los ingresos y además restar los costos y gastos de esos mismos ingresos.',
            'La Ley 2277 de 2022 modificó esta renta exenta: el 25% aplica sobre el valor total de los pagos laborales, una vez detraídos los INCRNGO, las deducciones y las demás rentas exentas diferentes a la del numeral 10, y su tope pasó de 240 UVT mensuales a 790 UVT anuales. El parágrafo 5 del artículo 206 extendió expresamente esta opción a las rentas no laborales del artículo 340. Para los niveles de ingreso de la mayoría de los trabajadores formales, el tope anual de 790 UVT por lo general no se alcanza, mientras que el límite del 40% y 1.340 UVT opera como techo conjunto con las demás exentas y deducciones.',
          ],
          callout: {
            type: 'error',
            text: 'Error frecuente: aplicar el 25% exento sobre los honorarios y además restar los costos y gastos del mismo ingreso. La ley obliga a escoger: o costos y gastos, o el 25% exento, pero no ambos.',
          },
        },
      ],
      summary: [
        'Es residente fiscal quien permanece más de 183 días en el país, entre otros supuestos del artículo 10 del ET; el residente tributa por rentas de fuente mundial.',
        'Deben declarar renta quienes superen 4.500 UVT de patrimonio bruto o 1.400 UVT de ingresos brutos, entre otros supuestos. Con UVT de 2026: $235.683.000 y $73.323.600.',
        'El sistema cedular tiene cuatro cédulas: general (trabajo, capital y no laborales), pensiones, dividendos y ganancias ocasionales; las cédulas no se compensan entre sí.',
        'La cédula general se depura con INCRNGO, costos y gastos, deducciones y rentas exentas, sujetas al límite del 40% y 1.340 UVT.',
        'El 25% exento del artículo 206 numeral 10 y los costos y gastos son mutuamente excluyentes; el tope de la renta exenta es de 790 UVT anuales.',
        'Las deducciones del 10% por dependientes (tope 32 UVT mensuales), los intereses de vivienda (1.200 UVT) y el 1% por compras electrónicas (240 UVT) son las más frecuentes en el examen.',
      ],
      memorize: [
        'Residencia fiscal: más de 183 días en el año calendario (art. 10 del ET).',
        'Topes para declarar (2026): 4.500 UVT de patrimonio ($235.683.000) y 1.400 UVT de ingresos ($73.323.600).',
        'Cédulas: general, pensiones, dividendos y ganancias ocasionales. No se compensan entre sí.',
        'Límite de rentas exentas y deducciones: 40% del resultado y máximo 1.340 UVT anuales ($70.181.160 con UVT de 2026).',
        'Deducción adicional por dependiente: 72 UVT por cada uno, hasta cuatro (fuera del límite).',
        'Deducción del 1% por compras electrónicas: hasta 240 UVT (fuera del límite).',
        'Renta exenta del 25%: 790 UVT anuales; excluyente con costos y gastos.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: depuración de la cédula general de una persona natural',
          paragraphs: [
            'Ana María Gómez es residente fiscal y durante el año gravable 2025 (UVT de $49.799) obtuvo: salarios de $150.000.000 con aportes obligatorios a salud y pensión de $12.000.000; arrendamiento de un local comercial por $60.000.000 con gastos deducibles de $2.000.000; honorarios como conferencista de $90.000.000, para los cuales decide tomar costos y gastos de $20.000.000 en lugar de la renta exenta del 25%. Tiene dos dependientes, pagó intereses de vivienda por $8.000.000 y realizó compras con factura electrónica por $40.000.000.',
            'Ingresos totales: $300.000.000. INCRNGO: $12.000.000. Costos y gastos: $22.000.000 ($2.000.000 de capital + $20.000.000 de honorarios). Resultado previo: $266.000.000.',
            'Deducciones: dependientes del artículo 387 = 10% de $150.000.000 = $15.000.000 (el tope es 32 UVT mensuales = $1.593.568 al mes, equivalentes a $19.122.816 al año, de modo que no limita); intereses de vivienda $8.000.000 (tope 1.200 UVT = $59.758.800); 1% de compras electrónicas = $400.000 (tope 240 UVT = $11.951.760). Renta exenta del 25%: base = $150.000.000 − $12.000.000 − ($15.000.000 + $8.000.000 + $400.000) = $114.600.000; 25% = $28.650.000 (tope 790 UVT = $39.341.210, no limita).',
            'Límite del artículo 336: deducciones más rentas exentas computables = $15.000.000 + $8.000.000 + $28.650.000 = $51.650.000. El 40% del resultado previo es $106.400.000 y el tope de 1.340 UVT es $66.730.660; como $51.650.000 no excede ninguno de los dos, todas las partidas se restan. Deducción adicional por dos dependientes: 2 x 72 UVT = 144 UVT = $7.171.056, que se resta fuera del límite.',
            'Renta líquida cedular general: $266.000.000 − $8.000.000 − $15.000.000 − $400.000 − $28.650.000 − $7.171.056 = $206.778.944.',
          ],
          table: {
            caption: 'Depuración de la cédula general (UVT 2025 = $49.799)',
            headers: ['Concepto', 'Valor'],
            rows: [
              ['Rentas de trabajo (salarios)', '$150.000.000'],
              ['Rentas de capital (arrendamiento)', '$60.000.000'],
              ['Rentas no laborales (honorarios)', '$90.000.000'],
              ['(=) Ingresos totales', '$300.000.000'],
              ['(−) INCRNGO (aportes obligatorios)', '$12.000.000'],
              ['(−) Costos y gastos', '$22.000.000'],
              ['(=) Resultado previo', '$266.000.000'],
              ['(−) Deducción por dependientes (art. 387)', '$15.000.000'],
              ['(−) Intereses de vivienda (art. 119)', '$8.000.000'],
              ['(−) Deducción 1% compras electrónicas', '$400.000'],
              ['(−) Renta exenta del 25%', '$28.650.000'],
              ['(−) Deducción adicional por dependientes (144 UVT)', '$7.171.056'],
              ['(=) Renta líquida cedular general', '$206.778.944'],
            ],
          },
        },
        {
          heading: 'Ejemplo 2: verificación del límite del 40% y 1.340 UVT',
          paragraphs: [
            'Suponga una persona con resultado previo de $266.000.000 y rentas exentas más deducciones de $90.000.000. El 40% del resultado previo es $106.400.000, pero el tope de 1.340 UVT con UVT de 2025 es $66.730.660. Como $90.000.000 supera el tope menor, solo se puede restar $66.730.660 y la renta líquida cedular general será $266.000.000 − $66.730.660 = $199.269.340.',
            'Note que el límite nunca se calcula sobre los ingresos brutos sino sobre el resultado previo (ingresos menos INCRNGO menos costos y gastos). Es la confusión más común en los talleres de liquidación.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Aplicar el 25% exento y además restar los costos y gastos de los honorarios.',
          correction: 'La opción es excluyente: se toman costos y gastos o el 25% exento, no ambos. El parágrafo 5 del art. 206 del ET lo exige también para las rentas no laborales.',
        },
        {
          mistake: 'Calcular el límite del 40% sobre los ingresos brutos.',
          correction: 'El límite se calcula sobre el resultado previo: ingresos totales menos INCRNGO menos costos y gastos. Además, nunca puede superar 1.340 UVT anuales.',
        },
        {
          mistake: 'Compensar la pérdida de una cédula con la renta de otra.',
          correction: 'Las cédulas son independientes y no se compensan entre sí; las pérdidas se imputan dentro de la cédula general conforme a las reglas de los arts. 330 y siguientes del ET.',
        },
        {
          mistake: 'Contar dentro del límite la deducción adicional de 72 UVT por dependiente o la del 1% por compras electrónicas.',
          correction: 'El parágrafo 2 del art. 336 del ET las excluye expresamente del límite del 40% y 1.340 UVT.',
        },
      ],
      norms: [
        { norm: 'Estatuto Tributario', article: 'art. 10', status: 'vigente', note: 'Residencia fiscal: permanencia superior a 183 días y demás supuestos.' },
        { norm: 'Estatuto Tributario', article: 'art. 335', status: 'vigente', note: 'Cédula general y límite del 40% y 1.340 UVT (tope de UVT reducido por el art. 7 de la Ley 2277 de 2022, que pasó de 5.040 a 1.340 UVT).' },
        { norm: 'Estatuto Tributario', article: 'art. 336', status: 'vigente', note: 'Depuración de la cédula general; parágrafo 2: deducciones excluidas del límite (72 UVT por dependiente, 1% de compras electrónicas).' },
        { norm: 'Estatuto Tributario', article: 'arts. 103, 338, 339 y 340', status: 'vigente', note: 'Rentas de trabajo, de capital y no laborales.' },
        { norm: 'Estatuto Tributario', article: 'art. 206 numeral 10 y parágrafo 5', status: 'modificada', note: 'El art. 2 de la Ley 2277 de 2022 fijó el tope de la renta exenta del 25% en 790 UVT anuales (antes 240 UVT mensuales) y extendió la opción a las rentas no laborales.' },
        { norm: 'Estatuto Tributario', article: 'arts. 387 y 119', status: 'modificada', note: 'El art. 387 fue modificado por la Ley 2411 de 2024 (parágrafo 2); los intereses de vivienda tienen tope de 1.200 UVT anuales.' },
        { norm: 'Decreto 1625 de 2016 (DURT)', article: 'art. 1.6.1.13.2.7', status: 'vigente', note: 'Topes para declarar renta: 4.500 UVT de patrimonio bruto y 1.400 UVT de ingresos brutos.' },
      ],
      links: [
        { label: 'DIAN: renta personas naturales', url: 'https://www.dian.gov.co/impuestos/personas/Paginas/default.aspx' },
        { label: 'Estatuto Tributario compilado (Secretaría del Senado)', url: 'https://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
      ],
      mindmap: {
        root: 'Renta de personas naturales: residencia y cédula general',
        branches: [
          { label: 'Residencia', children: ['Más de 183 días (art. 10)', 'Rentas de fuente mundial', 'No residente: fuente nacional'] },
          { label: 'Obligación de declarar', children: ['4.500 UVT de patrimonio', '1.400 UVT de ingresos', 'Con UVT 2026: $235.683.000 y $73.323.600'] },
          { label: 'Cédulas', children: ['General (art. 335)', 'Pensiones (art. 337)', 'Dividendos (art. 342)', 'Ganancias ocasionales'] },
          { label: 'Cédula general', children: ['Rentas de trabajo (art. 103)', 'Rentas de capital (arts. 338 y 339)', 'Rentas no laborales (art. 340)'] },
          { label: 'Depuración y límites', children: ['INCRNGO y costos y gastos', 'Deducciones: arts. 387, 119 y 336-5', 'Rentas exentas (art. 206)', 'Límite: 40% y 1.340 UVT'] },
          { label: 'Elección clave', children: ['Costos y gastos', 'O renta exenta del 25% (790 UVT)', 'Nunca las dos'] },
        ],
      },
      mindmapText:
        'El mentefacto arranca con la residencia fiscal (más de 183 días, art. 10) y sus efectos. La segunda rama recuerda los topes para declarar: 4.500 UVT de patrimonio y 1.400 UVT de ingresos. La tercera enumera las cuatro cédulas. La cuarta desglosa la cédula general en trabajo, capital y no laborales. La quinta recorre la depuración: INCRNGO, costos y gastos, deducciones, rentas exentas y el límite del 40% y 1.340 UVT. La sexta fija la elección excluyente entre costos y gastos o la renta exenta del 25% de 790 UVT.',
      source: [
        { doc: 'material', pages: 'págs. 317-350', note: 'Unidad 3: renta de personas naturales. Residencia, topes de declaración, sistema cedular, rentas de trabajo, capital y no laborales, y depuración de la cédula general.' },
      ],
      activityId: 'm05-a01',
    },
    // ----------------------------------------------------------
    // LECCIÓN 5
    // ----------------------------------------------------------
    {
      id: 'm05-l05',
      moduleId: 'm05',
      title: 'Renta de personas naturales II: pensiones, dividendos, rentas exentas y tarifas',
      indicators: ['i05'],
      objectives: [
        'Liquidar la cédula de pensiones aplicando la renta exenta de 1.000 UVT mensuales del artículo 206 numeral 5 del ET.',
        'Explicar la tributación de los dividendos de personas naturales residentes después de la Ley 2277 de 2022: tabla del artículo 241, descuento del artículo 254-1 y retención en la fuente.',
        'Identificar las principales rentas exentas y deducciones de la cédula general y sus topes en UVT.',
        'Aplicar la tabla del artículo 241 del ET para liquidar el impuesto de una persona natural residente.',
      ],
      sections: [
        {
          heading: 'La cédula de pensiones',
          paragraphs: [
            'El artículo 337 del ET crea la cédula de pensiones: los contribuyentes residentes que reciban ingresos por pensiones de fuente nacional determinan allí su renta líquida cedular, sin sumarla con las demás cédulas. La base de esta cédula está conformada por las pensiones y los demás ingresos previstos en el artículo 206 numeral 5 del ET.',
            'El numeral 5 del artículo 206 del ET consagra la renta exenta de las pensiones: están exentas las pensiones de jubilación, invalidez, vejez, sobrevivientes y riesgos profesionales, hasta 1.000 UVT mensuales (12.000 UVT al año). Con la UVT de 2026, la exención mensual equivale a $52.374.000. Si la mesada supera ese tope, el exceso, convertido a UVT, constituye la renta líquida gravable de la cédula de pensiones y tributa con la tabla del artículo 241.',
            'La Ley 2381 de 2024 (reforma pensional) mantuvo la estructura del beneficio y la DIAN se pronunció en el Concepto 6606 de 2024 sobre su aplicación. Las pensiones de fuente extranjera no están cubiertas por esta cédula y se someten a las reglas del artículo 337 en armonía con los convenios de doble tributación y las disposiciones sobre rentas de fuente extranjera.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Pensiones (art. 206 numeral 5 del ET): exentas hasta 1.000 UVT mensuales = 12.000 UVT al año. Con UVT de 2026: $52.374.000 al mes y $628.488.000 al año.',
          },
        },
        {
          heading: 'La cédula de dividendos y participaciones',
          paragraphs: [
            'El artículo 342 del ET ordena formar una cédula separada, la de dividendos y participaciones, con los ingresos que las personas naturales residentes perciben de la distribución de utilidades de sociedades nacionales. La Ley 2277 de 2022 cambió de manera sustancial este régimen: modificó el artículo 242 y adicionó el artículo 254-1.',
            'Regla vigente para dividendos no gravados (provenientes de utilidades que no fueron gravadas en cabeza de la sociedad, según el numeral 3 del artículo 49 del ET): la renta líquida cedular de dividendos se suma a las demás rentas y se liquida con la tabla del artículo 241 del ET. El artículo 254-1 permite descontar del impuesto el 19% sobre el exceso de 1.090 UVT de esa renta cedular de dividendos (descuento marginal con redondeo de la base). En la fuente, la retención es del 15% sobre el exceso de 1.090 UVT.',
            'Para los dividendos gravados (remanentes de utilidades que sí fueron gravadas en cabeza de la sociedad, parágrafo 2 del artículo 49 del ET), el socio calcula el impuesto aplicando la tabla del artículo 240 (35%) al valor del dividendo y solo el remanente, si lo hay, se suma a la renta líquida cedular de dividendos y se liquida con la tabla del artículo 241, con el descuento del artículo 254-1 cuando corresponda.',
          ],
          table: {
            caption: 'Tributación de dividendos de personas naturales residentes (desde 2023)',
            headers: ['Tipo de dividendo', 'Tarifa', 'Descuento y retención'],
            rows: [
              ['No gravado (utilidades no gravadas en la sociedad)', 'Tabla del art. 241 del ET (base progresiva)', 'Descuento del 19% sobre el exceso de 1.090 UVT (art. 254-1); retención del 15% sobre el exceso de 1.090 UVT'],
              ['Gravado (utilidades ya gravadas en la sociedad)', 'Tarifa del art. 240 del ET (35%) y tabla del art. 241 sobre el remanente', 'Aplica el descuento del art. 254-1 sobre la renta cedular de dividendos'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'El material de estudio se redactó con la tabla anterior de dividendos (0% hasta 300 UVT y 10% sobre el exceso). Ese esquema ya no rige: la Ley 2277 de 2022 lo sustituyó por la tabla del art. 241 con el descuento del 19% del art. 254-1.',
          },
        },
        {
          heading: 'Rentas exentas de la cédula general',
          paragraphs: [
            'El artículo 206 del ET enumera las rentas exentas aplicables a las personas naturales. Además del 25% de los pagos laborales y de la exención de pensiones, las más relevantes en la liquidación son las siguientes.',
          ],
          bullets: [
            'Cesantías e intereses sobre cesantías: exentos al 100% si el ingreso promedio mensual de los últimos seis meses no supera 350 UVT; entre 350 y 650 UVT aplica una tabla gradual (90%, 80%, 60%, 40% y 20%) y desde 650 UVT no hay exención.',
            'Aportes a fondos de pensiones voluntarios y cuentas AFC (arts. 126-1 y 126-4 del ET): exentos o deducibles hasta el 30% del ingreso laboral o tributario del año, con tope de 3.800 UVT anuales, sujetos a permanencia de 10 años.',
            'Aportes obligatorios a salud y pensión: no son renta (son INCRNGO), por lo que no consumen el límite del 40%.',
            'Indemnizaciones por seguros de vida, gastos de entierro y seguros por accidentes: exentas en los términos del numeral 4 del artículo 206 del ET.',
            'Becas de estudio y apoyos económicos condicionados a programas de educación: exentos.',
            'Rentas de la economía naranja para personas naturales y derechos de autor: exentos con las condiciones del artículo 206 numeral 13 del ET.',
            'Venta de bienes raíces para fines de vivienda (Ley 2010 de 2019) y aprovechamiento ecológico: reglas especiales de exención.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'art. 206', status: 'modificada', note: 'Los numerales 4, 5 y 10 fueron reescritos por los arts. 4, 2 y siguientes de la Ley 2277 de 2022. El numeral 5 (pensiones) conserva el tope de 1.000 UVT mensuales. Revise el texto vigente de cada numeral.' },
        },
        {
          heading: 'Deducciones y límite conjunto',
          paragraphs: [
            'Las deducciones de la cédula general más usadas son: la del 10% de los pagos laborales por dependientes (art. 387 del ET, hasta 32 UVT mensuales), los intereses de vivienda (art. 119 del ET, hasta 1.200 UVT anuales) y la deducción del 1% por compras con facturación electrónica (art. 336 numeral 5, hasta 240 UVT). A ellas se suma la deducción adicional de 72 UVT por cada dependiente, hasta cuatro, del artículo 336 numeral 3.',
            'Todas las rentas exentas y deducciones de la cédula general, salvo las excluidas por el parágrafo 2 del artículo 336, están sujetas al límite conjunto: no pueden exceder el 40% del resultado previo (ingresos totales menos INCRNGO menos costos y gastos) ni 1.340 UVT anuales. Con UVT de 2026, el tope absoluto es $70.181.160.',
          ],
          table: {
            caption: 'Topes y cuantías clave de la cédula general (UVT 2026 = $52.374)',
            headers: ['Concepto', 'Norma', 'Límite en UVT', 'Valor en pesos'],
            rows: [
              ['Límite conjunto de exentas y deducciones', 'Art. 336 del ET', '40% / 1.340 UVT', '$70.181.160'],
              ['Renta exenta del 25% de pagos laborales', 'Art. 206 num. 10', '790 UVT anuales', '$41.375.460'],
              ['Exención de pensiones', 'Art. 206 num. 5', '1.000 UVT mensuales', '$52.374.000'],
              ['Deducción por dependientes (10%)', 'Art. 387 del ET', '32 UVT mensuales', '$1.675.968'],
              ['Deducción adicional por dependiente', 'Art. 336 num. 3', '72 UVT por dependiente', '$3.770.928'],
              ['Intereses de vivienda', 'Art. 119 del ET', '1.200 UVT anuales', '$62.848.800'],
              ['Deducción del 1% por compras electrónicas', 'Art. 336 num. 5', '240 UVT anuales', '$12.569.760'],
              ['Aportes a pensiones voluntarias y AFC', 'Arts. 126-1 y 126-4', '30% del ingreso / 3.800 UVT', '$199.021.200'],
            ],
          },
        },
        {
          heading: 'La tabla del artículo 241 del ET',
          paragraphs: [
            'La renta líquida gravable de las personas naturales residentes (y de las sucesiones ilíquidas) se liquida con la tabla del artículo 241 del ET, que es marginal y progresiva. Para 2026 la tabla no ha cambiado y se aplica así:',
          ],
          table: {
            caption: 'Tarifa marginal del artículo 241 del ET (vigente)',
            headers: ['Rango de renta líquida gravable (UVT)', 'Tarifa marginal', 'Impuesto sobre el límite inferior (UVT)'],
            rows: [
              ['0 a 1.090', '0%', '0'],
              ['Más de 1.090 hasta 1.700', '19%', '0'],
              ['Más de 1.700 hasta 4.100', '28%', '116'],
              ['Más de 4.100 hasta 8.670', '33%', '788'],
              ['Más de 8.670 hasta 18.970', '35%', '2.296'],
              ['Más de 18.970 hasta 31.000', '37%', '5.901'],
              ['Más de 31.000', '39%', '10.352'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Fórmula de la tabla del art. 241: impuesto = (renta líquida gravable en UVT − límite inferior del rango) x tarifa marginal + impuesto del límite inferior. El resultado se multiplica por el valor de la UVT.',
          },
        },
      ],
      summary: [
        'La cédula de pensiones solo incluye pensiones de fuente nacional; la exención es de 1.000 UVT mensuales (12.000 UVT anuales) por el artículo 206 numeral 5.',
        'Los dividendos no gravados se liquidan con la tabla del artículo 241 y otorgan un descuento del 19% sobre el exceso de 1.090 UVT (art. 254-1), con retención del 15% sobre ese mismo exceso.',
        'Los dividendos gravados se someten a la tarifa del artículo 240 (35%) y el remanente a la tabla del artículo 241.',
        'Las rentas exentas del artículo 206 incluyen el 25% de los pagos laborales (790 UVT anuales), las cesantías con escala por niveles de ingreso y los aportes voluntarios y AFC (hasta 3.800 UVT).',
        'Las rentas exentas y deducciones de la cédula general tienen límite conjunto del 40% y 1.340 UVT; la deducción de 72 UVT por dependiente y el 1% de compras electrónicas están fuera del límite.',
        'La tabla del artículo 241 es marginal, con siete rangos que van del 0% al 39%.',
      ],
      memorize: [
        'Pensiones exentas: 1.000 UVT mensuales (art. 206 num. 5 del ET).',
        'Dividendos no gravados: tabla del art. 241 + descuento del 19% sobre el exceso de 1.090 UVT + retención del 15%.',
        'Renta exenta del 25%: 790 UVT anuales.',
        'Cesantías: exentas si el ingreso promedio de los últimos seis meses no supera 350 UVT; escala de 90% a 20% entre 350 y 650 UVT; 0% desde 650 UVT.',
        'AFC y pensiones voluntarias: 30% del ingreso, tope 3.800 UVT anuales.',
        'Tabla del art. 241: 0%, 19%, 28% + 116 UVT, 33% + 788 UVT, 35% + 2.296 UVT, 37% + 5.901 UVT, 39% + 10.352 UVT.',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: cédula de pensiones',
          paragraphs: [
            'Un pensionado residente recibe una mesada mensual de $62.848.800 (equivalente a 1.200 UVT de 2026). La exención del artículo 206 numeral 5 cubre 1.000 UVT mensuales ($52.374.000), de modo que el exceso gravado es de 200 UVT al mes ($10.474.800).',
            'Renta líquida cedular de pensiones del año: 200 UVT x 12 = 2.400 UVT = $125.697.600. Con las demás cédulas en cero, la renta líquida gravable es $125.697.600 (2.400 UVT).',
            'Impuesto con la tabla del artículo 241: rango más de 1.700 hasta 4.100 UVT: (2.400 − 1.700) x 28% + 116 UVT = 700 x 0,28 + 116 = 196 + 116 = 312 UVT. Impuesto = 312 x $52.374 = $16.340.688.',
          ],
          table: {
            caption: 'Liquidación del ejemplo de pensiones',
            headers: ['Concepto', 'UVT', 'Pesos'],
            rows: [
              ['Mesada mensual', '1.200', '$62.848.800'],
              ['(−) Exención art. 206 num. 5 (mensual)', '1.000', '$52.374.000'],
              ['(=) Exceso gravado mensual', '200', '$10.474.800'],
              ['Renta líquida cedular anual', '2.400', '$125.697.600'],
              ['Impuesto: (2.400 − 1.700) x 28% + 116 = 312 UVT', '312', '$16.340.688'],
            ],
          },
        },
        {
          heading: 'Ejemplo 2: dividendo no gravado con descuento del artículo 254-1',
          paragraphs: [
            'Carlos es residente y recibe un dividendo no gravado de $209.496.000 (4.000 UVT de 2026). Su cédula general arroja una renta líquida cedular de $52.374.000 (1.000 UVT) y no tiene rentas de pensiones.',
            'Renta líquida gravable total: 1.000 UVT (general) + 4.000 UVT (dividendos) = 5.000 UVT = $261.870.000. Impuesto con la tabla del artículo 241: (5.000 − 4.100) x 33% + 788 UVT = 900 x 0,33 + 788 = 297 + 788 = 1.085 UVT = $56.825.790.',
            'Descuento del artículo 254-1: 19% sobre el exceso de 1.090 UVT de la renta cedular de dividendos = (4.000 − 1.090) x 19% = 2.910 x 0,19 = 552,9 UVT = $28.957.585. Impuesto neto: $56.825.790 − $28.957.585 = $27.868.205.',
            'Retención en la fuente que le practicaron: 15% sobre el exceso de 1.090 UVT = 2.910 UVT x 15% = 436,5 UVT = $22.861.251. Saldo a pagar: $27.868.205 − $22.861.251 = $5.006.954.',
          ],
          table: {
            caption: 'Liquidación del ejemplo de dividendos (UVT 2026 = $52.374)',
            headers: ['Concepto', 'UVT', 'Pesos'],
            rows: [
              ['Renta líquida cedular general', '1.000', '$52.374.000'],
              ['Renta líquida cedular de dividendos', '4.000', '$209.496.000'],
              ['(=) Renta líquida gravable', '5.000', '$261.870.000'],
              ['Impuesto: (5.000 − 4.100) x 33% + 788 = 1.085 UVT', '1.085', '$56.825.790'],
              ['(−) Descuento art. 254-1: (4.000 − 1.090) x 19% = 552,9 UVT', '552,9', '$28.957.585'],
              ['(=) Impuesto neto de renta', '533,1', '$27.868.205'],
              ['(−) Retención en la fuente: 2.910 x 15% = 436,5 UVT', '436,5', '$22.861.251'],
              ['(=) Saldo a pagar', '96,6', '$5.006.954'],
            ],
          },
        },
      ],
      commonMistakes: [
        {
          mistake: 'Aplicar a los dividendos la tabla antigua de 0% hasta 300 UVT y 10% sobre el exceso.',
          correction: 'Ese esquema fue sustituido por la Ley 2277 de 2022: hoy los dividendos no gravados se liquidan con la tabla del art. 241 y otorgan el descuento del 19% del art. 254-1 sobre el exceso de 1.090 UVT.',
        },
        {
          mistake: 'Sumar la cédula de pensiones con la cédula general.',
          correction: 'El art. 337 del ET ordena liquidar la cédula de pensiones de forma independiente; su resultado se suma a las demás rentas solo para aplicar la tabla del art. 241 como renta cedular separada.',
        },
        {
          mistake: 'Calcular la exención de pensiones en UVT del año anterior o sobre la base anual.',
          correction: 'La exención es mensual (1.000 UVT al mes) y se aplica mesada por mesada con la UVT del respectivo mes; el valor anual equivale a 12.000 UVT.',
        },
        {
          mistake: 'Incluir los aportes obligatorios a salud y pensión dentro del cálculo del límite del 40%.',
          correction: 'Los aportes obligatorios son INCRNGO: se restan antes y no consumen el límite del art. 336 del ET.',
        },
      ],
      norms: [
        { norm: 'Estatuto Tributario', article: 'art. 337', status: 'vigente', note: 'Cédula de pensiones; se liquida de forma independiente.' },
        { norm: 'Estatuto Tributario', article: 'art. 206 numeral 5', status: 'vigente', note: 'Exención de pensiones: 1.000 UVT mensuales. Confirmado por la Ley 2381 de 2024 y el Concepto DIAN 6606 de 2024.' },
        { norm: 'Estatuto Tributario', article: 'art. 242', status: 'modificada', note: 'Modificado por el art. 3 de la Ley 2277 de 2022: dividendos de residentes sujetos a la tabla del art. 241.' },
        { norm: 'Estatuto Tributario', article: 'art. 254-1', status: 'vigente', note: 'Adicionado por el art. 5 de la Ley 2277 de 2022: descuento del 19% sobre el exceso de 1.090 UVT de la renta cedular de dividendos.' },
        { norm: 'Estatuto Tributario', article: 'art. 241', status: 'vigente', note: 'Tabla de tarifa marginal de personas naturales residentes (0% a 39%).' },
        { norm: 'Estatuto Tributario', article: 'art. 206 numerales 4 y 10', status: 'modificada', note: 'Modificados por la Ley 2277 de 2022: cesantías con escala por nivel de ingreso y renta exenta del 25% con tope de 790 UVT anuales.' },
        { norm: 'Estatuto Tributario', article: 'arts. 126-1 y 126-4', status: 'vigente', note: 'Aportes a pensiones voluntarias y AFC: 30% del ingreso con tope de 3.800 UVT anuales y permanencia de 10 años.' },
        { norm: 'Ley 2277 de 2022', article: 'arts. 2, 3, 5, 7 y 8', status: 'vigente', note: 'Reforma del régimen de renta de personas naturales.' },
      ],
      links: [
        { label: 'DIAN: renta personas naturales', url: 'https://www.dian.gov.co/impuestos/personas/Paginas/default.aspx' },
        { label: 'Estatuto Tributario compilado (Secretaría del Senado)', url: 'https://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
      ],
      mindmap: {
        root: 'Renta de personas naturales: pensiones, dividendos y tarifas',
        branches: [
          { label: 'Cédula de pensiones', children: ['Solo fuente nacional (art. 337)', 'Exenta: 1.000 UVT mensuales', 'Exceso gravado a la tabla del art. 241'] },
          { label: 'Dividendos', children: ['No gravados: tabla del art. 241', 'Descuento del 19% (art. 254-1)', 'Retención del 15% sobre 1.090 UVT'] },
          { label: 'Rentas exentas', children: ['25% laboral: 790 UVT anuales', 'Cesantías: escala 350 a 650 UVT', 'AFC y voluntarios: 3.800 UVT'] },
          { label: 'Deducciones y límite', children: ['Dependientes: 10% (32 UVT al mes)', 'Intereses de vivienda: 1.200 UVT', 'Límite conjunto: 40% y 1.340 UVT'] },
          { label: 'Tarifa', children: ['Tabla del art. 241', 'Siete rangos: 0% a 39%', 'Impuesto = exceso x tarifa + UVT del límite inferior'] },
        ],
      },
      mindmapText:
        'La lección se resume en cinco ramas. La cédula de pensiones es independiente y su exención es de 1.000 UVT mensuales. Los dividendos no gravados se liquidan con la tabla del artículo 241, con descuento del 19% sobre el exceso de 1.090 UVT y retención del 15%. Las rentas exentas principales son el 25% laboral (790 UVT), las cesantías con escala y los aportes a AFC y voluntarios (3.800 UVT). El límite conjunto de exentas y deducciones es del 40% y 1.340 UVT. La tarifa es la tabla marginal del artículo 241, con siete rangos del 0% al 39%.',
      source: [
        { doc: 'material', pages: 'págs. 351-367', note: 'Unidad 3: cédula de pensiones, cédula de dividendos, rentas exentas, deducciones, límites y tabla de tarifas del art. 241.' },
      ],
    },
    // ----------------------------------------------------------
    // LECCIÓN 6
    // ----------------------------------------------------------
    {
      id: 'm05-l06',
      moduleId: 'm05',
      title: 'Ganancia ocasional: hechos generadores, clases, depuración y tarifas',
      indicators: ['i05'],
      objectives: [
        'Identificar los hechos generadores de la ganancia ocasional: venta de activos fijos poseídos dos años o más, herencias y legados, donaciones, loterías y seguros de vida.',
        'Clasificar la ganancia ocasional en ingreso, costo, ganancia no gravada y ganancia gravable.',
        'Aplicar las exenciones del artículo 307 del ET con los valores en UVT vigentes después de la Ley 2277 de 2022.',
        'Liquidar la ganancia ocasional gravable con la tarifa del 15% y la del 20% aplicable a loterías, rifas y apuestas.',
      ],
      sections: [
        {
          heading: 'El hecho generador de la ganancia ocasional',
          paragraphs: [
            'La ganancia ocasional es un concepto tributario autónomo: es la utilidad que la ley grava de manera separada del sistema ordinario porque no proviene de la actividad productiva habitual del contribuyente. Su estudio se apoya en cuatro bloques de artículos del Estatuto Tributario.',
          ],
          bullets: [
            'Artículo 300: son ganancias ocasionales las provenientes de la enajenación de bienes de cualquier naturaleza que hayan poseído el contribuyente por dos años o más. El plazo se cuenta desde la fecha de adquisición hasta la fecha de la venta y aplica a los activos fijos, no a los bienes del inventario.',
            'Artículo 302: las herencias, legados y donaciones constituyen ganancia ocasional para quien los recibe. El ingreso es el valor de los bienes recibidos.',
            'Artículo 304: las loterías, rifas, apuestas y similares generan ganancia ocasional para el ganador.',
            'Artículo 303-1: las indemnizaciones por seguros de vida generan ganancia ocasional, con la exención que la ley señala.',
            'Artículo 306-1: los premios obtenidos en apuestas y concursos hípicos o caninos solo quedan sometidos al impuesto cuando superan 410 UVT.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'arts. 300, 302, 303-1, 304 y 306-1', status: 'vigente', note: '' },
        },
        {
          heading: 'Las clases de ganancia ocasional',
          paragraphs: [
            'La liquidación se ordena en cuatro conceptos: el ingreso por ganancia ocasional (el valor recibido), el costo por ganancia ocasional (el costo fiscal del bien enajenado, cuando hay lugar a él), la ganancia ocasional no gravada o exenta y la ganancia ocasional gravable, que resulta de restar del ingreso el costo y las exenciones.',
            'En la enajenación de activos fijos, el costo por ganancia ocasional corresponde al costo fiscal del bien, ajustado por depreciación, amortización o valorizaciones, según las reglas generales del Estatuto. En herencias y legados el ingreso es el valor de los bienes recibidos y debe verificarse el costo fiscal aplicable conforme al artículo 302 y sus parágrafos.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Ecuación de la ganancia ocasional: ingreso por ganancia ocasional − costo por ganancia ocasional − ganancia ocasional exenta = ganancia ocasional gravable. Sobre ella se aplica la tarifa (15% general).',
          },
        },
        {
          heading: 'Exenciones del artículo 307 del ET',
          paragraphs: [
            'El artículo 307 del ET consagra las exenciones de la ganancia ocasional por herencias, legados, donaciones y porción conyugal. La Ley 2277 de 2022 reescribió el artículo y ajustó sus cuantías, que hoy se expresan así:',
          ],
          table: {
            caption: 'Exenciones del artículo 307 del ET (Ley 2277 de 2022, art. 30)',
            headers: ['Situación', 'Exención en UVT', 'Valor en pesos con UVT 2026'],
            rows: [
              ['Inmueble urbano o rural que corresponda a la vivienda de habitación del causante y hasta el valor de la misma', '13.000 UVT', '$680.862.000'],
              ['Demás inmuebles del causante (segunda vivienda, locales, lotes)', '6.500 UVT', '$340.431.000'],
              ['Asignaciones por concepto de herencia, legado o porción conyugal, por cada beneficiario', '3.250 UVT', '$170.215.500'],
              ['Donaciones y asignaciones a personas distintas de legitimarios (hijos, padres, cónyuge), con el límite del 20% del valor y tope', '1.625 UVT (20% del valor)', '$85.111.500'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'El material de estudio cita las cuantías de la Ley 2010 de 2019 (7.700, 7.700, 3.490 y 2.290 UVT). La Ley 2277 de 2022 fijó las actuales: 13.000, 6.500, 3.250 y 1.625 UVT. Para el examen debe usar las cuantías vigentes.',
          },
        },
        {
          heading: 'Otras exenciones: seguros de vida y venta de vivienda',
          paragraphs: [
            'El artículo 303-1 del ET exime de ganancia ocasional las indemnizaciones por seguros de vida hasta 3.250 UVT; la Ley 2277 de 2022 redujo la exención (antes 12.500 UVT) y la Corte Constitucional encontró exequible la reducción en 2025. Todo lo que exceda la exención se grava con la tarifa general del 15%.',
            'El artículo 311-1 del ET exime la utilidad en la venta de la casa de habitación, siempre que se cumplan los requisitos de la norma: que el inmueble se haya adquirido en el año anterior o en un periodo mayor, que el valor catastral no exceda el tope en UVT que fija la ley y que el destino sea la vivienda de habitación. Existe una discrepancia entre versiones del texto sobre si el tope de la exención es de 7.500 UVT (texto original de la Ley 2010 de 2019) o de 5.000 UVT (ajuste atribuido a la Ley 2277 de 2022); por esa razón la norma se marca como pendiente de verificación en el texto consolidado antes de aplicarla.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'arts. 303-1 y 311-1', status: 'vigente', note: 'El art. 303-1 fue modificado por el art. 29 de la Ley 2277 de 2022 (exención de 3.250 UVT). El art. 311-1 presenta diferencias entre versiones sobre el tope de UVT: verifique el texto consolidado.' },
        },
        {
          heading: 'Tarifas de la ganancia ocasional',
          paragraphs: [
            'Los artículos 313, 314 y 316 del ET fijan la tarifa general de la ganancia ocasional, que la Ley 2277 de 2022 elevó del 10% al 15%. El artículo 317 conserva la tarifa del 20% para las ganancias provenientes de loterías, rifas, apuestas y similares, que se calcula sobre el valor del premio.',
            'En la declaración de las personas naturales las ganancias ocasionales se liquidan como renta cedular separada: no se suman con la cédula general, pero se totalizan con las demás rentas del formulario 210 y se declaran y pagan en el mismo periodo.',
          ],
          table: {
            caption: 'Tarifas de ganancia ocasional',
            headers: ['Concepto', 'Norma', 'Tarifa'],
            rows: [
              ['Tarifa general de ganancia ocasional', 'Arts. 313, 314 y 316 del ET (Ley 2277 de 2022)', '15%'],
              ['Utilidad en venta de activos fijos poseídos dos años o más', 'Art. 300 del ET', '15%'],
              ['Loterías, rifas, apuestas y similares', 'Art. 317 del ET', '20%'],
              ['Premios de apuestas y concursos hípicos o caninos', 'Art. 306-1 del ET', 'No hay impuesto si no superan 410 UVT; si lo superan, 20%'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'El material de estudio liquida la ganancia ocasional al 10%, tarifa anterior a la Ley 2277 de 2022. Hoy la tarifa general es del 15% y la de loterías del 20%.',
          },
        },
        {
          heading: 'Depuración y declaración',
          paragraphs: [
            'La declaración de renta de las personas naturales incluye las ganancias ocasionales en un renglón separado. El procedimiento es: se determina el ingreso por ganancia ocasional, se resta el costo por ganancia ocasional y las exenciones del artículo 307 (con los límites que la propia norma impone) y sobre la ganancia ocasional gravable resultante se aplica la tarifa del 15% o del 20%, según el hecho generador.',
            'Las exenciones del artículo 307 operan contra el ingreso por ganancia ocasional y no pueden superar el valor del ingreso: si la suma de las exenciones aplicables excede el valor recibido, la ganancia gravable es cero y el exceso no da derecho a devolución ni a compensación.',
          ],
        },
      ],
      summary: [
        'Generan ganancia ocasional: la venta de activos fijos poseídos dos años o más (art. 300), las herencias, legados y donaciones (art. 302), las loterías, rifas y apuestas (art. 304) y los seguros de vida (art. 303-1).',
        'La ganancia gravable es el ingreso menos el costo por ganancia ocasional y las exenciones aplicables.',
        'El artículo 307 del ET, modificado por la Ley 2277 de 2022, exime 13.000 UVT por la vivienda de habitación del causante, 6.500 UVT por los demás inmuebles, 3.250 UVT por beneficiario y 1.625 UVT (20%) en donaciones a no legitimarios.',
        'La exención de seguros de vida es de 3.250 UVT (art. 303-1, antes 12.500 UVT).',
        'La tarifa general de ganancia ocasional es del 15% (arts. 313, 314 y 316); la de loterías, rifas y apuestas es del 20% (art. 317).',
        'Los premios de concursos hípicos o caninos no se gravan si no superan 410 UVT (art. 306-1).',
      ],
      memorize: [
        'Posesión de activos fijos: dos años o más para ganancia ocasional (art. 300 del ET).',
        'Exenciones del art. 307: 13.000 UVT (vivienda del causante), 6.500 UVT (demás inmuebles), 3.250 UVT (por beneficiario), 1.625 UVT o 20% (donaciones a no legitimarios).',
        'Seguro de vida: exento hasta 3.250 UVT (art. 303-1).',
        'Tarifas: 15% general y 20% para loterías, rifas y apuestas.',
        'Premios hípicos o caninos: no sometidos hasta 410 UVT (art. 306-1).',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: venta de un activo fijo poseído más de dos años',
          paragraphs: [
            'Andrés vendió en 2026 una bodega que compró en 2018 y arrendó durante todo ese tiempo: precio de venta $500.000.000; costo fiscal $320.000.000. La utilidad de $180.000.000 es ganancia ocasional porque el bien se poseyó más de dos años y hace parte de sus activos fijos.',
            'Ganancia ocasional gravable: $500.000.000 − $320.000.000 = $180.000.000. Impuesto: $180.000.000 x 15% = $27.000.000. Si la hubiera vendido a los dieciocho meses, la utilidad habría sido renta ordinaria de la cédula general y no ganancia ocasional.',
          ],
        },
        {
          heading: 'Ejemplo 2: herencia con las exenciones del artículo 307',
          paragraphs: [
            'El causante dejó una casa que era su vivienda de habitación ($700.000.000), una finca ($400.000.000) y acciones ($150.000.000), para un total de $1.250.000.000, y tiene un solo heredero.',
            'Exenciones con UVT de 2026: vivienda de habitación 13.000 UVT = $680.862.000; demás inmuebles (la finca) 6.500 UVT = $340.431.000; asignación por herencia al beneficiario 3.250 UVT = $170.215.500. Total exenciones: $1.191.508.500.',
            'Ganancia ocasional gravable: $1.250.000.000 − $1.191.508.500 = $58.491.500. Impuesto al 15%: $8.773.725. Observe que la exención de la vivienda se limita al valor del inmueble y que las tres exenciones operan contra el mismo ingreso.',
          ],
          table: {
            caption: 'Liquidación del ejemplo de herencia (UVT 2026 = $52.374)',
            headers: ['Concepto', 'Valor'],
            rows: [
              ['Ingreso por ganancia ocasional (herencia)', '$1.250.000.000'],
              ['(−) Exención vivienda del causante: 13.000 UVT', '$680.862.000'],
              ['(−) Exención demás inmuebles: 6.500 UVT', '$340.431.000'],
              ['(−) Exención por beneficiario: 3.250 UVT', '$170.215.500'],
              ['(=) Ganancia ocasional gravable', '$58.491.500'],
              ['Impuesto al 15%', '$8.773.725'],
            ],
          },
        },
        {
          heading: 'Ejemplo 3: lotería y seguro de vida',
          paragraphs: [
            'María ganó un premio de lotería de $120.000.000. Como las loterías se gravan con la tarifa del artículo 317 del ET, el impuesto es $120.000.000 x 20% = $24.000.000, sin que operen las exenciones del artículo 307.',
            'En cambio, si recibe una indemnización por seguro de vida de $300.000.000, la exención del artículo 303-1 cubre 3.250 UVT = $170.215.500. La ganancia ocasional gravable es $129.784.500 y el impuesto al 15% es $19.467.675.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Liquidar la ganancia ocasional al 10% como aparece en el material de estudio.',
          correction: 'La Ley 2277 de 2022 elevó la tarifa general al 15% (arts. 313, 314 y 316 del ET). La tarifa del 20% de loterías, rifas y apuestas se mantiene (art. 317).',
        },
        {
          mistake: 'Aplicar las exenciones del artículo 307 con las cuantías antiguas (7.700, 7.700 y 3.490 UVT).',
          correction: 'Las cuantías vigentes son 13.000 UVT (vivienda de habitación del causante), 6.500 UVT (demás inmuebles), 3.250 UVT (por beneficiario) y 1.625 UVT (donaciones a no legitimarios).',
        },
        {
          mistake: 'Restar todas las exenciones sin verificar que no superen el valor del ingreso.',
          correction: 'Las exenciones operan contra el ingreso y se limitan a su valor; el exceso no genera devolución ni se traslada a otras rentas.',
        },
        {
          mistake: 'Tratar como ganancia ocasional la venta de un activo fijo poseído por menos de dos años.',
          correction: 'En ese caso la utilidad es renta ordinaria de la cédula general; la ganancia ocasional exige la posesión por dos años o más (art. 300 del ET).',
        },
      ],
      norms: [
        { norm: 'Estatuto Tributario', article: 'art. 300', status: 'vigente', note: 'Ganancia ocasional por enajenación de bienes poseídos dos años o más.' },
        { norm: 'Estatuto Tributario', article: 'art. 302', status: 'vigente', note: 'Herencias, legados y donaciones: verifique el costo fiscal aplicable conforme a la norma y sus parágrafos.' },
        { norm: 'Estatuto Tributario', article: 'art. 303-1', status: 'modificada', note: 'Modificado por el art. 29 de la Ley 2277 de 2022: exención de seguros de vida reducida a 3.250 UVT. Control de constitucionalidad resuelto en 2025 (exequible).' },
        { norm: 'Estatuto Tributario', article: 'art. 307', status: 'modificada', note: 'Reescrito por el art. 30 de la Ley 2277 de 2022: 13.000, 6.500, 3.250 y 1.625 UVT.' },
        { norm: 'Estatuto Tributario', article: 'arts. 313, 314 y 316', status: 'modificada', note: 'Tarifa general de ganancia ocasional del 15% desde la Ley 2277 de 2022.' },
        { norm: 'Estatuto Tributario', article: 'art. 317', status: 'vigente', note: 'Tarifa del 20% para loterías, rifas, apuestas y similares.' },
        { norm: 'Estatuto Tributario', article: 'art. 306-1', status: 'vigente', note: 'Premios de apuestas y concursos hípicos o caninos: no sometidos hasta 410 UVT.' },
        { norm: 'Estatuto Tributario', article: 'art. 311-1', status: 'verificar', note: 'Exención por venta de casa de habitación: las versiones del texto consolidado difieren entre 7.500 UVT y 5.000 UVT. Confirme el tope vigente en el texto oficial antes de aplicarlo.' },
      ],
      links: [
        { label: 'Estatuto Tributario compilado (Secretaría del Senado)', url: 'https://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
        { label: 'DIAN: renta personas naturales', url: 'https://www.dian.gov.co/impuestos/personas/Paginas/default.aspx' },
      ],
      mindmap: {
        root: 'Ganancia ocasional',
        branches: [
          { label: 'Hechos generadores', children: ['Venta de activos fijos con dos años o más (art. 300)', 'Herencias, legados y donaciones (art. 302)', 'Loterías, rifas y apuestas (art. 304)', 'Seguros de vida (art. 303-1)'] },
          { label: 'Clases', children: ['Ingreso por ganancia ocasional', 'Costo por ganancia ocasional', 'Ganancia no gravada o exenta', 'Ganancia gravable'] },
          { label: 'Exenciones', children: ['Art. 307: 13.000 y 6.500 UVT', 'Por beneficiario: 3.250 UVT', 'Donaciones: 1.625 UVT (20%)', 'Seguro de vida: 3.250 UVT'] },
          { label: 'Tarifas', children: ['15% general', '20% loterías y apuestas', 'Premios hípicos: 410 UVT'] },
          { label: 'Depuración', children: ['Ingreso − costo − exentas', 'Renta cedular separada', 'Se declara con las demás rentas en el formulario 210'] },
        ],
      },
      mindmapText:
        'El mentefacto de la ganancia ocasional se abre en cinco ramas. Los hechos generadores son la venta de activos fijos poseídos dos años o más, las herencias, legados y donaciones, las loterías, rifas y apuestas, y los seguros de vida. Las clases son ingreso, costo, ganancia no gravada y ganancia gravable. Las exenciones del artículo 307 valen 13.000, 6.500, 3.250 y 1.625 UVT según el caso, y la de seguros de vida 3.250 UVT. Las tarifas son 15% general y 20% para loterías y apuestas. La depuración resta el costo y las exenciones del ingreso y liquida como renta cedular separada.',
      source: [
        { doc: 'material', pages: 'págs. 368-384', note: 'Unidad 4: ganancia ocasional. Hechos generadores, clases, exenciones de los arts. 303-1, 306-1, 307 y 311-1, y ejemplos de liquidación.' },
      ],
    },
    // ----------------------------------------------------------
    // LECCIÓN 7
    // ----------------------------------------------------------
    {
      id: 'm05-l07',
      moduleId: 'm05',
      title: 'Impuesto sobre las ventas e impuesto nacional al consumo',
      indicators: ['i05'],
      objectives: [
        'Explicar la naturaleza del impuesto sobre las ventas (IVA) y la diferencia entre impuesto plurifásico y monofásico, y entre responsable jurídico y responsable económico.',
        'Distinguir los bienes y servicios gravados, exentos y excluidos, y aplicar la base gravable del artículo 447 del ET.',
        'Determinar los impuestos descontables y aplicar la proporcionalidad del artículo 490 del ET.',
        'Identificar los hechos generadores y las tarifas del impuesto nacional al consumo y del impuesto a las bolsas plásticas.',
      ],
      sections: [
        {
          heading: 'Naturaleza y características del IVA',
          paragraphs: [
            'El impuesto sobre las ventas (IVA) es un tributo del orden nacional, indirecto, de causación instantánea y de régimen plurifásico. Es indirecto porque el responsable lo recauda del consumidor y lo entrega al Estado; es de causación instantánea porque se genera en el momento de la venta, la prestación del servicio o la importación; y es plurifásico porque se causa en cada una de las etapas de la cadena de producción y distribución, con derecho a descontar el IVA pagado en la etapa anterior.',
            'El sujeto pasivo jurídico es el responsable que debe declarar y pagar; el sujeto pasivo económico es el consumidor final, quien soporta el impuesto sin poder descontarlo. Esa distinción explica el mecanismo de la cadena: cada eslabón recauda el IVA de su venta, descuenta el que pagó en su compra y entrega la diferencia.',
          ],
          table: {
            caption: 'Ejemplo de IVA plurifásico: una cadena de cuatro etapas (ventas sin IVA)',
            headers: ['Etapa', 'Venta', 'IVA generado (19%)', 'IVA descontable', 'IVA a pagar'],
            rows: [
              ['Proveedor de materias primas', '$10.000.000', '$1.900.000', '$0', '$1.900.000'],
              ['Productor', '$15.000.000', '$2.850.000', '$1.900.000', '$950.000'],
              ['Distribuidor', '$20.000.000', '$3.800.000', '$2.850.000', '$950.000'],
              ['Tienda al consumidor', '$25.000.000', '$4.750.000', '$3.800.000', '$950.000'],
            ],
          },
          callout: {
            type: 'importante',
            text: 'En el régimen plurifásico el consumidor paga $4.750.000 de IVA en el ejemplo y el Estado recauda exactamente esa suma: $1.900.000 + $950.000 + $950.000 + $950.000 = $4.750.000. En el régimen monofásico, en cambio, el impuesto se causa en una sola etapa, aunque el bien siga circulando hasta el consumidor.',
          },
        },
        {
          heading: 'Hecho generador, responsables y no responsables',
          paragraphs: [
            'El artículo 420 del ET define el hecho generador: la venta de bienes corporales muebles e inmuebles, la prestación de servicios en el territorio nacional, la importación de bienes corporales muebles, y los juegos de suerte y azar, con excepción de las loterías y juegos de apuestas administrados por entidades públicas y las apuestas y chances.',
            'Son responsables del impuesto quienes venden bienes y prestan servicios gravados, incluidos los importadores. El parágrafo 3 del artículo 437 del ET exime de la calidad de responsable a quien cumpla todas estas condiciones: ser persona natural, no ser responsable del impuesto sobre la renta por ingresos superiores a 3.500 UVT, tener un solo establecimiento de comercio, no desarrollar actividades bajo franquicia, no ser usuario aduanero y no realizar importaciones ni ventas al exterior. Con la UVT de 2026, el tope de 3.500 UVT equivale a $183.309.000.',
            'El parágrafo 5 del artículo 437 permite que una persona natural con contratos con entidades estatales por un valor total anual inferior a 4.000 UVT (si ejecuta el contrato con sus propios recursos) no sea responsable del IVA por esas operaciones. En cambio, si supera el tope, debe inscribirse como responsable.',
          ],
          norm: { norm: 'Estatuto Tributario', article: 'arts. 420 y 437 (parágrafos 3 y 5)', status: 'vigente', note: 'El parágrafo 3 del art. 437 es el que fija las condiciones para no ser responsable del IVA; el parágrafo 5 se refiere a contratos con el Estado.' },
        },
        {
          heading: 'Tarifas, bienes exentos y bienes excluidos',
          paragraphs: [
            'La tarifa general del IVA es del 19% (art. 468 del ET). El artículo 468-1 señala una tarifa del 5% para una lista taxativa de bienes y servicios (entre otros, ciertos bienes de la canasta básica, muebles de hogar, servicios de fabricación, la venta de vehículos de taxi eléctricos y algunos seguros). Existen además tarifas del 0%, del 5% y exclusiones.',
            'Es esencial distinguir lo exento de lo excluido, porque los efectos económicos son distintos. Los bienes y servicios exentos están gravados a la tarifa del 0% (art. 477 del ET): el productor o vendedor es responsable, cobra $0 de IVA al cliente, pero puede descontar el IVA de sus compras y pedir devolución. Los bienes excluidos (artículo 424 del ET) no están gravados: no hay impuesto en la venta, pero el IVA pagado en las compras se pierde como mayor valor del costo (no hay derecho a descuento) y tampoco hay devolución.',
            'El artículo 477 conserva la lista de bienes y servicios exentos por excepción, entre ellos los servicios médicos y odontológicos, el transporte de pasajeros y el servicio de educación. Los bienes excluidos del artículo 424 incluyen, entre muchos otros, los del régimen de exclusión general y los de la canasta básica señalados por la ley. El territorio del departamento de Amazonas tiene tratamiento especial con la creación de la tarifa cero y requisitos de avituallamiento, mientras que los departamentos de Guainía, Guaviare, Vaupés y Vichada están excluidos de este impuesto (art. 424 numerales 13 y siguientes).',
          ],
          table: {
            caption: 'Tarifas del IVA y tratamiento del IVA pagado',
            headers: ['Categoría', 'Tarifa', 'IVA de compras'],
            rows: [
              ['Gravado a la tarifa general', '19% (art. 468)', 'Descontable'],
              ['Gravado a la tarifa del 5%', '5% (art. 468-1)', 'Descontable'],
              ['Exento', '0% (art. 477)', 'Descontable, con derecho a devolución'],
              ['Excluido', 'No hay impuesto (art. 424)', 'No descontable: mayor valor del costo'],
            ],
          },
        },
        {
          heading: 'La base gravable',
          paragraphs: [
            'El artículo 447 del ET define la base gravable como el valor total de la operación, sea que esta se realice de contado o a crédito, con la inclusión de los gastos directos de financiación ordinaria, extraordinaria o moratoria. Es una base amplia: no se reduce por el hecho de vender a plazo.',
            'El artículo 447 exige que en la factura se discrimine el IVA, pero dispone que si el responsable no lo hace, el impuesto se entiende incluido en el valor cobrado y debe responderse por él. En importaciones (art. 459), la base es el valor en aduana más los tributos aduaneros y demás gastos causados hasta la nacionalización. El artículo 460 regula la base en la vinculación de los socios a clubes sociales, el artículo 461 la de los servicios de transporte internacional (100% para el transporte entre dos puntos del país y 50% para el que se origina en el país), y el artículo 458 la de los retiros de bienes corporales muebles que no se destinen a operaciones gravadas.',
            'Los descuentos tienen tratamiento diferente según su naturaleza: los descuentos efectivos, realizados con la misma operación, se restan de la base y por tanto disminuyen el IVA; los descuentos condicionados, por el contrario, no afectan la base del periodo en que se conceden, porque su concreción es futura e incierta.',
          ],
          callout: {
            type: 'ejemplo',
            text: 'Venta de un electrodoméstico por $100.000.000 con descuento efectivo del 10%: base $90.000.000, IVA 19% = $17.100.000. Si el descuento es condicionado (por pronto pago), la base sigue siendo $100.000.000, el IVA generado es $19.000.000 y un eventual descuento posterior de $10.000.000 se reconoce cuando se concrete, con el ajuste correspondiente.',
          },
        },
        {
          heading: 'Impuestos descontables',
          paragraphs: [
            'El artículo 485 del ET consagra dos fuentes de impuestos descontables: el IVA generado por las operaciones gravadas y el IVA resultante de las operaciones gravadas entre el responsable y sus proveedores o importadores. En general, para que el IVA pagado sea descontable la operación debe estar vinculada con la actividad gravada del responsable y acreditarse con factura que cumpla los requisitos legales (art. 488 del ET).',
            'El impuesto pagado en las compras se lleva como mayor valor del costo o gasto (es decir, no es descontable) cuando: los bienes y servicios se destinan a operaciones no gravadas o excluidas; el IVA corresponde a bienes y servicios no vinculados a la actividad gravada; se trata de bienes adquiridos con IVA terciado o de activos fijos cuyo IVA no es descontable por expresa disposición legal; o la factura no cumple los requisitos legales. Las facturas del POS no otorgan derecho a impuestos descontables (parágrafo 4 del artículo 616-1 del ET).',
            'El artículo 491 del ET establece que el IVA pagado en la adquisición de activos fijos no es descontable; en su lugar, el artículo 258-2 del ET permite tomar ese IVA como descuento tributario en el impuesto sobre la renta, siempre que se trate de activos fijos reales productivos y no de vehículos de uso particular.',
            'Cuando el responsable realice simultáneamente operaciones gravadas, exentas y excluidas, el IVA pagado en los bienes y servicios de utilización común debe llevarse mediante la proporcionalidad del artículo 490 del ET. El impuesto descontable guarda la misma proporción que las operaciones gravadas y exentas (que dan derecho a descuento) respecto del total de operaciones, incluida la de los bienes excluidos. El artículo 481 permite solicitar la devolución bimestral del impuesto por las operaciones exentas y retenciones, en proporción a los ingresos por operaciones exentas.',
          ],
          table: {
            caption: 'Proporcionalidad del artículo 490 del ET: ejemplo',
            headers: ['Tipo de operación', 'Valor de ventas', 'Participación'],
            rows: [
              ['Gravadas', '$90.000.000', '45%'],
              ['Exentas', '$40.000.000', '20%'],
              ['Excluidas', '$70.000.000', '35%'],
              ['Total', '$200.000.000', '100%'],
            ],
          },
          callout: {
            type: 'ejemplo',
            text: 'Con el ejemplo anterior, el IVA de las compras comunes de $60.000.000 con IVA de $11.400.000 (19%) se descuenta en un 65% (45% gravadas + 20% exentas) = $7.410.000. El 35% restante ($3.990.000) se lleva como mayor valor del costo o gasto.',
          },
        },
        {
          heading: 'Impuesto nacional al consumo (INC)',
          paragraphs: [
            'El impuesto nacional al consumo (INC) fue creado por la Ley 1607 de 2012 como un impuesto monofásico que sustituye al IVA en determinados bienes y servicios. Se causa en la venta, en la prestación del servicio o en la importación, según el caso, y su tarifa depende del bien o servicio.',
            'Los responsables son: los prestadores de servicios de telefonía y datos, los prestadores de servicios de comidas y bebidas (bares y restaurantes incluidos), los importadores de bienes gravados cuando el bien es para uso o consumo propio, los vendedores de bienes gravados y los intermediarios en la venta de vehículos usados. Las obligaciones formales son inscribirse en el RUT, expedir factura, recaudar el impuesto, presentar declaración bimestral y pagar.',
            'En el servicio de restaurantes y bares existe un régimen simplificado (art. 512-13 del ET): las personas naturales que sean propietarios de un solo establecimiento y sus ingresos no superen 3.500 UVT, o que realicen operaciones individuales que no superen 3.500 UVT, no son responsables del INC. Quien supera el tope debe inscribirse como responsable, y solo puede retirarse después de tres años. La condición debe registrarse en el RUT. La declaración del INC exige firma de contador público o revisor fiscal cuando el patrimonio bruto o los ingresos del año anterior superen 100.000 UVT.',
          ],
          table: {
            caption: 'Tarifas del impuesto nacional al consumo',
            headers: ['Hecho generador', 'Tarifa', 'Norma'],
            rows: [
              ['Servicios de telefonía y datos', '4% sobre el valor del servicio, excluido el impuesto; sobre el exceso de 1,5 UVT mensuales', 'Art. 512-2 del ET'],
              ['Comidas y bebidas (restaurantes, bares, cafeterías)', '8%', 'Art. 512-3 del ET'],
              ['Vehículos: automóviles de uso particular con valor FOB inferior a USD 30.000, motos con motor superior a 200 cc', '8%', 'Art. 512-4 del ET'],
              ['Vehículos de uso particular con valor FOB igual o superior a USD 30.000, aeronaves, embarcaciones', '16%', 'Art. 512-4 del ET'],
              ['Cannabis de uso medicinal y otros productos transformados', '16% sobre el valor total del producto final sin IVA', 'Legislación de cannabis psicoactivo'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'A finales de 2025 el Decreto Legislativo 1474 de 2025 (emergencia económica) elevó transitoriamente la tarifa de varios hechos generadores del INC al 19%. La Corte Constitucional tumbó ese decreto en abril de 2026, de modo que hoy rigen las tarifas legales del 4%, 8% y 16%. Este tipo de cambios transitorios debe verificarse siempre en el normograma de la DIAN antes de declarar.',
          },
        },
        {
          heading: 'Impuesto a las bolsas plásticas',
          paragraphs: [
            'El artículo 512-15 del ET estableció el impuesto nacional al consumo de bolsas plásticas, aplicable desde el 1 de julio de 2017. Sujeto pasivo del impuesto es quien recibe la bolsa para cargar o llevar productos, es decir, el consumidor; los responsables del recaudo son los responsables del IVA que entreguen las bolsas.',
            'La tarifa se fija por la ley y se actualiza cada año con el IPC certificado por la DIAN antes del 1 de enero. El valor de cada bolsa ha evolucionado así: $20 (2017), $30 (2018), $40 (2019) y $50 (2020), hasta llegar a $73 para 2026, según la Circular DIAN 000005 del 16 de diciembre de 2025 ($70 en 2025). El impuesto debe constar en la factura con el número de bolsas y el valor.',
            'Las bolsas que no se destinen a cargar o llevar productos, las que se usen como empaque para preempacados, las biodegradables certificadas y las reutilizables no causan el impuesto; y existen tarifas reducidas del 0%, 25%, 50% y 75% según los niveles de impacto ambiental que certifique el Ministerio de Ambiente (4 niveles). El valor del impuesto no puede tratarse como costo, deducción ni impuesto descontable.',
          ],
          table: {
            caption: 'Tarifa del impuesto a las bolsas plásticas por año',
            headers: ['Año', 'Tarifa por bolsa'],
            rows: [
              ['2017', '$20'],
              ['2018', '$30'],
              ['2019', '$40'],
              ['2020', '$50'],
              ['2025', '$70'],
              ['2026', '$73 (Circular DIAN 000005 de 2025)'],
            ],
          },
        },
      ],
      summary: [
        'El IVA es un impuesto nacional, indirecto, de causación instantánea y plurifásico; el responsable jurídico declara y paga, y el consumidor final soporta el tributo.',
        'No es responsable del IVA la persona natural que cumpla todas las condiciones del parágrafo 3 del artículo 437 del ET (ingresos inferiores a 3.500 UVT, un solo establecimiento, entre otras).',
        'Las tarifas son 19% general, 5% para la lista del artículo 468-1 y 0% para los exentos del artículo 477; los excluidos del artículo 424 no causan impuesto y su IVA pagado es mayor costo.',
        'La base gravable del artículo 447 es el valor total de la operación; los descuentos efectivos la reducen y los condicionados no.',
        'Los impuestos descontables provienen de las operaciones gravadas (art. 485) y, en operaciones mixtas, se prorratean con la regla del artículo 490; el IVA de activos fijos no es descontable (art. 491), pero puede ser descuento tributario en renta (art. 258-2).',
        'El INC grava telefonía (4%), comidas y bebidas (8%), vehículos (8% o 16%) y otros bienes, con régimen simplificado de restaurantes y bares (art. 512-13).',
        'El impuesto a las bolsas plásticas vale $73 por bolsa en 2026 y es recaudado por los responsables del IVA.',
      ],
      memorize: [
        'Tarifas del IVA: 19% general (art. 468), 5% (art. 468-1), 0% exentos (art. 477), excluidos (art. 424).',
        'Exento frente a excluido: el exento da derecho a descontar y a devolución; el excluido convierte el IVA pagado en mayor costo.',
        'Base gravable: valor total de la operación (art. 447). Descuentos efectivos reducen la base; los condicionados no.',
        'Proporcionalidad del art. 490: se descuenta en la misma proporción de las operaciones gravadas y exentas sobre el total.',
        'INC: telefonía 4%, comidas y bebidas 8%, vehículos 8% o 16%; restaurantes no responsables hasta 3.500 UVT (art. 512-13).',
        'Bolsas plásticas: $73 por bolsa en 2026 (Circular DIAN 000005 de 2025); antes $20 (2017), $30 (2018), $40 (2019) y $50 (2020).',
      ],
      examples: [
        {
          heading: 'Ejemplo 1: liquidación bimestral del IVA con proporcionalidad',
          paragraphs: [
            'Una empresa comercial obtuvo en el bimestre ventas gravadas por $90.000.000, ventas exentas por $40.000.000 y ventas excluidas por $70.000.000, para un total de $200.000.000. Sus compras comunes tuvieron un valor de $60.000.000 más IVA de $11.400.000 (19%).',
            'Participación de las operaciones que dan derecho a descuento: (90.000.000 + 40.000.000) / 200.000.000 = 65%. IVA descontable: $11.400.000 x 65% = $7.410.000. IVA no descontable (mayor costo): $11.400.000 x 35% = $3.990.000.',
            'Si además el IVA generado en el bimestre fue de $17.100.000, el saldo a pagar es $17.100.000 − $7.410.000 = $9.690.000, antes de descontar retenciones que le hayan practicado.',
          ],
          table: {
            caption: 'Liquidación del ejemplo 1',
            headers: ['Concepto', 'Valor'],
            rows: [
              ['IVA generado en el bimestre', '$17.100.000'],
              ['(−) IVA descontable proporcional (65%)', '$7.410.000'],
              ['(=) Saldo a pagar', '$9.690.000'],
              ['IVA no descontable (35%), mayor valor del costo', '$3.990.000'],
            ],
          },
        },
        {
          heading: 'Ejemplo 2: base gravable con descuentos',
          paragraphs: [
            'Venta de mercancía por $100.000.000 con descuento efectivo del 10% pactado en la misma operación: base gravable $90.000.000 e IVA de $17.100.000. En cambio, si el descuento del 10% se concede por pronto pago (condicionado), la base del periodo es $100.000.000, el IVA es $19.000.000 y el descuento posterior de $10.000.000 se reconoce cuando efectivamente se concrete.',
            'La distinción define el IVA del periodo y es fuente permanente de errores en las declaraciones.',
          ],
        },
        {
          heading: 'Ejemplo 3: INC y bolsas plásticas',
          paragraphs: [
            'Una cuenta de restaurante de $250.000 causa INC del 8%: $20.000, que se factura separadamente del IVA (en restaurantes y bares el INC del 8% reemplaza al IVA). Un plan de telefonía móvil de $80.000 causa INC del 4%, salvo la parte que no exceda 1,5 UVT al mes.',
            'Una compra de 3 bolsas plásticas en 2026 causa 3 x $73 = $219, cantidad que el responsable debe discriminar en la factura con el número de bolsas y el valor del impuesto.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Tratar igual los bienes exentos (0%) y los excluidos del IVA.',
          correction: 'El exento está gravado al 0% y permite descontar el IVA de las compras y hasta pedir devolución (art. 481); el excluido no causa impuesto y el IVA pagado se convierte en mayor valor del costo, sin derecho a descuento ni devolución.',
        },
        {
          mistake: 'Restar los descuentos condicionados de la base gravable del periodo.',
          correction: 'Solo los descuentos efectivos, otorgados en la misma operación, reducen la base gravable (art. 447 y ss. del ET). Los condicionados no afectan la base mientras no se concreten.',
        },
        {
          mistake: 'Descontar el IVA de los activos fijos o el de facturas del POS.',
          correction: 'El IVA de los activos fijos no es descontable (art. 491 del ET), pero puede tomarse como descuento tributario en renta si son activos fijos reales productivos (art. 258-2). Las facturas del POS no otorgan derecho a impuestos descontables (parágrafo 4 del art. 616-1).',
        },
        {
          mistake: 'Aplicar al INC las tarifas del IVA.',
          correction: 'El INC es monofásico y tiene tarifas propias: 4% en telefonía, 8% en comidas y bebidas, 8% o 16% en vehículos según su valor FOB. El Decreto Legislativo 1474 de 2025 que elevó transitoriamente las tarifas al 19% fue retirado del ordenamiento por la Corte Constitucional en 2026.',
        },
      ],
      norms: [
        { norm: 'Estatuto Tributario', article: 'arts. 420 y 437', status: 'vigente', note: 'Hecho generador del IVA y responsables; el parágrafo 3 del art. 437 fija las condiciones para no ser responsable.' },
        { norm: 'Estatuto Tributario', article: 'arts. 424 y 477', status: 'vigente', note: 'Bienes excluidos y bienes exentos con tarifa del 0% y derecho a devolución.' },
        { norm: 'Estatuto Tributario', article: 'art. 447', status: 'vigente', note: 'Base gravable del IVA: valor total de la operación.' },
        { norm: 'Estatuto Tributario', article: 'arts. 468 y 468-1', status: 'vigente', note: 'Tarifa general del 19% y tarifa del 5% para la lista taxativa.' },
        { norm: 'Estatuto Tributario', article: 'arts. 485, 488, 490 y 491', status: 'vigente', note: 'Impuestos descontables, requisitos, proporcionalidad y exclusión de activos fijos.' },
        { norm: 'Estatuto Tributario', article: 'art. 258-2', status: 'vigente', note: 'IVA de activos fijos reales productivos como descuento tributario en el impuesto sobre la renta.' },
        { norm: 'Estatuto Tributario', article: 'arts. 512-1 a 512-13', status: 'vigente', note: 'Impuesto nacional al consumo: hechos generadores, responsables, tarifas y régimen simplificado de restaurantes y bares.' },
        { norm: 'Estatuto Tributario', article: 'art. 512-15', status: 'vigente', note: 'Impuesto nacional al consumo de bolsas plásticas. Tarifa de $73 para 2026 (Circular DIAN 000005 del 16-dic-2025).' },
        { norm: 'Decreto Legislativo 1474 de 2025', article: '', status: 'verificar', note: 'Elevó transitoriamente al 19% varios hechos generadores del INC durante la emergencia económica; la Corte Constitucional lo retiró del ordenamiento en abril de 2026. Verifique el estado final del pronunciamiento antes de citarlo.' },
      ],
      links: [
        { label: 'DIAN: impuesto sobre las ventas', url: 'https://www.dian.gov.co/impuestos/Paginas/default.aspx' },
        { label: 'Normograma DIAN (circulares y resoluciones de tarifas)', url: 'https://normograma.dian.gov.co/dian/' },
        { label: 'Estatuto Tributario compilado (Secretaría del Senado)', url: 'https://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html' },
      ],
      mindmap: {
        root: 'IVA e impuesto nacional al consumo',
        branches: [
          { label: 'IVA: naturaleza', children: ['Nacional e indirecto', 'Causación instantánea', 'Plurifásico con descuento de IVA previo', 'Responsable jurídico vs. económico'] },
          { label: 'Sujetos', children: ['Responsables: vendedores e importadores', 'No responsables: art. 437 parágrafo 3', 'Tope 3.500 UVT de ingresos', 'Contratos estatales: 4.000 UVT'] },
          { label: 'Tarifas y categorías', children: ['19% general (art. 468)', '5% (art. 468-1)', '0% exentos (art. 477)', 'Excluidos (art. 424)'] },
          { label: 'Base y descontables', children: ['Base: valor total de la operación (art. 447)', 'Descuento: art. 485', 'Proporcionalidad: art. 490', 'Activos fijos: art. 491 y art. 258-2'] },
          { label: 'INC', children: ['Telefonía 4%', 'Comidas y bebidas 8%', 'Vehículos 8% y 16%', 'Restaurantes: régimen simplificado (3.500 UVT)'] },
          { label: 'Bolsas plásticas', children: ['Hecho generador desde 2017', 'Tarifa 2026: $73', 'No causan: empaque, biodegradables y reutilizables', 'No es costo ni deducción'] },
        ],
      },
      mindmapText:
        'El mentefacto del IVA y el INC tiene seis ramas. La naturaleza del IVA es nacional, indirecta, instantánea y plurifásica, con distinción entre responsable jurídico y económico. Los sujetos incluyen a los no responsables del parágrafo 3 del artículo 437 (3.500 UVT). Las tarifas son 19%, 5%, 0% y excluidos. La base es el valor total de la operación y los descontables se rigen por los artículos 485, 490 y 491. El INC tiene tarifas del 4%, 8% y 16% con régimen simplificado de restaurantes. Las bolsas plásticas cuestan $73 en 2026 y no son costo ni deducción.',
      source: [
        { doc: 'material', pages: 'págs. 385-406', note: 'Unidades 5 y 6: impuesto sobre las ventas (hecho generador, responsables, base, tarifas, exentos y excluidos, descontables y proporcionalidad) e impuesto nacional al consumo con el impuesto a las bolsas plásticas.' },
      ],
      activityId: 'm05-a02',
    },
  ],
}
