import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutCards from "@/components/AboutCards";
import About from "@/components/About";
import Services from "@/components/Services";
import Pillars from "@/components/Pillars";
import Values from "@/components/Values";
import GeoVision from "@/components/GeoVision";
import Works from "@/components/Works";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutCards />
      <About />
      <Services />
      <Pillars />
      <Values />
      <GeoVision />
      <Works />
      <CTA />
      <Footer />
    </main>
  );
}
