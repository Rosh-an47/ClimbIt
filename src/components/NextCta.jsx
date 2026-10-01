import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NextCta({ to, label }) {
  if (!to) return null
  return (
    <section className="border-t border-stone bg-sand/60 py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Next chapter</p>
        <Link
          to={to}
          className="inline-flex items-center gap-2 font-display text-2xl text-charcoal transition hover:text-alpenglow md:text-3xl"
        >
          {label} <ArrowRight className="h-6 w-6" aria-hidden />
        </Link>
      </div>
    </section>
  )
}
