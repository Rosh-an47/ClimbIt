import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function setupGsap() {
  if (registered || prefersReducedMotion()) return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

export function revealElements(elements, options = {}) {
  if (!elements?.length || prefersReducedMotion()) return null
  setupGsap()
  return gsap.from(elements, {
    y: 28,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
    },
    ...options,
  })
}
