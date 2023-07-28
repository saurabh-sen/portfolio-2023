"use client"
import { BungeeOutline } from '@/app/layout'
import React from 'react'

const CustomizedName = () => {
    return (
        <p className={`Navbar__logo flex justify-start items-center text-lg md:text-2xl ${BungeeOutline.className} !font-semibold`}>
            <span className='font-bungee bg-text '>Saurabh </span>
            <span className='font-bungee text-blue-400 '>Sen</span>
        </p>
    )
}

export default CustomizedName