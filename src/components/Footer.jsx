import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SocialIcon from './SocialIcon.jsx'
import { callLink, navLinks, site, whatsappLink } from '../data/site.js'
import { services } from '../data/services.js'
import { brand } from '../data/images.js'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-navy text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <div className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-soft">
            <img
              src={brand.stacked.src}
              alt={brand.stacked.alt}
              width={brand.stacked.width}
              height={brand.stacked.height}
              className="h-auto w-[188px] md:w-[200px]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.description}</p>
          <p className="mt-4 font-script text-2xl text-brand-light">{site.slogan}</p>

          <div className="mt-5 flex items-center gap-2">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-light hover:bg-white/10"
              >
                <SocialIcon name={social.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Liens du pied de page">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Navigation
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-brand-light">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact#devis" className="transition hover:text-brand-light">
                Demander un devis
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Nos services
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services?service=${service.slug}`}
                  className="transition hover:text-brand-light"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Contact
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a href={callLink} className="flex items-start gap-3 transition hover:text-brand-light">
                <Phone size={17} className="mt-0.5 shrink-0 text-brand-light" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-brand-light"
              >
                <MessageCircle size={17} className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 break-all transition hover:text-brand-light"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-brand-light" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-brand-light" aria-hidden="true" />
              {site.address}
            </li>
            <li className="flex items-start gap-3">
              <Clock size={17} className="mt-0.5 shrink-0 text-brand-light" aria-hidden="true" />
              <span>
                {site.hours.map((slot) => (
                  <span key={slot.days} className="block">
                    {slot.days} : {slot.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>
            © {CURRENT_YEAR} {site.name}. Tous droits réservés.
          </p>
          <p className="text-white/60">
            Nettoyage de canapés, tapis et cuir — {site.area}
          </p>
        </div>
      </div>
    </footer>
  )
}
