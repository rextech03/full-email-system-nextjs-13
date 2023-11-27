import Link from "next/link";

// import Avatar from "../components/Avatar";
import { getPosts } from "../../lib/tutorialscrud";
import DeleteUser from "../users/[userId]/deleteUser";


const UserList = async () => {
  const { users } = await getUsers();
  let counter = 1
  return (
    <div class="grid place-items-center min-h-screen">

     
     <table class="table-auto  divide-y divide-gray-200 dark:divide-gray-700 w-1/2">
   <thead>
     <tr>
       <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Id</th>
      <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
       <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
       <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Actions</th>
     </tr>
   </thead>
   <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
    
     {users?.map((user) => (
        <tr key={user.id} className="">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><p className="pr-4">{counter++}</p> </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/users/${user.id}`} class="">
            <span className="ml-2">{user.name }</span>
          </Link>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/users/${user.id}`} className="flex ">
            <span className="ml-2">{user.email}</span>
          </Link>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><DeleteUser id={user.id} /></td>
        </tr>
      ))}
    
   
  </tbody>
</table>
   </div>
   
  
  );
};

export default UserList;
