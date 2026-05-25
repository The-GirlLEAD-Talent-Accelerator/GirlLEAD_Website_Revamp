export default function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 border-b-2 transition-all duration-300 
        text-sm sm:text-2xl md:text-4xl font-bold whitespace-nowrap
        hover:scale-105 hover:text-brand-primary
        ${active
          ? "text-brand-primary border-brand-primary scale-105"
          : "text-text-muted border-transparent scale-95 opacity-50"
        }`}
    >
      {label}
    </button>
  );
}
