"use client"
import React from 'react'
import { motion } from 'framer-motion'

const ExperienceCard = () => {
    return (
        <motion.div
            className="app__skills-exp-item w-full flex flex-col sm:flex-row justify-start items-start sm:my-4">
            <div className="app__skills-exp-year mx-auto sm:mr-12">
                <p className="bold-text text-base sm:text-2xl font-semibold">DEC 2022 - MAR 2023</p>
            </div>
            <motion.div className="app__skills-exp-works flex-1 mx-auto">
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work flex flex-col justify-start items-start mb-4 cursor-pointer"
                >
                    <h4 className="bold-text text-base sm:text-2xl font-semibold">Full Stack Developer</h4>
                    <p className="p-text text-xs leading-normal t-1 font-semibold">Causal Funnel</p>
                    <p className="p-text text-xs leading-normal mt-1">workin as a full stack developer, </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ExperienceCard