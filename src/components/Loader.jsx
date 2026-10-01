import { Mountain } from 'lucide-react'

export default function Loader() {
  return (
    <div className="flex h-[50vh] items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-3 text-muted">
        <Mountain className="h-8 w-8 animate-pulse text-sunrise" aria-hidden />
        <p className="font-mono text-xs uppercase tracking-widest">Loading scene</p>
      </div>
    </div>
  )
}
