"use client"

import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from "react-icons/rx"
import { motion } from 'framer-motion';

const SidebarToggle = ({ pages }: { pages: string[] }) => {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    function handleToggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <>
            <button onClick={handleToggleDrawer} className='md:hidden rounded-full p-2 md:p-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200'>
                <AiOutlineMenu />
            </button>
            {
                isDrawerOpen && <Drawer handleToggleDrawer={handleToggleDrawer} pages={pages} />
            }
        </>
    )
}

type DrawerProps = {
    handleToggleDrawer: () => void;
    pages: string[];
}

const Drawer = ({ handleToggleDrawer, pages }: DrawerProps) => {
    return (
        <div className='sidebar__drawer fixed top-0 left-0 w-screen h-screen z-40'>
            <div className='flex justify-end m-6'>
                <motion.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }} onClick={handleToggleDrawer} className='rounded-full p-2 md:p-3 dark:bg-neutral-900 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200'>
                    <RxCross1 />
                </motion.button>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <ul className="flex flex-col gap-2 text-2xl font-bold text-center text-white"> 
                    {pages.map((page, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: 200 }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", duration: 0.5 * index - 0.3 }}
                        >
                            <Link href={`#${page.toLowerCase()}`} className="navbar__link " onClick={handleToggleDrawer}>
                                {page}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        transition={{ type: "keyframes", duration: 0.5 * 3 - 0.3 }}
                    >
                        <Link href="challenges" className="navbar__link" onClick={handleToggleDrawer}>
                            Challenges
                        </Link>
                    </motion.div>
                </ul>

            </div>
        </div>
    )
}

export default SidebarToggle