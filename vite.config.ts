import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Rutas relativas para que el sitio funcione en GitHub Pages
// tanto en la raíz del repositorio como en /<repo>/
// (combinado con HashRouter no requiere configuración extra del servidor)
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // El chunk de contenido académico es grande por diseño
    // (lecciones + banco de preguntas completos, sin backend).
    chunkSizeWarningLimit: 1800,
  },
})
