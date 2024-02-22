"use client";
import Image from 'next/image'
import React from 'react'
import { useSession } from "next-auth/react"
import dayjs from 'dayjs';
import { Button } from '@/components/ui/button';

export default function TabProfile() {

    const { data: session, status } = useSession();
   

  return (
    <div>
    <div className=" bg-white ">
        <div className="relative ">
         <Image className="w-full h-60 rounded-t-2xl object-cover" src={'/images/coverphoto.png'} alt={'banner'} width={125} height={125}  />
         {session && session.user?.email ? (
            <div className="absolute -bottom-32 px-8 flex items-center">
         <Image className='rounded-full h-40 w-40' src={session.user.image} width={200} height={200} alt='profile photo' />
         <div className="px-8">
         <h3 className='text-3xl font-semibold'>{session.user?.name}</h3>
         <p className='flex text-center text-black'>Joined {dayjs(session.user.created_at).format('MMM. YY')} &nbsp; * &nbsp;
         {status ? <p className='text-green-400'> Active Now</p>: <p className='text-red-400'> Offline</p> }
           </p>
            
            
         </div>
         </div>


         ) : (
            <>
            </>
         )}
         </div>
         <div className='mt-40 px-8 py-2 pb-12 rounded-b-2xl'>
         <div className='flex justify-between items-center py-4'>
            
            <h4>Personal Info.</h4>
            <Button className='bg-gray-300 text-black'>Edit</Button>
            </div>

            <hr/>
            
            <div className="flex  items-center space-y-8">
                <div className="flex  items-center w-1/2">
                    <p className='w-40'>First Name: </p>
                    <p>{session!.user?.name.split(' ')[0]}</p>
                </div>

                <div className="flex w-1/2 items-center ">
                    <p className='w-40'>Account Type: </p>
                    <p>{session!.user?.role}</p>
                </div>
            </div>

            <div className="flex  items-center space-y-8">
                <div className="flex w-1/2 items-center">
                    <p className='w-40'>Last Name: </p>
                    <p>{session!.user?.name.split(' ')[1]}</p>
                </div>

                <div className="flex w-1/2 items-center">
                    <p className='w-40'>Email: </p>
                    <p>{session!.user?.email}</p>
                </div>
            </div>
            </div>
            </div>
           
            {/* Addresses */}
            <div className="my-4"></div>

            <div className=" rounded-xl p-8 flex w-full bg-white ">
                <div className=' w-1/2 mr-4'>

                   
            <div className="flex justify-between items-center py-2 ">
                <h4>BILLING ADDRESS</h4>
                <Button className='bg-gray-300 text-black'>Edit</Button>
            </div>
            <hr />
            <p>
            Bodunrin Victor <br />
            Somewhere in the Universe <br />
            Hello World!  <br />
            Hello World!  <br />
            Nigeria

            </p>
                </div>

            
                <div className=' w-1/2 ml-4'>

                   
                <div className="flex justify-between items-center py-2">
                    <h4>BILLING ADDRESS</h4>
                    <Button className='bg-gray-300 text-black'>Edit</Button>
                </div>
                <hr />
                <p>
                Bodunrin Victor <br />
                Somewhere in the Universe <br />
                Hello World!  <br />
                Hello World!  <br />
                Nigeria

                </p>
                    </div>

            </div>
            
  
    </div>
  )
}
