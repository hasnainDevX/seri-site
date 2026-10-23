import { useEffect, useRef, useState } from "react";
import { bookingUrl } from "../data/site";

// Put your 3 hero photos in src/assets/Hero/ (or change these paths).
import hero1 from "../assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-eye-closeup.png";
import hero2 from "../assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-client-portrait.png";
import hero3 from "../assets/Training/lash-training-demonstration.png";

const slides = [hero1, hero2, hero3];
const INTERVAL = 6500;
const WIPE = 1300; // ms, must match the wipe/exit duration below

export default function Hero() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [{ current, prev }, setSlide] = useState({ current: 0, prev: null });

  const goTo = (next) =>
    setSlide((s) =>
      s.current === next ? s : { current: next, prev: s.current },
    );

  // Auto-advance. The timer restarts on every change, so clicking a bar gives a full interval.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => goTo((current + 1) % slides.length),
      INTERVAL,
    );
    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    // Reveal after the fonts are ready so loading cannot hide the animation.
    document.fonts.ready.then(() => {
      if (!cancelled && sectionRef.current)
        observer.observe(sectionRef.current);
    });
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  const reveal = `block motion-reduce:animate-none motion-reduce:transform-none ${revealed ? "animate-heading-reveal" : "translate-y-[115%]"}`;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[max(620px,100svh)] items-center justify-center overflow-hidden bg-espresso text-off-white md:min-h-[max(640px,100svh)]"
    >
      <style>{`
        @keyframes hero-wipe { from { clip-path: inset(100% 0 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes hero-settle { from { transform: scale(1.2) translateY(6%); } to { transform: scale(1) translateY(0); } }
        @keyframes hero-exit { from { transform: scale(1) translateY(0); } to { transform: scale(1.05) translateY(-12%); } }
        @keyframes hero-zoom { from { transform: scale(1); } to { transform: scale(1.18); } }
        @keyframes hero-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        /* Outer layer: the wipe reveal */
        .hero-slide-active { animation: hero-wipe ${WIPE}ms cubic-bezier(0.77, 0, 0.175, 1) both; }
        /* Middle layer: settle in on entry, drift up on exit */
        .hero-slide-active .hero-motion { animation: hero-settle 2s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .hero-slide-leaving .hero-motion { animation: hero-exit ${WIPE}ms cubic-bezier(0.77, 0, 0.175, 1) both; }
        /* Inner layer: slow zoom the whole time the image is on screen */
        .hero-slide-active img,
        .hero-slide-leaving img { animation: hero-zoom ${INTERVAL + WIPE}ms linear both; }

        .hero-progress-fill { animation: hero-progress ${INTERVAL}ms linear both; }

        @media (prefers-reduced-motion: reduce) {
          .hero-slide-active, .hero-slide-active .hero-motion, .hero-slide-leaving .hero-motion,
          .hero-slide-active img, .hero-slide-leaving img { animation: none; }
          .hero-progress-fill { animation: none; transform: scaleX(1); }
        }
      `}</style>

      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-espresso">
        {slides.map((src, index) => {
          const state =
            index === current ? "active" : index === prev ? "leaving" : "idle";
          return (
            <div
              key={src}
              className={`absolute inset-0 overflow-hidden ${
                state === "active"
                  ? "hero-slide-active z-20"
                  : state === "leaving"
                    ? "hero-slide-leaving z-10"
                    : "invisible z-0"
              }`}
            >
              <div className="hero-motion size-full">
                <img src={src} alt="" className="size-full object-cover" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Overlay: an even dark tint plus a gradient that darkens the top (navbar) and bottom (dots) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/40" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-transparent to-black/60"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-28 text-center md:px-12 md:py-32">
        <p className="mb-8 overflow-hidden font-heading text-xl leading-relaxed md:mb-10">
          <span className={reveal}>Lash & Brow Artistry in Winnipeg</span>
        </p>
        <h1
          id="hero-heading"
          className="font-light! text-[clamp(2.5rem,6.4vw,6rem)] font- uppercase leading-[1.08] tracking-[-0.035em]"
        >
          <span className="block overflow-hidden pb-[0.12em]">
            <span className={`${reveal} [animation-delay:180ms]`}>
              Enhance Your
            </span>
          </span>
          <span className="-mt-[0.08em] block overflow-hidden pb-[0.12em]">
            <span className={`${reveal} [animation-delay:360ms]`}>
              Natural Beauty
            </span>
          </span>
        </h1>

        <div className="flex justify-center items-center gap-4">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-12 items-center justify-center border border-off-white/70 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-off-white hover:text-espresso focus-visible:outline-off-white motion-reduce:transition-none md:mt-10 hover:font-bold"
          >
            Book Appointment
          </a>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-12 items-center justify-center border border-off-white/70 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-off-white hover:text-espresso focus-visible:outline-off-white motion-reduce:transition-none md:mt-10"
          >
            Apply for Training
          </a>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show hero image ${index + 1}`}
            aria-current={index === current}
            className="grid h-6 w-12 cursor-pointer items-center"
          >
            <span className="block h-0.5 w-full overflow-hidden bg-off-white/30">
              {index === current && (
                <span
                  key={current}
                  className="hero-progress-fill block h-full w-full origin-left bg-off-white"
                />
              )}
            </span>
          </button>
        ))}
      </div> */}
    </section>
  );
}
