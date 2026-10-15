import type { Activity } from '../types'

// ============================================================
// Actividades — Módulo 15 (Repaso general y simulacros)
// m15-a01: caso integrador que combina dimensiones técnicas
// (términos, actuación administrativa, gestión de datos) con
// dimensiones comportamentales y de valores.
// Escenario hipotético. Las referencias normativas son hechos
// verificables del marco general de la actuación administrativa
// y del Código de Integridad; no provienen de los PDF de la
// convocatoria.
// ============================================================

export const ACTIVITIES: Activity[] = [
  {
    id: 'm15-a01',
    moduleId: 'm15',
    indicator: 'i06',
    title: 'Caso integrador: transición de sistema, metas y trato con el ciudadano',
    kind: 'caso',
    instructions:
      'Lea el caso completo y responda las cuatro preguntas. Cada una evalúa una dimensión distinta: adaptación al cambio y logro, comunicación con el ciudadano, trabajo en equipo y lectura de datos. No hay una sola competencia en juego: identifique en cada pregunta el criterio que resulta determinante.',
    scenario:
      'Una dirección seccional implementa un nuevo sistema de radicación de solicitudes. La transición durará tres semanas y el equipo de cinco servidores debe mantener los tiempos de respuesta acordados en la carta de trámites. En el trimestre el área recibió 250 solicitudes: 150 se resolvieron dentro del término, 60 con retardo y 40 continúan pendientes. Durante la transición se incorpora un servidor nuevo que no conoce el procedimiento anterior. La meta trimestral del área es resolver el 95 por ciento de las solicitudes dentro del término, y el coordinador debe presentar un informe al comité directivo.',
    questions: [
      {
        q: 'En la primera semana de la transición el equipo advierte que el nuevo sistema exige más pasos que el anterior y que el ritmo de respuesta está bajando. ¿Cuál actuación integra mejor la adaptabilidad al cambio con la orientación al logro?',
        options: [
          'Solicitar que la implementación del sistema se aplace hasta que el equipo reciba capacitación completa, para no afectar las metas.',
          'Continuar con el sistema anterior de manera paralela y decidir en el comité qué herramienta conservar.',
          'Aplicar el nuevo sistema, identificar con el equipo los pasos que consumen más tiempo y reorganizar la carga de trabajo para sostener los tiempos de respuesta, informando al coordinador el efecto real de la transición sobre las metas.',
          'Priorizar únicamente las solicitudes cuyo término vence en la semana y suspender las demás hasta el cierre de la transición.',
        ],
        correct: 2,
        why: 'La Adaptabilidad de nivel 1 exige poner en marcha el cambio e integrar las nuevas herramientas, y la Orientación al logro de nivel 1 exige organizar y controlar el trabajo para cumplir en los tiempos previstos, así como responsabilizarse por los objetivos. La opción elegida implementa el cambio, mide sus efectos y reorganiza el trabajo para sostener las metas, informando con veracidad. Aplazar el sistema, mantener dos herramientas o suspender solicitudes desplazan el costo de la transición a los ciudadanos o a la entidad.',
      },
      {
        q: 'Un ciudadano cuyo trámite se retrasó a causa de la transición llama molesto y exige una explicación. ¿Cuál respuesta corresponde a la comunicación efectiva y a la orientación al usuario?',
        options: [
          'Explicarle que el retraso se debe a la implementación de un sistema nuevo y que la entidad no es responsable de esa demora.',
          'Escuchar su reclamo, reconocer la demora, explicarle en lenguaje sencillo en qué estado se encuentra su trámite, cuál es el nuevo plazo estimado y por qué canal recibirá la respuesta, confirmando que comprendió la información.',
          'Informarle que debe presentar un derecho de petición para conocer el estado de su trámite.',
          'Indicarle que su caso es uno de los 60 retrasados del trimestre y que la entidad atiende por orden de llegada.',
        ],
        correct: 1,
        why: 'La Comunicación efectiva de nivel 1 exige transmitir con claridad y verificar la comprensión, y la Orientación al usuario de nivel 1 exige escuchar, brindar soluciones aplicando los protocolos y mostrar amabilidad y respeto, sin satisfacer al usuario al margen de la norma. Escuchar, reconocer la demora y dar información útil cumple las dos dimensiones. Explicar el retraso sin asumir la atención, remitir a un derecho de petición o responder con una cifra de gestión no resuelven la necesidad del ciudadano.',
      },
      {
        q: 'El servidor nuevo no conoce el procedimiento anterior y debe aprender el nuevo sistema junto con el equipo. ¿Cuál conducta corresponde al trabajo en equipo?',
        options: [
          'Asignarle tareas de archivo mientras el resto del equipo atiende las solicitudes, para no afectar el ritmo durante la transición.',
          'Indicarle que revise por su cuenta los manuales del sistema, porque el equipo no tiene tiempo para acompañarlo.',
          'Acompañarlo en el aprendizaje, compartir con él las soluciones que el equipo ya identificó en el nuevo sistema y distribuir la carga para que sus primeros casos se revisen antes de la respuesta final.',
          'Dejar que aprenda del error: la revisión de sus actuaciones corresponde al coordinador en la evaluación de desempeño.',
        ],
        correct: 2,
        why: 'El Trabajo en equipo de nivel 1 exige participar y colaborar en las actividades del equipo, y en un proceso de cambio la colaboración incluye transferir el conocimiento que ya se ha construido. Acompañar y revisar los primeros casos protege a la vez la calidad del servicio y la incorporación del nuevo integrante. Apartarlo, dejarlo solo o trasladar la revisión al coordinador debilitan el equipo y el desempeño del área.',
      },
      {
        q: 'De acuerdo con los datos del trimestre (250 solicitudes: 150 resueltas dentro del término, 60 con retardo y 40 pendientes), ¿qué porcentaje se resolvió dentro del término y qué relación tiene con la meta del área?',
        options: [
          'El 60 por ciento, y el área está por debajo de la meta del 95 por ciento.',
          'El 66,7 por ciento, y el área está por debajo de la meta del 95 por ciento.',
          'El 60 por ciento, y el área cumple la meta porque el trimestre aún no ha cerrado.',
          'El 84 por ciento, y el área está levemente por debajo de la meta.',
        ],
        correct: 0,
        why: 'Paso 1: la base es el total de solicitudes recibidas, 250. Paso 2: 150 dividido entre 250 es 0,6, es decir, 60 por ciento resuelto dentro del término. Paso 3: la meta del área es 95 por ciento, de modo que el resultado está 35 puntos porcentuales por debajo. El 66,7 por ciento divide 40 pendientes o mezcla bases de cálculo, el 84 por ciento corresponde a sumar las resueltas y las retrasadas, y afirmar que la meta se cumple porque el trimestre no cerró desconoce el dato disponible.',
      },
    ],
    explanation:
      'Paso 1: identifique en cada pregunta la dimensión dominante. La primera combina una decisión de adaptación al cambio con el sostenimiento de metas; la segunda, comunicación y servicio; la tercera, colaboración dentro del equipo; la cuarta, lectura de datos. Paso 2: en las preguntas de conducta, verifique que la opción elegida respete a la vez las normas y los protocolos: ninguna competencia autoriza a satisfacer al usuario al margen del procedimiento ni a incumplir un término. Paso 3: en las preguntas de conducta colectiva, prefiera la opción que sostenga el servicio y el aprendizaje del equipo por encima de la comodidad individual. Paso 4: en la pregunta de datos, fije primero la base de cálculo (250 solicitudes recibidas), aplique la operación (150 dividido entre 250) y compare con la meta; al presentar el resultado, hágalo con veracidad, que es la conducta que el valor de Honestidad exige del informe que el coordinador llevará al comité.',
  },
]
