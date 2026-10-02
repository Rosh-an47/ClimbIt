import { useEffect, useState } from 'react'
import { Activity, Moon, Footprints, ArrowRight } from 'lucide-react'

const STATES = [
  { icon: Footprints, label: 'sprint', meaning: '89% can be expected under exertion' },
  { icon: Activity, label: 'rest', meaning: '89% is a meaningful deviation' },
  { icon: Moon, label: 'sleep', meaning: '89% can trigger a deeper review' },
]

export default function ActivityEquation() {
  const [index, setIndex] = useState(0)
  const state = STATES[index]
  const Icon = state.icon

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % STATES.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-stone bg-warm-white shadow-sm">
      <div className="grid md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <div className="p-7 md:p-9"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-muted">Input</p><p className="mt-4 font-mono text-3xl text-charcoal">89% SpO₂</p><p className="mt-2 text-sm leading-6 text-graphite">A number alone is not a decision.</p></div>
        <div className="flex items-center justify-center border-y border-stone bg-[#f5ecdc] px-6 py-5 md:border-x md:border-y-0"><ArrowRight className="h-5 w-5 text-sunrise" /></div>
        <div className="p-7 md:p-9"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-muted">Activity context</p><div className="mt-4 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dceae4] text-deep-pine"><Icon className="h-4 w-4" /></span><span className="font-mono text-xl text-charcoal">{state.label}</span></div><p className="mt-3 text-sm leading-6 text-graphite">{state.meaning}.</p></div>
      </div>
      <div className="border-t border-stone bg-[#0e211d] px-7 py-5 text-center text-white md:px-9"><p className="font-display text-2xl md:text-3xl">Same number. Different meaning.</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[.2em] text-white/40">Context is part of the score</p></div>
      <div className="flex justify-center gap-2 py-4">{STATES.map((item, i) => <button key={item.label} type="button" onClick={() => setIndex(i)} className={`h-1.5 rounded-full transition-all ${i === index ? 'w-10 bg-sunrise' : 'w-5 bg-stone'}`} aria-label={`Show ${item.label} context`} />)}</div>
    </div>
  )
}
