import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getData } from "@/lib/getData";
export default async function SidebarCategories() {
  const categories = await getData("categories");

  return (
    <div className="sm:col-span-3 sm:block hidden  dark:bg-gray-700 bg-white border border-gray-300 rounded-lg    dark:border-gray-700 text-slate-800 overflow-hidden  ">
      <h2 className="bg-slate-100 py-3 dark:border-gray-600 dark:bg-gray-800 text-slate-800 dark:text-slate-100 px-6 font-semibold border-b border-gray-300">
        Shop By Category ({categories?.length})
      </h2>
      <div className="px-6 py-3 h-[300px] overflow-y-auto flex flex-col gap-2">
        {categories?.map((category, i) => {
          return (
            <Link
              key={i}
              href="/"
              className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
            >
              <Image
                src={category.imageUrl}
                alt={category.title}
                width={556}
                height={556}
                className="w-10 h-10 rounded-full object-cover border border-lime-300"
              />
              <span className="text-sm">{category.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
