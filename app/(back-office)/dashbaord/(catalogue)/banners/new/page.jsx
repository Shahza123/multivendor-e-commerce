"use client";
import NewBannerForm from "@/components/backoffice/Forms/NewBannerForm";
import FormHeader from "@/components/backoffice/FormHeader";
export default function NewBanner() {
  return (
    <div>
      <FormHeader title="Banners" />
      <NewBannerForm />
    </div>
  );
}
