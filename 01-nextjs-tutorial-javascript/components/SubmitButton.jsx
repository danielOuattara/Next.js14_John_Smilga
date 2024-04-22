"use client";

import { useFormStatus } from "react-dom";

//------

export default function SubmitButton({ action, style }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={`btn ${style}`} disabled={pending}>
      {pending ? "please wait" : `${action}`}
    </button>
  );
}
