'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export function DotGrid() {
  const prefersReduced = useReducedMotion()
  const elRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (prefersReduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handler = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        if (elRef.current) {
          elRef.current.style.transform = `translateY(${window.scrollY * 0.04}px)`
        }
        rafRef.current = null
      })
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => {
      window.removeEventListener('scroll', handler)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [prefersReduced])

  return (
    <div
      ref={elRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(circle, var(--line-strong) 1px, transparent 1px)`,
        backgroundSize: '46px 46px',
        opacity: 0.7,
        willChange: 'transform',
      }}
    />
  )
}
