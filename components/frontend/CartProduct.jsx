import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";
export default function CartProduct({ item }) {
  const dispatch = useDispatch();
  function handleRemoveToCart() {
    dispatch(removeFromCart(item.id));
    toast.success("item remove successfully");
  }
  function handleIncrementQty() {
    dispatch(incrementQty(item.id));
    toast.success("item increment successfully");
  }
  function handleDecrementQty() {
    dispatch(decrementQty(item.id));
    toast.success("item decrement successfully");
  }
  return (
    <div className="flex mb-4 items-center font-semibold text-sm  justify-between text-slate-400 pb-3 border-b border-slate-400">
      <div className="flex items-center gap-3">
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={249}
          height={249}
          className="rounded-xl w-20 h-20"
        />
        <div className="flex flex-col">
          <h2>{item.title}</h2>
        </div>
      </div>
      <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
        <button
          onClick={handleDecrementQty}
          className="border-gray-400 border-r py-2 px-4"
        >
          <Minus />
        </button>
        <button className="flex-grow py-2 px-4">{item.qty}</button>
        <button
          onClick={handleIncrementQty}
          className="border-l border-gray py-2 px-4"
        >
          <Plus />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <h4>UGX{item.salePrice}</h4>
        <button onClick={handleRemoveToCart}>
          <Trash2 className="text-red-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
