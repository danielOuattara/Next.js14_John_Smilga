import prisma from "@/utilities/db";

//-----

type TypeProps = {
  params: {
    taskId: string;
  };
};

export async function GET(_request: Request, { params }: TypeProps) {
  const task = await prisma.task.findUnique({
    where: { taskId: params.taskId },
  });

  if (!task) {
    return Response.json({ message: "requested task not found " });
  }
  return Response.json(task);
}

//-----

export async function PATCH(request: Request) {
  const { taskId, content, completed } = await request.json();
  await prisma.task.update({
    where: { taskId },
    data: { content, completed },
  });
  return new Response("OK");
}
