import { deleteTask } from "@/utilities/actions";

export default function DeleteForm({ taskId }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <button className="btn btn-error btn-xs">delete</button>
    </form>
  );
}
