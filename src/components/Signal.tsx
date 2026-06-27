import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import { siteConfig } from '@/lib/siteConfig'

const CHANNELS = [
  { label: 'GitHub', href: siteConfig.socials.github },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin },
  { label: 'Instagram', href: siteConfig.socials.instagram },
  { label: 'YouTube', href: siteConfig.socials.youtube },
] as const

export function Signal() {
  return (
    <section
      id="signal"
      aria-label="Signal — contact"
      className="max-w-7xl mx-auto px-(--pad-x) py-(--section-y)"
    >
      <Reveal>
        <Eyebrow label="Signal" />
        <h2
          className="font-display font-medium text-foreground mb-3"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4.4rem)' }}
        >
          Get in touch.
          <br />
          <span className="text-foreground/40">Engineering roles, consulting,</span>
          <br />
          <span className="text-foreground/40">or anything worth building.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block font-mono text-signal hover:text-foreground transition-colors mt-6 mb-12"
          style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)' }}
        >
          {siteConfig.email}
        </a>
      </Reveal>

      <Reveal delay={0.25}>
        <nav aria-label="Social channels" className="flex flex-wrap gap-3">
          {CHANNELS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] text-muted uppercase tracking-[0.2em] hover:text-foreground hover:border-foreground/30 transition-colors px-4 py-3 min-w-11 min-h-11 flex items-center"
              style={{ border: '1px solid var(--line)' }}
            >
              {label}
            </a>
          ))}
        </nav>
      </Reveal>
    </section>
  )
}
