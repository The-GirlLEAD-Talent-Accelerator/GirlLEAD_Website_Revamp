import { motion as Motion } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-[7vh]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[80vh] md:min-h-[70vh] flex items-center overflow-hidden">
                {/* Lazy-loaded background image */}
                <img
                  src="/WhoWeAre.png"
                  alt="Who We Are"
                  loading="lazy"
                  onLoad={() => setHeroLoaded(true)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${heroLoaded ? "opacity-100" : "opacity-0"
                    }`}
                />
              </section>
            </main>
          );
        }