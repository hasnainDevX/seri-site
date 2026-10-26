import MediaImage from '@/components/MediaImage'
import RevealHeading from './RevealHeading'
const koreanEye = "/assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-eye-closeup.png"
const koreanPortrait = "/assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-client-portrait.png"
const training = "/assets/Training/lash-training-demonstration.png"
const training2 = "/assets/Training/brow-training-practice.png"
const nano1 = "/assets/ClientsPhotos/Nano-NanoComboBrows/nano-brows-before-after-01.jpg"
const nano2 = "/assets/ClientsPhotos/Nano-NanoComboBrows/nano-brows-before-after-02.jpg"
const lashExt1 = "/assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-01.jpg"
const lashExt2 = "/assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-02.png"
const browBA = "/assets/ClientsPhotos/BrowLamination/brow-lamination-before-after.jpg"
const browResult = "/assets/ClientsPhotos/BrowLamination/brow-lamination-client-result.png"
import ExperienceStats from "./ExperienceStats";

const rowOne = [
  { src: nano1, alt: "Nano brows before and after" },
  { src: lashExt1, alt: "Lash extensions client portrait" },
  { src: browBA, alt: "Brow lamination before and after" },
  { src: koreanPortrait, alt: "Korean lash lift client portrait" },
  { src: training, alt: "Lash training demonstration" },
];

const rowTwo = [
  { src: koreanEye, alt: "Korean lash lift eye close-up" },
  { src: nano2, alt: "Nano combo brows result" },
  { src: training2, alt: "Training" },
  { src: lashExt2, alt: "Lash extensions result" },
  { src: browResult, alt: "Brow lamination client result" },
  { src: training, alt: "Lash training demonstration" },
];

function MarqueeRow({ items, reverse = false }) {
  // Repeat items so one group is always wider than the viewport
  const group = [...items, ...items];

  return (
    <div className="marquee group/marquee overflow-hidden">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : "marquee-forward"}`}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-4 pr-4"
          >
            {group.map((item, i) => (
              <li key={`${copy}-${i}`} className="w-56 shrink-0 md:w-72">
                <MediaImage sizes="(min-width: 768px) 288px, 224px"
                  src={item.src}
                  alt={copy === 0 ? item.alt : ""}
                  loading="lazy"
                  draggable="false"
                  className="aspect-[4/5] w-full rounded-sm object-cover"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function WorkMarquee() {
  return (
    <section
      aria-labelledby="work-heading"
      className="bg-off-white py-16 text-espresso md:py-24"
    >
      <div className="mx-auto mb-10 max-w-[1440px] px-6 md:px-10 lg:px-16 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.16em]">
          {"{ Our Work }"}
        </p>
        <RevealHeading
          id="work-heading"
          className="mt-3 font-heading text-4xl tracking-[-0.04em] md:text-5xl "
        >
          Results we&apos;re proud of
        </RevealHeading>
      </div>

      <ExperienceStats/>

      <div className="grid gap-4">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </section>
  );
}
