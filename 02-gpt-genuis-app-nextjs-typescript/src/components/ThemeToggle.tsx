"use client";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";

const themesList = ["winter", "dracula"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState(themesList[0]);
  const themeToggler = () => {
    const themeToSet = theme === themesList[0] ? themesList[1] : themesList[0];
    setTheme(() => themeToSet);
    document.documentElement.setAttribute("data-theme", themeToSet);
  };
  return (
    <button className="btn btn-outline btn-sm" onClick={() => themeToggler()}>
      {theme === themesList[0] ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
}
