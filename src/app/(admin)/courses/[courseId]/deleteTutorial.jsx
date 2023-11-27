"use client";
import { deleteCategoryAction } from "../../../actions/categoriescrud";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button"

const DeleteTutorial = ({ id }) => {
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
        // className="btn btn-error btn-sm btn-outline"
        aria-disabled={pending}
        disabled={pending}
      >
        {pending && <span className="loading loading-spinner"></span>}
        Delete
      </Button>
    </form>
  );
};

export default DeleteTutorial;
