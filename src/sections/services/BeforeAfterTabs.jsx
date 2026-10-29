import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import BeforeAfterSlider from '../../components/BeforeAfterSlider.jsx'
import Reveal from '../../components/Reveal.jsx'
import { images } from '../../data/images.js'

const tabs = [
  {
    id: 'canapes',
    label: 'Canapés & fauteuils',
    caption: 'Canapé en velours : taches alimentaires et zones d’usure traitées en une intervention.',
    ...images.beforeAfter.canapes,
  },
  {
    id: 'tapis',
    label: 'Tapis & moquettes',
    caption: 'Tapis de salon : poussière et acariens éliminés, couleurs ravivées sans agresser la laine.',
    ...images.beforeAfter.tapis,
  },
  {
    id: 'cuir',
    label: 'Cuir & similicuir',
    caption: 'Canapé en cuir : nettoyage doux, nourrissage puis protection contre les taches.',
    ...images.beforeAfter.cuir,
  },
]

export default function BeforeAfterTabs() {
  const [active, setActive] = useState(tabs[0].id)
  const reduce = useReducedMotion()
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0]

  const onKeyDown = (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const currentIndex = tabs.findIndex((tab) => tab.id === active)
    const nextIndex =
      event.key === 'ArrowRight'
        ? (currentIndex + 1) % tabs.length
        : (currentIndex - 1 + tabs.length) % tabs.length
    setActive(tabs[nextIndex].id)
    document.getElementById(`onglet-${tabs[nextIndex].id}`)?.focus()
  }

  return (
    <section className="section bg-cream" id="avant-apres">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="eyebrow">Avant / après</p>
          <h2 className="heading-lg mt-3">Le résultat, matière par matière</h2>
          <p className="lead mt-4">
            Choisissez une matière puis glissez la poignée pour comparer l’avant et l’après
            nettoyage.
          </p>
        </Reveal>

        <div className="mt-8">
          <div
            role="tablist"
            aria-label="Choisir une matière à comparer"
            className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2"
          >
            {tabs.map((tab) => {
              const isActive = tab.id === active
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`onglet-${tab.id}`}
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panneau-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(tab.id)}
                  onKeyDown={onKeyDown}
                  className={`h-11 rounded-full px-4 text-sm font-semibold transition duration-300 ease-soft sm:px-5 ${
                    isActive
                      ? 'bg-brand text-white shadow-soft'
                      : 'border border-brand/15 bg-white text-brand-navy/70 hover:border-brand/40 hover:text-brand'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`panneau-${current.id}`}
            aria-labelledby={`onglet-${current.id}`}
            className="mx-auto mt-8 max-w-3xl"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <BeforeAfterSlider before={current.before} after={current.after} />
                <p className="mt-4 text-center text-sm leading-relaxed text-ink/60">
                  {current.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
