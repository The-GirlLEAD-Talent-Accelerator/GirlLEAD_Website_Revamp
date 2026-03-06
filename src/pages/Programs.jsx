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

export default function Programs() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-[7vh]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[80vh] md:min-h-[70vh] flex items-center overflow-hidden">
        {/* Lazy-loaded background image */}
        <img
          src="/programs-hero.png"
          alt="Programs hero"
          loading="lazy"
          onLoad={() => setHeroLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${heroLoaded ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mt-60 sm:mt-20 md:mt-24 lg:mt-72">
              <Motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xs md:text-base uppercase tracking-widest mb-4 text-gray-200"
              >
                Impact so far
              </Motion.h3>

              <Motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
              >
                Our Programs
              </Motion.h1>
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

          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300">
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
      <Testimonial className="bg-teal-100 dark:bg-teal-900" />
      <MapSection />
      <Contact />
    </main>
  );
}
