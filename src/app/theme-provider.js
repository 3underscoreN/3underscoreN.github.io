'use client';

import { createContext, useEffect, useState } from 'react'



export const ThemeContext = createContext({
    isDarkMode: true,
    setIsDarkMode: () => {},
})

export default function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const lastTheme = localStorage.getItem("theme");
        switch (lastTheme) {
            case "light":
                setIsDarkMode(false); break;
            case "dark":
                setIsDarkMode(true); break;
            default:
                setIsDarkMode(true); break;
        }
    }, []);

    useEffect(() =>{
        const newTheme = isDarkMode ? "dark" : "light"
        document.querySelector('html').setAttribute('data-theme', newTheme);
        localStorage.setItem("theme", newTheme);
    }, [isDarkMode])

    const val = { isDarkMode, setIsDarkMode }
    return <ThemeContext.Provider value={val}>{children}</ThemeContext.Provider>
}