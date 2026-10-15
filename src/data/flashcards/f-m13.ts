import type { Flashcard } from '../types'

// ============================================================
// Fichas de memoria — Módulo 13 (Razonamiento analítico)
// Indicador i11. Contenido elaborado a partir de la definición
// de razonamiento analítico de la CNSC/Departamento
// Administrativo de la Función Pública. No proviene de los
// documentos PDF de la convocatoria.
// ============================================================

export const CARDS: Flashcard[] = [
  {
    id: 'c-m13-01',
    indicator: 'i11',
    moduleId: 'm13',
    front: '¿Cómo define la CNSC el razonamiento analítico?',
    back: 'Como la capacidad para identificar y entender las partes de un problema, examinar los datos de que se dispone y sacar conclusiones a partir de ellos, distinguiendo la información relevante de la que no lo es.',
  },
  {
    id: 'c-m13-02',
    indicator: 'i11',
    moduleId: 'm13',
    front: '¿Qué es un silogismo categórico y cuáles son sus partes?',
    back: 'Un razonamiento deductivo formado por dos premisas y una conclusión. Sus partes son la premisa mayor (afirmación general), la premisa menor (caso particular) y el término medio, que aparece en ambas premisas y desaparece en la conclusión.',
  },
  {
    id: 'c-m13-03',
    indicator: 'i11',
    moduleId: 'm13',
    front: '¿Cuál es la diferencia entre el modus ponens y la falacia de afirmación del consecuente?',
    back: 'Modus ponens: si P entonces Q; P es verdadera; luego Q es verdadera (válido). Falacia de afirmación del consecuente: si P entonces Q; Q es verdadera; luego P es verdadera (inválido), porque Q puede tener otras causas distintas de P.',
  },
  {
    id: 'c-m13-04',
    indicator: 'i11',
    moduleId: 'm13',
    front: 'Condición necesaria frente a condición suficiente',
    back: 'Necesaria: sin ella no se produce el resultado (aprobar el examen es necesario para graduarse). Suficiente: con ella se produce el resultado, aunque no sea la única vía (haber presentado el trabajo final puede ser suficiente para aprobar). Una condición puede ser necesaria sin ser suficiente y al revés.',
  },
  {
    id: 'c-m13-05',
    indicator: 'i11',
    moduleId: 'm13',
    front: '¿Cuál es el método para resolver una serie numérica de diferencias?',
    back: 'Calcular la diferencia entre términos consecutivos; si la diferencia es constante, la serie es aritmética; si la variación de la diferencia (segunda diferencia) es constante, es polinómica de segundo orden; y si el cociente es constante, es geométrica. Aplicar el patrón identificado al siguiente término.',
  },
  {
    id: 'c-m13-06',
    indicator: 'i11',
    moduleId: 'm13',
    front: '¿Cómo se reconoce una serie alterna?',
    back: 'Cuando las posiciones pares y las impares siguen reglas distintas. Se separan las dos secuencias (por ejemplo, 2, 5, 4, 10, 8, 20, 16: las posiciones impares se duplican y las pares aumentan de cinco en cinco) y se resuelve cada una por separado.',
  },
  {
    id: 'c-m13-07',
    indicator: 'i11',
    moduleId: 'm13',
    front: 'Variación porcentual: ¿cuál es el error de base de cálculo más frecuente?',
    back: 'Dividir el cambio por el total equivocado. La variación porcentual se calcula sobre el valor inicial del grupo que se está analizando (por ejemplo, 20 solicitudes de un total de 110 dan 18,2 por ciento), no sobre el total general ni sobre el valor final.',
  },
  {
    id: 'c-m13-08',
    indicator: 'i11',
    moduleId: 'm13',
    front: 'Método en cuatro pasos para analizar un argumento',
    back: '1) Identificar la conclusión. 2) Identificar las premisas. 3) Detectar los supuestos que no están escritos pero que sostienen el paso de las premisas a la conclusión. 4) Verificar si la conclusión se sigue necesariamente o si solo es probable.',
  },
]
