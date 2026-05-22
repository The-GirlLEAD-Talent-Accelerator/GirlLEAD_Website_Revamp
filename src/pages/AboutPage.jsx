import Navbar from "../components/Navbar";
import { motion as Motion } from "framer-motion";
import { useState } from "react";
import TechnologySection from "../components/programs/TechnologySection";
import HowWeWork from "../components/programs/HowToWork";
// import ProgramCard from "../components/programs/ProgramCard";
import WhatWeDo from "../components/programs/WhatWeDo";
import FaqSection from "../components/programs/FaqSection";
import Testimonial from "../components/Testimonial";
import MapSection from "../components/programs/MapSection";
import Contact from "../components/Contact";

export default function AboutPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-bg-mute text-text-main transition-colors">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[100vh] md:min-h-[80vh] flex items-start overflow-hidden">
  {/* Dark overlay for better text readability */}
  <div className="absolute inset-0 bg-black/40 z-[1]" />

  <img
    src="/WhoWeAre.png"
    alt="Who we are"
    onLoad={() => setHeroLoaded(true)}
    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
      heroLoaded ? "opacity-100" : "opacity-0"
    }`}
  />

  {/* Content */}
  <div className="relative z-10 w-full px-6 pt-10 md:pt-14">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-xl">
        <h2 className="text-white font-bold text-sm md:text-base uppercase tracking-widest mb-4">
          Who We Are;
        </h2>
        <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
          At GirlLEAD, we create learning opportunities for women across
          Africa to learn more about the opportunities in STEM, Social
          entrepreneurship and leadership, providing them with access to
          guidance after their training to properly develop and apply all
          they have learnt to effect meaningful changes in their worlds.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* PROGRAMS CONTENT */}
      <section className="md:py-20 py-10 px-6">
        <div className="md:max-w-7xl w-full mx-auto">
          <h2 className="text-xl sm:text-4xl md:text-3xl font-bold mb-6">
            Interested In Joining The Programs?
          </h2>

          <p className="text-sm sm:text-lg text-text-muted">
            Our programs equip women and girls with leadership, entrepreneurial,
            and technology skills through practical training, mentorship, and
            opportunities that help them unlock their potential, create
            solutions, and thrive in their communities.
          </p>

          <p className="pt-5 text-sm">
            Here&#39;s a list of all our programs with links to register or
            details about when they will be open for registration.
          </p>
        </div>
      </section>

      <TechnologySection />
      <WhatWeDo />
      <HowWeWork />
      <FaqSection />
      <Testimonial 
        title="What our fellows say" 
        showButton={false} 
        className="bg-bg-card" 
      />
      <MapSection />
      <Contact />
    </main>
  );
}