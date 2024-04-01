import { TaskForm, TaskList } from "@/components";

export default function TaskPage() {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
    </div>
  );
}
