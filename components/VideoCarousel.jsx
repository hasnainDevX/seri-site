import SiteLink from './SiteLink'
import RevealHeading from './RevealHeading'
import CircularText from './CircularText'
import DeferredVideoGallery from './DeferredVideoGallery'
import MediaImage from './MediaImage'
const trainingBackground = '/assets/Training/lash-training-demonstration.png'
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


export default function VideoCarousel({ clips }) {
  return (
    <section
      id="training"
      aria-label="Training"
      aria-roledescription="carousel"
      className="relative z-10 overflow-hidden bg-white py-16 text-espresso md:py-24"

    >
      <MediaImage
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover" src={trainingBackground} alt=""
        
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-off-white/90" />

      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">
          {"{ Training }"}
        </p>{" "}
        <RevealHeading className="mt-4 font-heading text-[28px] leading-snug md:text-[34px]">
          Korean lash lift training in Winnipeg
        </RevealHeading>
        <p className="mt-5 text-sm leading-relaxed text-espresso/75">
          Learn Korean lash lift techniques in a one-to-one beginner
          class with Seri. Explore the course and get in touch about
          upcoming training dates.
        </p>
      </div>

      <DeferredVideoGallery clips={clips} />
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
        <SiteLink
          href="/training"
          className="inline-block cursor-pointer bg-espresso px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.12em] text-off-white transition-colors hover:bg-espresso/85 motion-reduce:transition-none"
        >
          Explore lash lift training
        </SiteLink>
      </div>
      <div className="absolute top-6 right-6 z-20 origin-bottom-right scale-75 md:bottom-10 md:right-10 md:scale-100 lg:bottom-16 lg:right-16 hidden lg:block">
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