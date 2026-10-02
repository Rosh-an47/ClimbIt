import { useState } from 'react'
import { BrainCircuit, Check, ChevronRight, CircleX, FileText, Lightbulb, MessageSquareText, Sparkles, Wrench } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import NextCta from '../components/NextCta'

const evolution = [
  ['01', 'Idea', 'Band that detects altitude sickness.'],
  ['02', 'Problem depth', 'SpO₂ alone is insufficient; context matters.'],
  ['03', 'Detection window', '2–6 hrs pre-symptomatic, trend-based, not diagnosis.'],
  ['04', 'Product reframe', 'Group safety system, not a wearable.'],
  ['05', 'Scoring design', 'Four baselines, staged by trek day, peer-relative.'],
  ['06', 'Gap triage', 'Six product-killers ranked by severity.'],
  ['07', 'Final position', 'B2B2C, edge AI, human-in-the-loop, not diagnostic.'],
]

const reflection = [
  { label: 'Accepted', icon: Check, items: ['Group safety system, not a band — reframed the whole business.', 'Staged baselines by trek day — static weights are indefensible.'] },
  { label: 'Modified', icon: Wrench, items: ['Detection window: “earlier the better” → 2–6 hrs pre-symptomatic.', 'Signal quality: added the cold-finger problem; wrist SpO₂ at −10°C can be unreliable.'] },
  { label: 'Rejected', icon: CircleX, items: ['P2P mesh → hub-and-spoke edge AI for simpler, more reliable operation.', 'Continuous self-training → validated offline updates.', '“AI suggests first aid” → protocols, not prescriptions.'] },
  { label: 'Developed', icon: Sparkles, items: ['Emergency packet: summary travels with a red alert.', 'Two-tier human loop: guide handles yellow/orange; guide + agency handle red.'] },
]

export default function Appendix() {
  const [active, setActive] = useState(0)
  const current = reflection[active]
  const CurrentIcon = current.icon

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-[#0e211d] px-6 pb-20 pt-36 text-white md:px-10 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(240,165,58,.18),transparent_24%),linear-gradient(135deg,#0b1c18,#123c34)]" />
        <div className="relative mx-auto max-w-[1500px]"><p className="font-mono text-[10px] uppercase tracking-[.25em] text-[#C6A15B]">Appendix</p><h1 className="mt-5 max-w-4xl font-display text-6xl leading-[.95] md:text-8xl">How Climbit<br /><span className="text-[#C6A15B]">became Climbit.</span></h1><p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">A compact record of the product evolution, AI use and the decisions that survived — or did not survive — scrutiny.</p></div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]"><SectionHeading label="A · Project development" title="Thought evolution." subhead="The idea moved from a sensor to a group operating system. Each step removed a weaker assumption." /><div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{evolution.map(([num, title, body]) => <article key={num} className="card-lift rounded-[1.35rem] border border-stone bg-warm-white p-6"><p className="font-mono text-[9px] text-sunrise">{num}</p><h3 className="mt-5 font-display text-2xl text-charcoal">{title}</h3><p className="mt-3 text-sm leading-6 text-graphite">{body}</p></article>)}</div></div>
      </section>

      <section className="bg-[#edf3ef] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]"><SectionHeading label="B · AI use" title="AI was a thinking partner, not the author of the decision." subhead="DeepSeek helped explore and stress-test the problem. ChatGPT helped draft and structure. GPT image generation produced visuals. Cursor supported the website code. Final decisions were accepted, modified or rejected by me." />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_.8fr]">
            <div className="rounded-[1.5rem] border border-stone bg-warm-white p-7"><div className="flex items-center gap-3"><BrainCircuit className="h-5 w-5 text-deep-pine" /><p className="font-mono text-[9px] uppercase tracking-[.2em] text-muted">AI roles</p></div><div className="mt-7 grid gap-3 sm:grid-cols-2">{[['DeepSeek','problem exploration · detection window · product reframe · gap triage'],['ChatGPT','drafting · structuring'],['GPT image generation','website visuals'],['Cursor','website implementation']].map(([a,b]) => <div key={a} className="rounded-xl border border-stone bg-cream p-4"><p className="font-display text-xl text-charcoal">{a}</p><p className="mt-2 text-sm leading-6 text-graphite">{b}</p></div>)}</div></div>
            <div className="rounded-[1.5rem] bg-[#0e211d] p-7 text-white"><MessageSquareText className="h-5 w-5 text-[#C6A15B]" /><p className="mt-5 font-mono text-[9px] uppercase tracking-[.2em] text-white/40">Transcripts</p><a className="mt-5 flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/75 hover:text-[#C6A15B]" href="https://chat.deepseek.com/share/8zp7p89g1o9e9mbs83" target="_blank" rel="noreferrer">Chat 1 · problem → reframe <ChevronRight className="h-4 w-4" /></a><a className="flex items-center justify-between py-4 text-sm text-white/75 hover:text-[#C6A15B]" href="https://chatgpt.com/share/6abf4e44-186c-83ee-9ef1-1eeb22633a49" target="_blank" rel="noreferrer">Chat 2 · visuals → design <ChevronRight className="h-4 w-4" /></a><div className="mt-5 rounded-xl border border-white/10 bg-white/[.04] p-4"><p className="font-mono text-[8px] uppercase tracking-[.18em] text-white/35">Purpose</p><p className="mt-2 text-sm leading-6 text-white/55">AI was used to surface gaps, challenge framing and structure reasoning. Every product decision remained mine.</p></div></div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]"><SectionHeading label="C · Reflection" title="The hardest decision was not technical." subhead="It was deciding how much autonomy the system should have when connectivity disappears and a human guide remains responsible." /><div className="mt-12 rounded-[1.75rem] border border-stone bg-warm-white p-7 md:p-9"><div className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-stone bg-cream p-6"><p className="font-mono text-[9px] text-sunrise">A</p><p className="mt-3 font-display text-2xl text-charcoal">Full human control</p><p className="mt-2 text-sm text-graphite">Safe, but slower.</p></div><div className="rounded-2xl border-2 border-sunrise bg-[#EEF2EC] p-6"><p className="font-mono text-[9px] text-sunrise">B · CHOSEN</p><p className="mt-3 font-display text-2xl text-charcoal">AI verifies. Guide decides.</p><p className="mt-2 text-sm text-graphite">Fast response while liability and judgement stay human.</p></div><div className="rounded-2xl border border-stone bg-cream p-6"><p className="font-mono text-[9px] text-sunrise">C</p><p className="mt-3 font-display text-2xl text-charcoal">AI acts alone</p><p className="mt-2 text-sm text-graphite">Fastest, but shifts operational authority to the model.</p></div></div><div className="mt-6 flex items-start gap-4 rounded-2xl bg-[#0e211d] p-6 text-white"><Lightbulb className="mt-1 h-5 w-5 shrink-0 text-[#C6A15B]" /><p className="text-sm leading-6 text-white/65">That choice led to the emergency packet: a red alert carries the relevant context so the guide can act quickly without the system pretending to practise medicine.</p></div></div>

          <div className="mt-12"><div className="flex flex-wrap gap-2">{reflection.map((item, i) => <button key={item.label} type="button" onClick={() => setActive(i)} className={`rounded-full px-4 py-2 text-xs font-medium transition ${i === active ? 'bg-deep-pine text-white' : 'bg-sand text-graphite hover:bg-stone'}`}>{item.label}</button>)}</div><div className="mt-6 rounded-[1.5rem] border border-stone bg-[#edf3ef] p-7 md:p-9"><div className="flex items-start gap-5"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-white text-deep-pine"><CurrentIcon className="h-5 w-5" /></span><div><p className="font-mono text-[9px] uppercase tracking-[.2em] text-sunrise">{current.label}</p><ul className="mt-4 space-y-4">{current.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-graphite"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sunrise" />{item}</li>)}</ul></div></div></div></div>
        </div>
      </section>

      <section className="bg-[#0e211d] px-6 py-20 text-white md:px-10 md:py-24"><div className="mx-auto max-w-4xl text-center"><FileText className="mx-auto h-7 w-7 text-[#C6A15B]" /><p className="mt-5 font-display text-4xl leading-tight md:text-5xl">The final product is the result of the rejected ideas too.</p><p className="mt-5 text-sm leading-6 text-white/50">The constraint was never “make the AI smarter.” It was “make the field decision clearer, safer and more defensible.”</p></div></section>

      <NextCta to="/" label="Back to the overview" />
    </PageTransition>
  )
}
