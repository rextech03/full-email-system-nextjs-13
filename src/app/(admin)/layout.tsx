import { getServerSession } from 'next-auth/next';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import NavAdmin from '../components/NavAdmin';
import Footer from '../components/Footer';

interface ProtectedLayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({children}: ProtectedLayoutProps) => {

    const session = await getServerSession(authOptions);

    if(!session || !session.user?.email) {
        return (
            <div>
                This is protected and you do not have access to it.
            </div>
        )
    }

  return (
    <>
    <NavAdmin />
        {children}
        <Footer />
    </>
  );
}

export default ProtectedLayout