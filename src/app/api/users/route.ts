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
