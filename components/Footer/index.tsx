import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="copyright w-full py-8 flex flex-wrap justify-evenly items-center">
            <p className="text-xs text-left text-[#6b7688] leading-normal">
                @{new Date().getFullYear()} <Link href="https://github.com/saurabh-sen">Saurabh Sen</Link>
            </p>
            <p className="text-xs text-left text-[#6b7688] leading-normal">
                All rights reserved
            </p>
            <p className="text-xs text-left text-[#6b7688] leading-normal">
                Made with ❤️ by Saurabh
            </p>
        </div>
    )
}

export default Footer