"use client";

import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { useState } from "react";
import { generateCouponCode } from "@/lib/generateCouponCode";
import ToogleInput from "@/components/FormInputs/ToogleInput";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
// import Coupons from "../page";
import { useRouter } from "next/navigation";

export default function NewCouponForm({ updateCoupon = {} }) {
  const id = updateCoupon?.id ?? "";
  const expiryDate = updateCoupon?.expiryDate
    ? new Date(updateCoupon.expiryDate).toISOString().slice(0, 10) // Convert ISO to YYYY-MM-DD
    : "";

  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState();

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateCoupon,
      expiryDate: expiryDate,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashbaord/coupons");
    router.refresh();
  }

  async function onSubmit(data) {
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);

    data.expiryDate = isoFormattedDate;
    data.couponCode = couponCode;

    if (id) {
      //makePutRequest
      data.id = id;
      await makePutRequest(
        setLoading,
        `api/coupons/${id}`,
        data,
        "Coupon",
        redirect
      );
    } else {
      //makePostRequest
      await makePostRequest(
        setLoading,
        "api/coupons",
        data,
        "Coupon",
        reset,
        redirect
      );
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            labelText="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            labelText="Coupon Expiry Date"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
          <ToogleInput
            label="Publish Your Coupon"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={`${id ? "Update Coupon" : "Create Coupon"}`}
          LoadingButtonTitle={`${
            id ? "Updating" : "Creating"
          } Coupon please wait...`}
        />
      </form>
    </div>
  );
}
