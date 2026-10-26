import Testimonials from '@/components/Testimonials'
import TextMarquee from '@/components/Marquee'

import ServicesGrid from '@/components/ServicesGrid'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import About from '@/components/About'
import MyStory from '@/components/MyStory'

export default function AboutPage() {

  return (
    <main className="relative isolate">
      <AboutHero />

      <div className="relative z-10">
        <About />

        <TextMarquee />

        <MyStory />

        <ServicesGrid />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}