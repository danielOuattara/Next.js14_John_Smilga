"use server";

import { Task } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const baseUrl = `http://localhost:3000/api/tasks`;

//----------
export async function getAllTasks(): Promise<Task[]> {
  const res = await fetch(baseUrl);
  return await res.json();
}

//-----------
export async function createTask(formData: FormData) {
  const content = formData.get("content");
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  revalidatePath("/tasks");
  return await res.json();
}

//-----------
export async function createTaskCustom(
  _prevState: IInitialMessageState,
  formData: FormData,
) {
  const content = formData.get("content");
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  revalidatePath("/tasks");
  return await res.json();
}

//----------
export async function deleteTask(formData: FormData) {
  const res = await fetch(baseUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ taskId: formData.get("taskId") }),
  });
  revalidatePath("/tasks");
}

//----------
export async function getTask(taskId: string) {
  const res = await fetch(`${baseUrl}/${taskId}`);
  return await res.json();
}

//---------
export async function editTask(formData: FormData) {
  const content = formData.get("content");
  const completed = formData.get("completed") === "on" ? true : false;
  const taskId = formData.get("taskId");

  await fetch(`${baseUrl}/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ taskId, content, completed }),
  });

  revalidatePath("/tasks");
  redirect("/tasks");
}
