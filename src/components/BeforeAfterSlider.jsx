import { useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import SmartImage from './SmartImage.jsx'

/**
 * Comparateur avant / après.
 * La poignée est un vrai <input type="range"> invisible : accessible au clavier
 * et au toucher, sans code de drag personnalisé.
 */
export default function BeforeAfterSlider({ before, after, className = '', initial = 55 }) {
  const [position, setPosition] = useState(initial)

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-brand-navy shadow-card ${className}`}
    >
      <div className="relative aspect-[3/2] w-full">
        <SmartImage
          image={after}
          ratio="h-full w-full"
          className="absolute inset-0 h-full w-full"
          imgClassName="h-full w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <SmartImage
            image={before}
            ratio="h-full w-full"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-brand-navy/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
          Avant
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
          Après
        </span>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-10"
          style={{ left: `${position}%` }}
        >
          <div className="h-full w-0.5 -translate-x-1/2 bg-white/90" />
          <span className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lift">
            <MoveHorizontal size={20} aria-hidden="true" />
          </span>
        </div>

        <label className="absolute inset-0 z-20 cursor-ew-resize">
          <span className="sr-only">
            Comparer l’image avant et après nettoyage : utilisez les flèches gauche et droite
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-valuetext={`${position} % de l’image avant affichée`}
            className="h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
          />
        </label>
      </div>
    </div>
  )
}
