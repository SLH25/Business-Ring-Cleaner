import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SmartImage from '../../components/SmartImage.jsx'
import Reveal from '../../components/Reveal.jsx'
import { services } from '../../data/services.js'

export default function ServicesPreview() {
  return (
    <section className="section bg-white" id="services">
      <div className="container-x">
        <Reveal className="section-head">
          <p className="eyebrow">Nos services</p>
          <h2 className="heading-lg mt-3">Un soin adapté à chaque textile</h2>
          <p className="lead mt-4">
            Canapés, tapis, cuir ou entretien régulier de vos locaux : cliquez sur un service pour
            voir le détail des prestations et demander votre devis.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.07} className="h-full">
              <Link
                to={`/services?service=${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-soft transition duration-300 ease-soft hover:-translate-y-1 hover:border-brand/25 hover:shadow-card"
              >
                <SmartImage
                  image={service.cover}
                  className="w-full"
                  imgClassName="transition duration-700 ease-soft group-hover:scale-[1.05]"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold leading-snug text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{service.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Voir les détails
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition duration-300 ease-soft group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
