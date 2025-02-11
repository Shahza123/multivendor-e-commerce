export const dynamic = "force-dynamic";
import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import TableAction from "@/components/backoffice/TableAction";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./column";
export default async function page() {
  const staff = await getData("staffs");
  console.log("All staff is coming here", staff);

  return (
    <div>
      {/* {Header} */}
      <PageHeader
        heading="Staff"
        LinkTitle="Add Staff"
        href="/dashbaord/staff/new"
      />
      {/* {tabel Action Export Search Bulk Delete} */}
      <TableAction />
      <div className="py-8 ">
        <DataTable data={staff} columns={columns} />
      </div>
    </div>
  );
}
