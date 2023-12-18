'use client';

import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { updateUserAction } from '../actions/userscrud';
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa6';


const UpdateProfile = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const { data: session, update } = useSession();

    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setIsLoading(true)
        setMessage("Updating profile...");
        // if (session && session.user) {
        //     session.user.email = email;
        // }
        const id = session?.user.id as string;
        const data = {id, name, email}
        updateUserAction(id, data)
        await update({
            ...session,
            user: {
                ...session?.user,
                name: name,
                email: email
            }
        })
        setMessage(message);
        router.push('/user/profile')
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Update Account
                </h1>
                <div className="space-y-4 md:space-y-6">
               
                    <div >
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name <span className="text-red-600">*</span></label>
                        <input type="text" name="name" id="name"  
                        value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="admin" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span className="text-red-600">*</span></label>
                        <div className="flex">
                        <input type="text"   value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="example@email.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-bl-lg rounded-tl-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    </div>
                    
                    
                    <button 
                    onClick={handleSubmit}
                    className="w-full text-white bg-black grid place-items-center items-center hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                     
                     {isLoading ? <div className="flex text-center gap-4"> <FaSpinner className="animate-spin"  /> <p>Updating Profile</p></div> : 'Update Account'}
                    </button>
                    
                    </div>
                {/* </form> */}
              
            </div>
        </div>
    </div>
  </div>
        // <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        //     <label>Name:</label>
        //      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        //      <label>Email:</label>
        //      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
           
        //     <button onClick={handleSubmit}>Edit Profile</button>

        //     <p>{message}</p>

        //     {/* <button onClick={() => console.log(session)}>log console</button> */}
        // </div>
    );
};

export default UpdateProfile;
