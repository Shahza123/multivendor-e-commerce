import React from "react";
import Link from "next/link";
export default function CartSubtotal({ subTotal }) {
  const shipping = 10.0;
  const tax = 0.0;
  const totalPrice =
    Number(subTotal) + Number(shipping) + Number(tax).toFixed(2);
  return (
    <div className="md:col-span-4 sm:block col-span-full  font-bold  p-5  bg-white border  border-gray-300  rounded-lg  dark:bg-gray-700 dark:border-gray-700 dark:text-slate-100 text-slate-800 overflow-hidden ">
      <h2 className="text-2xl pb-3">Cart total</h2>
      <div className="flex items-center justify-between border-slate-500 border-b pb-6">
        <span>Subtotal </span>
        <span>UGX{subTotal}</span>
      </div>
      <div className="flex items-center justify-between   pb-4 mt-2">
        <span>Tax </span>
        <span>UGX{tax}</span>
      </div>
      <div className="flex items-center justify-between   pb-4">
        <span>Shiping </span>
        <span>UGX{shipping}</span>
      </div>
      <p className="border-b border-slate-500 font-normal pb-6 text-slate-400">
        we only charge for shipping when you have over 2kg items
      </p>
      <div className="flex items-center justify-between   py-4 font-bold">
        <span>Total </span>
        <span>UGX{totalPrice}</span>
      </div>
      <div className="mt-8">
        <Link
          href="/checkout"
          className="dark:bg-lime-600  bg-slate-900 text-slate-50 rounded-lg py-3 px-6 font-normal mt-8"
        >
          Continue to CheckOut
        </Link>
      </div>
    </div>
  );
}
