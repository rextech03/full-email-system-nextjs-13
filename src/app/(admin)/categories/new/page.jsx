// "use client";
import { createCategoryAction } from "../../../actions/categoriescrud";
import CategoryForm from "../createCategoryForm";

const CreateUser = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold pl-8">Create new category</h2>
      <CategoryForm action={createCategoryAction} />
    </div>
  );
};

export default CreateUser;
