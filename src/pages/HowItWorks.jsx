import { lazy, Suspense } from 'react'
import { ArrowRight, Cpu, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import NextCta from '../components/NextCta'
import PageTransition from '../components/PageTransition'
import Loader from '../components/Loader'
import AgenticFlow from '../components/AgenticFlow'
import DataFlywheel from '../components/DataFlywheel'
import ActivityEquation from '../components/ActivityEquation'
import { baselines, economicValue } from '../lib/sections'

const RiskEngineScene = lazy(() => import('../components/RiskEngineScene'))

export default function HowItWorks() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-[#0e211d] px-6 pb-20 pt-36 text-white md:px-10 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(240,165,58,.18),transparent_24%),linear-gradient(135deg,#0b1c18,#123c34)]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading tone="dark" label="06 · How it works" title="How the AI thinks." subhead="Not one threshold. Not one reading. A personalised risk score, updated continuously, on-device and offline." />
          <div className="rounded-2xl border border-white/10 bg-white/[.05] p-5 lg:w-[300px]"><div className="flex items-center gap-3"><Cpu className="h-5 w-5 text-[#C6A15B]" /><p className="font-mono text-[10px] uppercase tracking-[.2em] text-white/50">Edge architecture</p></div><p className="mt-3 text-sm leading-6 text-white/60">Sense → contextualise → score → surface exception → human decision.</p></div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading label="07 · Architecture" title="Four baselines. One risk engine." subhead="Personal, peer, cohort and historical signals are fused instead of treating one universal threshold as truth." />
          <div className="mt-12"><Suspense fallback={<Loader />}><RiskEngineScene /></Suspense></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {baselines.map((b, i) => <article key={b.title} className="card-lift rounded-[1.35rem] border border-stone bg-warm-white p-6"><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-sunrise">0{i + 1}</span><span className="rounded-full bg-[#dceae4] px-2 py-1 font-mono text-[8px] text-deep-pine">baseline</span></div><h3 className="mt-5 font-display text-2xl text-charcoal">{b.title}</h3><p className="mt-2 font-mono text-xs text-deep-pine">{b.example}</p><p className="mt-4 text-sm leading-6 text-graphite">{b.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#E2E9E4] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading label="08 · Context" title="Why the same reading can mean different things." subhead="The engine does not interpret physiology without the situation around it." />
          <div className="mt-10"><ActivityEquation /></div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading label="09 · Agentic AI" title="Useful autonomy. Human control." subhead="Climbit can gather context, request a re-check, surface an exception, recommend an existing protocol and prepare an emergency packet. The guide still decides." />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_.75fr]">
            <AgenticFlow />
            <div className="h-fit rounded-[1.75rem] bg-[#0e211d] p-7 text-white shadow-[0_30px_70px_-45px_rgba(14,33,29,.8)] md:p-9 lg:sticky lg:top-28">
              <ShieldCheck className="h-7 w-7 text-[#C6A15B]" />
              <p className="mt-6 font-mono text-[9px] uppercase tracking-[.2em] text-white/40">Human loop</p>
              <p className="mt-3 font-display text-3xl leading-tight">The model can be fast without becoming the authority.</p>
              <p className="mt-5 text-sm leading-6 text-white/55">Yellow and orange remain guide-led. Red adds the agency to the loop and travels with an emergency packet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ef] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading label="10 · Value" title="Who gets the hours back." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {economicValue.map((col, i) => <article key={col.title} className="card-lift rounded-[1.5rem] border border-stone bg-warm-white p-7"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-sunrise">0{i + 1}</p><h3 className="mt-5 font-display text-2xl text-charcoal">{col.title}</h3><p className="mt-4 text-sm leading-6 text-graphite">{col.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <SectionHeading align="center" label="11 · The moat" title="A flywheel the mountain turns." subhead="More treks create better labelled context. Better context creates fewer false alarms. Fewer false alarms create trust." />
          <div className="mt-12"><DataFlywheel /></div>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-6 text-muted">The product compounds through field workflow, longitudinal baselines, agency relationships and validated model updates — not through a flashy dashboard alone.</p>
        </div>
      </section>

      <NextCta to="/business" label="The business" />
    </PageTransition>
  )
}
