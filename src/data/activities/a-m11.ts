import type { Activity } from '../types'

// Actividades guiadas — Módulo 11 (fiscalidad internacional)
export const ACTIVITIES: Activity[] = [
  {
    id: 'm11-a01',
    moduleId: 'm11',
    indicator: 'i09',
    title: 'Relaciona cada método de precios de transferencia con su definición',
    kind: 'relacionar',
    instructions:
      'Relaciona cada método de precios de transferencia con la definición que le corresponde y con la situación en la que típicamente se aplica. Al terminar, revisa la explicación, que resume el orden de preferencia legal y el papel del rango intercuartil.',
    pairs: [
      { a: 'Precio comparable no controlado (CUP)', b: 'Se compara directamente el precio de la operación vinculada con el precio de operaciones comparables entre partes independientes sobre bienes o servicios idénticos o similares; es el método preferente cuando la información disponible lo permite' },
      { a: 'Precio de reventa', b: 'Se parte del precio de reventa al tercero independiente y se resta el margen de reventa apropiado (gastos y utilidad del distribuidor) para obtener el precio de transferencia de la operación vinculada' },
      { a: 'Costo adicionado', b: 'Al costo de la operación de producción o de prestación de servicios se adiciona el margen de utilidad apropiado, comparado con el de operaciones similares entre independientes' },
      { a: 'Márgenes transaccionales de utilidad de operación', b: 'Se compara el margen neto de utilidad de la operación vinculada con el de operaciones comparables, calculado sobre una base apropiada (ventas, costos o activos); es el método más usado cuando no hay información de precios comparables' },
      { a: 'Partición de utilidades', b: 'Se asigna la utilidad conjunta de la operación entre las partes vinculadas, según su contribución funcional, en operaciones complejas con intangibles o aportes conjuntos relevantes' },
      { a: 'Residual de partición de utilidades', b: 'Fase final de la partición de utilidades: primero se remuneran las funciones rutinarias y el remanente se distribuye según la contribución a los intangibles y factores no rutinarios' },
      { a: 'Métodos alternativos técnicamente idóneos', b: 'Otros métodos no enumerados que el contribuyente puede aplicar, con la sustentación correspondiente, cuando ninguno de los anteriores refleje el principio de plena competencia en la operación analizada' },
    ],
    explanation:
      'Paso 1: recuerde la naturaleza de los métodos. El precio comparable no controlado (CUP) es un método de PRECIOS (compara precios); el precio de reventa y el costo adicionado son métodos de MÁRGENES BRUTOS (compara márgenes sobre precio de reventa o sobre costo); los márgenes transaccionales de utilidad de operación y la partición de utilidades son métodos de MÁRGENES/de utilidades (netos y de resultado conjunto). Paso 2: aplique el orden de preferencia legal del artículo 260-3 del Estatuto Tributario: precio comparable no controlado, precio de reventa, costo adicionado, márgenes transaccionales de utilidad de operación, partición de utilidades y residual. El contribuyente puede apartarse del orden cuando el método no refleje el principio de plena competencia, pero debe justificarlo. Paso 3: relacione cada método con su situación típica: el CUP en operaciones simples con comparables públicos; el precio de reventa en distribuidores; el costo adicionado en manufactura y servicios; los márgenes transnacionales de utilidad en casos de información financiera disponible; la partición de utilidades en operaciones con intangibles únicos. Paso 4: cierre el análisis con el rango de plena competencia: se construye con el rango intercuartil de las comparables, se acepta el resultado del contribuyente si está dentro y, si está fuera, la DIAN puede ajustarlo a la mediana y liquidar la sanción por inexactitud cuando se afecte el impuesto. Paso 5: verifique la consistencia. Un mismo tipo de operación debe analizarse con el mismo método entre períodos, y los ajustes de comparabilidad deben estar documentados en el informe local.',
  },
]
