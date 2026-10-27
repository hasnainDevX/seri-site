import { pageMetadata } from '@/lib/seo'
import { pageSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
export const metadata = pageMetadata('/')
import Hero from '@/components/Hero'
import MeetSeri from '@/components/MeetSeri'
import Marquee from '@/components/Marquee'
import ServicesShowcase from '@/components/ServicesShowcase'
import VideoCarousel from '@/components/VideoCarousel'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import WorkMarquee from '@/components/WorkMarquee'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function HomePage() { return (<main className="relative isolate"><JsonLd data={pageSchema('/')} />
        <div className="h-[calc(100svh-32px)] min-h-[588px] motion-reduce:h-auto motion-reduce:min-h-0 md:min-h-[608px] md:motion-reduce:min-h-0">
          <div className="fixed inset-x-0 top-0 z-0 motion-reduce:static">
            <Hero />
          </div>
        </div>

        <div className="relative z-10">
          <MeetSeri />
          <Marquee />
          <ServicesShowcase />
          <VideoCarousel />
          <Process />
          <Testimonials/>
          <WorkMarquee/>
          <FAQ/>
          <Footer/>
        </div>
      </main>) }
