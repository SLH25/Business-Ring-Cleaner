import { images } from './images.js'

/**
 * Les 4 services du site. Chaque entrée alimente :
 * - la carte de la page Services (et l'aperçu de l'accueil),
 * - la fenêtre de détails (modal) ouverte via ?service=<slug>,
 * - le message WhatsApp pré-rempli.
 */
export const services = [
  {
    slug: 'canapes',
    title: 'Canapés & fauteuils',
    badge: 'Le plus demandé',
    audience: ['particuliers', 'entreprises'],
    cover: images.services.canapes,
    short:
      'Nettoyage profond des tissus, élimination des taches et des odeurs, séchage rapide.',
    description:
      "Taches de café, traces de stylo, odeurs de transpiration ou simple perte d'éclat : nous nettoyons vos canapés et fauteuils sur place, avec un matériel professionnel à injection-extraction. Le tissu est traité en profondeur, désinfecté puis séché en quelques heures.",
    highlights: ['Détachage ciblé', 'Désinfection complète', 'Séchage rapide'],
    includes: [
      'Diagnostic du tissu et test de couleur avant intervention',
      'Aspiration complète et détachage des zones sensibles',
      'Nettoyage en profondeur par injection-extraction',
      'Désinfection et traitement anti-acariens',
      'Séchage accéléré et remise en place du mobilier',
    ],
    types: ['Tissu', 'Velours', 'Microfibre', 'Suédine', 'Cuir'],
    duration: '1h30 à 3h',
    whatsappMessage:
      'Bonjour Business Ring Cleaner 👋, je souhaite un devis pour le nettoyage de mes canapés et fauteuils à Douala.',
  },
  {
    slug: 'tapis',
    title: 'Tapis & moquettes',
    badge: 'Enlèvement possible',
    audience: ['particuliers', 'entreprises'],
    cover: images.services.tapis,
    short:
      'Lavage en profondeur, ravivage des couleurs et protection des fibres, avec enlèvement sur demande.',
    description:
      "Le tapis retient la poussière, les acariens et les allergènes. Nous le lavons fibre par fibre, respectons les motifs délicats et ravivons les couleurs. En option, nous venons le chercher et vous le rapportons propre et sec.",
    highlights: ['Lavage fibre par fibre', 'Couleurs ravivées', 'Enlèvement & livraison'],
    includes: [
      "Dépoussiérage complet sur les deux faces",
      'Lavage adapté à la matière (laine, synthétique, soie)',
      'Détachage des zones d’usure et des accidents',
      'Traitement anti-acariens et désodorisation',
      'Séchage à plat et livraison à domicile',
    ],
    types: ['Classique', 'Berbère', 'Persan', 'Moquette', 'Tapis de prière'],
    duration: '24 à 48h (avec séchage)',
    whatsappMessage:
      'Bonjour Business Ring Cleaner 👋, je souhaite un devis pour le nettoyage de mes tapis, avec enlèvement et livraison.',
  },
  {
    slug: 'personnel',
    title: "Personnel d'entretien",
    badge: 'Sur abonnement',
    audience: ['particuliers', 'entreprises'],
    cover: images.services.personnel,
    short:
      "Femmes et agents de ménage formés, présentés et suivis, pour votre maison ou vos bureaux.",
    description:
      "Nous sélectionnons, formons et encadrons un personnel fiable pour l'entretien quotidien de votre domicile ou de vos locaux. Vous choisissez le rythme : passage ponctuel, hebdomadaire ou temps plein.",
    highlights: ['Personnel vérifié', 'Remplacement garanti', 'Suivi qualité'],
    includes: [
      'Entretien courant des sols, surfaces et sanitaires',
      'Gestion du linge et des petites tâches ménagères',
      'Produits et matériel fournis sur demande',
      'Agent encadré et remplacé en cas d’absence',
      'Contrôle qualité régulier par notre équipe',
    ],
    types: ['À domicile', 'Bureaux', 'Hôtels', 'Écoles', 'Temps partiel / plein'],
    duration: 'Créneau de 3h, 6h ou temps plein',
    whatsappMessage:
      "Bonjour Business Ring Cleaner 👋, je souhaite des informations sur la mise à disposition de personnel d'entretien.",
  },
  {
    slug: 'entretien',
    title: 'Entretien de locaux',
    badge: 'Entreprises',
    audience: ['entreprises'],
    cover: images.services.entretien,
    short:
      'Contrats d’entretien pour bureaux, hôtels, écoles et administrations, avec intervenants dédiés.',
    description:
      "Un contrat d'entretien clair, une équipe dédiée et un cahier des charges respecté : nous prenons en charge l'hygiène de vos espaces professionnels, y compris les textiles (sièges de salle d'attente, moquettes, rideaux).",
    highlights: ['Équipe dédiée', 'Planning maîtrisé', 'Produits professionnels'],
    includes: [
      'Visite technique et cahier des charges personnalisé',
      'Nettoyage régulier des espaces communs et sanitaires',
      'Entretien des textiles et moquettes de vos espaces',
      'Interventions hors horaires pour ne pas gêner votre activité',
      'Rapport de passage et interlocuteur unique',
    ],
    types: ['Bureaux', 'Hôtels & résidences', 'Écoles', 'Mosquées & églises', 'Administrations'],
    duration: 'Contrat mensuel, devis sous 48h',
    whatsappMessage:
      "Bonjour Business Ring Cleaner 👋, je souhaite un devis d'entretien pour mes locaux professionnels à Douala.",
  },
]

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug) ?? null

export const audienceLabels = {
  particuliers: 'Particuliers',
  entreprises: 'Entreprises',
}

export const audienceFilters = [
  { value: 'tous', label: 'Tous' },
  { value: 'particuliers', label: 'Particuliers' },
  { value: 'entreprises', label: 'Entreprises' },
]

export const filterServices = (filter) =>
  filter === 'tous'
    ? services
    : services.filter((service) => service.audience.includes(filter))
