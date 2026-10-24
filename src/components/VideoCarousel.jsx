import RevealHeading from './RevealHeading'
import { useEffect, useRef, useState } from "react";
import CircularText from "./CircularText";

import training01 from "../assets/Training/video1.mp4";
import training02 from "../assets/Training/video2.mp4";
import training03 from "../assets/Training/video2.mp4";
import training01Poster from "../assets/Training/brow-training-practice.png";
import trainingBackground from "../assets/Training/lash-training-demonstration.png";

const defaultClips = [
  {
    id: "clip-1",
    src: training01,
    poster: training01Poster,
    title: "Lash training session",
  },
  { id: "clip-2", src: training02, title: "Brow technique demo" },
  { id: "clip-3", src: training03, title: "Student results" },
];

const positions = [
  "-translate-x-[calc(50%+460px)] md:-translate-x-[calc(50%+540px)]",
  "-translate-x-[calc(50%+255px)] md:-translate-x-[calc(50%+290px)]",
  "-translate-x-1/2",
  "translate-x-[calc(-50%+255px)] md:translate-x-[calc(-50%+290px)]",
  "translate-x-[calc(-50%+460px)] md:translate-x-[calc(-50%+540px)]",
];

const trainingHighlights = [
  {
    title: "Hands-on practice",
    text: "Work on real models with Seri guiding every step.",
  },
  {
    title: "Small classes",
    text: "Personal attention and feedback, never a crowded room.",
  },
  {
    title: "Start with confidence",
    text: "Leave with the technique, tools knowledge, and client-ready skills.",
  },
];

function VideoCard({ clip, offset, onSelect }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const active = offset === 0;

  useEffect(() => {
    const video = videoRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const sync = () => {
      if (active && inView && !preference.matches) video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    preference.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", sync);
      video.pause();
    };
  }, [active, clip.src]);

  const size = active
    ? "z-20 h-[426px] w-60 opacity-100 md:h-[520px] md:w-[292px]"
    : Math.abs(offset) === 1
      ? "z-10 h-[300px] w-52 opacity-60 md:h-[350px] md:w-60"
      : "z-0 h-[230px] w-44 opacity-35 md:h-[260px] md:w-52";

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={clip.title}
      className={`absolute top-1/2 left-1/2 -translate-y-1/2 overflow-hidden bg-stone transition-all duration-500 ease-out motion-reduce:transition-none ${positions[offset + 2]} ${size}`}
    >
      <video
        ref={videoRef}
        src={clip.src}
        poster={clip.poster}
        muted={muted || !active}
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="size-full object-cover"
      />
      {!active && (
        <button
          type="button"
          onClick={onSelect}
          aria-label={`Show ${clip.title}`}
          className="absolute inset-0 cursor-pointer bg-off-white/15 focus-visible:-outline-offset-4"
        />
      )}
      {active && (
        <button
          type="button"
          aria-label={muted ? "Unmute video" : "Mute video"}
          onClick={() => setMuted(!muted)}
          className="absolute top-3 right-3 grid size-10 cursor-pointer place-items-center rounded-full bg-espresso/65 text-off-white hover:bg-espresso focus-visible:outline-off-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M11 4 6 8H3v8h3l5 4Z" />
            {muted ? (
              <path d="m16 9 6 6m0-6-6 6" />
            ) : (
              <path d="M15 8c3 2 3 6 0 8m3-11c5 4 5 10 0 14" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}

export default function VideoCarousel({ clips = defaultClips }) {
  const [selected, setSelected] = useState(0);
  const swipeStart = useRef(null);
  const count = clips.length;
  if (!count) return null;
  const activeIndex = selected % count;
  const move = (step) => setSelected((index) => (index + step + count) % count);
  const visibleClips = clips
    .map((clip, index) => {
      let offset = (index - activeIndex + count) % count;
      if (offset > Math.floor(count / 2)) offset -= count;
      return { clip, index, offset };
    })
    .filter(({ offset }) => Math.abs(offset) <= 2);

  return (
    <section
      id="training"
      aria-label="Training"
      aria-roledescription="carousel"
      className="relative z-10 overflow-hidden bg-white py-16 text-espresso md:py-24"
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
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${trainingBackground})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-off-white/90" />

      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">
          {"{ Training }"}
        </p>{" "}
        <RevealHeading className="mt-4 font-heading text-[28px] leading-snug md:text-[34px]">
          Learn the craft behind the results
        </RevealHeading>
        <p className="mt-5 text-sm leading-relaxed text-espresso/75">
          Train with Seri in Winnipeg and learn lash and brow techniques
          hands-on, from consultation and prep to flawless finishing. Small
          classes, personal feedback, and the confidence to start taking
          clients.
        </p>
      </div>

      <div
        className="relative mt-10 h-[460px] touch-pan-y md:mt-14 md:h-[560px]"
        onTouchStart={(event) => {
          swipeStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (swipeStart.current === null) return;
          const delta = swipeStart.current - event.changedTouches[0].clientX;
          if (Math.abs(delta) > 45) move(delta > 0 ? 1 : -1);
          swipeStart.current = null;
        }}
      >
        {visibleClips.map(({ clip, index, offset }) => (
          <VideoCard
            key={clip.id ?? index}
            clip={clip}
            offset={offset}
            onSelect={() => setSelected(index)}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => move(-1)}
          disabled={count < 2}
          aria-label="Previous video"
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-stone hover:bg-greige disabled:opacity-40"
        >
          ←
        </button>
        <p
          aria-live="polite"
          aria-atomic="true"
          className="text-[10px] tracking-[0.16em]"
        >
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={() => move(1)}
          disabled={count < 2}
          aria-label="Next video"
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-stone hover:bg-greige disabled:opacity-40"
        >
          →
        </button>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 px-6 text-center md:grid-cols-3 md:gap-8">
        {trainingHighlights.map((item) => (
          <div key={item.title}>
            <h3 className="font-heading text-xl">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-espresso/70">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/training#training-inquiry"
          className="inline-block cursor-pointer bg-espresso px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.12em] text-off-white transition-colors hover:bg-espresso/85 motion-reduce:transition-none"
        >
          Enquire About Training
        </a>
      </div>
      <div className="absolute top-6 right-6 z-20 origin-bottom-right scale-75 md:bottom-10 md:right-10 md:scale-100 lg:bottom-16 lg:right-16 hidden md:block">
        <CircularText
          text="SERIÉ LASH BROW TRAINING "
          // onHover="speedUp"
          direction="clockwise"
          spinDuration={20}
          size={160}
          fontSize={15}
          draggable
          hoverTilt={20}
          tilt={0}
          fontWeight={900}
          letterSpacing={0}
          startAngle={0}
          repeat={1}
          fill
          ring={false}
          className="text-espresso"
        >
          <span className="pointer-events-none select-none font-heading text-[25px] font-normal leading-none tracking-[-0.065em] text-espresso">SERIÉ</span>
        </CircularText>
      </div>
    </section>
  );
}