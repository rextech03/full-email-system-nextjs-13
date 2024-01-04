"use client";
import Banner from "../app/components/banner";
import Cards from "../app/components/card";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewFooter from "./components/NewFooter";
import AboutSection from "./components/about-section";
import Gain from "./components/gain";
import NewNavbar from "./components/newNavbar";
import WhatTeach from "./components/teach";


export default function Home() {
  // const { status, data: session, } = useSession();
  // console.log(session);
  const cardContent = [
    { 
      imagePath: "/images/coin.png",
      imageAlt: "learn forex",
      title: "Forex Mastery Course", 
      description: "Learn high technical analysis skills that would enable you extract money from the market with Confidence with our well curated mastery course.", 
      buttonText: "Enroll",
      path: "https://paystack.com/pay/accesscourses", 
      amount: "N350,000.00"
    },
    {
      imagePath: "/images/finance.png",
      imageAlt: "learn forex",
      title: "PCA NoteBook", 
      description: `Purchase our PCA notebook so as to understand in details what’s you’ve been taught and also widen your  knowledge in the forex market.`, 
      buttonText: "Buy Now",
      path: "https://paystack.com/pay/materialsaccess", 
      amount: "N100,000.00"
  },
  {
    imagePath: "/images/analysis.png",
    imageAlt: "Private Mentorship",
    title: "Private Mentorship", 
    description: "Get the chance to learn with Phoenix privately in his daily session this will best help you concentrate more and tune up your skill in no time and at your pace.", 
    buttonText: "Enroll",
    path: "https://paystack.com/pay/vipsection",
    amount: "N500,000.00"
},
  ]

  return (
    <>
     <NewNavbar />
      <Banner />
      <h3 className="pt-8 text-5xl font-bold text-center">Online Course</h3>
      <div className="h-full  w-full flex justify-center items-center">

      <div className=" w-full px-4  my-4 md:flex justify-between">
      
      {cardContent.map((item, idx) => (
     
        <Cards 
        key={idx} 
        imageAlt={item.imageAlt} 
        imagePath={item.imagePath} 
        title={item.title} 
        description={item.description} 
        buttonText={item.buttonText} 
        path={item.path} 
        amount={item.amount} 
         />
        
      ))}
    
    </div>
    
    </div>

        <div className="space-y-20">
    <AboutSection />

    <WhatTeach />

    <Gain />
    </div>
    
    <NewFooter />
    </>
  )
}
