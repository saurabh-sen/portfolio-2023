import Image, { StaticImageData } from 'next/image'
import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.png"
import javascript from "../../public/javascript.png"
import sass from "../../public/sass.png"
import tailwind from "../../public/tailwind.png"
import typescript from "../../public/typescript.png"
import react from "../../public/react.png"
import nextjs from "../../public/nextjs.png"
import mongodb from "../../public/mongo-db.png"
import git from "../../public/git.png"
import github from "../../public/github.png"

const Skills = () => {

  const skills = [html, css, javascript, sass, tailwind, typescript, react, nextjs, mongodb, git, github];
  
  return (
    <div id="skills" className='skills max-w-7xl mx-auto px-3'>
      <p className="text-3xl sm:text-5xl font-bold text-center">
        <span className="about mr-2">My</span>
        <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">Skills</span>
      </p>
      <div className="aboutContainer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 m-8 sm:m-16 md:mx-0 justify-evenly place-items-center">
        {
          skills.map((i: StaticImageData, idx:number) => <Image key={idx} src={i} alt={'skills'} width={300} height={300} className='w-24 sm:w-36 md:w-48' draggable={false} />)
        }        
      </div>
    </div>
  )
}

export default Skills