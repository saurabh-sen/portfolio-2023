"use client";
import React from 'react'

type WorkFilterProps = {
    handleClick: (item: string) => void;
    activeFilter: string;
}

const WorkFilters = ({ handleClick, activeFilter }: WorkFilterProps) => {
    return (
        <>
            {
                ['All', 'Frontend', 'NextJS-ReactJS', 'Full Stack', '*Featured'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(item)}
                        className={`app__work-filter-item app__flex p-text py-2 px-4 rounded-lg bg-color font-bold cursor-pointer transition-all duration-300 ease-linear m-2 border border-transparent
                         hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-red-500 hover:text-transparent hover:bg-clip-text hover:border-color hover:shadow-md 
                         flex justify-center items-center text-sm text-left leading-normal ${activeFilter === item && 'bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text !border-neutral-500 rounded-lg shadow-md '}`}
                    >
                        {item}
                    </div>
                ))
            }
        </>
    )
}

export default WorkFilters