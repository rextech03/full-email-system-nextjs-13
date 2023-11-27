import React from "react";
import CategoryList from "./categoryList";
import Link from "next/link";

const UsersPage = async () => {
  return (
    <>
      <div className=" py-4 px-8 flex  justify-between items-center">
        <h2 className="text-3xl">Categories</h2>
        <Link className="py-2 px-4 bg-black text-white rounded" href="/categories/new">
          Create
        </Link>
      </div>
      <div className="">
        
        <CategoryList />
      </div>
    </>
  );
};

export default UsersPage;
