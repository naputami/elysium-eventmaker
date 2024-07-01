"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createEventAction(_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const eventId = formData.get("eventId");

  if (!name || !email || !eventId) {
    return {
      success: false,
      message: "All fields must be completed before submission",
    };
  }

  await prisma.participant.create({
    data: {
      name,
      email,
      eventId,
    },
  });

  revalidatePath("/[eventid]", "page");

  return {
    success: true,
    message: "Event created",
  };
}
