export default function WhoWeAre() {
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
      </section>
    </main>
  );
}