const defaultItems = ['Lash artistry', 'Beautiful brows', 'Thoughtful detail', 'Learn with Seri']
const colors = ['text-clay']

export default function Marquee({ items = defaultItems }) {
  if (!items.length) return null

  return (
    <section aria-label={items.join(' · ')} tabIndex={0} className="group relative z-10 overflow-hidden bg-butter py-2 text-clay focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-butter md:py-3 border-y">
      <div aria-hidden="true" className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
        {[0, 1].map((group) => (
          <div key={group} className="flex min-w-screen shrink-0 items-center justify-around motion-reduce:min-w-0 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:[&:not(:first-child)]:hidden">
            {items.map((item, index) => (
              <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 px-4 md:gap-12 md:px-6 motion-reduce:py-2">
                <span className={`whitespace-nowrap font-heading text-xl  leading-6 tracking-[-0.02em] md:text-2xl md:leading-8 ${colors[index % colors.length]}`}>{item}</span>
                <svg viewBox="0 0 24 24" className="size-3 shrink-0 text-clay md:size-4" fill="currentColor" aria-hidden="true"><path d="M12 0c1.4 7.5 4.5 10.6 12 12-7.5 1.4-10.6 4.5-12 12C10.6 16.5 7.5 13.4 0 12 7.5 10.6 10.6 7.5 12 0Z" /></svg>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

