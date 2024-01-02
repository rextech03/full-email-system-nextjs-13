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
        <div className="flex justify-between items-center  p-12 mx-auto">
            <div>
                <Image src={'/images/logo.png'} alt='logo' width={124} height={124} className='h-32 w-32' />
            </div>

            <div>
                <h4 className='font-bold text-xl'>Shop</h4>
                <ul className="justify-center items-center space-y-8 md:flex-col  md:space-y-0">
            {shopmenu.map((item, idx) => (
                <li key={idx} className="  text-black ">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            </div>

            <div>
                <h4 className='font-bold text-xl'>About Us</h4>
                <ul className="justify-center items-center space-y-8 md:flex-col  md:space-y-0">
            {aboutmenu.map((item, idx) => (
                <li key={idx} className="  text-black ">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            </div>

            <div>
                <h4 className='font-bold text-xl'>Contact Us</h4>
                <ul className="justify-center items-center space-y-8 md:flex-col  md:space-y-0">
            {contactmenu.map((item, idx) => (
                <li key={idx} className="  text-black ">
                   
                    
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
              <div className="flex py-2">
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
