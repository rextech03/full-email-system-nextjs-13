import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

export default function NewFooter() {

    const shopmenu = [
        { title: "Newest Release", path: "/new" },
        { title: "Discount", path: "/discount" },
        { title: "Popular Demand", path: "/popular" },
      ]

      const aboutmenu = [
        { title: "Blog", path: "/new" },
        { title: "Resources", path: "/discount" },
        { title: "Login", path: "/popular" },
      ]

      const contactmenu = [
        { icon: "FaPhone", title: "Phoenixcreedacademy@gmail.com", path: "/new" },
        { icon: "FaMailBulk", title: "0123456789", path: "/discount" },
        // { title: "Login", path: "/popular" },
      ]

  return (
    <div className='bg-blue-800 '>
        <div className="md:flex md:justify-between max-sm:items-center max-sm:text-center  p-12 mx-auto text-white">
            <div className='grid place-items-center'>
                <Image src={'/images/logo.png'} alt='logo' width={124} height={124} className='h-32 w-32' />
            </div>

            <div className='max-sm:grid max-sm:place-items-center max-sm:py-2'>
                <h4 className='font-bold text-xl'>Shop</h4>
                <ul className="max-sm:justify-center max-sm:items-center md:items-start space-y-4 md:flex-col  md:space-y-0">
            {shopmenu.map((item, idx) => (
                <li key={idx} className="  text-white ">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            </div>

            <div className='max-sm:grid max-sm:place-items-center max-sm:py-2'>
                <h4 className='font-bold text-xl'>About Us</h4>
                <ul className="max-sm:justify-center max-sm:items-center space-y-4 md:flex-col  md:space-y-0">
            {aboutmenu.map((item, idx) => (
                <li key={idx} className="  text-white ">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            </div>

            <div className='max-sm:grid max-sm:place-items-center max-sm:items-center max-sm:text-center max-sm:py-2'>
                <h4 className='font-bold text-xl'>Contact Us</h4>
                <ul className="max-sm:justify-center max-sm:items-center space-y-8 md:flex-col  md:space-y-0">
                    <li className='flex text-white max-sm:justify-center'><FaMailBulk />
                    <a href='mailto:phoenixcreedacamedy@gmail.com' className='px-4'>phoenixcreedacamedy@gmail.com</a>
                    </li>
                    <li className='flex text-white  max-sm:justify-center'><FaPhone />
                    <a href='' className='px-4'>0123171895</a>
                    </li>
            {/* {contactmenu.map((item, idx) => (
                <li key={idx} className="  text-black ">
                   
                    
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))} */}
              <div className="flex py-2 space-x-8 max-sm:justify-center">
                <FaFacebook />
                <FaInstagram />
                <FaWhatsapp />
                <FaLinkedin />
              </div>
            </ul>
            </div>

        </div>
    </div>
  )
}
