import { Volume2, VolumeX } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

export default function AudioController() {
  const { muted, toggleMute, narrating } = useAudio()

  return (
    <button
      type="button"
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-50 inline-flex min-h-12 items-center gap-2 rounded-full border border-stone bg-warm-white/95 px-4 py-2 text-sm text-charcoal shadow-lg backdrop-blur transition hover:-translate-y-0.5"
      aria-pressed={!muted}
    >
      {muted ? <VolumeX className="h-4 w-4" aria-hidden /> : <Volume2 className="h-4 w-4 text-sunrise" aria-hidden />}
      <span>{muted ? 'Play narration' : narrating ? 'Narrating…' : 'Sound on'}</span>
    </button>
  )
}
