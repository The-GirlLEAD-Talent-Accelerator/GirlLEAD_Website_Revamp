import { useEffect, useState } from "react";
import { ImPacman } from "react-icons/im";

const steps = [
  {
    key: "A",
    title: "Build your foundation",
    description:
      "Enroll in one of our hands-on learning programs designed to equip you with relevant skills for today's world.",
    icon: <ImPacman className="w-16 h-16" />,
    bubblePosition: "top-11 -left-7",
  },
  {
    key: "B",
    title: "Get integrated into our community",
    description:
      "Become a lifelong member of our empowering GirlLead network of women. Connect, collaborate, and rise together.",
    icon: <ImPacman className="w-16 h-16" />,
    bubblePosition: "top-1/4 -translate-y-1/2 -left-7",
  },
  {
    key: "C",
    title: "Step into real-world impact.",
    description:
      "Contribute through mentorship or explore internships with our trusted partner organizations to drive change.",
    icon: <ImPacman className="w-16 h-16" />,
    bubblePosition: "bottom-16 -left-7", 
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
    <section className="bg-[#F4FBFB] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-2">
            How we work
          </h2>
          <p className="text-sm text-gray-500 mb-4">The Process</p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Every GirlLEAD fellow embarks on a transformative journey — starting
            with an immersive technical and leadership learning experience,
            enriched by mentorship, real-world exposure through internships and
            live projects, and culminating in becoming part of a vibrant
            community of women who uplift and champion one another.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-2">
            {steps.map((step, index) => (
              <div
                key={step.key}
                className={`relative ${
                  index === 1 ? 'lg:mt-24' : ''
                } transform transition-all duration-700 ease-out ${
                  visibleIndex >= index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Card */}
                <div className="relative bg-[#0D9488] text-white rounded-3xl p-8 min-h-[280px] shadow-lg">
                  {/* Step Bubble - with individual positioning */}
                  <div 
                    className={`absolute w-14 h-14 rounded-full bg-[#CFF3F3] flex items-center justify-center text-gray-800 font-bold text-xl shadow-md z-10 ${step.bubblePosition}`}
                  >
                    {step.key}
                  </div>

                  {/* Icon Container */}
                  <div className="flex justify-center mb-6 mt-2">
                    {typeof step.icon === 'string' ? (
                      <span className="text-6xl">{step.icon}</span>
                    ) : (
                      step.icon
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
