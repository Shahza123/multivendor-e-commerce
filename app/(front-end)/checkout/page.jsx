import Steps from "@/components/checkout/Steps";
import CartBanner from "@/components/checkout/CartBanner";
import StepForm from "@/components/checkout/StepForm";

export default function page() {
  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Shipping Details" },
    { number: 3, title: "Payment Method" },
    { number: 4, title: "Order Summary" },
  ];

  return (
    <div className="bg-slate-200 dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl my-6 mx-auto border border-slate-700 p-6 rounded-lg">
        {/* Steps Component */}
        <Steps steps={steps} />

        {/* Forms */}
        <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {/* {banner} */}
          <CartBanner />
          {/* {form} */}
          <StepForm />
        </div>
      </div>
    </div>
  );
}
