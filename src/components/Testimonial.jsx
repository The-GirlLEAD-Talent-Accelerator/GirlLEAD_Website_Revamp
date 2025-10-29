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
  }
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Testimonials</h2>
        <Swiper
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
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full"> 
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p> 
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.name}</p>     
                  <p className="text-sm text-gray-500">{testimonial.role} - {testimonial.year}</p> 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;






