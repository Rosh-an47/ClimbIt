import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { pageAudioIndex } from '../lib/design'

const AudioCtx = createContext(null)

const NARRATION = [
  '/audio/section-1.mp3',
  '/audio/section-2.mp3',
  '/audio/section-3.mp3',
  '/audio/section-4.mp3',
  '/audio/section-5.mp3',
  '/audio/section-6.mp3',
]

function fadeTo(audio, target, ms = 600) {
  if (!audio) return
  const start = audio.volume
  const steps = 12
  const step = (target - start) / steps
  let i = 0
  const id = setInterval(() => {
    i += 1
    audio.volume = Math.max(0, Math.min(1, start + step * i))
    if (i >= steps) {
      audio.volume = target
      clearInterval(id)
    }
  }, ms / steps)
}

export function AudioProvider({ children }) {
  const [muted, setMuted] = useState(true)
  const [unlocked, setUnlocked] = useState(false)
  const [narrating, setNarrating] = useState(false)
  const ambientRef = useRef(null)
  const voiceRef = useRef(null)
  const pathnameRef = useRef('/')

  const stopVoice = useCallback(() => {
    const voice = voiceRef.current
    if (voice) {
      try {
        voice.pause()
        voice.currentTime = 0
      } catch {
        /* missing files fail silently */
      }
    }
    setNarrating(false)
  }, [])

  const playAmbient = useCallback(async () => {
    const ambient = ambientRef.current
    if (!ambient || muted) return
    try {
      ambient.loop = true
      ambient.volume = 0
      await ambient.play()
      fadeTo(ambient, 0.15, 800)
    } catch {
      /* autoplay or missing file */
    }
  }, [muted])

  const playPage = useCallback(
    async (index) => {
      if (muted) return
      stopVoice()
      const src = NARRATION[index]
      if (!src) return
      const voice = new Audio(src)
      voice.volume = 0
      voiceRef.current = voice
      try {
        await voice.play()
        setNarrating(true)
        fadeTo(voice, 0.7, 700)
        voice.onended = () => setNarrating(false)
        voice.onerror = () => setNarrating(false)
      } catch {
        setNarrating(false)
      }
    },
    [muted, stopVoice],
  )

  const stopAll = useCallback(() => {
    stopVoice()
    const ambient = ambientRef.current
    if (ambient) {
      try {
        fadeTo(ambient, 0, 400)
        setTimeout(() => ambient.pause(), 420)
      } catch {
        /* ignore */
      }
    }
  }, [stopVoice])

  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev)
  }, [])

  useEffect(() => {
    const ambient = new Audio('/audio/ambient.mp3')
    ambient.loop = true
    ambient.volume = 0.15
    ambientRef.current = ambient

    const unlock = () => {
      setUnlocked(true)
    }
    window.addEventListener('pointerdown', unlock, { once: true })
    return () => {
      window.removeEventListener('pointerdown', unlock)
      stopAll()
    }
  }, [stopAll])

  useEffect(() => {
    if (!unlocked) return
    if (muted) {
      stopAll()
      return
    }
    playAmbient()
    const idx = pageAudioIndex[pathnameRef.current] ?? 0
    playPage(idx)
  }, [muted, unlocked, playAmbient, playPage, stopAll])

  const setPath = useCallback(
    (path) => {
      pathnameRef.current = path
      if (!muted && unlocked) {
        playPage(pageAudioIndex[path] ?? 0)
      }
    },
    [muted, unlocked, playPage],
  )

  const value = useMemo(
    () => ({
      muted,
      unlocked,
      narrating,
      playPage,
      stopAll,
      toggleMute,
      setPath,
    }),
    [muted, unlocked, narrating, playPage, stopAll, toggleMute, setPath],
  )

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>
}

export function useAudio() {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error('useAudio must be used within AudioProvider')
  return ctx
}
