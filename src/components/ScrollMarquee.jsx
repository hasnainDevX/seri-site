import { useEffect, useRef } from 'react'

// Add this section where needed; its movement follows the page scroll.
export default function ScrollMarquee({ text = 'Artistry in every detail', direction = 'left' }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let disposed = false

    const update = () => {
      frame = 0
      if (preference.matches) {
        track.style.transform = ''
        return
      }
      const bounds = section.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)))
      const distance = Math.max(0, track.scrollWidth - section.clientWidth)
      const offset = direction === 'right' ? (1 - progress) * distance : progress * distance
      // Only the scroll-dependent transform needs a dynamic style.
      track.style.transform = `translate3d(${-offset}px, 0, 0)`
    }
    const schedule = () => {
      if (!disposed && !frame) frame = window.requestAnimationFrame(update)
    }

    const resizeObserver = new ResizeObserver(schedule)
    resizeObserver.observe(section)
    resizeObserver.observe(track)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    preference.addEventListener('change', schedule)
    document.fonts.ready.then(schedule)
    schedule()

    return () => {
      disposed = true
      window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      preference.removeEventListener('change', schedule)
    }
  }, [text, direction])

  return (
    <section ref={sectionRef} aria-label={text} className="relative z-10 overflow-hidden bg-butter py-16 text-clay md:py-24">
      <div ref={trackRef} aria-hidden="true" className="flex w-max items-center gap-[6vw] px-[6vw] font-heading text-[clamp(4rem,12vw,12rem)] uppercase leading-[1.15] tracking-[-0.045em] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:text-center motion-reduce:text-[clamp(2.5rem,8vw,7rem)]">
        {[0, 1].map((copy) => (
          <span key={copy} className="flex shrink-0 items-center gap-[6vw] whitespace-nowrap motion-reduce:shrink motion-reduce:whitespace-normal motion-reduce:[&:not(:first-child)]:hidden">
            {text}
            <span className="font-body text-[0.5em] font-normal motion-reduce:hidden">✳</span>
          </span>
        ))}
      </div>
    </section>
  )
}
