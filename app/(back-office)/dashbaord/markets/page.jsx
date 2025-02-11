export const dynamic = "force-dynamic";
import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import TableAction from "@/components/backoffice/TableAction";
export default function page() {
  return (
    <div>
      {/* {Header} */}
      <PageHeader
        heading="Markets"
        LinkTitle="Add Market"
        href="/dashbaord/markets/new"
      />
      {/* {tabel Action Export Search Bulk Delete} */}
      <TableAction />
      <div className="py-8 ">
        <h2>Table</h2>
      </div>
    </div>
  );
}
