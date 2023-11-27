"use server";

import { uploadImage, createCategory, deleteCategory, updateCategory } from "../../lib/categoriescrud";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createCategoryAction( data: any) {
  try {
    
    const categoryData = {
      title:  data.title,
      content: data.content,
      published: data.published,
      featuredImage: data.result.secure_url,
      grouperId: data.grouperId,
    };
    console.log(categoryData);
    const { category } = await createCategory(categoryData);
    revalidatePath("/categories");
    return { status: "ok", message: "Category created with success", category };
  } catch (error) {
    return { status: "nok", message: "Failed to create category." };
  }
}

export async function updateCategoryAction(prevState:string, formData: any) {
  try {
    const id = formData.get("id");
    const categoryData = {
      title: formData.get("title"),
      content: formData.get("content"),
      published: formData.get("published"),
      featuredImage: formData.get("featuredImage"),
      grouperId: formData.get("grouperId"),
    };
   
    const { category, error } = await updateCategory(id, categoryData);
    if (error) throw error;
    revalidatePath("/categories");
    revalidatePath(`/categories/${formData.get("id")}`);
    return { status: "ok", message: "Category created with success", category };
  } catch (error) {
    return { status: "nok", message: "Failed to update category." };
  }
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



export async function deleteCategoryAction(id:string) {
  await deleteCategory(id);
  revalidatePath("/categories");
  redirect("/categories");
}