import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles } from 'lucide-react'
import { navLinks, site } from '../data/site.js'
import { brand } from '../data/images.js'
import MobileMenu from './MobileMenu.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu
      </a>

      <header
        className={`sticky top-0 z-40 border-b transition duration-300 ease-soft ${
          scrolled
            ? 'border-brand/10 bg-white/90 shadow-soft backdrop-blur-md'
            : 'border-transparent bg-cream/85 backdrop-blur'
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-3">
          <Link
            to="/"
            className="flex shrink-0 items-center"
            aria-label={`${site.name} — retour à l'accueil`}
          >
            <img
              src={brand.horizontal.src}
              alt={brand.horizontal.alt}
              width={brand.horizontal.width}
              height={brand.horizontal.height}
              className="h-9 w-auto sm:h-10"
              decoding="async"
            />
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition duration-300 ease-soft ${
                    isActive
                      ? 'bg-brand/10 text-brand'
                      : 'text-brand-navy/75 hover:bg-brand/5 hover:text-brand'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact#devis" className="btn-primary hidden sm:inline-flex">
              <Sparkles size={18} aria-hidden="true" />
              Devis gratuit
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 bg-white text-brand-navy transition hover:border-brand/40 hover:text-brand lg:hidden"
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
