export function Footer() {
  return (
    <footer
      className="max-w-7xl mx-auto px-(--pad-x) py-10"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="font-mono text-[0.65rem] text-muted/50 uppercase tracking-[0.2em]">
          Sahilverse — Sahil Dahal
        </p>
        <p className="font-mono text-[0.65rem] text-muted/30 uppercase tracking-[0.2em]">
          Software Engineer, Nepal · Since 2021
        </p>
      </div>
    </footer>
  )
}
