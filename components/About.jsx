'use client'
import MediaImage from '@/components/MediaImage'


import SiteLink from '@/components/SiteLink'
import RevealHeading from './RevealHeading';
import { useState } from "react";
import { bookingUrl } from "@/data/site";
const headshot = "/assets/Profile&ETC/seri-white-blazer-hand-on-chin.jpg"


export default function About() {



  const [portraitFailed, setPortraitFailed] = useState(false);


  return (
    <section
      id="about"

      aria-labelledby="about-heading"
      className="relative z-10 min-h-svh scroll-mt-16 bg-white md:scroll-mt-20 text-black"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-12 md:px-10 md:py-28 lg:gap-24 lg:px-16 lg:py-32">
        <figure className="mx-auto w-full max-w-[460px] md:mx-0">
<div
            className="relative grid aspect-[4/5] place-items-center overflow-hidden bg-greige"
          >
            {portraitFailed ? (
              <span className="px-6 text-center text-xs uppercase tracking-[0.16em] text-espresso/90">
                Portrait coming soon
              </span>
            ) : (
              <MediaImage sizes="(min-width: 768px) 460px, calc(100vw - 48px)"
                onError={() => setPortraitFailed(true)}
                src={headshot}
                alt="Seri in a white blazer"
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
          <RevealHeading
            id="about-heading"
            className="font-editorial text-[clamp(2.5rem,3.6vw,3.5rem)] font-normal leading-[1.2] tracking-[-0.015em] text-espresso"
          >
            Meet Seri
          </RevealHeading>
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
          <SiteLink
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-12 items-center justify-center px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-off-white hover:text-espresso  motion-reduce:transition-none md:mt-10 border"
          >
            Come see me in the studio
          </SiteLink>
        </div>
      </div>

    </section>
  );
}
