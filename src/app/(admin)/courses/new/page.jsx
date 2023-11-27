// "use client";
import { createPostAction } from "../../../actions/tutorialscrud";
import CourseForm from "../createCourseForm";

const CreateCourse = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold pl-8">Create new Course</h2>
      <CourseForm action={createPostAction} />
    </div>
  );
};

export default CreateCourse;
