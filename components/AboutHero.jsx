import MediaImage from '@/components/MediaImage'
import SiteLink from '@/components/SiteLink'
import RevealHeading from './RevealHeading'
const headshot = "/assets/Profile&ETC/seri-white-blazer-hand-on-chin.jpg"

export default function AboutHero() {
  return (
    <div className="h-[calc(100svh-32px)] min-h-[588px] motion-reduce:h-auto motion-reduce:min-h-0 md:min-h-[608px] md:motion-reduce:min-h-0">
      <section aria-labelledby="about-hero-heading" className="fixed inset-x-0 top-0 z-0 flex min-h-[max(620px,100svh)] items-end overflow-hidden bg-espresso px-6 pb-14 pt-40 text-white md:px-10 md:pb-20 lg:px-16 motion-reduce:relative md:min-h-[max(640px,100svh)]">
        <MediaImage src={headshot} alt="" fetchPriority="high" className="absolute inset-0 size-full object-cover object-[center_35%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto w-full max-w-[1200px] text-left">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] md:text-xs">The person behind SERIÉ</p>
          <RevealHeading as="h1" id="about-hero-heading" className="font-heading text-[clamp(3.5rem,7.5vw,7rem)] uppercase leading-[1.08] tracking-[-0.035em]">Meet Seri</RevealHeading>
          <p className="mt-6 max-w-sm font-editorial text-2xl italic leading-relaxed md:text-[28px]">Lash and brow artistry, with a personal approach.</p>
          <SiteLink href="#about" className="mt-8 inline-flex min-h-12 items-center gap-5 border-b border-white/60 px-2 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-stone">Get to know me <span aria-hidden="true" className="text-xl">↓</span></SiteLink>
        </div>
      </section>
    </div>
  )
}