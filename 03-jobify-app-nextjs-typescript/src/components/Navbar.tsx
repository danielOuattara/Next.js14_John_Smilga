import LinksDropdown from "./LinksDropdown";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./index";
import Image from "next/image";
import logo from "./../assets/logo-2.svg";

export default function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 flex items-center justify-between">
      <div className="ml-2">
        <LinksDropdown />
      </div>

      <Image
        src={logo}
        alt="logo image"
        className="w-10 h-10 mx-auto lg:hidden"
      />
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  );
}
