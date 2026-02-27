import Navbar from "../components/Navbar";
import { motion as Motion } from "framer-motion";
import { useRef } from "react";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

/**
 * GirlLeadSection
 * Renders the "Who We Are" and "Vision & Mission" sections.
 *
 * Setup:
 *  1. Copy girlead.css content into your src/index.css
 *  2. Place useRevealOnScroll.js in src/hooks/
 *  3. TODO: Replace placeholder image URLs with real GirlLEAD assets
 */
export default function About() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <div ref={sectionRef} className="font-body bg-white">

      {/* ── Who We Are ────────────────────────────────── */}
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
                src="/assets/WhoWeAre.png"
                alt="GirlLEAD women collaborating and learning together"
                className="w-full h-full object-cover object-bottom"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Vision & Mission ──────────────────────────── */}
      <section className="bg-[#eaf4f2] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Our Vision — dark teal card */}
          <div
            className="reveal bg-[#0e4d45] rounded-2xl p-8 md:p-10 text-white shadow-lg"
            style={{ transitionDelay: "0s" }}
          >
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              Our Vision
            </h3>
            <p className="text-[#a8d5cd] text-sm md:text-base leading-relaxed">
              To be Africa's biggest social enterprise creating a robust atmosphere
              for girls to fulfill their potentials and take part in solving world problems.
            </p>
          </div>

          {/* Our Mission — white card */}
          <div
            className="reveal bg-white rounded-2xl p-8 md:p-10 shadow-lg"
            style={{ transitionDelay: "0.15s" }}
          >
            <h3 className="font-display text-2xl md:text-3xl text-[#1a2e2a] mb-4">
              Our Mission
            </h3>
            <p className="text-[#4a5568] text-sm md:text-base leading-relaxed">
              To empower women and girls in underserved communities with leadership,
              entrepreneurial, and technological skills, enabling them in their unique
              capacity to change the world.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}