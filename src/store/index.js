import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import categoriesReducer from "./categories/categoriesSlice";
import popupReducer from "./popBob/popBobSlice";
import cartreducer from "./cart/cartSlice";
import carouselReducer from "./carouselProducts/carouselProductsSlice";
import categoriesProductsReducer from "./categoryProducts/categoryProductsSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    products: productsReducer,
    categories: categoriesReducer,
    popup: popupReducer,
    cart: cartreducer,
    carousel: carouselReducer,
    categoriesProducts: categoriesProductsReducer,
  },
});

export default store;
