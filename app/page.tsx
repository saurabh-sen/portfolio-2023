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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
    </>

  );
}
