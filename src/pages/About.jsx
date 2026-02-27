import Navbar from "../components/Navbar";
import { motion as Motion } from "framer-motion";
import { useState } from "react";
import WhoWeAre from "../components/about/WhoWeAre";

export default function About() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="h-[7vh]">
        <Navbar />
      </div>
    </main>
  );
}