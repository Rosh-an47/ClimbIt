import { useState } from 'react'
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Database, ShieldCheck, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import NextCta from '../components/NextCta'
import PageTransition from '../components/PageTransition'
import PersonaCard from '../components/PersonaCard'
import PorterForces from '../components/PorterForces'
import { b2b2c, moats } from '../lib/sections'

const COMMERCIAL_STEPS = [
  { title: 'Agency subscription', body: 'The agency owns the safety layer and bundles it into the trek package.', icon: BriefcaseBusiness },
  { title: 'Fleet + per-trek rental', body: 'Wearables scale with group size instead of forcing every operator into a huge upfront fleet.', icon: Users },
  { title: 'Seasonal renewal', body: 'The value compounds as baselines, operating history and safety workflow become part of the agency system.', icon: Database },
]

export default function Business() {
  const [active, setActive] = useState(0)
  const ActiveIcon = COMMERCIAL_STEPS[active].icon

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-[#0e211d] px-6 pb-20 pt-36 text-white md:px-10 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(240,165,58,.17),transparent_24%),linear-gradient(135deg,#0b1c18,#123c34)]" />
        <div className="relative mx-auto max-w-[1500px]"><p className="font-mono text-[10px] uppercase tracking-[.25em] text-[#C6A15B]">12 · Business</p><h1 className="mt-5 max-w-4xl font-display text-6xl leading-[.95] tracking-[-.035em] md:text-8xl">Built for the agency.<br /><span className="text-[#C6A15B]">Worn by the group.</span></h1><p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">Climbit sells to trekking agencies, not individual trekkers. The agency gets a field operating system; the trekker gets safer context.</p></div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading label="13 · B2B2C" title="Who buys. Who wears. Who benefits." />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {b2b2c.map((col, i) => <article key={col.title} className="relative rounded-[1.5rem] border border-stone bg-warm-white p-7 shadow-sm"><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[.2em] text-sunrise">Layer {i + 1}</span>{i < 2 ? <ArrowRight className="hidden h-4 w-4 text-sunrise lg:block" /> : null}</div><h3 className="mt-5 font-display text-2xl text-charcoal">{col.title}</h3><p className="mt-5 font-mono text-[9px] uppercase tracking-[.16em] text-muted">Gives</p><p className="mt-2 text-sm leading-6 text-graphite">{col.gives}</p><p className="mt-5 font-mono text-[9px] uppercase tracking-[.16em] text-muted">Gets</p><p className="mt-2 text-sm leading-6 text-graphite">{col.gets}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ef] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading label="14 · Commercial model" title="Simple enough to buy. Sticky enough to renew." subhead="$2,000–$4,000 per agency per season, plus per-trek rental. The point is not selling hardware; it is embedding a safer operating workflow." />
          <div className="mt-12 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
            <div className="rounded-[1.75rem] bg-[#0e211d] p-7 text-white md:p-9"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-white/40">Season economics</p><p className="mt-5 font-mono text-5xl text-[#C6A15B]">$2k–$4k</p><p className="mt-2 text-sm text-white/55">agency / season</p><div className="mt-9 space-y-3">{['Fleet access', 'Guide Hub', 'Risk workflow', 'Validated model updates'].map((item) => <div key={item} className="flex items-center gap-3 border-t border-white/10 pt-3 text-sm text-white/70"><CheckCircle2 className="h-4 w-4 text-[#C6A15B]" />{item}</div>)}</div></div>
            <div className="rounded-[1.75rem] border border-stone bg-warm-white p-7 md:p-9">
              <div className="flex flex-wrap gap-2">{COMMERCIAL_STEPS.map((step, i) => <button key={step.title} type="button" onClick={() => setActive(i)} className={`rounded-full px-4 py-2 text-xs font-medium transition ${i === active ? 'bg-deep-pine text-white' : 'bg-cream text-graphite hover:bg-sand'}`}>0{i + 1} · {step.title}</button>)}</div>
              <div className="mt-12 flex min-h-[190px] items-center gap-6"><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#dceae4] text-deep-pine"><ActiveIcon className="h-7 w-7" /></div><div><p className="font-mono text-[9px] uppercase tracking-[.2em] text-sunrise">Step {active + 1}</p><h3 className="mt-2 font-display text-3xl text-charcoal">{COMMERCIAL_STEPS[active].title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-graphite">{COMMERCIAL_STEPS[active].body}</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]"><SectionHeading label="15 · Persona" title="Pemba holds the season in his hands." subhead="Senior guides are the economic buyer's operator. If Pemba trusts the hub, the agency renews." /><div className="mt-12"><PersonaCard /></div></div>
      </section>

      <section className="bg-[#E2E9E4] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]"><SectionHeading label="16 · Competitive landscape" title="Where Climbit actually differentiates." subhead="The point is not to beat every wearable. It is to solve the group-level operating problem they leave untouched." /><div className="mt-12"><PorterForces /></div></div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]"><SectionHeading label="17 · Defensibility" title="Four moats that compound." /><div className="mt-12 grid gap-4 md:grid-cols-2">{moats.map((m, i) => <article key={m.title} className="card-lift rounded-[1.5rem] border border-stone bg-warm-white p-7 md:p-8"><div className="flex items-center gap-3"><span className="font-mono text-[9px] text-sunrise">0{i + 1}</span><h3 className="font-display text-2xl text-charcoal">{m.title}</h3></div><p className="mt-4 text-sm leading-6 text-graphite">{m.body}</p></article>)}</div></div>
      </section>

      <section className="bg-[#0e211d] px-6 py-20 text-white md:px-10 md:py-24"><div className="mx-auto flex max-w-[1100px] flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#C6A15B]" /><p className="font-mono text-[9px] uppercase tracking-[.2em] text-white/40">Business thesis</p></div><p className="mt-4 font-display text-3xl md:text-4xl">The product becomes harder to remove because it becomes part of the way the agency operates.</p></div></div></section>

      <NextCta to="/journey" label="Journey & governance" />
    </PageTransition>
  )
}
