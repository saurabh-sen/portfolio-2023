"use client"
import './globals.css'
import type { Metadata } from 'next'
import * as React from 'react';
import { Bungee_Outline } from 'next/font/google'
import Providers from './Providers'

export const metadata: Metadata = {
  title: 'Saurabh Sen - Portfolio',
  description: 'I am a frontend developer, I have experience in building web applications using React, Next.js, Tailwind, and other modern web technologies.',
}

export const BungeeOutline = Bungee_Outline({
  subsets: ['latin'],
  weight: '400'
})

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


