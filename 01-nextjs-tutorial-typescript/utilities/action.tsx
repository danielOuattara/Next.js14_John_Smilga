"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function getAllTasks() {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

//-------------------
export async function createTask(formaData: FormData) {
  "use server";
  const content = formaData.get("content") as string;

  // some validation if necessary

  await prisma.task.create({
    data: { content },
  });

  // revalidate path
  revalidatePath("/tasks");
}
