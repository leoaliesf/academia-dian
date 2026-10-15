import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', paddingTop: 48 }}>
      <h1>Página no encontrada</h1>
      <p>La sección que buscas no existe o aún no está disponible.</p>
      <Link to="/" className="btn btn-primary">
        Volver al dashboard
      </Link>
    </div>
  )
}
