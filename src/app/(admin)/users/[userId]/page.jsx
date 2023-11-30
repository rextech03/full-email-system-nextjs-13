import { getUser } from "../../../lib/usercrud";

// import Avatar from "@/app/components/Avatar";
import DeleteUser from "./deleteUser";
import Link from "next/link";

const User = async ({ params }) => {
  const { userId } = params;
  const { user } = await getUser(userId);

  if (!user) return null;
  return (
    <div className="min-h-screen grid place-items-center items-center">
    <div className='max-w-sm bg-gray-300 rounded overflow-hidden shadow-lg p-4'>
    
      <h3 className="font-bold text-xl mb-2">User Details</h3>
      
        <div>
          <h2 className="text-sm">Name: {user.name }</h2>
          <a className="text-sm" href={`mailto:${user.email}`}>Email: {user.email}</a>
        </div>
        <div className="flex justify-between py-2">
        <Link href={`/users/${userId}/edit`} className='py-2 px-4 bg-black text-white rounded'>
          Edit
        </Link>

        <Link href={`/users/profilePhoto/${userId}`} className='py-2 px-4 bg-black text-white rounded'>
          Edit Profile Photo
        </Link>

        <DeleteUser id={userId} />
        </div>
      </div>
    </div>
  );
};

export default User;
