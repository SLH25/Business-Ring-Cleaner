import { Helmet } from 'react-helmet-async'
import { site } from '../data/site.js'

/** Balises SEO / Open Graph communes à toutes les pages. */
export default function Seo({ title, description, path = '/', image, noindex = false }) {
  const canonical = `${site.url}${path === '/' ? '/' : path}`
  const ogImage = `${site.url}${image ?? site.ogImage}`

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${site.name} — ${site.tagline}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${site.name} — ${site.tagline}`} />
    </Helmet>
  )
}
