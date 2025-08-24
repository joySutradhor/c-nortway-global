import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from './_components/shared/Footer/Footer'
import Navbar from './_components/shared/Footer/Navbar/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
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
        className={`${geistSans.variable} ${geistMono.variable} bg-[#EAEAEA]  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
