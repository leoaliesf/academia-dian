import type { Activity } from '../types'

// ============================================================
// Actividades — Módulo 14 (Competencias comportamentales y
// valores)
// m14-a01: identificar la competencia y el nivel que se
// evidencia en cada situación (juicio situacional).
// m14-a02: relacionar cada valor del Código de Integridad con
// su definición.
// Definiciones y conductas observables tomadas de la Resolución
// 65 de 2024 de la DIAN y del Código de Integridad del Servicio
// Público (Función Pública). Escenarios hipotéticos.
// ============================================================

export const ACTIVITIES: Activity[] = [
  {
    id: 'm14-a01',
    moduleId: 'm14',
    indicator: 'i12',
    title: '¿Qué competencia y qué nivel se evidencian en la situación?',
    kind: 'comportamental',
    instructions:
      'Lea cada situación y elija la competencia con su nivel. Antes de responder, subraye el verbo de la conducta (aplica, promueve, fomenta, verifica, organiza) y pregúntese por el alcance de la actuación: si se limita al propio trabajo, si involucra al equipo o si compromete a la organización.',
    scenario:
      'Cuatro situaciones ocurridas en una dirección seccional durante el mismo trimestre. Cada una pone en juego una competencia comportamental del Diccionario de la entidad y un nivel de desarrollo distinto.',
    questions: [
      {
        q: 'Situación 1: la entidad adopta un nuevo formato de actas. A una funcionaria su formato propio le parecía más práctico, pero aplica el nuevo formato, expone al equipo por qué el cambio beneficia a todas las áreas y anima a sus compañeros a usarlo desde la primera reunión. ¿Qué competencia y nivel se evidencian?',
        options: [
          'Adaptabilidad, nivel 1.',
          'Adaptabilidad, nivel 2.',
          'Comunicación efectiva, nivel 2.',
          'Trabajo en equipo, nivel 1.',
        ],
        correct: 1,
        why: 'El nivel 2 de Adaptabilidad se caracteriza por revisar las propias certezas, entender el cambio de manera sistémica y promover la adaptación del equipo; la funcionaria no solo aplica el formato, sino que explica su sentido institucional y anima a los demás. El nivel 1 se limita a implementar el cambio en el propio trabajo. La comunicación efectiva aparece como medio, pero el núcleo de la conducta es la adaptación del equipo al cambio.',
      },
      {
        q: 'Situación 2: un contratista deja una canasta navideña para el grupo. Un servidor no la recibe, explica al equipo por qué ese tipo de obsequios compromete la imparcialidad de la entidad y propone que el comité de ética fije un criterio institucional claro para todos los grupos. ¿Qué competencia y nivel se evidencian?',
        options: [
          'Comportamiento ético, nivel 1.',
          'Comportamiento ético, nivel 4.',
          'Honestidad, en su nivel básico.',
          'Orientación al usuario y al ciudadano, nivel 1.',
        ],
        correct: 1,
        why: 'Además de actuar correctamente, el servidor promueve la práctica del Código de Integridad en su grupo y propone una definición institucional del criterio: eso corresponde a las conductas del nivel 4 de Comportamiento ético (estructurar, fomentar y aplicar estrategias sobre la base de los valores). El nivel 1 se agota en la conducta individual correcta.',
      },
      {
        q: 'Situación 3: una funcionaria atiende a un ciudadano que pregunta cómo responder un requerimiento. Al terminar la explicación le pide que repita con sus palabras los pasos a seguir y confirma que comprendió el plazo. ¿Qué competencia y nivel se evidencian?',
        options: [
          'Orientación al usuario y al ciudadano, nivel 1.',
          'Comunicación efectiva, nivel 1.',
          'Comunicación efectiva, nivel 2.',
          'Orientación al logro, nivel 1.',
        ],
        correct: 1,
        why: 'La conducta observable del nivel 1 de Comunicación efectiva es informar a quienes intervienen en el trabajo y verificar que comprendan el mensaje; pedir al ciudadano que repita los pasos con sus palabras es exactamente esa verificación. El nivel 2 se distingue por adaptar el discurso y el canal al interlocutor, elemento que el enunciado no describe.',
      },
      {
        q: 'Situación 4: al iniciar la semana un servidor organiza su agenda, asigna tiempos por actuación y conserva un margen para imprevistos. El miércoles advierte que una verificación no alcanzará el estándar previsto antes del cierre y lo comunica a su coordinador con el detalle de lo actuado. ¿Qué competencia y nivel se evidencian?',
        options: [
          'Diligencia, entendida como valor.',
          'Orientación al logro, nivel 1.',
          'Orientación al logro, nivel 2.',
          'Adaptabilidad, nivel 1.',
        ],
        correct: 1,
        why: 'Organizar y controlar el propio trabajo para incrementar la productividad y responsabilizarse por el logro de los objetivos propios son conductas observables del nivel 1 de Orientación al logro, y el enunciado no describe el nivel 2 ni funciones de coordinación de un equipo. La diligencia es un valor del Código de Integridad que se refleja en la prontitud, pero la situación se evalúa con la competencia por su foco en metas, tiempos y estándares de calidad.',
      },
    ],
    explanation:
      'Paso 1: identifique el verbo de la conducta. Aplicar y usar corresponde al nivel 1; promover, fomentar, estructurar y ser referente corresponden a niveles superiores. Paso 2: determine el alcance. Si la actuación se limita al propio puesto de trabajo o a la propia conducta, el nivel es 1; si involucra al equipo, al clima laboral o a la organización, el nivel es superior. Paso 3: contraste con la ficha. Toda situación del banco se resuelve señalando qué conducta observable del Diccionario se materializa; si dos competencias parecen aplicables, elija la que constituye el núcleo de la conducta y no el medio que la hace posible. Paso 4: verifique el nivel por la evidencia y no por la jerarquía del cargo: un servidor de nivel profesional puede evidenciar conductas de nivel superior en su equipo, y un jefe puede incumplir las de su propio nivel.',
  },
  {
    id: 'm14-a02',
    moduleId: 'm14',
    indicator: 'i22',
    title: 'Valores del Código de Integridad y sus definiciones',
    kind: 'relacionar',
    instructions:
      'Relacione cada valor del Código de Integridad del Servicio Público con la definición oficial que le corresponde. Empiece por las definiciones que reconozca con certeza y descarte por eliminación.',
    pairs: [
      {
        a: 'Compromiso',
        b: 'Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas.',
      },
      {
        a: 'Diligencia',
        b: 'Cumplo los deberes con prontitud, atención, eficiencia y eficacia y no postergo las decisiones o actividades que hacen parte del funcionamiento de la entidad.',
      },
      {
        a: 'Honestidad',
        b: 'Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y siempre favoreciendo el interés general.',
      },
      {
        a: 'Justicia',
        b: 'Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación.',
      },
      {
        a: 'Respeto',
        b: 'Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, títulos o cualquier otra condición.',
      },
    ],
    explanation:
      'Paso 1: lea primero todas las definiciones y clasifíquelas por su verbo central: actuar con verdad (Honestidad), actuar con imparcialidad (Justicia), cumplir con prontitud y calidad (Diligencia), reconocer y tratar dignamente (Respeto) y estar dispuesto a resolver las necesidades del ciudadano (Compromiso). Paso 2: asocie cada definición con el valor cuyo nombre refleja ese verbo; cuando dos parezcan cercanas, desempate con el objeto del valor: la Diligencia mira los deberes y los términos; el Compromiso, la disposición permanente de servicio. Paso 3: verifique la correspondencia interiorizando la fórmula «Soy…» de cada valor: los cinco valores se enuncian en primera persona y describen tanto la convicción como la conducta esperada. Paso 4: recuerde que los cinco valores son de aplicación inmediata para todos los servidores y que su desconocimiento no exime de responsabilidad disciplinaria.',
  },
]
