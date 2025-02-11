export const dynamic = "force-dynamic";
import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { columns } from "./column";
import { getData } from "@/lib/getData";

// import TableAction from "@/components/backoffice/TableAction";
export default async function page() {
  const trainings = await getData("trainings");
  return (
    <div>
      {/* {Header} */}
      <PageHeader
        heading="Limi Community Trainings"
        LinkTitle="Add Training"
        href="/dashbaord/community/new"
      />
      {/* {tabel Action Export Search Bulk Delete} */}
      {/* <TableAction /> */}
      <div className="py-8 ">
        <DataTable data={trainings} columns={columns} />
      </div>
    </div>
  );
}
