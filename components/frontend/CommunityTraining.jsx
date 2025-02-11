import React from "react";
import Link from "next/link";
// import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import TrainingCarousel from "./TrainingCarousel";
import { getData } from "@/lib/getData";

export default async function CommunityTrainings() {
  const trainings = await getData("trainings");
  return (
    <div className=" dark:bg-gray-700 bg-white border border-gray-300 rounded-lg    dark:border-gray-700 text-slate-800 overflow-hidden">
      <div className=" flex justify-between items-center bg-slate-100 py-3 dark:border-gray-600 dark:bg-gray-800 text-slate-800 dark:text-slate-100 px-6 font-semibold border-b border-gray-300">
        <h2>PHARMACY COMMUNITY</h2>
        <Link
          href="/"
          className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
        >
          See All
        </Link>
      </div>
      <div className="bg-white dark:bg-slate-700 p-4">
        <TrainingCarousel trainings={trainings} />
      </div>
    </div>
  );
}
