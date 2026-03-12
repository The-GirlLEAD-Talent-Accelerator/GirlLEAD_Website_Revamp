import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useCarousel } from "../../hooks/useCarousel";
import CarouselDots from "./CarouselDots";
import Button from "../common/Button";


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
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20">
          <Button
            onClick={prev}
            variant="icon"
            icon={FiChevronLeft}
            className="bg-bg-mute/70"
            aria-label="Previous Slide"
          />
        </div>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
          <Button
            onClick={next}
            variant="icon"
            icon={FiChevronRight}
            className="bg-bg-mute/70"
            aria-label="Next Slide"
          />
        </div>
      </div>


      {/* Dots BELOW carousel */}
      <CarouselDots count={images.length} activeIndex={index} />
    </div>
  );
}
