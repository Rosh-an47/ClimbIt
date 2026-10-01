import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import NextCta from '../components/NextCta'
import PageTransition from '../components/PageTransition'
import JourneyTimeline from '../components/JourneyTimeline'
import GovernanceGrid from '../components/GovernanceGrid'
import { dpdp, riskStates } from '../lib/sections'

export default function Journey() {
  return (
    <PageTransition>
      <section className="flex min-h-[50vh] items-end bg-gradient-to-b from-[#f3e4c8] to-cream px-6 pb-16 pt-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Journey & governance"
            title="From booking to base camp."
            subhead="One trekker. One trek. Nine moments where Climbit changes the outcome."
          />
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <JourneyTimeline />
        </div>
      </section>

      <section className="bg-sand/50 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Risk states" title="Four colours. One human still in charge." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {riskStates.map((state, i) => (
              <article
                key={state.name}
                className="risk-pulse rounded-2xl bg-warm-white p-8 shadow-sm"
                style={{ border: `2px solid ${state.color}`, animationDelay: `${i * 0.4}s` }}
              >
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: state.color }}>
                  {state.name}
                </p>
                <h3 className="mt-2 font-display text-2xl text-charcoal">{state.title}</h3>
                <p className="mt-4 text-base text-graphite">{state.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Guardrails"
            title="Governance before scale."
            subhead="Human-in-the-loop is not a slogan. It is the product: the guide makes every operational decision."
          />
          <div className="mt-12">
            <GovernanceGrid />
          </div>
        </div>
      </section>

      <section className="bg-sand/50 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="India DPDP Act"
            title="Regional compliance, designed in."
            subhead="Climbit is designed as a wellness and risk-support product, not a medical device. This reduces regulatory burden while maintaining field safety."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dpdp.map((col) => (
              <article key={col.title} className="rounded-2xl border border-stone bg-warm-white p-6 shadow-sm">
                <h3 className="font-display text-xl text-charcoal">{col.title}</h3>
                <p className="mt-3 text-sm text-graphite md:text-base">{col.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center md:px-12 md:py-32">
        <p className="font-display text-4xl text-charcoal md:text-6xl">Know the risk before it becomes an emergency.</p>
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
          Climbit — Edge Intelligence for High-Altitude Trekking
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex rounded-full bg-sunrise px-6 py-3 text-sm font-medium text-charcoal transition hover:-translate-y-0.5"
        >
          Request a Demo →
        </Link>
      </section>

      <NextCta to="/contact" label="Request a demo" />
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .risk-pulse { animation: pulse-soft 3.6s ease-in-out infinite; }
        }
        @keyframes pulse-soft {
          0%, 100% { box-shadow: 0 0 0 0 rgb(232 163 61 / 0); }
          50% { box-shadow: 0 10px 30px -18px rgb(30 27 24 / 0.35); }
        }
      `}</style>
    </PageTransition>
  )
}
