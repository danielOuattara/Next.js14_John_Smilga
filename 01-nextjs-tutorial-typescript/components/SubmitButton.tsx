"use client";

import { useFormStatus } from "react-dom";

//------
type TypeProps = {
  action: string;
  style: string;
};

export default function SubmitButton({ action, style }: TypeProps) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={`btn ${style}`} disabled={pending}>
      {pending ? "please wait" : `${action}`}
    </button>
  );
}
