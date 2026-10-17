import { NavLink, Outlet } from 'react-router-dom'
import { CONVOCATORIA_INFO } from '../data/sources'

const NAV_SECTIONS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: 'Inicio',
    links: [
      { to: '/', label: '📊 Dashboard' },
      { to: '/ruta', label: '🗺️ Ruta de aprendizaje' },
      { to: '/buscar', label: '🔎 Buscar temas' },
    ],
  },
  {
    title: 'Estudio',
    links: [
      { to: '/biblioteca', label: '📚 Biblioteca de los PDF' },
      { to: '/mentefactos', label: '🧠 Mentefactos y mapas' },
      { to: '/fichas', label: '🃏 Fichas de memoria' },
      { to: '/actividades', label: '✏️ Actividades guiadas' },
      { to: '/modo-estudio', label: '📖 Modo de estudio' },
    ],
  },
  {
    title: 'Evaluación',
    links: [
      { to: '/banco', label: '❓ Banco de preguntas' },
      { to: '/documental', label: '🗂️ Colección documental' },
      { to: '/simulacros', label: '⏱️ Simulacros' },
      { to: '/examen-final', label: '🎯 Examen final integral' },
      { to: '/diagnostico', label: '📋 Diagnóstico y plan' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { to: '/fuentes', label: '🌐 Fuentes oficiales' },
      { to: '/ajustes', label: '⚙️ Ajustes y datos' },
    ],
  },
]

export default function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Navegación principal">
        <NavLink to="/" className="sidebar-brand">
          Academia DIAN
          <small>Gestor I · Nivel Profesional</small>
        </NavLink>
        {NAV_SECTIONS.map((sec) => (
          <div key={sec.title} style={{ display: 'contents' }}>
            <div className="nav-section">{sec.title}</div>
            {sec.links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        ))}
        <div className="nav-section" style={{ marginTop: 'auto' }}>
          Empleo {CONVOCATORIA_INFO.empleo}
        </div>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}
