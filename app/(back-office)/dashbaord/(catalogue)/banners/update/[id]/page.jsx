import React from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import { getData } from "@/lib/getData";
import NewBannerForm from "@/components/backoffice/Forms/NewBannerForm";
export default async function UpdateBanner({ params: { id } }) {
  console.log("am getting the coupon id in a props", id);

  const banner = await getData(`banners/${id}`);

  return (
    <div>
      <FormHeader title="Update Banner" />
      <NewBannerForm UpdateBanner={banner} />
    </div>
  );
}
