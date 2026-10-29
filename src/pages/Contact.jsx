import { useSearchParams } from 'react-router-dom'
import { Check, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import SocialIcon from '../components/SocialIcon.jsx'
import PageHeader from '../sections/shared/PageHeader.jsx'
import { getServiceBySlug } from '../data/services.js'
import { callLink, seo, site, whatsappLink } from '../data/site.js'

const reassurance = [
  'Devis gratuit et sans engagement',
  'Réponse sous 24h ouvrées',
  'Conseils personnalisés selon votre tissu',
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const preset = getServiceBySlug(searchParams.get('service'))

  return (
    <>
      <Seo {...seo.contact} />

      <PageHeader
        breadcrumb={[{ label: 'Contact' }]}
        eyebrow="Contact"
        title="Demandez votre devis gratuit"
        description={`Appelez-nous, écrivez sur WhatsApp ou remplissez le formulaire : nous vous répondons avec un tarif clair et un créneau d’intervention à ${site.city}.`}
      >
        <a href={callLink} className="btn-primary">
          <Phone size={18} aria-hidden="true" />
          {site.phoneDisplay}
        </a>
        <a
          href={whatsappLink(
            preset
              ? `Bonjour Business Ring Cleaner 👋, je souhaite un devis pour : ${preset.title}.`
              : undefined,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp
        </a>
      </PageHeader>

      <section className="section" id="devis">
        <div className="container-x grid gap-8 lg:grid-cols-5 lg:items-start">
          <aside className="order-first space-y-4 lg:order-last lg:col-span-2">
            <div className="rounded-2xl border border-brand/10 bg-white p-6 shadow-soft">
              <h2 className="heading-md">Coordonnées</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a href={callLink} className="flex items-start gap-3 transition hover:text-brand">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Phone size={17} aria-hidden="true" />
                    </span>
                    <span>
                      <strong className="block font-semibold text-brand-navy">Téléphone</strong>
                      <span className="text-ink/65">{site.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 transition hover:text-brand"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white">
                      <MessageCircle size={17} aria-hidden="true" />
                    </span>
                    <span>
                      <strong className="block font-semibold text-brand-navy">WhatsApp</strong>
                      <span className="text-ink/65">Réponse rapide, photos acceptées</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-start gap-3 transition hover:text-brand"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Mail size={17} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <strong className="block font-semibold text-brand-navy">E-mail</strong>
                      <span className="break-all text-ink/65">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <MapPin size={17} aria-hidden="true" />
                    </span>
                    <span>
                      <strong className="block font-semibold text-brand-navy">Zone</strong>
                      <span className="text-ink/65">{site.area}</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand/10 bg-white p-6 shadow-soft">
              <h2 className="heading-md flex items-center gap-2">
                <Clock size={18} className="text-brand" aria-hidden="true" />
                Horaires
              </h2>
              <ul className="mt-3 divide-y divide-brand/10 text-sm">
                {site.hours.map((slot) => (
                  <li key={slot.days} className="flex items-center justify-between gap-3 py-2">
                    <span className="text-ink/65">{slot.days}</span>
                    <span className="font-medium text-brand-navy">{slot.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-ink/55">
                Notre équipe répond sur WhatsApp pendant les heures d’ouverture.
              </p>
            </div>

            <div className="rounded-2xl bg-brand-navy p-6 text-white shadow-card">
              <h2 className="font-display text-base font-semibold text-white">
                Pourquoi nous écrire ?
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {reassurance.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check size={15} className="mt-0.5 shrink-0 text-brand-light" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-2">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-light hover:bg-white/10"
                  >
                    <SocialIcon name={social.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>

          </aside>

          <div className="lg:col-span-3">
            <QuoteForm defaultService={preset?.title ?? ''} />
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-brand/10 shadow-card">
            <iframe
              title={`Localisation de ${site.name} à ${site.city}`}
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="aspect-[4/3] w-full border-0 sm:aspect-[16/9] lg:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

    </>
  )
}
