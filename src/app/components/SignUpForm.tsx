'use client';
import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react';
import { signUp } from '../actions/users/signUp';
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



export default function SignUpWithImage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setMessage("Signing up...");
        const message = await signUp(name, email, password);
        setMessage(message);
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
                  Create an account
                </CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to sign up
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">
                  
                    ConfirmPassword
                    
                    </Label>
                  <Input id="confirmPassword" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <span className=" text-blue-600 hover:underline text-sm">
                <Link href={"/auth/reset-password"}>
                  Forget password ?
                  </Link>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={handleSubmit}>Sign Up</Button>
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
              By clicking continue, you agree to our{" "}
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
  )
}


