"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/utils/prisma";

export async function registerAction(_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
   return {
      status: "error",
      message: "All fields are required",
      data : {
        name,
        email,
        password
      }
   }
  }

  const namePattern = /^[A-Za-z\s]+$/

  if(!namePattern.test(name)){
    return {
      status: "error",
      message: "Name should only consist of alphabetic characters",
      data : {
        name,
        email,
        password
      }
   }
  }

  if(password.length < 8){
    return {
      status: "error",
      message: "Password must be more than 8 characters",
      data : {
        name,
        email,
        password
      }
   }
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });
  return { status: "success", message: "Registration Success. Please Login" };
}
