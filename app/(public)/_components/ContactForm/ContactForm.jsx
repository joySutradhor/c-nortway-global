'use client'
import Image from 'next/image'
import BaseBtn from '../utlities/CommonBtn/BaseBtn'
import { MdArrowOutward } from 'react-icons/md'
import SectionHeading from '../utlities/SectionHeading/SectionHeading'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMailUnreadSharp } from "react-icons/io5";




export default function ContactForm () {
  return (
    <div>
      <div className='text-center'>
        <h3 className='headingText'>
          Our <span className='heading__color__text'>Offices</span>
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
          <div className='h-[15vh] border border-black/10 flex justify-center items-center gap-3 p-5 lg:p-10'>
            <Image
              src='https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/flags/bangladesh.webp'
              alt='contact-map'
              width={1200}
              height={600}
              className=' h-8 w-10 rounded object-cover'
            />
            <h3 className='cf__textTitle '>Bangladesh</h3>
          </div>
          <div className='h-[15vh] border border-black/10 flex justify-center  items-center gap-3 p-10'>
            <Image
              src='https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/flags/America.webp'
              alt='contact-map'
              width={1200}
              height={600}
              className=' size-8 rounded object-cover'
            />
            <h3 className='cf__textTitle '>America</h3>
          </div>
          <div className='h-[15vh] border border-black/10 flex justify-center  items-center gap-3 p-10'>
            <Image
              src='https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/flags/au.jpg'
              alt='contact-map'
              width={1200}
              height={600}
              className=' size-8 rounded object-cover'
            />
            <h3 className='cf__textTitle '>Australia</h3>
          </div>
        </div>
      </div>

      {/* form  */}
      <div className='mt-[15vh] grid lg:grid-cols-12 gap-10 xl:gap-20 items-center'>
        <div className='lg:col-span-8 order-2 md:order-1'>
          <form className=' bg-white p-5 lg:p-10 rounded-lg space-y-5'>
            <div>
              <label className='cf__label' htmlFor=''>
                Name
              </label>
              <input
                type='text'
                placeholder='Type Your Name'
                className='cf__input'
              />
            </div>

            <div>
              <label className='cf__label' htmlFor=''>
                Email
              </label>
              <input
                className='cf__input'
                type='text'
                placeholder='Type Your Email'
              />
            </div>

            <div>
              <label className='cf__label' htmlFor=''>
                Country{' '}
              </label>
              <input
                className='cf__input'
                type='text'
                placeholder='Type Your country'
              />
            </div>

            <div>
              <label className='cf__label' htmlFor=''>
                Message
              </label>
              <textarea
                className='cf__input'
                type='text'
                rows={5}
                placeholder='Type Your Message'
              />
            </div>

            <BaseBtn text='Submit' icon={MdArrowOutward}></BaseBtn>
          </form>
        </div>
        <div className='lg:col-span-4 order-1 md:order-2'>
          <SectionHeading
            classNameBtn='!justify-start'
            text='Contact'
            Icon={IoMailUnreadSharp}
            title='Contact '
            colorTitle='Us'
            subtitle='Get in touch today to learn how Northway Global can help your business.'
            className='!text-left'
          />

          <div className='cf__socaiParent'>
            <div className='cf__socailDiv'>
              <IoMailUnreadSharp className='text-sm md:text-base lg:text-xl '></IoMailUnreadSharp>
            </div>
            <div>
              <h2 className='heading__sub__text__contact__title'>Email</h2>
              <p className='text__base'>info@northwayglobal.com</p>
            </div>
          </div>
          <div className='cf__socaiParent'>
            <div className='cf__socailDiv'>
              <FaPhone className='text-sm md:text-base lg:text-xl '></FaPhone>
            </div>
            <div>
              <h2 className='heading__sub__text__contact__title'>Phone</h2>
              <p className='text__base'>+880 1607-002687</p>
            </div>
          </div>
          <div className='cf__socaiParent'>
            <div className='cf__socailDiv'>
              <FaLocationDot className='text-sm md:text-base lg:text-xl '></FaLocationDot>
            </div>
            <div>
              <h2 className='heading__sub__text__contact__title'>Address</h2>
              <p className='text__base'>Kha-12/2, Shahjaspur, Gulshan, Dhaka-1212</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
