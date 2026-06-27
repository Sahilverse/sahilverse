interface EyebrowProps {
  label: string
}

export function Eyebrow({ label }: EyebrowProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="w-8 h-px" style={{ background: 'var(--line-strong)' }} />
      <span className="font-mono text-muted text-[0.7rem] uppercase tracking-[0.3em]">
        {label}
      </span>
    </div>
  )
}
