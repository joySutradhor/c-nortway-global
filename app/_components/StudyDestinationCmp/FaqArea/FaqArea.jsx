'use client'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { FiMinus, FiPlus } from 'react-icons/fi'

const faqs = [
  {
    title: 'Academic powers',
    description:
      'The USA is home to some of the best universities in the world. Most of the USA universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The US is home to 33 of the top 100 universities.'
  },
  {
    title: 'Excellent international student support system',
    description:
      'American colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in the United States. On an average day, one can find students on the college campus from at least 10-15 different nationalities.'
  },
  {
    title: 'Successful post-college career',
    description:
      'American jobs offer the highest wages. After completing their education, a large number of brilliant applicants relocate to the US to earn more money. Students who have studied in the United States have an advantage, as they can access exclusive career prospects and develop skills relevant to the workforce.'
  },
  {
    title: 'Career opportunities',
    description:
      'Starting salaries for graduates from the top colleges in the USA are competitive. Even tier-2 university graduates can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at $66,123. Studying in the USA offers experiential learning through internships and job placements.'
  }
]

export default function FaqArea ({ countryName = 'Usa' }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFaq = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='section__spacing '>
      <div>
        <div className='grid grid-cols-8 gap-20'>
          {/* Left: FAQs */}
          <div className='col-span-5 space-y-2'>
            <div className='mb-5'>
              <h3 className='headingText'>
                Study in{' '}
                <span className='heading__color__text'>{countryName}</span>{' '}
                FAQ's
              </h3>
              <p className='text-lg max-w-3xl '>
                Studying in the USA can offer a variety of benefits, making it
                an attractive destination for international students. Here are
                some reasons why study in USA is a popular choice.
              </p>
            </div>

            {faqs.map((faq, index) => (
              <div key={index} className=' pb-4 bg-white rounded-lg'>
                <button
                  onClick={() => toggleFaq(index)}
                  className='w-full pt-5  px-5 rounded-lg text-left flex justify-between items-center text-xl font-semibold focus:outline-none cursor-pointer'
                >
                  {faq.title}
                  <span className='ml-2 text-orange-500'>
                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                {openIndex === index && (
                  <p className='mt-2 text-gray-700 px-5 rounded-lg'>
                    {faq.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right: Single image */}
          <div className='col-span-3 flex justify-center'>
            <img
              src='https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/faq-66dc00ae9d778.webp'
              alt='Study in USA'
              className='w-full h-auto rounded-lg  object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
