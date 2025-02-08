import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg"; // Assurez-vous que le chemin vers le logo est correct

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <img
      src={logo}
      alt="Toggle Theme"
      className="theme-toggle-logo"
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggle;
