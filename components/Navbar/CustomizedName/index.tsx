"use client"
import Link from 'next/link'
import React from 'react'

const CustomizedName = () => {
    return (
        <Link href="/" className={`Navbar__logo flex justify-start items-center text-lg md:text-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text font-bold`}>
            SAURABH SEN
        </Link>
    )
}

export default CustomizedName