import { Mountain } from 'lucide-react'

export default function MountainFallback({ label = 'Mountain scene' }) {
  return (
    <div className="relative flex h-[320px] w-full items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#f3e4c8] to-sand md:h-[420px]">
      <svg viewBox="0 0 400 160" className="absolute inset-x-0 bottom-0 w-full text-deep-pine/40" aria-hidden>
        <path fill="currentColor" d="M0 160 40 110 90 140 150 40 210 120 260 70 320 130 360 90 400 140 400 160Z" />
      </svg>
      <div className="relative z-10 mb-8 flex items-center gap-2 text-muted">
        <Mountain className="h-5 w-5" />
        <span className="font-mono text-xs uppercase tracking-widest">{label}</span>
      </div>
    </div>
  )
}
