import { useState } from 'react'
import { CalendarCheck, Radio, Activity, AlertTriangle, ShieldCheck, ChevronRight } from 'lucide-react'
import { journeyStages } from '../lib/sections'

const ICONS = [CalendarCheck, Radio, Activity, AlertTriangle, ShieldCheck, ChevronRight]

export default function JourneyTimeline() {
  const [open, setOpen] = useState(2)
  const active = journeyStages[open]
  const Icon = ICONS[open] || Activity

  return (
    <div className="journey-console grid gap-4 lg:grid-cols-[minmax(300px,.72fr)_minmax(0,1.28fr)] lg:items-start">
      <div className="journey-stage-list grid gap-2">
        {journeyStages.map((stage, i) => {
          const StageIcon = ICONS[i] || Activity
          const selected = i === open
          return (
            <button
              key={stage.title}
              type="button"
              onClick={() => setOpen(i)}
              className={`journey-stage group flex min-h-[82px] w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${selected ? 'border-deep-pine bg-deep-pine text-white shadow-[0_18px_45px_-30px_rgba(18,60,52,.8)]' : 'border-stone bg-warm-white text-charcoal hover:-translate-y-0.5 hover:border-deep-pine/35'}`}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${selected ? 'bg-white/10 text-white' : 'bg-[#dceae4] text-deep-pine'}`}>
                <StageIcon className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block font-mono text-[8px] uppercase tracking-[.18em] ${selected ? 'text-white/45' : 'text-muted'}`}>Moment {String(i + 1).padStart(2, '0')}</span>
                <span className="mt-1 block font-display text-lg leading-tight">{stage.title}</span>
              </span>
              <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${selected ? 'translate-x-0.5 text-white/45' : 'text-muted group-hover:translate-x-0.5'}`} />
            </button>
          )
        })}
      </div>

      <article className="journey-detail relative overflow-hidden rounded-[1.75rem] bg-[#0e211d] text-white shadow-[0_28px_70px_-42px_rgba(14,33,29,.9)]">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#2b7b67]/25 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[20%] h-56 w-56 rounded-full bg-[#c6a15b]/10 blur-3xl" />
        <div className="relative p-7 md:p-9">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[.22em] text-[#c6a15b]">Moment {String(open + 1).padStart(2, '0')} · field state</p>
              <h3 className="mt-3 max-w-3xl font-display text-4xl leading-[.98] md:text-5xl">{active.title}</h3>
            </div>
            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[.05] md:flex">
              <Icon className="h-5 w-5 text-[#c6a15b]" />
            </span>
          </div>

          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/65">{active.body}</p>

          <div className="mt-7 grid gap-3 md:grid-cols-[1.35fr_.65fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[.055] p-5">
              <p className="font-mono text-[8px] uppercase tracking-[.2em] text-white/35">System detail</p>
              <p className="mt-3 text-sm leading-6 text-white/75">{active.data}</p>
            </div>
            <div className="rounded-2xl border border-[#c6a15b]/20 bg-[#c6a15b]/[.07] p-5">
              <p className="font-mono text-[8px] uppercase tracking-[.2em] text-[#c6a15b]/65">Authority</p>
              <p className="mt-3 text-sm leading-6 text-white/75">Guide verifies. Guide decides.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[8px] uppercase tracking-[.18em] text-white/30">
            <span className="rounded-full border border-white/10 px-3 py-1.5">local inference</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">human in loop</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">context travels</span>
          </div>
        </div>
      </article>
    </div>
  )
}
