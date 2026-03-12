import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";
import { LuMoon, LuSun } from "react-icons/lu";


export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-bg-pill hover:bg-bg-card transition-colors text-text-main"
    >
      {theme === "light" ? <LuMoon size={20} /> : <LuSun size={20} />}
    </button>
  );
}
