import { useId } from 'react'

const shapes = {
  facebook: (
    <path
      d="M13.5 21v-7.5h2.6l.4-3h-3V8.7c0-.9.3-1.5 1.6-1.5H16.6V4.5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3h2.6V21h3.9z"
      fill="currentColor"
    />
  ),
  instagram: (
    <>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <circle cx="12" cy="12" r="3.9" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="16.9" cy="7.1" r="1.2" fill="currentColor" />
    </>
  ),
  tiktok: (
    <>
      <path
        d="M14 3.8v10.6a3.6 3.6 0 1 1-2.6-3.45"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M14 3.8c.6 2.1 2.3 3.6 4.7 3.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </>
  ),
}

/**
 * Icônes de réseaux sociaux (lucide-react ne fournit plus les icônes de marque).
 * `name` : facebook | instagram | tiktok
 */
export default function SocialIcon({ name, size = 18, className = '' }) {
  const titleId = useId()

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-labelledby={titleId}
      focusable="false"
    >
      <title id={titleId}>{name}</title>
      {shapes[name] ?? (
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.9" />
      )}
    </svg>
  )
}
