import MediaImage from '@/components/MediaImage'
import SiteLink from '@/components/SiteLink'
import RevealHeading from '@/components/RevealHeading'
import Footer from '@/components/Footer'
const portrait = "/assets/Profile&ETC/seri-black-top-seated-portrait.jpg"

export default function NotFoundPage() {

  return (
    <main className="bg-off-white text-espresso">
      <section className="mx-auto grid min-h-[85svh] max-w-[1200px] items-center gap-10 px-6 pb-16 pt-36 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-10 md:pb-24 md:pt-44 lg:px-16">
        <div>
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-clay">404 · Page not found</p>
          <RevealHeading as="h1" className="font-editorial text-[clamp(3.5rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.03em]">A little<br />off course.</RevealHeading>
          <p className="mt-6 max-w-[37ch] text-sm leading-[1.85]">This page may have moved, or the link may be incorrect. Let’s get you back to something beautiful.</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <SiteLink href="/" className="inline-flex min-h-12 items-center justify-center bg-espresso px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-clay">Take me home</SiteLink>
            <SiteLink href="/#services" className="inline-flex min-h-12 items-center text-[10px] font-medium uppercase tracking-[0.14em] underline underline-offset-4 hover:text-clay">Find my next treatment →</SiteLink>
          </div>
        </div>
        <MediaImage sizes="(min-width: 480px) 380px, calc(100vw - 48px)" src={portrait} alt="Seri seated in her studio" className="mx-auto aspect-[4/5] w-full max-w-[380px] object-cover object-[center_35%]" />
      </section>
      <Footer />
    </main>
  )
}
