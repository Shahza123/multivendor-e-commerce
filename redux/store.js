//create the store
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import checkoutSlice from "@/redux/slices/checkoutSlice";
export const store = configureStore({
  reducer: {
    //slices go here
    cart: cartSlice,
    checkout: checkoutSlice,
  },
});
// console.log("cehckout in store is ",checkout);