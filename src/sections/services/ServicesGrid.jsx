import ProfileFilter from '../../components/ProfileFilter.jsx'
import Reveal from '../../components/Reveal.jsx'
import ServiceCard from '../../components/ServiceCard.jsx'
import { filterServices } from '../../data/services.js'

export default function ServicesGrid({ filter, onFilterChange, onOpen }) {
  const list = filterServices(filter)

  return (
    <section className="section bg-cream" id="prestations">
      <div className="container-x">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <p className="eyebrow">Nos prestations</p>
          <h2 className="heading-lg">Choisissez le service qui vous correspond</h2>
          <p className="lead max-w-2xl">
            Filtrez selon votre profil, puis ouvrez une prestation pour voir le détail de ce qui est
            inclus, les matières traitées et les délais.
          </p>
          <ProfileFilter value={filter} onChange={onFilterChange} />
        </Reveal>

        <p aria-live="polite" className="mt-6 text-center text-sm text-ink/55">
          {list.length} service{list.length > 1 ? 's' : ''} affiché{list.length > 1 ? 's' : ''}
          {filter !== 'tous' ? ` pour les ${filter}` : ''}
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06} className="h-full">
              <ServiceCard service={service} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="mt-6 rounded-2xl border border-brand/15 bg-white p-6 text-center text-sm text-ink/60">
            Aucun service ne correspond à ce filtre pour le moment. Écrivez-nous sur WhatsApp : nous
            étudions les demandes particulières.
          </p>
        ) : null}
      </div>
    </section>
  )
}
