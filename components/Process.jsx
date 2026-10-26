import SiteLink from '@/components/SiteLink'
import RevealHeading from './RevealHeading'
import { bookingUrl } from '@/data/site'

const steps = [
  {
    number: '01',
    title: 'Choose your treatment',
    description: 'Explore our lash and brow services and book your appointment online. Unsure where to start? Get in touch and we’ll help you find the right fit.',
  },
  {
    number: '02',
    title: 'Make it personal',
    description: 'We’ll talk through the look you love and consider your natural features. Your treatment is tailored to you, with thoughtful attention to every detail.',
  },
  {
    number: '03',
    title: 'Care beyond the studio',
    description: 'Leave with aftercare guidance for your treatment, so you know how to care for your lashes or brows and when to return for maintenance.',
  },
]

export default function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-off-white px-6 py-16 text-black md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-[1100px] text-center">
        <RevealHeading id="process-heading" className="mx-auto max-w-[18ch] font-editorial text-[clamp(2.75rem,5vw,4rem)] font-normal leading-[1.02] tracking-[-0.025em]">
          A little care.<br />A look that’s yours.
        </RevealHeading>
        <p className="mx-auto mt-6 max-w-[36ch] text-[10px] font-medium uppercase leading-[1.9] tracking-[0.16em] md:text-xs">
          Your experience at SERIÉ, from booking to the finishing touches
        </p>

        <ol className="mx-auto mt-10 grid max-w-[940px] gap-9 md:mt-12 md:grid-cols-3 md:gap-8 lg:gap-14">
          {steps.map((step) => (
            <li key={step.number} className="relative mx-auto w-full max-w-[280px] pt-20 md:pt-24">
              <span aria-hidden="true" className="pointer-events-none absolute -top-4 left-0 select-none font-editorial text-[140px] italic leading-none tracking-[-0.06em] text-espresso/25 md:text-[160px]">
                {step.number}
              </span>
              <div className="relative">
                <RevealHeading as="h3" className="mx-auto max-w-[20ch] font-body text-xs font-medium uppercase leading-[1.7] tracking-[0.13em] md:min-h-[41px]">
                  {step.title}
                </RevealHeading>
                <p className="mx-auto mt-4 max-w-[29ch] text-[13px] leading-[1.75] text-espresso">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <SiteLink href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex min-h-12 items-center justify-center bg-espresso px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-clay motion-reduce:transition-none md:mt-12">
          I’m ready — let’s book
        </SiteLink>
      </div>
    </section>
  )
}