import { MapPin, Navigation } from 'lucide-react'
import Reveal from '../../components/Reveal.jsx'
import { site } from '../../data/site.js'

export default function Coverage() {
  return (
    <section className="section bg-white" id="zone">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Reveal>
          <p className="eyebrow">Zone d’intervention</p>
          <h2 className="heading-lg mt-3">Nous intervenons dans tout {site.city}</h2>
          <p className="lead mt-4">
            Nos équipes se déplacent à domicile et en entreprise dans {site.area}. Un doute sur
            votre quartier ? Écrivez-nous : nous vous confirmons la disponibilité en quelques
            minutes.
          </p>

          <h3 className="mt-7 flex items-center gap-2 font-display text-base font-semibold text-brand-navy">
            <MapPin size={18} className="text-brand" aria-hidden="true" />
            Quartiers desservis
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {site.neighborhoods.map((quarter) => (
              <li
                key={quarter}
                className="rounded-full border border-brand/15 bg-cream px-3.5 py-1.5 text-xs font-medium text-brand-navy/75"
              >
                {quarter}
              </li>
            ))}
          </ul>

          <a
            href={site.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-7"
          >
            <Navigation size={17} aria-hidden="true" />
            Ouvrir dans Google Maps
          </a>
        </Reveal>

        <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-brand/10 shadow-card">
          <iframe
            title={`Carte de la zone d’intervention de ${site.name} à ${site.city}`}
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="aspect-[4/3] w-full border-0"
          />
        </Reveal>
      </div>
    </section>
  )
}
