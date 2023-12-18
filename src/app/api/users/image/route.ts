import { NextResponse, NextRequest } from 'next/server';
import { uploadImage } from "../../../lib/usercrud";
import { revalidatePath } from "next/cache";

export async function PUT (request: NextRequest) {
  
  
  const body = await request.json();
  console.log({ body });
 
   
    try {
    //   const id = body.categoryId;
      const userData = {
        id : body.userId,
        profileImage: body.profileImage,
        
      };
      // console.log(userData);
      const { user } = await uploadImage(userData);
      revalidatePath("/users");
      revalidatePath(`/users/${body.categoryId}`);
      return NextResponse.json({ status: "ok", message: "user edited with success", user });
    } catch (error) {
      return NextResponse.json({ status: "nok", message: "Failed to edit user." });
    }
  }