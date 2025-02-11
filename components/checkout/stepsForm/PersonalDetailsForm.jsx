"use client";
import TextInput from "@/components/FormInputs/TextInput";
import NavButtons from "@/components/checkout/NavButtons";

import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateCheckOutFormData,
} from "@/redux/slices/checkoutSlice";
import { useSession } from "next-auth/react";

export default function PersonalDetailsForm() {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const existingFormData = useSelector((store) => {
    store.checkout.checkoutFormData;
  });

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });

  const dispatch = useDispatch();
  async function processData(data) {
    if (userId) {
      data.userId = userId;
      //update the checkout data
      dispatch(updateCheckOutFormData(data));
      //update the current step
      dispatch(setCurrentStep(currentStep + 1));
    }
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Personal Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          labelText="First Name"
          name="firstName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="Last Name"
          name="lastName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="Phone Number"
          name="phone"
          register={register}
          errors={errors}
          className="w-full"
        />
      </div>
      <NavButtons />
    </form>
  );
}
