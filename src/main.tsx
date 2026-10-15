import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { AppProvider } from './store/AppContext'
import './styles/global.css'

// HashRouter: las rutas viven en el hash (#/...), lo que garantiza
// que la navegación y las recargas funcionen en GitHub Pages sin
// configuración del servidor ni página 404 especial.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </HashRouter>
  </StrictMode>,
)
