'use client'
import ArrowIcon from './ArrowIcon'
import { useEffect, useRef, useState } from 'react'
const training01 = "/assets/Training/video1.mp4"
const training02 = "/assets/Training/video2.mp4"
const training03 = "/assets/Training/video2.mp4"
const training01Poster = "/assets/Training/video1-poster.webp"

const defaultClips = [
  {
    id: "clip-1",
    src: training01,
    poster: training01Poster,
    title: "Lash training session",
  },
  { id: "clip-2", src: training02, poster: "/assets/Training/video2-poster.webp", title: "Brow technique demo" },
  { id: "clip-3", src: training03, poster: "/assets/Training/video2-poster.webp", title: "Student results" },
];


const positions = [
  "-translate-x-[calc(50%+460px)] md:-translate-x-[calc(50%+540px)]",
  "-translate-x-[calc(50%+255px)] md:-translate-x-[calc(50%+290px)]",
  "-translate-x-1/2",
  "translate-x-[calc(-50%+255px)] md:translate-x-[calc(-50%+290px)]",
  "translate-x-[calc(-50%+460px)] md:translate-x-[calc(-50%+540px)]",
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
        preload="none"
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


export default function VideoGallery({ clips = defaultClips }) {
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

return <div       onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
      }}>
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
          <ArrowIcon left />
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
          <ArrowIcon />
        </button>
      </div>

</div>
}
