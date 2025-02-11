import React from "react";
import Link from "next/link";
export default function EmptyCart() {
  return (
    <div className="flex items-center justify-center">
      <p className="md:text-2xl">
        Your Cart Is empty {""}
        <Link className="dark:text-lime-500 text-slate-800" href="/">
          Start Shoping
        </Link>
      </p>
    </div>
  );
}
