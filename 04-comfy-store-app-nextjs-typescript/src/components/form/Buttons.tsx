"use client";

import { useFormStatus } from "react-dom";
import { cn } from "@/lib/cn";
import { ReloadIcon } from "@radix-ui/react-icons";
import { LuTrash2, LuPenSquare } from "react-icons/lu";
import { Button } from "@/components/ui/button";
// import FormContainer from "./FormContainer";
// import { editProduct } from "@/utils/actions";

type btnSize = "default" | "lg" | "sm";

type TypeProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: TypeProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type TypeAction = {
  actionType: "edit" | "delete";
};

export const IconActionButton = ({ actionType }: TypeAction) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : actionType === "edit" ? (
        <LuPenSquare className="size-6" />
      ) : (
        <LuTrash2 className="size-6" />
      )}
    </Button>
  );
};
