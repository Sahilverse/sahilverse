'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const LETTERS = 'SAHILVERSE'.split('')

const SIZE: React.CSSProperties = { fontSize: 'clamp(2.8rem,8vw,9rem)' }

const staticH1 = (
  <h1
    aria-label="Sahilverse"
    className="font-display font-bold leading-none tracking-[-0.03em] text-foreground whitespace-nowrap"
    style={SIZE}
  >
    SAHILVERSE
  </h1>
)

export function Wordmark() {
  const prefersReduced = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Show static text on SSR and until JS hydrates — prevents invisible text on slow mobile
  if (!mounted || prefersReduced) return staticH1

  return (
    <h1
      aria-label="Sahilverse"
      className="font-display font-bold leading-none tracking-[-0.03em] text-foreground overflow-hidden whitespace-nowrap"
      style={SIZE}
    >
      {LETTERS.map((letter, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.05 }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  )
}
