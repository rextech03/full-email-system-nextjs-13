"use client";
import { deleteUserAction } from "../../../actions/userscrud";
import { useState } from "react";

const DeleteUser = ({ id }) => {
  const [pending, setPending] = useState(false);

  const handleDeleteUser = async () => {
    setPending(true);
    await deleteUserAction(id);
  };

  return (
    <form>
      <button
        type="submit"
        onClick={handleDeleteUser}
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

export default DeleteUser;
