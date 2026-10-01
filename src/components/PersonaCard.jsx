import { useEffect, useRef } from 'react'
import { pemba } from '../lib/sections'
import { revealElements } from '../lib/gsapSetup'
import ImagePlaceholder from './ImagePlaceholder'

export default function PersonaCard() {
  const ref = useRef(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('[data-reveal]')
    const tween = revealElements(cards)
    return () => tween?.kill?.()
  }, [])

  return (
    <div ref={ref} className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div data-reveal className="overflow-hidden rounded-2xl border border-stone bg-warm-white shadow-sm">
        <ImagePlaceholder
          id="image-3"
          width={800}
          height={800}
          alt="Portrait of Pemba Sherpa, a 38-year-old Nepali trek guide"
        />
      </div>
      <article data-reveal className="rounded-2xl border border-stone bg-warm-white p-8 shadow-sm md:p-10">
        <p className="font-mono text-xs uppercase tracking-widest text-sunrise">Target persona</p>
        <h3 className="mt-3 font-display text-4xl text-charcoal">{pemba.name}</h3>
        <dl className="mt-6 grid gap-3 text-sm md:grid-cols-2">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Age</dt>
            <dd>{pemba.age}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Location</dt>
            <dd>{pemba.location}</dd>
          </div>
          <div className="md:col-span-2">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Role</dt>
            <dd>{pemba.role}</dd>
          </div>
          <div className="md:col-span-2">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Experience</dt>
            <dd>{pemba.experience}</dd>
          </div>
        </dl>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <List title="Pain points" items={pemba.pains} />
          <List title="Goals" items={pemba.goals} />
          <List title="Decision criteria" items={pemba.criteria} />
        </div>
      </article>
    </div>
  )
}

function List({ title, items }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-deep-pine">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-graphite">
        {items.map((item) => (
          <li key={item} className="border-l-2 border-stone pl-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
