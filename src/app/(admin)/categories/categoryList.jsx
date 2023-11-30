import Link from "next/link";

import Image from "next/image"
import { getCategories } from "../../lib/categoriescrud";
import DeleteCategory from "./[categoryId]/deleteCategory";

      
const CategoryList = async () => {
  const  data  = await getCategories();
  const categories = data.category;
  console.log(categories);
  let counter = 1
  return (

    <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map(category => (
                <tr key={category.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
                        <p>{counter++}</p>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{category.title}</p>
                        
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{category.content}</div>
                
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {category.published ?
           <p>Published</p> 
          : <p>UnPublished</p>}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Image 
              alt="featured Image" 
              src={category.featuredImage}
              width={125}
              height={125}
              />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-items-center items-center">
                    <Link href={`/categories/${category.id}`}  className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </Link>
                    <DeleteCategory id={category.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


//     <div className="grid place-items-center min-h-screen">
//      <table className="table-auto  divide-y divide-gray-200 dark:divide-gray-700 w-1/2">
//    <thead>
//      <tr>
//        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Id</th>
//       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
//        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
//        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Published</th>
//        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Featured Image</th>
//        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Actions</th>
//      </tr>
//    </thead>
//    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
    
//      {categories?.map((category) => (
//         <tr key={category.id} className="">
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><p className="pr-4">{counter++}</p> </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//             <Link href={`/categories/${category.id}`} className="">
//             <span className="ml-2">{category.title }</span>
//           </Link>
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//             <Link href={`/categories/${category.id}`} className="flex ">
//             <span className="ml-2">{category.content}</span>
//           </Link>
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//             <Link href={`/categories/${category.id}`} className="flex ">
//             <span className="ml-2">{category.published ?
//            <p>Published</p> 
//           : <p>UnPublished</p>}</span>
//           </Link>
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//             <Link href={`/categories/${category.id}`} className="flex ">
//             <span className="ml-2">
//               <Image 
//               alt="featured Image" 
//               src={category.featuredImage}
//               width={125}
//               height={125}
//               />
//               </span>
//           </Link>
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//             <DeleteCategory id={category.id} /></td>
//         </tr>
//       ))}
    
   
//   </tbody>
// </table>
//    </div>
   
  
  );
};

export default CategoryList;
