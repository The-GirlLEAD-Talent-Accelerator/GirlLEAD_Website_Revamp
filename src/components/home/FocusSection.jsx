"use client";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const FocusSection = () => {
  const navigate = useNavigate();
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full lg:px-4 py-20 flex flex-col items-center overflow-hidden bg-bg-soft transition-colors duration-700">
      {/* Title */}
      <Motion.h2
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-text-main mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Focus
      </Motion.h2>

      {/* Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:gap-5 gap-3 max-w-7xl w-full"
        animate={floatingAnimation}
      >
        {[
          {
            img: "/focus-image1.webp",
            title: "Tech Skills",
            text: "Digital literacy, coding, and data analytics.",
            tab: "Technology",
          },
          {
            img: "/focus-image2.webp",
            title: "Social Entrepreneurship",
            text: "Empowering innovators with business building and financial literacy.",
            tab: "Social Entrepreneurship",
          },
          {
            img: "/focus-image3.webp",
            title: "Leadership",
            text: "Communication, mentoring, and personal growth for impactful leadership.",
            tab: "Leadership",
          },
        ].map((item, i) => (
          <Motion.div
            key={i}
            onClick={() =>
  navigate("/Programs", {
    state: {
      tab: item.tab,
      scrollTo: "program-tabs",
    },
  })
}
            className="group relative rounded-b-2xl overflow-hidden shadow-md hover:shadow-2xl transform-gpu cursor-pointer transition-all duration-500 bg-bg-card border border-border-soft"
            style={{ perspective: "1000px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
            whileHover={{
              rotateX: -5,
              rotateY: 5,
              y: -8,
              transition: { type: "spring", stiffness: 150 },
            }}
          >
            <Motion.div className="overflow-hidden">
              <Motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
              />
            </Motion.div>

            <div className="bg-brand-darker md:h-32 w-full lg:p-5 p-3 rounded-b-2xl text-text-onBrand relative z-10 transition-colors duration-700">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
              <p className="text-[12px] lg:text-base font-light leading-relaxed text-text-onBrand opacity-90">
                {item.text}
              </p>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-b-2xl bg-linear-to-br from-brand-primary/20 to-brand-deep/10 opacity-0 group-hover:opacity-100 transition duration-700 blur-lg" />
          </Motion.div>
        ))}
      </div>

      <Button
        variant="primary"
        size="lg"
        className="mt-16"
        animate={true}
        onClick={() => navigate("/Programs")}
      >
        Start Your Journey
      </Button>
    </section>
  );
};

export default FocusSection;
