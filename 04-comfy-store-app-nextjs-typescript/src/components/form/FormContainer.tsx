"use client";

import { useFormState } from "react-dom";
import { useToast } from "../ui/use-toast";
import { useEffect } from "react";

const initialState = {
  message: "",
};

type TypeProps = {
  action: actionFunction;
  children: React.ReactNode;
};

export default function FormContainer({ action, children }: TypeProps) {
  const [state, formAction] = useFormState(action, initialState);

  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
