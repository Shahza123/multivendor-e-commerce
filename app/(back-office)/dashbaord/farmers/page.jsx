export const dynamic = "force-dynamic";
import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./column";
export default async function page() {
  const farmers = await getData("farmer");
  console.log("farmers data is coming here", farmers);

  return (
    <div>
      {/* {Header} */}
      <PageHeader
        heading="Farmers"
        LinkTitle="Add Farmer"
        href="/dashbaord/farmers/new"
      />
      {/* {tabel Action Export Search Bulk Delete} */}
      {/* <TableAction /> */}
      <div className="py-8 ">
        <DataTable data={farmers} columns={columns} filterKeys={["name"]} />
      </div>
    </div>
  );
}
