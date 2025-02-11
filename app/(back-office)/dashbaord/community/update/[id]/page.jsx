import React from "react";
import NewTrainingForm from "@/components/backoffice/NewTrainigForm";
import { getData } from "@/lib/getData";
import FormHeader from "@/components/backoffice/FormHeader";

export default async function UpdateTraining({ params: { id } }) {
  const training = await getData(`trainings/${id}`);

  const categoriesData = await getData("categories");
  console.log("all categories is coming here", categoriesData);
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return (
    <>
      <FormHeader title="Update Training " />
      <NewTrainingForm updateTraining={training} categories={categories} />
    </>
  );
}
