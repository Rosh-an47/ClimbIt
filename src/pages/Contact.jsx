import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import PageTransition from '../components/PageTransition'
import { contactNext } from '../lib/sections'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageTransition>
      <section className="flex min-h-[40vh] items-end bg-gradient-to-b from-[#f3e4c8] to-cream px-6 pb-16 pt-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Contact"
            title="Let's make every trek safer."
            subhead="Tell us about your agency. We will plan a demo around the routes you actually run."
          />
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border border-stone bg-warm-white p-8 shadow-sm md:p-10">
            {sent ? (
              <p className="font-display text-2xl text-charcoal">
                Thank you. A Climbit operator will write within 24 hours.
              </p>
            ) : (
              <>
                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">Name</span>
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-xl border border-stone bg-cream px-4 py-3 text-charcoal outline-none ring-sunrise focus:ring-2"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">Agency</span>
                  <input
                    required
                    name="agency"
                    className="mt-2 w-full rounded-xl border border-stone bg-cream px-4 py-3 text-charcoal outline-none ring-sunrise focus:ring-2"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-stone bg-cream px-4 py-3 text-charcoal outline-none ring-sunrise focus:ring-2"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-stone bg-cream px-4 py-3 text-charcoal outline-none ring-sunrise focus:ring-2"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-8 rounded-full bg-sunrise px-6 py-3 text-sm font-medium text-charcoal transition hover:-translate-y-0.5"
                >
                  Request a demo
                </button>
              </>
            )}
          </form>

          <div className="space-y-6">
            {contactNext.map((item, i) => (
              <article key={item.title} className="rounded-2xl border border-stone bg-warm-white p-8 shadow-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-sunrise">0{i + 1}</p>
                <h3 className="mt-2 font-display text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-base text-graphite">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
