import { useEffect, useState } from 'react'

const STATES = ['89% sprint → normal', '89% rest → concerning', '89% sleep → escalate']

export default function ActivityEquation() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % STATES.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        <Box label="Risk engine" value="Personalised score" />
        <Plus />
        <Box label="Activity context" value={STATES[index]} accent />
        <Equals />
        <Box label="Action" value="Monitor / check / escalate" />
      </div>
      <p className="mt-6 text-center font-display text-xl text-charcoal md:text-2xl">
        Same number. Different meaning. The engine reads context.
      </p>
    </div>
  )
}

function Box({ label, value, accent }) {
  return (
    <div
      className={`flex-1 rounded-2xl border px-5 py-6 text-center shadow-sm ${
        accent ? 'border-sunrise bg-sunrise/10' : 'border-stone bg-warm-white'
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-3 font-mono text-sm text-charcoal md:text-base">{value}</p>
    </div>
  )
}

function Plus() {
  return <span className="text-center font-display text-3xl text-sunrise md:px-2">+</span>
}

function Equals() {
  return <span className="text-center font-display text-3xl text-sunrise md:px-2">=</span>
}
