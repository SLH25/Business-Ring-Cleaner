import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

/** Fil d'Ariane accessible. `items` = [{ label, to }] (le dernier sans `to`). */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Fil d'Ariane">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-brand-navy/60 sm:text-sm">
        <li className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full px-1 transition hover:text-brand"
          >
            <Home size={14} aria-hidden="true" />
            Accueil
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight size={14} aria-hidden="true" className="text-brand/40" />
              {isLast || !item.to ? (
                <span aria-current="page" className="font-medium text-brand">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="rounded-full px-1 transition hover:text-brand">
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
