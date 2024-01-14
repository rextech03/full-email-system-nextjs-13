import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutSection() {
  return (
    <div className='container py-4'>
        

        <h3 className=' max-sm:pb-20 max-sm:text-center  md:pl-60 md:ml-60 md:pb-4 text-5xl font-bold'>About Us</h3>
        <div className="md:flex bg-gray-200 rounded-lg relative ">
        
            <div className="max-sm:-top-20 md:w-1/3 xl:w-1/4 absolute md:bottom-0 lg:-top-28 lg:left-8 ">
                <Image src={'/images/phoenixlogo.png'} alt='Phoenix logo' width={224} height={224} className='w-72 h-72 md:w-96 md:h-96' />
            </div>
            <div className='max-sm:pt-60 max-sm:px-4 md:ml-60 md:pl-56 md:py-12 text-justify'>
            
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id donec ultrices.</p>
                    
                <div className="max-sm:text-center py-12">
                    <Link href="/" className="py-4 px-12 rounded-full bg-blue-800 text-white">
                        Learn More
                </Link>
                </div>
            </div>
        </div>
       
    </div>
  )
}
