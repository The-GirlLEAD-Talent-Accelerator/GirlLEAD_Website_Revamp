import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import MissionSection from "../components/MissionSection";
import Testimonial from "../components/Testimonial";
import PartnersSection from "../components/PartnersSection";
import Actions from "../components/Actions";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="pt-[7vh]">
      <Hero />
      <Main />
      <Testimonial />
      <MissionSection />
      <PartnersSection />
      <Actions />
      <Contact />
    </main>
  );
}