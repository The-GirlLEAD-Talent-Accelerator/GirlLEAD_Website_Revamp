export default function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 font-medium border-b-2 transition text-sm sm:text-lg ${
        active
          ? "text-teal-700 border-teal-700"
          : "text-gray-500 border-transparent"
      }`}
    >
      {label}
    </button>
  );
}
