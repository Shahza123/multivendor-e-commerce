export const dynamic = "force-dynamic";
import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import TableAction from "@/components/backoffice/TableAction";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./column";
export default async function Coupons() {
  const coupons = await getData("coupons");
  return (
    <div>
      {/* {Header} */}
      <PageHeader
        heading="Coupons"
        LinkTitle="Add Coupons"
        href="/dashbaord/coupons/new"
      />
      {/* {tabel Action Export Search Bulk Delete} */}
      {/* <TableAction />
      <div className="py-8 ">
        <h2>Table</h2>
      </div> */}
      <div className="py-8 ">
        <DataTable data={coupons} columns={columns} />
      </div>
    </div>
  );
}
