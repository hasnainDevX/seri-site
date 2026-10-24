import RevealHeading from "./RevealHeading";
import { bookingUrl } from "../data/site";
import studioImage from "../assets/Profile&ETC/seri-brow-brush-mirror-landscape.jpg";
import browsImage from "../assets/ClientsPhotos/Nano-NanoComboBrows/nano-brows-before-after-01.jpg";
import liftImage from "../assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-client-portrait.png";
import extensionsImage from "../assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-01.jpg";
import laminationImage from "../assets/ClientsPhotos/BrowLamination/brow-lamination-client-result.png";

const services = [
  {
    name: "Nano & Combo Brows",
    href: "/services/nano-combo-brows",
    image: browsImage,
    intro:
      "Nano Brows: Ideal for a natural, “these are my real brows” look, with fine hairstrokes that mimic natural brow hairs. Can last 1–2 years.",
    description:
      "Combo Brows: Ideal for a soft makeup look, combining hairstrokes with shading for added fullness and definition. Can last 2–3 years.",
  },
  {
    name: "Korean Lash Lift & Tint",
    href: "/services/korean-lash-lift",
    image: liftImage,
    intro:
      "A Korean lash lift enhances your natural lashes with a customized lift and curl for a longer, more defined look—without extensions. Perfect for a fresh, eye-opening finish.",
    description:
      "Includes a complimentary keratin and peptide lash mask and lash tint. Results typically last 6–8 weeks, depending on your natural lash growth and aftercare.",
  },
  {
    name: "Lash Extensions",
    href: "/services/lash-extensions",
    image: extensionsImage,
    intro:
      "Customized lash extensions for added length, fullness, and definition. Lasts 3+ weeks, with fills recommended within 3 weeks to keep lashes full and fresh.",
    description:
      "Styles offered: Classic, Wet Mascara Look, Natural Wispy, and YY Wispy.",
  },
  {
    name: "Brow Lamination & Sculpt",
    href: "/services/brow-lamination",
    image: laminationImage,
    intro:
      "Brow Lamination softens, straightens, and repositions natural eyebrow hairs to create a fuller, fluffier, and more uniform look. Results typically last 4–6 weeks and can last up to 8 weeks, depending on your natural hair growth and aftercare.",
    description: "Brow Sculpt includes shaping, waxing, and tinting.",
  },
];

export default function ServicesShowcase() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate scroll-mt-20 overflow-hidden bg-stone px-5 py-14 md:px-10 md:py-20"
    >
      <img
        src={studioImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-espresso/25"
      />
      <div
        id="services-heading"
        className="mx-auto mb-10 max-w-[1000px] md:mb-[72px]"
      >
        <RevealHeading
          as="h2"
          className="font-editorial text-center text-[44px] font-medium leading-[1.05] tracking-[-0.045em] text-off-white md:text-[64px]"
        >
          Our services
        </RevealHeading>
      </div>
      <div className="mx-auto grid max-w-[1000px] gap-10 md:gap-[72px]">
        {services.map((service) => (
          <article
            key={service.name}
            className="grid min-w-0 border border-espresso bg-off-white p-2.5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          >
            <img
              src={service.image}
              alt={service.name + " by Seri"}
              loading="lazy"
              className="aspect-[7/6] w-full object-cover md:h-full md:min-h-[274px]"
            />
            <div className="flex flex-col items-start px-4 py-7 text-espresso md:px-9 md:py-5 lg:px-11">
              <RevealHeading
                as="h3"
                className="font-editorial text-[36px] font-medium leading-[1.1] tracking-[-0.045em] text-black md:text-[40px]"
              >
                {service.name}
              </RevealHeading>
              <p className="mt-4 font-body text-sm leading-[1.6] md:text-[15px]">
                {service.intro}
              </p>
              <p className="mb-7 mt-5 max-w-[58ch] font-body text-sm leading-[1.6] md:text-[15px]">
                {service.description}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href={service.href} className="inline-flex min-h-11 items-center gap-3 text-[11px] font-medium uppercase tracking-[0.06em] underline underline-offset-4 hover:text-clay">Explore service <span aria-hidden="true">→</span></a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Book " + service.name}
                className="inline-flex min-h-11 min-w-[200px] items-center justify-center border border-espresso bg-white px-6 py-2 text-[11px] font-medium uppercase tracking-[0.06em] text-black transition-colors hover:bg-espresso hover:text-off-white focus-visible:outline-espresso motion-reduce:transition-none"
              >
                Book Appointment
              </a></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
