"use server";

import { uploadImage, createUser, deleteUser, updateUser } from "../../lib/usercrud";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcryptjs';

// type userData = {
//   name: string | null,
//     email: string | null,
//     passwordHash: string | null,
//   }

//   const formData = new FormData();

export async function createUserAction(prevState: string, formData: any) {
  try {
    const passwordHash = bcrypt.hashSync(formData.get("password"), 10);
    const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
        passwordHash: passwordHash
    };
    const { user } = await createUser(userData);
    revalidatePath("/users");
    return { status: "ok", message: "User created with success", user };
  } catch (error) {
    return { status: "nok", message: "Failed to create user." };
  }
}

export async function updateUserAction(prevState:string, formData: any) {
  try {
    const id = formData.get("id");
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      // passwordHash: formData.get("password"),
    };
    console.log(userData)
    const { user, error } = await updateUser(id, userData);
    if (error) throw error;
    revalidatePath("/users");
    revalidatePath(`/users/${formData.get("id")}`);
    return { status: "ok", message: "User created with success", user };
  } catch (error) {
    return { status: "nok", message: "Failed to update user." };
  }
}

export async function deleteUserAction(id:string) {
  await deleteUser(id);
  revalidatePath("/users");
  redirect("/users");
}

export async function uploadImageAction( data: any ) {
  try {
    const id = data.categoryId;
    const postData = {
      id : data.categoryId,
      profileImage: data.result.secure_url, 
    };
   console.log(postData);
    const { user, error } = await uploadImage( postData);
    if (error) throw error;
    revalidatePath("/users");
    revalidatePath(`/users/${data.id}`);
    return { status: "ok", message: "User Profile Photo created with success", user };
  } catch (error) {
    return { status: "nok", message: "Failed to update User Profile Photo." };
  }
}