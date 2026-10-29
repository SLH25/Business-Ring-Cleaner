import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Remonte en haut de page à chaque changement de route, ou rejoint l'ancre
 * demandée en réessayant quelques instants (les pages sont chargées en lazy).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return undefined
    }

    let attempts = 0
    let timer

    const scrollToHash = () => {
      const target = document.getElementById(hash.replace('#', ''))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      attempts += 1
      if (attempts < 12) timer = window.setTimeout(scrollToHash, 60)
    }

    scrollToHash()
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}
