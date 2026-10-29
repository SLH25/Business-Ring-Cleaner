import { audienceFilters } from '../data/services.js'

/** Sélecteur [Tous] [Particuliers] [Entreprises]. */
export default function ProfileFilter({ value, onChange, className = '' }) {
  return (
    <div
      role="group"
      aria-label="Filtrer les services par profil"
      className={`inline-flex flex-wrap items-center gap-1 rounded-full border border-brand/15 bg-white p-1 shadow-soft ${className}`}
    >
      {audienceFilters.map((filter) => {
        const isActive = value === filter.value
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            aria-pressed={isActive}
            className={`h-10 rounded-full px-4 text-sm font-semibold transition duration-300 ease-soft sm:px-5 ${
              isActive
                ? 'bg-brand text-white shadow-soft'
                : 'text-brand-navy/70 hover:bg-brand/5 hover:text-brand'
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
