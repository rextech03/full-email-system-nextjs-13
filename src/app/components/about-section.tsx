import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutSection() {
  return (
    <div className='container py-4'>
        <div className="bg-gray-200 rounded-lg">

        
        <div className="flex ">
            <div className="w-1/3 ">
                <Image src={'/images/phoenixlogo.png'} alt='Phoenix logo' width={94} height={124} className='w-1/3 h-40' />
            </div>
            <div className='w-2/3'>
            <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id donec ultrices.</p>
                    
                <div className="py-4">
                    <Link href="/" className="py-4 px-12 rounded-full bg-blue-800 text-white">
                        Learn More
                </Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
