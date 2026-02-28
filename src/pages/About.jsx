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
        className="relative w-full max-w-4xl bg-gray-50 rounded-3xl overflow-hidden"
        style={{ height: "380px" }}
      >

        {/* IMAGE — bottom-right, with a top-left radius to create the interlocking notch */}
        <div
          className="absolute overflow-hidden"
          style={{
            bottom: 0,
            right: 0,
            width: "72%",
            height: "75%",
            borderTopLeftRadius: "1.5rem",
          }}
        >
          <img
            src="/WhoWeAre.png" // replace with your actual image
            alt="Women in a learning session"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* TEXT — top-left, same background as card so it blends in */}
        <div
          className="absolute top-0 left-0 bg-gray-50 pt-10 pl-10 pr-10 pb-8"
          style={{ width: "42%" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Who we are;
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            At GirlLEAD, we create learning opportunities for women across
            Africa to learn more about the opportunities in STEM, Social
            entrepreneurship and leadership, providing them with access to
            guidance after their training to properly develop and apply all they
            have learnt to effect meaningful changes in their worlds.
          </p>
        </div>
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
