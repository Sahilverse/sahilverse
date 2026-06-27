import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Sahil Dahal — Sahilverse',
  description: 'This sector does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-(--pad-x) text-center">
      {/* Signal glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 42%, rgba(175,201,255,0.07) 0%, transparent 70%)',
        }}
      />

      <p className="font-mono text-[0.65rem] text-muted uppercase tracking-[0.35em] mb-6">
        Sahilverse
      </p>

      <h1
        className="font-display font-bold leading-none tracking-[-0.03em] text-foreground"
        style={{ fontSize: 'clamp(5rem, 20vw, 14rem)' }}
      >
        404
      </h1>

      <p
        className="font-display font-light text-foreground/50 mt-4 mb-10"
        style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
      >
        This Multiverse doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-signal hover:text-foreground transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
        Back to Sahilverse
      </Link>
    </div>
  )
}
