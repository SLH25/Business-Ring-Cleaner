import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Apparition au scroll (une seule fois) avec respect de prefers-reduced-motion.
 * Les variants partagés sont dans src/lib/animations.js.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  as = 'div',
  variants,
  once = true,
  amount = 0.2,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={
        variants ?? {
          hidden: { opacity: 0, y: reduce ? 0 : y },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay, ease: EASE },
          },
        }
      }
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
