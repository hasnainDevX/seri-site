import {getContent} from '@/lib/cms'
import ArrowIcon from './ArrowIcon'
import MediaImage from '@/components/MediaImage'
import DeferredBackdrop from './DeferredBackdrop'
import SiteLink from '@/components/SiteLink'
import RevealHeading from "./RevealHeading";
import { bookingUrl } from "@/data/site";
const studioImage = "/assets/Profile&ETC/seri-brow-brush-mirror-landscape.jpg"
export default async function ServicesShowcase() {
  const {services: current}=await getContent()
  const services=['nano-combo-brows','korean-lash-lift','lash-extensions','brow-lamination'].map(slug=>current.find(s=>s.slug===slug)).map(s=>({...s.summary,bookingUrl:s.bookingUrl}))
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate scroll-mt-20 overflow-hidden bg-espresso px-5 py-14 md:px-10 md:py-20"
    >
      <div aria-hidden="true" data-service-backdrop className="pointer-events-none absolute inset-0 -z-20 [clip-path:inset(0)]">
        <DeferredBackdrop src={studioImage} alt="" loading="lazy" className="fixed inset-0 h-svh w-full object-cover object-center motion-reduce:absolute motion-reduce:h-full" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/50"
      />
      <div
        id="services-heading"
        className="mx-auto mb-10 max-w-[1000px] md:mb-[72px]"
      >
        <RevealHeading
          as="h2"
          className="font-editorial text-center text-[44px] font-medium leading-[1.05] tracking-[-0.045em] text-off-white md:text-[64px]"
        >
          Lash &amp; brow services
        </RevealHeading>
      </div>
      <div className="mx-auto grid max-w-[1000px] gap-10 md:gap-[72px]">
        {services.map((service) => (
          <article
            key={service.name}
            className="grid min-w-0 border border-espresso bg-off-white p-2.5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          >
            <MediaImage
              sizes="(min-width: 768px) 330px, calc(100vw - 60px)" src={service.image}
              alt={service.name + " by Seri"}
              loading="lazy"
              className="aspect-[7/6] w-full object-cover md:h-full md:min-h-[274px]"
            />
            <div className="flex flex-col items-start px-4 py-7 text-espresso md:px-9 md:py-5 lg:px-11">
              <RevealHeading
                as="h3"
                className="font-editorial text-[36px] font-medium leading-[1.1] tracking-[-0.045em] text-black md:text-[40px]"
              >
                {service.name}
              </RevealHeading>
              <p className="mt-4 font-body text-sm leading-[1.6] md:text-[15px]">
                {service.intro}
              </p>
              <p className="mb-7 mt-5 max-w-[58ch] font-body text-sm leading-[1.6] md:text-[15px]">
                {service.description}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
              <SiteLink href={service.href} aria-label={"Explore this treatment: " + service.name} className="inline-flex min-h-11 items-center gap-3 text-[11px] font-medium uppercase tracking-[0.06em] underline underline-offset-4 hover:text-clay">Explore this treatment <ArrowIcon /></SiteLink>
              <SiteLink
                href={service.bookingUrl || bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Find my appointment — " + service.name}
                className="inline-flex min-h-11 min-w-[200px] items-center justify-center border border-espresso bg-white px-6 py-2 text-[11px] font-medium uppercase tracking-[0.06em] text-black transition-colors hover:bg-espresso hover:text-off-white focus-visible:outline-espresso motion-reduce:transition-none"
              >
                Find my appointment
              </SiteLink></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
