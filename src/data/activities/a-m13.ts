import type { Activity } from '../types'

// ============================================================
// Actividades — Módulo 13 (Razonamiento analítico)
// m13-a01: razonamiento sobre una serie de datos operativos.
// m13-a02: interpretación de una tabla de gestión y detección
// de conclusiones no soportadas.
// Escenarios y datos hipotéticos, con solución única verificada
// por cálculo. Las definiciones de la competencia provienen de
// la CNSC; no provienen de los PDF de la convocatoria.
// ============================================================

export const ACTIVITIES: Activity[] = [
  {
    id: 'm13-a01',
    moduleId: 'm13',
    indicator: 'i11',
    title: 'Serie de casos atendidos: patrón, promedio y deducción',
    kind: 'razonamiento',
    instructions:
      'Lea el escenario y responda cada pregunta. Antes de mirar las opciones, escriba el cálculo o la deducción en papel: identifique el patrón o la relación lógica y solo después compare con las alternativas.',
    scenario:
      'El equipo de una oficina de atención registró los casos tramitados en cuatro días consecutivos: día 1, 40 casos; día 2, 52 casos; día 3, 68 casos; día 4, 88 casos. El equipo observa que el aumento entre días consecutivos es cada vez mayor. Para el día 5 se proyecta continuar con la misma regla de crecimiento. Además, el procedimiento interno establece: todo caso con término vencido se reporta al coordinador. Se sabe que el caso 210 tiene el término vencido.',
    questions: [
      {
        q: 'Si se mantiene la regla de crecimiento observada, ¿cuántos casos se proyectan para el día 5?',
        options: ['104 casos', '108 casos', '112 casos', '116 casos'],
        correct: 2,
        why: 'Las diferencias entre días consecutivos son 12, 16 y 20: aumentan de 4 en 4. La siguiente diferencia es 24, de modo que el día 5 se proyectan 88 + 24 = 112 casos. Las demás opciones aplican una diferencia constante o un crecimiento distinto del observado.',
      },
      {
        q: '¿Qué se sigue necesariamente de la regla del procedimiento y del dato sobre el caso 210?',
        options: [
          'El caso 210 puede reportarse al coordinador si el funcionario lo considera conveniente.',
          'El caso 210 se reporta al coordinador.',
          'Todos los casos reportados al coordinador tienen el término vencido.',
          'El caso 210 tiene término vencido porque fue reportado al coordinador.',
        ],
        correct: 1,
        why: 'Es un modus ponens: si un caso tiene término vencido, entonces se reporta al coordinador; el caso 210 tiene término vencido; luego el caso 210 se reporta al coordinador. La tercera opción invierte la regla (el reporte podría tener otras causas) y la cuarta comete la falacia de afirmación del consecuente.',
      },
      {
        q: 'De los 88 casos del día 4, 22 se atendieron por canal virtual. ¿Qué porcentaje representan?',
        options: ['18,2 por ciento', '22 por ciento', '25 por ciento', '40 por ciento'],
        correct: 2,
        why: 'La base de cálculo es el total del día 4, que es 88: 22 dividido entre 88 es 0,25, es decir, 25 por ciento. El 22 por ciento confunde el número de casos con el porcentaje; el 18,2 por ciento surge de dividir 22 entre 121, un total que no aparece en el escenario.',
      },
      {
        q: '¿Cuál afirmación sobre el promedio diario de los cuatro días es correcta?',
        options: [
          'El promedio es 62 casos y es superior a la cifra del día 4.',
          'El promedio es 62 casos y es inferior a la cifra del día 4.',
          'El promedio es 66 casos, porque se suman los cuatro días y se dividen entre tres.',
          'El promedio es 52 casos, porque es el valor que ocupa la posición central.',
        ],
        correct: 1,
        why: 'La suma de los cuatro días es 40 + 52 + 68 + 88 = 248, y 248 dividido entre 4 es 62. Como el día 4 registró 88 casos, el promedio (62) es inferior a ese valor. La opción del 66 divide entre tres y la del 52 confunde la mediana con el promedio.',
      },
    ],
    explanation:
      'Paso 1: en la serie 40, 52, 68, 88 calcule las diferencias consecutivas (12, 16, 20) y observe que aumentan de 4 en 4; la siguiente diferencia es 24 y el día 5 se proyecta en 112 casos. Paso 2: para la deducción, escriba la regla en forma condicional (si el término está vencido, entonces se reporta al coordinador) y verifique que el caso 210 satisface la condición: se aplica el modus ponens y la conclusión es el reporte. Paso 3: todo porcentaje se calcula sobre el total indicado; aquí la base es 88, no el total de los cuatro días. Paso 4: el promedio se obtiene sumando todos los valores (248) y dividiendo entre el número de valores (4); la mediana es otra medida y no coincide con el promedio en este caso.',
  },
  {
    id: 'm13-a02',
    moduleId: 'm13',
    indicator: 'i11',
    title: 'Tabla de trámites por canal: porcentajes y conclusiones soportadas',
    kind: 'tabla',
    instructions:
      'Analice la tabla y responda. En cada pregunta identifique primero la base de cálculo (el total sobre el que se calcula el porcentaje) y, en la última, evalúe si la conclusión está soportada por los datos antes de considerarla válida.',
    scenario:
      'Tres puntos de atención de una seccional reportaron los trámites recibidos durante el mes, clasificados por canal. Cada punto recibió en total 400 trámites. El coordinador debe decidir en qué punto reforzar la orientación hacia los canales virtuales.',
    table: {
      caption: 'Trámites recibidos por punto de atención y canal (datos hipotéticos)',
      headers: ['Punto de atención', 'Ventanilla', 'Canal virtual', 'Teléfono', 'Total'],
      rows: [
        ['Norte', '200', '100', '100', '400'],
        ['Centro', '300', '40', '60', '400'],
        ['Sur', '100', '180', '120', '400'],
        ['Total', '600', '320', '280', '1.200'],
      ],
    },
    questions: [
      {
        q: '¿Cuál conclusión está soportada por los datos de la tabla?',
        options: [
          'El punto Sur tiene la mayor proporción de trámites atendidos por canal virtual.',
          'El punto Centro tiene el mayor número absoluto de trámites virtuales.',
          'La mitad de los trámites de los tres puntos se atendió por teléfono.',
          'El punto Norte concentra la mitad de los trámites de ventanilla.',
        ],
        correct: 0,
        why: 'Sur atendió 180 de 400 trámites por canal virtual, es decir, 45 por ciento, la proporción más alta. Centro solo tiene 40 virtuales (10 por ciento) y el teléfono representa 280 de 1.200, es decir, 23,3 por ciento, no la mitad. Norte aporta 200 de los 600 trámites de ventanilla: un tercio, no la mitad.',
      },
      {
        q: '¿Qué porcentaje del total de trámites de los tres puntos se atendió por ventanilla?',
        options: ['33,3 por ciento', '40 por ciento', '50 por ciento', '60 por ciento'],
        correct: 2,
        why: 'La base es el total general, 1.200 trámites, y por ventanilla se atendieron 600: 600 dividido entre 1.200 es 0,5, es decir, 50 por ciento. El 33,3 por ciento dividiría 200 entre 600 (solo un punto sobre el subtotal de ventanilla) y el 60 por ciento corresponde a la participación de la ventanilla en el punto Centro.',
      },
      {
        q: 'Si el punto Sur mantiene su proporción de trámites virtuales y el próximo mes recibe 600 trámites en total, ¿cuántos se esperarían por canal virtual?',
        options: ['180', '240', '270', '300'],
        correct: 2,
        why: 'Paso 1: la proporción observada en Sur es 180 sobre 400, es decir, 45 por ciento. Paso 2: el 45 por ciento de 600 es 270. La opción 180 repite el dato del mes anterior sin aplicar el nuevo total; 240 correspondería a una proporción del 40 por ciento y 300 al 50 por ciento.',
      },
      {
        q: 'El coordinador afirma: «el canal virtual es el menos usado en el punto Centro; por lo tanto, los ciudadanos del Centro prefieren la atención presencial». ¿Cuál es la objeción analítica correcta a esa afirmación?',
        options: [
          'Ninguna: si el dato es correcto, la conclusión también lo es por definición.',
          'El dato es falso, porque 40 trámites virtuales es una cifra alta en términos absolutos.',
          'La conclusión generaliza una preferencia de los ciudadanos a partir de un solo dato de uso, sin considerar causas alternativas como la disponibilidad de los canales, la información que reciben los usuarios o la naturaleza de los trámites.',
          'La conclusión es válida porque compara los tres canales dentro de un mismo punto de atención.',
        ],
        correct: 2,
        why: 'El razonamiento analítico exige distinguir entre lo que los datos muestran y lo que se afirma sobre ellos. La tabla informa cuántos trámites se atendieron por cada canal, no las razones de los ciudadanos; atribuir el bajo uso a una preferencia supone un supuesto no verificado y descarta explicaciones alternativas relacionadas con el diseño de los canales.',
      },
    ],
    explanation:
      'Paso 1: para cada porcentaje, identifique el universo: la proporción virtual de Sur es 180 sobre 400 (45 por ciento); la participación de la ventanilla en el total general es 600 sobre 1.200 (50 por ciento). Paso 2: distinga valores absolutos (Centro tiene 40 trámites virtuales, el menor en absoluto) de proporciones (Sur tiene el 45 por ciento, la mayor). Paso 3: en las proyecciones, aplique la proporción del punto al nuevo total: 45 por ciento de 600 es 270. Paso 4: al evaluar una conclusión, separe el dato del supuesto: la tabla prueba el uso de cada canal, no la preferencia de los ciudadanos; toda conclusión que vaya más allá del dato requiere información adicional que la soporte.',
  },
]
