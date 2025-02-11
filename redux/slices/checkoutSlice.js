const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  currentStep: 1,
  checkoutFormData: {},
};
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateCheckOutFormData: (state, action) => {
      state.checkoutFormData = {
        ...state.checkoutFormData,
        ...action.payload,
      };
    },
  },
});
export const { setCurrentStep, updateCheckOutFormData } = checkoutSlice.actions;
export default checkoutSlice.reducer;
