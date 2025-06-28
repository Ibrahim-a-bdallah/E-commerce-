import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import categoriesReducer from "./categories/categoriesSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    products: productsReducer,
    categories: categoriesReducer,
  },
});

export default store;
