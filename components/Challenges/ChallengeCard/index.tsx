"use client"
import { FaRegEye } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type PropsChallengeCard = {
    heading: string;
    difficulty: string;
    codeLink: string;
    liveLink: string;
    authorName: string;
    authorLink: string;
    companies?: string[] | undefined
}

type typeDifficultyColor = {
    [key: string]: string
}

const ChallengeCard = ({ heading, difficulty, codeLink, liveLink, authorName, authorLink, companies }: PropsChallengeCard) => {

    let difficultyColors: typeDifficultyColor = {
        easy: 'border-[#3b9b74]',
        medium: 'border-yellow-500',
        hard: 'border-red-500'
    }

    return (
        <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`w-72 rounded-md flex flex-col p-4 gap-2 border ${difficultyColors[difficulty]} shadow-sm hover:shadow-md bg-color`}>
            <span className="challenge__title">{heading}</span>
            <div className="source__buttons flex items-center justify-between text-sm">
                <Link href={codeLink} className="source__button p-2 bg-neutral-300 dark:bg-neutral-700 rounded-md flex gap-1 items-center"><BiCodeAlt /> <span>Code</span></Link>
                <Link href={liveLink} className="source__button p-2 bg-neutral-300 dark:bg-neutral-700 rounded-md flex gap-1 items-center"> <FaRegEye /> <span>Live</span></Link>
            </div>
            <p className="author text-sm flex justify-between items-center flex-wrap ">
                <span className='font-semibold uppercase'>{difficulty}</span>
                <Link href={authorLink} className="author__name ">Contributed By <b>@{authorName}
                </b>
                </Link>
            </p>
            {
                companies && companies.length > 0 && (
                    <div className="companies flex gap-2 items-center flex-wrap">
                        <span className="company_tag">Companies:</span>

                        {
                            companies.map((company, index) => {
                                return (
                                    <span key={index} className="company__name text-sm bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text font-bold">{company}{(companies.length -  1) !== index ? ',' : '.'}</span>
                                )
                            })
                        }
                    </div>
                )
            }
        </motion.div>
    )
}

export default ChallengeCard