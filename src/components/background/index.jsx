"use client";
import React, { useContext } from "react";

import { ThemeContext } from "@/app/provider/theme-provider";

import "./topbottombar.css"

import Aurora from "./aurora";
import Particles from "./stars";
import Wave from "./wave"
import { cn } from "@/util/cn";

const DarkModeBackground = () => {
  return (
    <>
      <div className="absolute top-0 w-full h-full -z-50">
        <Aurora colorStops={["#39977f", "#3d276f", "#1d1640"]} />
      </div>
      <div className="absolute top-0 w-full h-full -z-40">
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
      <div className="absolute top-0 w-full h-full -z-50">
        <Wave
          horizonColor="#fa00ff"
          waveColor="#3a2439"
          crestColor="#c14af2"
          speed={0.3}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.8}
          swell={20}
          turbulence={20}
          tilt={1.1}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="high"
          brightness={1}
          opacity={1}
          mouseInteraction={false}
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
        />
      </div>
    </>
  );
};

const Background = () => {
  const { isDarkMode, _ } = useContext(ThemeContext);
  const lightBarColors = {
    top: "bg-base-100",
    bottom: "bg-[#be96dc]"
  }
  const darkBarColors = {
    top: "bg-[#1e143c]",
    bottom: "bg-black"
  }

  return (
    <div>
      <div className={cn("pointer-events-none fixed left-1/2 -translate-x-1/2 z-10 top-1 w-[89%] h-2.75 block mask-transparent", isDarkMode ? darkBarColors.top : lightBarColors.top)} aria-hidden={true}/>
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
          {isDarkMode ? <DarkModeBackground /> : <LightModeBackground />}
        </div>
      <div className={cn("pointer-events-none fixed left-1/2 -translate-x-1/2 z-10 bottom-0.75 w-[89%] h-2.75 block mask-transparent", isDarkMode ? darkBarColors.bottom : lightBarColors.bottom)} aria-hidden={true}/>
    </div>
  );
};

export default Background;
