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

function Stars() {
  return (
    <div
      role="img"
      aria-label="5 out of 5 stars"
      className="mb-5 flex justify-center gap-1.5 text-amber-300"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="size-5 md:size-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m12 2 2.9 6.9 7.5.6-5.7 4.9 1.7 7.3L12 17.8l-6.4 3.9 1.7-7.3-5.7-4.9 7.5-.6Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({
  items = defaultTestimonials,
  interval = 4000,
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
      className="relative isolate z-10 [clip-path:inset(0)] px-6 py-20 text-center text-off-white md:py-28"
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
        className="absolute inset-0 -z-10 bg-espresso/80"
      />

      <div className="mx-auto max-w-3xl">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-off-white/70">
          Kind Words
        </p>
        <span
          aria-hidden="true"
          className="mt-4 block font-heading text-6xl leading-none text-off-white/40"
        >
          “
        </span>

        {/* All quotes share one grid cell, so the section height stays fixed (it matches the longest quote) while they crossfade. */}
        <div className="mt-2 grid" aria-live={paused ? "polite" : "off"}>
          {items.map((item, index) => (
            <figure
              key={item.id ?? index}
              role="group"
              aria-roledescription="slide"
              aria-hidden={index !== active}
              className={`col-start-1 row-start-1 flex flex-col items-center justify-center transition-all duration-700 ease-in-out motion-reduce:transition-none ${
                index === active
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <Stars />
              <blockquote className="whitespace-pre-line font-heading text-lg leading-relaxed md:text-2xl md:leading-[1.6]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em]">
                – {item.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={count < 2}
            aria-label="Previous testimonial"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-off-white/40 hover:bg-off-white/10 disabled:opacity-40"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.id ?? index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === active}
                className={`size-2 cursor-pointer rounded-full transition-colors ${index === active ? "bg-off-white" : "bg-off-white/30 hover:bg-off-white/60"}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => move(1)}
            disabled={count < 2}
            aria-label="Next testimonial"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-off-white/40 hover:bg-off-white/10 disabled:opacity-40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
