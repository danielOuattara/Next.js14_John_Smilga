import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { useToast } from "../ui/use-toast";

export default function SignOutLink() {
  const { toast } = useToast();
  function handleLogout(): void {
    toast({ description: "Logging Out..." });
  }

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
}
