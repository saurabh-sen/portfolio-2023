"use client"
import React from 'react'
import ChallengeCard from '../ChallengeCard'
import { motion } from 'framer-motion'

type PropsChallengeContainer = {
    handleShowToast: () => void;
    title: string,
    items: {
        title: string;
        difficulty: string;
        source_code_link: string;
        project_demo: string;
        contributor_name: string;
        contributor_link: string;
        companies?: string[] | undefined;
        _id: string;
    }[]
}

const ChallengeContainer = ({ handleShowToast, title, items }: PropsChallengeContainer) => {

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
                    items.length > 0
                        ? items.map((item, index) => {
                            return (
                                <ChallengeCard
                                    key={index}
                                    handleShowToast={handleShowToast}
                                    heading={item.title}
                                    codeLink={item.source_code_link}
                                    liveLink={item.project_demo}
                                    authorName={item.contributor_name}
                                    authorLink={item.contributor_link}
                                    difficulty={item.difficulty}
                                    companies={item?.companies}
                                    id={item._id}
                                />
                            )
                        })
                        : <p className='text-center text-sm bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text font-bold'>Coming soon... </p>
                }
            </div>
        </div>
    )
}

export default ChallengeContainer