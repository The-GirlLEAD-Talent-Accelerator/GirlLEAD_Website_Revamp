export default function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 border-b-2 transition-all duration-300 text-base sm:text-2xl font-bold
        hover:scale-110 hover:text-brand-primary
        ${active
          ? "text-brand-primary border-brand-primary scale-110"
          : "text-text-muted border-transparent scale-90 opacity-50"
        }`}
    >
      {label}
    </button>
  );
}
