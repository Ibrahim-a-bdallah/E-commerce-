import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    products: productsReducer,
  },
});

export default store;
