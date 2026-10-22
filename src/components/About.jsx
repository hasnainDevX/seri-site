import { useEffect, useRef, useState } from "react";
import { bookingUrl } from "../data/site";
import headshot from "../assets/Profile&ETC/seri-white-blazer-hand-on-chin.jpg";
import CircularText from "./CircularText";

export default function About() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reveal = `block motion-reduce:animate-none motion-reduce:transform-none ${revealed ? "animate-heading-reveal" : "translate-y-[115%]"}`;

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative z-10 min-h-svh scroll-mt-16 bg-white md:scroll-mt-20 text-black"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-12 md:px-10 md:py-28 lg:gap-24 lg:px-16 lg:py-32">
        <figure className="mx-auto w-full max-w-[460px] md:mx-0">
          <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-t-[50%] bg-greige">
            {portraitFailed ? (
              <span className="px-6 text-center text-xs uppercase tracking-[0.16em] text-espresso/90">
                Portrait coming soon
              </span>
            ) : (
              <img
                onError={() => setPortraitFailed(true)}
                src={headshot}
                alt="Temporary stock portrait, to be replaced with Seri's photo"
                loading="lazy"
                width="1000"
                height="1250"
                className="size-full object-cover object-center"
              />
            )}
          </div>
        </figure>

        <div className="max-w-xl">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em]">
            {"{ The person behind SERIÉ }"}
          </p>
          <h2
            id="about-heading"
            className="font-editorial text-[clamp(2.5rem,3.6vw,3.5rem)] font-normal leading-[1.2] tracking-[-0.015em] text-espresso"
          >
            <span className="block overflow-hidden pb-[0.12em]">
              <span className={reveal}>Meet Seri</span>
            </span>
          </h2>
          <p className="mt-3 font-editorial text-xl italic leading-relaxed md:text-[22px]">
            Founder, Lash & Brow Artist, and Educator
          </p>

          <div className="mt-7 max-w-[54ch] space-y-5 font-editorial text-xl font-medium leading-[1.55] text-black lg:mt-8 lg:text-[22px]">
            <p>
              My beauty journey began in 2023, offering lash extensions
              alongside my corporate career. With the trust of a loyal
              clientele, I embraced beauty full-time in June 2024.
            </p>
            <p>
              Since then, I’ve expanded into Korean lash lifts, brow lamination,
              and permanent makeup brows. For me, growth has never been about
              simply adding more services. It’s about mastering each skill and
              consistently delivering quality results.
            </p>
            <p>
              As an artist and educator, I continue investing in advanced
              education to refine my techniques and bring fresh perspectives to
              my clients and students.
            </p>
            <p>
              Whether you’re here for a personalized service or hands-on
              training, every experience is built on quality, care, and
              attention to detail.
            </p>
          </div>

          <p className="mt-7 font-editorial text-[22px] italic leading-relaxed">
            I look forward to welcoming you to SERIÉ!
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-12 items-center justify-center px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-off-white hover:text-espresso  motion-reduce:transition-none md:mt-10 border"
          >
            Book Appointment
          </a>
        </div>
      </div>
      <div className="absolute top-6 right-6 z-20 origin-bottom-right scale-75 md:bottom-10 md:right-10 md:scale-100 lg:bottom-16 lg:right-16">
        <CircularText
          text="SERIÉ LASH BROW TRAINING"
          onHover="speedUp"
          direction="clockwise"
          spinDuration={20}
          size={200}
          fontSize={24}
          draggable
          hoverTilt={20}
          tilt={0}
          fontWeight={900}
          letterSpacing={0}
          startAngle={0}
          repeat={1}
          fill
          ring={false}
        />
      </div>
    </section>
  );
}
