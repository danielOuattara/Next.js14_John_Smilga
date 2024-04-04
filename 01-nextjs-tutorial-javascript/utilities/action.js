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
  // some validation on content
  await prisma.task.create({
    data: { content: formData.get("content") },
  });
  // revalidate path
  revalidatePath("/tasks");
}

//----------
export async function deleteTask(formData) {
  await prisma.task.delete({ where: { taskId: formData.get("taskId") } });
  revalidatePath("/tasks");
}
