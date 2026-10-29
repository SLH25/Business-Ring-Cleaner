import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, Phone, Sparkles, X } from 'lucide-react'
import { callLink, navLinks, site, whatsappLink } from '../data/site.js'
import { services } from '../data/services.js'
import { brand } from '../data/images.js'

const EASE = [0.22, 1, 0.36, 1]

export default function MobileMenu({ open, onClose }) {
  const closeRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
        >
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-brand-navy/50 backdrop-blur-sm"
            tabIndex={-1}
          />

          <motion.div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            className="absolute inset-y-0 right-0 flex h-full w-full max-w-sm flex-col bg-cream shadow-lift"
            initial={{ x: reduce ? 0 : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: reduce ? 0 : '100%' }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="flex items-center justify-between border-b border-brand/10 px-5 py-4">
              <img
                src={brand.logoColor.src}
                alt={brand.logoColor.alt}
                width="280"
                height="64"
                className="h-9 w-auto"
              />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Fermer le menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 bg-white text-brand-navy transition hover:text-brand"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              <nav aria-label="Navigation mobile" className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={onClose}
                    className="rounded-2xl px-4 py-3 font-display text-lg font-semibold text-brand-navy transition hover:bg-white hover:text-brand"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 border-t border-brand/10 pt-6">
                <p className="px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand/70">
                  Nos services
                </p>
                <ul className="mt-3 flex flex-col gap-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services?service=${service.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm text-ink/75 transition hover:bg-white hover:text-brand"
                      >
                        {service.title}
                        <span aria-hidden="true" className="text-brand/50">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link to="/contact#devis" onClick={onClose} className="btn-primary w-full">
                  <Sparkles size={18} aria-hidden="true" />
                  Demander un devis
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp
                </a>
                <a href={callLink} className="btn-outline w-full">
                  <Phone size={18} aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </div>

              <p className="mt-6 px-1 text-xs leading-relaxed text-ink/60">
                {site.area} · {site.hours[0].days} {site.hours[0].time}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
