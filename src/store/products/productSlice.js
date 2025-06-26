// Create the slice and pass in the initial state

import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./actGetProduct";

const initialState = {
  product: [],
  loading: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.loading = "succeeded";
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "success";
      state.product = action.payload;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

// Export the generated reducer function
export default productSlice.reducer;
