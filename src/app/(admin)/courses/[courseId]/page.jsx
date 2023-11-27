import { getPost } from "../../../lib/tutorialscrud";

// import Avatar from "@/app/components/Avatar";
import Deletetutorial from "./deleteTutorial";
import Link from "next/link";

const Category = async ({ params }) => {
  const { courseId } = params;
  const  data  = await getPost(courseId);
  const course = data.post;

  if (!course) return null;
  return (
    <div className="min-h-screen grid place-items-center items-center">
    <div className='min-w-md bg-gray-300 rounded overflow-hidden shadow-lg p-4'>
    
      <h3 className="font-bold text-xl mb-2">Course Details</h3>
      
        <div>
          <h2 className="text-sm">Title: {course.title }</h2>
          <p className="text-sm" >Description: {course.content}</p>
          <video src={course.courseVideo} width={642} controls></video>
          <div>{course.published ?
           <p>Published</p> 
          : <p>UnPublished</p>}
          </div>
          <p className="text-sm" >Created On: <Date dateString={course.createdAt} /> </p>
        </div>
        <div className="flex justify-between space-x-4">
        <Link href={`/courses/edit/${courseId}`} className='py-2 px-4 bg-black text-white rounded'>
          Edit
        </Link>
        <Link href={`/courses/featuredImage/${courseId}`} className='py-2 px-4 bg-black text-white rounded'>
          Edit Featured Image
        </Link>
        <Link href={`/courses/courseVideo/${courseId}`} className='py-2 px-4 bg-black text-white rounded'>
          Edit Course Video
        </Link>
        <Deletetutorial id={courseId} />
        </div>
      </div>
    </div>
  );
};

export default Category;
