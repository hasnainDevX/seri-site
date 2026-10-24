import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import RevealHeading from '../components/RevealHeading'
import { FAQList } from '../components/FAQ'
import TrainingInquiryForm from '../components/TrainingInquiryForm'
import CircularText from '../components/CircularText'
import TextMarquee from '../components/Marquee'
import Footer from '../components/Footer'
import { trainingDetails, trainingFAQs } from '../data/training'
import heroImage from '../assets/Profile&ETC/seri-gloves-beauty-product-portrait.jpg'
import trainingImage from '../assets/Training/lash-training-demonstration.png'
import background from '../assets/image.png'

const heading = 'font-editorial text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.025em]'
const eyebrow = 'mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-clay'
const button = 'inline-flex min-h-12 items-center justify-center border px-8 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors motion-reduce:transition-none'

export default function TrainingPage() {
  const reduceMotion = useReducedMotion()
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Korean Lash Lift Training in Winnipeg | SERIÉ'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main className="bg-white text-black">
      <section aria-labelledby="training-title" className="relative isolate flex min-h-[620px] items-end overflow-hidden bg-espresso px-6 pb-14 pt-40 text-white md:min-h-[680px] md:px-10 md:pb-20 lg:px-16">
        <motion.img src={heroImage} alt="Seri, lash and brow artist and educator" fetchPriority="high" initial={{ scale: reduceMotion ? 1 : 1.06 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 1.8 }} className="absolute inset-0 -z-20 size-full object-cover object-[center_35%] md:object-[center_30%]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em]">Learn with Seri · Winnipeg</p>
          <RevealHeading as="h1" id="training-title" className="max-w-[12ch] font-editorial text-[clamp(3.25rem,6.5vw,6rem)] leading-[1.02] tracking-[-0.025em]">Korean Lash Lift Training</RevealHeading>
          <p className="mt-6 font-editorial text-[25px] md:text-[30px]">1:1 One Day Beginner Class</p>
          <a href="#training-inquiry" className={button + ' mt-8 border-white/70 hover:bg-white hover:text-espresso'}>Inquire about training</a>
        </div>
      </section>

      <nav aria-label="On this training page" className="sticky top-16 z-30 overflow-x-auto border-y border-stone bg-white bg-cover bg-center md:top-20" style={{ backgroundImage: 'linear-gradient(rgb(255 255 255 / 55%), rgb(255 255 255 / 55%)), url(' + background + ')' }}>
        <div className="mx-auto flex w-max min-w-full items-center justify-center gap-7 px-6 md:gap-10">
          {[['course-overview', 'The experience'], ['course-details', 'Course details'], ['training-faq', 'FAQs'], ['training-inquiry', 'Inquire']].map(([id, label]) => <a key={id} href={'#' + id} className="flex min-h-14 shrink-0 items-center whitespace-nowrap font-editorial text-xl underline-offset-4 hover:underline md:min-h-16 md:text-[22px]">{label}</a>)}
        </div>
      </nav>

      <section id="course-overview" aria-labelledby="experience-title" className="scroll-mt-40 px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="overflow-hidden bg-greige">
            <motion.img src={trainingImage} alt="Hands-on lash training at SERIÉ" loading="lazy" variants={{ hidden: { x: reduceMotion ? 0 : 50, opacity: reduceMotion ? 1 : 0 }, visible: { x: 0, opacity: 1 } }} transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }} className="aspect-[4/5] w-full object-cover" />
          </motion.div>
          <div>
            <p className={eyebrow}>Personal guidance. Thoughtful practice.</p>
            <RevealHeading id="experience-title" className={heading}>The ultimate Korean Lash Lift training experience</RevealHeading>
            <div className="mt-7 space-y-5 text-sm leading-[1.85] md:text-[15px]">
              <p>Korean Lash Lift is one of the most advanced and refined techniques, trusted and perfected in Korea for over 20 years. Learn the most up-to-date methods, directly inspired by techniques Seri refined through training with master artists in Korea.</p>
              <p>This 1:1 One Day hybrid-style training combines in-depth online learning with hands-on, in-person practice.</p>
              <p>Two weeks before your in-person training day, you’ll receive access to a comprehensive online module to learn essential theory, techniques, and core concepts at your own pace. Your in-person day focuses on hands-on practice, precision, and skill refinement with guided support.</p>
              <p>This approach reflects the modern Korean education style, focusing not only on how to perform the technique, but why each step matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="border-y border-stone bg-off-white py-6 md:py-8"> */}
        <TextMarquee items={['Learn with intention', 'Practice with confidence', 'Grow with guidance']} />
        {/* </div> */}

      <section id="course-details" aria-labelledby="details-title" className="scroll-mt-40 bg-off-white px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-24">
          <div className="md:sticky md:top-44">
            <p className={eyebrow}>Your next chapter</p>
            <RevealHeading id="details-title" className={heading}>An investment in your artistry.</RevealHeading>
            <p className="mt-7 font-editorial text-[42px] leading-none">$1,250 <span className="text-xl">+ GST</span></p>
            <p className="mt-4 max-w-[32ch] text-sm leading-[1.8] text-espresso">One-to-one training, online learning, a student kit, and continued guidance.</p>
            <a href="#training-inquiry" className={button + ' mt-7 border-espresso hover:bg-espresso hover:text-white'}>Register your interest</a>
          </div>
          <FAQList items={trainingDetails} />
        </div>
      </section>

      <section id="training-faq" aria-labelledby="training-faq-title" className="scroll-mt-40 px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-24">
          <div>
            <p className={eyebrow}>Before you join us</p>
            <RevealHeading id="training-faq-title" className={heading}>A few things to know.</RevealHeading>
            <div className="mt-9 w-fit">
              <CircularText text="SERIÉ · LEARN WITH CONFIDENCE · " size={140} fontSize={12} fontWeight={500} spinDuration={25} className="text-clay">
                <span className="font-heading text-[25px] font-normal tracking-[-0.065em]">SERIÉ</span>
              </CircularText>
            </div>
          </div>
          <FAQList items={trainingFAQs} />
        </div>
      </section>

      <section id="training-inquiry" aria-labelledby="inquiry-title" className="scroll-mt-40 border-t border-stone bg-off-white px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-24">
          <div>
            <p className={eyebrow}>Let’s get started</p>
            <RevealHeading id="inquiry-title" className={heading}>Book your Training.</RevealHeading>
            <p className="mt-6 max-w-[36ch] text-sm leading-[1.85] md:text-[15px]">If you’re interested in enrolling, complete the form with a few details. Seri will review your submission and get back to you via email within 24 hours.</p>
            <p className="mt-5 max-w-[36ch] text-sm leading-[1.85] text-espresso">Your place is secured once your training date is confirmed and your deposit has been received.</p>
            <address className="mt-8 border-t border-stone pt-6 text-sm not-italic leading-[1.85]">296 Stafford St<br />Winnipeg, MB R3M 1J1<br /><span className="text-espresso">Inside Lisa Tran Brow</span></address>
          </div>
          <TrainingInquiryForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
