import React from "react";
import { Download, Search, Trash2 } from "lucide-react";

export default function TableAction() {
  return (
    <div>
      <div className="flex gap-8 bg-white dark:bg-slate-700 py-6 px-12 rounded-lg justify-between items-center ">
        <button className="relative bg-slate-50 inline-flex items-center justify-center py-3 px-4 text-base space-x-3 font-medium text-gray-900 rounded-lg group dark:bg-slate-800  to-blue-500   dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  border border-slate-700 dark:border-lime-500 ">
          <Download />
          <span> Export</span>
        </button>
        <div className=" flex-grow">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className=" w-full  block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-lime-500 focus:ring-lime-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <button className=" rounded-lg py-3 px-6 bg-red-600 text-white flex items-center space-x-2">
          <Trash2 />
          <span> Bulk Delete </span>
        </button>
      </div>
    </div>
  );
}
