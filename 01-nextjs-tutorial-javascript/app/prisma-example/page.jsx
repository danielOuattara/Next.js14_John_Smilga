import prisma from "@/utilities/db";
import { revalidatePath } from "next/cache";
//---

export default async function PrismaExamplePage() {
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
  }
  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Prisma Example Page</h1>
      {tasks.map((task, index) => (
        <h2 key={task.id} className="text-xl py-2">
          n°{index + 1} : {task.content}
        </h2>
      ))}
    </div>
  );
}

//---

async function prismaHandlers() {
  console.log("prisma example ");

  // await prisma.task.create({
  //   data: {
  //     content: "wake up & work your Typescript",
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  revalidatePath("/tasks");

  return allTasks;
}
