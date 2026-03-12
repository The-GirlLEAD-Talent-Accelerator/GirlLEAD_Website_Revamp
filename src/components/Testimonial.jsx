import React, { useState, useEffect } from 'react';
import { motion as Motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "./common/Button";

const testimonials = [
  {
    quote: "Receiving the Datacamp x GirlLEAD Women in Data scholarship was a turning point in my academic and professional journey. It provided financial support, mentorship, and networking opportunities that strengthened my skills in data science and helped me secure a full-time role with a Tech NGO in Libya",
    name: "Mawada A.",
    role: "GirlLEAD x Datacamp",
    year: "2023"
  },
  {
    quote: "The GirlLEAD Women in Data program played a major role in helping me gain admission into a master’s program in applied data science. It broadened my perspective, sharpened my analytical thinking, and significantly improved my productivity and confidence in my professional work environment.",
    name: "Natascha M.",
    role: "GirlLEAD x Datacamp",
    year: "2023"
  },
  {
    quote: "My experience with GirlLEAD has been a journey of discovery and clarity. I wasn’t sure what path suited me, but the program allowed me to explore different fields. While programming wasn’t my fit, social entrepreneurship stood out and aligned naturally with my interest in business-focused problem solving.",
    name: "Anthonia I.",
    role: "GirlLEAD Bootcamp",
    year: "3.0"
  },
  {
    quote: "GirlLEAD introduced me to data science, a field I knew little about, but one that now shapes my academic direction. As a final-year student working on computational linguistics, this exposure filled a critical gap my school could not provide. Without it, the outcome would have been disastrous. Thank you GirlLEAD!",
    name: "Osasere O.",
    role: "GirlLEAD Bootcamp",
    year: "3.0"
  },
  {
    quote: "When I joined GirlLEAD, I had little understanding of social entrepreneurship. After fourteen weeks of structured learning, I gained clarity, confidence, and practical skills. I now fully understand the concept and have successfully developed a clear and realistic plan for my own social enterprise idea.",
    name: "Success O.",
    role: "GirlLEAD Bootcamp",
    year: "3.0"
  },
  {
    quote: "I learned the basics of programming, including HTML and CSS, and truly enjoyed the learning process. Beyond the technical skills, I met inspiring people and built meaningful connections. It is a powerful initiative for empowering girls, and I am genuinely grateful to be part of the GirlLEAD project.",
    name: "Chinaza A.",
    role: "GirlLEAD Enugu 1.0,",
    year: "2023"
  },
  {
    quote: "The Girls in STEM bootcamp helped me build foundational knowledge, broaden my thinking, and discover exciting opportunities. As a secondary school student, it was the perfect starting point. Because of this exposure, I now have a job even before entering university, which feels truly empowering!",
    name: "Amarachi",
    role: "Girls in STEM Benin City,",
    year: "2024"
  }
];

const TestimonialCard = ({ testimonial, index, isMobile }) => (
  <Motion.div
    className={`bg-bg-mute p-8 rounded-2xl shadow-sm border border-border-soft flex flex-col justify-between ${isMobile ? 'w-[85vw] mx-auto min-h-[320px]' : 'min-h-[280px]'
      }`}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={!isMobile ? { y: -8, boxShadow: "0 20px 40px var(--color-shadow-brand-strong)" } : {}}
  >
    <div>
      <div className="text-brand-primary mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-text-muted italic mb-6 text-sm leading-relaxed">
        "{testimonial.quote}"
      </p>
    </div>
    <div>
      <p className="font-bold text-text-main text-base">{testimonial.name}</p>
      <p className="text-xs font-medium text-brand-primary mt-1 uppercase tracking-wider">
        {testimonial.role} • {testimonial.year}
      </p>
    </div>
  </Motion.div>
);

const Testimonial = ({ 
  title = "Testimonials", 
  showButton = true, 
  className = "bg-bg-soft" 
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className={`${className} w-full m-auto py-12 overflow-hidden transition-colors`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.h2
          className="text-3xl font-extrabold text-center text-text-main mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </Motion.h2>

        {!isMobile ? (
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            pauseOnClick={true}
            className="py-4"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mx-4 w-[350px] md:w-[450px]">
                <TestimonialCard testimonial={testimonial} index={index} isMobile={false} />
              </div>
            ))}
          </Marquee>
        ) : (
          <div className="relative group">
            <Motion.div
              className="flex gap-4 cursor-grab active:cursor-grabbing px-4"
              drag="x"
              dragConstraints={{ right: 0, left: -((testimonials.length - 1) * (window.innerWidth * 0.85 + 16)) }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x + velocity.x * 0.2;
                if (swipe < -50 && activeIndex < testimonials.length - 1) {
                  nextSlide();
                } else if (swipe > 50 && activeIndex > 0) {
                  prevSlide();
                }
              }}
              animate={{ x: -(activeIndex * (window.innerWidth * 0.85 + 16)) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="shrink-0">
                  <TestimonialCard testimonial={testimonial} index={index} isMobile={true} />
                </div>
              ))}
            </Motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-2 pointer-events-none z-10">
              <Button
                onClick={prevSlide}
                disabled={activeIndex === 0}
                variant="icon"
                icon={FaChevronLeft}
                aria-label="Previous testimonial"
                className="pointer-events-auto shadow-lg"
              />
              <Button
                onClick={nextSlide}
                disabled={activeIndex === testimonials.length - 1}
                variant="icon"
                icon={FaChevronRight}
                aria-label="Next testimonial"
                className="pointer-events-auto shadow-lg"
              />
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                    ? "w-8 bg-brand-primary"
                    : "w-2 bg-brand-primary/20"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {showButton && (
          <div className="flex justify-center mt-12">
            <Button
              variant="primary"
              size="lg"
              className="block md:inline-block"
            >
              Start Your Journey
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
