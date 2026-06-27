import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import { transmissions } from '@/lib/transmissions'

export function Transmissions() {
  return (
    <section
      id="transmissions"
      aria-label="Transmissions"
      className="max-w-7xl mx-auto px-(--pad-x) py-(--section-y)"
    >
      <Reveal>
        <Eyebrow label="Transmissions" />
        <h2
          className="font-display font-medium text-foreground mb-4"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4.4rem)' }}
        >
          Broadcasts, outward.
        </h2>
        <p className="text-muted text-base leading-relaxed mb-16 max-w-[55ch]">
          Deep dives into how I actually built these systems (Coming soon).
        </p>
      </Reveal>

      <div className="space-y-0" role="list">
        {transmissions.map((tx, i) => (
          <Reveal key={tx.index} delay={i * 0.1}>
            <article
              role="listitem"
              className="group flex items-start gap-6 py-6 cursor-default"
              style={{ borderTop: '1px solid var(--line)' }}
            >
              <span className="font-mono text-[0.65rem] text-muted/40 uppercase tracking-[0.2em] pt-1 w-8 shrink-0">
                {tx.index}
              </span>
              <div className="flex-1">
                <h3 className="font-display font-medium text-foreground text-lg mb-1 group-hover:text-signal transition-colors">
                  {tx.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{tx.summary}</p>
              </div>
              <span className="font-mono text-[0.65rem] text-muted/30 uppercase tracking-[0.15em] pt-1 shrink-0 hidden sm:block">
                Soon
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
