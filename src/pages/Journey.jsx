import { useState } from 'react'
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import NextCta from '../components/NextCta'
import PageTransition from '../components/PageTransition'
import JourneyTimeline from '../components/JourneyTimeline'
import GovernanceGrid from '../components/GovernanceGrid'
import { dpdp, riskStates } from '../lib/sections'

export default function Journey() {
  const [risk, setRisk] = useState(1)
  const active = riskStates[risk]

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-[#0e211d] px-6 pb-20 pt-36 text-white md:px-10 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,165,58,.15),transparent_24%),linear-gradient(135deg,#0b1c18,#123c34)]" />
        <div className="relative mx-auto max-w-[1500px]"><p className="font-mono text-[10px] uppercase tracking-[.25em] text-[#C6A15B]">18 · Journey & governance</p><h1 className="mt-5 max-w-4xl font-display text-6xl leading-[.95] md:text-8xl">From booking<br />to <span className="text-[#C6A15B]">base camp.</span></h1><p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">One trekker. One trek. A sequence of operational moments where context becomes action — without giving the model the final word.</p></div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]"><SectionHeading label="19 · The trek" title="Six moments. One continuous safety loop." subhead="Open any moment to see what the system is doing and what evidence travels with it." /><div className="mt-14"><JourneyTimeline /></div></div>
      </section>

      <section className="bg-[#edf3ef] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading label="20 · Risk states" title="Four colours. One human still in charge." subhead="The state changes the operational response — not the authority. Climbit is an early-warning and decision-support layer, not a diagnosis." />
          <div className="mt-12 grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
            <div className="grid gap-2">{riskStates.map((state, i) => <button key={state.name} type="button" onClick={() => setRisk(i)} className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${i === risk ? 'border-[#0e211d] bg-[#0e211d] text-white' : 'border-stone bg-warm-white text-charcoal hover:-translate-y-0.5'}`}><span><span className="font-mono text-[9px] uppercase tracking-[.18em]" style={{ color: i === risk ? state.color : state.color }}>{state.name}</span><span className={`mt-1 block font-display text-xl ${i === risk ? 'text-white' : 'text-charcoal'}`}>{state.title}</span></span><ChevronRight className={`h-5 w-5 ${i === risk ? 'text-white/50' : 'text-muted'}`} /></button>)}</div>
            <div className="rounded-[1.75rem] bg-[#0e211d] p-7 text-white md:p-9"><div className="flex items-center justify-between"><div><p className="font-mono text-[9px] uppercase tracking-[.2em]" style={{ color: active.color }}>{active.name}</p><h3 className="mt-2 font-display text-4xl">{active.title}</h3></div><span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[.07]"><CheckCircle2 className="h-5 w-5" style={{ color: active.color }} /></span></div><p className="mt-7 max-w-2xl text-base leading-7 text-white/65">{active.body}</p><div className="mt-9 grid gap-3 sm:grid-cols-3"><Metric label="Decision" value="Human" /><Metric label="Inference" value="Local" /><Metric label="Protocol" value={active.name === 'RED' ? 'Emergency' : 'Operational'} /></div></div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]"><SectionHeading label="21 · Governance" title="Governance before scale." subhead="Human-in-the-loop is not a disclaimer. It is a product constraint built into the workflow." /><div className="mt-12"><GovernanceGrid /></div></div>
      </section>

      <section className="bg-[#E2E9E4] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]"><SectionHeading label="22 · India DPDP Act" title="Privacy is part of the architecture." subhead="The product is designed around minimum necessary data, explicit purpose and controlled sync — especially when the device is offline." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{dpdp.map((col, i) => <article key={col.title} className="card-lift rounded-[1.35rem] border border-stone bg-warm-white p-6"><p className="font-mono text-[9px] text-sunrise">0{i + 1}</p><h3 className="mt-5 font-display text-xl text-charcoal">{col.title}</h3><p className="mt-3 text-sm leading-6 text-graphite">{col.body}</p></article>)}</div></div>
      </section>

      <section className="bg-[#0e211d] px-6 py-20 text-white md:px-10 md:py-24"><div className="mx-auto max-w-[1000px] text-center"><ShieldCheck className="mx-auto h-8 w-8 text-[#C6A15B]" /><p className="mt-5 font-display text-4xl leading-tight md:text-5xl">The guide owns the decision. Climbit owns the context.</p><p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/50">That separation is what lets the system be fast without pretending to be autonomous medicine.</p></div></section>

      <NextCta to="/appendix" label="Appendix · development & reflection" />
    </PageTransition>
  )
}

function Metric({ label, value }) {
  return <div className="rounded-xl border border-white/10 bg-white/[.05] p-4"><p className="font-mono text-[8px] uppercase tracking-[.18em] text-white/35">{label}</p><p className="mt-2 font-mono text-sm text-white">{value}</p></div>
}
