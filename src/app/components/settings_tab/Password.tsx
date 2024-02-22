"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PencilIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Password() {
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
          <div className="flex-col justify-between items-start py-4 ">
            <div>
              <Label htmlFor='name'>Current Password:</Label>
              <Input type='password' placeholder='password' className='w-full'/>
            
              
            </div>
            <div className="py-4"></div>
            <div>
              <Label htmlFor='name'>New Password:</Label>
              <Input type='password' placeholder='password' className='w-full'/>
            
            </div>
            </div>
            <div>
              <Button className='bg-blue-600 px-8 py-4' >Save</Button>
            </div>
        </div>
    </div>
</div>
  )
  
}
