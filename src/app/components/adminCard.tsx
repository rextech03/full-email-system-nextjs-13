import Image from 'next/image'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  imagePath:string,
  imageAlt: string,
  title: string,
  description: string,
  buttonText: string,
  path: string,
  }
  
export default function AdminCard( props: Props ) {
  
  return (
    <Card className="max-w-md rounded overflow-hidden shadow-lg bg-white">
    <Image className="w-full h-40" src={props.imagePath} alt={props.imageAlt} width={125} height={125} />
    {/* <CardHeader className="px-6 py-4 min-w-40 h-32"> */}
      {/* <CardTitle className="font-bold text-xl mb-2 ">{props.title}</CardTitle> */}
      {/* <CardDescription className="text-gray-700 text-base ">
      <p>{props.description.substring(0, 32)}</p>
      </CardDescription> */}
    {/* </CardHeader> */}
    {/* <CardContent className='md:w-40 lg:w-56'></CardContent> */}
    <CardFooter className=" flex justify-between items-center px-6 py-2 bg-blue-600">
      <p>{props.title}</p>
      <a href={props.path} className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{props.buttonText}</a>
    </CardFooter>
  </Card>
  )
}
