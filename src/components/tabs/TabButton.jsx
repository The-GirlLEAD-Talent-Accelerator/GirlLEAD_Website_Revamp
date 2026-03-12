export default function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 font-medium border-b-2 transition text-sm sm:text-lg ${
        active
          ? "text-brand-primary border-brand-primary"
          : "text-text-muted border-transparent"
      }`}
    >
      {label}
    </button>
  );
}
