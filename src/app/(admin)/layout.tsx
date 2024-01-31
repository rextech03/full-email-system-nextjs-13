"use client";
import { getServerSession } from 'next-auth/next';
import { useState} from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import NavAdmin from '../components/NavAdmin';
import Footer from '../components/Footer';
import  Sidebar  from '../components/sidebar';
import { useSession } from "next-auth/react"

interface ProtectedLayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout =  ({children}: ProtectedLayoutProps) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
    // const session = await getServerSession(authOptions);
    const { data: session, status } = useSession()
    if(!session || !session.user?.email) {
        return (
            <div>
                This is protected and you do not have access to it.
            </div>
        )
    }

  return (
    <>
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        {/* <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} /> */}
        <NavAdmin />
      </div>
    
      <div className="min-h-screen md:max-w-screen flex">
        <div className="w-1/6">
    <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </div>
    <div className="w-5/6">
      {children}</div>
      </div>
        <Footer />
        </div>
    </>
  );
}

export default ProtectedLayout