"use server";

import { uploadVideo, uploadImage, createPost, deletePost, updatePost } from "../../lib/tutorialscrud";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPostAction(data: any) {
  try {
    
    const postData = {
      title: data.title,
      content: data.content,
      published: data.published,
      // featuredImage: data.result.secure_url,
      authorId: data.authorId,
      sectionId: data.sectionId,
      // courseVideo: data.courseVideo,
      finalCourse: data.finalCourse,
        
    };
    const { post } = await createPost(postData);
    revalidatePath("/tutorials");
    return { status: "ok", message: "Tutorial created with success", post };
  } catch (error) {
    return { status: "nok", message: "Failed to create tutorial." };
  }
}

export async function updatePostAction( data:any) {
  try {
    const id = data.id;
    const postData = {
      title: data.title,
      content: data.content,
      published: data.published,
      featuredImage: data.result.secure_url,
      authorId: data.authorId,
      sectionId: data.sectionId,
      finalCourse: data.finalCourse,    
    };
    // console.log(id);
    const { post, error } = await updatePost(id, postData);
    if (error) throw error;
    revalidatePath("/tutorials");
    revalidatePath(`/tutorials/${data.id}`);
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
    const postData = {
      id : data.categoryId,
      featuredImage: data.result.secure_url, 
    };
   console.log(postData);
    const { post, error } = await uploadImage( postData);
    if (error) throw error;
    revalidatePath("/courses");
    revalidatePath(`/courses/${data.id}`);
    return { status: "ok", message: "Course created with success", post };
  } catch (error) {
    return { status: "nok", message: "Failed to update course." };
  }
}

export async function uploadVideoAction( data: any ) {
  try {
    // const id = data.categoryId;
    const postData = {
      id : data.courseId,
      courseVideo: data.result.secure_url, 
    };
   console.log(postData);
    const { post, error } = await uploadVideo( postData);
    if (error) throw error;
    revalidatePath("/courses");
    revalidatePath(`/courses/${data.id}`);
    return { status: "ok", message: "Category created with success", post };
  } catch (error) {
    return { status: "nok", message: "Failed to update category." };
  }
}