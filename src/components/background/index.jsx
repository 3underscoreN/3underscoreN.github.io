"use client";
import React, { useContext } from "react";

import { ThemeContext } from "@/app/provider/theme-provider";

import Aurora from "./aurora";
import Particles from "./stars";
import Iridescence from "./iridescence";

const DarkModeBackground = () => {
  return (
    <>
      <div className="absolute top-0 w-full h-screen -z-50">
        <Aurora colorStops={["#39977f", "#3d276f", "#1d1640"]} />
      </div>
      <div className="absolute top-0 w-full h-screen -z-40">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={9e-3}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
    </>
  );
};

const LightModeBackground = () => {
  return (
    <>
      <div className="absolute top-0 w-full h-screen -z-50">
        <Iridescence speed={0.1} mouseReact={false} />
      </div>
    </>
  );
};

const Background = () => {
  const { isDarkMode, _ } = useContext(ThemeContext);
  return <>{isDarkMode ? <DarkModeBackground /> : <LightModeBackground />}</>;
};

export default Background;
