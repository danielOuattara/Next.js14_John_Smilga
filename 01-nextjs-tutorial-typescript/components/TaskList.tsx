import Link from "next/link";
import { DeleteForm } from "@/components";

// import { getAllTasks } from "@/utilities/actions";
import { getAllTasks } from "@/utilities/actions-route-handlers";

export default async function TaskList() {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show</h2>;
  }

  return (
    <ul className="mt-8">
      {tasks.map((task) => (
        <li
          key={task.taskId}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
        >
          <h2
            className={`text-lg capitalize ${
              task.completed ? "line-through" : ""
            }`}
          >
            {task.content}
          </h2>
          <div className="flex gap-6 items-center">
            <Link
              href={`/tasks/${task.taskId}`}
              className="btn btn-accent btn-xs"
            >
              edit
            </Link>
            <DeleteForm taskId={task.taskId} />
          </div>
        </li>
      ))}
    </ul>
  );
}
