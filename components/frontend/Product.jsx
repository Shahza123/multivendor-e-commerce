"use client";
import { addToCart } from "@/redux/slices/cartSlice";

import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
export default function Product({ product, key }) {
 const dispatch = useDispatch();
  function handleAddToCart() {
    //dispatch the reducer
    dispatch(addToCart(product));
    toast.success("item add successfully to Cart");
  
  }
  return (
    <div
      className="rounded-lg mr-3 bg-white dark:bg-slate-900  shadow overflow-hidden"
      key={key}
    >
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={556}
          height={556}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="px-4 text-slate-800 dark:text-slate-200">
        <Link href={`/products/${product.slug}`}>
          <h2 className="my-2 text-slate-800 text-center dark:text-slate-200 font-semibold">
            {product.title}
          </h2>
        </Link>
        <div className="flex items-center   dark:text-slate-200  text-slate-900 justify-between gap-2 pb-3">
          <p>UGX{product.productPrice}</p>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center text-white space-x-2 bg-lime-600 px-4 py-2 rounded-md"
          >
            <BaggageClaim />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
