import React, { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = (props) => {
  const [isDark, setDark] = useDarkMode(false, null);

  const toggleMode = (e) => {
    e.preventDefault();
    setDark(!isDark);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={isDark ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
