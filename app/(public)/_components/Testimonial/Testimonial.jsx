'use client'
import React from 'react'
import SectionHeading from '../utlities/SectionHeading/SectionHeading'
import { GiNothingToSay } from 'react-icons/gi'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'

export default function Testimonial () {
  const testimonials = [
  {
    id: 1,
    message:
      'Northway Global made my study abroad dream reality with excellent guidance and support provided.',
    authorName: 'Alice Johnson',
    authorTitle: 'Software Engineer',
    authorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: Math.floor(Math.random() * 2) + 4
  },
  {
    id: 2,
    message:
      'Amazing team, very professional service helped me with visa and university application smoothly.',
    authorName: 'Mark Thompson',
    authorTitle: 'Student',
    authorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
    stars: Math.floor(Math.random() * 2) + 4
  },
  {
    id: 3,
    message:
      'Highly recommend Northway Global, they assisted me through every important step very smoothly.',
    authorName: 'Sara Williams',
    authorTitle: 'Research Analyst',
    authorImage: 'https://randomuser.me/api/portraits/women/25.jpg',
    stars: Math.floor(Math.random() * 2) + 4
  },
  {
    id: 4,
    message:
      'Professional, friendly and efficient service, made my immigration process easy and stress free.',
    authorName: 'John Smith',
    authorTitle: 'Business Analyst',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: Math.floor(Math.random() * 2) + 4
  }
]


  return (
    <div className='section__spacing '>
      <div className=' relative'>
        <SectionHeading
          text='Testimonials'
          Icon={GiNothingToSay}
          title='What’s Our '
          colorTitle='student say'
          subtitle='Our students have shared their incredible journeys and successes, from gaining admissions to top universities to receiving life-changing scholarships. Hear directly from them about how our dedicated support made their study abroad experience smooth and rewarding.'
        />
      </div>

      {/* Marquee Testimonials */}
      <div className='common__top__spacing tes__container relative  common__top__spacing'>
        <Marquee gradient={true} speed={50} pauseOnHover autoFill={true} gradientColor='#EAEAEA'>
          {testimonials.map(item => (
            <div
              key={item.id}
              className='bg-white rounded-md border border-black/10  p-6 w-72 lg:w-80 xl:w-96 flex-shrink-0 mx-1'
            >
              <FaQuoteLeft className='text-3xl text-gray-300 ' />
              <p className='text__base mb-4 mt-2'>{item.message}</p>
              <div className='flex items-center mb-2'>
                {[...Array(item.stars)].map((_, i) => (
                  <FaStar key={i} className='text-[#ff9100] mr-1' />
                ))}
              </div>
              <div className='flex items-center mt-4'>
                <img
                  src={item.authorImage}
                  alt={item.authorName}
                  className='w-12 h-12 rounded-full mr-3'
                />
                <div>
                  <h4 className='text__medium'>{item.authorName}</h4>
                  <p className='text__base'>{item.authorTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
