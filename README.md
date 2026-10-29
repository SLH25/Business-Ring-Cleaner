# Business Ring Cleaner — site vitrine

Site marketing (4 pages + 404) pour **Business Ring Cleaner**, entreprise de nettoyage
professionnel de canapés, tapis, matelas et cuirs à Douala.

- **Stack** : React 19 · Vite 8 · Tailwind CSS 3.4 · React Router 7 · Framer Motion · Lucide
- **Formulaires** : React Hook Form + EmailJS (repli WhatsApp / e-mail si non configuré)
- **SEO** : React Helmet Async (title, description, canonical, Open Graph par page)
- **Langue** : français uniquement (`<html lang="fr">`)

## Démarrage

```bash
npm install
cp .env.example .env   # optionnel : clés EmailJS
npm run dev            # http://localhost:5173
npm run build          # build de production dans dist/
npm run preview        # prévisualiser le build
npm run lint           # oxlint
```

## Pages et routes

| Route       | Page      | Contenu                                                                    |
| ----------- | --------- | -------------------------------------------------------------------------- |
| `/`         | Accueil   | Hero, 4 services, avant/après, pourquoi nous, avis, CTA final               |
| `/a-propos` | À propos  | Histoire/vision/mission/valeurs, engagements, 3 étapes, publics, zone + carte |
| `/services` | Services  | Filtre particuliers/entreprises, 4 cartes, services en vedette, onglets avant/après, FAQ |
| `/contact`  | Contact   | Coordonnées, horaires, formulaire de devis, carte                            |
| `*`         | 404       | Page introuvable avec liens de secours                                       |

La fenêtre de détails d'un service s'ouvre via l'URL : `/services?service=canapes`
(valeurs : `canapes`, `tapis`, `personnel`, `entretien`), et le filtre via `?profil=particuliers`.
Ces URL sont partageables et le bouton « précédent » du navigateur ferme la fenêtre.

## Structure

```
src/
  assets/images/       # visuels (SVG provisoires à remplacer par des photos)
    brand/ home/ services/{canapes,tapis,personnel,entretien}/ about/ testimonials/
  components/          # Navbar, MobileMenu, Footer, ServiceCard, ServiceModal,
                       # BeforeAfterSlider, QuoteForm, SmartImage, Seo, Counter, ...
  data/                # site.js · images.js · services.js · testimonials.js · faq.js
  pages/               # Home, About, Services, Contact, NotFound
  sections/
    home/ about/ services/ shared/
public/                # favicon.svg, og-image.jpg, _redirects
```

## Personnalisation

1. **Coordonnées, horaires, réseaux sociaux, quartiers, statistiques** → `src/data/site.js`.
   Les numéros actuels (`+237 690 00 00 00`, `237690000000`) et l'e-mail sont **provisoires** :
   remplacer `phoneDisplay`, `phone`, `whatsappNumber` et `email` avant la mise en ligne.
2. **Textes des services, tarifs/délais, matières** → `src/data/services.js`.
3. **Avis clients** → `src/data/testimonials.js` · **FAQ** → `src/data/faq.js`.
4. **Photos** : déposer les fichiers dans `src/assets/images/...` puis mettre à jour les imports
   de `src/data/images.js`. Format conseillé : WebP, 1600 px de large max, < 200 Ko.
   En l'absence de fichier, `SmartImage` affiche automatiquement un visuel de secours.
5. **Logo** : `src/assets/images/brand/logo-color.svg` et `logo-white.svg`.
6. **Image de partage** : `public/og-image.jpg` (1200 × 630).
7. **Formulaire de devis** : renseigner `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`
   et `VITE_EMAILJS_PUBLIC_KEY` dans `.env`. Le template EmailJS doit accepter les variables
   `from_name`, `phone`, `reply_to`, `service`, `quartier`, `message`, `to_email`.

## Accessibilité et performance

- Contrastes AA, focus visible global, `prefers-reduced-motion` respecté (CSS + Framer Motion).
- Modal : fermeture Échap / clic extérieur, focus piégé puis restitué, `aria-modal`.
- Comparateur avant/après pilotable au clavier (input range natif) et au toucher.
- Images en `loading="lazy"` sauf hero (`priority`), dimensions de ratio fixes pour éviter les sauts.

## Déploiement

- **Vercel** : `vercel.json` contient la réécriture SPA (`/((?!assets/).*)` → `/index.html`).
- **Netlify / Cloudflare Pages** : `public/_redirects` (`/*  /index.html  200`).
- Build : `npm run build`, dossier de sortie `dist`.

## À finaliser côté client

- [ ] Numéros de téléphone / WhatsApp définitifs et adresse e-mail réelle
- [ ] Photos avant/après réelles (même cadrage pour les 3 paires)
- [ ] Logo définitif et photo de partage 1200 × 630
- [ ] Liens réseaux sociaux et position exacte Google Maps
- [ ] Grille tarifaire (actuellement « tarif par place, dégressif », sans prix affiché)
- [ ] Clés EmailJS pour l'envoi automatique du formulaire
