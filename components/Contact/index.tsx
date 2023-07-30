import React from 'react'
import LinkContainer from './LinkContainer'
import gmail from '../../public/gmail.png'
import calling from '../../public/calling.png'
import github from '../../public/github1.png'
import leetcode from '../../public/leetcode.png'
import linkedin from '../../public/linkedin.png'
import ContactForm from './ContactForm'
import Link from 'next/link'

const Contact = () => {
    return (
        <section id='contact' className='contact max-w-7xl mx-auto px-3 py-8'>
            <p className="text-3xl sm:text-5xl font-bold text-center">
                <span className="about mr-2">Contact</span>
                <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">Links</span>
            </p>
            <div className="contactContainer flex justify-evenly items-center flex-col gap-4 md:gap-0 md:flex-row mt-6">
                <div className="links flex flex-col gap-2">
                    <LinkContainer src={gmail} text='sensaurabh1212@gmail.com' href="mailto:sensaurabh1212@gmail.com" />
                    <LinkContainer src={calling} text='+918305781500' href="tel:+91-8305781500" />
                    <LinkContainer src={github} text='GitHub' href='https://github.com/saurabh-sen' />
                    <LinkContainer src={leetcode} text='Leetcode' href="https://leetcode.com/Saurabh_Sen" />
                    <LinkContainer src={linkedin} text='Linkedin' href="https://linkedin.com/in/saurabh-sen-profile" />
                </div>
                <span className="or text-3xl sm:text-5xl font-semibold">Or</span>
                <ContactForm />
            </div>
            <div className="copyright w-full pt-8 flex flex-wrap justify-evenly items-center">
                <p className="text-xs text-left text-[#6b7688] leading-normal">
                    @{new Date().getFullYear()} <Link href="https://github.com/saurabh-sen">Saurabh Sen</Link>
                </p>
                <p className="text-xs text-left text-[#6b7688] leading-normal">
                    All rights reserved
                </p>
                <p className="text-xs text-left text-[#6b7688] leading-normal">
                    Made with ❤️ by Saurabh
                </p>
            </div>
        </section>
    )
}

export default Contact