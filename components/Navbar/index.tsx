import * as React from 'react';
import Link from 'next/link';
import { AiFillGithub } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import ThemeToggler from './ThemeToggler';
import CustomizedName from './CustomizedName';
import SidebarToggle from './SidebarToggle';

const pages = ['Home', 'About', 'Work', 'Skills', 'Experience', 'Contact'];

function ResponsiveAppBar() {

    return (
        <nav className='Navbar sticky top-0 left-0 right-0 z-10 backdrop-blur-sm'>
            <div className="navbar__container flex justify-between items-center max-w-7xl mx-auto p-3 md:p-6 flex-row-reverse md:flex-row bg-text ">
                <SidebarToggle pages={pages} />
                <CustomizedName />
                <ul className="navbar__items md:flex hidden gap-3 items-center text-sm">
                    {pages.map((page, index) => (
                        <Link key={index} href={`#${page.toLowerCase()}`} className="navbar__link opacity-40 hover:opacity-100 hover:bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 hover:text-transparent hover:bg-clip-text font-bold ">
                            {page}
                        </Link>
                    ))}
                </ul>
                <div className="navbar__utils flex gap-2 items-center">
                    <ThemeToggler />
                    <Link href="https://github.com/saurabh-sem" target='_blank' className='rounded-full p-2 md:p-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200'>
                        <AiFillGithub />
                    </Link>
                    <Link href="https://linkedin.com/in/saurabh-sen-profile" target='_blank' className='rounded-full p-2 md:p-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200'>
                        <BiLogoLinkedin />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default ResponsiveAppBar;