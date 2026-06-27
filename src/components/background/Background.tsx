import { CoreGlow } from './CoreGlow'
import { CursorGlow } from './CursorGlow'
import { DotGrid } from './DotGrid'

export function Background() {
  return (
    <>
      <DotGrid />
      <CoreGlow />
      <CursorGlow />

      {/* Radial vignette — darkens to void-deep at edges */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 35%, #06080B 100%)',
        }}
      />

      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 mix-blend-screen"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* Editorial frame: vertical hairlines at content column — desktop only */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl"
          style={{
            borderLeft: '1px solid var(--line)',
            borderRight: '1px solid var(--line)',
            opacity: 0.5,
          }}
        />
      </div>
    </>
  )
}
