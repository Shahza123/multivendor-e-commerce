import React from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import NewCategoryForm from "@/components/backoffice/Forms/NewCategoryForm";
import { getData } from "@/lib/getData";
export default async function UpdateCategory({ params: { id } }) {
  const category = await getData(`categories/${id}`);
  console.log("just category id is coming here", category);
  return (
    <div>
      <FormHeader title="Update Category" />
      <NewCategoryForm updateData={category} />
    </div>
  );
}
