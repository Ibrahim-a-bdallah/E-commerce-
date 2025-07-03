import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import categoriesReducer from "./categories/categoriesSlice";
import popupReducer from "./popBob/popBobSlice";
import { cartSlice } from "./cart/cartSlice"

const store = configureStore({
  reducer: {
    // Add your reducers here
    products: productsReducer,
    categories: categoriesReducer,
    popup: popupReducer,
    [cartSlice.name] : cartSlice.reducer
  },
});



export default store;
