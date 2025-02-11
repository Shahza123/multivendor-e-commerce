import FormHeader from "@/components/backoffice/FormHeader";
// import TextInput from "@/components/FormInputs/TextInput";
// import ImageInput from "@/components/FormInputs/ImageInput";
// import ToogleInput from "@/components/FormInputs/ToogleInput";
// import SubmitButton from "@/components/FormInputs/SubmitButton";
// import TextareaInput from "@/components/FormInputs/TextAreainput";
// import { useRouter } from "next/navigation";
// import { makePostRequest } from "@/lib/apiRequest";

import NewFarmerForm from "@/components/backoffice/NewFarmerForm";
export default async function NewFarmer() {
  return (
    <div>
      <FormHeader title="New Farmer" />
      <NewFarmerForm />
    </div>
  );
}
