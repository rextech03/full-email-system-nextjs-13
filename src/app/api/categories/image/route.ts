import { NextResponse, NextRequest } from 'next/server';
import { uploadImage } from "../../../lib/categoriescrud";
import { revalidatePath } from "next/cache";

export async function PUT (request: NextRequest) {
  
    const body = await request.json();
    console.log({ body });
   
    try {
    //   const id = body.categoryId;
      const categoryData = {
        id : body.categoryId,
        featuredImage: body.result.secure_url,
        
      };
      // console.log(categoryData);
      const { category } = await uploadImage(categoryData);
      revalidatePath("/categories");
      revalidatePath(`/categories/${body.categoryId}`);
      return NextResponse.json({ status: "ok", message: "Category editted with success", category });
    } catch (error) {
      return NextResponse.json({ status: "nok", message: "Failed to edit category." });
    }
  }