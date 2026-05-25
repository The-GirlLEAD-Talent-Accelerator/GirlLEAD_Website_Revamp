export default function ProgramCard({ title, image, description, applyLink }) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-[220px] group">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Default overlay – always visible at bottom */}
      <div className="absolute inset-0 bg-black/40 flex items-end p-4 group-hover:opacity-0 transition-opacity duration-300">
        <h4 className="text-text-onBrand text-sm sm:text-lg font-semibold">{title}</h4>
      </div>

      {/* Hover overlay – covers full image */}
      <div className="absolute inset-0 bg-brand-darker/90 flex flex-col justify-center items-start p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h4 className="text-white text-sm sm:text-lg font-semibold mb-3">{title}</h4>
        <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4">
          {description}
        </p>
        <a
          href={applyLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-accentTeal underline text-xs sm:text-sm font-medium hover:text-brand-primary transition-colors duration-200"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
