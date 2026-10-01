import { useEffect, useRef } from 'react'
import { porterForces } from '../lib/sections'
import { setupGsap, prefersReducedMotion } from '../lib/gsapSetup'
import gsap from 'gsap'

export default function PorterForces() {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    setupGsap()
    const bars = ref.current?.querySelectorAll('[data-bar]')
    bars?.forEach((bar) => {
      const width = bar.getAttribute('data-width')
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: bar, start: 'top 85%' },
        },
      )
    })
  }, [])

  return (
    <div ref={ref} className="space-y-8">
      {porterForces.map((force) => (
        <article key={force.name} className="rounded-2xl border border-stone bg-warm-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-display text-2xl text-charcoal md:text-3xl">{force.name}</h3>
            <p className="font-mono text-xs uppercase tracking-widest text-sunrise">{force.rating}</p>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-sand">
            <div
              data-bar
              data-width={`${force.intensity}%`}
              className="h-full rounded-full bg-gradient-to-r from-sky to-sunrise"
              style={{ width: `${force.intensity}%` }}
            />
          </div>
          <ul className="mt-5 space-y-2 text-base text-graphite">
            {force.bullets.map((b) => (
              <li key={b} className="pl-4 before:absolute before:ml-[-1rem] before:text-sunrise before:content-['•'] relative">
                {b}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
