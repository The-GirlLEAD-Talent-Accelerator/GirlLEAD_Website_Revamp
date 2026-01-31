// ===============================
// How We Work – Animated Section
// React + Tailwind (NO TS)
// ===============================

import { useEffect, useState } from "react";

const steps = [
  {
    key: "A",
    title: "Build your foundation",
    description:
      "Enroll in one of our hands-on learning programs designed to equip you with relevant skills for today's world.",
    icon: "📦",
  },
  {
    key: "B",
    title: "Get integrated into our community",
    description:
      "Become a lifelong member of our empowering GirlLead network of women. Connect, collaborate, and rise together.",
    icon: "💞",
  },
  {
    key: "C",
    title: "Step into real-world impact",
    description:
      "Contribute through mentorship or explore internships with our trusted partner organizations to drive change.",
    icon: "🌍",
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
    <section className="bg-[#F4FBFB] py-10 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            How we work
          </h2>
          <p className="text-sm text-gray-500 mb-4">The Process</p>
          <p className="text-gray-600 text-sm sm:text-base">
            Every GirlLEAD fellow embarks on a transformative journey — starting
            with an immersive technical and leadership learning experience,
            enriched by mentorship, real-world exposure through internships and
            live projects, and culminating in becoming part of a vibrant
            community of women who uplift and champion one another.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={`relative bg-teal-800 text-white rounded-2xl p-8 min-h-[260px] transform transition-all duration-700 ease-out
                ${
                  visibleIndex >= index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              {/* Step Bubble */}
              <div className="absolute -left-5 top-6 w-12 h-12 rounded-full bg-[#CFF3F3] flex items-center justify-center text-gray-800 font-semibold">
                {step.key}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6 animate-float">{step.icon}</div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-teal-100 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}