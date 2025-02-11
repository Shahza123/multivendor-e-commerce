"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import ToogleInput from "@/components/FormInputs/ToogleInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextareaInput from "@/components/FormInputs/TextAreainput";
import { makePostRequest } from "@/lib/apiRequest";
import generateSlug from "@/lib/generateSlug";
import { useRouter } from "next/navigation";
export default function NewMarketForm({ categories }) {
  console.log(categories, "categories");

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashbaord/markets");
  }
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;

    console.log("form data after submitting is here coming", data);

    makePostRequest(setLoading, "api/markets", data, "Market", reset, redirect);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="New Market" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid  gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            labelText="Market Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            label="Select Categories"
            name="categoryIds"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
            multiple={true}
          />

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endPoint="marketLogoUploader"
            label="Market Logo"
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToogleInput
            label="Market Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Create Image"}
          LoadingButtonTitle={"Creating Image please wait..."}
        />
      </form>
    </div>
  );
}
