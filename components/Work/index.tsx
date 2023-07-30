"use client"
import React from 'react'
import WorkFilters from './WorkFilters';
import WorkCard from './WorkCard';
import { client } from '@/components/client';

export type workType = {
    codeLink: string;
    description: string;
    imgUrl: any;
    projectLink: string;
    tags: string[];
    title: string;
    _id: string;
}

const Work = () => {

    const [activeFilter, setActiveFilter] = React.useState<string>('All');
    const [filterWork, setFilterWork] = React.useState<workType[]>([]);
    const [works, setWorks] = React.useState<workType[]>([]);
    const [animateCard, setAnimateCard] = React.useState<[{ y: number; opacity: number; }]>([{ y: 0, opacity: 1 }]);

    const handleClick = (item: string) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    }

    React.useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query).then((data) => {
            setWorks(data);
            setFilterWork(data);
        });
    }, []);

    return (
        <section id="work" className='max-w-7xl mx-auto px-3 py-12'>
            <p className="text-3xl sm:text-5xl font-bold text-center flex gap-1 flex-wrap justify-center items-center">
                <span className="about ">My Creative</span>
                <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text mx-2">Portfolio</span>
                <span className="worksection ">Section</span>
            </p>
            <div className="workFilter flex md:flex-row justify-around items-center flex-wrap mt-16 mb-8 md:w-max ml-auto mr-auto">
                <WorkFilters handleClick={handleClick} activeFilter={activeFilter} />
            </div>
            <div className="workContainer flex flex-wrap justify-center items-center gap-4">
                {
                    filterWork.map((work: workType, index: number) => <WorkCard key={work._id} work={work} />)
                }
            </div>
        </section>
    )
}

export default Work