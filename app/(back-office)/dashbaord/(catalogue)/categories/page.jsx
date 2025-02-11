export const dynamic = "force-dynamic";
import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
// import TableAction from "@/components/backoffice/TableAction";
import DataTable from "@/components/data-table-components/DataTable";
// import { className= } from "@/lib/className=";
import { columns } from "./column";
import { getData } from "@/lib/getData";
export default async function page() {
  const categories = await getData("categories");
  return (
    <div>
      {/* {Header} */}
      <PageHeader
        heading="categories"
        LinkTitle="Add Category"
        href="/dashbaord/categories/new"
      />
      {/* {tabel Action Export Search Bulk Delete} */}
      {/* <TableAction /> */}
      <div className="py-8 ">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
