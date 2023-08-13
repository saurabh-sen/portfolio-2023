import CustomizedName from '@/components/Navbar/CustomizedName'
import IconWithLink from '@/components/Navbar/IconWithLink'
import ThemeToggler from '@/components/Navbar/ThemeToggler'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'

const ChallengesNavbar = () => {
    return (
        <nav className="challenges__navbar flex justify-between items-center max-w-7xl mx-auto p-3 md:p-6">
            <CustomizedName />
            <p className="heading hidden sm:block uppercase text-xl font-bold ">Frontend-Challenges</p>
            <div className="navbar__utils flex gap-2 items-center">
                <ThemeToggler />
                <IconWithLink url="https://github.com/saurabh-sen" Icon={<AiFillGithub />} />
                <IconWithLink url="https://linkedin.com/in/saurabh-sen-profile" Icon={<BiLogoLinkedin />} />
            </div>
        </nav>
    )
}

export default ChallengesNavbar