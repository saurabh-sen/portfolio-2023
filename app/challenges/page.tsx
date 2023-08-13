import { Footer } from '@/components';
import ChallengeContainer from '@/components/Challenges/ChallengeContainer';
import ChallengesNavbar from '@/components/Challenges/ChallengesNavbar';
import React from 'react'

const data = [
  {
    title: 'Javascript',
    items: [
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'easy',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'medium',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'hard',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'easy',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
    ],
  },
  {
    title: 'React',
    items: [
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'easy',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'medium',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'hard',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'easy',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
    ],
  },
  {
    title: 'Assignments',
    items: [
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'easy',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'medium',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'hard',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
      {
        heading: 'Develop a auto complete typeahead',
        difficulty: 'easy',
        codeLink: 'https://saurabhsen.me',
        liveLink: 'https://saurabhsen.me',
        authorName: 'Saurabh Sen',
        authorLink: 'https://saurabhsen.me',
      },
    ],
  }
]

const Challenges = () => {
  return (
    <main className='challenges'>
      <ChallengesNavbar />
      <div className='challenges__container max-w-7xl mx-auto'>
        {
          data.map((item, index) => {
            return (
              <ChallengeContainer key={index} title={item.title} items={item.items} />
            )
          })
        }
      </div>
      <Footer />
    </main>
  )
}

export default Challenges