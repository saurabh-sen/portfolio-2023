import React from 'react'
import dynamic from 'next/dynamic'
const HeroAnimation = dynamic(() => import('./HeroAnimation'), {
  loading: () => <p>Loading...</p>,
  ssr: true,
})

const Hero = () => {
  return (
    <section id="home" className='home max-w-6xl mx-auto px-3 flex flex-wrap justify-center sm:justify-around items-center py-12'>
      <div className="heading flex flex-col gap-2 font-semibold">
        <div className="hello text-5xl font-bold text-center md:text-9xl bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">Hello!</div>
        <div className="componentStyle flex gap-1 text-2xl lg:text-4xl">
          <span className="openAngleBracket text-gray-500">{'<'}</span>
          <span className="elementText text-blue-600">Text</span>
        </div>
        <p className="attributeText flex gap-1 text-2xl lg:text-4xl">
          <span className="attributeName text-blue-400">
            name
          </span>
          <span className="equal">=</span>
          <span className="attributeValue text-yellow-700">{'"Saurabh"'}</span>
          <span className="closeAngleBracket text-gray-500">{'/>'}</span>
        </p>
      </div>
      <div className="animation w-72 sm:w-w-96 md:w-[450px] ">
        <HeroAnimation />
      </div>
    </section>
  )
}

export default Hero