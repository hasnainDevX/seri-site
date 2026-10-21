import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import VideoCarousel from "./components/VideoCarousel";
import ServicesShowcase from "./components/ServicesShowcase";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="relative isolate">
        <div className="h-[calc(100svh-32px)] min-h-[588px] motion-reduce:h-auto motion-reduce:min-h-0 md:min-h-[608px] md:motion-reduce:min-h-0">
          <div className="fixed inset-x-0 top-0 z-0 motion-reduce:static">
            <Hero />
          </div>
        </div>

        <div className="relative z-10">
          <Marquee />
          <About />
          <Marquee />
          <ServicesShowcase />
          <VideoCarousel />
          <Testimonials/>
        </div>
      </main>
    </>
  );
}

export default App;
