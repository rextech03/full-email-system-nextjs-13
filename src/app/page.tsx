import Image from 'next/image'
import Banner from "../app/components/banner";
import Card from "../app/components/card";

export default function Home() {
  const cardContent = [
    { 
      imagePath: "/images/chart.jpg",
      imageAlt: "learn forex",
      title: "Forex Mastery Course", 
      description: "Learn high technical analysis skills that would enable you extract money from the market with Confidence.", 
      buttonText: "Enroll",
      path: "https://paystack.com/pay/accesscourses" 
    },
    {
      imagePath: "/images/chart.jpg",
      imageAlt: "learn forex",
      title: "PCA NoteBook", 
      description: `Purchase our PCA notebook so as to understand in details what’s you’ve been taught and also widen your knowledge in the forex market.`, 
      buttonText: "Buy Now",
      path: "https://paystack.com/pay/materialsaccess" 
  },
  {
    imagePath: "/images/chart.jpg",
    imageAlt: "Private Mentorship",
    title: "Private Mentorship", 
    description: "Get the chance to learn with Phoenix privately in his daily session this will best help you concentrate more and tune up your skill in no time.", 
    buttonText: "Enroll",
    path: "https://paystack.com/pay/vipsection" 
},
  ]

  return (
    <>
      <Banner />

      <div className="  h-full bg-gray-200 w-full flex justify-center items-center">
            
      {/* <h2 className="text-black text-3xl text-center py-4 font-bold">Online Courses</h2> */}
      
      <div className="w-5/6 my-4 flex justify-between">
      {cardContent.map((item, idx) => (
      
        <Card key={idx} imageAlt={item.imageAlt} imagePath={item.imagePath} title={item.title} description={item.description} buttonText={item.buttonText} path={item.path} />
      ))}
    </div>
    
    </div>
    
    </>
  )
}
