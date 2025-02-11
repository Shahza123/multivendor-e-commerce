"use client";
import TextInput from "@/components/FormInputs/TextInput";
import NavButtons from "@/components/checkout/NavButtons";

import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Circle, Truck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateCheckOutFormData,
} from "@/redux/slices/checkoutSlice";

export default function ShippingDetailsForm() {
  const dispatch = useDispatch();

  const currentStep = useSelector((store) => store.checkout.currentStep);
  const existingFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );
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
  const initialShippingCost = existingFormData.shippingCost || "";
  const [shippingCost, setShippingCost] = useState(initialShippingCost);

  console.log("shipping cost here", shippingCost);

  async function processData(data) {
    data.shippingCost = shippingCost;
    //update the checkout data
    dispatch(updateCheckOutFormData(data));
    //update the current step
    dispatch(setCurrentStep(currentStep + 1));
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Shipping Details Form
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          labelText="Street Address"
          name="streetAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="City"
          name="city"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="Country"
          name="country"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          labelText="District"
          name="district"
          register={register}
          errors={errors}
          className="w-full"
        />
        {/* Shipping Cost */}

        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Shipping Cost?
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <input
                // {...register("shippingCostBig", { required: true })}
                type="radio"
                id="hosting-big"
                name="hosting"
                value="20"
                className="hidden peer"
                onChange={(e) => setShippingCost(e.target.value)}
              />
              <label
                for="hosting-big"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* {design} */}
                <div className="flex gap-2  items-center">
                  <Truck className="w-8  h-8  ms-3 flex-shrink-0" />
                  <div className="">
                    <p>UPS</p>
                    <p>Delivery Cost:$8</p>
                  </div>
                </div>
                <Circle className="w-5  h-5  ms-3 flex-shrink-0" />
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="8"
                className="hidden peer"
                required
                onChange={(e) => setShippingCost(e.target.value)}
                // {...register("shippingCostSmall", { required: true })}
              />
              <label
                for="hosting-small"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2  items-center">
                  <Truck className="w-8  h-8  ms-3 flex-shrink-0" />
                  <div className="">
                    <p>UPS</p>
                    <p>Delivery Cost:$20</p>
                  </div>
                  <Circle className="w-5  h-5  ms-3 flex-shrink-0" />
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <NavButtons />
    </form>
  );
}
