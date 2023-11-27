import Link from "next/link";
import CategoryList from "./categoryList";
const Users = () => {
  return (
    <section className="py-12 px-3">
      <div className="flex flex-row justify-between items-center px-3 mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <Link className="" href="/users/new">
          Create
        </Link>
      </div>
      <CategoryList />
    </section>
  );
};

export default Users;
