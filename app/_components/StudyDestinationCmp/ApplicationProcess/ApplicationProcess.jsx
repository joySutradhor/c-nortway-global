import React from 'react'
import {
  FaUserCheck,
  FaUsers,
  FaSearch,
  FaFileAlt,
  FaGraduationCap,
  FaLaptop,
  FaChalkboardTeacher
} from 'react-icons/fa'
import { SiVisa } from 'react-icons/si'

import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
import TooltipBtn from '../../utlities/TooltipBtn/TooltipBtn'

const applicationProcess = [
  { id: 1, title: 'Clients profile review', icon: <FaUserCheck size={24} /> },
  { id: 2, title: 'Onboarding meeting', icon: <FaUsers size={24} /> },
  { id: 3, title: 'University search', icon: <FaSearch size={24} /> },
  { id: 4, title: 'Statement of purpose', icon: <FaFileAlt size={24} /> },
  { id: 5, title: 'University Shortlist', icon: <FaGraduationCap size={24} /> },
  { id: 6, title: 'University application', icon: <FaLaptop size={24} /> },
  {
    id: 7,
    title: 'Arranging mock interview',
    icon: <FaChalkboardTeacher size={24} />
  },
  {
    id: 8,
    title: 'Visa application for submission',
    icon: <SiVisa size={24} />,
    highlight: true
  }
]

export default function ApplicationProcess () {
  return (
    <section className=''>
      <div className='section__spacing'>
   
        <h2 className='headingText text-center'>
          <span className='text-[#ff9100]'>Our</span> Application Process
        </h2>
        <p className='heading__sub__text max-w-3xl mx-auto text-center mb-12'>
          If you’ve decided to study at a university, you will have to gather
          the right documents to prove that you fit the university requirements.
          Provide complete personal information, previous qualifications,
          financial information, and a personal statement.
        </p>

        <div className='flex items-center justify-center mb-12'>
          {applicationProcess.slice(0, 5).map((step, index, arr) => (
            <div key={step.id} className='flex items-center'>
              {/* Circle + title */}
              <div className='flex flex-col items-center text-center w-[16vw] relative'>
                <div
                  className={`flex items-center justify-center size-20 rounded-full border-2 border-dashed ${
                    step.highlight
                      ? 'bg-[#ff9100] text-white border-[#ff9100]'
                      : 'border-gray-400 text-gray-700'
                  }`}
                >
                  {step.icon}
                </div>
                <p className='mt-3 text-sm font-medium text-gray-700'>
                  {step.title}
                </p>

                {/* Dashed line connecting to next circle */}
                {index !== arr.length - 1 && (
                  <div className='absolute top-10 right-[-35%] w-[70%] h-0.5 border-t-2 border-dashed border-gray-400'></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center mt-16  mb-12'>
          {applicationProcess.slice(5, 9).map((step, index, arr) => (
            <div key={step.id} className='flex items-center'>
              {/* Circle + title */}
              <div className='flex flex-col items-center text-center w-[16vw] relative'>
                <div
                  className={`flex items-center justify-center size-20 rounded-full border-2 border-dashed ${
                    step.highlight
                      ? 'bg-[#ff9100] text-white border-[#ff9100]'
                      : 'border-gray-400 text-gray-700'
                  }`}
                >
                  {step.icon}
                </div>
                <p className='mt-3 text-sm font-medium text-gray-700'>
                  {step.title}
                </p>

                {/* Dashed line connecting to next circle */}
                {index !== arr.length - 1 && (
                  <div className='absolute top-10 right-[-35%] w-[70%] h-0.5 border-t-2 border-dashed border-gray-400'></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
