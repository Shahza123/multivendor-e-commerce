import React from "react";
import Link from "next/link";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import CategoriesList from "@/components/frontend/CategoriesList";
import CommunityTraining from "@/components/frontend/CommunityTraining";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
export default async function Home() {
  const categoriesData = await getData("categories");
  // const categories = categoriesData.filter((category) => {
  //   return category.products.length > 3;
  // });
  // console.log("categories length gerate rthen 3", categories);
  const session = await getServerSession(authOptions);
  console.log("session is coming here", session?.user);

  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
      {categoriesData?.map((category, i) => {
        return (
          <div className="py-8" key={i}>
            <CategoriesList category={category} />
          </div>
        );
      })}

      <CommunityTraining />
      <h1 className="text-4xl"> WELCOME TO STILO PHARMACY</h1>
      <Link className="my-4 underline" href="/register-farmer">
        Become A Farmer /Vendor /Supplier
      </Link>
    </div>
  );
}
