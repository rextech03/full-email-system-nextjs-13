import { NextResponse, NextRequest } from 'next/server';
import { uploadVideo } from "../../../lib/tutorialscrud";
import { revalidatePath } from "next/cache";

export async function PUT (request: NextRequest) {
  
    const body = await request.json();
    console.log({ body });
   
    try {
    //   const id = body.categoryId;
      const categoryData = {
        id : body.categoryId,
        courseVideo: body.result.secure_url,
        
      };
      console.log(categoryData);
      const { post } = await uploadVideo(categoryData);
      revalidatePath("/categories");
      revalidatePath(`/categories/${body.categoryId}`);
      return NextResponse.json({ status: "ok", message: "Category editted with success", post });
    } catch (error) {
      return NextResponse.json({ status: "nok", message: "Failed to edit category." });
    }
  }