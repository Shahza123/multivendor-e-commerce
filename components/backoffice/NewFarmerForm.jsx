"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import ToogleInput from "@/components/FormInputs/ToogleInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreainput";
import ArrayItemsInput from "@/components/FormInputs/ArrayInputItem";
import { useRouter } from "next/navigation";
import { makePostRequest } from "@/lib/apiRequest";
import generateUserCode from "@/lib/generateUserCode";
export default function NewFarmerForm({ user }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...user,
    },
  });
  const router = useRouter();
  function redirect() {
    router.push("/login");
  }
  const isActive = watch("isActive");
  async function onSubmit(data) {
    const code = generateUserCode("LFF", data.name);

    data.code = code;

    data.userId = user.id;

    data.products = products;
    data.imageUrl = imageUrl;

    console.log("all farmer data is coming here", data);

    makePostRequest(
      setLoading,
      "api/farmer",
      data,
      "FarmerProfile",
      reset,
      redirect
    );
    setImageUrl("");
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid  gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          labelText="Farmer's Full Name"
          name="name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="Farmer's Phone"
          name="phone"
          type="tel"
          // type={url}
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="Farmer's Email Address"
          name="email"
          // type={url}
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="Farmer's Physical Address"
          name="physicalAddress"
          // type={url}
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="Farmer's Contact Person"
          name="contactPerson"
          // type={url}
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="Farmer's Contact Person Phone"
          name="contactPersonPhone"
          type="tel"
          register={register}
          errors={errors}
          className="w-full"
        />
        {/* accare */}
        <TextInput
          labelText="What Is The Size Of Your Land In Accres"
          name="landSize"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="What Is Your Main Crop That You Cultivate"
          name="mainCrop"
          type="text"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ArrayItemsInput
          setItems={setProducts}
          items={products}
          itemTitle="Product"
        />
        {/* configur ethsi endpoint in the core js */}
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="farmerProfileUploader"
          label="Farmer Profile Image"
        />
        <TextareaInput
          label="Farmer's Payment Terms"
          name="terms"
          register={register}
          errors={errors}
          isRequired={false}
        />

        <TextareaInput
          label="Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        />
        {/* <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endPoint="farmerImageUploader"
          label="Market Image"
        /> */}
        <ToogleInput
          label="Publish Your Farmer"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={"Create Farmer"}
        LoadingButtonTitle={"Creating Farmer please wait..."}
      />
    </form>
  );
}
