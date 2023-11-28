import Link from "next/link";
import Image from "next/image"
import { getPosts } from "../../lib/tutorialscrud";
import Deletetutorial from "./[courseId]/deleteTutorial";

      
const CoursesList = async () => {
  const  data  = await getPosts();
  const tutorials = data.posts;
  // console.log(tutorials);
  let counter = 1
  return (
    <div className="grid place-items-center min-h-screen">
     <table className="table-auto  divide-y divide-gray-200 dark:divide-gray-700 w-1/2">
   <thead>
     <tr>
       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Id</th>
      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Published</th>
       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Featured Image</th>
       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Actions</th>
     </tr>
   </thead>
   <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
    
     {tutorials?.map((tutorial) => (
        <tr key={tutorial.id} className="">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><p className="pr-4">{counter++}</p> </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/courses/${tutorial.id}`} className="">
            <span className="ml-2">{tutorial.title }</span>
          </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/courses/${tutorial.id}`} className="flex ">
            <span className="ml-2">{tutorial.content}</span>
          </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/courses/${tutorial.id}`} className="flex ">
            <span className="ml-2">{tutorial.published ?
           <p>Published</p> 
          : <p>UnPublished</p>}</span>
          </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/courses/${tutorial.id}`} className="flex ">
            <span className="ml-2">
              <Image 
              alt="featured Image" 
              src={tutorial.featuredImage}
              width={125}
              height={125}
              />
              </span>
          </Link>

          
          </td>
          <td className="flex px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Deletetutorial id={tutorial.id} />
            <Link href={`/courses/courseVideo/${tutorial.id}`} className='py-2 px-4 bg-black text-white rounded'>
          Edit Course Video
        </Link>
            </td>
        </tr>
      ))}
    
   
  </tbody>
</table>
   </div>
   
  
  );
};

export default CoursesList;
