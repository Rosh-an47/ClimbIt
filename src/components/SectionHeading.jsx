export default function SectionHeading({ label, title, subhead, align = 'left', tone = 'light' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const dark = tone === 'dark'
  return (
    <header className={`max-w-4xl ${alignment}`}>
      {label ? <p className={`mb-4 font-mono text-xs uppercase tracking-[.2em] ${dark ? 'text-sunrise' : 'text-sunrise'}`}>{label}</p> : null}
      <h1 className={`font-display text-5xl leading-tight md:text-6xl ${dark ? 'text-white' : 'text-charcoal'}`}>{title}</h1>
      {subhead ? <p className={`mt-6 max-w-3xl text-base leading-7 md:text-lg ${dark ? 'text-white/60' : 'text-graphite'}`}>{align === 'center' ? <span className="mx-auto block">{subhead}</span> : subhead}</p> : null}
    </header>
  )
}
