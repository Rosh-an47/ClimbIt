import { flywheelNodes } from '../lib/sections'

export default function DataFlywheel() {
  return (
    <div className="relative mx-auto aspect-square max-w-lg">
      <div className="absolute inset-[18%] rounded-full border border-dashed border-stone" />
      <div className="flywheel absolute inset-0">
        {flywheelNodes.map((label, i) => {
          const angle = (360 / flywheelNodes.length) * i - 90
          const rad = (angle * Math.PI) / 180
          const x = 50 + Math.cos(rad) * 38
          const y = 50 + Math.sin(rad) * 38
          return (
            <div
              key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone bg-warm-white px-3 py-2 text-center shadow-sm"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal md:text-xs">{label}</p>
            </div>
          )
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-sunrise/15 px-6 py-8 text-center">
          <p className="font-display text-xl text-charcoal">Data flywheel</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">More treks</p>
        </div>
      </div>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .flywheel {
            animation: spin-slow 28s linear infinite;
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .flywheel > div {
          animation: spin-slow 28s linear infinite reverse;
        }
      `}</style>
    </div>
  )
}
