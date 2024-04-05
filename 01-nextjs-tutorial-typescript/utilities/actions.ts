"use server";

import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { resolve } from "path";

export async function getAllTasks() {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

//-------------------
export async function createTask(formaData: FormData) {
  // some validation if necessary
  await prisma.task.create({
    data: { content: formaData.get("content") as string },
  });

  // revalidate path
  revalidatePath("/tasks");
}

//-------------------
export async function createTaskCustom(formaData: FormData) {
  // some validation if necessary
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await prisma.task.create({
    data: { content: formaData.get("content") as string },
  });
  // revalidate path
  revalidatePath("/tasks");
}

//-------------------
export async function deleteTask(formData: FormData) {
  await prisma.task.delete({
    where: { taskId: formData.get("taskId") as string },
  });
  revalidatePath("/tasks");
}

//-------------------
export async function getTask(taskId: string) {
  return await prisma.task.findUnique({ where: { taskId } });
}

//--------------------
export async function editTask(formaData: FormData) {
  await prisma.task.update({
    where: {
      taskId: formaData.get("taskId") as string,
    },
    data: {
      content: formaData.get("content") as string,
      completed: formaData.get("completed") === "on" ? true : false,
    },
  });

  redirect("/tasks");
}
