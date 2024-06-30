"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/utils/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function loginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if(!email || !password){
    return {
      status: "error",
      message: "All fields all required",
      data: {
        email,
        password,
      },
    };
  }

  const findUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!findUser) {
    return {
      status: "error",
      message: "This email is unregistered. Plase sign up!",
      data: {
        email,
        password,
      },
    };
  }
  const isPasswordMatch = await bcrypt.compare(password, findUser.password);

  if (!isPasswordMatch) {
    return {
      status: "error",
      message: "Wrong Password",
      data: {
        email,
        password,
      },
    };
  }
  const payload = {
    id: findUser.id,
    name: findUser.name,
    email: findUser.email,
  };

  const jwtToken = jwt.sign(
    payload,
   process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  cookies().set("token", jwtToken, { httpOnly: true });

  //ini nanti diubah ke redirected to dashboard
  return {
    status: "success",
    message: "Login success",
  };
}
