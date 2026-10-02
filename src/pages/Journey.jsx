import { useState } from 'react'
import { Sec, H, PageTop, Next, Table } from '../ui'

const stages = [
  ['Booking and baseline', 'Rohan books through the agency. He reads a short notice in English or Hindi, agrees to safety monitoring, and wears the band at home for two or three days so it learns his normal.', 'The agency sells a safer trek. Rohan feels looked after before he has left.'],
  ['Day 1 on the trail', 'Pemba pairs all the bands to his tablet in a few minutes. Everything runs on the band and the tablet, so there is no need for signal.', 'The leader gets one screen instead of 20 separate guesses.'],
  ['Days 2 to 4 walking', 'The screen stays quiet while everyone is steady. It only speaks when someone drifts from their own normal and the rest of the group is not drifting with them.', 'No noise, so Pemba keeps trusting it.'],
  ['Day 4, 11:40 am', 'Rohan’s band asks him to rest and recheck. His reading holds, so Pemba’s tablet shows a quiet alert. Pemba walks back, agrees Rohan is struggling, and takes him down to a lower camp.', 'Rohan descends at noon in daylight and not at dusk, and the group stays together.'],
  ['If it is serious', 'Pemba marks it red. The tablet builds the emergency note and the agency office is informed, with a rescue team if needed.', 'Minutes saved when they matter, and a clear record.'],
  ['After the trek', 'Pemba logs what happened to each alert. The agency keeps its safety record, and Rohan’s raw readings are deleted after 30 days.', 'The agency renews, and our alerts get better for next season.'],
]
const states = [
  ['Green', '#2F8F5B', 'No unusual change. Keep going. It never says “safe”.'],
  ['Yellow', '#D69E12', 'Early drift. The guide checks in with the trekker.'],
  ['Orange', '#E8731A', 'Pause and assess. The guide decides: rest, hold or descend.'],
  ['Red', '#C0392B', 'Emergency. The note goes to the agency and rescuers.'],
]

export default function Journey() {
  const [s, setS] = useState(3)
  const [r, setR] = useState(1)
  return (
    <>
      <PageTop title="From booking to base camp, and what happens when the AI is wrong." sub="Rohan’s trek from start to finish, the rules that keep the AI honest, and how we follow Indian data law." />

      <Sec>
        <H sub="Pick a stage. Each one shows what Climbit does and what the agency and trekker get.">The journey: Rohan’s trek with Pemba’s agency</H>
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="grid gap-2" role="tablist">
            {stages.map(([t], i) => <button key={t} role="tab" aria-selected={i === s} onClick={() => setS(i)} className={`rounded-lg border px-4 py-3 text-left font-medium transition ${i === s ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:border-ink'}`}>{i + 1}. {t}</button>)}
          </div>
          <article className="rounded-xl bg-ink p-7 text-white md:p-9">
            <h3 className="text-3xl">{stages[s][0]}</h3>
            <p className="mt-4 text-white/85">{stages[s][1]}</p>
            <p className="mt-6 border-t border-white/15 pt-4"><span className="font-semibold text-flame">What they gain: </span>{stages[s][2]}</p>
          </article>
        </div>
      </Sec>

      <Sec tone="mist">
        <H sub="The AI can be wrong in two ways. A false alarm makes guides ignore it. A missed case is worse, because it gives false comfort. We design against both.">When the AI gets it wrong</H>
        <Table
          head={['Situation', 'The AI', 'The human']}
          widths={['30%', '38%', '32%']}
          rows={[
            ['Reading is poor (cold finger, loose strap)', 'Asks for a recheck. Never raises an alert on a bad reading.', 'Nothing needed.'],
            ['AI is unsure', 'Says “cannot tell” and passes it to the guide.', 'Guide checks in person.'],
            ['Guide dismisses an alert', 'Keeps watching and asks again in 30 minutes with new data.', 'Guide’s reason is logged.'],
            ['Guide and AI disagree', 'Defers to the guide.', 'Guide’s decision stands.'],
            ['Red state', 'Prepares the emergency note.', 'Guide confirms before the agency is alerted.'],
          ]}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            ['No made-up text', 'In the field the AI does not write free text. Alerts use fixed sentences filled with real readings, so it cannot invent a symptom.'],
            ['Checked every month', 'We compare alerts against what guides found, and publish the misses and false alarms to agencies.'],
            ['Fair for everyone', 'Wrist sensors can read differently across skin tones, ages and cold hands. We test for this each quarter, and an outside expert audits us once a year.'],
          ].map(([t, b]) => <article key={t} className="lift-card rounded-xl border border-line bg-white p-6"><h3 className="text-lg text-ink">{t}</h3><p className="mt-2 text-[15px]">{b}</p></article>)}
        </div>
        <div className="mt-6 rounded-xl bg-white p-5">
          <p className="mb-3 font-semibold text-ink">Four states, and the guide is in charge of every one</p>
          <div className="flex flex-wrap gap-2">{states.map(([n, c], i) => <button key={n} onClick={() => setR(i)} className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${i === r ? 'border-ink bg-ink text-white' : 'border-line text-ink'}`}><span className="h-3 w-3 rounded-full" style={{ background: c }} />{n}</button>)}</div>
          <p className="mt-3">{states[r][2]}</p>
        </div>
      </Sec>

      <Sec>
        <H sub="Our first market is India, so the Digital Personal Data Protection Act, 2023 and its Rules, 2025 apply. Consent Manager rules start in mid-November 2026 and the main duties in May 2027. We build to them from day one and pilot only after we meet them.">Following Indian data law</H>
        <Table
          head={['What the law asks', 'What Climbit does']}
          widths={['32%', '68%']}
          rows={[
            ['Clear notice and consent for one purpose', 'A short English and Hindi notice at booking, covering safety monitoring only. Consent can be withdrawn in the app. We will use a registered Consent Manager once they are live.'],
            ['Take only what is needed', 'Heart rate, blood oxygen, sleep baseline, symptom taps, location and height. No contacts, photos or messages.'],
            ['Medical emergencies', 'The Act allows data use without fresh consent to protect a life. Only a red alert uses this, shares the minimum with rescuers, and is logged.'],
            ['Children', 'Under-18s need a parent’s verifiable consent and cannot be tracked or monitored, apart from narrow exemptions. Version 1 is for adults only. School groups wait for legal advice.'],
            ['Security and breaches', 'Data is encrypted on the band, tablet and server. If there is a breach, we tell the Data Protection Board and each affected person, including the 72-hour report to the Board.'],
            ['Keep it no longer than needed', 'Raw readings are deleted 30 days after the trek unless the trekker opts into research. The agency keeps only its incident note.'],
            ['Rights and complaints', 'Trekkers can see, correct, erase or withdraw their data, and reach a named grievance officer.'],
            ['Where data lives', 'India-region servers by our choice. The Act allows most transfers abroad, but we keep data in India.'],
          ]}
        />
        <p className="mt-4 text-sm text-muted">Open items: whether Climbit or the agency is the data fiduciary (we assume Climbit; counsel to confirm), and whether a CDSCO medical-device opinion is needed. We position Climbit as an early-warning wellness tool that never diagnoses.</p>
      </Sec>

      <Next to="/appendix" label="Appendix" line="How this idea developed, what AI helped with, and what I changed my mind about." />
    </>
  )
}
