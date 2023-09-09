"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContributorsGuide() {
    return (
        <div className='contributorsGuide max-w-7xl mx-auto flex justify-center flex-col h-max my-6 p-4'>
            <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
            >
                <h1 className='text-xl sm:text-3xl font-semibold py-2'>Guide</h1>
            </motion.div>
            <hr />
            <div className='contributorsGuide__content py-4'>
                <div className="problem__description">
                    <p className='text-sm sm:text-base'>
                        The problems are divided into 3 difficulty levels:
                    </p>
                    <ul className='text-sm sm:text-base'>
                        <li> <span className=' inline-block w-2 h-2 bg-green-500 rounded-lg mr-2'></span>Easy</li>
                        <li> <span className=' inline-block w-2 h-2 bg-yellow-500 rounded-lg mr-2'></span>Medium</li>
                        <li> <span className=' inline-block w-2 h-2 bg-red-500 rounded-lg mr-2'></span>Hard</li>
                    </ul>
                </div>
                <div className="contribution__description mt-4">
                    <p className='text-sm sm:text-base'>
                        Wanna contribute? Mail me at <Link className='text-blue-400' href="mailto:sensaurabh1212@gmail.com">sensaurabh1212@gmail.com</Link> with this format:
                    </p>
                    <ul className='list-decimal text-sm sm:text-base ml-4'>
                        <li>Problem title</li>
                        <li>Code link</li>
                        <li>Live link(can be same as for codesandbox etc)</li>
                        <li>Level of difficulty(Easy, Medium or Hard)</li>
                        <li>Author name</li>
                        <li>Author contact link</li>
                        <li>Company tags(optional)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};