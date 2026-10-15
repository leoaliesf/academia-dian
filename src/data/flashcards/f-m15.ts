import type { Flashcard } from '../types'

// ============================================================
// Fichas de memoria — Módulo 15 (Repaso general y simulacros)
// Fichas de método de estudio y de estrategia, no de contenido
// temático. Describen herramientas que existen en la plataforma
// y criterios pedagógicos internos, que no son criterios
// oficiales de la CNSC.
// ============================================================

export const CARDS: Flashcard[] = [
  {
    id: 'c-m15-01',
    indicator: 'i11',
    moduleId: 'm15',
    front: '¿Cómo se usa la matriz de cobertura del módulo 15?',
    back: 'Cada indicador i01 a i26 aparece con su tema, el módulo donde se estudia y el tipo de pregunta con que suele evaluarse. Se recorre de arriba hacia abajo marcando cada indicador como dominado, en refuerzo o sin estudiar, y se vuelve a los módulos de los indicadores débiles antes de pasar a los simulacros.',
  },
  {
    id: 'c-m15-02',
    indicator: 'i11',
    moduleId: 'm15',
    front: 'Tipos de pregunta de la convocatoria: conceptuales, de caso y comportamentales',
    back: 'Conceptuales: verifican definiciones, clasificaciones y normas. De caso o interpretación: describen una situación y exigen aplicar el criterio a los hechos. Comportamentales o de juicio situacional: presentan un escenario de trabajo y piden elegir la conducta más adecuada según la competencia y el nivel. El banco de la plataforma permite filtrar por tipo y por indicador.',
  },
  {
    id: 'c-m15-03',
    indicator: 'i11',
    moduleId: 'm15',
    front: '¿Qué es la práctica intercalada y por qué se recomienda?',
    back: 'Consiste en alternar temas de distintos módulos en una misma sesión de estudio en lugar de agotar un tema por completo. Obliga a identificar qué criterio aplicar en cada caso, que es justamente lo que exige el examen, y mejora la retención a largo plazo frente al estudio en bloques.',
  },
  {
    id: 'c-m15-04',
    indicator: 'i11',
    moduleId: 'm15',
    front: '¿Qué es el repaso espaciado y cómo se aplica en la plataforma?',
    back: 'Es revisar el material en intervalos crecientes de tiempo (por ejemplo, días 1, 3, 7, 15 y 30) en lugar de repasar todo cada día. Las fichas del módulo 14 se marcan como repasadas para programar la siguiente revisión y las fichas falladas se devuelven a la sesión.',
  },
  {
    id: 'c-m15-05',
    indicator: 'i11',
    moduleId: 'm15',
    front: 'Clasificación de errores en tres tipos, para el repaso',
    back: '1) Error de contenido: no se conocía la norma o el concepto; se corrige releyendo el módulo. 2) Error de lectura: se conocía el tema pero se respondió otra cosa; se corrige leyendo el enunciado hasta el final y subrayando lo que se pregunta. 3) Error de criterio: se dudó entre dos opciones válidas; se corrige revisando la justificación del banco y las conductas observables de la competencia.',
  },
  {
    id: 'c-m15-06',
    indicator: 'i11',
    moduleId: 'm15',
    front: '¿Qué se puede configurar en los simulacros de la plataforma?',
    back: 'Módulos o temas, número de preguntas (entre 5 y 50), dificultad, tiempo entre 10 y 120 minutos y las ayudas de cronómetro, navegación entre preguntas y marcado para revisión. La plataforma advierte que no reproduce la distribución oficial de la prueba.',
  },
  {
    id: 'c-m15-07',
    indicator: 'i11',
    moduleId: 'm15',
    front: '¿Cómo se interpretan los umbrales de progreso de la plataforma?',
    back: 'Son criterios pedagógicos internos, no oficiales: con al menos tres respuestas registradas por indicador, 80 por ciento o más se considera dominado y menos de 60 por ciento, en refuerzo. Sirven para orientar el repaso, no para predecir el resultado del examen.',
  },
  {
    id: 'c-m15-08',
    indicator: 'i11',
    moduleId: 'm15',
    front: '¿Qué hacer en la última semana antes del examen?',
    back: 'Reducir el material nuevo, repasar la matriz de cobertura y las fichas de competencias y valores, resolver simulacros completos cronometrados en el horario habitual de estudio, revisar solo los errores recurrentes y cuidar el descanso. Las fechas, sedes y condiciones definitivas solo constan en los actos oficiales de la CNSC.',
  },
]
