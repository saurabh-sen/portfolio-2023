"use client"
import './globals.css'
import * as React from 'react';
import Providers from './Providers'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Image from 'next/image';
import Head from 'next/head';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Head>
        <title>Saurabh Sen - Portfolio</title>
        <meta name="description" content="I am a frontend developer, I have experience in building web applications using React, Next.js, Tailwind, and other modern web technologies." />
        <meta name="theme-color" content="#6c63ff" />
      </Head>
      <body className="">
        <Providers>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Providers>
        <Image src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fsaurabhsen.me&label=Views&labelColor=%23427bf5&countColor=%23000000&labelStyle=upper" alt='visitor badge' width={100} height={50} className='visitor__badge fixed left-0 bottom-0 z-30 ' />
      </body>
    </html>
  )
}


