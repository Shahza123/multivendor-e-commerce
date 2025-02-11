export const dynamic = "force-dynamic";
import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
// import TableAction from "@/components/backoffice/TableAction";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./column";

export default async function page() {
  const banners = await getData("banners");
  return (
    <div>
      {/* {Header} */}
      <PageHeader
        heading="Banners"
        LinkTitle="Add Banners"
        href="/dashbaord/banners/new"
      />
      {/* {tabel Action Export Search Bulk Delete}
      <TableAction />
      <div className="py-8 ">
        <h2>Table</h2>
      </div> */}
      <div className="py-8 ">
        <DataTable data={banners} columns={columns} />
      </div>
    </div>
  );
}
