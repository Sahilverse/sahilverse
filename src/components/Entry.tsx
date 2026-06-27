import Image from 'next/image'
import { Wordmark } from './Wordmark'

const PARTICLES = [
  { left: '8%', delay: '0s', dur: '9s', size: 2 },
  { left: '27%', delay: '3.5s', dur: '13s', size: 1.5 },
  { left: '51%', delay: '1.2s', dur: '8s', size: 2.5 },
  { left: '74%', delay: '5.1s', dur: '11s', size: 1.5 },
  { left: '91%', delay: '2.7s', dur: '10s', size: 2 },
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
      </div>
    </section>
  )
}
