'use client'
import MediaImage from '@/components/MediaImage'


import SiteLink from '@/components/SiteLink'
import { useEffect, useRef, useState } from "react";
import { bookingUrl } from "@/data/site";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// Hero images are served at responsive sizes through Next Image.
const hero1 = "/assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-eye-closeup.png"
const hero2 = "/assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-client-portrait.png"
const hero3 = "/assets/Training/lash-training-demonstration.png"

const slides = [hero1, hero2, hero3];
const INTERVAL = 6500;
const WIPE = 1300; // ms, must match the wipe/exit duration below

export default function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, value => Math.min(Math.max(value / (sectionRef.current?.clientHeight || 800), 0), 1));
  const scale = useTransform(progress, [0, 0.85], [1, 0.58]);
  const y = useTransform(progress, [0, 0.85], [0, -100]);
  const opacity = useTransform(progress, [0, 0.85], [1, 0.55]);
  const [visible, setVisible] = useState(true);
  const [loadedSlides, setLoadedSlides] = useState([0]);
  const readySlides = useRef(new Set());
  const [{ current, prev }, setSlide] = useState({ current: 0, prev: null });

  const goTo = (next) =>
    setSlide((s) =>
      s.current === next ? s : { current: next, prev: s.current },
    );

  useEffect(() => {
    const node = sectionRef.current.closest("[data-hero-boundary]") || sectionRef.current;
    let inView = true;
    const sync = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(node);
    document.addEventListener('visibilitychange', sync);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); };
  }, []);

  useEffect(() => {
    if (!visible || reduceMotion) return;
    const next = (current + 1) % slides.length;
    const preload = setTimeout(() => setLoadedSlides(items => items.includes(next) ? items : [...items, next]), INTERVAL - 1500);
    let advance;
    const showWhenReady = () => {
      if (readySlides.current.has(next)) goTo(next);
      else advance = setTimeout(showWhenReady, 200);
    };
    advance = setTimeout(showWhenReady, INTERVAL);
    return () => { clearTimeout(preload); clearTimeout(advance); };
  }, [current, visible, reduceMotion]);

  const reveal = "block animate-heading-reveal motion-reduce:animate-none motion-reduce:transform-none";

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      data-paused={!visible}
      className="relative isolate flex min-h-[max(620px,100svh)] items-center justify-center overflow-hidden bg-espresso text-off-white md:min-h-[max(640px,100svh)]"
    >
      <style>{`
        @keyframes hero-wipe { from { clip-path: inset(100% 0 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes hero-settle { from { transform: scale(1.2) translateY(6%); } to { transform: scale(1) translateY(0); } }
        @keyframes hero-exit { from { transform: scale(1) translateY(0); } to { transform: scale(1.05) translateY(-12%); } }
        @keyframes hero-zoom { from { transform: scale(1); } to { transform: scale(1.18); } }
        @keyframes hero-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        .hero-slide-active { animation: hero-wipe ${WIPE}ms cubic-bezier(0.77, 0, 0.175, 1) both; }
        .hero-slide-active .hero-motion { animation: hero-settle 2s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .hero-slide-leaving .hero-motion { animation: hero-exit ${WIPE}ms cubic-bezier(0.77, 0, 0.175, 1) both; }
        .hero-slide-active img,
        .hero-slide-leaving img { animation: hero-zoom ${INTERVAL + WIPE}ms linear both; }

        .hero-slide-initial, .hero-slide-initial .hero-motion, .hero-slide-initial img { animation: none; }

        .hero-progress-fill { animation: hero-progress ${INTERVAL}ms linear both; }

        [data-paused="true"] .hero-slide-active,
        [data-paused="true"] .hero-motion,
        [data-paused="true"] img { animation-play-state: paused; }
        @media (max-width: 767px) {
          .hero-slide-active img, .hero-slide-leaving img { animation: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-slide-active, .hero-slide-active .hero-motion, .hero-slide-leaving .hero-motion,
          .hero-slide-active img, .hero-slide-leaving img { animation: none; }
          .hero-progress-fill { animation: none; transform: scaleX(1); }
        }
      `}</style>

      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-espresso">
        {slides.map((src, index) => {
          if (!loadedSlides.includes(index)) return null;
          const state =
            index === current ? "active" : index === prev ? "leaving" : "idle";
          return (
            <div
              key={src}
              className={`absolute inset-0 overflow-hidden ${
                state === "active"
                  ? `hero-slide-active z-20 ${prev === null ? "hero-slide-initial" : ""}`
                  : state === "leaving"
                    ? "hero-slide-leaving z-10"
                    : "invisible z-0"
              }`}
            >
              <div className="hero-motion size-full">
                <MediaImage onLoad={() => readySlides.current.add(index)} fetchPriority={index === 0 ? "high" : "low"} loading="eager" src={src} alt="" className="size-full object-cover" />
              </div>
            </div>
          );
        })}
      </div>

      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/30" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-transparent to-black/45"
      />

      <motion.div data-hero-content style={{ scale: reduceMotion ? 1 : scale, y: reduceMotion ? 0 : y, opacity: reduceMotion ? 1 : opacity }} className="mx-auto w-full max-w-[1600px] px-5 py-28 text-center md:px-12 md:py-32">
        <p className="mb-8 overflow-hidden font-body text-[10px] font-medium uppercase leading-relaxed tracking-[0.22em] md:mb-10 md:text-xs">
          <span className={reveal}>Lash & Brow Artistry in Winnipeg</span>
        </p>
        <h1
          id="hero-heading"
          className="font-editorial! text-center text-[clamp(2.5rem,8.8vw,4rem)] font-normal! uppercase leading-[0.98] tracking-[-0.035em] md:text-[clamp(4rem,8.8vw,9rem)]"
        >
          <span className="block whitespace-nowrap overflow-hidden pb-[0.12em]">
            <span className={`${reveal} [animation-delay:180ms]`}>
              Enhance Your
            </span>
          </span>
          <span className="-mt-[0.08em] block whitespace-nowrap overflow-hidden pb-[0.12em]">
            <span className={`${reveal} [animation-delay:360ms]`}>
              Natural Beauty
            </span>
          </span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-9">
          <SiteLink
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center border border-off-white/70 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-off-white hover:text-espresso focus-visible:outline-off-white motion-reduce:transition-none"
          >
            Find my next appointment
          </SiteLink>

          <SiteLink
            href="/training#training-inquiry"
            className="inline-flex min-h-12 items-center justify-center border border-off-white/70 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-off-white hover:text-espresso focus-visible:outline-off-white motion-reduce:transition-none"
          >
            I’m ready to learn
          </SiteLink>
        </div>
      </motion.div>

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