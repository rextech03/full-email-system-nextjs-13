'use client';

import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa6'
import Image from 'next/image';
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



const SignInForm = () => {
    const router = useRouter();

    const { status, } = useSession();
    // console.log(session);
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async () => {
        setMessage('Signing in...');
        setIsLoading(true);
        
        try {
            const signInResponse = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if(!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials");
            } else {
                router.refresh();
            }

        } catch(err) {
            console.log(err);
        }

        setMessage(message);
        
    };

    useEffect(() => {
        if (status === 'authenticated') {
            // router.refresh();
            router.push('/dashboard');
        }
    }, );

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    return (
      <>
      <div className="hidden ">
        <Image
          src="/images/logo.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/images/logo.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative  h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
       
        <div className="relative hidden h-full items-center justify-center bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 grid place-content-center items-center text-lg font-medium">
            <Image src={"/images/logo.png"} alt="logo" width={124} height={124} className="w-64 h-64" />
            Phoenix Creed Academy
          </div>
         
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">
                  Login to your account
                </CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to log in
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                
                <div className="grid gap-2">
                  <Label htmlFor="email">Email:</Label>
                  <Input id="email" type="email" placeholder="" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password:</Label>
                  <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                
               
                <span className=" text-blue-600 hover:underline text-sm">
                <Link href={"/auth/reset-password"}>
                  Forget password ?
                  </Link>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={handleSubmit}> {isLoading ? <div className='flex justify-items-center items-center gap-2'>
                      <FaSpinner className="animate-spin"  /> <p>Signing In</p>
                     </div> :  "Sign In"}</Button>
                <p className="mt-2 text-xs text-center text-gray-700">
                  {" "}
                  Already have an account?{" "}
                  <span className=" text-blue-600 hover:underline">
                    <Link href={"/auth/signin"}>
                    Sign In
                    </Link>
                  </span>
                </p>
                <p>{message}</p>
              </CardFooter>
            </Card>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking sign in, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  //       <div className="bg-gray-50 dark:bg-gray-900">
  //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  //       <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
  //           <Image className="w-8 h-8 mr-2" src="/images/logo.png" width={120} height={46} alt="logo" />
  //           Phoenix Creed Academy
  //       </a>
  //       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  //           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  //               <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
  //                   Sign in to the dashboard
  //               </h1>
  //               <div className="space-y-4 md:space-y-6">
  //               {/* <form className="space-y-4 md:space-y-6" method="POST" onSubmit={(e) => onSubmit} > */}
  //                   <div >
  //                       <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span className="text-red-600">*</span></label>
  //                       <input type="email" name="email" id="email"  
  //                       value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="admin" required />
  //                   </div>
  //                   <div>
  //                       <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password <span className="text-red-600">*</span></label>
  //                       <div className="flex">
  //                       <input type={showPassword ? "text" : "password"}  value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-bl-lg rounded-tl-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    
  //                       <button
  //         className="flex items-center px-4 text-gray-600 bg-gray-200 rounded-br-lg rounded-tr-lg"
  //         onClick={togglePasswordVisibility}
  //       >
  //         {showPassword ? (
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth={1.5}
  //             stroke="currentColor"
  //             className="w-5 h-5"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
  //             />
  //           </svg>
  //         ) : (
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth={1.5}
  //             stroke="currentColor"
  //             className="w-5 h-5"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
  //             />
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  //             />
  //           </svg>
  //         )}
  //       </button>
  
  //                   </div>
  //                   </div>
  //                   <div className="flex items-center justify-between">
  //                       <div className="flex items-start">
  //                           <div className="flex items-center h-5">
  //                             <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  />
  //                           </div>
  //                           <div className="ml-3 text-sm">
  //                             <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
  //                           </div>
  //                       </div>
  //                       {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
  //                   </div>
                    
  //                   <button 
  //                   onClick={handleSubmit}
  //                   className="w-full text-white bg-black grid place-items-center items-center hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
  //                    {isLoading ? <div className='flex justify-items-center items-center gap-2'>
  //                     <FaSpinner className="animate-spin"  /> <p>Logging in</p>
  //                    </div> :  "Login"}
  //                   </button>
                    
  //                   </div>
  //               {/* </form> */}
              
  //           </div>
  //       </div>
  //   </div>
  // </div>
       
    );
};

export default SignInForm;
