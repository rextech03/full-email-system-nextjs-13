import Link from "next/link";
import Image from "next/image"
import { getPosts } from "../../lib/tutorialscrud";
import DeleteTutorial from "./[courseId]/deleteTutorial";

      
const CoursesList = async () => {
  const  data  = await getPosts();
  const tutorials = data.posts;
  // console.log(tutorials);
  let counter = 1
  return (
    <div className="grid place-items-center min-h-screen">
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
                  No.
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
                  Content
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
                  Featured Image
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tutorials.map(tutorial => (
                <tr key={tutorial.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
                        <p>{counter++}</p>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{tutorial.title}</p>
                        
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{tutorial.content.substring(0, 45)}</div>
                
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {tutorial.published ?
           <p>Published</p> 
          : <p>UnPublished</p>}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Image 
              alt="featured Image" 
              src={tutorial.featuredImage}
              width={125}
              height={125}
              className="h-10 w-10 rounded"
              />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-items-center items-center gap-4">
                  <Link href={`/courses/${tutorial.id}`}  className="px-4 py-2 rounded bg-black text-white hover:text-indigo-900">
                      View
                    </Link>
                   
                    <DeleteTutorial id={tutorial.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
   
  
  );
};

export default CoursesList;
