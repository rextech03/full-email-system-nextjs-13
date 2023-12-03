import Link from "next/link";
import Image from "next/image"
import { getUsers } from "../../../../src/app/lib/usercrud";
import DeleteUser from "../users/[userId]/deleteUser";



const UserList = async () => {
  const data = await getUsers();
  const users = data.users;
  console.log(users);
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
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                {/* <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Profile Photo
                </th> */}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
               
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users?.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
                        <p>{counter++}</p>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {user.emailVerified ?
           <p>Verified</p> 
          : <p>Unverified</p>}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Image 
              alt="featured Image" 
              src={user.profileImage}
              width={125}
              height={125}
              className="h-10 w-10 rounded"
              />
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-items-center items-center gap-4">
                    <Link href={`/users/${user.id}`}  className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </Link>
                    <DeleteUser id={user.id} />
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


//     <div className="grid place-items-center min-h-screen">

     
//      <table className="table-auto  divide-y divide-gray-200 dark:divide-gray-700 w-1/2">
//    <thead>
//      <tr>
//        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Id</th>
//       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
//        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
//        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Actions</th>
//      </tr>
//    </thead>
//    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
    
//      {users?.map((user) => (
//         <tr key={user.id} className="">
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><p className="pr-4">{counter++}</p> </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//             <Link href={`/users/${user.id}`} className="">
//             <span className="ml-2">{user.name }</span>
//           </Link>
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//             <Link href={`/users/${user.id}`} className="flex ">
//             <span className="ml-2">{user.email}</span>
//           </Link>
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><DeleteUser id={user.id} /></td>
//         </tr>
//       ))}
    
   
//   </tbody>
// </table>
//    </div>
   
  
  );
};

export default UserList;
