"use Client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/backoffice/UserAvatar";
import { AlignJustify, Bell } from "lucide-react";
import React from "react";
import Image from "next/image";
import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar({ setShowSidebar, ShowSidebar }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>loading...</p>;
  }

  return (
    <div className="flex  items-center justify-between  bg-white  dark:text-slate-50   dark:bg-slate-800 text-slate-800 h-20 py-4 px-8 fixed top-0 w-full z-50 sm:pr-[20rem] ">
      <Link href={"/dashbaord"} className="sm:hidden">
        Logo
      </Link>
      <button
        className="text-lime-500 dark:text-lime-700 "
        onClick={() => setShowSidebar(!ShowSidebar)}
      >
        <AlignJustify />
      </button>
      <div className="flex space-x-3 items-center ">
        <ThemeSwitcherBtn />

        {/* Dropdown for Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
            >
              <Bell className="text-lime-500 dark:text-lime-700" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 end-6 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white px-4 py-2 pr-8 mr-10 dark:bg-slate-900">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Example notifications */}
            <DropdownMenuItem className="py-2">
              <div className="flex items-center space-x-2">
                <Image
                  src="/shahzad.jpg"
                  alt="User Profile"
                  width={250}
                  height={250}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>yellow sweet can stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 text-sm bg-red-700 text-white rounded-full">
                      Stock Out
                    </p>
                    <p>July 12 2024 - 12:18pm</p>
                  </div>
                </div>
                <button>X</button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-2">
              <div className="flex items-center space-x-2">
                <Image
                  src="/shahzad.jpg"
                  alt="User Profile"
                  width={250}
                  height={250}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>yellow sweet can stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 text-sm bg-red-700 text-white rounded-full">
                      Stock Out
                    </p>
                    <p>July 12 2024 - 12:18pm</p>
                  </div>
                </div>
                <button>X</button>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Dropdown for User Profile */}
        {status === "authenticated" && <UserAvatar user={session?.user} />}
      </div>
    </div>
  );
}
