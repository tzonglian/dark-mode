import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (isDark, initialColor) => {
  const [value, setValue] = useLocalStorage(isDark, initialColor);

  useEffect(() => {
    if (value) {
      document.querySelector("body").classList.add("dark-mode");
      console.log("turnedDark");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
      console.log("turnedWhite");
    }
  }, [value]);

  return [value, setValue];
};

export default useDarkMode;
