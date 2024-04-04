import prisma from "@/utilities/db";

//---

export default async function PrismaExamplePage() {
  const tasks = await prismaHandlers();
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
  await prisma.task.create({
    data: {
      content: "wake up & work your Typescript",
    },
  });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
}
