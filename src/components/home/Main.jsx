import FocusSection from "./FocusSection";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion as Motion } from "framer-motion";
import { HiMiniGift } from "react-icons/hi2";
import { PiHandshakeLight } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";

const Main = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <>
      <section className="bg-bg-soft relative w-full flex flex-col justify-center items-center md:pt-64 pb-10 px-4 ">
        <section className="max-w-4xl mx-auto w-full flex flex-col items-center">
          <div
            ref={ref}
            className="md:hidden relative my-10 w-[70%] dark:bg-gray-900 rounded-xl shadow-lg overflow-visible transition-colors"
          >
            <div className="grid grid-cols-1 gap-1 text-gray-800 dark:text-gray-200">
              {/* CARD 1 */}
              <div className="bg-brand-deep text-text-onBrand py-5 px-4 flex items-center gap-6 rounded-t-lg">
                <div className="shrink-0 bg-bg-soft w-10 h-10 rounded-full flex items-center justify-center">
                  <HiMiniGift className="text-text-iconAccent w-5 h-5" />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-left font-bold dark:text-gray-800">
                    {inView && (
                      <CountUp start={500} end={2000} duration={7} suffix="+" />
                    )}
                  </h3>

                  <p className="text-xs font-medium dark:text-gray-800">
                    Women and Girls Trained
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-bg-card text-teal-800 py-5 px-4 flex items-center gap-6">
                <div className="shrink-0 bg-teal-900 w-10 h-10 rounded-full flex items-center justify-center">
                  <LuGraduationCap className="text-text-onBrand w-5 h-5" />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-left font-bold dark:text-gray-800">
                    {inView && (
                      <CountUp start={1} end={10} duration={3} suffix="+" />
                    )}
                  </h3>

                  <p className="text-xs font-medium dark:text-gray-800">
                    Program Cohorts
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="bg-bg-card text-teal-800 py-5 px-4 flex items-center gap-6 rounded-b-lg">
                <div className="shrink-0 bg-teal-900 w-10 h-10 rounded-full flex items-center justify-center">
                  <PiHandshakeLight className="text-text-onBrand w-5 h-5" />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-left font-bold dark:text-gray-800">
                    {inView && (
                      <CountUp start={0} end={5} duration={7} suffix="+" />
                    )}
                  </h3>

                  <p className="text-xs font-medium dark:text-gray-800">
                    Partners
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="self-start sm:block h-0.5 w-[345px] text-left border-t-2 border-dashed border-teal-600 dark:border-teal-400 animate-[slideLeft_1s_ease-in-out_forwards]"></div>

          <div className="flex items-center justify-center text-center w-[300px] md:w-full max-w-5xl my-6 px-2">
            <p className="text-gray-700 dark:text-white text-sm md:text-base lg:text-[20px] font-medium leading-relaxed max-w-[800px]">
              "We provide women and girls in Africa professional opportunities
              in tech, leadership and social entrepreneurship to build
              transformative careers and drive impactful changes in their
              communities."
            </p>
          </div>

          {/* Bottom dashed line */}
          <div className="self-end sm:block w-[345px] h-0.5 border-t-2 border-dashed border-teal-600 dark:border-teal-400 animate-[slideRight_1s_ease-in-out_forwards]"></div>
        </section>

        {/* Decorative Circles */}
        <div>
          {/* <div className="absolute top-10 left-10 w-24 h-24 bg-teal-300 rounded-full opacity-50 filter animate-pulse-slow"></div> */}
          <div className="absolute hidden lg:block bottom-0 right-1 w-72 h-72 bg-cyan-300 rounded-full dark:opacity-20 opacity-30 filter blur-3xl animate-pulse-slow"></div>
          {/* <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-red-200 rounded-full filter animate-pulse-slow"></div> */}

          {/* Outer Circle */}
          <div
            className="hidden lg:block absolute top-[450px] md:top-80 -left-36 md:-left-24 -translate-y-20 md:-translate-y-28 
                    w-[250px] sm:w-[300px] md:w-[400px] 
                    h-[250px] sm:h-[300px] md:h-[400px] 
                    border-2 border-teal-600 dark:border-teal-400 border-dashed rounded-full 
                    animate-spinSlow blur-[0.5px]"
          ></div>

          {/* Inner Circle */}
          <div
            className="hidden lg:block absolute top-[450px] md:top-96 -left-20 md:-left-32 -translate-y-20 md:-translate-y-28 
                  w-[150px] sm:w-[240px] md:w-[300px] 
                  h-[150px] sm:h-[240px] md:h-[300px] 
                  border-2 border-teal-600 dark:border-teal-400 border-dashed rounded-full 
                  animate-spinReverse blur-[0.5px]"
          ></div>

          {/* <div className="absolute -left-24 -translate-y-28 w-[400px] h-[400px] border-4 border-[#7EDCE2]/80 border-dashed rounded-full animate-spinSlow"></div>
          <div className="absolute top-96 -left-32 -translate-y-28 w-[300px] h-[300px] border-4 border-[#7EDCE2]/60 border-dashed rounded-full animate-spinReverse"></div> */}
        </div>

        <FocusSection />
      </section>
    </>
  );
};

export default Main;
