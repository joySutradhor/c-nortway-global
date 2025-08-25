'use client'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
// import {logo} from "@/public/logo.webp"
import logo from '../../../../public/logo.webp'

export default function Footer () {
  return (
    <footer className='bg-[#FFF9F3]'>
      <div className=' section__spacing common__top__section__spacing'>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 '>
          {/* Company Info */}
          <div>
            <div>
              <Image
              alt='logo'
                src={logo}
                height={1000}
                width={1000}
                className='w-42 object-cover'
              ></Image>
            </div>
            <p className='text__base my-2.5'>
              Copyright © 2025 Northway Global. All rights reserved. Excellence
              in guidance and commitment to success.
            </p>

            <div className='flex space-x-4'>
              <a href='#' className='p-2 bg-[#ff9100] rounded-full text-white'>
                <FaFacebookF />
              </a>
              <a href='#' className='p-2 bg-[#ff9100] rounded-full text-white'>
                <FaInstagram />
              </a>
              <a href='#' className='p-2 bg-[#ff9100] rounded-full text-white'>
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ul className='space-y-1 text-base'>
              <li>
                <a
                  href='/about-us'
                  className='underline hover:text-[#FF9100] underline-offset-2'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/study-destination'
                  className='underline hover:text-[#FF9100] underline-offset-2'
                >
                  Study Destination
                </a>
              </li>
              <li>
                <a
                  href='/gallery'
                  className='underline hover:text-[#FF9100] underline-offset-2'
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href='/blogs'
                  className='underline hover:text-[#FF9100] underline-offset-2'
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='underline hover:text-[#FF9100] underline-offset-2'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <ul className=''>
              <li className='space-y-1 text-base '>
                <p className='text__medium'>Dhaka Office </p>

                <p> Kha-12/2, Shahjaspur, Gulshan, Dhaka-1212</p>
                <p>
                  <a href='tel:+8801771660030' className=''>
                    +8801771660030
                  </a>
                </p>
                <p>info@northwayglobal.com</p>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <ul>
              <li className='space-y-1 text-base'>
                <p className='text__medium'>USA Office</p>
                <p>37 -22 73 Rd St (2nd floor), Jackson Heights NY, 11372</p>
                <p>
                  <a href='tel:+19179246493' className=''>
                    +19179246493
                  </a>
                </p>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <ul>
              <li className='space-y-1 text-base'>
                <p className='text__medium'>Australia Office</p>
                <p> 3/4 Nellie Ave Mitchell, Park SA, 5043</p>
                <p>
                  {' '}
                  <a href='tel:+61449615940'>+61449615940</a>
                </p>
              </li>
            </ul>
          </div>
          <div></div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-black/10 mt-10 pt-4 text-center text-sm font-medium text-black/70 pb-5'>
          <p>
            Designed and Developed By  <span className='text-black'>Ethical Den</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
