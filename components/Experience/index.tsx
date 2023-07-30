import React from 'react'
import dynamic from 'next/dynamic'
import ExperienceCard from './ExperienceCard'

const ExperienceAnimation = dynamic(() => import('./ExperienceAnimation'), {
  loading: () => <p>Loading...</p>,
  ssr: true,
})

const Experience = () => {
  return (
    <section id='experience' className='experience max-w-7xl mx-auto px-3'>
      <p className="text-3xl sm:text-5xl font-bold text-center">
        <span className="about mr-2">Work</span>
        <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">
          Experience
        </span>
      </p>
      <div className="experienceContainer flex flex-col md:flex-row mx-8 md:mx-0 py-14 sm:py-0">
        <div className="aboutAnimation md:w-1/2 hidden sm:block ">
          <ExperienceAnimation />
        </div>
        <div className="content md:w-1/2 flex flex-col justify-center text-center sm:text-left gap-2">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
  )
}

export default Experience