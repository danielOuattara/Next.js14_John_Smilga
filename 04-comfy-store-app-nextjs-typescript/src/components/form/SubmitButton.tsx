import { useFormStatus } from "react-dom";
import { cn } from "@/lib/cn";
import { ReloadIcon } from "@radix-ui/react-icons";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash2, LuPenSquare } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

type btnSize = "default" | "lg" | "sm";

type TypeProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export default function SubmitButton({
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
