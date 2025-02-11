import React from "react";

export default function Heading({ title }) {
  return (
    <div className="py-4  text-2xl font-semibold dark:text-slate-50  text-slate-800">
      {title}
    </div>
  );
}
