import { useState } from 'react'
import { Sparkles } from 'lucide-react'

/**
 * Image robuste : ratio maîtrisé, lazy-loading par défaut et visuel de secours
 * branded si le fichier est absent ou ne se charge pas.
 */
export default function SmartImage({
  image,
  src,
  alt,
  ratio,
  className = '',
  imgClassName = '',
  priority = false,
  sizes,
  children,
}) {
  const [failed, setFailed] = useState(false)

  const source = src ?? image?.src
  const description = alt ?? image?.alt ?? ''
  const aspect = ratio ?? image?.ratio ?? 'aspect-[4/3]'

  return (
    <div className={`relative isolate overflow-hidden ${aspect} ${className}`}>
      {source && !failed ? (
        <img
          src={source}
          alt={description}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          sizes={sizes}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand/15 via-mist to-brand-light/25 p-6 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navy/60">
            Visuel à venir
          </span>
          {description ? (
            <span className="max-w-[18rem] text-sm leading-relaxed text-brand-navy/70">
              {description}
            </span>
          ) : null}
        </div>
      )}
      {children}
    </div>
  )
}
