'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa6'

import { FiMenu, FiX } from 'react-icons/fi'

import logo from '../../../../../public/logo.webp'
import BaseBtn from '@/app/_components/utlities/CommonBtn/BaseBtn'
import Link from 'next/link'

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  const toggleDropdown = menu => {
    setDropdownOpen(dropdownOpen === menu ? null : menu)
  }

  return (
    <div>
      {/* Topbar */}
      <div className='flex flex-col md:flex-row items-center justify-between py-3 px-6 md:px-20 bg-[#FEDDB1]'>
        {/* Contact Info */}
        <div className='space-y-1 md:space-y-0 flex flex-col md:flex-row items-center text-sm md:text-base font-bold text-black/70 gap-x-6 md:gap-x-16'>
          <h3>Dhaka office: +8801771660030</h3>
          <h3>USA office: +19179246493</h3>
          <h3>Australia office: +61449615940</h3>
        </div>

        {/* Social Media Links */}
        <div className='flex space-x-4 text-lg text-gray-700 mt-2 md:mt-0'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebookF className='hover:text-[#FF9100]' />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter className='hover:text-[#FF9100]' />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedinIn className='hover:text-[#FF9100]' />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='hover:text-[#FF9100]' />
          </a>
          <a
            href='https://youtube.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube className='hover:text-[#FF9100]' />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div className='px-6 md:px-20 py-5 flex items-center justify-between shadow'>
        {/* Logo */}
        <div>
          <Link href={'/'}>
            <Image
              src={logo}
              alt='logo'
              height={1000}
              width={1000}
              className='h-auto w-32 object-cover'
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center space-x-8 text-lg font-semibold text-gray-700'>
          <Link href={'/'}>
            <li className='hover:text-[#FF9100] cursor-pointer'>Home</li>
          </Link>
          <Link href={'/about-us'}>
            <li className='hover:text-[#FF9100] cursor-pointer'>About Us</li>
          </Link>

          {/* Study Destination Dropdown */}
          <li className='relative group cursor-pointer'>
            <span className='hover:text-[#FF9100]'>Study Destination ▾</span>

            {/* Dropdown */}
            <div className='absolute left-1/2 -translate-x-1/2 top-full mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg py-4 z-50'>
              <ul className='grid grid-cols-4 gap-5 w-[60rem] mx-auto justify-center items-center p-5'>
                {[
                  { name: 'USA', flag: 'us' },
                  { name: 'UK', flag: 'gb' },
                  { name: 'Canada', flag: 'ca' },
                  { name: 'Australia', flag: 'au' },
                  { name: 'Malaysia', flag: 'my' },
                  { name: 'Ireland', flag: 'ie' },
                  { name: 'Austria', flag: 'at' },
                  { name: 'Germany', flag: 'de' },
                  { name: 'Japan', flag: 'jp' },
                  { name: 'China', flag: 'cn' },
                  { name: 'South Korea', flag: 'kr' }
                ].map(country => (
                  <li
                    key={country.name}
                    className='px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer'
                  >
                    <img
                      src={`https://flagcdn.com/w40/${country.flag}.png`}
                      alt={country.name}
                      className='w-6 h-5 object-cover rounded-sm'
                    />
                    {country.name}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Gallery Dropdown */}
          <li className='relative group cursor-pointer'>
            <span className='hover:text-[#FF9100]'>Gallery ▾</span>

            <ul
              className='absolute left-1/2 -translate-x-1/2 top-full mt-5 
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                 transition-all duration-200 bg-white shadow-lg rounded-lg py-2 w-48 z-50'
            >
              <Link href={'/photo-gallery'}>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  Photo Gallery
                </li>
              </Link>
              <Link href={'/video-gallery'}>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  Video Gallery
                </li>
              </Link>
            </ul>
          </li>

          <Link href={'/service'}>
            <li className='hover:text-[#FF9100] cursor-pointer'>Service</li>
          </Link>
          <Link href={'/blogs'}>
            <li className='hover:text-[#FF9100] cursor-pointer'>Blogs</li>
          </Link>
          <Link href={'/contact-us'}>
            <li className='hover:text-[#FF9100] cursor-pointer'>Contact Us</li>
          </Link>
        </ul>

        <div>
          <BaseBtn
            link='/contact-us'
            text='Enquire Now'
            icon={FaLocationArrow}
          />
        </div>

        {/* Mobile Menu Button */}
        <div
          className='md:hidden text-2xl text-gray-700'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className='md:hidden bg-white shadow-lg px-6 py-4 space-y-3 font-semibold text-gray-700'>
          <li>Home</li>
          <li>About Us</li>
          <li>
            <button
              onClick={() => toggleDropdown('study')}
              className='w-full text-left'
            >
              Study Destination ▾
            </button>
            {dropdownOpen === 'study' && (
              <ul className='pl-4 mt-2 space-y-1'>
                <li>UK</li>
                <li>USA</li>
                <li>Germany</li>
                <li>Canada</li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleDropdown('gallery')}
              className='w-full text-left'
            >
              Gallery ▾
            </button>
            {dropdownOpen === 'gallery' && (
              <ul className='pl-4 mt-2 space-y-1'>
                <li>Photo Gallery</li>
                <li>Video Gallery</li>
              </ul>
            )}
          </li>
          <li>Service</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
      )}
    </div>
  )
}
