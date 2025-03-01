"use client";
import React, { useContext } from "react";

import { ThemeContext } from "@/app/theme-provider";

import Aurora from "./aurora";
import Particles from "./stars";
import Iridescence from "./iridescence";


const Background = () => {
    const { isDarkMode, _ } = useContext(ThemeContext);
    if (isDarkMode) {
        return (
            <>
                <div className="absolute top-0 w-full h-screen -z-50 hidden dark:block">
                    <Aurora
                        colorStops={["#39977f", "#3d276f", "#1d1640"]}
                    />
                </div>
                <div className="absolute top-0 w-full h-screen -z-40 hidden dark:block">
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
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
    } else {
        return (
            <>
                <div className='absolute top-0 w-full h-screen -z-50 block dark:hidden'>
                    <Iridescence
                        speed={0.1}
                        mouseReact={false}
                    />
                </div>
            </>
        );
    }
};


export default Background