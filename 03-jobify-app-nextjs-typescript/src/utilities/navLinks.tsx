import { CopyPlus, ChartColumnIncreasing, SquareLibrary } from "lucide-react";

type TypeNavLinks = {
  href: string;
  label: string;
  icon: React.ReactNode;
}[];

const size = 28;
const color = "#ffa348";
const strokeWidth = 1.5;

export const navLinks: TypeNavLinks = [
  {
    href: "/add-job",
    label: "add a job",
    icon: <CopyPlus size={size} color={color} strokeWidth={strokeWidth} />,
  },
  {
    href: "/jobs",
    label: "all jobs",
    icon: <SquareLibrary size={size} color={color} strokeWidth={strokeWidth} />,
  },
  {
    href: "/stats",
    label: "view stats",
    icon: (
      <ChartColumnIncreasing
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      />
    ),
  },
];
