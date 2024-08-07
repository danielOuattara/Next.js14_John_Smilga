import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { links } from "@/utils/links";
import { SignOutLink, UserIcon } from "./index";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

import { auth } from "@clerk/nextjs/server";

export default function LinksDropdown() {
  const { userId } = auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;

  const public_links = "?";
  const user_links = "?";
  const admin_link = "?";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-8 h-8" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-35" align="start" sideOffset={10}>
        {/* user is signed out */}
        <SignedOut>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignInButton>
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <SignOutButton>
              <button className="w-full text-left">Register</button>
            </SignOutButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* user is signed in */}
        <SignedIn>
          {links.map((link) => {
            if (link.label === "dashboard" && !isAdmin) {
              return null;
            }
            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className="capitalize w-full">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
