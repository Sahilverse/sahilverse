'use client'

import { useState, useEffect } from 'react'

const SECTIONS = ['origin', 'work', 'transmissions', 'stack', 'signal'] as const
const LABELS: Record<string, string> = {
  origin: 'ORIGIN',
  work: 'EXPANSION',
  transmissions: 'TRANSMISSIONS',
  stack: 'COMPOSITION',
  signal: 'SIGNAL',
}

export function Hud() {
  const [region, setRegion] = useState('ENTRY')

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setRegion(LABELS[id] ?? id.toUpperCase())
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
      )
      obs.observe(el)
      return obs
    }).filter(Boolean)

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40">
      <div className="absolute bottom-5 left-(--pad-x) hidden md:block">
        <span className="font-mono text-[0.55rem] text-muted/35 uppercase tracking-[0.2em]">
          27.7172° N · 85.3240° E
        </span>
      </div>
      <div className="absolute bottom-5 right-(--pad-x) hidden md:block">
        <span className="font-mono text-[0.55rem] text-signal/40 uppercase tracking-[0.2em]">
          {region}
        </span>
      </div>
    </div>
  )
}
