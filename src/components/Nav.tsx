'use client'

import { useState, useEffect, useCallback } from 'react'

const SECTIONS = [
  { id: 'origin', label: 'Origin' },
  { id: 'work', label: 'Work' },
  { id: 'transmissions', label: 'Transmissions' },
  { id: 'stack', label: 'Stack' },
  { id: 'signal', label: 'Signal' },
] as const

export function Nav() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? window.scrollY / total : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
      )
      obs.observe(el)
      return obs
    }).filter(Boolean)
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      {/* 1px signal scan line at very top */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-50 h-px bg-signal origin-left"
        style={{ transform: `scaleX(${progress})`, boxShadow: '0 0 8px var(--glow)' }}
      />

      {/* HUD bar — SAHILVERSE · anchors · SAHIL DAHAL */}
      <header
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-(--pad-x) h-12"
        style={{
          borderBottom: '1px solid var(--line)',
          backdropFilter: 'blur(16px)',
          background: 'rgba(10,12,16,0.75)',
        }}
      >
        {/* Left: live dot + brand */}
        <a
          href="#"
          aria-label="Sahilverse — back to top"
          className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-foreground/70 hover:text-foreground transition-colors"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-signal shrink-0"
            style={{ boxShadow: '0 0 6px var(--glow)' }}
            aria-hidden
          />
          SAHILVERSE
        </a>

        {/* Center: section anchors — desktop */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-mono text-[0.6rem] uppercase tracking-[0.2em] transition-colors ${
                active === id ? 'text-signal' : 'text-muted hover:text-foreground'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: SAHIL DAHAL — always visible on desktop; hamburger on mobile */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted/60">
            SAHIL DAHAL
          </span>
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 text-muted hover:text-foreground transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={`block w-5 h-px bg-current transition-transform origin-center ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-transform origin-center ${menuOpen ? '-rotate-45 translate-y-[-3.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-void/95"
          style={{ backdropFilter: 'blur(20px)' }}
        >
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="font-mono text-[0.8rem] uppercase tracking-[0.3em] text-muted hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
