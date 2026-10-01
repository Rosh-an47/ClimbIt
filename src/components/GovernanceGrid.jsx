import { useEffect, useRef } from 'react'
import { Shield, Signal, BellOff, GitBranch, Scale, Stethoscope } from 'lucide-react'
import { governance } from '../lib/sections'
import { revealElements } from '../lib/gsapSetup'

const ICONS = [Shield, Signal, BellOff, GitBranch, Scale, Stethoscope]

export default function GovernanceGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const tween = revealElements(ref.current?.querySelectorAll('[data-card]'))
    return () => tween?.kill?.()
  }, [])

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {governance.map((item, i) => {
        const Icon = ICONS[i]
        return (
          <article
            key={item.title}
            data-card
            className="card-lift rounded-2xl border border-stone bg-warm-white p-8 shadow-sm"
          >
            <Icon className="h-6 w-6 text-deep-pine" aria-hidden />
            <h3 className="mt-4 font-display text-2xl text-charcoal">{item.title}</h3>
            <p className="mt-3 text-base text-graphite">{item.body}</p>
          </article>
        )
      })}
    </div>
  )
}
