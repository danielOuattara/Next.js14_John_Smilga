import { deleteTask } from "@/utilities/actions";
import SubmitButton from "./SubmitButton";

type TypeDeleteFormProps = {
  taskId: string;
};

export default function DeleteForm({ taskId }: TypeDeleteFormProps) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <SubmitButton action={"delete"} style={"btn-xs btn-error"} />
    </form>
  );
}
