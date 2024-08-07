/**
 * The `useFormStatus` Hook provides status information
 * of the last form submission.
 *
 * The `useFormState` is a Hook that allows you to update
 * state based on the result of a form action.
 */

"use client";

import { createTaskCustom } from "@/utilities/actions";
// import { createTaskCustom } from "@/utilities/actions-route-handlers";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";

const initialState = {
  message: "",
};

export default function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.message) {
      setShowMessage(true); // Show message when state.message updates
    }
    const timer = setTimeout(() => {
      setShowMessage(false); // Hide message after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timeout
  }, [state]);

  useEffect(() => {
    if (state.message === "Success") {
      toast.success("task created successfully !");
      const form = document.getElementById("form");
      form.reset();
    }
    if (state.message.startsWith(`Error:`)) {
      toast.error(`ERROR: ${state.message}`);
    }
  }, [state]);

  return (
    <form action={formAction} id="form">
      {/* form message */}
      {showMessage && state.message && state.message.startsWith(`Error:`) ? (
        <p className="mb-2 text-red-600">{state.message}</p>
      ) : showMessage && state.message ? (
        <p className="mb-2 text-green-600">{state.message}</p>
      ) : (
        ""
      )}

      {/* form input */}
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          type="text"
          name="content"
          required
        />
        <SubmitButton action={"create task"} style={"join-item btn-primary"} />
      </div>
    </form>
  );
}

//-----
