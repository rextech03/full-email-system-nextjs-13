import Image from "next/image";
import { getCategoryPost } from "../../../lib/tutorialscrud";
import { getCategory } from "../../../lib/categoriescrud";
import Link from "next/link";
import AdminCard from "@/app/components/adminCard";

export default async function page({params}:{params: {categoryId: string}}) {
    const id = params.categoryId;

    const  categoryData  = await getCategory(id);
    const category = categoryData.category;

    const  data  = await getCategoryPost(id);
    const tutorial = data.post;


  

  return (
    <div>
      {/* <section> */}
        <section style={{backgroundImage: `url(${category?.featuredImage})`, height: 346 }} className={`py-5 text-center container grid place-items-center items-center  `} >
    <div className=" py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="font-bold text-3xl">{category?.title}</h1>
        <p className="font-bold text-3xl">{category?.content }</p>
         
      </div>
    </div>
  </section>

    <div className="container">

<div className="py-4">


     
        <div className="flex gap-4 align-items-start">
            {tutorial?.featuredImage && tutorial?.content !== null ?
           <AdminCard  imageAlt={tutorial.title} imagePath={tutorial.featuredImage} title={tutorial.title} description={tutorial?.content} buttonText={'View More'} path={`/tutorial/complete/${tutorial.id}`} />
            : <></> }
          </div>
        </div>
        </div>
        
      </div>
   
  )
}
