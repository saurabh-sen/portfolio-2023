"use client"
import React from 'react'
import { motion } from 'framer-motion'

type TypeExperience = {
    company: string;
    desc: string;
    role: string;
    year: string;
  }
  

const ExperienceCard: React.FC<TypeExperience> = ({ company, desc, role, year }) => {
    return (
        <motion.div
            className="app__skills-exp-item w-full flex flex-col sm:flex-row justify-start items-start sm:my-4">
            <div className="app__skills-exp-year mx-auto sm:mr-12">
                <p className="bold-text text-base sm:text-2xl font-semibold">{year}</p>
            </div>
            <motion.div className="app__skills-exp-works flex-1 mx-auto">
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="app__skills-exp-work flex flex-col justify-start items-start mb-4 cursor-pointer "
                >
                    <h4 className="bold-text text-base sm:text-2xl font-semibold mx-auto sm:m-0">{role}</h4>
                    <p className="p-text text-xs leading-normal t-1 font-semibold mx-auto sm:m-0">{company}</p>
                    <p className="p-text text-xs leading-normal mt-1">{desc}</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ExperienceCard