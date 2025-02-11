"use client";
import React from "react";
import BreadCrumb from "@/components/frontend/BreadCrumb";

import { useSelector } from "react-redux";

import CartItems from "@/components/frontend/CartItems";
import CartSubtotal from "@/components/frontend/CartSubtotal";
import EmptyCart from "@/components/frontend/EmptyCart";
export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  console.log("cartItems is coming here",cartItems);
  
  const subTotal =
    cartItems
      .reduce((acc, currentItem) => {
        return acc + currentItem.salePrice * currentItem.qty;
      }, 0)
      .toFixed(2) ?? 0;

  return (
    <div>
      <BreadCrumb />
      {cartItems?.length > 0 ? (
        <div className="grid grid-cols-12  gap-6 md:gap-14">
          {/* cart items coming here */}
          <CartItems cartItems={cartItems} />

          {/* cart subTotal */}
          <CartSubtotal subTotal={subTotal} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
