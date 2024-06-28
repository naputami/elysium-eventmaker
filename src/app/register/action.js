"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/utils/prisma";

export async function registerAction(_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });
  return { status: "success" };
}
