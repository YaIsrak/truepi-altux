"use client";

import { cn } from "@/lib/utils";
import { UserIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaArrowRight } from "react-icons/fa";

export default function UserButton({
  mobile,
  className,
}: {
  mobile?: boolean;
  className?: string;
}) {
  const { data: session } = useSession();

  if (!session?.user)
    return (
      <div className="flex justify-center items-center gap-2">
        <div>
          <Button
            className={cn(
              "rounded-full",
              className,
              mobile && "bg-white text-primary hover:bg-gray-200"
            )}
            asChild
          >
            <Link href={"/login"}>
              <FaArrowRight className="text-sm" />
            </Link>
          </Button>
        </div>

        <div className="text-xl">Get Now</div>
      </div>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={mobile ? "default" : "icon"}
          className={cn(
            "rounded-full",
            className,
            mobile && "bg-white text-primary hover:bg-gray-200"
          )}
        >
          <UserIcon className="size-4" />
          {mobile && (
            <span className="text-sm font-semibold text-primary">
              {session.user.name}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={"/dashboard"}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()} className="text-red-600">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
