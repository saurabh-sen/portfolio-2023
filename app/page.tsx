import React from 'react';
import { Navbar, Hero, LoadingAnimation, ScrollToTop } from '@/components';

// Dynamic import
import dynamic from 'next/dynamic';
import NavbarRoutes from '@/components/Navbar/NavbarRoutes';
import SidebarToggle from '@/components/Navbar/SidebarToggle';

const About = dynamic(() => import('@/components/About'), {
  loading: () => <LoadingAnimation />,
})
const Work = dynamic(() => import('@/components/Work'), {
  loading: () => <LoadingAnimation />,
})
const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <LoadingAnimation />,
})
const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <LoadingAnimation />,
})
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <LoadingAnimation />,
})

const pages = ['Home', 'About', 'Work', 'Skills', 'Experience', 'Contact'];

export default function Home() {

  return (
    <main className='main '>
      <Navbar Routes={() => <NavbarRoutes pages={pages} />} SidebarRoutes={() => <SidebarToggle pages={pages} />} />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
      <ScrollToTop />
    </main>

  );
}
