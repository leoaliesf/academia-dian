import { useMemo, useState } from 'react'
import type { Flashcard } from '../data/types'
import { useApp } from '../store/AppContext'

// ============================================================
// Mazo de fichas de memoria con repetición espaciada simple:
// - «Fácil» sube la tarjeta de caja (se verá menos seguido)
// - «Difícil» la baja (se verá más seguido)
// La sesión prioriza las tarjetas de cajas bajas y las nuevas.
// ============================================================

interface Props {
  cards: Flashcard[]
  compact?: boolean
}

export default function FlashcardDeck({ cards, compact }: Props) {
  const { state, dispatch } = useApp()
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [finished, setFinished] = useState(false)
  const [reviewed, setReviewed] = useState(0)

  const ordered = useMemo(() => {
    if (!compact) {
      // Priorizar cajas bajas (difíciles/nuevas) y repasos antiguos
      return [...cards].sort((a, b) => {
        const boxA = state.cardBoxes[a.id] ?? 0
        const boxB = state.cardBoxes[b.id] ?? 0
        if (boxA !== boxB) return boxA - boxB
        const revA = state.cardReviews[a.id] ?? 0
        const revB = state.cardReviews[b.id] ?? 0
        return revA - revB
      })
    }
    return cards
  }, [cards, compact, state.cardBoxes, state.cardReviews])

  const card = ordered[index]

  if (cards.length === 0) {
    return <p style={{ color: 'var(--ink-500)' }}>Este módulo aún no tiene fichas de memoria.</p>
  }

  if (finished) {
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <h3>¡Mazo completado!</h3>
        <p>
          Repasaste {reviewed} ficha{reviewed === 1 ? '' : 's'}. Las tarjetas marcadas como difíciles
          aparecerán antes en tu próxima sesión.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setIndex(0)
            setFinished(false)
            setReviewed(0)
            setFlipped(false)
          }}
        >
          Repetir mazo
        </button>
      </div>
    )
  }

  const rate = (easy: boolean) => {
    dispatch({ type: 'flashcard/review', id: card.id, easy })
    setFlipped(false)
    setReviewed((r) => r + 1)
    if (index + 1 >= ordered.length) {
      setFinished(true)
    } else {
      setIndex((i) => i + 1)
    }
  }

  const box = state.cardBoxes[card.id] ?? 0

  return (
    <div>
      <div className="flashcard" style={compact ? { maxWidth: 460 } : undefined}>
        <div
          className={`flashcard-inner${flipped ? ' flipped' : ''}`}
          onClick={() => setFlipped((f) => !f)}
          role="button"
          tabIndex={0}
          aria-label="Voltear tarjeta"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setFlipped((f) => !f)
            }
          }}
          style={compact ? { minHeight: 220 } : undefined}
        >
          <div className="flashcard-face">
            <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-500)', marginBottom: 8 }}>
              {index + 1} / {ordered.length} · caja {box} de 5
            </div>
            <div style={{ fontSize: 'var(--fs-md)', fontWeight: 600 }}>{card.front}</div>
            <div style={{ marginTop: 16, fontSize: 'var(--fs-xs)', color: 'var(--ink-300)' }}>
              Haz clic para ver la respuesta
            </div>
          </div>
          <div className="flashcard-face flashcard-back">
            <div style={{ fontSize: 'var(--fs-md)' }}>{card.back}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 20 }}>
        <button className="btn btn-danger" onClick={() => rate(false)}>
          Me resultó difícil
        </button>
        <button className="btn btn-teal" onClick={() => rate(true)}>
          Me resultó fácil
        </button>
      </div>
    </div>
  )
}
