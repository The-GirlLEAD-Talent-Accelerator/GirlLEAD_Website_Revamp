import { motion as Motion } from "framer-motion";
import { HiMiniGift } from "react-icons/hi2";
import { PiHandshakeLight } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import RotatingTextCircle from "./RotatingTextCircle";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="relative w-full h-[95vh] flex flex-col justify-center text-text-onBrand transition-colors bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero.png')",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-30 md:mt-36">
        <Motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-xl  tracking-widest mb-3"
        >
          The GirlLEAD Talent Accelerator
        </Motion.h3>

        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-7xl font-bold leading-tight w-[90%]"
        >
          Empowering Women In Africa To Change The World
        </Motion.h1>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-8"
        >
          <a
            href="#about"
            className="inline-block bg-brand-primary text-text-onBrand px-6 py-3 rounded-lg hover:bg-brand-deep transition-colors"
          >
            About Us
          </a>
        </Motion.div>
      </div>
      <div className="hidden md:block absolute bottom-10 right-6 md:bottom-16 md:right-12 lg:right-24 z-20">
        <RotatingTextCircle text="LEARN MORE • " size={140} />
      </div>

      {/* Stats Section */}
      <div
        ref={ref}
        className="hidden md:block z-30 md:absolute md:-bottom-40 left-1/2 transform -translate-x-1/2 h-44 md:h-auto w-[50%] md:w-[50%] lg:w-[55%] bg-bg-mute rounded-xl shadow-lg overflow-hidden transition-colors"
      >
        <div className="grid md:grid-cols-3 grid-cols-1  text-center text-text-main">
          <div className="bg-brand-deep text-text-onBrand py-8 px-4 items-center flex-col flex gap-[10px]">
            <div className="bg-bg-soft md:w-16 md:h-16 w-10 h-10 rounded-full flex items-center justify-center">
              <HiMiniGift className="text-text-iconAccent md:w-10 md:h-10 w-5 h-5" />
            </div>
            <h3 className="lg:text-3xl font-bold">
              {inView && (
                <CountUp start={500} end={2000} duration={7} suffix="+" />
              )}
            </h3>
            <p className="text-xs md:text-base font-medium md:mt-1">
              Women and Girls Trained
            </p>
          </div>

          <div className="bg-bg-card py-8 px-4 border-r border-border-soft items-center flex-col flex gap-[10px]">
            <div className="bg-brand-hero md:w-16 md:h-16 w-10 h-10 rounded-full flex items-center justify-center">
              <LuGraduationCap className="text-text-onBrand md:w-10 md:h-10 w-5 h-5" />
            </div>
            <h3 className="lg:text-3xl font-bold text-brand-primary">
              {inView && <CountUp start={1} end={10} duration={3} suffix="+" />}
            </h3>
            <p className="text-xs md:text-base font-medium md:mt-1 tracking-tighter">
              Program Cohorts
            </p>
          </div>

          <div className="bg-bg-card py-8 px-4 items-center flex-col flex gap-[10px]">
            <div className="bg-brand-hero md:w-16 md:h-16 w-10 h-10 rounded-full flex items-center justify-center">
              <PiHandshakeLight className="text-text-onBrand md:w-10 md:h-10 w-5 h-5" />
            </div>
            <h3 className="lg:text-3xl font-bold text-brand-primary">
              {inView && <CountUp start={1} end={5} duration={5} suffix="+" />}
            </h3>
            <p className="text-xs md:text-base font-medium md:mt-1">Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
