'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BaseBtn from '../utlities/CommonBtn/BaseBtn'
import { MdArrowOutward } from 'react-icons/md'
import {
  FaUserTie,
  FaChartLine,
  FaClock,
  FaProjectDiagram
} from 'react-icons/fa'

const bannerData = [
  {
    id: 1,
    title: 'Welcome to ',
    color: 'Northway Global',
    desc: 'Choose Northway For Your Study Abroad Journey & Embark on An Exceptional Educational Experience That Combines Academic Excellence, Personalized Guidance, and a Seamless Transition to You.',
    img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/others/cta.jpg',
    btn: 'Start Your Journey'
  },
  {
    id: 2,
    title: 'Welcome to',
    color: 'Northway Global',
    desc: 'Choose Northway For Your Study Abroad Journey & Embark on An Exceptional Educational Experience That Combines Academic Excellence, Personalized Guidance, and a Seamless Transition to You.',
    img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/others/cta.jpg',
    btn: 'Start Your Journey'
  },
  {
    id: 3,
    title: 'Welcome To ',
    color: 'Northway Global',
    desc: 'Choose Northway For Your Study Abroad Journey & Embark on An Exceptional Educational Experience That Combines Academic Excellence, Personalized Guidance, and a Seamless Transition to You.',
    img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/others/cta.jpg',
    btn: 'Start Your Journey'
  }
]

const featureData = [
  {
    id: 1,
    title: 'Experienced Consultants',
    icon: <FaUserTie className='text-4xl text-[#FF9100]' />
  },
  {
    id: 2,
    title: '98.8% Success Rate',
    icon: <FaChartLine className='text-4xl text-[#FF9100]' />
  },
  {
    id: 3,
    title: 'Positive And Timely Results',
    icon: <FaClock className='text-4xl text-[#FF9100]' />
  },
  {
    id: 4,
    title: 'Seamless Procedures',
    icon: <FaProjectDiagram className='text-4xl text-[#FF9100]' />
  }
]

export default function HeroBanner () {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className='w-full relative'>
      <Slider {...settings}>
        {bannerData.map(item => (
          <div key={item.id} className='relative h-[90vh] w-full'>
            {/* Background Image added*/}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className='absolute inset-0 object-cover z-0'
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/50 z-10' />

            {/* Content */}
            <div className='absolute inset-0 z-20 flex flex-col justify-center px-20'>
              <div className='max-w-2xl text-left text-white space-y-6'>
                <h1 className='text-6xl md:text-7xl font-bold leading-tight'>
                  {item.title}{' '}
                  <span className='heading__color__text'>{item.color}</span>
                </h1>
                <p className='text-lg md:text-xl'>{item.desc}</p>

                <BaseBtn
                  text={item.btn}
                  link='/contact-us'
                  icon={MdArrowOutward}
                  className='bg-[#ff9100] text-white'
                />
              </div>

              {/* Feature Cards */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-7xl'>
                {featureData.map(feature => (
                  <div
                    key={feature.id}
                    className='flex flex-col items-center text-center bg-white/5 backdrop-blur-md shadow-md rounded-xl p-6 hover:shadow-lg transition'
                  >
                    {feature.icon}
                    <h3 className='mt-4 text-lg font-semibold text-white'>
                      {feature.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
