import React, { useState, useEffect } from 'react';
import { motion as Motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "./common/Button";

const testimonials = [
  {
    quote: "Receiving the Datacamp x GirlLEAD Women in Data scholarship was a turning point in my academic and professional life. The scholarship provided financial support, mentorship and networking opportunities that opened doors for me. By developing my skills in data science, I landed a full-time position with a Tech NGO in Libya",
    name: "Mawada A.",
    role: "GirlLEAD x Datacamp",
    year: "2023"
  },
  {
    quote: "The GirlLEAD Women in Data program helped me gain admission to a master's program in applied data science. It expanded my thinking and improved my productivity at work.",
    name: "Natascha M.",
    role: "GirlLEAD x Datacamp",
    year: "2023"
  },
  {
    quote: "I would describe my experience with GirlLEAD as a journey of discovery. At that time, I didn't know exactly what I wanted to do. GirlLEAD offered me the space to explore different fields and see where I could fit. While I initially thought programming might be for me, I quickly realized it wasn't. Instead, I found myself gravitating towards the Social Entrepreneurship class, where I felt more at home with business-related topics.",
    name: "Anthonia I.",
    role: "GirlLEAD Bootcamp",
    year: "3.0"
  },
  {
    quote: "Through GirlLEAD, I was introduced to something I never really knew much about and that has given me a new ground in my field. Data science is useful in various aspects of human activities. I am a final-year student and am currently writing my project on computational Linguistics which is a big ground that my school could not give me insight on. Without this bootcamp, I know for sure that I might not even get to know anything about this field at all and that would be what I would term \"DISASTROUS\". Thank you GirlLEAD!",
    name: "Osasere O.",
    role: "GirlLEAD Bootcamp",
    year: "3.0"
  },
  {
    quote: "When I joined GirlLEAD, I had no idea what social entrepreneurship was about, but after 14 weeks of extensive learning, I not only know what it means but also have been able to build a plan for my own social enterprise.",
    name: "Success O.",
    role: "GirlLEAD Bootcamp",
    year: "3.0"
  },
  {
    quote: "I learnt the basic aspects of programming which are HTML and CSS. It was indeed wonderful. I also got to meet wonderful and amazing people, it's an experience to remember! GirlLEAD is a wonderful initiative to empower girls. I for one, I'm happy to have found myself on the GirlLEAD Project.",
    name: "Chinaza A.",
    role: "GirlLEAD Enugu 1.0,",
    year: "2023"
  },
  {
    quote: "The Girls in STEM bootcamp helped me build knowledge, expanded my mind and exposed me to opportunities.  It's a good place for me to start as a secondary school student - due to this exposure, I now have a job even before entering university!",
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

const Testimonial = ({ className }) => {
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
    <div className={`${className || "bg-bg-soft"} w-full m-auto py-12 overflow-hidden transition-colors`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.h2
          className="text-3xl font-extrabold text-center text-text-main mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Testimonials
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

        <div
          className="flex justify-center mt-12"
        >
          <Button
            variant="primary"
            size="lg"
            className="block md:inline-block"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
