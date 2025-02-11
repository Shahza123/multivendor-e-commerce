import React from "react";

export default function DateColumn({ row, accessorKey }) {
  const createdAt = row.getValue(`${accessorKey}`);
  const orignalDate = new Date(createdAt);
  const day = orignalDate.getDate();
  const month = orignalDate.toLocaleString("default", {
    month: "short",
  });
  const year = orignalDate.getFullYear();
  const formatted = `${day}th ${month} ${year}`;

  return <div className="">{formatted}</div>;
}
