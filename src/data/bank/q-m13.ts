import type { Question } from '../types'

// ============================================================
// Banco de preguntas — Módulo 13 (i11 razonamiento analítico)
// Este tema NO está desarrollado en los PDF de estudio. Los
// ítems se elaboraron para esta plataforma a partir de la
// definición oficial de razonamiento analítico de la CNSC
// (habilidad para descomponer un problema, identificar patrones
// y relaciones y llegar a conclusiones lógicas y fundamentadas)
// verificada el 2026-10-15. Todos los ítems tienen una única
// solución verificable.
// Nota de tipos: el modelo de datos de la plataforma no incluye
// la categoría 'razonamiento' para preguntas; los ítems de
// lógica y lectura se registran como 'interpretacion' y los de
// cálculo con datos como 'aplicacion'.
// ============================================================

export const QUESTIONS: Question[] = [
  {
    id: 'q-m13-001',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Silogismos categóricos',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'De las siguientes premisas: «Todos los gestores de la DIAN son servidores públicos» y «algunos servidores públicos son contadores públicos», ¿qué conclusión se sigue necesariamente?',
    options: [
      'Algunos gestores de la DIAN son contadores públicos, porque ambos grupos están incluidos entre los servidores públicos.',
      'Todos los contadores públicos son servidores públicos, porque la primera premisa lo garantiza.',
      'Ningún gestor de la DIAN es contador público, porque la segunda premisa no menciona a los gestores.',
      'Ninguna conclusión se sigue necesariamente sobre la relación entre gestores y contadores públicos.',
    ],
    correct: 3,
    justification:
      'Paso 1: la primera premisa dice que TODO gestor está incluido en el conjunto de servidores públicos. Paso 2: la segunda premisa dice que ALGUNOS servidores públicos son contadores, sin precisar cuáles. Paso 3: ese «algunos» puede referirse a servidores que no son gestores, de modo que la intersección entre gestores y contadores puede existir o no existir. Paso 4: cuando la conclusión no se sigue con necesidad de las premisas, la respuesta correcta es la que lo advierte.',
    wrong: [
      'Es la falacia del término medio no distribuido: nada garantiza que los contadores mencionados en la segunda premisa sean precisamente gestores.',
      'La segunda premisa afirma «algunos», no «todos»; concluir una afirmación universal invierte la cantidad del enunciado.',
      'Concluir que NINGÚN gestor es contador también es un salto: la intersección puede existir aunque no se haya afirmado.',
      '',
    ],
    source: 'Elaboración propia de la plataforma. Tema no desarrollado en los PDF de estudio; definición de razonamiento analítico verificada en fuente CNSC (2025).',
  },
  {
    id: 'q-m13-002',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Condicionales',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'En un proceso interno se estableció la regla: «Si el expediente está completo, entonces el trámite se resuelve dentro de los quince días siguientes». Se verifica que un trámite NO se resolvió dentro de los quince días. ¿Qué se concluye necesariamente?',
    options: [
      'El expediente no estaba completo.',
      'El trámite se resolverá más adelante sin problema.',
      'El expediente estaba completo, pero hubo demora.',
      'Nada se concluye, porque la regla admite excepciones.',
    ],
    correct: 0,
    justification:
      'Paso 1: se trata de un condicional «si P, entonces Q», donde P es «el expediente está completo» y Q es «el trámite se resuelve en quince días». Paso 2: se sabe que Q no ocurrió. Paso 3: en lógica, de la negación del consecuente se sigue la negación del antecedente (modus tollens). Paso 4: por tanto, el expediente no estaba completo.',
    wrong: [
      '',
      'No se sigue de las premisas: la regla no dice nada sobre qué ocurre cuando el expediente está incompleto.',
      'Esta opción niega el consecuente pero conserva el antecedente, con lo cual la regla quedaría violada.',
      'La regla se formuló como condicional, de modo que su cumplimiento es lo que se está evaluando; descartarla impide cualquier razonamiento.',
    ],
    source: 'Elaboración propia de la plataforma. Tema no desarrollado en los PDF de estudio; definición de razonamiento analítico verificada en fuente CNSC (2025).',
  },
  {
    id: 'q-m13-003',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Condicionales: falacias',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Se afirma: «Si un contribuyente presenta la declaración de forma extemporánea, entonces debe pagar una sanción». Se sabe que un contribuyente pagó una sanción. ¿Qué se concluye necesariamente?',
    options: [
      'El contribuyente presentó la declaración de forma extemporánea, porque toda sanción de la entidad se origina en esa conducta.',
      'El contribuyente no presentó la declaración de forma extemporánea, porque la sanción solo procede en otros supuestos.',
      'No puede concluirse que presentó la declaración de forma extemporánea, porque la sanción pudo deberse a otra causa.',
      'La sanción fue impuesta por error, porque la entidad sancionó sin que existiera una declaración extemporánea.',
    ],
    correct: 2,
    justification:
      'Paso 1: la regla es «si P entonces Q». Paso 2: el dato disponible es que Q ocurrió (se pagó sanción). Paso 3: afirmar P a partir de Q es la falacia de afirmación del consecuente: la regla dice que la extemporaneidad implica sanción, pero no que toda sanción provenga de una extemporaneidad. Paso 4: por tanto, no hay conclusión necesaria sobre la causa de la sanción.',
    wrong: [
      'Es exactamente la falacia de afirmación del consecuente: el condicional no funciona en ambos sentidos.',
      'Del pago de la sanción no se sigue la negación de P; esta opción es tan injustificada como la anterior, en sentido contrario.',
      '',
      'El enunciado no aporta ningún elemento que permita calificar la sanción de errónea.',
    ],
    source: 'Elaboración propia de la plataforma. Tema no desarrollado en los PDF de estudio; definición de razonamiento analítico verificada en fuente CNSC (2025).',
  },
  {
    id: 'q-m13-004',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Series numéricas',
    difficulty: 'basica',
    kind: 'aplicacion',
    statement: 'Observe la serie: 3, 6, 11, 18, 27, ¿? Indique el número que continúa la serie.',
    options: ['36', '37', '38', '39'],
    correct: 2,
    justification:
      'Paso 1: se calculan las diferencias entre términos consecutivos: 6-3=3, 11-6=5, 18-11=7, 27-18=9. Paso 2: las diferencias forman la serie de los números impares consecutivos 3, 5, 7, 9, de modo que la siguiente es 11. Paso 3: 27+11=38. La solución es única.',
    wrong: [
      '36 correspondería a sumar 9 otra vez, sin advertir que las diferencias aumentan en 2 cada vez.',
      '37 no corresponde a ninguna regularidad de la serie.',
      '',
      '39 correspondería a sumar 12, es decir, a suponer un salto de 3 en las diferencias.',
    ],
    source: 'Elaboración propia de la plataforma. Serie con solución única verificada por cálculo de diferencias.',
  },
  {
    id: 'q-m13-005',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Series alternas',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement: 'Observe la serie: 2, 5, 4, 10, 8, 20, 16, ¿? Indique el número que continúa la serie.',
    options: ['24', '32', '36', '40'],
    correct: 3,
    justification:
      'Paso 1: la serie parece irregular, señal de que pueden estar entrelazadas dos series. Paso 2: las posiciones impares son 2, 4, 8, 16, que se duplican en cada paso. Paso 3: las posiciones pares son 5, 10, 20, que también se duplican. Paso 4: la incógnita ocupa la octava posición, que pertenece a la segunda serie, de modo que el valor es 20x2 = 40.',
    wrong: [
      '24 supone un incremento de 8 sobre 16, que no corresponde a ninguna de las dos series entrelazadas.',
      '32 es la continuación de la serie de posiciones impares (16x2), pero la incógnita está en una posición par.',
      '36 no se deduce de la regularidad identificada.',
      '',
    ],
    source: 'Elaboración propia de la plataforma. Serie con solución única verificada por descomposición en dos sucesiones.',
  },
  {
    id: 'q-m13-006',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Interpretación de tablas: variación porcentual',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'La tabla muestra el recaudo de gestión de cuatro oficinas en dos años (millones de pesos). Oficina Norte: 200 en el año 1 y 250 en el año 2. Oficina Centro: 400 y 480. Oficina Sur: 150 y 180. Oficina Oriente: 100 y 130. ¿Qué oficina registró el mayor crecimiento porcentual?',
    options: [
      'Norte, porque aumentó 50 millones.',
      'Centro, porque es la que más recauda.',
      'Oriente, porque creció 30 por ciento.',
      'Sur, porque creció 30 millones.',
    ],
    correct: 2,
    justification:
      'Paso 1: el crecimiento porcentual se calcula dividiendo el aumento entre el valor inicial. Paso 2: Norte: 50/200 = 25 por ciento. Centro: 80/400 = 20 por ciento. Sur: 30/150 = 20 por ciento. Oriente: 30/100 = 30 por ciento. Paso 3: el mayor crecimiento porcentual es el de Oriente, aunque su aumento absoluto (30 millones) sea menor que el de Norte (50 millones). Paso 4: la pregunta pide crecimiento porcentual, no aumento absoluto ni volumen total, y las cuatro tasas son distintas entre sí, lo que hace la solución única.',
    wrong: [
      'El aumento de 50 millones es el mayor en términos absolutos, pero la pregunta pide la variación porcentual: 50 sobre una base de 200 es 25 por ciento.',
      'El mayor recaudo total no implica el mayor crecimiento: Centro aumentó 20 por ciento sobre su base de 400.',
      '',
      'Sur aumentó 30 millones, pero sobre una base de 150, lo que equivale a 20 por ciento, no a 30 por ciento.',
    ],
    source: 'Elaboración propia de la plataforma. Datos hipotéticos con solución única verificada por cálculo de variación porcentual.',
  },
  {
    id: 'q-m13-007',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Interpretación de tablas: base de cálculo',
    difficulty: 'intermedia',
    kind: 'aplicacion',
    statement:
      'En el segundo trimestre una dependencia recaudó 90 millones frente a una meta de 110 millones. ¿En qué porcentaje aproximado quedó por debajo de la meta?',
    options: ['15,0 por ciento', '18,2 por ciento', '20,0 por ciento', '22,2 por ciento'],
    correct: 1,
    justification:
      'Paso 1: la desviación absoluta es 110 - 90 = 20 millones. Paso 2: el porcentaje de desviación se calcula sobre la META, que es el valor de referencia: 20/110 = 0,1818. Paso 3: expresado en porcentaje, 18,2 por ciento. La solución es única porque el cálculo sobre la base correcta solo coincide con una opción.',
    wrong: [
      '15,0 por ciento no corresponde al cociente entre la desviación y la meta.',
      '',
      '20,0 por ciento es la desviación expresada en millones, no en porcentaje: se confunde el valor absoluto con la tasa.',
      '22,2 por ciento resulta de dividir 20 entre 90, es decir, de calcular la desviación sobre el recaudo efectivo y no sobre la meta, que es la base de referencia.',
    ],
    source: 'Elaboración propia de la plataforma. Datos hipotéticos con solución única; el distractor 22,2 por ciento ilustra el error de base de cálculo.',
  },
  {
    id: 'q-m13-008',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Identificación de supuestos',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Un informe afirma: «Los tiempos de respuesta del proceso mejoraron porque se implementó el nuevo sistema de radicación». ¿Cuál es el supuesto que sostiene esa afirmación?',
    options: [
      'El nuevo sistema de radicación fue costoso, lo que demuestra que la entidad estaba decidida a mejorar los tiempos.',
      'No hubo otros factores distintos de la implementación del sistema que expliquen la mejora de los tiempos.',
      'Todos los funcionarios están de acuerdo con el nuevo sistema, porque sin su aceptación la herramienta no podría funcionar.',
      'El sistema anterior era más lento en todos los procesos de la entidad, y por eso debía ser reemplazado cuanto antes.',
    ],
    correct: 1,
    justification:
      'Paso 1: el argumento atribuye un efecto observado (mejora de tiempos) a una única causa (el nuevo sistema). Paso 2: para que esa atribución sea válida, es necesario que no exista otra causa que explique el mismo efecto. Paso 3: por tanto, el supuesto implícito es la ausencia de causas alternativas; si las hubiera, la conclusión no se sostendría. Paso 4: los demás enunciados pueden ser verdaderos o falsos sin afectar la validez del argumento.',
    wrong: [
      'El costo del sistema es irrelevante para la relación causal que el informe afirma.',
      '',
      'El acuerdo de los funcionarios no es necesario para que el sistema mejore los tiempos, de modo que no es un supuesto del argumento.',
      'El argumento no requiere comparar con todos los procesos de la entidad, solo explicar la mejora del proceso mencionado.',
    ],
    source: 'Elaboración propia de la plataforma. Ejercicio de identificación de supuestos con solución única.',
  },
  {
    id: 'q-m13-009',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Conclusión de un argumento',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Lea el texto: «En el último año el número de requerimientos enviados aumentó en un 20 por ciento, mientras que el número de respuestas dadas dentro del término se mantuvo igual que el año anterior». ¿Cuál es la conclusión que se sigue del texto?',
    options: [
      'Los requerimientos enviados son demasiados para la capacidad de la dependencia.',
      'La proporción de respuestas dadas dentro del término disminuyó respecto del año anterior.',
      'El número de respuestas dadas dentro del término aumentó en un 20 por ciento.',
      'La dependencia incumplió todos sus términos legales.',
    ],
    correct: 1,
    justification:
      'Paso 1: se identifican los dos datos del texto: los requerimientos aumentaron 20 por ciento y las respuestas oportunas no variaron. Paso 2: una proporción relaciona dos cantidades; si el denominador (requerimientos) crece y el numerador (respuestas oportunas) permanece constante, la proporción baja. Paso 3: la única afirmación que se sigue con necesidad es la disminución de la proporción. Paso 4: las demás opciones agregan información que el texto no contiene.',
    wrong: [
      'El texto no dice nada sobre la capacidad de la dependencia; es una interpretación añadida.',
      '',
      'Contradice directamente el dato del texto, que señala que las respuestas oportunas se mantuvieron iguales.',
      'El texto no permite afirmar un incumplimiento total; solo se refiere a la proporción de respuestas oportunas.',
    ],
    source: 'Elaboración propia de la plataforma. Ejercicio de conclusión con solución única verificada por análisis de proporciones.',
  },
  {
    id: 'q-m13-010',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Deducción con ordenamiento',
    difficulty: 'avanzada',
    kind: 'aplicacion',
    statement:
      'Cuatro funcionarios (Ana, Beto, Carla y David) radican una solicitud cada uno, en días diferentes de la misma semana laboral (lunes, martes, miércoles y jueves). Se sabe que: David radicó el lunes; Ana no radicó ni el lunes ni el jueves; y Beto radicó el día siguiente al de Carla. ¿Quién radicó el jueves?',
    options: ['Ana', 'Beto', 'Carla', 'No es posible determinarlo con la información disponible.'],
    correct: 1,
    justification:
      'Paso 1: David ocupa el lunes, de modo que quedan martes, miércoles y jueves para Ana, Beto y Carla. Paso 2: Ana no puede ocupar ni lunes ni jueves, así que Ana solo puede ocupar martes o miércoles. Paso 3: se prueba la única forma en que Beto siga inmediatamente a Carla entre los días restantes: Carla el miércoles y Beto el jueves. Paso 4: la alternativa Carla el martes y Beto el miércoles obligaría a ubicar a Ana el jueves, lo que contradice el enunciado; por tanto, Beto radicó el jueves y la solución es única.',
    wrong: [
      'Ana no puede radicar el jueves: el enunciado lo excluye expresamente.',
      '',
      'Carla ocuparía el miércoles en la única combinación posible, y su compañero inmediato es Beto.',
      'Aunque a primera vista parece haber dos arreglos posibles, uno de ellos contradice el enunciado, de modo que la información sí alcanza para determinarlo.',
    ],
    source: 'Elaboración propia de la plataforma. Ejercicio de ordenamiento con solución única verificada por eliminación.',
  },
  {
    id: 'q-m13-011',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Razonamiento con porcentajes',
    difficulty: 'basica',
    kind: 'aplicacion',
    statement:
      'De las 25 solicitudes recibidas por una dependencia, el 40 por ciento fue clasificado como prioritario. De las solicitudes prioritarias, el 30 por ciento ya fue resuelto. ¿Cuántas solicitudes prioritarias siguen pendientes?',
    options: ['3', '7', '10', '18'],
    correct: 1,
    justification:
      'Paso 1: se calcula el número de solicitudes prioritarias: 25 x 0,40 = 10. Paso 2: de esas 10, se resolvió el 30 por ciento: 10 x 0,30 = 3. Paso 3: las pendientes son 10 - 3 = 7. La solución es única y se verifica porque 7 + 3 = 10 prioritarias.',
    wrong: [
      '3 es el número de solicitudes prioritarias ya resueltas, no las pendientes.',
      '',
      '10 es el total de solicitudes prioritarias, antes de descontar las resueltas.',
      '18 es el número de solicitudes NO prioritarias (25 - 10), que no responde a la pregunta.',
    ],
    source: 'Elaboración propia de la plataforma. Cálculo de dos pasos con solución única verificada.',
  },
  {
    id: 'q-m13-012',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Validez de generalizaciones',
    difficulty: 'avanzada',
    kind: 'interpretacion',
    statement:
      'Un auditor revisa diez expedientes de una dependencia y encuentra que tres tienen errores de digitación. Con base en esa revisión concluye: «el 30 por ciento de todos los expedientes de la entidad presenta errores de digitación». ¿Cuál es la objeción más fuerte a esa conclusión?',
    options: [
      'Que el porcentaje debería expresarse en números absolutos, porque así se evitaría exagerar el alcance de los tres hallazgos.',
      'Que la muestra es demasiado pequeña y de una sola dependencia, por lo que no permite generalizar a toda la entidad.',
      'Que los errores de digitación no son un problema relevante para la entidad, de modo que la conclusión no aporta a la gestión.',
      'Que el auditor debería haber revisado los mismos diez expedientes dos veces, para descartar errores en la propia revisión.',
    ],
    correct: 1,
    justification:
      'Paso 1: la conclusión extiende un resultado observado en diez expedientes de una dependencia al universo de todos los expedientes de la entidad. Paso 2: para generalizar se requiere una muestra representativa: suficiente en tamaño y obtenida de todos los segmentos relevantes. Paso 3: diez expedientes de una sola dependencia no cumplen esa condición, por lo que la objeción a la representatividad es la más fuerte. Paso 4: las demás observaciones no atacan la inferencia.',
    wrong: [
      'Expresar el resultado en números absolutos no corrige el problema: tres casos de diez seguirían siendo una base insuficiente para generalizar.',
      '',
      'La relevancia del hallazgo no afecta la validez del razonamiento, que es lo que se está cuestionando.',
      'Revisar dos veces los mismos expedientes mejora la fiabilidad de esa medición, pero no resuelve el problema de representatividad frente a toda la entidad.',
    ],
    source: 'Elaboración propia de la plataforma. Ejercicio de evaluación de generalizaciones con solución única.',
  },
  {
    id: 'q-m13-013',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Condiciones necesarias conjuntas',
    difficulty: 'intermedia',
    kind: 'interpretacion',
    statement:
      'Un procedimiento interno establece: «un documento se radica únicamente si está firmado por el solicitante y está completo». Se recibe un documento completo, pero sin la firma. ¿Qué se concluye?',
    options: [
      'El documento puede radicarse, porque está completo.',
      'El documento puede radicarse, porque la firma puede agregarse después.',
      'El documento no cumple las condiciones exigidas para su radicación.',
      'No se puede concluir nada, porque falta información sobre el solicitante.',
    ],
    correct: 2,
    justification:
      'Paso 1: el enunciado exige dos condiciones unidas por la conjunción «y»: estar firmado y estar completo. Paso 2: ambas son necesarias simultáneamente, de modo que el incumplimiento de una sola impide la radicación. Paso 3: como falta la firma, el documento no cumple las condiciones exigidas. Paso 4: la conclusión es necesaria y única.',
    wrong: [
      'Estar completo es solo una de las dos condiciones exigidas; el enunciado las exige juntas.',
      'El procedimiento no autoriza radicar y completar después: la firma es una condición de la radicación misma.',
      '',
      'La información faltante no es sobre el solicitante, sino sobre la firma, que el propio enunciado indica que no está.',
    ],
    source: 'Elaboración propia de la plataforma. Ejercicio de condiciones necesarias conjuntas con solución única.',
  },
  {
    id: 'q-m13-014',
    indicator: 'i11',
    moduleId: 'm13',
    topic: 'Decisiones basadas en datos',
    difficulty: 'basica',
    kind: 'interpretacion',
    statement:
      'La tabla de motivos de devolución de solicitudes de una dependencia arroja: falta de firma, 45 casos; anexo incompleto, 30; formato equivocado, 15; otros motivos, 10; para un total de 100 casos. Si debe elegirse una sola acción para reducir el número de devoluciones, ¿sobre qué causa debería orientarse, según los datos?',
    options: [
      'Sobre la falta de firma, porque concentra el mayor número de casos.',
      'Sobre la suma de anexo incompleto y formato equivocado, porque juntos superan la falta de firma.',
      'Sobre otros motivos, porque es la causa menos atendida.',
      'Sobre las cuatro causas por igual, porque todas generan devoluciones.',
    ],
    correct: 0,
    justification:
      'Paso 1: para maximizar el efecto de una sola acción se debe atacar la causa con mayor frecuencia. Paso 2: los datos muestran que la falta de firma concentra 45 de 100 casos, esto es, el 45 por ciento. Paso 3: los conjuntos de causas mencionados en las otras opciones requerirían más de una acción o no corresponden al mayor impacto. Paso 4: la respuesta se sigue directamente de la tabla y es única.',
    wrong: [
      '',
      'Sumar dos causas exige dos intervenciones distintas, y la pregunta pide elegir UNA sola acción.',
      'La causa menos atendida no es necesariamente la más frecuente; los datos muestran que «otros motivos» es la menor, con 10 casos.',
      'Actuar por igual sobre las cuatro causas no maximiza el efecto de una sola medida: la falta de firma por sí sola explica casi la mitad de las devoluciones.',
    ],
    source: 'Elaboración propia de la plataforma. Datos hipotéticos con solución única basada en la frecuencia.',
  },
]
