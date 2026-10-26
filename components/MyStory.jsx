import SiteLink from '@/components/SiteLink'
import CircularText from "./CircularText";
import RevealHeading from "./RevealHeading";
import { bookingUrl } from "@/data/site";

export default function MyStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="bg-off-white px-6 py-16 text-black md:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-clay">
            {"My story"}
          </p>{" "}
          <RevealHeading
            id="story-heading"
            className="max-w-sm font-editorial text-[40px] leading-[1.15] tracking-[-0.025em] md:text-[48px]"
          >
            A passion that became my purpose.
          </RevealHeading>
          <div className="mt-24 w-fit hidden lg:block">
            <CircularText
              text="SERIÉ LASH BROW TRAINING "
              direction="clockwise"
              spinDuration={20}
              size={160}
              fontSize={15}
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
              <span className="pointer-events-none select-none font-heading text-[25px] font-normal leading-none tracking-[-0.065em] text-espresso">
                SERIÉ
              </span>
            </CircularText>
          </div>
        </div>
        <div className="space-y-6 font-editorial text-xl leading-[1.6] md:text-[22px]">
          <p>
            My beauty journey began in 2023, offering lash extensions alongside
            my corporate career. With the trust of a loyal clientele, I embraced
            beauty full-time in June 2024.
          </p>
          <p>
            Since then, I’ve expanded into Korean lash lifts, brow lamination,
            and permanent makeup brows. For me, growth has never been about
            simply adding more services. It’s about mastering each skill and
            consistently delivering quality results.
          </p>
          <p>
            As an artist and educator, I continue investing in advanced
            education to refine my techniques and bring fresh perspectives to my
            clients and students.
          </p>
          <p>
            Whether you’re here for a personalized service or hands-on training,
            every experience is built on quality, care, and attention to detail.
          </p>
          <p className="italic">I look forward to welcoming you to SERIÉ!</p>
          <SiteLink
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center border border-espresso bg-white px-8 py-3 font-body text-[10px] font-medium uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-transparent hover:text-espresso"
          >
            Let’s find your look
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
