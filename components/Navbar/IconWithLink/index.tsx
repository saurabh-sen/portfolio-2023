"use client"
import React, { Fragment } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type PropsIconWithLink = {
    url: string;
    Icon: React.JSX.Element;
}

const IconWithLink = ({ url, Icon }: PropsIconWithLink) => {
    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className='rounded-full p-2 md:p-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200'
        >
            <Link href={url} target='_blank' className=''>
                {Icon}
            </Link>
        </motion.div>
    )
}

export default IconWithLink