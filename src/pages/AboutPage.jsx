import Testimonials from '../components/Testimonials'
import TextMarquee from '../components/TextMarquee'
import Marquee from '../components/Marquee'
import ServicesGrid from '../components/ServicesGrid'
import FAQ from '../components/FAQ'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import MeetSeri from '../components/MeetSeri'
import MyStory from '../components/MyStory'

export default function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'About Seri | SERIÉ — Lash, Brow & Training'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main className="relative isolate">
      <AboutHero />

      <div className="relative z-10">
        <Marquee />
        <MeetSeri />

        <div className="bg-white py-5 md:py-8"><TextMarquee /></div>

        <MyStory />

        <ServicesGrid />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}