"use server";

import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z, ZodError } from "zod";

//-------------------
export async function getAllTasks(): Promise<ITask[]> {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

//-------------------
export async function createTask(formaData: FormData): Promise<void> {
  // some validation if necessary
  await prisma.task.create({
    data: { content: formaData.get("content") as string },
  });

  // revalidate path
  revalidatePath("/tasks");
}

//-------------------
export async function createTaskCustom(
  _prevState: IInitialMessageState,
  formaData: FormData,
) {
  try {
    // some validation if necessary here !
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const taskSchema = z.object({ content: z.string().min(3) });
    const content = formaData.get("content");

    taskSchema.parse({ content });
    await prisma.task.create({
      data: { content: formaData.get("content") as string },
    });

    formaData.delete("content");
    // revalidate path
    revalidatePath("/tasks");
    return { message: "Success" };
  } catch (error) {
    if (error instanceof ZodError) {
      return { message: `Error: ${error.issues[0].message}` };
    }
    return { message: "Error" };
  }
}

//-------------------
export async function deleteTask(formData: FormData): Promise<void> {
  await prisma.task.delete({
    where: { taskId: formData.get("taskId") as string },
  });
  revalidatePath("/tasks");
}

//-------------------
export async function getTask(taskId: string): Promise<ITask | null> {
  return await prisma.task.findUnique({ where: { taskId } });
}

//--------------------
export async function editTask(formaData: FormData): Promise<void> {
  await prisma.task.update({
    where: {
      taskId: formaData.get("taskId") as string,
    },
    data: {
      content: formaData.get("content") as string,
      completed: formaData.get("completed") === "on" ? true : false,
    },
  });

  revalidatePath("/tasks");
  redirect("/tasks");
}
