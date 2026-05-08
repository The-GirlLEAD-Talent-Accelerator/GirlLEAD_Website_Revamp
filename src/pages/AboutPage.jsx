import Navbar from "../components/Navbar";

export default function AboutPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-bg-mute text-text-main transition-colors">
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
              </Motion.h3>

              <Motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-onBrand"
              >
              
              </Motion.h1>
            </div>
          </div>
        </div>
      </section>

     

      <Navbar/>
      
    </main>
  );
}