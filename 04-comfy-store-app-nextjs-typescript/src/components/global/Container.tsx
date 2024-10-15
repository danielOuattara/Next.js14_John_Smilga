import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8 border", className)}
    >
      {children}
    </div>
  );
}
