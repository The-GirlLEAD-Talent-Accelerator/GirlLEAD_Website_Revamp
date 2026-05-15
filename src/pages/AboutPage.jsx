import { motion as Motion } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-bg-mute text-text-main transition-colors">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[80vh] md:min-h-[70vh] flex items-center overflow-hidden">
       className="relative w-full h-[95vh] flex flex-col justify-center text-text-onBrand transition-colors bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/WhoWeAre.png')",
      }}
        

        {/* Content */}
        <div className="relative z-10 w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mt-60 sm:mt-20 md:mt-24 lg:mt-72">
              <Motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xs md:text-base uppercase tracking-widest mb-4 text-text-onBrand opacity-80"
              >
                Impact so far
              </Motion.h3>

            </div>
          </div>
        </div>
      </section>

     

      
    </main>
  );
}
