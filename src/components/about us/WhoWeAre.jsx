import { useEffect, useRef } from "react";

export default function GirlLeadSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="font-sans bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal:nth-child(2) { transition-delay: 0.15s; }
        .reveal:nth-child(3) { transition-delay: 0.3s; }
      `}</style>

      {/* Who We Are Section */}
      <section className="relative bg-white px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Text Card */}
          <div className="reveal bg-white rounded-2xl shadow-lg p-8 md:p-10 z-10 relative">
            <h2 className="font-display text-3xl md:text-4xl text-[#1a2e2a] mb-4">
              Who we are;
            </h2>
            <p className="font-body text-[#4a5568] text-sm md:text-base leading-relaxed">
              At GirlLEAD, we create learning opportunities for women across Africa to learn
              more about the opportunities in STEM, Social entrepreneurship and leadership,
              providing them with access to guidance after their training to properly develop
              and apply all they have learnt to effect meaningful changes in their worlds.
            </p>
          </div>

          {/* Image collage */}
          <div className="reveal relative h-72 md:h-96">
            {/* Background image — large, top right */}
            <div className="absolute top-0 right-0 w-4/5 h-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80"
                alt="Women in a meeting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Foreground image — bottom left overlap */}
            <div className="absolute bottom-0 left-0 w-3/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80"
                alt="Women collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-[#eaf4f2] px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Our Vision — dark card */}
          <div className="reveal bg-[#0e4d45] rounded-2xl p-8 md:p-10 text-white shadow-lg">
            <h3 className="font-display text-2xl md:text-3xl mb-4">Our Vision</h3>
            <p className="font-body text-[#a8d5cd] text-sm md:text-base leading-relaxed">
              To be Africa's biggest social enterprise creating a robust atmosphere for girls
              to fulfill their potentials and take part in solving world problems.
            </p>
          </div>

          {/* Our Mission — light card */}
          <div className="reveal bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 className="font-display text-2xl md:text-3xl text-[#1a2e2a] mb-4">Our Mission</h3>
            <p className="font-body text-[#4a5568] text-sm md:text-base leading-relaxed">
              To empower women and girls in underserved communities with leadership,
              entrepreneurial, and technological skills, enabling them in their unique
              capacity to change the world.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
