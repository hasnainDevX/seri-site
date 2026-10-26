import SiteLink from '@/components/SiteLink'
import RevealHeading from '@/components/RevealHeading'
import Footer from '@/components/Footer'
import { policies } from '@/data/policies'
const heroBackground = "/assets/Profile&ETC/serie-training-materials-overhead.jpg"

export default function PoliciesPage() {

  return (
    <main className="bg-off-white text-espresso">
     <header className="relative bg-cover bg-center px-6 pb-12 pt-36 text-center md:px-10 md:pb-16 md:pt-44 text-white object-center" style={{ backgroundImage: 'url(' + heroBackground + ')' }}>
  <div className="absolute inset-0 bg-espresso/40 z-0" />
  <div className="relative z-10">
    <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] ">Before your visit</p>
    <RevealHeading as="h1" className="font-editorial z-20 text-[clamp(3.5rem,7vw,6rem)] leading-none tracking-[-0.035em]">A little clarity,<br />before we begin.</RevealHeading>
    <p className="mx-auto mt-6 max-w-[48ch] text-sm leading-[1.85]">Please take a moment to read our studio policies before booking your appointment.</p>
  </div>
</header>
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 pb-16 md:grid-cols-[0.65fr_1.35fr] md:gap-16 md:px-10 md:pb-24 lg:px-16">
        <nav aria-label="Policy topics" className="h-fit border-t border-stone pt-6 md:sticky md:top-28">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.16em]">Studio policies</p>
          {policies.map(policy => <SiteLink key={policy.id} href={'#' + policy.id} className="flex min-h-11 items-center py-2 font-editorial text-xl leading-snug underline-offset-4 hover:underline">{policy.title}{policy.id.includes('changes') ? (policy.id === 'pmu-changes' ? ' · PMU' : ' · Non-PMU') : ''}</SiteLink>)}
          <SiteLink href="/training#course-details" className="mt-5 inline-flex min-h-11 items-center text-xs underline underline-offset-4">Looking for training details? →</SiteLink>
        </nav>
        <div className="min-w-0 border-t border-stone">
          {policies.map(policy => (
            <section key={policy.id} id={policy.id} aria-labelledby={policy.id + '-title'} className="scroll-mt-28 border-b border-stone py-8 md:py-10">
              {policy.subtitle && <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-clay">{policy.subtitle}</p>}
              <RevealHeading id={policy.id + '-title'} className="font-editorial text-[32px] leading-[1.15] tracking-[-0.02em] md:text-[38px]">{policy.title}</RevealHeading>
              <div className="mt-5 max-w-[62ch] space-y-4 text-sm leading-[1.9] md:text-[15px]">{policy.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            </section>
          ))}
          <div className="pt-8">
            <p className="font-editorial text-2xl">Have a question before you book?</p>
            <SiteLink href="/contact#contact-inquiry" className="mt-5 inline-flex min-h-12 items-center justify-center bg-espresso px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-clay">Let’s clear it up</SiteLink>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
