"use client";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border border-gray-300 bg-white text-blue-600 checked:bg-blue-600 checked:border-transparent focus:ring-2 focus:ring-blue-500"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border border-gray-300 bg-white text-blue-600 checked:bg-blue-600 checked:border-transparent focus:ring-2 focus:ring-blue-500"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="flex"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 mt-1 h-4 w-4 " />
        </Button>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Category Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl");
      console.log(imageUrl);

      return (
        <div className="shrink-0">
          <Image
            src={imageUrl}
            width={500}
            height={500}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");
      const orignalDate = new Date(createdAt);
      const day = orignalDate.getDate();
      const month = orignalDate.toLocaleString("default", {
        month: "short",
      });
      const year = orignalDate.getFullYear();
      const formatted = `${day}th ${month} ${year}`;

      return <div className="">{formatted}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const isActive = row.isActive;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only ">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(isActive)}
            >
              Copy the status
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete Category</DropdownMenuItem>
            <DropdownMenuItem>Edit Category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
