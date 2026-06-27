import { stackGroups } from '@/lib/stack'

export function StackGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" aria-label="Technology stack">
      {stackGroups.map((group) => (
        <div key={group.label}>
          <p className="font-mono text-[0.65rem] text-muted/60 uppercase tracking-[0.25em] mb-3">
            {group.label}
          </p>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="font-mono text-[0.7rem] text-muted px-2 py-1"
                style={{ border: '1px solid var(--line)', background: 'rgba(18,22,29,0.5)' }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
