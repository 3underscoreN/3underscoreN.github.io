"use client";

import React, { useContext } from "react";
import { DnToggleV2 } from "@/components/navigation/modetoggler/dntogglev2";

import { ThemeContext } from "@/app/provider/theme-provider";

const ModeToggler = ({ className }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <DnToggleV2
        onChange={handleThemeChange}
        isDarkMode={isDarkMode}
        className={className}
      />
    </>
  );
};

export default ModeToggler;
