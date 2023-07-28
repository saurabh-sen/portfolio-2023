"use client"
import { useTheme } from 'next-themes';
import React from 'react'
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs"

const ThemeToggler = () => {

    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setTheme('system');
    }, []);

    function handleThemeToggle() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <span onClick={handleThemeToggle} className='rounded-full p-2 md:p-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200 cursor-pointer'>
            <span className="inline dark:hidden">
                <BsFillSunFill />
            </span>
            <span className="hidden dark:inline">
                <BsMoonStarsFill />
            </span>
        </span>
    )
}

export default ThemeToggler