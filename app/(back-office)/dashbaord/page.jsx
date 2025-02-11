import React from "react";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import DashboardChat from "@/components/backoffice/DashboardChat";
import CustomDataTable from "@/components/backoffice/CustomDataTable";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import UserDashboard from "@/components/backoffice/UserDashboard";
import FarmerDashboard from "@/components/backoffice/farmerDashboard";
export default async function page() {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role === "USER") {
    return <UserDashboard />;
  }
  if (role === "FARMER") {
    return <FarmerDashboard />;
  }
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <DashboardChat />
      <CustomDataTable />
    </div>
  );
}
