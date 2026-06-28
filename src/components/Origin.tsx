import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'

export function Origin() {
  return (
    <section
      id="origin"
      aria-label="Origin"
      className="max-w-7xl mx-auto px-(--pad-x) py-(--section-y)"
    >
      <Reveal>
        <Eyebrow label="Origin" />
      </Reveal>

      <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-start">
        <div className="space-y-8">
          {[
            "I'm Sahil Dahal, a software engineer from Nepal. Self-taught since 2021, shipping to production since 2024.",
            'I work across the full stack: the interface people see, the server behind it, and the systems keeping it running. When a problem demands depth, I go deep.',
            "I don't build demos. I build software that runs: a open source package with 4,200+ installs, a platform people use daily, a deepfake detector that hits 95% accuracy.",
            'The work spans web apps, payment infrastructure, developer platforms, and machine learning. Built across Node, Django, PyTorch, and .NET. Shipped to production.',
          ].map((para, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p
                className="font-display font-light text-foreground/80 leading-relaxed"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}
              >
                {para}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <aside
            className="mt-12 lg:mt-0 w-full lg:w-64 shrink-0 font-mono text-[0.7rem] leading-loose"
            style={{ border: '1px solid var(--line)', padding: '1.5rem' }}
          >
            <p className="text-muted uppercase tracking-[0.2em] mb-4">Dossier</p>
            {[
              ['Name', 'Sahil Dahal'],
              ['Brand', 'Sahilverse'],
              ['Origin', 'Nepal'],
              ['Since', '2021'],
              ['Shipped', '2024 →'],
              ['Stacks', 'Web · ML · Systems'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <span className="text-muted/60">{k}</span>
                <span className="text-foreground/70">{v}</span>
              </div>
            ))}
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
