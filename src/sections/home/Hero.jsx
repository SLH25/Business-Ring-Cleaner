import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Clock, Home, MessageCircle, ShieldCheck, Sparkles, Wrench } from 'lucide-react'
import SmartImage from '../../components/SmartImage.jsx'
import { fadeUp, staggerContainer } from '../../lib/animations.js'
import { images } from '../../data/images.js'
import { site, whatsappLink } from '../../data/site.js'

const badgeIcons = {
  'À domicile': Home,
  'RDV rapide': Clock,
  'Équipement pro': Wrench,
  'Produits sûrs': ShieldCheck,
}

export default function Hero() {
  const reduce = useReducedMotion()
  const motionProps = reduce
    ? {}
    : { initial: 'hidden', animate: 'visible', variants: staggerContainer }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist via-cream to-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-light/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <motion.div
          className="order-first lg:order-last"
          {...(reduce ? {} : { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } })}
        >
          <div className="relative">
            <SmartImage
              image={images.hero}
              priority
              className="w-full rounded-3xl shadow-card ring-1 ring-brand/10"
            />

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:left-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                <Sparkles size={18} aria-hidden="true" />
              </span>
              <span className="text-xs leading-tight text-ink/70">
                <strong className="block font-display text-sm text-brand-navy">
                  1 250+ interventions
                </strong>
                à Douala et ses environs
              </span>
            </div>

            <div className="absolute -right-2 top-5 hidden animate-float rounded-2xl bg-brand-navy px-4 py-3 text-white shadow-card sm:block">
              <p className="font-display text-lg font-semibold leading-none">98%</p>
              <p className="mt-1 text-[11px] text-white/70">clients satisfaits</p>
            </div>
          </div>
        </motion.div>

        <motion.div {...motionProps} className="order-last lg:order-first">
          <motion.p variants={fadeUp} className="eyebrow">
            <Sparkles size={13} aria-hidden="true" />
            Nettoyage professionnel à {site.city}
          </motion.p>

          <motion.h1 variants={fadeUp} className="heading-xl mt-4">
            Vos canapés, tapis et cuirs{' '}
            <span className="relative inline-block text-brand">
              comme neufs
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-light"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C40 3 80 2 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            ✨
          </motion.h1>

          <motion.p variants={fadeUp} className="lead mt-5 max-w-xl">
            Nettoyage, détachage et désinfection à domicile par une équipe formée et un équipement
            professionnel. Produits sûrs pour vos enfants et vos animaux, rendez-vous rapide.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact#devis" className="btn-primary">
              <Sparkles size={18} aria-hidden="true" />
              Devis gratuit
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-2.5">
            {site.heroBadges.map((badge) => {
              const Icon = badgeIcons[badge] ?? Sparkles
              return (
                <li
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-3.5 py-2 text-xs font-medium text-brand-navy shadow-sm sm:text-sm"
                >
                  <Icon size={15} className="text-brand" aria-hidden="true" />
                  {badge}
                </li>
              )
            })}
          </motion.ul>

          <motion.p variants={fadeUp} className="mt-6 font-script text-2xl text-brand-light">
            {site.slogan}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
