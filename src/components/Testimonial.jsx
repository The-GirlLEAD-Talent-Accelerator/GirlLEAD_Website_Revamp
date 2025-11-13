import { useRef } from 'react';
import { motion as Motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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

const Testimonial = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="bg-[#EDFAFA] dark:bg-gray-950 w-full m-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.h2
          className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Testimonials
        </Motion.h2>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="region" aria-label="Testimonials carousel" tabIndex="0">
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              640: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 20 }
            }}
            className="pb-6"
            a11y={{
              enabled: true,
              prevSlideMessage: 'Previous testimonial',
              nextSlideMessage: 'Next testimonial',
              firstSlideMessage: 'This is the first testimonial',
              lastSlideMessage: 'This is the last testimonial',
              paginationBulletMessage: 'Go to testimonial {{index}}',
            }}
          >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              >
                <p className="text-gray-700 dark:text-gray-300 italic mb-4 text-sm">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role} - {testimonial.year}</p>
                </div>
              </Motion.div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
        <Motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Motion.button
            className="px-8 py-3 bg-teal-600 text-white text-sm md:text-base font-medium rounded-xl shadow-md hover:bg-teal-700 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 10px 20px rgba(13,148,136,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Start Your Journey
          </Motion.button>
        </Motion.div>
      </div>
    </div>
  );
};

export default Testimonial;






