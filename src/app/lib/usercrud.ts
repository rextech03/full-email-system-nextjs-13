import { redirect } from "next/navigation";
import prisma from "./prisma";

type userData = {
    name: string;
    email: string;
    passwordHash: string
  }

  type updateUserData = {
    name: string;
    email: string;
    // passwordHash: string
  }
  
export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
};

export const getUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return { user };
  } catch (error) {
    return { error };
  }
};

export const createUser = async (userData: userData) => {
  try {
    const newUser = await prisma.user.create({ data: userData });
    return { user: newUser };
  } catch (error) {
    return { error };
  }
};

export const updateUser = async (id:string, userData:updateUserData) => {
  try {
    await prisma.user.update({ where: { id }, data: userData });
    return { user: userData };
  } catch (error) {
    return { error };
  }
};

export const deleteUser = async (id:string) => {
  try {
    await prisma.user.delete({ where: { id } });
    return redirect("/users");
  } catch (error) {
    return { error };
  }
};