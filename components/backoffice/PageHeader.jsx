import React from "react";
import Heading from "@/components/backoffice/Heading";
import Link from "next/link";
import { Plus } from "lucide-react";
export default function PageHeader({ heading, LinkTitle, href }) {
  return (
    <div>
      <div className="flex justify-between  py-4 mb-4">
        <Heading title={heading} />
        <Link
          className="text-white bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/55 font-medium rounded-lg  px-5 py-3 text-center inline-flex items-center dark:focus:ring-lime-600/55 me-2 text-base space-x-3"
          href={href}
        >
          <Plus />
          <span>{LinkTitle}</span>
        </Link>
      </div>
    </div>
  );
}
