/**
 * The `useFormStatus` Hook provides status information
 * of the last form submission.
 *
 * The `useFormState` is a Hook that allows you to update
 * state based on the result of a form action.
 */

"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";

// import { createTaskCustom } from "@/utilities/actions";
import { createTaskCustom } from "@/utilities/actions-route-handlers";

const initialState: IInitialMessageState = {
  message: "",
};

export default function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "Success") {
      toast.success("Task Created");
      const form = document.getElementById("form") as HTMLFormElement;
      form.reset();
    }
    if (state.message.startsWith(`Error:`)) {
      toast.error(`ERROR`);
    }
  }, [state]);

  return (
    <form action={formAction} id="form">
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
          id="content"
          required
        />
        <SubmitButton action={"create task"} style={"join-item btn-primary"} />
      </div>
    </form>
  );
}
