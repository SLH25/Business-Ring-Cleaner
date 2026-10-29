import { Clock, ShieldCheck, Sparkles, UserCheck, Wrench } from 'lucide-react'
import Counter from '../../components/Counter.jsx'
import Reveal from '../../components/Reveal.jsx'
import { site } from '../../data/site.js'

const reasons = [
  {
    icon: UserCheck,
    title: 'Personnel formé & vérifié',
    text: 'Des agents sélectionnés, formés à nos protocoles et identifiables lors de chaque intervention.',
  },
  {
    icon: ShieldCheck,
    title: 'Produits sûrs',
    text: 'Des produits professionnels dosés avec précision, sûrs pour les enfants, les animaux et les tissus.',
  },
  {
    icon: Wrench,
    title: 'Équipement professionnel',
    text: 'Injection-extraction, brosses adaptées et aspirateurs puissants : un résultat qui dure.',
  },
  {
    icon: Clock,
    title: 'Ponctualité & discrétion',
    text: 'Créneau confirmé, salle protégée, mobilier remis en place : nous respectons votre intérieur.',
  },
  {
    icon: Sparkles,
    title: 'Satisfaction garantie',
    text: 'Un contrôle qualité en fin d’intervention et un suivi après passage, pour votre tranquillité.',
  },
]

export default function WhyUs() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-14">
          <Reveal>
            <p className="eyebrow">Pourquoi nous choisir</p>
            <h2 className="heading-lg mt-3">
              Le sérieux d’une entreprise, le soin d’un artisan
            </h2>
            <p className="lead mt-4">
              Depuis nos débuts, nous appliquons la même règle : traiter chaque canapé comme s’il
              appartenait à notre propre famille. Résultat : des clients qui reviennent et qui nous
              recommandent.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl bg-brand-navy p-5 text-white sm:p-6">
              {site.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-semibold leading-none text-brand-light sm:text-3xl">
                    <Counter value={stat.value} suffix={stat.suffix} label={stat.label} />
                  </p>
                  <p className="mt-2 text-[11px] leading-tight text-white/70 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Reveal
                  key={reason.title}
                  delay={index * 0.06}
                  className={`card card-hover ${index === reasons.length - 1 ? 'sm:col-span-2' : ''}`}
                >
                  <span className="icon-circle">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-brand-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{reason.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
