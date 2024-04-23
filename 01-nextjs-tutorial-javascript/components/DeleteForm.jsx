"use client";

// import { deleteTask } from "@/utilities/actions";
import { deleteTask } from "@/utilities/actions-route-handlers";
import SubmitButton from "./SubmitButton";

export default function DeleteForm({ taskId }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <SubmitButton action={"delete"} style={"btn-xs btn-error"} />
    </form>
  );
}
