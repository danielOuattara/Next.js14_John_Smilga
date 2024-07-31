import { /*  TaskForm, */ TaskList, TaskFormCustom } from "@/components";
import { getAllTasks } from "@/utilities/actions";

export default function TaskPage() {
  return (
    <div className="max-w-lg">
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </div>
  );
}

export async function generateStaticParams() {
  const tasks = await getAllTasks();
  return tasks.map((task) => ({ taskId: task.taskId.toString() }));
}
