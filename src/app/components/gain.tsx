import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Gain() {
  return (
    <div className='container py-4'>
        

        <h3 className='max-sm:pb-20 max-sm:text-center md:pl-60 md:ml-60 pb-4 text-5xl font-bold'>What you Gain</h3>
        <div className="flex bg-gray-200 rounded-lg relative ">
        
            <div className="max-sm:-top-20 xl:-top-32 md:w-1/3 absolute md:bottom-0">
                <Image src={'/images/profit.png'} alt='Phoenix logo' width={224} height={224} className='w-72 h-80 md:w-96 md:h-96 xl:w-80 xl:h-96'  />
            </div>

            <Carousel 
            className="text-justify justify-end max-sm:w-2/3 max-sm:mx-auto max-sm:items-center max-sm:pt-60 md:ml-96  md:py-12 md:w-1/2  xl:ml-[462px] md:h-64 "
            >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
            <p className="max-sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id donec ultrices.</p>
                    
            
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
            {/* <div className='max-sm:pt-60 md:ml-60 md:pl-56 md:py-12 text-justify'>
            
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id donec ultrices.</p>
                    
                <div className="max-sm:text-center py-12">
                    <Link href="/" className="py-4 px-12 rounded-full bg-blue-800 text-white">
                        Learn More
                </Link>
                </div>
            </div> */}
        </div>
       
    </div>
  )
}
