//Create a slice
//create a reducer
//export the reducer and reducers
import { createSlice } from "@reduxjs/toolkit";
//get initial State from local Storage if available
// const initialState = JSON.parse(localStorage.getItem("cart")) || [];
const initialState =
  (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart"))) ||
  [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //your logic for add to cart
      const { id, title, salePrice, imageUrl,userId:vendorId} = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        const newItem = { id, title, salePrice, qty: 1, imageUrl,vendorId };
        state.push(newItem);
        //update local storage with the new state
        if (typeof window !== "undefined")
          localStorage.setItem("cart", JSON.stringify([...state, newItem]));
      }
    },
    removeFromCart: (state, action) => {
      //your logic for remove to cart
      const cartId = action.payload;
      const newState = state.filter((item) => item.id !== cartId);
      // upadte the local stroage with the new state
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(newState));
      }
      return newState;
    },
    incrementQty: (state, action) => {
      //your logic for increment to qty
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
