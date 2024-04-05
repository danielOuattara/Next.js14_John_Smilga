import { deleteTask } from "@/utilities/actions";

type TypeDeleteFormProps = {
  taskId: string;
};

export default function DeleteForm({ taskId }: TypeDeleteFormProps) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <button className="btn btn-error btn-xs">delete</button>
    </form>
  );
}
