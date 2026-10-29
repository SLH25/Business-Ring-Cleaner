import { Link } from 'react-router-dom'
import { MessageCircle, Sparkles } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHeader from '../sections/shared/PageHeader.jsx'
import Values from '../sections/about/Values.jsx'
import Commitments from '../sections/about/Commitments.jsx'
import Steps from '../sections/about/Steps.jsx'
import Audience from '../sections/about/Audience.jsx'
import Coverage from '../sections/about/Coverage.jsx'
import FinalCTA from '../sections/shared/FinalCTA.jsx'
import { seo, site, whatsappLink } from '../data/site.js'

export default function About() {
  return (
    <>
      <Seo {...seo.about} />

      <PageHeader
        breadcrumb={[{ label: 'À propos' }]}
        eyebrow="À propos"
        title={`${site.name}, votre solution partner à ${site.city}`}
        description="Une équipe formée, un équipement professionnel et une méthode éprouvée pour prendre soin de vos canapés, tapis, matelas et cuirs — à domicile comme en entreprise."
      >
        <Link to="/contact#devis" className="btn-primary">
          <Sparkles size={18} aria-hidden="true" />
          Demander un devis
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

      <Values />
      <Commitments />
      <Steps />
      <Audience />
      <Coverage />
      <FinalCTA
        eyebrow="Faisons connaissance"
        title="Votre intérieur mérite un vrai professionnel"
        description="Un appel, un message ou un formulaire : dites-nous ce dont vous avez besoin, nous nous occupons du reste."
      />
    </>
  )
}
