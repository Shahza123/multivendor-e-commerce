"use client";
import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
export default function FormHeader({ title }) {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center justify-between py-6 px-12 dark:bg-slate-700 bg-white text-slate-800 dark:text-slate-50 rounded-lg shadow-sm mb-12">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button onClick={() => router.back()}>
          <X />
        </button>
      </div>
    </div>
  );
}
