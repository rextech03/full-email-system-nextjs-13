import Image from 'next/image'
import React from 'react'
import { motion, MotionConfig } from "framer-motion"

interface Props {
  imagePath:string,
  imageAlt: string,
  title: string,
  description: string,
  buttonText: string,
  path: string,
  amount: string,
  }
export default function Card( props: Props ) {
  
  return (

    <MotionConfig transition={{ duration: 1 }}>
    <motion.div
                   initial={{ opacity: 0, x: -200 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   >
<section className="py-10 md:py-16">
<div className="container max-w-screen-xl mx-auto px-4">

        <div className="bg-gray-50  rounded-md">
        <Image className="w-full h-48" src={props.imagePath} alt={props.imageAlt} width={125} height={125}  />

            <div className="py-8 px-8">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
            {props.title}
            </h4>

            <p className="font-normal text-gray-500 text-md">
            {props.description}
            </p>
            </div>

            <div className="px-6 py-4  flex items-center justify-between">
       <div> <a href={props.path} className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 ">{props.buttonText}</a></div>
      <div><p className='text-sm'>{props.amount}</p></div>
      
     </div>
     
        </div>

</div>
</section>

</motion.div>
         </MotionConfig>
  )
}
