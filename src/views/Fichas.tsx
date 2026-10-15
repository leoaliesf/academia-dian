import { useMemo, useState } from 'react'
import { MODULES, FLASHCARDS } from '../data/content'
import FlashcardDeck from '../components/FlashcardDeck'

// ============================================================
// Fichas de memoria: selección por módulo y repaso espaciado.
// ============================================================

export default function Fichas() {
  const [moduleId, setModuleId] = useState<string>('todos')

  const moduleOptions = useMemo(() => {
    const opts = [{ id: 'todos', label: `Todos (${FLASHCARDS.length})` }]
    for (const m of MODULES) {
      const count = FLASHCARDS.filter((c) => c.moduleId === m.id).length
      if (count > 0) opts.push({ id: m.id, label: `${m.title} (${count})` })
    }
    return opts
  }, [])

  const cards = useMemo(
    () => (moduleId === 'todos' ? FLASHCARDS : FLASHCARDS.filter((c) => c.moduleId === moduleId)),
    [moduleId],
  )

  return (
    <div>
      <h1>Fichas de memoria</h1>
      <p>
        Tarjetas de pregunta y respuesta con repetición espaciada: marca cada tarjeta como{' '}
        <em>fácil</em> o <em>difícil</em>. Las difíciles y las nuevas aparecen primero en tu
        próxima sesión.
      </p>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        {moduleOptions.map((o) => (
          <button
            key={o.id}
            className={`btn btn-sm ${moduleId === o.id ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setModuleId(o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>

      <FlashcardDeck cards={cards} />
    </div>
  )
}
