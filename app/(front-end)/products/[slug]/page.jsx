import BreadCrumb from "@/components/frontend/BreadCrumb";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import React from "react";
import Image from "next/image";
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from "lucide-react";
import { getData } from "@/lib/getData";
import Link from "next/link";

export default async function ProductDetailPage({ params: { slug } }) {
  const product = await getData(`products/product/${slug}`);
  return (
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={556}
            height={556}
            className="w-full "
          />
        </div>

        <div className="col-span-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-3xl font-semibold">
              {product.title}
            </h2>

            <button>
              <Share2 />
            </button>
          </div>
          <div className="border-b border-gray-500">
            <p className="py-2 ">
              {product.description}
            </p>

            <div className="flex items-center gap-8  mb-4">
              <p>SKU:{product.sku}</p>
              <p className="bg-lime-100 py-1.5 px-4 rounded-full text-slate-900">
                <b> Stock</b>:{product.qty}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pt-4 border-b border-gray-500 pb-4">
            <div className="flex  items-center gap-4">
              <h4 className="text-2xl">UGX{product.productPrice}</h4>
              <del className="text-slate-400 text-sm">UGX 1000</del>
            </div>
            <p className="flex items-center ">
              <Tag className="w-5 h-5  text-slate-400 me-2" />
              <span> Save 50% right now</span>
            </p>
          </div>
          <div className="flex justify-between items-center py-6">
            <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
              <button className="border-gray-400 border-r py-2 px-4">
                <Minus />
              </button>
              <button className="flex-grow py-2 px-4">1</button>
              <button className="border-l border-gray py-2 px-4">
                <Plus />
              </button>
            </div>
            <button className="flex items-center text-white space-x-2 bg-lime-600 px-4 py-2 rounded-md">
              <BaggageClaim />
              <span>Add To Cart</span>
            </button>
          </div>
        </div>

        <div className="col-span-3  sm:block hidden  dark:bg-gray-700 bg-white border border-gray-300 rounded-lg    dark:border-gray-700 text-slate-800 overflow-hidden ">
          <h2 className="bg-slate-100 py-3 dark:border-gray-600 dark:bg-gray-800 text-slate-800 dark:text-slate-100 px-6 font-semibold border-b border-gray-300">
            DELEIVERY & RETURNS
          </h2>
          <div className="p-4">
            <div className="flex rounded-lg py-2 px-4 bg-orange-400  text-slate-50 items-center gap-3">
              <span>Stilo Express</span>
              <Send />
            </div>
            <div className="py-3 text-slate-100 border-b border-gray-500">
              Eligible for free deleivery.
              <Link href="#">View Details</Link>
            </div>
            <h2 className="text-salte-200 p-2">Choose your Location</h2>
            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="pb-3 ">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-700 p-4 my-8 rounded-xl ">
        <h2 className="mb-4 text-2xl font-semibold text-slate-400 ml-3">
          Similar products
        </h2>

        {/* <CategoryCarousel products={category.products} /> */}
      </div>
    </div>
  );
}
