import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Sparkles } from 'lucide-react'
import { callLink, whatsappLink } from '../data/site.js'

/** Barre d'action fixe, uniquement sur mobile. */
export default function MobileActionBar() {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-brand/10 bg-white/95 pt-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2 px-3 pb-1">
        <a
          href={callLink}
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-semibold text-brand-navy"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
            <Phone size={17} aria-hidden="true" />
          </span>
          Appeler
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-semibold text-brand-navy"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-whatsapp text-white">
            <MessageCircle size={17} aria-hidden="true" />
          </span>
          WhatsApp
        </a>
        <Link
          to="/contact#devis"
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-semibold text-brand-navy"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-white">
            <Sparkles size={17} aria-hidden="true" />
          </span>
          Devis
        </Link>
      </div>
    </div>
  )
}
