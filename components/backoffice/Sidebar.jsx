"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useRouter } from "next/navigation";
import {
  Boxes,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  Slack,
  Truck,
  User,
  Users,
  UserSquare2,
  Warehouse,
  Building2,
  CircleDollarSign,
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar({ ShowSidebar, setShowSidebar }) {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const { data: session, status } = useSession();
  const role = session?.user?.role;
  useEffect(() => {
    setOpenMenu(false);
  }, []);
  if (status === "loading") {
    return <p>loading...</p>;
  }

  let sideBarLinks = [
    { title: "Customers", icon: Users, href: "/dashbaord/customers" },
    { title: "Markets", icon: Warehouse, href: "/dashbaord/markets" },
    { title: "Farmers", icon: UserSquare2, href: "/dashbaord/farmers" },
    { title: "Orders", icon: Truck, href: "/dashbaord/orders" },
     { title: "Sales", icon: Truck, href: "/dashbaord/sales" }, 
    { title: "Our Staff", icon: User, href: "/dashbaord/staff" },
    { title: "Limi Community", icon: Building2, href: "/dashbaord/community" },
    { title: "Wallet", icon: CircleDollarSign, href: "/dashbaord/wallet" },
    { title: "Settings", icon: LayoutGrid, href: "/dashbaord/settings" },
    { title: "Online Store", icon: ExternalLink, href: "/customers" },
  ];
  let catalogLinks = [
    { title: "Products", icon: Boxes, href: "/dashbaord/products" },
    { title: "Categories", icon: LayoutList, href: "/dashbaord/categories" },

    { title: "Coupons", icon: ScanSearch, href: "/dashbaord/coupons" },
    { title: "Store Banner", icon: MonitorPlay, href: "/dashbaord/banners" },
  ];

  if (role === "FARMER") {
    sideBarLinks = [
      { title: "Customers", icon: Users, href: "/dashbaord/customers" },
      { title: "Markets", icon: Warehouse, href: "/dashbaord/markets" },

      { title: "Orders", icon: Truck, href: "/dashbaord/orders" },
      { title: "Sales", icon: Truck, href: "/dashbaord/sales" },
      {
        title: "Limi Community",
        icon: Building2,
        href: "/dashbaord/community",
      },
      { title: "Wallet", icon: CircleDollarSign, href: "/dashbaord/wallet" },
      { title: "Settings", icon: LayoutGrid, href: "/dashbaord/settings" },
      { title: "Online Store", icon: ExternalLink, href: "/customers" },
    ];
  }
  if (role === "USER") {
    sideBarLinks = [
      { title: "My Orders", icon: Truck, href: "/dashbaord/orders" },
      { title: "Profile", icon: User, href: "/dashbaord/profile" },
      { title: "Online Store", icon: ExternalLink, href: "/" },
    ];
    catalogLinks = [];
  }
  async function handleLogout() {
    await signOut();
    router.push("/dashboard");
  }
  return (
    <div
      className={
        ShowSidebar
          ? "sm:block  sm:mt-0 dark:bg-slate-800  dark:text-slate-300 space-y-6 w-64 h-screen bg-white  shadow-md text-slate-800 p-3 fixed left-0 top-0"
          : "hidden sm:mt-0 md:block overflow-y-scroll dark:bg-slate-800 dark:text-slate-300 space-y-6 w-64 h-screen bg-white shadow-md text-slate-800 p-3 fixed left-0 top-0"
      }
    >
      <Link href="/dashboard" onClick={() => setShowSidebar(false)}>
        <Image
          src={logo}
          alt="not-found-logo-bazar"
          width={40} // Higher resolution for better clarity
          height={40} // Higher resolution for better clarity
          className="w-18 h-18 object-cover bg-slate-300 rounded-lg mb-10 "
        />
      </Link>

      <div className="space-y-3 flex flex-col mt-14">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashbaord"
          className={
            pathName === "/dashbaord"
              ? "flex items-center space-x-3 py-2 px-6 text-lime-500 border-l-8 border-lime-500"
              : "flex items-center space-x-3 py-2 px-6"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        {catalogLinks?.length > 0 && (
          <Collapsible className="px-6 py-2">
            <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
              <div className="flex space-x-3 items-center">
                <Slack />
                <span>Catalog</span>

                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="px-3 py-3 rounded-lg dark:bg-slate-800 dark:text-slate-300 pl-6">
              {catalogLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    href={item.href}
                    key={i}
                    className={
                      pathName === item.href
                        ? "flex items-center space-x-3 py-1 text-sm text-lime-500 border-lime-500"
                        : "flex items-center space-x-3 py-1"
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        )}

        {sideBarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              href={item.href}
              key={i}
              className={
                item.href === pathName
                  ? "flex items-center space-x-3 py-2 px-6 text-lime-500 border-l-8 border-lime-500"
                  : "flex items-center space-x-3 py-2 px-6"
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="py-2 px-6">
          <button
            onClick={handleLogout}
            className="bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3"
          >
            <LogOut />
            <span>LogOut</span>
          </button>
        </div>
      </div>
    </div>
  );
}
