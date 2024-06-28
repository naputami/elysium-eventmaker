"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/utils/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function loginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

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
    "CIzfCYDqRD7IZrJq63TT0UIHrmFKiMLpw5SMHNA+Md8XbWu0pXWpV2tk4rm6bcAA4MdsdftPU0mx6pZq",
    { expiresIn: "1d" }
  );
  cookies().set("token", jwtToken, { httpOnly: true });

  //ini nanti diubah ke redirected to dashboard
  return {
    status: "success",
    message: "Login success",
  };
}
