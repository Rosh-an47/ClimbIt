import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Sec, H, Next, Table } from '../ui'

export default function Problem() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end bg-ink text-white">
        <img src="/images/image-1.jpg" alt="A tired trekker sits with his head in his hands while a guide helps someone else far behind him" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32">
          <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">Altitude sickness rarely announces itself.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">Climbit is a wristband and a tablet for the trek leader. It spots who is starting to struggle on a high Himalayan trek, hours before they say a word, and it works with no phone signal.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#day4" className="rounded-full bg-flame px-6 py-3 font-semibold text-white">Read the story</a>
            <Link to="/solution" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold">See the solution <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Sec id="day4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl leading-tight text-ink md:text-4xl">Day 4. 4,100 metres. Rohan says he is fine.</h2>
            <div className="mt-6 space-y-4">
              <p>Rohan is 31 and works in Pune. He paid ₹15,000 for this trek and has been looking forward to it for a year. Today he is walking slower than yesterday and has a mild headache. He tells nobody, because he does not want to be the person who slows the group down.</p>
              <p>Pemba, the trek leader, is at the front. Rohan is last, about 300 metres behind. By the time he sits down with nausea and a pounding head, his body has been struggling for hours. The only real cure is to go down, and that is now a long descent in fading light.</p>
              <p className="font-semibold text-ink">Nobody did anything wrong. Pemba simply cannot see 20 people at once. That is the problem Climbit exists to solve.</p>
            </div>
          </div>
          <img src="/images/image-2.jpg" alt="A trekking group spread out along a Himalayan trail with the guide looking back" className="w-full rounded-xl object-cover" />
        </div>
      </Sec>

      <Sec tone="mist">
        <H sub="Altitude illness is well known. The gap is not knowledge. It is visibility, and nobody can see early enough with what they have today.">Why nobody catches it in time</H>
        <Table
          head={['What exists today', 'What it does', 'Why it is not enough']}
          rows={[
            ['The guide’s eyes', 'Watches faces, walking and conversation.', 'Works for the few people nearby. Groups spread over hundreds of metres, and trekkers hide symptoms.'],
            ['Evening finger oximeter', 'Checks blood oxygen once a day at camp.', 'One number, once a day. Cold fingers give bad readings, and it says nothing about the afternoon that mattered.'],
            ['Smartwatches and satellite messengers', 'Track your own health, or send an SOS.', 'Built for one person. They need the wearer to act, and they do not show a leader the whole group.'],
          ]}
        />
        <p className="mt-4 text-sm text-muted">Group size and trekker behaviour are our working assumptions from how commercial trek groups run. Our pilot will measure them.</p>
      </Sec>

      <Sec>
        <H sub="Climbit is a fictitious company. This is the opportunity it is built around.">Why now, and where we start</H>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Wearables are cheap and small', 'Sensors for heart rate and blood oxygen now fit on a wrist band at a price a trek agency can afford.'],
            ['The AI can run on the device', 'The model runs on the band and the leader’s tablet, so it works on a trail with no signal.'],
            ['Agencies carry the cost of a bad day', 'An emergency descent or a death damages a trek company’s name for years. Safety is now something they can sell.'],
          ].map(([t, b]) => <article key={t} className="rounded-xl border border-line bg-white p-6"><h3 className="text-xl text-ink">{t}</h3><p className="mt-3 text-[15px]">{b}</p></article>)}
        </div>
        <div className="mt-8 grid gap-5 rounded-xl bg-ink p-7 text-white md:grid-cols-3">
          <div><p className="text-sm text-white/60">Mission</p><p className="mt-1 font-display text-xl">Give every trek leader early warning on every trekker.</p></div>
          <div><p className="text-sm text-white/60">Vision</p><p className="mt-1 font-display text-xl">No preventable altitude emergency on an Indian trek.</p></div>
          <div><p className="text-sm text-white/60">First market</p><p className="mt-1 text-[15px]">Commercial trek agencies in the Indian Himalaya: Uttarakhand, Himachal, Sikkim and Ladakh. Five pilot agencies first, then 50 within three years (our targets).</p></div>
        </div>
      </Sec>

      <Next to="/solution" label="See the solution" line="So what should a better system do? Notice the drift early, check it, and tell the leader. The leader decides." />
    </>
  )
}
