import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

// Uneven timings recreate the scattered bars of a presentation transition.
const delays = [0.12, 0.03, 0.24, 0.09, 0.3, 0.18, 0, 0.27, 0.06, 0.21, 0.15, 0.33, 0.04, 0.25, 0.1, 0.19]

export default function Preloader() {
  const reduceMotion = useReducedMotion()
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setFinished(true), 1500)
    return () => window.clearTimeout(timer)
  }, [reduceMotion])

  useEffect(() => {
    if (finished) return
    const previous = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => { document.documentElement.style.overflow = previous }
  }, [finished])

  if (finished) return null

  return (
    <div className="fixed inset-0 z-[1000] overflow-hidden" role="status" aria-label="Loading SERIÉ">
      <div className="absolute inset-0 flex" aria-hidden="true">
        {delays.map((delay, index) => (
          <motion.div
            key={index}
            className="-mr-px h-full flex-1 origin-top bg-white"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: reduceMotion ? 1 : 0 }}
            transition={{ delay: 0.85 + delay * 0.5, duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          />
        ))}
      </div>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center text-espresso"
        initial={{ opacity: 1 }}
        animate={{ opacity: reduceMotion ? 1 : 0 }}
        transition={{ delay: 0.65, duration: 0.2 }}
      >
        <div className="overflow-hidden pb-2">
          <motion.span
            className="block font-heading text-[64px] leading-[1.15] tracking-[-0.065em] md:text-[88px]"
            initial={{ y: reduceMotion ? 0 : '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >SERIÉ</motion.span>
        </div>
        <div className="mt-2 overflow-hidden">
          <motion.span
            className="block font-body text-[9px] font-semibold uppercase tracking-[0.24em] md:text-[10px]"
            initial={{ y: reduceMotion ? 0 : '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >Lash, Brow &amp; Training</motion.span>
        </div>
      </motion.div>
    </div>
  )
}
