'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function CoreGlow() {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          'radial-gradient(ellipse 55% 45% at 50% 42%, rgba(175,201,255,0.09) 0%, transparent 70%)',
      }}
      animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}
