import { useMemo, useState } from 'react'
import { Activity, Database, History, UsersRound, UserRound } from 'lucide-react'
import { motion } from 'framer-motion'

const BASELINES = [
  {
    key: 'personal',
    title: 'Personal',
    icon: UserRound,
    value: '79 bpm',
    delta: '+21 bpm',
    body: 'Resting HR drift from 58 → 79 over three days.',
    score: 28,
  },
  {
    key: 'peer',
    title: 'Peer',
    icon: UsersRound,
    value: '28 / 30',
    delta: '2 diverging',
    body: 'The group becomes its own natural control set.',
    score: 19,
  },
  {
    key: 'cohort',
    title: 'Cohort',
    icon: Database,
    value: 'P95 drift',
    delta: 'matched profile',
    body: 'Comparable age, fitness and ascent profile.',
    score: 17,
  },
  {
    key: 'historical',
    title: 'Historical',
    icon: History,
    value: '47 matches',
    delta: 'trajectory signal',
    body: 'Pattern resembles validated deterioration trajectories.',
    score: 15,
  },
]

export default function RiskEngineScene() {
  const [active, setActive] = useState('personal')
  const item = BASELINES.find((x) => x.key === active) || BASELINES[0]
  const total = useMemo(() => BASELINES.reduce((sum, x) => sum + x.score, 0), [])
  const contribution = Math.round((item.score / total) * 100)

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-stone bg-[#f5eee4] p-5 shadow-sm md:p-8">
      <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-sunrise/10 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative mx-auto aspect-square w-full max-w-[430px]">
          <div className="absolute inset-[9%] rounded-full border border-stone/80" />
          <div className="absolute inset-[20%] rounded-full border border-dashed border-sunrise/50" />
          <div className="absolute inset-[31%] rounded-full bg-[#203f36] shadow-[0_20px_60px_-25px_rgba(32,63,54,.7)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <Activity className="h-6 w-6 text-sunrise" />
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[.25em] text-white/45">risk engine</p>
              <p className="mt-1 font-display text-4xl">{Math.min(100, total + 4)}</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/45">contextual score</p>
            </div>
          </div>

          {BASELINES.map((node, index) => {
            const angle = (index / BASELINES.length) * Math.PI * 2 - Math.PI / 2
            const radius = 42
            const x = 50 + Math.cos(angle) * radius
            const y = 50 + Math.sin(angle) * radius
            const Icon = node.icon
            const selected = node.key === active
            return (
              <motion.button
                key={node.key}
                type="button"
                onClick={() => setActive(node.key)}
                whileHover={{ scale: 1.06 }}
                className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 rounded-2xl border px-3 py-2.5 shadow-sm transition ${selected ? 'border-sunrise bg-warm-white shadow-[0_12px_30px_-18px_rgba(232,163,61,.8)]' : 'border-stone bg-white/75'}`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <Icon className={`h-4 w-4 ${selected ? 'text-sunrise' : 'text-deep-pine'}`} />
                <span className="font-mono text-[8px] uppercase tracking-widest text-charcoal">{node.title}</span>
              </motion.button>
            )
          })}

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
            {BASELINES.map((node, index) => {
              const angle = (index / BASELINES.length) * Math.PI * 2 - Math.PI / 2
              const radius = 42
              const x = 50 + Math.cos(angle) * radius
              const y = 50 + Math.sin(angle) * radius
              return <line key={node.key} x1="50" y1="50" x2={x} y2={y} stroke={node.key === active ? '#E8A33D' : '#B9AA95'} strokeWidth={node.key === active ? '0.8' : '0.45'} strokeDasharray="1.5 1.2" opacity={node.key === active ? 0.9 : 0.55} />
            })}
          </svg>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sunrise" />
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-muted">Tap a reference frame</p>
          </div>
          <h3 className="mt-3 font-display text-3xl text-charcoal md:text-4xl">Context beats thresholds.</h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-graphite">A single SpO₂ value is not a diagnosis. Climbit asks whether the response is abnormal for <em>this person</em>, at <em>this altitude</em>, during <em>this activity</em>.</p>

          <motion.div key={item.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-7 rounded-2xl border border-stone bg-warm-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-sunrise">Active frame · {item.title}</p>
                <p className="mt-2 font-display text-2xl text-charcoal">{item.value}</p>
              </div>
              <span className="rounded-full bg-sunrise/10 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-alpenglow">{item.delta}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-graphite">{item.body}</p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-sand">
              <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, contribution + 18)}%` }} className="h-full rounded-full bg-sunrise" />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[8px] uppercase tracking-widest text-muted">
              <span>contribution</span><span>{contribution}%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
