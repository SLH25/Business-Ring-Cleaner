import { useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { MessageCircle, Sparkles } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import ServiceModal from '../components/ServiceModal.jsx'
import PageHeader from '../sections/shared/PageHeader.jsx'
import ServicesGrid from '../sections/services/ServicesGrid.jsx'
import FeaturedBands from '../sections/services/FeaturedBands.jsx'
import BeforeAfterTabs from '../sections/services/BeforeAfterTabs.jsx'
import FAQ from '../sections/services/FAQ.jsx'
import FinalCTA from '../sections/shared/FinalCTA.jsx'
import { getServiceBySlug, services } from '../data/services.js'
import { seo, site, whatsappLink } from '../data/site.js'

const validFilters = ['tous', 'particuliers', 'entreprises']

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams()

  const rawFilter = searchParams.get('profil')
  const filter = validFilters.includes(rawFilter) ? rawFilter : 'tous'
  const activeService = getServiceBySlug(searchParams.get('service'))

  const openService = useCallback(
    (slug) => {
      const next = new URLSearchParams(searchParams)
      next.set('service', slug)
      setSearchParams(next, { replace: false })
    },
    [searchParams, setSearchParams],
  )

  const closeService = useCallback(() => {
    const next = new URLSearchParams(searchParams)
    next.delete('service')
    setSearchParams(next, { replace: true })
  }, [searchParams, setSearchParams])

  const changeFilter = useCallback(
    (value) => {
      const next = new URLSearchParams(searchParams)
      if (value === 'tous') {
        next.delete('profil')
      } else {
        next.set('profil', value)
      }
      setSearchParams(next, { replace: true })
    },
    [searchParams, setSearchParams],
  )

  return (
    <>
      <Seo {...seo.services} />

      <PageHeader
        breadcrumb={[{ label: 'Services' }]}
        eyebrow="Nos services"
        title="Canapés, tapis, cuir et entretien de locaux"
        description={`${services.length} prestations pensées pour les particuliers et les professionnels de ${site.city} : détail des étapes, matières traitées et délais annoncés.`}
      >
        <Link to="/contact#devis" className="btn-primary">
          <Sparkles size={18} aria-hidden="true" />
          Devis gratuit
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp
        </a>
      </PageHeader>

      <ServicesGrid filter={filter} onFilterChange={changeFilter} onOpen={openService} />
      <FeaturedBands />
      <BeforeAfterTabs />
      <FAQ />
      <FinalCTA
        eyebrow="Un devis, pas un engagement"
        title="Dites-nous ce qu’il faut nettoyer, on s’occupe du reste"
        description="Envoyez une photo sur WhatsApp ou remplissez le formulaire : vous recevez un tarif clair et un créneau d’intervention."
      />

      <ServiceModal service={activeService} onClose={closeService} />
    </>
  )
}
