"use client";

import { editTask } from "@/utilities/actions";
// import { editTask } from "@/utilities/actions-route-handlers";

type TypeEditFormProps = {
  task: ITask;
};

export default function EditForm({ task }: TypeEditFormProps) {
  return (
    <form
      action={editTask}
      className="max-w-sm bg-base-100 p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="taskId" value={task.taskId} />

      {/* task content */}
      <input
        type="text"
        required
        defaultValue={task.content}
        name="content"
        className="input input-bordered w-full"
      />

      {/* task completed */}
      <div className="form-control my-4">
        <label className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            id="completed"
            defaultChecked={task.completed}
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        edit
      </button>
    </form>
  );
}
