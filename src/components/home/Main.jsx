import FocusSection from "./FocusSection";

const Main = () => {
  return (
    <>
      <section className="bg-[#EDFAFA] dark:bg-gray-950 relative w-full flex flex-col justify-center items-center pt-64 pb-10 px-4 ">
        <section className="max-w-4xl mx-auto w-full flex flex-col items-center">
          <div className="self-start hidden sm:block h-0.5 w-[345px] text-left border-t-2 border-dashed border-teal-600 dark:border-teal-400 animate-[slideLeft_1s_ease-in-out_forwards]"></div>

          <div className="flex items-center justify-center text-center w-full max-w-5xl my-6 px-2">
            <p className="text-gray-700 dark:text-white text-sm md:text-base lg:text-[20px] font-medium leading-relaxed max-w-[800px]">
              "We provide women and girls in Africa professional opportunities in tech, leadership and social entrepreneurship to build transformative careers and drive impactful changes in their communities."
            </p>
          </div>

          {/* Bottom dashed line */}
          <div className="self-end hidden sm:block w-[345px] h-0.5 border-t-2 border-dashed border-teal-600 dark:border-teal-400 animate-[slideRight_1s_ease-in-out_forwards]"></div>
        </section>
        
        {/* Decorative Circles */}
        <div>
          {/* <div className="absolute top-10 left-10 w-24 h-24 bg-teal-300 rounded-full opacity-50 filter animate-pulse-slow"></div> */}
          <div className="absolute hidden md:block bottom-0 right-1 w-72 h-72 bg-cyan-300 rounded-full dark:opacity-20 opacity-30 filter blur-3xl animate-pulse-slow"></div>
          {/* <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-red-200 rounded-full filter animate-pulse-slow"></div> */}

          {/* Outer Circle */}
          <div
            className="absolute top-[450px] md:top-80 -left-36 md:-left-24 -translate-y-20 md:-translate-y-28 
                    w-[250px] sm:w-[300px] md:w-[400px] 
                    h-[250px] sm:h-[300px] md:h-[400px] 
                    border-2 border-teal-600 dark:border-teal-400 border-dashed rounded-full 
                    animate-spinSlow blur-[0.5px]"
                ></div>

          {/* Inner Circle */}
          <div
            className="absolute top-[450px] md:top-96 -left-20 md:-left-32 -translate-y-20 md:-translate-y-28 
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
