import { useEffect, useMemo, useRef, useState } from 'react'
import { Activity, Bluetooth, Crosshair, Move3d, Radio, ShieldCheck, WifiOff } from 'lucide-react'
import { motion } from 'framer-motion'

const TREKKERS = [
  { id: 'T-07', x: 22, y: 68, state: 'green', altitude: '3,820 m', score: 18, note: 'Within baseline' },
  { id: 'T-12', x: 42, y: 50, state: 'yellow', altitude: '3,910 m', score: 62, note: 'Resting · HR drift' },
  { id: 'T-18', x: 61, y: 36, state: 'green', altitude: '4,020 m', score: 23, note: 'Stable' },
  { id: 'T-21', x: 74, y: 59, state: 'green', altitude: '3,960 m', score: 16, note: 'Stable' },
  { id: 'T-26', x: 84, y: 28, state: 'orange', altitude: '4,110 m', score: 79, note: 'Needs assessment' },
]

const stateStyles = {
  green: { label: 'GREEN', ring: '#78A66A', glow: 'rgba(120,166,106,.55)' },
  yellow: { label: 'YELLOW', ring: '#E0B24A', glow: 'rgba(224,178,74,.6)' },
  orange: { label: 'ORANGE', ring: '#D87943', glow: 'rgba(216,121,67,.62)' },
}

export default function HeroScene() {
  const [selected, setSelected] = useState(TREKKERS[1])
  const [drag, setDrag] = useState({ x: 50, y: 50 })
  const [dragging, setDragging] = useState(false)
  const panelRef = useRef(null)

  const selectedStyle = stateStyles[selected.state]

  const routePath = useMemo(
    () => 'M 9 80 C 21 73, 24 63, 35 62 S 49 53, 56 43 S 70 37, 88 22',
    [],
  )

  useEffect(() => {
    const onMove = (event) => {
      if (!dragging || !panelRef.current) return
      const rect = panelRef.current.getBoundingClientRect()
      const x = Math.min(78, Math.max(22, ((event.clientX - rect.left) / rect.width) * 100))
      const y = Math.min(72, Math.max(28, ((event.clientY - rect.top) / rect.height) * 100))
      setDrag({ x, y })
    }
    const onUp = () => setDragging(false)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [dragging])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <div
        ref={panelRef}
        className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/70 bg-[#17332f] shadow-[0_30px_80px_-35px_rgba(25,46,40,.65)] md:min-h-[610px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(232,163,61,.28),transparent_28%),linear-gradient(145deg,#102823,#24483e_52%,#10231f)]" />
        <div className="absolute inset-x-0 bottom-0 h-[54%] bg-[linear-gradient(150deg,transparent_0_8%,rgba(72,104,87,.7)_9%_28%,transparent_29%),linear-gradient(30deg,transparent_0_30%,rgba(46,77,66,.95)_31%_49%,transparent_50%),linear-gradient(155deg,transparent_0_53%,rgba(62,92,78,.88)_54%_75%,transparent_76%)] opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0e211d] via-[#0e211d]/80 to-transparent" />

        <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2 md:left-7 md:top-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white/75 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7ccf71]" /> LIVE FIELD VIEW
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white/65 backdrop-blur-md">
            <WifiOff className="h-3 w-3" /> Offline inference
          </span>
        </div>

        <div className="absolute right-5 top-5 z-20 hidden text-right md:block md:right-7 md:top-7">
          <p className="font-mono text-[10px] uppercase tracking-[.25em] text-white/45">Group status</p>
          <p className="mt-1 font-display text-3xl text-white">28 / 30 <span className="font-sans text-sm text-white/50">stable</span></p>
        </div>

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <path d={routePath} fill="none" stroke="rgba(239,213,160,.22)" strokeWidth="0.45" strokeDasharray="1.4 1.2" vectorEffect="non-scaling-stroke" />
          <path d={routePath} fill="none" stroke="rgba(232,163,61,.9)" strokeWidth="0.65" strokeDasharray="8 92" pathLength="100" vectorEffect="non-scaling-stroke" className="route-flow" />
        </svg>

        {TREKKERS.map((trekker) => {
          const style = stateStyles[trekker.state]
          const active = selected.id === trekker.id
          return (
            <button
              key={trekker.id}
              type="button"
              aria-label={`Select ${trekker.id}`}
              onClick={() => setSelected(trekker)}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none"
              style={{ left: `${trekker.x}%`, top: `${trekker.y}%` }}
            >
              <span
                className="block rounded-full border-2 p-1 transition-transform duration-300"
                style={{ borderColor: style.ring, transform: active ? 'scale(1.28)' : 'scale(1)' }}
              >
                <span className="block h-3 w-3 rounded-full bg-white shadow-[0_0_20px_currentColor] md:h-3.5 md:w-3.5" style={{ color: style.glow }} />
              </span>
              <span className={`absolute left-1/2 top-7 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#0b1b18]/80 px-2 py-1 font-mono text-[8px] uppercase tracking-widest text-white/70 backdrop-blur ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {trekker.id}
              </span>
            </button>
          )
        })}

        <motion.div
          className="absolute z-30 h-28 w-28 cursor-grab touch-none select-none active:cursor-grabbing md:h-36 md:w-36"
          style={{ left: `${drag.x}%`, top: `${drag.y}%` }}
          animate={{ rotate: dragging ? -2 : 2, scale: dragging ? 1.06 : 1 }}
          transition={{ duration: 0.4 }}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture?.(event.pointerId)
            setDragging(true)
          }}
          title="Drag the Climbit band across the route"
        >
          <div className="absolute -inset-5 rounded-full bg-[#e8a33d]/10 blur-xl" />
          <img src="/images/climbit-band.png" alt="Climbit wearable band" className="relative h-full w-full object-contain drop-shadow-[0_22px_18px_rgba(0,0,0,.42)]" draggable="false" />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/35 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[.18em] text-white/65 backdrop-blur">
            drag me · field device
          </span>
        </motion.div>

        <div className="absolute bottom-5 left-5 right-5 z-30 grid gap-3 md:bottom-7 md:left-7 md:right-7 md:grid-cols-[1.3fr_.7fr]">
          <div className="rounded-2xl border border-white/10 bg-[#081512]/75 p-4 backdrop-blur-xl md:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[.22em] text-white/40">Selected trekker</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-display text-xl text-white">{selected.id}</span>
                  <span className="rounded-full px-2 py-1 font-mono text-[8px] uppercase tracking-widest" style={{ color: selectedStyle.ring, background: `${selectedStyle.ring}18` }}>
                    {selectedStyle.label}
                  </span>
                </div>
              </div>
              <Crosshair className="h-4 w-4 text-[#e8a33d]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <MiniMetric icon={Activity} value={selected.score} label="risk" />
              <MiniMetric icon={Radio} value={selected.altitude} label="altitude" />
              <MiniMetric icon={Bluetooth} value="BLE" label="link" />
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[.06] p-4 backdrop-blur-xl md:p-5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[.22em] text-white/40">Edge intelligence</p>
              <ShieldCheck className="h-4 w-4 text-[#e8a33d]" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{selected.note}. The hub shows exceptions, not a wall of numbers.</p>
            <div className="mt-3 flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-white/35">
              <Move3d className="h-3.5 w-3.5" /> drag band · tap a trekker
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MiniMetric({ icon: Icon, value, label }) {
  return (
    <div className="rounded-xl bg-white/[.05] px-2.5 py-2">
      <Icon className="h-3 w-3 text-white/35" />
      <p className="mt-1 font-mono text-[10px] text-white/80">{value}</p>
      <p className="font-mono text-[7px] uppercase tracking-widest text-white/30">{label}</p>
    </div>
  )
}
