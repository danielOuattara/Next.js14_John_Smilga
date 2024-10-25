import { CopyPlus, ChartColumnIncreasing, SquareLibrary } from "lucide-react";

const size = "36";
// const color = "#F9A826";
// const strokeWidth = 2;

export const navLinks: TypeNavLinks = [
  {
    href: "/jobs",
    label: "all jobs",
    icon: (
      <SquareLibrary
        size={size}
        // className="text-primary"
        // strokeWidth={strokeWidth}
      />
    ),
  },
  {
    href: "/stats",
    label: "view stats",
    icon: (
      <ChartColumnIncreasing
        size={size}
        // color={color}
        // className="text-primary"
        // strokeWidth={strokeWidth}
      />
    ),
  },
  {
    href: "/add-job",
    label: "add a job",
    icon: (
      <CopyPlus
        size={size}
        // className="text-primary"
        // color={color}
        // strokeWidth={strokeWidth}
      />
    ),
  },
];
