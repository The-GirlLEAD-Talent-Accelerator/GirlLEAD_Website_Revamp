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
       <div
          className="bg-white flex flex-col justify-center px-10 py-10"
          style={{ width: "45%", flexShrink: 0 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Who we are;
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            At GirlLEAD, we create learning opportunities for women across
            Africa to learn more about the opportunities in STEM, Social
            entrepreneurship and leadership, providing them with access to
            guidance after their training to properly develop and apply all they
            have learnt to effect meaningful changes in their worlds.
          </p>
        </div>

        {/* RIGHT — photo panel */}
        <div className="flex-1 overflow-hidden">
          <img
            src="/WhoWeAre.png"
            alt="Who GirlLEAD are"
            className="w-full h-full object-cover object-center"
          />
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
