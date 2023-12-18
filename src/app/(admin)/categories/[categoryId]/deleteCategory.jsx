"use client";
import { deleteCategoryAction } from "../../../actions/categoriescrud";
import { Button, buttonVariants } from "@/components/ui/button"
import { useState } from "react";

const DeleteCategory = ({ id }) => {
  const [pending, setPending] = useState(false);

  const handleDeleteCategory = async () => {
    setPending(true);
    await deleteCategoryAction(id);
  };

  return (
    <form>
      <Button
        type="submit"
        onClick={handleDeleteCategory}
        aria-disabled={pending}
        disabled={pending}
      >
        {pending && <span className="loading loading-spinner"></span>}
        Delete
      </Button>
    </form>
  );
};

export default DeleteCategory;
