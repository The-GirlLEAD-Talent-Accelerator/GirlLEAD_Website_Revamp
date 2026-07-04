import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import Button from "./common/Button";


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
    <Button
      onClick={toggleTheme}
      variant="icon"
      icon={theme === "light" ? LuMoon : LuSun}
      aria-label="Toggle theme"
    />
  );
}
