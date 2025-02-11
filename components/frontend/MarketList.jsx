import React from "react";
import MarketCarosuel from "@/components/frontend/MarketCarousel";
import { getData } from "@/lib/getData";
export default async function MarketList() {
  const markets = await getData("markets");
  return (
    <div className="py-16 text-white">
      <div className="bg-slate-50 dark:bg-lime-900 rounded-lg p-4">
        <h2 className="py-2 text-center text-2xl text-slate-50 dark:text-slate-900 mb-4">
          Shop By Market
        </h2>
        <MarketCarosuel markets={markets} />
      </div>
    </div>
  );
}
