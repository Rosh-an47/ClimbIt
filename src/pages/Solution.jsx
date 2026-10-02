import { Sec, H, PageTop, Next, Table } from '../ui'

export default function Solution() {
  return (
    <>
      <PageTop title="Climbit watches the drift, so the guide does not have to watch everyone." sub="Back on Day 4. Here is what Climbit does at 11:40 am, before Rohan says a word." />

      <Sec>
        <H sub="The AI does one job: it learns what is normal for each person and tells the leader when someone moves away from it.">What the AI actually does</H>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['1. It learns Rohan’s normal', 'For two or three days before the trek, the band records his resting heart rate, sleep and blood oxygen at home. That becomes his own baseline.'],
            ['2. It compares him to others', 'On the trail it checks Rohan against his own normal, against the rest of today’s group, and against people of similar age and fitness at the same height.'],
            ['3. It spots the drift', 'At 11:40 his resting heart rate is 21 beats above his own normal. The other 19 trekkers are steady. So it is Rohan, not the weather.'],
          ].map(([t, b]) => <article key={t} className="rounded-xl border border-line bg-white p-6"><h3 className="text-xl text-ink">{t}</h3><p className="mt-3 text-[15px]">{b}</p></article>)}
        </div>
        <p className="mt-6 max-w-3xl">The same blood oxygen reading can be normal while sprinting up a slope and worrying while sitting still, so the AI always reads the number alongside what the person is doing and how high they are.</p>
      </Sec>

      <Sec tone="mist">
        <H sub="This is “agentic AI”: instead of making one prediction and stopping, Climbit carries out a short chain of steps, and hands over to a person at the point where judgement is needed.">What it does by itself, and where it stops</H>
        <Table
          head={['Step', 'Who acts', 'What happens']}
          widths={['26%', '14%', '60%']}
          rows={[
            ['Notice the drift', 'AI', 'Flags Rohan as moving away from his own normal.'],
            ['Rule out a false alarm', 'AI', 'Checks he was resting, the strap is snug and the reading is clean. A bad reading never becomes an alert.'],
            ['Ask Rohan to recheck', 'AI', 'The band asks him to sit still for a minute and tap how he feels.'],
            ['Alert the leader', 'AI → Pemba', 'Pemba’s tablet shows: “Rohan, resting pulse +21, group normal. Check in.”'],
            ['Decide what to do', 'Pemba only', 'Pemba walks back, looks at Rohan, and decides: rest, hold, or descend.'],
            ['Prepare the emergency note', 'AI', 'If Pemba confirms it is serious, the tablet assembles name, position, height, recent readings and actions taken, ready for the agency or a rescue team.'],
          ]}
        />
      </Sec>

      <Sec>
        <H sub="Prices and results below are our planning assumptions. The pilot exists to test them.">What each person gains</H>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['The guide', 'Looks at the one or two people flagged instead of scanning everyone, and has a record to show for each decision.'],
            ['The agency', 'Fewer emergency descents, a safety record it can advertise, and a clear paper trail if something goes wrong.'],
            ['The trekker', 'Someone is watching out for them even when they are quiet or at the back. It adds about ₹1,000 to a ₹12,000 to ₹20,000 trek.'],
          ].map(([t, b]) => <article key={t} className="rounded-xl border border-line bg-white p-6"><h3 className="text-xl text-ink">{t}</h3><p className="mt-3 text-[15px]">{b}</p></article>)}
        </div>
        <div className="mt-8 grid gap-5 rounded-xl bg-ink p-7 text-white md:grid-cols-3">
          <div><p className="font-display text-3xl text-flame">₹1,000</p><p className="mt-1 text-sm text-white/70">per trekker per trek, for the band and the tablet</p></div>
          <div><p className="font-display text-3xl text-flame">₹6 lakh</p><p className="mt-1 text-sm text-white/70">a season for an agency running 40 treks of 15 people</p></div>
          <div><p className="font-display text-3xl text-flame">1 in 5</p><p className="mt-1 text-sm text-white/70">at most: alerts the guide calls useless. Our pilot target is 4 in 5 useful.</p></div>
        </div>
      </Sec>

      <Next to="/business" label="See the business" line="It only matters if agencies will pay, and if rivals cannot copy it. That is next." />
    </>
  )
}
