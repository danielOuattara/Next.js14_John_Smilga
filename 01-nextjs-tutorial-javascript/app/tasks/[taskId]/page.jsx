import EditForm from "@/components/EditForm";
import { getTask } from "@/utilities/actions";
import Link from "next/link";

export default async function TaskPage({ params }) {
  const task = await getTask(params.taskId);
  return (
    <div className="mb-16">
      <Link href={"/tasks"} className="btn btn-accent">
        Back to tasks
      </Link>
      <EditForm task={task} />
    </div>
  );
}
