import { CopyPlus, ChartColumnIncreasing, SquareLibrary } from "lucide-react";

type TypeNavLinks = {
  href: string;
  label: string;
  icon: React.ReactNode;
}[];

const size = "36";
const color = "#F9A826";
const strokeWidth = 2;

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
