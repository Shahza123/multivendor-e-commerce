import React from "react";
import CartProduct from "./CartProduct";
import EmptyCart from "@/components/frontend/EmptyCart";
export default function CartItems({ cartItems }) {
  return (
    <div className="md:col-span-8 col-span-full">
      {cartItems?.length > 0 && (
        <>
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          <div className="flex mb-4 items-center font-semibold text-sm  justify-between text-slate-400 pb-3 border-b border-slate-400">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
        </>
      )}
      <div className="">
        {/* <CartProduct /> */}
        {cartItems?.length > 0 ? (
          cartItems.map((item, i) => {
            return <CartProduct item={item} key={i} />;
          })
        ) : (
          <EmptyCart />
        )}
      </div>
      {/* coupon Form */}
      <div className="flex items-center gap-2 py-8">
        <input
          type="email"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter the coupon"
        />
        <button className="py-2.5 px-4 rounded-lg bg-lime-600 shrink-0">
          Apply Coupon
        </button>
      </div>
    </div>
  );
}
