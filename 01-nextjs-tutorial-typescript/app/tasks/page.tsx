import { TaskForm, /* TaskFormCustom, */ TaskList } from "@/components";

export default function TaskPage() {
  return (
    <div className="max-w-lg">
      <TaskForm />
      {/* <TaskFormCustom /> */}
      <TaskList />
    </div>
  );
}
