import { lazy, Suspense, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowRight, Check, ChevronDown, CircleDot, ShieldCheck, WifiOff } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import NextCta from '../components/NextCta'
import Loader from '../components/Loader'
import PageTransition from '../components/PageTransition'
import { homeWhyCards, problemStats, blacQuadrants, whyNow } from '../lib/sections'
import { revealElements } from '../lib/gsapSetup'

const HeroScene = lazy(() => import('../components/HeroScene'))

export default function Home() {
  const cardsRef = useRef(null)
  useEffect(() => {
    const tween = revealElements(cardsRef.current?.querySelectorAll('[data-card]'))
    return () => tween?.kill?.()
  }, [])

  return (
    <PageTransition>
      <section className="relative min-h-[92vh] overflow-hidden bg-[#0e211d] pt-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(240,165,58,.20),transparent_24%),linear-gradient(135deg,#0b1c18,#123c34_54%,#0b211c)]" />
        <div className="absolute -left-24 top-36 h-72 w-72 rounded-full bg-[#1c6a59]/25 glow-orb" />
        <div className="absolute right-0 top-0 h-full w-[48%] opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_left,black,transparent)]" />

        <div className="relative mx-auto grid min-h-[calc(92vh-6rem)] max-w-[1500px] items-center gap-12 px-6 py-12 md:px-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[.22em] text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C6A15B]" /> Edge AI · high-altitude safety
            </div>
            <h1 className="font-display text-6xl leading-[.91] tracking-[-.04em] md:text-8xl lg:text-[7.2rem]">
              The mountain<br /><span className="text-[#C6A15B]">doesn&apos;t warn you.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              Climbit is an edge-AI wearable and group safety platform that detects altitude-risk patterns before symptoms become emergencies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#problem" className="inline-flex items-center gap-2 rounded-full bg-[#C6A15B] px-6 py-3 text-sm font-semibold text-[#10241f] transition hover:-translate-y-1">See the problem <ArrowDownRight className="h-4 w-4" /></a>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-white/[.1]">How it works <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[.18em] text-white/35">
              <span>30 trekkers / guide</span><span>0s cloud dependency</span><span>100% offline inference</span>
            </div>
          </div>
          <Suspense fallback={<Loader />}><HeroScene /></Suspense>
        </div>

        <a href="#story" className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[9px] uppercase tracking-[.25em] text-white/40"><ChevronDown className="h-4 w-4" /> Story continues</a>
      </section>

      <section id="story" className="relative bg-[#10251f]">
        <ImagePlaceholder id="image-1" width={1920} height={1080} className="w-full" fillHeight="68vh" caption="4,000 metres. A trekker sits. The guide is 200 metres behind, helping someone else." alt="A tired trekker sits on a Himalayan trail while a guide helps another trekker in the distance" />
        <div className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-black/35 px-3 py-2 font-mono text-[9px] uppercase tracking-[.18em] text-white/65 backdrop-blur">The problem is distance.</div>
      </section>

      <section id="problem" className="relative overflow-hidden bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="absolute right-[-12%] top-20 h-80 w-80 rounded-full bg-[#d7e5df] glow-orb" />
        <div className="relative mx-auto max-w-[1500px]">
          <SectionHeading label="01 · The problem" title="Altitude doesn&apos;t announce itself." subhead="Early altitude illness can look like ordinary fatigue. The guide has the judgement — but not always the visibility." />

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <article className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#0e211d] text-white shadow-[0_35px_90px_-50px_rgba(14,33,29,.7)]">
              <img src="/images/image-2.jpg" alt="Trekking group spread along a Himalayan trail" className="absolute inset-0 h-full w-full object-cover opacity-45" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081512] via-[#081512]/55 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-7 md:p-10">
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.2em] text-white/45"><span>The impossible task</span><span>Field reality</span></div>
                <div>
                  <h2 className="max-w-xl font-display text-4xl leading-tight md:text-6xl">One guide. Thirty people. Hundreds of metres of trail.</h2>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 md:text-base">A guide can read faces, gait and conversation. But a stretched group creates blind spots exactly when physiology starts changing.</p>
                  <div className="mt-8 grid grid-cols-3 gap-2">
                    <DarkStat value="30+" label="trekkers / guide" />
                    <DarkStat value="200m" label="distance" />
                    <DarkStat value="0s" label="cloud delay" />
                  </div>
                </div>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[2rem] border border-stone bg-warm-white p-7 shadow-sm md:p-10">
              <div>
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.2em] text-sunrise"><CircleDot className="h-3.5 w-3.5" /> The missing layer</div>
                <h2 className="mt-5 font-display text-4xl leading-tight text-charcoal md:text-5xl">Continuous, objective context.</h2>
                <p className="mt-5 text-base leading-7 text-graphite">The gap is not medical knowledge. It is personalised monitoring that understands the person, altitude, activity, group and trajectory — offline.</p>
              </div>
              <div className="mt-10 space-y-3">
                {['Personal baseline', 'Altitude + activity', 'Peer divergence', 'Trajectory over time'].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-stone bg-cream px-4 py-3"><Check className="h-4 w-4 text-deep-pine" /><span className="font-mono text-xs uppercase tracking-widest text-charcoal">{item}</span></div>)}
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#dfece6] p-4"><ShieldCheck className="h-5 w-5 text-deep-pine" /><span className="font-mono text-[10px] uppercase tracking-widest text-deep-pine">Human decides · AI surfaces exceptions</span></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="grid-lines bg-[#edf3ef] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading label="02 · The numbers" title="What the trail already knows." subhead="A few numbers frame the operating environment before Climbit adds another signal." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemStats.map((stat, i) => <article key={stat.label} className="card-lift rounded-[1.5rem] border border-stone bg-warm-white p-7 shadow-sm"><p className="font-mono text-3xl text-charcoal md:text-4xl">{stat.value}</p><p className="mt-3 font-display text-lg text-graphite">{stat.label}</p><p className="mt-5 font-mono text-[9px] uppercase tracking-[.18em] text-muted">Context {String(i + 1).padStart(2, '0')}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading label="03 · Why this is a white space" title="The signal is not the product. The system is." subhead="Climbit sits where the problem is obvious, the data gap is real, the desire for safer treks is growing, and the consequence of missing a change is high." />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {blacQuadrants.map((q) => <article key={q.key} className={`card-lift rounded-[1.5rem] border bg-warm-white p-7 shadow-sm md:p-8 ${q.key === 'critical' ? 'border-sunrise/70' : 'border-stone'}`}><div className="flex items-center justify-between"><p className="font-mono text-[10px] uppercase tracking-[.2em] text-sunrise">{q.title}</p>{q.key === 'critical' ? <span className="rounded-full bg-sunrise px-3 py-1 font-mono text-[8px] uppercase tracking-widest text-charcoal">Intersection</span> : null}</div><p className="mt-5 text-base leading-7 text-graphite md:text-lg">{q.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0e211d] px-6 py-24 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <SectionHeading tone="dark" label="04 · Why now" title="The operating environment is changing." subhead="Wearables got cheap. Edge compute got smaller. Trekking groups did not get any easier to watch." />
            <div className="grid gap-3 sm:grid-cols-3">
              {whyNow.map((col) => <article key={col.title} className="rounded-[1.35rem] border border-white/10 bg-white/[.05] p-6 transition hover:-translate-y-1 hover:bg-white/[.07]"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#C6A15B]">{col.title}</p><p className="mt-4 text-sm leading-6 text-white/60">{col.body}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading label="05 · The thesis" title="Why Climbit exists." />
          <div ref={cardsRef} className="mt-12 grid gap-4 md:grid-cols-3">
            {homeWhyCards.map((card) => <article key={card.title} data-card className="card-lift rounded-[1.5rem] border border-stone bg-warm-white p-7 shadow-sm md:p-8"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-sunrise">{card.title}</p><p className="mt-4 font-display text-2xl leading-tight text-charcoal">{card.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-stone bg-[#e8dfd0] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[.25em] text-sunrise">The thesis</p>
          <p className="mt-5 font-display text-4xl leading-tight text-charcoal md:text-6xl">Climbit gives guides earlier context — without asking the mountain for a signal.</p>
          <div className="mt-8 flex justify-center"><Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-full bg-deep-pine px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1">Enter the system <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <NextCta to="/how-it-works" label="How it works" />
    </PageTransition>
  )
}

function DarkStat({ value, label }) {
  return <div className="rounded-xl border border-white/10 bg-white/[.06] p-3"><p className="font-mono text-lg text-white">{value}</p><p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white/35">{label}</p></div>
}
