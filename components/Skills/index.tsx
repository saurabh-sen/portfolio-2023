"use client"

import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'

const Skills = () => {

  const skills = [
    'https://i.postimg.cc/QCpkR50c/html.png',
    'https://i.postimg.cc/SNhGcTxd/css.png',
    'https://i.postimg.cc/gj9HS4qY/javascript.png',
    'https://i.postimg.cc/N03XBFyD/sass.png',
    'https://i.postimg.cc/bYQxYx9t/tailwind.png',
    'https://i.postimg.cc/DzJG9Lzm/typescript.png',
    'https://i.postimg.cc/13Y67JsL/react.png',
    'https://i.postimg.cc/HkTB1ZGn/nextjs.png',
    'https://i.postimg.cc/50zwCLcD/mongo-db.png',
    'https://i.postimg.cc/VvBn7wkR/nodejs.png',
    'https://i.postimg.cc/d0xBdJhZ/git.png',
    'https://i.postimg.cc/SNffd6Xh/github.png'
  ];

  return (
    <div id="skills" className='skills max-w-7xl mx-auto px-3 py-16 sm:py-20'>
      <motion.p
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="text-3xl sm:text-5xl font-bold text-center">
        <span className="about mr-2">My</span>
        <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">Skills</span>
      </motion.p>
      <div className="aboutContainer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 m-8 sm:m-16 md:mx-0 justify-evenly place-items-center">
        {
          skills.map((i: string, idx: number) => <motion.div
            key={idx}
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <Image src={i} alt={'skills'} width={300} height={300} className='w-24 sm:w-36 md:w-48' draggable={false} />
          </motion.div>
          )
        }
      </div>
    </div >
  )
}

export default Skills