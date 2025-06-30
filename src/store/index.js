import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import categoriesReducer from "./categories/categoriesSlice";
import popupReducer from "./popBob/popBobSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    products: productsReducer,
    categories: categoriesReducer,
    popup: popupReducer,
  },
});

export default store;
