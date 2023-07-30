"use client"

import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from "react-icons/rx"

const SidebarToggle = ({ pages }: { pages: string[] }) => {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    function handleToggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <>
            <button onClick={handleToggleDrawer} className='md:hidden rounded-full p-2 md:p-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200'>
                <AiOutlineMenu />
            </button>
            {
                isDrawerOpen && <Drawer handleToggleDrawer={handleToggleDrawer} pages={pages} />
            }
        </>
    )
}

type DrawerProps = {
    handleToggleDrawer: () => void;
    pages: string[];
}

const Drawer = ({ handleToggleDrawer, pages }: DrawerProps) => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-color z-100'>
            <div className='flex justify-end m-6'>
                <button onClick={handleToggleDrawer} className='rounded-full p-2 md:p-3 dark:bg-neutral-900 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200'>
                    <RxCross1 />
                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <ul className="flex flex-col gap-2">
                    {pages.map((page, index) => (
                        <Link key={index} href={`#${page.toLowerCase()}`} className="navbar__link text-2xl" onClick={handleToggleDrawer}>
                            {page}
                        </Link>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default SidebarToggle