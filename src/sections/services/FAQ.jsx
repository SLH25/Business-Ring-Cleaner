import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, MessageCircle } from 'lucide-react'
import Reveal from '../../components/Reveal.jsx'
import { faq } from '../../data/faq.js'
import { whatsappLink } from '../../data/site.js'

export default function FAQ() {
  const [openId, setOpenId] = useState(faq[0].id)

  return (
    <section className="section bg-white" id="faq">
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="heading-lg mt-3">Tout ce que vous voulez savoir</h2>
          <p className="lead mt-4">
            Une question qui n’est pas dans la liste ? Écrivez-nous : nous répondons généralement en
            quelques minutes pendant les heures d’ouverture.
          </p>

          <div className="mt-7 rounded-2xl border border-brand/10 bg-cream p-5">
            <p className="font-display text-base font-semibold text-brand-navy">
              Besoin d’un conseil rapide ?
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">
              Envoyez une photo de votre canapé ou de votre tapis sur WhatsApp : nous vous conseillons
              gratuitement.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto"
              >
                <MessageCircle size={17} aria-hidden="true" />
                WhatsApp
              </a>
              <Link to="/contact#devis" className="btn-outline w-full sm:w-auto">
                Formulaire de devis
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-brand/10 overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-soft">
            {faq.map((item) => {
              const isOpen = openId === item.id
              return (
                <li key={item.id}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-bouton-${item.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panneau-${item.id}`}
                      onClick={() => setOpenId(isOpen ? '' : item.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-cream/60"
                    >
                      <span className="font-display text-sm font-semibold text-brand-navy sm:text-base">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 text-brand transition-transform duration-300 ease-soft ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={`faq-panneau-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-bouton-${item.id}`}
                    className={`grid transition-all duration-300 ease-soft ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink/70">{item.answer}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
