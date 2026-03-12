import { useEffect, useState } from "react";

const steps = [
  {
    key: "A",
    title: "Build your\nfoundation",
    description:
      "Enroll in one of our hands-on\nlearning programs designed to\nequip you with relevant skills\nfor today's world",
    image: "/build.png",
  },
  {
    key: "B",
    title: "Get integrated\ninto our community",
    description:
      "Become a lifelong member of our\nempowering GirlLead network of\nwomen. Connect, collaborate, and\nrise together",
    image: "/community-engagement.png",
  },
  {
    key: "C",
    title: "Step into real-\nworld impact.",
    description:
      "Contribute through mentorship\nor explore internships with our\ntrusted partner organizations\nto drive change.",
    image: "/world.png",
  },
];

export default function HowWeWork() {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    steps.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndex((prev) => Math.max(prev, i));
      }, i * 400);
    });
  }, []);

  return (
    <section className="bg-bg-mute py-16 md:py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-text-main mb-4">
            How we work
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-6 uppercase tracking-[0.2em] font-bold">
            The Process
          </p>
          <p className="text-text-muted text-sm md:text-[16px] leading-[1.8] max-w-3xl mx-auto">
            Every GirlLEAD fellow embarks on a transformative journey - starting
            with an immersive technical and leadership learning experience,
            enriched by mentorship, real-world exposure through internships and
            live projects, and culminating in becoming part of a vibrant
            community of women in tech who uplift and champion one another.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative w-full max-w-[1200px] mx-auto px-4 lg:px-0">

          {/* Connecting Curved Lines (Desktop only) */}
          <div className="hidden lg:block absolute top-[40%] left-0 w-full h-full pointer-events-none z-0">
            {/* SVG implementation for the curved lines to be truly pixel perfect */}
            <svg className="w-full h-[400px]" viewBox="0 0 1200 400" fill="none">
              {/* Path from A to B */}
              <path
                d="M320 180 C 450 180, 450 280, 580 280"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Path from B to C */}
              <path
                d="M620 280 C 750 280, 750 180, 880 180"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Grid/Flex Layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-20 lg:gap-12 xl:gap-20">
            {steps.map((step, index) => {
              // Exact staggering heights
              // Box 0: y=0
              // Box 1: y=120
              // Box 2: y=0
              const verticalOffset = index === 1 ? 'lg:translate-y-24' : 'lg:translate-y-0';

              return (
                <div
                  key={step.key}
                  className={`relative w-full max-w-[340px] ${verticalOffset} transform transition-all duration-700 ease-out z-10 ${visibleIndex >= index ? 'opacity-100' : 'opacity-0 translate-y-10'
                    }`}
                >

                  {/* Card with indent */}
                  <div className="relative ml-10 flex">

                    {/* The Indent/Cutout side part */}
                    <div className="absolute top-0 left-[-40px] w-10 h-full overflow-hidden pointer-events-none">
                      {/* Upper teal block */}
                      <div className="absolute top-0 left-0 w-full h-[35%] bg-brand-deep rounded-tl-4xl" />
                      {/* Cutout area background-colored semi-circle */}
                      <div className="absolute top-[45%] left-[-20px] -translate-y-1/2 w-16 h-16 bg-bg-mute rounded-full z-20" />
                      {/* Lower teal block */}
                      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-brand-deep rounded-bl-4xl" />

                      {/* Smoothing curves for the indent (Inner curves) */}
                      <div className="absolute top-[calc(45%-32px-8px)] left-0 w-8 h-8 bg-brand-deep z-10">
                        <div className="w-full h-full bg-bg-mute rounded-br-3xl" />
                      </div>
                      <div className="absolute top-[calc(45%+32px)] left-0 w-8 h-8 bg-brand-deep z-10">
                        <div className="w-full h-full bg-bg-mute rounded-tr-3xl" />
                      </div>
                    </div>

                    {/* Main Card Content */}
                    <div className="bg-brand-deep text-text-onBrand p-10 rounded-4xl rounded-tl-none rounded-bl-none shadow-[0_15px_45px_-10px_rgba(4,92,106,0.4)] min-h-[420px] flex flex-col items-start w-full">

                      {/* Letter Bubble - Centered vertically in the indent */}
                      <div className="absolute top-[45%] -left-16 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-bg-pill flex items-center justify-center text-brand-deep font-bold text-2xl z-40 border-4 border-bg-mute shadow-md">
                        {step.key}
                      </div>

                      {/* Image - Left side */}
                      <div className="mb-10 h-32 md:h-40 flex items-center justify-start w-full">
                        <img
                          src={step.image}
                          alt={step.key}
                          className="max-h-full max-w-[85%] object-contain"
                        />
                      </div>

                      {/* Text content - Left Aligned */}
                      <div className="text-left">
                        <h3 className="text-xl md:text-[24px] font-bold mb-4 leading-[1.2] whitespace-pre-line tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm md:text-[15px] opacity-85 leading-relaxed font-light">
                          {step.description.replace(/\n/g, ' ')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Mobile normal stack vertical connectors */}
                  {index < steps.length - 1 && (
                    <div className="block lg:hidden absolute -bottom-10 left-[18px] w-[3px] h-10 bg-white" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

