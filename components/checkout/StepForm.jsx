"use client";
import React from "react";
import PersonalDetailsForm from "@/components/checkout/stepsForm/PersonalDetailsForm";
import PaymentMethod from "./stepsForm/PaymentMethod";
import OrderSummary from "./stepsForm/OrderSummary";
import ShippingDetailsForm from "@/components/checkout/stepsForm/ShipingDetailsForm";
import { useSelector } from "react-redux";

export default function StepForm() {
  const currentStep = useSelector((store) => store.checkout.currentStep);
  console.log("currentStep is coming here", currentStep);
  function renderFormByStep(step) {
    if (step === 1) {
      return <PersonalDetailsForm />;
    } else if (step === 2) {
      return <ShippingDetailsForm />;
    } else if (step === 3) {
      return <PaymentMethod />;
    } else if (step === 4) {
      return <OrderSummary />;
    }
  }
  return <div>{renderFormByStep(currentStep)}</div>;
}
