"use client";
import { editTask } from "@/utilities/actions";

export default function EditForm({ task }) {
  return (
    <form
      action={editTask}
      className="max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg"
    >
      <input type="hidden" name="taskId" value={task.taskId} />

      {/* content */}
      <input
        type="text"
        required
        defaultValue={task.content}
        name="content"
        className="input input-bordered w-full"
      />

      {/* completed */}
      <div className="form-control my-4">
        <label className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-block btn-sm">edit</button>
    </form>
  );
}