import Image from 'next/image'
import React from 'react'
import { motion, MotionConfig } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
  imagePath:string,
  imageAlt: string,
  title: string,
  description: string,
  buttonText: string,
  path: string,
  amount: string,
  }
export default function Cards( props: Props ) {
  
  return (

    <MotionConfig transition={{ duration: 1 }}>
    <motion.div
                   initial={{ opacity: 0, x: -200 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   >
<section className="py-10 md:py-16">
{/* <div className="container max-w-screen-xl mx-auto px-4">

        <div className="bg-gray-50  rounded-md  sm:min-h-[34rem]  md:min-h-[34rem] md:min-w-68 lg:min-h-[27rem]">
        <Image className="w-full h-48" src={props.imagePath} alt={props.imageAlt} width={125} height={125}  />
        
            <div className="py-8 px-8 ">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
            {props.title}
            </h4>

            <p className="font-normal text-gray-500 text-md items-stretch">
            {props.description}
            </p>
            </div>

            <div className="px-6 py-4  flex items-center justify-between">
       <div> <a href={props.path} className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 ">{props.buttonText}</a></div>
      <div><p className='text-sm'>{props.amount}</p></div>
      
     </div>
     </div>
        </div> */}




<div className="container max-w-screen-xl mx-auto ">
    <Card className="max-sm:w-full max-sm:h-[440px] max-md:w-[150px] max-lg:w-[180px] max-lg:h-[600px] max-xl:w-[250px] max-xl:h-[500px] max-2xl:w-[350px]">
    <Image className="w-full h-60" src={props.imagePath} alt={props.imageAlt} width={125} height={125}  />
      <CardHeader>
        <CardTitle className='sm:h-20 lg:h-12 text-center'> {props.title}
        </CardTitle>
        <CardDescription className='sm:h-40 md:h-48 lg:h-32'>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
       
      </CardContent>
      <CardFooter className="max-sm:flex-col xl:flex sm:space-y-2 md:flex justify-between">
      <a href={props.path} className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 ">{props.buttonText}</a>
      <p className='text-sm'>{props.amount}</p>
      </CardFooter>
    </Card>
 
    </div>

</section>

</motion.div>
         </MotionConfig>
  )
}
