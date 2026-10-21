import { useEffect, useRef, useState } from 'react'
import { bookingUrl, navigation, services } from '../data/site'
import useOutsideClick from '../hooks/useOutsideClick'

function PageLink({ item, className, underline = false }) {
  const label = underline ? (
    <span className="relative inline-flex items-center gap-2">
      {item.label}
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
    </span>
  ) : item.label

  return item.href ? (
    <a className={`${className}${underline ? ' group' : ''}`} href={item.href}>{label}</a>
  ) : (
    <button type="button" disabled className={className}>{label}</button>
  )
}

function ServicesMenu({ mobile = false }) {
  const detailsRef = useRef(null)

  useOutsideClick(detailsRef, () => {
    if (detailsRef.current?.open) detailsRef.current.open = false
  })

  return (
    <details
      ref={detailsRef}
      className="group/services relative"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.currentTarget.open = false
          event.currentTarget.querySelector('summary').focus()
        }
      }}
    >
      <summary className="group flex cursor-pointer list-none items-center gap-2 py-3 text-[10px] font-medium uppercase tracking-[0.16em] focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
        <span className="relative inline-flex items-center">
          Services
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
        </span>
        <svg className="size-3 transition-transform group-open/services:rotate-180 motion-reduce:transition-none" viewBox="0 0 12 12" fill="none" stroke="currentColor" aria-hidden="true"><path d="m3 4.5 3 3 3-3" /></svg>
      </summary>
      <div className={mobile ? 'grid gap-1 pb-4 pl-4' : 'absolute top-full -left-5 z-30 grid w-64 gap-1 border border-stone bg-white p-4 text-espresso shadow-lg shadow-espresso/5'}>
        {services.map((item) => <PageLink key={item.label} item={item} className="block cursor-pointer px-2 py-2.5 text-left text-xs leading-relaxed transition-colors enabled:hover:bg-greige" />)}
      </div>
    </details>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const solid = scrolled || menuOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navClass = 'py-3 text-[10px] font-medium uppercase tracking-[0.16em] cursor-pointer disabled:cursor-not-allowed'

  return (
    <header className={`sticky top-0 z-50 -mb-16 transition-colors duration-300 motion-reduce:transition-none md:-mb-20 [&_a:focus-visible]:outline-current [&_button:focus-visible]:outline-current ${solid ? 'bg-white text-espresso shadow-sm shadow-espresso/5' : 'bg-transparent text-off-white'}`}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-6 md:h-20 md:px-10 lg:px-16">
        {/* Text wordmark until the original logo file is supplied. */}
        <a href="/" aria-label="SERIÉ home" className="shrink-0 text-inherit">
          <span className="block font-heading text-[32px] leading-none tracking-[-0.065em] md:text-[38px]">SERIÉ</span>
          <span className="mt-1.5 block text-[7px] font-semibold uppercase leading-none tracking-[0.18em]">Lash, Brow & Training</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex xl:gap-10">
          <PageLink item={navigation[0]} className={navClass} underline />
          <ServicesMenu />
          {navigation.slice(1).map((item) => <PageLink key={item.label} item={item} className={navClass} underline />)}
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={`cursor-pointer border px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors motion-reduce:transition-none ${solid ? 'border-espresso bg-espresso text-off-white hover:bg-espresso/85' : 'border-off-white/70 bg-transparent text-off-white hover:bg-off-white hover:text-espresso'}`}>Book Appointment</a>
        </nav>

        <button type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 cursor-pointer place-items-center lg:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d={menuOpen ? 'm6 6 12 12M6 18 18 6' : 'M3 8h18M3 16h18'} /></svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-full grid border-t border-stone bg-white px-6 pb-6 text-espresso shadow-lg shadow-espresso/5 lg:hidden" onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setMenuOpen(false)
            document.querySelector('[aria-controls="mobile-navigation"]').focus()
          }
        }}>
          <PageLink item={navigation[0]} className={`${navClass} text-left`} />
          <ServicesMenu mobile />
          {navigation.slice(1).map((item) => <PageLink key={item.label} item={item} className={`${navClass} text-left`} />)}
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-3 cursor-pointer bg-espresso px-6 py-4 text-center text-[10px] uppercase tracking-[0.12em] text-off-white">Book Appointment</a>
        </nav>
      )}
    </header>
  )
}

