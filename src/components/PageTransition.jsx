import { motion } from 'framer-motion'
import { prefersReducedMotion } from '../lib/gsapSetup'

export default function PageTransition({ children }) {
  const reduced = prefersReducedMotion()
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
