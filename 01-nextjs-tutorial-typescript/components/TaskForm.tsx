import prisma from "@/utilities/db";
import { revalidatePath } from "next/cache";

export default function TaskForm() {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          type="text"
          name="content"
          required
        />
        <button type="submit" className="btn join-item btn-primary">
          create task
        </button>
      </div>
    </form>
  );
}

//------------------------------
async function createTask(formaData: FormData) {
  "use server";
  const content = formaData.get("content") as string;

  // some validation if necessary

  await prisma.task.create({
    data: { content },
  });

  // revalidate path
  revalidatePath("/tasks");
}
