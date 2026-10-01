import { lazy, Suspense } from 'react'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import NextCta from '../components/NextCta'
import PageTransition from '../components/PageTransition'
import Loader from '../components/Loader'
import { blacQuadrants, problemStats, whyNow } from '../lib/sections'

const AltitudeMap = lazy(() => import('../components/AltitudeMap'))

export default function Problem() {
  return (
    <PageTransition>
      <section className="flex min-h-[60vh] items-end bg-gradient-to-b from-[#f3e4c8] to-cream px-6 pb-16 pt-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="The problem"
            title="Altitude doesn't announce itself."
            subhead="Three thousand trekkers a year develop altitude illness on ABC and EBC routes alone. The early signs are subtle, subjective, and easy to miss."
          />
        </div>
      </section>

      <ImagePlaceholder
        id="image-2"
        width={1920}
        height={1080}
        className="w-full"
        caption="A guide's job is to lead. Not to guess."
        alt="A guide looks back at a trekking group spread along a Himalayan trail at dawn"
      />

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="The numbers" title="What the trail already knows." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problemStats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-stone bg-warm-white p-8 shadow-sm">
                <p className="font-mono text-3xl text-charcoal md:text-4xl">{stat.value}</p>
                <p className="mt-3 font-display text-lg text-graphite">{stat.label}</p>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <Suspense fallback={<Loader />}>
              <AltitudeMap />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="bg-sand/50 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="B-L-A-C"
            title="Why this is a white space."
            subhead="The problem is blatant. The data gap is latent. The desire for safer treks is aspirational. The emergencies are critical. Climbit sits where those four meet."
          />
          <div className="relative mt-14 grid gap-6 md:grid-cols-2">
            {blacQuadrants.map((q) => (
              <article
                key={q.key}
                className={`relative rounded-2xl border bg-warm-white p-8 shadow-sm ${
                  q.key === 'critical' ? 'border-sunrise' : 'border-stone'
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-sunrise">{q.title}</p>
                <p className="mt-4 text-base text-graphite md:text-lg">{q.body}</p>
                {q.key === 'critical' ? (
                  <span className="absolute -right-3 -top-3 rounded-full bg-sunrise px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-charcoal shadow-sm">
                    White space
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Market opportunity" title="Why now." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyNow.map((col) => (
              <article key={col.title} className="card-lift rounded-2xl border border-stone bg-warm-white p-8 shadow-sm">
                <h3 className="font-display text-2xl text-charcoal">{col.title}</h3>
                <p className="mt-4 text-base text-graphite">{col.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <blockquote className="mx-auto max-w-4xl text-center">
          <p className="font-display text-4xl leading-tight text-charcoal md:text-5xl">
            “A problem well stated is a problem half-solved.”
          </p>
          <footer className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
            Charles Kettering · We spent 55 minutes on the problem, 5 on the solution.
          </footer>
        </blockquote>
      </section>

      <NextCta to="/how-it-works" label="How it works" />
    </PageTransition>
  )
}
