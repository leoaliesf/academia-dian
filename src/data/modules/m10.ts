import type { ModuleDef } from '../types'

// ============================================================
// Módulo 10 — Régimen cambiario
// Indicador: i08 (normativa cambiaria)
// Fuente principal: TACI, Unidades 4 a 8 (págs. 132-164).
// Verificación normativa: la Junta Directiva del Banco de la República es la
// autoridad cambiaria (art. 371 C.P.). El régimen vigente es la Resolución
// Externa 1 de 2018, que sustituyó a la Resolución Externa 8 de 2000. Las
// sanciones cambiarias se liquidan en UVT y no en salarios mínimos, como
// ocurría bajo el derogado Decreto 1092 de 1996.
// ============================================================

export const MODULE: ModuleDef = {
  id: 'm10',
  order: 10,
  title: 'Régimen cambiario',
  description:
    'Marco constitucional y legal del régimen cambiario, mercado cambiario y mercado libre, obligación de canalización de divisas, declaración de cambio, obligaciones formales cambiarias, procedimiento de competencia de la DIAN y régimen probatorio y sancionatorio cambiario.',
  indicators: ['i08'],
  lessons: [
    {
      id: 'm10-l01',
      moduleId: 'm10',
      title: 'El régimen cambiario colombiano: marco constitucional y legal, mercado cambiario y mercado libre',
      indicators: ['i08'],
      objectives: [
        'Definir el régimen cambiario y explicar su finalidad en una economía abierta.',
        'Identificar el fundamento constitucional del régimen cambiario y la autoridad competente para expedirlo.',
        'Enunciar las normas que integran el marco legal cambiario y su jerarquía.',
        'Delimitar el mercado cambiario y el mercado libre, y precisar los usos permitidos de este último.',
        'Manejar el vocabulario técnico: divisa, canalización, monetización, IMC, numeral cambiario, operaciones internas.',
      ],
      sections: [
        {
          heading: '¿Qué es el régimen cambiario?',
          paragraphs: [
            'El régimen cambiario es el sistema de normas que regula el comercio internacional y, en general, los cambios internacionales: regula la tenencia, posesión, negociación, canalización, reintegro, inversión y demás operaciones de cambio que realizan los residentes y no residentes en el país. Al organizar el mercado de divisas, el régimen cambiario cumple tres funciones: permite al Banco de la República controlar la moneda y los cambios internacionales para proteger el poder adquisitivo de la moneda y preservar la estabilidad macroeconómica; sirve de insumo para la política económica; y permite a la DIAN y demás autoridades prevenir el lavado de activos y la evasión.',
            'Las infracciones al régimen cambiario no son delitos ni infracciones tributarias: son contravenciones administrativas que la DIAN investiga y sanciona en el ejercicio de su función de control. El régimen de cambios internacionales no regula el valor de la tasa de cambio: la tasa de cambio resulta del mercado y se certifica oficialmente para las liquidaciones que requieren conversión a moneda legal colombiana.',
          ],
        },
        {
          heading: 'Marco constitucional',
          paragraphs: [
            'La Constitución Política fija el marco dentro del cual se mueve toda la regulación cambiaria:',
          ],
          table: {
            caption: 'Disposiciones constitucionales relevantes',
            headers: ['Disposición', 'Contenido y efecto'],
            rows: [
              ['Artículo 113', 'Principio de colaboración armónica entre los órganos del Estado: fundamenta la articulación entre el Banco de la República, el Gobierno, la DIAN, la UIAF y la Superintendencia Financiera en el control cambiario.'],
              ['Artículo 150 (letra d) del numeral 19)', 'Reserva de ley marco: corresponde al Congreso expedir las normas generales a las que debe sujetarse el Gobierno para regular el régimen cambiario, la actividad financiera, bursátil y aseguradora y el manejo de los cambios internacionales. En desarrollo de esa competencia se expidió la Ley 9 de 1991, ley marco de cambios internacionales.'],
              ['Artículo 189', 'Potestad reglamentaria del Presidente de la República, ejercida mediante decretos que desarrollan la ley marco (por ejemplo, los decretos compilados en el Decreto 1068 de 2015).'],
              ['Artículo 371', 'La Junta Directiva del Banco de la República es la autoridad monetaria, cambiaria y crediticia del país.'],
              ['Artículo 372', 'El Banco de la República cumple las funciones de regular la moneda, los cambios internacionales y el crédito, y de administrar las reservas internacionales.'],
              ['Artículo 373', 'Regula el manejo del régimen cambiario por el Banco de la República y las facultades del Gobierno en la materia, en el marco del objetivo del Banco de preservar el poder adquisitivo de la moneda.'],
            ],
          },
          callout: {
            type: 'norma',
            text: 'Artículo 371 de la Constitución Política: la Junta Directiva del Banco de la República es la autoridad monetaria, cambiaria y crediticia. De allí se desprende la conclusión que más se pregunta: quien expide el régimen cambiario es la Junta Directiva del Banco de la República, no el Gobierno ni la DIAN.',
          },
        },
        {
          heading: 'Marco legal del régimen cambiario',
          paragraphs: [
            'El marco legal cambiario se integra por leyes marco, leyes ordinarias, decretos reglamentarios y la regulación expedida por la Junta Directiva del Banco de la República mediante resoluciones externas.',
          ],
          table: {
            caption: 'Jerarquía y contenido del marco legal cambiario',
            headers: ['Norma', 'Contenido'],
            rows: [
              ['Ley 9 de 1991', 'Ley marco de cambios internacionales: normas generales a las que debe someterse el Gobierno para regular el comercio exterior, los cambios internacionales y el régimen de inversión de capitales del exterior y de capitales colombianos en el exterior.'],
              ['Ley 31 de 1992', 'Funciones del Banco de la República, incluida la de regular los cambios internacionales y la de expedir la regulación cambiaria por medio de su Junta Directiva.'],
              ['Decreto 2520 de 1993', 'Antiguo régimen de cambios internacionales en materia de endeudamiento externo, avales y garantías; su contenido está hoy compilado y actualizado en el Decreto 1068 de 2015 (Decreto Único Reglamentario del Sector Hacienda y Crédito Público).'],
              ['Decreto 1735 de 1993', 'Normas de cambios internacionales concordantes con la Ley 9 de 1991: modalidades de reintegro, pagos y estipulación de obligaciones en moneda extranjera entre residentes.'],
              ['Decreto 1068 de 2015 y Decreto 119 de 2018', 'Decreto Único Reglamentario del Sector Hacienda y Crédito Público y su modificatorio en materia cambiaria; recogen, entre otras, las normas de endeudamiento externo e inversión internacional.'],
              ['Resolución Externa 1 de 2018 de la Junta Directiva del Banco de la República', 'Norma vigente que compila el régimen de cambios internacionales: define el mercado cambiario, las operaciones de obligatoria canalización, los intermediarios del mercado cambiario, las cuentas de compensación y las declaraciones de cambio. Sustituyó a la Resolución Externa 8 de 2000.'],
              ['Circular Reglamentaria Externa DCIN-83 del Banco de la República', 'Instrucciones operativas del régimen cambiario (procedimientos, formularios y plazos). Su contenido se actualiza permanentemente, por lo que siempre debe consultarse la versión vigente.'],
            ],
          },
        },
        {
          heading: 'El mercado cambiario y el mercado libre',
          paragraphs: [
            'El mercado cambiario es el conjunto de operaciones de cambio de obligatoria canalización: las divisas que se originan en esas operaciones deben ser reintegradas a través de los intermediarios del mercado cambiario (IMC), de las cuentas de compensación o de los demás mecanismos autorizados. Fuera de él existe un mercado libre, en el que residentes y no residentes pueden comprar, vender, poseer y negociar divisas sin la obligación de canalizar por el mercado cambiario.',
            'La delimitación es la clave del control: si una operación es de obligatoria canalización y las divisas no se canalizan, hay infracción cambiaria aunque la operación se haya declarado a la DIAN; y a la inversa, las divisas que se adquieren legítimamente en el mercado libre no se convierten en canalizables por el solo hecho de mantenerse en el exterior o en efectivo.',
          ],
          bullets: [
            'Operaciones del mercado cambiario (obligatoria canalización): importaciones y exportaciones de bienes y servicios y gastos asociados; endeudamiento externo y sus servicios financieros; inversión extranjera en Colombia y colombiana en el exterior; inversiones financieras en el exterior y de capitales del exterior en el país; avales y garantías en moneda extranjera; operaciones con derivados y con instrumentos financieros internacionales; y las demás señaladas en la resolución externa.',
            'Mercado libre: las divisas que se negocian en él se destinan, entre otros usos, a gastos personales y de viaje, compras con tarjeta de crédito, pagos de servicios prestados en el exterior dentro de los límites del régimen, remesas familiares y la tenencia de divisas por parte de residentes y no residentes, en los términos de la resolución externa.',
          ],
          callout: {
            type: 'importante',
            text: 'La DIAN no expide el régimen cambiario: lo controla. El control lo ejerce sobre las obligaciones de canalización, reintegro y declaración de cambio, y su inobservancia genera sanción administrativa cambiaria. Las infracciones cambiarias son contravenciones administrativas, no delitos.',
          },
        },
        {
          heading: 'Conceptos fundamentales del régimen cambiario',
          paragraphs: [
            'La precisión del vocabulario es indispensable para resolver casos: los formularios, los numerales cambiarios y las sanciones se construyen sobre estas definiciones.',
          ],
          table: {
            caption: 'Definiciones del régimen cambiario',
            headers: ['Concepto', 'Definición'],
            rows: [
              ['Divisa', 'Toda moneda extranjera y los activos financieros denominados en moneda extranjera, cualquiera que sea su forma (billetes, depósitos, cheques, títulos, créditos).'],
              ['Canalización', 'Reintegro o negociación de las divisas del mercado cambiario a través de los intermediarios del mercado cambiario o de los demás mecanismos autorizados (cuentas de compensación, aplicación al pago de obligaciones en moneda extranjera).'],
              ['Monetización', 'Conversión de divisas a moneda legal colombiana.'],
              ['Numeral cambiario', 'Código que identifica cada tipo de operación de cambio en la declaración de cambio y permite a la DIAN cruzar la información con las operaciones aduaneras y tributarias.'],
              ['Operación interna', 'Operación entre residentes pagadera en moneda legal colombiana que no es operación de cambio y, por lo tanto, no se declara ni se canaliza (por ejemplo, las operaciones entre residentes y usuarios de zona franca).'],
              ['Intermediario del mercado cambiario (IMC)', 'Entidad autorizada para comprar y vender divisas, efectuar transferencias y realizar las operaciones del mercado cambiario (bancos, corporaciones financieras, compañías de financiamiento, cooperativas financieras, casas de cambio, entre otras).'],
              ['Declaración de cambio', 'Declaración juramentada contenida en un formulario, en la que el declarante informa a la DIAN el monto y las condiciones de la operación de cambio y su forma de canalización.'],
              ['Giro', 'Transferencia de divisas hacia o desde el país por cualquier medio, incluidos los sistemas de compensación y las remesas.'],
            ],
          },
        },
        {
          heading: 'Tenencia de divisas, entrada y salida de efectivo y profesionales de compra y venta',
          paragraphs: [
            'La tenencia, posesión y negociación de divisas en el país se rige por la resolución externa. Los residentes pueden mantener divisas y cuentas en el exterior, pero cuando realicen operaciones de obligatoria canalización deben reintegrar las divisas y declararlas. Quien se dedique profesionalmente a la compra y venta de divisas debe inscribirse en el registro mercantil y en el RUT, cumplir las obligaciones que impone el régimen y observar las reglas del Código de Comercio sobre martillos, comisionistas y corredores.',
            'La entrada y salida de divisas en efectivo superiores a diez mil dólares de los Estados Unidos (US$ 10.000) debe declararse a la DIAN en los formularios oficiales, y el monto se calcula por grupo familiar, no por persona. El transporte de valores por más de ese monto solo puede realizarlo las empresas de transporte de valores o los intermediarios del mercado cambiario autorizados.',
            'Los hoteles y las agencias de viajes son usuarios con obligaciones cambiarias especiales: deben aplicar el conocimiento del cliente, adoptar el mecanismo que garantice conocer al usuario de sus servicios, contar con certificación de contador público o revisor fiscal sobre la fiabilidad del sistema de control de operaciones de cambio, y responder por las operaciones que realizan. Las sanciones por su incumplimiento se cuantifican en UVT, con topes legales.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Efectivo de entrada o salida por más de US$ 10.000: se declara ante la DIAN y se computa por GRUPO FAMILIAR. Su transporte solo lo pueden realizar empresas de transporte de valores o IMC autorizados.',
          },
        },
      ],
      summary: [
        'El régimen cambiario regula el comercio internacional, la tenencia, negociación, canalización y reintegro de divisas; su inobservancia genera responsabilidad administrativa, no penal ni tributaria.',
        'La Junta Directiva del Banco de la República es la autoridad cambiaria (art. 371 C.P.); el Gobierno reglamenta la ley marco y la DIAN ejerce el control.',
        'El marco legal se integra por la Ley 9 de 1991, la Ley 31 de 1992, el Decreto 2520 de 1993 (hoy compilado en el Decreto 1068 de 2015), el Decreto 1735 de 1993, el Decreto 1068 de 2015 y la Resolución Externa 1 de 2018, que sustituyó a la Resolución Externa 8 de 2000.',
        'El mercado cambiario comprende las operaciones de obligatoria canalización; en el mercado libre las divisas se negocian y mantienen sin obligación de canalizar, dentro de los límites del régimen.',
        'El vocabulario técnico (divisa, canalización, monetización, numeral cambiario, operación interna, IMC, declaración de cambio) es el punto de partida del control y de la cuantificación de las sanciones.',
        'La entrada y salida de efectivo por más de US$ 10.000 debe declararse, se computa por grupo familiar y su transporte está reservado a empresas de transporte de valores y a los IMC.',
      ],
      memorize: [
        'Art. 371 C.P.: la Junta Directiva del Banco de la República es la autoridad monetaria, cambiaria y crediticia.',
        'Régimen cambiario vigente: Resolución Externa 1 de 2018 (sustituyó la R.E. 8 de 2000) + Circular Reglamentaria Externa DCIN-83.',
        'Infracción cambiaria = contravención administrativa.',
        'Vigilancia del efectivo: más de US$ 10.000 por grupo familiar, con declaración ante la DIAN.',
        'Operación interna = entre residentes, en moneda legal colombiana, sin obligación de canalizar ni declarar.',
      ],
      examples: [
        {
          heading: 'Una exportación de servicios pagada en el exterior',
          paragraphs: [
            'Una empresa colombiana presta servicios de consultoría a un cliente en Estados Unidos y el cliente paga en dólares a una cuenta que la empresa tiene en Miami. Como se trata de una exportación de servicios (operación de obligatoria canalización), la empresa debe reintegrar las divisas por el mercado cambiario: negociándolas con un IMC, acreditándolas en su cuenta de compensación o aplicándolas al pago de obligaciones en moneda extranjera autorizadas, y debe presentar la declaración de cambio correspondiente. Si deja el dinero en la cuenta del exterior sin declarar ni canalizar, incurre en infracción cambiaria, aunque la operación esté facturada y el ingreso esté declarado para efectos del impuesto sobre la renta.',
          ],
        },
        {
          heading: 'Diferencia entre un pago del mercado libre y una operación canalizable',
          paragraphs: [
            'Una persona natural residente viaja al exterior y compra dólares en efectivo en una casa de cambio para sus gastos. Está operando en el mercado libre: no hay obligación de canalizar porque no existe una operación de las enumeradas en la resolución externa. En cambio, si esa misma persona recibe el pago de un arrendamiento de un inmueble que posee en el exterior, esa renta hace parte de las operaciones de obligatoria canalización y debe reintegrarse y declararse. La misma divisa puede ser libre o canalizable según la operación que la origina, no según su monto.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Afirmar que el Gobierno nacional o la DIAN expiden el régimen cambiario.',
          correction: 'El régimen cambiario lo expide la Junta Directiva del Banco de la República, que es la autoridad monetaria, cambiaria y crediticia (art. 371 C.P.). El Gobierno reglamenta la ley marco y la DIAN controla el cumplimiento y sanciona las infracciones.',
        },
        {
          mistake: 'Confundir infracción cambiaria con delito o con infracción tributaria.',
          correction: 'La infracción cambiaria es una contravención administrativa que se investiga y sanciona por la DIAN mediante el procedimiento del Decreto Ley 2245 de 2011; es independiente del delito cambiario y de las sanciones tributarias propias del incumplimiento de las obligaciones fiscales.',
        },
        {
          mistake: 'Creer que toda divisa que llega a manos de un residente debe canalizarse.',
          correction: 'Solo se canalizan las divisas originadas en operaciones de obligatoria canalización señaladas en la resolución externa. Las divisas del mercado libre pueden mantenerse y negociarse sin canalizar, dentro de los límites del régimen.',
        },
      ],
      norms: [
        {
          norm: 'Constitución Política de Colombia',
          article: 'arts. 150, 189, 371, 372 y 373',
          status: 'vigente',
          note: 'Reserva de ley marco en materia cambiaria, potestad reglamentaria y Junta Directiva del Banco de la República como autoridad monetaria, cambiaria y crediticia.',
        },
        {
          norm: 'Ley 9 de 1991',
          status: 'vigente',
          note: 'Ley marco de cambios internacionales: normas generales a las que debe someterse el Gobierno para regular el comercio exterior, los cambios internacionales y la inversión de capitales.',
        },
        {
          norm: 'Ley 31 de 1992',
          status: 'vigente',
          note: 'Normas sobre el Banco de la República: funciones de regular los cambios internacionales y expedir la regulación cambiaria por medio de la Junta Directiva.',
        },
        {
          norm: 'Resolución Externa 1 de 2018 (Junta Directiva del Banco de la República)',
          status: 'vigente',
          note: 'Compilación del régimen de cambios internacionales vigente; sustituyó y compiló la Resolución Externa 8 de 2000. Debe verificarse su versión actualizada por las modificaciones periódicas que expide la Junta Directiva.',
        },
        {
          norm: 'Resolución Externa 8 de 2000 (Junta Directiva del Banco de la República)',
          status: 'modificada',
          note: 'Norma citada por el material de formación; su contenido fue sustituido por la Resolución Externa 1 de 2018.',
        },
        {
          norm: 'Decreto 2520 de 1993',
          status: 'modificada',
          note: 'Régimen de cambios internacionales en materia de endeudamiento externo, avales y garantías; su contenido está compilado y actualizado en el Decreto 1068 de 2015 (DUR del Sector Hacienda y Crédito Público).',
        },
        {
          norm: 'Decreto 1068 de 2015',
          status: 'vigente',
          note: 'Decreto Único Reglamentario del Sector Hacienda y Crédito Público, que compila las normas reglamentarias cambiarias, incluido el Decreto 119 de 2018.',
        },
        {
          norm: 'Circular Reglamentaria Externa DCIN-83 (Banco de la República)',
          status: 'verificar',
          note: 'Instrucciones operativas del régimen cambiario (formularios, procedimientos y plazos). No se pudo verificar la vigencia de una numeración o versión específica porque la circular se actualiza permanentemente: debe consultarse la versión vigente en el portal del Banco de la República.',
        },
      ],
      links: [
        { label: 'Banco de la República — Régimen cambiario y Resoluciones Externas de la Junta Directiva', url: 'https://www.banrep.gov.co/es/regulacion/regimen-cambiario' },
        { label: 'Banco de la República — Portal institucional', url: 'https://www.banrep.gov.co/' },
        { label: 'DIAN — Control cambiario', url: 'https://www.dian.gov.co/' },
        { label: 'SUIN-Juriscol — Ley 9 de 1991 y Ley 31 de 1992', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'Régimen cambiario',
        branches: [
          { label: 'Autoridad', children: ['Junta Directiva del Banco de la República (art. 371 C.P.)', 'Gobierno: ley marco y reglamentos', 'DIAN: control y sanción'] },
          { label: 'Marco legal', children: ['Ley 9 de 1991 (ley marco)', 'Ley 31 de 1992 (BanRep)', 'Decretos 1735/1993 y 2520/1993', 'Decreto 1068 de 2015 (DUR)', 'R.E. 1 de 2018'] },
          { label: 'Mercado cambiario', children: ['Operaciones de obligatoria canalización', 'Reintegro por IMC o cuentas de compensación', 'Declaración de cambio'] },
          { label: 'Mercado libre', children: ['Tenencia y negociación de divisas', 'Gastos personales y viajeros', 'Sin obligación de canalizar'] },
          { label: 'Conceptos', children: ['Divisa', 'Canalización y monetización', 'Numeral cambiario', 'Operación interna', 'IMC'] },
          { label: 'Control fronterizo', children: ['Efectivo > US$ 10.000 por grupo familiar', 'Transporte de valores solo por empresas autorizadas e IMC', 'Hoteles y agencias de viajes'] },
        ],
      },
      mindmapText:
        'El régimen cambiario organiza el comercio internacional y las operaciones de cambio. La Junta Directiva del Banco de la República es la autoridad cambiaria (art. 371 C.P.) y expide la regulación, hoy contenida en la Resolución Externa 1 de 2018, que sustituyó a la Resolución Externa 8 de 2000. La ley marco es la Ley 9 de 1991 y el Banco de la República se rige por la Ley 31 de 1992. El mercado cambiario agrupa las operaciones de obligatoria canalización (comercio de bienes y servicios, endeudamiento externo, inversión internacional, avales, derivados) y el mercado libre permite la tenencia y negociación de divisas sin canalizar. La DIAN controla el cumplimiento, exige la declaración de cambio y sanciona las infracciones como contravenciones administrativas.',
      source: [
        { doc: 'taci', pages: 'págs. 132-143 (Unidad 4: obligación sustancial cambiaria)' },
      ],
    },
    {
      id: 'm10-l02',
      moduleId: 'm10',
      title: 'Obligación sustancial cambiaria: canalización de divisas, obligados y declaración de cambio',
      indicators: ['i08'],
      objectives: [
        'Explicar en qué consiste la obligación de canalizar divisas por el mercado cambiario.',
        'Identificar las operaciones de obligatoria canalización y las excepciones.',
        'Distinguir los obligados a canalizar y las formas admitidas de reintegro.',
        'Precisar el papel del intermediario del mercado cambiario y el mandato para canalizar.',
        'Reconocer las consecuencias de la falta de canalización, del reintegro extemporáneo y de la canalización indebida.',
      ],
      sections: [
        {
          heading: 'La obligación sustancial cambiaria: canalizar',
          paragraphs: [
            'La obligación sustancial cambiaria consiste en canalizar por el mercado cambiario las divisas originadas en las operaciones de cambio de obligatoria canalización. Canalizar significa reintegrar o negociar las divisas a través de los intermediarios del mercado cambiario, acreditarlas en cuentas de compensación o aplicarlas a los usos autorizados por el régimen. El incumplimiento se sanciona con multas de hasta el cien por ciento (100 %) del monto total de la operación dejada de canalizar.',
            'La obligación recae sobre los residentes y no residentes que realicen las operaciones señaladas en la resolución externa. Canalizan los residentes cuando se trata de importaciones y exportaciones, inversión colombiana en el exterior, endeudamiento externo del residente, y los no residentes cuando realizan inversión extranjera en Colombia, remesas de utilidades u operaciones de cambio en el país, sin perjuicio de las reglas específicas de cada operación.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Tres formas de canalizar: (1) negociar las divisas con un IMC; (2) reintegrarlas a una cuenta de compensación; (3) aplicarlas al pago de obligaciones en moneda extranjera autorizadas por el régimen. A ellas se suma el recibo o pago en moneda legal colombiana cuando la operación lo permite.',
          },
        },
        {
          heading: 'Operaciones de obligatoria canalización',
          paragraphs: [
            'La Resolución Externa 1 de 2018 enumera las operaciones de cambio que deben canalizarse por el mercado cambiario. La clasificación que se estudia agrupa así las principales:',
          ],
          table: {
            caption: 'Operaciones de obligatoria canalización',
            headers: ['Grupo de operaciones', 'Ejemplos'],
            rows: [
              ['Importaciones y exportaciones de bienes', 'Pagos y recaudos de mercancías, incluidos los gastos asociados al comercio exterior (fletes, seguros, comisiones); el valor a declarar corresponde al que se haya declarado en la operación aduanera.'],
              ['Importación y exportación de servicios', 'Servicios técnicos, profesionales, financieros, de transporte, turismo receptivo y demás; se declaran por su valor comercial.'],
              ['Endeudamiento externo', 'Desembolsos, pagos de capital, intereses y comisiones de créditos en moneda extranjera entre residentes y no residentes.'],
              ['Inversión internacional', 'Inversión extranjera en Colombia (desembolsos, capitalización, remesas de utilidades y ventas) e inversión colombiana en el exterior.'],
              ['Inversiones financieras', 'Inversiones en el exterior y de capitales del exterior en el país en el mercado de valores, incluidos los portafolios.'],
              ['Avales y garantías', 'Garantías otorgadas o exigidas en moneda extranjera frente a obligaciones de terceros y sus pagos.'],
              ['Derivados', 'Operaciones con instrumentos derivados cuando el régimen exige su canalización; se rigen por reglas específicas y las operaciones internas pueden ser negociadas por residentes en el mercado libre.'],
            ],
          },
          callout: {
            type: 'aviso',
            text: 'No basta con facturar en dólares y registrar el ingreso contable: la obligación cambiaria exige que las divisas ingresen al mercado cambiario y que la operación se declare. La subfacturación y la sobrefacturación en el comercio exterior son precisamente las conductas que la DIAN controla con más frecuencia, porque permiten desviar divisas hacia el mercado libre.',
          },
        },
        {
          heading: 'Excepciones y casos especiales',
          paragraphs: [
            'No todas las divisas que circulan en el país tienen que canalizarse. El régimen admite, entre otras, las siguientes excepciones y tratamientos especiales:',
          ],
          bullets: [
            'Operaciones internas: las realizadas entre residentes, pagaderas en moneda legal colombiana, no son operaciones de cambio y no se declaran ni canalizan. Es el caso de las operaciones entre residentes y usuarios de zona franca, o entre usuarios de zona franca, independientemente de su calificación aduanera.',
            'Mercado libre: las divisas adquiridas o poseídas sin originarse en operaciones de obligatoria canalización se pueden negociar sin reintegro.',
            'Pagos en moneda legal colombiana: las exportaciones pueden recibirse y las importaciones pueden pagarse en moneda legal colombiana, conforme a las normas de cambios internacionales, en cuyo caso la operación se declara pero no exige el ingreso y reintegro de divisas al mercado cambiario.',
            'Endeudamiento externo y aplicación de divisas: las divisas pueden aplicarse al pago de obligaciones en moneda extranjera del propio residente, con los requisitos y límites del régimen, en lugar de ser negociadas con un IMC.',
            'Zonas francas y regímenes especiales: el régimen de cambios prevé el tratamiento especial de las zonas francas para efectos cambiarios (operaciones internas) y de las zonas de régimen aduanero especial y el puerto libre de San Andrés.',
          ],
        },
        {
          heading: 'Obligados, mandato e intermediarios del mercado cambiario',
          paragraphs: [
            'Están obligados a canalizar las divisas las personas residentes y no residentes que realicen operaciones de obligatoria canalización. Quien realiza la operación puede acudir personalmente a un IMC o conferir un mandato a una entidad autorizada para que efectúe el reintegro y presente la declaración de cambio.',
            'La responsabilidad por la canalización, la exactitud de la declaración de cambio y el cumplimiento de las condiciones de la operación es, en todo caso, del obligado: el mandato traslada la ejecución material del trámite, pero no traslada la titularidad de la obligación sustancial. Los intermediarios del mercado cambiario, por su parte, deben cumplir sus propias obligaciones (identificación del cliente, reportes e información) y responden por sus propios incumplimientos.',
          ],
        },
        {
          heading: 'Consecuencias del incumplimiento sustancial cambiario',
          paragraphs: [
            'El régimen sancionatorio cambiario cuantifica las consecuencias según la conducta. Merecen atención especial tres conductas típicas:',
          ],
          bullets: [
            'Dejar de canalizar el monto total de la operación: la sanción equivale hasta al cien por ciento (100 %) del monto dejado de canalizar.',
            'Extinguir la obligación en el exterior con divisas que debían canalizarse: la sanción equivale hasta al cien por ciento (100 %) del monto extinguido.',
            'Canalizar divisas de manera indebida (por ejemplo, declarando bajo un numeral cambiario que no corresponde para simular una operación distinta): la sanción equivale hasta al cien por ciento (100 %) del monto indebidamente canalizado.',
            'Reintegrar las divisas de forma extemporánea cuando el régimen fija un plazo de reintegro: la sanción se mide en UVT por mes o fracción de extemporaneidad, con un tope legal, además del cumplimiento de la obligación.',
          ],
          callout: {
            type: 'importante',
            text: 'El monto de la operación dejada de canalizar se expresa en moneda legal colombiana: la conversión se hace con la tasa representativa del mercado certificada por la Superintendencia Financiera de Colombia, lo que incide directamente en el valor de la multa.',
          },
        },
      ],
      summary: [
        'La obligación sustancial cambiaria es canalizar por el mercado cambiario las divisas de las operaciones de obligatoria canalización, y se sanciona hasta con el 100 % del monto dejado de canalizar.',
        'Son operaciones de obligatoria canalización las de importación y exportación de bienes y servicios con sus gastos asociados, el endeudamiento externo, la inversión internacional, las inversiones financieras, los avales y garantías y los derivados, conforme a la Resolución Externa 1 de 2018.',
        'Existen excepciones y tratamientos especiales: operaciones internas entre residentes en moneda legal, divisas del mercado libre, pagos en moneda legal colombiana y la aplicación de divisas al pago de obligaciones en moneda extranjera.',
        'La obligación recae en residentes y no residentes que realicen las operaciones; el mandato a un IMC traslada la ejecución del trámite pero no la titularidad de la obligación.',
        'Son conductas típicas: no canalizar (100 % del monto dejado de canalizar), extinguir la obligación en el exterior (100 % del monto extinguido), canalizar indebidamente (100 %) y reintegrar de forma extemporánea (UVT por mes, con tope).',
      ],
      memorize: [
        'Canalizar = negociar con IMC, reintegrar a cuenta de compensación o aplicar al pago de obligaciones en moneda extranjera; también el pago en moneda legal colombiana cuando procede.',
        'Sanciones del 100 %: monto dejado de canalizar, monto extinguido en el exterior y monto indebidamente canalizado.',
        'Operaciones internas: entre residentes, en moneda legal colombiana, sin obligación cambiaria de declarar ni canalizar.',
        'Conversión a pesos: TRM certificada por la Superintendencia Financiera de Colombia.',
      ],
      examples: [
        {
          heading: 'Exportación de bienes con reintegro parcial',
          paragraphs: [
            'Una empresa exporta mercancía por USD 100.000 y declara la operación aduanera por ese valor. Al vencerse el plazo de reintegro, solo canaliza USD 70.000 por intermedio de un IMC y deja USD 30.000 en una cuenta en el exterior sin declararlos. La DIAN, al cruzar la declaración de exportación (DEX) con la declaración de cambio y con la información exógena cambiaria, detecta la diferencia: la sanción se calcula sobre el monto dejado de canalizar, es decir, sobre USD 30.000 expresados en pesos a la TRM certificada, y puede llegar al 100 % de ese monto. Si además no declaró la operación, se suman las sanciones por las declaraciones de cambio no presentadas.',
          ],
        },
        {
          heading: 'Canalizar bajo un numeral equivocado',
          paragraphs: [
            'Una sociedad recibe un desembolso de crédito externo, pero lo declara como si fuera el pago de una exportación de servicios para justificar el ingreso de las divisas. Aunque las divisas ingresaron al mercado cambiario, la canalización es indebida: se declaró una operación distinta de la real. La sanción puede alcanzar el 100 % del monto indebidamente canalizado, sin perjuicio de los efectos tributarios de la re caracterización del ingreso y del endeudamiento.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que obtener el pago en una cuenta en el exterior equivale a cumplir la obligación cambiaria.',
          correction: 'La obligación exige canalizar las divisas por el mercado cambiario en las operaciones enumeradas por la resolución externa. Mantener las divisas en el exterior sin reintegrarlas ni declararlas configura la infracción de no canalización, aunque el ingreso se haya declarado para efectos tributarios.',
        },
        {
          mistake: 'Pensar que el mandato a un intermediario del mercado cambiario libera al obligado.',
          correction: 'El mandato solo traslada la ejecución material del trámite. La titularidad de la obligación cambiaria y la responsabilidad por su cumplimiento siguen en cabeza de quien realiza la operación.',
        },
        {
          mistake: 'Aplicar la sanción cambiaria sobre el monto total de la operación cuando solo una parte se dejó de canalizar.',
          correction: 'La base de la sanción por no canalización es el monto dejado de canalizar (o el monto extinguido en el exterior o indebidamente canalizado), convertido a moneda legal colombiana a la TRM certificada, no necesariamente el valor total de la operación.',
        },
      ],
      norms: [
        {
          norm: 'Resolución Externa 1 de 2018 (Junta Directiva del Banco de la República)',
          article: 'arts. 1 a 12 (mercado cambiario, operaciones de obligatoria canalización y definiciones)',
          status: 'vigente',
          note: 'Norma vigente del régimen de cambios internacionales; los números de artículo deben verificarse en la versión compilada vigente por las modificaciones periódicas de la Junta Directiva.',
        },
        {
          norm: 'Decreto 1735 de 1993',
          article: 'arts. 5 y 6 y normas concordantes',
          status: 'vigente',
          note: 'Normas de cambios internacionales sobre pago en moneda legal colombiana de importaciones y exportaciones, recogidas en el Decreto 1068 de 2015.',
        },
        {
          norm: 'Decreto 1165 de 2019',
          article: 'art. 3',
          status: 'vigente',
          note: 'Definiciones de exportación e importación de bienes usadas por el régimen cambiario para delimitar las operaciones de obligatoria canalización.',
        },
        {
          norm: 'Decreto Ley 2245 de 2011',
          article: 'arts. 2 y 3',
          status: 'vigente',
          note: 'Régimen sancionatorio cambiario; el numeral 2 del artículo 3 tipifica las infracciones por falta de canalización, extinción de la obligación en el exterior, canalización indebida y reintegro extemporáneo.',
        },
        {
          norm: 'Resolución Externa 8 de 2000 (Junta Directiva del Banco de la República)',
          article: 'arts. 53 y 54 (zonas francas)',
          status: 'modificada',
          note: 'Norma citada por el material de formación para el tratamiento cambiario de las zonas francas; sustituida por la Resolución Externa 1 de 2018, que mantiene la lógica de considerar esas operaciones como internas.',
        },
      ],
      links: [
        { label: 'Banco de la República — Régimen cambiario', url: 'https://www.banrep.gov.co/es/regulacion/regimen-cambiario' },
        { label: 'DIAN — Control cambiario', url: 'https://www.dian.gov.co/' },
        { label: 'SUIN-Juriscol — normativa nacional', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'Obligación sustancial cambiaria',
        branches: [
          { label: 'Canalizar', children: ['Negociar con IMC', 'Reintegrar a cuenta de compensación', 'Aplicar al pago de obligaciones en moneda extranjera', 'Pago en moneda legal colombiana cuando procede'] },
          { label: 'Operaciones canalizables', children: ['Importación y exportación de bienes y servicios', 'Gastos asociados', 'Endeudamiento externo', 'Inversión internacional', 'Inversiones financieras', 'Avales, garantías y derivados'] },
          { label: 'Obligados', children: ['Residentes', 'No residentes', 'Mandato a IMC (no traslada la titularidad)'] },
          { label: 'Excepciones', children: ['Operaciones internas', 'Mercado libre', 'Pagos en moneda legal', 'Zonas francas y regímenes especiales'] },
          { label: 'Sanciones', children: ['100 % del monto dejado de canalizar', '100 % del monto extinguido', '100 % del monto indebidamente canalizado', 'Reintegro extemporáneo en UVT'] },
        ],
      },
      mindmapText:
        'La obligación sustancial cambiaria exige canalizar por el mercado cambiario las divisas de las operaciones de obligatoria canalización: importaciones y exportaciones de bienes y servicios, gastos asociados, endeudamiento externo, inversión internacional, inversiones financieras, avales y garantías y derivados. Se canaliza negociando con un IMC, reintegrando a una cuenta de compensación o aplicando las divisas al pago de obligaciones en moneda extranjera; también se admite el pago en moneda legal colombiana cuando el régimen lo permite. Existen excepciones, como las operaciones internas entre residentes. El incumplimiento se sanciona hasta con el 100 % del monto dejado de canalizar, extinguido o indebidamente canalizado, y el reintegro extemporáneo con multas en UVT.',
      source: [
        { doc: 'taci', pages: 'págs. 132-143 (Unidad 4: obligación sustancial cambiaria)' },
      ],
      activityId: 'm10-a01',
    },
    {
      id: 'm10-l03',
      moduleId: 'm10',
      title: 'Obligaciones formales cambiarias: declaración de cambio, información y control de la DIAN',
      indicators: ['i08'],
      objectives: [
        'Definir la declaración de cambio e identificar quién la presenta y firma.',
        'Precisar las obligaciones formales por importaciones y exportaciones de bienes y servicios.',
        'Explicar las declaraciones asociadas al endeudamiento externo, la inversión internacional y las cuentas de compensación.',
        'Enunciar las facultades de control cambiario de la DIAN y los requerimientos de información.',
        'Reconocer la información exógena cambiaria y su función de cruce.',
      ],
      sections: [
        {
          heading: 'La declaración de cambio: concepto y obligados formales',
          paragraphs: [
            'La declaración de cambio es la declaración juramentada contenida en un formulario, presentada a la DIAN a través de un intermediario del mercado cambiario, en la que el declarante informa los datos de la operación de cambio: monto, moneda, condiciones y forma de canalización. Se presenta por cada operación realizada bajo las modalidades y cuantías previstas en el régimen, y su firma corresponde al declarante o a su representante legal; también puede suscribirla el apoderado especialmente facultado.',
            'Conforme al régimen de cambios internacionales, los residentes y no residentes deben presentar la declaración de cambio por las operaciones de obligatoria canalización, dejando constancia además del reintegro de las divisas. La declaración se diligenciaba en el Formulario 10, que dejó de operar el 27 de octubre de 2023; a partir del 1 de noviembre de 2023 ese formulario fue reemplazado por el Módulo de Cuentas de Compensación del Banco de la República, lo que es un ejemplo de cómo los soportes formales cambian sin que cambie la obligación sustancial.',
          ],
          callout: {
            type: 'aviso',
            text: 'El Formulario 10 fue reemplazado por el Módulo de Cuentas de Compensación a partir del 1 de noviembre de 2023. La obligación formal de declarar subsiste; lo que cambió es el instrumento tecnológico para cumplirla.',
          },
        },
        {
          heading: 'Obligaciones formales por operaciones de comercio exterior',
          paragraphs: [
            'Las obligaciones formales cambiarias más preguntadas son las del comercio exterior de bienes y servicios, porque exigen cruzar la información aduanera con la cambiaria:',
          ],
          bullets: [
            'Importaciones de bienes: declarar el pago al exterior por el valor de la importación (incluidos los gastos asociados que se paguen al exterior), utilizando el numeral cambiario que corresponda a la operación aduanera. El usuario debe conservar la declaración de cambio y la documentación de la operación.',
            'Exportaciones de bienes: declarar el reintegro del pago recibido por la exportación, con indicación del número de la declaración de exportación cuando se exija, y verificar que el valor canalizado corresponda al valor declarado en la operación aduanera.',
            'Servicios: declarar la importación y la exportación de servicios por su valor comercial, con el numeral cambiario propio de cada tipo de servicio (técnicos, financieros, de transporte, turísticos, entre otros).',
            'Gastos asociados: fletes, seguros y comisiones del comercio exterior se declaran conforme al numeral que les corresponde, evitando incluirlos o excluirlos indebidamente del valor de la mercancía.',
            'Requerimientos de la autoridad: la DIAN puede exigir la presentación de las declaraciones de cambio, los documentos de la operación y las explicaciones sobre las diferencias entre el valor declarado en aduanas y el valor canalizado.',
          ],
        },
        {
          heading: 'Endeudamiento externo e inversión internacional',
          paragraphs: [
            'Las operaciones de endeudamiento externo y de inversión internacional tienen obligaciones formales propias, además de la declaración de cambio de cada movimiento de divisas:',
          ],
          table: {
            caption: 'Obligaciones formales por endeudamiento e inversión',
            headers: ['Operación', 'Obligación formal principal'],
            rows: [
              ['Endeudamiento externo', 'Declarar desembolsos, pagos de capital, intereses y comisiones; registrar y actualizar la información del crédito ante el Banco de la República por medio del sistema de endeudamiento, según las condiciones del régimen (plazos, garantías y operaciones permitidas).'],
              ['Inversión extranjera en Colombia', 'Declarar los desembolsos, capitalizaciones, remesas de utilidades y ventas o liquidaciones; registrar la inversión y su actualización ante el Banco de la República, con sujeción a los montos y plazos previstos.'],
              ['Inversión colombiana en el exterior', 'Declarar las inversiones, sus rendimientos y su liquidación; registrar la inversión cuando el régimen lo exija.'],
              ['Inversiones financieras de portafolio', 'Declarar las operaciones de entrada, salida, rendimientos y reinversión; cumplir las condiciones del régimen de portafolio y las obligaciones de información de los administradores.'],
              ['Avales y garantías', 'Declarar la constitución, modificación y pago de avales y garantías en moneda extranjera, según las condiciones de endeudamiento aplicables.'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Las cuentas de compensación permiten a los residentes mantener divisas en el exterior sin necesidad de reintegrarlas físicamente al país: acreditando allí las divisas del mercado cambiario, la canalización se entiende cumplida, siempre que se informe a la DIAN a través del mecanismo vigente (hoy el Módulo de Cuentas de Compensación).',
          },
        },
        {
          heading: 'Las funciones de control cambiario de la DIAN',
          paragraphs: [
            'La DIAN es la autoridad administrativa que vigila el cumplimiento del régimen cambiario en las operaciones de competencia del Gobierno. Conforme al artículo 3 del Decreto 1742 de 2020 y a las normas de cambios internacionales, le compete: vigilar el cumplimiento del régimen cambiario en las importaciones y exportaciones de bienes y servicios y en las operaciones de gastos asociados, incluidos los casos de subfacturación y sobrefacturación; ejercer la competencia residual que le atribuya el Gobierno en materia cambiaria; y autorizar y controlar a los profesionales de compra y venta de divisas.',
            'Ese control se ejerce con instrumentos de información y de fiscalización:',
          ],
          bullets: [
            'Requerimientos de información al amparo del régimen de cambios (numeral 6 del artículo 9 de la Resolución Externa 1 de 2018 y numeral 5 del artículo 9 del Decreto Ley 2245 de 2011) y de las facultades generales de fiscalización (artículos 8 del Decreto 1742 de 2020).',
            'Cruces de la declaración de cambio con la declaración aduanera de importación y la declaración de exportación, para detectar diferencias de valor (subfacturación y sobrefacturación).',
            'Cruces con la información exógena cambiaria, tributaria y financiera, y con los reportes de los intermediarios del mercado cambiario y de las entidades del sistema financiero.',
            'Visitas de verificación, solicitud de documentos y verificación del registro de los profesionales de compra y venta de divisas.',
          ],
        },
        {
          heading: 'Información exógena cambiaria',
          paragraphs: [
            'La Resolución DIAN 000161 de 2021 reguló la información exógena cambiaria con fines de control, derogando la Resolución 009147 de 2006. Los reportantes (intermediarios del mercado cambiario, entidades financieras, administradores de inversiones y otros sujetos obligados) suministran periódicamente a la DIAN los datos de las operaciones de cambio, de las cuentas de compensación, del endeudamiento externo y de la inversión internacional, en los formatos y con los plazos que la resolución y sus actualizaciones señalan.',
            'La información se estructura en formatos que identifican cada universo: operaciones de cambio por importaciones y exportaciones, endeudamiento externo, inversiones internacionales, cuentas de compensación y operaciones de los profesionales de compra y venta de divisas, entre otros. Para su diligenciamiento se acude a los numerales cambiarios: un numeral equivocado puede producir un reporte errado y, con ello, una posible sanción por las declaraciones de cambio o por la información reportada.',
          ],
          callout: {
            type: 'norma',
            text: 'Resolución DIAN 000161 de 2021: fija los formatos y plazos de la información exógena cambiaria y derogó la Resolución 009147 de 2006. Debe consultarse la resolución vigente en cada año porque los plazos y formatos se actualizan periódicamente.',
          },
        },
      ],
      summary: [
        'La declaración de cambio es la declaración juramentada de la operación de cambio, presentada a la DIAN a través de un IMC; la firma el declarante o su representante, y sustituyó su soporte formal (Formulario 10) por el Módulo de Cuentas de Compensación desde el 1 de noviembre de 2023.',
        'Por importaciones y exportaciones de bienes y servicios y gastos asociados se declaran los pagos y reintegros con el numeral cambiario que corresponda; la DIAN cruza esos datos con la operación aduanera para detectar subfacturación y sobrefacturación.',
        'El endeudamiento externo y la inversión internacional exigen declarar cada movimiento de divisas y registrar y actualizar la operación ante el Banco de la República conforme al régimen.',
        'Las cuentas de compensación permiten canalizar las divisas acreditándolas en el exterior e informando a la DIAN por el mecanismo vigente.',
        'La DIAN controla el régimen cambiario en el comercio exterior, la competencia residual asignada por el Gobierno y los profesionales de compra y venta de divisas; cuenta con requerimientos de información, cruces y visitas de verificación.',
        'La información exógena cambiaria (Resolución DIAN 000161 de 2021) alimenta los cruces de control con formatos y plazos actualizados periódicamente.',
      ],
      memorize: [
        'Declaración de cambio: juramentada, en formulario, presentada a la DIAN por medio de un IMC; la firma el declarante o su representante legal.',
        'Formulario 10: operativo hasta el 27 de octubre de 2023; reemplazado desde el 1 de noviembre de 2023 por el Módulo de Cuentas de Compensación.',
        'Control DIAN: subfacturación y sobrefacturación del comercio exterior, competencia residual y profesionales de compra y venta de divisas (art. 3 Decreto 1742 de 2020).',
        'Información exógena cambiaria: Resolución DIAN 000161 de 2021 (derogó la Resolución 009147 de 2006).',
        'Cuenta de compensación: permite canalizar sin ingresar físicamente las divisas al país.',
      ],
      examples: [
        {
          heading: 'Cruce entre la declaración de exportación y la declaración de cambio',
          paragraphs: [
            'Una empresa exporta por USD 200.000 y declara el reintegro de solo USD 150.000. La DIAN compara la información de la declaración de exportación, la declaración de cambio y la información exógena reportada por el IMC y detecta la diferencia de USD 50.000. En el requerimiento de información la empresa debe explicar el origen de la diferencia: si se trata de una retención en el exterior autorizada, de un pago pendiente o de una simple omisión. Superado el término sin explicación válida, la diferencia se considera monto dejado de canalizar y se sanciona con hasta el 100 % de ese valor expresado en pesos a la TRM certificada.',
          ],
        },
        {
          heading: 'Un crédito externo mal declarado',
          paragraphs: [
            'Una sociedad recibe un desembolso de USD 500.000 por un crédito con un banco del exterior. Declara el desembolso, pero omite declarar el pago posterior de intereses y registrar la actualización del saldo de la deuda. Dos obligaciones formales distintas quedan incumplidas: la declaración de cambio de cada pago al exterior y la actualización de la información del endeudamiento. Cada omisión se sanciona según el numeral aplicable del régimen sancionatorio cambiario, con independencia del pago de tributos.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Creer que la declaración de cambio la firma el intermediario del mercado cambiario como propio declarante.',
          correction: 'La declaración de cambio es una declaración juramentada del obligado: la firma el declarante o su representante legal (o apoderado facultado), aunque el formulario se presente a través del IMC. La responsabilidad por la veracidad recae en el declarante.',
        },
        {
          mistake: 'Pensar que las obligaciones formales cambiarias se agotan con la declaración de cambio.',
          correction: 'El régimen impone además registrar y actualizar el endeudamiento externo y la inversión internacional ante el Banco de la República, conservar la documentación de la operación y atender los requerimientos de información de la DIAN.',
        },
        {
          mistake: 'Suponer que la información exógena cambiaria solo la reportan los bancos.',
          correction: 'La Resolución DIAN 000161 de 2021 vincula a distintos reportantes del mercado cambiario (intermediarios del mercado cambiario, administradores de inversión internacional, entidades y usuarios con obligaciones de reporte), con formatos y plazos específicos según el universo de la operación.',
        },
      ],
      norms: [
        {
          norm: 'Resolución Externa 1 de 2018 (Junta Directiva del Banco de la República)',
          article: 'art. 9 (funciones de los intermediarios y requerimientos de información)',
          status: 'vigente',
          note: 'Obligación de presentar la declaración de cambio y de atender los requerimientos de información de la autoridad; verificar la numeración en la versión compilada vigente.',
        },
        {
          norm: 'Decreto 1742 de 2020',
          article: 'art. 3 y art. 8',
          status: 'vigente',
          note: 'Funciones de la DIAN en materia de control cambiario: vigilancia del régimen en importaciones y exportaciones (incluida la subfacturación y sobrefacturación), competencia residual y control de los profesionales de compra y venta de divisas.',
        },
        {
          norm: 'Resolución DIAN 000161 de 2021',
          status: 'vigente',
          note: 'Información exógena cambiaria: formatos, reportantes y plazos. Derogó la Resolución 009147 de 2006. Verificar las actualizaciones anuales de plazos.',
        },
        {
          norm: 'Formulario 10 — Declaración de cambio',
          status: 'modificada',
          note: 'Formulario que dejó de operar el 27 de octubre de 2023; a partir del 1 de noviembre de 2023 la información se presenta mediante el Módulo de Cuentas de Compensación del Banco de la República.',
        },
        {
          norm: 'Decreto 1068 de 2015',
          status: 'vigente',
          note: 'Compilación reglamentaria del régimen de cambios internacionales, incluido el régimen de endeudamiento externo e inversión internacional.',
        },
      ],
      links: [
        { label: 'Banco de la República — Régimen cambiario', url: 'https://www.banrep.gov.co/es/regulacion/regimen-cambiario' },
        { label: 'DIAN — Control cambiario', url: 'https://www.dian.gov.co/' },
        { label: 'SUIN-Juriscol — normativa nacional', url: 'https://www.suin-juriscol.gov.co/' },
      ],
      mindmap: {
        root: 'Obligaciones formales cambiarias',
        branches: [
          { label: 'Declaración de cambio', children: ['Juramentada y en formulario', 'Se presenta por medio del IMC', 'La firma el declarante o representante', 'Formulario 10 reemplazado por el Módulo de Cuentas de Compensación'] },
          { label: 'Comercio exterior', children: ['Importaciones de bienes', 'Exportaciones de bienes', 'Servicios', 'Gastos asociados', 'Subfacturación y sobrefacturación'] },
          { label: 'Endeudamiento e inversión', children: ['Desembolsos, capital e intereses', 'Inversión extranjera y colombiana', 'Portafolios', 'Avales y garantías', 'Registro ante el BanRep'] },
          { label: 'Cuentas de compensación', children: ['Canalización sin ingreso físico de divisas', 'Información a la DIAN'] },
          { label: 'Control DIAN', children: ['Requerimientos de información', 'Cruces con la operación aduanera', 'Información exógena cambiaria', 'Profesionales de compra y venta de divisas'] },
        ],
      },
      mindmapText:
        'Las obligaciones formales cambiarias se concretan en la declaración de cambio, una declaración juramentada que firma el declarante o su representante y que se presenta a la DIAN a través de un intermediario del mercado cambiario. Por importaciones y exportaciones de bienes, servicios y gastos asociados se declaran los pagos y reintegros con numerales cambiarios que la DIAN cruza con la operación aduanera. El endeudamiento externo y la inversión internacional exigen declarar cada movimiento y registrar la operación ante el Banco de la República. Las cuentas de compensación permiten canalizar acreditando las divisas en el exterior. La DIAN controla el régimen con requerimientos de información, cruces e información exógena cambiaria (Resolución 000161 de 2021).',
      source: [
        { doc: 'taci', pages: 'págs. 144-149 (Unidad 5: obligaciones formales cambiarias)' },
      ],
    },
    {
      id: 'm10-l04',
      moduleId: 'm10',
      title: 'Procedimiento cambiario de competencia de la DIAN: etapas de la actuación administrativa',
      indicators: ['i08'],
      objectives: [
        'Identificar la norma que rige el procedimiento sancionatorio cambiario y su naturaleza.',
        'Describir las formas de inicio de la actuación y las facultades de la autoridad.',
        'Analizar el contenido y los efectos del acto de formulación de cargos.',
        'Aplicar los términos de traslado, notificación, decisión y reconsideración.',
        'Explicar la responsabilidad solidaria y las formas de terminación de la actuación.',
      ],
      sections: [
        {
          heading: 'Norma aplicable y naturaleza de la actuación',
          paragraphs: [
            'El procedimiento sancionatorio cambiario se rige por el Decreto Ley 2245 de 2011, que derogó el anterior régimen del Decreto 1092 de 1996. La infracción cambiaria es una contravención administrativa: no es un delito ni una infracción tributaria, y su investigación y sanción corresponden a la DIAN. El carácter administrativo explica dos rasgos del régimen: la actuación no exige la intervención de la justicia penal y la responsabilidad se concreta en multas expresadas en UVT o en porcentajes del monto de la operación.',
            'La actuación administrativa cambiaria persigue dos finalidades: verificar el cumplimiento de las obligaciones de canalización y declaración de cambio, y sancionar a los infractores. La autoridad actúa con las facultades del artículo 9 del Decreto Ley 2245 de 2011, que le permiten, entre otras actuaciones: retener divisas, convertir las divisas retenidas, adoptar las medidas necesarias para la investigación y sancionar las infracciones.',
          ],
          callout: {
            type: 'memoriza',
            text: 'Decreto Ley 2245 de 2011: régimen sancionatorio cambiario vigente. Derogó el Decreto 1092 de 1996, que sancionaba en salarios mínimos. Hoy las sanciones cambiarias se expresan en UVT y en porcentajes del monto de la operación.',
          },
        },
        {
          heading: 'Inicio de la actuación',
          paragraphs: [
            'La actuación administrativa cambiaria puede iniciarse de oficio, por informes de funcionarios públicos, por visitas de investigación, por traslado de otras autoridades (por ejemplo, de la aduana o de la Unidad de Información y Análisis Financiero) o por quejas presentadas por terceros. No depende de la denuncia ni del ejercicio de un derecho de petición: es una actuación oficiosa que la DIAN adelanta en ejercicio de su función de control.',
            'Al detectar hechos que puedan constituir infracción cambiaria, la dependencia competente adelanta las verificaciones del caso mediante requerimientos de información, cruces de información y visitas, y documenta los hechos en las actas o informes correspondientes, que servirán de fundamento probatorio del acto de formulación de cargos.',
          ],
        },
        {
          heading: 'El acto de formulación de cargos',
          paragraphs: [
            'Establecidos los hechos, la autoridad expide el acto de formulación de cargos, que puede ser individual o plural. Contra este acto no procede recurso alguno y debe contener, como mínimo:',
          ],
          bullets: [
            'La identificación del presunto infractor y de la dependencia que expide el acto.',
            'La relación de los hechos que dan origen a la actuación, con indicación de fechas, montos y circunstancias que permitan la defensa.',
            'Las pruebas que fundamentan la actuación.',
            'Las normas infringidas y la explicación de la conducta.',
            'La liquidación de la sanción en moneda legal colombiana, con indicación del monto de la operación en divisas y de la tasa de cambio empleada para la conversión.',
            'La constancia de que el acto debe ser trasladado al presunto infractor por el término legal para que presente sus descargos.',
          ],
          callout: {
            type: 'importante',
            text: 'El acto de formulación de cargos NO admite recurso: se controvierte a través de los descargos. Es el acto que fija el objeto de la discusión, de modo que los temas probatorios y jurídicos deben quedar planteados desde la respuesta a ese acto.',
          },
        },
        {
          heading: 'Términos de la actuación',
          paragraphs: [
            'Los términos son la parte más memorizable del procedimiento y definen el ritmo de la defensa:',
          ],
          table: {
            caption: 'Términos del procedimiento sancionatorio cambiario',
            headers: ['Etapa', 'Término'],
            rows: [
              ['Notificación del acto de formulación de cargos', 'Dentro de los cinco (5) años siguientes a la fecha en que se cometió la infracción; el acto debe ser expedido y notificado dentro de ese término.'],
              ['Traslado para descargos', 'Dos (2) meses contados a partir de la notificación del acto de formulación de cargos, término en el que el interesado puede solicitar y aportar pruebas.'],
              ['Notificación del acto que impone la sanción o de la terminación', 'Dentro de los dos (2) años siguientes al vencimiento del término de traslado.'],
              ['Recurso de reconsideración', 'Se resuelve dentro de los siete (7) meses siguientes a su interposición; transcurrido ese término sin decisión, se aplica el silencio administrativo a favor del recurrente.'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Cambiario: 5 años para notificar el acto de formulación de cargos; 2 meses de traslado; 2 años desde el vencimiento del traslado para notificar la sanción; 7 meses para resolver la reconsideración, con silencio administrativo a favor del recurrente.',
          },
        },
        {
          heading: 'Respuesta, pruebas y decisión',
          paragraphs: [
            'Dentro del término de traslado el presunto infractor presenta sus descargos por escrito, formula las objeciones y solicita las pruebas que pretende hacer valer. Cumplido el traslado, la autoridad ordena la práctica de las pruebas que sean conducentes, pertinentes, eficaces y necesarias, y dicta la resolución que impone la sanción o la que declara la terminación de la actuación.',
            'La resolución que decide se notifica personalmente o por correo, y contra ella procede el recurso de reconsideración, que se interpone dentro de los plazos y con los requisitos previstos en la norma. El recurso se resuelve dentro de los siete (7) meses siguientes a su interposición y, de no resolverse en ese plazo, opera el silencio administrativo positivo a favor del recurrente, con los efectos que la ley atribuye a esa figura.',
          ],
        },
        {
          heading: 'Responsabilidad solidaria y terminación de la actuación',
          paragraphs: [
            'El régimen cambiario establece una responsabilidad solidaria amplia: además del infractor directo, responden solidariamente por las sanciones los representantes legales, los socios, los administradores, los revisores fiscales, los contadores y demás personas que hayan intervenido en la operación o en su declaración. Esa solidaridad busca que los controles societarios y contables operen como una garantía real del cumplimiento del régimen.',
            'La actuación puede terminar de forma anticipada cuando el infractor se acoge a los mecanismos previstos en la ley. En particular, el reconocimiento voluntario de la infracción y el pago de la sanción antes de la decisión da lugar a una reducción significativa de la multa (75 % de reducción según el artículo 23 del Decreto Ley 2245 de 2011), lo que convierte la colaboración con la administración en la vía más eficiente de terminación del procedimiento.',
          ],
          callout: {
            type: 'aviso',
            text: 'La responsabilidad solidaria alcanza a representantes legales, socios, administradores, revisores fiscales y contadores que hayan intervenido en la operación. Es una de las reglas más relevantes para el examen y para la práctica profesional: el control cambiario no es solo un problema del área de tesorería.',
          },
        },
      ],
      summary: [
        'El procedimiento sancionatorio cambiario se rige por el Decreto Ley 2245 de 2011; la infracción cambiaria es una contravención administrativa que investiga y sanciona la DIAN.',
        'La actuación se inicia de oficio, por informes, visitas de investigación, traslado de otras autoridades o quejas, y cuenta con facultades especiales (retener y convertir divisas retenidas, entre otras).',
        'El acto de formulación de cargos no admite recurso, contiene los hechos, las pruebas, las normas infringidas y la liquidación de la sanción en moneda legal colombiana, y se traslada por dos meses para descargos.',
        'Los términos clave: notificación del acto de formulación dentro de 5 años; traslado de 2 meses; notificación de la sanción dentro de 2 años desde el vencimiento del traslado; reconsideración resuelta en 7 meses con silencio positivo a favor del recurrente.',
        'Existe responsabilidad solidaria de representantes legales, socios, administradores, revisores fiscales y contadores que intervengan en la operación, y la actuación puede terminar anticipadamente con el reconocimiento y pago voluntario, con reducción de la sanción.',
      ],
      memorize: [
        'Decreto Ley 2245 de 2011 rige el procedimiento y las sanciones cambiarias; derogó el Decreto 1092 de 1996.',
        'Acto de formulación de cargos: sin recurso; traslado de 2 meses para descargos.',
        'Notificación del acto de formulación: dentro de 5 años. Sanción: dentro de 2 años desde el vencimiento del traslado.',
        'Reconsideración: se decide en 7 meses; el silencio favorece al recurrente.',
        'Responsabilidad solidaria: representantes legales, socios, administradores, revisores fiscales y contadores.',
      ],
      examples: [
        {
          heading: 'Una sociedad que no canaliza y su revisor fiscal',
          paragraphs: [
            'La DIAN detecta que una sociedad dejó de canalizar USD 400.000 recibidos por exportaciones de servicios. Expide acto de formulación de cargos dentro de los cinco años siguientes a la infracción, con la liquidación de la multa en pesos a la TRM certificada, y lo notifica. La sociedad presenta descargos dentro de los dos meses, aporta pruebas sobre pagos pendientes y luego de la decisión interpone reconsideración. La resolución sancionatoria se notifica dentro de los dos años siguientes al vencimiento del traslado. Como el revisor fiscal certificó las operaciones sin advertir el incumplimiento, la DIAN puede vincularlo solidariamente al pago de la multa.',
          ],
        },
        {
          heading: 'Reconocimiento voluntario antes de la decisión',
          paragraphs: [
            'Antes de que la DIAN notifique la resolución sancionatoria, un exportador reconoce que dejó de canalizar parte de sus divisas y paga la sanción liquidada con la reducción del 75 % prevista en el artículo 23 del Decreto Ley 2245 de 2011. El reconocimiento y pago voluntario permite terminar la actuación sin llegar a la decisión de fondo y reduce de manera sustancial el costo del incumplimiento.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Interponer recursos contra el acto de formulación de cargos cambiario.',
          correction: 'El acto de formulación de cargos no admite recurso alguno. La defensa se ejerce con los descargos dentro del término de traslado de dos meses, en los que deben solicitarse y aportarse las pruebas.',
        },
        {
          mistake: 'Creer que el silencio administrativo en la reconsideración cambiaria favorece a la administración.',
          correction: 'Transcurridos los siete meses sin resolver el recurso de reconsideración, el silencio administrativo opera a favor del recurrente, de modo que la actuación se entiende resuelta en su beneficio.',
        },
        {
          mistake: 'Suponer que solo responde quien realizó materialmente la operación de cambio.',
          correction: 'El régimen prevé responsabilidad solidaria de representantes legales, socios, administradores, revisores fiscales, contadores y demás personas que hayan intervenido en la operación o en su declaración.',
        },
      ],
      norms: [
        {
          norm: 'Decreto Ley 2245 de 2011',
          article: 'arts. 9, 14 y 23',
          status: 'vigente',
          note: 'Procedimiento sancionatorio cambiario: facultades de la autoridad, acto de formulación de cargos y términos; el artículo 23 prevé la reducción del 75 % por reconocimiento y pago voluntario. Verificar la numeración de los artículos en el texto vigente.',
        },
        {
          norm: 'Decreto 1092 de 1996',
          status: 'modificada',
          note: 'Régimen sancionatorio cambiario anterior, citado en materiales antiguos; sus sanciones se expresaban en salarios mínimos y fue derogado por el Decreto Ley 2245 de 2011, que sanciona en UVT y en porcentajes del monto de la operación.',
        },
        {
          norm: 'Ley 1437 de 2011 (CPACA)',
          status: 'vigente',
          note: 'Se aplica supletoriamente a la actuación administrativa cambiaria en lo no previsto por el régimen especial, incluidas la notificación de actos y la práctica de pruebas.',
        },
      ],
      links: [
        { label: 'SUIN-Juriscol — Decreto Ley 2245 de 2011', url: 'https://www.suin-juriscol.gov.co/' },
        { label: 'DIAN — Control cambiario', url: 'https://www.dian.gov.co/' },
        { label: 'Banco de la República — Régimen cambiario', url: 'https://www.banrep.gov.co/es/regulacion/regimen-cambiario' },
      ],
      mindmap: {
        root: 'Procedimiento cambiario',
        branches: [
          { label: 'Norma y naturaleza', children: ['Decreto Ley 2245 de 2011', 'Infracción = contravención administrativa', 'Derogó el Decreto 1092 de 1996'] },
          { label: 'Inicio', children: ['De oficio', 'Informes de funcionarios', 'Visitas de investigación', 'Traslado de otras autoridades', 'Quejas'] },
          { label: 'Acto de formulación de cargos', children: ['Sin recursos', 'Hechos, pruebas y normas infringidas', 'Liquidación en moneda legal colombiana', 'Traslado de 2 meses'] },
          { label: 'Términos', children: ['Notificación: 5 años', 'Descargos: 2 meses', 'Sanción: 2 años desde el traslado', 'Reconsideración: 7 meses con silencio positivo'] },
          { label: 'Responsabilidad', children: ['Infractor directo', 'Solidaria: representantes, socios, administradores, revisores fiscales, contadores'] },
          { label: 'Terminación anticipada', children: ['Reconocimiento voluntario', 'Reducción del 75 % y pago'] },
        ],
      },
      mindmapText:
        'El procedimiento sancionatorio cambiario se rige por el Decreto Ley 2245 de 2011 y considera la infracción cambiaria como contravención administrativa. La actuación inicia de oficio, por informes, visitas, traslado de otras autoridades o quejas; el acto de formulación de cargos no admite recurso, contiene los hechos, las pruebas, las normas infringidas y la liquidación en moneda legal colombiana, y se traslada por dos meses. La DIAN debe notificarlo dentro de cinco años y notificar la sanción dentro de dos años desde el vencimiento del traslado; la reconsideración se resuelve en siete meses y el silencio favorece al recurrente. La responsabilidad es solidaria para representantes legales, socios, administradores, revisores fiscales y contadores, y el reconocimiento voluntario con pago reduce la sanción en un 75 por ciento.',
      source: [
        { doc: 'taci', pages: 'págs. 150-154 (Unidad 6: procedimiento cambiario competencia de la DIAN)' },
      ],
      activityId: 'm10-a02',
    },
    {
      id: 'm10-l05',
      moduleId: 'm10',
      title: 'Régimen probatorio y sancionatorio cambiario: pruebas, sanciones y cuantificación',
      indicators: ['i08'],
      objectives: [
        'Identificar los principios y los medios de prueba aplicables a la actuación cambiaria.',
        'Precisar los términos probatorios nacional y en el exterior y el trámite de la reposición contra la negativa de pruebas.',
        'Enunciar las sanciones de los diez numerales del régimen sancionatorio cambiario.',
        'Aplicar las reglas de cuantificación en UVT y la conversión a moneda legal colombiana.',
        'Reconocer las reglas de reducción, agravación y los términos de caducidad de la facultad sancionatoria.',
      ],
      sections: [
        {
          heading: 'Principios probatorios y medios de prueba',
          paragraphs: [
            'La actuación probatoria cambiaria se rige por los principios de necesidad de la prueba, publicidad, eficacia, contradicción y evaluación conforme a las reglas de la sana crítica. Son admisibles todos los medios de prueba previstos en la ley: los del Código de Procedimiento Administrativo y de lo Contencioso Administrativo (Ley 1437 de 2011) y los del Código General del Proceso (Ley 1564 de 2012), en lo pertinente. No hay un catálogo cerrado de pruebas cambiarias: cualquier medio legal puede servir para demostrar los hechos, siempre que se aporte o solicite en la oportunidad procesal.',
            'Las pruebas solicitadas por el interesado se decretan si son conducentes, pertinentes, eficaces y necesarias para el esclarecimiento de los hechos; en caso contrario se niegan mediante auto motivado, contra el cual procede el recurso de reposición.',
          ],
          callout: {
            type: 'norma',
            text: 'Las pruebas en la actuación cambiaria se rigen por la Ley 1437 de 2011 (CPACA) y, en lo no previsto, por la Ley 1564 de 2012 (Código General del Proceso), en los términos del Decreto Ley 2245 de 2011.',
          },
        },
        {
          heading: 'Términos probatorios',
          paragraphs: [
            'El período probatorio tiene una duración distinta según el lugar donde deba practicarse la prueba, precisamente porque muchas operaciones de cambio se documentan en el exterior:',
          ],
          table: {
            caption: 'Términos del período probatorio cambiario',
            headers: ['Situación', 'Término'],
            rows: [
              ['Pruebas que deben practicarse en el país', 'Cuatro (4) meses contados a partir de la ejecutoria del auto que las decreta.'],
              ['Pruebas que deben practicarse en el exterior', 'Seis (6) meses contados a partir de la ejecutoria del auto que las decreta.'],
              ['Reposición contra el auto que niega pruebas', 'Se interpone dentro del mes siguiente a su notificación.'],
              ['Decisión de esa reposición', 'Se resuelve dentro de los dos (2) meses siguientes a su interposición.'],
              ['Valoración de las pruebas', 'Se valora en su conjunto, según la sana crítica, y el mérito de cada prueba se expone en la resolución sancionatoria.'],
            ],
          },
          callout: {
            type: 'memoriza',
            text: 'Probatorio cambiario: 4 meses para pruebas en el país y 6 meses para pruebas en el exterior. Reposición contra la negativa de pruebas: se interpone en 1 mes y se resuelve en 2 meses.',
          },
        },
        {
          heading: 'Las sanciones del régimen cambiario',
          paragraphs: [
            'El régimen sancionatorio cambiario está contenido, básicamente, en el artículo 3 del Decreto Ley 2245 de 2011, que tipifica diez grupos de infracciones con sus correspondientes sanciones. La estructura es acumulativa: cada numeral tiene su regla de cuantificación y una regla de agravación para la reincidencia.',
          ],
          table: {
            caption: 'Sanciones por infracciones cambiarias (art. 3 del Decreto Ley 2245 de 2011)',
            headers: ['Numeral y conducta', 'Sanción'],
            rows: [
              ['1. No presentar la declaración de cambio, presentarla extemporáneamente o con datos inexactos, cuando no implique infracción de otro numeral', 'Veinticinco (25) UVT por cada declaración, sin exceder de mil (1.000) UVT.'],
              ['2. No canalizar las operaciones del mercado cambiario, extinguir la obligación en el exterior con divisas no canalizadas, o canalizar por un monto inferior al que corresponde', 'Cien por ciento (100 %) del monto dejado de canalizar o del monto extinguido; cien por ciento (100 %) de la diferencia cuando la canalización es parcial; y por el reintegro extemporáneo, cuarenta (40) UVT por cada mes o fracción de mora, sin exceder de cuatrocientas (400) UVT.'],
              ['3. Canalizar indebidamente divisas por el mercado cambiario', 'Cien por ciento (100 %) del monto indebidamente canalizado.'],
              ['4. Incumplir las obligaciones sobre depósitos de que trata el régimen', 'Cien por ciento (100 %) del valor del depósito.'],
              ['5. No presentar la relación de cuentas de compensación, presentarla extemporáneamente o hacer uso indebido de ellas', 'Doscientas (200) UVT por cada relación no presentada; veinticinco (25) UVT por cada mes o fracción de extemporaneidad, sin exceder de ciento cincuenta (150) UVT; y cien por ciento (100 %) del monto por uso indebido de las cuentas.'],
              ['6. Incumplir las obligaciones de los profesionales de compra y venta de divisas', 'Cien por ciento (100 %) del monto de la operación; mil (1.000) UVT si el monto no es cuantificable; veinticinco (25) UVT por cada incumplimiento, sin exceder de mil (1.000) UVT; y cincuenta (50) UVT por cada formulario con declarantes inexistentes, sin exceder de dos mil (2.000) UVT.'],
              ['7. Efectuar transferencias o pagos no autorizados entre residentes y no residentes en moneda extranjera', 'Cien por ciento (100 %) del monto de la operación.'],
              ['8. No declarar la entrada o salida de efectivo superior a US$ 10.000', 'Treinta por ciento (30 %) del monto del ingreso y cuarenta por ciento (40 %) del monto del egreso de las divisas.'],
              ['9. Incumplir las obligaciones de hoteles y agencias de viajes y las de información exógena cambiaria', 'Cuarenta (40) UVT por cada incumplimiento, sin exceder de dos mil (2.000) UVT acumuladas en el año; y doscientas (200) UVT por no suministrar la información exógena cambiaria o hacerlo de forma extemporánea o inexacta, por cada período.'],
              ['10. Incumplir cualquier otra obligación prevista en el régimen de cambios', 'Cláusula residual: cien (100) UVT.'],
            ],
          },
          callout: {
            type: 'importante',
            text: 'Para los numerales 2 a 5 y 7 a 10 la sanción aplicable no puede ser inferior a doscientas (200) UVT. Es una regla de mínimo que se suma al porcentaje o al número de UVT que resulte de la conducta concreta.',
          },
        },
        {
          heading: 'Cuantificación, agravación y reducción',
          paragraphs: [
            'La cuantificación de la sanción sigue reglas precisas que conviene dominar porque definen el resultado del caso:',
          ],
          bullets: [
            'Los montos se calculan sobre el valor total de la operación expresado en moneda legal colombiana, para lo cual se aplica la tasa representativa del mercado (TRM) certificada por la Superintendencia Financiera de Colombia.',
            'La UVT se emplea como unidad de medida de las sanciones; su valor se actualiza anualmente, por lo que la misma infracción tiene un valor distinto según el año de la conducta.',
            'Reincidencia: cuando el infractor incurre de nuevo en la misma conducta, la sanción se incrementa en un tercio (1/3).',
            'Reconocimiento y pago voluntario: el artículo 23 del Decreto Ley 2245 de 2011 prevé una reducción del setenta y cinco por ciento (75 %) de la sanción cuando el infractor reconoce la infracción y paga antes de la decisión, con lo cual el costo esperado del incumplimiento se reduce de manera significativa.',
          ],
        },
        {
          heading: 'Caducidad de la facultad sancionatoria y relación con otras sanciones',
          paragraphs: [
            'La facultad de la DIAN para sancionar infracciones cambiarias debe ejercerse dentro del término de cinco (5) años contados a partir de la comisión de la infracción: el acto de formulación de cargos debe ser expedido y notificado dentro de ese plazo. A partir de la notificación del acto, el procedimiento se sujeta a sus propios términos: dos meses de traslado para descargos, dos años desde el vencimiento del traslado para notificar la sanción y siete meses para resolver la reconsideración.',
            'La sanción cambiaria es independiente de las sanciones tributarias, aduaneras y penales que puedan derivarse de los mismos hechos. Una misma operación puede generar, por ejemplo, una multa cambiaria por no canalización, una sanción aduanera por inexactitud en la declaración de importación y una sanción tributaria por omisión de ingresos. La independencia de los regímenes sancionatorios no impide que la DIAN aproveche los cruces de información como prueba en cada uno de ellos.',
          ],
          callout: {
            type: 'aviso',
            text: 'No confunda el término de caducidad cambiario (5 años desde la comisión de la infracción) con el aduanero (3 años desde el hecho, 8 años en los delitos enumerados) ni con el tributario (5 años para el requerimiento especial desde el vencimiento del plazo para declarar). Son regímenes distintos y cada uno se rige por su propia norma.',
          },
        },
      ],
      summary: [
        'La actuación probatoria cambiaria se rige por necesidad, publicidad, eficacia, contradicción y sana crítica, con los medios de prueba del CPACA (Ley 1437 de 2011) y del Código General del Proceso (Ley 1564 de 2012).',
        'El período probatorio es de 4 meses para pruebas en el país y de 6 meses para pruebas en el exterior; la reposición contra la negativa de pruebas se interpone en 1 mes y se resuelve en 2 meses.',
        'El artículo 3 del Decreto Ley 2245 de 2011 tipifica las infracciones cambiarias y sus sanciones: UVT por declaraciones no presentadas o inexactas, 100 % del monto en las conductas de canalización, 30 % y 40 % por el efectivo no declarado de más de US$ 10.000, y sanciones específicas para profesionales de divisas, hoteles y agencias y obligaciones de información.',
        'Las sanciones de los numerales 2 a 5 y 7 a 10 no pueden ser inferiores a 200 UVT; la reincidencia aumenta la sanción en un tercio y el reconocimiento y pago voluntario la reduce en un 75 %.',
        'La facultad sancionatoria caduca en 5 años desde la comisión de la infracción; dentro de ese término el acto de formulación de cargos debe ser expedido y notificado.',
        'La sanción cambiaria es independiente de las sanciones tributarias, aduaneras y penales por los mismos hechos.',
      ],
      memorize: [
        'Cuadro de sanciones: 25 UVT por declaración (máx. 1.000 UVT); 40 UVT por mes de reintegro extemporáneo (máx. 400 UVT); 200 UVT por relación de cuentas de compensación (25 UVT/mes, máx. 150 UVT en extemporaneidad); 30 % ingreso y 40 % egreso por efectivo > US$ 10.000; 40 UVT para hoteles y agencias (máx. 2.000 UVT); 200 UVT por información exógena cambiaria; 100 UVT residual.',
        'Mínimo de 200 UVT para los numerales 2 a 5 y 7 a 10.',
        'Reincidencia: +1/3. Reconocimiento y pago voluntario: -75 %.',
        'Caducidad cambiaria: 5 años desde la infracción.',
        'Conversión: TRM certificada por la Superintendencia Financiera de Colombia.',
      ],
      examples: [
        {
          heading: 'Cuantificación de una sanción por no canalización',
          paragraphs: [
            'Un exportador dejó de canalizar USD 60.000. Con una TRM certificada de 4.000 pesos por dólar, el monto dejado de canalizar es de 240.000.000 de pesos. La sanción del numeral 2 equivale hasta al 100 % de ese monto, es decir, hasta 240.000.000 de pesos, y en ningún caso puede ser inferior a 200 UVT. Si el exportador reconoce la infracción y paga antes de la decisión, la sanción se reduce en un 75 %, quedando en 60.000.000 de pesos. Si reincide en la misma conducta, el monto se incrementa en un tercio.',
          ],
        },
        {
          heading: 'Efectivo no declarado al salir del país',
          paragraphs: [
            'Un viajero sale del país con US$ 25.000 en efectivo sin declararlos. La sanción del numeral 8 equivale al 40 % del monto del egreso de divisas (el 30 % aplica a los ingresos), calculado en pesos a la TRM certificada. La declaración se exige por montos superiores a US$ 10.000 y se computa por grupo familiar, de modo que quien fragmenta el efectivo entre familiares para eludir la declaración incurre igualmente en la infracción cuando el monto conjunto supera el umbral.',
          ],
        },
      ],
      commonMistakes: [
        {
          mistake: 'Liquidar las sanciones cambiarias en salarios mínimos legales mensuales vigentes.',
          correction: 'Ese esquema correspondía al derogado Decreto 1092 de 1996. Con el Decreto Ley 2245 de 2011 las sanciones se expresan en UVT y en porcentajes del monto de la operación, con montos mínimos en UVT.',
        },
        {
          mistake: 'Creer que un mismo término probatorio aplica a todas las pruebas.',
          correction: 'El período probatorio es de 4 meses para las pruebas que deben practicarse en el país y de 6 meses para las que deben practicarse en el exterior, contados desde la ejecutoria del auto que las decreta.',
        },
        {
          mistake: 'Suponer que la sanción cambiaria absorbe las sanciones aduanera y tributaria por los mismos hechos.',
          correction: 'Los regímenes sancionatorios son independientes: una misma operación puede generar multa cambiaria, sanción aduanera y sanción tributaria, cada una conforme a su propia norma.',
        },
      ],
      norms: [
        {
          norm: 'Decreto Ley 2245 de 2011',
          article: 'arts. 3, 9, 14, 20 y 23',
          status: 'vigente',
          note: 'Régimen sancionatorio cambiario: diez grupos de infracciones con sanciones en UVT y porcentajes del monto de la operación, mínimo de 200 UVT para los numerales 2 a 5 y 7 a 10, agravación de un tercio por reincidencia y reducción del 75 % por reconocimiento y pago voluntario.',
        },
        {
          norm: 'Ley 1437 de 2011 (CPACA)',
          status: 'vigente',
          note: 'Medios de prueba aplicables a la actuación administrativa cambiaria.',
        },
        {
          norm: 'Ley 1564 de 2012 (Código General del Proceso)',
          status: 'vigente',
          note: 'Medios de prueba aplicables supletoriamente a la actuación cambiaria.',
        },
        {
          norm: 'Decreto 1092 de 1996',
          status: 'modificada',
          note: 'Régimen sancionatorio cambiario anterior, derogado por el Decreto Ley 2245 de 2011; sus sanciones se expresaban en salarios mínimos legales mensuales vigentes.',
        },
        {
          norm: 'Decreto 1742 de 2020',
          article: 'art. 3',
          status: 'vigente',
          note: 'Competencia de la DIAN para vigilar el régimen cambiario en el comercio exterior y ejercer la competencia residual en la materia.',
        },
      ],
      links: [
        { label: 'SUIN-Juriscol — Decreto Ley 2245 de 2011', url: 'https://www.suin-juriscol.gov.co/' },
        { label: 'DIAN — Control cambiario', url: 'https://www.dian.gov.co/' },
        { label: 'Banco de la República — Régimen cambiario', url: 'https://www.banrep.gov.co/es/regulacion/regimen-cambiario' },
      ],
      mindmap: {
        root: 'Probatorio y sancionatorio cambiario',
        branches: [
          { label: 'Pruebas', children: ['Necesidad, publicidad, eficacia, contradicción', 'Sana crítica', 'Ley 1437 de 2011 y Ley 1564 de 2012', '4 meses en el país / 6 meses en el exterior', 'Reposición: 1 mes / decisión en 2 meses'] },
          { label: 'Sanciones en UVT', children: ['Declaraciones: 25 UVT (máx. 1.000)', 'Reintegro extemporáneo: 40 UVT/mes (máx. 400)', 'Cuentas de compensación: 200 UVT (25 UVT/mes, máx. 150)', 'Hoteles y agencias: 40 UVT (máx. 2.000)', 'Exógena: 200 UVT', 'Residual: 100 UVT'] },
          { label: 'Sanciones en porcentaje', children: ['100 % monto dejado de canalizar o extinguido', '100 % canalización indebida', '100 % transferencias no autorizadas', '100 % uso indebido de cuentas', '30 % ingreso y 40 % egreso de efectivo > US$ 10.000'] },
          { label: 'Reglas de cuantificación', children: ['TRM certificada por la Superfinanciera', 'Mínimo 200 UVT (numerales 2-5 y 7-10)', 'Reincidencia: +1/3', 'Reconocimiento voluntario: -75 %'] },
          { label: 'Términos', children: ['Caducidad: 5 años', 'Traslado: 2 meses', 'Sanción: 2 años desde el traslado', 'Reconsideración: 7 meses'] },
          { label: 'Independencia', children: ['Sanciones tributarias', 'Sanciones aduaneras', 'Sanciones penales'] },
        ],
      },
      mindmapText:
        'El régimen probatorio cambiario admite todos los medios de prueba de la Ley 1437 de 2011 y de la Ley 1564 de 2012, valorados según la sana crítica, con períodos de 4 meses para pruebas en el país y 6 meses para pruebas en el exterior. El artículo 3 del Decreto Ley 2245 de 2011 tipifica las infracciones cambiarias con sanciones en UVT (declaraciones de cambio, cuentas de compensación, hoteles y agencias, información exógena y cláusula residual) y en porcentajes del monto de la operación (canalización dejada de realizar, indebida o extinta, transferencias no autorizadas y efectivo no declarado: 30 % en ingresos y 40 % en egresos superiores a US$ 10.000). Los montos se convierten con la TRM certificada, el mínimo es de 200 UVT para los numerales 2 a 5 y 7 a 10, la reincidencia aumenta la sanción en un tercio y el reconocimiento voluntario la reduce en un 75 %. La facultad sancionatoria caduca en cinco años.',
      source: [
        { doc: 'taci', pages: 'págs. 155-157 (Unidad 7: régimen probatorio cambiario)' },
        { doc: 'taci', pages: 'págs. 158-164 (Unidad 8: régimen sancionatorio cambiario)' },
      ],
    },
  ],
}
