import { bookingUrl } from '../data/site'
import studioImage from '../assets/Profile&ETC/seri-brow-brush-mirror-landscape.jpg'
import browsImage from '../assets/ClientsPhotos/Nano-NanoComboBrows/nano-brows-before-after-01.jpg'
import liftImage from '../assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-client-portrait.png'
import extensionsImage from '../assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-01.jpg'
import laminationImage from '../assets/ClientsPhotos/BrowLamination/brow-lamination-client-result.png'

const services = [
  {
    name: 'Nano & Combo Brows',
    image: browsImage,
    intro: 'Natural definition, thoughtfully tailored to you.',
    description: 'Fine hairstrokes mimic your natural brow hairs for a soft, realistic finish. Prefer a little more fullness? Combo brows blend hairstrokes with shading for added shape and definition.',
  },
  {
    name: 'Korean Lash Lift & Tint',
    image: liftImage,
    intro: 'Your natural lashes, beautifully lifted.',
    description: 'A customized lift and curl creates a longer, more defined look without extensions. Complete with a lash tint and a complimentary keratin and peptide lash mask for a fresh, eye-opening finish.',
  },
  {
    name: 'Lash Extensions',
    image: extensionsImage,
    intro: 'A lash look that feels like you.',
    description: 'Add length, fullness, and definition with a set customized to your style. Choose from Classic, Wet Mascara Look, Natural Wispy, or YY Wispy for your preferred finish.',
  },
  {
    name: 'Brow Lamination & Sculpt',
    image: laminationImage,
    intro: 'Soft structure. Fuller-looking brows.',
    description: 'Lamination softens and repositions your natural brow hairs for a fuller, more uniform look. Brow sculpting brings together shaping, waxing, and tinting to refine your brows.',
  },
]

export default function ServicesShowcase() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative isolate scroll-mt-20 overflow-hidden bg-stone px-5 py-14 md:px-10 md:py-20">
      <img src={studioImage} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-espresso/25" />
      <h2 id="services-heading" className="sr-only">Our services</h2>
      <div className="mx-auto grid max-w-[1000px] gap-10 md:gap-[72px]">
        {services.map((service) => (
          <article key={service.name} className="grid min-w-0 border border-espresso bg-off-white p-2.5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <img src={service.image} alt={service.name + ' by Seri'} loading="lazy" className="aspect-[7/6] w-full object-cover md:h-full md:min-h-[274px]" />
            <div className="flex flex-col items-start px-4 py-7 text-espresso md:px-9 md:py-5 lg:px-11">
              <h3 className="font-editorial text-[36px] font-medium leading-[1.1] tracking-[-0.045em] text-black md:text-[40px]">{service.name}</h3>
              <p className="mt-4 font-body text-sm leading-[1.6] md:text-[15px]">{service.intro}</p>
              <p className="mb-7 mt-5 max-w-[58ch] font-body text-sm leading-[1.6] md:text-[15px]">{service.description}</p>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={'Book ' + service.name} className="mt-auto inline-flex min-h-11 min-w-[200px] items-center justify-center border border-espresso bg-white px-6 py-2 text-[11px] font-medium uppercase tracking-[0.06em] text-black transition-colors hover:bg-espresso hover:text-off-white focus-visible:outline-espresso motion-reduce:transition-none">Book Appointment</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
