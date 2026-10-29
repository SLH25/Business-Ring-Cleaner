import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

const formatter = new Intl.NumberFormat('fr-FR')

/** Compteur animé déclenché à l'entrée dans le viewport. */
export default function Counter({
  value,
  suffix = '',
  duration = 1600,
  className = '',
  label,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return undefined

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, value, duration])

  return (
    <span ref={ref} className={className}>
      <span className="tabular-nums">
        {formatter.format(display)}
        {suffix}
      </span>
      {label ? <span className="sr-only"> {label}</span> : null}
    </span>
  )
}
