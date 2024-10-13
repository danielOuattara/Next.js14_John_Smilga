import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GiFlexibleStar } from "react-icons/gi";

export default function Logo() {
  return (
    <Button size="default" asChild>
      <Link href="/">
        <GiFlexibleStar className="w-10 h-10" />
      </Link>
    </Button>
  );
}
