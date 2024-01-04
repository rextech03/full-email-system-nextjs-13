"use client"
import { useState } from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
// import { getServerSession } from 'next-auth/next';
import { useSession } from "next-auth/react"
import Link from 'next/link';
import TestEmailButton from './TestEmailButton';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaArrowDown, FaAlignJustify } from "react-icons/fa";

const NewNavbar = () => {
    const { data: session, status } = useSession()
    const [state, setState] = useState(false)

    const pagesmenu = [
        { title: "Who we are", path: "/about" },
        { title: "What we Offer", path: "/services" },
        { title: "What You Gain", path: "/offers" },
        
      ]

    const menus = [
      { title: "Login", path: "/auth/signin" },
   
    ]

    return (
        <nav className="bg-white sticky top-0 w-full border-b md:border-0 max-w-screen h-12 z-50">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:justify-between md:px-8 xl:px-1">
          <div className="flex items-center justify-between  md:block">
            <div className='md:hidden'></div>
            <Link href="/" className='absolute top-6 max-sm:left-[124px]'>
              <Image src="/images/logo.png" alt="logo" width={180} height={180} className="h-32 w-32 motion-safe:animate-pulse" />
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
            className={`text-center max-sm:h-screen max-sm:flex-col max-sm:space-y-8 max-sm:place-items-center  md:flex md:justify-between   md:w-3/4 pb-3 mt-4 md:pb-0    ${
                state ? "block" : "hidden"
              }`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {pagesmenu.map((item, idx) => (
                <li key={idx} className="  text-black ">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {session && session.user?.email ? (
                    <>
                      <DropdownMenu>
                      <DropdownMenuTrigger> <div className="flex bg-gray-200 justify-items-center items-center  rounded p-2 "><p className='pr-2'>{session.user?.name}</p><FaArrowDown  /></div></DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel><Link href='/dashboard'>Dashboard</Link></DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel><Link href='/user/profile'>Profile</Link></DropdownMenuLabel>
                        <DropdownMenuLabel><Link href='/user/profilePhoto'>Edit Profile Photo</Link></DropdownMenuLabel>
                        <DropdownMenuLabel><Link href='/auth/signout'>Sign out</Link></DropdownMenuLabel>
                      </DropdownMenuContent>
                    </DropdownMenu>
                             </>
                ) : (
                    <>
              {menus.map((item, idx) => (
                <li key={idx} className=" text-black ">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
              </>
              )}
            </ul>
          </div>
        </div>
      </nav>
        // <div className='w-full px-4 py-8 bg-gray-300 flex flex-row items-center gap-4'>
        //     <Link href='/'>Home</Link>
        //     <Link href='/dashboard'>Dashboard</Link>

        //     {session && session.user?.email ? (
        //         <>
        //             <Link href='/auth/signout'>Sign out</Link>
        //             <p>
        //                 <b>Signed in as {session.user?.email}</b>
        //             </p>
        //         </>
        //     ) : (
        //         <>
        //             <Link href='/auth/signin'>Sign in</Link>
        //             <Link href='/auth/signup'>Sign up</Link>
        //         </>
        //     )}

        //     <TestEmailButton />
        // </div>
    );
};

export default NewNavbar;
