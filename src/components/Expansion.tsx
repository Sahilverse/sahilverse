import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import { projects } from '@/lib/projects'
import type { Mass } from '@/types'

const MASS_WEIGHT: Record<Mass, string> = {
  origin: 'opacity-40',
  faint: 'opacity-50',
  standard: 'opacity-70',
  shipped: 'opacity-85',
  showcase: 'opacity-90',
  flagship: 'opacity-100',
}

interface RowProps {
  title: string
  year: string
  blurb: string
  mass: Mass
  lit: boolean
  href?: string
}

function Row({ title, year, blurb, mass, lit, href }: RowProps) {
  const weight = MASS_WEIGHT[mass]
  const isMajor = mass === 'flagship' || mass === 'showcase' || mass === 'shipped'

  return (
    <div
      className={`grid grid-cols-[4rem_1fr] sm:grid-cols-[5.5rem_1fr] gap-6 py-6 group ${weight}`}
      style={{ borderBottom: '1px solid var(--line)' }}
    >
      {/* Year column */}
      <div className="pt-0.5 shrink-0">
        <span
          className={`font-mono text-[0.6rem] uppercase tracking-[0.2em] ${
            lit ? 'text-signal' : 'text-muted/50'
          }`}
        >
          {year}
        </span>
      </div>

      {/* Content column */}
      <div>
        <div className="flex items-baseline gap-3 flex-wrap mb-1.5">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-display font-medium hover:text-signal transition-colors ${
                lit ? 'text-foreground' : 'text-foreground/80'
              }`}
              style={{ fontSize: isMajor ? 'clamp(1.05rem, 2vw, 1.35rem)' : '1rem' }}
            >
              {title}
            </a>
          ) : (
            <span
              className="font-display font-medium text-foreground/80"
              style={{ fontSize: isMajor ? 'clamp(1.05rem, 2vw, 1.35rem)' : '1rem' }}
            >
              {title}
            </span>
          )}
          {lit && (
            <span
              className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-signal"
              style={{ opacity: 0.7 }}
            >
              live
            </span>
          )}
        </div>
        <p className="text-muted text-sm leading-relaxed max-w-[60ch]">{blurb}</p>
      </div>
    </div>
  )
}

export function Expansion() {
  return (
    <section
      id="work"
      aria-label="Expansion — work"
      className="max-w-7xl mx-auto px-(--pad-x) py-(--section-y)"
    >
      <Reveal>
        <Eyebrow label="Expansion" />
        <h2
          className="font-display font-medium text-foreground mb-3"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4.4rem)' }}
        >
          It wasn&apos;t planned.
          <br />
          <span className="text-foreground/40">It accreted.</span>
        </h2>
        <p className="font-mono text-[0.65rem] text-muted/60 uppercase tracking-[0.2em] mb-16">
          Building since 2021 · Shipped to production
        </p>
      </Reveal>

      {/* Table header */}
      <div
        className="grid grid-cols-[4rem_1fr] sm:grid-cols-[5.5rem_1fr] gap-6 pb-3"
        style={{ borderBottom: '1px solid var(--line-strong)' }}
      >
        <span className="font-mono text-[0.55rem] text-muted/40 uppercase tracking-[0.25em]">Year</span>
        <span className="font-mono text-[0.55rem] text-muted/40 uppercase tracking-[0.25em]">Project</span>
      </div>

      {projects.map((project, i) => (
        <Reveal key={project.title} delay={i * 0.06}>
          <Row {...project} />
        </Reveal>
      ))}
    </section>
  )
}
