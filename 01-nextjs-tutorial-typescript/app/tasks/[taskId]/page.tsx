import EditForm from "@/components/EditForm";
import { getTask, getAllTasks } from "@/utilities/actions";
// import { getTask } from "@/utilities/actions-route-handlers";

import Link from "next/link";

type TypeProps = {
  params: {
    taskId: string;
  };
};

export default async function TaskPage({ params }: TypeProps) {
  const task = await getTask(params.taskId);

  if (!task) {
    <div className="mb-16">
      <Link href={"/tasks"} className="btn btn-accent">
        No Task Found: Back to tasks
      </Link>
    </div>;
  }

  return (
    <>
      <div className="mb-16">
        <Link href={"/tasks"} className="btn btn-accent">
          Back to tasks
        </Link>
      </div>
      <EditForm task={task!} />
    </>
  );
}

// this function SSR to SSG for all request on single task
export async function generateStaticParams() {
  const tasks = await getAllTasks();
  return tasks.map((task) => ({ taskId: task.taskId.toString() }));
}
