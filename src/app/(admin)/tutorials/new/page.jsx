"use client";
import { createUserAction } from "../../../actions/userscrud";
import UserForm from "../createUserForm";

const CreateUser = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold pl-8">Create new Tutorial</h2>
      <UserForm action={createUserAction} />
    </div>
  );
};

export default CreateUser;
