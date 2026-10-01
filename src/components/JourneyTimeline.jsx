import { useEffect, useRef } from 'react'
import {
  CalendarCheck,
  Watch,
  Sunrise,
  Radio,
  AlertTriangle,
  UserCheck,
  Siren,
  CloudUpload,
  RefreshCw,
} from 'lucide-react'
import { journeyStages } from '../lib/sections'
import { revealElements, setupGsap } from '../lib/gsapSetup'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ICONS = [CalendarCheck, Watch, Sunrise, Radio, AlertTriangle, UserCheck, Siren, CloudUpload, RefreshCw]

export default function JourneyTimeline() {
  const ref = useRef(null)

  useEffect(() => {
    setupGsap()
    const steps = ref.current?.querySelectorAll('[data-step]')
    const tween = revealElements(steps)
    steps?.forEach((el, i) => {
      gsap.fromTo(
        el.querySelector('[data-dot]'),
        { scale: 0.6, backgroundColor: '#E2D9C9' },
        {
          scale: 1,
          backgroundColor: '#E8A33D',
          scrollTrigger: { trigger: el, start: 'top 75%' },
          duration: 0.4,
          delay: i * 0.02,
        },
      )
    })
    return () => {
      tween?.kill?.()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <ol ref={ref} className="relative mx-auto max-w-3xl border-l border-stone pl-8 md:pl-12">
      {journeyStages.map((stage, i) => {
        const Icon = ICONS[i]
        return (
          <li key={stage.title} data-step className="relative mb-12 last:mb-0">
            <span
              data-dot
              className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-stone bg-sand text-charcoal md:-left-[57px]"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Stage {i + 1}</p>
            <h3 className="mt-1 font-display text-2xl text-charcoal md:text-3xl">{stage.title}</h3>
            <p className="mt-2 text-base text-graphite md:text-lg">{stage.body}</p>
            <p className="mt-3 font-mono text-sm text-deep-pine">{stage.data}</p>
          </li>
        )
      })}
    </ol>
  )
}
