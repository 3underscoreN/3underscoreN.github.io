"use client";

import React, { useContext } from 'react';
import { DayAndNightToggle } from "@/components/navigation/modetoggler/dayandnighttoggle";

import { useRouter } from 'next/navigation';

import { ThemeContext } from '@/app/theme-provider';

const ModeToggler = ({ className }) => {

    const router = useRouter();
        const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
        
        const handleThemeChange = () => {
            setIsDarkMode(!isDarkMode);
        }

    return (
        <>
            <DayAndNightToggle
                onChange={handleThemeChange}
                checked={isDarkMode}
                size={24}
                className={className}
            />
        </>
    );
}

export default ModeToggler;