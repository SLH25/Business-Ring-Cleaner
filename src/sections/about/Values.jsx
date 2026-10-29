import { Compass, Eye, HeartHandshake, Target } from 'lucide-react'
import Reveal from '../../components/Reveal.jsx'
import { site } from '../../data/site.js'

const values = [
  {
    icon: Compass,
    title: 'Notre histoire',
    text: `Née à ${site.city} d’un constat simple — des salons magnifiques mais des textiles fatigués — Business Ring Cleaner s’est construite intervention après intervention, sur la recommandation de nos clients.`,
  },
  {
    icon: Eye,
    title: 'Notre vision',
    text: 'Devenir la référence de l’hygiène textile en Afrique centrale : des prestations accessibles, traçables et réellement professionnelles, à domicile comme en entreprise.',
  },
  {
    icon: Target,
    title: 'Notre mission',
    text: 'Prolonger la vie de vos canapés, tapis et cuirs, protéger la santé de votre foyer et offrir à vos espaces professionnels une propreté dont vous êtes fier.',
  },
  {
    icon: HeartHandshake,
    title: 'Nos valeurs',
    text: 'Transparence sur les prix, respect de votre intimité, honnêteté sur ce qui peut être restauré — et une exigence constante sur la qualité du travail rendu.',
  },
]

export default function Values() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="eyebrow">Notre identité</p>
          <h2 className="heading-lg mt-3">Une entreprise de proximité, exigeante sur le détail</h2>
          <p className="lead mt-4">
            {site.name} — « {site.slogan} » — met l’hygiène textile au service du confort des
            familles et de l’image des entreprises.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Reveal key={value.title} delay={index * 0.07} className="card card-hover">
                <span className="icon-circle">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{value.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
