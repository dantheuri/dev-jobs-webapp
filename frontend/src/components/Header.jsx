import desktopBackgroundHeader from "../assets/desktop/bg-pattern-header.svg";
import tabletBackgroundHeader from "../assets/tablet/bg-pattern-header.svg";
import mobileBackgroundHeader from "../assets/mobile/bg-pattern-header.svg";

import logo from "../assets/desktop/logo.svg";

import MoonIcon from "./svgs/MoonIcon";
import SunIcon from "./svgs/SunIcon";

import { Link } from "react-router";
import { useState, useEffect } from "react";

const Header = () => {
  // Initialize theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme class on initial load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Save to localStorage
    localStorage.setItem("theme", newTheme);

    // Apply to document
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header>
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileBackgroundHeader} />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet={tabletBackgroundHeader}
        />
        <source media="(min-width: 1024px)" srcSet={desktopBackgroundHeader} />
        <img
          src={mobileBackgroundHeader}
          alt="Header Background Pattern"
          className="w-full h-34 md:h-40 md:object-cover lg:object-fill"
        />
      </picture>

      {/* Logo - positioned absolutely over the background */}
      <div className="absolute top-0 left-0 w-full lg:px-10 flex justify-center">
        <div className="w-[85%] md:w-[43rem] lg:w-[60rem] xl:w-[70rem] flex justify-between mt-8 lg:mt-10 items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 lg:w-[7rem]" />
          </Link>

          {/* Theme Toggle */}
          <div className="flex items-center gap-2 text-white">
            <SunIcon />
            <button
              onClick={toggleTheme}
              className={`relative w-10 h-5 rounded-full transition-colors cursor-pointer duration-300 ${
                theme === "dark" ? "bg-indigo-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <MoonIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
