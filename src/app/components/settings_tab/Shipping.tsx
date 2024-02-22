"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PencilIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Shipping() {
  const { data: session, status } = useSession();
  return (
    <div className='w-full'>
    <div className="flex justify-items-center items-center">
        <div className="w-1/5 relative">
            <Image src={session!.user?.image} alt='profile photo' width={124} height={124} className='rounded-full w-32 h-32 relative ' />
            <Link href={'/'} className="absolute rounded-full grid justify-center items-center text-center bg-blue-500 w-8 h-8 top-8 left-24">
              <PencilIcon className='text-center w-4 h-4'/>
            </Link>
        </div>
        <div className="w-4/5">

          <div className="flex-col ">
            <div className="flex justify-between items-start py-4 ">
              <div className='w-full mr-8'>
              <Label htmlFor='name'>First Name:</Label>
              <Input placeholder={session!.user?.name.split(' ')[0]} className='w-full'/>
              </div>
              <div className='w-full mr-8'>
              <Label htmlFor='name'>Company Name (Optional):</Label>
              <Input placeholder={'company'} className='w-full'/>
              </div>
            </div>

            <div className="flex justify-between items-start py-4 ">
            <div className='w-full mr-8'>
              <Label htmlFor='name'>Last Name:</Label>
              <Input placeholder={session!.user?.name.split(' ')[1]} className='w-full'/>
            </div>
            <div className='w-full mr-8'>
              <Label htmlFor='name'>Email:</Label>
              <Input placeholder={session!.user?.email} className='w-full'/>
            </div>
            </div>

            <div className="flex justify-between items-start py-4 ">
            <div className='w-full mr-8'>
              <Label htmlFor='name'>Country / Region:</Label>
              <Input placeholder={'Nigeria'} className='w-full'/>
              </div>
              <div className='w-full mr-8'>
              <Label htmlFor='name'>State:</Label>
              <Input placeholder='State' className='w-full'/>
            </div>
            </div>

            <div className="flex justify-between items-start py-4 ">
            <div className='w-full mr-8'>
              <Label htmlFor='name'>Town / City:</Label>
              <Input placeholder={'Nigeria'} className='w-full'/>
              </div><div className='w-full mr-8'>
              <Label htmlFor='name'>Phone:</Label>
              <Input placeholder='State' className='w-full'/>
            </div>
            </div>

            <div className="flex justify-between items-start py-4 ">
            <div className='w-full mr-8'>
              <Label htmlFor='name'>Street Address:</Label>
              <Input placeholder={'Nigeria'} className='w-full'/>
              </div><div className='w-full mr-8'>
              <Label htmlFor='name'>Apartment, suit, unit. e.t.c. (Optional):</Label>
              <Input placeholder='State' className='w-full'/>
            </div>
            </div>
<div className="my-4"></div>
            <div className='flex justify-center items-center'>
              <Button className='bg-blue-600 w-1/4' >Save</Button>
            </div>
            </div>
           
        </div>
    </div>
</div>
  )
  
}
