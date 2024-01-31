
import { getPosts } from "../../lib/tutorialscrud";
import { getCategories } from "../../lib/categoriescrud";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import TabProfile from "@/app/components/tabs/profile";
import OrdersTab from "@/app/components/tabs/orders";
import DownloadsTab from "@/app/components/tabs/downloads";
import PaymentsTab from "@/app/components/tabs/payments";

// import AdminCard from "@/app/components/adminCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export  default async function page() {

  // const session = await getServerSession(authOptions)
  // console.log(session);

  const  data  = await getPosts();
  const tutorials = data.posts;

  const  categoriesData  = await getCategories();
  const categories = categoriesData.category;

  return (
    
    <div className="min-h-screen w-full">

<Tabs defaultValue="account" className="m-8  ">
  <TabsList className="w-full justify-between px-8 rounded-lg bg-gray-200">
    <div>
    <TabsTrigger value="account"  className="py-2">Profile</TabsTrigger>
    <TabsTrigger value="orders">Orders</TabsTrigger>
    <TabsTrigger value="downloads">Downloads</TabsTrigger>
    <TabsTrigger value="payments">Payment Method</TabsTrigger>
    </div>
    <Button className=" bg-blue-800">LOG OUT </Button>
  </TabsList>
  <TabsContent value="account"><TabProfile /></TabsContent>
  <TabsContent value="orders"><OrdersTab /></TabsContent>
  <TabsContent value="downloads"><DownloadsTab /></TabsContent>
  <TabsContent value="payments"><PaymentsTab /></TabsContent>
</Tabs>



    {/* <div className="bg-[url('/images/book.jpg')] bg-cover bg-no-repeat bg-center ">
      
    <div className="py-4 mx-5" > 
    <h4 className="text-5xl font-bold my-4 text-white font-weight-bold">Latest Content</h4>

    <div className="flex flex-wrap gap-4 min-h-screen w-full  ">     
     {tutorials?.slice(0, 4).map((tutorial) => (
      
     <div key={tutorial.id}>
      
       {tutorial.featuredImage && tutorial.content !== null ?

       
       <AdminCard key={tutorial.id} imageAlt={tutorial.title} imagePath={tutorial.featuredImage} title={tutorial.title} description={tutorial?.content.slice(0, 16)} buttonText={'View More'} path={`/tutorial/complete/${tutorial.id}`} />
       : <></>}
     </div>        
   ))} 
     </div> 
    
</div>
</div>

<div className="px-8  py-2 bg-gray-400">
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

</div> */}
    </div>
  )
}
