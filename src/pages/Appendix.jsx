import { ExternalLink } from 'lucide-react'
import { PageTop, Sec } from '../ui'

// Edit these to match what you actually used. Add your Claude share link as a third transcript.
const transcripts = [
  ['DeepSeek: problem to reframe', 'https://chat.deepseek.com/share/8zp7p89g1o9e9mbs83'],
  ['ChatGPT: visuals and drafting', 'https://chatgpt.com/share/6abf4e44-186c-83ee-9ef1-1eeb22633a49'],
]
const tools = [
  ['DeepSeek', 'Explored the problem and stress-tested the idea.'],
  ['ChatGPT', 'Drafted text and generated the photos and logo.'],
  ['Claude', 'Reviewed my draft against the rubric, helped restructure the story into plain language and rebuilt the site.'],
  ['Cursor', 'Wrote the first version of the site code.'],
]
const evolution = ['A band that detects altitude sickness', 'One reading is not enough: context matters', 'Not a band but a group safety system for leaders', 'Learns each person’s normal; compares to group', 'Final: sold to agencies, runs offline, guide decides']

export default function Appendix() {
  return (
    <>
      <PageTop title="How Climbit became Climbit." sub="My development, my use of AI, and the decisions I changed along the way." />
      <Sec>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-ink">How the idea developed</h2>
              <ol className="mt-4 space-y-2 border-l-2 border-flame pl-4">{evolution.map((e) => <li key={e}>{e}</li>)}</ol>
            </div>
            <div>
              <h2 className="text-2xl text-ink">How I used AI</h2>
              <ul className="mt-4 space-y-2">{tools.map(([a, b]) => <li key={a}><span className="font-semibold text-ink">{a}.</span> {b}</li>)}</ul>
              <ul className="mt-4 space-y-1">{transcripts.map(([a, u]) => <li key={u}><a className="inline-flex items-center gap-2 font-medium text-flame-ink underline" href={u} target="_blank" rel="noreferrer">{a} <ExternalLink className="h-4 w-4" /></a></li>)}</ul>
            </div>
            <div>
              <h2 className="text-2xl text-ink">References</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px]">
                <li>Luks, A. M. et al. (2019). Wilderness Medical Society clinical practice guidelines for the prevention and treatment of acute altitude illness: 2019 update. <i>Wilderness &amp; Environmental Medicine</i>, 30(4S), S3 to S18.</li>
                <li>Lemon, K. N., &amp; Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. <i>Journal of Marketing</i>, 80(6), 69 to 96.</li>
                <li>Porter, M. E. (2008). The five competitive forces that shape strategy. <i>Harvard Business Review</i>, 86(1), 78 to 93.</li>
                <li>Government of India, MeitY. Digital Personal Data Protection Act, 2023, and Digital Personal Data Protection Rules, 2025.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl text-ink">The hardest decision: how much should the AI do alone?</h2>
            <div className="grid gap-3">
              {[
                ['A. Guide controls everything', 'Safest, but slow. The AI is just a display.', false],
                ['B. AI checks, guide decides', 'Fast response, and responsibility stays with a person who can see the trekker.', true],
                ['C. AI acts alone', 'Fastest, but it would give orders on a mountain with no signal and no accountability.', false],
              ].map(([t, b, on]) => <div key={t} className={`lift-card rounded-xl border p-4 ${on ? 'border-flame bg-white ring-2 ring-flame' : 'border-line bg-white'}`}><p className="font-semibold text-ink">{t}{on && ' (chosen)'}</p><p className="text-[15px]">{b}</p></div>)}
            </div>
            <p>I chose B because the real risk is a confident wrong answer. That choice led to the emergency note, to “never says safe”, and to the guide-override log.</p>
            <h2 className="text-2xl text-ink">What I did with the AI’s ideas</h2>
            <ul className="space-y-2 text-[15px]">
              <li><b className="text-ink">Accepted:</b> reframing from a band to a group safety system.</li>
              <li><b className="text-ink">Modified:</b> the Nepal setting became India so that the DPDP Act actually applies; groups of 30 became 15 to 25.</li>
              <li><b className="text-ink">Rejected:</b> a claim that we detect illness 2 to 6 hours early, because I cannot support it. It is now a pilot target. Also rejected self-training in the field and first-aid advice from the AI.</li>
              <li><b className="text-ink">Developed myself:</b> the cold-start plan, the failure table and the guide-confirmed labels as the moat.</li>
            </ul>
          </div>
        </div>
      </Sec>
    </>
  )
}
