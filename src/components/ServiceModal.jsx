import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Clock, MessageCircle, Sparkles, X } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { site, whatsappLink } from '../data/site.js'
import { audienceLabels } from '../data/services.js'

const EASE = [0.22, 1, 0.36, 1]

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  )

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const onChange = (event) => setIsMobile(event.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

/**
 * Fenêtre de détails d'un service.
 * Desktop : fenêtre centrée en fondu + léger zoom.
 * Mobile  : panneau plein écran qui monte du bas.
 * Fermeture par ✕, touche Échap ou clic à l'extérieur ; défilement du fond bloqué.
 */
export default function ServiceModal({ service, onClose }) {
  const isMobile = useIsMobile()
  const reduce = useReducedMotion()
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!service) return undefined

    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 80)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [service, onClose])

  return (
    <AnimatePresence>
      {service ? (
        <motion.div
          key={service.slug}
          className="fixed inset-0 z-50 flex items-end justify-center md:items-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
        >
          <button
            type="button"
            aria-label="Fermer les détails du service"
            onClick={onClose}
            tabIndex={-1}
            className="absolute inset-0 h-full w-full cursor-default bg-brand-navy/60 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-lift md:max-h-[88vh] md:rounded-3xl"
            initial={
              reduce
                ? { opacity: 1 }
                : isMobile
                  ? { y: '100%' }
                  : { opacity: 0, scale: 0.96, y: 16 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              reduce
                ? { opacity: 0 }
                : isMobile
                  ? { y: '100%' }
                  : { opacity: 0, scale: 0.97, y: 10 }
            }
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="relative shrink-0">
              <SmartImage
                image={service.cover}
                ratio="aspect-[16/11] sm:aspect-[16/9] md:aspect-[2/1]"
                className="w-full"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                {service.badge}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Fermer la fenêtre de détails"
                className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-soft transition hover:bg-white hover:text-brand"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-6 pt-5 sm:px-7">
              <h2 id="service-modal-title" className="heading-lg">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75 md:text-base">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                {service.audience.map((audience) => (
                  <span key={audience} className="pill py-1 text-xs">
                    {audienceLabels[audience]}
                  </span>
                ))}
                <span className="pill py-1 text-xs">
                  <Clock size={13} aria-hidden="true" />
                  {service.duration}
                </span>
              </div>

              <h3 className="mt-7 font-display text-base font-semibold text-brand-navy">
                Ce qui est inclus
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="check-item">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 font-display text-base font-semibold text-brand-navy">
                Matières & types traités
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.types.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-brand/15 bg-cream px-3 py-1.5 text-xs font-medium text-brand-navy/75"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={`/contact?service=${service.slug}#devis`}
                  onClick={onClose}
                  className="btn-primary w-full sm:w-auto"
                >
                  <Sparkles size={18} aria-hidden="true" />
                  Demander un devis
                </Link>
                <a
                  href={whatsappLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-ink/55">
                Intervention à {site.area} — devis gratuit, sans engagement.
              </p>

            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
