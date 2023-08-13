"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'
import LoadingAnimation from '../LoadingAnimation'
import { useQuery } from '@tanstack/react-query'
import { client } from '../client'

type TypeExperience = {
  _id: string;
  company: string;
  desc: string;
  role: string;
  year: string;
  sequence: number;
}


const ExperienceAnimation = dynamic(() => import('./ExperienceAnimation'), {
  loading: () => <LoadingAnimation />,
  ssr: true,
})

const Experience = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['experience'],
    queryFn: () => {
      const query = '*[_type == "experiences"]';
      return client.fetch(query).then((data) => {
        if(data) {
          data.sort((a: TypeExperience, b: TypeExperience) => b.sequence - a.sequence);
          return data;
        }
        return [];
      });
    }
  });

  return (
    <section id='experience' className='experience max-w-7xl mx-auto px-3 py-16 sm:py-20'>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="text-3xl sm:text-5xl font-bold text-center">
        <span className="about mr-2">Work</span>
        <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">
          Experience
        </span>
      </motion.p>
      <div className="experienceContainer flex flex-col md:flex-row mx-8 md:mx-0 py-14 sm:py-7">
        <div className="aboutAnimation md:w-1/2 hidden sm:block ">
          <ExperienceAnimation />
        </div>
        <div className="content md:w-1/2 flex flex-col justify-center text-center sm:text-left gap-2">
          {
            data && data.length > 0 && data.map((item: TypeExperience) => <ExperienceCard key={item._id} company={item.company} desc={item.desc} role={item.role} year={item.year} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Experience