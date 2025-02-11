"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreainput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
export default function NewStaff() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    const isoFormattedDate = generateIsoFormattedDate(data.dob);
    data.dob = isoFormattedDate;

    makePostRequest(setLoading, "api/staffs", data, "Staff", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title=" New Staff" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid  gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            labelText="Staff Full Name"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            labelText="NIN (Id Number)"
            name="nin"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            labelText="Date Of Birth"
            name="dob"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            labelText="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            labelText="Staff Email Address"
            name="email"
            // type={url}
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            labelText="Staff Phone"
            name="phone"
            // type={url}
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            labelText="Staff Physical Address"
            name="physicalAddress"
            // type={url}
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endPoint="staffImageUploader"
            label="Staff Image"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Create Staff"}
          LoadingButtonTitle={"Creating Staff please wait..."}
        />
      </form>
    </div>
  );
}
