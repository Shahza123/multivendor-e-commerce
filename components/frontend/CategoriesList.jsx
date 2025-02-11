import React from "react";
import Link from "next/link";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";

export default function CategoriesList({ category }) {
  return (
    <div className=" dark:bg-gray-700 bg-white border border-gray-300 rounded-lg    dark:border-gray-700 text-slate-800 overflow-hidden">
      <div className=" flex justify-between items-center bg-slate-100 py-3 dark:border-gray-600 dark:bg-gray-800 text-slate-800 dark:text-slate-100 px-6 font-semibold border-b border-gray-300">
        <h2>{category.title}</h2>
        <Link
          href="/"
          className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
        >
          See All
        </Link>
      </div>
      <div className="bg-white dark:bg-slate-700 p-4">
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  );
}
