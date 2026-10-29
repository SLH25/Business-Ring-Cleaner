import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/site.js'

/** Bouton WhatsApp flottant (desktop / tablette) avec halo pulsé. */
export default function WhatsAppButton() {
  const reduce = useReducedMotion()

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp/50"
      />

      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter avec Business Ring Cleaner sur WhatsApp"
        className="group relative flex h-14 items-center rounded-full bg-whatsapp pl-4 pr-4 text-white shadow-lift"
        whileHover={reduce ? undefined : { scale: 1.04 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <MessageCircle size={24} aria-hidden="true" className="shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 ease-soft group-hover:max-w-[9rem] group-hover:pl-2 group-focus-visible:max-w-[9rem] group-focus-visible:pl-2">
          WhatsApp
        </span>
      </motion.a>
    </div>
  )
}
