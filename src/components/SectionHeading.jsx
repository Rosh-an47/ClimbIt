export default function SectionHeading({ label, title, subhead, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <header className={`max-w-4xl ${alignment}`}>
      {label ? (
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-sunrise">{label}</p>
      ) : null}
      <h1 className="font-display text-5xl leading-tight text-charcoal md:text-6xl">{title}</h1>
      {subhead ? (
        <p className="mt-6 max-w-3xl text-base text-graphite md:text-lg">{align === 'center' ? <span className="mx-auto block">{subhead}</span> : subhead}</p>
      ) : null}
    </header>
  )
}
