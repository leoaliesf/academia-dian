import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

// Código dividido por ruta: cada vista se carga solo cuando se visita.
const Dashboard = lazy(() => import('./views/Dashboard'))
const Ruta = lazy(() => import('./views/Ruta'))
const Modulo = lazy(() => import('./views/Modulo'))
const Leccion = lazy(() => import('./views/Leccion'))
const Buscar = lazy(() => import('./views/Buscar'))
const Biblioteca = lazy(() => import('./views/Biblioteca'))
const Mentefactos = lazy(() => import('./views/Mentefactos'))
const Fichas = lazy(() => import('./views/Fichas'))
const Actividades = lazy(() => import('./views/Actividades'))
const ActividadRunner = lazy(() => import('./views/ActividadRunner'))
const ModoEstudio = lazy(() => import('./views/ModoEstudio'))
const Banco = lazy(() => import('./views/Banco'))
const Simulacros = lazy(() => import('./views/Simulacros'))
const ExamenFinal = lazy(() => import('./views/ExamenFinal'))
const Diagnostico = lazy(() => import('./views/Diagnostico'))
const Fuentes = lazy(() => import('./views/Fuentes'))
const Ajustes = lazy(() => import('./views/Ajustes'))
const ErrorPage = lazy(() => import('./views/ErrorPage'))

function Loading() {
  return (
    <div style={{ padding: 48, textAlign: 'center', color: 'var(--ink-500)' }}>
      <p>Cargando…</p>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ruta" element={<Ruta />} />
          <Route path="/ruta/:moduleId" element={<Modulo />} />
          <Route path="/leccion/:lessonId" element={<Leccion />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/mentefactos" element={<Mentefactos />} />
          <Route path="/fichas" element={<Fichas />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/actividad/:activityId" element={<ActividadRunner />} />
          <Route path="/modo-estudio" element={<ModoEstudio />} />
          <Route path="/banco" element={<Banco />} />
          <Route path="/simulacros" element={<Simulacros />} />
          <Route path="/examen-final" element={<ExamenFinal />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/fuentes" element={<Fuentes />} />
          <Route path="/ajustes" element={<Ajustes />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
