import { useRef } from 'react'
import { motion, useReducedMotion, useInView } from 'motion/react'

export default function RevealHeading({ as: Tag = 'h2', children, ...props }) {
  const reduceMotion = useReducedMotion()
  const maskRef = useRef(null)
  const inView = useInView(maskRef, { once: true, amount: 0.25 })

  return (
    <Tag {...props}>
      <span ref={maskRef} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
        <motion.span
          className="block"
          initial={{ y: reduceMotion ? 0 : '115%' }}
          animate={{ y: inView || reduceMotion ? 0 : '115%' }}

          transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.span>
      </span>
    </Tag>
  )
}
