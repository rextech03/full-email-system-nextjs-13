"use client";
import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaArrowDown, FaAlignJustify } from "react-icons/fa";
import { usePathname } from 'next/navigation';

// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {

  
{/* Get the current route */}
const currentRoute = usePathname();

  const { data: session, status } = useSession()

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });
  return (
    
    <div 
    className="bg-white h-full  md:w-full md:sticky md:top-16 md:z-0 top-0 -z-20 fixed"
      // className={classNames({
      //   "flex flex-col justify-between": true, // layout
      //   "bg-gray-100 text-zinc-50": true, // colors
      //   "md:w-full md:sticky md:top-16 md:z-0 top-0 -z-20 fixed": true, // positioning
      //   "md:h-full h-full w-[300px]": true, // for height and width
      //   "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
      //   "-translate-x-full ": !open, //hide sidebar to the left when closed
      // })}
      ref={ref}
    >
      <nav 
      className="md:sticky grid justify-center items-center min-h-screen"
      // className="md:sticky top-0 md:top-16  "
      >
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
            
              <Link key={index} href={item.href} 
                  className={currentRoute === item.href
                  ? "bg-indigo-600 text-indigo-100 hover:bg-indigo-900 flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2"
                  : "text-grey-800 hover:bg-indigo-900 flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2"}
                  // className={classNames({currentRoute === "/some-path"
                  // ?
                  //   "text-indigo-100 hover:bg-indigo-900": true, //colors
                  //   "flex gap-4 items-center ": true, //layout
                  //   "transition-colors duration-300": true, //animation
                  //   "rounded-md p-2 mx-2 ": true, //self style
                  //   :
                  //   "text-gray-700"
                  // })}
                >
                  {item.icon} {item.label}
                
              </Link>

            );
          })}
           {session!.user?.role == "user" ? (
                <DropdownMenu >
                  <DropdownMenuTrigger  className=" text-indigo-100 hover:bg-indigo-900 flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2"><FaArrowDown  /> Manage</DropdownMenuTrigger>
                  <DropdownMenuContent className="text-indigo-900">
                    <DropdownMenuLabel><Link href="/users">Users</Link></DropdownMenuLabel>
                    <DropdownMenuLabel><Link href='/categories'>Category</Link></DropdownMenuLabel>
                    <DropdownMenuLabel><Link href='/courses'>Courses</Link></DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
              <>
              </>
              )} 
        </ul>
      </nav>
      {/* account  */}
      {/* <div className="border-t border-t-indigo-800 p-4">
        <div className="flex gap-4 items-center">
          <Image
            src={
              "https://res.cloudinary.com/dqojz5vft/image/upload/v1701209516/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs_chxbh2.jpg"
            }
            height={36}
            width={36}
            alt="profile image"
            className="rounded-full"
          />
          <div className="flex flex-col ">
            <span className="text-indigo-50 my-0">session!.user?.name</span>
            <Link href="/profile" className="text-indigo-200 text-sm">
              View Profile
            </Link>
          </div>
        </div>
      </div> */}

    </div>
  );
};
export default Sidebar;