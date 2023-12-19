import Link from "next/link";
import Image from "next/image"
import { getPosts } from "../../lib/tutorialscrud";
import { getCategories } from "../../lib/categoriescrud";
import AdminCard from "@/app/components/adminCard";

export  default async function page() {
  const  data  = await getPosts();
  const tutorials = data.posts;

  const  categoriesData  = await getCategories();
  const categories = categoriesData.category;

  return (
    <div className="min-h-screen w-screen">
    <div className="bg-[url('/images/book.jpg')] ">
      
    <div className="py-4 mx-5" > 
    <h4 className="text-5xl font-bold my-4 text-white font-weight-bold">Latest Content</h4>

    <div className="flex gap-4 align-items-start">
    {tutorials?.slice(0, 4).map((tutorial) => (
    <div key={tutorial.id}>
      {tutorial.featuredImage && tutorial.content !== null ?
      <AdminCard  imageAlt={tutorial.title} imagePath={tutorial.featuredImage} title={tutorial.title} description={tutorial?.content} buttonText={'View More'} path={`/tutorial/${tutorial.id}`} />
      : <></>}
    </div>        
  ))}
</div>
</div>
</div>

<div className="container  py-2 bg-gray-400">
    <h4 className="text-5xl font-bold my-4 text-black font-weight-bold">Lessons</h4>
    <div className="flex flex-wrap gap-4 min-h-screen w-full  ">
     
    {categories?.map((category) => (
    <div key={category.id}>
      {category.featuredImage && category.content !== null ?
      <AdminCard key={category.id} imageAlt={category.title} imagePath={category.featuredImage} title={category.title} description={category?.content} buttonText={'View More'} path={`/tutorial/${category.id}`} />
      : <></>}
    </div>        
  ))}
 
     
    </div>

</div>
    </div>
  )
}
