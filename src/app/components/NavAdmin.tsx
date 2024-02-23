"use client"
import {useState} from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
// import { getServerSession } from 'next-auth/next';
import { useSession } from "next-auth/react"
import Link from 'next/link';
import TestEmailButton from './TestEmailButton';
import Image from 'next/image';
import {
  MagnifyingGlassCircleIcon,
  Cog6ToothIcon,
  BellAlertIcon
} from "@heroicons/react/24/outline";
import { FaArrowDown, FaAlignJustify } from "react-icons/fa";
import { Input } from '@/components/ui/input';
import { usePathname } from 'next/navigation';

const NavAdmin = () => {

  {/* Get the current route */}
const currentRoute = usePathname();

    const { data: session, status } = useSession()
    const [state, setState] = useState(false)

    const menus = [
      { title: "Login", path: "/auth/signin" },
      { title: "Register", path: "/auth/signup" },
    ]

    return (
      // TODO: make sticky
        <nav className=" bg-white sticky top-0 w-full border-b md:border-0 max-w-screen h-16 z-50">
        <div className="items-center px-4 max-w-screen mx-auto md:flex md:justify-end md:px-8">
          <div className=" flex items-center justify-between  md:block">
          <Link href="/" className=' absolute top-6 max-md:left-[96px] lg:left-[154px] '>
              <Image src="/images/logo.png" alt="logo" width={360} height={360} className="z-50 max-sm:w-28 max-sm:h-28 h-44 w-44 motion-safe:animate-pulse" />
            </Link>
            <div className="md:hidden">
              
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                <FaAlignJustify />
              </button>
            </div>
          </div>
          <div
            className={`flex justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className=" max-sm:bg-white max-sm:grid max-sm:place-items-center max-sm:h-screen max-sm:w-full justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <h4 className='capitalize text-2xl font-bold text-blue-600'>{currentRoute.substring(1, 35)}</h4>
           

            {/* <ul className=" py-4 justify-center items-center  space-y-4 md:flex md:space-x-6 md:space-y-0"> */}
          <div className="relative flex justify-end items-center text-gray-400 focus-within:text-gray-600">
        <MagnifyingGlassCircleIcon className="w-5 h-5 absolute ml-3 pointer-events-none"/>
        <Input
          type="text"
          name="search"
          placeholder="Search talk"
          aria-label="Search talk"
          className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        />
      </div>
      <div className="flex gap-4">
      <div className="w-8 h-8 bg-gray-500 rounded-full p-2">
                <Link href={'/'} ><Cog6ToothIcon /></Link>
              </div>
              <div className="w-8 h-8 bg-gray-500 rounded-full p-2">
              <Link href={'/'} >
                <BellAlertIcon />
                </Link>
              </div>

            {session && session.user?.image  ? (
                    <>  
                    <Link href={'/profile'} >
                    <Image src={session.user.image} alt="avatar" 
                          width={36} height={36} 
                          className='w-8 h-8 rounded-full '/> 
                    </Link>
                    </>
                ) : (
                <>
                {menus.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-white hover:bg-blue-600 hover:py-2 hover:px-4 hover:rounded">
                  <Link href={item.path}>{item.title}</Link>
                </li>
                ))}
              </>
              )}
            {/* </ul> */}
            </div>
            
            </ul> 
          </div>
          <div>
          
          </div>
        </div>
      </nav>
     
    );
};

export default NavAdmin;
