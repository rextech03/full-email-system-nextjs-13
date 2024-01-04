import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WhatTeach() {
  return (
    <div className='container py-4'>
        

        <h3 className='max-sm:pb-12 max-sm:text-center md:ml-12 md:pb-4 text-5xl font-bold'>What We Teach</h3>
        <div className="flex bg-gray-200 rounded-lg relative ">
        
            
            <div className='px-12 py-12 max-sm:pt-60'>
            
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id donec ultrices.</p>
                    
                <div className="py-12">
                    <Link href="/" className="py-4 px-12 rounded-full bg-blue-800 text-white">
                        Learn More
                </Link>
                </div>
            </div>

            <div className="max-sm:-top-12 md:w-1/3 absolute md:bottom-0 md:right-4 md:ml-60 md:pl-56">
                <Image src={'/images/blackwoman.png'} alt='Phoenix logo' width={320} height={320} className='w-60 h-60 md:w-[72rem] md:h-[32rem]' />
            </div>
        </div>
       
    </div>
  )
}
