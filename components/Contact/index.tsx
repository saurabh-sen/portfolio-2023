"use client"

import React from 'react'
import LinkContainer from './LinkContainer'
import gmail from '../../public/gmail.png'
import calling from '../../public/calling.png'
import github from '../../public/github1.png'
import leetcode from '../../public/leetcode.png'
import linkedin from '../../public/linkedin.png'
import ContactForm from './ContactForm'
import Footer from '../Footer'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id='contact' className='contact max-w-7xl mx-auto px-3 pt-8 sm:pt-20'>
            <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                }}
                className="text-3xl sm:text-5xl font-bold text-center">
                <span className="about mr-2">Contact</span>
                <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">Me</span>
            </motion.p>
            <div className="contactContainer flex justify-evenly items-center flex-col gap-4 md:flex-row mt-6">
                <div className="links flex flex-col gap-2">
                    <LinkContainer src={gmail} text='sensaurabh1212@gmail.com' href="mailto:sensaurabh1212@gmail.com" />
                    <LinkContainer src={calling} text='+918305781500' href="tel:+91-8305781500" />
                    <LinkContainer src={github} text='GitHub' href='https://github.com/saurabh-sen' />
                    <LinkContainer src={leetcode} text='Leetcode' href="https://leetcode.com/Saurabh_Sen" />
                    <LinkContainer src={linkedin} text='Linkedin' href="https://linkedin.com/in/saurabh-sen-profile" />
                </div>
                <span className="or text-3xl sm:text-5xl font-semibold">OR</span>
                <ContactForm />
            </div>
            <Footer />
        </section>
    )
}

export default Contact