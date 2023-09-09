"use client"
import { FaRegEye } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

type PropsChallengeCard = {
    heading: string;
    difficulty: string;
    codeLink: string;
    liveLink: string;
    authorName: string;
    authorLink: string;
    companies?: string[] | undefined;
    id: string;
}

type typeDifficultyColor = {
    [key: string]: string
}

let difficultyColorsTailwind: typeDifficultyColor = {
    'easy': 'border-green-500',
    'medium': 'border-yellow-500',
    'hard': 'border-red-500'
}

let difficultyColorsCSS: typeDifficultyColor = {
    'easy': '#22c55e',
    'medium': '#eab308',
    'hard': '#ef4444'
}

const ChallengeCard = ({ heading, difficulty, codeLink, liveLink, authorName, authorLink, companies, id }: PropsChallengeCard) => {

    useEffect(() => {
        const urlId = window.location.hash.slice(1);
        if (urlId === id) {
            const element = document.getElementById(id)
            element?.scrollIntoView({ behavior: 'smooth' })
            if (element)
                element.style.boxShadow = `0 3px 13px 4px ${difficultyColorsCSS[difficulty]}`;

        }
    }, [id, difficulty])

    return (
        <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`w-72 rounded-md flex flex-col p-4 gap-2 border ${difficultyColorsTailwind[difficulty]} hover:shadow-md bg-color`}
            id={id}
        >
            <Link href={`#${id}`} className="challenge__title underline lowercase">#{heading}</Link>
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
                                    <span key={index} className="company__name text-sm bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text font-bold">{company}{(companies.length - 1) !== index ? ',' : '.'}</span>
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