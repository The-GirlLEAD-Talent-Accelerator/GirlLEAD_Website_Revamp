import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const PartnersSection = () => {
  const partners = [
    { name: 'TechCabal', logo: 'https://i.postimg.cc/HxXY6Qd3/image10.png' },
    { name: 'DataCamp', logo: 'https://i.postimg.cc/vBfY0Wbz/image9.jpg' },
    { name: 'Edo Innovation Hub', logo: 'https://i.postimg.cc/vBfY0WbW/image8.jpg' },
    { name: 'Obicure', logo: 'https://i.postimg.cc/MTV69yq0/image5.png' },
    { name: 'European Business School Luxembourg (EBU)', logo: 'https://i.postimg.cc/KzBG0nxV/image17.png' },
    { name: 'Changemakers Askoka', logo: 'https://i.postimg.cc/vBfY0Wbr/image6.png' },
    { name: 'USA Consulate General, Lagos', logo: 'https://i.postimg.cc/9MZmLGCn/image14.png' },
    { name: 'GenXR', logo: 'https://i.postimg.cc/C1khcjSD/image1.png' },
    { name: 'GirlLearn Africa', logo: 'https://i.postimg.cc/Y9Yrd1MR/image11.png' },
    { name: 'Window on America', logo: 'https://i.postimg.cc/vBfY0WbS/image15.png' },
    { name: 'Opolo Hub', logo: 'https://i.postimg.cc/ydc1LFsX/image7.png' },
    { name: 'Leap Africa', logo: 'https://i.postimg.cc/bJkymQpV/image18.png' },
    { name: 'eMobilis', logo: 'https://i.postimg.cc/3wPrjL5C/image2.png' },
  ];

  return (
    <>
      <section className="w-full bg-gray-100 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Decorative Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-[85%] h-0 border-t-2 border-dashed border-teal-600 dark:border-teal-400"></div>
          </div>

          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            Partners and Recognitions
          </h2>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent z-10"></div>

            {/* Scrolling logos container */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={3}

              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 18,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="pb-6"
              speed={8000}
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="flex-shrink-0 mx-8 flex items-center justify-center"
                    style={{ width: '180px', height: '80px' }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain hover:grayscale transition-all duration-300 opacity-100 hover:opacity-70"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Decorative Divider */}
          <div className="flex justify-center mt-12">
            <div className="w-[85%] h-0 border-t-2 border-dashed border-teal-600 dark:border-teal-400"></div>
          </div>
        </div>
      </section>

    </>
  );
};

export default PartnersSection;