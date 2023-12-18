"use server";

import { uploadImage, createUser, deleteUser, updateUser } from "../../lib/usercrud";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcryptjs';
import cloudinary from '@/lib/cloudinary';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

cloudinary.config({
  cloud_name: 'dqojz5vft', 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})



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

export async function updateUserAction(prevState:string, data: any) {
  try {
    const id = data.id;
    const userData = {
      name: data.name,
      email: data.email,
     
    };
    console.log(userData)
    const { user, error } = await updateUser(id, userData);
    if (error) throw error;
    revalidatePath("/users");
    revalidatePath(`/users/${id}`);
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

export async function editImage(formData: FormData) {
  
  const file = formData.get('image') as File;
  const userid = formData.get('userId');
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({
      tags: ['users']
    }, function (error, result) {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
      
      
        const id = userid as string
        const profileImage = result!.secure_url 
        const data = {id, profileImage }
        
        uploadImage(data)
  
      //   update({
      //     ...session,
      //     user: {
      //         ...session?.user,
      //         image: profileImage,
              
      //     }
      // })

    })
    .end(buffer);
    
    
  });
 

 
  revalidatePath(`/user/profilePhoto`)
  // router.push('/courses')
}