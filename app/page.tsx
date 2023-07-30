import React from 'react';
import { Navbar, Hero, Loading } from '@/components';

// Dynamic import
import dynamic from 'next/dynamic';
const About = dynamic(() => import('@/components/About'), {
  loading: () => <Loading />,
})
const Work = dynamic(() => import('@/components/Work'), {
  loading: () => <Loading />,
})
const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <Loading />,
})
const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <Loading />,
})
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <Loading />,
})

export default function Home() {
  return (
    <div className='main '>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
    </div>

  );
}
