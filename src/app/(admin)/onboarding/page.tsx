
import Image from "next/image"
import { FaHammer, FaRegHandshake, FaWhatsapp, FaUsers, FaAward } from "react-icons/fa6";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full ">
      <div className="relative z-10">
      <Image src={'/images/coverboard.png'} width={625} height={562} className="w-full h-72" alt="cover photo" />
        
        <div className=" text-center py-4 pl-52">
        <h4 className="text-center text-blue-600 text-3xl font-bold">WELCOME! <br />Follow the steps below to complete your onboarding!</h4>
    <div className="border-b-2 border-blue-600 w-40 mx-auto pt-4" />
        </div>
        </div>
        <div className="container my-2">
    
    <div className="flex flex-wrap-reverse  justify-items-start items-center space-y-4 py-4 mx-auto">

      



    <div className="w-full mx-auto md:m-8 md:w-4/5 md:h-64 md:flex justify-items-center items-center bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
      <div className="w-1/2 pl-8">
    <div className="rounded-full w-40 h-40 bg-gradient-to-r from-slate-700 from-40%  to-white to-90% flex justify-center items-center">
  <div className="rounded-full bg-white w-32 h-32 relative z-0">

    <div className="absolute inset-0 flex justify-center items-center z-10">
      <FaHammer className="text-5xl text-black"/>
    </div>
  </div>
</div>
</div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-bold">
      01. Sign Disclaimer
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black dark:white">
      Please check your inbox for an email titled “[Attention] Sign Phoenix Creed Disclaimer” or click the button below.
      </div>
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href={''} className="font-bold px-4 py-2 border-2 rounded-xl border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>


<div className="w-full mr-4 md:w-1/2  md:h-64 md:flex justify-items-center items-center bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
<div className="w-1/2 pl-8">
    <div className="rounded-full w-40 h-40 bg-gradient-to-r from-slate-700 from-40%  to-white to-90% flex justify-center items-center">
  <div className="rounded-full bg-white w-32 h-32 relative z-0">

    <div className="absolute inset-0 flex justify-center items-center z-10">
      <FaRegHandshake className="text-5xl  text-black"/>
    </div>
  </div>
</div>
</div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-bold">
      02. Welcome Video
      </p>
    </blockquote>
    <figcaption className="font-medium">
    <div className="text-black dark:white">
      Watch the welcome video to have an understanding of how to benefit the most from this platform.
      </div>
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href={''} className="font-bold px-4 py-2 border-2 rounded-xl border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>

      

<div className="w-full mr-4 md:w-2/5 md:h-64 md:flex justify-items-center items-center bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
      <div className="w-1/2 pl-8">
    <div className="rounded-full w-40 h-40 bg-gradient-to-r from-slate-700 from-40%  to-white to-90% flex justify-center items-center">
  <div className="rounded-full bg-white w-32 h-32 relative z-0">

    <div className="absolute inset-0 flex justify-center items-center z-10">
      <FaWhatsapp className="text-5xl  text-black"/>
    </div>
  </div>
</div>
</div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-bold">
      03. Join Whatsapp Group
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black dark:white">
      kindly Join our whatsapp group.
      </div>
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href='https://chat.whatsapp.com/HJwKgkuugWULNcQm3JKIFv' className="font-bold px-4 py-2 rounded-xl border-2 border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>

     

<div className="w-full mr-4 md:w-2/5 md:h-64 md:flex justify-items-center items-center bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
      <div className="w-1/2 pl-8">
    <div className="rounded-full w-40 h-40 bg-gradient-to-r from-slate-700 from-40%  to-white to-90% flex justify-center items-center">
  <div className="rounded-full bg-white w-32 h-32 relative z-0">

    <div className="absolute inset-0 flex justify-center items-center z-10">
      <FaUsers className="text-5xl  text-black"/>
    </div>
  </div>
</div>
</div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-bold">
      04. Complete Lessons
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black dark:white">
      kindly Join our whatsapp group.
      </div>
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href={'/courses'} className="font-bold px-4 py-2 rounded-xl border-2 border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>

   
<div className="w-full mr-4 md:w-1/2 md:h-64 md:flex justify-items-center items-center bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
      <div className="w-1/2 pl-8">
    <div className="rounded-full w-40 h-40 bg-gradient-to-r from-slate-700 from-40%  to-white to-90% flex justify-center items-center">
  <div className="rounded-full bg-white w-32 h-32 relative z-0">

    <div className="absolute inset-0 flex justify-center items-center z-10">
      <FaAward className="text-5xl text-black"/>
    </div>
  </div>
</div>
</div>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-bold">
      05. Completion Certificate
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black dark:white">
      kindly Join our whatsapp group.
      </div>
      <div className="text-slate-700 dark:text-slate-500 py-4">
      <Link href={'/courses'} className="font-bold px-4 py-2 rounded-xl border-2 border-primary mr-4">Go Now</Link>
      </div>
    </figcaption>
  </div>
</div>

      
    </div>
    </div>
</div>
    
  )
}
