import browHero from '../assets/Profile&ETC/seri-brow-brush-mirror-landscape.jpg'
import liftHero from '../assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-eye-closeup.png'
import nanoOne from '../assets/ClientsPhotos/Nano-NanoComboBrows/nano-brows-before-after-01.jpg'
import nanoTwo from '../assets/ClientsPhotos/Nano-NanoComboBrows/nano-combo-brows-before-after.jpg'
import lamination from '../assets/ClientsPhotos/BrowLamination/brow-lamination-client-result.png'
import laminationBeforeAfter from '../assets/ClientsPhotos/BrowLamination/brow-lamination-before-after.jpg'
import liftPortrait from '../assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-client-portrait.png'
import liftComparison from '../assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-client-comparison.jpg'
import lashOne from '../assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-01.jpg'
import lashTwo from '../assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-02.png'
import lashThree from '../assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-03.png'
import lashComparison from '../assets/ClientsPhotos/LashExtension/lash-extensions-closeup-comparison.jpg'

export const servicePages = [
  {
    slug: 'nano-combo-brows',
    heroImage: browHero,
    heroPosition: 'center 42%',
    title: 'Nano & Combo Brows',
    tagline: 'Natural definition. Your kind of brows.',
    description: 'Fine hairstrokes or a soft makeup finish. Explore Nano and Combo Brows, designed around your natural features and the look you love.',
    faqTitle: 'Nano & Combo Brows',
    image: nanoOne,
    sections: [
      { id: 'nano-brows', title: 'Nano Brows', eyebrow: 'Fine hairstrokes', image: nanoOne, imageAlt: 'Nano brows before and after by Seri', caption: 'Nano brows · Before & after', description: 'Ideal for clients who want a natural, “these are my real brows” look, with fine hairstrokes that mimic natural brow hairs.', facts: [['Results', 'Can last 1–2 years'], ['Your design', 'Shape and thickness mapped with you before treatment']], detail: 'We carefully map your brows and discuss the shape, thickness, and overall look you prefer. Nothing is tattooed until we’ve reviewed the design together.' },
      { id: 'combo-brows', title: 'Combo Brows', eyebrow: 'Hairstrokes & shading', image: nanoTwo, imageAlt: 'Nano and combo brow work by Seri', caption: 'Brow artistry by Seri', description: 'Ideal for clients who prefer a soft makeup look, combining hairstrokes with shading for added fullness and definition.', facts: [['Results', 'Can last 2–3 years'], ['Finish', 'Soft definition with added fullness']], detail: 'Your brow shape, skin type, existing brow hair, and personal preferences are all considered when designing your brows.' },
    ],
  },
  {
    slug: 'brow-lamination',
    heroImage: lamination,
    heroPosition: 'center 38%',
    title: 'Brow Lamination & Sculpt',
    tagline: 'Fuller brows, thoughtfully shaped.',
    description: 'From a soft, fluffy finish to precise shaping and tinting, choose the brow treatment that suits your natural hairs and personal style.',
    faqTitle: 'Brow Lamination & Sculpt',
    image: lamination,
    sections: [
      { id: 'brow-lamination', title: 'Brow Lamination', eyebrow: 'Lift, shape & define', image: lamination, imageAlt: 'Brow lamination result by Seri', caption: 'Brow lamination by Seri', description: 'Softens, straightens, and repositions natural eyebrow hairs to create a fuller, fluffier, and more uniform look.', facts: [['Includes', 'Lamination, tinting, and shaping'], ['Results', 'Typically 4–6 weeks; up to 8 weeks depending on natural hair growth and aftercare']], detail: 'Prefer a finish without tint? Naked Brow Lamination includes the same brow lamination and shaping, without tinting.' },
      { id: 'brow-sculpt', title: 'Brow Sculpt', eyebrow: 'Shape & polish', image: laminationBeforeAfter, imageAlt: 'Brow treatment before and after by Seri', caption: 'Brow treatment · Before & after', description: 'Shaping, waxing, and tinting to refine your brows.', facts: [['Includes', 'Shaping · Waxing · Tinting']], detail: 'Your brows are shaped and styled to suit your preferences, whether you love a soft, natural look or more definition.' },
    ],
  },
  {
    slug: 'korean-lash-lift',
    heroImage: liftHero,
    heroPosition: 'center 63%',
    title: 'Korean Lash Lift & Tint',
    tagline: 'Your natural lashes, beautifully lifted.',
    description: 'A customized lift and curl for a longer, more defined look—without extensions. Perfect for a fresh, eye-opening finish.',
    faqTitle: 'Korean Lash Lift & Tint',
    image: liftPortrait,
    sections: [
      { id: 'lash-lift', title: 'Korean Lash Lift', eyebrow: 'Lift your natural lashes', image: liftPortrait, imageAlt: 'Korean lash lift client result by Seri', caption: 'Korean lash lift by Seri', description: 'Enhance your natural lashes with a customized lift and curl. Your natural lash health, direction, eye shape, and desired result guide the treatment.', facts: [['Includes', 'Lash tint and a complimentary keratin and peptide lash mask'], ['Results', 'Typically 6–8 weeks, depending on natural lash growth and aftercare']], detail: 'Korean Lash Lifts use specialized techniques and products that allow for greater control over softening, lash placement, and shaping.' },
      { id: 'lift-results', title: 'The finishing details', eyebrow: 'Tint & care', image: liftComparison, imageAlt: 'Korean lash lift before and after by Seri', caption: 'Lash lift · Before & after', description: 'Your lash tint and complimentary keratin and peptide lash mask are included with your treatment.', facts: [['Maintenance', 'Most clients return every 6–8 weeks'], ['Your lashes', 'Results depend on natural lash length, density, and condition']], detail: 'As your lashes naturally shed and new lashes grow in, the lifted appearance gradually fades. We recommend allowing enough time between treatments to avoid unnecessary chemical processing.' },
    ],
  },
  {
    slug: 'lash-extensions',
    heroImage: lashOne,
    heroPosition: 'center 42%',
    title: 'Lash Extensions',
    tagline: 'A lash look that feels like you.',
    description: 'Customized lash extensions for added length, fullness, and definition. Lasts 3+ weeks, with fills recommended within 3 weeks to keep lashes full and fresh.',
    faqTitle: 'Lash Extensions',
    image: lashOne,
    sections: [
      { id: 'classic', title: 'Classic', eyebrow: 'Everyday definition', image: lashOne, imageAlt: 'Lash extension client result by Seri', caption: 'Lash extensions by Seri', description: 'For a subtle, everyday look. Your set is customized to your preferences, eye shape, and natural lash health.', facts: [['Service', 'Customized lash extensions'], ['Maintenance', 'Fills recommended within 3 weeks']], detail: 'We’ll discuss your preferred length, fullness, and overall look before your appointment begins.' },
      { id: 'wet-mascara-look', title: 'Wet Mascara Look', eyebrow: 'Defined & expressive', image: lashTwo, imageAlt: 'Lash extension work by Seri', caption: 'Lash extensions by Seri', description: 'A mascara-inspired finish with added length, fullness, and definition, tailored to your eyes.', facts: [['Your style', 'Customized to your preferences and natural lashes'], ['Maintenance', 'Fills recommended within 3 weeks']] },
      { id: 'natural-wispy', title: 'Natural Wispy', eyebrow: 'Soft & effortless', image: lashThree, imageAlt: 'Lash extension client portrait by Seri', caption: 'Lash extensions by Seri', description: 'A soft, wispy look with length and definition tailored to your eyes and preferred finish.', facts: [['Your style', 'A personalized, natural-looking finish'], ['Maintenance', 'Fills recommended within 3 weeks']] },
      { id: 'yy-wispy', title: 'YY Wispy', eyebrow: 'Your wispy finish', image: lashComparison, imageAlt: 'Lash extension close-up results by Seri', caption: 'Lash extensions · Client results', description: 'Explore YY Wispy as part of your customized lash set. We’ll discuss the best look for your preferences, eye shape, and natural lash health.', facts: [['Your style', 'Customized length, fullness, and definition'], ['Maintenance', 'Fills recommended within 3 weeks']] },
    ],
    aftercare: { title: 'Keeping your lashes full & fresh', text: 'During a fill, grown-out extensions are removed and new extensions are applied to replace those that have naturally shed. Fills must be booked within 3 weeks of your previous appointment, with at least 40–50% of extensions remaining. Otherwise, a full set may be required.' },
  },
]

const aliases = {
  '/services/pmu-brows': 'nano-combo-brows',
  '/nano-combo-brows': 'nano-combo-brows',
  '/brow-lamination': 'brow-lamination',
  '/korean-lash-lift': 'korean-lash-lift',
  '/lash-extension': 'lash-extensions',
}

export function getServicePage(pathname) {
  const path = pathname.toLowerCase().replace(/\/+$/, '')
  return servicePages.find(service => path === `/services/${service.slug}` || aliases[path] === service.slug)
}
