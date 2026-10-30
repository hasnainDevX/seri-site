// Temporary copy. A future CMS can pass its announcement through this prop.
const defaultMessage = 'Allured By Seri is now SERIÉ Beauty | Lash, brow & training in Winnipeg'

export default function AnnouncementBar({ message = defaultMessage, enabled = true, link }) {


  if (!enabled || !message?.trim()) return null

  return (
    <aside className="group relative z-[60] flex min-h-8 items-stretch border-b border-stone bg-greige text-espresso" aria-label="Announcement">
      {link ? <a href={link} className="absolute inset-0 z-10 focus-visible:outline-2" aria-label={message}><span className="sr-only">{message}</span></a> : <p className="sr-only">{message}</p>}
      <div className="flex min-w-0 flex-1 items-center overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
          {[0, 1].map((group) => (
            <div className="flex min-w-screen shrink-0 items-center justify-around motion-reduce:w-full motion-reduce:min-w-0 motion-reduce:[&:not(:first-child)]:hidden" key={group}>
              {[0, 1, 2].map((item) => (
                <span className="flex items-center gap-12 whitespace-nowrap px-6 py-1.5 text-[10px] font-medium uppercase leading-4 tracking-[0.16em] motion-reduce:whitespace-normal motion-reduce:text-center motion-reduce:[&:not(:first-child)]:hidden" key={item}>
                  {message}
                  <span className="size-[3px] shrink-0 rounded-full bg-current opacity-50 motion-reduce:hidden" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}



