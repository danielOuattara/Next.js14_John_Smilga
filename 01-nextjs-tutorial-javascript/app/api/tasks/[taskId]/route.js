import prisma from "@/utilities/db";

//-----

export async function GET(_request, { params }) {
  const task = await prisma.task.findUnique({
    where: { taskId: params.taskId },
  });

  if (!task) {
    return Response.json({ message: "requested task not found " });
  }
  return Response.json(task);
}

//-----

export async function PATCH(request) {
  const { taskId, content, completed } = await request.json();
  await prisma.task.update({
    where: { taskId },
    data: { content, completed },
  });
  return new Response("OK");
}
