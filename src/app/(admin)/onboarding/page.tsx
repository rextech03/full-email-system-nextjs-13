
import Image from "next/image"
import { FaHammer, FaRegHandshake, FaWhatsapp, FaUsers, FaAward } from "react-icons/fa6";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-screen ">
        
        <div className="container my-2">
    <h4 className="text-center text-3xl">WELCOME! <br />Follow the steps below to complete your onboarding!</h4>
    
    <div className="flex flex-wrap gap-2 justify-content-center items-center py-4 mx-auto">

        {/* card */}
    <div className="w-full md:flex justify-items-center items-center bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
        <div className="p-8 rounded-full bg-black mx-4">
    <FaHammer className="text-white"/>
    </div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      01. Sign Disclaimer
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black dark:white">
      Please check your inbox for an email titled “[Attention] Sign Phoenix Creed Disclaimer” or click the button below
      </div>
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href={''} className="px-4 py-2 border-2 rounded-xl border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>


<div className="w-full md:flex justify-items-center items-center bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
        <div className="p-8 rounded-full bg-black mx-4">
    <FaRegHandshake  className="text-white"/>
    </div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      02. Welcome Video
      </p>
    </blockquote>
    <figcaption className="font-medium">
      {/* <div className="text-black dark:white">
      Please check your inbox for an email titled “[Attention] Sign Phoenix Creed Disclaimer” or click the button below
      </div> */}
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href={''} className="px-4 py-2 border-2 rounded-xl border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>

      

<div className="w-full md:flex justify-items-center items-center bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
        <div className="p-8 rounded-full bg-black mx-4">
    <FaWhatsapp className="text-white"/>
    </div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      03. Join Whatsapp Group
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black dark:white">
      kindly Join our whatsapp group.
      </div>
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href='https://chat.whatsapp.com/HJwKgkuugWULNcQm3JKIFv' className="px-4 py-2 rounded-xl border-2 border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>

     

        <div className="w-1/2 md:flex justify-items-center items-center bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
        <div className="p-8 rounded-full bg-black mx-4">
    <FaUsers className="text-white"/>
    </div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      04. Complete Lessons
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black dark:white">
      kindly Join our whatsapp group.
      </div>
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href={'/courses'} className="px-4 py-2 rounded-xl border-2 border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>

   
<div className="w-1/3 md:flex justify-items-center items-center bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
        <div className="p-8 rounded-full bg-black mx-4">
    <FaAward className="text-white"/>
    </div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      05. Completion Certificate
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black dark:white">
      kindly Join our whatsapp group.
      </div>
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href={'/courses'} className="px-4 py-2 rounded-xl border-2 border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>

      
    </div>
    </div>
</div>
    
  )
}
