'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export function CursorGlow() {
  const prefersReduced = useReducedMotion()
  const glowRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -300, y: -300 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (prefersReduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    function onMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    function tick() {
      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${posRef.current.x - 250}px, ${posRef.current.y - 250}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 w-125 h-125 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(175,201,255,0.04) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
