import RevealHeading from './RevealHeading'
import { useEffect, useState } from "react";

// Pick any photo from your assets folder and update this path.
import testimonialsBg from "../assets/Profile&ETC/seri-laptop-sofa-full-length.jpg";

const defaultTestimonials = [
  {
    id: 1,
    quote:
      "Seri is friendly and down to earth. You will never feel like you are just a customer. After my first appointment, it felt like I gained a friend. Seri is worth travelling to the other end of the city for. If there were more stars to give, I would give her more than just 5 stars. Go to AlluredbySeri, and you will not be disappointed. #bestwinnipeglashes",
    author: "Jacqueline B.",
  },
  {
    id: 2,
    quote:
      "I’ve been a client at AlluredbySeri since day one, and I can confidently say she is the best in the business! Every session is a relaxing experience, and she always takes the time to ensure my lashes look perfect and suit my style.",
    author: "Julie K.",
  },
  {
    id: 3,
    quote:
      "I’ve had both lash extensions and a premium lash lift done by Seri, and both experiences were incredible! The lash extensions were flawless, giving me a natural yet glamorous look. The premium lash lift was equally amazing!\n\nSeri’s expertise and attention to detail are unmatched! Highly recommend for anyone seeking top-tier lash services.",
    author: "Sarah L.",
  },
];

export default function Testimonials({
  items = defaultTestimonials,
  interval = 10000,
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  // The timer restarts after every change, so clicking an arrow gives a full interval before the next auto-change.
  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => setActive((index) => (index + 1) % count),
      interval,
    );
    return () => clearTimeout(timer);
  }, [active, paused, count, interval]);

  if (!count) return null;

  const move = (step) => setActive((index) => (index + step + count) % count);

  return (
    <section
      aria-label="Client testimonials"
      aria-roledescription="carousel"
      className="relative isolate z-10 [clip-path:inset(0)] bg-stone px-5 py-16 text-center text-espresso md:px-10 md:py-24 lg:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
      }}
    >
      {/* Pinned background: the photo stays fixed while the section scrolls over it. */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <img
          src={testimonialsBg}
          alt=""
          className="fixed inset-0 h-svh w-full object-cover motion-reduce:absolute motion-reduce:h-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-espresso/15"
      />

      <div className="mx-auto max-w-[856px] border border-espresso/60 bg-white px-6 py-8 md:px-14 md:py-8 lg:px-20">
        <RevealHeading className="font-heading text-[32px] font-normal leading-tight tracking-[-0.04em] text-black md:text-[38px]">Client Love</RevealHeading>
        {/* Stack reviews in one grid cell so the longest review sets a stable card height. */}
        <div className="mt-6 grid" aria-live={paused ? "polite" : "off"}>
          {items.map((item, index) => (
            <figure
              key={item.id ?? index}
              role="group"
              aria-roledescription="slide"
              aria-hidden={index !== active}
              className={`col-start-1 row-start-1 flex flex-col items-center transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
                index === active
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none select-none"
              }`}
            >

              <blockquote className="flex flex-1 items-center max-w-[660px] whitespace-pre-line font-body text-sm leading-[1.75] md:text-[15px]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 font-body text-xs font-medium uppercase leading-relaxed tracking-[0.04em] md:text-[13px]">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-1 flex items-center justify-center gap-1">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={count < 2}
            aria-label="Previous testimonial"
            className="grid size-11 cursor-pointer place-items-center text-2xl transition-colors hover:text-clay focus-visible:outline-espresso disabled:opacity-40"
          >
            ←
          </button>



          <button
            type="button"
            onClick={() => move(1)}
            disabled={count < 2}
            aria-label="Next testimonial"
            className="grid size-11 cursor-pointer place-items-center text-2xl transition-colors hover:text-clay focus-visible:outline-espresso disabled:opacity-40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
