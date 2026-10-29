import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Sparkles } from 'lucide-react'
import Reveal from '../../components/Reveal.jsx'
import { callLink, site, whatsappLink } from '../../data/site.js'

/** Bandeau marine de fin de page : Devis · WhatsApp · Appeler. */
export default function FinalCTA({
  eyebrow = 'Prêt quand vous l’êtes',
  title = 'Redonnez vie à vos canapés, tapis et cuirs',
  description = 'Décrivez-nous ce que vous souhaitez nettoyer : nous vous répondons avec un devis clair et un créneau de rendez-vous, sans engagement.',
}) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-4xl bg-brand-navy px-6 py-14 text-center shadow-card md:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[18px] border-white/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[18px] border-white/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-10 top-10 h-24 w-24 animate-float rounded-full bg-brand-light/20 blur-xl"
          />

          <p className="relative font-script text-2xl text-brand-light">{eyebrow}</p>
          <h2 className="relative mt-2 text-2xl leading-tight text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            {description}
          </p>

          <div className="relative mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link to="/contact#devis" className="btn-light w-full sm:w-auto">
              <Sparkles size={18} aria-hidden="true" />
              Devis gratuit
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
            <a href={callLink} className="btn-ghost-light w-full sm:w-auto">
              <Phone size={18} aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>

          <p className="relative mt-6 text-xs text-white/55">
            {site.area} · Réponse sous 24h ouvrées · Produits sûrs pour les enfants et les animaux
          </p>
        </Reveal>
      </div>
    </section>
  )
}
