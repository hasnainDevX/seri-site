import Testimonials from '../components/Testimonials'
import CircularText from '../components/CircularText'
import { motion, useReducedMotion } from 'motion/react'
import TextMarquee from '../components/TextMarquee'
import ServicesGrid from '../components/ServicesGrid'
import FAQ from '../components/FAQ'
import { useEffect } from 'react'
import RevealHeading from '../components/RevealHeading'
import Footer from '../components/Footer'
import { bookingUrl } from '../data/site'
import headshot from '../assets/Profile&ETC/seri-white-blazer-hand-on-chin.jpg'

import darkPortrait from '../assets/Profile&ETC/seri-black-top-seated-portrait.jpg'

function WaveEdge() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute -top-[31px] left-0 h-8 w-full text-white" width="100%" height="32">
      <defs>
        <pattern id="about-wave" x="0" y="0" width="120" height="32" patternUnits="userSpaceOnUse">
          <path d="M0 16 Q15 -8 30 16 T60 16 T90 16 T120 16 V32 H0Z" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="32" fill="url(#about-wave)" />
    </svg>
  )
}

export default function AboutPage() {
  const reduceMotion = useReducedMotion()
  const portraitVariants = { hidden: { x: reduceMotion ? 0 : 80, opacity: reduceMotion ? 1 : 0 }, visible: { x: 0, opacity: 1 } }
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'About Seri | SERIÉ — Lash, Brow & Training'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main className="relative isolate">
      <div className="h-[calc(100svh-32px)] min-h-[588px] motion-reduce:h-auto motion-reduce:min-h-0 md:min-h-[608px] md:motion-reduce:min-h-0">
        <section aria-labelledby="about-hero-heading" className="fixed inset-x-0 top-0 z-0 flex min-h-[max(620px,100svh)] items-center justify-center overflow-hidden bg-espresso text-white motion-reduce:relative md:min-h-[max(640px,100svh)]">
          <img src={headshot} alt="" fetchPriority="high" className="absolute inset-0 size-full object-cover object-[center_35%]" />
          <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-32 text-center md:px-12">
            <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.24em] md:text-xs">The person behind SERIÉ</p>
            <RevealHeading as="h1" id="about-hero-heading" className="font-heading text-[clamp(3.5rem,7.5vw,7rem)] uppercase leading-[1.08] tracking-[-0.035em]">Meet Seri</RevealHeading>
            <p className="mx-auto mt-7 max-w-sm font-editorial text-2xl italic leading-relaxed md:text-[28px]">Artistry, care, and a love for the details.</p>
            <a href="#meet-seri" className="mt-10 inline-flex min-h-12 items-center gap-5 border-b border-white/60 px-2 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-stone">Discover my story <span aria-hidden="true" className="text-xl">↓</span></a>
          </div>
        </section>
      </div>

      <div className="relative z-10">
        <section id="meet-seri" aria-labelledby="meet-seri-heading" className="relative scroll-mt-24 bg-white text-black">
          <WaveEdge />
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-[0.85fr_1.35fr] md:gap-8 md:px-10 md:py-20 lg:gap-16 lg:px-16 lg:py-24">
            <div className="max-w-sm md:py-12">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-clay">A little about me</p>
              <RevealHeading id="meet-seri-heading" className="font-editorial text-[clamp(2.75rem,4.5vw,4.5rem)] leading-[1.1] tracking-[-0.025em]">Meet, Seri</RevealHeading>
              <div className="mt-7 space-y-5 font-body text-sm leading-[1.8] md:text-base">
                <p>Founder of SERIÉ<br />Lash, Brow &amp; Training</p>
                <p>Lash &amp; Brow Artist<br />Permanent Makeup Artist</p>
                <p>Hands-on educator, with a passion for thoughtful, personalized beauty.</p>
              </div>
              <div className="mt-8 w-fit md:mt-10">
                <CircularText text="SERIÉ LASH BROW TRAINING " size={140} fontSize={13} spinDuration={20} direction="clockwise" fontWeight={600} hoverTilt={12} className="text-espresso">
                  <span className="pointer-events-none select-none font-heading text-[25px] font-normal leading-none tracking-[-0.065em]">SERIÉ</span>
                </CircularText>
              </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative ml-auto aspect-[1.08] w-full max-w-[760px] overflow-clip">
              <motion.img variants={portraitVariants} transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }} src={darkPortrait} alt="Seri seated in her studio" loading="lazy" className="absolute right-0 top-0 h-[92%] w-[66%] object-cover object-[center_42%]" />
              <motion.img variants={portraitVariants} transition={{ duration: reduceMotion ? 0 : 1.1, delay: reduceMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }} src={headshot} alt="Seri in a white blazer" loading="lazy" className="absolute bottom-0 left-0 h-[76%] w-[58%] rounded-t-[50%] object-cover object-center" />
            </motion.div>
          </div>
        </section>

        <div className="bg-white py-5 md:py-8"><TextMarquee /></div>

        <section aria-labelledby="story-heading" className="bg-off-white px-6 py-16 text-black md:px-10 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-clay">My story</p>
              <RevealHeading id="story-heading" className="max-w-sm font-editorial text-[40px] leading-[1.15] tracking-[-0.025em] md:text-[48px]">A passion that became my purpose.</RevealHeading>
            </div>
            <div className="space-y-6 font-editorial text-xl leading-[1.6] md:text-[22px]">
              <p>My beauty journey began in 2023, offering lash extensions alongside my corporate career. With the trust of a loyal clientele, I embraced beauty full-time in June 2024.</p>
              <p>Since then, I’ve expanded into Korean lash lifts, brow lamination, and permanent makeup brows. For me, growth has never been about simply adding more services. It’s about mastering each skill and consistently delivering quality results.</p>
              <p>As an artist and educator, I continue investing in advanced education to refine my techniques and bring fresh perspectives to my clients and students.</p>
              <p>Whether you’re here for a personalized service or hands-on training, every experience is built on quality, care, and attention to detail.</p>
              <p className="italic">I look forward to welcoming you to SERIÉ!</p>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-espresso bg-espresso px-8 py-3 font-body text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-transparent hover:text-espresso">Book an appointment</a>
            </div>
          </div>
        </section>
        <ServicesGrid />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}
