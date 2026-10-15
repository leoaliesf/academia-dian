# Academia DIAN — Gestor I

Plataforma web estática de estudio para la preparación del examen de la convocatoria pública de la **DIAN**, empleo **236767** (nivel Profesional, denominación **Gestor I**).

> ⚠️ **Aviso:** esta plataforma es una herramienta de estudio independiente. No es un sitio oficial de la DIAN ni de la CNSC, y no reproduce información oficial de la convocatoria (distribución de preguntas, puntajes o fechas). Todo el contenido se basa en los dos PDF de formación adjuntos y en fuentes oficiales verificadas, que se citan en cada lección.

## Características

- **Dashboard** — progreso, módulos completados, resultados recientes, promedio, tiempo de estudio, fortalezas, debilidades y recomendaciones.
- **Ruta de aprendizaje** — 15 módulos progresivos que cubren los 26 indicadores de la convocatoria.
- **Lecciones completas** — objetivos, explicación desde cero, definiciones, resúmenes, conceptos para memorizar, cuadros comparativos, ejemplos, errores frecuentes, normas con estado de verificación, fuentes oficiales, mentefacto (mapa SVG + explicación textual accesible), fichas, actividad guiada y cuestionario final.
- **Biblioteca de los PDF** — resumen general y por unidad/capítulo de ambos documentos, con páginas de origen, indicadores relacionados y diferencias entre documentos.
- **Mentefactos y mapas conceptuales** — diagramas SVG propios (sin librerías externas).
- **Banco de preguntas ABCD** — organizadas por indicador, módulo, tema y dificultad (básica/intermedia/avanzada), con justificación de la correcta y explicación de por qué cada opción incorrecta lo es; favoritas ★ y notas personales.
- **Actividades guiadas** — relacionar, ordenar etapas, casos hipotéticos, detección de inconsistencias, interpretación de tablas, razonamiento analítico y juicio situacional, con retroalimentación paso a paso.
- **Modo de estudio** — sin límite de tiempo, explicación inmediata tras cada respuesta, filtros por indicador/módulo/dificultad/preguntas falladas.
- **Fichas de memoria** — con repetición espaciada simple (cajas 0-5).
- **Simulacros configurables** — temas, número de preguntas, dificultad, tiempo, cronómetro con autoentrega, navegación, marcado para revisar y confirmación antes de entregar.
- **Examen final integral** — ~90 preguntas que evalúan los 26 indicadores, con duración configurable y preguntas/opciones aleatorizadas.
- **Diagnóstico personalizado** — nota, aciertos por indicador y módulo, rendimiento por dificultad, evolución, errores repetidos, temas dominados/en refuerzo/sin datos, y **plan de estudio automático** con botones directos a cada actividad recomendada.
- **Persistencia local** — todo el progreso se guarda en `localStorage` del navegador; exportación e importación en JSON y borrado con confirmación.

## Matriz de cobertura de indicadores

| # | Indicador | Módulo principal |
|---|-----------|------------------|
| 1 | Estructura organizacional de la DIAN | 1 |
| 2 | Gestión documental y trazabilidad de expedientes | 2 |
| 3 | Imposición de sanciones | 8 |
| 4 | Lavado de activos, FT, ROS y denuncias | 12 |
| 5 | Liquidación de impuestos nacionales | 5 |
| 6 | Misionalidad de la DIAN | 1, 3 |
| 7 | Normas y técnicas de auditoría | 7 |
| 8 | Normativa cambiaria | 10 |
| 9 | Obligaciones formales y sustanciales | 4 |
| 10 | Procedimiento de fiscalización y liquidación tributaria y aduanera | 6, 9 |
| 11 | Razonamiento analítico | 13 |
| 12-21 | Competencias comportamentales (Adaptabilidad, Comportamiento ético, Comunicación efectiva, Orientación al logro, Orientación al usuario, Trabajo en equipo, con sus niveles) | 14 |
| 22-26 | Valores (Compromiso, Diligencia, Honestidad, Justicia, Respeto) | 14 |
| — | Repaso general y simulacros | 15 |

## Tecnología

- React 19 + TypeScript + Vite (sin backend; sitio 100 % estático).
- React Router con `HashRouter` (las rutas viven en el hash `#/...`), lo que garantiza que la navegación y las recargas funcionen en GitHub Pages sin configuración del servidor.
- `base: './'` en `vite.config.ts` para rutas relativas.
- Sin claves API, sin servicios pagos, sin bases de datos externas, sin dependencias de red obligatorias.
- Contenido académico separado de la interfaz en `src/data/` (archivos TypeScript cargados con `import.meta.glob`).

## Estructura

```
src/
├── data/            # Contenido académico (datos, no interfaz)
│   ├── types.ts     # Esquema: Lesson, Question, Flashcard, Activity…
│   ├── indicators.ts# Los 26 indicadores de la convocatoria
│   ├── content.ts   # Loaders (import.meta.glob)
│   ├── modules/     # m01.ts … m15.ts (lecciones por módulo)
│   ├── bank/        # q-m01.ts … (banco de preguntas ABCD)
│   ├── flashcards/  # f-m01.ts … (fichas de memoria)
│   ├── activities/  # a-m01.ts … (actividades guiadas)
│   ├── biblioteca.ts# Resúmenes de los dos PDF
│   └── sources.ts   # Fuentes oficiales y datos de la convocatoria
├── lib/             # storage.ts, progress.ts, stats.ts (persistencia y métricas)
├── store/           # AppContext (estado global + localStorage)
├── components/      # Layout, QuizSession, MindMap, FlashcardDeck, ui…
├── views/           # Dashboard, Ruta, Leccion, Banco, Simulacros, Diagnostico…
└── scripts/         # validate-content.ts y e2e*.mjs (pruebas del proyecto)
```

## Instalación y desarrollo

Requiere Node.js 20+.

```bash
npm install
npm run dev        # servidor local de desarrollo
npm run build      # compilación de producción en dist/
npm run preview    # sirve dist/ localmente
npm run lint       # oxlint
```

## Pruebas

El proyecto incluye dos suites de validación ejecutadas sobre la versión final (2026-10-15):

```bash
npm run validate:content   # integridad del contenido (tsx + cargador SSR de Vite)
npm run test:e2e           # pruebas E2E de navegación y flujos (Playwright/Chromium)
```

- **Validador de contenido** (`scripts/validate-content.ts`): verifica que los 26 indicadores tengan preguntas, que cada pregunta tenga 4 opciones y 4 explicaciones, que las referencias de lecciones/actividades/fichas sean válidas y que no haya identificadores duplicados. Resultado final: **0 errores** (15 módulos, 60 lecciones, 264 preguntas, 181 fichas, 28 actividades).
- **Pruebas E2E** (`scripts/e2e.mjs` y `scripts/e2e-extra.mjs`): navegación por hash en GitHub Pages, calificación de cuestionarios, confirmación antes de entregar, cronómetro, persistencia en localStorage tras recargar, favoritos, fichas con volteo, exportación de progreso, borrado con confirmación, simulacro completo, diagnóstico con plan de estudio, buscador, biblioteca y ausencia de desbordes en móvil. Resultado final: **30/30 pruebas OK**.
- **Build**: `tsc -b` sin errores + `vite build` correcto (shell ~269 KB + chunk de contenido ~1.6 MB / 424 KB gzip, por diseño: todo el contenido viaja en el sitio estático).

## Publicar en GitHub Pages

### Opción A — GitHub Actions (recomendada)

1. Crea un repositorio en GitHub y sube el proyecto:

   ```bash
   git init
   git add .
   git commit -m "Academia DIAN - Gestor I"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/academia-dian.git
   git push -u origin main
   ```

2. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
3. El workflow incluido en `.github/workflows/deploy.yml` compila y publica automáticamente en cada push a `main`. El sitio quedará en `https://TU_USUARIO.github.io/academia-dian/`.

### Opción B — Manual

```bash
npm run build
# Sube el contenido de dist/ a la rama gh-pages del repositorio
npx gh-pages -d dist
```

Y en **Settings → Pages** elige la rama `gh-pages` como fuente.

> Gracias a `HashRouter` y a `base: './'`, el sitio funciona tanto en `usuario.github.io/repositorio/` como si algún día se sirve desde un dominio propio, sin ajustes.

## Datos y privacidad

- El progreso (lecciones, resultados, favoritos, notas, fichas) se guarda **localmente en el navegador** mediante `localStorage`.
- **No se sincroniza entre dispositivos** ni se envía a ningún servidor.
- Usa **Ajustes y datos** para exportar tu progreso a un archivo JSON (respaldo) e importarlo en otro navegador o equipo.
- Borrar el historial del navegador borra el progreso.

## Fuentes

El contenido se basa en:

- `MATERIAL TOTAL DIAN- FISCALIZACION.pdf` (466 págs.) — determinación y control tributario: renta (personas jurídicas, ESAL, naturales), ganancia ocasional, IVA, impuestos al consumo, régimen sancionatorio y procedimiento tributario. Las páginas 1-200 son diapositivas en imagen (se procesaron con OCR con resultados parciales).
- `Fiscalizacion_TACI Curso Completo.pdf` (208 págs.) — curso de formación DIAN 2022: sistema tributario, aduanero y cambiario; fiscalidad internacional; regímenes cambiario y aduanero completos.

Y se complementa con fuentes oficiales verificadas (2026-10-15): DIAN, Normograma DIAN, SUIN-Juriscol, Función Pública, CNSC, Banco de la República y UIAF. Cada lección indica sus páginas de origen y el estado de verificación de cada norma (vigente / pendiente de validar / modificada).

El material de 2022 puede contener normas que cambiaron (por ejemplo, por la Ley 2277 de 2022); las lecciones lo señalan explícitamente. Verifica siempre las normas vigentes en el [Normograma DIAN](https://normograma.dian.gov.co/dian/) y en [SUIN-Juriscol](https://www.suin-juriscol.gov.co/).

## Aviso sobre la captura de indicadores

La lista de 26 indicadores proviene de la transcripción incluida en el prompt del proyecto. La captura de pantalla original no pudo verificarse visualmente en el entorno de desarrollo; si detectas alguna diferencia entre la captura y la lista (en `src/data/indicators.ts`), corrígela ahí y todo el sitio (matriz de cobertura, diagnóstico, filtros) se actualizará automáticamente.
