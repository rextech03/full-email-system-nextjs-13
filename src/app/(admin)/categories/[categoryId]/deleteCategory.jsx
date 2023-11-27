"use client";
import { deleteCategoryAction } from "../../../actions/categoriescrud";
import { useState } from "react";

const DeleteCategory = ({ id }) => {
  const [pending, setPending] = useState(false);

  const handleDeleteCategory = async () => {
    setPending(true);
    await deleteCategoryAction(id);
  };

  return (
    <form>
      <button
        type="submit"
        onClick={handleDeleteCategory}
        className="btn btn-error btn-sm btn-outline"
        aria-disabled={pending}
        disabled={pending}
      >
        {pending && <span className="loading loading-spinner"></span>}
        Delete
      </button>
    </form>
  );
};

export default DeleteCategory;
