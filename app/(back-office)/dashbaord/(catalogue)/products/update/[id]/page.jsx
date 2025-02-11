import React from "react";
import NewProductForm from "@/components/backoffice/NewProductForm";
import { getData } from "@/lib/getData";
import FormHeader from "@/components/backoffice/FormHeader";
export default async function UpdateProductForm({ params: { id } }) {
  const products = await getData(`products/${id}`);
  // console.log("product by id is coming here", products);

  // Fetch categories and farmers
  const categoriesData = await getData("categories");
  const usersData = await getData("users");

  // Filter for farmers
  const farmerData = usersData.filter((user) => user.role === "FARMER");

  // Map the farmers and categories into the correct format
  const farmers = farmerData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name,
    };
  });

  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return (
    <div>
      <FormHeader title="Update Product" />
      <NewProductForm
        categories={categories}
        farmers={farmers}
        updateProduct={products}
      />
    </div>
  );
}
