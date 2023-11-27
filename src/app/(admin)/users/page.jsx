import React from "react";
import UserList from "./userList";
import Link from "next/link";

const UsersPage = async () => {
  return (
    <>
      <div className=" py-4 px-8 flex  justify-between items-center">
        <h2 className="text-3xl">Users</h2>
        <Link className="py-2 px-4 bg-black text-white rounded" href="/users/new">
          Create
        </Link>
      </div>
      {/* <p className="hidden sm:flex">Select a user</p> */}
      <div className="">
        
        <UserList />
      </div>
    </>
  );
};

export default UsersPage;
