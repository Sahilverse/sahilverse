'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      {/* 1px signal scan line */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-50 h-px bg-signal origin-left"
        style={{ transform: `scaleX(${progress})`, boxShadow: '0 0 8px var(--glow)' }}
      />

      {/* HUD bar */}
      <header
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-(--pad-x) h-12"
        style={{
          borderBottom: '1px solid var(--line)',
          backdropFilter: 'blur(16px)',
          background: 'rgba(10,12,16,0.75)',
        }}
      >
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

        {/* Desktop anchors */}
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

        <div className="flex items-center gap-4">
          <span className="hidden md:block font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted/60">
            SAHIL DAHAL
          </span>
          {/* Hamburger — always 3 bars; overlay owns the close button */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 text-muted hover:text-foreground transition-colors"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-5 h-px bg-current" />
            <span className="block w-5 h-px bg-current" />
            <span className="block w-5 h-px bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile overlay — z-60 sits above header */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-60 flex flex-col items-center justify-center gap-8 bg-void/95"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            {/* Close button — top right, matching hamburger position */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={closeMenu}
              aria-label="Close menu"
              className="absolute top-0 right-0 h-12 px-(--pad-x) flex items-center justify-center font-mono text-lg text-muted hover:text-foreground transition-colors"
            >
              ✕
            </motion.button>

            {SECTIONS.map(({ id, label }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.08, ease: 'easeOut', duration: 0.25 }}
                className="font-mono text-[0.8rem] uppercase tracking-[0.3em] text-muted hover:text-foreground transition-colors"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
