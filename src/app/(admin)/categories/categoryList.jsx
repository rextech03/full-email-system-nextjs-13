import Link from "next/link";

import Image from "next/image"
import { getCategories } from "../../lib/categoriescrud";
import DeleteCategory from "./[categoryId]/deleteCategory";

      
const CategoryList = async () => {
  const  data  = await getCategories();
  const categories = data.category;
  // console.log(categories);
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
    
     {categories?.map((category) => (
        <tr key={category.id} className="">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><p className="pr-4">{counter++}</p> </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/categories/${category.id}`} className="">
            <span className="ml-2">{category.title }</span>
          </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/categories/${category.id}`} className="flex ">
            <span className="ml-2">{category.content}</span>
          </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/categories/${category.id}`} className="flex ">
            <span className="ml-2">{category.published ?
           <p>Published</p> 
          : <p>UnPublished</p>}</span>
          </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/categories/${category.id}`} className="flex ">
            <span className="ml-2">
              <Image 
              alt="featured Image" 
              src={category.featuredImage}
              width={125}
              height={125}
              />
              </span>
          </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <DeleteCategory id={category.id} /></td>
        </tr>
      ))}
    
   
  </tbody>
</table>
   </div>
   
  
  );
};

export default CategoryList;
