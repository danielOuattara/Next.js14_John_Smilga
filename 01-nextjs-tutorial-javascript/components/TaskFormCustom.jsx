/**
 * The `useFormStatus` Hook provides status information
 * of the last form submission.
 *
 * The `useFormState` is a Hook that allows you to update
 * state based on the result of a form action.
 */

"use client";

import { createTaskCustom } from "@/utilities/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

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

const initialState = {
  message: "",
};

//---
export default function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "Success") {
      toast.success("task created ");
    }
    if (state.message.startsWith(`Error:`)) {
      toast.error(`ERROR`);
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* form message */}
      {state.message && state.message.startsWith(`Error:`) ? (
        <p className="mb-2 text-red-600">{state.message}</p>
      ) : state.message ? (
        <p className="mb-2 text-green-600">{state.message}</p>
      ) : null}

      {/* form input */}
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
