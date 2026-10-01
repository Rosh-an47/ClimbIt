import { lazy, Suspense, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import NextCta from '../components/NextCta'
import Loader from '../components/Loader'
import PageTransition from '../components/PageTransition'
import { homeWhyCards } from '../lib/sections'
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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f7ead4] via-cream to-sand pt-24">
        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-8 px-6 py-12 md:px-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-sunrise">
              Edge AI for high-altitude safety
            </p>
            <h1 className="mt-5 font-display text-7xl leading-[0.95] text-charcoal md:text-8xl lg:text-9xl">
              The mountain doesn&apos;t warn you.
            </h1>
            <p className="mt-8 max-w-xl text-base text-graphite md:text-lg">
              Climbit is an edge AI wearable and group safety platform that detects altitude sickness in
              trekkers before symptoms become emergencies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/how-it-works"
                className="rounded-full bg-sunrise px-6 py-3 text-sm font-medium text-charcoal transition hover:-translate-y-0.5 hover:bg-alpenglow hover:text-warm-white"
              >
                See how it works
              </Link>
              <Link
                to="/problem"
                className="rounded-full border border-stone bg-warm-white px-6 py-3 text-sm font-medium text-charcoal transition hover:-translate-y-0.5"
              >
                Watch the story
              </Link>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">
              30 trekkers per guide · 0 seconds delay · 100% offline
            </p>
          </div>
          <Suspense fallback={<Loader />}>
            <HeroScene />
          </Suspense>
        </div>
        <p className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          <ChevronDown className="h-4 w-4" /> Story continues
        </p>
      </section>

      <ImagePlaceholder
        id="image-1"
        width={1920}
        height={1080}
        className="w-full"
        fillHeight="60vh"
        caption="4,000 metres. A trekker sits. The guide is 200 metres behind, helping someone else."
        alt="A tired trekker sits on a Himalayan trail at golden hour while a guide helps someone else in the distance"
      />

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-display text-2xl text-charcoal md:text-3xl">
            Altitude sickness is silent. It doesn&apos;t announce itself.
          </p>
          <p className="text-base text-graphite md:text-lg">
            By the time symptoms are visible — a headache that won&apos;t quit, dizziness, vomiting — the trekker is
            already in trouble.
          </p>
          <p className="text-base text-graphite md:text-lg">
            The gap isn&apos;t medical knowledge. It&apos;s continuous, objective, personalised monitoring in the field.
          </p>
        </div>
      </section>

      <section className="bg-sand/50 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Chapter one" title="Why Climbit exists" />
          <div ref={cardsRef} className="mt-14 grid gap-6 md:grid-cols-3">
            {homeWhyCards.map((card) => (
              <article
                key={card.title}
                data-card
                className="card-lift rounded-2xl border border-stone bg-warm-white p-8 shadow-sm"
              >
                <h3 className="font-display text-2xl text-charcoal">{card.title}</h3>
                <p className="mt-4 text-base text-graphite">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-stone bg-warm-white px-8 py-12 shadow-sm md:flex-row md:items-center md:px-12">
          <p className="font-display text-3xl text-charcoal md:text-4xl">
            Climbit gives guides hours of early warning.
          </p>
          <Link
            to="/how-it-works"
            className="rounded-full bg-sunrise px-6 py-3 text-sm font-medium text-charcoal transition hover:-translate-y-0.5"
          >
            How the AI thinks →
          </Link>
        </div>
      </section>

      <NextCta to="/problem" label="The problem" />
    </PageTransition>
  )
}
