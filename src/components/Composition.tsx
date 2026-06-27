import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'
import { StackGrid } from './StackGrid'
import { GlobeWrapper } from './GlobeWrapper'

export function Composition() {
  return (
    <section
      id="stack"
      aria-label="Composition — technology stack"
      className="max-w-7xl mx-auto px-(--pad-x) py-(--section-y)"
    >
      <Reveal>
        <Eyebrow label="Composition" />
        <h2
          className="font-display font-medium text-foreground mb-4"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4.4rem)' }}
        >
          Three backend ecosystems.
          <br />
          <span className="text-foreground/40">
            Database to screen.
            <br className="hidden sm:block" /> Down to the metal.
          </span>
        </h2>
      </Reveal>

      {/* Globe — center of attraction */}
      <Reveal delay={0.1}>
        <div className="flex justify-center my-16">
          <GlobeWrapper />
        </div>
      </Reveal>

      {/* Stack grid below */}
      <Reveal delay={0.2}>
        <StackGrid />
      </Reveal>
    </section>
  )
}
