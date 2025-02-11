import React from "react";
import NewCouponForm from "@/components/backoffice/Forms/NewCouponForm";
import FormHeader from "@/components/backoffice/FormHeader";
import { getData } from "@/lib/getData";
export default async function updateCoupon({ params: { id } }) {
  const coupon = await getData(`coupons/${id}`);
  //   console.log("coupons daat by id is coming here", coupon);

  return (
    <>
      <FormHeader title="Update Coupon" />
      <NewCouponForm updateCoupon={coupon} />
    </>
  );
}
