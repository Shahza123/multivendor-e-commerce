"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import generateInitials from "@/lib/generateInitial";
import { LayoutDashboard, LogOut, Settings } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function userAvatar({ user = {} }) {
  const { name, image } = user;
  const initials = generateInitials(name);

  const role = user?.role;
  const router = useRouter();
  async function handleLogout(name) {
    await signOut();
    router.push("/");
  }
  return (
    <DropdownMenu className="bg-white ">
      <DropdownMenuTrigger asChild>
        <button>
          {image ? (
            <Image
              src="/shahzad.jpg"
              alt="User Profile"
              width={250}
              height={250}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 p-4 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800  shadow-md border border-slate-600">
              {initials}
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white px-4 py-2 pr-8  dark:bg-slate-900  z-50">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="py-2">
          <Link href="/dashbaord" className="flex items-center px-1">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-2">
          <Link href="/dashbaord/profile" className="flex items-center px-1">
            <Settings className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
          </Link>
        </DropdownMenuItem>

        {role === "USER" && (
          <DropdownMenuItem className="py-2">
            <Link
              href="/dashbaord/orders"
              className="flex items-center space-x-2"
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>My Orders</span>
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="py-2">
          <button onClick={handleLogout} className="flex items-center px-1">
            <LogOut className="mr-2 h-4 w-4" />
            <span>LogOut</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
