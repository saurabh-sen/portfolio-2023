"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
const AboutAnimation = dynamic(() => import('./AboutAnimation'), {
  loading: () => <p>Loading...</p>,
  ssr: true,
})

const About = () => {
  return (
    <section id="about" className='max-w-7xl mx-auto px-3 py-16 sm:py-20'>
      <p className="text-3xl sm:text-5xl font-bold text-center">
        <span className="about mr-2">About</span>
        <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">Me</span>
      </p>
      <div className="aboutContainer flex flex-col md:flex-row mx-8 md:mx-0">
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="aboutAnimation md:w-1/2 ">
          <AboutAnimation />
        </motion.div>
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="content md:w-1/2 flex flex-col justify-center text-center sm:text-left gap-2">
          <h3 className="heading text-base sm:text-2xl font-semibold">A Frontend Developer trying to do his best.</h3>
          <p className=" text-xs sm:text-sm pr-4">Hey 👋, I am a Frontend Developer with a passion for building beautiful and functional user interfaces. I am a self-taught developer and I love to learn new things. I am a quick learner and I am always ready to take up new challenges. I have experience in working with HTML-5, CSS-3, VanillaJS, ReactJS, NextJS-13, TypeScript, Tailwind CSS and exploring new efficient technologies.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About