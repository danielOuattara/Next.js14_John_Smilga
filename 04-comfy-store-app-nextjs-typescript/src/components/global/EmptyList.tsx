import { cn } from "@/lib/cn";

type TypeProps = {
  heading?: string;
  className?: string;
};

export default function EmptyList({
  heading = "No items found.",
  className,
}: TypeProps) {
  return <h2 className={cn("text-xl ", className)}>{heading}</h2>;
}
