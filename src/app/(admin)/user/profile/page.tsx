"use client";
import Link from 'next/link'
import React from 'react'
import { useSession } from "next-auth/react"
import Image from 'next/image';

const Profile = () => {
  const { data: session, status } = useSession()
  return (
    <div className="min-h-screen grid place-items-center items-center">
    <div className='max-w-sm bg-gray-300 rounded overflow-hidden shadow-lg'>
     
    <div className="px-6 py-4 ">
      <div className="font-bold text-xl mb-2">Profile</div>
      {session && session.user?.name ? (
        <> 
       
        <Image alt={session.user?.name} src={session.user?.image} width={164} height={34} />
      <p className="text-gray-700 text-base">
        Name: {session.user?.name}
       
      </p>
      <p className="text-gray-700 text-base">
      
      Email: {session.user?.email}
    </p>
    </>
       ) : (
        <>
        <p>Not Logged in</p>
        </>
       )}
    </div>
      <Link href={"/user/edit"} className='py-2 px-4 bg-gray-200 rounded'>
        Edit Profile
      </Link>
    </div>
    </div>
  )
}

export default Profile