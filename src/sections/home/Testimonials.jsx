import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import Reveal from '../../components/Reveal.jsx'
import { testimonials } from '../../data/testimonials.js'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const active = testimonials[index]

  const goTo = (next) => setIndex((next + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused || reduce) return undefined
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % testimonials.length),
      7000,
    )
    return () => window.clearInterval(timer)
  }, [paused, reduce])

  return (
    <section className="section bg-cream">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="eyebrow">Ils nous font confiance</p>
          <h2 className="heading-lg mt-3">Des clients qui parlent mieux que nous</h2>
          <p className="lead mt-4">
            Particuliers, hôtels et entreprises de Douala nous confient leurs textiles chaque
            semaine.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mx-auto mt-10 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className="relative overflow-hidden rounded-4xl border border-brand/10 bg-white p-6 shadow-card sm:p-9"
            aria-live="polite"
          >
            <Quote
              size={64}
              aria-hidden="true"
              className="absolute -right-2 -top-4 text-brand/5"
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={active.id}
                initial={reduce ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="flex items-center gap-0.5"
                  role="img"
                  aria-label={`Note : ${active.rating} sur 5`}
                >
                  {Array.from({ length: active.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      aria-hidden="true"
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="mt-4 font-display text-lg leading-relaxed text-brand-navy sm:text-xl">
                  « {active.quote} »
                </p>

                <footer className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-semibold text-brand">
                    {active.initials}
                  </span>
                  <span className="text-sm">
                    <cite className="block font-semibold not-italic text-brand-navy">
                      {active.name}
                    </cite>
                    <span className="text-ink/55">{active.role}</span>
                  </span>
                  <span className="ml-auto rounded-full bg-cream px-3 py-1 text-[11px] font-medium text-brand-navy/70">
                    {active.service}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Avis précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 bg-white text-brand-navy transition hover:border-brand hover:text-brand"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => goTo(dotIndex)}
                  aria-label={`Afficher l’avis de ${testimonial.name}`}
                  aria-current={dotIndex === index ? 'true' : 'false'}
                  className={`h-2.5 rounded-full transition-all duration-300 ease-soft ${
                    dotIndex === index ? 'w-7 bg-brand' : 'w-2.5 bg-brand/25 hover:bg-brand/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Avis suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 bg-white text-brand-navy transition hover:border-brand hover:text-brand"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
