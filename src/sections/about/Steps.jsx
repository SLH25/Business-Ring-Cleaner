import { CalendarCheck, MessageCircle, Sparkles } from 'lucide-react'
import Reveal from '../../components/Reveal.jsx'

const steps = [
  {
    icon: MessageCircle,
    title: 'Contact & devis',
    text: 'Vous nous écrivez sur WhatsApp ou remplissez le formulaire : envoyez une photo, nous vous répondons avec un tarif clair.',
  },
  {
    icon: CalendarCheck,
    title: 'Intervention planifiée',
    text: 'Nous confirmons un créneau qui vous convient. L’équipe arrive à l’heure, avec le matériel et les produits adaptés.',
  },
  {
    icon: Sparkles,
    title: 'Résultat visible',
    text: 'Vous vérifiez le travail avec nous avant notre départ, et nous restons joignables en cas de question après le passage.',
  },
]

export default function Steps() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="eyebrow">Comment ça marche</p>
          <h2 className="heading-lg mt-3">Trois étapes, zéro mauvaise surprise</h2>
        </Reveal>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-brand/20 md:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} delay={index * 0.1} className="relative text-center">
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-soft ring-8 ring-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Étape {index + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink/65">
                  {step.text}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
