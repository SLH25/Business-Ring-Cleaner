import { Droplets, HeartPulse, Sparkles, Sun, UserCheck, Wallet, Wrench } from 'lucide-react'
import Reveal from '../../components/Reveal.jsx'

const commitments = [
  {
    icon: UserCheck,
    title: 'Un personnel formé',
    text: 'Recrutement vérifié, formation continue aux techniques de nettoyage textile et port d’une tenue identifiable.',
  },
  {
    icon: Droplets,
    title: 'Des produits adaptés',
    text: 'Produits professionnels dosés selon le tissu, rincés à l’eau claire et sûrs pour les enfants comme pour les animaux.',
  },
  {
    icon: Wrench,
    title: 'Un équipement professionnel',
    text: 'Injection-extraction, brosses spécifiques, aspirateurs haute puissance et séchage accéléré pour un résultat durable.',
  },
  {
    icon: Wallet,
    title: 'Un budget maîtrisé',
    text: 'Tarifs annoncés à l’avance, sans surprise : le devis validé est celui que vous payez.',
  },
]

const benefits = [
  { icon: Sparkles, title: 'Élimine', text: 'poussière, taches et acariens' },
  { icon: HeartPulse, title: 'Désinfecte', text: 'bactéries et mauvaises odeurs' },
  { icon: Sun, title: 'Ravive', text: 'couleurs et fibres des tissus' },
  { icon: UserCheck, title: 'Protège', text: 'votre santé et vos meubles' },
]

export default function Commitments() {
  return (
    <section className="section bg-mist">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Notre engagement</p>
              <h2 className="heading-lg mt-3">
                Quatre promesses tenues à chaque intervention
              </h2>
              <p className="lead mt-4">
                Nous ne vendons pas un simple passage de nettoyage : nous nous engageons sur une
                méthode, des produits et une relation de confiance.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {commitments.map((commitment, index) => {
                const Icon = commitment.icon
                return (
                  <Reveal
                    key={commitment.title}
                    as="li"
                    delay={index * 0.06}
                    className="flex gap-4 rounded-2xl bg-white/80 p-4 shadow-soft"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-brand-navy">
                        {commitment.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/65">
                        {commitment.text}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </ul>
          </div>

          <Reveal delay={0.12} className="rounded-3xl bg-brand-navy p-6 text-white shadow-card sm:p-8">
            <p className="font-script text-2xl text-brand-light">Ce que vous y gagnez</p>
            <h3 className="mt-1 font-display text-xl text-white">
              Un intérieur plus sain, durablement
            </h3>

            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <li
                    key={benefit.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light/20 text-brand-light">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <p className="text-sm leading-relaxed text-white/80">
                      <strong className="font-semibold text-white">{benefit.title}</strong>{' '}
                      {benefit.text}
                    </p>
                  </li>
                )
              })}
            </ul>

            <p className="mt-6 rounded-2xl border border-white/10 bg-brand/30 p-4 text-xs leading-relaxed text-white/75">
              Nos interventions sont réalisées par des agents formés, avec un contrôle qualité en
              fin de prestation et un suivi après passage.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
