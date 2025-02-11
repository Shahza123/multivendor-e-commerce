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
// import QuildEditor from "@/components/FormInputs/QuilEditor";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import { useState } from "react";
const QuildEditor = dynamic(
  () => import("@/components/FormInputs/QuilEditor"),
  {
    ssr: false,
  }
);

export default function NewTrainingForm({ updateTraining = {}, categories }) {
  const { categoryId } = updateTraining;
  const id = updateTraining?.id ?? "";
  const initialImageUrl = updateTraining?.imageUrl ?? "";
  const initialContent = updateTraining?.content ?? "";
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
      ...updateTraining,
    },
  });

  const [content, setContent] = useState(initialContent);

  const router = useRouter();
  function redirect() {
    router.push("/dashbaord/community");
  }
  const isActive = watch("isActive");
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;

    if (id) {
      data.id = id;
      //makePutRequest
      makePutRequest(
        setLoading,
        `api/trainings/${id}`,
        data,
        "Training",
        redirect
      );
    }
    //makePostRequest
    else {
      makePostRequest(
        setLoading,
        "api/trainings",
        data,
        "Training",
        reset,
        redirect
      );
      setImageUrl("");
      setContent("");
    }
  }
  {
    return (
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
        >
          <div className="grid  gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              labelText="Training Title"
              name="title"
              register={register}
              errors={errors}
              className="w-full"
            />

            <SelectInput
              label="Select Category"
              name="categoryId"
              register={register}
              errors={errors}
              className="w-full"
              options={categories}
              defaultValue={categoryId}
            />
            <TextareaInput
              label="Training Description"
              name="description"
              register={register}
              errors={errors}
            />
            <ImageInput
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endPoint="trainingImageUploader"
              label="Training Thumbnail"
            />
            {/* content start */}
            <QuildEditor
              value={content}
              onChange={setContent}
              label="Training Content"
            />
            {/* content end */}
            <ToogleInput
              label="publish Your Training"
              name="isActive"
              trueTitle="Active"
              falseTitle="Draft"
              register={register}
            />
          </div>
          <SubmitButton
            isLoading={loading}
            buttonTitle={"create Training"}
            LoadingButtonTitle={"Creating Training Please Wait"}
          />
        </form>
      </div>
    );
  }
}
