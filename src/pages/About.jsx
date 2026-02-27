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

export default function About() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="h-[7vh]">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Text Card */}
          <div className="reveal bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="font-display text-3xl md:text-4xl text-[#1a2e2a] mb-4">
              Who we are;
            </h2>
            <p className="text-[#4a5568] text-sm md:text-base leading-relaxed">
              At GirlLEAD, we create learning opportunities for women across Africa to learn
              more about the opportunities in STEM, Social entrepreneurship and leadership,
              providing them with access to guidance after their training to properly develop
              and apply all they have learnt to effect meaningful changes in their worlds.
            </p>
          </div>

          {/* Single photo with dual rounded-mask effect */}
          <div
            className="reveal relative h-80 md:h-[420px]"
            style={{ transitionDelay: "0.15s" }}
          >
            {/* Top-right window — shows upper part of photo */}
            <div className="absolute top-0 right-0 w-[78%] h-[72%] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/WhoWeAre.png"
                alt="GirlLEAD participants engaged in a leadership and technology workshop"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Bottom-left window — shows lower part of same photo */}
            <div className="absolute bottom-0 left-0 w-[62%] h-[72%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/WhoWeAre.png"
                alt="GirlLEAD women collaborating and learning together"
                className="w-full h-full object-cover object-bottom"
                loading="lazy"
              />
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
