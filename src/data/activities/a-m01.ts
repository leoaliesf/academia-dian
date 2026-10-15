import type { Activity } from '../types'

// Actividades guiadas — Módulo 1
export const ACTIVITIES: Activity[] = [
  {
    id: 'm01-a01',
    moduleId: 'm01',
    indicator: 'i01',
    title: 'Relaciona las dependencias de la DIAN con su función',
    kind: 'relacionar',
    instructions:
      'Relaciona cada dependencia del nivel central de la DIAN con la función que le corresponde. Al terminar, verifica y revisa la explicación de cada pareja.',
    pairs: [
      { a: 'Dirección de Gestión de Fiscalización', b: 'Dirige la prevención, investigación, determinación, liquidación y sanción de tributos y de los regímenes aduanero y cambiario' },
      { a: 'Dirección de Gestión de Ingresos', b: 'Administra el cumplimiento voluntario, el recaudo y las devoluciones' },
      { a: 'Dirección de Gestión Jurídica', b: 'Defensa jurídica de la entidad y elaboración de doctrina' },
      { a: 'Dirección de Gestión Corporativa', b: 'Soporte institucional: talento humano, recursos financieros, tecnología y administración' },
      { a: 'Dirección de Gestión de Aduanas', b: 'Administra el régimen aduanero y facilita las operaciones de comercio exterior' },
      { a: 'Subdirección de Gestión de Control Cambiario', b: 'Investiga y sanciona las infracciones al régimen cambiario' },
      { a: 'Subdirección de Gestión de Fiscalización Internacional', b: 'Controla las operaciones internacionales: precios de transferencia y residencia fiscal' },
    ],
    explanation:
      'Paso 1: la DIAN se organiza por procesos; cada dirección de gestión del nivel central lidera un proceso (misional o de soporte). Paso 2: Fiscalización e Ingresos son procesos misionales distintos: Fiscalización investiga y sanciona cuando hay incumplimiento; Ingresos gestiona el cumplimiento voluntario y el recaudo. Paso 3: las subdirecciones especializan la fiscalización por materia: tributaria, aduanera, internacional y cambiaria. Paso 4: Jurídica y Corporativa son áreas de soporte y aseguramiento.',
  },
  {
    id: 'm01-a02',
    moduleId: 'm01',
    indicator: 'i01',
    title: 'Ordena la evolución normativa de la estructura de la DIAN',
    kind: 'ordenar',
    instructions:
      'Ordena cronológicamente los decretos que han definido la creación y estructura de la DIAN, del más antiguo al más reciente.',
    orderItems: [
      'Decreto 2117 de 1992: creación de la UAE DIAN por fusión de la DIN y la DAN',
      'Decreto 1071 de 1999: organización de la UAE DIAN y definición de su objeto',
      'Decreto 4048 de 2008: reestructuración de la DIAN',
      'Decreto 1742 de 2020: modificación de la estructura (vigente)',
    ],
    explanation:
      'Paso 1: el Decreto 2117 de 1992 fusiona la Dirección de Impuestos Nacionales con la Dirección de Aduanas Nacionales para crear la DIAN. Paso 2: el Decreto 1071 de 1999 organiza la entidad como UAE y define su objeto. Paso 3: el Decreto 4048 de 2008 moderniza la estructura y distribuye funciones (origen de muchas funciones citadas por el material). Paso 4: el Decreto 1742 de 2020 ajusta la estructura vigente y faculta al Director General para distribuir funciones por resolución.',
  },
]
