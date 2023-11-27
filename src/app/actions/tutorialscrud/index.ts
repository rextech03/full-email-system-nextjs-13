"use server";

import { uploadImage, createPost, deletePost, updatePost } from "../../lib/tutorialscrud";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPostAction(data: any) {
  try {
    
    const postData = {
      title: data.title,
      content: data.content,
      published: data.published,
      featuredImage: data.result.secure_url,
      authorId: data.authorId,
      sectionId: data.sectionId,
      courseVideo: data.courseVideo,
      finalCourse: data.finalCourse,
        
    };
    const { post } = await createPost(postData);
    revalidatePath("/tutorials");
    return { status: "ok", message: "Tutorial created with success", post };
  } catch (error) {
    return { status: "nok", message: "Failed to create tutorial." };
  }
}

export async function updatePostAction(prevState:string, formData: any) {
  try {
    const id = formData.get("id");
    const postData = {
      title: formData.get("title"),
      content: formData.get("content"),
      published: formData.get("published"),
      featuredImage: formData.get("featuredImage"),
      authorId: formData.get("authorId"),
      finalCourse: formData.get("authorId"),
    };
    // console.log(userData)
    const { post, error } = await updatePost(id, postData);
    if (error) throw error;
    revalidatePath("/tutorials");
    revalidatePath(`/tutorials/${formData.get("id")}`);
    return { status: "ok", message: "Tutorial created with success", post };
  } catch (error) {
    return { status: "nok", message: "Failed to update tutorial." };
  }
}

export async function deleteUserAction(id:string) {
  await deletePost(id);
  revalidatePath("/tutorials");
  redirect("/tutorials");
}

export async function uploadImageAction( data: any ) {
  try {
    const id = data.categoryId;
    const categoryData = {
      id : data.categoryId,
      featuredImage: data.result.secure_url, 
    };
   console.log(categoryData);
    const { category, error } = await uploadImage( categoryData);
    if (error) throw error;
    revalidatePath("/categories");
    revalidatePath(`/categories/${data.id}`);
    return { status: "ok", message: "Category created with success", category };
  } catch (error) {
    return { status: "nok", message: "Failed to update category." };
  }
}