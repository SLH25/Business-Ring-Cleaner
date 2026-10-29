import { Link } from 'react-router-dom'
import { ArrowRight, Check, MoveHorizontal } from 'lucide-react'
import BeforeAfterSlider from '../../components/BeforeAfterSlider.jsx'
import Reveal from '../../components/Reveal.jsx'
import { images } from '../../data/images.js'

const points = [
  'Taches, odeurs et acariens éliminés en profondeur',
  'Couleurs et fibres ravivées, sans abrasion',
  'Produits dosés et sûrs pour toute la famille',
]

export default function BeforeAfter() {
  return (
    <section className="section bg-cream">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-first">
          <BeforeAfterSlider
            before={images.beforeAfter.canapes.before}
            after={images.beforeAfter.canapes.after}
          />
          <p className="mt-3 flex items-center justify-center gap-2 text-xs text-ink/50">
            <MoveHorizontal size={14} aria-hidden="true" />
            Glissez la poignée pour comparer
          </p>
        </Reveal>

        <Reveal delay={0.1} className="order-last">
          <p className="eyebrow">Avant / après</p>
          <h2 className="heading-lg mt-3">La différence se voit, se sent et se ressent</h2>
          <p className="lead mt-4">
            Un canapé propre ne se contente pas d’être plus beau : il respire mieux, dure plus
            longtemps et protège la santé de votre foyer. Voici ce que notre méthode change
            concrètement.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-ink/75 md:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <Link to="/services" className="btn-outline mt-8">
            Découvrir nos services
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
