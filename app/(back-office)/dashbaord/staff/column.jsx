"use client";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "@/components/DataTableColumns/DateColumn";

import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";

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
    header: ({ column }) => <SortableColumn column={column} title="Name" />,
  },

  {
    accessorKey: "imageUrl",
    header: "Staff Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  },
  {
    accessorKey: "phone",
    header: "Phone number",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "dob",
    header: "Date Of Birth",
    cell: ({ row }) => <DateColumn row={row} accessorKey="dob" />,
  },

  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <ActionColumn
          row={row}
          title="Staff"
          editEndPoint={`products/update/${product.id}`}
          endpoint={`products/${product.id}`}
        />
      );
    },
  },
];
