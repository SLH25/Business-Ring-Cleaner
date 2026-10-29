import { ArrowRight, Check, Clock } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { audienceLabels } from '../data/services.js'

/** Carte de service : cover, badge, 3 prestations ✔ et ouverture des détails. */
export default function ServiceCard({ service, onOpen }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-soft transition duration-300 ease-soft hover:-translate-y-1 hover:border-brand/25 hover:shadow-card">
      <div className="relative">
        <SmartImage
          image={service.cover}
          className="w-full"
          imgClassName="transition duration-700 ease-soft group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand shadow-soft">
          {service.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="heading-md">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">{service.short}</p>

        <ul className="mt-4 space-y-2">
          {service.highlights.map((highlight) => (
            <li key={highlight} className="check-item">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Check size={11} strokeWidth={3} aria-hidden="true" />
              </span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {service.audience.map((audience) => (
            <span
              key={audience}
              className="rounded-full bg-brand/5 px-2.5 py-1 text-[11px] font-medium text-brand-navy/70"
            >
              {audienceLabels[audience]}
            </span>
          ))}
          <span className="inline-flex items-center gap-1 rounded-full bg-brand/5 px-2.5 py-1 text-[11px] font-medium text-brand-navy/70">
            <Clock size={11} aria-hidden="true" />
            {service.duration}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpen(service.slug)}
          className="btn-outline mt-6 w-full"
          aria-haspopup="dialog"
        >
          Voir les détails
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
