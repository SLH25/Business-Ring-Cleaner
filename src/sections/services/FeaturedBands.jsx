import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../../components/Reveal.jsx'
import SmartImage from '../../components/SmartImage.jsx'
import { images } from '../../data/images.js'

const bands = [
  {
    id: 'cuir',
    image: images.featured.cuir,
    eyebrow: 'Spécial cuir',
    title: 'Canapés en cuir : nettoyer sans dessécher',
    text: 'Le cuir ne se lave pas comme un tissu. Nous le nettoyons avec des produits au pH adapté, le nourrissons pour éviter les craquelures et le protégeons contre les futures taches.',
    points: [
      'Nettoyage doux, sans décapage agressif',
      'Nourrissage et protection des fibres',
      'Traitement des traces et des zones d’usure',
    ],
    cta: 'Voir le service canapés',
    to: '/services?service=canapes',
  },
  {
    id: 'livraison',
    image: images.featured.livraison,
    eyebrow: 'Sur demande',
    title: 'Enlèvement & livraison de vos tapis',
    text: 'Vous n’avez pas à transporter un tapis lourd : nous venons le chercher, le lavons en profondeur puis vous le rapportons propre et sec, avec protection pendant le transport.',
    points: [
      'Prise en charge à domicile sur rendez-vous',
      'Lavage en profondeur et séchage à plat',
      'Restitution propre, sèche et protégée',
    ],
    cta: 'Voir le service tapis',
    to: '/services?service=tapis',
  },
]

export default function FeaturedBands() {
  return (
    <section className="section bg-white">
      <div className="container-x space-y-14 md:space-y-20">
        {bands.map((band, index) => (
          <div
            key={band.id}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            <Reveal
              delay={0.05}
              className={index % 2 === 1 ? 'lg:order-last' : ''}
            >
              <SmartImage
                image={band.image}
                className="w-full rounded-3xl shadow-card ring-1 ring-brand/10"
              />
            </Reveal>

            <Reveal delay={0.12}>
              <p className="eyebrow">{band.eyebrow}</p>
              <h2 className="heading-lg mt-3">{band.title}</h2>
              <p className="lead mt-4">{band.text}</p>

              <ul className="mt-6 space-y-2.5">
                {band.points.map((point) => (
                  <li key={point} className="check-item">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link to={band.to} className="btn-outline mt-7">
                {band.cta}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
