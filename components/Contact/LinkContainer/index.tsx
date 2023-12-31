import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type LinkContainerProps = {
    src: StaticImageData,
    text: string,
    href: string,
}

const LinkContainer = ({ src, text, href }: LinkContainerProps) => {
    return (
        <Link href={href} className="links bg-color rounded-lg hover:shadow-md flex gap-3 p-2 md:p-4 items-center min-w-[280px]">
            <Image className='w-10 h-10' width={400} height={400} src={src} alt="email" />
            <p className='p-text text-sm text-left font-semibold' >{text}</p>
        </Link>
    )
}

export default LinkContainer