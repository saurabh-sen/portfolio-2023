"use client"
import React from 'react'
import ChallengeCard from '../ChallengeCard'
import { motion } from 'framer-motion'

type PropsChallengeContainer = {
    title: string,
    items: {
        heading: string;
        difficulty: string;
        codeLink: string;
        liveLink: string;
        authorName: string;
        authorLink: string;
    }[]
}

const ChallengeContainer = ({ title, items }: PropsChallengeContainer) => {
    return (
        <div className='javascript__container my-6 p-4'>
            <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
            >
                <h1 className='text-xl sm:text-3xl font-semibold py-2'>{title}</h1>
            </motion.div>
            <hr />
            <div className='javascript__challenges py-4 flex flex-wrap gap-6 justify-center'>
                {
                    items.map((item, index) => {
                        return (
                            <ChallengeCard
                                key={index}
                                heading={item.heading}
                                codeLink={item.codeLink}
                                liveLink={item.liveLink}
                                authorName={item.authorName}
                                authorLink={item.authorLink}
                                difficulty={item.difficulty}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChallengeContainer