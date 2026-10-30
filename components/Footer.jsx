'use client'
import {useContentSettings} from './ContentSettings'
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
  const {settings}=useContentSettings()
  return (
    <footer className="relative isolate border-t border-stone bg-espresso text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10"><MediaImage src={footerImage} alt="" loading="lazy" className="size-full object-cover" /><div className="absolute inset-0 bg-black/65" /></div>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-x-10 gap-y-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-[1.5fr_0.75fr_1fr] lg:gap-x-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <SiteLink href="/" aria-label="SERIÉ home" className="inline-block">
              <span className="block font-heading text-[48px] leading-none tracking-[-0.065em]">SERIÉ</span>
              <span className="mt-3 block text-[9px] font-semibold uppercase leading-relaxed tracking-[0.18em]">Lash, Brow &amp; Training</span>
            </SiteLink>
            <p className="mt-6 max-w-[28ch] font-editorial text-[22px] leading-[1.4]">
              Your Winnipeg studio for lashes, brows, and beauty training.
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
              {settings.street}<br />{settings.city}, {settings.region} {settings.postalCode}<br />{settings.hours}
            </p>
            <div className="mt-4 flex min-w-0 flex-col items-start gap-1 [&_a]:max-w-full [&_a]:break-words">
            {settings.email && <a className={link} href={'mailto:'+settings.email}>{settings.email}</a>}
            {settings.phone && <a className={link} href={'tel:'+settings.phone}>{settings.phone}</a>}
            {settings.instagram && <SiteLink href={settings.instagram} target="_blank" rel="noopener noreferrer" className={link}>Instagram</SiteLink>}
            <SiteLink href={bookingUrl} target="_blank" rel="noopener noreferrer" className="group mt-3 inline-flex min-h-11 items-center gap-6 border-b border-white/60 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] hover:text-stone">
              <span>See you in the studio</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"><Arrow /></span>
            </SiteLink>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-4 border-t border-stone py-6 text-center text-xs leading-relaxed md:grid-cols-[1fr_auto_1fr] md:text-left">
          <p>&copy; {new Date().getFullYear()} SERIÉ. All rights reserved.</p>
          <p className="text-center">Website by <SiteLink href="https://hasnainwebstudio.com" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-stone">Hasnain Webstudio</SiteLink></p>
          <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} className="group inline-flex size-11 cursor-pointer items-center justify-center justify-self-center rounded-full border border-white/50 transition-colors hover:bg-white hover:text-espresso focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none md:justify-self-end">
            <Arrow className="size-5 -rotate-90 transition-transform group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </button>
        </div>
      </div>
    </footer>
  )
}
