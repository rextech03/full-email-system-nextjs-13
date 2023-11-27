"use client";

export default function Banner() {
 

  return (
    <div className="bg-black" style={{ 
        backgroundImage: `url(/images/banner.jpeg)`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '520px',
       }} 
        >
        
  
        <div className="isolate px-6 py-14 lg:px-8">
          
          <div className="mx-auto max-w-2xl py-2 sm:py-8 lg:py-2">
            
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Phoenix Academy
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to Phoenix creed academy
              where you get the best knowledge to make money online
              by exhibiting a pro founded Technical analysis skills
              set that can bring you money from home
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
               
                <a href="https://paystack.com/pay/accesscourses" className="py-2 px-4 rounded-full bg-black text-white hover:text-black hover:border-2 hover:border-black hover:bg-white hover:py-2 hover:px-4 hover:rounded-full">
                Get started <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
  )
}
