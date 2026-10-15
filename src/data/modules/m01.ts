import type { ModuleDef } from '../types'

// ============================================================
// Módulo 1 — Estructura organizacional y misionalidad de la DIAN
// Indicadores: i01 (estructura organizacional), i06 (misionalidad)
// Fuentes: Decretos 2117/1992, 1071/1999, 4048/2008 y 1742/2020
// (verificados en fuentes oficiales el 2026-10-15); el material
// de los PDF cita el Decreto 1071 de 1999 en la pág. 408.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm01',
  order: 1,
  title: 'Estructura organizacional y misionalidad de la DIAN',
  description:
    'Qué es la DIAN, cuál es su objeto y su papel en la seguridad fiscal del Estado, y cómo está organizada la entidad: nivel central, direcciones seccionales y dependencias de fiscalización.',
  indicators: ['i01', 'i06'],
  lessons: [
    {
      id: 'm01-l01',
      moduleId: 'm01',
      title: 'La DIAN: naturaleza jurídica, objeto y misionalidad',
      indicators: ['i06'],
      objectives: [
        'Identificar la naturaleza jurídica de la DIAN y su adscripción institucional.',
        'Explicar el objeto de la DIAN y su relación con la seguridad fiscal y el orden público económico.',
        'Reconocer los ámbitos de competencia: tributario, aduanero, cambiario y de juegos de suerte y azar.',
      ],
      sections: [
        {
          heading: '¿Qué es la DIAN?',
          paragraphs: [
            'La Dirección de Impuestos y Aduanas Nacionales (DIAN) es una Unidad Administrativa Especial (UAE) del orden nacional, de carácter eminentemente técnico y especializado, con personería jurídica, autonomía administrativa y presupuestal y patrimonio propio, adscrita al Ministerio de Hacienda y Crédito Público.',
            'La entidad fue creada mediante el Decreto 2117 de 1992, que fusionó la Dirección de Impuestos Nacionales (DIN) y la Dirección de Aduanas Nacionales (DAN). Su organización actual se rige por el Decreto 1742 de 2020, que modificó la estructura establecida en el Decreto 4048 de 2008. El Decreto 1071 de 1999 organizó la UAE DIAN y es la norma que cita el material de formación al definir el objeto de la entidad.',
          ],
        },
        {
          heading: 'Objeto de la DIAN',
          paragraphs: [
            'El objeto de la DIAN es «coadyuvar a garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional, mediante la administración y control al debido cumplimiento de las obligaciones tributarias, aduaneras, cambiarias, y la facilitación de las operaciones de comercio exterior en condiciones de equidad, transparencia y legalidad» (Decreto 1071 de 1999).',
            'Además, la DIAN administra los derechos de explotación y gastos de administración sobre los juegos de suerte y azar explotados por entidades públicas del orden nacional.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Cuatro ámbitos de actuación de la DIAN: TRIBUTARIO · ADUANERO · CAMBIARIO · JUEGOS DE SUERTE Y AZAR (entidades públicas del orden nacional).',
          },
        },
        {
          heading: 'Naturaleza y características de la UAE',
          paragraphs: [
            'Ser Unidad Administrativa Especial significa que la DIAN tiene un régimen especial de autonomía frente al sector central: personería jurídica propia, autonomía administrativa (organiza sus procesos y talento humano) y presupuestal (administra sus recursos), y patrimonio propio. Su representación legal corresponde al Director General, de libre nombramiento y remoción del Presidente de la República, quien puede delegar funciones.',
          ],
          table: {
            caption: 'Rasgos institucionales de la DIAN',
            headers: ['Rasgo', 'Detalle'],
            rows: [
              ['Naturaleza', 'Unidad Administrativa Especial del orden nacional'],
              ['Carácter', 'Eminentemente técnico y especializado'],
              ['Adscripción', 'Ministerio de Hacienda y Crédito Público'],
              ['Creación', 'Decreto 2117 de 1992 (fusión DIN + DAN)'],
              ['Organización vigente', 'Decreto 1742 de 2020 (modifica Decreto 4048 de 2008)'],
              ['Representación legal', 'Director General (libre nombramiento y remoción del Presidente)'],
            ],
          },
        },
        {
          heading: 'Seguridad fiscal y orden público económico',
          paragraphs: [
            'La seguridad fiscal alude a la capacidad del Estado de financiarse de manera estable mediante el recaudo de los tributos administrados por la DIAN. El orden público económico es el conjunto de condiciones que permiten el funcionamiento normal del mercado y las operaciones económicas; la DIAN lo protege al controlar el cumplimiento de las obligaciones cambiarias y aduaneras y al facilitar el comercio exterior legítimo.',
            'Esta doble dimensión (control + facilitación) explica que la DIAN sea a la vez autoridad de fiscalización y facilitadora del comercio: el mismo decreto que le asigna el control le exige operar «en condiciones de equidad, transparencia y legalidad».',
          ],
          callout: {
            type: 'importante',
            text: 'El objeto de la DIAN une dos verbos: ADMINISTRAR/CONTROLAR (tributos, aduanas, cambios) y FACILITAR (operaciones de comercio exterior). No es solo una entidad recaudadora.',
          },
        },
      ],
      summary: [
        'La DIAN es una UAE del orden nacional, técnica y especializada, adscrita al Ministerio de Hacienda, creada por el Decreto 2117 de 1992 al fusionar la DIN y la DAN.',
        'Su estructura vigente proviene del Decreto 1742 de 2020, que modificó el Decreto 4048 de 2008; el Decreto 1071 de 1999 definió su organización y objeto.',
        'Su objeto es coadyuvar a garantizar la seguridad fiscal del Estado y proteger el orden público económico nacional, administrando y controlando las obligaciones tributarias, aduaneras y cambiarias y facilitando el comercio exterior.',
        'También administra los derechos de explotación y gastos de administración de los juegos de suerte y azar de entidades públicas nacionales.',
      ],
      memorize: [
        'DIAN = Unidad Administrativa Especial, adscrita al Ministerio de Hacienda, con personería jurídica y autonomía administrativa y presupuestal.',
        'Objeto: seguridad fiscal + orden público económico nacional.',
        'Ámbitos: tributario, aduanero, cambiario y juegos de suerte y azar.',
        'Cronología de decretos: 2117/1992 (creación) → 1071/1999 (organización) → 4048/2008 (reestructuración) → 1742/2020 (estructura vigente).',
      ],
      examples: [
        {
          heading: 'Ejemplo de aplicación del objeto',
          paragraphs: [
            'Un importador que nacionaliza mercancía cumple obligaciones aduaneras y tributarias (arancel + IVA); un exportador de servicios debe canalizar las divisas que recibe (ámbito cambiario); un operador de juegos de azar público paga derechos de explotación que administra la DIAN. En los tres casos actúa la misma entidad, lo que justifica su naturaleza especializada y su objeto integral.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Confundir a la DIAN con un ministerio o creer que depende orgánicamente de la CNSC.',
          correction: 'La DIAN es una UAE adscrita al Ministerio de Hacienda. La CNSC solo administra los concursos de mérito para proveer sus empleos de carrera; no hace parte de la estructura de la DIAN.',
        },
        {
          mistake: 'Decir que la DIAN solo administra impuestos.',
          correction: 'También administra y controla el régimen aduanero y cambiario y los derechos de explotación de juegos de suerte y azar de entidades públicas del orden nacional.',
        },
      ],
      norms: [
        {
          norm: 'Decreto 2117 de 1992',
          status: 'vigente',
          note: 'Creación de la UAE DIAN por fusión de la DIN y la DAN.',
        },
        {
          norm: 'Decreto 1071 de 1999',
          status: 'vigente',
          note: 'Organiza la UAE DIAN y define su objeto; citado en el material de formación (pág. 408).',
        },
        {
          norm: 'Decreto 4048 de 2008',
          status: 'modificada',
          note: 'Reestructuró la DIAN; modificado por el Decreto 1742 de 2020.',
        },
        {
          norm: 'Decreto 1742 de 2020',
          status: 'vigente',
          note: 'Estructura vigente de la DIAN; arts. 81-83 facultan al Director General para distribuir funciones.',
        },
      ],
      links: [
        { label: 'DIAN — Presentación de la entidad', url: 'https://www.dian.gov.co/dian/entidad/Paginas/Presentacion.aspx' },
        { label: 'SUIN-Juriscol — Decreto 1742 de 2020', url: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30040261' },
        { label: 'Secretaría del Senado — Decreto 1742 de 2020', url: 'http://www.secretariasenado.gov.co/senado/basedoc/decreto_1742_2020.html' },
      ],
      mindmap: {
        root: 'DIAN',
        branches: [
          { label: 'Naturaleza', children: ['UAE del orden nacional', 'Técnica y especializada', 'Adscrita a MinHacienda'] },
          { label: 'Objeto', children: ['Seguridad fiscal', 'Orden público económico', 'Control + facilitación'] },
          { label: 'Ámbitos', children: ['Tributario', 'Aduanero', 'Cambiario', 'Juegos de azar públicos'] },
          { label: 'Creación y evolución', children: ['D. 2117/1992 crea', 'D. 1071/1999 organiza', 'D. 4048/2008 reestructura', 'D. 1742/2020 vigente'] },
        ],
      },
      mindmapText:
        'La DIAN es una Unidad Administrativa Especial del orden nacional, adscrita al Ministerio de Hacienda. Su objeto es coadyuvar a la seguridad fiscal y proteger el orden público económico mediante el control de los ámbitos tributario, aduanero y cambiario y la administración de los juegos de suerte y azar públicos. Fue creada por el Decreto 2117 de 1992, organizada por el 1071 de 1999, reestructurada por el 4048 de 2008 y su estructura vigente es la del Decreto 1742 de 2020.',
      source: [
        { doc: 'material', pages: 'pág. 408 (cita del objeto según Decreto 1071 de 1999)', note: 'El resto del contenido proviene de fuentes oficiales verificadas (DIAN, SUIN-Juriscol), no de los PDF.' },
        { doc: 'material', pages: 'págs. 1-200 (diapositivas del curso, OCR parcial)', note: 'Contenido visual sin capa de texto; procesado por OCR con resultados parciales.' },
      ],
      activityId: 'm01-a01',
    },
    {
      id: 'm01-l02',
      moduleId: 'm01',
      title: 'Estructura organizacional de la DIAN: nivel central y territorial',
      indicators: ['i01'],
      objectives: [
        'Describir la estructura del nivel central de la DIAN según el Decreto 1742 de 2020.',
        'Distinguir los tipos de direcciones seccionales y su cobertura territorial.',
        'Identificar la Dirección de Gestión de Fiscalización y sus dependencias.',
      ],
      sections: [
        {
          heading: 'Nivel directivo y representación legal',
          paragraphs: [
            'El Director General es la máxima autoridad de la DIAN, de libre nombramiento y remoción del Presidente de la República, con facultad de delegación. El Decreto 1742 de 2020 (arts. 81 a 83) faculta al Director General para expedir resoluciones que distribuyan funciones entre las dependencias, de modo que la operación interna se ajusta mediante actos administrativos de la propia entidad.',
          ],
        },
        {
          heading: 'Estructura del nivel central',
          paragraphs: [
            'El Decreto 1742 de 2020 organiza el nivel central en direcciones de gestión especializadas por proceso, de las cuales las más relevantes para el empleo de Gestor I son:',
          ],
          bullets: [
            'Dirección de Gestión Corporativa: soporte institucional (talento humano, financiera, tecnológica, administrativa).',
            'Dirección de Gestión Jurídica: representación judicial, doctrina y normativa interna.',
            'Dirección de Gestión de Ingresos: administración del cumplimiento voluntario de obligaciones, recaudo y devoluciones.',
            'Dirección de Gestión de Fiscalización: prevención, investigación, determinación, liquidación y penalización de tributos y de los regímenes aduanero y cambiario.',
            'Dirección de Gestión de Aduanas: administración del régimen aduanero y facilitación del comercio exterior.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Cinco direcciones clave del nivel central: Corporativa, Jurídica, de Ingresos, de Fiscalización y de Aduanas.',
          },
        },
        {
          heading: 'Dirección de Gestión de Fiscalización',
          paragraphs: [
            'Es la dependencia central directamente relacionada con el indicador de fiscalización. Actúa como superior técnico y jerárquico de las dependencias a su cargo y le corresponde dirigir, administrar, supervisar y controlar las acciones de prevención, investigación, penalización, determinación, aplicación y liquidación de los tributos nacionales, derechos de aduana y comercio exterior; aplicar sanciones por infracciones a los regímenes tributario, aduanero y cambiario; y dirigir los planes de fiscalización y control, incluida la detección de operaciones de lavado de activos.',
            'Entre sus dependencias se encuentran las subdirecciones de Gestión de Fiscalización Tributaria, de Fiscalización Aduanera, de Fiscalización Internacional y de Gestión de Control Cambiario, junto con coordinaciones especializadas como la de RILO (red de intercambio de información aduanera) y auditoría de denuncias de fiscalización, y la de control y prevención de lavado de activos.',
          ],
          table: {
            caption: 'Dependencias asociadas a la Dirección de Gestión de Fiscalización',
            headers: ['Dependencia', 'Foco'],
            rows: [
              ['Subdirección de Gestión de Fiscalización Tributaria', 'Investigación y determinación de tributos nacionales'],
              ['Subdirección de Gestión de Fiscalización Aduanera', 'Control del régimen aduanero'],
              ['Subdirección de Gestión de Fiscalización Internacional', 'Operaciones internacionales, precios de transferencia, residencia fiscal'],
              ['Subdirección de Gestión de Control Cambiario', 'Investigaciones y sanciones por violación al régimen cambiario'],
              ['Coordinación RILO y auditoría de denuncias', 'Intercambio de información aduanera y denuncias'],
              ['Coordinación de control y prevención de lavado de activos', 'Detección de operaciones de LA/FT'],
            ],
          },
        },
        {
          heading: 'Presencia territorial',
          paragraphs: [
            'La DIAN tiene jurisdicción en todo el territorio nacional, con sede principal en Bogotá D.C. Su operación territorial se organiza en direcciones seccionales de cuatro tipos:',
          ],
          bullets: [
            '30 Direcciones Seccionales de Impuestos y Aduanas (DSIA).',
            '6 Direcciones Seccionales de Aduanas (DSA).',
            '7 Direcciones Seccionales de Impuestos (DSI).',
            '7 Direcciones Seccionales Delegadas de Impuestos y Aduanas.',
          ],
          callout: {
            type: 'importante',
            text: 'La sigla DSIA (Dirección Seccional de Impuestos y Aduanas) aparece con frecuencia en la normativa interna de la DIAN: son las sedes regionales que integran ambas competencias.',
          },
        },
      ],
      summary: [
        'El nivel central se organiza en direcciones de gestión por procesos (Corporativa, Jurídica, Ingresos, Fiscalización, Aduanas) bajo la dirección general.',
        'La Dirección de Gestión de Fiscalización concentra la prevención, investigación, determinación, liquidación y sanción de tributos y de los regímenes aduanero y cambiario.',
        'Sus subdirecciones cubren fiscalización tributaria, aduanera e internacional y control cambiario, con coordinaciones de RILO/denuncias y de prevención de lavado de activos.',
        'En el territorio operan 30 DSIA, 6 DSA, 7 DSI y 7 Direcciones Seccionales Delegadas de Impuestos y Aduanas.',
        'El Director General puede redistribuir funciones mediante resolución (arts. 81-83, Decreto 1742 de 2020).',
      ],
      memorize: [
        '30 DSIA · 6 DSA · 7 DSI · 7 Seccionales Delegadas de Impuestos y Aduanas.',
        'Subdirecciones de Fiscalización: Tributaria, Aduanera, Internacional, Control Cambiario.',
        'Decreto 1742 de 2020 = estructura vigente; arts. 81-83 = distribución de funciones por resolución.',
      ],
      examples: [
        {
          heading: 'Ejemplo de lectura organizacional',
          paragraphs: [
            'Si una resolución interna menciona a la «Subdirección de Gestión de Control Cambiario», sabes que se trata de una dependencia del nivel central encargada de investigar y sancionar infracciones al régimen cambiario, y que su superior es la Dirección de Gestión de Fiscalización. Si menciona una «Dirección Seccional de Impuestos y Aduanas de Barranquilla», se trata de una sede territorial con competencias tributarias y aduaneras.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Atribuir la fiscalización a la Dirección de Gestión de Ingresos.',
          correction: 'Ingresos gestiona el cumplimiento voluntario, el recaudo y las devoluciones; la fiscalización (investigación, determinación, sanción) corresponde a la Dirección de Gestión de Fiscalización.',
        },
        {
          mistake: 'Creer que la DIAN solo opera desde Bogotá.',
          correction: 'Tiene presencia nacional mediante direcciones seccionales de cuatro tipos y puntos de contacto en múltiples municipios.',
        },
      ],
      norms: [
        {
          norm: 'Decreto 1742 de 2020',
          article: 'arts. 81-83',
          status: 'vigente',
          note: 'Facultad del Director General para distribuir funciones entre dependencias.',
        },
        {
          norm: 'Decreto 4048 de 2008',
          status: 'modificada',
          note: 'Estructura anterior; parcialmente sustituida por el Decreto 1742 de 2020.',
        },
      ],
      links: [
        { label: 'DIAN — Presentación de la entidad (estructura territorial)', url: 'https://www.dian.gov.co/dian/entidad/Paginas/Presentacion.aspx' },
        { label: 'SUIN-Juriscol — Decreto 1742 de 2020', url: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30040261' },
      ],
      mindmap: {
        root: 'Estructura DIAN',
        branches: [
          { label: 'Dirección General', children: ['Libre nombramiento y remoción', 'Delega funciones'] },
          { label: 'Nivel central', children: ['D. Corporativa', 'D. Jurídica', 'D. de Ingresos', 'D. de Fiscalización', 'D. de Aduanas'] },
          { label: 'Fiscalización', children: ['Tributaria', 'Aduanera', 'Internacional', 'Control Cambiario', 'LA/FT'] },
          { label: 'Territorio', children: ['30 DSIA', '6 DSA', '7 DSI', '7 Delegadas'] },
        ],
      },
      mindmapText:
        'La DIAN se organiza bajo una Dirección General de libre nombramiento y remoción presidencial. En el nivel central hay direcciones de gestión (Corporativa, Jurídica, de Ingresos, de Fiscalización y de Aduanas). La Dirección de Gestión de Fiscalización tiene subdirecciones de fiscalización tributaria, aduanera, internacional y de control cambiario, y coordinaciones de lavado de activos y de denuncias. En el territorio operan 30 direcciones seccionales de impuestos y aduanas, 6 de aduanas, 7 de impuestos y 7 delegadas de impuestos y aduanas.',
      source: [
        { doc: 'material', pages: 'sin desarrollo textual en los PDF', note: 'Contenido construido a partir de fuentes oficiales verificadas (Decreto 1742 de 2020, portal DIAN).' },
      ],
    },
    {
      id: 'm01-l03',
      moduleId: 'm01',
      title: 'La DIAN y los demás actores del sistema: CNSC, UIAF y Banco de la República',
      indicators: ['i01', 'i06'],
      objectives: [
        'Distinguir las funciones de la DIAN de las de la CNSC, la UIAF y el Banco de la República.',
        'Identificar los puntos de conexión entre la DIAN y la UIAF en materia de lavado de activos.',
        'Reconocer por qué la DIAN no es autoridad monetaria ni cambiaria de diseño normativo.',
      ],
      sections: [
        {
          heading: 'CNSC: quién provee el empleo, no quién manda en la DIAN',
          paragraphs: [
            'La Comisión Nacional del Servicio Civil (CNSC) administra y vigila la carrera administrativa y los procesos de selección por mérito. La convocatoria para el empleo de Gestor I (nivel profesional) de la DIAN es administrada por la CNSC, pero la CNSC no hace parte de la estructura orgánica de la DIAN ni define sus funciones misionales: la DIAN es la entidad que reporta la vacante y recibe al seleccionado.',
          ],
          callout: {
            type: 'importante',
            text: 'CNSC = administra el concurso de mérito. DIAN = entidad a la que se ingresa. Son instituciones distintas con funciones distintas.',
          },
        },
        {
          heading: 'UIAF: el socio de la DIAN contra el lavado de activos',
          paragraphs: [
            'La Unidad de Información y Análisis Financiero (UIAF) es la unidad de inteligencia financiera de Colombia: recibe los Reportes de Operaciones Sospechosas (ROS), los analiza y los traslada a las autoridades competentes. La DIAN es una de las entidades obligadas a suministrarle información y a reportar operaciones sospechosas detectadas en sus ámbitos (por ejemplo, en operaciones de comercio exterior), y la coordinación de control y prevención de lavado de activos de la Dirección de Gestión de Fiscalización canaliza esa cooperación.',
            'En el material oficial se destaca la función de «suministrar a la UIAF la información que reposa en los archivos de la DIAN y que requiera para documentar los reportes de operaciones sospechosas» (Decreto 4048 de 2008).',
          ],
        },
        {
          heading: 'Banco de la República: autoridad cambiaria, no la DIAN',
          paragraphs: [
            'El régimen cambiario colombiano se diseña y reglamenta por la Junta Directiva del Banco de la República (autoridad monetaria, cambiaria y crediticia). La DIAN no expide la normativa cambiaria de fondo: la aplica, controla e investiga su cumplimiento y sanciona sus infracciones en el ámbito administrativo. Confundir ambos roles es un error frecuente.',
          ],
          table: {
            caption: 'Distribución de roles',
            headers: ['Entidad', 'Rol frente a la DIAN'],
            rows: [
              ['CNSC', 'Administra el proceso de selección por mérito del empleo'],
              ['UIAF', 'Recibe y analiza ROS; la DIAN le reporta y le suministra información'],
              ['Banco de la República', 'Diseña el régimen cambiario; la DIAN lo controla y sanciona'],
              ['Ministerio de Hacienda', 'Sector al que está adscrita la DIAN; define política fiscal'],
            ],
          },
        },
      ],
      summary: [
        'La CNSC administra el concurso; la DIAN es la entidad de destino. No hay relación de jerarquía entre ellas.',
        'La UIAF es la unidad de inteligencia financiera; la DIAN es fuente de información y reportante de operaciones sospechosas.',
        'El Banco de la República es la autoridad monetaria y cambiaria; la DIAN aplica y controla el régimen cambiario y sanciona administrativamente.',
      ],
      memorize: [
        'UIAF recibe ROS → analiza → traslada a autoridades.',
        'Banco de la República = autoridad cambiaria (Junta Directiva). DIAN = control y sanción cambiaria.',
        'CNSC = mérito; DIAN = entidad.',
      ],
      examples: [
        {
          heading: 'Ejemplo integrador',
          paragraphs: [
            'Una exportadora recibe divisas y no las canaliza por el mercado cambiario. El diseño de la obligación de canalización proviene del régimen expedido por la Junta Directiva del Banco de la República; la investigación y la sanción administrativa las adelanta la DIAN (Subdirección de Gestión de Control Cambiario); y si la operación tiene señales de lavado de activos, la DIAN debe reportar a la UIAF. Tres instituciones, tres roles, un mismo caso.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Pensar que la DIAN expide el régimen cambiario.',
          correction: 'El régimen cambiario lo expide la Junta Directiva del Banco de la República. La DIAN lo aplica, investiga y sanciona.',
        },
        {
          mistake: 'Creer que la UIAF sanciona el lavado de activos.',
          correction: 'La UIAF analiza información de inteligencia financiera y la traslada; las sanciones penales las imponen los jueces y las administrativas cada entidad competente.',
        },
      ],
      norms: [
        {
          norm: 'Ley 526 de 1999',
          status: 'verificar',
          note: 'Creación de la UIAF; verificar modificaciones posteriores.',
        },
        {
          norm: 'Decreto 4048 de 2008',
          status: 'modificada',
          note: 'Función de suministrar información a la UIAF para documentar ROS.',
        },
        {
          norm: 'Constitución Política',
          article: 'arts. 371-373',
          status: 'vigente',
          note: 'Banco de la República como autoridad monetaria, cambiaria y crediticia.',
        },
      ],
      links: [
        { label: 'UIAF', url: 'https://www.uiaf.gov.co/' },
        { label: 'Banco de la República', url: 'https://www.banrep.gov.co/' },
        { label: 'CNSC', url: 'https://www.cnsc.gov.co/' },
      ],
      mindmap: {
        root: 'Actores',
        branches: [
          { label: 'CNSC', children: ['Concurso de mérito', 'Carrera administrativa'] },
          { label: 'UIAF', children: ['Recibe ROS', 'Analiza', 'Traslada'] },
          { label: 'Banco de la República', children: ['Autoridad cambiaria', 'Junta Directiva'] },
          { label: 'DIAN', children: ['Controla', 'Sanciona', 'Reporta a la UIAF'] },
        ],
      },
      mindmapText:
        'Cuatro actores se relacionan con el trabajo de un Gestor I: la CNSC administra el concurso de mérito; la UIAF recibe y analiza los reportes de operaciones sospechosas que la DIAN le suministra; el Banco de la República diseña el régimen cambiario; y la DIAN controla, investiga y sanciona el cumplimiento de las obligaciones tributarias, aduaneras y cambiarias.',
      source: [
        { doc: 'material', pages: 'pág. 408 (objeto de la DIAN)', note: 'Complementado con fuentes oficiales verificadas.' },
      ],
    },
  ],
}
