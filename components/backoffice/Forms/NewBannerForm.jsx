"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import ToogleInput from "@/components/FormInputs/ToogleInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { useRouter } from "next/navigation";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
export default function NewBannerForm({ UpdateBanner = {} }) {
  const initialImageUrl = UpdateBanner?.imageUrl ?? "";
  const id = UpdateBanner?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
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
      ...UpdateBanner,
    },
  });
  const router = useRouter();
  function redirect() {
    router.push("/dashbaord/banners");
  }
  const isActive = watch("isActive");
  async function onSubmit(data) {
    data.imageUrl = imageUrl;

    if (id) {
      data.id = id;
      makePutRequest(setLoading, `api/banners/${id}`, data, "Banner", redirect);
    } else {
      makePostRequest(
        setLoading,
        "api/banners",
        data,
        "Banner",
        reset,
        redirect
      );
      setImageUrl("");
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid  gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            labelText="Banner Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            labelText="Banner Link"
            name="link"
            type="url"
            register={register}
            errors={errors}
          />
          {/* {configure thsi endpoint in the corejs} */}
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endPoint="bannerImageUploader"
            label="Banner Image"
          />
          <ToogleInput
            label="publish Your Banner"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={`${id ? "Update Banner" : "Create Banner"}`}
          LoadingButtonTitle={`${
            id ? "Updating" : "Creating"
          } banner please wait...`}
        />
      </form>
    </div>
  );
}
