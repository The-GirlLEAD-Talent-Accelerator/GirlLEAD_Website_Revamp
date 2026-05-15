import { motion as Motion } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-bg-mute text-text-main transition-colors">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[100vh] md:min-h-[100vh] flex items-center overflow-hidden">
        {/* Lazy-loaded background image */}
        <img
          src="/WhoWeAre.png"
          alt="Who We Are"
          loading="lazy"
          onLoad={() => setHeroLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${heroLoaded ? "opacity-100" : "opacity-0"
            }`}
        />
        

        {/* Content */}
        <div className="relative z-10 w-full px-6">
  <div className="max-w-7xl mx-auto">
    <div className="max-w-xl mt-20 sm:mt-10 md:mt-12 lg:mt-24">
      <Motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xs md:text-base uppercase tracking-widest mb-4 text-text-onBrand opacity-80"
      >
        Who we are;
      </Motion.h2>
      <p className="text-white">
        At GirlLEAD, we create learning opportunities for women across Africa to learn more about the opportunities in STEM, Social entrepreneurship and leadership, providing them with access to guidance after their training to properly develop and apply all they have learnt to effect meaningful changes in their worlds.
      </p>
    </div>
  </div>
</div>
      </section>

     

      
    </main>
  );
}
