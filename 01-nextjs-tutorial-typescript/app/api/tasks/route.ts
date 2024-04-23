import prisma from "@/utilities/db";
import { z, ZodError } from "zod";

//-----

export async function GET() {
  const tasks = await prisma.task.findMany();
  return Response.json(tasks);
}

//-----

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    // some validation on content
    const taskSchema = z.object({
      content: z.string().min(3),
    });

    taskSchema.parse({ content });
    await prisma.task.create({
      data: { content },
    });

    return Response.json({ message: "Success" });
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json({ message: `Error: ${error.issues[0].message}` });
    }
    return Response.json({ message: `Error: something wen wrong` });
  }
}

//-----

export async function DELETE(request: Request) {
  const { taskId } = await request.json();
  if (!taskId) {
    return Response.json({ message: "taskId is required from the url" });
  }
  await prisma.task.delete({ where: { taskId } });
  return new Response("deleted successfully");
}
