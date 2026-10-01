import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/gsapSetup'

export default function useCinematic3D() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setEnabled(mq.matches && !prefersReducedMotion())
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return enabled
}
