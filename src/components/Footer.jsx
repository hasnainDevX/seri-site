import { bookingUrl, navigation } from '../data/site'

function LashDivider() {
  return (
    <svg aria-hidden="true" width="100%" height="24" className="text-espresso/40">
      <defs>
        <pattern id="lash-pattern" width="32" height="24" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
            <path d="M4 6Q16 11 28 6" />
            <path d="M6 7.2 3 12M10 8.6 8 14.5M16 9.2V16M22 8.6 24 14.5M26 7.2 29 12" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lash-pattern)" />
    </svg>
  )
}

const eyebrow = 'text-[10px] font-semibold uppercase tracking-[0.18em] text-gold'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-stone bg-off-white text-espresso">
      {/* faint vertical guide lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 mx-auto grid max-w-[1440px] grid-cols-4 lg:grid-cols-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`border-l border-stone/40 ${i > 3 ? 'hidden lg:block' : ''} ${i === 7 ? 'border-r' : ''}`} />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr] lg:gap-10 lg:px-16">
        {/* Brand */}
        <div>
          <a href="/" aria-label="SERIÉ home" className="inline-block">
            <span className="block font-heading text-[44px] leading-none tracking-[-0.065em]">SERIÉ</span>
            <span className="mt-2 block text-[8px] font-semibold uppercase leading-none tracking-[0.18em]">Lash, Brow &amp; Training</span>
          </a>
          <p className="mt-10 max-w-[18rem] text-sm leading-relaxed text-espresso/70">
            Lash, brow and training studio. Add your tagline and city here.
          </p>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
            </svg>
            @yourhandle
          </a>
        </div>

        {/* Explore */}
        <nav aria-label="Footer navigation">
          <h3 className={eyebrow}>Explore</h3>
          <ul className="mt-6 grid gap-4 text-sm text-espresso/75">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} className="transition-colors hover:text-espresso">{item.label}</a>
                ) : (
                  <span className="opacity-50">{item.label}</span>
                )}
              </li>
            ))}
            <li><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-espresso">Booking</a></li>
          </ul>
        </nav>

        {/* Studio info */}
        <div>
          <h3 className={eyebrow}>Studio Info</h3>
          <div className="mt-6 grid gap-4 text-sm leading-relaxed text-espresso/75">
            <p>Your City<br />By appointment only</p>
            <p>Cash, card &amp; e-transfer accepted</p>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-espresso transition-opacity hover:opacity-60">
              Book an appointment
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" aria-hidden="true"><path d="M2 8 8 2M3 2h5v5" /></svg>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <form onSubmit={(e) => e.preventDefault()} className="self-start bg-greige/60 p-8">
          <h3 className={eyebrow}>Newsletter</h3>
          <p className="mt-5 font-heading text-2xl tracking-[-0.03em]">Stay in the loop.</p>
          <p className="mt-3 text-sm leading-relaxed text-espresso/70">Appointment openings, tips, and occasional updates.</p>
          <label htmlFor="footer-email" className="sr-only">Email address</label>
          <input
            id="footer-email"
            type="email"
            required
            placeholder="Email address"
            className="mt-6 w-full border border-stone bg-white px-4 py-3.5 text-sm outline-none placeholder:text-espresso/45 focus:border-espresso"
          />
          <button type="submit" className="mt-3 w-full cursor-pointer bg-espresso px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-off-white transition-colors hover:bg-espresso/85">
            Subscribe
          </button>
        </form>
      </div>

      {/* Lash divider + copyright */}
      <div className="relative mx-auto max-w-[1440px] px-6 pb-8 md:px-10 lg:px-16">
        <LashDivider />
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.16em] text-espresso/50">
          &copy; {new Date().getFullYear()} SERIÉ. All rights reserved.
        </p>
      </div>
    </footer>
  )
}