"use client";

import { createTaskCustom } from "@/utilities/actions";
import { useFormStatus } from "react-dom";

//---
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn join-item btn-primary"
      disabled={pending}
    >
      {pending ? "please wait ..." : "create task"}
    </button>
  );
}

//---
export default function TaskFormCustom() {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          type="text"
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
}

//----------
