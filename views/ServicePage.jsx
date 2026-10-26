'use client'
import MotionImage from '@/components/MotionImage'


import SiteLink from '@/components/SiteLink'
import { motion, useReducedMotion } from 'motion/react'
import RevealHeading from '@/components/RevealHeading'
import TextMarquee from '@/components/TextMarquee'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
const serviceNavBackground = "/assets/bgs/site-background.webp"
import { bookingUrl } from '@/data/site'
import { servicePages } from '@/data/servicePages'
import Marquee from '@/components/TextMarquee'
import Marquee2 from '@/components/Marquee'


const buttonClass = 'inline-flex min-h-12 items-center justify-center border border-espresso px-7 py-3 font-body text-[10px] font-medium uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-espresso hover:text-white motion-reduce:transition-none'

function BookingLink({ label = 'Take me to booking' }) {
  return <SiteLink href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>{label}</SiteLink>
}

export default function ServicePage({ service }) {
  const reduceMotion = useReducedMotion()


  return (
    <main className="bg-white text-black">
      <div className="relative h-[50svh] min-h-[320px] max-h-[580px] overflow-hidden bg-espresso md:h-[60svh] md:min-h-[420px]">
        <MotionImage src={service.heroImage} alt={`${service.title} at SERIÉ`} fetchPriority="high" initial={{ scale: reduceMotion ? 1 : 1.06 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 1.8, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 size-full object-cover" style={{ objectPosition: service.heroPosition }} />
        <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      </div>
      <section aria-labelledby="service-title" className="bg-off-white px-6 py-12 text-center md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-[760px]">
          <SiteLink href="/#services" className="mb-4 inline-flex min-h-8 items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-clay hover:underline"><span aria-hidden="true">←</span> Our services</SiteLink>
          <RevealHeading as="h1" id="service-title" className="font-editorial text-[clamp(2.75rem,4.8vw,4rem)] font-normal leading-[1.08] tracking-[-0.025em]">{service.title}</RevealHeading>
          <p className="mt-4 font-editorial text-[23px] italic leading-[1.35] text-clay md:text-[26px]">{service.tagline}</p>
          <p className="mx-auto mt-5 max-w-[64ch] font-body text-sm leading-[1.8] md:text-[15px]">{service.description}</p>
          <div className="mt-7"><BookingLink label="Find my next appointment" /></div>
        </div>
      </section>

      <nav aria-label="On this service page" className="sticky top-16 z-30 overflow-x-auto border-y border-stone bg-white bg-cover bg-center md:top-20" style={{ backgroundImage: `linear-gradient(rgb(255 255 255 / 55%), rgb(255 255 255 / 55%)), url(${serviceNavBackground})` }}>
        <div className="mx-auto flex w-max min-w-full items-center justify-center gap-7 px-6 md:gap-10 md:px-10">
          {service.sections.map(section => <SiteLink key={section.id} href={`#${section.id}`} className="flex min-h-14 shrink-0 items-center whitespace-nowrap font-editorial text-xl leading-snug underline-offset-4 hover:underline md:min-h-16 md:text-[22px]">{section.title}</SiteLink>)}
          <SiteLink href="#faq" className="flex min-h-14 shrink-0 items-center font-editorial text-xl underline-offset-4 hover:underline md:min-h-16 md:text-[22px]">FAQs</SiteLink>
        </div>
      </nav>

      <div className="mx-auto max-w-[1600px]">
        {service.sections.map((section, index) => (
          <section id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`} className={`grid scroll-mt-32 md:grid-cols-2 md:scroll-mt-40 ${index % 2 ? 'bg-off-white' : 'bg-white'}`}>
            <div className={`flex flex-col items-start justify-center px-6 py-12 md:px-10 md:py-14 lg:px-14 xl:px-20 ${index % 2 ? 'md:order-2' : ''}`}>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-clay">{section.eyebrow}</p>
              <RevealHeading id={`${section.id}-heading`} className="font-editorial text-[36px] font-normal leading-[1.12] tracking-[-0.025em] md:text-[44px] lg:text-[48px]">{section.title}</RevealHeading>
              <div className="mt-6"><BookingLink label="See available times" /></div>
              <p className="mt-6 max-w-[52ch] font-body text-sm leading-[1.8] md:text-[15px]">{section.description}</p>
              <dl className="mt-7 w-full max-w-lg border-t border-stone">
                {section.facts.map(([label, value]) => <div key={label} className="grid grid-cols-[90px_minmax(0,1fr)] gap-5 border-b border-stone py-4"><dt className="pt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-clay">{label}</dt><dd className="font-editorial text-xl leading-[1.35] md:text-[22px]">{value}</dd></div>)}
              </dl>
              {section.detail && <p className="mt-6 max-w-[52ch] font-body text-sm leading-[1.8] text-espresso">{section.detail}</p>}
            </div>
            <motion.figure initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className={`relative aspect-square overflow-hidden bg-greige md:aspect-auto md:min-h-[520px] ${index % 2 ? 'md:order-1' : ''}`}>
              <MotionImage sizes="(min-width: 768px) 50vw, calc(100vw - 48px)" src={section.image} alt={section.imageAlt} loading="lazy" variants={{ hidden: { x: reduceMotion ? 0 : 45, opacity: reduceMotion ? 1 : 0 }, visible: { x: 0, opacity: 1 } }} transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 size-full object-contain" />
              <figcaption className="absolute bottom-5 left-5 right-5 w-fit max-w-[calc(100%-2.5rem)] bg-white/95 px-4 py-2 text-[9px] font-medium uppercase leading-relaxed tracking-[0.12em] text-espresso">{section.caption}</figcaption>
            </motion.figure>
          </section>
        ))}
      </div>

      {service.aftercare && <section aria-labelledby="maintenance-heading" className="bg-off-white px-6 py-14 md:px-10 md:py-20 lg:px-16"><div className="mx-auto grid max-w-[1120px] gap-7 md:grid-cols-2 md:gap-20"><RevealHeading id="maintenance-heading" className="font-editorial text-[38px] leading-[1.15] tracking-[-0.025em] md:text-[46px]">{service.aftercare.title}</RevealHeading><div><p className="text-sm leading-[1.8] md:text-[15px]">{service.aftercare.text}</p><div className="mt-7"><BookingLink label="Time for my lash fill" /></div></div></div></section>}
      <div className="bg-off-white py-6 md:py-10"><TextMarquee items={['Thoughtful artistry', 'Made for you', 'Care in every detail']} /></div>
      <FAQ service={service.faqTitle} />
      <Marquee2/>
      <Testimonials />

      <section aria-labelledby="service-booking-heading" className="bg-off-white px-6 py-16 text-center md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-clay">Your next appointment</p>
          <RevealHeading id="service-booking-heading" className="font-editorial text-[42px] leading-[1.1] tracking-[-0.025em] md:text-[56px]">Let’s find your look.</RevealHeading>
          <p className="mx-auto mb-7 mt-5 max-w-md text-sm leading-[1.8]">Explore availability and book your visit with Seri.</p>
          <BookingLink />
          <div className="mt-14 border-t border-stone pt-8 md:mt-20">
            <RevealHeading as="h3" className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em]">Explore more services</RevealHeading>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {servicePages.filter(item => item.slug !== service.slug).map(item => <SiteLink key={item.slug} href={`/services/${item.slug}`} className="inline-flex min-h-11 items-center gap-3 font-editorial text-xl underline-offset-4 hover:underline md:text-2xl">{item.title}<span aria-hidden="true" className="text-base">↗</span></SiteLink>)}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
