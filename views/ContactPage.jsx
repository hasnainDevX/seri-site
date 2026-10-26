import MediaImage from '@/components/MediaImage'
import SiteLink from '@/components/SiteLink'
import RevealHeading from '@/components/RevealHeading'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
const contactBackground = "/assets/bgs/site-background.webp"
const posterImage = "/assets/Profile&ETC/seri-laptop-sofa-full-length.jpg"
import Marquee from '@/components/Marquee'

const address = '296 Stafford St, Winnipeg, MB R3M 1J1, Canada'
const mapQuery = encodeURIComponent(address)
const mapUrl = 'https://www.google.com/maps?q=' + mapQuery + '&z=16&output=embed'
const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + mapQuery
const heading = 'font-editorial text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.025em]'
const eyebrow = 'mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-clay'

export default function ContactPage() {

  return (
    <main className="bg-white text-black">
      <section aria-labelledby="contact-title" className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-espresso px-6 pb-14 pt-36 text-white md:min-h-[620px] md:px-10 md:pb-20 lg:px-16">
        <MediaImage src={posterImage} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em]">Contact SERIÉ · Winnipeg</p>
          <RevealHeading as="h1" id="contact-title" className="max-w-[12ch] font-editorial text-[clamp(3.5rem,7vw,6.5rem)] leading-[1.02] tracking-[-0.025em]">Let’s connect.</RevealHeading>
          <p className="mt-6 max-w-[40ch] font-editorial text-[24px] leading-[1.4] md:text-[28px]">A little guidance. Your next appointment. We’re here for you.</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <SiteLink href="#contact-inquiry" className="inline-flex min-h-12 items-center justify-center border border-white/70 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-espresso">Let’s start a conversation</SiteLink>
            <SiteLink href="#studio-location" className="inline-flex min-h-12 items-center gap-4 text-[10px] font-medium uppercase tracking-[0.16em] underline-offset-4 hover:underline">Find the studio <span aria-hidden="true">↓</span></SiteLink>
          </div>
        </div>
      </section>
      <Marquee/>

      <section id="contact-inquiry" aria-labelledby="message-title" className="relative isolate scroll-mt-16 overflow-hidden bg-espresso px-4 py-14 md:scroll-mt-20 md:px-10 md:py-20">
        <MediaImage src={contactBackground} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-espresso/55" />
        <div className="mx-auto w-full max-w-2xl bg-off-white px-6 py-12 shadow-2xl shadow-black/15 md:px-16 md:py-16">
          <div className="mb-10 text-center md:mb-12">
            <p className="mb-3 font-editorial text-[24px] italic leading-[1.35] text-clay md:text-[28px]">A little time, just for you.</p>
            <RevealHeading id="message-title" className="font-editorial text-[clamp(2.25rem,4vw,3.25rem)] font-normal uppercase leading-[1.1] tracking-[-0.025em]">Let’s get in touch</RevealHeading>
            <div aria-hidden="true" className="mx-auto my-6 h-px w-12 bg-taupe" />
            <p className="text-sm leading-[1.8] text-espresso">Beautiful lashes and brows begin with understanding you. Tell us what you’re looking for and we’ll help you find the right treatment.</p>
            <p className="mt-4 text-sm leading-[1.8] text-espresso">Complete the form below and Seri will be in touch to discuss your preferences and availability.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section id="studio-location" aria-labelledby="location-title" className="scroll-mt-24 border-t border-stone bg-off-white px-6 py-16 md:scroll-mt-28 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-9 grid items-end gap-7 md:grid-cols-2 md:gap-14">
            <div>
              <p className={eyebrow}>Find us in Winnipeg</p>
              <RevealHeading id="location-title" className={heading}>Visit the studio.</RevealHeading>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <address className="text-sm not-italic leading-[1.85]">296 Stafford St<br />Winnipeg, MB R3M 1J1<br /></address>
              <div>
                <p className="text-sm leading-[1.85]">By appointment</p>
                <SiteLink href={directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em] underline underline-offset-4">Show me the way <span aria-hidden="true">↗</span></SiteLink>
              </div>
            </div>
          </div>
          <div className="overflow-hidden border border-stone bg-greige">
            <iframe title="Google Map: SERIÉ studio at 296 Stafford Street, Winnipeg" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="block h-[360px] w-full border-0 md:h-[480px]" />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-espresso"><SiteLink href={directionsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Open directions in Google Maps.</SiteLink></p>
        </div>
      </section>
      <Footer />
    </main>
  )
}