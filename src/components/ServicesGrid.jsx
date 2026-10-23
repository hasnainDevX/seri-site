import RevealHeading from './RevealHeading'
import { bookingUrl } from "../data/site";

import pmuBrowsImage from "../assets/ClientsPhotos/Nano-NanoComboBrows/nano-brows-before-after-01.jpg";
import pmuBrowsHoverImage from "../assets/ClientsPhotos/Nano-NanoComboBrows/nano-brows-before-after-02.jpg";

import koreanLashLiftImage from "../assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-client-portrait.png";
import koreanLashLiftHoverImage from "../assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-eye-closeup.png";

import lashExtensionsImage from "../assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-01.jpg";
import lashExtensionsHoverImage from "../assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-02.png";

import browLaminationImage from "../assets/ClientsPhotos/BrowLamination/brow-lamination-before-after.jpg";
import browLaminationHoverImage from "../assets/ClientsPhotos/BrowLamination/brow-lamination-client-result.png";

export const services = [
  {
    label: "Nano & Combo Brows",
    href: "/services/pmu-brows",
    image: pmuBrowsImage,
    hoverImage: pmuBrowsHoverImage,
  },
  {
    label: "Korean Lash Lift & Tint",
    href: "/services/korean-lash-lift",
    image: koreanLashLiftImage,
    hoverImage: koreanLashLiftHoverImage,
  },
  {
    label: "Lash Extensions",
    href: "/services/lash-extensions",
    image: lashExtensionsImage,
    hoverImage: lashExtensionsHoverImage,
  },
  {
    label: "Brow Lamination & Sculpt",
    href: "/services/brow-lamination",
    image: browLaminationImage,
    hoverImage: browLaminationHoverImage,
  },
];

export default function ServicesShowcase() {
  return (
    <section className="relative z-10 bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-[1440px] bg-white text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">
          {"{ Our Services }"}
        </p>
        <RevealHeading className="mx-auto mt-4 max-w-2xl font-heading text-[28px] leading-snug text-espresso md:text-[34px]">
          Helping you feel confident in your lash &amp; brow routine, with real
          results you can see
        </RevealHeading>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block cursor-pointer bg-espresso px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.12em] text-off-white transition-colors hover:bg-espresso/85 motion-reduce:transition-none"
        >
          Schedule Appointment
        </a>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1440px] grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group block cursor-pointer text-center"
          >
            {/* Keep both images sized to the card while crossfading on hover. */}
            <div className="relative isolate aspect-square overflow-hidden bg-stone">
              
              <div aria-hidden={false} className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 size-full object-cover transition-opacity duration-500 group-hover:opacity-0 motion-reduce:transition-none"
                />
              </div>
              <div aria-hidden="true" className="absolute inset-0">
                <img
                  src={item.hoverImage}
                  alt=""
                  className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
                />
              </div>
            </div>

            <div className="relative z-10 -mt-5 flex justify-center">
              <span className="inline-flex items-center justify-center bg-off-white px-8 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-espresso">
                Service
              </span>
            </div>

            <h3 className="mt-4 font-heading text-2xl text-espresso">
              {item.label}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}