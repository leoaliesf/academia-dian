import type { Activity } from '../types'

// Actividades guiadas — Módulo 12 (i04)
// Los PDF de estudio no desarrollan el tema; las actividades se construyen
// sobre el contenido verificado en fuentes oficiales (Código Penal, Ley 526
// de 1999, Decreto 1068 de 2015, UIAF y DIAN). Verificación: 2026-10-15.
export const ACTIVITIES: Activity[] = [
  {
    id: 'm12-a01',
    moduleId: 'm12',
    indicator: 'i04',
    title: 'Relaciona cada etapa del lavado de activos con su descripción',
    kind: 'relacionar',
    instructions:
      'Relaciona cada etapa del lavado de activos con la descripción que le corresponde. Al terminar, verifica y revisa por qué cada pareja se justifica y en qué se diferencia del caso de la financiación del terrorismo.',
    pairs: [
      { a: 'Colocación', b: 'Ingreso del dinero o de los bienes de origen ilícito al circuito económico o financiero, sin levantar sospechas' },
      { a: 'Estratificación u ocultamiento', b: 'Separación de los recursos de su origen mediante múltiples transacciones sucesivas, nacionales o internacionales, que rompen la trazabilidad' },
      { a: 'Integración', b: 'Reingreso de los recursos a la economía formal con apariencia de legalidad, mediante inversión en bienes o en sociedades' },
      { a: 'Sobrevaloración de importaciones', b: 'Se declara y paga al exterior más de lo que vale la mercancía; la diferencia permite el flujo de recursos hacia fuera — señal de alerta propia de la estratificación' },
      { a: 'Financiación del terrorismo', b: 'Los recursos se destinan a sostener un grupo armado ilegal o una actividad terrorista; pueden ser de origen lícito' },
      { a: 'Reporte de Operaciones Sospechosas (ROS)', b: 'Reporte inmediato, reservado y sin umbral de cuantía que el sujeto obligado presenta a la UIAF' },
    ],
    explanation:
      'Paso 1: el lavado de activos es un proceso, no un acto único; se analiza en tres etapas que pueden superponerse: colocación, estratificación e integración. Paso 2: la colocación es el momento en que el recurso ilícito toca el circuito formal (consignaciones fraccionadas, efectivo, compra de mercancía). Paso 3: la estratificación es el corazón del delito: se rompe la cadena de trazabilidad mediante múltiples operaciones, entre ellas las de comercio exterior sobrevaloradas o subvaloradas y las triangulaciones. Paso 4: la integración devuelve los recursos al patrimonio con respaldo documental aparente (inmuebles, sociedades, activos). Paso 5: la financiación del terrorismo se relaciona aquí como contraste, porque invierte la lógica: importa el destino y no el origen, por lo que admite recursos lícitos. Paso 6: el ROS es el instrumento por el cual el sujeto obligado pone en conocimiento de la UIAF una operación que se sale de los parámetros de normalidad y carece de justificación razonable; es inmediato, reservado y no depende de la cuantía.',
  },
  {
    id: 'm12-a02',
    moduleId: 'm12',
    indicator: 'i04',
    title: 'Caso: la importación de la sociedad recién constituida',
    kind: 'caso',
    instructions:
      'Lee el caso y responde las preguntas. Cada pregunta tiene una sola respuesta correcta; al finalizar revisa la explicación paso a paso.',
    scenario:
      'La sociedad Comercializadora del Norte S.A.S. fue constituida hace cuatro meses con un capital suscrito y pagado de veinte millones de pesos. No registra empleados afiliados al sistema de seguridad social ni movimientos en sus cuentas bancarias acordes con su actividad. En el mismo mes presenta cinco declaraciones de importación de equipos de cómputo por un valor FOB declarado de tres mil millones de pesos, muy superior al valor de mercado de mercancía idéntica o similar, según los precios de referencia internacionales. Los pagos al proveedor del exterior se realizan mediante giros desde dos cuentas bancarias de personas naturales que no figuran como socias, representantes legales ni empleadas de la sociedad. El proveedor está domiciliado en una jurisdicción de alto riesgo. En la inspección física, la cantidad y las características de la mercancía no coinciden con la descripción declarada. El representante legal, al ser requerido, manifiesta que «la mercancía es para un cliente que prefiere no aparecer».',
    questions: [
      {
        q: '¿Cuál es la señal de alerta de lavado de activos más evidente en el valor declarado de la operación?',
        options: [
          'Subvaloración de las importaciones: se declaró un valor inferior al real, lo que permite el ingreso de recursos al país.',
          'Sobrevaloración de las importaciones: se declaró y pagó un valor superior al real, lo que permite el flujo de recursos hacia el exterior.',
          'Triangulación: la mercancía pasa por varios países antes de llegar a Colombia.',
          'Colocación: el dinero ilícito ingresa en efectivo al sistema financiero.',
        ],
        correct: 1,
        why: 'El caso dice expresamente que el valor FOB declarado es muy superior al valor de mercado de mercancía idéntica o similar: es una sobrevaloración (sobrefacturación) de la importación, mecanismo clásico de salida de recursos hacia el exterior y una de las señales de alerta más preguntadas en materia de comercio exterior. La subvaloración es la señal inversa, asociada a las exportaciones. La triangulación y la colocación no describen el hecho relatado.',
      },
      {
        q: 'El pago realizado desde cuentas de personas naturales que no tienen vínculo con la sociedad importadora es relevante porque…',
        options: [
          '…es una práctica habitual y no genera ninguna alerta si el pago se hace en pesos colombianos.',
          '…impide identificar al ordenante real de las divisas y sugiere el uso de terceros para ocultar al verdadero interesado en la operación.',
          '…solo es relevante si el monto supera los diez mil dólares de los Estados Unidos.',
          '…obliga al importador a presentar la declaración de cambio por servicios financieros.',
        ],
        correct: 1,
        why: 'El uso de cuentas de terceros sin vínculo aparente con el operador es una señal de alerta típica: rompe la relación entre la operación de comercio exterior y quien efectivamente aporta los recursos, y dificulta la identificación del beneficiario final. No depende de la moneda ni de un umbral en dólares.',
      },
      {
        q: 'En la ruta de actuación de la DIAN, ¿cuál es la secuencia correcta una vez detectados estos hechos?',
        options: [
          'Reportar el caso a la UIAF y, con esa sola actuación, entenderse cumplida la obligación de denunciar.',
          'Adelantar el control administrativo (fiscalización aduanera y cambiaria), reportar la operación sospechosa a la UIAF de manera reservada e inmediata y, si hay hechos con características de delito, dar traslado a la Fiscalía General de la Nación.',
          'Remitir el caso directamente a la Superintendencia de Sociedades para que aplique el SAGRILAFT.',
          'Esperar a tener prueba plena del delito de lavado de activos antes de reportar a la UIAF.',
        ],
        correct: 1,
        why: 'El control administrativo de la DIAN y las actuaciones de reporte y denuncia son vías autónomas que se tramitan en paralelo: la DIAN fiscaliza, reporta la operación sospechosa a la UIAF (inmediato, reservado, sin umbral y sin exigencia de certeza) y traslada a la Fiscalía cuando hay indicios de delito. El ROS no sustituye la denuncia, y la DIAN no es una sociedad vigilada por Supersociedades.',
      },
      {
        q: 'Si se establece que los recursos de la sociedad provienen de una estructura de contrabando, ¿ante qué tipo de delito estamos frente al lavado de activos?',
        options: [
          'El contrabando no puede ser delito fuente del lavado de activos en Colombia.',
          'El contrabando es uno de los delitos fuente enumerados en el artículo 323 del Código Penal, y además las operaciones de comercio exterior agravan la pena del lavado.',
          'Solo los delitos relacionados con estupefacientes son delitos fuente del lavado.',
          'El contrabando solo se persigue administrativamente, nunca penalmente.',
        ],
        correct: 1,
        why: 'El artículo 323 del Código Penal incluye el contrabando y el fraude aduanero entre los delitos fuente y agrava la pena cuando la conducta se realiza mediante operaciones de cambio o de comercio exterior. El contrabando es a la vez delito administrativo y penal en Colombia.',
      },
      {
        q: 'La manifestación del representante legal de que «la mercancía es para un cliente que prefiere no aparecer» debe leerse como…',
        options: [
          'Un argumento válido de protección de datos personales que exime de toda verificación.',
          'Un indicio de ocultamiento del beneficiario final de la operación, que obliga a profundizar la verificación y puede configurar la operación sospechosa.',
          'Un requisito legal del régimen aduanero para la importación de equipos de cómputo.',
          'Una prueba plena del delito de lavado de activos.',
        ],
        correct: 1,
        why: 'La negativa a identificar al destinatario real de la mercancía es un indicio fuerte de ocultamiento del beneficiario final, figura sobre la que existe el Registro Único de Beneficiarios Finales (Ley 2195 de 2022, art. 13), al que la DIAN tiene acceso. Un indicio no es prueba plena y no desplaza la presunción de inocencia: sustenta la actuación administrativa, el reporte a la UIAF y, de ser el caso, el traslado penal.',
      },
    ],
    explanation:
      'Paso 1: identifica el indicio de origen o de destino ilícito. Paso 2: clasifícalo como señal de alerta. AQUÍ la clave es la sobrevaloración: cuando el valor declarado supera el valor real de la mercancía, el excedente pagado al exterior es el canal para movilizar recursos; en las exportaciones, en cambio, lo típico es la subvaloración, que permite dejar recursos en el exterior. Paso 3: revisa el perfil del operador (sociedad nueva, capital reducido, sin actividad coherente, sin empleados, con pagos de terceros, con proveedores en jurisdicciones de alto riesgo). Paso 4: cuando los hechos encajan en las señales de alerta y no existe justificación razonable, hay operación sospechosa: se reporta a la UIAF de manera inmediata y reservada, sin umbral de cuantía y sin exigir certeza probatoria. Paso 5: en paralelo, la DIAN adelanta el control administrativo aduanero y cambiario e identifica si hay hechos con características de delito; si los hay, traslada a la Fiscalía General de la Nación. Paso 6: no olvides que el lavado de activos es un delito autónomo: no requiere condena previa por el contrabando que originó los recursos, y la sanción administrativa no agota el reproche penal.',
  },
]
