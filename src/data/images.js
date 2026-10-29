/**
 * Chemins centralisés de tous les visuels du site.
 * Les SVG actuels sont des visuels provisoires : déposer les photos définitives
 * (WebP, 150 Ko max, noms sans accents) dans src/assets/images puis remplacer
 * les imports ci-dessous. Aucun composant n'a besoin d'être modifié.
 */
import logoColor from '../assets/images/brand/logo-color.svg'
import logoWhite from '../assets/images/brand/logo-white.svg'

import heroAgent from '../assets/images/home/hero-agent.svg'
import beforeCanapes from '../assets/images/home/before-canapes.svg'
import afterCanapes from '../assets/images/home/after-canapes.svg'
import beforeTapis from '../assets/images/home/before-tapis.svg'
import afterTapis from '../assets/images/home/after-tapis.svg'
import beforeCuir from '../assets/images/home/before-cuir.svg'
import afterCuir from '../assets/images/home/after-cuir.svg'
import featuredCuir from '../assets/images/home/featured-cuir.svg'
import featuredLivraison from '../assets/images/home/featured-livraison.svg'

import coverCanapes from '../assets/images/services/canapes/cover.svg'
import coverTapis from '../assets/images/services/tapis/cover.svg'
import coverPersonnel from '../assets/images/services/personnel/cover.svg'
import coverEntretien from '../assets/images/services/entretien/cover.svg'

const picture = (src, alt, ratio = 'aspect-[4/3]') => ({ src, alt, ratio })

export const brand = {
  logoColor: picture(logoColor, 'Logo Business Ring Cleaner'),
  logoWhite: picture(logoWhite, 'Logo Business Ring Cleaner en blanc'),
}

export const images = {
  hero: picture(
    heroAgent,
    'Agent Business Ring Cleaner nettoyant un canapé en tissu à domicile',
    'aspect-[6/5]',
  ),

  services: {
    canapes: picture(coverCanapes, 'Nettoyage professionnel de canapés et fauteuils'),
    tapis: picture(coverTapis, 'Nettoyage professionnel de tapis et moquettes'),
    personnel: picture(coverPersonnel, "Personnel d'entretien qualifié en intervention"),
    entretien: picture(coverEntretien, 'Entretien de bureaux et de locaux professionnels'),
  },

  beforeAfter: {
    canapes: {
      before: picture(beforeCanapes, 'Canapé avant nettoyage, taches et tissu terni', 'aspect-[3/2]'),
      after: picture(afterCanapes, 'Canapé après nettoyage, tissu ravivé et désinfecté', 'aspect-[3/2]'),
    },
    tapis: {
      before: picture(beforeTapis, 'Tapis avant nettoyage, poussiéreux et terne', 'aspect-[3/2]'),
      after: picture(afterTapis, 'Tapis après nettoyage, couleurs ravivées', 'aspect-[3/2]'),
    },
    cuir: {
      before: picture(beforeCuir, 'Canapé en cuir avant nettoyage, sec et marqué', 'aspect-[3/2]'),
      after: picture(afterCuir, 'Canapé en cuir après nettoyage, nourri et protégé', 'aspect-[3/2]'),
    },
  },

  featured: {
    cuir: picture(featuredCuir, 'Nettoyage et nourrissage du cuir d’un canapé'),
    livraison: picture(featuredLivraison, 'Enlèvement et livraison de tapis à domicile'),
  },
}

/** Visuel utilisé dans la fenêtre de détails d'un service. */
export const serviceCover = (slug) => images.services[slug] ?? images.services.canapes

export default images
