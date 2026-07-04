import Navbar from "../components/Navbar";
import { motion as Motion } from "framer-motion";
import { useState } from "react";
import AboutFounder from "../components/AboutFounder";
import MeetTheTeam from "../components/MeetTheTeam";
import JoinAndRecruitment from "../components/JoinAndRecruitment";
import ImpactAssociateAlumniStories from "../components/ImpactAssociateAlumniStories";
import FriendsOfGirlLEAD from "../components/FriendsOfGirlLEAD";
import Contact from "../components/Contact";

export default function AboutPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-bg-mute text-text-main transition-colors">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-start overflow-hidden">
        {" "}
        {/* ← md increased back up */}
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        {/* Lazy-loaded background image */}
        <img
          src="/WhoWeAre.webp"
          alt="Who we are"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setHeroLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            heroLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Content — only renders after image is loaded */}
        {heroLoaded && (
          <div className="relative z-10 w-full px-6 pt-10 md:pt-14">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-xl">
                <h3 className="text-white font-bold text-lg md:text-2xl uppercase tracking-widest mb-4">
                  Who We Are;
                </h3>
                <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
                  At GirlLEAD, we create learning opportunities for women across
                  Africa to learn more about the opportunities in STEM, Social
                  Entrepreneurship and Leadership, providing them with access to
                  guidance after their training to properly develop and apply
                  all they have learnt to effect meaningful changes in their
                  worlds.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Vision & Values */}
      <section className="w-full bg-bg-soft py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <img
            src="/Vision.webp"
            alt="Our Vision, Mission and Values"
            className="w-full h-auto object-contain scale-110 md:scale-100 origin-center"
          />
        </div>
      </section>

      
      <AboutFounder />
      <MeetTheTeam />
      <JoinAndRecruitment />
      <ImpactAssociateAlumniStories
        title="Impact Associate Alumni Stories"
        showButton={false}
        className="bg-bg-card"
      />
      <FriendsOfGirlLEAD />
      <Contact />
    </main>
  );
}
