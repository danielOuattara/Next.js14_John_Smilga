"use client";

import logo from "./../../assets/logo-2.svg";
import { navLinks } from "@/utils/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="py-4 px-4 bg-muted h-full">
      <Image src={logo} alt="logo image" className="w-16 h-16 mx-auto" />
      <div className="flex flex-col mt-20 gap-y-4">
        {navLinks.map((link) => (
          <Button
            asChild
            key={link.href}
            variant={pathname === link.href ? "default" : "link"}
          >
            <Link href={link.href} className="gap-x-4 ">
              {link.icon}
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
}
