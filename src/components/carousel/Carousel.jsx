import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useCarousel } from "../../hooks/useCarousel";
import CarouselDots from "./CarouselDots";


export default function Carousel({ images }) {
  const { index, next, prev } = useCarousel(images.length);


  return (
    <div className="mb-12">
      {/* Image Wrapper */}
      <div className="relative rounded-2xl overflow-hidden">
        <img
          key={index}
          src={images[index]}
          alt="Carousel"
          className="w-full h-[220px] sm:h-[380px] object-cover transition-all duration-700 ease-in-out animate-fade"
        />


        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-bg-mute/70 hover:bg-bg-mute p-2 rounded-full transition text-text-main"
        >
          <FiChevronLeft size={20} />
        </button>


        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-bg-mute/70 hover:bg-bg-mute p-2 rounded-full transition text-text-main"
        >
          <FiChevronRight size={20} />
        </button>
      </div>


      {/* Dots BELOW carousel */}
      <CarouselDots count={images.length} activeIndex={index} />
    </div>
  );
}
