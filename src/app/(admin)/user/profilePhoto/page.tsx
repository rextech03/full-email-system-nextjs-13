import Image from 'next/image'
import Link from 'next/link'
import ExpandingArrow from '../../../components/expanding-arrow'
import Uploader from '../../users/uploader'
import { Toaster } from '../../../components/toaster'

export default function Home({ params }: { params: { categoryId: string } }) {
  const id = params.categoryId
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Toaster />
     
      
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <Uploader userId={id} />
      </div>
      
      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
       
       
      </div>
    </main>
  )
}




