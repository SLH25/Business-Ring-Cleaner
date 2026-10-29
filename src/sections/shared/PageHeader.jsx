import { Sparkles } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb.jsx'

/** En-tête commun aux pages internes : fil d'Ariane, sur-titre, H1, actions. */
export default function PageHeader({
  breadcrumb = [],
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="relative overflow-hidden border-b border-brand/10 bg-gradient-to-b from-mist via-cream to-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-light/20 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-brand/10 blur-2xl"
      />

      <div className="container-x relative py-12 md:py-16">
        <Breadcrumb items={breadcrumb} />

        <div className="mt-6 max-w-3xl">
          {eyebrow ? (
            <p className="eyebrow">
              <Sparkles size={13} aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}
          <h1 className="heading-xl mt-3">{title}</h1>
          {description ? <p className="lead mt-4 max-w-2xl">{description}</p> : null}
          {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
