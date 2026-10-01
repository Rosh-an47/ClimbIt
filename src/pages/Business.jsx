import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import NextCta from '../components/NextCta'
import PageTransition from '../components/PageTransition'
import PersonaCard from '../components/PersonaCard'
import PorterForces from '../components/PorterForces'
import { b2b2c, marketSizing, moats } from '../lib/sections'

export default function Business() {
  return (
    <PageTransition>
      <section className="flex min-h-[50vh] items-end bg-gradient-to-b from-[#f3e4c8] to-cream px-6 pb-16 pt-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Business"
            title="A business built for the mountain."
            subhead="Climbit sells to trekking agencies, not trekkers. Every trek generates data. Every season makes the model sharper."
          />
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="B2B2C" title="Who buys. Who wears. Who wins." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {b2b2c.map((col, i) => (
              <article key={col.title} className="relative rounded-2xl border border-stone bg-warm-white p-8 shadow-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-sunrise">Layer {i + 1}</p>
                <h3 className="mt-2 font-display text-2xl text-charcoal">{col.title}</h3>
                <p className="mt-5 text-sm text-muted">Gives</p>
                <p className="mt-1 text-base text-graphite">{col.gives}</p>
                <p className="mt-5 text-sm text-muted">Gets</p>
                <p className="mt-1 text-base text-graphite">{col.gets}</p>
                {i < 2 ? (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-sunrise lg:block" aria-hidden />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/50 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Persona"
            title="Pemba holds the season in his hands."
            subhead="Senior guides are the economic buyer’s operator. If Pemba trusts the hub, the agency renews."
          />
          <div className="mt-12">
            <PersonaCard />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Porter's Five Forces"
            title="The industry, scored honestly."
            subhead="Rivalry is low because consumer wearables do not run a group. Entrants are slow because data and trust take seasons, not sprints."
          />
          <div className="mt-12">
            <PorterForces />
          </div>
        </div>
      </section>

      <section className="bg-sand/50 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Defensibility" title="Four moats that compound." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {moats.map((m) => (
              <article key={m.title} className="card-lift rounded-2xl border border-stone bg-warm-white p-8 shadow-sm">
                <h3 className="font-display text-2xl text-charcoal">{m.title}</h3>
                <p className="mt-4 text-base text-graphite">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Market sizing" title="TAM, SAM, SOM." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {marketSizing.map((m) => (
              <article key={m.label} className="rounded-2xl border border-stone bg-warm-white p-8 text-center shadow-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{m.label}</p>
                <p className="mt-4 font-mono text-4xl text-charcoal">{m.value}</p>
                <p className="mt-3 font-display text-lg text-graphite">{m.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center font-mono text-sm text-deep-pine">
            $2,000–$4,000 per agency per season — subscription + per-trek rental.
          </p>
        </div>
      </section>

      <NextCta to="/journey" label="Journey & governance" />
    </PageTransition>
  )
}
