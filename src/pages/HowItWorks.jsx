import { lazy, Suspense } from 'react'
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
      <section className="flex min-h-[50vh] items-end bg-gradient-to-b from-[#f3e4c8] to-cream px-6 pb-16 pt-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="How it works"
            title="How the AI thinks."
            subhead="Not one threshold. Not one reading. A personalised risk score, updated continuously, on-device, offline."
          />
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Architecture"
            title="The Multi-Baseline Risk Engine."
            subhead="Four orbits. One core. Personal, peer, cohort, and historical — fused into a score the guide can act on."
          />
          <Suspense fallback={<Loader />}>
            <RiskEngineScene />
          </Suspense>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {baselines.map((b) => (
              <article key={b.title} className="card-lift rounded-2xl border border-stone bg-warm-white p-8 shadow-sm">
                <h3 className="font-display text-2xl text-charcoal">{b.title}</h3>
                <p className="mt-3 font-mono text-sm text-sunrise">{b.example}</p>
                <p className="mt-4 text-base text-graphite">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/50 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Context" title="The equation." />
          <div className="mt-12">
            <ActivityEquation />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Agentic AI"
            title="What agentic means on the trail."
            subhead="Climbit does not only classify a number. It gathers context, requests a re-check, alerts a human, recommends a protocol, and prepares an emergency packet — then waits for connectivity to learn."
          />
          <div className="mt-12">
            <AgenticFlow />
          </div>
        </div>
      </section>

      <section className="bg-sand/50 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Value" title="Who captures the hours." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {economicValue.map((col) => (
              <article key={col.title} className="rounded-2xl border border-stone bg-warm-white p-8 shadow-sm">
                <h3 className="font-display text-2xl text-charcoal">{col.title}</h3>
                <p className="mt-4 text-base text-graphite">{col.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="The moat"
            title="A flywheel the mountain turns."
            subhead="Switching costs are high. Climbit integrates with booking, safety protocols, and insurance."
          />
          <div className="mt-16">
            <DataFlywheel />
          </div>
        </div>
      </section>

      <NextCta to="/business" label="The business" />
    </PageTransition>
  )
}
