"use client";
import Uploader from '../../users/uploader'
import { Toaster } from '../../../components/toaster'
import { useSession } from 'next-auth/react'

export default function Home() {
  
  const { data: session, status } = useSession()
  

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Toaster />
     
      {session && session.user?.email ? (
      <>
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <Uploader userId={session.user?.id} />
      </div>
      <div>Please Not you have to re-login to notice changes in profile.</div>
      </>
) : (
  <>
  </>
 )} 
      
      {/* <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
       
       
      </div> */}
    </main>
  )
}




