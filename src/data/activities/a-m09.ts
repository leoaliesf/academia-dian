import type { Activity } from '../types'

// Actividades guiadas — Módulo 9 (régimen aduanero)
export const ACTIVITIES: Activity[] = [
  {
    id: 'm09-a01',
    moduleId: 'm09',
    indicator: 'i09',
    title: 'Relaciona cada régimen aduanero con su definición',
    kind: 'relacionar',
    instructions:
      'Relaciona cada régimen o modalidad aduanera con la definición que le corresponde. Al terminar, verifica y revisa la explicación de cada pareja, prestando especial atención al manejo de los tributos aduaneros y a los plazos.',
    pairs: [
      { a: 'Importación ordinaria', b: 'Ingreso de mercancía de procedencia extranjera para permanecer en el territorio aduanero nacional, con el pago de los tributos aduaneros y el levante de la mercancía' },
      { a: 'Importación temporal para reexportación en el mismo estado', b: 'Ingreso con suspensión de tributos aduaneros de mercancía que debe salir sin modificación alguna, por corto plazo (hasta 6 meses) o largo plazo (bienes de capital, hasta 5 años), con garantía a favor de la Nación' },
      { a: 'Importación temporal para perfeccionamiento activo', b: 'Ingreso con suspensión de tributos de mercancía que será transformada, elaborada o reparada y luego reexportada; comprende bienes de capital, los Sistemas Especiales de Importación-Exportación y el procesamiento industrial' },
      { a: 'Importación con franquicia', b: 'Ingreso definitivo de mercancía con exoneración total o parcial de los tributos aduaneros, en virtud de una norma legal o de un tratado internacional' },
      { a: 'Exportación definitiva', b: 'Salida de mercancía del territorio aduanero nacional para permanecer en el exterior, cuyo trámite culmina con la certificación de embarque' },
      { a: 'Exportación temporal para perfeccionamiento pasivo', b: 'Salida de mercancía para ser transformada, elaborada o reparada en el exterior y luego reimportada, con pago de tributos sobre el valor agregado en el exterior' },
      { a: 'Tránsito aduanero', b: 'Régimen suspensivo que permite trasladar mercancía bajo control aduanero desde una aduana de partida hasta una aduana de destino, sin que se causen tributos aduaneros en el trayecto' },
      { a: 'Zona franca', b: 'Área del territorio nacional geográficamente delimitada con normativa especial aduanera, tributaria y de comercio exterior, que NO hace parte del territorio aduanero nacional' },
      { a: 'Reimportación en el mismo estado', b: 'Modalidad por la cual retorna al país mercancía nacional exportada temporalmente sin haber sido transformada, con la finalidad de reincorporarla' },
      { a: 'Cabotaje', b: 'Traslado de mercancías entre puertos nacionales, complementario de los regímenes de tránsito y transporte' },
      { a: 'Transbordo', b: 'Traslado de mercancía de un medio de transporte a otro dentro de la misma zona primaria aduanera' },
    ],
    explanation:
      'Paso 1: pregunte primero por el destino de la mercancía. Si ingresa para quedarse, es importación ordinaria (con pago de tributos) o con franquicia (con exoneración). Si ingresa para salir, es una importación temporal: en el mismo estado si sale sin modificación, o para perfeccionamiento activo si sale transformada. Paso 2: revise el manejo de los tributos. Los regímenes temporales y el tránsito SUSPENDEN los tributos aduaneros y exigen garantía y plazo; la importación ordinaria los causa y paga; la franquicia los exonera. Paso 3: controle los plazos: 6 meses para el corto plazo y hasta 5 años para bienes de capital en la importación temporal del mismo estado; la no terminación oportuna genera sanción y posible aprehensión. Paso 4: en exportación, la definitiva saca la mercancía para permanecer en el exterior (certificación de embarque) y las temporales suponen su retorno (reimportación en el mismo estado) o su transformación (perfeccionamiento pasivo, con tributos sobre el valor agregado en el exterior). Paso 5: recuerde la naturaleza de las zonas francas: son áreas del territorio nacional que no forman parte del territorio aduanero nacional, por lo que la salida de mercancía al resto del país activa una importación; las variedades son permanente, permanente especial y transitoria. Paso 6: el cabotaje y el transbordo son operaciones de movimiento que se articulan con el tránsito aduanero y el transporte multimodal.',
  },
]
