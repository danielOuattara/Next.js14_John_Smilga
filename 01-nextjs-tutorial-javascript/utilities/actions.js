"use server";

import prisma from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z, ZodError } from "zod";

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

//-----------
export async function createTaskCustom(prevState, formData) {
  "use server";
  // some validation on content here !
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const taskSchema = z.object({
    content: z.string().min(3),
  });

  const content = formData.get("content");

  try {
    taskSchema.parse({ content });

    await prisma.task.create({
      data: { content },
    });

    // revalidate path
    revalidatePath("/tasks");

    return { message: "Success" };
  } catch (error) {
    if (error instanceof ZodError) {
      return { message: `Error: ${error.issues[0].message}` };
    }
    return { message: `Error: ${error.message}` };
  }
}

//----------
export async function deleteTask(formData) {
  await prisma.task.delete({ where: { taskId: formData.get("taskId") } });
  revalidatePath("/tasks");
}

//----------
export async function getTask(taskId) {
  return await prisma.task.findUnique({ where: { taskId } });
}

//---------
export async function editTask(formData) {
  await prisma.task.update({
    where: { taskId: formData.get("taskId") },
    data: {
      content: formData.get("content"),
      completed: formData.get("completed") === "on" ? true : false,
    },
  });

  revalidatePath("/tasks");
  redirect("/tasks");
}
