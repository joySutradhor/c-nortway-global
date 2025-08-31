
import './globals.css'
import Footer from './_components/shared/Footer/Footer'
import Navbar from './_components/shared/Footer/Navbar/Navbar'
import localFont from 'next/font/local'
import { IoLogoWhatsapp } from 'react-icons/io'




const helvetica = localFont({
  src: './public/Helvetica.woff2'
})

export const metadata = {
  title: 'Agarwal - Home',
  description:
    'Agarwal Tribriwal Chartered Accountants providing expert accounting, taxation, and financial advisory services.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' data-arp=''>
      <body
        cz-shortcut-listen='true'
        className={`${helvetica.className}  bg-[#EAEAEA]  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <div className='fixed bottom-16 right-5 xl:right-10'>
          <a
            href='https://wa.me/8801771660030'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IoLogoWhatsapp className='text-5xl text-[#ff9100] cursor-pointer animate-pulse' />
          </a>
        </div>
      </body>
    </html>
  )
}
