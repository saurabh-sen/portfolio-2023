"use client"
import Image from 'next/image';
import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor } from '@/components/client';
import { workType } from '../index';
import Link from 'next/link';

type WorkCardProps = {
    work: workType;
}

const WorkCard = ({ work }: WorkCardProps) => {

    const src = urlFor(work.imgUrl).url();

    return (
        <div
            className="app__work_item sm:w-[270px] flex-col sm:m-8 p-4 rounded-lg bg-color bg-text cursor-pointer transition-all duration-300 ease-linear app__flex flex justify-center items-center 2xl:w-96 2xl:p-5 2xl:rounded-xl"
        >
            <div
                className="app__work-img w-full h-56 relative app__flex flex justify-center items-center 2xl:h-80" >
                <Image className='w-full h-full rounded-lg object-cover' width={400} height={400} src={src} alt="project image" />

                <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className="app__work-hover absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[#00000079] rounded-lg opacity-0 transition-all duration-300 ease-linear app__flex flex justify-center items-center"
                >
                    <Link href={work.projectLink} target="_blank" rel="noreferrer">

                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="app__flex flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#00000079] text-white m-4 font-bold cursor-pointer transition-all duration-300 ease-linear" >
                            <AiFillEye className='w-1/2 h-1/2 text-white' />
                        </motion.div>
                    </Link>
                    <Link href={work.codeLink} target="_blank" rel="noreferrer">
                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="app__flex flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#00000079] text-white m-4 font-bold cursor-pointer transition-all duration-300 ease-linear"
                        >
                            <AiFillGithub className='w-1/2 h-1/2 text-white' />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>

            <div className="app__work-content p-2 w-full relative flex-col app__flex flex justify-center items-center bg-text" >
                <h4 className="bold-text text-sm sm:text-base font-bold text-left mt-4 leading-normal 2xl:mt-12">{work.title}</h4>
                <p className="p-text text-xs text-left leading-normal" style={{ marginTop: 10 }}>{work.description}</p>

                <div className="app__work-tag absolute py-2 px-4 rounded-xl top-[-25px] app__flex flex justify-center bg-color items-center" >
                    <p className="p-text text-xs text-left leading-normal" >{work.tags[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard