import { motion as Motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[95vh] flex flex-col justify-center text-white dark:text-gray-100 transition-colors bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-30 md:mt-36">
        <Motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl tracking-widest mb-3"
        >
          The GirlLEAD Talent Accelerator
        </Motion.h3>

        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold leading-tight w-[90%]"
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
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            About Us
          </a>
        </Motion.div>
      </div>

      {/* Stats Section */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[55%] bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-colors">
        <div className="grid grid-cols-3 text-center text-gray-800 dark:text-gray-200">

          {/* First Box */}
          <div className="bg-teal-800 text-white py-8 px-4">
            <h3 className="text-3xl font-bold">1000+</h3>
            <p className="text-sm md:text-base font-medium mt-1">Girls Trained</p>
          </div>

          {/* Second Box */}
          <div className="bg-teal-100/40 dark:bg-teal-900 py-8 px-4 border-r border-gray-300 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-teal-800 dark:text-teal-300">320</h3>
            <p className="text-sm md:text-base font-medium mt-1">Employed Alumni</p>
          </div>

          {/* Third Box */}
          <div className="bg-teal-100/40 dark:bg-teal-900 py-8 px-4">
            <h3 className="text-3xl font-bold text-teal-800 dark:text-teal-300">8</h3>
            <p className="text-sm md:text-base font-medium mt-1">Partners</p>
          </div>

        </div>
      </div>


    </section>
  );
}
