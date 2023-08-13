"use client"

import { client } from '@/components/client';
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import { useQuery } from '@tanstack/react-query';

const Resume = () => {

  const { isLoading, error, data: resumeLink, isFetching } = useQuery({
    queryKey: ['resumeUrl'],
    queryFn: () => {
      const query = '*[_type == "resume"]';
      return client.fetch(query).then((data) => {
        if (!data[0]?.resumeUrl) return '';
        return data[0]?.resumeUrl;
      });
    }
  });

  return (
    <Link href={resumeLink ? resumeLink : ''} target='_blank' data-text="Resume" className="button">
      <motion.p
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <span className="actual-text">{isLoading ? <>&nbsp;Loading...&nbsp;</> : <>&nbsp;RESUME&nbsp;</>}</span>
        <span className="hover-text" aria-hidden="true">{isLoading ? <>&nbsp;Loading...&nbsp;</> : <>&nbsp;RESUME&nbsp;</>}</span>
      </motion.p>
    </Link>
  )
}

export default Resume