import type { Activity } from '../types'

// Actividades guiadas — Módulo 7
export const ACTIVITIES: Activity[] = [
  {
    id: 'm07-a01',
    moduleId: 'm07',
    indicator: 'i07',
    title: 'Relaciona cada norma de auditoría con su descripción',
    kind: 'relacionar',
    instructions:
      'Relaciona cada grupo de NAGA o norma técnica con lo que exige. Al verificar, revisa la explicación de cada pareja.',
    pairs: [
      { a: 'Normas personales', b: 'Entrenamiento, independencia mental y diligencia profesional del auditor' },
      { a: 'Normas de ejecución del trabajo', b: 'Planeación, evaluación del control interno y evidencia válida y suficiente' },
      { a: 'Normas de rendición de informes', b: 'Expresar el alcance, la opinión y abstenerse cuando no hay evidencia suficiente' },
      { a: 'NIA (NAI)', b: 'Normas internacionales de auditoría de información financiera (Decreto 2420 de 2015)' },
      { a: 'ISSAI', b: 'Normas de la INTOSAI para las entidades fiscalizadoras superiores (control fiscal)' },
      { a: 'Prueba de control', b: 'Verifica que un control interno opera eficazmente' },
      { a: 'Prueba sustantiva', b: 'Examina directamente saldos y transacciones para detectar errores materiales' },
    ],
    explanation:
      'Paso 1: identifica el nivel del marco: NAGA (Ley 43/1990) rigen la profesión; NAI (D. 2420/2015) rigen los encargos de aseguramiento; ISSAI rigen el control fiscal público. Paso 2: dentro de las NAGA, distingue quién audita (personales), cómo audita (ejecución) y qué informa (informes). Paso 3: las pruebas se clasifican por su objeto: controles o cifras.',
  },
  {
    id: 'm07-a02',
    moduleId: 'm07',
    indicator: 'i07',
    title: 'Caso: detecta las inconsistencias del expediente de fiscalización',
    kind: 'inconsistencias',
    instructions:
      'Lee el escenario y clasifica cada afirmación como CONSISTENTE o INCONSISTENTE con las buenas prácticas de auditoría y el procedimiento administrativo. Luego verifica y revisa la explicación.',
    scenario:
      'Un auditor de la DIAN adelanta una fiscalización a un contribuyente por el impuesto de renta del año 2024. El contribuyente declaró ingresos por $600 millones, pero la información exógena reporta $1.100 millones.',
    items: [
      { text: 'El auditor decide cruzar la información exógena con la declaración antes de requerir al contribuyente (procedimiento analítico).', inconsistent: false, why: 'Consistente: el cruce de información es el primer paso lógico para dimensionar la diferencia.' },
      { text: 'Ante la diferencia, el auditor emite de inmediato la liquidación oficial de revisión sin pedir explicaciones.', inconsistent: true, why: 'Inconsistente: antes de la liquidación debe mediar el requerimiento especial con los fundamentos de la modificación propuesta, garantizando el derecho de defensa.' },
      { text: 'El auditor solicita al contribuyente los soportes documentales de los ingresos y, de ser necesario, confirma con terceros.', inconsistent: false, why: 'Consistente: inspección documental y confirmación externa son técnicas válidas para obtener evidencia.' },
      { text: 'El auditor basa su conclusión únicamente en lo que le dice verbalmente el contador del contribuyente.', inconsistent: true, why: 'Inconsistente: la indagación verbal aislada es evidencia de baja fiabilidad; debe corroborarse con documentos y cruces.' },
      { text: 'El expediente se ordena cronológicamente y se folia para garantizar su trazabilidad durante todo el proceso.', inconsistent: false, why: 'Consistente: la trazabilidad del expediente garantiza el orden, la integridad y el debido proceso.' },
      { text: 'Contra la liquidación oficial el contribuyente interpone recurso de apelación ante el superior, conforme al CPACA.', inconsistent: true, why: 'Inconsistente: rige el procedimiento especial del ET: el recurso contra la liquidación de revisión es el de reconsideración (art. 720 ET).' },
    ],
    explanation:
      'Paso 1: detecta la diferencia con procedimientos analíticos (cruce exógena vs. declaración). Paso 2: formaliza la fiscalización con el requerimiento especial, donde se proponen los ajustes. Paso 3: obtiene evidencia suficiente y adecuada: soportes (inspección), confirmaciones con terceros y recálculos. Paso 4: solo con evidencia suficiente profiere la liquidación oficial de revisión. Paso 5: contra ella procede el recurso de reconsideración. En todo el proceso, el expediente foliado y ordenado garantiza la trazabilidad y el debido proceso.',
  },
]
