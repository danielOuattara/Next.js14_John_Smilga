import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-7xl xl:max-w-8xl px-8", className)}>
      {children}
    </div>
  );
}
