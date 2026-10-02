import { Sec, H, PageTop, Next, Table } from '../ui'

const quote = 'I do not need more numbers. I need to know who to walk back to.'

export default function Business() {
  return (
    <>
      <PageTop title="The agency pays. The guide decides. The trekker wears it." sub="Who we sell to, who we compete with, and why it is hard to copy." />

      <Sec>
        <H sub="Agencies buy Climbit, guides use it every day, and trekkers wear it. If the guide does not trust it, the agency does not renew.">Who buys: meet Pemba</H>
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <figure>
            <img src="/images/image-3.jpg" alt="Portrait of Pemba Sherpa, a trek leader" className="w-full rounded-xl object-cover" />
            <figcaption className="mt-3 font-display text-lg italic text-ink">“{quote}”</figcaption>
          </figure>
          <div>
            <h3 className="text-2xl text-ink">Pemba Sherpa, 38</h3>
            <p className="mt-1 text-muted">Trek leader and operations manager at a 12-person agency in Darjeeling. Twelve years leading groups on Goecha La and Kedarkantha.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                ['What hurts', ['Cannot watch 20 people on a long trail.', 'Check-ins rely on people being honest.', 'One missed case can cost a season’s bookings.']],
                ['What he wants', ['Everyone walking, sleeping and descending on plan.', 'A shared picture for his junior guides.', 'To win contracts on safety, not only price.']],
                ['What decides the purchase', ['Works with no signal.', 'Few false alarms. A noisy tool gets ignored.', 'Fits the morning briefing.', 'Pays back within two seasons.']],
              ].map(([t, items]) => <div key={t}><h4 className="font-semibold text-ink">{t}</h4><ul className="mt-2 space-y-2 text-[15px]">{items.map((i) => <li key={i} className="border-l-2 border-flame pl-3">{i}</li>)}</ul></div>)}
            </div>
          </div>
        </div>
      </Sec>

      <Sec tone="mist">
        <H sub="Most forces are moderate. One matters more than the rest, and it is not a rival wearable.">Who we compete with</H>
        <Table
          head={['Force', 'Level', 'What it means for Climbit']}
          widths={['24%', '12%', '64%']}
          rows={[
            ['Buyer power', 'High', 'Agencies are small and price-sensitive, and many will decide a ₹1,500 finger oximeter and a careful guide are “good enough”.'],
            ['Substitutes', 'High', 'Better guide training, slower itineraries and handheld oximeters already exist. This is the real rival.'],
            ['Existing rivals', 'Low', 'Smartwatches and satellite messengers serve individuals. None gives a leader a group view.'],
            ['Suppliers', 'Medium', 'Sensors are commodity parts from several makers, so no supplier can hold us hostage. Cold-weather battery quality is the one worry.'],
            ['New entrants', 'Medium', 'Anyone can build a band in months. Winning agency trust and guide-confirmed data takes years.'],
          ]}
        />
        <p className="mt-6 max-w-3xl rounded-xl border-l-4 border-flame bg-white p-5 text-ink">So we do not sell a gadget. We sell the safety record an agency can show customers, we bundle it into the trek price so the agency never pays upfront for a fleet, and we prove the value with pilot data before asking for a contract.</p>
      </Sec>

      <Sec>
        <H sub="We have no data on day one, so our defence has to be built in stages.">Why it is hard to copy</H>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Year 1: it becomes routine', 'Climbit sits inside the morning briefing, the guide’s tablet and the agency’s safety file. Guides trained on it do not want to go back.'],
            ['Year 2: our data gets better than anyone’s', 'Every alert a guide confirms or dismisses is a labelled example from a real Indian route. Rivals can copy the band, not these labels.'],
            ['Year 3 on: it is tuned to each route', 'Each agency’s history and each route’s season make our alerts more accurate over time, and leaving means starting that again.'],
          ].map(([t, b]) => <article key={t} className="lift-card rounded-xl border border-line bg-white p-6"><h3 className="text-xl text-ink">{t}</h3><p className="mt-3 text-[15px]">{b}</p></article>)}
        </div>
        <p className="mt-6 max-w-3xl"><span className="font-semibold text-ink">The cold start.</span> To get the first labels, the five pilot agencies get their first season at cost in return for logging what happened after each alert.</p>
      </Sec>

      <Next to="/journey" label="Follow the journey" line="A moat only counts if the first trek goes well. Here is that trek, and what happens when the AI gets it wrong." />
    </>
  )
}
