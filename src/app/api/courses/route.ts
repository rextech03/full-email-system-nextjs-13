import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/app/lib/prisma';
import { createCategory, updateCategory } from "../../lib/categoriescrud";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export async function GET() {
    try {
        const users = await prisma.user.findMany();
       
        return Response.json({users})
      } catch (error) {
        return Response.json( error );
      }
}

export async function POST (request: NextRequest) {
  
  const body = await request.json();
  console.log({ body });
 
  try {
    const categoryData = {
      title: body.title,
      content: body.content,
      published: body.published,
      grouperId: body.grouperId,
    };
    const { category } = await createCategory(categoryData);
    revalidatePath("/categories");
    return NextResponse.json({ status: "ok", message: "Category created with success", category });
  } catch (error) {
    return NextResponse.json({ status: "nok", message: "Failed to create category." });
  }
}

export async function PUT (request: NextRequest) {
  
  const body = await request.json();
  console.log({ body });
 
  try {
    const id = body.categoryId;
    const categoryData = {
      title: body.title,
      content: body.content,
      published: body.published,
      grouperId: body.grouperId,
    };
    const { category } = await updateCategory(id, categoryData);
    revalidatePath("/categories");
    revalidatePath(`/categories/${body.categoryId}`);
    return NextResponse.json({ status: "ok", message: "Category editted with success", category });
  } catch (error) {
    return NextResponse.json({ status: "nok", message: "Failed to edit category." });
  }
}

