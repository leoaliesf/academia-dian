import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MODULES, QUESTIONS } from '../data/content'
import { indicatorLabel } from '../data/indicators'

// ============================================================
// Buscador global de temas, lecciones y preguntas.
// ============================================================

export default function Buscar() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const lessonHits = useMemo(() => {
    if (q.length < 2) return []
    return MODULES.flatMap((m) =>
      m.lessons
        .filter((l) => {
          const haystack = [
            l.title,
            ...l.objectives,
            ...l.sections.flatMap((s) => [s.heading, ...(s.paragraphs ?? []), ...(s.bullets ?? [])]),
            ...l.summary,
            ...l.memorize,
          ]
            .join(' ')
            .toLowerCase()
          return haystack.includes(q)
        })
        .map((l) => ({ module: m, lesson: l })),
    ).slice(0, 15)
  }, [q])

  const questionHits = useMemo(() => {
    if (q.length < 2) return []
    return QUESTIONS.filter((qq) => {
      const haystack = [qq.statement, qq.topic, ...qq.options].join(' ').toLowerCase()
      return haystack.includes(q)
    }).slice(0, 10)
  }, [q])

  return (
    <div>
      <h1>Buscar temas</h1>
      <p>Busca lecciones, conceptos o preguntas en todo el contenido de la plataforma.</p>

      <input
        type="search"
        className="search-input"
        placeholder="Ej.: sanción, declaración, exportación, lavado de activos…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Buscar temas"
      />

      {q.length >= 2 && (
        <>
          {lessonHits.length === 0 && questionHits.length === 0 && (
            <p style={{ marginTop: 16, color: 'var(--ink-500)' }}>
              No se encontraron coincidencias para «{query}». Prueba con otras palabras.
            </p>
          )}

          {lessonHits.length > 0 && (
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Lecciones ({lessonHits.length})</h3>
              <ul>
                {lessonHits.map(({ module, lesson }) => (
                  <li key={lesson.id}>
                    <Link to={`/leccion/${lesson.id}`}>{lesson.title}</Link>{' '}
                    <span style={{ color: 'var(--ink-500)', fontSize: 'var(--fs-sm)' }}>
                      — {module.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {questionHits.length > 0 && (
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Preguntas relacionadas ({questionHits.length})</h3>
              <ul>
                {questionHits.map((qq) => (
                  <li key={qq.id}>
                    <Link to="/banco" state={{ questionId: qq.id }}>
                      {qq.statement}
                    </Link>{' '}
                    <span style={{ color: 'var(--ink-500)', fontSize: 'var(--fs-sm)' }}>
                      — {indicatorLabel(qq.indicator)} · {qq.difficulty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {q.length < 2 && (
        <div className="grid grid-3" style={{ marginTop: 16 }}>
          {MODULES.map((m) => (
            <Link key={m.id} to={`/ruta/${m.id}`} className="card" style={{ color: 'inherit', textDecoration: 'none' }}>
              <strong style={{ color: 'var(--navy-800)' }}>{m.title}</strong>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-700)', marginTop: 8 }}>
                {m.lessons.length} lecciones
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
