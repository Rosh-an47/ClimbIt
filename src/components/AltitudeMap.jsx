import { useState } from 'react'
import { ArrowUpRight, MapPin, Mountain, Signal } from 'lucide-react'
import { motion } from 'framer-motion'

const POINTS = [
  { name: 'Namche', altitude: '3,440 m', x: 13, y: 78, note: 'Baseline collection' },
  { name: 'Tengboche', altitude: '3,860 m', x: 34, y: 62, note: 'Group stabilising' },
  { name: 'Dingboche', altitude: '4,410 m', x: 54, y: 47, note: 'Acclimatisation checkpoint' },
  { name: 'Lobuche', altitude: '4,940 m', x: 71, y: 31, note: 'Risk context becomes critical' },
  { name: 'EBC', altitude: '5,364 m', x: 88, y: 16, note: 'High-altitude endpoint' },
]

export default function AltitudeMap() {
  const [active, setActive] = useState(POINTS[2])

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-stone bg-[#eaf0ea] shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(232,163,61,.22),transparent_30%),linear-gradient(180deg,#edf4f0,#d8e4dd)]" />
      <div className="relative min-h-[430px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <path d="M0 82 L10 74 L20 80 L30 60 L40 66 L50 42 L58 53 L68 33 L77 43 L87 20 L100 29 V100 H0 Z" fill="#6c8878" opacity=".22" />
          <path d="M0 88 L14 70 L24 78 L36 55 L46 69 L57 43 L67 58 L78 29 L88 44 L100 21 V100 H0 Z" fill="#456556" opacity=".32" />
          <path d="M13 78 C25 70 29 67 34 62 S46 54 54 47 S64 40 71 31 S81 23 88 16" fill="none" stroke="#E8A33D" strokeWidth="1" strokeDasharray="2 1.4" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="absolute left-5 top-5 rounded-xl border border-white/60 bg-white/70 px-3 py-2 backdrop-blur md:left-7 md:top-7">
          <p className="font-mono text-[9px] uppercase tracking-[.22em] text-muted">Route intelligence</p>
          <p className="mt-1 font-display text-lg text-charcoal">EBC ascent profile</p>
        </div>

        {POINTS.map((point, index) => {
          const selected = point.name === active.name
          return (
            <button
              key={point.name}
              type="button"
              onClick={() => setActive(point)}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 outline-none"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
            >
              <span className={`relative flex h-7 w-7 items-center justify-center rounded-full border-2 ${selected ? 'border-sunrise bg-sunrise text-charcoal' : 'border-white bg-deep-pine text-white'} shadow-lg transition-transform ${selected ? 'scale-125' : ''}`}>
                <span className="font-mono text-[8px]">{index + 1}</span>
                {selected ? <span className="absolute -inset-2 animate-ping rounded-full border border-sunrise/40" /> : null}
              </span>
              <span className={`mt-2 block whitespace-nowrap rounded-full bg-white/75 px-2 py-1 font-mono text-[8px] uppercase tracking-widest text-charcoal backdrop-blur ${selected ? 'opacity-100' : 'opacity-60'}`}>{point.name}</span>
            </button>
          )
        })}

        <motion.div key={active.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/70 bg-[#10251f]/90 p-4 text-white shadow-xl backdrop-blur-xl md:bottom-7 md:left-auto md:right-7 md:w-[360px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sunrise" />
              <p className="font-display text-xl">{active.name}</p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">{active.altitude}</span>
          </div>
          <p className="mt-2 text-sm text-white/65">{active.note}. Climbit keeps altitude and ascent history in the risk context.</p>
          <div className="mt-4 flex items-center gap-4 font-mono text-[8px] uppercase tracking-widest text-white/40">
            <span className="inline-flex items-center gap-1.5"><Signal className="h-3 w-3" /> local mesh</span>
            <span className="inline-flex items-center gap-1.5"><Mountain className="h-3 w-3" /> route state</span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-sunrise">inspect <ArrowUpRight className="h-3 w-3" /></span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
