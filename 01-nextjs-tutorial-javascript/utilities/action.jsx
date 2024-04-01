"use server";

import prisma from "@/utilities/db";
import { revalidatePath } from "next/cache";

//----------
export async function getAllTasks() {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

//-----------
export async function createTask(formData) {
  const content = formData.get("content");
  // some validation on content
  await prisma.task.create({
    data: { content },
  });
  // revalidate path
  revalidatePath("/tasks");
}
