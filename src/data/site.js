/**
 * Coordonnées et contenus institutionnels du site.
 * ⚠️ Les numéros et l'e-mail sont provisoires : remplacer les valeurs ci-dessous
 * par les coordonnées définitives du client avant la mise en ligne.
 */
export const site = {
  name: 'Business Ring Cleaner Services',
  altName: 'Business Ring Cleaner',
  shortName: 'BRC',
  slogan: 'Your Solution Partner',
  tagline: 'Nettoyage professionnel de canapés, tapis et cuir à Douala',
  description:
    "Business Ring Cleaner Services redonne vie à vos canapés, tapis, matelas et cuirs. Une équipe formée, un équipement professionnel et des produits sûrs, à domicile comme en entreprise.",

  url: 'https://businessringcleaner.cm',
  ogImage: '/og-image.jpg',

  phoneDisplay: '+237 690 00 00 00',
  phone: '+237690000000',
  whatsappNumber: '237690000000',
  email: 'contact@businessringcleaner.cm',

  city: 'Douala',
  country: 'Cameroun',
  address: 'Douala, Cameroun',
  area: 'Douala et ses environs',

  hours: [
    { days: 'Lundi – Vendredi', time: '8h00 – 18h00' },
    { days: 'Samedi', time: '8h00 – 16h00' },
    { days: 'Dimanche', time: 'Sur rendez-vous' },
  ],

  socials: [
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'TikTok', href: 'https://tiktok.com', icon: 'tiktok' },
  ],

  neighborhoods: [
    'Akwa',
    'Bonapriso',
    'Bonanjo',
    'Bali',
    'Deido',
    'Bonabéri',
    'Makepe',
    'Logbessou',
    'Ndokotti',
    'Yassa',
    'Kotto',
    'Cité des Palmiers',
  ],

  mapEmbed:
    'https://www.google.com/maps?q=Douala,%20Cameroun&z=12&hl=fr&output=embed',
  mapLink: 'https://www.google.com/maps/place/Douala,+Cameroun',

  stats: [
    { value: 1250, suffix: '+', label: 'Interventions réalisées' },
    { value: 8, suffix: ' ans', label: "D'expérience sur le terrain" },
    { value: 98, suffix: '%', label: 'Clients satisfaits' },
  ],

  heroBadges: ['À domicile', 'RDV rapide', 'Équipement pro', 'Produits sûrs'],
}

export const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export const defaultWhatsAppMessage =
  'Bonjour Business Ring Cleaner 👋, je souhaite obtenir un devis pour le nettoyage de mes textiles.'

/** Construit un lien WhatsApp avec un message pré-rempli. */
export const whatsappLink = (message = defaultWhatsAppMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`

export const callLink = `tel:${site.phone}`

export const seo = {
  home: {
    title: 'Business Ring Cleaner Services — Canapés & tapis à Douala',
    description:
      'Nettoyage et désinfection de canapés, tapis, matelas et cuirs à domicile à Douala. Équipement professionnel, produits sûrs, devis gratuit sur WhatsApp.',
    path: '/',
  },
  about: {
    title: 'À propos — Business Ring Cleaner Services',
    description:
      "Découvrez Business Ring Cleaner Services : une équipe sélectionnée, des produits sûrs et un équipement professionnel au service de l'hygiène de vos textiles à Douala.",
    path: '/a-propos',
  },
  services: {
    title: 'Nos services — Canapés, tapis & cuir à Douala',
    description:
      'Canapés et fauteuils, tapis et moquettes, cuir et similicuir, personnel et entretien de locaux : découvrez nos prestations à Douala et demandez votre devis.',
    path: '/services',
  },
  contact: {
    title: 'Contact & devis gratuit — Business Ring Cleaner Services',
    description:
      'Appelez, écrivez sur WhatsApp ou remplissez le formulaire pour obtenir un devis gratuit de nettoyage de canapés, tapis et cuir à Douala.',
    path: '/contact',
  },
  notFound: {
    title: 'Page introuvable — Business Ring Cleaner Services',
    description: "La page demandée n'existe pas ou a été déplacée.",
    path: '/404',
  },
}
