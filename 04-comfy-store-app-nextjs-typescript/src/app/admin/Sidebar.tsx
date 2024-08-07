"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TypeProps = {
  className?: string;
};

export default function AdminSidebar({ className }: TypeProps) {
  const pathname = usePathname();
  return (
    <aside className={cn(className)}>
      {adminLinks.map((link) => (
        <Button
          key={link.label}
          asChild
          className="w-full mb-2 capitalize font-normal justify-start"
          variant={pathname === link.href ? "default" : "outline"}
        >
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        </Button>
      ))}
    </aside>
  );
}
