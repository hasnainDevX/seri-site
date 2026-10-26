import MediaImage from '@/components/MediaImage'
import SiteLink from '@/components/SiteLink'
import RevealHeading from './RevealHeading'
const footerImage = "/assets/bgs/site-background.webp"
import { bookingUrl } from '@/data/site'

const label = 'font-body text-[11px] font-semibold uppercase leading-relaxed tracking-[0.18em]'
const link = 'inline-flex min-h-11 items-center text-sm underline-offset-4 transition-colors hover:text-stone hover:underline motion-reduce:transition-none'

function Arrow({ className = 'size-4' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative isolate border-t border-stone bg-espresso text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10"><MediaImage src={footerImage} alt="" loading="lazy" className="size-full object-cover" /><div className="absolute inset-0 bg-black/65" /></div>
      <div className="border-b border-stone bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-10 md:grid-cols-2 md:items-center md:gap-12 md:px-10 md:py-12 lg:gap-24 lg:px-16 text-espresso">
          <div>
            <RevealHeading className={label}>Stay connected</RevealHeading>
            <RevealHeading as="p" className="mt-3 max-w-md font-heading text-[28px] leading-[1.25] tracking-[-0.025em] md:text-[32px]">
              A little beauty, in your inbox.
            </RevealHeading>
          </div>
          <div className="min-w-0">
            <p className="max-w-md text-sm leading-7">
              New services, training dates, and updates from the studio.
            </p>
            {/* Enable signup when the mailing-list integration is connected. */}
            <div className="mt-4 flex min-h-12 items-center justify-between gap-4 border-b border-taupe pb-3">
              <span className="text-sm">Newsletter sign-ups opening soon</span>
              <Arrow className="size-5 shrink-0" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-x-10 gap-y-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-[1.5fr_0.75fr_1fr] lg:gap-x-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <SiteLink href="/" aria-label="SERIÉ home" className="inline-block">
              <span className="block font-heading text-[48px] leading-none tracking-[-0.065em]">SERIÉ</span>
              <span className="mt-3 block text-[9px] font-semibold uppercase leading-relaxed tracking-[0.18em]">Lash, Brow &amp; Training</span>
            </SiteLink>
            <p className="mt-6 max-w-[28ch] font-editorial text-[22px] leading-[1.4]">
              Enhance your natural beauty with care and precision.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <RevealHeading className={label}>Explore</RevealHeading>
            <ul className="mt-4">
              <li><SiteLink href="/" className={link}>Home</SiteLink></li>
              <li><SiteLink href="/policies" className={link}>Studio policies</SiteLink></li>
              <li><SiteLink href="/about" className={link}>Meet Seri</SiteLink></li>
              <li><SiteLink href="/training" className={link}>Training</SiteLink></li><li><SiteLink href="/contact" className={link}>Contact</SiteLink></li>
            </ul>
          </nav>

          <div>
            <RevealHeading className={label}>Visit the studio</RevealHeading>
            <p className="mt-6 text-sm leading-7">
              Winnipeg, Canada<br />
              By appointment
            </p>
            <SiteLink href={bookingUrl} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex min-h-11 items-center gap-6 border-b border-white/60 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] hover:text-stone">
              See you in the studio
              <span className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"><Arrow /></span>
            </SiteLink>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-stone py-6 text-xs leading-relaxed sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} SERIÉ. All rights reserved.</p>
          <SiteLink href="#root" className="inline-flex min-h-11 w-fit items-center gap-3 underline-offset-4 hover:underline">
            Back to top <Arrow className="size-4 -rotate-90" />
          </SiteLink>
        </div>
      </div>
    </footer>
  )
}
