import { redirect } from "next/navigation";
import prisma from "./prisma";

type categoryData = {
  title: string;
  content: string | null;
  published: boolean;
  // featuredImage: string | null;
  grouperId: string;
  }

  type updateCategoryData = {
    title: string;
    content: string | null;
    published: boolean;
    grouperId: string;
  }

  type uploadData = {
    id: string,
    featuredImage: string | null;
  }
  
export const getCategories = async () => {
  try {
    const category = await prisma.category.findMany();
    return { category };
  } catch (error) {
    return { error };
  }
};

export const getCategory = async (id: string) => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
      include: {
        grouper: {},
        posts: {},
      },
    });
    return { category };
  } catch (error) {
    return { error };
  }
};

export const createCategory = async (categoryData: categoryData) => {
  try {
    const newCategory = await prisma.category.create({ data: categoryData });
    return { category: newCategory };
  } catch (error) {
    return { error };
  }
};

export const updateCategory = async (id:string, categoryData:updateCategoryData) => {
  try {
    await prisma.category.update({ where: { id }, data: categoryData });
    return { category: categoryData };
  } catch (error) {
    return { error };
  }
};

export const deleteCategory = async (id:string) => {
  try {
    await prisma.category.delete({ where: { id } });
    return redirect("/categories");
  } catch (error) {
    return { error };
  }
};

export const uploadImage = async ( uploadData:uploadData) => {
  console.log(uploadData);
  try {
    await prisma.category.update({ where: { id: uploadData.id }, data: uploadData });
    return { category: uploadData };
  } catch (error) {
    return { error };
  }
};