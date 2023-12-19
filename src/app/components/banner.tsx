"use client";
import { motion, MotionConfig } from "framer-motion"

export default function Banner() {
 

  return (
    <div className="bg-black h-2/3 filter grayscale hover:grayscale-0" style={{ 
        backgroundImage: `url(/images/banner.jpeg)`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // height: '520px',
       }} 
        >
        
  
        <div className=" h-[24rem] w-full grid place-items-center lg:h-[52rem]">
          
          <div className="m-auto max-w-5xl py-12 sm:py-8 lg:py-2 px-16  rounded bg-transparent">
            
            <div className="text-center text-white ">
            <MotionConfig transition={{ duration: 1 }}>
              <motion.div
               initial={{ opacity: 0, x: -200 }}
               animate={{ opacity: 1, x: 0 }}
               >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Phoenix Creed Academy
              </h1>
              </motion.div>
              
              <motion.div
               initial={{ opacity: 0, x: 300 }}
               animate={{ opacity: 1, x: 0 }}
               >
              <p className="mt-6 text-lg leading-8 font-semibold ">
              Welcome to Phoenix creed academy
              where you get the best knowledge to make money online
              by exhibiting a pro founded Technical analysis skills
              set that can bring you money from home.
              </p>
              </motion.div>
              
              <div className="mt-10 my-4 flex items-center justify-center gap-x-6">
              <motion.div
               initial={{ opacity: 0  }}
               animate={{ opacity: 1 }}
               >
                <a href="https://paystack.com/pay/accesscourses" className="py-2 px-4 rounded-full bg-black text-white hover:text-black hover:border-2 hover:border-black hover:bg-white hover:py-2 hover:px-4 hover:rounded-full">
                Get started <span aria-hidden="true">→</span>
                </a>
                </motion.div>
                
              </div>
              </MotionConfig>
            </div>
          </div>
          
        </div>
      </div>
  )
}
