import { Link } from 'react-router-dom'
import { Home, MessageCircle, Sparkles } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import { seo, whatsappLink } from '../data/site.js'

export default function NotFound() {
  return (
    <>
      <Seo {...seo.notFound} noindex />

      <section className="relative overflow-hidden bg-gradient-to-b from-mist via-cream to-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-light/20 blur-3xl"
        />
        <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <p className="font-display text-7xl font-bold leading-none text-brand/15 sm:text-8xl">
            404
          </p>
          <h1 className="heading-xl mt-3">Cette page a pris la poussière…</h1>
          <p className="lead mt-4 max-w-xl">
            La page que vous cherchez n’existe pas ou a été déplacée. Pas d’inquiétude : tout le
            reste est impeccable.
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link to="/" className="btn-primary">
              <Home size={18} aria-hidden="true" />
              Retour à l’accueil
            </Link>
            <Link to="/services" className="btn-outline">
              <Sparkles size={18} aria-hidden="true" />
              Voir les services
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
