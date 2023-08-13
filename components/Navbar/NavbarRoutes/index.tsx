"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type PropsNavbarRoutes = {
    pages: string[];
}

const NavbarRoutes = ({ pages }: PropsNavbarRoutes) => {
    return (
        <ul className="navbar__items md:flex hidden gap-5 items-center justify-center text-sm">
            {pages.map((page, index) => (
                <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -4 }}
                    key={index}
                >
                    <Link href={`#${page.toLowerCase()}`} className="navbar__link opacity-80 hover:opacity-100 hover:bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 hover:text-transparent hover:bg-clip-text font-bold ">
                        {page}
                    </Link>
                </motion.div>
            ))}
            <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -4 }}
            >
                <Link href="challenges" className="navbar__link opacity-80 hover:opacity-100 hover:bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 hover:text-transparent hover:bg-clip-text font-bold ">
                    Challenges
                </Link>
            </motion.div>
        </ul>
    )
}

export default NavbarRoutes