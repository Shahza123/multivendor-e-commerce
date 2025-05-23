import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/frontend/HeroCarousel";
import { CircleDollarSign, FolderSync, HelpCircle } from "lucide-react";
import SidebarCategories from "@/components/frontend/SidebarCategories";
import advert from "@/public/hero-right-image.png";
import { getData } from "@/lib/getData";
export default async function Hero() {
  const banners = await getData("banners");
  return (
    <div className="grid grid-cols-12 gap-8 mb-6">
      <SidebarCategories />
      <div className=" sm:col-span-7 col-span-full bg-blue-600 rounded-md ">
        <HeroCarousel banners={banners} />
      </div>
      <div className="col-span-2 hidden sm:block rounded-lg bg-white p-3 dark:bg-slate-800">
        <Link href="/" className="flex items-center space-x-1 mb-3  ">
          <HelpCircle className="shrink-0 w-5  h-5 dark:text-lime-500 text-slate-900" />
          <div className="flex flex-col  ">
            <h2 className="uppercase text-sm">Help Center</h2>
            <h2 className="text-[0.6rem]">Duide To Customer Care</h2>
          </div>
        </Link>
        <Link href="/" className="flex items-center space-x-1  mb-3">
          <FolderSync className="shrink-0 w-5  h-5 dark:text-lime-500 text-slate-900" />
          <div className="flex flex-col  ">
            <h2 className="uppercase text-sm">Easy Return</h2>
            <h2 className="text-[0.6rem]">Quick Return </h2>
          </div>
        </Link>
        <Link
          href="/register-farmer"
          className="flex items-center space-x-1 mb-6"
        >
          <CircleDollarSign className="shrink-0 w-5  h-5 dark:text-lime-500 text-slate-900" />
          <div className="flex flex-col  ">
            <h2 className="uppercase text-sm">Sell on Limi</h2>
            <h2 className="text-[0.6rem]">Million Of Visitors</h2>
          </div>
        </Link>
        <Image src={advert} alt="advert" className="w-full rounded-lg" />
      </div>
    </div>
  );
}
