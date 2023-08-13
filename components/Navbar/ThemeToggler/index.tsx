"use client"
import { useTheme } from 'next-themes';
import React from 'react'
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs"
import { motion } from 'framer-motion';

const ThemeToggler = () => {

    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setTheme('system');
    }, []);

    function handleThemeToggle() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={handleThemeToggle} className='rounded-full p-2 md:p-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200 cursor-pointer select-none '>
            <span className="inline dark:hidden">
                <BsFillSunFill />
            </span>
            <span className="hidden dark:inline">
                <BsMoonStarsFill />
            </span>
        </motion.div>
    )
}

export default ThemeToggler