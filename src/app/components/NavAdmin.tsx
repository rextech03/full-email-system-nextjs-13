"use client"
import React from 'react';
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

const NavAdmin = () => {
    const { data: session, status } = useSession()
    const [state, setState] = React.useState(false)

    const menus = [
      { title: "Login", path: "/auth/signin" },
      { title: "Register", path: "/auth/signup" },
      // { title: "About Us", path: "/your-path" },
      // { title: "Contact Us", path: "/your-path" },
    ]

    return (
        <nav className="bg-gray-300 w-full border-b md:border-0 max-w-screen">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:justify-between md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/dashboard">
              <Image src="/images/logo.png" alt="logo" width={240} height={180} className="h-12 w-12" />
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
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {session && session.user?.email ? (
                    <>  
                    <Link href='/dashboard'>Dashboard</Link>
                    <Link href='/onboarding'>Onboarding</Link>
                    <Link href=''>Welcome</Link>
                    <a href="https://paystack.com/pay/materialsaccess">Note Book</a>
                    <Link href='/tutorial'>Courses</Link>

                    <DropdownMenu>
                      <DropdownMenuTrigger> <div className="flex bg-gray-200 justify-items-center items-center  rounded p-2 "><p>Manage</p><FaArrowDown  /></div></DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel><Link href="/users">Users</Link></DropdownMenuLabel>
                        <DropdownMenuLabel><Link href='/categories'>Category</Link></DropdownMenuLabel>
                        <DropdownMenuLabel><Link href='/courses'>Courses</Link></DropdownMenuLabel>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* <DropdownMenu>
                      <DropdownMenuTrigger> <div className="flex bg-gray-200 justify-items-center items-center  rounded p-2 "><p className='pr-2'>{session.user?.name}</p><FaArrowDown  /></div></DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel><Link href="/user/profile">Profile</Link></DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel><Link href='/auth/signout'>Sign out</Link></DropdownMenuLabel>
                      </DropdownMenuContent>
                    </DropdownMenu> */}

                    </>
                ) : (
                <>
                {/* {menus.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-white hover:bg-blue-600 hover:py-2 hover:px-4 hover:rounded">
                  <Link href={item.path}>{item.title}</Link>
                </li>
                ))} */}
              </>
              )}
            </ul>
          </div>
          <div>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {session && session.user?.email ? (
                    <>  
          <DropdownMenu>
                      <DropdownMenuTrigger> <div className="flex bg-gray-200 justify-items-center items-center  rounded p-2 "><p className='pr-2'>{session.user?.name}</p><FaArrowDown  /></div></DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel><Link href="/user/profile">Profile</Link></DropdownMenuLabel>
                        <DropdownMenuLabel><Link href='/user/profile'>Profile</Link></DropdownMenuLabel>
                        <DropdownMenuLabel><Link href='/user/profilePhoto'>Edit Profile Photo</Link></DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel><Link href='/auth/signout'>Sign out</Link></DropdownMenuLabel>
                      </DropdownMenuContent>
                    </DropdownMenu>

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
            </ul>
          </div>
        </div>
      </nav>
     
    );
};

export default NavAdmin;
