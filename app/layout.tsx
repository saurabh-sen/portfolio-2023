"use client"
import './globals.css'
import type { Metadata } from 'next'
import * as React from 'react';
import Providers from './Providers'

const metadata: Metadata = {
  title: 'Saurabh Sen - Portfolio',
  description: 'I am a frontend developer, I have experience in building web applications using React, Next.js, Tailwind, and other modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}


