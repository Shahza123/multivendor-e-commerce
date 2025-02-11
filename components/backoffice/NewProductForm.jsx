"use client";
import { useState } from "react";
import SelectInput from "@/components/FormInputs/SelectInput";

import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreainput";
import ImageInput from "@/components/FormInputs/ImageInput";
import generateSlug from "@/lib/generateSlug";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import ArrayInputItem from "@/components/FormInputs/ArrayInputItem";
import ToogleInput from "@/components/FormInputs/ToogleInput";
import generateUserCode from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";
export default function NewProductForm({
  categories,
  farmers,
  updateProduct = {},
}) {
  const id = updateProduct?.id ?? "";
  const initialTags = updateProduct?.tags ?? "";
  const initialImageUrl = updateProduct?.imageUrl ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [tags, setTags] = useState([initialTags]);
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
      isWholeSale: false,
      ...updateProduct,
    },
  });
  const isActive = watch("isActive");
  const isWholeSale = watch("isWholeSale");

  console.log(isActive, "isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashbaord/products");
  }

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("LLP", data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    data.qty = 1;
    data.productCode = productCode;
    data.isWholeSale = isWholeSale;
    // console.log("all data  is coming here", data);

    if (id) {
      //makePutReuest
      data.id = id;
      makePutRequest(
        setLoading,
        `api/products/${id}`,
        data,
        "Product",
        redirect
      );
    } else {
      //makePostRequest
      makePostRequest(
        setLoading,
        "api/products",
        data,
        "Product",
        reset,
        redirect
      );
      setImageUrl("");
      setTags([]);
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
            labelText="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            labelText="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            labelText="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            labelText="Product Price(before discount)"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            labelText="Product Sale Price(Discounted)"
            name="salePrice"
            type="number "
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            labelText="Product Stock"
            name="productStock"
            type="number "
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            labelText="Unit Of Measurment(eg Kilograms)"
            name="unit"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <SelectInput
            label="select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            options={farmers}
          />
          <ToogleInput
            label="Supports WholeSale Selling"
            name="isWholeSale"
            trueTitle="Supported"
            falseTitle="Not Supported"
            register={register}
          />
          {isWholeSale && (
            <>
              <TextInput
                labelText="WholeSale Price"
                name="wholeSalePrice"
                type="number"
                register={register}
                errors={errors}
                className="w-full"
              />
              <TextInput
                labelText="Minimum WholeSale Qty"
                name="wholesaleQty"
                type="number"
                register={register}
                errors={errors}
                className="w-full"
              />
            </>
          )}
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endPoint="productImageUploader"
            label="Product Image"
          />
          <ArrayInputItem setItems={setTags} items={tags} itemTitle="Tag" />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToogleInput
            label="publish Your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
          {/* <div className="sm:col-span-2">
            <div className="w-full">
              <h2 className=" text-sm block font-medium leading-6 dark:text-slate-50 text-gray-900 mb-2 py-3 ">
                Publish Your Product
              </h2>
            </div>
            <div className="w-full ">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  {...register("isActive")}
                  type="checkbox"
                  defaultValue={true}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {isActive ? "Active" : "Draft"}
                </span>
              </label>
            </div>
          </div> */}
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={`${id ? "Update product" : "Create product"}`}
          LoadingButtonTitle={`${
            id ? "Updating" : "Creating"
          }Product please wait...`}
        />
      </form>
    </div>
  );
}
