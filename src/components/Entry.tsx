import Image from 'next/image'
import { siGithub, siX, siInstagram, siYoutube } from 'simple-icons'
import { Wordmark } from './Wordmark'
import { siteConfig } from '@/lib/siteConfig'

const PARTICLES = [
  { left: '8%', delay: '0s', dur: '9s', size: 2 },
  { left: '27%', delay: '3.5s', dur: '13s', size: 1.5 },
  { left: '51%', delay: '1.2s', dur: '8s', size: 2.5 },
  { left: '74%', delay: '5.1s', dur: '11s', size: 1.5 },
  { left: '91%', delay: '2.7s', dur: '10s', size: 2 },
] as const

// LinkedIn path — hardcoded since simple-icons v16 removed it
const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

const HERO_SOCIALS = [
  { label: 'GitHub', href: siteConfig.socials.github, path: siGithub.path },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin, path: LINKEDIN_PATH },
  { label: 'X', href: siteConfig.socials.twitter, path: siX.path },
  { label: 'Instagram', href: siteConfig.socials.instagram, path: siInstagram.path },
  { label: 'YouTube', href: siteConfig.socials.youtube, path: siYoutube.path },
] as const

export function Entry() {
  return (
    <section
      id="entry"
      aria-label="Entry"
      className="relative min-h-screen flex flex-col items-center justify-center pt-12 overflow-hidden"
    >
      {/* Atmospheric portrait — breathes subtly at idle */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/portrait.png"
          alt="Sahil Dahal"
          fill
          priority
          quality={65}
          className="object-cover grayscale"
          sizes="100vw"
          style={{
            objectPosition: 'center 13%',
            animation: 'breathe 5s ease-in-out infinite',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, #0A0C10 80%)',
          }}
        />
      </div>

      {/* Floating signal particles — CSS only, zero JS */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute pointer-events-none rounded-full"
          style={{
            left: p.left,
            bottom: '18%',
            width: p.size,
            height: p.size,
            background: '#AFC9FF',
            animation: `float-particle ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* Center content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-(--pad-x) flex flex-col items-center text-center gap-5">
        <p className="font-mono text-[0.65rem] text-muted uppercase tracking-[0.35em]">
          Software Engineer · Nepal
        </p>

        <Wordmark />

        <p
          className="font-display font-light text-foreground/75 leading-tight max-w-[26ch]"
          style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.75rem)' }}
        >
          Building the infrastructure that powers tomorrow.
        </p>

        <a
          href="#origin"
          className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-signal hover:text-foreground transition-colors mt-5 group"
        >
          Enter the universe
          <span className="group-hover:translate-y-1 transition-transform inline-block">↓</span>
        </a>

        {/* Social icon row */}
        <nav aria-label="Social links" className="flex items-center gap-5 mt-2">
          {HERO_SOCIALS.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted/50 hover:text-signal transition-colors"
            >
              <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor" aria-hidden>
                <path d={path} />
              </svg>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
