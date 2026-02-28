import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import MissionSection from "../components/MissionSection";
import Testimonial from "../components/Testimonial";
import PartnersSection from "../components/PartnersSection";
import Actions from "../components/Actions";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      <div className="h-[7vh]">
        <Navbar />
      </div>
      <div className="flex-1">
        <Hero />
      </div>
      <Main />
      <Testimonial />
      <MissionSection />
      <PartnersSection />
      <Actions />
      <Contact />
    </main>
  );
}