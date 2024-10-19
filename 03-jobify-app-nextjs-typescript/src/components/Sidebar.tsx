"use client";

import logo from "./../assets/logo-2.svg";
import { navLinks } from "@/utilities/navLinks";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="py-4 px-2 bg-muted h-full">
      <Image src={logo} alt="logo image" className="w-16 h-16 mx-auto" />
      <div className="flex flex-col mt-20 gap-y-4">
        {navLinks.map((link) => (
          <Button
            asChild
            key={link.href}
            variant={pathname === link.href ? "default" : "link"}
          >
            <Link href={link.href} className="flex justify-end gap-x-2">
              {link.icon}
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
}
