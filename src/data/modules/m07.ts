import type { ModuleDef } from '../types'

// ============================================================
// Módulo 7 — Procedimientos administrativos y auditoría
// Indicador: i07 (normas y técnicas de auditoría)
// Este tema NO está desarrollado en los PDF de estudio; el
// contenido se construyó a partir de fuentes oficiales
// verificadas el 2026-10-15 (Ley 43 de 1990, Ley 1314 de 2009,
// Decreto 2420 de 2015, Ley 42 de 1993, Ley 610 de 2000,
// ISSAI/INTOSAI y Ley 1437 de 2011).
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm07',
  order: 7,
  title: 'Procedimientos administrativos y auditoría',
  description:
    'Las normas y técnicas de auditoría: de las NAGA de la Ley 43 de 1990 a las Normas de Aseguramiento de la Información y las ISSAI del control fiscal, más los fundamentos del procedimiento administrativo que aplica la DIAN.',
  indicators: ['i07'],
  lessons: [
    {
      id: 'm07-l01',
      moduleId: 'm07',
      title: 'Normas de auditoría generalmente aceptadas (NAGA) y su evolución a las NAI',
      indicators: ['i07'],
      objectives: [
        'Identificar los tres grupos de normas de auditoría generalmente aceptadas (NAGA) de la Ley 43 de 1990.',
        'Explicar la evolución de las NAGA hacia las Normas de Aseguramiento de la Información (NAI).',
        'Distinguir normas personales, de ejecución del trabajo y de rendición de informes.',
      ],
      sections: [
        {
          heading: '¿Qué son las NAGA?',
          paragraphs: [
            'Las Normas de Auditoría Generalmente Aceptadas (NAGA) son los requisitos mínimos de calidad relativos a la personalidad del auditor, al trabajo que desempeña y a la información que rinde. En Colombia fueron consagradas por el artículo 7 de la Ley 43 de 1990, que reglamenta la profesión de contador público.',
            'El artículo 8 de la misma ley obliga a los contadores públicos a observar las NAGA en sus trabajos. Un error conceptual frecuente es citar el artículo 23 de la Ley 43 de 1990 como fuente de las NAGA: ese artículo se refiere a otra materia; las NAGA están en el artículo 7.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Las NAGA están en el ARTÍCULO 7 de la Ley 43 de 1990, organizadas en TRES grupos: personales, de ejecución del trabajo y de rendición de informes.',
          },
        },
        {
          heading: 'Los tres grupos de NAGA',
          paragraphs: ['La Ley 43 de 1990 organiza las NAGA así:'],
          table: {
            caption: 'Clasificación de las NAGA (Ley 43 de 1990, art. 7)',
            headers: ['Grupo', 'Normas'],
            rows: [
              ['Normas personales', 'Entrenamiento y capacidad profesional; autorización legal (tarjeta profesional); independencia mental; diligencia y cuidado profesional'],
              ['Normas de ejecución del trabajo', 'Planeación y supervisión; estudio y evaluación del sistema de control interno; obtención de evidencia válida y suficiente'],
              ['Normas de rendición de informes', 'Manifestación del alcance del examen; opinión sobre los estados financieros (razonabilidad, PCGA, consistencia); revelaciones suficientes; abstención de opinión cuando no hay evidencia suficiente'],
            ],
          },
        },
        {
          heading: 'De las NAGA a las NAI',
          paragraphs: [
            'Con la Ley 1314 de 2009 (convergencia a estándares internacionales) y el Decreto 2420 de 2015, las NAGA evolucionaron hacia las Normas de Aseguramiento de la Información (NAI), que comprenden las NIA (auditoría de información financiera), las NICC (control de calidad), las NITR (trabajos de revisión), las ISAE (otros encargos de aseguramiento) y las NISR (servicios relacionados).',
            'Para el sector público, el control fiscal utiliza el marco ISSAI (INTOSAI): la Declaración de Lima (ISSAI 1), los prerrequisitos de independencia, transparencia y ética (ISSAI 10-40), los principios fundamentales de auditoría financiera, de desempeño y de cumplimiento (ISSAI 100-400) y las guías de aplicación (ISSAI 1000-5600).',
          ],
          callout: {
            type: 'importante',
            text: 'NAGA (Ley 43/1990) → sector privado histórico. NAI (Ley 1314/2009, D. 2420/2015) → aseguramiento actual. ISSAI (INTOSAI) → control fiscal público (CGR). Los tres marcos conviven según el tipo de encargo.',
          },
        },
      ],
      summary: [
        'Las NAGA son requisitos mínimos de calidad del trabajo del auditor: personales, de ejecución y de informes (Ley 43 de 1990, art. 7).',
        'La convergencia internacional las transformó en NAI (NIA, NICC, NITR, ISAE, NISR) mediante Ley 1314 de 2009 y Decreto 2420 de 2015.',
        'En el control fiscal se aplican las ISSAI de la INTOSAI (ISSAI 1 Lima; 10-40 prerrequisitos; 100-400 principios; 1000-5600 guías).',
      ],
      memorize: [
        'NAGA = 3 grupos: personales · ejecución del trabajo · rendición de informes.',
        'Ley 43 de 1990, ARTÍCULO 7 (no el 23).',
        'NAI = NIA + NICC + NITR + ISAE + NISR (D. 2420 de 2015).',
        'ISSAI: 1 (Lima) · 10-40 (prerrequisitos) · 100-400 (principios) · 1000-5600 (guías).',
      ],
      examples: [
        {
          heading: 'Ejemplo de aplicación',
          paragraphs: [
            'Un auditor que emite una opinión sin haber obtenido evidencia suficiente viola una norma de rendición de informes (debe abstenerse de opinar). Un auditor que no planea el encargo viola una norma de ejecución del trabajo. Un contador que audita sin tarjeta profesional vigente viola una norma personal (autorización legal).',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Citar el artículo 23 de la Ley 43 de 1990 como la fuente de las NAGA.',
          correction: 'Las NAGA están en el artículo 7 de la Ley 43 de 1990; el artículo 23 trata otra materia. Es un error clásico de examen.',
        },
        {
          mistake: 'Creer que las NAGA fueron derogadas y ya no aplican.',
          correction: 'Las NAGA de la Ley 43 de 1990 siguen vigentes como marco de la profesión; para encargos de aseguramiento se aplican además las NAI del Decreto 2420 de 2015 según el tipo de trabajo.',
        },
      ],
      norms: [
        { norm: 'Ley 43 de 1990', article: 'arts. 7 y 8', status: 'vigente', note: 'NAGA y obligatoriedad de su observancia.' },
        { norm: 'Ley 1314 de 2009', status: 'vigente', note: 'Convergencia hacia estándares internacionales de aseguramiento.' },
        { norm: 'Decreto 2420 de 2015', status: 'vigente', note: 'Compila las NAI (NIA, NICC, NITR, ISAE, NISR) y sus anexos técnicos.' },
      ],
      links: [
        { label: 'CTCP — Compilación de conceptos sobre NAGA y NAI', url: 'https://www.ctcp.gov.co/publicaciones-ctcp/compilacion-de-conceptos/compilacion-de-conceptos-emitidos-por-el-conse-1/compilacion-de-conceptos-emitidos-por-el-consejo-t' },
        { label: 'SUIN-Juriscol — Ley 43 de 1990', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'NAGA → NAI',
        branches: [
          { label: 'Personales', children: ['Entrenamiento', 'Independencia', 'Diligencia profesional'] },
          { label: 'Ejecución', children: ['Planeación y supervisión', 'Control interno', 'Evidencia válida y suficiente'] },
          { label: 'Informes', children: ['Alcance', 'Opinión', 'Revelaciones', 'Abstención'] },
          { label: 'Evolución', children: ['Ley 43/1990', 'Ley 1314/2009', 'D. 2420/2015 (NAI)'] },
        ],
      },
      mindmapText:
        'Las NAGA de la Ley 43 de 1990 se agrupan en normas personales (entrenamiento, independencia, diligencia), de ejecución del trabajo (planeación, evaluación del control interno, evidencia) y de rendición de informes (alcance, opinión, revelaciones, abstención). Evolucionaron con la Ley 1314 de 2009 y el Decreto 2420 de 2015 hacia las Normas de Aseguramiento de la Información (NIA, NICC, NITR, ISAE, NISR).',
      source: [
        { doc: 'material', pages: 'no aplica', note: 'Tema no desarrollado en los PDF. Contenido construido a partir de fuentes oficiales verificadas el 2026-10-15 (Ley 43 de 1990, Decreto 2420 de 2015, conceptos CTCP).' },
      ],
      activityId: 'm07-a01',
    },
    {
      id: 'm07-l02',
      moduleId: 'm07',
      title: 'Control fiscal, ISSAI y tipos de auditoría pública',
      indicators: ['i07'],
      objectives: [
        'Identificar el marco constitucional y legal del control fiscal en Colombia.',
        'Describir la estructura de las normas ISSAI.',
        'Distinguir auditoría financiera, de cumplimiento y de desempeño.',
      ],
      sections: [
        {
          heading: 'El control fiscal en Colombia',
          paragraphs: [
            'El control fiscal es una función pública que vigila la gestión fiscal de la administración y de los particulares que manejan fondos o bienes públicos (Constitución Política, arts. 267 y ss.). Lo ejerce la Contraloría General de la República (CGR) y las contralorías territoriales. La Ley 42 de 1993 fija los principios, sistemas y procedimientos del control fiscal, y la Ley 610 de 2000 regula el trámite de los procesos de responsabilidad fiscal.',
            'Los principios de la gestión fiscal incluyen economía, eficiencia, eficacia, equidad y valoración de costos ambientales; su vigilancia produce el fenecimiento o no fenecimiento de la cuenta del responsable fiscal.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Control fiscal = CGR + contralorías territoriales. Leyes clave: Ley 42 de 1993 (control fiscal) y Ley 610 de 2000 (responsabilidad fiscal).',
          },
        },
        {
          heading: 'El marco ISSAI',
          paragraphs: [
            'La CGR aplica las Normas Internacionales de las Entidades Fiscalizadoras Superiores (ISSAI), emitidas por la INTOSAI, organizadas en niveles:',
          ],
          bullets: [
            'ISSAI 1: Declaración de Lima — fundamentos del control externo.',
            'ISSAI 10 a 40: prerrequisitos — independencia, transparencia, ética y control de calidad de la entidad fiscalizadora.',
            'ISSAI 100 a 400: principios fundamentales de la auditoría financiera, de desempeño y de cumplimiento.',
            'ISSAI 1000 a 5600: guías de aplicación práctica.',
          ],
        },
        {
          heading: 'Tipos de auditoría',
          table: {
            caption: 'Tipos de auditoría en el sector público',
            headers: ['Tipo', 'Objeto'],
            rows: [
              ['Auditoría financiera', 'Determinar si la información financiera está presentada razonablemente conforme al marco aplicable (opinión)'],
              ['Auditoría de cumplimiento', 'Verificar si las operaciones cumplen las normas legales y reglamentarias aplicables'],
              ['Auditoría de desempeño (gestión y resultados)', 'Evaluar economía, eficiencia y eficacia de las políticas, programas y operaciones'],
            ],
          },
          callout: {
            type: 'importante',
            text: 'La auditoría de cumplimiento incluye comprobar que las operaciones económicas se realizaron conforme a las normas legales: es el tipo más cercano al trabajo de fiscalización de la DIAN.',
          },
        },
      ],
      summary: [
        'El control fiscal vigila la gestión de los recursos públicos (C.P. arts. 267 y ss.; Ley 42 de 1993; Ley 610 de 2000).',
        'Las ISSAI organizan el trabajo de las entidades fiscalizadoras en prerrequisitos, principios y guías (ISSAI 1, 10-40, 100-400, 1000-5600).',
        'Los tres tipos básicos de auditoría pública son financiera, de cumplimiento y de desempeño.',
      ],
      memorize: [
        'Ley 42 de 1993 = control fiscal · Ley 610 de 2000 = responsabilidad fiscal.',
        'ISSAI 1 = Lima · 10-40 = prerrequisitos · 100-400 = principios · 1000-5600 = guías.',
        'Auditorías: financiera (razonabilidad) · cumplimiento (legalidad) · desempeño (economía, eficiencia, eficacia).',
      ],
      examples: [
        {
          heading: 'Ejemplo',
          paragraphs: [
            'La CGR, al auditar una entidad, puede emitir opinión sobre sus estados financieros (auditoría financiera), verificar que los contratos cumplieron las normas (auditoría de cumplimiento) y evaluar si el programa cumplió sus metas al menor costo (auditoría de desempeño). El informe resultante puede llevar al fenecimiento o no de la cuenta.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Confundir control fiscal con revisoría fiscal.',
          correction: 'La revisoría fiscal es un órgano de fiscalización privado de las sociedades (Código de Comercio); el control fiscal es la vigilancia pública sobre los recursos del Estado que ejercen las contralorías.',
        },
        {
          mistake: 'Creer que las ISSAI son normas para contadores privados.',
          correction: 'Las ISSAI son normas de la INTOSAI para las Entidades Fiscalizadoras Superiores (contralorías); los encargos privados usan las NAI.',
        },
      ],
      norms: [
        { norm: 'Constitución Política', article: 'arts. 267-274', status: 'vigente', note: 'Control fiscal.' },
        { norm: 'Ley 42 de 1993', status: 'vigente', note: 'Organización del sistema de control fiscal financiero.' },
        { norm: 'Ley 610 de 2000', status: 'vigente', note: 'Trámite de los procesos de responsabilidad fiscal.' },
      ],
      links: [
        { label: 'Contraloría General de la República — Guía de auditoría de cumplimiento', url: 'https://portalcef.contraloria.gov.co/' },
        { label: 'Contraloría General de la República', url: 'https://www.contraloria.gov.co/' },
      ],
      mindmap: {
        root: 'Control fiscal',
        branches: [
          { label: 'Marco', children: ['C.P. 267 y ss.', 'Ley 42/1993', 'Ley 610/2000'] },
          { label: 'ISSAI', children: ['1 Lima', '10-40 prerrequisitos', '100-400 principios', '1000-5600 guías'] },
          { label: 'Tipos', children: ['Financiera', 'Cumplimiento', 'Desempeño'] },
          { label: 'Resultado', children: ['Fenecimiento de cuenta', 'Hallazgos', 'Procesos de responsabilidad fiscal'] },
        ],
      },
      mindmapText:
        'El control fiscal se fundamenta en la Constitución (arts. 267 y ss.), la Ley 42 de 1993 y la Ley 610 de 2000, y lo ejercen la CGR y las contralorías territoriales. Aplican las normas ISSAI de la INTOSAI (Declaración de Lima, prerrequisitos, principios y guías) para realizar auditorías financieras, de cumplimiento y de desempeño, que concluyen con el fenecimiento o no de la cuenta.',
      source: [
        { doc: 'material', pages: 'no aplica', note: 'Tema no desarrollado en los PDF. Contenido construido a partir de fuentes oficiales verificadas el 2026-10-15.' },
      ],
    },
    {
      id: 'm07-l03',
      moduleId: 'm07',
      title: 'El procedimiento administrativo general (Ley 1437 de 2011)',
      indicators: ['i07'],
      objectives: [
        'Identificar los principios del procedimiento administrativo colombiano.',
        'Describir los recursos en vía administrativa y sus plazos generales.',
        'Relacionar el CPACA con los procedimientos especiales tributarios, aduaneros y cambiarios.',
      ],
      sections: [
        {
          heading: 'El CPACA y sus principios',
          paragraphs: [
            'La Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo, CPACA) regula las actuaciones de las autoridades administrativas. Sus principios (art. 3) incluyen el debido proceso, la igualdad, la imparcialidad, la buena fe, la moralidad, la participación, la responsabilidad, la transparencia, la publicidad, la coordinación, la eficacia, la economía y la celeridad.',
            'Estos principios aplican a todas las actuaciones de la DIAN que no tengan procedimiento especial; cuando existe procedimiento especial (tributario del Estatuto Tributario, aduanero o cambiario), este prima y el CPACA se aplica de manera supletiva.',
          ],
          callout: {
            type: 'importante',
            text: 'El CPACA es la norma GENERAL del procedimiento administrativo. Los procedimientos tributario (Libro V del ET), aduanero y cambiario son ESPECIALES y prevalecen sobre aquel.',
          },
        },
        {
          heading: 'Actos administrativos y recursos',
          paragraphs: [
            'Los actos administrativos son manifestaciones unilaterales de voluntad de la administración que crean, modifican o extinguen situaciones jurídicas. Deben ser expedidos por funcionario competente y motivados, y se presumen legales, pero pueden controvertirse.',
            'Contra los actos administrativos proceden los recursos de reposición (ante el mismo funcionario), apelación (ante el superior) y queja (cuando se rechaza la apelación). En materia tributaria, contra la liquidación oficial de revisión procede el recurso de reconsideración (procedimiento especial del ET).',
          ],
          table: {
            caption: 'Recursos y a quién se dirigen',
            headers: ['Recurso', 'Se interpone ante', 'Decide'],
            rows: [
              ['Reposición', 'El funcionario que expidió el acto', 'El mismo funcionario'],
              ['Apelación', 'El funcionario que expidió el acto', 'El superior jerárquico'],
              ['Queja', 'El superior del funcionario que rechazó la apelación', 'El superior jerárquico'],
              ['Reconsideración (tributario)', 'La DIAN (contra liquidaciones oficiales)', 'La DIAN'],
            ],
          },
        },
        {
          heading: 'Derecho de petición y términos',
          paragraphs: [
            'El derecho de petición (Ley 1755 de 2015, que reglamenta el art. 23 C.P.) tiene términos generales: 15 días hábiles para peticiones generales, 10 para peticiones de documentos e información, 30 para consultas. La administración debe responder de fondo, de manera clara, oportuna y congruente; el silencio administrativo positivo opera solo en los casos previstos expresamente por la ley, y el silencio administrativo negativo habilita el control judicial.',
            'En el procedimiento tributario rigen además el silencio administrativo positivo del artículo 734 del ET (cuando la DIAN no resuelve recursos de reconsideración dentro del término) y los términos especiales del Libro V.',
          ],
        },
      ],
      summary: [
        'La Ley 1437 de 2011 (CPACA) es el régimen general del procedimiento administrativo: principios, actos, recursos y términos.',
        'Los procedimientos especiales (tributario, aduanero, cambiario) prevalecen; el CPACA es supletorio.',
        'Recursos: reposición, apelación, queja; en lo tributario, reconsideración.',
        'Derecho de petición: 15 días general, 10 documentos, 30 consultas (Ley 1755 de 2015).',
      ],
      memorize: [
        'CPACA = Ley 1437 de 2011; principios en el art. 3.',
        'Reposición (mismo) · Apelación (superior) · Queja (cuando rechazan apelación) · Reconsideración (tributario).',
        'Peticiones: 15 general · 10 documentos · 30 consultas.',
        'Especial prima sobre general: ET > CPACA en materia tributaria.',
      ],
      examples: [
        {
          heading: 'Ejemplo integrador',
          paragraphs: [
            'Un contribuyente recibe una liquidación oficial de revisión de la DIAN: el procedimiento para discutirla es el especial del ET (recurso de reconsideración, art. 720 ET), no el recurso de apelación del CPACA. En cambio, una petición de copias de un expediente de fiscalización se rige por el derecho de petición (10 días hábiles para documentos).',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Aplicar los recursos del CPACA a los actos de determinación tributaria.',
          correction: 'Contra las liquidaciones oficiales de la DIAN procede el recurso de reconsideración del ET (procedimiento especial), no la apelación del CPACA.',
        },
        {
          mistake: 'Creer que el silencio administrativo siempre es positivo.',
          correction: 'El silencio positivo solo opera en los casos expresamente previstos (p. ej., art. 734 ET); en general el silencio es negativo y habilita la demanda.',
        },
      ],
      norms: [
        { norm: 'Ley 1437 de 2011', article: 'art. 3 y ss.', status: 'vigente', note: 'CPACA: principios, actos y recursos.' },
        { norm: 'Ley 1755 de 2015', status: 'vigente', note: 'Derecho de petición: términos.' },
        { norm: 'Estatuto Tributario', article: 'arts. 720, 734', status: 'vigente', note: 'Recurso de reconsideración y silencio positivo tributario.' },
      ],
      links: [
        { label: 'SUIN-Juriscol — Ley 1437 de 2011', url: 'https://www.suin-juriscol.gov.co/' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
      ],
      mindmap: {
        root: 'Procedimiento administrativo',
        branches: [
          { label: 'Norma general', children: ['Ley 1437/2011 (CPACA)', 'Principios art. 3'] },
          { label: 'Procedimientos especiales', children: ['Tributario (ET)', 'Aduanero', 'Cambiario'] },
          { label: 'Recursos', children: ['Reposición', 'Apelación', 'Queja', 'Reconsideración'] },
          { label: 'Derecho de petición', children: ['15 días general', '10 documentos', '30 consultas'] },
        ],
      },
      mindmapText:
        'El procedimiento administrativo general está en la Ley 1437 de 2011 (CPACA), con principios en su artículo 3. Los procedimientos especiales tributario, aduanero y cambiario prevalecen sobre el general. Los recursos son reposición, apelación y queja, y en materia tributaria la reconsideración. El derecho de petición tiene términos de 15, 10 y 30 días hábiles según su tipo.',
      source: [
        { doc: 'material', pages: 'no aplica', note: 'Tema no desarrollado en los PDF. Contenido construido a partir de fuentes oficiales verificadas el 2026-10-15.' },
      ],
    },
    {
      id: 'm07-l04',
      moduleId: 'm07',
      title: 'Técnicas de auditoría: evidencia, riesgo y procedimientos',
      indicators: ['i07'],
      objectives: [
        'Describir los procedimientos y técnicas para obtener evidencia de auditoría.',
        'Explicar el modelo de riesgo de auditoría.',
        'Aplicar los conceptos de pruebas de control y pruebas sustantivas.',
      ],
      sections: [
        {
          heading: 'Evidencia de auditoría',
          paragraphs: [
            'La evidencia es la información que usa el auditor para llegar a sus conclusiones. Debe ser suficiente (cantidad) y adecuada (calidad: relevante y fiable). Las técnicas clásicas incluyen inspección, observación, confirmación externa, recalculo, reejecución, procedimientos analíticos e indagación.',
            'Los papeles de trabajo documentan la evidencia y el juicio del auditor: quién, qué, cuándo y por qué. Son el soporte de las conclusiones y de la defensa del trabajo ante terceros.',
          ],
          table: {
            caption: 'Técnicas para obtener evidencia',
            headers: ['Técnica', 'En qué consiste'],
            rows: [
              ['Inspección', 'Examen físico de documentos y activos'],
              ['Observación', 'Presenciar procesos o procedimientos de otros'],
              ['Confirmación externa', 'Respuesta escrita directa de un tercero (p. ej., bancos, clientes)'],
              ['Recálculo', 'Verificar la exactitud aritmética de registros'],
              ['Reejecución', 'Repetir controles o procedimientos ejecutados por la entidad'],
              ['Procedimientos analíticos', 'Comparar cifras y relaciones (tendencias, razones) para detectar anomalías'],
              ['Indagación', 'Obtener información de personas conocedoras'],
            ],
          },
        },
        {
          heading: 'Riesgo de auditoría',
          paragraphs: [
            'El riesgo de auditoría es la probabilidad de expresar una opinión inadecuada cuando la información contiene errores materiales. Se descompone en riesgo inherente (propio de la naturaleza del negocio o del saldo), riesgo de control (que el control interno no lo prevenga o detecte) y riesgo de detección (que los procedimientos del auditor no lo detecten).',
            'El auditor diseña procedimientos para mantener el riesgo de auditoría en un nivel aceptablemente bajo: si el riesgo inherente y de control son altos, debe reducir el riesgo de detección con más y mejor evidencia (mayor alcance de pruebas sustantivas).',
          ],
          callout: {
            type: 'memoriza',
            text: 'Riesgo de auditoría = Riesgo inherente × Riesgo de control × Riesgo de detección. El único que el auditor controla directamente es el de detección.',
          },
        },
        {
          heading: 'Pruebas de control y pruebas sustantivas',
          paragraphs: [
            'Las pruebas de control evalúan la eficacia operativa de los controles internos (p. ej., verificar que toda declaración pase por revisión de un supervisor). Las pruebas sustantivas examinan directamente los saldos y transacciones (p. ej., recalcular el impuesto, confirmar ingresos con terceros, comparar declarado vs. información exógena).',
            'En la fiscalización de la DIAN el enfoque es análogo: se cruza la información reportada por terceros (exógena), se verifican soportes, se recalculan bases y se confirman operaciones; si hay inconsistencias, se profundiza con visitas e inspección. El muestreo estadístico o no estadístico permite examinar una porción representativa del universo.',
          ],
        },
      ],
      summary: [
        'La evidencia debe ser suficiente y adecuada; se obtiene con inspección, observación, confirmación, recálculo, reejecución, análisis e indagación, y se documenta en papeles de trabajo.',
        'El riesgo de auditoría = inherente × control × detección; el auditor administra el de detección con el alcance de las pruebas.',
        'Las pruebas de control evalúan controles; las sustantivas examinan saldos y transacciones directamente.',
      ],
      memorize: [
        'Evidencia: suficiente (cantidad) y adecuada (calidad).',
        'RA = RI × RC × RD.',
        'Confirmación externa = respuesta directa del tercero (evidencia de alta fiabilidad).',
        'Papeles de trabajo documentan: quién, qué, cuándo, por qué.',
      ],
      examples: [
        {
          heading: 'Ejemplo aplicado a fiscalización',
          paragraphs: [
            'La DIAN detecta que un contribuyente declaró ingresos por $500 millones pero la información exógena reporta ventas por $800 millones (procedimiento analítico). Emite requerimiento, solicita soportes (inspección documental), confirma con los principales clientes (confirmación externa) y recalcula el impuesto con la nueva base (recálculo). Con evidencia suficiente expide la liquidación oficial de revisión.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que el auditor puede eliminar el riesgo de auditoría a cero.',
          correction: 'El riesgo nunca es cero: el auditor lo reduce a un nivel aceptablemente bajo con procedimientos adecuados.',
        },
        {
          mistake: 'Confundir pruebas de control con pruebas sustantivas.',
          correction: 'Las de control evalúan el funcionamiento de los controles; las sustantivas verifican directamente saldos, transacciones y revelaciones.',
        },
      ],
      norms: [
        { norm: 'Ley 43 de 1990', article: 'art. 7', status: 'vigente', note: 'NAGA de ejecución: evidencia válida y suficiente, evaluación del control interno.' },
        { norm: 'Decreto 2420 de 2015', status: 'vigente', note: 'NIA 500 (evidencia), NIA 315 (riesgo), NIA 330 (respuestas al riesgo).' },
      ],
      links: [
        { label: 'CTCP — conceptos sobre NAI', url: 'https://www.ctcp.gov.co/' },
        { label: 'Normograma DIAN', url: 'https://normograma.dian.gov.co/dian/' },
      ],
      mindmap: {
        root: 'Técnicas de auditoría',
        branches: [
          { label: 'Evidencia', children: ['Suficiente', 'Adecuada', 'Papeles de trabajo'] },
          { label: 'Técnicas', children: ['Inspección', 'Confirmación', 'Recálculo', 'Análisis'] },
          { label: 'Riesgo', children: ['Inherente', 'De control', 'De detección'] },
          { label: 'Pruebas', children: ['De control', 'Sustantivas', 'Muestreo'] },
        ],
      },
      mindmapText:
        'Las técnicas de auditoría buscan evidencia suficiente y adecuada mediante inspección, observación, confirmación externa, recálculo, reejecución, procedimientos analíticos e indagación, documentada en papeles de trabajo. El riesgo de auditoría se descompone en inherente, de control y de detección. Las pruebas pueden ser de control o sustantivas, aplicadas sobre muestras representativas.',
      source: [
        { doc: 'material', pages: 'no aplica', note: 'Tema no desarrollado en los PDF. Contenido construido a partir de fuentes oficiales verificadas el 2026-10-15.' },
      ],
    },
  ],
}
