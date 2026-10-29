import {
  BedDouble,
  Building2,
  GraduationCap,
  Home,
  PartyPopper,
  UtensilsCrossed,
} from 'lucide-react'
import Reveal from '../../components/Reveal.jsx'

const audiences = [
  {
    icon: Home,
    title: 'Particuliers',
    text: 'Maisons et appartements : canapés du salon, tapis du séjour, matelas des chambres.',
  },
  {
    icon: Building2,
    title: 'Bureaux',
    text: 'Sièges de salle d’attente, moquettes et fauteuils de direction entretenus régulièrement.',
  },
  {
    icon: BedDouble,
    title: 'Hôtels & résidences',
    text: 'Chambres, suites et espaces communs : un niveau de propreté à la hauteur de vos clients.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & salons',
    text: 'Banquettes, coussins et textiles de salle, nettoyés hors horaires d’ouverture.',
  },
  {
    icon: GraduationCap,
    title: 'Écoles & crèches',
    text: 'Tapis de motricité, coussins et matelas traités avec des produits adaptés aux enfants.',
  },
  {
    icon: PartyPopper,
    title: 'Événements',
    text: 'Salles de fête et locations de mobilier : remise en état rapide entre deux événements.',
  },
]

export default function Audience() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="eyebrow">Pour qui travaillons-nous</p>
          <h2 className="heading-lg mt-3">Particuliers et professionnels, même exigence</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <Reveal
                key={audience.title}
                delay={index * 0.05}
                className="flex items-start gap-4 rounded-2xl border border-brand/10 bg-white p-5 shadow-soft transition duration-300 ease-soft hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-brand-navy">
                    {audience.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{audience.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
