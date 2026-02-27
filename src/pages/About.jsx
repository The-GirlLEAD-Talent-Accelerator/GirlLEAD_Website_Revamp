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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-10">

      {/* Outer card: flex row, rounded corners, clips children */}
      <div
        className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-md flex"
        style={{ minHeight: "300px" }}
      >

        {/* LEFT — white text panel */}
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
            alt="Women in a learning session"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </div>
  );
}
