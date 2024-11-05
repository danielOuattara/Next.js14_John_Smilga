import { AlignCenter } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { navLinks } from "@/utilities/navLinks";
import Link from "next/link";
import { Button } from "../ui/button";

export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignCenter />
          {/* <span className="sr-only">Toggle links</span> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navLinks.map((link) => (
          <DropdownMenuItem key={link.label} asChild>
            <Link
              href={link.href}
              className="flex items-center gap-x-4 cursor-pointer"
            >
              <>
                {link.icon}
                <span className="capitalize"> {link.label}</span>
              </>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
