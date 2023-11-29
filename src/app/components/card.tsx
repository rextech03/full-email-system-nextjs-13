import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

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
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
    <div className="py-4">
    <div className="w-full md:w-1/4 rounded overflow-hidden shadow-lg">
    <Image className="w-full" src={props.imagePath} alt={props.imageAlt} width={125} height={125} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{props.title}</div>
      <p className="text-gray-700 text-base">
      {props.description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2 flex items-center justify-between">
      <div> <a href={props.path} className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 ">{props.buttonText}</a></div>
     <div><p className='text-sm'>{props.amount}</p></div>
      
    </div>
  </div>
  </div>
  </motion.div>
  )
}
