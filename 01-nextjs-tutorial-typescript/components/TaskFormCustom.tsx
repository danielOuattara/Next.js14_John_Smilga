"use client";

// import { TypeInitialMessageState } from "@/types";
import { createTaskCustom } from "@/utilities/actions";
import { useFormStatus, useFormState } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn join-item btn-primary"
      disabled={pending}
    >
      {pending ? "Please wait ..." : "create task"}
    </button>
  );
}

const initialState: IInitialMessageState = {
  message: null,
};

export default function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  return (
    <form action={formAction}>
      {/* form message */}

      {state.message ? <p className="mb-2">{state.message}</p> : null}

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

//------------------------------
