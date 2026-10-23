import { motion, useReducedMotion } from "motion/react";
import CircularText from "./CircularText";
import RevealHeading from "./RevealHeading";
import headshot from "../assets/Profile&ETC/seri-white-blazer-seated-closeup.png";
import darkPortrait from "../assets/Profile&ETC/seri-black-top-seated-portrait.jpg";
import { bookingUrl } from "../data/site";

export default function MeetSeri() {
  const reduceMotion = useReducedMotion();
  const portraitVariants = {
    hidden: { x: reduceMotion ? 0 : 80, opacity: reduceMotion ? 1 : 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section
      id="meet-seri"
      aria-labelledby="meet-seri-heading"
      className="relative scroll-mt-24 bg-white text-black"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-[0.85fr_1.35fr] md:gap-8 md:px-10 md:py-20 lg:gap-16 lg:px-16 lg:py-24">
        <div className="max-w-sm md:py-12">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-clay">
            {"A little about me"}
          </p>
          <RevealHeading
            id="meet-seri-heading"
            className="font-editorial text-[clamp(2.75rem,4.5vw,4.5rem)] leading-[1.1] tracking-[-0.025em]"
          >
            Meet, Seri
          </RevealHeading>
          <div className="mt-7 space-y-5 font-body text-sm leading-[1.8] md:text-base">
            <p>
              Founder of SERIÉ
              <br />
              Lash, Brow &amp; Training
            </p>
            <p>
              Lash &amp; Brow Artist
              <br />
              Permanent Makeup Artist
            </p>
            <p>
              Hands-on educator, with a passion for thoughtful, personalized
              beauty.
            </p>
          </div>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-12 items-center justify-center px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-off-white hover:text-espresso  motion-reduce:transition-none md:mt-10 border"
          >
            Book Appointment
          </a>
          <div className="mt-8 w-fit md:mt-10 absolute right-4 top-2 md:left-[50%]">
            <CircularText
              text="SERIÉ LASH BROW TRAINING "
              size={140}
              fontSize={13}
              spinDuration={20}
              direction="clockwise"
              fontWeight={600}
              hoverTilt={12}
              className="text-espresso"
            >
              <span className="pointer-events-none select-none font-heading text-[25px] font-normal leading-none tracking-[-0.065em]">
                SERIÉ
              </span>
            </CircularText>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative ml-auto aspect-[1.08] w-full max-w-[760px] overflow-clip"
        >
          <motion.img
            variants={portraitVariants}
            transition={{
              duration: reduceMotion ? 0 : 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            src={darkPortrait}
            alt="Seri seated in her studio"
            loading="lazy"
            className="absolute right-0 top-0 h-[92%] w-[66%] object-cover object-[center_42%]"
          />
          <motion.img
            variants={portraitVariants}
            transition={{
              duration: reduceMotion ? 0 : 1.1,
              delay: reduceMotion ? 0 : 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            src={headshot}
            alt="Seri in a white blazer"
            loading="lazy"
            className="absolute bottom-0 left-0 h-[76%] w-[58%] rounded-t-[50%] object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
