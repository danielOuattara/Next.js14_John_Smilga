import Link from "next/link";
import { Button } from "../ui/button";
import { GiShoonerSailboat } from "react-icons/gi";
export default function Logo() {
  return (
    <Button size="logo" asChild>
      <Link href="/">
        <GiShoonerSailboat className="w-10 h-10" />
      </Link>
    </Button>
  );
}
