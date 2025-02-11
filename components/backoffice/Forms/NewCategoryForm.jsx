"use client";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreainput";
import ImageInput from "@/components/FormInputs/ImageInput";
import generateSlug from "@/lib/generateSlug";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import SelectInput from "@/components/FormInputs/SelectInput";
import ToogleInput from "@/components/FormInputs/ToogleInput";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function NewCategoryForm({ updateData = {} }) {
  const initialImageUrl = updateData?.imageUrl ?? "";
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
  ];

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashbaord/categories");
  }
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;

    //  makePutRequest(update Request)

    if (id) {
      data.id = id;

      makePutRequest(
        setLoading,
        `api/categories/${id}`,
        data,
        "Category",
        redirect
      );

      console.log("update request:", data);
    } else {
      //make post request(create)
      makePostRequest(
        setLoading,
        "api/categories",
        data,
        "Category",
        reset,
        redirect
      );
    }
    setImageUrl("");
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid  gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            labelText="Category Title"
            name="title"
            register={register}
            errors={errors}
          />

          {/* <SelectInput
            label="Select Market"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          /> */}
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endPoint="categoryImageUploader"
            label="Category Image"
          />
          <ToogleInput
            label="publish Your Category"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={id ? "Update Category" : "Create Category"}
          LoadingButtonTitle={` ${
            id ? "Updating" : "Creating"
          } Category Please Wait...`}
        />
      </form>
    </div>
  );
}
