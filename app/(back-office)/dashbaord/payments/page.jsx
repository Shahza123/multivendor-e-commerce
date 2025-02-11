export const dynamic = "force-dynamic";
import { columns } from "./column";
import { DataTable } from "./data-table";
import { getData } from "@/lib/getData";

// async function getData() {
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//   ];
// }

export default async function DemoPage() {
  const categories = await getData("categories");

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={categories} />
    </div>
  );
}
