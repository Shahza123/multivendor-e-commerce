export const dynamic = "force-dynamic";
import React from "react";
import NewTrainingForm from "@/components/backoffice/NewTrainigForm";
import { getData } from "@/lib/getData";
import FormHeader from "@/components/backoffice/FormHeader";

export default async function NewTraining() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <>
      <FormHeader title="New Training" />
      <NewTrainingForm categories={categories} />
    </>
  );
}
