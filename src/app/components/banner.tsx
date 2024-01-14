"use client";
import { motion, MotionConfig } from "framer-motion"

export default function Banner() {
 

  return (
    <div className="bg-black " style={{ 
        backgroundImage: `url(/images/banner.jpg)`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // height: '520px',
       }} 
        >
        
  
        <div className=" h-[42rem] w-full grid place-items-center lg:h-[46rem]">
          
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
              <p className="mt-6  leading-8  ">
              Welcome to Phoenix creed academy, where you get the best knowledge
              <br/>
              to make money online by exhibiting a profound Technical analysis
              <br />
              skills set that can bring you money from home.
              
              </p>
              </motion.div>
              
              <div className="mt-10 my-4 flex items-center justify-center gap-x-6">
              <motion.div
               initial={{ opacity: 0  }}
               animate={{ opacity: 1 }}
               >
                <a href="https://paystack.com/pay/accesscourses" className="py-4 px-12 rounded-full bg-white text-black">
                Get started
                 {/* <span aria-hidden="true">→</span> */}
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
