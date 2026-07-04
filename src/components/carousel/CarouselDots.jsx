export default function CarouselDots({ count, activeIndex }) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === activeIndex ? "w-6 bg-brand-primary" : "w-2 bg-border-soft"
          }`}
        />
      ))}
    </div>
  );
}
