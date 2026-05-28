import { useState, useEffect } from "react";

export default function ProgramCard({ title, image, description, applyLink }) {
  const [tapped, setTapped] = useState(false);
  const [autoShow, setAutoShow] = useState(false);

  // Auto-peek effect – briefly shows overlay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoShow(true);
      setTimeout(() => setAutoShow(false), 1500); // show for 1.5s then hide
    }, 4000); // triggers every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const overlayVisible = tapped || autoShow;

  return (
    <div
      className="relative rounded-2xl overflow-hidden h-[220px] group"
      onClick={() => setTapped((prev) => !prev)}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Default overlay – title at bottom */}
      <div
        className={`absolute inset-0 bg-black/40 flex items-end p-4 transition-opacity duration-300
          ${overlayVisible ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}
      >
        <h4 className="text-text-onBrand text-sm sm:text-lg font-semibold">
          {title}
        </h4>
      </div>

      {/* Hover / tap / auto overlay – full cover */}
      <div
        className={`absolute inset-0 bg-brand-darker/90 flex flex-col justify-center items-start p-5 transition-opacity duration-300
          ${overlayVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      >
        <h4 className="text-white text-sm sm:text-lg font-semibold mb-3">
          {title}
        </h4>
        <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4">
          {description}
        </p>
        <a
          href={applyLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-text-accentTeal underline text-xs sm:text-sm font-medium hover:text-brand-primary transition-colors duration-200"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}