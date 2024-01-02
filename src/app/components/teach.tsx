import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WhatTeach() {
  return (
    <div className='container py-4'>
        

        <h3 className=' ml-60 pb-4 text-5xl font-bold'>What We Teach</h3>
        <div className="flex bg-gray-200 rounded-lg relative ">
        
            
            <div className='px-12 py-12'>
            
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id donec ultrices.</p>
                    
                <div className="py-12">
                    <Link href="/" className="py-4 px-12 rounded-full bg-blue-800 text-white">
                        Learn More
                </Link>
                </div>
            </div>

            <div className="w-1/3 absolute bottom-0 right-4 ml-60 pl-56">
                <Image src={'/images/blackwoman.png'} alt='Phoenix logo' width={324} height={324} className='w-96 h-[28rem]' />
            </div>
        </div>
       
    </div>
  )
}
