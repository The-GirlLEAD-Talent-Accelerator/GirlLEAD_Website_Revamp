import { useState, useEffect, useRef } from 'react';

const PartnersSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [itemWidth, setItemWidth] = useState(0);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0); // Use ref for smooth auto-scroll
  const manualControlRef = useRef(false); // Track if user is manually controlling

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

  // Triple the partners for seamless infinite scroll
  const infinitePartners = [...partners, ...partners, ...partners];

  // Handle responsive slides per view and item width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesPerView(1);
      else if (width < 768) setSlidesPerView(2);
      else if (width < 1024) setSlidesPerView(3);
      else setSlidesPerView(4);

      if (scrollRef.current) {
        setItemWidth(scrollRef.current.offsetWidth / (width < 640 ? 1 : width < 768 ? 2 : width < 1024 ? 3 : 4));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth continuous auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 6;

    const animate = () => {
      if (!isHovered && !manualControlRef.current) {
        scrollPositionRef.current += scrollSpeed;
        
        // Reset position when we've scrolled through one full set
        const containerWidth = container.scrollWidth / 3;
        if (scrollPositionRef.current >= containerWidth) {
          scrollPositionRef.current = 0;
        }
        
        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  const handlePrev = () => {
    const container = scrollRef.current;
    if (!container || !itemWidth) return;
    
    // Temporarily disable auto-scroll
    manualControlRef.current = true;
    
    // Snap to nearest item position based on current scroll
    const currentItemIndex = Math.round(scrollPositionRef.current / itemWidth);
    
    // Move back by ONE logo only
    const targetItemIndex = currentItemIndex - 1;
    let newPosition = targetItemIndex * itemWidth;
    
    // Handle wrap-around for infinite loop
    const containerWidth = container.scrollWidth / 3;
    if (newPosition < 0) {
      const totalItems = infinitePartners.length / 3;
      newPosition = (totalItems + targetItemIndex) * itemWidth;
    }
    
    // Apply smooth transition
    container.style.transition = 'transform 0.4s ease-out';
    container.style.transform = `translateX(-${newPosition}px)`;
    scrollPositionRef.current = newPosition;
    
    // Re-enable auto-scroll after transition
    setTimeout(() => {
      container.style.transition = '';
      manualControlRef.current = false;
    }, 400);
  };

  const handleNext = () => {
    const container = scrollRef.current;
    if (!container || !itemWidth) return;
    
    // Temporarily disable auto-scroll
    manualControlRef.current = true;
    
    // Snap to nearest item position based on current scroll
    const currentItemIndex = Math.round(scrollPositionRef.current / itemWidth);
    
    // Move forward by ONE logo only
    const targetItemIndex = currentItemIndex + 1;
    let newPosition = targetItemIndex * itemWidth;
    
    // Handle wrap-around for infinite loop
    const containerWidth = container.scrollWidth / 3;
    const totalItems = infinitePartners.length / 3;
    if (newPosition >= containerWidth) {
      newPosition = (targetItemIndex - totalItems) * itemWidth;
    }
    
    // Apply smooth transition
    container.style.transition = 'transform 0.4s ease-out';
    container.style.transform = `translateX(-${newPosition}px)`;
    scrollPositionRef.current = newPosition;
    
    // Re-enable auto-scroll after transition
    setTimeout(() => {
      container.style.transition = '';
      manualControlRef.current = false;
    }, 400);
  };

  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-[85%] h-0 border-t-2 border-dashed border-teal-600 dark:border-teal-400"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
          Partners and Recognitions
        </h2>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 hover:bg-teal-600 hover:text-white text-teal-600 p-3 rounded-full shadow-md transition-colors duration-300 cursor-pointer flex items-center justify-center border border-gray-200 dark:border-gray-700"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 hover:bg-teal-600 hover:text-white text-teal-600 p-3 rounded-full shadow-md transition-colors duration-300 cursor-pointer flex items-center justify-center border border-gray-200 dark:border-gray-700"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div 
            className="px-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              ref={scrollRef}
              className="flex"
            >
              {infinitePartners.map((partner, index) => {
                const isTargetLogo = partner.name === 'GirlLearn Africa';
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ minWidth: itemWidth ? `${itemWidth}px` : '280px' }}
                  >
                    <div className="mx-auto flex items-center justify-center h-[120px]">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className={`max-w-full max-h-full object-contain hover:grayscale transition-all duration-300 opacity-100 hover:opacity-70 ${
                          isTargetLogo ? 'scale-110' : ''
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-[85%] h-0 border-t-2 border-dashed border-teal-600 dark:border-teal-400"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;