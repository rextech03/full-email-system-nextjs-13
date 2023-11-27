import { getCategory } from "../../../lib/categoriescrud";

// import Avatar from "@/app/components/Avatar";
import DeleteCategory from "./deleteCategory";
import Link from "next/link";

const Category = async ({ params }) => {
  const { categoryId } = params;
  const { category } = await getCategory(categoryId);

  if (!category) return null;
  return (
    <div className="min-h-screen grid place-items-center items-center">
    <div className='max-w-md bg-gray-300 rounded overflow-hidden shadow-lg p-4'>
    
      <h3 className="font-bold text-xl mb-2">Category Details</h3>
      
        <div>
          <h2 className="text-sm">Title: {category.title }</h2>
          <p className="text-sm" >Description: {category.content}</p>
          <div>{category.published ?
           <p>Published</p> 
          : <p>UnPublished</p>}
          </div>
          {/* <p className="text-sm" >Created On: {category.createdAt}</p> */}
        </div>
        <div className="flex justify-between py-2">
        <Link href={`/categories/edit/${categoryId}`} className='py-2 px-4 bg-black text-white rounded'>
          Edit
        </Link>
        <Link href={`/categories/featuredImage/${categoryId}`} className='py-2 px-4 bg-black text-white rounded'>
          Edit Featured Image
        </Link>
        <DeleteCategory id={categoryId} />
        </div>
      </div>
    </div>
  );
};

export default Category;
