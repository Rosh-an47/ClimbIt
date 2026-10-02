import { useEffect, useRef, useState } from 'react'
import { Activity, Bluetooth, Crosshair, Gauge, Radio, ShieldCheck, WifiOff, Mountain, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const TREKKERS = [
  { id: 'T-07', x: 15, y: 58, state: 'green', altitude: '3,820 m', score: 18, note: 'Within personal baseline' },
  { id: 'T-12', x: 38, y: 48, state: 'yellow', altitude: '3,910 m', score: 62, note: 'Resting · HR drift' },
  { id: 'T-18', x: 55, y: 35, state: 'green', altitude: '4,020 m', score: 23, note: 'Stable trajectory' },
  { id: 'T-21', x: 70, y: 48, state: 'green', altitude: '3,960 m', score: 16, note: 'Stable trajectory' },
  { id: 'T-26', x: 84, y: 25, state: 'orange', altitude: '4,110 m', score: 79, note: 'Needs guide assessment' },
]

const styles = {
  green: { label: 'GREEN', ring: '#7bb56e' },
  yellow: { label: 'YELLOW', ring: '#d5b45a' },
  orange: { label: 'ORANGE', ring: '#cf8a52' },
}

export default function HeroScene() {
  const [selected, setSelected] = useState(TREKKERS[1])
  const [band, setBand] = useState({ x: 48, y: 63 })
  const [dragging, setDragging] = useState(false)
  const panelRef = useRef(null)
  const s = styles[selected.state]

  useEffect(() => {
    const move = (event) => {
      if (!dragging || !panelRef.current) return
      const rect = panelRef.current.getBoundingClientRect()
      const x = Math.max(24, Math.min(76, ((event.clientX - rect.left) / rect.width) * 100))
      const y = Math.max(32, Math.min(68, ((event.clientY - rect.top) / rect.height) * 100))
      setBand({ x, y })
    }
    const up = () => setDragging(false)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up) }
  }, [dragging])

  return (
    <motion.div initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }} className="relative w-full">
      <div ref={panelRef} className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0a211b] shadow-[0_40px_100px_-48px_rgba(14,52,43,.95)] md:min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(198,161,91,.28),transparent_24%),radial-gradient(circle_at_20%_65%,rgba(44,122,102,.18),transparent_32%),linear-gradient(145deg,#071813,#123d33_55%,#071b17)]" />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="hero-ridge" x1="0" x2="1"><stop stopColor="#2e5d4f"/><stop offset="1" stopColor="#102c25"/></linearGradient>
            <linearGradient id="hero-path" x1="0" x2="1"><stop stopColor="#7bb56e"/><stop offset=".55" stopColor="#d5b45a"/><stop offset="1" stopColor="#cf8a52"/></linearGradient>
          </defs>
          <path d="M0 79 L12 57 L21 69 L33 43 L43 65 L55 35 L66 57 L77 27 L88 48 L100 22 V100 H0Z" fill="url(#hero-ridge)" opacity=".62"/>
          <path d="M0 91 L18 65 L29 77 L43 53 L53 72 L68 43 L80 65 L91 38 L100 50 V100 H0Z" fill="#071c17" opacity=".9"/>
          <path d="M5 83 C18 76 28 65 39 59 S58 46 69 40 S81 31 94 18" fill="none" stroke="url(#hero-path)" strokeWidth=".48" strokeDasharray="1.2 1.2" vectorEffect="non-scaling-stroke"/>
          <g opacity=".16" stroke="#dceae4" strokeWidth=".08"><path d="M0 22H100"/><path d="M0 43H100"/><path d="M0 64H100"/><path d="M18 0V100"/><path d="M42 0V100"/><path d="M66 0V100"/><path d="M90 0V100"/></g>
        </svg>

        <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2 md:left-7 md:top-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#071712]/55 px-3 py-2 font-mono text-[9px] uppercase tracking-[.18em] text-white/75 backdrop-blur-xl"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7bb56e]"/> LIVE FIELD VIEW</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#071712]/55 px-3 py-2 font-mono text-[9px] uppercase tracking-[.18em] text-white/55 backdrop-blur-xl"><WifiOff className="h-3 w-3"/> EDGE / OFFLINE</span>
        </div>

        <div className="absolute right-5 top-5 z-20 md:right-7 md:top-7">
          <div className="rounded-2xl border border-white/10 bg-[#071712]/55 px-4 py-3 text-right backdrop-blur-xl">
            <p className="font-mono text-[8px] uppercase tracking-[.25em] text-white/35">Group status</p>
            <p className="mt-1 font-display text-3xl text-white">28 / 30 <span className="font-sans text-xs text-[#9fc59a]">stable</span></p>
          </div>
        </div>

        <div className="absolute bottom-[150px] left-5 z-20 hidden gap-2 md:flex">
          <FieldChip icon={Users} label="30 bands" />
          <FieldChip icon={Mountain} label="4,110 m" />
          <FieldChip icon={Zap} label="local mesh" />
        </div>

        <motion.div className="absolute z-30 h-16 w-24 cursor-grab touch-none select-none active:cursor-grabbing md:h-20 md:w-28" style={{ left: `${band.x}%`, top: `${band.y}%`, transform: 'translate(-50%, -50%)' }} animate={{ rotate: dragging ? -4 : 0, scale: dragging ? 1.08 : 1 }} transition={{ duration: .2 }} onPointerDown={(event) => { event.preventDefault(); setDragging(true) }} title="Drag the Climbit band through the field view">
          <div className="absolute -inset-4 rounded-full bg-[#c6a15b]/10 blur-xl" />
          <img src="/images/climbit-band.png" alt="Climbit wearable band" className="relative h-full w-full object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,.45)]" draggable="false" />
        </motion.div>

        {TREKKERS.map((t) => {
          const active = t.id === selected.id
          const st = styles[t.state]
          return <button key={t.id} type="button" onClick={() => setSelected(t)} className="absolute z-20 -translate-x-1/2 -translate-y-1/2 outline-none" style={{ left: `${t.x}%`, top: `${t.y}%` }} aria-label={`Select ${t.id}`}>
            <span className="relative block rounded-full border-2 p-1 transition-transform duration-300" style={{ borderColor: st.ring, transform: active ? 'scale(1.35)' : 'scale(1)' }}><span className="block h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_20px_currentColor]" style={{ color: st.ring }} />{active && <span className="absolute -inset-2 animate-ping rounded-full border" style={{ borderColor: `${st.ring}55` }} />}</span>
            <span className={`mt-2 block rounded-full bg-[#071712]/70 px-2 py-1 font-mono text-[8px] uppercase tracking-widest text-white/70 backdrop-blur ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>{t.id}</span>
          </button>
        })}

        <motion.div key={selected.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-5 left-5 right-5 z-30 grid gap-3 md:bottom-7 md:left-7 md:right-7 md:grid-cols-[1.18fr_.82fr]">
          <div className="rounded-2xl border border-white/10 bg-[#061410]/85 p-4 backdrop-blur-xl md:p-5">
            <div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[8px] uppercase tracking-[.22em] text-white/35">Selected trekker</p><div className="mt-1 flex items-center gap-2"><span className="font-display text-2xl text-white">{selected.id}</span><span className="rounded-full px-2 py-1 font-mono text-[8px] uppercase tracking-widest" style={{ color: s.ring, background: `${s.ring}18` }}>{s.label}</span></div></div><Crosshair className="h-4 w-4 text-[#c6a15b]" /></div>
            <div className="mt-4 grid grid-cols-3 gap-2"><MiniMetric icon={Activity} value={selected.score} label="risk" /><MiniMetric icon={Radio} value={selected.altitude} label="altitude" /><MiniMetric icon={Bluetooth} value="BLE" label="link" /></div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[.055] p-4 backdrop-blur-xl md:p-5"><div className="flex items-center justify-between"><p className="font-mono text-[8px] uppercase tracking-[.22em] text-white/35">Edge intelligence</p><ShieldCheck className="h-4 w-4 text-[#c6a15b]" /></div><p className="mt-3 text-sm leading-relaxed text-white/70">{selected.note}. The hub surfaces exceptions, not a wall of numbers.</p><div className="mt-4 flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-white/30"><Gauge className="h-3.5 w-3.5" /> tap a trekker · inspect context</div></div>
        </motion.div>
        <div className="absolute bottom-2 right-5 z-10 font-mono text-[7px] uppercase tracking-[.2em] text-white/20">30 bands · local mesh · 0 cloud dependency</div>
      </div>
    </motion.div>
  )
}

function MiniMetric({ icon: Icon, value, label }) {
  return <div className="rounded-xl border border-white/5 bg-white/[.045] px-2.5 py-2"><Icon className="h-3 w-3 text-white/35" /><p className="mt-1 font-mono text-[10px] text-white/80">{value}</p><p className="font-mono text-[7px] uppercase tracking-widest text-white/25">{label}</p></div>
}

function FieldChip({ icon: Icon, label }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#071712]/55 px-3 py-2 font-mono text-[8px] uppercase tracking-[.18em] text-white/45 backdrop-blur-xl"><Icon className="h-3 w-3 text-[#c6a15b]" />{label}</span>
}
